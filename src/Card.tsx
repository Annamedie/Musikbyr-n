interface CardProps {
  instrumentPic: string;
  instrumentName: string;
}
function Card(props: CardProps) {
  return (
    <div className="p-4 m-6 border-4 rounded-lg shadow-2xl border-cyan-900 text-center max-w-72 bg-slate-400">
      <img
        className="mx-auto mb-7 rounded-lg"
        src={props.instrumentPic}
        alt=""
      />
      <h3 className="text-lg font-medium">{props.instrumentName}</h3>
    </div>
  );
}
export default Card;
