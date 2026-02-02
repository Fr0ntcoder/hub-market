'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

import { Button } from '@/components/ui'

import { InputField } from '@/components/elements/form-element/input-field'
import { ERROR_MESSAGE } from '@/lib/auth-error'
import { signUp, useSession } from '@/lib/db/auth-client'

const formRegisterSchema = z.object({
	name: z.string().optional(),
	email: z.email({ message: 'Введите email' }),
	password: z.string().min(6, 'Пароль должен быть не менее 6 символов')
})
type TFormRegisterValues = z.infer<typeof formRegisterSchema>

const RegisterForm = () => {
	const form = useForm<TFormRegisterValues>({
		resolver: zodResolver(formRegisterSchema),
		defaultValues: {
			email: '',
			password: '',
			name: ''
		}
	})

	const onSubmit = async (values: TFormRegisterValues) => {
		try {
			const { error } = await signUp.email({
				email: values.email,
				password: values.password,
				name: values.name || ''
			})
			if (error?.code) {
				const code = error.code
				toast.error(ERROR_MESSAGE[code])
			}

			toast.info('Вы успешно зарегистрировались')
		} catch (error) {
			toast.error('Ошибка')
		}
	}

	const { data: session, isPending } = useSession()

	return (
		<form
			onSubmit={form.handleSubmit(onSubmit)}
			className='flex flex-col gap-5'
		>
			<h3 className='text-center text-xl font-bold'>Зарегистрироваться</h3>
			<InputField
				name='name'
				control={form.control}
				placeholder='Введите имя'
			/>
			<InputField
				name='email'
				control={form.control}
				placeholder='Введите email'
			/>
			<InputField
				type='password'
				name='password'
				control={form.control}
				placeholder='******'
			/>
			<Button type='submit'>Зарегистрироваться</Button>
		</form>
	)
}

export default RegisterForm
