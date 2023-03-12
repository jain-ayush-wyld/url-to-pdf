console.log("background is running ");
chrome.action.onClicked.addListener(buttonclicked)
function buttonclicked(tab)
{
    console.log("testi");
    let msg={
        txt : "hello"
    }
    //console.log("button clicked");//working in bg 
    //console.log(tab) this has all info. of tab on which extension was clicked
    chrome.tabs.sendMessage(tab.id,msg)
}
