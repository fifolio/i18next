import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function App() {
  const { t } = useTranslation()
  const [username] = useState('Firas');

  return (
    <div>
      {t('welcomeMSG')} <b>{username}</b>!
    </div>
  )
}