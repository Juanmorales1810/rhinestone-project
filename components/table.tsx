import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
} from "@nextui-org/table";
import { table } from "@/config/table-db";
import { Check } from "./icons";
import { barlow } from "@/config/fonts";

export default function Tableprice() {
    return (
        <div className="flex flex-col w-full gap-3">
            <Table
                selectionMode="single"
                color="warning"
                aria-label="Example static collection table"
                shadow="md"
            >
                <TableHeader>
                    <TableColumn
                        className={
                            barlow.className +
                            " text-lg font-bold text-start dark:text-amber-400"
                        }
                    >
                        Características
                    </TableColumn>
                    <TableColumn
                        className={
                            barlow.className +
                            " text-lg font-bold text-center dark:text-amber-400"
                        }
                    >
                        Básica
                    </TableColumn>
                    <TableColumn
                        className={
                            barlow.className +
                            " text-lg font-bold text-center dark:text-amber-400"
                        }
                    >
                        Popular
                    </TableColumn>
                    <TableColumn
                        className={
                            barlow.className +
                            " text-lg font-bold text-center dark:text-amber-400"
                        }
                    >
                        Premiun
                    </TableColumn>
                </TableHeader>
                <TableBody>
                    {table.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="text-start">
                                {item.cualidad}
                            </TableCell>
                            <TableCell>
                                {item.basica ? <Check /> : ""}
                            </TableCell>
                            <TableCell>
                                {item.masElegida ? <Check /> : ""}
                            </TableCell>
                            <TableCell>
                                {item.premium ? <Check /> : ""}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
