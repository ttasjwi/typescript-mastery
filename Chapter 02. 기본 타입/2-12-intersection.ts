
{
    /**
     * intersection : &
     * &로 엮인 타입들의 모든 필드(타입 일치)를 가지고 있어야한다.
     */

    type Student = {
        name: string,
        score: number
    };

    type Worker = {
        employeeId: number,
        work: () => void
    }

    type InternWorker = Student & Worker;

    function internwork(internWorker: InternWorker) {
        console.log(`name : ${internWorker.name}`);
        console.log(`score : ${internWorker.score}`);
        console.log(`employeeId : ${internWorker.employeeId}`);
        internWorker.work();
    }

    const internWorker: InternWorker = {
        employeeId: 1,
        name: "ttasjwi",
        score: 1,
        work(): void {
            console.log('땃쥐쟝 일해요오옷');
        }
    }

    internwork(internWorker);
}
