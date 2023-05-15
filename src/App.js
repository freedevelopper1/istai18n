import { useState } from "react";
import './App.css';
import i18n from "i18next";
import { useTranslation, initReactI18next, Trans } from "react-i18next";
import HttpBackend from "i18next-http-backend";
i18n
  .use(initReactI18next)
  .use(HttpBackend)
  .init({
    backend: { loadPath: "/translations/{{lng}}.json" },
    lng: "fr",
    fallbackLng: "fr"
  });
function App() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setCount((previousCount) => previousCount + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>{t("welcome")}</h1>
        <p>
          <Trans components={{ bold: <strong />, italic: <i /> }}>
            sampleText
          </Trans>
        </p>
        <p>{t("changed", { count })}</p>
        <select name="language" onChange={onChange}>
          <option value="fr">français</option>
          <option value="ar">arabe</option>
          <option value="en">Anglais</option>
          <option value="de">Germany</option>
        </select>
      </header>
    </div>
  );
}

export default App;
