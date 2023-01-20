import Input, { InputProps } from "@ui/input/Input"
import { FC } from "react"
import { AuthForm } from "./Auth"

const AuthInput: FC<InputProps<AuthForm>> = (props) => {
  return (
    <Input<AuthForm> {...props} />
  )
}

export default AuthInput 
