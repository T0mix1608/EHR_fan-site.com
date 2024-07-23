document.addEventListener('DOMContentLoaded', function() {
    const userLang = navigator.language || navigator.userLanguage;
    const mobileWarningElement = document.getElementById('mobile-warning');
    
    
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        mobileWarningElement.innerText = {
            en: "Sorry, but mobiles cannot download the mod. Please join a lobby with this mod!",
            pt: "Desculpe, mas dispositivos móveis não conseguem baixar o mod. Tente entrar no lobby de alguém com esse mod!",
            ru: "Извините, но на мобильных устройствах нельзя скачать мод. Пожалуйста, присоединитесь к лобби с этим модом!"
        }[userLang] || "Sorry, but mobiles cannot download the mod. Please join a lobby with this mod!";
    }

    const welcomeElement = document.getElementById('welcome');
    const descriptionElement = document.getElementById('description');
    const aboutElement = document.getElementById('about');
    const updateElement = document.getElementById('update');
    
    const translations = {
        en: {
            welcome: "Welcome to the Endless Host Roles Website!",
            description: "Endless Host Roles (EHR), the largest host-only mod for Among Us, was created by the ingenious Gurge44. Initially named TOHE Plus (TOHE+), as it was a modification of TOHE (Town Of Host), the mod now features significantly more roles and options than its first version, and Gurge continues to update it regularly.",
            about: "EHR is the most extensive host-only mod for Among Us, featuring over 350 roles and 7 game modes. It also includes a Custom Team Assigner application to fully customize your games!",
            update: "We will always keep you updated about the versions."
        },
        pt: {
            welcome: "Bem-vindo ao site do Endless Host Roles!",
            description: "Endless Host Roles (EHR), o maior mod exclusivo para anfitriões de Among Us, foi criado pelo genial Gurge44. Inicialmente chamado de TOHE Plus (TOHE+), por ser uma modificação do TOHE (Town Of Host), o mod agora possui significativamente mais papéis e opções do que sua versão inicial, e Gurge continua a atualizá-lo regularmente.",
            about: "EHR é o mod mais extenso para anfitriões de Among Us, com mais de 350 papéis e 7 modos de jogo. Ele também inclui um aplicativo Custom Team Assigner para personalizar totalmente seus jogos!",
            update: "Sempre iremos te atualizar sobre as versões."
        },
        ru: {
            welcome: "Добро пожаловать на сайт Endless Host Roles!",
            description: "Endless Host Roles (EHR), самый большой мод только для хостов в Among Us, был создан гениальным Gurge44. Изначально названный TOHE Plus (TOHE+), поскольку это была модификация TOHE (Town Of Host), мод теперь включает значительно больше ролей и опций, чем его первая версия, и Gurge продолжает регулярно обновлять его.",
            about: "EHR - это самый обширный мод только для хостов в Among Us, с более чем 350 ролями и 7 режимами игры. Также включает приложение Custom Team Assigner для полной настройки ваших игр!",
            update: "Мы всегда будем держать вас в курсе версий."
        }
    };
    
    const translate = (element, key) => {
        element.innerText = translations[userLang] ? translations[userLang][key] : translations.en[key];
    };

    translate(welcomeElement, 'welcome');
    translate(descriptionElement, 'description');
    translate(aboutElement, 'about');
    translate(updateElement, 'update');
});
