document.addEventListener("DOMContentLoaded", function() {
    var userLang = navigator.language || navigator.userLanguage;

    var translations = {
        "pt-BR": {
            "welcome": "Bem-vindo ao Site do Endless Host Roles!",
            "description": "Endless Host Roles (EHR), o maior mod apenas para host de Among Us, foi criado pelo genial Gurge44. Inicialmente chamado de TOHE Plus (TOHE+), por ser uma modificação do TOHE (Town Of Host), o mod agora apresenta muito mais funções e opções do que sua primeira versão, e Gurge continua a atualizá-lo regularmente.",
            "about-title": "Sobre o EHR:",
            "about": "EHR é o maior mod apenas para host de Among Us, apresentando mais de 350 funções e 7 modos de jogo. Ele também inclui um aplicativo Custom Team Assigner para personalizar totalmente sua experiência de jogo!",
            "fan-title": "Aviso de Site de Fãs:",
            "disclaimer": "Este é um site de fãs. Explore o site oficial <a href='https://sites.google.com/view/ehr-au/crewmate-roles' target='_blank'>aqui</a>.",
            "download": "Baixe a versão mais recente do mod <a href='https://github.com/Gurge44/EndlessHostRoles/releases/tag/v4.2.0' target='_blank'>aqui</a>."
        },
        "ru": {
            "welcome": "Добро пожаловать на сайт Endless Host Roles!",
            "description": "Endless Host Roles (EHR), крупнейший мод для хостов Among Us, создан гениальным Gurge44. Изначально названный TOHE Plus (TOHE+), так как это была модификация TOHE (Town Of Host), мод теперь содержит значительно больше ролей и опций по сравнению с первой версией, и Gurge продолжает его регулярно обновлять.",
            "about-title": "О EHR:",
            "about": "EHR - самый обширный мод для хостов Among Us, включает более 350 ролей и 7 режимов игры. Также имеется приложение Custom Team Assigner для полной персонализации вашего игрового опыта!",
            "fan-title": "Отказ от ответственности сайта фанатов:",
            "disclaimer": "Это фанатский сайт. Изучите официальный сайт <a href='https://sites.google.com/view/ehr-au/crewmate-roles' target='_blank'>здесь</a>.",
            "download": "Скачайте последнюю версию мода <a href='https://github.com/Gurge44/EndlessHostRoles/releases/tag/v4.2.0' target='_blank'>здесь</a>."
        }
    };

    var lang = userLang.split('-')[0];
    if (translations[lang]) {
        document.getElementById("welcome").textContent = translations[lang]["welcome"];
        document.getElementById("description").innerHTML = translations[lang]["description"];
        document.getElementById("about-title").textContent = translations[lang]["about-title"];
        document.getElementById("about").innerHTML = translations[lang]["about"];
        document.getElementById("fan-title").textContent = translations[lang]["fan-title"];
        document.getElementById("disclaimer").innerHTML = translations[lang]["disclaimer"];
        document.getElementById("download").innerHTML = translations[lang]["download"];
    }
});
