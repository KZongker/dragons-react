interface Props {
    human: {
        firstName: string,
        middleName: string,
        lastName: string,
        dragon: string,
        age: string,
        bravery: number,
        intelligence: number,
        speed: number,
        attack: number,
        defense: number,
        image: string,
        color: string
    },
    index: number
}
export const HumanCard = (props: Props) => {
    const beStars = (stars: number) => {
        let result = <>&#x2605; &#x2606; &#x2606; &#x2606; &#x2606;</>;
        if (stars == 2) result = <>&#x2605; &#x2605; &#x2606; &#x2606; &#x2606;</>;
        if (stars == 3) result = <>&#x2605; &#x2605; &#x2605; &#x2606; &#x2606;</>;
        if (stars == 4) result = <>&#x2605; &#x2605; &#x2605; &#x2605; &#x2606;</>;
        if (stars == 5) result = <>&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</>;

        return result;
    }

    const getStats = () => {
        return <table className="starstats">
            <tr><td>Bravery: </td><td> {beStars(props.human.bravery)} </td></tr>
            <tr><td>Intelligence: </td><td> {beStars(props.human.intelligence)} </td></tr>
            <tr><td>Speed: </td><td> {beStars(props.human.speed)} </td></tr>
            <tr><td>Attack: </td><td> {beStars(props.human.attack)} </td></tr>
            <tr><td>Defense: </td><td> {beStars(props.human.defense)} </td></tr>
        </table>
    }

    return <>
        <div className={"humanCard " + props.human.color} id={"humanCard" + props.index}>
            <div className="humanCardhead" id={"humanCard" + props.index + "head"}>
                <h3>{props.human.firstName} {props.human.middleName} {props.human.lastName}</h3>
            </div>
            <div className="cardcont">
                <img src={props.human.image} />
                <p><span className="bold">Dragon: </span> {props.human.dragon}</p>
                <p><span className="bold">Age: </span> {props.human.age}</p><br />
                {getStats()}
            </div>
        </div>
    </>
};