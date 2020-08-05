/******** 1 *******/

function Library(){
    return {
        find: function(bookName){
            let chkBook = bookList[0];
            for (let i = 0; i < bookName.length; i++) {
                if ( chkBook[i] === bookName) {
                    return  bookList[i];
                }
                return 'erro';
            }
        },
        add: function(bookName){

        },
        list: function(){
            return bookList;
        },
        delete: function(bookName){

        }
    }
}

const bookList = ['자바스크립트완전정복', '파이썬', 'java의 정석'];
const bookStore = new Library();
bookStore.find('파이썬'); // 파이썬 (없다면 에러처리~)
bookStore.add('HTML정복');
bookStore.list(); // bookList을 출력
bookStore.delete('파이썬'); // 파이썬 제거



/******** 2********/
const person = {
  name : '홍길동',
  age : 25,
  weight : 80,
  run : function(){
    // TODO :: 운동을 하는것, 나의 2키로씩 살이 빠진다.
    return this.weight = this.wieght - 2;

  },
  eat : function(){
    // TODO :: 먹는것, 나의 5키로씩 살이 찐다.
    return this.weight = this.wieght + 5;
  }
}

person.name;
person.weight;
person.run()
person.eat()


/**
운동에 대한 종류를 받고, 그종류에 따른 살이 빠지는 키로수를 추가해보세요.
마찬가지로 먹는것도 먹는것에 따라 살이찌는 것을 구현해보세요.
*/
