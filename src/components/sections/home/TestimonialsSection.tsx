import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { testimonials } from "@/data/testimonials";

import "swiper/css";
import "swiper/css/pagination";

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Student voices"
          title="Real students, real outcomes"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14">
          <Swiper
            modules={[Pagination, Autoplay, Keyboard, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            keyboard={{ enabled: true }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: true }}
            a11y={{ enabled: true, prevSlideMessage: "Previous testimonial", nextSlideMessage: "Next testimonial" }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="!pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <figure className="flex h-full flex-col rounded-2xl border border-surface-border bg-white p-6 shadow-card">
                  <Quote aria-hidden="true" className="h-6 w-6 text-navy-200" />
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                    “{testimonial.quote}”
                  </blockquote>
                  <div className="mt-2 flex items-center gap-0.5" aria-label={`Rated ${testimonial.rating} out of 5`}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                        fill={index < testimonial.rating ? "#F5941F" : "none"}
                        stroke={index < testimonial.rating ? "#F5941F" : "#CBD2D9"}
                      />
                    ))}
                  </div>
                  <figcaption className="mt-4 border-t border-surface-border pt-4">
                    <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-xs text-ink-soft">
                      {testimonial.university}, {testimonial.destination}
                    </p>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
