import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import ThemeToogle from "@/components/Theme";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen justify-between overflow-x-hidden md:overflow-hidden bg-black dark:bg-white">
      <Sidebar />
      {children}
      <Navbar />
      <ThemeToogle/>
    </div>
  );
}
