import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen w-screen flex  items-center flex-col bg-slate-500">
        <div className="m-10">
          <center className="text-5xl font-extrabold">TODO App</center>
        </div>

        <div>
          <div class="row">
            <div class="col-6">
              <input type="text" className="p-2" placeholder="Enter your TODO" />
            </div>
            <div class="col-4">
              <input type="date" className="p-2" name="" id="" />
            </div>
            <div class="col-2">
              <button class="btn btn-success">ADD</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
