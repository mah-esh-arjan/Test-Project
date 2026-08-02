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

    deleteFront() {
        this.head = this.head.next;

    }

    append(value) {
        const newNode = new Node(value);
        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    delete(index) {
        let current = this.head;

        if (index === 0) {
            this.deleteFront();
            return;

        }

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        current.next = current.next.next
    }

    find(value) {
        let current = this.head;

        while (current.value !== value && current !== null) {

            current = current.next;

        }
        return current !== null;

    }

    access(index) {
        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next
        }

        console.log(current.value);

    }

    insert(index, value) {

        const newNode = new Node(value)
        let current = this.head;

        if (index === 0) {

            current.next = newNode;
        }

        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }
        newNode.next = current.next;
        current.next = newNode;
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

    //revser
    reverse() {
        let current = this.head;
        let prev = null;
        let next = null;

        while (current !== null) {
            // first store we traverse next
            next = current.next

            // now we break link and reverse the ndoe
            current.next = prev

            // grow the revserd list
            prev = current

            // now we move current forward
            current = next

        }
        this.head = prev;
    }
    length() {
        let current = this.head;
        let count = 0
        while (current !== null) {
            count += 1;
            current = current.next
        }
        return count;
    }

    findMiddle() {
        let current = this.head;
        let index = Math.round(this.length() / 2);

        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }

    deleteBack() {
        let current = this.head;

        if (this.head === nul) return;

        if (this.head.next === null) {
            this.head = null;
            return;
        }

        while (current.next.next !== null) {
            current = current.next;

        }
        current.next = null;
    }

    middlePointer() {
        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }


        return slow;

    }

    hasCycle() {
        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            if (fast === slow) {
                return true;
            }

        }
    
        


        return false;
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