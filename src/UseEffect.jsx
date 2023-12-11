// import { useState, useEffect } from "react";

// //ejercicio.. hacer 2 contadores, uno que sume de 2 en 2 y otro que sume normal..
// //con dos estados distintos, y quiero que se actualicen el contador cuando haga click en el +2

// function App() {
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);

//  useEffect (()=>{
//   document.title = `hiciste click ${count}`
// },[count2])

//   return (
//     <div>
//       <h1>useEffect</h1>
//       <p>contador: {count} y {count2}</p>
//       <button onClick={()=>setCount(count + 1)}>click</button>
//       <button onClick={()=>setCount2(count2 + 2)}>click + 2</button>
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";


// function App() {
//   const [nombre, setNombre] = useState("");

//  useEffect (()=>{
//   console.log(nombre)
//  },[])


//   return (
//     <div className="App">
//       <h1>useEffect</h1>
//       <form action="">
//         <input
//           type="text"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />
//       </form>
//     </div>
//   );
// }

// export default App;


