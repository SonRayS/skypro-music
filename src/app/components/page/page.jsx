import Selector from "../selector/selector.tsx";
import Header from "../headerMenu/headerMenu.tsx";
import Body from "../body/bodyMainComponent/bodyMainComponent.tsx";
import RightBar from "../rightBar/rightBar.tsx";

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
