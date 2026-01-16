import React, { useState, useEffect } from 'react';
import HeroPremium from './components/Hero';
import Vision from './components/Vision';
import SkillVault from './components/SkillVault';
import TheLab from './components/TheLab';
import Capabilities from './components/Capabilities';
import Experience from './components/Experience';
import Bridge from '../shared/Bridge';
import Footer from '../shared/Footer';
import Web2Loader from '../shared/Web2Loader';
import ProjectsPage from './components/Projects';

export default function Web2Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1.5s ka smooth delay taaki loader ki feel aaye
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Jab tak loading true hai, loader dikhao
  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white dark:bg-zinc-950">
        <Web2Loader />
      </div>
    );
  }

  // Final Render
  return (
    <div className="w-full">
      <HeroPremium />
      <Vision />
      <Experience />
      <SkillVault />
      <TheLab />
      
      <Capabilities />
<ProjectsPage />  
      <Bridge />
 
      <Footer />
    </div>
  );
}