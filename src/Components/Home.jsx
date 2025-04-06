import { AuthContext } from "../Context/AuthContext";
import WelcomeWidget from "./WelcomeWidget"
import { useContext } from "react";

export default function Home() {
    const {logout} = useContext(AuthContext)
    return (
        <>
            <h1>Your at Home!</h1>
            <WelcomeWidget />
            <button onClick={logout}></button>
        </>
    );
}