module.exports = {
  ci: {
    collect: {
      staticDistDir: './.next',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
