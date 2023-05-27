import {
  SideBarContainer,
  SideBarHeader,
  SideBarMenu,
  SideBarMenuItem,
  Logo
} from '@/themes/SideBar'
import { colors } from '@/themes/Patterns'
import { Text } from '@/components/Text'

export function SideBar() {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <Logo src="/logo.svg" alt="Finx logo" />
        <Text.Title color={colors.VIOLET}>Finx</Text.Title>
      </SideBarHeader>
      <SideBarMenu>
        <SideBarMenuItem>
          <Text.Medium>Perfil</Text.Medium>
        </SideBarMenuItem>
        <SideBarMenuItem>
          <Text.Medium>Dashboard</Text.Medium>
        </SideBarMenuItem>
        <SideBarMenuItem>
          <Text.Medium>Configurações</Text.Medium>
        </SideBarMenuItem>
        <SideBarMenuItem>
          <Text.Medium>Sair</Text.Medium>
        </SideBarMenuItem>
      </SideBarMenu>
    </SideBarContainer>
  )
}
