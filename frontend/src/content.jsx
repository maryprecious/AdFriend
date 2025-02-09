console.log('AdFriend content script loaded');

// This is where we'll inject our React app into the page
const injectApp = () => {
  const appContainer = document.createElement('div');
  appContainer.id = 'adfriend-container';
  document.body.appendChild(appContainer);

  // Use methods to inject our React app
  appContainer.innerHTML = '<h1>AdFriend is active</h1>';
};

injectApp();