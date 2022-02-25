import FavoritesList from "../components/FavoritesList";

export default function Favorites(){
    return (
        <main className="container mx-auto px-4 h-screen max-w-[640px]">
            <h1 className="text-2xl font-bold text-center py-4">Liste de vos favoris</h1>
            <FavoritesList />
        </main>
    );
}