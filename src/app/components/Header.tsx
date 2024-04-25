import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div>
        <Image
          src="/logo_uredeni_trans.png"
          height="100"
          width="400"
          alt="GFG logo served from external URL"
        />
      </div>
    </header>
  );
}
