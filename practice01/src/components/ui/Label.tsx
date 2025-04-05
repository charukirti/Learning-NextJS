import { ReactNode } from "react";

type LableProps = {
  htmlFor: string;
  children: ReactNode;
};

export default function Label({ htmlFor, children }: LableProps) {
  return <label htmlFor={htmlFor}>{children}</label>;
}
