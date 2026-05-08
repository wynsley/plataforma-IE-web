// mobileMenu.jsx

import { ChevronDown } from "lucide-react";

import { NavbarLink } from "../atoms/navbarLink";

function MobileMenu({
  menu,
  mobileOpen,
  openDropdown,
  toggleDropdown,
  setOpenDropdown,
  setMobileOpen,
}) {
  return (
    <div
      className={`
        md:hidden
        absolute
        top-[4em]
        left-0
        w-full
        bg-blue
        shadow-md
        z-40
        px-6
        py-4
        transition-all duration-300

        ${
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }
      `}
    >
      <ul className="flex flex-col gap-2 list-none m-0 p-0">
        {menu.map((item, i) => (
          <li key={i} className="w-full">
            {item.submenu ? (
              <>
                <button
                  onClick={() => toggleDropdown(i)}
                  className="
                    w-full
                    flex items-center justify-between
                    text-white
                    py-3
                    border-b border-white/10
                  "
                >
                  <span>{item.text}</span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      openDropdown === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown === i && (
                  <ul
                    className="
                      flex flex-col
                      bg-blueT/30
                      rounded-md
                      overflow-hidden
                    "
                  >
                    {item.submenu.map((subitem, subindex) => (
                      <NavbarLink
                        key={subindex}
                        href={subitem.href}
                        text={subitem.text}
                        variant="submenu"
                        onClick={() => {
                          setOpenDropdown(null);
                          setMobileOpen(false);
                        }}
                        className="
                          px-4 py-3
                          text-white
                          text-[.85em]
                          hover:bg-blueT/70
                          transition-all
                        "
                      />
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <NavbarLink
                href={item.href}
                text={item.text}
                onClick={() => setMobileOpen(false)}
                className="
                  block
                  text-white
                  py-3
                  border-b border-white/10
                "
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { MobileMenu };