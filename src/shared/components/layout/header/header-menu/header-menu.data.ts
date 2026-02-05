import { Heart, LucideIcon, Package, ShoppingBasket } from 'lucide-react'

import { PagesConfig } from '@/shared/config'

interface IHeaderMenu {
	icon: LucideIcon
	text: string
	href: string
}
export const HeaderMenuData: IHeaderMenu[] = [
	{
		icon: Package,
		text: 'Заказы',
		href: PagesConfig.ORDERS
	},
	{
		icon: Heart,
		text: 'Избранное',
		href: PagesConfig.FAVORITES
	},
	{
		icon: ShoppingBasket,
		text: 'Корзина',
		href: PagesConfig.CART
	}
]
