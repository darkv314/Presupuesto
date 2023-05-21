import { useState } from "react";

function Resumen({ presupuesto }) {
    const [gastos, setGastos] = useState(0);
    const [total, setTotal] = useState(0);
    return (
        <div>
            <div className="percentage"></div>
            <div className="text-resume">
                Presupuesto: {`${presupuesto}`}
                Gastos: {gastos}
                Total: {total}
            </div>
        </div>
    );
}

export default Resumen;
