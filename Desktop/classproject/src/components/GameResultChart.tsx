import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-07-08', predict: 1, actual: 0 },
  { date: '2024-07-09', predict: 1, actual: 1 },
  // ...
];

const GameResultChart: React.FC = () => (
  <div style={{ marginTop: 40 }}>
    <h2>예측 vs 실제 결과 (정확도)</h2>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="predict" fill="#4e79a7" name="예측 적중" />
        <Bar dataKey="actual" fill="#e15759" name="실제 결과" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default GameResultChart; 