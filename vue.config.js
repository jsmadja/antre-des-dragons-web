module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://192.168.1.44:8080",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
