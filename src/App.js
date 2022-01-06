import AOS from "aos";
import { useEffect } from "react";

const App = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  
  return (
    <div data-aos="fade-left" className="text-3xl font-bold underline">
      test
    </div>
  );
}

export default App;
