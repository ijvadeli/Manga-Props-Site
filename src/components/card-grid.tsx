import Card from "./ui/card";

export default function CardGrid() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            Latest Songs
          </li>

          <li className="list-row">
            <Card Image="./images/yes.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/yes.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/yes.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/yes.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/yes.png" Title="Roundabout" Artist="Yes" />
          </li>
        </ul>
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            Trending Songs
          </li>

          <li className="list-row">
            <Card Image="./images/yes.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/yes.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/yes.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/yes.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/yes.png" Title="Roundabout" Artist="Yes" />
          </li>
        </ul>
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            Recently Played
          </li>

          <li className="list-row">
            <Card Image="./images/yes.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/yes.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/yes.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/yes.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/yes.png" Title="Roundabout" Artist="Yes" />
          </li>
        </ul>
      </div>
    </main>
  );
}
