import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const leadStatusData = [
  { name: "New", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Contacted", value: 28, color: "hsl(var(--chart-2))" },
  { name: "Negotiation", value: 22, color: "hsl(var(--chart-3))" },
  { name: "Won", value: 10, color: "hsl(var(--chart-4))" },
  { name: "Lost", value: 5, color: "hsl(var(--chart-5))" },
];

const monthlyData = [
  { month: "Jan", leads: 45, clients: 12 },
  { month: "Feb", leads: 52, clients: 15 },
  { month: "Mar", leads: 48, clients: 18 },
  { month: "Apr", leads: 61, clients: 22 },
  { month: "May", leads: 55, clients: 20 },
  { month: "Jun", leads: 67, clients: 25 },
];

const growthData = [
  { month: "Jan", revenue: 15000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 16500 },
  { month: "Apr", revenue: 22000 },
  { month: "May", revenue: 21000 },
  { month: "Jun", revenue: 28000 },
];

export function DashboardCharts() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Pie Chart - Lead Status Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Lead Status Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={leadStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {leadStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Bar Chart - Monthly Leads vs Clients */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Leads vs Clients</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                }}
              />
              <Legend />
              <Bar dataKey="leads" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
              <Bar dataKey="clients" fill="hsl(var(--chart-3))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Line Chart - Revenue Growth */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Revenue Growth Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--chart-2))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--chart-2))", r: 6 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
