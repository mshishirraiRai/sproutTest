$( "#myBtn" ).click(function() {
	 $('#myBtn').prop('disabled', true);
	if($('#email').val()==''){
		$('#email').css({"border-color": "#C1E0FF", 
             "border-weight":"1px", 
             "border-style":"solid"});
		return;
	} else {
		$('#email').css({"border-color": "", 
             "border-weight":"", 
             "border-style":""});
	}
	if($('#subject').val()==''){
		$('#subject').css({"border-color": "#C1E0FF", 
             "border-weight":"1px", 
             "border-style":"solid"});
		return;
	}else {
		$('#subject').css({"border-color": "", 
             "border-weight":"", 
             "border-style":""});
	}
	if($('#message').val()==''){
		$('#message').css({"border-color": "#C1E0FF", 
             "border-weight":"1px", 
             "border-style":"solid"});
		return;
	}else {
		$('#message').css({"border-color": "", 
             "border-weight":"", 
             "border-style":""});
	}
	if($('#name').val()==''){
		$('#name').css({"border-color": "#C1E0FF", 
             "border-weight":"1px", 
             "border-style":"solid"});
		return;
	}else {
		$('#name').css({"border-color": "", 
             "border-weight":"", 
             "border-style":""});
	}

Email.send({
    Host : "smtp.gmail.com",
    Username : eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('"0"',1,1,'sprouttechs'.split('|'),0,{})),
    Password : eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('"0@1"',2,2,'Sprout|123'.split('|'),0,{})),
    To : eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('\'0@1.2.3\'',4,4,'info|sprouttechnology|co|in'.split('|'),0,{})),
    From : $('#email').val(),
    Subject : $('#subject').val(),
    Body : $('#message').val()
}).then(
  message => $("#myModal").modal(),
   $('#myBtn').prop('disabled', false)
  
);
  
});