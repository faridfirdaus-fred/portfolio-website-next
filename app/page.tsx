import Hero from "./components/hero";
import ScrollingText from "./components/scrollingText";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <div className="w-full flex flex-col items-center">
      <ScrollingText />
      </div>
    </div>
  );
}
