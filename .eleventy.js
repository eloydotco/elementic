const rssPlugin = require('@11ty/eleventy-plugin-rss');
const {
  extractExcerpt,
  getCategoriesCollection,
  filterByCategory,
} = require('./utils/eleventy-utils');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addShortcode('excerpt', extractExcerpt);
  eleventyConfig.addCollection('categories', getCategoriesCollection);
  eleventyConfig.addFilter('filterByCategory', filterByCategory);

  return {
    dir: {
      input: 'blog',
    },
  };
};
