import { useEffect, useState } from "react";
import { HumansAdminContent } from "../components/HumansAdminContent";
import { SiteWrapper } from "../components/SiteWrapper"
import { useParams } from "react-router-dom";
import { Col, Form, Row } from "react-bootstrap";

export const HumanAdmin = () => {
    const params = useParams();

    const [human, setHuman] = useState<any>({});
    const loadData = async () => {
        const resp = await fetch("http://localhost:8080/humans/" + params.id);
        const data = await resp.json();
        console.log(setHuman(data));
    }

    useEffect(() => {
        loadData()
    }, []);

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

    return <>
        <SiteWrapper>

            <Row class="stripeTwo"></Row>

            <form className="text-center formfont my-4">

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>First Name:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" id="firstName" required name="firstName" value={human.first_name} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Middle Name:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" id="middleName" required name="middleName" value={human.middle_name} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Last Name:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" id="lastName" required name="lastName" value={human.last_name} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Dragon Name:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" id="dragonName" required name="dragonName" value={human.dragon} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Age:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" id="age" required name="age" value={human.age} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Bravery:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="number" id="bravery" required name="bravery" min="1" max="5" value={human.bravery} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Intelligence:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="number" id="intelligence" required name="intelligence" min="1" max="5" value={human.intelligence} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Speed:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="number" id="speed" required name="speed" min="1" max="5" value={human.speed} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Attack:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="number" id="attack" required name="attack" min="1" max="5" value={human.attack} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Defense:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="number" id="defense" required name="defense" min="1" max="5" value={human.defense} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="justify-content-center mb-4">
                        <Col md={4}>
                            <Form.Label>Color:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Select id="colorSelection" name="colorSelection" value={human.color}>
                                {colorArray.map((c: any, i: number) => (
                                    <option value={c.name.toLowerCase()}>{c.name}</option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="justify-content-center mb-4">
                        <Col md={4}>
                            <Form.Label>Image:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Select id="imageSelection" name="imageSelection" value={human.image}>
                                {imageArray.map((p: any, i: number) => (
                                    <option value={p.image}>{p.name}</option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Row>
                </Form.Group>
            </form>

            <Row class="stripeTwo"></Row>

        </SiteWrapper>
    </>
};