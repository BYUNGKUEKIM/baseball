import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../api";

type Prediction = {
  date: string;
  home: string;
  away: string;
  predict_winner: string;
  predict_score: Record<string, number>;
};

function PredictionTable() {
  const [data, setData] = useState<Prediction[] | null>(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/predict/today`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <div>로딩중...</div>;

  return (
    <div>
      {data.map((game, idx) => (
        <div key={idx}>
          <div>{game.date} {game.home} vs {game.away}</div>
          <div>예측 승자: {game.predict_winner}</div>
          <div>예측 점수: {Object.entries(game.predict_score).map(([team, score]) => (
            <span key={team}>{team}: {score} </span>
          ))}</div>
        </div>
      ))}
    </div>
  );
}

export default PredictionTable; 
