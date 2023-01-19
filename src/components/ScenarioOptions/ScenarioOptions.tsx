import { Dispatch, SetStateAction, useState } from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  TextField,
  FormControlLabel,
  Checkbox,
  Chip,
  IconButton,
  FormGroup,
  Typography
} from '@mui/material'
import { RiAddCircleLine, RiIndeterminateCircleLine } from 'react-icons/ri'
import {
  mixedRoles,
  godfatherRoles,
  mafiaRoles,
  ScenarioRoles
} from '../../data/roles'
import _ from 'lodash'
import { arrayDupCount } from '../../utils/arrayDupCount'

const ScenarioOptions = ({
  scenario,
  setScenario,
  names,
  setNames,
  playersLength,
  setPlayerLength,
  setStart
}: {
  scenario: ScenarioRoles[]
  setScenario: Dispatch<SetStateAction<ScenarioRoles[]>>
  names: string[]
  setNames: Dispatch<SetStateAction<string[]>>
  playersLength: number
  setPlayerLength: Dispatch<SetStateAction<number>>
  setStart: Dispatch<SetStateAction<boolean>>
}) => {
  const [pageNumber, setPageNumber] = useState(1)
  const [name, setName] = useState('')

  const page = () => {
    if (pageNumber === 1) {
      return (
        <Box>
          <ButtonGroup
            color='primary'
            size='medium'
            variant='contained'
            orientation='vertical'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              mt: '2rem',
              padding: '1rem'
            }}
          >
            <Button
              onClick={() => {
                setScenario(mafiaRoles)
                setPageNumber((current) => current + 1)
              }}
              sx={{ width: '10rem' }}
            >
              مافیا
            </Button>
            <Button
              onClick={() => {
                setScenario(godfatherRoles)
                setPageNumber((current) => current + 1)
              }}
              sx={{ width: '10rem' }}
            >
              پدرخوانده
            </Button>
            <Button
              onClick={() => {
                setScenario(mixedRoles)
                setPageNumber((current) => current + 1)
              }}
              sx={{ width: '10rem' }}
            >
              ترکیبی پررو
            </Button>
          </ButtonGroup>
        </Box>
      )
    } else if (pageNumber === 2) {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mt: '2rem',
            gap: '1rem',
            padding: '1rem'
          }}
        >
          <TextField
            type='number'
            id='outlined-basic'
            onChange={(e) =>
              e.target.value.length <= 2 &&
              setPlayerLength(Number(e.target.value))
            }
            label='تعداد'
            placeholder='عدد وارد کنید'
            variant='outlined'
          />
          <TextField
            type='text'
            onChange={(e) => setName(e.target.value)}
            id='outlined-basic'
            value={name}
            label='نام'
            placeholder='نام بازیکن'
            variant='outlined'
          />
          <IconButton
            disabled={name.length < 1}
            onClick={() => {
              setNames([...names, name])
              localStorage.setItem('names', JSON.stringify([...names, name]))
              setName('')
            }}
            color='primary'
          >
            <RiAddCircleLine />
          </IconButton>
          <Box
            width='100%'
            sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
          >
            {names.map((mappedName, index) => (
              <Chip
                key={index}
                label={mappedName}
                onDelete={() => {
                  setNames(names.filter((name) => name != mappedName))
                  localStorage.setItem(
                    'names',
                    JSON.stringify(names.filter((name) => name != mappedName))
                  )
                }}
              />
            ))}
          </Box>
          <Box
            width='100%'
            sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
          >
            <FormGroup>
              {scenario.map((role) => {
                const count = arrayDupCount(scenario, role)
                console.log(arrayDupCount(scenario, role))
                return (
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: '2rem'
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label={role.name}
                    />
                    {count > 1 && (
                      <>
                        <Typography>{count}</Typography>
                        {role.multiple && (
                          <IconButton
                            disabled={scenario.length == playersLength}
                            onClick={() => {
                              setScenario(
                                scenario.filter((f) => f.name != role.name)
                              )
                            }}
                            color='primary'
                          >
                            <RiIndeterminateCircleLine />
                          </IconButton>
                        )}
                      </>
                    )}
                    {role.multiple && (
                      <IconButton
                        disabled={scenario.length == playersLength}
                        onClick={() => {
                          setScenario([
                            ...scenario,
                            { id: crypto.randomUUID(), name: role.name }
                          ])
                        }}
                        color='primary'
                      >
                        <RiAddCircleLine />
                      </IconButton>
                    )}
                  </Box>
                )
              })}
            </FormGroup>
          </Box>
        </Box>
      )
    }
  }

  return (
    <>
      <ButtonGroup
        size='medium'
        variant='contained'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: '2rem',
          padding: '1rem'
        }}
      >
        <Button
          color='info'
          disabled={
            pageNumber === 1 ||
            names.length !== playersLength ||
            playersLength < 5
          }
          onClick={() => setStart(true)}
        >
          شروع
        </Button>
        <Button
          color='secondary'
          disabled={pageNumber === 1}
          onClick={() => setPageNumber((current) => current - 1)}
        >
          صفحه قبل
        </Button>
      </ButtonGroup>
      {page()}
    </>
  )
}

export default ScenarioOptions
