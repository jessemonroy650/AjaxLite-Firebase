// Date: 2013-08-29 - directly from: http://www.w3schools.com/ajax/ajax_xmlhttprequest_create.asp
// Rewrite: 2015-03-29 - Decide to make this for mobile only. Ignore IE 5 & 6.
// Decide to do the POST after all. Let's call this version 0.8.
// A good reference on HTTP is CURL http://curl.haxx.se/docs/manpage.html
var AJAX = {

	xhttp  : null,
	// list of pairs as need, all expected to be in the HTTP protocol
	// SEE: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
	header : [{'name':'', 'value':''}],

	init : function (callback, headers) {
		// It's not clear this will work, so it's not implemented:
		// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#XMLHttpRequest%28%29
		// https://bugzilla.mozilla.org/show_bug.cgi?id=692677#c68
		xhttp = new XMLHttpRequest();
		if (typeof callback == 'function') {
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState === 4 && xhttp.status === 200) {
					callback(xhttp.responseText);
				} else {
					// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#getAllResponseHeaders%28%29
					//
					alert(xhttp.getAllResponseHeaders());
				}
			}
		} else if (typeof callback == 'string') {
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState === 4 && xhttp.status === 200) {
					document.getElementById(callback).innerHTML = xhttp.responseText;
				} else {
					alert(xhttp.getAllResponseHeaders());
				}
			}
		} else {
			alert('AJAX.init, No tag or callback');
		}
	},
	// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
	// On ''async''
	// An optional boolean parameter, defaulting to true, indicating whether or
	// not to perform the operation asynchronously.
	// If this value is false, the send()method does not return until
	// the response is received.  If true, notification of a completed transaction
	// is provided using event listeners. This must be true if the multipart
	// attribute is true, or an exception will be thrown. 
	GET : function (URL) {
		async = true; // This is explicit for clarity.
		xhttp.open('GET', URL, async);
		xhttp.send();
		// After this the callback handles the returning data.
	},
	//
	POST : function (URL, data) {
		async = true; // This is explicit for clarity.
		xhttp.open("POST", URL, true);
		if ( header.length > 0 ) {
			//xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		}
		xhttp.send(data);
	}
	/* ONLY POST has been tested */
/*
	//
	PUT : function (URL, data) {
		async = true; // This is explicit for clarity.
		xhttp.open("PUT", URL, true);
		if ( header.length > 0 ) {
			//xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		}
		xhttp.send(data);
	},
	//
	DELETE : function (URL, data) {
		async = true; // This is explicit for clarity.
		xhttp.open("PUT", URL, true);
		if ( header.length > 0 ) {
			//xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		}
		xhttp.send(data);
	},
*/
}
