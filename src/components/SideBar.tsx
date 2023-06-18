import { MdPerson, MdDashboard, MdSettings, MdExitToApp } from 'react-icons/md'

import {
  SideBarContainer,
  SideBarHeader,
  SideBarMenu,
  SideBarMenuItem,
  Logo,
  Divider
} from '@/themes/SideBar'
import { colors } from '@/themes/Patterns'
import { Text } from '@/components/Text'
import { AuthContext } from '@/contexts/AuthContext'
import { useContext } from 'react'

export function SideBar() {
  const { signOut } = useContext(AuthContext)

  return (
    <SideBarContainer>
      <SideBarHeader>
        <Logo src="/logo.svg" alt="Finx logo" />
        <Text.Title color={colors.VIOLET}>Finx</Text.Title>
      </SideBarHeader>
      <SideBarMenu>
        <SideBarMenuItem disabled={true}>
          <MdPerson color={colors.LIGHT_GRAY} size={20} />
          <Text.Medium title="Em breve...">Perfil</Text.Medium>
        </SideBarMenuItem>
        <SideBarMenuItem selected={true}>
          <div />
          <MdDashboard color={colors.VIOLET} size={20} />
          <Text.Medium>Dashboard</Text.Medium>
        </SideBarMenuItem>
        <Divider />
        <SideBarMenuItem disabled={true}>
          <MdSettings color={colors.LIGHT_GRAY} size={20} />
          <Text.Medium title="Em breve...">Configurações</Text.Medium>
        </SideBarMenuItem>
        <SideBarMenuItem onClick={signOut}>
          <MdExitToApp color={colors.LIGHT_GRAY} size={20} />
          <Text.Medium>Sair</Text.Medium>
        </SideBarMenuItem>
      </SideBarMenu>
    </SideBarContainer>
  )
}
