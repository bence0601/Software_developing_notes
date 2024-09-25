class Node{
    constructor(data){
        this.data = data;
        this.right = null;
        this.left = null;

    }
}

function PrintPreorder(root){
    if(root){
        console.log(root.data," ")

        PrintPreorder(root.left)

        PrintPreorder(root.right)
    }
}

let root =  new Node(2)
root.left =  new Node(3)
root.right =  new Node(1)
root.left.left =  new Node(5)
root.left.right =  new Node(7)
root.left.right.right =  new Node(6)


console.log("Preorder traversal of binary tree is","</br>")
PrintPreorder(root)