// delete(index) → traverse to the node before the one to delete, then reconnect the links.
// reverse() → traverse while changing each node's next pointer.

class Node {
    // Constructors in JS use the 'constructor' keyword
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    prepend(value) {
        // Use the 'new' keyword to instantiate the Node class
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
    }

    append(value) {
        const newNode = new Node(value);

        // Safety check if the list starts completely empty
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        // 'this' is required to access class properties in JS
        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }


    find(value) {
        let current = this.head;

        while (current !== value && current !== null) {

            current = current.next;

        }
        return current !== null;

    }

    insert(index,value){
        let current = this.head;
        for(let i =0; i < index - 1; i++ ){
            current = current.next

        }
        const newNode = new Node(value);
        newNode.next = current.next;
        current.next= newNode;
        
    }

    // Helper method to display the list in the console
    printList() {
        let current = this.head;
        const result = [];
        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" -> ") + " -> null");
    }
}

// --- Execution ---

// 1. Create the initial node
const node1 = new Node(5);

// 2. Instantiate the list
const list = new LinkedList(node1);

// 3. Perform operations
list.append(10);
list.append(11);
list.append(12);
list.prepend(9); // Fixed typo from 'preprend'

// 4. View the result
list.printList();
// Output: 9 -> 5 -> 10 -> 11 -> 12 -> null