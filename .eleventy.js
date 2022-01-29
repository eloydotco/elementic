const rssPlugin = require('@11ty/eleventy-plugin-rss');
const {
  extractExcerpt,
  getCategoriesCollection,
  filterByCategory,
  filterDate,
} = require('./utils/eleventy-utils');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addShortcode('excerpt', extractExcerpt);
  eleventyConfig.addCollection('categories', getCategoriesCollection);
  eleventyConfig.addFilter('filterByCategory', filterByCategory);
  eleventyConfig.addFilter('niceDate', filterDate);

  return {
    dir: {
      input: 'blog',
      pathPrefix: '/elementic/',
    },
  };
};
