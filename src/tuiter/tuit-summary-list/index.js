import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../services/tuits-thunks";

import tuitsArray from "./tuits.json";
import TuitSummaryItem from "./tuit-summary-item";

const TuitSummaryList = () => {
  const { tuits, loading } = useSelector((state) => state.tuits);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);

  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}

      {tuits &&
        tuits.map((tuit) => <TuitSummaryItem key={tuit._id} tuit={tuit} />)}
    </ul>
  );
};
export default TuitSummaryList;
