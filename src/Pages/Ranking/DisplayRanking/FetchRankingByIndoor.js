import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DisplayRankingafterFatching from "./DisplayRankingafterFatching";

const FetchRankingByIndoor = () => {
  const [ranking, setRanking] = useState([]);
  const location = useLocation();
  const { indoorName } = location.state;
  useEffect(() => {
    fetch("https://efutsal.onrender.com/ranking")
      .then((res) => res.json())
      .then((data) => {
        const fetchIndoorList = data.data.filter(
          (datas) => datas.indoorNameForRanking === indoorName
        );

        setRanking(fetchIndoorList);
      });
  }, [indoorName]);
  return (
    <div className="select_indoor_parent">
      <div className="container">
        <h4 className="text-center mb-5">Ranking for indoor {indoorName}</h4>
        <table class="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Player Email</th>
              <th>total Match</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((list) => (
              <DisplayRankingafterFatching
                list={list}
                key={list._id}
              ></DisplayRankingafterFatching>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FetchRankingByIndoor;
