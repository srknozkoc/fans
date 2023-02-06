import Searchbar from "../component/searchbar";
import ExploreFotos from "../component/explore-fotos";

export default function Explore(){
    return(
        <div className={'border px-0.5'}>
            <div className={'py-1'}>
                <Searchbar/>
            </div>
            <div>
                <ExploreFotos/>
            </div>
        </div>
    )
}