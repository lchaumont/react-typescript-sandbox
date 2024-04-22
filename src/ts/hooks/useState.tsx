import {ChangeEvent, useState} from "react";

type CounterProps = {
    defaultCounter?: number;
    defaultStep?: number;
}

const Counter = ({defaultStep = 1, defaultCounter = 1} : CounterProps) => {
    const [count, setCount] = useState<number>(defaultCounter);
    const increment = () => setCount(prev => prev + (step ?? 1));
    const decrement = () => setCount(prev => prev - (step ?? 1));

    const [step, setStep] = useState<number | null>(defaultStep);
    const handleChangeStep = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        if (isNaN(value)) setStep(null);
        setStep(value);
    };

    return (
        <div>
            <div>Value : {count}</div>
            <button onClick={increment}>Incrementer</button>
            <button onClick={decrement}>Décrementer</button>

            <input type="number" value={step ?? ""} onChange={handleChangeStep} />
        </div>
    );
};

export default Counter;
