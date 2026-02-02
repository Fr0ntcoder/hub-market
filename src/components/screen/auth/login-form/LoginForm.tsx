'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { Button } from '@/components/ui'

import { InputField } from '@/components/elements/form-element/input-field'
import { signIn, useSession } from '@/lib/db/auth-client'

const formLoginSchema = z.object({
	email: z.email({ message: 'Введите email' }),
	password: z.string().min(6, 'Пароль должен быть не менее 6 символов')
})
type TFormLoginValues = z.infer<typeof formLoginSchema>

const LoginForm = () => {
	const form = useForm<TFormLoginValues>({
		resolver: zodResolver(formLoginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit = async (values: TFormLoginValues) => {
		await signIn.email({
			email: values.email,
			password: values.password
		})

	}

	const { data: session, isPending } = useSession()

	return (
		<form
			onSubmit={form.handleSubmit(onSubmit)}
			className='flex flex-col gap-5'
		>
			<h3 className='text-center text-xl font-bold'>Войти</h3>
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
			<Button type='submit'>Войти</Button>
		</form>
	)
}

export default LoginForm
