import React, { FC, useState } from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'

import ProfileForm from './components/ProfileForm'
import SecurityForm from './components/SecurityForm'
import PageLayout from '../../common/page-layout'

const ProfilePage: FC = () => {
  const [tabIndex, setTabIndex] = useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabIndex(newValue)
  }

  return (
    <PageLayout>
      <Box
        sx={{
          p: 4,
          m: 'auto',
          flexGrow: 1,
          maxWidth: 700,
        }}>
        <TabContext value={tabIndex}>
          <Box sx={{ justifyContent: 'center' }}>
            <TabList onChange={handleChange}>
              <Tab label="Аккаунт" value="1" />
              <Tab label="Безопасность" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ProfileForm />
          </TabPanel>
          <TabPanel value="2">
            <SecurityForm />
          </TabPanel>
        </TabContext>
      </Box>
    </PageLayout>
  )
}

export default ProfilePage
