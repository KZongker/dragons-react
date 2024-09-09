import { useEffect, useState } from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";


interface Props {
    humans: any
}

export const HumanBattle = (props: Props) => {
    const [fightError, setFightError] = useState(false);
    const [battlerOne, setBattlerOne] = useState(0);
    const [battlerTwo, setBattlerTwo] = useState(0);
    const doBattle = () => {
        battlerOne === battlerTwo ? setFightError(true) : attackHumans();
    };

    const attackHumans = () => {
        const damage = props.humans.bravery + props.humans.attack;
        const resistance = props.humans.speed + props.humans.defense;
        const total = damage > resistance ? damage - resistance : resistance - damage;
        return total;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        switch (e.currentTarget.name) {
            case "battlerOne": setBattlerOne(parseInt(e.currentTarget.value)); break;
            case "battlerTwo": setBattlerTwo(parseInt(e.currentTarget.value)); break;
        }
    };

    return <>
        <Row className="justify-content-center">
            <Col lg={8} id="fightAlert">
                {fightError &&
                    <Alert variant="warning" className="text-center" dismissible onClose={() => { setFightError(false) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-diamond" viewBox="0 0 16 16">
                            <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                        </svg>
                        Viking Cannot Fight Themself!
                    </Alert>
                }
            </Col>

            <Col lg={8}>

                <form className="text-center formfont">
                    <Form.Group>
                        <Row>
                            <Form.Label>Please choose your fighters:</Form.Label><br />
                            <Col sm={6}>
                                <Form.Select name="battlerOne" id="battlerOne" onChange={handleChange} value={battlerOne}>
                                    {props.humans.map((h: any, i: number) => (
                                        <option value={i}>{h.name}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                            <Col sm={6}>
                                <Form.Select name="battlerTwo" id="battlerTwo" onChange={handleChange} value={battlerTwo}>
                                    {props.humans.map((h: any, i: number) => (
                                        <option value={i}>{h.name}</option>
                                    ))}
                                </Form.Select><br />
                            </Col>
                        </Row>
                    </Form.Group>
                    <button type="button" id="fightButton" onClick={doBattle} className="mb-2">Fight!</button>
                    <p id="battleWinner">The Winner is: </p><br />
                </form>
            </Col>
        </Row>
    </>
};