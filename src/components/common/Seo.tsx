import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/lib/siteConfig";
import { buildOrganizationSchema, buildLocalBusinessSchema } from "@/lib/schema";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  /** Additional JSON-LD schema objects specific to this page (e.g. breadcrumbs, FAQ). */
  schema?: Record<string, unknown>[];
  noindex?: boolean;
}

/**
 * Applies unique per-page metadata: title, description, canonical URL,
 * Open Graph, Twitter Cards, robots directives, and JSON-LD structured data.
 */
export function Seo({ title, description, path, schema = [], noindex = false }: SeoProps) {
  const fullTitle = `${title} | ${siteConfig.shortName}`;
  const canonicalUrl = `${siteConfig.url}${path}`;
  const allSchema = [buildOrganizationSchema(), buildLocalBusinessSchema(), ...schema];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {allSchema.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}
