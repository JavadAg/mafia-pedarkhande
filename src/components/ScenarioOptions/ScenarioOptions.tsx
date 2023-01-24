import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  TextField,
  Chip,
  IconButton,
  FormGroup
} from '@mui/material'
import { RiAddCircleLine } from 'react-icons/ri'
import {
  mixedRoles,
  godfatherRoles,
  mafiaRoles,
  ScenarioRoles
} from '../../data/roles'
import _ from 'lodash'
import Role from './Role'

const ScenarioOptions = ({
  scenario,
  setScenario,
  names,
  setNames,
  playersLength,
  setPlayerLength,
  setIsReady,
  roles,
  setRoles
}: {
  scenario: ScenarioRoles[]
  setScenario: Dispatch<SetStateAction<ScenarioRoles[]>>
  names: string[]
  setNames: Dispatch<SetStateAction<string[]>>
  playersLength: number
  setPlayerLength: Dispatch<SetStateAction<number>>
  setIsReady: Dispatch<SetStateAction<boolean>>
  roles: ScenarioRoles[]
  setRoles: Dispatch<SetStateAction<ScenarioRoles[]>>
}) => {
  const [pageNumber, setPageNumber] = useState(1)
  const [name, setName] = useState('')
  const [existList, setExistList] = useState<ScenarioRoles[]>([])
  const [scenarioName, setScenarioName] = useState('')

  const handleStart = () => {
    if (scenarioName === 'مافیا') {
      localStorage.setItem('mafiaRoles', JSON.stringify(roles))
    } else if (scenarioName === 'پدرخوانده') {
      localStorage.setItem('godfatherRoles', JSON.stringify(roles))
    } else {
      localStorage.setItem('mixedRoles', JSON.stringify(roles))
    }
    setIsReady(true)
  }
  const handleCheckLocal = async () => {
    if (scenarioName === 'مافیا') {
      const localArray = localStorage.getItem('mafiaRoles')
      if (localArray) {
        const parsedArray: ScenarioRoles[] = JSON.parse(localArray)
        const intersection = scenario.filter((element) =>
          parsedArray.some((b) => b.name === element.name)
        )
        setExistList(intersection)
        setRoles(intersection.length > 0 ? intersection : scenario)
      }
    } else if (scenarioName === 'پدرخوانده') {
      const localArray = localStorage.getItem('godfatherRoles')
      if (localArray) {
        const parsedArray: ScenarioRoles[] = JSON.parse(localArray)
        const intersection = scenario.filter((element) =>
          parsedArray.some((b) => b.name === element.name)
        )
        setExistList(intersection)
        setRoles(intersection.length > 0 ? intersection : scenario)
      }
    } else {
      const localArray = localStorage.getItem('mixedRoles')
      if (localArray) {
        const parsedArray: ScenarioRoles[] = JSON.parse(localArray)
        const intersection = scenario.filter((element) =>
          parsedArray.some((b) => b.name === element.name)
        )
        setExistList(intersection)
        setRoles(intersection.length > 0 ? intersection : scenario)
      }
    }
  }
  useEffect(() => {
    handleCheckLocal()
  }, [pageNumber])

  const page = () => {
    if (pageNumber === 1) {
      return (
        <Box>
          <ButtonGroup
            size='large'
            variant='contained'
            orientation='vertical'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              mt: '2rem',
              padding: '1rem',
              boxShadow: 'none'
            }}
          >
            <Button
              onClick={(e) => {
                setScenario(mafiaRoles)

                setPageNumber((current) => current + 1)
                setScenarioName(e.currentTarget.innerText)
              }}
              sx={{
                width: '10rem',
                fontSize: '1.5rem',
                color: (theme) => theme.palette.grey[100],
                backgroundColor: (theme) => theme.palette.grey[900]
              }}
            >
              مافیا
            </Button>
            <Button
              onClick={(e) => {
                setScenario(godfatherRoles)
                setRoles(existList.length > 0 ? existList : godfatherRoles)
                setPageNumber((current) => current + 1)
                setScenarioName(e.currentTarget.innerText)
              }}
              sx={{
                width: '10rem',
                fontSize: '1.5rem',
                color: (theme) => theme.palette.grey[100],
                backgroundColor: (theme) => theme.palette.grey[900]
              }}
            >
              پدرخوانده
            </Button>
            <Button
              onClick={(e) => {
                setScenario(mixedRoles)
                setRoles(existList.length > 0 ? existList : mixedRoles)
                setPageNumber((current) => current + 1)
                setScenarioName(e.currentTarget.innerText)
              }}
              sx={{
                width: '10rem',
                fontSize: '1.5rem',
                color: (theme) => theme.palette.grey[100],
                backgroundColor: (theme) => theme.palette.grey[900]
              }}
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
          {names.length > 0 && (
            <Box
              width='100%'
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                padding: '1rem',
                borderRadius: '1rem',
                backgroundColor: (theme) => theme.palette.grey[900]
              }}
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
          )}

          <Box
            width='100%'
            sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
          >
            <FormGroup>
              {scenario.map((role) => {
                return (
                  <Role
                    existList={existList}
                    key={role.id}
                    role={role}
                    roles={roles}
                    setRoles={setRoles}
                  />
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
        size='large'
        variant='contained'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: '2rem',
          padding: '1rem',
          boxShadow: 'none'
        }}
      >
        <Button
          color='info'
          disabled={
            pageNumber === 1 ||
            names.length !== playersLength ||
            playersLength < 5 ||
            roles.length !== playersLength
          }
          onClick={() => handleStart()}
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
