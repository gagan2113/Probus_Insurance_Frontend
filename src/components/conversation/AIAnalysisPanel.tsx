import { AIAnalysis } from "@/data/conversationData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Brain, Target, TrendingDown, MessageCircle } from "lucide-react";

interface AIAnalysisPanelProps {
  analysis: AIAnalysis;
}

const sentimentConfig = {
  Positive: { emoji: "😊", color: "text-[hsl(142,71%,35%)]", bg: "bg-[hsl(142,71%,95%)]", progressClass: "[&_[role=progressbar]>div]:bg-[hsl(142,71%,45%)]" },
  Neutral: { emoji: "😐", color: "text-[hsl(38,92%,40%)]", bg: "bg-[hsl(38,92%,95%)]", progressClass: "[&_[role=progressbar]>div]:bg-[hsl(38,92%,50%)]" },
  Negative: { emoji: "😟", color: "text-[hsl(0,72%,45%)]", bg: "bg-[hsl(0,72%,95%)]", progressClass: "[&_[role=progressbar]>div]:bg-[hsl(0,72%,51%)]" },
};

const churnConfig = {
  Low: { color: "badge-success", progressClass: "[&_[role=progressbar]>div]:bg-[hsl(142,71%,45%)]" },
  Medium: { color: "badge-warning", progressClass: "[&_[role=progressbar]>div]:bg-[hsl(38,92%,50%)]" },
  High: { color: "badge-danger", progressClass: "[&_[role=progressbar]>div]:bg-[hsl(0,72%,51%)]" },
};

const intentConfig: Record<string, string> = {
  "Interested": "badge-success",
  "Not Interested": "badge-danger",
  "Delay": "badge-warning",
  "Needs Info": "badge-info",
};

export function AIAnalysisPanel({ analysis }: AIAnalysisPanelProps) {
  const sentCfg = sentimentConfig[analysis.sentiment];
  const churnCfg = churnConfig[analysis.churnRisk];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Brain className="h-4 w-4 text-primary" />
        <h3 className="text-sm font-semibold text-foreground">AI Analysis</h3>
      </div>

      {/* Sentiment */}
      <Card className="border-0 shadow-none bg-secondary/50">
        <CardHeader className="pb-2 pt-4 px-4">
          <CardTitle className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
            <MessageCircle className="h-3.5 w-3.5" /> Sentiment Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className={cn("text-2xl")}>{sentCfg.emoji}</span>
            <span className={cn("text-lg font-bold", sentCfg.color)}>{analysis.sentiment}</span>
          </div>
          <div className={cn("h-2 rounded-full overflow-hidden bg-secondary", sentCfg.progressClass)}>
            <Progress value={analysis.sentimentScore} className="h-2" />
          </div>
          <p className="text-xs text-muted-foreground mt-1.5">Score: {analysis.sentimentScore}/100</p>
        </CardContent>
      </Card>

      {/* Churn Risk */}
      <Card className="border-0 shadow-none bg-secondary/50">
        <CardHeader className="pb-2 pt-4 px-4">
          <CardTitle className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
            <TrendingDown className="h-3.5 w-3.5" /> Churn Risk
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className={cn(churnCfg.color, "text-sm px-2.5 py-0.5")}>{analysis.churnRisk}</span>
            {analysis.churnRisk === "High" && <span className="text-sm">⚠️</span>}
          </div>
          <div className={cn("h-2 rounded-full overflow-hidden bg-secondary", churnCfg.progressClass)}>
            <Progress value={analysis.churnScore} className="h-2" />
          </div>
          <p className="text-xs text-muted-foreground mt-1.5">Risk Score: {analysis.churnScore}/100</p>
        </CardContent>
      </Card>

      {/* Intent */}
      <Card className="border-0 shadow-none bg-secondary/50">
        <CardHeader className="pb-2 pt-4 px-4">
          <CardTitle className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
            <Target className="h-3.5 w-3.5" /> Intent Detection
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <span className={cn(intentConfig[analysis.intent] || "badge-info", "text-sm px-3 py-1")}>
            {analysis.intent}
          </span>
        </CardContent>
      </Card>

      {/* Keywords */}
      {analysis.keywords.length > 0 && (
        <Card className="border-0 shadow-none bg-secondary/50">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="text-xs font-medium text-muted-foreground">🔍 Detected Keywords</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 flex flex-wrap gap-1.5">
            {analysis.keywords.map((kw) => (
              <span key={kw} className="bg-[hsl(38,92%,90%)] text-[hsl(38,92%,30%)] text-xs px-2 py-0.5 rounded-full">
                "{kw}"
              </span>
            ))}
          </CardContent>
        </Card>
      )}

      {/* AI Summary */}
      <Card className="border-0 shadow-none bg-[hsl(217,91%,97%)]">
        <CardContent className="p-4">
          <p className="text-xs font-medium text-primary mb-1">💡 AI Insight Summary</p>
          <p className="text-sm text-foreground leading-relaxed">{analysis.summary}</p>
        </CardContent>
      </Card>
    </div>
  );
}
