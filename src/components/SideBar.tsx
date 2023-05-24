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
        <Text.Title color={colors.PURPLE}>Finx</Text.Title>
      </SideBarHeader>
      <SideBarMenu>
        <SideBarMenuItem>
          <Text.Medium color={colors.GRAY}>Perfil</Text.Medium>
        </SideBarMenuItem>
        <SideBarMenuItem>
          <Text.Medium color={colors.GRAY}>Dashboard</Text.Medium>
        </SideBarMenuItem>
        <SideBarMenuItem>
          <Text.Medium color={colors.GRAY}>Configurações</Text.Medium>
        </SideBarMenuItem>
        <SideBarMenuItem>
          <Text.Medium color={colors.GRAY}>Sair</Text.Medium>
        </SideBarMenuItem>
      </SideBarMenu>
    </SideBarContainer>
  )
}
