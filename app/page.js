import Otzyvy from "@/components/sections/Otzyvy/Otzyvy";
import Preimushestva from "@/components/sections/Preimushestva/Preimushestva";
import Foto from "@/components/sections/foto/Foto";
import GoodWork from "@/components/sections/goodWork/GoodWork";
import RemontMechty from "@/components/sections/remontMechty/RemontMechty";
import WhatWeDo from "@/components/sections/whatWeDo/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section
        className="hero min-h-screen"
        style={{ backgroundImage: 'url("/fon/fon2.webp")' }}
      >
        <div className='container mx-auto'>
          <div className='flex sd:flex-row xz:flex-col justify-between items-start'>
            <div className='sd:w-1/2 xz:w-full'></div>
            <div className='text-white sd:pb-28 xz:pb-0 sd:w-1/2 xz:w-full flex flex-col  sd:items-end xz:items-start'>
              <h1 className='sd:text-8xl xz:text-6xl uppercase sd:font-extrabold xz:font-bold text-left'>
                Укладка <span className="flex sd:justify-end xz:justify-start">плитки</span>
              </h1>
              <h2 className='mt-6 sd:text-4xl xz:text-2xl'>
                <span className="">Плиточник</span> в Минске
              </h2>
              <p className='mt-8 sd:text-justify xz:text-left xz:font-light sd:font-normal sd:text-base xz:text-sm'>
                Наши опытные мастера гарантируют надежную и качественную укладку плитки в вашем помещении, обеспечивая долговечность и эстетическое совершенство вашего пола или стен. Доверьте работы по укладке плитки профессионалам и наслаждайтесь безупречным результатом!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Foto />
      <RemontMechty />
      <WhatWeDo />
      <Preimushestva />

      <section className='sd:py-16 xz:py-8 bg-slate-200'>
        <div className='container mx-auto'>
          <p className='sd:text-2xl xz:text-lg font-bold tracking-widest sd:px-10 xz:px-0'>
            Хотите, чтобы ваша плитка была уложена профессионально и красиво? Не теряйте времени! Свяжитесь с нами прямо сейчас, и наши опытные мастера сделают вашу мечту о идеальном ремонте реальностью! Оставьте заявку на сайте или позвоните по указанным номерам телефонов. Мы готовы превратить ваш дом в настоящий шедевр!
          </p>
        </div>
      </section>

      <Otzyvy />

      <section className='hero min-h-[70vh]' style={{ backgroundImage: 'url("/fon/foto-section.webp")' }} />

      <GoodWork />
    </main>
  );
}
