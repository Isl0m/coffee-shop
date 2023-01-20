import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Button from '@ui/button/Button'
import { FC } from 'react'

const LogOut: FC = () => {
  const supabaseClient = useSupabaseClient()
  const handleClick = async () => {
    const { error } = await supabaseClient.auth.signOut()
    if (error) console.error(error)
  }
  return <Button onClick={handleClick}>
    Log Out
  </Button>
}

export default LogOut
