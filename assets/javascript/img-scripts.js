
  function init() {
    const noJsMessage = document.querySelector(".no-js-message");
    const content = document.querySelector(".content");

    if (noJsMessage && content) {
      noJsMessage.style.display = "none";
      content.style.display = "block";
    }

    const columns = document.querySelectorAll(".column");
    columns.forEach((column) => {
      images.forEach((image) => {
        const imgElement = document.createElement("img");
        imgElement.src = image;
        column.appendChild(imgElement);
      });
    });
  }

  function disableRightClick(e) {
    e.preventDefault();
  }

  document.addEventListener("DOMContentLoaded", function () {
    init();
    document.addEventListener("contextmenu", disableRightClick);
  });

  let devToolsOpen = false;

  const element = new Image();
  Object.defineProperty(element, "id", {
    get: function () {
      devToolsOpen = true;
      alert("Developer tools are open. Access to this site is restricted.");
      window.location.href = "https://in.linkedin.com/in/imsampro"; 
    },
  });

  setInterval(() => {
    devToolsOpen = false;
    console.log(element);
  }, 1000);


//   function detectDevTools() {
//     const devToolsOpen = window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100;
//     if (devToolsOpen) {
//         // Hide the content and show a message
//         document.body.innerHTML = "<h1>Access Denied</h1><p>This site is not accessible with developer tools open.</p>";
//         document.body.style.display = "block"; // Show the message
//     } else {
//         document.body.style.display = "block"; // Show the content if dev tools are closed
//     }
// }

// // Check for developer tools every second
// setInterval(detectDevTools, 1000);
