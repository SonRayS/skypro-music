import Header from "../components/headerMenu/headerMenu";
import RightBar from "../components/rightBar/rightBar";
import Selector from "../components/selector/selector";
import TimeScale from "../components/timeScale/timeScaleBar/timeScaleBar";

/* isFavorite */

export default function TracksLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Selector>
                <Header />
                {children}
                <RightBar />
            </Selector>
        </>
    );
}
