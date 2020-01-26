chrome.browserAction.onClicked.addListener(function (){
	chrome.history.deleteAll(function () {
		chrome.notifications.create("dhMsg", {
		
			type : 'basic',
			iconUrl : "icons/128x128.png",
			title : "Delete History",
			message : "Вся история браузера была успешно удалена!"
		
		}, function () {

			setTimeout(function () {
				chrome.notifications.clear("dhMsg");
			}, 10000);
		});
	});
});