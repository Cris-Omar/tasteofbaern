import { useTranslation } from "react-i18next"
import "../../styles/style.css"
import Bar from "./Bar";

export default function Menu(){

  const { t } = useTranslation();

  return(
    <div className="menu">
      <p>The Menus and drinks availible will be displayed here!!!</p>
      <Bar />
    </div>
  )
}