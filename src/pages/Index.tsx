import { Sidebar } from "@/components/Sidebar";
import { StatsCard } from "@/components/StatsCard";
import { ActivityFeed } from "@/components/ActivityFeed";
import { DashboardCharts } from "@/components/DashboardCharts";
import { Users, Target, CheckSquare, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-6 space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's an overview of your business metrics.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Leads"
              value={328}
              change="+12% from last month"
              changeType="positive"
              icon={Target}
              iconColor="text-primary"
            />
            <StatsCard
              title="Active Clients"
              value={142}
              change="+8% from last month"
              changeType="positive"
              icon={Users}
              iconColor="text-secondary"
            />
            <StatsCard
              title="Open Tasks"
              value={47}
              change="-3% from last week"
              changeType="negative"
              icon={CheckSquare}
              iconColor="text-accent"
            />
            <StatsCard
              title="Conversion Rate"
              value="24.5%"
              change="+2.1% from last month"
              changeType="positive"
              icon={TrendingUp}
              iconColor="text-chart-4"
            />
          </div>

          {/* Charts */}
          <DashboardCharts />

          {/* Activity Feed */}
          <ActivityFeed />
        </div>
      </main>
    </div>
  );
};

export default Index;
