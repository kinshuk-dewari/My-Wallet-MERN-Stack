import { useRef, useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  IconLayoutNavbarCollapse,
  IconQrcode,
  IconHome,
  IconFileAnalytics,
  IconAlignBoxCenterStretch,
  IconBrandTabler
} from "@tabler/icons-react";
import { cn } from "../lib/utils";

const NavBar = ({ role, desktopClassName, mobileClassName }) => {
  const { pathname } = useLocation();

  const navItems = {
    user: [
      { title: "Home", href: "/home", icon: <IconHome size={30} /> },
      { title: "Send Money", href: "/send", icon: <IconQrcode size={30} /> },
      { title: "History", href: "/history", icon: <IconAlignBoxCenterStretch size={30} /> },
    ],
    merchant: [
      { title: "Dashboard", href: "/merchant/dashboard", icon: <IconBrandTabler size={30} /> },
      { title: "Home", href: "/merchant", icon: <IconHome size={30} /> },
      { title: "Send Money", href: "/send", icon: <IconQrcode size={30} /> },
      { title: "History", href: "/merchant/history", icon: <IconAlignBoxCenterStretch size={30} /> },
      { title: "Report", href: "/merchant/report", icon: <IconFileAnalytics size={30} /> },
    ],
  };

  const items = navItems[role] || [];

  return (
    <>
      <FloatingDockDesktop items={items} pathname={pathname} className={desktopClassName} />
      <FloatingDockMobile items={items} pathname={pathname} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({ items, pathname, className }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className={cn("relative block md:hidden", className)} ref={menuRef}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { delay: idx * 0.05 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900",
                    pathname === item.href && "shadow-md shadow-gray-700"
                  )}
                >
                  <div className="dark:text-white">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
      >
        <IconLayoutNavbarCollapse className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({ items, pathname, className }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 md:flex dark:bg-neutral-900 mb-12",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer
          key={item.title}
          mouseX={mouseX}
          pathname={pathname} 
          {...item}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, pathname, title, icon, href }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const widthIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const widthSpringIcon = useSpring(widthIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  const heightSpringIcon = useSpring(heightIcon, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800",
          pathname === href && "shadow-md shadow-gray-700"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthSpringIcon, height: heightSpringIcon }}
          className="flex items-center justify-center dark:text-white"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}

export default NavBar;
