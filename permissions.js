chrome.permissions.contains({
  permissions: ["scripting", "activeTab", "declarativeContent"],
  origins: ['https://www.google.com/']
}, (result) => {
  if (!result) {
    const permissionsButton = document.createElement("button");
    permissionsButton.addEventListener("click", (event) => requestPermissions())
    permissionsButton.textContent = "request permissions"
    document.querySelector("#permissionsDiv").appendChild(permissionsButton)
  } 
});


function requestPermissions(argument) {
  // Permissions must be requested from inside a user gesture, like a button's
  // click handler.
  chrome.permissions.request({
    permissions: ['scripting', "activeTab", "declarativeContent"],
  }, (granted) => {
    // The callback argument will be true if the user granted the permissions.
    if (granted) {
      const div = document.querySelector("#permissionsDiv")
      div.removeChild(div.children[0])
    } else {
      console.log("not grante")
    }
  });
}


