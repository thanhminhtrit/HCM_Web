import { Link } from "react-router";
import { ChevronDown } from "lucide-react";
import { BronzeDrumIcon } from "../components/BronzeDrumIcon";
import { motion } from "motion/react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1770234848905-a80f218c4c2f?w=1600&q=80')`,
          filter: 'blur(2px)'
        }}
      />
      <div className="absolute inset-0 bg-ivory/85" />

      {/* Bronze drum background motif */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <BronzeDrumIcon className="w-[600px] h-[600px] text-burgundy" />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="text-burgundy text-sm md:text-base mb-4 tracking-wide uppercase">
            Tư tưởng Hồ Chí Minh · Chương 6 · Phần Văn hóa
          </p>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-burgundy mb-8 leading-tight">
            Văn hóa soi đường<br />cho quốc dân đi
          </h1>

          <Link
            to="/ban-do"
            className="inline-flex items-center gap-2 bg-burgundy text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-ochre hover:text-ink transition-all hover:shadow-lg hover:scale-105"
          >
            Khám phá Bản đồ Di sản
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="relative pb-8 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-burgundy/50"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </div>
    </div>
  );
}
