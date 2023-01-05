// document.querySelector('#check-all-right-answers').addEventListener('click', (event) => {
//   chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
//     chrome.scripting.executeScript(
//       {
//         target: {tabId: tabs[0].id},
//         files: ['checkAllRightAnswers.js'],
//       },
//   );
//
//   });
//
// });

// document.querySelector('#validate').addEventListener('click', (event) => {
//   chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
//     chrome.scripting.executeScript(
//       {
//         target: {tabId: tabs[0].id},
//         files: ['validate.js'],
//       },
//   );
//   });
// });

// document.querySelector('#brute-type-2').addEventListener('click', (event) => {
//   chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
//     chrome.scripting.executeScript(
//       {
//         target: {tabId: tabs[0].id},
//         files: ['brute-type-2.js'],
//       },
//   );
//   });
// });

document.querySelector('#brute').addEventListener('click', (event) => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
        chrome.scripting.executeScript(
            {
                target: {tabId: tabs[0].id},
                files: ['brute.js'],
            },
        );
    });
});

document.querySelector('#global-exam').addEventListener('click', (event) => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    chrome.scripting.executeScript(
      {
        target: {tabId: tabs[0].id},
        files: ['openGlobalExam.js'],
      },
  );
  });
});

document.querySelector('#mega-brute').addEventListener('click', (event) => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
        chrome.scripting.executeScript(
            {
                target: {tabId: tabs[0].id},
                files: ['megaBrute.js'],
            },
        );
    });
});