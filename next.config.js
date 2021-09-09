// const withPWA = require("next-pwa");
// module.exports = withPWA({
// rewrites: async () => {
//   return [{ source: "/", destination: "/root" }];
// },
//   env: {
//     GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
//     // CLOUDINARY_URL: process.env.CLOUDINARY_URL,
//     // CONTACT_SLACK_WEBHOOK_URL: process.env.CONTACT_SLACK_WEBHOOK_URL,
//     GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
//     GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
//   },
//   pwa: {
//     dest: "/public/pwa/sw",
//   },
//   pageExtensions: ["page.tsx", "page.ts"],
// });

// TODO: ServiceWorkerのエラー解決できるまでPWAは無効化
module.exports = {
  rewrites: async () => {
    return [{ source: "/", destination: "/root" }];
  },
  env: {
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
    // CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    // CONTACT_SLACK_WEBHOOK_URL: process.env.CONTACT_SLACK_WEBHOOK_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
  pageExtensions: ["page.tsx", "page.ts"],
};
