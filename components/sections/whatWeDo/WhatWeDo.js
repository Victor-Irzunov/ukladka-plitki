import Image from "next/image"

const WhatWeDo = () => {
	return (
		<section className='bg-secondary py-14'>
			<div className='container mx-auto'>
				<div className='flex sd:flex-row xz:flex-col'>

					<div className='bg-white sd:p-10 xz:p-5 sd:w-1/2 xz:w-full flex items-center'>
						<div className=''>
							<h6 className='text-4xl font-semibold mb-3'>
								Наши услуги
							</h6>
							<p className='sd:text-lg xz:text-base mt-6'>
								Мы специализируемся на укладке плитки в помещениях любого размера и сложности, включая ванные комнаты, кухни, прихожие, офисы и общественные помещения. Независимо от того, требуется ли вам обновление интерьера или выполнение профессионального ремонта, наши специалисты гарантируют качественное и надежное выполнение работы.
							</p>
						</div>
					</div>

					<div className='grid sd:grid-cols-2 grid-cols-1 sd:w-1/2 xz:w-full'>
						<div className='relative'>
							<Image src='/foto/8.webp' alt='Укладка плитки на пол' width={563} height={563} />
							<div className='absolute top-0 left-0'>
								<p className='bg-black/60 text-white px-3 py-1'>
									Укладка плитки на пол
								</p>
							</div>
						</div>
						<div className='relative'>
							<Image src='/foto/11.webp' alt='Укладка плитки на стену' width={563} height={563} />
							<div className='absolute top-0 left-0'>
								<p className='bg-black/60 text-white px-3 py-1'>
									Укладка плитки на стену
								</p>
							</div>
						</div>
						<div className='relative'>
							<Image src='/foto/10.webp' alt='Укладка плитки в ванной' width={563} height={563} />
							<div className='absolute top-0 left-0'>
								<p className='bg-black/60 text-white px-3 py-1'>
									Укладка плитки в ванной
								</p>
							</div>
						</div>
						<div className='relative'>
							<Image src='/foto/9.webp' alt='Укладка плитки в больших помещениях' width={563} height={563} />
							<div className='absolute top-0 left-0'>
								<p className='bg-black/60 text-white px-3 py-1'>
									Укладка в больших помещениях
								</p>
							</div>
						</div>
					</div>
				</div>


			</div>
		</section>
	)
}

export default WhatWeDo