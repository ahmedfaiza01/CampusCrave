import React, { useState } from 'react';
import { styles } from '../assets/dummyadmin';
import { GiChefToque } from 'react-icons/gi';
import { FiMenu, FiX } from 'react-icons/fi';
import { FiPlusCircle, FiList, FiShoppingCart, FiUserPlus, FiUsers, FiGift } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Add Items', href: '/', icon: <FiPlusCircle/> },
  { name: 'List', href: '/list', icon: <FiList  /> },
  { name: 'Orders', href: '/orders', icon: <FiShoppingCart  /> },
  { name: 'AddStaff', href: '/add-staff', icon: <FiUserPlus  /> },
  { name: 'StaffList', href: '/staff-list', icon: < FiUsers /> },
  { name: 'Subscriptions', href: '/subscriptions', icon: <FiGift  /> },

];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navWrapper}>
      <div className={styles.navContainer}>
        <div className={styles.logoSection}>
          <GiChefToque className={styles.logoIcon} />
          <span className={styles.logoText}>Admin Panel</span>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className={styles.menuButton}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={styles.desktopMenu}>
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `${styles.navLinkBase} ${isActive ? styles.navLinkActive : styles.navLinkInactive}`
              }
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
      </div>

     
      {/* FOR MOBILE VIEW */}
      {menuOpen && (
           <div className={styles.mobileMenu}>
               {navLinks.map((link) => (
                  <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                      `${styles.navLinkBase} ${isActive ? styles.navLinkActive : styles.navLinkInactive}`
        }
      >
        {link.icon}
        <span>{link.name}</span>
      </NavLink>
    ))}
  </div>
)}
    </nav>
  );
};

export default Navbar;
