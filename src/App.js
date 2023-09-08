import { employees, fruits, mycart, product } from "./data";
import { Example1 } from "./Example1";
import { Example10 } from "./Example10";
import { Example11 } from "./Example11";
import { Example12 } from "./Example12";
import { Example13 } from "./Example13";
import { Example2 } from "./Example2";
import { Example3 } from "./Example3";
import { Example4 } from "./Example4";
import { Example5 } from "./Example5";
import { Example6 } from "./Example6";
import { Example7 } from "./Example7";
import { Example8 } from "./Example8";
import { Example9 } from "./Example9";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <Example1 /> */}
      {/* <Example2 /> */}
      {/* <Example3 /> */}
      {/* <Example4 /> */}
      {/* <Example5 firstNumber={5} secondNumber={4}/> */}
      {/* <Example6 product={product} /> */}
      {/* <Example7 fruits={fruits} /> */}
      {/* <Example8 fruits={fruits} /> */}
      {/* <Example9 employees={employees} /> */}
      {/* <Example10 mycart={mycart} /> */}
      {/* <Example11 /> */}
      {/* <Example12 fruits={fruits} /> */}
      <Example13 employees={employees} />
    </div>
  );
}
