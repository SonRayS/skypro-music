"use client";

import Image from "next/image";
import Header from "../headerMenu/headerMenu";
import RightBar from "../rightBar/rightBar";
import Selector from "../selector/selector";
import gifLoading from "./NsNE.gif";

function MainPage() {
    return (
        <>
            <Selector>
                <Header />
                <RightBar />
                <Image src={gifLoading} alt="loading..." />
            </Selector>
        </>
    );
}

export default MainPage;
