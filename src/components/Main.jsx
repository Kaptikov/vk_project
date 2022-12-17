import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/style.css'
import {
  Panel,
  PanelHeader,
  Div,
  Avatar,
  Separator,
  Group,
  Title,
  Gradient,
  Button,
} from '@vkontakte/vkui'

import { Icon12Add } from '@vkontakte/icons'
import '@vkontakte/vkui/dist/vkui.css'

const panels = ['Мои питомцы', 'Мои отклики', 'Отклики', 'Объявления']

const Main = () => {
  const [panel, setPanel] = React.useState(panels[0])

  return (
    <Panel id={panels[0]}>
      <PanelHeader after={<Avatar size={16} />}>Мои питомцы</PanelHeader>
      <Group>
        <Div className='card__dog'>
          <Gradient mode='tint' className='card__gradient'>
            <Title level='2' weight='2'>
              Кличка
            </Title>
            <Avatar size={56} />
          </Gradient>
        </Div>

        <Separator />
        <Div className='card__btn'>
          <Button
            width={238}
            after={<Icon12Add />}
            onClick={() => setPanel(panels[1])}
          >
            Добавить
          </Button>
        </Div>
      </Group>
    </Panel>
  )
}

export default Main
