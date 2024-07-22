import { InputProps as NUIInputProps } from '@nextui-org/react'
import { ReactNode } from 'react'
import { Except } from 'type-fest'

export enum MaskType {
  DIGIT = 'DIGIT',
}

export const MASK_TYPE: { [key in MaskType]: RegExp } = {
  [MaskType.DIGIT]: /\d/,
}

export interface InputProps
  extends Except<
    NUIInputProps,
    | 'onChange'
    | 'onBlur'
    | 'value'
    | 'onFocus'
    | 'ref'
    | 'required'
    | 'isRequired'
  > {
  name: string
  label: string | ReactNode
  mask?: string
  maskType?: MaskType
  isOptional?: boolean
  endContent?: boolean
}
