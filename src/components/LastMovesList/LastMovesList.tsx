import { Box, Button, IconButton, Snackbar } from '@mui/material'
import { lastMoves } from '../../data/roles'
import CardInfo from './CardInfo'
import { useState } from 'react'
import { RiCloseLine, RiDeleteBack2Line } from 'react-icons/ri'

const LastMovesList = () => {
  const [open, setOpen] = useState(false)
  const [lastMovesCards, setLastMovesCards] = useState<any[]>(lastMoves)

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

  const numbersArray = Array.from(
    { length: lastMovesCards.length },
    (_, i) => i + 1
  )

  const shuffle = () => {
    setLastMovesCards([])
    let cards = []
    let left = JSON.parse(JSON.stringify(lastMovesCards))
    for (let i of numbersArray) {
      if (left.length > 0) {
        let ran = Math.floor(Math.random() * left.length)
        cards.push({
          id: left[ran].id,
          name: left[ran].name,
          number: i,
          img: left[ran].img
        })
        left.splice(ran, 1)
      }
    }

    setLastMovesCards(cards)
    handleClick()
  }

  const handleRemoveCard = (cardId: string) => {
    console.log(cardId)
    setLastMovesCards(lastMovesCards.filter((c) => c.id !== cardId))
    /* shuffle() */
  }

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
          size='large'
          color='secondary'
          sx={{ fontSize: '1.5rem' }}
          onClick={() => shuffle()}
        >
          بر بزن
        </Button>
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
        {lastMovesCards.map((card) => (
          <CardInfo
            key={card.id}
            card={card}
            handleRemoveCard={handleRemoveCard}
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

export default LastMovesList
