import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMainStore } from "../../store/MainStore";
import { useTranslation } from "react-i18next";
import LanguageButton from "../languagebutton";

const HomePage = (props) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    props.setShowNavbar(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div></div>;
};

export default HomePage;
