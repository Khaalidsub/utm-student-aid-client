import * as React from "react"
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Button } from "@chakra-ui/react"
function Home() {
    return (
        <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
                <Tr>
                    <Th>School Name</Th>
                    <Th>Programs</Th>
                    <Th>Action</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>Computing</Td>
                    <Td>54</Td>
                    <Td  >
                        <Button>View</Button> |
                        <Button>Edit</Button>
                    </Td>
                </Tr>
                <Tr>
                    <Td>Computing</Td>
                    <Td>54</Td>
                    <Td  >
                        <Button>View</Button> |
                        <Button>Edit</Button>
                    </Td>
                </Tr>
                <Tr>
                    <Td>Computing</Td>
                    <Td>54</Td>
                    <Td  >
                        <Button>View</Button> |
                        <Button>Edit</Button>
                    </Td>
                </Tr>

            </Tbody>
        </Table>
    )
}



export default Home