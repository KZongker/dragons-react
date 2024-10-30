import { Col, Container, Row } from "react-bootstrap";
import { SiteWrapper } from "./SiteWrapper";
import { Link } from "react-router-dom";

interface Props {
    children: React.ReactNode[] | React.ReactNode
}
export const AdminWrapper = (props: Props) => {
    return <>
        <SiteWrapper>
            <Container fluid className="content">
                <Row>
                    <Col md={2}> <ul>
                        <li><Link to="/admin/humans">Edit Humans</Link></li>
                        <li><Link to="/admin/dragons">Edit Dragons</Link></li>
                    </ul></Col>
                    <Col md={10}>
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </ SiteWrapper>
    </>
};