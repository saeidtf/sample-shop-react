import { Box, Stack } from '@mui/material'
import React from 'react'
import { PageHeader } from '../../../components/PageHeader'


type CustomHeaderProps = {
    breadCrumb: {
        title: string
        href: string
    }[],
    title: string
    isError?: boolean
    loading?: boolean
    children?: React.ReactNode
}

export default function CustomHeader({ breadCrumb,children, title, isError, loading }: CustomHeaderProps) {
  return (
    <Stack spacing={3} sx={{ width: "100%" }}>
        <PageHeader title={title} breadcrumb={breadCrumb} />
        {isError && <Box>Error</Box>}
        {loading && <Box>Loading...</Box>}
        {!isError && !loading && children}        
      </Stack>
  )
}
