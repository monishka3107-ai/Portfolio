/** Intentional, on-brand loading state shown during route transitions. */
export default function Loading() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center gap-6 bg-background">
      <div className="relative h-14 w-14">
        <span className="absolute inset-0 animate-ping rounded-2xl bg-accent/30" />
        <span className="absolute inset-0 flex items-center justify-center rounded-2xl bg-accent/15 font-mono text-accent">
          MY
        </span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:-0.2s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:-0.1s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent" />
      </div>
    </div>
  );
}
