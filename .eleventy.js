const {
  extractExcerpt,
  getCategoriesCollection,
  filterByCategory,
} = require('./utils/eleventy-utils');

module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode('excerpt', extractExcerpt);
  eleventyConfig.addCollection('categories', getCategoriesCollection);
  eleventyConfig.addFilter('filterByCategory', filterByCategory);

  return {
    dir: {
      input: 'blog',
    },
  };
};
