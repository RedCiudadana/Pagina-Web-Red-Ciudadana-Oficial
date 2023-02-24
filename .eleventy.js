const moment = require("moment");
const now = new Date();

module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats("njk,html,md");
    
    eleventyConfig.addPassthroughCopy('src');
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('fancybox');
    eleventyConfig.addPassthroughCopy('super-sidebar');
    eleventyConfig.addPassthroughCopy('admin');

    eleventyConfig.addNunjucksFilter("limit", function(array, limit) {
        return array.slice(0, limit);
    });

    eleventyConfig.addNunjucksFilter("limitPart", function(array, limit1, limit2) {
        return array.slice(limit1, limit2);
    });

    eleventyConfig.addFilter("dateFormat", function(date, format) {
        return moment(date).format(format);
    });

    eleventyConfig.addCollection('podcastsHighlighted', (collectionApi) => {
        return collectionApi.getFilteredByTag('podcasts').filter((item) => {
            return item.data.highlight == true;
        });
    });

    eleventyConfig.addCollection('addsHighlighted', (collectionApi) => {
        return collectionApi.getFilteredByTag('adds').filter((item) => {
            return item.data.highlight == true;
        });
    });

    eleventyConfig.addCollection('tiktoksHighlighted', (collectionApi) => {
        return collectionApi.getFilteredByTag('tiktoks').filter((item) => {
            return item.data.highlight == true;
        });
    });
}