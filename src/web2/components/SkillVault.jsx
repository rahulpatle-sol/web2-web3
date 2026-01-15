import { motion } from 'framer-motion';

const beliefs = [
  { id: "01", title: "PERFORMANCE", desc: "If it takes more than 100ms, it's a legacy app. I build for speed." },
  { id: "02", title: "IMMERSION", desc: "Websites are experiences, not documents. 3D is the new standard." },
  { id: "03", title: "OWNERSHIP", desc: "Web3 isn't just a trend; it's the financial layer of the internet." }
];

export default function Vision() {
  return (
    <section className="min-h-screen w-full bg-white p-10 flex flex-col justify-center">
      <h3 className="text-black font-clash text-5xl md:text-8xl font-black mb-16 uppercase italic">
        The Vision //
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        {beliefs.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ scale: 0.95 }}
            className="p-8 border-4 border-black group hover:bg-black transition-all duration-300"
          >
            <span className="text-4xl font-black text-blue-600 font-clash">{item.id}</span>
            <h4 className="text-3xl font-black text-black group-hover:text-white mt-4 font-clash uppercase">
              {item.title}
            </h4>
            <p className="mt-4 text-gray-600 group-hover:text-gray-300 font-mono text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}