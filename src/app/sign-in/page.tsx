import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f4f5ef] px-4 py-8">
      {/* Signup Card */}
      <Card className="w-full max-w-md bg-white border border-[#e5e7df] rounded-2xl shadow-xl overflow-hidden">
        {/* Top Design */}
        <div className="h-2 bg-violet-500 w-full" />

        <CardHeader className="space-y-3 text-center pt-8">
          <CardTitle className="text-3xl font-bold tracking-tight text-[#26382c]">
            Sign In
          </CardTitle>

          <CardDescription className="text-gray-500 text-sm leading-relaxed">
            Welcome to PeoplePulse! Create your account and get started with
            smarter workforce management.
          </CardDescription>
        </CardHeader>

        {/* Form Fields */}
        <CardContent className="space-y-5 px-7 pt-5">
          {/* Full Name */}

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Email Address
            </label>

            <Input
              type="email"
              placeholder="Enter your email address"
              className="h-12 rounded-xl border-gray-200 bg-[#fafbf8] focus-visible:ring-[#315c43]"
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Password
            </label>

            <Input
              type="password"
              placeholder="Enter your password"
              className="h-12 rounded-xl border-gray-200 bg-[#fafbf8] focus-visible:ring-[#315c43]"
              required
            />
          </div>

          {/* Create Account Button */}
          <Button
            type="submit"
            className="w-full h-12 rounded-xl bg-violet-500 hover:bg-violet-600 text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300"
          >
            Sign In
          </Button>
        </CardContent>

        {/* Footer */}
        <CardFooter className="flex flex-col gap-4 justify-center pb-8 pt-5">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="font-bold text-[#315c43] hover:text-[#244832] hover:underline transition-colors"
            >
              Sign up
            </Link>
          </p>

          <p className="text-xs text-gray-400 text-center">
            © 2026 PeoplePulse. All rights reserved.
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
