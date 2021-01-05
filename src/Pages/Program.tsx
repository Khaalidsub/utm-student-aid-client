import * as React from "react"
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Button, Flex } from "@chakra-ui/react"
function Program() {
    return (
        <Flex direction="column" align="flex-end" >
            <Button mb="4" size="md">Add</Button>
            <Table variant="simple" size="md">
                <TableCaption>Courses</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Course Name</Th>
                        <Th>Course code</Th>
                        <Th>Sections</Th>
                        <Th isNumeric>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Data Structures</Td>
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



export default Program