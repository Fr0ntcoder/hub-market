'use client'

import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form'

import { Input } from '@/shared/components/ui'

interface Props<TFieldValues extends FieldValues = FieldValues> {
	control: Control<TFieldValues>
	type?: string
	name: FieldPath<TFieldValues>
	placeholder?: string
}

const InputField = <TFieldValues extends FieldValues>({
	control,
	name,
	type,
	placeholder
}: Props<TFieldValues>) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState }) => {
				const error = fieldState.error

				return (
					<div className=''>
						<Input
							placeholder={placeholder}
							type={type}
							{...field}
							aria-invalid={!!error}
						/>
						{error && (
							<div className='mt-1 text-[12px] text-red-600'>
								{error.message}
							</div>
						)}
					</div>
				)
			}}
		/>
	)
}

export default InputField
