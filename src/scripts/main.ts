import "../styles/style.scss";
import "./swiper.ts";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

document.querySelectorAll(".questions-box-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".questions-box-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

document.querySelectorAll(".faq-box-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".faq-box-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

window.addEventListener("load", () => {
  document.body.classList.remove("transition-disabled");
});

document.querySelectorAll(".conditions-box-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".conditions-box-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

window.addEventListener("load", () => {
  document.body.classList.remove("transition-disabled");
});


// HAMBURGER

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const hamburger = document.querySelector('.hamburger');
  const backButton = document.querySelector('.back-button');

  function toggleMenu() {
    menu?.classList.toggle('open');
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }

  if (backButton) {
    backButton.addEventListener('click', toggleMenu);
  }
});

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-bottom-right",
  preventDuplicates: true,
  onclick: undefined,
  showDuration: 300,
  hideDuration: 700,
  timeOut: 5000,
  extendedTimeOut: 1000,
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut"
};

const name = document.getElementById('name') as HTMLInputElement;
const question = document.getElementById('question') as HTMLTextAreaElement;
const phone = document.getElementById('phone') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const telegram = document.getElementById('telegram') as HTMLInputElement;
const messageBox = document.querySelector('.contacts-message-box') as HTMLElement;
const courseTitleElement = document.querySelector('.hero-section-course-title') as HTMLElement
const courseTitle = courseTitleElement?.textContent?.trim() || '';
const eventTitleElement = document.querySelector('.hero-section-event-title') as HTMLElement
const eventTitle = eventTitleElement?.textContent?.trim() || '';

function showMessage(message: string, type: 'error' | 'success'): void {
  const messageElement = document.createElement('div');
  messageElement.className = `contacts-message contacts-message--${type}`;
  messageElement.textContent = message;

  messageBox.innerHTML = '';
  messageBox.appendChild(messageElement);

  setTimeout(() => {
    messageElement.remove();
  }, 5000);
}

function validateForm(): boolean {
  name.classList.remove('error');
  phone.classList.remove('error');
  email.classList.remove('error');
  telegram.classList.remove('error');
  question.classList.remove('error');

  let isValid = true;

  if (!name.value) {
    showMessage("Ім'я обов'язкове", 'error');
    name.classList.add('error');
    isValid = false;
  }

  const isContactProvided = email.value || phone.value || telegram.value;
  if (!isContactProvided) {
      showMessage("Необхідно ввести хоча б один контакт: телефон, емейл або телеграм.", 'error');
      email.classList.add('error');
      phone.classList.add('error');
      telegram.classList.add('error');
      isValid = false;
  }


  const phoneRegex = /^(\+38|8)?0[0-9]{9}$/;
  if (phone.value && !phoneRegex.test(phone.value)) {
    phone.classList.add('error');
    showMessage("Введіть коректний номер телефону", 'error');
    isValid = false;
  }

  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (email.value && !emailRegex.test(email.value)) {
    email.classList.add('error');
    showMessage("Введіть коректну емайл-адресу", 'error');
    isValid = false;
  }

  if (telegram.value.length > 0 && telegram.value.length < 5) {
    showMessage("Введіть телеграм", 'error');
    name.classList.add('error');
    isValid = false;
  }

  if (question.value.length < 8) {
    question.classList.add('error');
    showMessage("Питання повинно містити не менше 8 символів.", 'error');
    isValid = false;
  }

  return isValid;
}

const form = document.querySelector('.contacts-form') as HTMLFormElement;
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  if (validateForm()) {
    sendMessageToTelegram(name.value, phone.value, email.value, telegram.value, question.value, courseTitle, eventTitle);
    name.value = '';
    phone.value = '';
    question.value = '';
    email.value = '';
    telegram.value = '';
  }
});

async function sendMessageToTelegram(name: string, phone: string, email: string, telegram: string, question: string, courseName: string, eventName: string): Promise<void> {
    const botToken = '';
    const chatId = '';
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const message = [
        '📝 Новий запит з форми:\n',
        courseName ? `📚 Курс: ${courseName}` : null,
        eventName ? `📚 Івент: ${eventName}` : null,
        `👤 Ім'я: ${name}`,
        phone ? `📞 Телефон: ${phone}` : '📞 Телефон: -',
        email ? `📧 Email: ${email}` : '📧 Email: -',
        telegram ? `💬 Telegram: ${telegram}` : '💬 Telegram: -',
        `❓ Питання: ${question}`
    ]
        .filter(Boolean)
        .join('\n');

    try {

        const response = await fetch(telegramApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        });

        if (!response.ok) {
            throw new Error('Не вдалося надіслати повідомлення');
        }

        showMessage("Запит надіслано!", 'success');
    } catch (error) {
        showMessage("Сталася помилка при надсиланні до Telegram.", 'error');
        console.error(error);
    }
}