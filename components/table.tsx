import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
} from "@nextui-org/table";
import { table } from "@/config/table-db";

export default function Tableprice() {
    return (
        <div className="flex flex-col w-full max-w-4xl gap-3">
            <Table
                isStriped
                color="warning"
                aria-label="Example static collection table"
                shadow="md"
            >
                <TableHeader>
                    <TableColumn className="text-start">
                        Características
                    </TableColumn>
                    <TableColumn>Básica</TableColumn>
                    <TableColumn>Popular</TableColumn>
                    <TableColumn>Premiun</TableColumn>
                </TableHeader>
                <TableBody>
                    {table.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="text-start">
                                {item.cualidad}
                            </TableCell>
                            <TableCell>{item.basica ? "✅" : ""}</TableCell>
                            <TableCell>{item.masElegida ? "✅" : ""}</TableCell>
                            <TableCell>{item.premium ? "✅" : ""}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
