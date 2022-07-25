import { Directions } from "../map";
import { left, move, place, report, right } from "./robot";

describe('Robot Placement', () => {
    it('places robot on origin facing Downwards', () => {
        place(0, 0, Directions.SOUTH);
        const currentLocation = report();
        const expectedLocation = '0, 0, 2';
        expect(currentLocation).toEqual(expectedLocation)
    });

    it('places robot on origin facing Upwards', () => {
        place(0, 0, Directions.NORTH);
        const currentLocation = report();
        const expectedLocation = '0, 0, 0';
        expect(currentLocation).toEqual(expectedLocation)
    });

    it('places robot on second row second column(1,1) facing Upwards', () => {
        place(1, 1, Directions.NORTH);
        const currentLocation = report();
        const expectedLocation = '1, 1, 0';
        expect(currentLocation).toEqual(expectedLocation)
    });
})

describe('Robot Movement', () => {
    it('turns robot right', () => {
        right();
        const currentLocation = report();
        const expectedLocation = '0, 0, 2';
        expect(currentLocation).toEqual(expectedLocation)
    });

    it('moves robot', () => {
        move();
        const currentLocation = report();
        const expectedLocation = '0, 0, 0';
        expect(currentLocation).toEqual(expectedLocation)
    });

    it('turns robot left', () => {
        left();
        const currentLocation = report();
        const expectedLocation = '0, 0, 2';
        expect(currentLocation).toEqual(expectedLocation)
    });

    it('moves robot', () => {
        move();
        const currentLocation = report();
        const expectedLocation = '0, 0, 0';
        expect(currentLocation).toEqual(expectedLocation)
    });

})