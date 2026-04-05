import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye } from "lucide-react";
import { policies } from "@/data/mockData";
import { useNavigate } from "react-router-dom";

const statusBadge = (status: string) => {
  const cls = status === "Renewed" ? "badge-success" : status === "Expiring" ? "badge-danger" : "badge-warning";
  return <span className={cls}>{status}</span>;
};

export default function Policies() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [expiryFilter, setExpiryFilter] = useState("all");
  const navigate = useNavigate();

  const filtered = policies.filter((p) => {
    if (statusFilter !== "all" && p.status !== statusFilter) return false;
    if (expiryFilter !== "all") {
      const days = Math.ceil((new Date(p.expiryDate).getTime() - Date.now()) / 86400000);
      if (expiryFilter === "7" && days > 7) return false;
      if (expiryFilter === "15" && days > 15) return false;
      if (expiryFilter === "30" && days > 30) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 max-w-7xl">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Policies</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage and track all insurance policies</p>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <CardTitle className="text-sm font-medium">All Policies</CardTitle>
            <div className="flex gap-2">
              <Select value={expiryFilter} onValueChange={setExpiryFilter}>
                <SelectTrigger className="w-40 h-9 text-sm">
                  <SelectValue placeholder="Expiry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Expiry</SelectItem>
                  <SelectItem value="7">Next 7 days</SelectItem>
                  <SelectItem value="15">Next 15 days</SelectItem>
                  <SelectItem value="30">Next 30 days</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-36 h-9 text-sm">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Expiring">Expiring</SelectItem>
                  <SelectItem value="Renewed">Renewed</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Policy ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Premium</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium text-sm">{p.id}</TableCell>
                  <TableCell className="text-sm">{p.customerName}</TableCell>
                  <TableCell className="text-sm">{p.type}</TableCell>
                  <TableCell className="text-sm">{p.expiryDate}</TableCell>
                  <TableCell className="text-sm">₹{p.premium.toLocaleString()}</TableCell>
                  <TableCell>{statusBadge(p.status)}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigate(`/customers/${p.customerId}`)}
                    >
                      <Eye className="h-4 w-4 mr-1" /> View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                    No policies match the selected filters.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
