import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import { AdminWrapper } from "../components/AdminWrapper";

export const DragonAdmin = () => {
    const params = useParams();

    const [dragon, setDragon] = useState<any>({});
    const loadData = async () => {
        if (params.id && params.id !== "0") {
            const resp = await fetch("http://localhost:8080/dragons/" + params.id);
            const data = await resp.json();
            console.log(setDragon(data));
        }
    }

    useEffect(() => {
        loadData()
    }, []);

    const imageArray = [
        {
            name: "Toothless",
            image: "Images/Fanart/Toothless_Offical.jpg"
        },
        {
            name: "Stormfly",
            image: "Images/Fanart/Stormfly_Offical.jpg"
        },
        {
            name: "Barf & Belch",
            image: "Images/Fanart/Barf_and_Belch_Offical.jpg"
        },
        {
            name: "Meatlug",
            image: "Images/Fanart/Meatlug_Offical.jpg"
        },
        {
            name: "Hookfang",
            image: "Images/Fanart/Hookfang_Offical.jpg"
        }
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const d = { ...dragon };
        switch (e.currentTarget.name) {
            case "name": d.name = e.currentTarget.value; break;
            case "species": d.species = e.currentTarget.value; break;
            case "class": d.class = e.currentTarget.value; break;
            case "rider": d.rider = e.currentTarget.value; break;
            case "fireType": d.fireType = e.currentTarget.value; break;
            case "size": d.size = e.currentTarget.value; break;
            case "speed": d.speed = e.currentTarget.value; break;
            case "attack": d.attack = e.currentTarget.value; break;
            case "defense": d.defense = e.currentTarget.value; break;
            case "imageSelection": d.image = e.currentTarget.value; break;
        }
        setDragon(d);
    };

    const handleSave = async () => {
        await fetch("http://localhost:8080/dragons/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dragon)
        });
    };

    const handleDelete = async () => {
        await fetch("http://localhost:8080/dragons/:id", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dragon)
        });
    };

    return <>
        <AdminWrapper>

            <Row class="stripeTwo"></Row>

            <form className="text-center formfont my-4">

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Name:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" id="name" required name="name" onChange={handleChange} value={dragon.name} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Species:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" id="species" required name="species" onChange={handleChange} value={dragon.species} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Class:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" id="class" required name="class" onChange={handleChange} value={dragon.class} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Rider:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" id="rider" required name="rider" onChange={handleChange} value={dragon.rider} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Fire Type:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" id="fireType" required name="fireType" onChange={handleChange} value={dragon.fireType} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Size:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="text" id="size" required name="size" onChange={handleChange} value={dragon.size} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Speed:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="number" id="speed" required name="speed" min="1" max="5" onChange={handleChange} value={dragon.speed} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Attack:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="number" id="attack" required name="attack" min="1" max="5" onChange={handleChange} value={dragon.attack} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Defense:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Control type="number" id="defense" required name="defense" min="1" max="5" onChange={handleChange} value={dragon.defense} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row className="justify-content-center mb-4">
                        <Col md={4}>
                            <Form.Label>Image:</Form.Label>
                        </Col>
                        <Col md={8}>
                            <Form.Select id="imageSelection" name="imageSelection" onChange={handleChange} value={dragon.image}>
                                {imageArray.map((p: any, i: number) => (
                                    <option value={p.image}>{p.name}</option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Row>
                </Form.Group>

                <Button type="button" className="mb-4" onClick={handleSave}>Submit</Button>
                <Link to="http://localhost:3000/admin/dragons" className="btn btn-primary mb-4">Cancel</Link>
                <Button type="button" className="mb-4" onClick={handleDelete}>Delete</Button>
            </form>

            <Row class="stripeTwo"></Row>

        </AdminWrapper>
    </>
};