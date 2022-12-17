import React from 'react'
import ReactDOM from 'react-dom'
import './styles/style.css'
import Main from './components/Main.jsx'
import { useState, useEffect } from 'react'
import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  ModalRoot,
  ModalPage,
  usePlatform,
  Platform,
  Placeholder,
  useAdaptivityConditionalRender,
  Header,
  CardGrid,
  textInput,
  Card,
  PanelHeaderBack,
  Textarea,
  SegmentedControl,
  IconButton,
  Select,
  FormLayout,
  FormItem,
  Input,
  addressItems,
  clear,
  Div,
  Avatar,
  ModalPageHeader,
  NativeSelect,
  CellButton,
  Cell,
  Separator,
  Group,
  Alert,
  SimpleCell,
  direction,
  File,
  styles,
  Checkbox,
  Link,
  purpose,
  Tabbar,
  Epic,
  TabbarItem,
  DatePicker,
  Counter,
  Title,
  email,
  onChange,
  Badge,
  Search,
  onRemove,
  FormLayoutGroup,
  Slider,
  showPatronymic,
  onShowPatronymic,
  RadioGroup,
  ContentCard,
  Radio,
  InfoRow,
  Text,
  Gradient,
  SizeType,
  Root,
  Spinner,
  Button,
} from '@vkontakte/vkui'

import bridge from '@vkontakte/vk-bridge'

import {
  Icon56UsersOutline,
  Icon28UsersOutline,
  Icon56MentionOutline,
  Icon28ServicesOutline,
  Icon56MessageReadOutline,
  Icon28NewsfeedOutline,
  Icon24Camera,
  Icon12Add,
  Icon16Clear,
} from '@vkontakte/icons'
import '@vkontakte/vkui/dist/vkui.css'

// const panels = ['Мои питомцы', 'Мои отклики', 'Отклики', 'Объявления']
const modals = ['modal 1', 'modal 2', 'modal 3']

const options = () => {
  let options = []
  for (let i = 0; i <= 10; i += 2) {
    options.push({ value: `${i / 10}`, label: `${i / 10}` })
  }
  return options
}

const Example = () => {
  const platform = usePlatform()
  const { viewWidth } = useAdaptivityConditionalRender()
  const [activeStory, setActiveStory] = React.useState('searchPair')
  const onStoryChange = e => setActiveStory(e.currentTarget.dataset.story)
  const isVKCOM = platform !== Platform.VKCOM
  // const [panel, setPanel] = React.useState(panels[0])
  // const [activePanel, setActivePanel] = useState('panel1')
  const [modal, setModal] = React.useState(null)
  const [value2, setValue2] = useState(0.2)
  // const [popout, setPopout] = React.useState(null)

  const textInput = React.createRef()
  const clear = () => (textInput.current.value = '')

  // React.useEffect(() => {
  //   bridge
  //     .send('VKWebAppGetAuthToken', {
  //       app_id: 51495131,
  //       scope: 'friends,status,photos',
  //     })
  //     .then(data => {
  //       if (data.access_token) {
  //         console.log(data.access_token)
  //         bridge
  //           .send('VKWebAppCallAPIMethod', {
  //             method: 'photos.createAlbum',
  //             params: {
  //               title: 'AnimalsPair',
  //               discription: 'Album',
  //               // privacy: '0',
  //               // comment_privacy: '0',
  //               v: '5.131',
  //               access_token: data.access_token,
  //             },
  //           })
  //           .then(data => {
  //             if (data.response) {
  //               console.log(data.response)
  //             }
  //           })
  //           .catch(error => {
  //             // Ошибка
  //             console.log(error)
  //           })
  //       }
  //     })
  //     .catch(error => {
  //       // Ошибка
  //       console.log(error)
  //     })
  // }, [])

  // bridge
  //   .send('VKWebAppInit')
  //   .then(data => {
  //     if (data.result) {
  //       // Приложение инициализировано
  //     } else {
  //       // Ошибка
  //     }
  //   })
  //   .catch(error => {
  //     // Ошибка
  //     console.log(error)
  //   })

  // bridge
  //   .send('VKWebAppGetAuthToken', {
  //     app_id: 51495131,
  //     scope: 'friends,status,photos',
  //   })
  //   .then(data => {
  //     if (data.access_token) {
  //       console.log(data.access_token)
  //       bridge
  //         .send('VKWebAppCallAPIMethod', {
  //           method: 'photos.createAlbum',
  //           params: {
  //             title: 'Animals',
  //             description: 'Album',
  //             // discription: 'Album',
  //             // privacy: '0',
  //             // comment_privacy: '0',
  //             v: '5.131',
  //             access_token: data.access_token,
  //           },
  //         })
  //         .then(data => {
  //           if (data.response) {
  //             console.log(data.response)
  //           }
  //         })
  //         .catch(error => {
  //           // Ошибка
  //           console.log(error)
  //         })
  //     }
  //   })
  //   .catch(error => {
  //     // Ошибка
  //     console.log(error)
  //   })

  bridge
    .send('VKWebAppGetAuthToken', {
      app_id: 51495131,
      scope: 'friends,status,photos',
    })
    .then(data => {
      let userId = ''
      if (data.access_token) {
        bridge
          .send('VKWebAppGetLaunchParams')
          .then(data => {
            if (data.vk_app_id) {
              let userId = data.vk_user_id.toString()
              const params = window.location.search.slice(1)
              bridge
                .send('VKWebAppCallAPIMethod', {
                  method: 'photos.createAlbum',
                  params: {
                    title: 'AnimalsPair',
                    v: '5.131',
                    access_token: data.access_token,
                  },
                })
                .then(data => {
                  if (data.response) {
                    console.log(data.response)
                  }
                })
                .catch(error => {
                  // Ошибка
                  console.log(error)
                })
              fetch('http://localhost:3005/api/check-user', {
                method: 'POST', // или 'PUT'
                body: JSON.stringify({ code: params, id: userId }), // данные могут быть 'строкой' или {объектом}!
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                },
              })
                .then(response => {
                  return response.json()
                })
                .then(data => {
                  console.log(data)
                })
            }
          })
          .catch(error => {
            // Ошибка
            console.log(error)
          })
      }
    })
    .catch(error => {
      // Ошибка
      console.log(error)
    })

  return (
    <ConfigProvider appearance='dark'>
      <AdaptivityProvider sizeX={SizeType.VKCOM}>
        <AppRoot mode='full'>
          <Root>
            <SplitLayout
              header={isVKCOM && <PanelHeader separator={false} />}
              style={{ justifyContent: 'center' }}
            >
              {viewWidth.tabletPlus && (
                <SplitCol
                  className={viewWidth.tabletPlus.className}
                  fixed
                  width='100%'
                  maxWidth={280}
                >
                  <Panel>
                    {isVKCOM && <PanelHeader />}
                    <Group>
                      <Cell
                        disabled={activeStory === 'myPets'}
                        style={
                          activeStory === 'myPets'
                            ? {
                                backgroundColor:
                                  'var(--vkui--color_background_secondary)',
                                borderRadius: 8,
                              }
                            : {}
                        }
                        data-story='myPets'
                        onClick={onStoryChange}
                        before={<Icon28NewsfeedOutline />}
                      >
                        Мои питомцы
                      </Cell>
                      {/* <Cell
                        disabled={activeStory === 'addPet'}
                        style={
                          activeStory === 'addPet'
                            ? {
                                backgroundColor:
                                  'var(--vkui--color_background_secondary)',
                                borderRadius: 8,
                              }
                            : {}
                        }
                        data-story='addPet'
                        onClick={onStoryChange}
                        before={<Icon28NewsfeedOutline />}
                      >
                        addPet
                      </Cell> */}
                      <Cell
                        disabled={activeStory === 'searchPair'}
                        style={
                          activeStory === 'searchPair'
                            ? {
                                backgroundColor:
                                  'var(--vkui--color_background_secondary)',
                                borderRadius: 8,
                              }
                            : {}
                        }
                        data-story='searchPair'
                        onClick={onStoryChange}
                        before={<Icon28ServicesOutline />}
                      >
                        Найти пару
                      </Cell>
                      <Cell
                        disabled={activeStory === 'messages'}
                        style={
                          activeStory === 'messages'
                            ? {
                                backgroundColor:
                                  'var(--vkui--color_background_secondary)',
                                borderRadius: 8,
                              }
                            : {}
                        }
                        data-story='messages'
                        onClick={onStoryChange}
                        before={<Icon28ServicesOutline />}
                      >
                        messages
                      </Cell>
                      <Cell
                        disabled={activeStory === 'clips'}
                        style={
                          activeStory === 'clips'
                            ? {
                                backgroundColor:
                                  'var(--vkui--color_background_secondary)',
                                borderRadius: 8,
                              }
                            : {}
                        }
                        data-story='clips'
                        onClick={onStoryChange}
                        before={<Icon28ServicesOutline />}
                      >
                        clips
                      </Cell>
                      <Cell
                        disabled={activeStory === 'profile'}
                        style={
                          activeStory === 'profile'
                            ? {
                                backgroundColor:
                                  'var(--vkui--color_background_secondary)',
                                borderRadius: 8,
                              }
                            : {}
                        }
                        data-story='profile'
                        onClick={onStoryChange}
                        before={<Icon28ServicesOutline />}
                      >
                        profile
                      </Cell>
                    </Group>
                  </Panel>
                </SplitCol>
              )}

              <SplitCol
                width='100%'
                maxWidth='760px'
                stretchedOnMobile
                autoSpaced
              >
                <Epic
                  activeStory={activeStory}
                  tabbar={
                    viewWidth.tabletMinus && (
                      <Tabbar className={viewWidth.tabletMinus.className}>
                        <TabbarItem
                          onClick={onStoryChange}
                          selected={activeStory === 'myPets'}
                          data-story='myPets'
                          text='Мои питомцы'
                        >
                          <Icon28NewsfeedOutline />
                        </TabbarItem>
                        <TabbarItem
                          onClick={onStoryChange}
                          selected={activeStory === 'searchPair'}
                          data-story='searchPair'
                          text='Найти пару'
                        >
                          <Icon28ServicesOutline />
                        </TabbarItem>
                        <TabbarItem
                          onClick={onStoryChange}
                          selected={activeStory === 'messages'}
                          data-story='messages'
                          indicator={
                            <Counter size='s' mode='prominent'>
                              12
                            </Counter>
                          }
                          text='Сообщения'
                        >
                          <Icon28ServicesOutline />
                        </TabbarItem>
                        <TabbarItem
                          onClick={onStoryChange}
                          selected={activeStory === 'clips'}
                          data-story='clips'
                          text='Клипы'
                        >
                          <Icon28ServicesOutline />
                        </TabbarItem>
                        <TabbarItem
                          onClick={onStoryChange}
                          selected={activeStory === 'profile'}
                          data-story='profile'
                          indicator={<Badge mode='prominent' />}
                          text='Профиль'
                        >
                          <Icon28ServicesOutline />
                        </TabbarItem>
                      </Tabbar>
                    )
                  }
                >
                  <View id='myPets' activePanel='myPets'>
                    <Panel id='myPets'>
                      <PanelHeader after={<Avatar size={16} />}>
                        Мои питомцы
                      </PanelHeader>
                      <Group className='card__container'>
                        <CardGrid size='s'>
                          <ContentCard
                            onClick={() => setActiveStory('PetsProfile')}
                            src='https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80'
                            // subtitle='unsplash'
                            header='Кличка питомца'
                            text='Порода'
                            height='100%'
                            maxHeight={200}
                          />
                          <ContentCard
                            onClick={() => setActiveStory('PetsProfile')}
                            src='https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80'
                            // subtitle='unsplash'
                            header='Кличка питомца'
                            text='Порода'
                            height='100%'
                            maxHeight={200}
                          />
                          <ContentCard
                            onClick={() => setActiveStory('PetsProfile')}
                            src='https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80'
                            // subtitle='unsplash'
                            header='Кличка питомца'
                            text='Порода'
                            height='100%'
                            maxHeight={200}
                          />
                        </CardGrid>

                        {/* <Separator /> */}
                        <Div className='card__btn'>
                          <Button
                            mode='secondary'
                            width={238}
                            after={<Icon12Add />}
                            onClick={() => setActiveStory('addPet')}
                          >
                            Добавить
                          </Button>
                        </Div>
                      </Group>
                    </Panel>
                  </View>

                  <View id='addPet' activePanel='addPet'>
                    <Panel id='addPet'>
                      <PanelHeader
                        before={
                          <PanelHeaderBack
                            onClick={() => setActiveStory('myPets')}
                          />
                        }
                      >
                        Добавление
                      </PanelHeader>
                      <Group>
                        <FormLayout>
                          <FormLayoutGroup mode='horizontal'>
                            <FormItem top='Имя питомца'>
                              <Input />
                            </FormItem>
                            <FormItem top='Вид животного'>
                              <Select
                                placeholder='Выберите вид'
                                options={[
                                  {
                                    value: '0',
                                    label: 'Собака',
                                  },
                                  {
                                    value: '1',
                                    label: 'Кошка',
                                  },
                                ]}
                              />
                            </FormItem>
                            <FormItem top='Порода'>
                              <Input />
                            </FormItem>
                          </FormLayoutGroup>

                          <FormItem top='Пол'>
                            <Select
                              placeholder=''
                              options={[
                                {
                                  value: '0',
                                  label: 'Кобеля',
                                },
                                {
                                  value: '1',
                                  label: 'Самку',
                                },
                              ]}
                            />
                          </FormItem>
                          <FormItem top='Дата рождения'>
                            <DatePicker
                              min={{ day: 1, month: 1, year: 1990 }}
                              max={{ day: 1, month: 1, year: 2022 }}
                              onDateChange={value => {
                                console.log(value)
                              }}
                              dayPlaceholder='ДД'
                              monthPlaceholder='ММММ'
                              yearPlaceholder='ГГГГ'
                            />
                          </FormItem>

                          <FormItem top='Тип шерсти'>
                            <Select
                              placeholder='Укажите тип шерсти'
                              options={[
                                {
                                  value: '0',
                                  label: 'Без шерсти',
                                },
                                {
                                  value: '1',
                                  label: 'Короткая шерсть',
                                },
                                {
                                  value: '2',
                                  label: 'Средняя шерсть',
                                },
                                {
                                  value: '3',
                                  label: 'Длинная шерсть',
                                },
                              ]}
                            />
                          </FormItem>
                          <FormItem top='Вес'>
                            <Input placeholder='Укажите вес' />
                          </FormItem>
                          <FormItem top='Стерилизация'>
                            <RadioGroup mode='horizontal' top='Стерилизация'>
                              <Radio name='pay' value='cash'>
                                Проведена
                              </Radio>
                              <Radio name='pay' value='card'>
                                Не проведена
                              </Radio>
                            </RadioGroup>
                          </FormItem>

                          <FormItem top='Происхождение'>
                            <Select
                              placeholder='Выберите происхождение'
                              options={[
                                {
                                  value: '0',
                                  label: '',
                                },
                                {
                                  value: '1',
                                  label: 'Короткая шерсть',
                                },
                                {
                                  value: '2',
                                  label: 'Средняя шерсть',
                                },
                                {
                                  value: '3',
                                  label: 'Длинная шерсть',
                                },
                              ]}
                            />
                          </FormItem>

                          <FormItem top='Загрузите ваше фото'>
                            <File
                              before={<Icon24Camera role='presentation' />}
                              size='m'
                            >
                              Открыть галерею
                            </File>
                          </FormItem>
                          <FormItem top='Описание'>
                            <Textarea />
                          </FormItem>
                          <Checkbox>
                            Согласен со всем <Link>этим</Link>
                          </Checkbox>
                          <FormItem>
                            <Button size='l' stretched>
                              Добавить
                            </Button>
                          </FormItem>
                        </FormLayout>
                      </Group>
                    </Panel>
                  </View>

                  <View id='PetsProfile' activePanel='PetsProfile'>
                    <Panel id='PetsProfile'>
                      <PanelHeader
                        before={
                          <PanelHeaderBack
                            onClick={() => setActiveStory('myPets')}
                          />
                        }
                      >
                        Профиль питомца
                      </PanelHeader>
                      <Group>
                        <Gradient className='profile-pets__container'>
                          <Avatar
                            src='/src/img/mops.jpg'
                            size={196}
                            className='profile-pets__avatar'
                          />
                          <Group className='profile-pets__group'>
                            <Div>
                              <Title
                                style={{ marginBottom: 8, marginTop: 20 }}
                                level='2'
                                weight='2'
                              >
                                Кличка
                              </Title>
                            </Div>
                            <Separator />
                            <SimpleCell>
                              <InfoRow header='Пол'>Самец</InfoRow>
                            </SimpleCell>
                            <SimpleCell>
                              <InfoRow header='Порода'>Овчарка</InfoRow>
                            </SimpleCell>
                            <SimpleCell>
                              <InfoRow header='Пол'>Самец</InfoRow>
                            </SimpleCell>
                          </Group>
                        </Gradient>
                        {/* <Gradient mode='tint' to={direction} style={styles}>
                          <Avatar size={96} />
                          <Title
                            style={{ marginBottom: 8, marginTop: 20 }}
                            level='2'
                            weight='2'
                          >
                            Алексей Мазелюк
                          </Title>
                          <Text
                            style={{
                              marginBottom: 24,
                              color: 'var(--vkui--color_text_secondary)',
                            }}
                          >
                            Учащийся
                          </Text>
                          <Button size='m' mode='secondary'>
                            Редактировать
                          </Button>
                        </Gradient>
                        <Group mode='plain'>
                          <Header>Учебные заведения и классы</Header>
                          <SimpleCell
                            before={<Icon28ServicesOutline />}
                            subtitle='Екатеринбург'
                          >
                            Школа №180
                          </SimpleCell>
                          <CellButton before={<Icon28ServicesOutline />}>
                            Добавить учебное заведение
                          </CellButton>
                        </Group> */}
                      </Group>
                    </Panel>
                  </View>

                  <View id='searchPair' activePanel='searchPair'>
                    <Panel id='searchPair'>
                      <PanelHeader before={<PanelHeaderBack />}>
                        Приложение для поиска пары для собаки
                      </PanelHeader>
                      <Group>
                        <FormLayout>
                          <FormItem top='Выберите пол'>
                            <NativeSelect>
                              <option value='m'>Самец</option>
                              <option value='f'>Самка</option>
                            </NativeSelect>
                          </FormItem>

                          <FormItem top='Выберите породу'>
                            <NativeSelect>
                              <option value='m'>Овчарка</option>
                              <option value='f'>Пекинес</option>
                            </NativeSelect>
                          </FormItem>

                          <FormItem
                            top='Введите название породы'
                            // status={formItemStatus}
                          >
                            <Input
                              getRef={textInput}
                              type='text'
                              placeholder='Например: Овчарка'
                              // defaultValue=''
                              after={
                                <IconButton
                                  hoverMode='opacity'
                                  aria-label='Очистить поле'
                                  onClick={clear}
                                >
                                  <Icon16Clear />
                                </IconButton>
                              }
                            />
                          </FormItem>
                          <FormItem top='Возраст от 1 до 20'>
                            <Slider
                              step={1}
                              min={0}
                              max={20}
                              value={Number(value2)}
                              onChange={setValue2}
                            />
                          </FormItem>
                          <FormItem>
                            <Input
                              onChange={e => setValue2(e.target.value)}
                              value={String(value2)}
                              options={options()}
                            />
                          </FormItem>
                          <FormItem
                            top='Возраст'
                            // status={formItemStatus}
                          >
                            <Input
                              getRef={textInput}
                              type='text'
                              placeholder='Например: 5'
                              // defaultValue=''
                              after={
                                <IconButton
                                  hoverMode='opacity'
                                  aria-label='Очистить поле'
                                  onClick={clear}
                                >
                                  <Icon16Clear />
                                </IconButton>
                              }
                            />
                          </FormItem>
                        </FormLayout>
                      </Group>
                      <Group style={{ height: '100%' }}>
                        <SplitLayout>
                          <SplitCol>
                            <CardGrid
                              className='search-pair__cardGrid'
                              size='m'
                              style={{ justifyContent: 'center' }}
                            >
                              <Card mode='shadow'>
                                <div style={{ height: 196 }} />
                              </Card>
                            </CardGrid>
                          </SplitCol>
                          <SplitCol>
                            <Spinner
                              size='large'
                              style={{ margin: '98px 0' }}
                            />
                          </SplitCol>
                          <SplitCol>
                            <CardGrid
                              size='m'
                              style={{ justifyContent: 'center' }}
                            >
                              <Card mode='shadow'>
                                <div style={{ height: 196 }} />
                              </Card>
                            </CardGrid>
                          </SplitCol>
                        </SplitLayout>
                      </Group>
                    </Panel>
                  </View>

                  <View id='messages' activePanel='messages'>
                    <Panel id='messages'>
                      <PanelHeader before={<PanelHeaderBack />}>
                        Сообщения
                      </PanelHeader>
                      <Group style={{ height: '1000px' }}>
                        <Placeholder
                          icon={
                            <Icon28ServicesOutline width={56} height={56} />
                          }
                        ></Placeholder>
                      </Group>
                    </Panel>
                  </View>

                  <View id='clips' activePanel='clips'>
                    <Panel id='clips'>
                      <PanelHeader before={<PanelHeaderBack />}>
                        Клипы
                      </PanelHeader>
                      <Group style={{ height: '1000px' }}>
                        <Placeholder
                          icon={
                            <Icon28ServicesOutline width={56} height={56} />
                          }
                        ></Placeholder>
                      </Group>
                    </Panel>
                  </View>

                  <View id='profile' activePanel='profile'>
                    <Panel id='profile'>
                      <PanelHeader before={<PanelHeaderBack />}>
                        Профиль
                      </PanelHeader>
                      <Group style={{ height: '1000px' }}>
                        <Placeholder
                          icon={
                            <Icon28ServicesOutline width={56} height={56} />
                          }
                        ></Placeholder>
                      </Group>
                    </Panel>
                  </View>
                </Epic>
              </SplitCol>
            </SplitLayout>
          </Root>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  )

  const modalRoot = (
    <ConfigProvider>
      <ModalRoot activeModal={modal}>
        <ModalPage
          id={modals[0]}
          onClose={() => setModal(null)}
          header={<ModalPageHeader>Modal 1</ModalPageHeader>}
        >
          <Group>
            <CellButton onClick={() => setModal(modals[1])}>Modal 2</CellButton>
            <CellButton onClick={() => setModal(modals[2])}>Modal 3</CellButton>
          </Group>
        </ModalPage>
        <ModalPage
          id={modals[1]}
          onClose={() => setModal(null)}
          header={<ModalPageHeader>Modal 2</ModalPageHeader>}
        >
          <Group>
            <CellButton onClick={() => setModal(modals[0])}>Modal 1</CellButton>
            <CellButton onClick={() => setModal(modals[2])}>Modal 3</CellButton>
          </Group>
        </ModalPage>

        <ModalPage
          id={modals[2]}
          onClose={() => setModal(null)}
          header={<ModalPageHeader>Modal 3</ModalPageHeader>}
        >
          <Group>
            <CellButton onClick={() => setModal(modals[0])}>Modal 1</CellButton>
            <CellButton onClick={() => setModal(modals[1])}>Modal 2</CellButton>
          </Group>
        </ModalPage>
      </ModalRoot>
    </ConfigProvider>
  )

  // return (
  //   <ConfigProvider appearance='dark'>
  //     <AdaptivityProvider sizeX={SizeType.VKCOM}>
  //       <AppRoot mode='full'>
  //         <Root>
  //           <SplitLayout
  //             style={{ justifyContent: 'center' }}
  //             header={!isVKCOM && <PanelHeader separator={false} />}
  //             popout={popout}
  //             modal={modalRoot}
  //           >
  //             {viewWidth.tabletPlus && (
  //               <SplitCol
  //                 className={viewWidth.tabletPlus.className}
  //                 fixed
  //                 width='100%'
  //                 maxWidth={280}
  //               >
  //                 <Panel>
  //                   {!isVKCOM && <PanelHeader />}
  //                   <Group>
  //                     {panels.map(i => (
  //                       <Cell
  //                         key={i}
  //                         disabled={i === panel}
  //                         style={
  //                           i === panel
  //                             ? {
  //                                 backgroundColor:
  //                                   'var(--vkui--color_background_secondary)',
  //                                 borderRadius: 8,
  //                               }
  //                             : {}
  //                         }
  //                         onClick={() => setPanel(i)}
  //                       >
  //                         {i}
  //                       </Cell>
  //                     ))}
  //                     <Separator />
  //                     <Cell onClick={() => setModal(modals[0])}>modal 1</Cell>
  //                     <Cell onClick={() => setModal(modals[1])}>modal 2</Cell>
  //                     <Cell onClick={() => setModal(modals[2])}>modal 3</Cell>
  //                     <Cell
  //                       onClick={() =>
  //                         setPopout(
  //                           <Alert
  //                             header='Alert!'
  //                             onClose={() => setPopout(null)}
  //                           />
  //                         )
  //                       }
  //                     >
  //                       alert
  //                     </Cell>
  //                   </Group>
  //                 </Panel>
  //               </SplitCol>
  //             )}

  //             <SplitCol
  //               width='100%'
  //               maxWidth='992px'
  //               padding='0 0 0 10px'
  //               stretchedOnMobile
  //               autoSpaced
  //             >
  //               <View activePanel={panel}>
  //                 <Panel id={panels[0]}>
  //                   <PanelHeader after={<Avatar size={16} />}>
  //                     Мои питомцы
  //                   </PanelHeader>
  //                   <Group className='card__container'>
  //                     <Cell
  //                       className='card__dog'
  //                       expandable
  //                       after={<Avatar size={56} />}
  //                       onClick={() => setPanel(panels[2])}
  //                     >
  //                       <Title level='2' weight='2'>
  //                         Кличка
  //                       </Title>
  //                     </Cell>

  //                     <CardGrid size='s'>
  //                       <Card>
  //                         <div style={{ paddingBottom: '92%' }} />
  //                       </Card>
  //                       <Card>
  //                         <div style={{ paddingBottom: '92%' }} />
  //                       </Card>
  //                       <Card>
  //                         <div style={{ paddingBottom: '92%' }} />
  //                       </Card>
  //                     </CardGrid>

  //                     {/* <Separator /> */}
  //                     <Div className='card__btn'>
  //                       <Button
  //                         mode='secondary'
  //                         width={238}
  //                         after={<Icon12Add />}
  //                         onClick={() => setPanel(panels[1])}
  //                       >
  //                         Добавить
  //                       </Button>
  //                     </Div>
  //                   </Group>
  //                 </Panel>

  //                 <Panel id={panels[1]}>
  //                   <PanelHeader
  //                     before={
  //                       <PanelHeaderBack onClick={() => setPanel(panels[0])} />
  //                     }
  //                   >
  //                     Добавление
  //                   </PanelHeader>
  //                   <Group>
  //                     <FormLayout>
  //                       <FormLayoutGroup mode='horizontal'>
  //                         <FormItem top='Имя питомца'>
  //                           <Input />
  //                         </FormItem>
  //                         <FormItem top='Порода'>
  //                           <Input />
  //                         </FormItem>
  //                       </FormLayoutGroup>

  //                       <FormItem top='Категория'>
  //                         <Select
  //                           placeholder='Выберите категорию'
  //                           options={[
  //                             {
  //                               value: '0',
  //                               label: 'Собака',
  //                             },
  //                             {
  //                               value: '1',
  //                               label: 'Кошка',
  //                             },
  //                           ]}
  //                         />
  //                       </FormItem>

  //                       <FormItem top='Пол'>
  //                         <Select
  //                           placeholder='Выберите пол'
  //                           options={[
  //                             {
  //                               value: '0',
  //                               label: 'Самец',
  //                             },
  //                             {
  //                               value: '1',
  //                               label: 'Самка',
  //                             },
  //                           ]}
  //                         />
  //                       </FormItem>
  //                       <FormItem top='Описание'>
  //                         <Textarea />
  //                       </FormItem>
  //                       <Checkbox>
  //                         Согласен со всем <Link>этим</Link>
  //                       </Checkbox>
  //                       <FormItem>
  //                         <Button size='l' stretched>
  //                           Добавить
  //                         </Button>
  //                       </FormItem>
  //                     </FormLayout>
  //                   </Group>
  //                 </Panel>

  //                 <Panel id={panels[2]}>
  //                   <PanelHeader
  //                     before={
  //                       <PanelHeaderBack onClick={() => setPanel(panels[0])} />
  //                     }
  //                   >
  //                     Профиль питомца
  //                   </PanelHeader>
  //                   <Group>
  //                     <Placeholder
  //                       icon={<Icon56MessageReadOutline />}
  //                       action={
  //                         <Button size='m' mode='tertiary'>
  //                           Показать все сообщения
  //                         </Button>
  //                       }
  //                     >
  //                       Нет непрочитанных
  //                       <br />
  //                       сообщений
  //                     </Placeholder>
  //                   </Group>
  //                 </Panel>
  //               </View>
  //             </SplitCol>
  //           </SplitLayout>
  //         </Root>
  //       </AppRoot>
  //     </AdaptivityProvider>
  //   </ConfigProvider>
  // )
}

;<Example />

export default Example
