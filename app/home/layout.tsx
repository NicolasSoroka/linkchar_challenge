import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/ui/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-between overflow-hidden">
      <Sidebar />
      {children}
      <Navbar />
    </div>
  );
}
