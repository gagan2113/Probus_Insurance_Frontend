import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Mail, Phone, MessageSquare } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { customers } from "@/data/mockData";
import { customerConversations, analyzeConversation } from "@/data/conversationData";
import { WhatsAppChat } from "@/components/conversation/WhatsAppChat";
import { CallTranscript } from "@/components/conversation/CallTranscript";
import { AIAnalysisPanel } from "@/components/conversation/AIAnalysisPanel";

const channelIcon: Record<string, React.ReactNode> = {
  WhatsApp: <MessageSquare className="h-4 w-4 text-success" />,
  Email: <Mail className="h-4 w-4 text-primary" />,
  Call: <Phone className="h-4 w-4 text-muted-foreground" />,
};

export default function CustomerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("whatsapp");

  const customer = customers.find((c) => c.id === id);
  const conversations = id ? customerConversations[id] : undefined;

  const analysis = useMemo(() => {
    if (!conversations) return null;
    const msgs = activeTab === "whatsapp" ? conversations.whatsapp : conversations.call;
    return analyzeConversation(msgs);
  }, [conversations, activeTab]);

  if (!customer) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <p className="text-lg font-medium text-foreground">Customer not found</p>
        <p className="text-sm text-muted-foreground mt-1">The customer you're looking for doesn't exist.</p>
        <Button variant="outline" className="mt-4" onClick={() => navigate("/customers")}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Customers
        </Button>
      </div>
    );
  }

  const riskColor = customer.churnRisk === "High" ? "badge-danger" : customer.churnRisk === "Medium" ? "badge-warning" : "badge-success";

  return (
    <div className="space-y-6 max-w-7xl">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-2xl font-semibold text-foreground">{customer.name}</h1>
          <p className="text-sm text-muted-foreground">Customer ID: {customer.id}</p>
        </div>
      </div>

      {/* Info Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Contact Info</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><span className="text-muted-foreground">Email:</span> {customer.email}</p>
            <p><span className="text-muted-foreground">Phone:</span> {customer.phone}</p>
            <p><span className="text-muted-foreground">Policy:</span> {customer.policyId} ({customer.policyType})</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Sentiment Score</CardTitle></CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-foreground">{customer.sentimentScore}</span>
              <span className="text-sm text-muted-foreground mb-1">/ 100</span>
            </div>
            <Progress value={customer.sentimentScore} className="mt-3 h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Churn Risk</CardTitle></CardHeader>
          <CardContent>
            <span className={`${riskColor} text-base px-3 py-1`}>{customer.churnRisk}</span>
          </CardContent>
        </Card>
      </div>

      {/* Conversation Intelligence Section */}
      {conversations && analysis && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* LEFT: Conversation Panel (2/3) */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Conversation History</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList>
                    <TabsTrigger value="whatsapp">
                      <MessageSquare className="h-3.5 w-3.5 mr-1.5" /> WhatsApp Chat
                    </TabsTrigger>
                    <TabsTrigger value="call">
                      <Phone className="h-3.5 w-3.5 mr-1.5" /> Call Transcript
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="whatsapp" className="mt-4">
                    <WhatsAppChat messages={conversations.whatsapp} highlightKeywords={analysis.keywords} />
                  </TabsContent>
                  <TabsContent value="call" className="mt-4">
                    <CallTranscript entries={conversations.call} highlightKeywords={analysis.keywords} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT: AI Analysis (1/3) */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="pt-6">
                <AIAnalysisPanel analysis={analysis} />
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Interaction Timeline */}
      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Interaction Timeline</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customer.interactions.map((item, i) => (
              <div key={i} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                <div className="mt-0.5">{channelIcon[item.type]}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{item.type}</span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
