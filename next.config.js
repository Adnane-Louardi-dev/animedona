module.exports = {
  reactStrictMode: true,
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
