{
    interface Either<L, R> {
        leftValue : () => L;
        rightValue : () => R;
    }

    class SimpleEither<L, R> implements Either<L,R> {

        private readonly left: L;
        private readonly right: R;

        constructor(left: L, right: R) {
            this.left = left;
            this.right = right;
        }

        public leftValue(): L {
            return this.left;
        }

        public rightValue(): R {
            return this.right;
        }

    }

    const simpleEither: Either<string, number> = new SimpleEither<string, number>('안녕', 123);
    console.log(simpleEither.leftValue());
    console.log(simpleEither.rightValue());
}
