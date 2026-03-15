export default function Card(props) {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={props.Image}
          alt={props.Title}
          className="rounded-xl w-full h-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{props.Title}</h2>
        <p>
          {props.Content}
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">More Info</button>
        </div>
      </div>
    </div>
  );
}
