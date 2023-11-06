import Image from "next/image";

export default function Background() {
  return (
    <Image
      src={"https://wallpaperaccess.com/full/11801.jpg"}
      alt="star wars"
      fill
      className="-z-50 opacity-30 object-cover"
    />
  );
}
