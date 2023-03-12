console.log("extension built");
chrome.runtime.onMessage.addListener(my_function);
function my_function(message,sender,sendResponse)
{
    //console.log(message.txt);
    if (message.txt=="hello")
    {
        url = document.URL;
        console.log(url);
    }
}