import { useEffect, useState } from "react";
import { HumanCard } from "./components/HumanCard";
import { HumanContents } from "./components/HumanContents";
import { SiteWrapper } from "./components/SiteWrapper";
import { Container, Row } from "react-bootstrap";

export const Humans = () => {
    const [humans, setHumans] = useState([]);
    const loadData = async () => {
        const resp = await fetch("/humans.json");
        const data = await resp.json();
        console.log(setHumans(data));
    }

    useEffect(() => {
        loadData()
    }, []);

    const populateCards = () => {
        const result: JSX.Element[] = [];
        humans.forEach((h, index) => {
            result.push(<HumanCard human={h} index={index}></HumanCard>)
        });
        return result;
    };

    return <>
        <SiteWrapper>
            <Row className="stripeTwo" />
            <Container className="text-center">{populateCards()}</Container>
            <HumanContents />
        </SiteWrapper>
    </>
};