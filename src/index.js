import Trip from "./trip";
import Car, {fastCar, zhuanCar} from "./Car";

let carOne = new fastCar(124, '奔驰')
let tripOne = new Trip(carOne);
tripOne.start();
tripOne.end();