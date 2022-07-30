const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    // Return your Object options:

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/main.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/img');
    eleventyConfig.addPassthroughCopy('./src/projects');
    eleventyConfig.addPassthroughCopy('./src/admin');

    eleventyConfig.addFilter("postDate", (dateObj) => {

      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })

    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };