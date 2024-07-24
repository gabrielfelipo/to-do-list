import {
  InputProps as NUIInputProps,
  TextAreaProps as NUITextInputProps,
} from '@nextui-org/react'
import { Except } from 'type-fest'
import { ReactNode } from 'react'

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

export interface TextInputProps
  extends Except<
    NUITextInputProps,
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
  isOptional?: boolean
}
