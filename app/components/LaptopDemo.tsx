'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function LaptopDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. Camera Animation:
  // Perfectly straight on. Tilts up slightly as it opens.
  const parentRotateX = useTransform(scrollYProgress, [0, 0.55, 1], [-20, -5, -5]);
  const parentRotateY = useTransform(scrollYProgress, [0, 1], [0, 0]); // Always perfectly straight front

  // 2. Lid Hinge: Opens fast but slightly smoother than before. Fully open by 55% scroll.
  const lidRotateX = useTransform(scrollYProgress, [0, 0.55, 1], [-90, 0, 0]);

  // Use vw to scale responsively (reduced max scale so keyboard doesn't cut off)
  const scale = useTransform(scrollYProgress, [0, 0.55, 1], [0.75, 0.85, 0.85]);
  // Start high up when closed, move down when opening
  const parentY = useTransform(scrollYProgress, [0, 0.55, 1], ["-15vh", "0vh", "0vh"]);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-slate-50 border-t border-slate-100">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
        style={{ perspective: 1800 }}>

        {/* Global 3D Wrapper (Camera) */}
        <motion.div
          className="relative w-full aspect-[16/10] flex-shrink-0"
          style={{
            maxWidth: 'min(85vw, 110vh)', // Constrained height projection so keyboard base fits
            scale,
            rotateX: parentRotateX, // Tilts up/down
            rotateY: parentRotateY, // Rotates from side to front
            y: parentY,
            transformStyle: "preserve-3d"
          }}
        >
          {/* ========================================================
              LID (Screen Container)
              Hinges from the bottom. 
              Local Z points towards the user when upright (0deg).
              When closed (-90deg), local -Z points UP (-Y).
             ======================================================== */}
          <motion.div
            className="absolute inset-0 origin-bottom"
            style={{
              rotateX: lidRotateX,
              transformStyle: "preserve-3d"
            }}
          >
            {/* --- Front Screen Face ---  */}
            {/* translateZ(-2px) moves it UP (-Y) when closed. so it sits AT Y = -2px (higher). */}
            <div
              className="absolute inset-0 bg-black rounded-t-xl md:rounded-t-2xl border-[4px] border-black border-b-[24px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] overflow-hidden"
              style={{ transform: "translateZ(-2px)", backfaceVisibility: "hidden" }}
            >
              {/* Screen Content - Actual Site Iframe */}
              <div className="w-full h-full bg-white relative overflow-hidden">
                {/* Browser UI Bar (Optional but helps realism) */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-slate-100 border-b border-slate-200 z-50 flex items-center px-2 gap-1.5">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="flex-1 bg-white rounded h-3.5 mx-2 border border-slate-200 flex items-center px-2">
                    <div className="text-[6px] text-slate-400 truncate">rakuhakokit.vercel.app</div>
                  </div>
                </div>

                {/* Animated Iframe Container */}
                {/* 
                  We load the actual site in a very tall iframe and animate its position.
                  The scale ensures it fits the laptop screen resolution.
                */}
                <motion.div 
                  className="w-full absolute top-6"
                  style={{ height: "4000px", transformOrigin: "top center" }}
                  animate={{ y: ["0%", "-80%"] }}
                  transition={{ 
                    duration: 30, 
                    repeat: Infinity, 
                    ease: "linear",
                    repeatType: "loop"
                  }}
                >
                  <iframe 
                    src="https://rakuhakokit-54w78bp96-genly-projects.vercel.app/" 
                    className="w-[1280px] h-full border-none pointer-events-none"
                    style={{ 
                      transform: "scale(0.35)", // Initial guess for scaling down 1280px to laptop width
                      transformOrigin: "top left",
                      width: "300%", // Compensate for scale(0.35) roughly 1/0.35
                      height: "100%"
                    }}
                    title="Rakuhako Kit System"
                  />
                </motion.div>

                {/* Glass reflection overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-white/20 z-40"></div>
              </div>
            </div>

            {/* --- Back Silver Cover --- */}
            {/* translateZ(2px) moves it DOWN (+Y) when closed. so it sits AT Y = +2px (lower). */}
            <div
              className="absolute inset-[-2px] bg-[#d1d5db] rounded-t-xl md:rounded-t-2xl flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]"
              style={{ transform: "translateZ(2px) rotateY(180deg)", backfaceVisibility: "hidden" }}
            >
              {/* Circular Logo */}
              <div className="w-16 h-16 rounded-full bg-[#e2e8f0] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_1px_1px_rgba(255,255,255,1)]"></div>
            </div>

            {/* --- Screen block thickness edges --- */}
            <div
              className="absolute top-0 left-0 right-0 h-[4px] bg-[#9ca3af] origin-top"
              style={{ transform: "rotateX(-90deg) translateZ(2px)", backfaceVisibility: "hidden" }}
            ></div>
            <div
              className="absolute top-0 bottom-0 left-0 w-[4px] bg-[#9ca3af] origin-left"
              style={{ transform: "rotateY(-90deg) translateZ(2px)", backfaceVisibility: "hidden" }}
            ></div>
            <div
              className="absolute top-0 bottom-0 right-0 w-[4px] bg-[#9ca3af] origin-right"
              style={{ transform: "rotateY(90deg) translateZ(2px)", backfaceVisibility: "hidden" }}
            ></div>
          </motion.div>

          {/* ========================================================
              BASE (Keyboard Container)
              Stems from the hinge line perfectly.
              RotateX(90deg) puts it flat on the desk pointing AT the user (+Z).
              Its front face points UP (-Y).
             ======================================================== */}
          <div
            className="absolute top-full inset-x-[1px] aspect-[16/10] origin-top shadow-[0_40px_50px_rgba(0,0,0,0.6)]"
            style={{
              transform: "rotateX(90deg)", // Lays flat pointing towards user
              transformStyle: "preserve-3d"
            }}
          >
            {/* --- Keyboard Surface (Facing UP) --- 
                translateZ(-3px) goes UP (-Y) normally. But because of rotateX(90deg), local -Z goes to global DOWN (+Y).
                So translateZ(-3px) puts it AT Y = +3px (lower on the desk).
                Screen is AT Y = -2px. So Screen sits fully on top of Keyboard!
            */}
            <div
              className="absolute inset-0 bg-[#cbd5e1] rounded-b-xl md:rounded-b-2xl border-x border-[#94a3b8] overflow-hidden"
              style={{ transform: "translateZ(-3px)", backfaceVisibility: "hidden" }}
            >
              {/* Keyboard keys indentation */}
              <div className="absolute top-[8%] left-[6%] right-[6%] h-[48%] bg-[#1a1a1a] rounded-[4px] shadow-[inset_0_3px_6px_rgba(0,0,0,0.5)] flex flex-col gap-[2%] p-[2%]">
                {[...Array(6)].map((_, r) => (
                  <div key={r} className="flex gap-[1.5%] flex-1">
                    {[...Array(r === 0 ? 14 : r === 5 ? 7 : 15)].map((_, c) => (
                      <div key={c} className={`bg-[#2c2c2c] rounded-[2px] shadow-sm border-b border-black flex-1 ${r === 5 && c === 3 ? "flex-[4]" : ""}`}></div>
                    ))}
                  </div>
                ))}
              </div>
              {/* Trackpad */}
              <div className="absolute top-[65%] left-[30%] right-[30%] h-[28%] bg-[#cbd5e1] rounded-[4px] md:rounded-md shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"></div>
              {/* Thumb notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[12%] h-[3%] bg-[#9ca3af] rounded-b-md shadow-inner"></div>
            </div>

            {/* --- Bottom Base Cover --- */}
            <div
              className="absolute inset-0 bg-[#9ca3af] rounded-b-xl md:rounded-b-2xl"
              style={{ transform: "translateZ(3px) rotateY(180deg)", backfaceVisibility: "hidden" }}
            ></div>

            {/* --- Keyboard block thickness edges --- */}
            <div
              className="absolute bottom-0 left-[2%] right-[2%] h-[6px] bg-[#94a3b8] shadow-inner origin-bottom"
              style={{ transform: "rotateX(90deg) translateZ(3px)", backfaceVisibility: "hidden" }}
            ></div>
            <div
              className="absolute top-0 bottom-0 left-0 w-[6px] bg-[#9ca3af] origin-left"
              style={{ transform: "rotateY(-90deg) translateZ(3px)", backfaceVisibility: "hidden" }}
            ></div>
            <div
              className="absolute top-0 bottom-0 right-0 w-[6px] bg-[#9ca3af] origin-right"
              style={{ transform: "rotateY(90deg) translateZ(3px)", backfaceVisibility: "hidden" }}
            ></div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
