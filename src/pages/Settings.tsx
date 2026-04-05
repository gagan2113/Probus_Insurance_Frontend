import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { messageTemplates } from "@/data/mockData";
import { toast } from "sonner";

export default function SettingsPage() {
  const apis = [
    { name: "WhatsApp Business API", status: "Connected", key: "wba_***...k9x" },
    { name: "Email API (SendGrid)", status: "Not Connected", key: "" },
    { name: "Voice API (Twilio)", status: "Not Connected", key: "" },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage integrations and message templates</p>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">API Integrations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {apis.map((api) => (
            <div key={api.name} className="flex items-center justify-between py-3 border-b last:border-0">
              <div>
                <p className="text-sm font-medium text-foreground">{api.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {api.key ? `API Key: ${api.key}` : "No API key configured"}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={api.status === "Connected" ? "default" : "secondary"}>
                  {api.status}
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toast.info(`Configure ${api.name}`)}
                >
                  Configure
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Message Templates</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {messageTemplates.map((tmpl) => (
            <div key={tmpl.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-foreground">{tmpl.name}</p>
                  <span className="badge-info">{tmpl.category}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={() => toast.success("Template saved")}>
                  Save
                </Button>
              </div>
              <Textarea
                defaultValue={tmpl.content}
                className="text-sm min-h-[80px]"
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
