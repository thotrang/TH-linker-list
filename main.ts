// Node đầu tiên

// Node cuối cùng

// Số lượng node

// Phương thức thêm một node vào đầu danh sách

// Phương thức thêm một node vào phía cuối danh sách

// Phương thức lấy ra số lượng node

// Phương thức đọc LinkedList
import {LinkedList} from "./LinkList";

let linkedList = new LinkedList();
linkedList.insertFirstNode(1);
linkedList.insertFirstNode(2);
linkedList.insertFirstNode(3);
linkedList.insertFirstNode(30);
linkedList.insertLastNode(40);
console.log(linkedList.getSize());
console.log(linkedList.getRead());