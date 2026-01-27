import { LayoutGrid } from 'lucide-react'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui'

export const CatalogMenu = () => {
	return (
		<Tooltip key='bottom'>
			<TooltipTrigger className='bg-primary text-primary-foreground hover:bg-primary/80 flex cursor-pointer items-center justify-between gap-1 rounded px-2 py-1.5 transition-all duration-300'>
				<LayoutGrid />
				Каталог
			</TooltipTrigger>
			<TooltipContent>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
				distinctio dolore quod? Harum quos voluptatum deserunt vitae, doloribus
				suscipit beatae dolore, eius consectetur perspiciatis quae, a corporis?
				Repudiandae, consequatur tempore? Molestiae quo, doloribus aperiam quam
				quae vel veniam et praesentium debitis possimus nam necessitatibus est
				similique placeat hic, atque pariatur? Ullam praesentium qui iusto
				mollitia! Numquam dolore iusto laudantium delectus?
			</TooltipContent>
		</Tooltip>
	)
}
