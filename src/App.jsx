import React from 'react';
import HomeFeed from './components/HomeFeed';
import DiscoverProfessions from './components/DiscoverProfessions';
import ProjectsRewards from './components/ProjectsRewards';
import BalloonChat from './components/BalloonChat';
import TeslaTutor from './components/TeslaTutor';
import FunButton from './components/FunButton';
import GlobalChallenges from './components/GlobalChallenges';
import CoolCompanies from './components/CoolCompanies';
import InvestorsCorner from './components/InvestorsCorner';
import VisitorCounter from './components/VisitorCounter';
import AISafetyTools from './components/AISafetyTools';

function App() {
  return (
    <div className="app">
      <HomeFeed />
      <DiscoverProfessions />
      <ProjectsRewards />
      <BalloonChat />
      <TeslaTutor />
      <FunButton />
      <GlobalChallenges />
      <CoolCompanies />
      <InvestorsCorner />
      <VisitorCounter />
      <AISafetyTools />
    </div>
  );
}

export default App;