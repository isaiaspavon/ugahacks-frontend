import NextAuth, { NextAuthOptions } from 'next-auth/index'

export const authConfig: NextAuthConfig = {
    session:{
        strategy: 'jwt',
    },
providers: [],
};