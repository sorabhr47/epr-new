
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

document.querySelectorAll('.epr-box').forEach(box => {
    observer.observe(box);
});
