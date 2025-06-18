class SortAlg {
  constructor(myarray) {
    this.myarray = myarray;
    this.bs = [];
    this.ss = [];
    this.is = [];
  }
  BubbleSort() {
    let n = this.myarray.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (this.myarray[j] > this.myarray[j + 1]) {
          // Swap
          let temp = this.myarray[j];
          this.myarray[j] = this.myarray[j + 1];
          this.myarray[j + 1] = temp;
        }
      }
      this.bs.push([...this.myarray]); // Store the state after each outer loop iteration
    }
    return this.myarray;
  }
  SelectSort() {
    let n = this.myarray.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (this.myarray[j] < this.myarray[minIndex]) {
          minIndex = j;
        }
      }
      // Swap
      let temp = this.myarray[i];
      this.myarray[i] = this.myarray[minIndex];
      this.myarray[minIndex] = temp;
      this.ss.push([...this.myarray]); // Store the state after each outer loop iteration
    }
    return this.myarray;
  }
  InsertSort() {
    let n = this.myarray.length;
    for (let i = 1; i < n; i++) {
      let key = this.myarray[i];
      let j = i - 1;
      while (j >= 0 && this.myarray[j] > key) {
        this.myarray[j + 1] = this.myarray[j];
        j--;
      }
      this.myarray[j + 1] = key;
      this.is.push([...this.myarray]); // Store the state after each outer loop iteration
    }
    return this.myarray;
  }
  BucketSort() {}
}

export { SortAlg };
