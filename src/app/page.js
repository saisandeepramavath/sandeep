import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
    <Header />
    <section className="text-white p-10">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard title="CRM for Real Estate" description="Comprehensive CRM system with SIM-based call logging and analysis." />
        <ProjectCard title="POS for Liquor Store" description="Inventory and billing system with real-time data visualization." />
        <ProjectCard title="Report Automation Tool" description="Python-based tool for automated report generation with external APIs." />
      </div>
    </section>
  </div>
  );
}
