import { ChatMessage } from "@/data/conversationData";
import { cn } from "@/lib/utils";

interface WhatsAppChatProps {
  messages: ChatMessage[];
  highlightKeywords?: string[];
}

function highlightText(text: string, keywords: string[]) {
  if (!keywords.length) return text;
  const parts: (string | JSX.Element)[] = [];
  let remaining = text;
  let key = 0;

  for (const keyword of keywords) {
    const lowerRemaining = remaining.toLowerCase();
    const idx = lowerRemaining.indexOf(keyword.toLowerCase());
    if (idx !== -1) {
      if (idx > 0) parts.push(remaining.slice(0, idx));
      parts.push(
        <mark key={key++} className="bg-[hsl(38,92%,85%)] text-[hsl(38,92%,25%)] rounded px-0.5">
          {remaining.slice(idx, idx + keyword.length)}
        </mark>
      );
      remaining = remaining.slice(idx + keyword.length);
    }
  }
  if (remaining) parts.push(remaining);
  return parts.length > 1 ? <>{parts}</> : text;
}

export function WhatsAppChat({ messages, highlightKeywords = [] }: WhatsAppChatProps) {
  return (
    <div className="flex flex-col gap-3 p-4 bg-[hsl(140,20%,96%)] rounded-lg min-h-[300px] max-h-[450px] overflow-y-auto">
      {messages.map((msg) => (
        <div key={msg.id} className={cn("flex flex-col max-w-[80%]", msg.sender === "bot" ? "self-start" : "self-end")}>
          <span className="text-[10px] font-medium text-muted-foreground mb-0.5 px-1">
            {msg.sender === "bot" ? "🤖 Bot" : "👤 Customer"}
          </span>
          <div
            className={cn(
              "rounded-xl px-3 py-2 text-sm leading-relaxed shadow-sm",
              msg.sender === "bot"
                ? "bg-card text-foreground rounded-tl-sm"
                : "bg-[hsl(142,71%,40%)] text-[hsl(0,0%,100%)] rounded-tr-sm"
            )}
          >
            {highlightKeywords.length ? highlightText(msg.text, highlightKeywords) : msg.text}
          </div>
          <span className="text-[10px] text-muted-foreground mt-0.5 px-1">{msg.timestamp}</span>
        </div>
      ))}
    </div>
  );
}
