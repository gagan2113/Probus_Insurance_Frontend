import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { TopNavbar } from "./TopNavbar";
import { Footer } from "@/components/ui/footer";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full">
        <div className="flex flex-1">
          <AppSidebar />
          <div className="flex-1 flex flex-col min-w-0">
            <TopNavbar />
            <main className="flex-1 overflow-auto p-6">
              {children}
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
}
