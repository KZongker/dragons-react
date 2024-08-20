import { HumanCard } from "./components/HumanCard";
import { SiteWrapper } from "./components/SiteWrapper";

export const Humans = () => {
    const hiccup = {
        name: "Hiccup Horrendous Haddock III",
        dragon: "Toothless",
        age: "15/20/21",
        bravery: 4,
        intelligence: 5,
        speed: 5,
        attack: 2,
        defense: 3,
        image: "Images/Fanart/Hiccup.jpg",
        color: "black"
    }
    return <>
        <SiteWrapper>
            <p>Humans Page</p>
            <HumanCard human={hiccup} index={0}></HumanCard>
        </SiteWrapper>
    </>
};