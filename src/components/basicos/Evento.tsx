export default function Evento() {
  let counter = 0;
  function counterIncrement() {
    console.log(counter++);
  }

  return (
    <button
      className="w-72 h-72 bg-blue-400 flex justify-center items-center text-4xl rounded-3xl"
      onClick={counterIncrement}
    >
      Evento
    </button>
  );
}
