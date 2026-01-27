import { Heart, LucideIcon, Package, ShoppingBasket, User2 } from 'lucide-react'

import { PagesConfig } from '@/config'

interface IHeaderMenu {
	icon: LucideIcon
	text: string
	href: string
}
export const HeaderMenuData: IHeaderMenu[] = [
	{
		icon: User2,
		text: 'Войти',
		href: PagesConfig.LOGIN
	},
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
