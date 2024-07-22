import { Input as NUIInput } from '@nextui-org/react'
import { Controller, useFormContext } from 'react-hook-form'
import { InputProps } from './types'
import { PasswordPlugin } from './passwordPlugin'
import { maskPlugin } from './maskPlugin'

export const Input = ({ mask, maskType, ...props }: InputProps) => {
  const form = useFormContext()

  return (
    <Controller
      control={form.control}
      name={props.name}
      render={({ field, fieldState }) => (
        <NUIInput
          required={!props.isOptional}
          isInvalid={!!fieldState.error}
          errorMessage={fieldState.error?.message}
          maxLength={10}
          labelPlacement="inside"
          color="default"
          variant="bordered"
          className="text-black"
          classNames={{ inputWrapper: 'border-grey-300 h-12' }}
          {...props}
          {...field}
          value={field.value ?? ''}
          {...PasswordPlugin(props)}
          onChange={maskPlugin(field.onChange, mask, maskType)}
        />
      )}
    />
  )
}
