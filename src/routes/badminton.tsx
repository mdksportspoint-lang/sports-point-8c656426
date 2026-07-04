import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "@/components/CategoryHero";
import { CategoryProducts } from "@/components/CategoryProducts";
import { ContactStrip } from "@/components/ContactStrip";
import img from "@/assets/badminton.jpg";

export const Route = createFileRoute("/badminton")({
  head: () => ({
    meta: [
      { title: "Badminton Equipment — Rackets, Shuttlecocks, Shoes | Sports Point" },
      {
        name: "description",
        content:
          "Premium badminton rackets, shuttlecocks, shoes, grip tapes and kit bags at Sports Point Madukkarai.",
      },
      { property: "og:title", content: "Badminton Collection — Sports Point" },
      { property: "og:description", content: "Precision meets performance with premium badminton gear." },
      { property: "og:url", content: "/badminton" },
      { property: "og:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/badminton" }],
  }),
  component: Badminton,
});

function Badminton() {
  return (
    <>
      <CategoryHero
        eyebrow="Badminton"
        title="Precision Meets Performance"
        subtitle="From recreational to tournament play — rackets and gear that match your level of intent."
        image={img}
      />
      <CategoryProducts category="badminton" title="Featured Badminton Products" />
      <ContactStrip />
    </>
  );
}
