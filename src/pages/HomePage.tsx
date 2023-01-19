import { Container } from '@mui/material'
import { Box, Button, ButtonGroup } from '@mui/material'
import { useEffect, useState } from 'react'
import GameScreen from '../components/GameScreen/GameScreen'
import ScenarioOptions from '../components/ScenarioOptions/ScenarioOptions'
import { ScenarioRoles } from '../data/roles'

const HomePage = () => {
  const [scenario, setScenario] = useState<ScenarioRoles[]>([])
  const [playersLength, setPlayerLength] = useState(0)
  const [names, setNames] = useState<string[]>([])
  const [start, setStart] = useState(false)

  console.log(scenario)

  useEffect(() => {
    const localData = localStorage.getItem('names')
    if (localData) {
      setNames(JSON.parse(localData))
    }
  }, [])

  return (
    <Container>
      {start ? (
        <GameScreen />
      ) : (
        <ScenarioOptions
          names={names}
          setNames={setNames}
          playersLength={playersLength}
          setPlayerLength={setPlayerLength}
          scenario={scenario}
          setScenario={setScenario}
          setStart={setStart}
        />
      )}
    </Container>
  )
}

export default HomePage
