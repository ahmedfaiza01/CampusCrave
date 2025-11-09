import React, { useState } from 'react';
import { styles } from '../assets/dummyadmin';
import { GiChefToque } from 'react-icons/gi';
import { FiMenu, FiX, FiBox, FiClipboard, FiList, FiShoppingCart } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Add Items', href: '/', icon: <FiClipboard /> },
  { name: 'List', href: '/list', icon: <FiList /> },
  { name: 'Orders', href: '/orders', icon: <FiShoppingCart /> },
  { name: 'Subscriptions', href: '/subscriptions', icon: <FiMenu /> },
  { name: 'Inventory', href: '/inventory', icon: <FiBox /> }, // ✅ Added inventory link
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navWrapper}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logoSection}>
          <GiChefToque className={styles.logoIcon} />
          <span className={styles.logoText}>Cafeteria Staff Panel</span>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={styles.menuButton}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `${styles.navLinkBase} ${
                  isActive ? styles.navLinkActive : styles.navLinkInactive
                }`
              }
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `${styles.navLinkBase} ${
                  isActive ? styles.navLinkActive : styles.navLinkInactive
                }`
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
