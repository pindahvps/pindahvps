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
