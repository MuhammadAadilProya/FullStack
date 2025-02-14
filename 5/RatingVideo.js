
const ratingSlider = document.getElementById('rating');
const ratingValue = document.getElementById('ratingValue');

ratingSlider.addEventListener('input', () => 
{
    ratingValue.textContent = ratingSlider.value;
});

const ratingForm = document.getElementById('ratingForm');

ratingForm.addEventListener('submit', (event) => 
{
    event.preventDefault();
    const rating = ratingSlider.value;
    alert(`Thank you for rating the video ${rating} out of 5!`);
});