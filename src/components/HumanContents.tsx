import { useState } from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";


interface Props {
    humans: any
}


export const HumanContents = (props: Props) => {

    const [fightError, setFightError] = useState(false);
    const [battlerOne, setBattlerOne] = useState(0);
    const [battlerTwo, setBattlerTwo] = useState(0);
    const [humanEdits, setHumanEdits] = useState(false);
    const [noDelete, setNoDelete] = useState(false);

    const [fullName, setFullName] = useState("");
    const [dragonName, setDragonName] = useState("");
    const [vikingAge, setVikingAge] = useState(0);
    const [brave, setBrave] = useState(0);
    const [smart, setSmart] = useState(0);
    const [fast, setFast] = useState(0);
    const [punch, setPunch] = useState(0);
    const [block, setBlock] = useState(0);
    const [colorSelection, setColorSelection] = useState("");
    const [imageSelection, setImageSelection] = useState("");

    const doBattle = () => {
        battlerOne === battlerTwo ? setFightError(true) : setFightError(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        switch (e.currentTarget.name) {
            case "battlerOne": setBattlerOne(parseInt(e.currentTarget.value)); break;
            case "battlerTwo": setBattlerTwo(parseInt(e.currentTarget.value)); break;
        }
    };

    const handleChangeTwo = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        switch (e.currentTarget.name) {
            case "fullName": setFullName(e.currentTarget.value); break;
            case "dragonName": setDragonName(e.currentTarget.value); break;
            case "vikingAge": setVikingAge(parseInt(e.currentTarget.value)); break;
            case "brave": setBrave(parseInt(e.currentTarget.value)); break;
            case "smart": setSmart(parseInt(e.currentTarget.value)); break;
            case "fast": setFast(parseInt(e.currentTarget.value)); break;
            case "punch": setPunch(parseInt(e.currentTarget.value)); break;
            case "block": setBlock(parseInt(e.currentTarget.value)); break;
            case "colorSelection": setColorSelection(e.currentTarget.value); break;
            case "imageSelection": setImageSelection(e.currentTarget.value); break;
        }
    };

    const colorArray = [
        { name: "Pink" },
        { name: "Magenta" },
        { name: "Red" },
        { name: "Scarlet" },
        { name: "Orange" },
        { name: "Yellow" },
        { name: "Chartreuse" },
        { name: "Green" },
        { name: "Sky" },
        { name: "Blue" },
        { name: "Indigo" },
        { name: "Purple" },
        { name: "Brown" },
        { name: "Black" },
        { name: "Slate" },
        { name: "Grey" }
    ];

    const imageArray = [
        {
            name: "Hiccup",
            image: "Images/Fanart/Hiccup.jpg"
        },
        {
            name: "Astrid",
            image: "Images/Fanart/astrid.jpg"
        },
        {
            name: "Thorstons",
            image: "Images/Fanart/Thorstons.jpg"
        },
        {
            name: "Ruffnut",
            image: "Images/Fanart/ruffnut.jpg"
        },
        {
            name: "Fishlegs",
            image: "Images/Fanart/fishlegsig.jpg"
        },
        {
            name: "Snotlout",
            image: "Images/Fanart/Snotloutig.jpg"
        }
    ];

    const addHuman = () => {
        const extraHumans = [];
        fullName == "" ? setHumanEdits(true) : extraHumans.push({
            name: fullName,
            dragon: dragonName,
            age: vikingAge + "/" + vikingAge + 5 + "/" + vikingAge + 6,
            bravery: brave,
            intelligence: smart,
            speed: fast,
            attack: punch,
            defense: block,
            image: imageSelection,
            color: colorSelection
        });
        console.log(extraHumans);
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

                <Container id="alertBox">
                    {humanEdits &&
                        <Alert variant="primary" className="text-center" dismissible onClose={() => { setHumanEdits(false) }}>
                            Please ignore this alert box!
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                        </Alert>
                    }
                </Container>

                <form id="addVikings" className="text-center formfont">
                    <p>Want to add your own viking? Fill out the form below and test them in battle!</p>

                    <Form.Group>
                        <Row className="my-4">
                            <Col md={4}>
                                <Form.Label>Viking Name:</Form.Label>
                            </Col>
                            <Col md={8}>
                                <Form.Control type="text" id="fullName" name="fullName" required onChange={handleChangeTwo} value={fullName} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row className="mb-4">
                            <Col md={4}>
                                <Form.Label /* maxlength="50" */>Dragon Name:</Form.Label>
                            </Col>
                            <Col md={8}>
                                <Form.Control type="text" id="dragonName" required name="dragonName" onChange={handleChangeTwo} value={dragonName} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row className="mb-4">
                            <Col md={4}>
                                <Form.Label>Viking Age (first movie):</Form.Label>
                            </Col>
                            <Col md={4}>
                                <Form.Control type="number" id="vikingAge" name="vikingAge" min="1" max="114" required onChange={handleChangeTwo} value={vikingAge} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row className="mb-4">
                            <Col md={4}>
                                <Form.Label>Bravery:</Form.Label>
                            </Col>
                            <Col md={4}>
                                <Form.Control type="number" id="brave" name="brave" min="1" max="5" required onChange={handleChangeTwo} value={brave} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row className="mb-4">
                            <Col md={4}>
                                <Form.Label>Intelligence:</Form.Label>
                            </Col>
                            <Col md={4}>
                                <Form.Control type="number" id="smart" name="smart" min="1" max="5" required onChange={handleChangeTwo} value={smart} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row className="mb-4">
                            <Col md={4}>
                                <Form.Label>Speed:</Form.Label>
                            </Col>
                            <Col md={4}>
                                <Form.Control type="number" id="fast" name="fast" min="1" max="5" required onChange={handleChangeTwo} value={fast} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row className="mb-4">
                            <Col md={4}>
                                <Form.Label>Attack:</Form.Label>
                            </Col>
                            <Col md={4}>
                                <Form.Control type="number" id="punch" name="punch" min="1" max="5" required onChange={handleChangeTwo} value={punch} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row className="mb-4">
                            <Col md={4}>
                                <Form.Label>Defense:</Form.Label>
                            </Col>
                            <Col md={4}>
                                <Form.Control type="number" id="block" name="block" min="1" max="5" required onChange={handleChangeTwo} value={block} />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="mb-2">What color card would you like?</Form.Label>
                        <Row className="justify-content-center mb-4">
                            <Col md={6}>
                                <Form.Select id="colorSelection" onChange={handleChange} value={colorSelection}>
                                    {colorArray.map((c: any, i: number) => (
                                        <option value={c.name.toLowerCase()}>{c.name}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="mb-2">Which image would you like?</Form.Label>
                        <Row className="justify-content-center mb-4">
                            <Col md={6}>
                                <Form.Select id="imageSelection" name="imageSelection" onChange={handleChange} value={imageSelection}>
                                    {imageArray.map((p: any, i: number) => (
                                        <option value={i}>{p.name}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Row>
                    </Form.Group>

                    <button type="button" id="addHumanBtn" className="mb-4" onClick={addHuman}>Submit</button>
                </form>

                <Col lg={12} id="deleteAlert">
                    {noDelete &&
                        <Alert variant="warning" className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-diamond" viewBox="0 0 16 16">
                                <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                            </svg>
                            Nobody to delete!
                            <button type="button" className="btn-close" /* onclick="hideBoxThree();" */ aria-label="Close"></button>
                        </Alert>
                    }
                </Col>

                <form className="text-center formfont">
                    <Form.Group>
                        <Form.Label className="mb-2">Would you like to delete an added viking?</Form.Label>
                        <Row className="justify-content-center mb-4">
                            <Col md={6}>
                                <Form.Select id="deleteBox">
                                </Form.Select>
                            </Col>
                        </Row>
                    </Form.Group>
                    <button type="button" id="removeHumanBtn" className="mb-4" /* onclick="murder();" */>Delete</button>
                </form>
            </Col>

        </Row >
    </>
};