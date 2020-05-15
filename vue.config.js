module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://antredesdragons-env.eba-kybrbrhs.eu-central-1.elasticbeanstalk.com",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
