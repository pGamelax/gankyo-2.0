import React from "react";
import { twMerge } from "tailwind-merge";


const Table = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <table ref={ref} className={className} {...props}>
      {children}
    </table>
  );
});

Table.displayName = "Table";

const TableHeader = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <thead ref={ref} className={className} {...props}>
        {children}
      </thead>
    );
  }
);

TableHeader.displayName = "TableHeader";

const TableHead = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <th ref={ref} className={className} {...props}>
      {children}
    </th>
  );
});

TableHead.displayName = "TableHead";

const TableRow = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <tr ref={ref} className={twMerge("cursor-pointer",className)} {...props}>
      {children}
    </tr>
  );
})

TableRow.displayName= "TableRow"

const TableCell = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <td ref={ref} className={className} {...props}>
      {children}
    </td>
  );
})

TableCell.displayName = "TableCell"

const TableBody = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <tbody ref={ref} className={className} {...props}>
      {children}
    </tbody>
  );
})
TableBody.displayName="TableBody"

export { Table, TableCell, TableHead, TableHeader, TableRow, TableBody };
