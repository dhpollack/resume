// http://stackoverflow.com/questions/16996732/using-multiple-page-open-in-single-script
// https://github.com/ariya/phantomjs/blob/master/examples/render_multi_url.js
// Render Multiple URLs to file

var RenderUrlsToFile, arrayOfFiles, arrayOfPaperSizes, pathToRender, system;

pathToRender = "source/assets/pdfs/"

system = require("system");

arrayOfFiles = ["public/duolingo.html"];
arrayOfPaperSizes = [
    {
        format: 'Letter',
        orientation: 'portrait',
        margin: {
            top: '1in',
            bottom: '1in',
            left: '1.25in',
            right: '1.25in'
        }
    },
    {
        format: 'A4',
        orientation: 'portrait',
        margin: '2.5cm'
    }];

/*
Render given urls
@param array of URLs to render
@param callbackPerUrl Function called after finishing each URL, including the last URL
@param callbackFinal Function called after finishing everything
*/
RenderUrlsToFile = function(urls, callbackPerUrl, callbackFinal) {
    var getFilename, next, page, retrieve, urlIndex, webpage;
    urlIndex = 0;
    webpage = require("webpage");
    page = null;
    getFilename = function(uri, format) {
        var matches = uri.match(/^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/i);
        var domain = matches[3];
        var filename = matches[4].replace("/"," ").trim().replace(" ", "-") + matches[6].replace(".html", "");
        
        console.log("Domain: " + domain);
        console.log("File: " + filename);
        return pathToRender + filename + "-" + format + ".pdf";
    };
    next = function(status, url, file) {
        page.close();
        callbackPerUrl(status, url, file);
        return retrieve();
    };
    retrieve = function() {
        var url;
        if (urls.length > 0) {
            url = urls.shift();
            urlIndex++;
            page = webpage.create();
            page.paperSize = arrayOfPaperSizes[0];
            page.settings.userAgent = "Phantom.js bot";
            return page.open(url, function(status) {
                if (status === "success") {
                    return window.setTimeout((function() {
                        for(var i = 0; i < arrayOfPaperSizes.length; i++) {
                            var file = getFilename(url, arrayOfPaperSizes[i].format.toLowerCase());
                            page.paperSize = arrayOfPaperSizes[i];
                            page.render(file);
                        }
                        return next(status, url, urlIndex);
                    }), 20000);
                } else {
                    return next(status, url, urlIndex);
                }
            });
        } else {
            return callbackFinal();
        }
    };
    return retrieve();
};

//arrayOfUrls = null;

if (system.args.length > 1) {
    arrayOfFiles = Array.prototype.slice.call(system.args, 1);
} else {
    console.log("Usage: phantomjs render_multi_url.js [domain.name1, domain.name2, ...]");
}

RenderUrlsToFile(arrayOfFiles, (function(status, url, file) {
    if (status !== "success") {
        return console.log("Unable to render '" + url + "'");
    } else {
        return console.log("Rendered '" + url + "' at '" + file + "'");
    }
}), function() {
    return phantom.exit();
});