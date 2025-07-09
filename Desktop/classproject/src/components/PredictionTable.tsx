import React, { useEffect, useState } from 'react';

type Prediction = {
  date: string;
  home: string;
  away: string;
  predict_winner: string;
  predict_score: Record<string, number>;
};

const PredictionTable: React.FC = () => {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/predict/today')
      .then(res => res.json())
      .then(data => {
        setPredictions(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (!predictions.length) return <div>예측 데이터가 없습니다.</div>;

  return (
    <table border={1} style={{ margin: 'auto', marginTop: 40 }}>
      <thead>
        <tr>
          <th>날짜</th>
          <th>홈팀</th>
          <th>원정팀</th>
          <th>예상 승리팀</th>
          <th>예상 점수</th>
        </tr>
      </thead>
      <tbody>
        {predictions.map((p, i) => (
          <tr key={i}>
            <td>{p.date}</td>
            <td>{p.home}</td>
            <td>{p.away}</td>
            <td>{p.predict_winner}</td>
            <td>
              {Object.entries(p.predict_score).map(([team, score]) => (
                <span key={team}>{team}: {score} </span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PredictionTable; 