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
  styles,
  Checkbox,
  Link,
  purpose,
  Tabbar,
  Epic,
  TabbarItem,
  Counter,
  Title,
  email,
  onChange,
  Badge,
  Search,
  onRemove,
  FormLayoutGroup,
  showPatronymic,
  onShowPatronymic,
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
  Icon12Add,
  Icon16Clear,
} from '@vkontakte/icons'
import '@vkontakte/vkui/dist/vkui.css'

// const panels = ['Мои питомцы', 'Мои отклики', 'Отклики', 'Объявления']
const modals = ['modal 1', 'modal 2', 'modal 3']

const Example = ({ formItemStatus }) => {
  const platform = usePlatform()
  const { viewWidth } = useAdaptivityConditionalRender()
  const [activeStory, setActiveStory] = React.useState('profile')
  const onStoryChange = e => setActiveStory(e.currentTarget.dataset.story)
  const isVKCOM = platform !== Platform.VKCOM
  // const [panel, setPanel] = React.useState(panels[0])
  // const [activePanel, setActivePanel] = useState('panel1')
  const [modal, setModal] = React.useState(null)
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
                        {/* <Cell
                          className='card__dog'
                          expandable
                          after={<Avatar size={56} />}
                          onClick={() => setPanel('addPet')}
                        >
                          <Title level='2' weight='2'>
                            Кличка
                          </Title>
                        </Cell> */}

                        <CardGrid size='s'>
                          <Card>
                            <div style={{ paddingBottom: '92%' }} />
                          </Card>
                          <Card>
                            <div style={{ paddingBottom: '92%' }} />
                          </Card>
                          <Card>
                            <div style={{ paddingBottom: '92%' }} />
                          </Card>
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
                    {/* <View id='addPet' activePanel='services'>
                      <Panel id='addPet'>
                        <PanelHeader
                          before={
                            <PanelHeaderBack
                              onClick={() => setActivePanel('myPets')}
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
                              <FormItem top='Парода'>
                                <Input />
                              </FormItem>
                            </FormLayoutGroup>

                            <FormItem top='Категория'>
                              <Select
                                placeholder='Выберите категорию'
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

                            <FormItem top='Пол'>
                              <Select
                                placeholder='Выберите пол'
                                options={[
                                  {
                                    value: '0',
                                    label: 'Самец',
                                  },
                                  {
                                    value: '1',
                                    label: 'Самка',
                                  },
                                ]}
                              />
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
                    </View> */}
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
                            <FormItem top='Парода'>
                              <Input />
                            </FormItem>
                          </FormLayoutGroup>

                          <FormItem top='Категория'>
                            <Select
                              placeholder='Выберите категорию'
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

                          <FormItem top='Пол'>
                            <Select
                              placeholder='Выберите пол'
                              options={[
                                {
                                  value: '0',
                                  label: 'Самец',
                                },
                                {
                                  value: '1',
                                  label: 'Самка',
                                },
                              ]}
                            />
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

                  <View id='searchPair' activePanel='searchPair'>
                    <Panel id='searchPair'>
                      <PanelHeader before={<PanelHeaderBack />}>
                        Поиск пары
                      </PanelHeader>
                      <Group>
                        <FormLayout>
                          <FormItem top='Выберите пол'>
                            <NativeSelect>
                              <option value='m'>Самец</option>
                              <option value='f'>Самка</option>
                            </NativeSelect>
                          </FormItem>

                          <FormItem
                            top='Введите название пароды'
                            status={formItemStatus}
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
  //                         <FormItem top='Парода'>
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
