import { motion } from 'framer-motion';

export default function Bridge() {
  return (
    <section className="h-[50vh] flex flex-col items-center justify-center bg-white text-black">
      <p className="font-mono text-xs uppercase tracking-[0.5em] mb-4">End of Centralized Space</p>
      <div className="h-[100px] w-[1px] bg-black mb-4"></div>
      <h2 className="text-2xl font-clash font-bold italic">Curious about the future?</h2>
      <p className="text-gray-500 font-mono mt-2 animate-pulse text-[10px]">Switch Universe at the bottom center</p>
    </section>
  );
}