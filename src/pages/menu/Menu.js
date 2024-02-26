// Menu.js
import React from 'react';
import './Menu.css';

const Menu = () => {
  const menuItems = [
    { name: 'Lachit Roll', image: 'image1.png', description: 'Delicious pizza topped with cheese, pepperoni, and fresh vegetables.', price: '$10.99' },
    { name: 'Python Roll', image: 'image4.jpg', description: 'Juicy beef patty served with lettuce, tomato, onion, and your choice of cheese.', price: '$8.99' },
    { name: 'Assamese Thali', image: 'image3.png', description: 'Assorted sushi rolls made with fresh seafood and sticky rice.', price: '$12.99' },
    // Add more menu items as needed
  ];

  return (
    <div className="menu">
      <h2>Menu</h2>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={`images/${item.image}`} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
