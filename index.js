function showAlert() {
    alert("Это всплывающее окно!");
}


setInterval(showAlert, 12000);


const button = document.getElementById('Button');
        button.addEventListener('click', function() {
            button.textContent = 'Спасибо, что нажали!';
        });



let captchaActive = false;
        let timeout;

        function activateCaptcha() {
            captchaActive = true;
            document.getElementById('myButton').disabled = false;
            document.getElementById('message').textContent = '';

            timeout = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;

            setTimeout(() => {
                if (captchaActive) {
                    document.getElementById('myButton').disabled = true;
                    document.getElementById('message').textContent = 'Время вышло! Попробуйте снова.';
                    captchaActive = false;
                }
            }, timeout);
        }

        document.getElementById('myButton').addEventListener('click', function() {
            if (captchaActive) {
                document.getElementById('message').textContent = 'Капча пройдена! Вы молодец!';
                captchaActive = false;
                document.getElementById('myButton').disabled = true;
            }
        });

 setTimeout(activateCaptcha, 3000);
