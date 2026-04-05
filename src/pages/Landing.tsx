import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Bot, 
  MessageSquare, 
  BarChart, 
  Users, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Zap,
  CheckCircle2,
  PhoneCall,
  Activity,
  Calendar,
  CheckCircle,
  Clock,
  TrendingUp,
  AlertTriangle,
  Sparkles,
  ChevronRight
} from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-primary/20 scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-26 flex items-center justify-between">
          <img src="/Probus_new.svg" alt="Probus Insurance" className="h-20 w-auto object-contain" />
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#solution" className="hover:text-primary transition-colors">Platform</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="font-medium rounded-full">Login</Button>
            </Link>
            <Link to="/login">
              <Button className="rounded-full shadow-md hover:shadow-lg transition-all">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Probus Renewal Intelligence 2.0 Live
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 leading-tight">
            AI-Powered Insurance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Renewal & Customer Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Automate renewals, reduce churn, and seamlessly engage customers across WhatsApp, Email, and Voice—all from one centralized platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/login">
              <Button size="lg" className="w-full sm:w-auto rounded-full h-14 px-8 text-lg font-medium shadow-xl hover:shadow-primary/25 transition-all">
                Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="#about">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-full text-lg border-slate-300">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="px-6 py-10 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-slate-200/60 bg-white shadow-2xl p-2 md:p-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white pointer-events-none" />
            <div className="rounded-2xl border border-slate-100 overflow-hidden bg-slate-50 relative z-10 grid grid-cols-1 md:grid-cols-3 aspect-[16/9] md:aspect-[21/9]">
              {/* Fake dashboard UI */}
              <div className="col-span-2 border-r border-slate-200 p-6 flex flex-col bg-white">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-bold text-xl text-slate-900">Renewal Overview</h3>
                    <p className="text-sm text-slate-500">Pipeline health and conversion metrics</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-md hover:bg-slate-200 cursor-pointer transition-colors">
                    Last 30 Days <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
                
                {/* 4 KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {/* Card 1 */}
                  <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="h-8 w-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Calendar className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="text-sm font-medium text-slate-500 mb-1">Expiring Soon</div>
                    <div className="flex items-end justify-between">
                      <div className="text-2xl font-bold text-slate-900">128</div>
                      <div className="text-xs font-medium text-slate-500 mb-1">Next 30 days</div>
                    </div>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:border-green-200 hover:shadow-md transition-all group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" /> 12%
                      </div>
                    </div>
                    <div className="text-sm font-medium text-slate-500 mb-1">Completed</div>
                    <div className="text-2xl font-bold text-slate-900">92</div>
                  </div>
                  
                  {/* Card 3 */}
                  <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:border-amber-200 hover:shadow-md transition-all group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="h-8 w-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                    </div>
                    <div className="text-sm font-medium text-slate-500 mb-1">Pending Follow-ups</div>
                    <div className="text-2xl font-bold text-slate-900">36</div>
                  </div>
                  
                  {/* Card 4 */}
                  <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="h-8 w-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Activity className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="text-sm font-medium text-slate-500 mb-1">Renewal Rate</div>
                    <div className="flex items-end gap-2">
                       <div className="text-2xl font-bold text-slate-900">72%</div>
                       <div className="text-xs font-medium text-emerald-600 flex items-center mb-1">
                         <TrendingUp className="h-3 w-3 mr-0.5" /> 4%
                       </div>
                    </div>
                  </div>
                </div>

                {/* Stacked Chart Section */}
                <div className="flex-1 bg-white rounded-xl border border-slate-100 p-5 shadow-sm flex flex-col group relative">
                  <div className="flex justify-between items-center mb-4">
                     <h4 className="font-semibold text-slate-800 text-sm">Monthly Renewal Performance</h4>
                     <div className="flex gap-3 text-xs font-medium">
                       <div className="flex items-center gap-1.5 text-slate-600"><div className="w-2 h-2 rounded-full bg-blue-600" /> Renewed</div>
                       <div className="flex items-center gap-1.5 text-slate-600"><div className="w-2 h-2 rounded-full bg-blue-200" /> Pending</div>
                       <div className="flex items-center gap-1.5 text-slate-600"><div className="w-2 h-2 rounded-full bg-slate-200" /> Lost</div>
                     </div>
                  </div>
                  
                  <div className="flex-1 w-full flex items-end justify-between gap-2 md:gap-4 relative pt-4">
                     {/* Y-axis placeholders */}
                     <div className="absolute left-0 top-6 bottom-0 w-full flex flex-col justify-between text-[10px] text-slate-400 border-l border-b border-slate-100 pb-5 pl-2 z-0">
                        <span>100</span>
                        <span>50</span>
                        <span>0</span>
                     </div>
                     
                     {[
                       { mon: 'Jan', data: [60, 20, 10] },
                       { mon: 'Feb', data: [65, 15, 10] },
                       { mon: 'Mar', data: [55, 30, 15] },
                       { mon: 'Apr', data: [75, 10, 5] },
                       { mon: 'May', data: [70, 20, 5] },
                       { mon: 'Jun', data: [85, 10, 2] },
                       { mon: 'Jul', data: [90, 5, 2] }
                     ].map((item, idx) => (
                       <div key={idx} className="flex-1 flex flex-col justify-end h-full relative z-10 group/bar mt-4 cursor-pointer">
                         <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-lg">
                           {item.mon}: {item.data[0]} Renewed
                         </div>
                         <div className="w-full bg-slate-200 rounded-t-sm hover:brightness-95 transition-all" style={{ height: `${item.data[2]}%` }} />
                         <div className="w-full bg-blue-200 hover:brightness-95 transition-all" style={{ height: `${item.data[1]}%` }} />
                         <div className="w-full bg-blue-600 rounded-b-sm hover:brightness-110 transition-all" style={{ height: `${item.data[0]}%` }} />
                         <span className="text-[10px] text-slate-400 mt-2 text-center absolute -bottom-5 w-full">{item.mon}</span>
                       </div>
                     ))}
                  </div>
                </div>
              </div>
              
              {/* Right Side: AI Analysis */}
              <div className="hidden md:flex flex-col bg-slate-50/50 p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shrink-0 shadow-sm border border-blue-200/50">
                    <Sparkles className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg leading-tight">AI Insights & Recommendations</h4>
                    <p className="text-xs font-medium text-slate-500">Updated just now</p>
                  </div>
                </div>

                <div className="space-y-4 overflow-y-auto pr-1 pb-4">
                  {/* Card 1: Sentiment */}
                  <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-default">
                    <h5 className="text-sm font-semibold text-slate-800 mb-3">Sentiment Summary</h5>
                    <div className="flex w-full h-2 rounded-full overflow-hidden mb-3">
                      <div className="bg-emerald-500 h-full w-[60%]" title="Positive: 60%" />
                      <div className="bg-amber-400 h-full w-[25%]" title="Neutral: 25%" />
                      <div className="bg-red-400 h-full w-[15%]" title="Negative: 15%" />
                    </div>
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-emerald-700">60% Pos</span>
                      <span className="text-amber-700">25% Neu</span>
                      <span className="text-red-600">15% Neg</span>
                    </div>
                  </div>

                  {/* Card 2: Churn Alert */}
                  <div className="p-4 bg-red-50/50 rounded-xl border border-red-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-110 transition-transform">
                      <AlertTriangle className="h-16 w-16 text-red-500" />
                    </div>
                    <h5 className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2 relative z-10">
                      <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                      Churn Risk Alert
                    </h5>
                    <div className="flex gap-4 mb-4 relative z-10">
                      <div>
                        <div className="text-lg font-bold text-red-600">18</div>
                        <div className="text-xs text-red-800/70 font-medium">High Risk</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-amber-600">42</div>
                        <div className="text-xs text-amber-800/70 font-medium">Medium Risk</div>
                      </div>
                    </div>
                    <button className="relative z-10 w-full py-2 bg-white text-xs font-semibold text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
                      View At-Risk Customers
                    </button>
                  </div>

                  {/* Card 3: Key Insight */}
                  <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow cursor-default">
                    <h5 className="text-sm font-semibold text-blue-900 mb-2 flex items-center gap-1.5">
                      <Bot className="h-4 w-4" /> Key Discovery
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      Customers responding with hesitation (e.g. "Maybe later") show a <strong className="text-slate-800">65% higher churn probability</strong>. Recommend early outreach with loyalty incentives.
                    </p>
                  </div>

                  {/* Card 4: Recommended Actions */}
                  <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-default">
                    <h5 className="text-sm font-semibold text-slate-800 mb-3">Recommended Actions</h5>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        Follow up with 36 pending customers today.
                      </li>
                      <li className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        Send 10% discount offers to 18 high-risk users.
                      </li>
                    </ul>
                  </div>

                  {/* Card 5: Channel Performance */}
                  <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-default flex justify-between items-center">
                    <div className="text-center">
                      <MessageSquare className="h-4 w-4 text-emerald-500 mx-auto mb-1" />
                      <span className="block text-xs font-bold text-slate-800">68%</span>
                    </div>
                    <div className="w-px h-8 bg-slate-100" />
                    <div className="text-center">
                      <Mail className="h-4 w-4 text-primary mx-auto mb-1" />
                      <span className="block text-xs font-bold text-slate-800">34%</span>
                    </div>
                    <div className="w-px h-8 bg-slate-100" />
                    <div className="text-center">
                      <Phone className="h-4 w-4 text-indigo-500 mx-auto mb-1" />
                      <span className="block text-xs font-bold text-slate-800">52%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold tracking-wider uppercase mb-6">
              About Probus Insurance
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              India's Trusted InsurTech Pioneer Since 2002
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We leverage over two decades of deep industry expertise combined with state-of-the-art AI technologies to seamlessly manage life, health, motor, and commercial insurance policies across India.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-3xl font-extrabold text-primary mb-2">12L+</div>
                <div className="font-medium text-slate-700">Policies / Year</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-3xl font-extrabold text-primary mb-2">PAN India</div>
                <div className="font-medium text-slate-700">Robust Presence</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square w-full max-w-md mx-auto bg-gradient-to-tr from-primary/10 to-blue-50 rounded-[3rem] p-10 relative">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
              <div className="w-full h-full bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-8 text-center border border-white relative z-10 transform rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
                <ShieldCheck className="h-20 w-20 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Policy Dilaane Se...</h3>
                <p className="text-lg text-slate-500 font-medium tracking-wide">Claim Dilaane Tak</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section id="solution" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 mb-4">
              Modernizing the Renewal Journey
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="flex h-8 w-8 bg-red-100 text-red-600 rounded-full items-center justify-center text-sm mr-3">✕</span>
                The Old Way
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-3 shrink-0" />
                  <span>Manual follow-ups lead to delayed or missed renewals.</span>
                </li>
                <li className="flex items-start text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-3 shrink-0" />
                  <span>High generic churn rates without understanding root causes.</span>
                </li>
                <li className="flex items-start text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-3 shrink-0" />
                  <span>Zero visibility into customer intent and sentiment prior to expiration.</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary p-8 rounded-3xl shadow-xl text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <h3 className="text-xl font-bold mb-6 flex items-center relative z-10">
                <span className="flex h-8 w-8 bg-white text-primary rounded-full items-center justify-center text-sm mr-3">✓</span>
                Powered by AI
              </h3>
              <ul className="space-y-5 relative z-10">
                 <li className="flex items-start text-white/90 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-white/70 mt-0.5 mr-3 shrink-0" />
                  <span>AI agents deploy personalized, timed omnichannel reminders automatically.</span>
                </li>
                <li className="flex items-start text-white/90 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-white/70 mt-0.5 mr-3 shrink-0" />
                  <span>Real-time conversation intelligence captures intent across calls and chat.</span>
                </li>
                <li className="flex items-start text-white/90 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-white/70 mt-0.5 mr-3 shrink-0" />
                  <span>Predictive churn analytics flag at-risk policies for human intervention.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-3 mb-8 text-center">
             <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Unified Intelligence Platform</h2>
          </div>
          
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
            <Bot className="h-10 w-10 text-primary mb-5" />
            <h4 className="text-xl font-bold text-slate-900 mb-3">AI Renewal Agent</h4>
            <p className="text-slate-600 leading-relaxed">Engages customers precisely when they are most likely to renew, adapting language dynamically.</p>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
            <MessageSquare className="h-10 w-10 text-primary mb-5" />
            <h4 className="text-xl font-bold text-slate-900 mb-3">Omnichannel Comms</h4>
            <p className="text-slate-600 leading-relaxed">Orchestrate outreach effortlessly across WhatsApp, SMS, Email, and Automated Voice Calls.</p>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
            <Activity className="h-10 w-10 text-primary mb-5" />
            <h4 className="text-xl font-bold text-slate-900 mb-3">Sentiment & Churn</h4>
            <p className="text-slate-600 leading-relaxed">Analyze transcript text and customer responses to predict churn risk long before expiration day.</p>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
            <PhoneCall className="h-10 w-10 text-primary mb-5" />
            <h4 className="text-xl font-bold text-slate-900 mb-3">Call Intelligence</h4>
            <p className="text-slate-600 leading-relaxed">Deep transcript analysis extracts insights, blockers, and objections from human and bot voice calls.</p>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
            <Zap className="h-10 w-10 text-primary mb-5" />
            <h4 className="text-xl font-bold text-slate-900 mb-3">Campaign Automation</h4>
            <p className="text-slate-600 leading-relaxed">Design lifecycle workflows that trigger based on policy date, segment limits, and user behaviors.</p>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
            <BarChart className="h-10 w-10 text-primary mb-5" />
            <h4 className="text-xl font-bold text-slate-900 mb-3">Central Dashboard</h4>
            <p className="text-slate-600 leading-relaxed">Complete real-time visibility into renewal funnels, agent performance, and retention analytics.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-blue-900/50 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Start Automating Insurance Renewals Today
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Give your agents superpowers, slash operational costs, and secure higher retention rates instantly.
          </p>
          <Link to="/login">
            <Button size="lg" className="rounded-full h-14 px-10 text-lg font-medium shadow-2xl bg-white text-slate-900 hover:bg-slate-100 transition-all border-0">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 text-slate-500 py-12 px-6 border-t border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <img src="/Probus_new.svg" alt="Probus" className="h-6 opacity-80" />
             <span className="font-semibold text-slate-700">Probus Insurance Pvt. Ltd.</span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Probus Insurance Brokers. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}