import Circulo from "@/components/basicos/Circulo";

export default function circulos() {
  return (
    <div className="flex  items-center justify-around h-screen">
      <Circulo text="student" />
      <Circulo text="audience" />
      <Circulo text="saved" quasePerfeito />
      <Circulo text="more" quasePerfeito={true} />
    </div>
  );
}
