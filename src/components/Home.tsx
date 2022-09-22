import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards";
import axios from "axios";
import { User, resetRender } from "../Redux/action";

const Home = () => {
  const [search, setsearch] = useState<String>("");
  const [data, setdata] = useState(undefined);
  const [repos, setrepos] = useState([]);
  const dispatch: any = useDispatch();
  const firstRender = useSelector((state: any) => {
    return state.reducers.firstRender;
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearch(e.target.value);
  };

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let d: Date = new Date();
    var dd = String(d.getDate()).padStart(2, "0");
    var mm = String(d.getMonth() + 1).padStart(2, "0");
    var yyyy = d.getFullYear();
    let today = mm + "/" + dd + "/" + yyyy;
    let time: string =
      d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0");
    axios
      .get(`https://api.github.com/users/${search}`)
      .then((res) => {
        setdata(res.data);
        dispatch(resetRender(false));
        dispatch(User(res.data, today, time));
      })
      .catch((err) => {
        toast.error(err.message);
        setdata(undefined);
      });

    axios
      .get(`https://api.github.com/users/${search}/repos`)
      .then((res) => {
        setrepos(res.data);
      })
      .catch((err) => {
        toast.error(err.message);
        setdata(undefined);
      });
    setsearch("");
  };

  useEffect(() => {
    dispatch(resetRender(true));
  }, []);

  return (
    <div className="custom page-width">
      <ToastContainer />

      <div>
        <div className="center-heading">
          <h1> GitHub User Search</h1>
        </div>
        <form>
          <TextField
            sx={{ width: { sm: 400, lg: 900, md: 700, xs: 200 } }}
            label="Search"
            placeholder="Enter username"
            value={search}
            name="search"
            onChange={handleChange}
          />
          <Tooltip title="Search">
            <Button
              variant="contained"
              onClick={handleSearch}
              sx={{ height: 50, marginLeft: 2 }}
              type="submit"
            >
              <AiOutlineSearch className="icons-1" />
            </Button>
          </Tooltip>
        </form>
        {!firstRender && (
          <div>
            {data ? (
              <Cards data={data} repos={repos} />
            ) : (
              <Typography className="not-found">USER NOT FOUND</Typography>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
