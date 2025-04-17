import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { ReactNode } from "react";


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="lex min-h-screen flex-1 flex-col px-5 xs:px-10 md:px-16;">
        <div className="pb-20">{children}</div>
    </main>
  );
}

//className="mx-auto max-w-7xl "