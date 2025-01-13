import Link from 'next/link';
import { ChartBar, Award, Sheet } from 'lucide-react';

export default function Sidebar() {
  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="hidden md:block h-full bg-white text-gray-700 p-4">
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

      {/* Bottom navigation bar for mobile and tablet */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 flex justify-around md:hidden z-50">
        <ul className="flex w-full justify-around">
          {/* Dashboard Link */}
          <li className="w-full flex justify-center">
            <Link href="/dashboard" className="hover:bg-gray-100 p-3 rounded-full">
              <ChartBar className="w-6 h-6 text-gray-600 hover:text-pryClr" />
            </Link>
          </li>

          {/* Skill Test Link */}
          <li className="w-full flex justify-center">
            <Link href="/skill-test" className="hover:bg-gray-100 p-3 rounded-full">
              <Award className="w-6 h-6 text-gray-600 hover:text-pryClr" />
            </Link>
          </li>

          {/* Internship Link */}
          <li className="w-full flex justify-center">
            <Link href="/internship" className="hover:bg-gray-100 p-3 rounded-full">
              <Sheet className="w-6 h-6 text-gray-600 hover:text-pryClr" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
