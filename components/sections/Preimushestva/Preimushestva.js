import Image from "next/image";


export default function Preimushestva() {
	return (
		<section className='py-16 bg-neutral' id="preimushestva">
			<div className='container mx-auto'>
				<div className='flex justify-around sd:flex-row xz:flex-col'>

					<div className='flex flex-col items-center'>
						<Image src='/svg/piggyBank.svg' alt='Хорошие расценки на укладку плитки' width={80} height={80} />
						<p className='mt-3 text-secondary uppercase'>
							Хорошие расценки
						</p>
					</div>
					<div className='flex flex-col items-center sd:mt-0 xz:mt-6'>
						<Image src='/svg/experience.svg' alt='Опытные плиточники' width={80} height={80} />
						<p className='mt-3 text-secondary uppercase'>
							Опытные плиточники
						</p>
					</div>
					<div className='flex flex-col items-center sd:mt-0 xz:mt-6'>
						<Image src='/svg/quality.svg' alt='Качественная укладка плитки' width={80} height={80} />
						<p className='mt-3 text-secondary uppercase'>
							Качественная работа
						</p>
					</div>
					<div className='flex flex-col items-center sd:mt-0 xz:mt-6'>
						<Image src='/svg/deadline.svg' alt='Точные сроки укладки плитки' width={80} height={80} />
						<p className='mt-3 text-secondary uppercase'>
							Соблюдение сроков
						</p>
					</div>
				</div>


			</div>
		</section >

	)
}