import * as React from "react"

import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Button, Flex } from "@chakra-ui/react"
function School() {
    return (
        <Flex direction="column" align="flex-end" >
            <Button mb="4" size="md">Add</Button>
            <Table variant="simple" size="md">
                <TableCaption>Programs</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Program Name</Th>
                        <Th>Program code</Th>
                        <Th>Courses</Th>
                        <Th isNumeric>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Software Engineering</Td>
                        <Td>SECJ</Td>
                        <Td>54</Td>
                        <Td isNumeric >
                            <Button>View</Button> |
                <Button>Edit</Button>
                        </Td>
                    </Tr>


                </Tbody>
            </Table>
        </Flex>
    )
}



export default School