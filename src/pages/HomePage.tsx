import { Container } from '@mui/material'
import { useEffect, useState } from 'react'
import LastMovesList from '../components/LastMovesList/LastMovesList'
import PlayersList from '../components/PlayersList/PlayersList'
import ScenarioOptions from '../components/ScenarioOptions/ScenarioOptions'
import { ScenarioRoles } from '../data/roles'

const HomePage = () => {
  const [scenario, setScenario] = useState<ScenarioRoles[]>([])
  const [playersLength, setPlayerLength] = useState(0)
  const [names, setNames] = useState<string[]>([])
  const [roles, setRoles] = useState<ScenarioRoles[]>([])
  const [isReady, setIsReady] = useState(false)
  const [start, setStart] = useState(false)

  console.log(
    { scenario },
    { playersLength },
    { names },
    { roles },
    { isReady },
    { start }
  )

  function clearAll() {
    setRoles([])
    setPlayerLength(0)
    setScenario([])
    setIsReady(false)
    setStart(false)
  }

  useEffect(() => {
    const storageName = localStorage.getItem('names')
    if (storageName) {
      setNames(JSON.parse(storageName))
    }
  }, [])

  return (
    <Container>
      {isReady ? (
        <>
          {start ? (
            <LastMovesList clearAll={clearAll} />
          ) : (
            <PlayersList
              clearAll={clearAll}
              setStart={setStart}
              roles={roles}
              setIsReady={setIsReady}
              names={names}
            />
          )}
        </>
      ) : (
        <ScenarioOptions
          clearAll={clearAll}
          names={names}
          setNames={setNames}
          playersLength={playersLength}
          setPlayerLength={setPlayerLength}
          scenario={scenario}
          setScenario={setScenario}
          setIsReady={setIsReady}
          roles={roles}
          setRoles={setRoles}
        />
      )}
    </Container>
  )
}

export default HomePage
