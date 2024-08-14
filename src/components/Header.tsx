import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
    return <>
    <div className="header">Dragon Practice Website</div>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Nav>
                <Nav.Link href="index.html">Homepage</Nav.Link>
                <Nav.Link href="Humans.html">Human Characters</Nav.Link>
                <Nav.Link href="DragonChars.html">Dragon Characters</Nav.Link>
                <Nav.Link href="DragonSurvey.html">Survey</Nav.Link>
                <Nav.Link href="FanGallery.html">Fan Art</Nav.Link>
                <Nav.Link href="GamePage.html">Game</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </>
};