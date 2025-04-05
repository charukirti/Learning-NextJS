import { HTMLInputTypeAttribute } from "react";

type InputProps = {
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
};
export default function Input({ type, name, placeholder }: InputProps) {
  return <input type={type} placeholder={placeholder} name={name} className="text-xl border "/>;
}
