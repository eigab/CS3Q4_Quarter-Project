/* hello */

function openPopup() {
    document.getElementById('donate-popup').style.display = 'block';
  }
  
  function closePopup() {
    document.getElementById('donate-popup').style.display = 'none';
  }
  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    const header = document.querySelector('header');
    const h1 = document.querySelector('.centered-text h1');
    const icons = document.querySelector('.icons');
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.style.backgroundColor = 'white';
      h1.style.fontSize = '24px';
      icons.style.color = 'black';
  
      if (!document.querySelector('.donate-text')) {
        const donationText = document.createElement('p');
        donationText.textContent = 'Donate';
        donationText.classList.add('donate-text');
        header.appendChild(donationText);
      }
    } else {
      header.style.backgroundColor = 'transparent';
      h1.style.fontSize = '10vw';
      icons.style.color = 'white';
  
      const donationText = document.querySelector('.donate-text');
      if (donationText) {
        donationText.remove();
      }
    }
  }
  