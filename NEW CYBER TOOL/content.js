

const generateHTML = (pageName) => {
return `

<div id="clouds">
<div class="cloud x1"></div>
<div class="cloud x1_5"></div>
<div class="cloud x2"></div>
<div class="cloud x3"></div>
<div class="cloud x4"></div>
<div class="cloud x5"></div>
</div>
<div class='c'>
<div class='_404'>404</div>
<hr>
<div class='_1'>GET BACK TO WORK</div>
</div>
`;
};

const generateSTYLING = () =>
{
return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
body {
background: #33cc99;
color: #fff;
font-family: "Open Sans", sans-serif;
max-height: 700px;
overflow: hidden;
}
.c {
text-align: center;
display: block;
position: relative;
width: 80%;
margin: 100px auto;
}
._404 {
font-size: 220px;
position: relative;
display: inline-block;
z-index: 2;
height: 250px;
letter-spacing: 15px;
}
._1 {
text-align: center;
display: block;
position: relative;
letter-spacing: 12px;
font-size: 4em;
line-height: 80%;
}
._2 {
text-align: center;
display: block;
position: relative;
font-size: 20px;
}
.text {
font-size: 70px;
text-align: center;
position: relative;
display: inline-block;
margin: 19px 0px 0px 0px;
/* top: 256.301px; */
z-index: 3;
width: 100%;
line-height: 1.2em;
display: inline-block;
}


.right {
float: right;
width: 60%;
}

hr {
padding: 0;
border: none;
border-top: 5px solid #fff;
color: #fff;
text-align: center;
margin: 0px auto;
width: 420px;
height: 10px;
z-index: -10;
}

hr:after {
display: inline-block;
position: relative;
top: -0.75em;
font-size: 2em;
padding: 0 0.2em;
background: #33cc99;
}

.cloud {
width: 350px;
height: 120px;

background: #fff;
background: linear-gradient(top, #fff 100%);
background: -webkit-linear-gradient(top, #fff 100%);
background: -moz-linear-gradient(top, #fff 100%);
background: -ms-linear-gradient(top, #fff 100%);
background: -o-linear-gradient(top, #fff 100%);

border-radius: 100px;
-webkit-border-radius: 100px;
-moz-border-radius: 100px;

position: absolute;
margin: 120px auto 20px;
z-index: -1;
transition: ease 1s;
}

.cloud:after,
.cloud:before {
content: "";
position: absolute;
background: #fff;
z-index: -1;
}

.cloud:after {
width: 100px;
height: 100px;
top: -50px;
left: 50px;

border-radius: 100px;
-webkit-border-radius: 100px;
-moz-border-radius: 100px;
}

.cloud:before {
width: 180px;
height: 180px;
top: -90px;
right: 50px;

border-radius: 200px;
-webkit-border-radius: 200px;
-moz-border-radius: 200px;
}

.x1 {
top: -50px;
left: 100px;
-webkit-transform: scale(0.3);
-moz-transform: scale(0.3);
transform: scale(0.3);
opacity: 0.9;
-webkit-animation: moveclouds 15s linear infinite;
-moz-animation: moveclouds 15s linear infinite;
-o-animation: moveclouds 15s linear infinite;
}

.x1_5 {
top: -80px;
left: 250px;
-webkit-transform: scale(0.3);
-moz-transform: scale(0.3);
transform: scale(0.3);
-webkit-animation: moveclouds 17s linear infinite;
-moz-animation: moveclouds 17s linear infinite;
-o-animation: moveclouds 17s linear infinite;
}

.x2 {
left: 250px;
top: 30px;
-webkit-transform: scale(0.6);
-moz-transform: scale(0.6);
transform: scale(0.6);
opacity: 0.6;
-webkit-animation: moveclouds 25s linear infinite;
-moz-animation: moveclouds 25s linear infinite;
-o-animation: moveclouds 25s linear infinite;
}

.x3 {
left: 250px;
bottom: -70px;

-webkit-transform: scale(0.6);
-moz-transform: scale(0.6);
transform: scale(0.6);
opacity: 0.8;

-webkit-animation: moveclouds 25s linear infinite;
-moz-animation: moveclouds 25s linear infinite;
-o-animation: moveclouds 25s linear infinite;
}

.x4 {
left: 470px;
botttom: 20px;

-webkit-transform: scale(0.75);
-moz-transform: scale(0.75);
transform: scale(0.75);
opacity: 0.75;

-webkit-animation: moveclouds 18s linear infinite;
-moz-animation: moveclouds 18s linear infinite;
-o-animation: moveclouds 18s linear infinite;
}

.x5 {
left: 200px;
top: 300px;

-webkit-transform: scale(0.5);
-moz-transform: scale(0.5);
transform: scale(0.5);
opacity: 0.8;

-webkit-animation: moveclouds 20s linear infinite;
-moz-animation: moveclouds 20s linear infinite;
-o-animation: moveclouds 20s linear infinite;
}

@-webkit-keyframes moveclouds {
0% {
margin-left: 1000px;
}
100% {
margin-left: -1000px;
}
}
@-moz-keyframes moveclouds {
0% {
margin-left: 1000px;
}
100% {
margin-left: -1000px;
}
}
@-o-keyframes moveclouds {
0% {
margin-left: 1000px;
}
100% {
margin-left: -1000px;
}
}
</style>`;
};

switch(window.location.hostname && window.location.host)
{
case "www.google.com" : 
alert("ADVANCED SECURITY PROTOCOLS APPLIED")
break;

// SOCIAL MEDIA SITES


case "www.clubhouse.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("CLUBHOUSE");
break;
case "www.twitch.tv" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("TWITCH");
break;
case "www.patreon.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("PATREON");
break;
case "substack.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("SUBSTACK");
break;
case "public.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("PUBLIC");
break;
case "www.wechat.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("WECHAT");
break;
case "www.yelp.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("YELP");
break;
case "www.youtube.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("YOUTUBE");
break;
case "www.facebook.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("FACEBOOK");
break;
case "www.pinterest.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("PINTEREST");
break;
case "vimeo.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("VIMEO");
break;
case "web.whatsapp.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("WHATSAPP");
break;
case "www.tiktok.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("TIKTOK");
break;
case "www.telegram.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("TELEGRAM");
break;
case "www.snapchat.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("SNAPCHAT");
break;
case "accounts.snapchat.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("SNAPCHAT");
break;
case "twitter.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("TWITTER");
break; 
case "www.skype.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("SKYPE");
break;
case "www.instagram.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("INSTAGRAM");
break;
case "discord.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("Discord");
break;




case "www.polywork.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("POLYWORK");
break;
case "www.yubo.live" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("YUBO");
break;
case "triller.co" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("TRILLER");
break;
case "www.trello.com/*" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("TRELLO");
break;
case "www.caffine.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("CAFFINE");
break;
case "www.periscope.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("PERISCOPE");
break;
case "www.tagged.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("TAGGED");
break;
case "line.me" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("LINE");
break;
case "www.untapped.io" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("UNTAPPED");
break;
case "elpha.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("ELPHA");
break;
case "www.peanut-app.io" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("PEANUT");
break;
case "www.steemit.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("STEEMIT");
break;
case "www.23snaps.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("23SNAPS");
break;
case "likee.video" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("LIKEE");
break;
case "band.us" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("BAND");
break;
case "www.bebee.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("BEBEE");
break; 
case "www.mix.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("MIX");
break;
case "www.reddit.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("REDDIT");
break;
case "www.flickr.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("FLICKR");
break;
case "go-supernova.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("SUPERNOVA");
break;

case "techcrunch.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("LOCKET");
break;
case "sunroom.so" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("SUNROOM");
break;
case "go-supernova.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("SUPERNOVA");
break;
case "pearpop.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("PEARPOP");
break;

// PIRATED SITES

case "www.pirateproxy-bay.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("PIRATE BAY");
break;
case "www.tpbproxypirate.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("PIRATE BAY");
break;
case "thepiratebays.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("PIRATE BAY");
break;
case "thepiratebay.org" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("PIRATE BAY");
break;
case "piratebayproxy.net" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("PIRATE BAY");
break;
case "www.pirateproxy.space" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("PIRATE BAY");
break;
case "www.thepirateproxybay.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("PIRATE BAY");
break;


case "yts.mx" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("YTS");
break;
case "www.1337x.is" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("1377x");
break;
case "www.1337x.to" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("1377x");
break;
case "ww1.kickass.help" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("KICKASS");
break;
case "kickass.onl" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("PIRATE BAY");
break;
case "utweb.trontv.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("PIRATE BAY");
break;
case "www.limetorrents.lol" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("LIME TORRENTS");
break;
case "torrentz2eu.org" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("torrentz2eu");
break;
case "fitgirl-repacks.site" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("FITGIRL REPCKS");
break;
case "eztv.re" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("EZTV");
break;
case "torrends.to" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("TORRENDS");
break;
case "eztv.re" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("EZTV");
break;



// SHOPPING SITES LIST


// case "www.amazon.com" :
// document.head.innerHTML = generateSTYLING();
// document.body.innerHTML = generateHTML("AMAZON");
// break;
// case "www.amazon.in" :
// document.head.innerHTML = generateSTYLING();
// document.body.innerHTML = generateHTML("AMAZON");
// break;
// case "www.amazon.com" :
// document.head.innerHTML = generateSTYLING();
// document.body.innerHTML = generateHTML("AMAZON");
// break;
// case "www.amazon.in" :
// document.head.innerHTML = generateSTYLING();
// document.body.innerHTML = generateHTML("AMAZON");
// break;



// MUSIC SITES LIST

case "music.amazon.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("AMAZON");
break;
case "music.amazon.in" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("AMAZON");
break;

case "www.spotify.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("PORNHUB");
break;
case "www.spotify.in" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("REDDIT");
break;
case "open.spotify.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("REDDIT");
break;
case "gaana.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("GAANA");
break;
case "wynk.in" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("WYNK");
break;
case "music.apple.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("APPLE");
break;
case "www.apple.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("APLLE");
break;
case "www.apple.in" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("APPLE");
break;

case "www.jiosaavn.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("JIOSAAVN");
case "music.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("MUSIC");

// ADULT SITES LIST

case "www.pornhub.org" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("PORNHUB");
break;
case "www.reddit.com" :
document.head.innerHTML = generateSTYLING();
document.body.innerHTML = generateHTML("REDDIT");
break;



}