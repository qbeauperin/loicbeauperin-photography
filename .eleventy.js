const CleanCSS = require("clean-css");
const util = require('util');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/");

    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });
    eleventyConfig.addFilter('console', function (value) {
        const str = util.inspect(value);
        return `<div style="white-space: pre-wrap;">${unescape(str)}</div>;`
    });
    // eleventyConfig.addWatchTarget("css/");
};