import { useEffect, useRef, useState } from "react";

export default function BuildMyApp() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const scratchingRef = useRef(false);

  const [showInstruction, setShowInstruction] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();

      const width = Math.round(rect.width);
      const height = Math.round(rect.height);

      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "#2D3F54";
      ctx.fillRect(0, 0, width, height);
    };

    resizeCanvas();

    const resizeObserver = new ResizeObserver(resizeCanvas);

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const handlePointerDown = (e) => {
    scratchingRef.current = true;

    setShowInstruction(false);

    e.currentTarget.setPointerCapture(e.pointerId);

    erase(e);
  };

  const handlePointerUp = (e) => {
    scratchingRef.current = false;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e) => {
    if (!scratchingRef.current) return;

    erase(e);
  };

  const erase = (e) => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext("2d");

    ctx.globalCompositeOperation = "destination-out";

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
  };

  return (
    <div
      ref={containerRef}
      className="
        relative
        w-full
        h-full
        min-h-0
        overflow-hidden
        rounded-4xl
        bg-(--charcoalBlue)
        border-4
        border-(--emerald)
        cursor-crosshair
      "
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      {/* Content underneath */}
      <div
        className="
          absolute
          inset-0
          p-8
          flex
          items-center
          justify-center
          bg-(--emerald)
          text-(--emeraldDepths)
          rounded-3xl
        "
      >
        <h3 className="text-6xl font-bold">Build My App</h3>
      </div>

      {/* Scratch layer */}
      <canvas
        ref={canvasRef}
        className="
          absolute
          inset-0
          block
        "
      />

      {/* Instruction */}
      {showInstruction && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10">
            <span className="text-md text-white">Hold & Drag</span>
          </div>
        </div>
      )}
    </div>
  );
}
