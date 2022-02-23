import FavoritesList from "../components/FavoritesList";

export default function Favorites(){
    return (
        <main className="container mx-auto px-7 h-screen">
            <h1 className="text-3xl font-bold text-center pt-5">Liste de vos favoris</h1>
            <FavoritesList />
        </main>
    );
}