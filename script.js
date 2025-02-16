
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
