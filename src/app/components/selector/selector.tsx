import "../../css/style.css";
import TimeScale from "../timeScale/timeScale";

function Selector({ children }: { children: React.ReactNode }) {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Skypro</title>
            <div className="wrapper">
                <div className="container">
                    <main className="main">{children}</main>
                    <TimeScale />
                    <footer className="footer" />
                </div>
            </div>
        </>
    );
}

export default Selector;
