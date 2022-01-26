function extractExcerpt(post) {
  const closingTag = '</p>';
  if (post.templateContent?.includes(closingTag)) {
    const excerptEnd = post.templateContent.indexOf(closingTag);
    return post.templateContent.substr(0, excerptEnd + closingTag.length);
  }
  return post.templateContent ?? '';
}

function filterByCategory(posts, category) {
  return posts
    .map((post) => post.data.categories.map((cat) => cat.toLowerCase()))
    .filter((categories) => categories.includes(category.toLowerCase()));
}

function getCategoriesCollection(collectionApi) {
  return collectionApi
    .getFilteredByTag('post')
    .map((post) => post.data.categories ?? [])
    .reduce((prev, curr) => [...prev, ...curr.filter((cat) => !prev.includes(cat))], []);
}

module.exports = { extractExcerpt, filterByCategory, getCategoriesCollection };
