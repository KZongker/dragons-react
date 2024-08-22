import { useState } from "react";
import { Alert, Button, FloatingLabel, Form } from "react-bootstrap";

export const SurveyContent = () => {
    const [name, setName] = useState("");
    const [dragonName, setDragonName] = useState("");
    const [species, setSpecies] = useState("");
    const [comments, setComments] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        switch (e.currentTarget.name) {
            case "name": setName(e.currentTarget.value); break;
            case "dragonName": setDragonName(e.currentTarget.value); break;
            case "species": setSpecies(e.currentTarget.value); break;
            case "comments": setComments(e.currentTarget.value); break;
        }
    };
    return <>
        <div className="info">
            <h1>Dragon Survey</h1>
            <p>To gather information on various dragon abilities and preferences!</p>
            <p>{name}</p>
        </div>

        <div className="row justify-content-center">
            <div className="col-lg-6">
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
                            <Form.Check type="checkbox" id="fish" className="checks" name="fish" label="Fish" />
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Check type="checkbox" id="chicken" className="checks" name="chicken" label="Chicken" />
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Check type="checkbox" id="sheep" className="checks" name="sheep" label="Sheep" />
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Check type="checkbox" id="nip" className="checks" name="nip" label="Dragon Nip" />
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Check type="checkbox" id="light" className="checks" name="light" label="Chasing Light" />
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Check type="checkbox" id="fetch" className="checks" name="fetch" label="Playing Fetch" />
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Check type="checkbox" id="brush" className="checks" name="brush" label="Being Brushed" />
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Check type="checkbox" id="flight" className="checks" name="flight" label="Flight Practice" />
                        </Form.Group><br />

                        <span className="form-label">My Dragon's Fire Type:</span>
                        <Form.Group className="form-check">
                            <Form.Check type="radio" id="blasts" className="checks" name="fire" label="Blasts" />
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Check type="radio" id="stream" className="checks" name="fire" label="Streaming" />
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Check type="radio" id="gas" className="checks" name="fire" label="Gas/Spark" />
                        </Form.Group>
                        <Form.Group className="form-check mb-4">
                            <Form.Check type="radio" id="otherfire" className="checks" name="fire" label="Other" />
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
                            <p>You submitted the following: <br /> {name}</p>
                        </Alert>
                        }
                    </fieldset>
                </form>
            </div>
        </div>
    </>
};