import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "@/components/CategoryHero";
import { CategoryProducts } from "@/components/CategoryProducts";
import { ContactStrip } from "@/components/ContactStrip";
import img from "@/assets/basketball.jpg";

export const Route = createFileRoute("/basketball")({
  head: () => ({
    meta: [
      { title: "Basketball Equipment — Balls, Shoes, Nets | Sports Point" },
      {
        name: "description",
        content:
          "Basketballs, basketball shoes, training accessories, nets and cones at Sports Point Madukkarai.",
      },
      { property: "og:title", content: "Basketball Collection — Sports Point" },
      { property: "og:description", content: "Elevate your game with premium basketball gear." },
      { property: "og:url", content: "/basketball" },
      { property: "og:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/basketball" }],
  }),
  component: Basketball,
});

function Basketball() {
  return (
    <>
      <CategoryHero
        eyebrow="Basketball"
        title="Elevate Your Game"
        subtitle="Indoor, outdoor, training — basketballs and gear engineered for performance on every court."
        image={img}
      />
      <CategoryProducts category="basketball" title="Featured Basketball Products" />
      <ContactStrip />
    </>
  );
}
