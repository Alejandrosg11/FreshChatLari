function initFreshChat() {
    window.fcWidget.init({
        token: "7ee3b68a-eb9b-4b3f-a854-c7a821e027e5",
        host: "https://wchat.freshchat.com"
    });
}

function initialize(i,t){
    var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"Freshdesk Messaging-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);
