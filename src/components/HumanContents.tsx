import { Col, Container, Row } from "react-bootstrap";

export const HumanContents = () => {
    return <>
        <Row className="justify-content-center">

            <Col lg={8} id="fightAlert"  /* style="display: none" */>
                <div className="alert alert-warning alert-dimissible fade show text-center" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-diamond" viewBox="0 0 16 16">
                        <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                    </svg>
                    Viking Cannot Fight Themself!
                    <button type="button" className="btn-close" /* onclick="hideBoxTwo();" */ aria-label="Close"></button>
                </div>
            </Col>

            <Col lg={8}>

                <form className="text-center formfont">
                    <Row>
                        <label /* for="battlerOne" */ className="form-label">Please choose your fighters:</label><br />
                        <label /* for="battlerTwo" */ className="form-label"></label>
                        <Col sm={6}>
                            <select id="battlerOne" className="form-select">
                            </select>
                        </Col>
                        <Col sm={6}>
                            <select id="battlerTwo" className="form-select">
                            </select><br />
                        </Col>
                    </Row>
                    <button type="button" id="fightButton" /* onclick="doBattle();" */ className="mb-2">Fight!</button>
                    <p id="battleWinner">The Winner is: </p><br />
                </form>

                <Container id="alertBox" /* style="display: none" */>
                    <div className="alert alert-primary alert-dismissible fade show text-center" role="alert">
                        Please ignore this alert box!
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                        </svg>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </Container>

                <form id="addVikings" className="text-center formfont">
                    <p>Want to add your own viking? Fill out the form below and test them in battle!</p>

                    <Row className="my-4">
                        <Col md={4}>
                            <label /* for="fullName" */ className="form-label">Viking Name:</label>
                        </Col>
                        <Col md={8}>
                            <input type="text" id="fullName" className="form-control" /* maxlength="50" */ required />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={4}>
                            <label /* for="dragonName"  maxlength="50" */ className="form-label">Dragon Name:</label>
                        </Col>
                        <Col md={8}>
                            <input type="text" id="dragonName" className="form-control" required />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={4}>
                            <label /* for="vikingAge" */ className="form-label">Viking Age (first movie):</label>
                        </Col>
                        <Col md={4}>
                            <input type="number" className="form-control" id="vikingAge" min="1" max="114" required />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={4}>
                            <label /* for="brave" */ className="form-label">Bravery:</label>
                        </Col>
                        <Col md={4}>
                            <input type="number" id="brave" className="form-control" min="1" max="5" required />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={4}>
                            <label /* for="smart" */ className="form-label">Intelligence:</label>
                        </Col>
                        <Col md={4}>
                            <input type="number" id="smart" className="form-control" min="1" max="5" required />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={4}>
                            <label /* for="fast" */ className="form-label">Speed:</label>
                        </Col>
                        <Col md={4}>
                            <input type="number" id="fast" className="form-control" min="1" max="5" required />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={4}>
                            <label /* for="punch" */ className="form-label">Attack:</label>
                        </Col>
                        <Col md={4}>
                            <input type="number" id="punch" className="form-control" min="1" max="5" required />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={4}>
                            <label /* for="block" */ className="form-label">Defense:</label>
                        </Col>
                        <Col md={4}>
                            <input type="number" id="block" className="form-control" min="1" max="5" required />
                        </Col>
                    </Row>

                    <label /* for="colorSelection" */ className="form-label mb-2">What color card would you like?</label>
                    <Row className="justify-content-center mb-4">
                        <Col md={6}>
                            <select id="colorSelection" className="form-select">
                            </select>
                        </Col>
                    </Row>

                    <label /* for="imageSelection" */ className="form-label mb-2">Which image would you like?</label>
                    <Row className="justify-content-center mb-4">
                        <Col md={6}>
                            <select id="imageSelection" className="form-select">
                            </select>
                        </Col>
                    </Row>

                    <button type="button" id="addHumanBtn" className="mb-4" /* onclick="requireHuman();" */>Submit</button>
                </form>

                <Col lg={12} id="deleteAlert" /* style="display: none" */>
                    <div className="alert alert-warning alert-dimissible fade show text-center" role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-diamond" viewBox="0 0 16 16">
                            <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                        </svg>
                        Nobody to delete!
                        <button type="button" className="btn-close" /* onclick="hideBoxThree();" */ aria-label="Close"></button>
                    </div>
                </Col>

                <form className="text-center formfont">
                    <label /* for="deleteBox" */ className="form-label mb-2">Would you like to delete an added viking?</label>
                    <Row className="justify-content-center mb-4">
                        <Col md={6}>
                            <select id="deleteBox" className="form-select">
                            </select>
                        </Col>
                    </Row>
                    <button type="button" id="removeHumanBtn" className="mb-4" /* onclick="murder();" */>Delete</button>
                </form>
            </Col>

        </Row>
    </>
};