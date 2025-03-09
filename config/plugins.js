module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: env("VERCEL_DEPLOY_HOOK"),
      apiToken: env("VERCEL_API_TOKEN"),
      appFilter: env("VERCEL_APP_FILTER"),
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
