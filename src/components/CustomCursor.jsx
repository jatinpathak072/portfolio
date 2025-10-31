import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-52 h-52 rounded-full pointer-events-none 
      bg-linear-to-br from-[#0e3f73cd] to-[#157decbd] blur-3xl opacity-70 
      z-9999 mix-blend-screen"
      style={{
        transform: `translate3d(${pos.x - 56}px, ${pos.y - 56}px, 0)`,
        transition: "none", // 💥 no animation delay at all
      }}
    ></div>
  );
}
