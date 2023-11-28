// 1. Napisz funkcję, która utworzy i zwróci tablicę z 20 elementami wylosowanymi z podanego zakresu. 
//Zakres mają określać dwa parametry:
// - liczba minimalna,
// - liczba maksymalna. 
// W ciele tej funkcji wykorzystaj pętlę `for` oraz obiekt `Math`.
// Poniżej przedstawiam przykładowe działanie takiej funkcji:

const min = 1;
const max = 100;

const numbers = [];
const arr = createArray(1, 100);


function createArray(min, max) {
    for (var i = 1; i <= 100; i++){ ;
    numbers.push(i);
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

createArray()
















// 2. Napisz kolejną funkcję, która posortuje liczby z otrzymanej powyżej tablicy od wartości największej do najmniejszej i zwróci tablicę zawierającą tylko 10 największych liczb. W ciele funkcji możesz użyć metod `.sort()` oraz `.slice()`.

// Poniżej przedstawiam przykładowe działanie takiej funkcji:
// ```
// const largest = getLargest(arr);
// console.log(largest); // [99, 93, 84, 78, 68, 61, 45, 45, 44, 38]
// ```

// 3. Ostatnia funkcja ma obliczać [średnią arytmetyczną](https://pl.wikipedia.org/wiki/%C5%9Arednia_arytmetyczna) z liczb przechowyanych w przekazanej przez parametr tablicy. Możesz do tego wykorzystać `.forEach()` lub `.reduce()`.

// Przykładowe działanie takiej funkcji to:
// ```
// const avg = getAvg([1, 2, 3, 4, 5]);
// console.log(avg); // 3
// ```

// 4. Wykorzystaj napisane funkcje w taki sposób, aby utworzyć tablicę składającą się z 20 losowych liczb z przedziału od 10 do 200. Z utworzonej tablicy wybiesz 10 największych i obliczych ich średnią arytmetyczną.

// Zadbaj o odpowiednie nazwy dla funkcji - nie muszą być one identyczne jak w przykładach.

