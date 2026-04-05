import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Policies from "./pages/Policies";
import Customers from "./pages/Customers";
import CustomerDetails from "./pages/CustomerDetails";
import Campaigns from "./pages/Campaigns";
import AIInsights from "./pages/AIInsights";
import CommunicationLogs from "./pages/CommunicationLogs";
import LifecycleAutomation from "./pages/LifecycleAutomation";
import SettingsPage from "./pages/Settings";
import NotFound from "./pages/NotFound";

import Landing from "./pages/Landing";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <AppLayout>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/policies" element={<Policies />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/customers/:id" element={<CustomerDetails />} />
                  <Route path="/campaigns" element={<Campaigns />} />
                  <Route path="/ai-insights" element={<AIInsights />} />
                  <Route path="/communication-logs" element={<CommunicationLogs />} />
                  <Route path="/lifecycle-automation" element={<LifecycleAutomation />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AppLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
