import Hero from "./components/hero";
import ScrollingText from "./components/scrollingText";
import { ClipPathLink } from "./components/clipPathLink";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <div className="w-full flex flex-col items-center">
        <ScrollingText />
      </div>
      <ClipPathLink />
    </main>
  );
}
