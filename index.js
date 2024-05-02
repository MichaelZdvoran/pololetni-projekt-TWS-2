const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('ratingValue');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const value = parseInt(star.getAttribute('data-value'));
    ratingValue.textContent = `Hodnocení: ${value} hvězdiček`;
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitRating');
    const thankYouMessage = document.getElementById('thankYouMessage');
  
    submitButton.addEventListener('click', function() {
      const userRating = document.getElementById('userRating').value;
      if (userRating.trim() !== '') {
        thankYouMessage.textContent = 'Děkujeme za hodnocení!';
      } else {
        thankYouMessage.textContent = 'Prosím, napište své hodnocení.';
      }
    });
  });
  

