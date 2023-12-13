var dataBase = [
    {id: 1, Name: "reza", family: "gerami", age: 15, email: "reza@gmail.com"},
    {id: 2, Name: "ali", family: "rezai", age: 17, email: "ali@gmail.com"},
    {id: 3, Name: "ahmad", family: "lack", age: 19, email: "ahmad@gmail.com"},
];
var id = 3;
var number = 0;
while(number != 1){
    id++;
    var i = 0;
    while(i < 3) {
        var Name = prompt("نام خود را وارد کنید.");
        i = Name.length;
        while(i > 10) {
            var Name = prompt("نام خود را وارد کنید.");
            i = Name.length;
        }
    }
    i = 0;
    while(i < 3) {
        var family = prompt("فامیلی خود را وارد کنید.");
        i = family.length;
        while(i > 15) {
            var family = prompt("فامیلی خود را وارد کنید.");
            i = family.length;
        }
    }
    i = 4;
    j = 0;
    while(i > 2) {
        var age = Number(prompt("سن خود را وارد کنید."));
        i = 0;
        j = age;
        while(j != 0) {
            j = Math.floor(j / 10);
            i++;
        }
    }
    var email = prompt("ایمیل خود را وارد کنید.");
    var arr = dataBase.push({id, Name, family, age, email});
    console.log(dataBase);
    number = prompt("برای خروج 1 را وارد کنید.");
}

/////////////   forEach   /////////////

// var dataBase = [
//     {id: 1, Name: "amir", family: "amiri", age: 23},
//     {id: 2, Name: "amin", family: "amini", age: 20},
//     {id: 3, Name: "reza", family: "rezai", age: 19},
//     {id: 4, Name: "ali", family: "ahmadi", age: 34},
// ]

// dataBase.forEach(function(arr){
//     console.log("id: " + arr.id + "    name: " + arr.Name + "    family: " + arr.family + "    age: " + arr.age);
//     console.log("---------------");
// })



// var fruit = [
//     {id: 1, Name: "apple", money: 12000},
//     {id: 2, Name: "orange", money: 10000},
//     {id: 3, Name: "banana", money: 15000},

// ]
// var user = [
//     {id: 4, Name: "coconut", money: 22000},
//     {id: 5, Name: "cherry", money: 19000},
//     {id: 6, Name: "peach", money: 13000},
// ]
// var price = 0;
// user.some(function (mon){
//     price += mon.money;
//     console.log("product: " + mon.Name + "\n" + "price product: " + mon.money)
// })

// var id1N = fruit[0].Name;
// var id2N = fruit[1].Name;
// var id3N = fruit[2].Name;

// var id1M = fruit[0].money;
// var id2M = fruit[1].money;
// var id3M = fruit[2].money;

// var i = 0;
// while(i != 1){
//     var user$fruit = "apple";
//     while(user$fruit == id1N || user$fruit == id2N || user$fruit == id3N) {
//         user$fruit = prompt("محصول خود را وارد کنید.");
//         if(user$fruit == id1N) {
//             console.log("product: " + user$fruit + "\n" + "price product: " + id1M)
//             price += id1M;
//         } else if(user$fruit == id2N) {
//             console.log("product: " + user$fruit + "\n" + "price product: " + id2M)
//             price += id2M;
//         } else if(user$fruit == id3N) {
//             console.log("product: " + user$fruit + "\n" + "price product: " + id3M)
//             price += id3M;
//         } else (
//             alert("محصول شما در انبار وجود ندارد.")
//         )
//     } 
// i = prompt("عدد 1 را وارد کنید تا از برنامه خارج شوید.")
// }

// console.log(price);