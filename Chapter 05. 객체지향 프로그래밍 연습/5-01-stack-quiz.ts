{
    class MyNode<E> {

        public item: E;
        public prev: MyNode<E> | null;
        public next: MyNode<E> | null;


        constructor(item: E, prev: MyNode<E> | null, next: MyNode<E> | null) {
            this.item = item;
            this.prev = prev;
            this.next = next;
        }

    }

    interface Stack<E> {

        push(element: E) : void;
        pop(): E | null;
        peek(): E | null;
        isEmpty(): boolean;
        get size(): number;
    }

    class LinkedList<E> implements Stack<E> {

        private _size = 0;
        private _first: MyNode<E> | null;
        private _last: MyNode<E> | null;

        constructor(first = null, last = null) {
            this._first = first;
            this._last = last;
        }

        push(element: E): void {
            this.linkLast(element);
        }

        isEmpty(): boolean {
            return this.size === 0;
        }

        peek(): E | null {
            return (this.last === null)
                ? null
                : this.last.item;
        }

        pop(): E | null {
            return (this.last === null)
                ? null
                : this.unlinkLast();
        }

        public get size(): number {
            return this._size;
        }

        private set size(size: number) {
            this._size = size;
        }

        private get first(): MyNode<E> | null {
            return this._first;
        }

        private set first(value: MyNode<E> | null) {
            this._first = value;
        }

        private get last(): MyNode<E> | null {
            return this._last;
        }

        private set last(value: MyNode<E> | null) {
            this._last = value;
        }

        private linkFirst(e: E): void {
            const beforeFirst = this._first;
            const newNode = new MyNode(e, null, beforeFirst);
            this._first = newNode;

            if (beforeFirst === null) {
                this._last = newNode;
            } else {
                beforeFirst.prev = newNode;
            }
            this._size++;
        }

        private linkLast(e: E): void {
            const beforeLast = this._last;
            const newNode = new MyNode(e, beforeLast, null);
            this._last = newNode;

            if (beforeLast === null) {
                this._first = newNode;
            } else {
                beforeLast.next = newNode;
            }
            this.size++;
        }

        /**
         * null 이 아닌 노드 succ 노드의 앞에, 요소를 삽입
         */
        private linkBefore(e: E, succ: MyNode<E>): void {
            const foreFather = succ.prev;
            const newNode = new MyNode<E>(e, foreFather, succ);
            succ.prev = newNode;
            if (foreFather === null) {
                this._first = newNode;
            } else {
                foreFather.next = newNode;
            }
        }

        /**
         * 첫번째 노드가 null이 아닐 때 분리
         */
        private unlinkFirst(): E {
            const first: MyNode<E> = this._first!;
            const element = first!.item;
            const next = first!.next;

            first.next = null;
            this._first = next;

            if (next === null) {
                this._last = null;
            } else {
                next.prev = null;
            }
            this.size--;
            return element;
        }

        /**
         * 마지막이 null이 아닐 때, 이를 분리함
         */
        private unlinkLast(): E {
            const last: MyNode<E> = this._last!;
            const element: E = last.item;
            const prev = last.prev;

            last.prev = null;
            this._last = prev;

            if (prev === null) {
                this.first = null;
            } else {
                prev.next = null;
            }
            this.size--;
            return element;
        }

        /**
         * 특정 null이 아닌 노드 x를 분리하고 반환함
         */
        private unlink(target: MyNode<E>)  {
            const element = target.item;
            const prev = target.prev;
            const next = target.next;

            // 앞의 것 처리
            if (prev === null) {
                this.first = next;
            } else {
                prev.next = next;
                target.prev = null;
            }

            // 뒤의 것 처리
            if (next == null) {
                this.last = prev;
            } else {
                next.prev = prev;
                target.next = null;
            }

            this.size --;
            return element;
        }

    }

    const stack: Stack<string> = new LinkedList<string>();
    stack.push('안녕');
    console.log(stack);

    stack.push('하세요');
    console.log(stack);

    console.log(stack.size);
    console.log(stack.isEmpty());
    console.log(stack.peek());
    console.log(stack.pop());
    console.log(stack.peek());
    console.log(stack.size);
}

