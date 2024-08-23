import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
    return <>
        <div className="header">Dragon Practice Website</div>
        <Navbar sticky="top" bg="dark" data-bs-theme="dark">
            <Container className="justify-content-evenly">
                <Nav>
                    <Nav.Link href="/" className="navlinks">Homepage</Nav.Link>
                    <Nav.Link href="/humans" className="navlinks">Human Characters</Nav.Link>
                    <Nav.Link href="/dragons" className="navlinks">Dragon Characters</Nav.Link>
                    <Nav.Link href="/survey" className="navlinks">Survey</Nav.Link>
                    <Nav.Link href="/gallery" className="navlinks">Fan Art</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
};