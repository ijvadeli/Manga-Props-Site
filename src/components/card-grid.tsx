import Card from "./ui/card";

export default function CardGrid() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card Image="./images/pb.png" Title="JoJo's Bizarre Adventure: Phantom Blood" Content="JoJo's Bizarre Adventure Part 1" />
        <Card Image="./images/bt.png" Title="JoJo's Bizarre Adventure: Battle Tendency" Content="JoJo's Bizarre Adventure Part 2" />
        <Card Image="./images/sc.png" Title="JoJo's Bizarre Adventure: Stardust Crusaders" Content="JoJo's Bizarre Adventure Part 3" />
        <Card Image="./images/diu.png" Title="JoJo's Bizarre Adventure: Diamond Is Unbreakable" Content="JoJo's Bizarre Adventure Part 4" />
        <Card Image="./images/gw.png" Title="JoJo's Bizarre Adventure: Golden Wind" Content="JoJo's Bizarre Adventure Part 5" />
        <Card Image="./images/so.png" Title="JoJo's Bizarre Adventure: Stone Ocean" Content="JoJo's Bizarre Adventure Part 6" />
        <Card Image="./images/sbr.png" Title="JoJo's Bizarre Adventure: Steel Ball Run" Content="JoJo's Bizarre Adventure Part 7" />
        </main>
    )
}