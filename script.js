
const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        // Toggle the clicked answer
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            // Hide all answers first
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });

            answer.style.display = 'block'; // Show only the clicked question's answer
        }
    });
});

//types animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.types-box').forEach(box => {
    observer.observe(box);
});

//auto type in epr to me
// script.js
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".auto-type", {
        strings: ["Producer", "Brand Owner", "Importer","PWP"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
});

//auto type in header
// script.js
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".header-auto-type", {
        strings: ["Fast", "Simple", "Hassle-Free"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
});

//submit-popup
function showPopup() {
      document.getElementById('popupMessage').style.display = 'block';
  }

function closePopup() {
      document.getElementById('popupMessage').style.display = 'none';
  }
