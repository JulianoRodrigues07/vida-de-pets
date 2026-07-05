import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const config = {
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  providers: [
    Credentials({
      credentials: {
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        const senhaCorreta = process.env.ADMIN_PASSWORD;

        if (!senhaCorreta) {
          return null;
        }

        if (credentials.password === senhaCorreta) {
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