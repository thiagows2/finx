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

export function SideBar() {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <Logo src="/logo.svg" alt="Finx logo" />
        <Text.Title color={colors.VIOLET}>Finx</Text.Title>
      </SideBarHeader>
      <SideBarMenu>
        <SideBarMenuItem disabled={true}>
          <Text.Medium title="Em breve...">Perfil</Text.Medium>
        </SideBarMenuItem>
        <SideBarMenuItem selected={true}>
          <div />
          <Text.Medium>Dashboard</Text.Medium>
        </SideBarMenuItem>
        <Divider />
        <SideBarMenuItem disabled={true}>
          <Text.Medium title="Em breve...">Configurações</Text.Medium>
        </SideBarMenuItem>
        <SideBarMenuItem>
          <Text.Medium>Sair</Text.Medium>
        </SideBarMenuItem>
      </SideBarMenu>
    </SideBarContainer>
  )
}
