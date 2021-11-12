chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
	if(details.url.indexOf("https://discordapp.com/api/v7")!=-1){
		console.log(details)
		var headers = [...details.requestHeaders]
		headers.push({name:"User-Agent",value:"DiscordBot (https://github.com/discordjs/discord.js, 12.5.3) Node.js/v14.15.1"})
		return { requestHeaders: headers };
	}
	return {requestHeaders: details.requestHeaders}
  },
  {urls: ['<all_urls>']},['blocking', 'requestHeaders']
);