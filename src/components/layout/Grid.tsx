interface GridProps {
  children: any;
  cols?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xl2?: number;
}
export default function Grid(props: GridProps) {
  //grid-col-1 lg:grid-cols-4 sm:grid-cols-2
  return (
    <div
      className={`grid gap-4  w-full grid-cols-${props.cols ?? 1} 
      ${props.sm ? "sm:grid-cols-${props.sm}" : ""}${
        props.md ? "md:grid-cols-${props.md}" : ""
      }
      ${props.lg ? "lg:grid-cols-${props.lg}" : ""}
      ${props.xl ? "xl:grid-cols-${props.xl}" : ""}
      ${props.xl2 ? "2xl:grid-cols-${props.xl2}" : ""}
      `}
    >
      {props.children}
    </div>
  );
}
