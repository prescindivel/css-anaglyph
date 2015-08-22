module.exports = {
  dev: {
    bsFiles: {
      src : [
      '**/*.css',
      '**/*.html',
      '**/*.js'
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
