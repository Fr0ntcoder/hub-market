'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useMemo, useTransition } from 'react'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger
} from '@/shared/components/ui'
import { usePathname, useRouter } from '@/shared/i18n/navigation'

import { selectLanguageData } from './select-language.data'

type TypeLanguage = 'ru' | 'en'

const SelectLanguage = () => {
	const router = useRouter()
	const [isPending, startTransition] = useTransition()
	const pathname = usePathname()

	const { locale } = useParams()

	const currentLanguage = useMemo(
		() => selectLanguageData.find(item => item.code === locale),
		[locale]
	)

	const onHandleLanguage = (value: TypeLanguage) => {
		startTransition(() => {
			const cleanPath = pathname.replace(/^\/(ru|en)/, '') || '/'
			router.replace(cleanPath, { locale: value })
		})
	}

	return (
		<Select
			value={currentLanguage?.code}
			onValueChange={value => onHandleLanguage(value as TypeLanguage)}
		>
			<SelectTrigger className='flex w-full max-w-20 items-center'>
				<Image
					src={currentLanguage?.flag ?? ''}
					width={20}
					height={20}
					alt={currentLanguage?.code ?? 'flag'}
				/>
				<div className='w-3'>{currentLanguage?.codeText}</div>
			</SelectTrigger>
			<SelectContent position='popper'>
				<SelectGroup>
					{selectLanguageData.map(item => (
						<SelectItem value={item.code} key={item.code}>
							<Image src={item.flag} width={20} height={20} alt={item.code} />
							<span>{item.text}</span>
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

export default SelectLanguage
