var words = []
var colors = []
var wordbase = []
var clipboard = {red: [], blue: [], neutral: [], assassin: []}
var schemeShowed = false
var imagesShowed = true
var firstToGo = ""
var cssColors = {red: "#f44336", blue: "#2196f3", neutral: "#a1887f", assassin: "#424242"}
var cssURLs = {red: "img/red.jpg", blue: "img/blue.jpg", neutral: "img/neutral.jpg", assassin: "img/assassin.jpg"}
var originwordbase = ["Австралия",
"автобус",
"автомобиль",
"государство",
"ястреб",
"аквалангист",
"в ролях",
"Атлантида",
"алмаз",
"Америка",
"Англия",
"апельсин",
"Антарктида",
"Африка",
"ведьма",
"база",
"фрукты",
"банк",
"червь",
"бассейн",
"башня",
"бить",
"Канада",
"побережье",
"шаг",
"супергерой",
"Бразилия",
"бутылка",
"рассказ",
"музыка",
"вакуум",
"варенье",
"разъём",
"кит",
"вертолет",
"ветер",
"ветеринар",
"чистый",
"вино",
"воздух",
"Амазонка",
"волна",
"летучая мышь",
"восток",
"выставка",
"выстрел",
"гараж",
"Германия",
"гитара",
"глаз",
"голова",
"утес",
"ошибка",
"отель",
"гробовщик",
"карлик",
"грудь",
"группа",
"король",
"солома",
"дверь",
"двигатель",
"индейка",
"день",
"ребенок",
"динозавр",
"долина",
"пресс",
"кентавр",
"Европа",
"Египет",
"феникс",
"железо",
"забор",
"назад",
"залив",
"замок",
"заряжать",
"звезда",
"звук",
"слоновая кость",
"зима",
"дракон",
"золото",
"ниндзя",
"зуб",
"буйвол",
"играть",
"инопланетянин",
"Индия",
"история",
"Гималаи",
"казино",
"мрамор",
"ферма",
"капот",
"карта",
"зеркало",
"орех",
"качели",
"квадрат",
"кенгуру",
"кетчуп",
"кирпич",
"верблюд",
"Китай",
"клуб",
"книга",
"яйцо",
"код",
"колесо",
"кольцо",
"концерт",
"алкоголь",
"судно",
"корень",
"королева",
"корона",
"медсестра",
"кот",
"кофе",
"кран",
"крем",
"крикет",
"кровь",
"пингвин",
"пересекать",
"круг",
"хобот",
"крыша",
"кровать",
"лаборатория",
"лапа",
"ангел",
"лёд",
"лес",
"лимон",
"лимузин",
"лодка",
"Лондон",
"лошадь",
"лук",
"Луна",
"луч",
"скольжение",
"люблю",
"магазин",
"ягода",
"мамонт",
"масло",
"шкала",
"кролик",
"мёд",
"медведь",
"металл",
"миллионер",
"модель",
"молоко",
"подкова",
"море",
"мороженное",
"Москва",
"мост",
"Голливуд",
"фунт",
"мяч",
"небо",
"небоскрёб",
"рука",
"нож",
"Нью-Йорк",
"облако",
"огонь",
"опера",
"орёл",
"отпуск",
"палец",
"пальма",
"паук",
"парашют",
"парк",
"ракетка",
"Пекин",
"персонал",
"пыль",
"печать",
"пианино",
"бар",
"пиво",
"пилот",
"пират",
"пистолет",
"заметка",
"пицца",
"пластик",
"пластина",
"пляж",
"письмо",
"повар",
"подлодка",
"поезд",
"поездка",
"поклонник",
"галстук",
"порт",
"почта",
"Токио",
"осень",
"прокат",
"пуля",
"кора",
"Шекспир",
"ракета",
"революция",
"река",
"гигант",
"роман",
"рот",
"доллар",
"рука",
"рулетка",
"пирамида",
"блок",
"кружка",
"ветчина",
"самолёт",
"Сатурн",
"Бермудские о-ва",
"гвоздь",
"утконос",
"Север",
"сейф",
"осьминог",
"серебро",
"сеть",
"посольство",
"сила",
"флейта",
"ацтек",
"строка",
"снег",
"снеговик",
"собака",
"солдат",
"Меркурий",
"мечта",
"кастрюля",
"Берлин",
"спутник",
"стена",
"моль",
"скамья",
"частный",
"сюжет",
"танец",
"театр",
"агент",
"телескоп",
"идея",
"лев",
"торт",
"трава",
"труба",
"скорпион",
"Мексика",
"Альпы",
"утка",
"фильм",
"Франция",
"футбол",
"морковь",
"хвост",
"хлеб",
"шайба",
"туба",
"принцесса",
"рыцарь",
"цветок",
"цена",
"центр",
"цыплёнок",
"чай",
"часы",
"Чешский",
"заклинание",
"школа",
"шоколад",
"пирог",
"экран",
"электрический",
"юг",
"Юпитер",
"яблоко",
"яд",
"клён",
"обложка",
"платье",
"гений",
"куртка",
"линия",
"боец",
"кепка",
"смерть",
"скорая помощь",
"заболеваемость",
"болезнь",
"врач",
"больница",
"грипп",
"таблетка",
"тик",
"доска",
"аккумулятор",
"падение",
"отметка",
"верёвка",
"след",
"горн",
"соединение",
"дрель",
"фут",
"крюк",
"лазер",
"масса",
"микроскоп",
"шахта",
"крепление",
"часть",
"штырь",
"столб",
"переключатель",
"факел",
"трубка",
"оливковый",
"единорог",
"разбудить",
"марш",
"изменение",
"дата",
"ночь",
"весна",
"время",
"летать",
"почта",
"проходить",
"точка",
"колокол",
"счет",
"связь",
"бум",
"ботинок",
"коробка",
"перерыв",
"свеча",
"стул",
"проверять",
"церковь",
"холод",
"угол",
"хлопок",
"суд",
"степень",
"игра в кости",
"фигура",
"игра",
"благодать",
"зелень",
"дыра",
"поцелуй",
"адвокат",
"жизнь",
"свет",
"мусор",
"журнал",
"удача",
"мэр",
"игла",
"брюки",
"выбирать",
"ученик",
"круглый",
"ряд",
"парус",
"учёный",
"обувь",
"улыбка",
"носок",
"акции",
"костюм",
"учитель",
"храм",
"двор",
"ремень",
"бомба",
"кнопка",
"клетка",
"контракт",
"файл",
"ссылка",
"совпадение",
"вставить",
"сервер",
"контрабандист",
"шпион",
"бирка",
"вор",
"война",
"позвоночник",
"свинец",
"мята",
"поток",
"телёнок",
"малиновка",
"Амстердам",
"ремень",
"птица",
"дружок",
"мозг",
"щетка",
"бабочка",
"дело",
"шанс",
"курица",
"ребенок",
"компьютер",
"крокодил",
"текущий",
"блюдо",
"Земля",
"пример",
"поле",
"рыба",
"фокус",
"друг",
"сад",
"жираф",
"охрана",
"сердце",
"тепло",
"надеяться",
"ключ",
"киви",
"Кремль",
"озеро",
"закон",
"леопард",
"библиотека",
"замок",
"Марс",
"деньги",
"обезьяна",
"мышь",
"страница",
"покрасить",
"панда",
"бумага",
"Париж",
"картина",
"игрок",
"президент",
"принцип",
"проблема",
"радио",
"дождь",
"риск",
"дорога",
"скала",
"Сахара",
"соль",
"второй",
"акула",
"показать",
"змея",
"почвы",
"пространство",
"Испания",
"скорость",
"дух",
"место",
"стандарт",
"студент",
"сахар",
"лето",
"солнце",
"система",
"таблица",
"Техас",
"дерево",
"овощной",
"воды",
"погода",
"западный",
"крыло",
"год",
"зебра",
"попугай",
"крест",
"мачта",
"крот",
"жевать",
"реклама",
"хвалить",
"косить",
"клин",
"рок",
"новая",
"красивая",
"порода",
"тип",
"гриб",
"плешь",
"псих",
"белка",
"яхта",
"бой",
"пастор",
"редиска",
"ячейка",
"знак",
"брак",
"якорь",
"Гиперборея",
"Трансильвания",
"синхрофазотрон",
"бизон",
"чепчик",
"лоск",
"покрытие",
"аноним",
"загадка",
"вывод",
"ветвь",
"жир",
"спирт",
"полено",
"дробь",
"Змей Горыныч",
"герб",
"марка",
"кожа",
"ручка",
"потолок",
"град",
"банка",
"стекло",
"подстилка",
"бычок",
"карандаш",
"серпантин",
"конструкция",
"инструкция",
"виски",
"светлячок"]

function generateColors() {
  colors = ["red", "red", "red", "red", "red", "red", "red","red",
            "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
            "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral",
            "assassin"]
  colors.push(firstToGo)
}


function generateWords() {
  firstToGo = ["red", "blue"][Math.floor(Math.random() * 2)]
  colors = words = []
  clipboard = {red: [], blue: [], neutral: [], assassin: []}
  wordbase = originwordbase.slice()
  generateColors()
  var randomColor = randomWord = ""
  for (var i = 0; i < 25; i++) {
    randomColor = colors.splice(Math.floor(Math.random() * colors.length), 1)[0]
    randomWord = wordbase.splice(Math.floor(Math.random() * wordbase.length), 1)[0]
    clipboard[randomColor].push(randomWord)
    words.push({cardcolor: randomColor, cardword: randomWord})
  }
  updateBoard()
}

function generateHTML() {
  var boardHTML = ""
  var x = 0
  for (var i = 0; i < 5; i++) {
    boardHTML += "<div class='row'>"
    for (var j = 0; j < 5; j++) {
      var tempHTML = "<div class='cell " + words[x].cardcolor + "'>" + words[x].cardword + "</div>"
      x += 1
      boardHTML += tempHTML
    }
    boardHTML += "</div>"
  }
  return boardHTML
}

function generateSchemeHTML() {
  var boardHTML = ""
  var x = 0
  for (var i = 0; i < 5; i++) {
    boardHTML += "<div class='row'>"
    for (var j = 0; j < 5; j++) {
      var tempHTML = "<div class='cell " + words[x].cardcolor + "' style='background: "+ cssColors[words[x].cardcolor] + "'>" + words[x].cardword + "</div>"
      x += 1
      boardHTML += tempHTML
    }
    boardHTML += "</div>"
  }
  $(".modal-body").html(boardHTML)
}

function generateClipboard() {
  var boardHTML = ""
  boardHTML = "СИНИЕ: " + clipboard.blue.join(", ") + "<br /><br />" +
                  "КРАСНЫЕ: " + clipboard.red.join(", ") + "<br /><br />" +
                  "СЕРЫЕ: " + clipboard.neutral.join(", ") + "<br /><br />" +
                  "ЧЁРНАЯ: " + clipboard.assassin.join(", ")

  $(".modal-body").html(boardHTML)
}

function updateBoard(funcName) {
  $("hr").css("background", cssColors[firstToGo])
  $(".board").html(generateHTML())
  generateSchemeHTML()
  $(".cell").click(function(){
    var bgType = this.className.split(" ")[1]

    if (imagesShowed) {
      $(this).css("background-image", "url(" + cssURLs[bgType] + ")");
      $(this).css("color", "#000");
    }
    else {
      $(this).css("background-image", "none");
      $(this).css("background-color", cssColors[bgType]);
      $(this).css("color", "#000");
    }
  })
}

$("#switchScheme").click(function() {
    generateSchemeHTML()
})

$("#modal-scheme").click(function() {
    generateSchemeHTML()
})

$("#clipboard").click(function() {
    generateClipboard()
})

$("#switchImages").click(function() {
  if (imagesShowed) {
    imagesShowed = false
    $("#switchImages").html("Включить картинки")
  }
  else {
    imagesShowed = true
    $("#switchImages").html("Выключить картинки")
  }
})

/*$("#showColors").click(function(){
    if(confirm("Точно хотите посмотреть цвета?")){
       generateSchemeHTML()
    }
    else{
        return false;
    }
});

$("#hideColors").click(function(){
    if(confirm("Точно хотите скрыть цвета?")){
       updateBoard()
    }
    else{
        return false;
    }
});*/

generateWords()

//modal
$(function(){

var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");

  $('a[data-modal-id]').click(function(e) {
    e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());
  });


$(".js-modal-close, .modal-overlay").click(function() {
  $(".modal-box, .modal-overlay").fadeOut(500, function() {
    $(".modal-overlay").remove();
  });
});

$(window).resize(function() {
  $(".modal-box").css({
    top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
    left: ($(window).width() - $(".modal-box").outerWidth()) / 2
  });
});

$(window).resize();

});

//HOTKEYS

function hideCustomWordsInput() {
  $("#customWords").css("display", "none");
}

function showCustomWordsInput() {
  $("#customWords").css("display", "block");
}


function KeyPress(e) {
      var evtobj = window.event? event : e
      if (evtobj.keyCode == 65 && evtobj.ctrlKey && evtobj.shiftKey) {
    showCustomWordsInput();
    return false;
  };
  if (evtobj.keyCode == 27) {
    hideCustomWordsInput();
    return false;
  }
}

document.onkeydown = KeyPress;

$("#addWords").click(function() {
    var userWords = document.getElementById("userWords").value.split(/\n/);
    originwordbase = originwordbase.concat(userWords);
})

$("#replaceWords").click(function() {
    var userWords = document.getElementById("userWords").value.split(/\n/);
    originwordbase = userWords.slice();
})

//TIMER HERE

var sessionLength = 180;
var sessionLengthDefault = sessionLength;
var timerActive = false;



function timerSession() {
  var minutes = parseInt(sessionLength / 60, 10);
  var seconds = parseInt(sessionLength % 60, 10);
  var seconds = seconds < 10 ? "0" + seconds : seconds;

  $(".timer-time").html(minutes + ":" + seconds);
  
  if (--sessionLength < 0) {
    clearInterval(sessionTimer);
    timerActive = false;
    sessionLength = sessionLengthDefault;
  }
}


$(document).ready(function() {
  $(".timer-minus").click(function() {
    if (sessionLength >= 60 && !timerActive) {
      sessionLength -= 60;
      sessionLengthDefault -= 60;
      $(".timer-time").html(parseInt(sessionLength / 60) + ":00");
    }
  });
  
  $(".timer-plus").click(function() {
    if (!timerActive) {
      sessionLength += 60;
      sessionLengthDefault += 60;
      $(".timer-time").html(parseInt(sessionLength / 60) + ":00");
    }    
  });
  
   $(".timer-play").click(function() {
     if (!timerActive) {
       sessionTimer = setInterval(timerSession, 1000);
       timerActive = true;
     }
  });
  
  $(".timer-stop").click(function() {
     if (timerActive) {
       clearInterval(sessionTimer);
       timerActive = false;
     }
  });
  
  $(".timer-refresh").click(function() {
     sessionLength = sessionLengthDefault;
    if (!timerActive) {
      sessionTimer = setInterval(timerSession, 1000);
    }
  });
  
});
