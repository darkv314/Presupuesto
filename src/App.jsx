import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Presupuesto from "./components/Presupuesto";
import Resumen from "./components/Resumen";

function App() {
    const [presupuesto, setPresupuesto] = useState("");
    const [crearResumen, setCrearResumen] = useState(false);
    return (
        <div className="bg-slate-600 container mx-auto mt-20">
            {crearResumen ? (
                <Resumen presupuesto={presupuesto} />
            ) : (
                <Presupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setCrearResumen={setCrearResumen}
                />
            )}
        </div>
    );
}

export default App;
