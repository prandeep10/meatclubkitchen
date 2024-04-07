import React, { useState, useEffect } from 'react';
import { readRemoteFile } from 'react-papaparse';
import './Menu.css'; // Make sure you have the CSS file in the correct path

const Menu = () => {
  const [activeTab, setActiveTab] = useState('menu1');
  const [menu1Items, setMenu1Items] = useState([]);
  const [menu2Items, setMenu2Items] = useState([]);

  useEffect(() => {
    // Fetch and parse menu1.csv
    readRemoteFile('/menu1.csv', {
      header: true,
      complete: (results) => {
        setMenu1Items(results.data);
      },
    });

    // Fetch and parse menu2.csv
    readRemoteFile('/menu2.csv', {
      header: true,
      complete: (results) => {
        setMenu2Items(results.data);
      },
    });
  }, []);

  return (
    <div className='menu-section'>
      <div className="menu-container">
      <div className="tabs">
        <button className={activeTab === 'menu1' ? 'active' : ''} onClick={() => setActiveTab('menu1')}>Part 1</button>
        <button className={activeTab === 'menu2' ? 'active' : ''} onClick={() => setActiveTab('menu2')}>Part 2</button>
      </div>
      <div className="content">
        {activeTab === 'menu1' && (
          <div className="menu">
            {menu1Items.map((item, index) => (
              <div key={index} className="menu-item">
                <h3>{item.Item}</h3>
                <p>{item.Variant}</p>
                <div className="price">{item.Price}</div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'menu2' && (
          <div className="menu">
            {menu2Items.map((item, index) => (
              <div key={index} className="menu-item">
                <h3>{item.Item}</h3>
                <p>{item.Description}</p>
                <div className="price">{item.Price1} / {item.Price2}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Menu;
