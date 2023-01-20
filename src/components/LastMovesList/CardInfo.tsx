import {
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogTitle,
  IconButton,
  Typography
} from '@mui/material'
import { useState } from 'react'

export interface SimpleDialogProps {
  open: boolean
  handleRemoveCard: (cardId: string) => void
  card: {
    id: string
    name: string
    number: number
    img: string
  }
  onClose: () => void
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, card, open, handleRemoveCard } = props

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog
      onClose={handleClose}
      open={open}
    >
      <DialogTitle
        sx={{
          background: 'linear-gradient(to right bottom, #5c0910, #262b72)',
          color: (theme) => theme.palette.grey[200],
          fontSize: '1.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.75rem'
        }}
      >
        {onClose ? (
          <IconButton
            aria-label='close'
            onClick={() => {
              handleRemoveCard(card.id)
              onClose
            }}
            sx={{
              color: (theme) => theme.palette.grey[200]
            }}
          >
            <Typography sx={{ fontSize: '1rem' }}>متوجه شدم</Typography>
          </IconButton>
        ) : null}
      </DialogTitle>
      <Card
        sx={{ backgroundColor: 'black', borderRadius: '0' }}
        variant='outlined'
      >
        <CardContent>
          <CardMedia
            sx={{ borderRadius: '0.5rem' }}
            component='img'
            height='100%'
            image={card.img}
            alt='playerimg'
          />
        </CardContent>
      </Card>
    </Dialog>
  )
}

const CardInfo = ({
  card,
  handleRemoveCard
}: {
  card: {
    id: string
    name: string
    number: number
    img: string
  }
  handleRemoveCard: (cardId: string) => void
}) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Card
        onClick={handleClickOpen}
        sx={{
          background: 'linear-gradient(to right bottom, #141414, #5d1697)',
          color: (theme) => theme.palette.grey[300],
          borderRadius: '1rem',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <CardContent>
          <Typography variant='h5'>{card.number}</Typography>
        </CardContent>
      </Card>
      <SimpleDialog
        card={card}
        handleRemoveCard={handleRemoveCard}
        open={open}
        onClose={handleClose}
      />
    </>
  )
}

export default CardInfo
