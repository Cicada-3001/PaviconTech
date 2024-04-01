import db from "./db"
import { compare } from "bcrypt"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter"

const authOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              email: { label: "email", type: "text"},
              password: { label: "Password", type: "password" },
            },
            async authorize(credentials,req) {
                if(!credentials.email || !credentials.password)
                    return null
                
                const existingUser = await db.user.findUnique({
                        where: { 
                            email: credentials.email
                        }
                    }
                )

                if(!existingUser)
                    console.log("No user found")
                
                if(existingUser){
                    const passwordMatch = await compare( credentials.password, existingUser.password)
                    if(!passwordMatch){
                        console.log("Wrong Password")
                        return null
                    }   
                }

                const user={
                    id: existingUser.id, 
                    firstName: existingUser.firstName, 
                    lastName: existingUser.lastName, 
                    age: existingUser.age, 
                    town: existingUser.town, 
                    gender: existingUser.gender, 
                }

                return user
            },
          }),
    ],
    callbacks: {
        async session({ session, user, token }) {
          return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
          return token;
        },
      },
   
}


export { authOptions }