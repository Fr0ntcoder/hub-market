interface ISelectLanguage {
	flag: string
	code: string
	codeText: string
	text: string
}

export const selectLanguageData: ISelectLanguage[] = [
	{
		flag: '/ru.png',
		code: 'ru',
		codeText: 'Ru',
		text: 'Русский'
	},
	{
		flag: '/us.png',
		code: 'en',
		codeText: 'En',
		text: 'Английский'
	}
]
