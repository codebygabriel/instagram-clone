const withStyles = require('next-images');

module.exports = withStyles({
  esModule: true,  
  images: {
    disableStaticImages: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});