"use client"
import Image from "next/image";




const Otzyvy = ({ handleOrderClick }) => {
	return (
		<section className='py-10' id="otzyvy">
			<div className='container mx-auto'>
				<div className='flex sd:flex-row xz:flex-col justify-between'>
					<div className='sd:w-1/3 xz:w-full'>
						<h4 className='text-3xl sd:text-4xl uppercase text-secondary'>
							Клиенты о нас
						</h4>
						<p className='mt-3  text-sm sd:text-base'>
							Отзывы наших клиентов - лучшее подтверждение качества! Убедитесь сами в высоком стандарте наших услуг и в отличных результатах.
						</p>

						<div className='sd:w-2/3 xz:w-full flex justify-start items-center overflow-hidden mt-6'>
							<img className="mask mask-circle"
								src="/otzyvy/otzyvy.webp"
								// style={{ borderRadius: '41% 59% 46% 54% / 73% 44% 56% 27%' }}
								alt="фоновое изображение мойка авто"
							/>
						</div>


					</div>

					<div className='sd:mt-0 xz:mt-10 sd:w-2/3 xz:w-full sd:ml-16'>

						<div className=''>
							<div className='flex justify-between'>
								<div className='flex items-center'>
									<div className="avatar">
										<div className="w-12 rounded-full">
											<img src="/otzyvy/1.webp" alt="Отзыв" />
										</div>
									</div>
									<div className=' ml-3'>
										<p className='text-lg'>
											Анна Хомич
										</p>
										<div className="rating rating-sm">
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" checked onChange={() => { }} />
										</div>
									</div>
								</div>
								<button className='btn btn-gradient btn-circle border-none'>
									<Image src='/svg/arrow-up-right.svg' alt='Отзыв' width={15} height={15} />
								</button>
							</div>
							<div className='mt-3'>
								<p className='/70 text-base xz:text-sm'>
									Мы заказали укладку плитки в нашей ванной комнате, и результат превзошел все ожидания! Работа была выполнена быстро и профессионально. Теперь наша ванная выглядит просто потрясающе! Большое спасибо за отличную работу!
								</p>
							</div>
						</div>
						<hr className="my-5" />

						<div className=''>
							<div className='flex justify-between'>
								<div className='flex items-center'>
									<div className="avatar">
										<div className="w-12 rounded-full">
											<img src="/otzyvy/2.webp" alt="Отзыв" />
										</div>
									</div>
									<div className=' ml-3'>
										<p className='text-lg'>
											Анатолий
										</p>
										<div className="rating rating-sm">
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" checked onChange={() => { }} />
										</div>
									</div>
								</div>
								<button className='btn btn-gradient btn-circle border-none'>
									<Image src='/svg/arrow-up-right.svg' alt='Отзыв' width={15} height={15} />
								</button>
							</div>

							<div className='mt-3'>
								<p className='/70 text-base xz:text-sm'>
									Плиточники этой компании отлично справились с укладкой плитки на фартук в нашей кухне. Работа выполнена аккуратно и качественно. Теперь наша кухня выглядит стильно и современно. Очень довольны результатом!
								</p>
							</div>
						</div>
						<hr className="my-5" />

						<div className=''>
							<div className='flex justify-between'>
								<div className='flex items-center'>
									<div className="avatar">
										<div className="w-12 rounded-full">
											<img src="/otzyvy/3.webp" alt="Отзыв" />
										</div>
									</div>
									<div className=' ml-3'>
										<p className='text-lg'>
											Сацук Алексей
										</p>
										<div className="rating rating-sm">
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" checked onChange={() => { }} />
										</div>
									</div>
								</div>
								<button className='btn btn-gradient btn-circle border-none'>
									<Image src='/svg/arrow-up-right.svg' alt='Отзыв' width={15} height={15} />
								</button>
							</div>

							<div className='mt-3'>
								<p className='/70 text-base xz:text-sm'>
									Заказывали укладку плитки на полу в кухне. Плиточники проявили себя как настоящие профессионалы! Работа выполнена в срок и безупречно. Теперь наша кухня стала главным украшением дома. Спасибо за качественный сервис!
								</p>
							</div>
						</div>
						<hr className="my-5" />

						<div className=''>
							<div className='flex justify-between'>
								<div className='flex items-center'>
									<div className="avatar">
										<div className="w-12 rounded-full">
											<img src="/otzyvy/4.webp" alt="Отзыв" />
										</div>
									</div>
									<div className=' ml-3'>
										<p className='text-lg'>
											Гирз Роман
										</p>
										<div className="rating rating-sm">
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-secondary" checked onChange={() => { }} />
										</div>
									</div>
								</div>
								<button className='btn btn-gradient btn-circle border-none'>
									<Image src='/svg/arrow-up-right.svg' alt='Отзыв' width={15} height={15} />
								</button>
							</div>

							<div className='mt-3'>
								<p className='/70 text-base xz:text-sm'>
									Мы заказали облицовку кухни плиткой в нашем кафе, и результат просто поразил нас! Команда плиточников справилась с задачей оперативно и профессионально. Теперь наше кафе выглядит уютно и стильно, что непременно привлекает внимание посетителей. Большое спасибо за отличную работу!
								</p>
							</div>
						</div>

					</div>

				</div>
			</div>
		</section>
	)
}

export default Otzyvy