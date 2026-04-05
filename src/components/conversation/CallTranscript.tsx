import { TranscriptEntry } from "@/data/conversationData";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

interface CallTranscriptProps {
  entries: TranscriptEntry[];
  highlightKeywords?: string[];
}

export function CallTranscript({ entries, highlightKeywords = [] }: CallTranscriptProps) {
  const highlight = (text: string) => {
    if (!highlightKeywords.length) return text;
    const parts: (string | JSX.Element)[] = [];
    let remaining = text;
    let key = 0;
    for (const kw of highlightKeywords) {
      const idx = remaining.toLowerCase().indexOf(kw.toLowerCase());
      if (idx !== -1) {
        if (idx > 0) parts.push(remaining.slice(0, idx));
        parts.push(
          <mark key={key++} className="bg-[hsl(38,92%,85%)] text-[hsl(38,92%,25%)] rounded px-0.5">
            {remaining.slice(idx, idx + kw.length)}
          </mark>
        );
        remaining = remaining.slice(idx + kw.length);
      }
    }
    if (remaining) parts.push(remaining);
    return parts.length > 1 ? <>{parts}</> : text;
  };

  return (
    <div className="space-y-3 max-h-[450px] overflow-y-auto p-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
        <Phone className="h-3.5 w-3.5" />
        <span>Call Transcript • {entries[0]?.timestamp?.split(" ").slice(0, 1).join("")}</span>
      </div>
      {entries.map((entry) => (
        <div key={entry.id} className={cn("flex gap-3 items-start")}>
          <div className={cn(
            "shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium",
            entry.speaker === "agent"
              ? "bg-[hsl(217,91%,93%)] text-[hsl(217,91%,45%)]"
              : "bg-[hsl(220,14%,92%)] text-muted-foreground"
          )}>
            {entry.speaker === "agent" ? "A" : "C"}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-foreground capitalize">{entry.speaker}</span>
              <span className="text-[10px] text-muted-foreground">{entry.timestamp}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
              {highlight(entry.text)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
