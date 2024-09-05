import { useEffect, useState } from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";


interface Props {
    customHumans: any[],
    setCustomHumans: (human: any) => void
}

export const AddHumans = (props: Props) => {
    const [humanEdits, setHumanEdits] = useState(false);
    const [fullName, setFullName] = useState("");
    const [dragonName, setDragonName] = useState("");
    const [vikingAge, setVikingAge] = useState(0);
    const [brave, setBrave] = useState(0);
    const [smart, setSmart] = useState(0);
    const [fast, setFast] = useState(0);
    const [punch, setPunch] = useState(0);
    const [block, setBlock] = useState(0);
    const [colorSelection, setColorSelection] = useState("pink");
    const [imageSelection, setImageSelection] = useState("Hiccup");



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
        const extraHumans = [...props.customHumans];
        fullName == "" ? setHumanEdits(true) : extraHumans.push({
            name: fullName,
            dragon: dragonName,
            age: vikingAge + "/" + (vikingAge + 5) + "/" + (vikingAge + 6),
            bravery: brave,
            intelligence: smart,
            speed: fast,
            attack: punch,
            defense: block,
            image: imageSelection,
            color: colorSelection
        });
        props.setCustomHumans(extraHumans);
        localStorage.setItem("customHumans", JSON.stringify(props.customHumans));
    };

    return <>
        <Row className="justify-content-center">
            <Col>
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
                                <Form.Control type="number" id="vikingAge" name="vikingAge" min="1" max="114" required onChange={handleChangeTwo} value={vikingAge || ""} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row className="mb-4">
                            <Col md={4}>
                                <Form.Label>Bravery:</Form.Label>
                            </Col>
                            <Col md={4}>
                                <Form.Control type="number" id="brave" name="brave" min="1" max="5" required onChange={handleChangeTwo} value={brave || ""} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row className="mb-4">
                            <Col md={4}>
                                <Form.Label>Intelligence:</Form.Label>
                            </Col>
                            <Col md={4}>
                                <Form.Control type="number" id="smart" name="smart" min="1" max="5" required onChange={handleChangeTwo} value={smart || ""} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row className="mb-4">
                            <Col md={4}>
                                <Form.Label>Speed:</Form.Label>
                            </Col>
                            <Col md={4}>
                                <Form.Control type="number" id="fast" name="fast" min="1" max="5" required onChange={handleChangeTwo} value={fast || ""} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row className="mb-4">
                            <Col md={4}>
                                <Form.Label>Attack:</Form.Label>
                            </Col>
                            <Col md={4}>
                                <Form.Control type="number" id="punch" name="punch" min="1" max="5" required onChange={handleChangeTwo} value={punch || ""} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row className="mb-4">
                            <Col md={4}>
                                <Form.Label>Defense:</Form.Label>
                            </Col>
                            <Col md={4}>
                                <Form.Control type="number" id="block" name="block" min="1" max="5" required onChange={handleChangeTwo} value={block || ""} />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="mb-2">What color card would you like?</Form.Label>
                        <Row className="justify-content-center mb-4">
                            <Col md={6}>
                                <Form.Select id="colorSelection" name="colorSelection" onChange={handleChangeTwo} value={colorSelection}>
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
                                <Form.Select id="imageSelection" name="imageSelection" onChange={handleChangeTwo} value={imageSelection}>
                                    {imageArray.map((p: any, i: number) => (
                                        <option value={p.name}>{p.name}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Row>
                    </Form.Group>

                    <button type="button" id="addHumanBtn" className="mb-4" onClick={addHuman}>Submit</button>
                </form>
            </Col>
        </Row>
    </>
};