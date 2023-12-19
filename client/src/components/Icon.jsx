import React from "react";
import arrow from "../assets/arrow.svg";
import bath from "../assets/bath-icon.svg";
import bed from "../assets/bed-icon.svg";
import downArrow from "../assets/down-arrow.svg";
import downRed from "../assets/downRed.svg";
import email from "../assets/email-icon.svg";
import footerPhone from "../assets/footer-phone-icon.svg";
import garage from "../assets/garage-icon.svg";
import hamburger from "../assets/hamburger.svg";
import home from "../assets/home-icon.svg";
import list from "../assets/list-icon.svg";
import location from "../assets/location-icon.svg";
import map from "../assets/map-icon.svg";
import metro from "../assets/metro-logo.svg";
import phone from "../assets/phone-icon.svg";
import quill from "../assets/quill_paper.svg";
import search from "../assets/search-icon.svg";

const icons = { arrow, bath, bed, downArrow, downRed, email, footerPhone, garage, hamburger, home, list, location, map, metro, phone, quill, search };

export default function Icon({ icon, size, style }) {
    return <img src={icons[icon]} alt={icon} className={`w-${size} h-{size}  inline-flex ${style} items-center`} />;
}
