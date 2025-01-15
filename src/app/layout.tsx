import Sidebar from "@/components/Sidebar";
import "./globals.css";
import Header from "@/components/Header";
import { ChartBar, Award, Sheet } from 'lucide-react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen font-pryFF flex-col">
        <div className="w-full bg-white border-b border-gray-300">
          <Header />
        </div>
        <div className="flex w-full h-screen overflow-hidden">
          {/* Sidebar for larger screens */}
          <div className="hidden md:block w-1/6 h-full bg-white text-gray-600 border-r border-gray-300 overflow-y-hidden">
            <Sidebar />
          </div>
          {/* Main content */}
          <main className="w-full md:w-5/6 h-full bg-white p-4 overflow-y-auto">
            {children}
          </main>

          {/* Sidebar for mobile and tablet */}
          <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 flex justify-around md:hidden z-50">
            <ul className="flex w-full justify-around">
              {/* Dashboard Link */}
              <li className="w-full flex justify-center">
                <a href="/dashboard" className="hover:bg-pryClr hover:text-mainClr p-3 rounded-full">
                  <ChartBar />
                </a>
              </li>
              {/* Skill Test Link */}
              <li className="w-full flex justify-center">
                <a href="/skill-test" className="hover:bg-pryClr hover:text-mainClr p-3 rounded-full">
                  <Award />
                </a>
              </li>
              {/* Internship Link */}
              <li className="w-full flex justify-center">
                <a href="/internship" className="hover:bg-pryClr hover:text-mainClr p-3 rounded-full">
                  <Sheet />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </body>
    </html>
  );
}
