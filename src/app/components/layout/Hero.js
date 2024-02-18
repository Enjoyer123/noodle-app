import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">Lorem <span className="text-red-800">Ipsum</span></h1>
        <p className="my-6 text-gray-500 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>


      <div className="flex gap-4 text-sm">
        <button className="bg-red-800 uppercase flex items-center text-white px-8 py-2 rounded-full">Order now</button>
        <button className="flex gap-2 py-2 text-gray-500">Learn more</button>
      </div>
      </div>
      <div className="relative">
        <Image src="/kapaw.jpg" layout="fill" objectFit="contain" alt="kapaw" />
      </div>
    </section>
  );
}
