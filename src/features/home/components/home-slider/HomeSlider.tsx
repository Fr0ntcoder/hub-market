'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/shared/components/ui'

import { homeSliderData } from './home-slider.data'

const HomeSlider = () => {
	return (
		<Carousel
			className='w-full'
			plugins={[
				Autoplay({
					delay: 3000
				})
			]}
			opts={{
				align: 'start'
			}}
		>
			<CarouselContent>
				{homeSliderData.map(slide => (
					<CarouselItem key={slide.id} className='basis-1/2'>
						<div className='relative h-60 w-full'>
							<div className='absolute top-0 left-0 z-2 h-full w-full cursor-pointer bg-black/30 transition-all duration-300 hover:bg-black/0'></div>
							<Image
								className='z-1 bg-center object-cover'
								src={slide.src}
								fill
								alt='фото'
							/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}

export default HomeSlider
