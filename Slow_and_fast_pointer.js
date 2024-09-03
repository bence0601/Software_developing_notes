class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}
const n1 = new Node(100);

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //insert first node
    insertFirst(data){
    this.head = new Node(data,this.head);


}
    //insert last node
    inserLast(data){
        let node = new Node(data);
        let current;


        //if empty, make head
        if(!this.head){
            this.head = node;
        }
        else{
            current = this.head;

            while(current.next){
                current = current.next;
                
            }
        }


        
    }

    //insert index

    //get an index

    //Remove at index

    //print list data
    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);


ll.printListData();
