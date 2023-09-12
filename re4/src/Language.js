import React, {createContext, useContext, useState} from "react";

//<select onChange={}>
//  <option value='en'> English</option>
//  <option value='ko'> Korean</option>
//</select>

const LanguageContext = createContext();

function LanguageProvider({children}){
    const [lang, setLang] = useState('en');

    const switchLang = () => {
        setLang(prevLang => prevLang === 'en' ? 'ko' : 'en');
        //이전 상태를 체크
        //만약 이전 언어가 'en'이라면 'ko'로 바꿔줘
    };

    const LangChange = (event) => {
        setLang(event.target.value);
    }

    return (
        <LanguageContext.Provider value={{lang, switchLang, LangChange}}>
            {children}
        </LanguageContext.Provider>
    );
}

function SelectLang(){
    const{lang, LangChange} = useContext(LanguageContext);

    return(
        <select onChange={LangChange}>
                <option value="en">English</option>
                <option value="ko">Korean</option>
        </select>
    )
}

function SayHello(){
    const {lang} = useContext(LanguageContext);

    return <p>{lang ==='en' ? 'Hello' : '안녕하세요'} </p>
}

function Language(){
    return(
        <LanguageProvider>
            <SelectLang/>
            <SayHello/>
        </LanguageProvider>
    )
}

export default Language;