export const kpiData = {
  policiesExpiring: 47,
  renewalsCompleted: 312,
  pendingFollowUps: 23,
  renewalRate: 87.5,
};

export const renewalTrend = [
  { month: "Jan", rate: 78 },
  { month: "Feb", rate: 82 },
  { month: "Mar", rate: 79 },
  { month: "Apr", rate: 85 },
  { month: "May", rate: 88 },
  { month: "Jun", rate: 84 },
  { month: "Jul", rate: 90 },
  { month: "Aug", rate: 87 },
  { month: "Sep", rate: 92 },
  { month: "Oct", rate: 89 },
  { month: "Nov", rate: 91 },
  { month: "Dec", rate: 88 },
];

export const channelBreakdown = [
  { channel: "WhatsApp", count: 420 },
  { channel: "Email", count: 380 },
  { channel: "Calls", count: 210 },
];

export const sentimentData = [
  { name: "Positive", value: 58, fill: "hsl(142, 71%, 45%)" },
  { name: "Neutral", value: 28, fill: "hsl(217, 91%, 60%)" },
  { name: "Negative", value: 14, fill: "hsl(0, 72%, 51%)" },
];

export const activityFeed = [
  { id: 1, action: "Renewal reminder sent to Rajesh Kumar via WhatsApp", time: "5 min ago", type: "message" },
  { id: 2, action: "Policy #INS-4521 renewed by Priya Sharma", time: "12 min ago", type: "renewal" },
  { id: 3, action: "Follow-up call completed with Amit Patel", time: "28 min ago", type: "call" },
  { id: 4, action: "Negative sentiment detected for customer #C-892", time: "45 min ago", type: "alert" },
  { id: 5, action: "Campaign 'Q1 Renewals' completed — 89% open rate", time: "1 hr ago", type: "campaign" },
  { id: 6, action: "New policy expiring alert for 12 customers", time: "2 hrs ago", type: "alert" },
];

export interface Policy {
  id: string;
  customerName: string;
  customerId: string;
  expiryDate: string;
  premium: number;
  status: "Expiring" | "Renewed" | "Pending";
  type: string;
}

export const policies: Policy[] = [
  { id: "INS-4521", customerName: "Rajesh Kumar", customerId: "C-001", expiryDate: "2026-04-10", premium: 24000, status: "Expiring", type: "Health" },
  { id: "INS-4522", customerName: "Priya Sharma", customerId: "C-002", expiryDate: "2026-04-18", premium: 36000, status: "Renewed", type: "Life" },
  { id: "INS-4523", customerName: "Amit Patel", customerId: "C-003", expiryDate: "2026-04-25", premium: 18000, status: "Pending", type: "Motor" },
  { id: "INS-4524", customerName: "Sneha Reddy", customerId: "C-004", expiryDate: "2026-04-08", premium: 42000, status: "Expiring", type: "Health" },
  { id: "INS-4525", customerName: "Vikram Singh", customerId: "C-005", expiryDate: "2026-04-30", premium: 15000, status: "Pending", type: "Travel" },
  { id: "INS-4526", customerName: "Neha Gupta", customerId: "C-006", expiryDate: "2026-05-05", premium: 28000, status: "Renewed", type: "Life" },
  { id: "INS-4527", customerName: "Arjun Mehta", customerId: "C-007", expiryDate: "2026-04-12", premium: 32000, status: "Expiring", type: "Health" },
  { id: "INS-4528", customerName: "Kavita Joshi", customerId: "C-008", expiryDate: "2026-05-15", premium: 21000, status: "Pending", type: "Motor" },
];

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  policyId: string;
  policyType: string;
  sentimentScore: number;
  churnRisk: "Low" | "Medium" | "High";
  interactions: { date: string; type: string; summary: string }[];
}

export const customers: Customer[] = [
  {
    id: "C-001", name: "Rajesh Kumar", email: "rajesh@email.com", phone: "+91 98765 43210",
    policyId: "INS-4521", policyType: "Health", sentimentScore: 72, churnRisk: "Medium",
    interactions: [
      { date: "2026-04-03", type: "WhatsApp", summary: "Renewal reminder sent" },
      { date: "2026-04-01", type: "Email", summary: "Policy expiry notification" },
      { date: "2026-03-28", type: "Call", summary: "Discussed premium options" },
    ],
  },
  {
    id: "C-002", name: "Priya Sharma", email: "priya@email.com", phone: "+91 98765 43211",
    policyId: "INS-4522", policyType: "Life", sentimentScore: 91, churnRisk: "Low",
    interactions: [
      { date: "2026-04-02", type: "WhatsApp", summary: "Renewal confirmed" },
      { date: "2026-03-30", type: "Email", summary: "Thank you for renewal" },
    ],
  },
  {
    id: "C-003", name: "Amit Patel", email: "amit@email.com", phone: "+91 98765 43212",
    policyId: "INS-4523", policyType: "Motor", sentimentScore: 45, churnRisk: "High",
    interactions: [
      { date: "2026-04-03", type: "Call", summary: "Customer expressed dissatisfaction with claim process" },
      { date: "2026-04-01", type: "WhatsApp", summary: "Follow-up on pending claim" },
      { date: "2026-03-25", type: "Email", summary: "Claim status update" },
    ],
  },
];

export interface Campaign {
  id: string;
  name: string;
  status: "Active" | "Scheduled" | "Completed" | "Draft";
  channels: string[];
  audience: number;
  sent: number;
  opened: number;
  scheduledDate: string;
}

export const campaigns: Campaign[] = [
  { id: "CAM-001", name: "Q1 Renewal Push", status: "Completed", channels: ["WhatsApp", "Email"], audience: 500, sent: 489, opened: 412, scheduledDate: "2026-03-01" },
  { id: "CAM-002", name: "Health Insurance Awareness", status: "Active", channels: ["Email", "Call"], audience: 320, sent: 280, opened: 195, scheduledDate: "2026-04-01" },
  { id: "CAM-003", name: "Motor Insurance Promo", status: "Scheduled", channels: ["WhatsApp"], audience: 150, sent: 0, opened: 0, scheduledDate: "2026-04-15" },
  { id: "CAM-004", name: "Re-engagement Drive", status: "Draft", channels: ["WhatsApp", "Email", "Call"], audience: 0, sent: 0, opened: 0, scheduledDate: "" },
];

export const churnRiskCustomers = [
  { id: "C-003", name: "Amit Patel", score: 85, reason: "Negative sentiment + delayed claim" },
  { id: "C-010", name: "Ravi Verma", score: 78, reason: "No engagement in 60 days" },
  { id: "C-015", name: "Sunita Nair", score: 72, reason: "Competitor inquiry detected" },
  { id: "C-008", name: "Kavita Joshi", score: 68, reason: "Premium increase complaint" },
];

export const sentimentTrend = [
  { week: "W1", positive: 62, neutral: 25, negative: 13 },
  { week: "W2", positive: 58, neutral: 28, negative: 14 },
  { week: "W3", positive: 55, neutral: 27, negative: 18 },
  { week: "W4", positive: 60, neutral: 26, negative: 14 },
  { week: "W5", positive: 64, neutral: 24, negative: 12 },
  { week: "W6", positive: 57, neutral: 29, negative: 14 },
];

export const communicationLogs = {
  whatsapp: [
    { id: 1, customer: "Rajesh Kumar", message: "Hi Rajesh, your health insurance policy INS-4521 is expiring on April 10. Reply YES to renew.", timestamp: "2026-04-03 10:30 AM", status: "Delivered" },
    { id: 2, customer: "Priya Sharma", message: "Thank you for renewing your policy! Your new policy document has been generated.", timestamp: "2026-04-02 02:15 PM", status: "Read" },
    { id: 3, customer: "Amit Patel", message: "Hi Amit, we noticed your claim is pending. Our team will reach out shortly.", timestamp: "2026-04-01 11:00 AM", status: "Delivered" },
    { id: 4, customer: "Sneha Reddy", message: "Urgent: Your policy expires in 5 days. Call us to discuss renewal options.", timestamp: "2026-04-03 09:00 AM", status: "Read" },
  ],
  email: [
    { id: 1, customer: "Rajesh Kumar", message: "Subject: Policy Renewal Reminder — Your health insurance is expiring soon", timestamp: "2026-04-01 08:00 AM", status: "Opened" },
    { id: 2, customer: "Neha Gupta", message: "Subject: Welcome to Your Renewed Policy — Thank you for your continued trust", timestamp: "2026-04-02 10:00 AM", status: "Opened" },
    { id: 3, customer: "Vikram Singh", message: "Subject: Travel Insurance Benefits — Explore add-on covers for your upcoming trip", timestamp: "2026-03-30 03:00 PM", status: "Sent" },
  ],
  calls: [
    { id: 1, customer: "Amit Patel", message: "Discussed claim processing timeline. Customer requested callback in 2 days.", timestamp: "2026-04-03 11:30 AM", status: "Completed" },
    { id: 2, customer: "Rajesh Kumar", message: "Explained premium adjustment options. Customer is considering renewal.", timestamp: "2026-03-28 02:00 PM", status: "Completed" },
    { id: 3, customer: "Sneha Reddy", message: "Attempted contact — no answer. Voicemail left.", timestamp: "2026-04-02 04:30 PM", status: "Missed" },
  ],
};

export const automationRules = [
  { id: 1, name: "15-Day Renewal Reminder", description: "Send WhatsApp + Email reminder 15 days before policy expiry", stage: "15 Days", enabled: true, channel: "WhatsApp + Email" },
  { id: 2, name: "7-Day Follow-up", description: "Follow-up call for customers who haven't responded to initial reminder", stage: "7 Days", enabled: true, channel: "Call" },
  { id: 3, name: "30-Day Re-engagement", description: "Send personalized offer to customers who missed renewal deadline", stage: "30 Days", enabled: false, channel: "WhatsApp + Email" },
  { id: 4, name: "90-Day Win-back Campaign", description: "Launch re-engagement campaign for lapsed policies", stage: "90 Days", enabled: false, channel: "Email + Call" },
];

export const messageTemplates = [
  { id: 1, name: "Renewal Reminder", category: "Renewal", content: "Hi {{name}}, your {{policy_type}} policy ({{policy_id}}) expires on {{expiry_date}}. Renew now to continue uninterrupted coverage. Reply YES or call us at 1800-XXX-XXXX." },
  { id: 2, name: "Follow-up Message", category: "Follow-up", content: "Hi {{name}}, we noticed you haven't renewed your policy yet. We're here to help — would you like to discuss your options? Reply CALL and we'll reach out." },
  { id: 3, name: "Thank You — Renewal", category: "Confirmation", content: "Thank you, {{name}}! Your {{policy_type}} policy has been renewed successfully. Policy ID: {{policy_id}}. Stay protected!" },
];
