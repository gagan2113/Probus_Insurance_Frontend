import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { communicationLogs } from "@/data/mockData";
import { customerConversations, analyzeConversation } from "@/data/conversationData";
import { WhatsAppChat } from "@/components/conversation/WhatsAppChat";
import { CallTranscript } from "@/components/conversation/CallTranscript";
import { AIAnalysisPanel } from "@/components/conversation/AIAnalysisPanel";
import { customers } from "@/data/mockData";

const statusBadge = (s: string) => {
  const cls = s === "Read" || s === "Opened" || s === "Completed" ? "badge-success" : s === "Delivered" || s === "Sent" ? "badge-info" : "badge-warning";
  return <span className={cls}>{s}</span>;
};

type LogEntry = { id: number; customer: string; message: string; timestamp: string; status: string };

// Map customer names to IDs for conversation lookup
const nameToId = Object.fromEntries(customers.map((c) => [c.name, c.id]));

function LogTable({ data, channelType, onRowClick }: { data: LogEntry[]; channelType: string; onRowClick: (log: LogEntry) => void }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-32">Customer</TableHead>
          <TableHead>Message / Transcript</TableHead>
          <TableHead className="w-44">Timestamp</TableHead>
          <TableHead className="w-28">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((log) => (
          <TableRow
            key={log.id}
            className="cursor-pointer hover:bg-secondary/60 transition-colors"
            onClick={() => onRowClick(log)}
          >
            <TableCell className="font-medium text-sm">{log.customer}</TableCell>
            <TableCell className="text-sm text-muted-foreground max-w-md truncate">{log.message}</TableCell>
            <TableCell className="text-sm text-muted-foreground">{log.timestamp}</TableCell>
            <TableCell>{statusBadge(log.status)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default function CommunicationLogs() {
  const [selectedLog, setSelectedLog] = useState<{ log: LogEntry; channel: string } | null>(null);

  const customerId = selectedLog ? nameToId[selectedLog.log.customer] : undefined;
  const convo = customerId ? customerConversations[customerId] : undefined;
  const channelKey = selectedLog?.channel === "calls" ? "call" : "whatsapp";
  const msgs = convo ? (channelKey === "whatsapp" ? convo.whatsapp : convo.call) : undefined;
  const analysis = msgs ? analyzeConversation(msgs) : undefined;

  return (
    <div className="space-y-6 max-w-7xl">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Communication Logs</h1>
        <p className="text-sm text-muted-foreground mt-1">Track all customer interactions across channels — click a row to view conversation & AI analysis</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <Tabs defaultValue="whatsapp">
            <TabsList>
              <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="calls">Calls</TabsTrigger>
            </TabsList>
            <TabsContent value="whatsapp" className="mt-4">
              <LogTable data={communicationLogs.whatsapp} channelType="whatsapp" onRowClick={(log) => setSelectedLog({ log, channel: "whatsapp" })} />
            </TabsContent>
            <TabsContent value="email" className="mt-4">
              <LogTable data={communicationLogs.email} channelType="email" onRowClick={(log) => setSelectedLog({ log, channel: "email" })} />
            </TabsContent>
            <TabsContent value="calls" className="mt-4">
              <LogTable data={communicationLogs.calls} channelType="calls" onRowClick={(log) => setSelectedLog({ log, channel: "calls" })} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Conversation Detail Modal */}
      <Dialog open={!!selectedLog} onOpenChange={(open) => !open && setSelectedLog(null)}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-lg">
              {selectedLog?.log.customer} — {selectedLog?.channel === "calls" ? "Call" : selectedLog?.channel === "whatsapp" ? "WhatsApp" : "Email"} Conversation
            </DialogTitle>
          </DialogHeader>

          {convo && analysis ? (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-2">
              <div className="md:col-span-3">
                {channelKey === "whatsapp" ? (
                  <WhatsAppChat messages={convo.whatsapp} highlightKeywords={analysis.keywords} />
                ) : (
                  <CallTranscript entries={convo.call} highlightKeywords={analysis.keywords} />
                )}
              </div>
              <div className="md:col-span-2">
                <AIAnalysisPanel analysis={analysis} />
              </div>
            </div>
          ) : (
            <div className="py-8 text-center">
              <p className="text-sm text-muted-foreground">No detailed conversation data available for this customer.</p>
              <div className="mt-4 p-4 bg-secondary rounded-lg text-left">
                <p className="text-xs font-medium text-foreground mb-1">Log Details</p>
                <p className="text-sm text-muted-foreground">{selectedLog?.log.message}</p>
                <p className="text-xs text-muted-foreground mt-2">{selectedLog?.log.timestamp}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
