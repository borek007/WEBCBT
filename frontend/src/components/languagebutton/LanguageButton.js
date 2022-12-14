const LanguageButton = (props) => {
  const { i18n } = props;
  return (
    <div
      className="absolute z-10 left-10 top-10 cursor-pointer text-white font-bold font-italic text-2xl"
      onClick={() => {
        if (i18n.language === "en") {
          i18n.changeLanguage("pl");

          localStorage.setItem("lang", "pl");
        } else {
          i18n.changeLanguage("en");
          localStorage.setItem("lang", "en");
        }
      }}
    >
      {i18n.language}
    </div>
  );
};
export default LanguageButton;
