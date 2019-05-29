var deferredPrompt;
if ('serviceWorker' in navigator) {
    //  if the navigator (browser) supports serviceWorker, register sw.js as a serviceWorker in the background-- register returns promise
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
        .then(function () {
            console.log('service worker registered');
        });
}

window.addEventListener('beforeinstallprompt', function (event) {
    console.log('before Install prompt firpwed');
    event.preventDefault();
    deferredPrompt = event;
    return false;
})

fetch('https://httpbin.org/')
    .then(response => {
       // console.log(response);
        return response.json()
    }).then(data => console.log(data));