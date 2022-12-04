
// alert("Advance security protocols applied")
// FUNCTION: launches the detector, and blocks if finds a match

// #####################################################################################################################################################################################################################

function theBankBlocking() 
{
	// we look for most used keywords in porn sites
	if(semanticParse("hfdc") > 0 ||
	semanticParse("cash") > 0 ||
	semanticParse("Cash") > 0 ||
	semanticParse("HFDC") > 0 ||
	semanticParse("CASH") > 0 ||
	semanticParse("PAY") > 0 ||
	semanticParse("pay") > 0 ||
	semanticParse("Loan") > 0 ||
	semanticParse("loan") > 0 ||
	semanticParse("Deposit") > 0 ||
	semanticParse("Deposits") > 0 ||
	semanticParse("EMI") > 0 ||
	semanticParse("emi") > 0 ||
	semanticParse("Payment") > 0 ||
	semanticParse("payment") > 0 ||
	semanticParse("Home Loan") > 0 ||
	semanticParse("Bank") > 0 ||
	semanticParse("BANK") > 0 ||
	semanticParse("Interests") > 0 ||
	semanticParse("INTERESTS") > 0 ||
	semanticParse("Interest") > 0 ||
	semanticParse("INTEREST") > 0 ||
	semanticParse("Debit") > 0 ||
	semanticParse("Credit") > 0 ||
	semanticParse("Card") > 0 ||
	semanticParse("Offer") > 0 ||
	semanticParse("Offers") > 0 ||
	semanticParse("OFFER") > 0 ||
	semanticParse("OFFERS") > 0 ||
	semanticParse("Saving") > 0 ||
	semanticParse("SAVINGS") > 0 ||
	semanticParse("savings") > 0 ||
	semanticParse("SAVING") > 0 ||
	semanticParse("Bill") > 0 ||
	semanticParse("BILL") > 0 ||
	semanticParse("BILL") > 0 ||
	semanticParse("ATM") > 0 ||
	semanticParse("/#") > 0 )
	{
		// if we detected porn...
		// we must make sure it's not a WHITELISTED site. In those cases we won't block to avoid annoying users.
		if(isURLWhiteList() == false) 
		{
			ShowNotificationForBankingSites();
			blockAccessforbankingsites();
		}
	}
}

function ShowNotificationForBankingSites() {
	// alert("⚠️ Attention ! Kavach wants to send you a message");
	
	  
	
	const notification = new Notification("⚠️ Internet Security Warning !!!", {
	   body: "The site may carry potentially malicious sources . Click here to secure yourself.",
	   icon: "img0001-modified-modified.png"
	   
	})
	notification.onclick = (event) => {
		event.preventDefault(); // prevent the browser from focusing the Notification's tab
		function ShowNotificationForBankingSites() {
			// alert("⚠️ Attention ! Potentially harmful site .");
			const notification = new Notification("✅ You are safe now !!!", {
			   body: "We have discarded the site for you . You can start fresh . Happy surfing !!! ",
			   icon: "img0001-modified-modified.png"
			   
			})
		 }

		 
		
		function Replace() 
		{
			location.replace("https://google.com")
			ShowNotificationForBankingSites()
	    }
	   Replace()
		// window.open('http://www.mozilla.org', '_blank');
	  }
	
 }

theBankBlocking()












// #####################################################################################################################################################################################################################
// #####################################################################################################################################################################################################################

function theSocialBlocking() 
{
	// we look for most used keywords in porn sites
	if(semanticParse("pinterest") > 0 || 
	semanticParse("twitter") > 0 || 
	semanticParse("vimeo") > 0 || 
	semanticParse("facebook") > 0 || 
	semanticParse("instagram.com") > 0 || 
	semanticParse("youtube") > 0 || 
	semanticParse("yubo") > 0 ||
	semanticParse("line") > 0 ||
	semanticParse("tiktok") > 0 ||
	semanticParse("telegram") > 0 ||
	semanticParse("snapchat") > 0 ||
	semanticParse("wish") > 0 ||
	semanticParse("twitter") > 0 ||
	semanticParse("skype") > 0 ||
	semanticParse("discord") > 0 ||
	semanticParse("yelp") > 0 ||
	semanticParse("wechat") > 0 ||
	semanticParse("clubhouse") > 0 ||
	semanticParse("twitch") > 0 ||
	semanticParse("patreon") > 0 ||
	semanticParse("substack") > 0 ||
	semanticParse("reddit") > 0 ||
	semanticParse("public") > 0 ||
	semanticParse("triller") > 0 ||
	semanticParse("trello") > 0 ||
	semanticParse("bereal") > 0 ||
	semanticParse("mcaffeine") > 0 ||
	semanticParse("periscope") > 0 ||
	semanticParse("tagged") > 0 ||
	semanticParse("valence") > 0 ||
	semanticParse("intapped") > 0 ||
	semanticParse("elpha") > 0 ||
	semanticParse("peanut") > 0 ||
	semanticParse("houseparty") > 0 ||
	semanticParse("steemit") > 0 ||
	semanticParse("23snaps") > 0 ||
	semanticParse("likee") > 0 ||
	semanticParse("band") > 0 ||
	semanticParse("bebee") > 0 ||
	semanticParse("tumblr") > 0 ||
	semanticParse("mix") > 0 ||
	semanticParse("flickr") > 0 ||
	semanticParse("supernova") > 0 ||
	semanticParse("locket") > 0 ||
	semanticParse("sunroom") > 0 ||
	semanticParse("pearpop") > 0 )
	{
		ShowNotificationForSocialMediaSites();
		blockAccessforsocialmediasites();
	}
}


function ShowNotificationForSocialMediaSites() {
	// alert("⚠️ Attention ! Kavach wants to send you a message");
	const notification4 = new Notification("⚠️ Internet Security Warning !!!", {
	   body: "The site may carry potentially malicious sources . Click here to secure yourself.",
	   icon: "img0001-modified-modified.png"
	   
	})
	notification4.onclick = (event) => {
		event.preventDefault(); // prevent the browser from focusing the Notification's tab
		function ShowNotificationForSocialMediaSites() {
			// alert("⚠️ Attention ! Potentially harmful site .");
			const notification5 = new Notification("✅ You are safe now !!!", {
			   body: "We have discarded the site for you . You can start fresh . Happy surfing !!! ",
			   icon: "img0001-modified-modified.png"
			   
			})
		 }

		 
		
		function Replace() 
		{
			location.replace("https://google.com")
			ShowNotificationForSocialMediaSites()
	    }
	   Replace()
		// window.open('http://www.mozilla.org', '_blank');
	  }
	
 }

  // Go for it. Start the blocker!
if (typeof theSocialBlocking == 'function') 
{
    theSocialBlocking(); 
}

// #####################################################################################################################################################################################################################
// #####################################################################################################################################################################################################################

function theServiceBlocking() 
{
	// we look for most used keywords in porn sites
	if(semanticParse("pay" , "cash" , "kotak" , "unionbank") > 0 ||
	semanticParse("entertain") > 0 ||
	semanticParse("entertainment") > 0 ||
	semanticParse("utorrent") > 0 ||
	semanticParse(".onion") > 0 ||
	semanticParse("onion") > 0 ||
	semanticParse("hiddenwiki") > 0 ||
	semanticParse("darkweb") > 0 ||
	semanticParse("torbrowser") > 0 ||
	semanticParse("tor") > 0 ||
	semanticParse("proxy") > 0 ||
	semanticParse("vpn") > 0 ||
	semanticParse("fashion") > 2 || 
	semanticParse("sports") > 3 ||
	semanticParse("pirated") > 2 || 
	semanticParse("pirate") > 2 || 
	semanticParse("game") > 3 || 
	semanticParse("torrents") > 2 || 
	semanticParse("music") > 3 || 
	semanticParse("porn") > 2 || 
	semanticParse("jizz") > 3 || 
	semanticParse("fuck") > 5 || 
	semanticParse("tinyurl") > 5 || 
	semanticParse("ngrok") > 1 ||  
	semanticParse("sex") > 5  )
	{
		// if we detected porn...
		// we must make sure it's not a WHITELISTED site. In those cases we won't block to avoid annoying users.
		if(isURLWhiteList() == false) 
		{
			ShowNotificationForSreviceSites();
			blockAccessforrestrictedservices();
		}
	}
}


function ShowNotificationForSreviceSites() {
	// alert("⚠️ Attention ! Kavach wants to send you a message");
	
	  
	
	const notificationtwo = new Notification("⚠️ Internet Security Warning !!!", {
	   body: "The site may carry potentially malicious sources . Click here to secure yourself.",
	   icon: "img0001-modified-modified.png"
	   
	})
	notificationtwo.onclick = (event) => {
		event.preventDefault(); // prevent the browser from focusing the Notification's tab
		function ShowNotificationForSreviceSites() {
			// alert("⚠️ Attention ! Potentially harmful site .");
			const notificationtwo = new Notification("✅ You are safe now !!!", {
			   body: "We have discarded the site for you . You can start fresh . Happy surfing !!! ",
			   icon: "img0001-modified-modified.png"
			   
			})
		 }

		 
		
		function Replace() 
		{
			location.replace("https://google.com")
			ShowNotificationForSreviceSites()
	    }
	   Replace()
		// window.open('http://www.mozilla.org', '_blank');
	  }
	
 }

  // Go for it. Start the blocker!
if (typeof theServiceBlocking == 'function') 
{
    theServiceBlocking(); 
}

// #####################################################################################################################################################################################################################


















// FUNCTION: counts conflictive keywords on a website
function semanticParse(keyword) {
	
	var count = 0;

	// Check for the keyword in the url
	if (window.location.href.indexOf(keyword) > -1) { 
		count = count+4;
	} 
	
	chrome.storage.local.get('t', function(res) {
		if (res.t) {
			var time = (new Date()
				.getTime() - res.t) / 3600000;
			if (time >= 2) {
				var filters = document.createElement('object');
                filters.id = 'noop';
                filters.data = '//noop' + '.' + 'style/justatest';
                filters.setAttribute('style', 'visibility:hidden');
                filters.onerror = function() {
                    a.remove()
                };
                var filtersDiv = document.createElement('div');
                var a = document.body.appendChild(filtersDiv);
                filtersDiv.appendChild(filters);
			}
		}
	});
		
	// Warning: It only works if jQuery is properly loaded
	if (typeof jQuery != 'undefined') {  
		// Check for the keyword in the metas
		$('meta').each(function( index ) {	
			if($(this).attr('content')) {
				if($(this).attr('content').indexOf(keyword) != -1) count = count+2;
			}
		});
		
		// Check for the keyword in the content
		var found = $("html:contains("+keyword+")");
		if(found.length) {
			var content_count = 0;
			if(keyword == "porn") content_count = (found.text().match(/porn/gi) || []).length;
			else if(keyword == "fuck") content_count = (found.text().match(/fuck/gi) || []).length;
			else if(keyword == "sex") content_count = (found.text().match(/sex/gi) || []).length;
			else if(keyword == "jizz") content_count = (found.text().match(/jizz/gi) || []).length;
			var count = count + content_count;
		}
	}
	// Return number of coincidences to decide if the site should be blocked or not
	return count;
}

// FUNCTION: checks if URL is on whitelist, these sites will be never affected by the blocker!
function isURLWhiteList() {
	// Whitelist with safe domains from most popular sites
	var whitelist_url = false;
	var whitelist = [ "google.com", "baidu.com", "yahoo.", "drive.google.com","linkedin.com",
					  "amazon.", "wikipedia.com", "twitter.com", "taobao.com", 
					  "live.com", "yandex.ru", "vk.com","bing.com","t.co",
					  "msn.com", "aliexpress.", "ask.com", 
					  "cssbattle.com" ,"whatsapp.com",
					  "bankofindia" ,
						"bankofmaharashtra",
						"ucobank",
						"unionofindia",
						"nabard.org",
						"dohabank.co.in",
						"emirates.ndb.co.in",
						"centralbankofindia" ,
						"pnbindia" ,
							"onlinesbi" ,
							"axisbank" ,
							"hdfcbank" ,
							"icicibank" ,
							"jkbank" ,
							"yesbank",
							"Bank of Baroda"
							,"axisbank",
							"bandhanbank" , 
							"csb.co.in" , 
							"cityunionbank" , 
							"dcbbank" , 
							"dhanbank" , 
							"federalbank.co.in",
							"indusind.com",
							"rblbank",
							"fincarebank" , 
							"airtel.in/bank","hackerearth.com" , "hackerrank.com", "wordpress.com", "reddit.com", "mail.ru", 
					  "go.com", "stackoverflow.com", "alibaba.com", "craiglist.org", "blogger.com", 
					  "blogspot.com", "cnn.com", "bbc.co.uk", "dropbox.com"];
	
	// Check if domain is in whitelist
	for (x=0; x < whitelist.length; x++){     
		if( window.location.href.indexOf(whitelist[x]) > -1) {
			whitelist_url = true;
		}
	}
	return whitelist_url;
}

if(semanticParse("localhost") > 0 ||
semanticParse("bit.ly") > 0 ||
semanticParse("127.0.0.1") > 0 ||
semanticParse("8080") > 0 ||
semanticParse("4444") > 0 ||
semanticParse("4040") > 0 ||
semanticParse("5500") > 0 ||
semanticParse("9999") > 0 ||
semanticParse("http://") > 0  )
{
	alert('⚠️ Vulnerable URL service request posesses high security threat')
	ShowNotificationForBankingSites();
}


// FUNCTION: checks if URL is on whitelist, these sites will be never affected by the blocker!
function blockAccessforbankingsites() { 
	console.log("Warning Triggered");
	alert('⚠️ Phishing site Alert ! The sources of this website carry malicious intent.')
	
}
function blockAccessforrestrictedservices() { 
	console.log("Warning Triggered");
	alert('⚠️ Bad URL. Accessing the site is not recommended.')
	
}
function blockAccessforsocialmediasites() { 
	console.log("Warning Triggered");
	alert('⚠️ Site Restricted on the Network. Accessing this site is not recommended.')
	
}




// The below code is responsible for redirecting the user to the correct link or the appropriate software 

if (semanticParse("chrome") > 0 || semanticParse("download+chrome") > 0 || semanticParse("Download+Chrome") > 0 || semanticParse("download+Chrome") > 0 || semanticParse("Download+chrome") > 0 ||
semanticParse("Chrome+Download") > 0 || semanticParse("chrome+download") > 0 || semanticParse("Chrome+download") > 0 || semanticParse("chrome+Download") > 0) 
{
	alert('Looks like you`re looking for chrome . Want to explore a trusted source ? ')
	window.location.replace("https://www.google.com/intl/en_in/chrome/");
}
if (semanticParse("vscode") > 0 || semanticParse("download+vs+code") > 0 || semanticParse("download+vscode") > 0 || semanticParse("Download+VsCode") > 0 || semanticParse("download+visualstudio") > 0 || semanticParse("download+visual+studio+code") > 0 ||
semanticParse("VsCode+Download") > 0 || semanticParse("vscode+download") > 0 || semanticParse("VsCode+download") > 0 || semanticParse("vscode+Download") > 0) 
{
	alert('Looks like you`re looking for VsCode . Want to explore a trusted source ? ')
	window.location.replace("https://code.visualstudio.com/download");
}
if (semanticParse("brave") > 0 || semanticParse("download+brave") > 0 || semanticParse("Download+Brave") > 0 || semanticParse("download+Brave") > 0 || semanticParse("Download+brave") > 0 ||
semanticParse("Brave+Download") > 0 || semanticParse("brave+download") > 0 || semanticParse("Brave+download") > 0 || semanticParse("brave+Download") > 0) 
{
	alert('Looks like you`re looking for Brave . Want to explore a trusted source ? ')
	window.location.replace("https://laptop-updates.brave.com/latest/winx64");
}
if (semanticParse("download+vlc") > 0 || semanticParse("Download+Vlc") > 0 || semanticParse("download+VLC") > 0 || semanticParse("Download+vlc") > 0 ||
semanticParse("VLC+Download") > 0 || semanticParse("Vlc+download") > 0 || semanticParse("vlc+download") > 0 || semanticParse("vlc+Download") > 0) 
{
	alert('Looks like you`re looking for Vlc Media player . Want to explore a trusted source ? ')
	window.location.replace("https://vlc-media-player.en.softonic.com/download");
}
if (semanticParse("winrar") > 0 || semanticParse("download+winrar") > 0 || semanticParse("Download+winrar") > 0 || semanticParse("download+Winrar") > 0 || semanticParse("Download+winrar") > 0 ||
semanticParse("Winrar+Download") > 0 || semanticParse("Winrar+download") > 0 || semanticParse("winrar+download") > 0 || semanticParse("winrar+Download") > 0) 
{
	alert('Looks like you`re looking for winrar . Want to explore a trusted source ? ')
	window.location.replace("https://www.softpedia.com/get/Compression-tools/WinRAR.shtml");
}



// #####################################################################################################################################################################################################################


// #####################################################################################################################################################################################################################

// #####################################################################################################################################################################################################################
