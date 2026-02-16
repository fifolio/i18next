import { useTranslation } from "react-i18next";

function App() {

  const { t, i18n } = useTranslation();

  return (
    <div>

      <h3>{t("welcomeUser", { name: "Firas" })}</h3>
      <h3>{t("activeTrades", { count: 10 })}</h3>
      <h3>{t("profitAmount", { amount: 850 })}</h3>


      <hr />

      <h1>{t("pageTitle")}</h1>
      <p>{t("description")}</p>

      <h2>{t("helloUser")}</h2>
      <h4>{t("logout")}</h4>

      <hr />


      <button onClick={() => i18n.changeLanguage("fr")}>
        Switch to French
      </button>

      <br />

      <button onClick={() => i18n.changeLanguage("ar")}>
        Switch to Arabic
      </button>

    </div>
  )
}

export default App
