module.exports = {
  settings: {
    cors: {
      origin: [
        "https://kube-blog.herokuapp.com",
        "http://localhost:1337",
        "https://dev.klcube.net/",
        "https://dev.klcube.net",
        "http://localhost:3000",
      ],
    },
    gzip: {
      enabled: true,
      options: {
        br: false,
      },
    },
  },
};
