import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
// Opcion 1: tipar el children
interface RootLayoutProps {
  children: ReactNode;
}

/*
-> Funcion sin tipar
  fuction suma (a, b) {
    return a + b
  }

-> Funcion tipada
  function suma (a: number, b: number): number {
    return a + b
  }

  const numeros = [1, 2, 3, 4, 5]

  cost.log(numeros.map((n) => n * 2))

  --> [2, 4, 6, 8, 10]
*/

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
