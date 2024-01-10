import { Header } from "../components/Header";
import { Presentation } from "../components/Presentation";
import { Promotions } from "../components/Promotions";

export function MainPage(){
    return(
        <div>
            <Header/>
            <Presentation/>
            <Promotions/>
        </div>
    )
}