class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class FindLoopClass{
    static DetectLoop(head){
        let slow_p  = head, fast_p = head;

        while(slow_p !== null && fast_p !== null && fast_p.next !== null){
            slow_p = slow_p.next;
            fast_p = fast_p.next.next;


            if(slow_p === fast_p){
                return true;
            }
        }
    }
}

class DetectLoopStart{
    // function for determining which node is the start of the loop
    if(FindLoopClass.DetectLoop(head)){
        let slow_p = head
    })

}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);

head.next.next.next.next = head;


if(FindLoopClass.DetectLoop(head))
    console.log("Loop found");
else{
    console.log("No Loop found");
}