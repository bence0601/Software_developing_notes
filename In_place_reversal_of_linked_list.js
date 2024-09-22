class Node{
    constructor(newData){
        this.data = newData;
        this.next = null
    }
}

function ReverseLinkedList(head){

    //létrehozzuk a pointereket
    let current = head;
    let prev = null;
    let next;


    //végigiterálunk a lista végéig
    while(current !== null){
        //eltároljuk a következőt
        next = current.next;

        // Megfordítjuk a jelenlegi listaelem következő elemére mutató pointerét
        current.next = prev;

        //Eggyel eltoljuk a pointereket
        prev = current;
        current = next;
    }

    //visszaadjuk a láncolt lista első elemét(head)
    return prev;
    
}

function printList(node) {
    while (node !== null) {
        console.log(" " + node.data);
        node = node.next;
    }
    console.log();
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Given Linked list:");
printList(head);


head = ReverseLinkedList(head);

console.log("Reversed linked list: ")
printList(head);