import Link from "next/link";

type tipo = {
  to: string;
  className?: string;
  children: any;
  onclick?: any;
  target?: string;
};

export function LinkButton(props: tipo) {
  return (
    <Link
      href={props.to}
      className={props.className}
      onClick={props.onclick}
      target={props.target}
    >
      {props.children}
    </Link>
  );
}
