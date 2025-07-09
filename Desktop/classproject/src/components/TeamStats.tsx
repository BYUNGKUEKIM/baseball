import React, { useEffect, useState } from 'react';

type TeamStat = {
  name: string;
  recent: string;
};

const TeamStats: React.FC = () => {
  const [teams, setTeams] = useState<TeamStat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: 실제로는 API에서 팀별 최근 성적을 받아옴
    setTeams([
      { name: '두산', recent: '3승 2패' },
      { name: 'LG', recent: '4승 1패' },
      { name: '삼성', recent: '2승 3패' },
      { name: 'SSG', recent: '1승 4패' },
      // ...
    ]);
    setLoading(false);
  }, []);

  if (loading) return <div>로딩 중...</div>;

  return (
    <div style={{ marginTop: 40 }}>
      <h2>KBO 팀별 최근 5경기 성적</h2>
      <table border={1} style={{ margin: 'auto' }}>
        <thead>
          <tr>
            <th>팀</th>
            <th>최근 5경기</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, i) => (
            <tr key={i}>
              <td>{team.name}</td>
              <td>{team.recent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamStats; 