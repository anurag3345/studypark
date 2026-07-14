import { Compass } from "lucide-react";
import { Seo } from "@/components/common/Seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Head back to Study Park Education Network's homepage to keep exploring."
        path="/404"
        noindex
      />
      <section className="flex min-h-[70vh] items-center bg-navy-800 py-24">
        <Container className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-gold-300">
            <Compass aria-hidden="true" className="h-8 w-8" />
          </div>
          <p className="eyebrow mt-6 text-gold-300">Error 404</p>
          <h1 className="mt-3 text-display-lg font-semibold text-white text-balance">
            Looks like this path doesn't lead anywhere
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            The page you were looking for may have moved or no longer exists. Let's get you back
            on track.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/" variant="gold" size="lg">
              Back to homepage
            </Button>
            <Button to="/contact" variant="outline" size="lg" className="border-white/25 text-white hover:bg-white/10">
              Contact us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
