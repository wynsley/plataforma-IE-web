import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Settings, LogOut, ChevronDown } from 'lucide-react';
import { NavbarLink } from "../atoms/navbarLink";
import { Notifications } from './notifications';

function UserMenu({ onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

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

  const handleClick = (e, href) => {
  if (href === '/logout') {
    e.preventDefault();

    // 🔥 limpiar sesión
    localStorage.removeItem('user'); // si lo usas
    sessionStorage.clear(); // opcional

    if (onLogout) onLogout();

    setIsOpen(false);

    navigate('/', { replace: true }); // evita volver atrás
  } else {
    setIsOpen(false);
  }
};

  // cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="flex items-center relative ml-auto h-full">
      
      <Notifications />

      {/* Botón */}
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2 px-4 py-2 h-full transition-colors duration-300 hover:bg-blueT"
      >
        {user.avatar ? (
          <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover" />
        ) : (
          <div className="w-9 h-9 rounded-full bg-blueT flex items-center justify-center text-white">
            <User size={20} />
          </div>
        )}

        <span className="text-sm font-medium text-white">
          {user.name}
        </span>

        <ChevronDown
          size={16}
          className={`transition-transform duration-300 text-white ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full  w-60 bg-blue shadow-xl z-1000 overflow-hidden animate-[slideDown_0.3s_ease-out]">

          {/* Info usuario */}
          <div className="p-4 bg-white/10">
            <div className="text-sm font-semibold text-white">
              {user.name}
            </div>
            <div className="text-xs text-white/70">
              {user.email}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/20"></div>
          {/* Menú */}
          <ul className="py-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index}>
                  <NavbarLink
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    text={
                      <div className="flex items-center gap-3 w-full">
                        <Icon size={18} />
                        <span className="text-sm">{item.text}</span>
                      </div>
                    }
                    className="block px-4 py-3 text-white hover:bg-blueT/80 transition-colors duration-200"
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