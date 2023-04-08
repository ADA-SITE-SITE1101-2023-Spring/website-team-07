document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const alertDiv = document.getElementById('alert');
    let currentQuestionIndex = 0;
  
    startBtn.addEventListener('click', () => {
      startBtn.style.display = 'none';
      showQuestion(currentQuestionIndex);
    });
  
    function showQuestion(index) {
      const questions = document.getElementsByClassName('question');
      if (index >= questions.length) {
        // Do something with the answers
        return;
      }
      const question = questions[index];
      question.style.display = 'block';
      const submitBtn = question.querySelector('.submit-btn');
      submitBtn.addEventListener('click', () => {
        const radios = question.querySelectorAll('input[type="radio"]');
        let answered = false;
        radios.forEach(radio => {
          if (radio.checked) {
            answered = true;
          }
        });
        if (answered) {
          alertDiv.style.display = 'none';
          question.style.display = 'none';
          currentQuestionIndex++;
          showQuestion(currentQuestionIndex);
        } else {
          alertDiv.style.display = 'block';
        }
      });
    }
  });
  