$(function(){

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
    });

    chrome.storage.sync.get(['total','limit'],function(budget){
        $('#total').text(url);
        $('#limit').text(budget.limit);
    });

    $('#spendAmount').click(function(){
        chrome.storage.sync.get(['total', 'limit'],function(budget){
            var newTotal = 0;
            if (budget.total){
                newTotal += parseInt(budget.total);
            }

            var amount = $('#amount').val();
            if (amount){
                newTotal += parseInt(amount);
            }

            chrome.storage.sync.set({'total': newTotal}, function(){               
                if (amount && newTotal >= budget.limit){
                    var notifOptions = {
                        type: "basic",
                        iconUrl: "icon48.png",
                        title: "Limit reached!",
                        message: "Uh oh, look's like you've reached your alloted limit."
                };
                chrome.notifications.create('limitNotif', notifOptions);

            }
            });
            $('#total').text(newTotal);
            $('#amount').val('');

           

        });
    });
});