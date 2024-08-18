import { useState } from "react";
import { Form } from "react-bootstrap";

export const SurveyContent = () => {
    const [name, setName] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        switch (e.currentTarget.name) {
            case "name": setName(e.currentTarget.value); break;
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
                <form id="#formfont">
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
                                <Form.Control type="text" id="petname" className="form-control taller" name="petname" placeholder="pet name/made up" required />
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="form-label">My Dragon Is A:</Form.Label>
                            <Form.Select id="species" name="species" className="form-select mb-4 taller">
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
                            <Form.Control type="checkbox" id="fish" className="form-check-input checks" name="fish" checked />
                            <Form.Label className="form-check-label">Fish</Form.Label>
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Control type="checkbox" id="chicken" className="form-check-input checks" name="chicken" />
                            <Form.Label className="form-check-label">Chicken</Form.Label>
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Control type="checkbox" id="sheep" className="form-check-input checks" name="sheep" />
                            <Form.Label className="form-check-label">Sheep</Form.Label>
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Control type="checkbox" id="nip" className="form-check-input checks" name="nip" />
                            <Form.Label className="form-check-label">Dragon Nip</Form.Label>
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Control type="checkbox" id="light" className="form-check-input checks" name="light" />
                            <Form.Label className="form-check-label">Chasing Light</Form.Label>
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Control type="checkbox" id="fetch" className="form-check-input checks" name="fetch" />
                            <Form.Label className="form-check-label">Playing Fetch</Form.Label>
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Control type="checkbox" id="brush" className="form-check-input checks" name="brush" />
                            <Form.Label className="form-check-label">Being Brushed</Form.Label>
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Control type="checkbox" id="flight" className="form-check-input checks" name="flight" />
                            <Form.Label className="form-check-label">Flight Practice</Form.Label>
                        </Form.Group><br />

                        <span className="form-label">My Dragon's Fire Type:</span>
                        <Form.Group className="form-check">
                            <Form.Control type="radio" id="blasts" className="form-check-input checks" name="fire" checked />
                            <Form.Label className="form-check-label">Blasts</Form.Label>
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Control type="radio" id="stream" className="form-check-input checks" name="fire" />
                            <Form.Label className="form-check-label">Streaming</Form.Label>
                        </Form.Group>
                        <Form.Group className="form-check">
                            <Form.Control type="radio" id="gas" className="form-check-input checks" name="fire" />
                            <Form.Label className="form-check-label">Gas/Spark</Form.Label>
                        </Form.Group>
                        <Form.Group className="form-check mb-4">
                            <Form.Control type="radio" id="otherfire" className="form-check-input checks" name="fire" />
                            <Form.Label className="form-check-label">Other</Form.Label>
                        </Form.Group>

                        <Form.Group className="form-floating mb-4">
                            <textarea id="comments" name="comments" className="form-control tallest" placeholder="Thank you for your input!"></textarea>
                            <Form.Label>Extra Comments:</Form.Label>
                        </Form.Group>

                        <div className="mb-4">
                            <button type="submit" /* onclick="alert('Thanks for participating in the dragon survey!')" */ className="btn btn-outline-success btn-lg">Submit</button>
                            <button type="reset" className="btn btn-outline-danger btn-lg">Reset</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </>
};