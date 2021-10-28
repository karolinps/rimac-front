const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components"),
      "@elements": path.resolve(__dirname, "src/components/elements"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@templates": path.resolve(__dirname, "src/components/templates"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@modules": path.resolve(__dirname, "src/components/modules"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
};
