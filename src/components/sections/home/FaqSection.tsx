import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/data/faq";

export function FaqSection() {
  return (
    <section id="faq" className="bg-surface-muted py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeader
          eyebrow="Common questions"
          title="Frequently asked questions"
          align="center"
          className="mx-auto"
        />
        <div className="mt-12">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
