var vid = new URLSearchParams(window.location.search).get('vid');
if(vid && document.cookie.indexOf('vid=') === -1) {
    document.cookie = "vid=" + vid + "; path=/;";
}