import mapPic from './images/map.png';

export function showContact() {
        const main = document.getElementById('main');
        main.textContent = '';
        main.appendChild(createContact());
};

function createContact() {
    const contactsContainer = document.createElement('div');
    contactsContainer.setAttribute('id', 'contacts-container');

    const adress = document.createElement('div');
    adress.classList.add('contacts-item');
    adress.textContent = '🗺 235 Lawley Middleway, Birmingham B4 7XH';

    const phone = document.createElement('div');
    phone.classList.add('contacts-item');
    phone.textContent = '📱 +44-000-000-0000';

    const email = document.createElement('div');
    email.classList.add('contacts-item');
    email.textContent = '📩 email@gmail.com';

    const map = new Image(150,100);
    map.src = mapPic;

    contactsContainer.appendChild(phone);
    contactsContainer.appendChild(email);
    contactsContainer.appendChild(adress);
    contactsContainer.appendChild(map);

    return contactsContainer;
};