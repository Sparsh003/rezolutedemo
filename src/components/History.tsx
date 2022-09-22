import { useSelector } from "react-redux";
import CardsItem from "./CardsItem";

const History = () => {
  const val = useSelector((state: any) => {
    return state.reducers.data;
  });

  return (
    <div className="page-width">
      <div className="margin-bottom">
        <h1>Search History</h1>
        <div>{val && <CardsItem data={val} />}</div>
      </div>
    </div>
  );
};

export default History;
