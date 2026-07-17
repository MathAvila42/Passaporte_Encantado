document.querySelectorAll('.faq-item').forEach((item) => {
  const question = item.querySelector('.faq-q');
  question.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach((el) => el.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

const signupForm = document.getElementById('signup-form');
const signupSuccess = document.getElementById('signup-success');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  signupForm.classList.add('hide');
  signupSuccess.classList.add('show');
});
