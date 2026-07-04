import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "@/components/CategoryHero";
import { CategoryProducts } from "@/components/CategoryProducts";
import { ContactStrip } from "@/components/ContactStrip";
import img from "@/assets/volleyball.jpg";

export const Route = createFileRoute("/volleyball")({
  head: () => ({
    meta: [
      { title: "Volleyball Equipment — Balls, Nets, Knee Supports | Sports Point" },
      {
        name: "description",
        content:
          "Volleyballs, nets, knee supports and training equipment at Sports Point Madukkarai.",
      },
      { property: "og:title", content: "Volleyball Collection — Sports Point" },
      { property: "og:description", content: "Power every serve with premium volleyball gear." },
      { property: "og:url", content: "/volleyball" },
      { property: "og:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/volleyball" }],
  }),
  component: Volleyball,
});

function Volleyball() {
  return (
    <>
      <CategoryHero
        eyebrow="Volleyball"
        title="Power Every Serve"
        subtitle="Tournament-grade volleyballs, nets and support gear to keep you spiking through the match."
        image={img}
      />
      <CategoryProducts category="volleyball" title="Featured Volleyball Products" />
      <ContactStrip />
    </>
  );
}
