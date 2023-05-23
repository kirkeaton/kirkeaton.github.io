module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://github.com/kirkeaton',
        permanent: false,
      },
    ];
  },
};