import React, { useEffect, useState } from 'react';
import PredictionTable from './components/PredictionTable';
import TeamStats from './components/TeamStats';
import GameResultChart from './components/GameResultChart';
import FeatureBarChart from './components/FeatureBarChart';
import GamePreviewCard from './components/GamePreviewCard';
import PredictionConclusion from './components/PredictionConclusion';
import './components/GamePreviewCard.css';

// 타입 정의
interface Preview {
  home: string;
  away: string;
  homePitcher: string;
  awayPitcher: string;
  homeRecent: string;
  awayRecent: string;
  homeAvg: number;
  awayAvg: number;
  homeERA: number;
  awayERA: number;
}
interface Prediction {
  home: string;
  away: string;
  predict_winner: string;
  predict_score: Record<string, number>;
  reason?: string;
}

const App: React.FC = () => {
  const [previews, setPreviews] = useState<Preview[]>([]);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch('http://localhost:9001/games/today').then(res => res.json()),
      fetch('http://localhost:9001/predict/today').then(res => res.json()),
    ])
      .then(([games, preds]) => {
        // games에서 프리뷰 데이터 생성 (실제 API에 맞게 가공 필요)
        const previews: Preview[] = games.map((g: any) => ({
          home: g.home,
          away: g.away,
          homePitcher: g.home_pitcher || '-',
          awayPitcher: g.away_pitcher || '-',
          homeRecent: g.home_recent || '-',
          awayRecent: g.away_recent || '-',
          homeAvg: g.home_avg || 0,
          awayAvg: g.away_avg || 0,
          homeERA: g.home_era || 0,
          awayERA: g.away_era || 0,
        }));
        setPreviews(previews);
        setPredictions(preds);
        setLoading(false);
      })
      .catch(e => {
        setError('API 데이터를 불러오지 못했습니다.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ textAlign: 'center', marginTop: 80, fontSize: 22 }}>로딩 중...</div>;
  if (error) return <div style={{ color: 'red', textAlign: 'center', marginTop: 80 }}>{error}</div>;

  return (
    <div style={{ background: '#f4f6fa', minHeight: '100vh', paddingBottom: 40 }}>
      <h1 style={{ textAlign: 'center', color: '#222', marginTop: 32, fontWeight: 800, fontSize: 32, letterSpacing: -1 }}>KBO 프로야구 AI 예측</h1>
      {previews.map((preview, i) => (
        <GamePreviewCard key={i} preview={preview} />
      ))}
      <PredictionTable />
      <TeamStats />
      <GameResultChart />
      <FeatureBarChart />
      <PredictionConclusion predictions={predictions} />
    </div>
  );
};

export default App; 