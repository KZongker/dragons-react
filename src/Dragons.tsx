import { Col, Container, Row } from "react-bootstrap";
import { SiteWrapper } from "./components/SiteWrapper";
import { useEffect, useState } from "react";
import { DragonProfile } from "./components/DragonProfile";

export const Dragons = () => {

    const [dragons, setDragons] = useState<any[]>([]);
    const loadData = async () => {
        const resp = await fetch("http://localhost:8080/dragons");
        const data = await resp.json();
        console.log(setDragons(data));
    }

    useEffect(() => {
        console.log(loadData());
    }, []);

    const populateDragons = () => {
        const result: JSX.Element[] = [];
        dragons.forEach((d, index) => {
            result.push(<DragonProfile dragon={d} index={index}></DragonProfile>)
        });
        return result;
    };


    return <>
        <SiteWrapper>
            <div className="info">
                <h1>Dragon Characters</h1>
                <p>Everything you need to know about the dragons of Berk!</p>
            </div>

            <Container>
                <Container className="text-center">{populateDragons()} </Container>
                <Row className="stripeTwo" />
            </Container>
        </SiteWrapper>
    </>
};