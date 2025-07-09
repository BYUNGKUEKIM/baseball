import React from 'react';
import './GamePreviewCard.css';

type Preview = {
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
};

const GamePreviewCard: React.FC<{ preview: Preview }> = ({ preview }) => (
  <div className="preview-card">
    <div className="teams-row">
      <div className="team-name home">{preview.home}</div>
      <span className="vs">vs</span>
      <div className="team-name away">{preview.away}</div>
    </div>
    <div className="preview-grid">
      <div>선발투수</div>
      <div>{preview.homePitcher}</div>
      <div>{preview.awayPitcher}</div>
      <div>최근 5경기</div>
      <div>{preview.homeRecent}</div>
      <div>{preview.awayRecent}</div>
      <div>타율</div>
      <div>{preview.homeAvg}</div>
      <div>{preview.awayAvg}</div>
      <div>ERA</div>
      <div>{preview.homeERA}</div>
      <div>{preview.awayERA}</div>
    </div>
  </div>
);

export default GamePreviewCard; 