// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    //Cordova deviceready eventi dinliyoruz
    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    //uygulama yüklendiği anda çalışır
    function onDeviceReady() {
        //Cordova pause ve resume eventlerini dinliyoruz
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        alert('cihaz hazır');
    };

    //uygulama durduğu anda çalışır
    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    //uygulama tekrar aktif hale geldiği zaman çalışmaya başlar
    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
        alert('resume başladı!')
    };
   
})();
