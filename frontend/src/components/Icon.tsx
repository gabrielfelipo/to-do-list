import { ImageProps } from '@nextui-org/react'
import { Image } from './Image'

type IconProps = {
  name: string
} & ImageProps

export const Icon = ({ name, ...props }: IconProps) => {
  return <Image src={'/icons/' + name + '.svg'} {...props} />
}
