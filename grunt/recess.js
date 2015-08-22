module.exports = {
  dist: {
    options: {
      compress: true,
      compile: true
    },
    files: {
      'assets/css/main.min.css': 'assets/less/main.less'
    }
  }
};
