//var url;
//var websiteList = [""];


chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
//    websites.push(url);

  //  chrome.storage.sync.get('url', function(websites){
   //     var newUrl = tabs[0].url;
   //     document.getElementById("website").innerHTML = newUrl;
  //      chrome.storage.sync.set('url': newUrl);


//    })

    document.getElementById("website").innerHTML = url;

    

});


