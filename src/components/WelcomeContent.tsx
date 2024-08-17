export const WelcomeContent = () => {
    return <>
        <div className="info">
            <h1>Welcome to my HTTYD Information Catalog!</h1>
            <p> My name is Katrina Zongker, and the purpose of this site is to allow me to practice coding.</p>
        </div>

        <div id="music3">
            <p>Here's a dumb rap my dad had AI create about this site:</p> 
            <audio controls>
                <source src="Audio/dragons.mp3" />
            </audio>
        </div>

        <div id="intro">
            <p>If you've found this page, then you've stumbled upon my practice website. It isn't meant to be super professional as it just exists so that I can learn and practice different things and add code as I see fit. So, the likelihood of this page looking like it's from 2005 for a while are pretty high, but I appreciate your visit. Feel free to take a look around to see my progress!</p>

            <p>That said, the majority of the content here is going to be based on my childhood favorite movie trilogy, How to Train Your Dragon. Please do not take any of it too seriously, and I do not claim to own the series, characters, music, nor anything else within the franchise. Those all belong to Dreamworks, please visit their offical site for the series here: <a href="https://www.dreamworks.com/how-to-train-your-dragon" id="welLink">HTTYD Dreamworks Site!</a></p>

            <p id="thanks">&#x2606;Thanks for stopping by!&#x2606;</p>
        </div>
    </>
};