const CleanCSS = require("clean-css");
const Image = require('@11ty/eleventy-img');
const util = require('util');

async function thumbnailShortcode(src, alt, position) {
    // Make sure alt is provided
    if (alt === undefined) {
        throw new Error(`Missing \`alt\` on myImage from: ${src}`);
    }

    // Generate images
    let metadata = await Image(src, {
        widths: [1200, 750],
        formats: ["webp"],
        outputDir: '_site/assets/images',
        urlPath: '/assets/images'
    });

    let images = metadata.webp;
    return `<a class="thumbnail" href="${images[1].url}" data-position="${position}"><img src="${images[0].url}" alt="${alt}" /></a>`;
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/");
    eleventyConfig.addPassthroughCopy("admin/config.yml");

    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });
    eleventyConfig.addFilter('console', function (value) {
        const str = util.inspect(value);
        return `<div style="white-space: pre-wrap;">${unescape(str)}</div>;`
    });

    eleventyConfig.addAsyncShortcode("thumbnail", thumbnailShortcode);

    eleventyConfig.addWatchTarget("./admin/");
};