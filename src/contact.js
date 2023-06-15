import mapPic from './images/map.png';
import './style.css';

export function showContact() {
        const main = document.getElementById('main');
        main.textContent = '';
        main.appendChild(createContact());
};

function createContact() {
    const contactsContainer = document.createElement('div');
    contactsContainer.setAttribute('id', 'contacts-container');

    const contactHeader = document.createElement('div');
    contactHeader.setAttribute('id', 'contact-header');
    contactHeader.textContent = 'Get in touch with us!'

    const textContainer = document.createElement('div');
    textContainer.setAttribute('id', 'contacts-text-container');

    const adress = document.createElement('div');
    adress.classList.add('contacts-item');
    adress.textContent = '🗺 235 Lawley Middleway, Birmingham B4 7XH';

    const phone = document.createElement('div');
    phone.classList.add('contacts-item');
    phone.textContent = '📱 +44-000-000-0000';

    const email = document.createElement('div');
    email.classList.add('contacts-item');
    email.textContent = '📩 email@gmail.com';

    textContainer.appendChild(phone);
    textContainer.appendChild(email);
    textContainer.appendChild(adress);

    const map = new Image(450,300);
    map.src = mapPic;

    contactsContainer.appendChild(contactHeader);
    contactsContainer.appendChild(textContainer);
    contactsContainer.appendChild(map);

    return contactsContainer;
};