import Link from 'next/link';
import { ChartBar, Award, Sheet } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="h-full bg-white text-gray-700 p-4">
      <nav>
        <ul className="space-y-4">
          {/* Dashboard Link */}
          <li className="w-full">
            <Link href="/dashboard" className="flex items-center text-lg hover:bg-gray-100 p-3 rounded-tr-full rounded-br-full hover:text-pryClr w-full -ml-4 pl-4">
              <ChartBar className="w-5 h-5 mr-2" />
              Dashboard
            </Link>
          </li>

          {/* Skill Test Link */}
          <li className="w-full">
            <Link href="/skill-test" className="flex items-center text-lg hover:bg-gray-100 p-3 rounded-tr-full rounded-br-full hover:text-pryClr w-full -ml-4 pl-4">
              <Award className="w-5 h-5 mr-2" />
              Skill Test
            </Link>
          </li>

          {/* Internship Link */}
          <li className="w-full">
            <Link href="/internship" className="flex items-center text-lg hover:bg-gray-100 p-3 rounded-tr-full rounded-br-full hover:text-pryClr w-full -ml-4 pl-4">
              <Sheet className="w-5 h-5 mr-2" />
              Internship
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
