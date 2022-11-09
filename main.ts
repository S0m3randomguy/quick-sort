enum Order {
    Ascending,
    Descending
}

//% color=190 weight=0 icon="\uf0b0" block="Sorting"
namespace sort {


    //% block="sort $array in order of $order"
    //% blockId=sorting_quick_sort
    //% blockSetVariable=sorted
    export function quick_sort(array: Array<number>, order: Order): Array<number> {;
        if (array.length <= 1) {
            return array;
        }
        let pivot = array.pop();
        let greater: Array<number> = [];
        let lower: Array<number> = [];

        for (let i = 0; i < array.length; i++) {
            if (array[i] > pivot) {
                greater.push(array[i]);
            } else {
                lower.push(array[i]);
            }
        }
        let first_array;
        let second_array;

        if (order === Order.Ascending) {
            first_array = lower;
            second_array = greater;
        } else {
            first_array = greater;
            second_array = lower;
        }

        return quick_sort(first_array, order).concat([pivot]).concat(quick_sort(second_array, order));
    }
}