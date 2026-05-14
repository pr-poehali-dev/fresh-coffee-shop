interface BgBeansProps {
  seed?: number;
  count?: number;
}

function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

export default function BgBeans({ seed = 1, count = 14 }: BgBeansProps) {
  const rand = rng(seed * 9999);

  const beans = Array.from({ length: count }, (_, i) => ({
    x: rand() * 100,
    y: rand() * 100,
    ry: 18 + rand() * 30,
    rotate: rand() * 360,
    opacity: 0.15 + rand() * 0.22,
    light: i % 3 !== 0,
  }));

  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {beans.map((b, i) => {
        const rx = b.ry * 0.58;
        const fill = b.light ? "#d4923a" : "#5a2a08";
        const stroke = b.light ? "#f5a832" : "#a06020";
        const groove = b.light ? "#8a5010" : "#1e0d04";
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${b.x}%`,
              top: `${b.y}%`,
              transform: `translate(-50%, -50%) rotate(${b.rotate}deg)`,
              opacity: b.opacity,
            }}
          >
            <svg
              width={rx * 2 + 4}
              height={b.ry * 2 + 4}
              viewBox={`0 0 ${rx * 2 + 4} ${b.ry * 2 + 4}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx={rx + 2} cy={b.ry + 2} rx={rx} ry={b.ry} fill={fill} />
              <ellipse cx={rx + 2} cy={b.ry + 2} rx={rx} ry={b.ry} fill="none" stroke={stroke} strokeWidth="1.8" />
              <line x1={rx + 2} y1={3} x2={rx + 2} y2={b.ry * 2 + 1} stroke={groove} strokeWidth="2" />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
