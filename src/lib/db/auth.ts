import { db } from '.'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'

import * as schema from './schema'

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'sqlite',
		schema
	}),
	emailAndPassword: {
		enabled: true
	},
	trustedOrigins: [`${process.env.BETTER_AUTH_URL}`]
})

export type Session = typeof auth.$Infer.Session.session
export type User = typeof auth.$Infer.Session.session
