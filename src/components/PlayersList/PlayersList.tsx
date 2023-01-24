import { Box, Button, IconButton, Snackbar } from '@mui/material'
import { useEffect, useState } from 'react'
import { RiCloseLine, RiDeleteBack2Line } from 'react-icons/ri'
import { ScenarioRoles } from '../../data/roles'
import PlayerInfo from './PlayerInfo'

interface Player {
  id: string
  name: string
  role: string
  img: string
}

const PlayersList = ({
  roles,
  names,
  setStart,
  setIsReady
}: {
  roles: ScenarioRoles[]
  setIsReady: React.Dispatch<React.SetStateAction<boolean>>
  names: string[]
  setStart: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [players, setPlayers] = useState<Player[]>([])

  const [open, setOpen] = useState(false)
  const [disable, setDisable] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const action = (
    <>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={handleClose}
      >
        <RiCloseLine fontSize='small' />
      </IconButton>
    </>
  )

  const shuffle = () => {
    setPlayers([])
    let players = []
    let left: Player[] = JSON.parse(JSON.stringify(roles))
    for (let i of names) {
      if (left.length > 0) {
        let ran = Math.floor(Math.random() * left.length)
        players.push({
          id: left[ran].id,
          name: i,
          role: left[ran].name,
          img: left[ran].img
        })
        left.splice(ran, 1)
      }
    }

    setPlayers(players)
    handleClick()
  }

  useEffect(() => {
    if (roles.length > 0) shuffle()
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        mt: '5rem'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <Button
          variant='contained'
          size='medium'
          disabled={disable || players.length === 0}
          color='success'
          sx={{ fontSize: '1rem' }}
          onClick={() => setStart(true)}
        >
          شروع
        </Button>
        <Button
          variant='contained'
          size='medium'
          disabled={disable}
          color='secondary'
          sx={{ fontSize: '1rem' }}
          onClick={() => shuffle()}
        >
          بر بزن
        </Button>
        <Button
          variant='contained'
          size='medium'
          disabled={disable}
          color='secondary'
          sx={{ fontSize: '1rem' }}
          onClick={() => setIsReady(false)}
        >
          صفحه قبل
        </Button>
        <IconButton
          size='medium'
          aria-label='close'
          color='inherit'
          onClick={() => setDisable((current) => !current)}
        >
          <RiDeleteBack2Line fontSize='2rem' />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          mt: '2rem'
        }}
      >
        {players.map((player) => (
          <PlayerInfo
            key={player.id}
            player={player}
          />
        ))}
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message='بر زدم'
        action={action}
      />
    </Box>
  )
}

export default PlayersList
