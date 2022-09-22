import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cards from "./Cards";

function Detail() {
  const { name } = useParams();
  const [data, setdata] = useState();
  const [repos, setrepos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${name}`)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => console.log(err.message));
    axios
      .get(`https://api.github.com/users/${name}/repos`)
      .then((res) => {
        setrepos(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [name]);

  return (
    <div className="page-width">

      <div>
        {/* <h1>GitHub Detail:</h1> */}
        <div>{data && <Cards data={data} repos={repos} />}</div>
      </div>
    </div>
  );
}

export default Detail;
