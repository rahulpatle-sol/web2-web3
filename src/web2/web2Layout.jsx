import HeroPremium from './components/Hero';
import Vision from './components/Vision';
import SkillVault from './components/SkillVault';
import TheLab from './components/TheLab';
import Capabilities from './components/Capabilities';
import Experience from './components/Experience';
import Bridge from '../shared/Bridge';
import Footer from '../shared/Footer';

export default function Web2Layout() {
  return (
    <div className="w-full">
      <HeroPremium />
      <Vision />
      <Experience/>
      <SkillVault />
      <TheLab />

      <Capabilities />
      <Bridge/>

   <Footer/>
    </div>
  );
} 