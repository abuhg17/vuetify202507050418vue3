class LLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  AddOneNode(value) {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new LLNode(value);
    } else {
      this.head = new LLNode(value);
    }
    this.length++;
  }
  AddManyNode(...values) {
    for (const value of values) {
      if (this.head) {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = new LLNode(value);
      } else {
        this.head = new LLNode(value);
      }
      this.length++;
    }
  }
  AddManyNodeArray([...values]) {
    for (const value of values) {
      if (this.head) {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = new LLNode(value);
      } else {
        this.head = new LLNode(value);
      }
      this.length++;
    }
  }
  ToLLString() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + "->";
      current = current.next;
    }
    return result + "null";
  }
  GetAtIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }
  InsertAtIndex(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    const newNode = new LLNode(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
    this.length++;
    return true;
  }
  InsertManyAtIndex(index, ...values) {
    if (index < 0 || index > this.length) {
      return false;
    }
    for (const value of values) {
      const newNode = new LLNode(value);
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
          current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
      }
      this.length++;
    }
    return true;
  }
  InsertManyArrayAtIndex(index, [...values]) {
    if (index < 0 || index > this.length) {
      return false;
    }
    for (const value of values) {
      const newNode = new LLNode(value);
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
          current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
      }
      this.length++;
    }
    return true;
  }
  GetHead() {
    return this.head ? this.head.value : null;
  }
  GetTail() {
    if (!this.head) return null;
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current.value;
  }
  RemoveAtIndex(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = current.next ? current.next.next : null;
    }
    this.length--;
    return true;
  }
}

export { LinkedList };
