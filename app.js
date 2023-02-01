

// tg2.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);


var val_ask = document.getElementById("select_group_1");
var val_bid = document.getElementById("select_group_4");

function onChange() {
    var val_ask_num = val_ask.value;
    var val_ask_text = val_ask.options[val_ask.selectedIndex].text;

    var val_bid_num = val_bid.value;
    var val_bid_text = val_bid.options[val_bid.selectedIndex].text;



    let searchValue = Math.min(val_ask_num, val_bid_num);
    let selectElement = document.getElementById('select_group_1');
    let options = selectElement.options;

    for (let i = 0; i < options.length; i++) {
        if (options[i].value == searchValue) {
        console.log(options[i].text, document.getElementById('summary').innerHTML);

        document.getElementById('Label_Sum').innerHTML = 'Объем, в ' + options[i].text.substring(0, 3);
        // + options[i].text;

        break;
        } }
}

val_ask.onchange = onChange;
val_bid.onchange = onChange;

    // onChange();




//задаем формат для поле объем, чтобы только цифры были
document.getElementById('summary').addEventListener('input', function() {
    this.value = this.value.replace(/[^\d]/g, '').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
});

//задаем формат для поле курс, чтобы только цифры были
document.getElementById('kurs').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9.]/g, '', '')
    // .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$0 ');
});

var value_opt1 =  document.getElementById("select_group_1");
var value_opt2 =  document.getElementById("select_group_2");
var value_opt4 =  document.getElementById("select_group_4");
var value_opt3 =  document.getElementById("select_group_3");
var value_opt5 =  document.getElementById("select_group_5");
var value_opt6 =  document.getElementById("select_group_6");

var text_val_ask = value_opt1.options[value_opt1.selectedIndex].text;
var text_nal_ask = value_opt2.options[value_opt2.selectedIndex].text;
var text_stamp_ask = value_opt3.options[value_opt3.selectedIndex].text;
var text_val_bid = value_opt4.options[value_opt4.selectedIndex].text;
var text_nal_bid = value_opt5.options[value_opt5.selectedIndex].text;
var text_stamp_bid = value_opt6.options[value_opt6.selectedIndex].text;


var kurs_value = document.getElementById("kurs").value;
var Label_Sum = document.getElementById("Label_Sum").value;


var jsonObject = {
    // "type_web_msg" : "from ads",
    "text_val_ask" : text_val_ask,
    "text_nal_ask" : text_nal_ask,
    "text_stamp_ask" : text_stamp_ask,
    "text_val_bid" : text_val_bid,
    "text_nal_bid" : text_nal_bid,
    "text_stamp_bid" : text_stamp_bid,
    "kurs_value" : kurs_value,
    "Label_Sum": Label_Sum
};

// var jsonObject = { "name": "John", "text_val_ask" : text_val_ask, "city": "New York" };
// console.log(text_val_ask);

var jsonString = JSON.stringify(jsonObject);

var  tg2 = window.Telegram.WebApp;

tg2.expand(); //расширяем на все окно

tg2.MainButton.text = "Готово"; //изменяем текст кнопки
tg2.MainButton.setText("Разместить объявление 5"); //изменяем текст кнопки иначе
tg2.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg2.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg2.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры
tg2.MainButton.show();
tg2.MainButton.enable();



tg2.onEvent('mainButtonClicked', function(){
  tg2.sendData(jsonString);
  // tg2.sendData("От страницы ADS");

  tg2.window.close();
  //при клике на основную кнопку отправляем данные в строковом виде
});
