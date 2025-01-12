import Sidebar from "@/components/Sidebar";
import "./globals.css";
import Header from "@/components/Header";

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
          <div className="w-1/6 h-full bg-white text-gray-600 border-r border-gray-300 overflow-y-hidden">
            <Sidebar />
          </div>
          <main className="w-5/6 h-full bg-white p-4 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
