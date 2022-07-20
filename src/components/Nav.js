import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

let images = [
  "https://gogeticon.net/files/689554/a50f6d2fa585abfa1a09fc9b047d2f89.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
];

export default function Nav() {
  const [show, handleShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    //스크롤 할 때
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      //스크롤 사용 안할 때
      window.removeEventListener("scroll", () => {});
    };
  });

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        alt="Netflix logo"
        src={images[0]}
        className="nav__logo"
        onClick={() => (window.location.href = "http://localhost:3000/")}
      />
      <input
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="영화를 검색해주세요."
      />
      <img alt="User logged" src={images[1]} className="nav__avatar" />
    </nav>
  );
}
