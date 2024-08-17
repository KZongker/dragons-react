import { Col, Container, Row } from "react-bootstrap";
import { SiteWrapper } from "./components/SiteWrapper";

export const Dragons = () => {
    return <>
        <SiteWrapper>
            <div className="info">
                <h1>Dragon Characters</h1>
                <p>Everything you need to know about the dragons of Berk!</p>
            </div>

            <Container>
                <div className="dragons mb-4">
                    <Row className="justify-content-center my-4">
                        <Col md={12} className="text-center">
                            <h2>Toothless</h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={6} className=" text-center">
                            <img src="Images/Fanart/Toothless_Offical.jpg" alt="Toothless" className="flipped" />
                        </Col>
                        <Col md={6} className="text-center">
                            <p className="my-4">Species: Night Fury</p>
                            <p className="mb-4">Class: Striker</p>
                            <p className="mb-4">Rider: Hiccup Horrendous Haddock III</p>
                            <p className="mb-4">Skills: Echolocation, Quick Speed, Camouflage</p>
                            <p>Weaknesses: Eels, Broken Tail, Small Size</p>
                        </Col>
                    </Row>
                </div>
                <Row className="stripe" />

                <div className="dragons2 mb-4">
                    <Row className="justify-content-center my-4">
                        <Col md={12} className="text-center">
                            <h2>Stormfly</h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={6} className="text-center">
                            <img src="Images/Fanart/Stormfly_Offical.jpg" alt="Stormfly" />
                        </Col>
                        <Col md={6} className="text-center">
                            <p className="my-4">Species: Deadly Nadder</p>
                            <p className="mb-4">Class: Sharp/Tracker</p>
                            <p className="mb-4">Rider: Astrid</p>
                            <p className="mb-4">Skills: Hot Fire, Spike Shooting, Mild Venom</p>
                            <p>Weaknesses: Eels, Playful Nature, Blind Spot</p>
                        </Col>
                    </Row>
                </div>
                <Row className="stripe" />

                <div className="dragons mb-4">
                    <Row className="justify-content-center my-4">
                        <Col md={12} className="text-center">
                            <h2>Barf and Belch</h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={6} className="text-center">
                            <img src="Images/Fanart/Barf_and_Belch_Offical.jpg" alt="Barf and Belch" />
                        </Col>
                        <Col md={6} className="text-center">
                            <p className="my-4">Species: Hiddeous Zippleback</p>
                            <p className="mb-4">Class: Mystery</p>
                            <p className="mb-4">Rider: Ruffnut (Barf), Tuffnut (Belch)</p>
                            <p className="mb-4">Skills: Two Headed, Breathes Gas, Great Teamwork</p>
                            <p>Weaknesses: Eels, Fighting Riders, Slower Speed</p>
                        </Col>
                    </Row>
                </div>
                <Row className="stripe" />

                <div className="dragons2 mb-4">
                    <Row className="justify-content-center my-4">
                        <Col md={12} className="text-center">
                            <h2>Meatlug</h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={6} className="text-center">
                            <img src="Images/Fanart/Meatlug_Offical.jpg" alt="Meatlug" className="flipped" />
                        </Col>
                        <Col md={6} className="text-center">
                            <p className="my-4">Species: Gronckle</p>
                            <p className="mb-4">Class: Boulder</p>
                            <p className="mb-4">Rider: Fishlegs</p>
                            <p className="mb-4">Skills: Tough Skin, Hovering, Melts Rocks Easily</p>
                            <p>Weaknesses: Eels, Slower Speed, Sensitive</p>
                        </Col>
                    </Row>
                </div>
                <Row className="stripe" />

                <div className="dragons mb-4">
                    <Row className="justify-content-center my-4">
                        <Col md={12} className="text-center">
                            <h2>Hookfang</h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={6} className="text-center">
                            <img src="Images/Fanart/Hookfang_Offical.jpg" alt="Hookfang" />
                        </Col>
                        <Col md={6} className="text-center">
                            <p className="my-4">Species: Monstrous Nightmare</p>
                            <p className="mb-4">Class: Stoker</p>
                            <p className="mb-4">Rider: Snotlout</p>
                            <p className="mb-4">Skills: Light Self On Fire, Strong, Quick Speed</p>
                            <p>Weaknesses: Eels, Pride, Easily Overuses Fire</p>
                        </Col>
                    </Row>
                </div>
                <Row className="stripeTwo" />
            </Container>
        </SiteWrapper>
    </>
};