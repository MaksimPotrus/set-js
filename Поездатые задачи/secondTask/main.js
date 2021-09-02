let books = [];

class HOME_LIBRARY{
    name;
    author;
    year;
    actionBook(name,author,year, flag){
        this.name = name;
        this.author = author;
        this.year = year;
        flag ? books.push(this):books.pop(this);;
    }
    findBook(name){
        let flag = 0;
        for(var i = 0; i < books.length; i++) 
            if(books[i].name == name) { flag = i; }
            return flag;
    }
    sortName = (name) => { return (a, b) => a[name] > b[name] ? 1 : -1};
};

let result;
let actions = new HOME_LIBRARY;
do{
  result = +prompt(" 1 - добавить;\n 2 - удалить;\n 3 - поиск по имени;\n 4 - просмотреть;\n 5 - сортировка;\n 0 - выйти");
  switch (result) {
      case 1: {addBook();break;}
      case 2: {deleteBook();break;}
      case 3: {console.log(actions.findBook(1));break;}
      case 4: {console.log(books);break;}
      case 5: {books.sort(HOME_LIBRARY.name('name'));break;}
      default: {result=0;}
  } 
}while(result!=0);

function addBook(){
    let name = prompt("Введите name");
    let author = prompt("Введите author");
    let year = prompt("Введите year");
    actions.actionBook(name, author, year, true);
}

function deleteBook(){
    let name = prompt("Введите name");
    let author = prompt("Введите author");
    let year = prompt("Введите year");
    actions.actionBook(name, author, year, false);
}   