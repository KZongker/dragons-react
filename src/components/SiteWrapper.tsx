import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "react-bootstrap";

interface Props {
    children: React.ReactNode[] | React.ReactNode
}
export const SiteWrapper = (props: Props) => {
    return <>
        <Header />
        <Container fluid className="content text-center">{props.children}</Container>
        <Footer />
    </>
};