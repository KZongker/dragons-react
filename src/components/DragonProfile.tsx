import { Col, Container, Row } from "react-bootstrap"

interface Props {
    dragon: {
        name: string,
        species: string,
        class: string,
        rider: string,
        fireType: string,
        size: number,
        speed: number,
        attack: number,
        defense: number,
        image: string
    },
    index: number
}

export const DragonProfile = (props: Props) => {

    return <>
        <div className="dragons mb-4">
            <Row className="justify-content-center my-4">
                <Col md={12} className="text-center">
                    <h2>{props.dragon.name}</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={6} className=" text-center">
                    <img src={`${props.dragon.image}`} alt={`${props.dragon.name}`} className="flipped" />
                </Col>
                <Col md={6} className="text-center">
                    <p className="my-4">Species: {props.dragon.species}</p>
                    <p className="mb-4">Class: {props.dragon.class}</p>
                    <p className="mb-4">Rider: {props.dragon.rider}</p>
                    <p className="mb-4">Fire Type: {props.dragon.fireType}</p>
                    <p className="mb-4">Size: {props.dragon.size}</p>
                    <p className="mb-4">Speed: {props.dragon.speed}/5</p>
                    <p className="mb-4">Attack: {props.dragon.attack}/5</p>
                    <p>Defense: {props.dragon.defense}/5</p>
                </Col>
            </Row>
        </div>
        <Row className="stripe" />
    </>
}