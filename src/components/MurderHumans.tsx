import { useEffect, useState } from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";


interface Props {
    customHumans: any[],
    setCustomHumans: (human: any) => void
}

export const MurderHumans = (props: Props) => {
    const [noDelete, setNoDelete] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(0);

    const murder = () => {
        const deletelist = [...props.customHumans];
        props.customHumans.length < 1 ? setNoDelete(true) : deletelist.splice(deleteIndex, 1);
        setDeleteIndex(0);
        props.setCustomHumans(deletelist);
        localStorage.removeItem("customHumans");
        localStorage.setItem("customHumans", JSON.stringify(deletelist));
    };

    return <>
        <Row className="justify-content-center">
            <Col>
                <Col lg={12} id="deleteAlert">
                    {noDelete &&
                        <Alert variant="warning" className="text-center" dismissible onClose={() => { setNoDelete(false) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-diamond" viewBox="0 0 16 16">
                                <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                            </svg>
                            Nobody to delete!
                        </Alert>
                    }
                </Col>

                <form className="text-center formfont">
                    <Form.Group>
                        <Form.Label className="mb-2">Would you like to delete an added viking?</Form.Label>
                        <Row className="justify-content-center mb-4">
                            <Col md={6}>
                                <Form.Select id="deleteBox" value={deleteIndex} onChange={(e) => { setDeleteIndex(parseInt(e.currentTarget.value)) }}>
                                    {props.customHumans.map((d: any, i: number) => (
                                        <option value={i}>{d.name}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Row>
                    </Form.Group>
                    <button type="button" id="removeHumanBtn" className="mb-4" onClick={murder} >Delete</button>
                </form>
            </Col>
        </Row>
    </>
};