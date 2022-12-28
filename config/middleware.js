module.exports = {
  settings: {
    cors: {
      origin: ["*"],
    },
    gzip: {
      enabled: true,
      options: {
        br: false,
      },
    },
  },
};
