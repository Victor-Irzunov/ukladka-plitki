import Image from "next/image"

const Foto = () => {
	return (
		<section className='bg-slate-200 py-10'>
			<div className='container mx-auto'>
				<div className='grid sd:grid-cols-3 grid-cols-1 gap-4'>
					<div className=''>
						<Image src='/foto/4.webp' alt='Укладка плитки' width={1000} height={668} />
					</div>
					<div className=''>
						<Image src='/foto/5.webp' alt='Укладка плитки' width={1000} height={668} />
					</div>
					<div className=''>
						<Image src='/foto/6.webp' alt='Укладка плитки' width={1000} height={668} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Foto