/**
 * A: 1 → 2 → 3
             ↘
              7 → 8 → null
             ↗
B:    4 → 5
List a wil be 1->2->3->7->8->null and
 b will be 4->5->7->8->null.

 */


// saw brute froce in youtube
function intersection(listA, listB) {

    function length(list) {
        let count = 0;
        let pointer = list.head;

        while (pointer !== null) {
            pointer = pointer.next
            count += 1;
        }
        return count;
    }

    let countA = length(listA);
    let countB = length(listB);

    let difference;

    if (countA > countB) {
        difference = countA - countB
        let pointer = listA.head
        for (let i = 0; i < difference; i++) {
            pointer = pointer.next;
        }
        let equal1 = pointer;
        let equal2 = listB.head;
        while (equal1 !== equal2) {
            equal1 = equal1.next
            equal2 = equal2.next
        }
        return equal1
    }
    else {
        difference = countB - countA;

        let pointer = listB.head;

        for (let i = 0; i < difference; i++) {
            pointer = pointer.next;
        }

        let equal1 = pointer;
        let equal2 = listA.head;

        while (equal1 !== equal2) {
            equal1 = equal1.next;
            equal2 = equal2.next;
        }
        return equal1;
    }


}

//couldnt solve watched 2 pointer solution youtube implementation:

function twoPointerIntersection(listA, listB) {

    let pointerA = listA.head

    let pointerB = listB.head

    while (pointerA !== pointerB) {
        if (pointerA === null) {
            pointerA = listB.head
            pointerB = pointerB.next;
            continue;
        }
        if (pointerB === null) {
            pointerB = listA.head
            pointerA = pointerA.next;
            continue;
        }
        pointerA = pointerA.next;
        pointerB = pointerB.next;
    }

    return pointerA;
}
