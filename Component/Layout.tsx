import { ReactNode } from "react";
import NavBar from "./NavBar";

type layout = {
  children: ReactNode;
};

export default function Layout({ children }: layout) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
