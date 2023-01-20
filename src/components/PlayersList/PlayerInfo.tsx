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
  player: {
    id: string
    name: string
    role: string
    img: string
  }
  onClose: () => void
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, player, open } = props

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
        {player.role}
        {onClose ? (
          <IconButton
            aria-label='close'
            onClick={onClose}
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
            image={player.img}
            alt='playerimg'
          />
        </CardContent>
      </Card>
    </Dialog>
  )
}

const PlayerInfo = ({
  player
}: {
  player: {
    id: string
    name: string
    role: string
    img: string
  }
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
          <Typography variant='h5'>{player.name}</Typography>
        </CardContent>
      </Card>
      <SimpleDialog
        player={player}
        open={open}
        onClose={handleClose}
      />
    </>
  )
}

export default PlayerInfo
