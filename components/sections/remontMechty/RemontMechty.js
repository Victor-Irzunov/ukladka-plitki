import Image from "next/image"


const RemontMechty = () => {
	return (
		<section className='min-h-screen bg-white py-16'>
			<div className='container mx-auto'>
				<h3 className='text-center sd:text-6xl xz:text-4xl font-semibold'>
					Ремонт мечты
				</h3>
				<div className='flex sd:flex-row xz:flex-col mt-8'>
					<div className='sd:w-1/2 xz:w-full'>
						<Image
							src='/foto/7.webp'
							alt='Ремонт мечты - услуги плиточника'
							width={1214} height={1214}
						/>
					</div>
					<div className='bg-neutral sd:w-1/2 xz:w-full sd:p-12 xz:p-4 flex flex-col justify-center items-center'>
						<h4 className='sd:text-5xl xz:text-2xl font-semibold text-secondary'>
							Профессиональный плиточник
						</h4>
						<p className='sd:text-xl sd:mt-6 xz:mt-4 xz:text-base text-secondary'>
							Наши профессиональные плиточники помогут вам воплотить в жизнь любые идеи по ремонту вашего интерьера. Мы гарантируем качественную работу и индивидуальный подход к каждому клиенту.
						</p>
					</div>
				</div>


				<div className='sd:mt-20 xz:mt-14 sd:max-w-xl xz:max-w-full text-center mx-auto'>
					<h5 className='sd:text-6xl xz:text-3xl font-semibold text-black/80'>
						Качественные услуги плиточника
					</h5>
					<p className='mt-6 font-light sd:text-lg xz:text-base'>
						Наши квалифицированные плиточники обладают многолетним опытом и профессиональными навыками, что позволяет нам гарантировать высокое качество выполненных работ. Мы осуществляем укладку плитки любой сложности, подбирая оптимальные материалы и методы работы для достижения идеального результата.
					</p>
				</div>
			</div>
		</section>
	)
}

export default RemontMechty