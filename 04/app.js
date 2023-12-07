// ZADANIE 1. Napisz funkcję, która utworzy i zwróci tablicę z 20 elementami wylosowanymi z podanego zakresu. 
//Zakres mają określać dwa parametry:
// - liczba minimalna,
// - liczba maksymalna. 
// W ciele tej funkcji wykorzystaj pętlę `for` oraz obiekt `Math`.
// Poniżej przedstawiam przykładowe działanie takiej funkcji:


//-------------ROZWIĄZANIE NR 1-----------------------------------
const min = 1;
const max = 100;

numbers = []

function createArray(min,max){
for(i = 0; i < 20; i++){
    const num = Math.round(Math.random() * 100);
   
    if(numbers.includes(num)) {
    } else {
    numbers.push(num);
    }
    }
    console.log(numbers);
    return;
}

function createArray1(){
while(numbers.length < 20) {
    const num = Math.round(Math.random() * 100);
   
    if(numbers.includes(num)) {
    } else {
    numbers.push(num);
    }
    }
    console.log(numbers);
}

createArray();
createArray1();


//------------------------ROZWIĄZANIE NR 2----------------------------------

function createArray(min,max){
    const min1 = 1;
    const max1 = 100;

    const numbers = Array.from({ length: 100}, (_, index) => index + 1); //tablica nr 1 
    console.log(numbers);

    const twentyNumbers = Array(); //tablica nr 2
    console.log(twentyNumbers);

for (let i=0; i<20; i++){
    const randomizedNumber = Math.round(Math.random() * 100);
    if(numbers.includes(randomizedNumber)){
    twentyNumbers.push(randomizedNumber);
    } 
}
    console.log(twentyNumbers);
}
const arr = createArray(1,100);
createArray();

//---------------RESZTKI-------------------------------------

// const scopeNumbers2 = twentyNumbers.slice(min, max2) // zakres tablicy nr 2???
// console.log(scopeNumbers2);

// const scopeNumbers = numbers.slice(min,max); //zakres tablicy nr 1
// console.log(scopeNumbers);

// for (var i = 0; i <= 100; i++) {
// numbers.push(i);} // wyświetlenie liczb w tablicy nr 1

// const arr = createArray(1, 100);


//---------------------------------------------------------------------------------------------


// ZADANIE 2. Napisz kolejną funkcję, która posortuje liczby z otrzymanej powyżej tablicy 
// od wartości największej do najmniejszej i zwróci tablicę zawierającą tylko 10 największych liczb. 
// W ciele funkcji możesz użyć metod `.sort()` oraz `.slice()`.









// ZADANIE 3. Ostatnia funkcja ma obliczać [średnią arytmetyczną](https://pl.wikipedia.org/wiki/%C5%9Arednia_arytmetyczna)
//  z liczb przechowyanych w przekazanej przez parametr tablicy. 
// Możesz do tego wykorzystać `.forEach()` lub `.reduce()`.

// Przykładowe działanie takiej funkcji to:

// const avg = getAvg([1, 2, 3, 4, 5]);
// console.log(avg); // 3







// ZADANIE 4. Wykorzystaj napisane funkcje w taki sposób, aby utworzyć tablicę składającą się z 20 losowych 
// liczb z przedziału od 10 do 200. Z utworzonej tablicy wybiesz 10 największych i obliczych 
// ich średnią arytmetyczną.

// Zadbaj o odpowiednie nazwy dla funkcji - nie muszą być one identyczne jak w przykładach.

