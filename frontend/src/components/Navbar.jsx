import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logoLight from "../assets/images/NEGRO_LETRAS_ROJAS-removebg-preview.png";
import {
  CloseIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "./SiteIcons";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  const handleNavClick = (path, hash = "") => {
    setMenuOpen(false);
    if (path) {
      navigate(path);
      setTimeout(() => window.scrollTo(0, 0), 100);
    } else if (hash) {
      if (location.pathname !== "/") {
        navigate("/", { state: { targetId: hash.replace("#", "") } });
      } else {
        const el = document.querySelector(hash);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }
  };

  const navLinks = [
    { name: "INICIO", action: () => handleNavClick("/") },
    { name: "SOBRE NOSOTROS", action: () => handleNavClick("/nosotros") },
    { name: "SERVICIOS", action: () => handleNavClick(null, "#services") },
    { name: "CONTACTO", action: () => handleNavClick("/contacto") },
  ];

  // Función actualizada: Ahora devuelve "AGENCIA DE MARKETING"
  const getRouteName = () => {
    if (location.pathname === "/nosotros") return "NOSOTROS";
    if (location.pathname === "/contacto") return "CONTACTO";
    return "AGENCIA DE MARKETING";
  };

  const isInternalPage = location.pathname !== "/";
  const navBackground = (scrolled || isInternalPage) ? "rgba(10, 10, 10, 0.95)" : "transparent";
  const navBackdrop = (scrolled || isInternalPage) ? "blur(20px)" : "none";
  const navBorder = (scrolled || isInternalPage) ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent";

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: (scrolled || isInternalPage) ? "80px" : "110px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 4%",
          zIndex: 100,
          transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
          background: navBackground,
          backdropFilter: navBackdrop,
          borderBottom: navBorder,
        }}
      >
        {/* Lado Izquierdo: LOGO */}
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
          <button
            onClick={() => handleNavClick("/")}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <img
              src={logoLight}
              alt="Magna"
              style={{
                height: (scrolled || isInternalPage) ? "45px" : "65px",
                width: "auto",
                transition: "height 0.4s ease",
                filter: "drop-shadow(0 0 10px rgba(227, 28, 37, 0.2))"
              }}
            />
          </button>
        </div>

        {/* CENTRO: INDICADOR DINÁMICO */}
        <div style={{
          flex: 1.5, // Le damos un poco más de espacio al centro para el texto largo
          display: "flex",
          justifyContent: "center",
          opacity: (scrolled || isInternalPage) ? 1 : 0.8,
          transition: "opacity 0.4s ease"
        }}>
          <div style={{
            padding: "8px 24px",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "30px",
            backgroundColor: "rgba(255,255,255,0.03)",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            whiteSpace: "nowrap"
          }}>
            <span style={{
              fontSize: "0.65rem",
              letterSpacing: "3px",
              color: "#E31C25",
              fontWeight: "800"
            }}>MAGNA</span>
            <div style={{ width: "1px", height: "14px", backgroundColor: "rgba(255,255,255,0.2)" }}></div>
            <span style={{
              fontSize: "0.75rem",
              letterSpacing: "2px",
              color: "#fff",
              fontWeight: "300"
            }}>
              {getRouteName()}
            </span>
          </div>
        </div>

        {/* Lado Derecho: MENÚ */}
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <button
            onClick={() => setMenuOpen(true)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <span style={{
              fontSize: "0.8rem",
              fontWeight: "700",
              letterSpacing: "3px",
              display: window.innerWidth < 768 ? "none" : "block"
            }}>
              MENU
            </span>
            <div style={{
              width: "35px",
              height: "14px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end"
            }}>
              <span style={{ width: "100%", height: "2px", backgroundColor: "#E31C25" }}></span>
              <span style={{ width: "60%", height: "2px", backgroundColor: "#fff" }}></span>
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="new-menu-overlay"
            initial={{ clipPath: "circle(0% at 100% 0)" }}
            animate={{ clipPath: "circle(150% at 100% 0)" }}
            exit={{
              clipPath: "circle(0% at 100% 0)",
              transition: { delay: 0.3, duration: 0.6, ease: [0.76, 0, 0.24, 1] },
            }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div
              className="new-menu-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <button className="new-menu-close" onClick={() => setMenuOpen(false)}>
                <CloseIcon size={40} />
              </button>

              <div className="new-menu-links">
                {navLinks.map((link, i) => (
                  <div key={link.name} className="new-link-wrap">
                    <motion.button
                      className="new-menu-link"
                      onClick={link.action}
                      initial={{ y: "120%", rotateZ: 4 }}
                      animate={{ y: "0%", rotateZ: 0 }}
                      exit={{ y: "120%", rotateZ: -4 }}
                      transition={{
                        delay: 0.15 + i * 0.08,
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {link.name}
                    </motion.button>
                  </div>
                ))}
              </div>

              <div className="new-menu-footer">
                <div className="new-socials">
                  <a href="#"><InstagramIcon size={24} /></a>
                  <a href="#"><LinkedinIcon size={24} /></a>
                  <a href="#"><YoutubeIcon size={24} /></a>
                </div>
                <div>
                  <p>Rosario, Santa Fe — Argentina</p>
                  <a href="mailto:diegob@magnamkt.com" className="new-mail">
                    diegob@magnamkt.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;