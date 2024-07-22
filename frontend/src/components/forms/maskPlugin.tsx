import { MASK_TYPE, MaskType } from './types'

export const maskPlugin = (
  onChange: (...event: unknown[]) => void,
  mask?: string,
  maskType?: MaskType,
) => {
  if (!(mask || maskType)) return onChange

  return (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...event,
      target: {
        value: maskFn({ mask, value: event.target.value, maskType }),
      },
    })
  }
}

const maskFn = ({
  mask,
  value,
  maskType,
}: { mask?: string; value: string; maskType?: MaskType }) => {
  const validCharsRegex = maskType ? MASK_TYPE[maskType] : /./

  const valueWithoutMask = value
    .split('')
    .filter(
      (char) =>
        validCharsRegex.test(char) && (mask ? !mask.includes(char) : true),
    )
    .join('')

  let result = valueWithoutMask

  if (!mask) return result

  const charMapping = mask.split('').flatMap((char, index) => {
    if (char === '$') return []
    return [[char, index]] as const
  })

  const insertAt = (str: string, sub: string, pos: number) =>
    `${str.slice(0, pos)}${sub}${str.slice(pos)}`

  for (const [char, index] of charMapping) {
    if (!result[index]) break

    result = insertAt(result, char, index)
  }

  return result
}
