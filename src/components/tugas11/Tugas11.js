import React, { useEffect, useState } from "react";
import axios from "axios";
import {Table} from "flowbite-react"

const Tugas11 = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://backendexample.sanbercloud.com/api/student-scores")
      .then((res) => {
        // console.log(res)
      setData([...res.data]);
      })
      .catch((error) => {});
  }, []);

  console.log(data);
  return (
    <>
     <Table>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Nama</Table.HeadCell>
          <Table.HeadCell>Mata Kuliah</Table.HeadCell>
          <Table.HeadCell>Nilai</Table.HeadCell>
          <Table.HeadCell>Index Nilai</Table.HeadCell>
        </Table.Head>
        {data !== null &&
            data.map((res,index) => {
              return (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index+1}</Table.Cell>
                <Table.Cell>{res.name}</Table.Cell>
                <Table.Cell>{res.course}</Table.Cell>
                <Table.Cell>{res.score}</Table.Cell>
                <Table.Cell>{res.score >= 80 ? "A": res.score >= 70 ? "B":res.score >= 60 ? "C":res.score >= 50 ? "D":"E"}</Table.Cell>
              </Table.Row>
              );
            })}
      </Table>
    </>
  );
};
export default Tugas11;
