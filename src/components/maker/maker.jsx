import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Ellie",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      emial: "ellie@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileURL:
        "https://resources.premierleague.com/premierleague/photo/2018/07/20/c9cf5565-b523-4fbf-9a77-7ca5feb528e6/2018-07-18T120125Z_1536188680_RC1305E831D0_RTRMADP_3_STOCK-WHU1819.jpg",
    },
    {
      id: "2",
      name: "KSB",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      emial: "KSB@gmail.com",
      message: "go for it",
      fileName: "KSB",
      fileURL: null,
    },
    {
      id: "3",
      name: "INJUNG",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      emial: "INJUNG@gmail.com",
      message: "go for it",
      fileName: "INJUNG",
      fileURL: null,
    },
  ]);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
