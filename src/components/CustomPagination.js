import { Box, Pagination } from '@mui/material'
import React from 'react'

const CustomPagination = (props) => {
    const { count, handlePage } = props

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Pagination count={count} onChange={(_, page) => handlePage(page)} color="primary" sx={{ color: "white", margin: "15px 0" }} shape="rounded" />
            </Box>
        </>
    )
}

export default CustomPagination