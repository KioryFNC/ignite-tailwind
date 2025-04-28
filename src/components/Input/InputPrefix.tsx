import { ComponentProps } from 'react'

export interface InputPrefixProps extends ComponentProps<'div'> {}

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}
