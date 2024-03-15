import { useState } from "react";

const Counter = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleCountChange = (value) => {
        const newCount = count + value;
        if (newCount >= 1 && newCount <= stock) {
            setCount(newCount);
        }
    };

    const handleAdd = () => {
        if (count > 0) {
            onAdd(count);
        }
    };

    return (
        <>
            <div className="d-flex my-4">
                <button type="button" className="btn btn-outline-primary mx-1" onClick={() => handleCountChange(+1)}>+</button>
                <button type="button" className="btn btn-outline-primary mx-1" onClick={() => handleCountChange(-1)}>-</button>
                <button type="button" className="btn btn-outline-primary mx-1" onClick={() => handleAdd()}>Agregar Al Carrito</button>
            </div>
        </>
    );
};

export default Counter;
