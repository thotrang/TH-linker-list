import { Node } from "./Node";
export class LinkedList<T>{
    head: Node<T> | null;
    tail: Node<T> | null;

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirstNode(data: T): void {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        if (!this.head) {
            this.tail=node;
        }
        this.size++;
    }
    insertLastNode(data: T): void {
        if (!this.tail){
            this.insertFirstNode(data);
        }else {
            let node = new Node(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }
    getSize():number{
        return this.size;
    }
    getRead():T[]{
        let listData:T[]=[];
        let point=this.head;
        while (point !== null) {
            listData.push(point.read());
            point = point.next;
        }
        return listData;
    }
}
