import DeckTile from '@/Components/DeckTile';
import PageTitle from '@/Components/PageTitle';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import { FormEvent, useState } from 'react';
import Input from '@/Components/Input';
import Modal from '@/Components/Modal';

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
}

export default function Decks({decks}:DecksProps) {
    const [isCreating, setIsCreating] = useState(false);
    const [activeDeck, setActiveDeck] = useState<null | Deck>(null);
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
    });

    const onSubmit = (e:FormEvent) => {
        e.preventDefault();
        post(route('decks.store'), { onSuccess: () => reset() });
    };
    return (
        <AuthenticatedLayout header={<PageTitle>Decks</PageTitle>}>
            <div className="container mx-auto px-3 py-4">
                <div>
                {!isCreating && <button onClick={()=> {
                        setIsCreating(!isCreating)
                    }} className={'btn bg-lg border border-solid rounded-md px-3 py-2 border-slate-600'}
                    >Create a deck</button>}
                </div>
                {isCreating &&

                    <div>
                        <form onSubmit={onSubmit} className='flex flex-col justify-center items-end gap-4 my-4'>
                            <Input type="text" value={data.name} placeholder="Name Your Deck" onChange={e => setData('name', e.target.value)} />
                            <div className={'inline-flex gap-4'} onClick={()=> {
                                setIsCreating(false)
                            }}>

                            <button className={'btn bg-lg border border-solid rounded-md px-3 py-2 border-slate-600'}>Cancel</button>
                            <button className={'btn bg-lg border border-solid rounded-md px-3 py-2 border-slate-600'}>Create</button>
                            </div>
                        </form>
                    </div>
                }
            </div>
            <div className="container mx-auto px-3 py-4">
                {decks.data.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {decks.data.map((deck, idx) => <DeckTile key={idx} deckId={deck.id} title={deck.name} activeSetter={setActiveDeck} /> )}
                    </div>
                ) : (
                    <div>No decks found.</div>
                )}
            </div>
            <Modal show={activeDeck !== null} onClose={()=>setActiveDeck(null)}>
                <div className='py-6 px-4'>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
