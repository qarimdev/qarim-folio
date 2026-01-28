"use client";
import CardNav from "./CardNav";

export default function Navbar() {
  const items = [
    {
      label: "Home",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "About", href: "/#about", ariaLabel: "About" },
        { label: "Gallery", href: "/#gallery", ariaLabel: "Gallery" },
        { label: "Case Studies & Projects", href: "/#case-studies-projects", ariaLabel: "Case Studies & Projects" }
      ]
    },
    {
      label: "About",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Get to Know Me", href: "/about#get-to-know-me", ariaLabel: "Get to Know Me" },
        { label: "Journey", href: "/about#journey", ariaLabel: "Journey" },
        { label: "Expertise", href: "/about#expertise", ariaLabel: "Expertise" },
        { label: "Achievements", href: "/about#achievements", ariaLabel: "Achievements" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "All Projects", href: "/projects#all", ariaLabel: "All Projects" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#3D2F4F", 
      textColor: "#fff",
      links: [
        { label: "Get in Touch", href: "/contact", ariaLabel: "Get in Touch" }
      ]
    }
  ];

  return (
    <CardNav
      logo="/globe.svg"
      logoAlt="Qarim Logo"
      items={items}
      baseColor="rgba(0, 0, 0, 0.8)"
      menuColor="#fff"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="back.out(1.7)"
    />
  );
}
