import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ShieldCheck } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful login
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        <div className="flex flex-col items-center mb-8">
          <img src="/Probus_new.svg" alt="Probus Insurance" className="h-12 mb-6" />
          <h1 className="text-2xl font-bold text-slate-900 text-center">Welcome back</h1>
          <p className="text-slate-500 mt-2 text-center text-sm">
            Sign in to your AI Renewal & Customer Intelligence dashboard
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Work Email</Label>
            <Input id="email" type="email" placeholder="you@probusinsurance.com" required className="h-11" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                Forgot password?
              </a>
            </div>
            <Input id="password" type="password" required className="h-11" />
          </div>

          <Button type="submit" className="w-full h-11 text-base font-medium rounded-xl">
            Sign In to Dashboard
          </Button>

          <p className="text-center text-sm text-slate-500 pt-4">
            Secured by Probus Authentication{" "}
            <ShieldCheck className="inline-block h-4 w-4 ml-1 text-primary" />
          </p>
        </form>
      </div>
    </div>
  );
}