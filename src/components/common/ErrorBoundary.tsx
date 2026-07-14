import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // In production this would report to a monitoring service.
    console.error("Unhandled UI error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container-page flex min-h-[50vh] flex-col items-center justify-center gap-4 py-24 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-danger/10 text-danger">
            <AlertTriangle aria-hidden="true" className="h-7 w-7" />
          </div>
          <h1 className="text-display-md font-semibold">Something went wrong</h1>
          <p className="max-w-md text-sm text-ink-soft">
            We hit an unexpected error loading this page. Please refresh, or head back to the homepage.
          </p>
          <Button href="/">Back to homepage</Button>
        </div>
      );
    }

    return this.props.children;
  }
}
