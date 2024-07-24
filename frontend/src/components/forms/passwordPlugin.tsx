import { InputProps } from './types'
import { useState } from 'react'

export const PasswordPlugin = (props: InputProps) => {
  const [contentIsVisible, setContentIsVisible] = useState(false)

  const toggleVisibility = () => {
    setContentIsVisible(!contentIsVisible)
  }

  const isPasswordInput = props.type === 'password'

  const showContent = isPasswordInput && contentIsVisible

  return {
    type: showContent ? 'text' : props.type,
    endContent: isPasswordInput && (
      <button
        className="focus:outline-none"
        type="button"
        onClick={toggleVisibility}
      >
        {contentIsVisible ? (
          <img
            alt="Ícone mostra/esconde senha"
            src="/icons/eye-open.svg"
            className="h-6 w-6 fill-black text-black"
          />
        ) : (
          <img
            alt="Ícone mostra/esconde senha"
            src="/icons/eye-closed.svg"
            className="h-6 w-6 fill-black text-black"
          />
        )}
      </button>
    ),
  }
}
