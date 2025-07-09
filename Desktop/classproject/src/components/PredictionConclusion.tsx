import React from 'react';

type Prediction = {
  home: string;
  away: string;
  predict_winner: string;
  predict_score: Record<string, number>;
  reason?: string;
};

type Props = {
  predictions: Prediction[];
};

const PredictionConclusion: React.FC<Props> = ({ predictions }) => {
  if (!predictions.length) return null;
  return (
    <div style={{ background: '#f7f9fa', borderRadius: 16, padding: 24, margin: '32px auto', maxWidth: 600, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
      <h2 style={{ color: '#4e79a7', marginBottom: 16 }}>오늘의 결론</h2>
      <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>
        1순위: 오늘은 <span style={{ color: '#4e79a7' }}>{predictions[0].predict_winner}</span>팀이 {predictions[0].home} vs {predictions[0].away} 경기에서 {predictions[0].predict_score[predictions[0].home]}대{predictions[0].predict_score[predictions[0].away]}로 이길 것 같습니다.
      </div>
      <div style={{ color: '#555', marginBottom: 10 }}>근거: 최근 성적, 선발투수, 타율, 상대전적 등에서 {predictions[0].predict_winner}팀이 우세합니다.</div>
      {predictions[1] && (
        <div style={{ fontSize: 16, marginBottom: 8 }}>
          2순위: {predictions[1].predict_winner}팀이 {predictions[1].predict_score[predictions[1].home]}대{predictions[1].predict_score[predictions[1].away]}로 이길 가능성도 있습니다.
        </div>
      )}
      {predictions[2] && (
        <div style={{ fontSize: 16, color: '#e15759' }}>
          반대 시나리오: {predictions[2].predict_winner}팀이 {predictions[2].predict_score[predictions[2].home]}대{predictions[2].predict_score[predictions[2].away]}로 이길 수도 있습니다.
        </div>
      )}
    </div>
  );
};

export default PredictionConclusion; 