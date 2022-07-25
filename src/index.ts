import { left, move, report } from "./robot/robot";

const main = () => {
    left();
    console.log(report())
    move();
    move();
    move();
    console.log(report())

}

main();
