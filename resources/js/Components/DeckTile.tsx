import { Dispatch, SetStateAction } from "react";
import { Deck } from "@/types/deck";

type DeckTileProps = {
 title: string;
 deck: Deck;
 activeSetter: Dispatch<SetStateAction<null | Deck>>;
};
const DeckTile = ({title, deck, activeSetter}:DeckTileProps) => {
    return (
        <div className="border flex flex-col rounded-md border-solid border-slate-600">
            <div className="p-4  gap-4">
                <h4 className="text-md">
                    {title}
                </h4>
            </div>
            <button className="flex border-t border-solid hover:bg-slate-800 border-slate-600 justify-center duration-150 transition-bg items-center p-4" onClick={()=>activeSetter(deck)}>details</button>
        </div>
    )
}

export default DeckTile;
