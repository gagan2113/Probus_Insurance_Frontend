import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { automationRules } from "@/data/mockData";
import { toast } from "sonner";

export default function LifecycleAutomation() {
  const [rules, setRules] = useState(automationRules);

  const toggleRule = (id: number) => {
    setRules((prev) =>
      prev.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r))
    );
    const rule = rules.find((r) => r.id === id);
    toast.success(`${rule?.name} ${rule?.enabled ? "disabled" : "enabled"}`);
  };

  const stages = ["15 Days", "7 Days", "30 Days", "90 Days"];

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Lifecycle Automation</h1>
        <p className="text-sm text-muted-foreground mt-1">Configure automated renewal workflows</p>
      </div>

      {/* Visual workflow */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Workflow Stages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-2">
            {stages.map((stage, i) => {
              const rule = rules.find((r) => r.stage === stage);
              return (
                <div key={stage} className="flex items-center gap-2">
                  <div className={`rounded-lg border px-4 py-3 text-center min-w-[120px] ${rule?.enabled ? "bg-sidebar-accent border-primary/30" : "bg-secondary"}`}>
                    <p className="text-xs text-muted-foreground">{stage}</p>
                    <p className="text-sm font-medium text-foreground mt-0.5">{rule?.name.split(" ").slice(0, 2).join(" ")}</p>
                    <Badge variant={rule?.enabled ? "default" : "secondary"} className="mt-2 text-[10px]">
                      {rule?.enabled ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                  {i < stages.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Rule cards */}
      <div className="space-y-3">
        {rules.map((rule) => (
          <Card key={rule.id}>
            <CardContent className="py-4 flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-foreground">{rule.name}</p>
                  <span className="badge-info">{rule.channel}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{rule.description}</p>
              </div>
              <Switch checked={rule.enabled} onCheckedChange={() => toggleRule(rule.id)} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
