import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './navbarMenu.module.css';
import { NavbarLink } from "../atoms/navbarLink";

function NavbarMenu() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menu = [
    {
      href: '/register',
      text: 'Registro',
    },
    {
      href: '/students',
      text: 'Estudiantes',
      submenu: [
        { href: '/students/schedules', text: 'Horarios' },
        { href: '/students/courses', text: 'Cursos' },
        { href: '/students/grades', text: 'Calificaciones' },
        { href: '/students/attendance', text: 'Asistencia' },
      ]
    },
    {
      href: '/teachers',
      text: 'Docentes',
      submenu: [
        { href: '/teachers/courses', text: 'Cursos' },
        { href: '/teachers/careers', text: 'Carreras' },
        { href: '/teachers/schedule', text: 'Horario' },
        { href: '/teachers/evaluations', text: 'Evaluaciones' },
      ]
    },
    {
      href: '/contact',
      text: 'Contacto',
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <ul className={styles.navbarMenu}>
      {menu.map((item, index) => (
        <li 
          key={index} 
          className={styles.item}
        >
          {item.submenu ? (
            <div className={styles.dropdownWrapper}>
              <button
                onClick={() => toggleDropdown(index)}
                className={styles.dropdownButton}
              >
                {item.text}
                <ChevronDown 
                  size={16} 
                  className={`${styles.chevron} ${openDropdown === index ? styles.chevronOpen : ''}`}
                />
              </button>
              
              {openDropdown === index && (
                <ul className={styles.submenu}>
                  {item.submenu.map((subitem, subindex) => (
                    <NavbarLink 
                      key={subindex}
                      href={subitem.href} 
                      text={subitem.text}
                      onClick={() => setOpenDropdown(null)}
                      className={styles.submenuItem}
                    />
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <NavbarLink href={item.href} text={item.text} className={styles.linkMenu}/>
          )}
        </li>
      ))}
    </ul>
  );
}

export { NavbarMenu };