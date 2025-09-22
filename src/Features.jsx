import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;
    setTransformStyle(`perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95,.95,.95)`);
  };

  const handleMouseLeave = () => setTransformStyle("perspective(700px) rotateX(0) rotateY(0) scale3d(1,1,1)");

  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
      className={`h-full w-full ${className}`}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => (
  <div className="relative w-full h-full overflow-hidden rounded-lg">
    <video src={src} loop autoPlay muted className="absolute inset-0 w-full h-full object-cover" />
    <div className="relative z-10 flex flex-col justify-between p-5 text-blue-50 h-full">
      <div>
        <h1 className="bento-title special-font">{title}</h1>
        {description && <p className="mt-3 max-w-md text-xs md:text-base">{description}</p>}
      </div>
      {isComingSoon && (
        <div className="flex w-fit cursor-pointer items-center gap-1 rounded-full border-hsla bg-black px-5 py-2 text-xs uppercase text-white/20">
          <TiLocationArrow className="relative z-10" />
          <span className="relative z-10">Coming Soon</span>
        </div>
      )}
    </div>
  </div>
);

export default function Features() {
  return (
    <section className="bg-black pb-20">
      <div className="container mx-auto px-4 md:px-10">
        <div className="px-5 py-16">
          <p className="font-circular-web text-lg text-blue-50">Into the Metagame Layer</p>
          <p className="max-w-md text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.
          </p>
        </div>

        {/* Top single feature */}
        <BentoTilt className="border-hsla mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={<>radia<b>n</b>t</>}
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            isComingSoon
          />
        </BentoTilt>

        {/* Grid for other features */}
        <div className="grid h-[135vh] w-full grid-cols-2 auto-rows-fr gap-6">
          {/* Zigma — tall left card spanning 2 rows */}
          <BentoTilt className="row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={<>zig<b>m</b>a</>}
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </BentoTilt>

          {/* Nexus — top right */}
          <BentoTilt>
            <BentoCard
              src="videos/feature-3.mp4"
              title={<>n<b>e</b>xus</>}
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </BentoTilt>

          {/* Azure — bottom right */}
          <BentoTilt>
            <BentoCard
              src="videos/feature-4.mp4"
              title={<>az<b>u</b>l</>}
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            />
          </BentoTilt>

          {/* Coming Soon — bottom left, row 3 */}
          <BentoTilt>
            <div className="flex h-full flex-col justify-between bg-violet-300 p-5 rounded-lg">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
              </h1>
              <TiLocationArrow className="m-5 scale-125 self-end" />
            </div>
          </BentoTilt>

          {/* Video card — bottom right */}
          <BentoTilt>
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="w-full h-full object-cover rounded-lg"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
}
