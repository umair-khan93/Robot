import { Directions, Position } from "../map";

// I would take these values as input from the UI. Validations can then be performed easily on the basis of these values
const cols = 5;
const rows = 5;

export interface RobotOptions {
    position: Position;
    direction: Directions;
}
const position: Position = {
    x: 0,
    y: 0
}
const direction: Directions = Directions.SOUTH;
const roboPosition: RobotOptions = {
    position,
    direction
}

export const place = (x: number, y: number, direction: Directions) => {
    roboPosition.position.x = x;
    roboPosition.position.y = y;
    roboPosition.direction = direction;
    return currentLocation();
}
export const left = () => {
    roboPosition.direction = roboPosition.direction === Directions.NORTH ? Directions.WEST : roboPosition.direction - 1;
    return currentLocation();
}

export const right = () => {
    roboPosition.direction === Directions.WEST ? Directions.NORTH : roboPosition.direction + 1;
    return currentLocation();
}

export const move = () => {
    switch (roboPosition.direction) {
        case Directions.NORTH:
            --roboPosition.position.y;
            break;
        case Directions.EAST:
            ++roboPosition.position.x;
            break;
        case Directions.SOUTH:
            ++roboPosition.position.y;
            break;
        case Directions.WEST:
            --roboPosition.position.x;
            break;
        default:
    }
}

export const report = () => {
    return `${roboPosition.position.x}, ${roboPosition.position.y}, ${roboPosition.direction}`;
}

const currentLocation = () => {
    return roboPosition;
}