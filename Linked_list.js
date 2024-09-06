class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0;
    }
    //insert first node
    InsertFirst(data){
        this.head = new Node(data,this.head)
        this.size++
    }


    //insert last node
    InsertLast(data){
        let node = new Node(data);
        let current;

        //If empty, make head
        if(!this.head){
            this.head = node;
        }
        else{
            current = this.head;

            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++
    }


    //insert at index
    InsertAtIndex(data,index){
        // if index is out of range
        if(index > 0 && index > this.size){
            return
        }
        // if first index
        if(index === 0){
            this.InsertFirst(data)
            return
        }

        const node = new Node(data);
        let current, previous;

        //Set current to first
        current = this.head;
        let count = 0;

        while(count < index){
            previous = current; // Node before index
            count++;
            current = current.next;


        }

        node.next = current;
        previous.next = node;


        this.size++;


    }

    //get an index
    GetAt(index){
        let current = this.head;
        let count = 0;


        while(current){
            if(count == index){
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return;
    }


    //remove at index
    RemoveAt(index){
        if(index>0 && index > this.size){
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        //remove first
        if(index === 0){
            this.head = current.next
        }
        else{
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size--;
    }

    //clear list
    ClearList(){
        this.head = null;
        this.size = 0
    }


    //print list data
    PrintListData(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();


ll.InsertFirst(100);
ll.InsertFirst(200)
ll.InsertFirst(300)
ll.InsertLast(400)

ll.RemoveAt(3)
ll.ClearList();
// ll.GetAt(2);
ll.PrintListData();


