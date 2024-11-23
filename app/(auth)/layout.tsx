import type { Metadata } from "next";
import "../globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


export const metadata: Metadata = {
  title: "WinPC - Admin Auth",
  description: "Admin dashboard to manage WinPC's data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
          </SignedOut>
          <SignedIn>
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}