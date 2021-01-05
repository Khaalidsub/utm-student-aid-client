import * as React from "react"
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Button, Flex } from "@chakra-ui/react"
function Home() {
    return (
        <Flex direction="column" align="flex-end" >
            <Button mb="4" size="md">Add</Button>
            <Table variant="simple" size="md">
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>School Name</Th>
                        <Th>Programs</Th>
                        <Th isNumeric>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Computing</Td>
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



export default Home