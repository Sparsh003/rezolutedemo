import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { Historydaya } from "../types/Type";
import { useDispatch } from "react-redux";
import { User } from "../Redux/action";
import Button from "@mui/material/Button";

const CardsItem = ({ data }: { data: Historydaya[] }) => {
  const [counter, setcounter] = useState<number>(10);
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const handleClick = (name: Historydaya) => {
    navigate(`/${name.username.login}`);
    let d: Date = new Date();
    var dd = String(d.getDate()).padStart(2, "0");
    var mm = String(d.getMonth() + 1).padStart(2, "0");
    var yyyy = d.getFullYear();
    let today = mm + "/" + dd + "/" + yyyy;
    let time: string =
      d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0");
    dispatch(User(name.username, today, time));
  };

  return (
    <>
      {data.slice(0, counter).map((data: Historydaya, index: number) => {
        return (
          <div key={index}>
            <Card
              sx={{ width: { sm: 600, xs: 300, lg: 900 }, marginTop: 5 }}
              onClick={() => {
                handleClick(data);
              }}
            >
              <CardActionArea>
                <CardContent>
                  <div className="flex">
                    <Avatar
                      alt="Remy Sharp"
                      src={`${data?.username?.avatar_url}`}
                      sx={{ width: 56, height: 56 }}
                    />
                    <div className="flex">
                      <p>{data.date}</p>
                      <p className="margin-left">{data.time}</p>
                    </div>
                  </div>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.username.login}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.username.bio}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        );
      })}
      {data.length > 10 && data.length > counter && (
        <div className="margin-top-bottom">
          <Button
            variant="contained"
            sx={{ height: 40, marginLeft: 2, float: "right" }}
            onClick={() => {
              setcounter(counter + 10);
            }}
          >
            Load More
          </Button>
        </div>
      )}
    </>
  );
};

export default CardsItem;
