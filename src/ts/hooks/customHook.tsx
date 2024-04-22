import {ChangeEvent, useState} from "react";

type CounterProps = {
    defaultCounter?: number;
    defaultStep?: number;
};

const CounterV2 = ({defaultStep = 1, defaultCounter = 1}: CounterProps) => {
    const [step, setStep] = useState<number | null>(defaultStep);
    const handleChangeStep = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        if (isNaN(value)) setStep(null);
        setStep(value);
    };

    const {count, increment, decrement} = useCounter({defaultCounter, step: step ?? 1});

    return (
        <div>
            <div>Value : {count}</div>
            <button onClick={increment}>Incrementer</button>
            <button onClick={decrement}>Décrementer</button>

            <input type="number" value={step ?? ""} onChange={handleChangeStep} />
        </div>
    );
};

const useCounter = ({defaultCounter = 1, step}: Pick<CounterProps, "defaultCounter"> & {step: number}) => {
    const [count, setCount] = useState<number>(defaultCounter);
    const increment = () => setCount(prev => prev + step);
    const decrement = () => setCount(prev => prev - step);

    return {count, increment, decrement};
};

export default CounterV2;
