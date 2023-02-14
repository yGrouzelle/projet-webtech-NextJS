import { useState } from "react";

export default function Test() {
  const [name, setName] = useState("Jean");
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p class="text-xl">A CONTINER ..</p>
      <h1 class="">Bienvenue {name} </h1>
      <button onClick={increment} class="bg-blue-400 rounded-md">
        Click here to increment
      </button>
      <p>{count}</p>
    </div>
  );
}
