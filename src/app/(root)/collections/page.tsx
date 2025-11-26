import { db } from "@/lib/db";
import { collections, productCollections } from "@/lib/db/schema";
import { eq, sql } from "drizzle-orm";
import Link from "next/link";

export default async function CollectionsPage() {
  const allCollections = await db
    .select({
      id: collections.id,
      name: collections.name,
      slug: collections.slug,
      productCount: sql<number>`count(${productCollections.productId})::int`,
    })
    .from(collections)
    .leftJoin(productCollections, eq(collections.id, productCollections.collectionId))
    .groupBy(collections.id);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-heading-1 mb-4 text-dark-900">Collections</h1>
        <p className="text-body text-dark-700">
          Explore our curated collections of premium footwear
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {allCollections.map((collection) => (
          <Link
            key={collection.id}
            href={`/products?collection=${collection.slug}`}
            className="group overflow-hidden rounded-lg border border-light-300 bg-light-100 transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[16/9] bg-gradient-to-br from-light-200 to-light-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-heading-2 text-dark-400">
                  {collection.name}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-heading-3 mb-2 text-dark-900 group-hover:text-dark-700">
                {collection.name}
              </h2>
              <p className="text-small text-dark-600">
                {collection.productCount} {collection.productCount === 1 ? 'product' : 'products'}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {allCollections.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-body text-dark-600">No collections available at the moment.</p>
        </div>
      )}
    </div>
  );
}
