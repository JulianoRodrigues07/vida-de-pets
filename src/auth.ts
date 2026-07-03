import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const config = {
  providers: [
    Credentials({
      credentials: {
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (credentials.password === process.env.ADMIN_PASSWORD) {
          return { id: "1", name: "Admin", email: "admin@vidadepets.com" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);