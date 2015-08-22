module.exports = {
  dev: {
    bsFiles: {
      src : [
      'assets/css/*.css',
      '*.html'
      ]
    },
    options: {
      logPrefix: "Css Anaglyph Text",
      logConnections: true,
      watchTask: true,
      ghostMode: {
        clicks: true,
        scroll: true,
        forms: true
      },
      server: './'
    }
  }
};
