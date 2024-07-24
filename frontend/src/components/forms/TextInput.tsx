import { Controller, useFormContext } from 'react-hook-form'
import { Textarea as NUITextArea } from '@nextui-org/react'
import { TextInputProps } from './types'

export const TextInput = ({ ...props }: TextInputProps) => {
  const form = useFormContext()

  return (
    <Controller
      control={form.control}
      name={props.name}
      render={({ field, fieldState }) => (
        <NUITextArea
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
          onChange={field.onChange}
        />
      )}
    />
  )
}
