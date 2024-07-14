import Selector from "../selector/selector";
import Header from "../headerMenu/headerMenu";
import Body from "../body/bodyMainComponent/bodyMainComponent";
import RightBar from "../rightBar/rightBar";
import RootLayout from "@/app/layout";

function MainPage() {
    return (
        <RootLayout>
            <Selector>
                <Header />
                <Body />
                <RightBar />
            </Selector>
        </RootLayout>
    );
}

export default MainPage;
