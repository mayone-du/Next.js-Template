const withPWA = require("next-pwa");
module.exports = withPWA({
  env: {
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
    // CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    // CONTACT_SLACK_WEBHOOK_URL: process.env.CONTACT_SLACK_WEBHOOK_URL,
  },
  pwa: {
    dest: "public/pwa/sw",
  },
  pageExtensions: ["page.tsx"],
});
