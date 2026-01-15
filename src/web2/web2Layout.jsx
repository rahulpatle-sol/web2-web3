import Hero from './components/Hero';
import Vision from './components/Vision';
import SkillVault from './components/SkillVault';
import TheLab from './components/TheLab';
import Capabilities from './components/Capabilities';

export default function Web2Layout() {
  return (
    <div className="w-full">
      <Hero />
      <Vision />
      <SkillVault />
      <TheLab />
      <Capabilities />
      <footer className="py-20 bg-black text-center font-mono text-xs text-gray-600 tracking-widest">
        © 2024 PORTFOLIO_V2 // BUILT WITH DEGEN ENERGY
      </footer>
    </div>
  );
} 