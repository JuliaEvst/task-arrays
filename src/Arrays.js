/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let str = data.split(',');
    console.log(str);
    str.sort(function (a, b) {
        return a - b;
    });
    let newstr = str.join(',');
    return newstr;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    data = data.filter((el) => el <= 100);
    return data;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    const l = Math.min(array1.length, array2.length);
    const merged = [].concat(
        ...Array.from({ length: l }, (_, i) => [array1[i], array2[i]]),
        array1.slice(l),
        array2.slice(l),
    );
    return merged;
}
