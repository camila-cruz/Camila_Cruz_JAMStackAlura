module.exports = {
  async headers() {
    return [{
      source: '/(.*)',
      headers: [{
        key: 'X-Robots-Tag',
        value: 'all',
      }],
    }];
  },
};
