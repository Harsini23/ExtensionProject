/*global chrome*/
import "./App.css";

function App() {
  function test() {
    console.log("Working?");
    /* eslint-disable no-undef */
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTabId = tabs[0].id;
      chrome.scripting.executeScript({
        target: { tabId: activeTabId },
        function: () => {
          let para = document.getElementsByTagName("p");
          // for (var i = 0; i < para.length; i++) {
          //   para[i].style.backgroundColor = "#000000";
          //   console.log(para[i].style);
          // }
          getSelectedText();
        },
      });
    });
  }
  function getSelectedText() {
    if (window.getSelection) {
      txt = window.getSelection();
    } else if (window.document.getSelection) {
      txt = window.document.getSelection();
    } else if (window.document.selection) {
      txt = window.document.selection.createRange().text;
    }
    if (txt) {
      var newNode = document.createElement("span");
      newNode.style.backgroundColor = "yellow";
      newNode.appendChild(document.createTextNode(txt));
      window.getSelection().getRangeAt(0).surroundContents(newNode);
    }
    alert(txt);
  }

  return (
    <div>
      <body>
        <h3>Testing! Hello Harsh</h3>
        <button
          onClick={() => {
            test();
          }}
        >
          Get Highlighted Text
        </button>
      </body>
    </div>
  );
}

export default App;
