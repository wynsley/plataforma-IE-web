import React, { useState } from 'react';
import { User, Settings, Bell, HelpCircle, LogOut, ChevronDown } from 'lucide-react';
import styles from './userMenu.module.css';
import { NavbarLink } from "../atoms/navbarLink";

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Simulación de usuario logueado - puedes reemplazar con tu lógica de autenticación
  const user = {
    name: 'Juan Pérez',
    email: 'juan@example.com',
    avatar: null // Puedes poner una URL de imagen aquí
  };

  const menuItems = [
    {
      href: '/profile',
      text: 'Mi Perfil',
      icon: User
    },
    {
      href: '/settings',
      text: 'Configuración',
      icon: Settings
    },
    {
      href: '/notifications',
      text: 'Notificaciones',
      icon: Bell
    },
    {
      href: '/help',
      text: 'Ayuda',
      icon: HelpCircle
    },
    {
      href: '/logout',
      text: 'Cerrar Sesión',
      icon: LogOut
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.userMenuWrapper}>
      <button
        className={styles.userButton}
        onClick={toggleMenu}
      >
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            className={styles.avatar}
          />
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
                    text={
                      <div className={styles.menuItemContent}>
                        <Icon size={18} />
                        <span className={styles.itemText}>{item.text}</span>
                      </div>
                    }
                    onClick={handleItemClick}
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