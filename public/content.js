console.log("Hiiiiiiii hereee");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message, "ooooow");
  let para = document.getElementsByTagName("p");
  for (var i = 0; i < para.length; i++) {
    para[i].style.backgroundColor = "#000000";
    console.log(para[i].style);
  }
});
