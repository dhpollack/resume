// http://stackoverflow.com/questions/16996732/using-multiple-page-open-in-single-script
// https://github.com/ariya/phantomjs/blob/master/examples/render_multi_url.js
// The input of URLs is created by Jekyll.  Note that with Octopress, I needed to edit the octopress_filters.rb so that the json file wasn't RubyPants'ed
// Render Multiple URLs to file



var RenderUrlsToFile, arrayOfUrls, arrayOfPaperSizes, pathToRender, jsonFile, baseUrl, headerFooter, system;

pathToRender = "source/assets/pdfs/";
baseUrl = "http://resume-dhpollack.c9users.io";
jsonFile = baseUrl + "/files.json";


system = require("system");

//arrayOfUrls = ["resume-dhpollack.c9.io/duolingo.html", "resume-dhpollack.c9.io/general.html", "resume-dhpollack.c9.io/edx-resume.html", "resume-dhpollack.c9.io/edx-posting-response.html", "resume-dhpollack.c9.io/edx-cover-letter.html"];
arrayOfPaperSizes = [
    {
        format: 'Letter',
        orientation: 'portrait',
        margin: '2.0cm'
    },
    {
        format: 'A4',
        orientation: 'portrait',
        margin: '2.0cm'
    }];
headerFooter = 
{
    header: {
        height: "0.75cm",
        contents: phantom.callback(function(pageNum, numPages) {
            return "<div style='text-align:center;'><small><span style='float:left'>David Pollack</span> <span style='float:right'>Page: " + pageNum + " of " + numPages + "</span></small></div>";
        })
    },
    footer: {
        height: "0.75cm",
        contents: phantom.callback(function(pageNum, numPages) {
            return "<div style='text-align:center;'><small><span style='float:left'>David Pollack</span> <span style='float:right'>Page: " + pageNum + " of " + numPages + "</span></small></div>";
        })
    }
};

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
        return pathToRender + filename + "-" + format + ".pdf";
    };
    next = function(status, url, file) {
        page.close();
        callbackPerUrl(status, url, file);
        return retrieve();
    };
    retrieve = function() {
        var pageArray;
        if (urls.length > 0) {
            pageArray = urls.shift();
            var uri = baseUrl + pageArray[0];
            urlIndex++;
            page = webpage.create();
            page.paperSize = arrayOfPaperSizes[0];
            page.settings.userAgent = "Phantom.js bot";
            return page.open(uri, function(status) {
                if (status === "success") {
                    console.log("printheaders: " + pageArray[1]);
                    return window.setTimeout((function() {
                        for(var i = 0; i < arrayOfPaperSizes.length; i++) {
                            var file = getFilename(uri, arrayOfPaperSizes[i].format.toLowerCase());
                            var myPaperSize = arrayOfPaperSizes[i];
                            if( pageArray[1] == "true") {
                                myPaperSize.header = headerFooter.header;
                                myPaperSize.footer = headerFooter.footer;
                            } else {
                                myPaperSize.header = {};
                                myPaperSize.footer = {};
                            }
                            page.paperSize = myPaperSize;
                            page.render(file);
                        }
                        return next(status, uri, urlIndex);
                    }), 1000);
                } else {
                    return next(status, uri, urlIndex);
                }
            });
        } else {
            return callbackFinal();
        }
    };
    return retrieve();
};

arrayOfUrls = [];

if (system.args.length > 1) {
    arrayOfUrls = Array.prototype.slice.call(system.args, 1);
} else {
    console.log("Usage: phantomjs render_multi_url.js [domain.name1, domain.name2, ...]");
    // This loads a json file that is created by Jekyll.
    console.log(jsonFile);
    var jpage = require('webpage').create();
    jpage.open(jsonFile, function (status) {
        if (status === "success") {
            window.setTimeout((function() {
                var content = jpage.plainText;
                console.log("Content:" + content);
                var myFiles = JSON.parse(content);
                for (var key in myFiles) {
                    if(myFiles[key].makepdf == "true") {
                        arrayOfUrls.push(new Array(myFiles[key].pageurl, myFiles[key].printheaders));
                    }
                }
            }), 100);
        } else {
            console.log("Not successful");
        }
    });
}

window.setTimeout(function () {
    RenderUrlsToFile(arrayOfUrls, (function(status, url, file) {
        if (status !== "success") {
            return console.log("Unable to render '" + url + "'");
        } else {
            return console.log("Rendered '" + url + "' at '" + file + "'");
        }
    }), function() {
        return phantom.exit();
    });    
}, 850);

