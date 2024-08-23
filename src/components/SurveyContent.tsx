import { useState } from "react";
import { Alert, Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

export const SurveyContent = () => {
    const [name, setName] = useState("");
    const [dragonName, setDragonName] = useState("");
    const [species, setSpecies] = useState("");
    const [comments, setComments] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [fish, setFish] = useState(false);
    const [chicken, setChicken] = useState(false);
    const [sheep, setSheep] = useState(false);
    const [nip, setNip] = useState(false);
    const [light, setLight] = useState(false);
    const [fetch, setFetch] = useState(false);
    const [brush, setBrush] = useState(false);
    const [flight, setFlight] = useState(false);
    const [blast, setBlast] = useState(false);
    const [stream, setStream] = useState(false);
    const [gas, setGas] = useState(false);
    const [other, setOther] = useState(false);
    const blastActive = () => {
        setBlast(true);
        setStream(false);
        setGas(false);
        setOther(false);
    }
    const streamActive = () => {
        setBlast(false);
        setStream(true);
        setGas(false);
        setOther(false);
    }
    const gasActive = () => {
        setBlast(false);
        setStream(false);
        setGas(true);
        setOther(false);
    }
    const otherActive = () => {
        setBlast(false);
        setStream(false);
        setGas(false);
        setOther(true);
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        switch (e.currentTarget.name) {
            case "name": setName(e.currentTarget.value); break;
            case "dragonName": setDragonName(e.currentTarget.value); break;
            case "species": setSpecies(e.currentTarget.value); break;
            case "comments": setComments(e.currentTarget.value); break;
        }
    };
    return <>
        <div className="info mb-4">
            <h1>Dragon Survey</h1>
            <p>To gather information on various dragon abilities and preferences!</p>
        </div>

        <Row className="justify-content-center">
            <Col lg={6}>
                <form className="formfont">
                    <fieldset>
                        <Form.Group>
                            <Form.Label className="form-label">Viking Name:</Form.Label>
                            <div className="input-group mb-4">
                                <span className="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                </span>
                                <Form.Control type="text" id="name" className="form-control taller" name="name" placeholder="firstname" required onChange={handleChange} value={name} />
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="form-label">Dragon Name:</Form.Label>
                            <div className="input-group mb-4">
                                <span className="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                                        <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                                    </svg>
                                </span>
                                <Form.Control type="text" id="petname" className="form-control taller" name="dragonName" placeholder="pet name/made up" required onChange={handleChange} value={dragonName} />
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="form-label">My Dragon Is A:</Form.Label>
                            <Form.Select id="species" name="species" className="form-select mb-4 taller" onChange={handleChange} value={species}>
                                <option>Select One</option>
                                <option>Deadly Nadder</option>
                                <option>Hiddeous Zippleback</option>
                                <option>Gronckle</option>
                                <option>Monstrous Nightmare</option>
                                <option>Other</option>
                            </Form.Select>
                        </Form.Group>

                        <span className="form-label">My Dragon Enjoys (check all that apply):</span>
                        <Form.Group className="form-check">
                            <Form.Check type="checkbox" id="fish" className="checks" name="fish" label="Fish" onClick={() => { fish ? setFish(false) : setFish(true) }} />
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Check type="checkbox" id="chicken" className="checks" name="chicken" label="Chicken" onClick={() => { chicken ? setChicken(false) : setChicken(true) }} />
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Check type="checkbox" id="sheep" className="checks" name="sheep" label="Sheep" onClick={() => { sheep ? setSheep(false) : setSheep(true) }} />
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Check type="checkbox" id="nip" className="checks" name="nip" label="Dragon Nip" onClick={() => { nip ? setNip(false) : setNip(true) }} />
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Check type="checkbox" id="light" className="checks" name="light" label="Chasing Light" onClick={() => { light ? setLight(false) : setLight(true) }} />
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Check type="checkbox" id="fetch" className="checks" name="fetch" label="Playing Fetch" onClick={() => { fetch ? setFetch(false) : setFetch(true) }} />
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Check type="checkbox" id="brush" className="checks" name="brush" label="Being Brushed" onClick={() => { brush ? setBrush(false) : setBrush(true) }} />
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Check type="checkbox" id="flight" className="checks" name="flight" label="Flight Practice" onClick={() => { flight ? setFlight(false) : setFlight(true) }} />
                        </Form.Group><br />

                        <span className="form-label">My Dragon's Fire Type:</span>
                        <Form.Group className="form-check">
                            <Form.Check type="radio" id="blasts" className="checks" name="fire" label="Blasts" onClick={() => { blastActive() }} />
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Check type="radio" id="stream" className="checks" name="fire" label="Streaming" onClick={() => { streamActive() }} />
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Check type="radio" id="gas" className="checks" name="fire" label="Gas/Spark" onClick={() => { gasActive() }} />
                        </Form.Group>
                        <Form.Group className="form-check mb-4">
                            <Form.Check type="radio" id="otherfire" className="checks" name="fire" label="Other" onClick={() => { otherActive() }} />
                        </Form.Group>

                        <Form.Group className="form-floating mb-4">
                            <FloatingLabel label="Extra Comments:">
                                <Form.Control as="textarea" id="comments" name="comments" className="form-control tallest" placeholder="Thank you for your input!" onChange={handleChange} value={comments} />
                            </FloatingLabel>
                        </Form.Group>

                        <div className="mb-4">
                            <Button variant="outline-success" size="lg" onClick={() => { setSubmitted(true) }}>Submit</Button>
                            <Button variant="outline-danger" size="lg">Reset</Button>
                        </div>
                        {submitted && <Alert variant="success" dismissible onClose={() => { setSubmitted(false) }}>
                            <p>You submitted the following: <br />
                                Name: {name} <br />
                                Dragon Name: {dragonName} <br />
                                Dragon Species: {species} <br />
                                Dragon Likes: <br />
                                - Fish: {JSON.stringify(fish)} <br />
                                - Chicken: {JSON.stringify(chicken)} <br />
                                - Sheep: {JSON.stringify(sheep)} <br />
                                - Dragon Nip: {JSON.stringify(nip)} <br />
                                - Chasing Light: {JSON.stringify(light)} <br />
                                - Fetch: {JSON.stringify(fetch)} <br />
                                - Being Brushed: {JSON.stringify(brush)} <br />
                                - Flight Practice: {JSON.stringify(flight)} <br />
                                Dragon Fire: <br />
                                - Blast Fire: {JSON.stringify(blast)} <br />
                                - Streaming Fire: {JSON.stringify(stream)} <br />
                                - Gas Fire: {JSON.stringify(gas)} <br />
                                - Other Fire: {JSON.stringify(other)} <br />
                                Results Recieved - Thank you for participating!</p>
                        </Alert>
                        }
                    </fieldset>
                </form>
            </Col>
        </Row>
    </>
};