import * as React from "react"
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Button, Flex, Container } from "@chakra-ui/react"
function Course() {
    return (
        <Flex direction="column" align="flex-end" >
            <Container>
                <Button mb="4" size="md">Drag & Drop</Button>
                <Button mb="4" size="md">Add</Button>
            </Container>

            <Table variant="simple" size="md">
                <TableCaption>Sections</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Section Name</Th>
                        <Th>Section No.</Th>
                        <Th>Status</Th>

                        <Th isNumeric>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Data Structures</Td>
                        <Td>01</Td>
                        <Td>Active</Td>
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



export default Course