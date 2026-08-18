import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6">
      <AuroraBackground />
      <div className="relative text-center">
        <p className="text-gradient text-7xl font-semibold tracking-tight sm:text-8xl">404</p>
        <h1 className="mt-4 text-xl font-semibold sm:text-2xl">This page wandered off.</h1>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist — but there&apos;s plenty to explore
          back home.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
