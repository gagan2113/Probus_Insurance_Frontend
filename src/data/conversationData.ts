export interface ChatMessage {
  id: number;
  sender: "bot" | "customer";
  text: string;
  timestamp: string;
}

export interface TranscriptEntry {
  id: number;
  speaker: "agent" | "customer";
  text: string;
  timestamp: string;
}

export interface ConversationData {
  whatsapp: ChatMessage[];
  call: TranscriptEntry[];
}

export interface AIAnalysis {
  sentiment: "Positive" | "Neutral" | "Negative";
  sentimentScore: number;
  churnRisk: "Low" | "Medium" | "High";
  churnScore: number;
  intent: string;
  summary: string;
  keywords: string[];
}

export const customerConversations: Record<string, ConversationData> = {
  "C-001": {
    whatsapp: [
      { id: 1, sender: "bot", text: "Hi Rajesh, your health insurance policy INS-4521 is expiring on April 10. Would you like to renew?", timestamp: "2026-04-03 10:30 AM" },
      { id: 2, sender: "customer", text: "Not sure right now, maybe later.", timestamp: "2026-04-03 10:32 AM" },
      { id: 3, sender: "bot", text: "We are offering a 10% discount if you renew today. Would you like to know more?", timestamp: "2026-04-03 10:33 AM" },
      { id: 4, sender: "customer", text: "Okay, send me the details.", timestamp: "2026-04-03 10:35 AM" },
      { id: 5, sender: "bot", text: "Great! Here are your renewal details:\n• Policy: INS-4521 (Health)\n• New Premium: ₹21,600 (10% off)\n• Coverage: Same plan\nReply RENEW to confirm.", timestamp: "2026-04-03 10:36 AM" },
      { id: 6, sender: "customer", text: "Let me think about it and get back to you.", timestamp: "2026-04-03 10:40 AM" },
    ],
    call: [
      { id: 1, speaker: "agent", text: "Hello Rajesh, this is Meera from InsureCo. I'm calling about your health insurance policy that's expiring soon.", timestamp: "2026-03-28 02:00 PM" },
      { id: 2, speaker: "customer", text: "Yes, I received the message. I'm considering my options.", timestamp: "2026-03-28 02:01 PM" },
      { id: 3, speaker: "agent", text: "I understand. We have some great premium adjustment options. Would you like me to walk you through them?", timestamp: "2026-03-28 02:02 PM" },
      { id: 4, speaker: "customer", text: "Sure, go ahead.", timestamp: "2026-03-28 02:02 PM" },
      { id: 5, speaker: "agent", text: "With your loyalty discount, we can offer you the same coverage at ₹21,600 instead of ₹24,000.", timestamp: "2026-03-28 02:03 PM" },
      { id: 6, speaker: "customer", text: "That sounds reasonable. Maybe I'll renew. Can you send me the documents?", timestamp: "2026-03-28 02:05 PM" },
      { id: 7, speaker: "agent", text: "Absolutely! I'll send everything via email. Thank you, Rajesh.", timestamp: "2026-03-28 02:06 PM" },
    ],
  },
  "C-002": {
    whatsapp: [
      { id: 1, sender: "bot", text: "Hi Priya, your life insurance policy INS-4522 renewal is coming up. Would you like to proceed?", timestamp: "2026-04-01 09:00 AM" },
      { id: 2, sender: "customer", text: "Yes, I'd like to renew right away.", timestamp: "2026-04-01 09:05 AM" },
      { id: 3, sender: "bot", text: "Wonderful! Your renewal has been processed. Premium: ₹36,000. Policy renewed until April 2027.", timestamp: "2026-04-01 09:06 AM" },
      { id: 4, sender: "customer", text: "Thank you! Can you also send me the updated policy document?", timestamp: "2026-04-01 09:08 AM" },
      { id: 5, sender: "bot", text: "Your policy document has been sent to your registered email. Thank you for your continued trust, Priya! 🙏", timestamp: "2026-04-01 09:09 AM" },
    ],
    call: [
      { id: 1, speaker: "agent", text: "Hello Priya, this is Arjun from InsureCo. Just calling to confirm your policy renewal went through smoothly.", timestamp: "2026-04-02 11:00 AM" },
      { id: 2, speaker: "customer", text: "Yes, everything was smooth. Thank you for following up!", timestamp: "2026-04-02 11:01 AM" },
      { id: 3, speaker: "agent", text: "Great to hear. Is there anything else we can help you with?", timestamp: "2026-04-02 11:02 AM" },
      { id: 4, speaker: "customer", text: "No, I'm happy with the service. Keep up the good work!", timestamp: "2026-04-02 11:03 AM" },
    ],
  },
  "C-003": {
    whatsapp: [
      { id: 1, sender: "bot", text: "Hi Amit, we noticed your motor insurance claim is still pending. Our team is working on it.", timestamp: "2026-04-01 11:00 AM" },
      { id: 2, sender: "customer", text: "It's been 3 weeks already. This is very frustrating.", timestamp: "2026-04-01 11:02 AM" },
      { id: 3, sender: "bot", text: "We apologize for the delay. Your claim is being prioritized and you should hear back within 48 hours.", timestamp: "2026-04-01 11:03 AM" },
      { id: 4, sender: "customer", text: "You said the same thing last week. I'm not interested in renewing anymore.", timestamp: "2026-04-01 11:05 AM" },
      { id: 5, sender: "bot", text: "We understand your frustration, Amit. A senior manager will call you personally today to resolve this.", timestamp: "2026-04-01 11:06 AM" },
      { id: 6, sender: "customer", text: "Fine, but this is my last chance. If nothing happens, I'm switching to another company.", timestamp: "2026-04-01 11:08 AM" },
    ],
    call: [
      { id: 1, speaker: "agent", text: "Hello Amit, this is Vikram, Senior Claims Manager at InsureCo. I'm calling about your pending claim.", timestamp: "2026-04-03 11:30 AM" },
      { id: 2, speaker: "customer", text: "Finally someone senior. I've been waiting for weeks and nobody seems to care.", timestamp: "2026-04-03 11:31 AM" },
      { id: 3, speaker: "agent", text: "I completely understand your frustration, and I sincerely apologize. I've personally reviewed your claim and we can process it by tomorrow.", timestamp: "2026-04-03 11:32 AM" },
      { id: 4, speaker: "customer", text: "I've heard promises before. I'm seriously considering switching companies.", timestamp: "2026-04-03 11:33 AM" },
      { id: 5, speaker: "agent", text: "I want to make this right. Along with expediting your claim, I'd like to offer you a premium discount on your renewal.", timestamp: "2026-04-03 11:34 AM" },
      { id: 6, speaker: "customer", text: "Let's see if the claim gets processed first. Then we can talk about renewal.", timestamp: "2026-04-03 11:35 AM" },
    ],
  },
};

// Simple keyword-based AI analysis
export function analyzeConversation(messages: (ChatMessage | TranscriptEntry)[]): AIAnalysis {
  const allText = messages
    .map((m) => ("text" in m ? m.text : ""))
    .join(" ")
    .toLowerCase();

  const negativeKeywords = ["not interested", "frustrated", "switching", "complaint", "cancel", "worst", "terrible", "angry", "last chance"];
  const positiveKeywords = ["renew", "yes", "thank you", "happy", "great", "good work", "send details", "proceed", "wonderful"];
  const neutralKeywords = ["maybe later", "think about it", "not sure", "considering", "let me check"];
  const delayKeywords = ["maybe later", "think about it", "let me", "next month", "get back", "not sure"];
  const interestedKeywords = ["yes", "renew", "send details", "proceed", "sounds good", "reasonable"];
  const notInterestedKeywords = ["not interested", "switching", "cancel", "another company"];
  const needsInfoKeywords = ["details", "options", "walk me through", "tell me more", "documents"];

  let negScore = 0;
  let posScore = 0;
  let neuScore = 0;

  negativeKeywords.forEach((k) => { if (allText.includes(k)) negScore += 2; });
  positiveKeywords.forEach((k) => { if (allText.includes(k)) posScore += 2; });
  neutralKeywords.forEach((k) => { if (allText.includes(k)) neuScore += 2; });

  const detectedKeywords: string[] = [];
  [...negativeKeywords, ...positiveKeywords, ...neutralKeywords].forEach((k) => {
    if (allText.includes(k)) detectedKeywords.push(k);
  });

  let sentiment: AIAnalysis["sentiment"];
  let sentimentScore: number;
  if (posScore > negScore && posScore > neuScore) {
    sentiment = "Positive";
    sentimentScore = Math.min(95, 60 + posScore * 5);
  } else if (negScore > posScore) {
    sentiment = "Negative";
    sentimentScore = Math.max(10, 40 - negScore * 5);
  } else {
    sentiment = "Neutral";
    sentimentScore = 50 + (posScore - negScore) * 3;
  }

  let churnRisk: AIAnalysis["churnRisk"];
  let churnScore: number;
  if (negScore >= 4) {
    churnRisk = "High";
    churnScore = Math.min(95, 70 + negScore * 3);
  } else if (negScore >= 2 || neuScore >= 2) {
    churnRisk = "Medium";
    churnScore = 40 + negScore * 5;
  } else {
    churnRisk = "Low";
    churnScore = Math.max(5, 20 - posScore * 2);
  }

  let intent = "Needs Info";
  if (notInterestedKeywords.some((k) => allText.includes(k))) intent = "Not Interested";
  else if (delayKeywords.some((k) => allText.includes(k))) intent = "Delay";
  else if (interestedKeywords.some((k) => allText.includes(k))) intent = "Interested";
  else if (needsInfoKeywords.some((k) => allText.includes(k))) intent = "Needs Info";

  const summaries: Record<string, string> = {
    "Positive": "Customer shows strong interest and is likely to renew. Maintain engagement with timely follow-ups.",
    "Neutral": "Customer shows hesitation but is open to offers. Recommend a personalized follow-up with incentives.",
    "Negative": "Customer is dissatisfied and at high risk of churning. Immediate escalation and resolution needed.",
  };

  return {
    sentiment,
    sentimentScore: Math.round(Math.max(0, Math.min(100, sentimentScore))),
    churnRisk,
    churnScore: Math.round(Math.max(0, Math.min(100, churnScore))),
    intent,
    summary: summaries[sentiment],
    keywords: detectedKeywords.slice(0, 5),
  };
}
