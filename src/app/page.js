import Image from "next/image";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard title="Project 1" description="This is a cool project." />
        <ProjectCard title="Project 2" description="This is another cool project." />
        <ProjectCard title="Project 3" description="Yet another awesome project." />
      </div>
    </div>
  );
}
