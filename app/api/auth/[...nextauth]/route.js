import  NextAuth  from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "@/app/libs/db";
import { compare } from "bcrypt";


const handler = NextAuth({
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
        name: "Credentials",
        credentials: {
            username: { label: "email", type: "email" },
            password: { label: "password", type: "password" },
        },
        async authorize(credentials) {

            console.log(credentials)
        
            // Check if user credentials are Correct
            if (!credentials?.email || !credentials?.password) {
                return null;
            }
          //Check if user exists
            const existingUser = await db.user.findUnique({
                where: { email: credentials.email },
            });
          
            if (!existingUser) {
                return null;
            }
            //Check if Password is correct
            const passwordMatch = await compare(
                credentials.password,
                existingUser.password
            );
            if (!passwordMatch) 
                return null

            return {
                id: existingUser.id,
                firstName: existingUser.firstName,
                lastName: existingUser.lastName,
                email:existingUser.email,
                age:existingUser.age,
                town: existingUser.town,
                gender: existingUser.gender
            };
            },
        }),
    ],
    
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
        maxAge: 60 * 60 * 24 * 30,
        encryption: true,
    },

    pages: {
        signIn: "/login",
        signOut: "/login",
        error: "/login",
    },

    callbacks: {
        async session(session, user, token) {
          if (user !== null) {

            session.user = user;
          }
          return await session;
        },
    
        async jwt({ token, user }) {
           return await token;
        },
      },
   
}
)


export { handler as GET, handler as POST}

