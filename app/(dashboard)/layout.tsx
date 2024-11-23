import type { Metadata } from "next";
import "../globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import LeftSideBar from "@/components/layout/LeftSideBar";
import TopBar from "@/components/layout/TopBar";
import { ToasterProvider } from "@/lib/ToasterProvider";


export const metadata: Metadata = {
  title: "WinPC - Admin Dashboard",
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
          <ToasterProvider />
          <div className="flex max-lg:flex-col text-grey-1">   
            <LeftSideBar />
            <TopBar />
            <div className="flex-1">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
              </SignedIn>
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}