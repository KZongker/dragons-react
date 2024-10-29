import { AddHumans } from "./AddHumans";

export const HumansAdminContent = () => {
    return <>
        <AddHumans customHumans={[]} setCustomHumans={function (human: any): void {
            throw new Error("Function not implemented.");
        }} />
    </>
};