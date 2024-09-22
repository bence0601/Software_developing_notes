//Time complexity O(n) > A tree mérete = N

class Node {
    constructor(key) {
        this.data = key;
        this.left = null;
        this.right = null;
    }
}

function PrintLevelOrder(root){
    if(root === null) return;

    const queue = [];

    queue.push(root)


    while(queue.length>0){
        const node = queue.shift();
        console.log(node.data);

        if(node.left !== null){
            queue.push(node.left)
        }
        if(node.right!==null){
            queue.push(node.right)
        }
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
PrintLevelOrder(root);