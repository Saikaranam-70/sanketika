const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Define your website's base URL
const baseUrl = 'https://sanketika.vercel.app';

// Define your static routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add more routes as needed
];

// Create a sitemap
const generateSitemap = async () => {
  const smStream = new SitemapStream({ hostname: baseUrl });

  // Add routes to the sitemap
  routes.forEach(route => smStream.write(route));

  smStream.end();

  // Write the sitemap to a file
  const sitemap = await streamToPromise(smStream);
  const writeStream = createWriteStream('./public/sitemap.xml');
  writeStream.write(sitemap);
  writeStream.end();

  console.log('Sitemap generated successfully!');
};

generateSitemap();