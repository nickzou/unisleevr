import DeckTile from '@/Components/DeckTile';
import Input from '@/Components/Input';
import PageTitle from '@/Components/PageTitle';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

type Deck = {
    id: number;
    name: string;
};

type DecksProps = {
    decks: {
        data: Deck[];
        current_page: number;
        last_page: number;
        total: number;
    };
};

export default function Decks({ decks }: DecksProps) {
    const [isCreating, setIsCreating] = useState(false);
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
    });

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(route('decks.store'), { onSuccess: () => reset() });
    };
    return (
        <AuthenticatedLayout header={<PageTitle>Decks</PageTitle>}>
            <div className="container mx-auto px-3 py-4">
                <div>
                    {!isCreating && (
                        <button
                            onClick={() => {
                                setIsCreating(!isCreating);
                            }}
                            className={
                                'btn bg-lg rounded-md border border-solid border-slate-600 px-3 py-2'
                            }
                        >
                            Create a deck
                        </button>
                    )}
                </div>
                {isCreating && (
                    <div>
                        <form
                            onSubmit={onSubmit}
                            className="my-4 flex flex-col items-end justify-center gap-4"
                        >
                            <Input
                                type="text"
                                value={data.name}
                                placeholder="Name Your Deck"
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                            />
                            <div
                                className={'inline-flex gap-4'}
                                onClick={() => {
                                    setIsCreating(false);
                                }}
                            >
                                <button
                                    className={
                                        'btn bg-lg rounded-md border border-solid border-slate-600 px-3 py-2'
                                    }
                                >
                                    Cancel
                                </button>
                                <button
                                    className={
                                        'btn bg-lg rounded-md border border-solid border-slate-600 px-3 py-2'
                                    }
                                >
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
            <div className="container mx-auto px-3 py-4">
                {/* {decks.data.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
                        {decks.data.map((deck, idx) => (
                            <DeckTile key={idx} title={deck.name} />
                        ))}
                    </div>
                ) : (
                    <div>No decks found.</div>
                )} */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                    <DeckTile title={'Test Deck Alpha'} />
                    <DeckTile title={"Gishath Sun's Avatar"} />
                    <DeckTile title={'Animar Soul of Elements'} />
                    <DeckTile title={'Torbrand'} />
                    <DeckTile title={'Burn'} />
                    <DeckTile title={"Chandra's Pyrohelix"} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
