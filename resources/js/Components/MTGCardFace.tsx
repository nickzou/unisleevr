import { mtgImgSrc } from '../types/mtg';

type cardFaceDataType = {
    imgSrc: mtgImgSrc;
    name: string;
    cardSuperType: string[];
    cardType?: string[];
    colorIdentity?: string;
    power?: string;
    toughness?: string;
    manaCost?: string[];
    oracle_text: string;
    setBrokenImage: (value: boolean) => void;
    brokenImage: boolean;
};

const MTGCardFace = ({
    imgSrc,
    name,
    cardSuperType,
    cardType,
    power,
    toughness,
    manaCost,
    oracle_text,
    setBrokenImage,
    brokenImage,
}: cardFaceDataType) => (
    <>
        {!brokenImage && (
            <figure className="relative">
                <img
                    className="w-full rounded-[6%]"
                    src={imgSrc.png}
                    alt={name}
                    onError={() => {
                        setBrokenImage(true);
                    }}
                />
            </figure>
        )}

        <div className="card-body absolute top-0 w-full p-0">
            <div
                className={`card-body-text w-full ${!brokenImage && 'opacity-0'} flex aspect-[2.5/3.5] flex-col justify-between bg-slate-800 p-4`}
            >
                <div className="w-full">
                    <div className="mb-2 flex w-full justify-between align-baseline">
                        <div>
                            <h3 className="card-name">{name}</h3>
                        </div>
                        <div>
                            {manaCost && (
                                <span className="mana-cost">
                                    {manaCost.map(
                                        (manaSymbol: string) =>
                                            ` ${manaSymbol}`,
                                    )}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="mb-2">
                            {cardSuperType &&
                                cardSuperType.length > 0 &&
                                cardSuperType.map(
                                    (superType: string, index: number) => (
                                        <span key={index}>{superType} </span>
                                    ),
                                )}

                            {cardType &&
                                cardType.length > 0 &&
                                `-${cardType.map(
                                    (cardType: string) => ` ${cardType}`,
                                )}`}
                        </p>
                    </div>
                </div>

                <div className="flex min-h-[80%] w-full flex-col justify-between">
                    <div>
                        <p>{oracle_text}</p>
                    </div>

                    {(power || toughness) && (
                        <div className="mt-2 flex w-full justify-end">
                            <span>{`${power}/${toughness}`}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>
);

export default MTGCardFace;
