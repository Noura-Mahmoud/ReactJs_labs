import React from 'react';
import "../i18"
import { useTranslation } from 'react-i18next';

const Home = () => {
    const [t, i18n] = useTranslation();
    return (
        <>
            {i18n.language ==="en" && <input type='button' value="AR" onClick={()=>{i18n.changeLanguage("ar")}}></input>}
            {i18n.language ==="ar" &&  <input type='button' value="En" onClick={()=>{i18n.changeLanguage("en")}}></input>}
        <div>
            {t("Welcome to our movies home ^_^")}
        </div>
        </>
    );
};

export default Home;