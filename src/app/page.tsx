import Dashboard from "./dashboard/page";
import SkillTest from "./skill-test/page";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to the Skill Dashboard</h1>
      <Dashboard />
      <SkillTest />
    </div>
  );
}
