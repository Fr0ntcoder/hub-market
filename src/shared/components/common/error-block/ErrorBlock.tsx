interface Props {
	text?: string
}
const ErrorBlock = ({ text = 'Ошибка загрузки' }: Props) => {
	return <div className='text-xl text-red-500'>{text}</div>
}

export default ErrorBlock
