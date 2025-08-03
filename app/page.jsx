
import HomeHero from "@/components/HomeHero";
import Home2 from "@/components/Home2";
import Approch from "@/components/Approach";
import GetInTouch from "@/components/GetInTouch";

export default function Home() {
  return (
    <div>

    <div className="w-[100vw] ">
      <HomeHero/>
    </div>
      <div className="w-[96vw] mx-auto">

      <Home2/>
      <Approch/>
      <GetInTouch/>
      </div>
    </div>
  );
}
