// function get_short_url(long_url, login, api_key, func)
// {
    // $.getJSON(
        // "http://api.bitly.com/v3/shorten?callback=?",
        // {
            // "format": "json",
            // "apiKey": api_key,
            // "login": login,
            // "longUrl": long_url
        // },
        // function(response)
        // {
            // func(response.data);
        // }
    // );
// }
// var login = "";
// var api_key = "R_b1dad1d5fb975aba33d9bf8aabafebe9";
// var long_url = "http://www.kozlenko.info";

// function get_adf(url, func)
// {
// $.getJSON(
  // "http://agt2.autonomouscode.com/adf.php?",
        // {
            // "format": "json",
          // "url": "http://google.com"
        // },
        // function(response)
        // {
           // func(response.data);
        // }
    // );
// }
function url_changer(elid,shorterurl) {
  var link = document.getElementById(elid);
  link.setAttribute('href',shorterurl);
}

function init() {
   // quit if this function has already been called
   if (arguments.callee.done) return;

   // flag this function so we don't do the same thing twice
    arguments.callee.done = true;

    // create the "page loaded" message
  //var shorterurl = null;
  
  // if(shorterurl == null) {
  
  // get_short_url(long_url, login, api_key, function(short_url) {
    // shorterurl = short_url.url;
    // url_changer(shorterurl);
  // });
  // }else if(shorterurl == null) {
  
  // get_adf(long_url, function(adf_url) {
    // shorterurl = adf_url.url;
    // url_changer(shorterurl);
  // });
 // }
	var shorterurl = "http://tinyurl.com/kl5toav";
	url_changer("download1",shorterurl);
     url_changer("download2",shorterurl);
	 url_changer("download3",shorterurl);
	 url_changer("download4",shorterurl);
	 url_changer("download5",shorterurl);
	 url_changer("download6",shorterurl);
   };

   // for Mozilla
   if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", init, null);
   }

   // for Internet Explorer
   /*@cc_on @*/
   /*@if (@_win32)
   document.write("<script defer src=ie_onload.js><"+"/script>");
   /*@end @*/

   // for other browsers
   window.onload = init;