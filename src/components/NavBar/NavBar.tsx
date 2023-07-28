import { useState, useRef, useEffect } from "react";
import "./NavBar.css";

interface NavItem {
  text: string;
  href: string;
}

interface NavBarProps {
  observerRefs: React.RefObject<Element[]>;
}

// These items will be rendered in navbar
const navItems: NavItem[] = [
  {
    text: "Home",
    href: "#Home",
  },
  {
    text: "About me",
    href: "#About",
  },
  {
    text: "Tech Stack",
    href: "#Tech-stack",
  },
  {
    text: "Projects",
    href: "#Projects",
  },
  {
    text: "Contact",
    href: "#Contact",
  },
];

const NavBar = ({ observerRefs }: NavBarProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileView, setMobileView] = useState(false);
  const [visibleKey, setVisibleKey] = useState<number>(0);
  const observers = useRef<IntersectionObserver[]>([]);
  const cleanupRef = useRef<() => void>(() => {
    // This function will be set as the cleanup function later in the effect
    observers.current.forEach((observer) => observer?.disconnect());
  });

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Set visible key as clicked nav item
  const onClick = (_item: NavItem, key: number) => {
    setVisibleKey(key);
  };

  // Observer function to manage nav item color change
  const observerCallback: IntersectionObserverCallback = ( entries, observer ) => {
    const key = observers.current.findIndex((o) => o === observer);
    if (entries.length && entries[0].isIntersecting) {
      setVisibleKey(key);
    }
  };

  // Setup observers to manage nav item color change
  useEffect(() => {
    if (observerRefs.current && observerRefs.current.length) {
      Array.from(Array(10).keys()).forEach((_u, key) => {
        if (observerRefs.current![key]) {
          observers.current[key] = new IntersectionObserver(
            (entries) => observerCallback(entries, observers.current[key]!),
            { threshold: 1 }
          );
          observers.current[key]?.observe(observerRefs.current![key]);
        }
      });
    }

    return cleanupRef.current;
  }, [observerRefs]);

  // Cleanup observers here to silence typescript and make code safer
  useEffect(() => {
    cleanupRef.current = () => {
      observers.current.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // Handle window-resize to achieve responsive navbar
  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 510);
    };

    // Initial check for mobile view
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navCont">
      {isMobileView ? (
        // Render dropdown menu for small devices
        <div
          style={{ fontSize: "2rem" }}
          onClick={handleDropdownToggle}
          className={
            isDropdownOpen
              ? "material-symbols-outlined dropdown-cont navBorder"
              : "material-symbols-outlined dropdown-cont"
          }
        >
          menu
          {isDropdownOpen && (
            <div className="dropdown-content" onClick={closeDropdown}>
              {navItems.map((item, key) => (
                <a href={item.href} key={key} className="navAnchor">
                  <li
                    className={`linksLi${
                      key === visibleKey ? " active-link" : ""
                    }`}
                    onClick={() => onClick(item, key)}
                  >
                    {item.text}
                  </li>
                </a>
              ))}
            </div>
          )}
        </div>
      ) : (
        // Otherwise render the regular navbar
        <ul className="linksCont">
          {navItems.map((item, key) => (
            <a href={item.href} key={key} className="navAnchor">
              <li
                className={`linksLi${key === visibleKey ? " active-link" : ""}`}
                onClick={() => onClick(item, key)}
              >
                {item.text}
              </li>
            </a>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
