{
    /**
     * Union types (or)
     * - 발생할 수 있는 모든 Case 중에서 하나만 할당할 수 있을 때 사용하면 유용
     */

    type Direction = 'left' | 'right' | 'up' | 'down';

    function move(direction: Direction) {
        console.log(`move ${direction}`);
    }

    move('left');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

}
