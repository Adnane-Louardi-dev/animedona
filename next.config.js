module.exports = {
  reactStrictMode: true,
  env: {
    googleAnalyticsID: "UA-220176845-1",
  },
  images: {
    domains: ["cdn.myanimelist.net"],
  },
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: "https://animethemes-api.herokuapp.com/api/v1/:path*",
      },
    ];
  },
};
