import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus } from "lucide-react";
import { campaigns } from "@/data/mockData";
import { toast } from "sonner";

const statusBadge = (s: string) => {
  const cls = s === "Completed" ? "badge-success" : s === "Active" ? "badge-info" : s === "Scheduled" ? "badge-warning" : "badge-danger";
  return <span className={cls}>{s}</span>;
};

export default function Campaigns() {
  const [open, setOpen] = useState(false);
  const channels = ["WhatsApp", "Email", "Call"];

  const handleCreate = () => {
    toast.success("Campaign created successfully");
    setOpen(false);
  };

  return (
    <div className="space-y-6 max-w-7xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Campaigns</h1>
          <p className="text-sm text-muted-foreground mt-1">Create and manage outreach campaigns</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="h-4 w-4 mr-2" /> Create Campaign</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>New Campaign</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-2">
              <div>
                <Label className="text-sm">Campaign Name</Label>
                <Input placeholder="e.g. Q2 Renewal Push" className="mt-1" />
              </div>
              <div>
                <Label className="text-sm">Audience</Label>
                <Select>
                  <SelectTrigger className="mt-1"><SelectValue placeholder="Select audience" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="expiring-7">Expiring in 7 days</SelectItem>
                    <SelectItem value="expiring-30">Expiring in 30 days</SelectItem>
                    <SelectItem value="lapsed">Lapsed policies</SelectItem>
                    <SelectItem value="all">All customers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm">Channels</Label>
                <div className="flex gap-4 mt-2">
                  {channels.map((ch) => (
                    <label key={ch} className="flex items-center gap-2 text-sm">
                      <Checkbox /> {ch}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <Label className="text-sm">Schedule Date</Label>
                <Input type="date" className="mt-1" />
              </div>
              <Button onClick={handleCreate} className="w-full">Create Campaign</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">All Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Channels</TableHead>
                <TableHead>Sent</TableHead>
                <TableHead>Opened</TableHead>
                <TableHead>Performance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((c) => {
                const perf = c.sent > 0 ? Math.round((c.opened / c.sent) * 100) : 0;
                return (
                  <TableRow key={c.id}>
                    <TableCell className="font-medium text-sm">{c.name}</TableCell>
                    <TableCell>{statusBadge(c.status)}</TableCell>
                    <TableCell className="text-sm">{c.channels.join(", ")}</TableCell>
                    <TableCell className="text-sm">{c.sent}</TableCell>
                    <TableCell className="text-sm">{c.opened}</TableCell>
                    <TableCell>
                      {c.sent > 0 ? (
                        <span className={perf >= 70 ? "badge-success" : perf >= 50 ? "badge-warning" : "badge-danger"}>
                          {perf}% open rate
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground">—</span>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
