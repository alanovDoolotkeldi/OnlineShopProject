import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./en/translation.json"
import translationRu from "./ru/translation.json"
import translationKg from "./kg/translation.json"
i18next.use(initReactI18next).init({
    resources:{
        en:{
            translation:translationEn
        },
        ru:{ translation:translationRu
        },
        kg:{
            translation:translationKg   
        }
    },
    lng: "en", 
})

export default i18next