import logoPicture from './images/logo.png';
import cheeseBurger from './images/cheeseburger.jpg';
import chickenBurger from './images/sweetchicken.jpg';
import mushroomsBurger from './images/mushroomswiss.jpg';
import veggieBurger from './images/veggiesupreme.jpg';
import bbqBurger from './images/bbqburger.jpg';
import frenchFries from './images/frenchfries.jpg';
import onionRings from './images/onionrings.jpg';
import sweetPotato from './images/sweetpotatofries.jpg';
import milkshake from './images/milkshake.jpg';
import icedTea from './images/icedtea.jpg';
import lemonade from './images/lemonade.jpg';
import soda from './images/soda.jpg';

export function showMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHeaderMenu());
    main.appendChild(createBurgerMenu());
    main.appendChild(createSidesMenu());
    main.appendChild(createDrinksMenu());
};

function createHeaderMenu() {
    const menuHeader = document.createElement('div');
    menuHeader.setAttribute('id', 'menu-header');

    const headerLogo = new Image(50,50);
    headerLogo.src = logoPicture;
    headerLogo.setAttribute('id', 'header-logo');
    
    const headerText = document.createElement('div');
    headerText.setAttribute('id', 'header-text');
    headerText.textContent = 'Choose your meal';

    menuHeader.appendChild(headerText);
    menuHeader.appendChild(headerLogo);

    return menuHeader;
};

function createBurgerMenu() {
    const burgerContainer = document.createElement('div');
    burgerContainer.classList.add('menu-container');

    const burgerHeader = document.createElement('div');
    burgerHeader.classList.add('item-container-header');
    burgerContainer.textContent = 'Burgers';
    burgerContainer.appendChild(burgerHeader);

    burgerContainer.appendChild(
        createMenuItem(
            "Classic Cheeseburger",
            "Our signature juicy beef patty topped with melted cheddar cheese, fresh lettuce, ripe tomatoes, onions, and our secret sauce. Served on a toasted brioche bun.",
            "£9.99",
            cheeseBurger
        )
    );

    burgerContainer.appendChild(
        createMenuItem(
            "Spicy Chicken Burger",
            "Crispy chicken fillet coated in a flavorful blend of spices, accompanied by zesty jalapenos, crunchy lettuce, sliced pickles, and a creamy sriracha mayo. Served on a soft sesame seed bun.",
            "£8.99",
            chickenBurger
        )
    );

    burgerContainer.appendChild(
        createMenuItem(
            "Mushroom Swiss Burger",
            "A savory delight with a beef patty smothered in Swiss cheese and topped with sautéed mushrooms, caramelized onions, and our special house sauce. Served on a toasted artisanal bun.",
            "£10.49",
            mushroomsBurger
        )
    );

    burgerContainer.appendChild(
        createMenuItem(
            "Double Bacon BBQ Burger",
            "For the meat lovers, enjoy two beef patties stacked with crispy bacon, melted American cheese, tangy BBQ sauce, fresh lettuce, and sliced tomatoes. Served on a toasted pretzel bun.",
            "£11.99",
            bbqBurger
        )
    );

    burgerContainer.appendChild(
        createMenuItem(
            "Veggie Supreme Burger",
            "A mouthwatering vegetarian option featuring a plant-based patty, loaded with roasted bell peppers, grilled onions, sliced avocado, lettuce, and tangy herb mayo. Served on a multigrain bun.",
            "£9.49",
            veggieBurger
        )
    );

    return burgerContainer;
};

function createSidesMenu() {
    const sidesContainer = document.createElement('div');
    sidesContainer.classList.add('menu-container');

    const sidesHeader = document.createElement('div');
    sidesHeader.classList.add('item-container-header');
    sidesContainer.textContent = 'Sides';
    sidesContainer.appendChild(sidesHeader);

    sidesContainer.appendChild(
        createMenuItem(
            "Crispy Chips",
            "Golden and crispy on the outside, soft and fluffy on the inside. Perfectly seasoned with a sprinkle of salt.",
            "£3.49",
            frenchFries
        )
    );

    sidesContainer.appendChild(
        createMenuItem(
            "Onion Rings",
            "Crispy, beer-battered onion rings with a hint of spice, served with a zesty dipping sauce.",
            "£4.49",
            onionRings
        )
    );

    sidesContainer.appendChild(
        createMenuItem(
            "Sweet Potato Chips",
            "Thinly sliced sweet potatoes fried to a delightful crispness, served with a creamy chipotle aioli.",
            "£4.49",
            sweetPotato
        )
    );

    return sidesContainer;
};

function createDrinksMenu() {
    const drinksContainer = document.createElement('div');
    drinksContainer.classList.add('menu-container');

    const drinksHeader = document.createElement('div');
    drinksHeader.classList.add('item-container-header');
    drinksContainer.textContent = 'Drinks';
    drinksContainer.appendChild(drinksHeader);

    drinksContainer.appendChild(
        createMenuItem(
            "Classic Milkshake",
            "Creamy and indulgent, choose from chocolate, vanilla, or strawberry flavors.",
            "£3.99",
            milkshake
        )
    );

    drinksContainer.appendChild(
        createMenuItem(
            "Craft Soda",
            "Quench your thirst with our selection of unique, locally sourced craft sodas.",
            "£2.99",
            soda
        )
    );

    drinksContainer.appendChild(
        createMenuItem(
            "Refreshing Lemonade",
            "A zesty and thirst-quenching beverage made with freshly squeezed lemons and a hint of sweetness.",
            "£2.99",
            lemonade
        )
    );

    drinksContainer.appendChild(
        createMenuItem(
            "Iced Tea",
            "A cool and revitalizing drink with your choice of peach, raspberry, or traditional lemon flavor.",
            "£2.99",
            icedTea
        )
    );

    return drinksContainer;
};

function createMenuItem(nameItem, text, price, picSrc, link) {
    const item = document.createElement('div');
    item.classList.add('item-container');

    const itemName = document.createElement('div');
    item.classList.add('item-name');
    itemName.textContent = nameItem;


    const itemText = document.createElement('div');
    itemText.classList.add('item-text');
    itemText.textContent = text;

    const itemPrice = document.createElement('div');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = price;

    const itemPic = new Image(100, 100);
    itemPic.src = picSrc;
    itemPic.classList.add('item-pic');

    item.appendChild(itemName);
    item.appendChild(itemText);
    item.appendChild(itemPrice);
    item.appendChild(itemPic);

    return item;
};