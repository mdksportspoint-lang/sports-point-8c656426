import { FeaturedProducts } from "./FeaturedProducts";
import { ScrollReveal } from "./ScrollReveal";
import { productsByCategory, type ProductCategory } from "@/lib/products";

export function CategoryProducts({
  category,
  title = "Available Products",
  description,
}: {
  category: ProductCategory;
  title?: string;
  description?: string;
}) {
  const products = productsByCategory(category);

  if (products.length === 0) {
    return (
      <section className="py-16 sm:py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="rounded-2xl border border-dashed border-border bg-background px-6 py-16 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
                Coming soon
              </span>
              <h2 className="mt-4 font-display font-extrabold text-2xl sm:text-3xl">
                Products coming soon
              </h2>
              <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                We're updating this collection. Visit our store or message us on WhatsApp for current stock.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return <FeaturedProducts title={title} description={description} products={products} />;
}
