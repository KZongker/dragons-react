import { useEffect, useState } from "react";
import { HumanBattle } from "./HumanBattle";
import { AddHumans } from "./AddHumans";
import { MurderHumans } from "./MurderHumans";

interface Props {
    humans: any
}

export const HumanContents = (props: Props) => {
    const [customHumans, setCustomHumans] = useState<any[]>([]);
    const combinedHumans = [...props.humans].concat(customHumans);

    useEffect(() => {
        const json = localStorage.getItem("customHumans");
        if (json !== null) setCustomHumans(JSON.parse(json));
    }, []);

    return <>
        <HumanBattle humans={combinedHumans} />
        <AddHumans customHumans={customHumans} setCustomHumans={setCustomHumans} />
        <MurderHumans customHumans={customHumans} setCustomHumans={setCustomHumans} />
    </>
};