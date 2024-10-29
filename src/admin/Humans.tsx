import { useEffect, useState } from "react";
import { SiteWrapper } from "../components/SiteWrapper"
import { Link } from "react-router-dom";

export const HumansAdmin = () => {
    const [humans, setHumans] = useState<any[]>([]);
    const loadData = async () => {
        const resp = await fetch("http://localhost:8080/humans");
        const data = await resp.json();
        console.log(setHumans(data));
    }

    useEffect(() => {
        loadData()
    }, []);

    return <>
        <SiteWrapper>
            <h1>Admin List lol</h1>
            <ul>
                {humans.map((h) =>
                    <li><Link to={"/admin/humans/" + h.human_id}>{h.first_name} {h.middle_name} {h.last_name}</Link></li>
                )}
            </ul>
        </SiteWrapper>
    </>
};