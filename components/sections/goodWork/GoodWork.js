import Image from 'next/image'

const GoodWork = () => {
	return (
		<section className='min-h-screen bg-white py-16'>
			<div className='container mx-auto'>
				<h6 className='text-center sd:text-6xl xz:text-4xl font-semibold'>
					О нас
				</h6>
				<div className='flex sd:flex-row xz:flex-col mt-8'>
					<div className='sd:w-1/2 xz:w-full'>
						<Image
							src='/fon/foto-section2.webp'
							alt='О нас - услуги плиточника'
							width={1214} height={1214}
						/>
					</div>
					<div className='bg-neutral sd:w-1/2 xz:w-full sd:p-12 xz:p-4 flex flex-col justify-center items-center'>
						<h6 className='sd:text-5xl xz:text-2xl font-semibold text-secondary'>
							Наша команда
						</h6>
						<p className='sd:text-xl sd:mt-6 xz:mt-4 xz:text-base text-secondary text-center'>
							Наша команда - это сплоченный коллектив профессионалов, готовых реализовать самые смелые идеи в области укладки плитки. Мы обладаем богатым опытом и высоким профессионализмом, что позволяет нам выполнять задачи любой сложности с непревзойденным качеством и в срок. Мы стремимся к идеальному результату в каждом проекте и делаем все возможное, чтобы удовлетворить потребности и ожидания наших клиентов.
						</p>
					</div>

				</div>


				<div className='sd:mt-20 xz:mt-14 sd:max-w-xl xz:max-w-full text-center mx-auto'>
					<h6 className='sd:text-4xl xz:text-2xl font-semibold text-black/80'>
						Нужна укладка плитки?
					</h6>
					<p className='mt-6 font-light sd:text-lg xz:text-base'>
						Наша команда профессиональных плиточников готова воплотить ваши идеи в реальность! Мы предоставляем качественные услуги по укладке плитки в ванной, на кухне, в офисах, кафе и других помещениях. Обратитесь к нам сегодня, и мы поможем вам создать стильный и функциональный интерьер с использованием качественных плиточных материалов.
					</p>
				</div>

			</div>
		</section>
	)
}

export default GoodWork