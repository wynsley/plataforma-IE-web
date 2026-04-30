import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Settings, Bell, LogOut, ChevronDown } from 'lucide-react';
import styles from './userMenu.module.css';
import { NavbarLink } from "../atoms/navbarLink";
import { Notifications } from './notifications';

function UserMenu({ onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null); // 👈 referencia al menú

  const user = {
    name: 'Wynsely Durán',
    email: 'wynjs@gmail.com',
    avatar: null
  };

  const menuItems = [
    { href: '/settings', text: 'Cambiar Contraseña', icon: Settings },
    { href: '/logout', text: 'Cerrar Sesión', icon: LogOut }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleItemClick = () => setIsOpen(false);

  const handleClick = (e, href) => {
    if (href === '/logout') {
      e.preventDefault();
      if (onLogout) onLogout();
      setIsOpen(false);
      navigate('/');
    } else {
      handleItemClick();
    }
  };

  //  Detectar click fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.userMenuWrapper} ref={menuRef}>
      <Notifications/>
      <button className={styles.userButton} onClick={toggleMenu}>
        {user.avatar ? (
          <img src={user.avatar} alt={user.name} className={styles.avatar} />
        ) : (
          <div className={styles.avatarPlaceholder}>
            <User size={20} />
          </div>
        )}
        <span className={styles.userName}>{user.name}</span>
        <ChevronDown 
          size={16} 
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
        />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.userInfo}>
            <div className={styles.userInfoName}>{user.name}</div>
            <div className={styles.userInfoEmail}>{user.email}</div>
          </div>

          <div className={styles.divider}></div>

          <ul className={styles.menuList}>
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index} className={styles.menuItem}>
                  <NavbarLink
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    text={
                      <div className={styles.menuItemContent}>
                        <Icon size={18} />
                        <span className={styles.itemText}>{item.text}</span>
                      </div>
                    }
                    className={styles.menuLink}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export { UserMenu };