(function() {
  // Create the chatbot button
  var chatButton = document.createElement('div');
  chatButton.innerHTML = '💬';
  chatButton.style.position = 'fixed';
  chatButton.style.bottom = '20px';
  chatButton.style.right = '20px';
  chatButton.style.width = '60px';
  chatButton.style.height = '60px';
  chatButton.style.backgroundColor = '#ff5a5f';
  chatButton.style.borderRadius = '50%';
  chatButton.style.display = 'flex';
  chatButton.style.justifyContent = 'center';
  chatButton.style.alignItems = 'center';
  chatButton.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.2)';
  chatButton.style.color = 'white';
  chatButton.style.fontSize = '24px';
  chatButton.style.cursor = 'pointer';
  chatButton.style.zIndex = '1000';
  chatButton.onclick = toggleIframe;
  document.body.appendChild(chatButton);

  // Create the iframe container
  var iframeContainer = document.createElement('div');
  iframeContainer.style.position = 'fixed';
  iframeContainer.style.bottom = '90px';
  iframeContainer.style.right = '20px';
  iframeContainer.style.width = '350px';
  iframeContainer.style.height = '500px';
  iframeContainer.style.backgroundColor = 'white';
  iframeContainer.style.border = '1px solid #ccc';
  iframeContainer.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.2)';
  iframeContainer.style.zIndex = '1000';
  iframeContainer.style.display = 'none';
  document.body.appendChild(iframeContainer);

  // Create the iframe element
  var iframe = document.createElement('iframe');
  iframe.src = 'https://axi-v03-bot-hdqdtzwacamfa6bbwpp8d7.streamlit.app/?embedded=true'; // Hosted chatbot URL
  iframe.style.height = '100%';
  iframe.style.width = '100%';
  iframe.style.border = 'none';
  iframeContainer.appendChild(iframe);

  // Function to toggle iframe visibility
  function toggleIframe() {
    iframeContainer.style.display = (iframeContainer.style.display === 'none' || iframeContainer.style.display === '') ? 'block' : 'none';
  }
})();
