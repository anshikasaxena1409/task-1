var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 x++;
 document.getElementById("text1").value = "";
 document.getElementById('pairs').innerHTML = array
}


function count() {


    var arr = array;
    arr = arr.sort();
    var test = arr[0]
    var count = 0
    for (i = 0; i < arr.length; i++) {
        if (test == arr[i + 1]) {
            count++;
            test = arr[i + 2]
            i++;
        }
        else {
            test = arr[i + 1]
        }
    }
    console.log(count)
    document.getElementById('count').innerHTML = count


}
