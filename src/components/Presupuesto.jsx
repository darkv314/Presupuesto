import { useEffect, useState } from "react";
import Resumen from "./Resumen";

const Presupuesto = ({ presupuesto, setPresupuesto, setCrearResumen }) => {
    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        // console.log(e.target.value);
        // setPresupuesto(e.target.value);
        setCrearResumen(true);
    };

    return (
        <div className="bg-white shadow-lg  rounded-md py-5 w-1/3 mx-auto">
            <h2 className="text-stone-500 text-3xl text-center font-bold">
                Presupuesto
            </h2>
            <form className="py-5 my-5 m-5" onSubmit={(e) => handleSubmit(e)}>
                <input
                    id="presupuesto"
                    type="number"
                    value={presupuesto}
                    onChange={(e) => {
                        setPresupuesto((value) => e.target.value);
                    }}
                    placeholder="Ingrese Presupuesto"
                    className="border-2 w-full p-1"
                />

                <input
                    type="submit"
                    value="Agregar"
                    className="bg-zinc-700 w-full p-5 rounded-md my-5 
                    font-bold cursor-pointer text-white hover:bg-zinc-300"
                />
            </form>
        </div>
    );
};
export default Presupuesto;
