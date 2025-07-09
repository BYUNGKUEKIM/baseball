import React, { useEffect, useState } from 'react';
import PredictionTable from './components/PredictionTable';
import TeamStats from './components/TeamStats';
import GameResultChart from './components/GameResultChart';
import FeatureBarChart from './components/FeatureBarChart';
import GamePreviewCard from './components/GamePreviewCard';
import PredictionConclusion from './components/PredictionConclusion';
import './components/GamePreviewCard.css';
import { API_BASE_URL } from "./api"; // 추가

// 타입 정의 ... (생략)

const App: React.FC = () => {
  const [previews, setPreviews] = useState<Preview[]>([]);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch(`${API_BASE_URL}/games/today`).then(res => res.json()),
      fetch(`${API_BASE_URL}/predict/today`).then(res => res.json()),
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

  // ... 이하 동일
};

export default App;
