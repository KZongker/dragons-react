export const GalleryContents = () => {
    return <>
        <div className="info">
            <h1>Fanart Gallery!!</h1>
            <p>Feel free to look at some lovely art by the fans of HTTYD!</p>
        </div>

        <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container text-center item">
                        <img src="Images/Fanart/furylove.jpg" className="img-fluid" alt="Night Fury and Light Fury" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/BestFriends.jpg" className="img-fluid" alt="Hiccup and Toothless" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/toothfish.jpg" className="img-fluid" alt="Toothless with a fish" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/BestFriends2.png" className="img-fluid" alt="Valka and Cloudjumper" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/BestFriends3.jpg" className="img-fluid" alt="Hiccup and Toothless again" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/Hicstrid.jpg" className="img-fluid" alt="Hiccup and Astrid" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/ColorVariants.jpg" className="img-fluid" alt="Colorful Dragon Variations" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/RuffnTuff.jpg" className="img-fluid" alt="Ruffnut, Tuffnut, Barf, and Belch" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/hobgobbler.png" className="img-fluid" alt="Gobber and a Hobgobbler" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/Hiccup.jpg" className="img-fluid" alt="Hiccup" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/astrid.jpg" className="img-fluid" alt="Hiccup" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/Thorstons.jpg" className="img-fluid" alt="Hiccup" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/ruffnut.jpg" className="img-fluid" alt="Ruffnut" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/fishlegsig.jpg" className="img-fluid" alt="Hiccup" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/Snotloutig.jpg" className="img-fluid" alt="Hiccup" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/Toothless_Offical.jpg" className="img-fluid" alt="Hiccup" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/Stormfly_Offical.jpg" className="img-fluid" alt="Hiccup" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/Barf_and_Belch_Offical.jpg" className="img-fluid" alt="Hiccup" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/Meatlug_Offical.jpg" className="img-fluid" alt="Hiccup" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/Hookfang_Offical.jpg" className="img-fluid" alt="Hiccup" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container text-center item">
                        <img src="Images/Fanart/Nightlights1.jpg" className="img-fluid" alt="Three Nightlights" />
                    </div>
                </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
};