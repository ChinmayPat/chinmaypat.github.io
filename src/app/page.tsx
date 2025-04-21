import AboutMe from "./components/about";
import Expierence from "./components/expierence";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <div className="bg-white grid gap-3 grid-rows-4 size-auto">
      <AboutMe></AboutMe>
      <Expierence></Expierence>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}
