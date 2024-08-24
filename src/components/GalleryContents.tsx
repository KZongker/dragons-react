import { SetStateAction, useState } from "react";
import { Carousel, Container } from "react-bootstrap";

export const GalleryContents = () => {
    return <>
        <div className="info">
            <h1>Fanart Gallery!!</h1>
            <p>Feel free to look at some lovely art by the fans of HTTYD!</p>
        </div>

        <div id="music">
            <p>I'd like music while I enjoy art:</p>
            <audio controls>
                <source src="Audio/Piano Lullaby No. 9 cutted.mp3" />
            </audio>
        </div>

        <Carousel id="imageCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-theme="dark">
            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/furylove.jpg" className="img-fluid" alt="Night Fury and Light Fury" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/BestFriends.jpg" className="img-fluid" alt="Hiccup and Toothless" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/toothfish.jpg" className="img-fluid" alt="Toothless with a fish" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/BestFriends2.png" className="img-fluid" alt="Valka and Cloudjumper" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/BestFriends3.jpg" className="img-fluid" alt="Hiccup and Toothless again" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/Hicstrid.jpg" className="img-fluid" alt="Hiccup and Astrid" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/ColorVariants.jpg" className="img-fluid" alt="Colorful Dragon Variations" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/RuffnTuff.jpg" className="img-fluid" alt="Ruffnut, Tuffnut, Barf, and Belch" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/hobgobbler.png" className="img-fluid" alt="Gobber and a Hobgobbler" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/Hiccup.jpg" className="img-fluid" alt="Hiccup" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/astrid.jpg" className="img-fluid" alt="Hiccup" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/Thorstons.jpg" className="img-fluid" alt="Hiccup" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/ruffnut.jpg" className="img-fluid" alt="Ruffnut" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/fishlegsig.jpg" className="img-fluid" alt="Hiccup" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/Snotloutig.jpg" className="img-fluid" alt="Hiccup" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/Toothless_Offical.jpg" className="img-fluid" alt="Hiccup" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/Stormfly_Offical.jpg" className="img-fluid" alt="Hiccup" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/Barf_and_Belch_Offical.jpg" className="img-fluid" alt="Hiccup" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/Meatlug_Offical.jpg" className="img-fluid" alt="Hiccup" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/Hookfang_Offical.jpg" className="img-fluid" alt="Hiccup" />
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="text-center item">
                    <img src="Images/Fanart/Nightlights1.jpg" className="img-fluid" alt="Three Nightlights" />
                </Container>
            </Carousel.Item>
        </Carousel>
    </>
};