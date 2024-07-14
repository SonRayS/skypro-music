import MainPage from "./components/page/page";
import LoginPage from "./components/login/login";
import { useAppSelector } from "@/hooks";

function Home() {
    const statusAuth = useAppSelector((state) => state.authReducer.goAuth);

    function setPage() {
        return <>{statusAuth ? <LoginPage /> : <MainPage />}</>;
    }
    return setPage();
}

export default Home;
