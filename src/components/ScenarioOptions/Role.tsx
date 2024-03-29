import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
  Box,
  FormControlLabel,
  Checkbox,
  IconButton,
  Typography
} from '@mui/material'
import { RiAddCircleLine, RiIndeterminateCircleLine } from 'react-icons/ri'
import { ScenarioRoles } from '../../data/roles'
import _ from 'lodash'
import { arrayDupCount } from '../../utils/arrayDupCount'

const Role = ({
  role,
  roles,
  setRoles,
  existList
}: {
  role: ScenarioRoles
  roles: ScenarioRoles[]
  setRoles: Dispatch<SetStateAction<ScenarioRoles[]>>
  existList: ScenarioRoles[]
}) => {
  const [checked, setChecked] = useState<boolean>(false)
  let count: number = 0
  if (role.multiple) count = arrayDupCount(roles, role)

  useEffect(() => {
    if (existList.length > 0) {
      setChecked(existList.some((e) => e === role))
    } else {
      setChecked(false)
    }
  }, [existList])

  return (
    <Box
      key={role.id}
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '2rem'
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            checked={checked ? true : false}
            onChange={(e) => {
              if (e.target.checked) {
                setChecked(true)
                setRoles([...roles, role])
              } else {
                setChecked(false)
                setRoles(roles.filter((v) => v.name !== role.name))
              }
            }}
          />
        }
        label={role.name}
      />
      {count > 1 && (
        <>
          {role.multiple && <Typography>{count}</Typography>}
          {role.multiple && (
            <IconButton
              onClick={() => {
                let temp = roles.find((v) => v.name === role.name)
                setRoles(roles.filter((v) => v.id !== temp?.id))
                count = count - 1
              }}
              color='primary'
            >
              <RiIndeterminateCircleLine />
            </IconButton>
          )}
        </>
      )}
      {role.multiple === true && checked === true ? (
        <IconButton
          onClick={() => {
            setRoles([
              ...roles,
              {
                id: crypto.randomUUID(),
                name: role.name,
                img: role.img
              }
            ])
            count = count + 1
          }}
          color='primary'
        >
          <RiAddCircleLine />
        </IconButton>
      ) : (
        ''
      )}
    </Box>
  )
}

export default Role
