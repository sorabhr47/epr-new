
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
<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>

var typed = new Typed(".auto-type",{
    string:["Producer","Brand Owner","Importer","PWP"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
});

