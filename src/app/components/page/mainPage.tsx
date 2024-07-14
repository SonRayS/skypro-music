import Selector from "../selector/selector";
import Header from "../headerMenu/headerMenu";
import Body from "../body/bodyMainComponent/bodyMainComponent";
import RightBar from "../rightBar/rightBar";

function MainPage() {
    return (
        <Selector>
            <Header />
            <Body />
            <RightBar />
        </Selector>
    );
}

export default MainPage;
