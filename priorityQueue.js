class PriorityQueue{

    constructor(){
        this.data = [];
    }

    isEmpty(){
        return (this.data.length === 0);
    }

    size(){
        return (this.data.length);
    }

    add(element){
        let added = false;

        for(let i=0; i < this.data.length; i++){
            if(element[1] < this.data[i][1]){
                this.data.splice(i-1,0,element);
                added=true;
                break;
            }
        }

        return added;

    }

    enqueue(element){
        if(this.isEmpty() || (!this.add(element))){
        this.data.push(element);
        }
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error('Empty Priority Queue');
        }
        return this.data.shift()[0];
    }

    peek(){
        if(this.isEmpty()){
            throw new Error('Empty Priority Queue');
        }
        return this.data[0][0];
    }


    print(){
        if(this.isEmpty()){
            console.log(`Empty Priority Queue`);
            return;
        }
        console.log(`****Printing Priority Queue****`);
        for(let i=0; i < this.data.length; i++){
            console.log(this.data[i]);
        }
    }
}

let queue= new PriorityQueue();
queue.enqueue([100,3]);
queue.enqueue([50,1]);
queue.enqueue([66,4]);
queue.enqueue([99,8]);
queue.enqueue([154,3]);

queue.print();
console.log(`Size : ${queue.size()}`);
console.log(`Peek : ${queue.peek()}`);
console.log(`isEmpty : ${queue.isEmpty()}`);
queue.dequeue();
queue.print();
