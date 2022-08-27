import React from "react";
import { Table, Button } from "flowbite-react";

function ListTabel(props) {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{props.number}</Table.Cell>
      <Table.Cell>{props.name}</Table.Cell>
      <Table.Cell>{props.matkul}</Table.Cell>
      <Table.Cell>{props.nilai}</Table.Cell>
      <Table.Cell>{props.index}</Table.Cell>
      <Table.Cell className="inline-flex">
        <Button gradientMonochrome="info" className="btn-info">
          Edit
        </Button>
        <Button gradientMonochrome="failure">Delete</Button>
      </Table.Cell>
    </Table.Row>
  );
}

function Tugas10() {
  return (
    <div className="table-container">
      <Table>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Nama</Table.HeadCell>
          <Table.HeadCell>Mata Kuliah</Table.HeadCell>
          <Table.HeadCell>Nilai</Table.HeadCell>
          <Table.HeadCell>Index Nilai</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <ListTabel number="1" name="Jhon" matkul="Penjaskes" nilai="80" index="B" />
          <ListTabel number="2" name="Doe" matkul="IPA" nilai="100" index="A" />
          <ListTabel number="3" name="Ahmad" matkul="IPS" nilai="50" index="D" />
          <ListTabel number="4" name="Muslim" matkul="Matematika" nilai="70" index="C" />
        </Table.Body>
      </Table>
    </div>
  );
}

export default Tugas10;
