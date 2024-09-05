import { useEffect, useState } from "react";
import { HumanCard } from "./components/HumanCard";
import { SiteWrapper } from "./components/SiteWrapper";
import { Container, Row } from "react-bootstrap";
import { HumanBattle } from "./components/HumanBattle";
import { AddHumans } from "./components/AddHumans";
import { MurderHumans } from "./components/MurderHumans";

export const Humans = () => {
    const [customHumans, setCustomHumans] = useState<any[]>([]);
    const [humans, setHumans] = useState<any[]>([]);
    const combinedHumans = [...humans].concat(customHumans);
    const loadData = async () => {
        const resp = await fetch("/humans.json");
        const data = await resp.json();
        console.log(setHumans(data));
        const json = localStorage.getItem("customHumans");
        if (json !== null) setCustomHumans(JSON.parse(json));
    }

    useEffect(() => {
        loadData()
    }, []);

    const populateCards = () => {
        const result: JSX.Element[] = [];
        combinedHumans.forEach((h, index) => {
            result.push(<HumanCard human={h} index={index}></HumanCard>)
        });
        return result;
    };

    return <>
        <SiteWrapper>
            <Row className="stripeTwo" />
            <Container className="text-center">{populateCards()}
                <HumanBattle humans={combinedHumans} />
                <AddHumans customHumans={customHumans} setCustomHumans={setCustomHumans} />
                <MurderHumans customHumans={customHumans} setCustomHumans={setCustomHumans} />
            </Container>
        </SiteWrapper>
    </>
};