'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { ANIMATE_CONFIG } from '@/shared/config/animate.config'

import { LoginForm } from './login-form'
import { RegisterForm } from './register-form'

type IAuthStatus = 'login' | 'register'

const Auth = () => {
	const [activeTab, setActiveTab] = useState<IAuthStatus>('register')
	const onHandledChange = () => {
		setActiveTab(prev => (prev === 'login' ? 'register' : 'login'))
	}
	return (
		<div className='flex w-full max-w-72 flex-col p-5 shadow'>
			<AnimatePresence initial={false} mode='wait'>
				<motion.div {...ANIMATE_CONFIG.fade} key={activeTab}>
					{activeTab === 'register' ? <RegisterForm /> : <LoginForm />}
				</motion.div>
			</AnimatePresence>
			<div
				className='mt-2 cursor-pointer text-center text-sm hover:underline'
				onClick={onHandledChange}
			>
				{activeTab === 'login' ? 'У вас нет аккаунта?' : 'У вас есть аккунт?'}
			</div>
		</div>
	)
}

export default Auth
