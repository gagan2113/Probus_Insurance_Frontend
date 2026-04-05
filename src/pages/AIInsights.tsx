import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertTriangle, TrendingDown, Eye } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { churnRiskCustomers, sentimentTrend } from "@/data/mockData";

export default function AIInsights() {
  const insights = [
    { title: "Negative Sentiment Spike", desc: "14% of customers showed negative sentiment this week — up from 12% last week.", icon: TrendingDown, type: "badge-danger" },
    { title: "Low Engagement Alert", desc: "23 customers haven't interacted in 30+ days. Consider a re-engagement campaign.", icon: Eye, type: "badge-warning" },
    { title: "High Churn Cluster", desc: "Motor insurance segment shows 3x higher churn risk than health segment.", icon: AlertTriangle, type: "badge-danger" },
  ];

  return (
    <div className="space-y-6 max-w-7xl">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">AI Insights</h1>
        <p className="text-sm text-muted-foreground mt-1">AI-powered intelligence for proactive customer management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {insights.map((item, i) => (
          <Card key={i}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <item.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Sentiment Trends (Weekly)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sentimentTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
              <XAxis dataKey="week" tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="positive" stroke="hsl(142, 71%, 45%)" strokeWidth={2} />
              <Line type="monotone" dataKey="neutral" stroke="hsl(217, 91%, 60%)" strokeWidth={2} />
              <Line type="monotone" dataKey="negative" stroke="hsl(0, 72%, 51%)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">High Churn Risk Customers</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Churn Score</TableHead>
                <TableHead>Reason</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {churnRiskCustomers.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="font-medium text-sm">{c.name}</TableCell>
                  <TableCell>
                    <span className={c.score >= 75 ? "badge-danger" : "badge-warning"}>{c.score}%</span>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{c.reason}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
