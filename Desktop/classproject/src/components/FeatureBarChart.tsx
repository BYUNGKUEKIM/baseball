import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: '선발투수', value: 35 },
  { name: '팀 최근성적', value: 25 },
  { name: '타율', value: 20 },
  { name: '상대전적', value: 15 },
  { name: '홈/원정', value: 5 },
];

const colors = ['#4e79a7', '#f28e2b', '#e15759', '#76b7b2', '#59a14f'];

const FeatureBarChart: React.FC = () => (
  <div style={{ marginTop: 40 }}>
    <h2>예측 근거(피처 중요도 그래프)</h2>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} layout="vertical" margin={{ left: 40, right: 40 }}>
        <XAxis type="number" domain={[0, 40]} hide />
        <YAxis dataKey="name" type="category" width={120} />
        <Tooltip formatter={(v: number) => `${v}%`} />
        <Bar dataKey="value" fill="#4e79a7">
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default FeatureBarChart; 