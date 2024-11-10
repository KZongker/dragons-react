import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import { AdminWrapper } from "../components/AdminWrapper";

export const HumanAdmin = () => {
    const params = useParams();

    const [human, setHuman] = useState<any>({});
    const loadData = async () => {
        if (params.id && params.id !== "0") {
            const resp = await fetch("http://localhost:8080/humans/" + params.id);
            const data = await resp.json();
            console.log(setHuman(data));
        }
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const h = { ...human };
        switch (e.currentTarget.name) {
            case "firstName": h.firstName = e.currentTarget.value; break;
            case "middleName": h.middleName = e.currentTarget.value; break;
            case "lastName": h.lastName = e.currentTarget.value; break;
            case "dragonName": h.dragon = e.currentTarget.value; break;
            case "age": h.age = e.currentTarget.value; break;
            case "bravery": h.bravery = e.currentTarget.value; break;
            case "intelligence": h.intelligence = e.currentTarget.value; break;
            case "speed": h.speed = e.currentTarget.value; break;
            case "attack": h.attack = e.currentTarget.value; break;
            case "defense": h.defense = e.currentTarget.value; break;
            case "colorSelection": h.color = e.currentTarget.value; break;
            case "imageSelection": h.image = e.currentTarget.value; break;
        }
        setHuman(h);
    };

    const handleSave = async () => {
        await fetch("http://localhost:8080/humans/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(human)
        });
    };

    const handleDelete = async () => {
        await fetch("http://localhost:8080/humans/:id", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(human)
        });
    };

    return <>
        <AdminWrapper>

            <Row class="stripeTwo"></Row>

            <form className="text-center formfont my-4">

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>First Name:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" id="firstName" required name="firstName" onChange={handleChange} value={human.firstName} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Middle Name:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" id="middleName" required name="middleName" onChange={handleChange} value={human.middleName} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Last Name:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" id="lastName" required name="lastName" onChange={handleChange} value={human.lastName} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Dragon Name:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" id="dragonName" required name="dragonName" onChange={handleChange} value={human.dragon} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Age:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" id="age" required name="age" onChange={handleChange} value={human.age} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Bravery:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="number" id="bravery" required name="bravery" min="1" max="5" onChange={handleChange} value={human.bravery} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Intelligence:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="number" id="intelligence" required name="intelligence" min="1" max="5" onChange={handleChange} value={human.intelligence} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Speed:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="number" id="speed" required name="speed" min="1" max="5" onChange={handleChange} value={human.speed} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Attack:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="number" id="attack" required name="attack" min="1" max="5" onChange={handleChange} value={human.attack} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Defense:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="number" id="defense" required name="defense" min="1" max="5" onChange={handleChange} value={human.defense} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="justify-content-center mb-4">
                        <Col md={4}>
                            <Form.Label>Color:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Select id="colorSelection" name="colorSelection" onChange={handleChange} value={human.color}>
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
                            <Form.Select id="imageSelection" name="imageSelection" onChange={handleChange} value={human.image}>
                                {imageArray.map((p: any, i: number) => (
                                    <option value={p.image}>{p.name}</option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Row>
                </Form.Group>

                <Button type="button" className="mb-4" onClick={handleSave}>Submit</Button>
                <Link to="http://localhost:3000/admin/humans" className="btn btn-primary mb-4">Cancel</Link>
                <Button type="button" className="mb-4" onClick={handleDelete}>Delete</Button>
            </form>

            <Row class="stripeTwo"></Row>

        </AdminWrapper>
    </>
};