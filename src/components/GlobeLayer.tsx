import Globe from "./Globe";

// GlobeLayer.tsx
export default function GlobeLayer() {
  return (
    <div
      className="
        absolute
        top-1/2
        right-[30%]         /* <-- moved inwards */
        -translate-y-1/2
        w-[900px]
        h-[900px]
        pointer-events-none
        z-20                /* <-- ABOVE hero background, BELOW text */
      "
      style={{ opacity: 1 }}
    >
      <Globe />
    </div>
  );
}
