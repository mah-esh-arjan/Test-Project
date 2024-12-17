array = [5,3,1,2]

// 5 // 3 // 1 // //


function selection(array) {

    let sortedArr = [];
    let minimum = 0;

    for(let i = 0; i<array.length; i++) {
        for (let j = 0; j<array.length - 1 ; j++){       
            if(array[j] < minimum){
                minimum = array[j];     
            }
            array.pop(array[j])
        }
        sortedArr.push(minimum)
    }
}