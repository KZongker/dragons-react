import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
    return <>
        <div className="header">Dragon Practice Website</div>
        <Navbar sticky="top" bg="dark" data-bs-theme="dark">
            <Container className="justify-content-evenly">
                <Nav>
                    <Nav.Link href="index.html" className="navlinks">Homepage</Nav.Link>
                    <Nav.Link href="Humans.html" className="navlinks">Human Characters</Nav.Link>
                    <Nav.Link href="DragonChars.html" className="navlinks">Dragon Characters</Nav.Link>
                    <Nav.Link href="DragonSurvey.html" className="navlinks">Survey</Nav.Link>
                    <Nav.Link href="FanGallery.html" className="navlinks">Fan Art</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
};