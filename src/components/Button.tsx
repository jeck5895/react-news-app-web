import type { PropsWithChildren } from "react"

type ButtonProps = {
  handleClick: () => {}
}
export default function Button(props: PropsWithChildren<ButtonProps>) {
  return <button className="btn" onClick={props.handleClick}>{props.children}</button>
}
