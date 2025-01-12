import Image from "next/image";

export default function Header() {
  return (
    <section className="flex justify-between items-center p-4 bg-white">
      <div>
        <Image
          src="/assets/images/whatbytes logo.jpg" // Corrected path
          alt="logo"
          width={40}
          height={40}
          className=""
        />
      </div>

      <div className="border border-gray-300 p-2 rounded-lg flex justify-between gap-2 items-center">
        <Image
          src="/assets/images/Raphil siddique.jpg" // Corrected path
          alt="Raphil Siddique"
          width={30}
          height={30}
          className="rounded-full"
        />
        <p className="font-semibold text-lg">Raphil Siddique</p>
      </div>
    </section>
  );
}
