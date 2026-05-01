const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dejin.io';

export const metadata = {
  title: 'Dejin — AI Systems That Work',
  description: 'From AI ambition to working systems — guided. We build working AI systems in 3 weeks that transform your operations.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dejin — AI Systems That Work',
    description: 'From AI ambition to working systems — guided. We build working AI systems in 3 weeks that transform your operations.',
    url: siteUrl,
    siteName: 'Dejin',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dejin — AI Systems That Work',
    description: 'From AI ambition to working systems — guided.',
  },
};

export function generatePageMetadata(page) {
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${siteUrl}${page.path}`,
      type: 'website',
    },
  };
}
