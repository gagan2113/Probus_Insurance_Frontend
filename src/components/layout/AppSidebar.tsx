import {
  LayoutDashboard,
  FileText,
  Users,
  Megaphone,
  Brain,
  MessageSquare,
  RefreshCw,
  Settings,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Policies", url: "/policies", icon: FileText },
  { title: "Customers", url: "/customers", icon: Users },
  { title: "Campaigns", url: "/campaigns", icon: Megaphone },
  { title: "AI Insights", url: "/ai-insights", icon: Brain },
  { title: "Comm Logs", url: "/communication-logs", icon: MessageSquare },
  { title: "Automation", url: "/lifecycle-automation", icon: RefreshCw },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r">
      <div className={`p-4 border-b ${collapsed ? "flex justify-center" : "flex items-center"}`}>
        <img
          src="/Probus_new.svg"
          alt="Probus Insurance"
          className={collapsed ? "h-14 w-14 object-contain" : "h-16 w-auto max-w-[340px] object-contain"}
        />
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/dashboard"}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
