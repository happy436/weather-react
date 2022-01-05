const capitals = ['Бердянск', 'Винница', 'Днепр', 'Донецк', 'Житомир', 'Запорожье', 'Ивано-Франковск', 'Киев', 'Кременчуг', 'Кривой Рог', 'Луганск', 'Луцк', 'Львов', 'Мелитополь', 'Николаев', 'Одесса', 'Полтава', 'Ровно', 'Севастополь', 'Северодонецк', 'Сумы', 'Тернополь', 'Харьков', 'Хмельницкий', 'Черкассы', 'Черновцы']
const capitalsUS = ['Berdyansk', 'Vinnitsa', 'Dnepropetrovsk', 'Donetsk', 'Zhitomir', 'Zaporozhye', 'Ivano-Frankivsk', 'Kiev', 'Kremenchug', 'Kryvyi Rih', 'Lugansk', 'Lutsk ',' Lviv ',' Melitopol ',' Nikolaev ',' Odessa ',' Poltava ',' Exactly ',' Sevastopol ',' Severodonetsk ',' Sumy ',' Ternopil ',' Kharkiv ',' Khmelnitsky ', 'Cherkasy', 'Chernivtsi']

function options(){
  let options = capitals.map(
    (capital) => {
      return(
        {label:capital}
      )
    })
  let options2 = capitalsUS.map(
    (capital) => {
      return(
        {value:capital}
      )
    })
  return {options}
}

console.log(options())

let first  = [ {name: 'Maxim', secondName: 'Ivanov'}, {name: 'Lena', secondName: 'Kirolova'} ];
let second = [ {age: 20}, {age: 18} ];

let third = capitals.map((item, index) => ({value:capitalsUS[index], label:item }));

console.log(third);