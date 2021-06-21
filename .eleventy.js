module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('./src/main.js');
  eleventyConfig.addWatchTarget('./src/main.js');

  return {
    dir: {
      input: 'src',
    }
  }
};
