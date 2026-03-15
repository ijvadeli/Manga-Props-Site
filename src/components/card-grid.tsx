import Card from "./ui/card";

export default function CardGrid() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            Most played songs this week
          </li>

          <li className="list-row">
            <Card Image="./images/sbr.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/sbr.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/sbr.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/sbr.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/sbr.png" Title="Roundabout" Artist="Yes" />
          </li>
        </ul>
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            Most played songs this week
          </li>

          <li className="list-row">
            <Card Image="./images/sbr.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/sbr.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/sbr.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/sbr.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/sbr.png" Title="Roundabout" Artist="Yes" />
          </li>
        </ul>
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            Most played songs this week
          </li>

          <li className="list-row">
            <Card Image="./images/sbr.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/sbr.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/sbr.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/sbr.png" Title="Roundabout" Artist="Yes" />
          </li>
          <li className="list-row">
            <Card Image="./images/sbr.png" Title="Roundabout" Artist="Yes" />
          </li>
        </ul>
      </div>
    </main>
  );
}
