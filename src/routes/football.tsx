import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "@/components/CategoryHero";
import { CategoryProducts } from "@/components/CategoryProducts";
import { ContactStrip } from "@/components/ContactStrip";
import img from "@/assets/football.jpg";

export const Route = createFileRoute("/football")({
  head: () => ({
    meta: [
      { title: "Football Equipment — Balls, Studs, Gloves | Sports Point" },
      {
        name: "description",
        content:
          "Footballs, studs, shin guards, goalkeeper gloves, training cones, jerseys and nets at Sports Point Madukkarai.",
      },
      { property: "og:title", content: "Football Collection — Sports Point" },
      { property: "og:description", content: "Play like champions with premium football gear." },
      { property: "og:url", content: "/football" },
      { property: "og:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/football" }],
  }),
  component: Football,
});

function Football() {
  return (
    <>
      <CategoryHero
        eyebrow="Football"
        title="Play Like Champions"
        subtitle="Match-ready footballs, training gear and goalkeeper essentials for every player on the pitch."
        image={img}
      />
      <CategoryProducts category="football" title="Featured Football Products" />
      <ContactStrip />
    </>
  );
}
