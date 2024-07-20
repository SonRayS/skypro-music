import Header from "../headerMenu/headerMenu";
import Body from "../body/bodyMainComponent/bodyMainComponent";
import RightBar from "../rightBar/rightBar";
import Selector from "../selector/selector";

export default function MyPlatList() {
    return (
        <>
            <Selector>
                <Header />
                <Body />
                <RightBar />
            </Selector>
        </>
    );
}
