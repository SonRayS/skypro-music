import Header from "../components/headerMenu/headerMenu";
import RightBar from "../components/rightBar/rightBar";
import Selector from "../components/selector/selector";

/* isMain */

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
