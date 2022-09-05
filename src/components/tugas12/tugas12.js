import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "flowbite-react";

const Tugas12 = () => {
  const [data, setData] = useState(null);
  const [input, setInput] = useState({
    name: "",
    course: "",
    score:""
  });

  const [fetchStatus, setFetchStatus] = useState(true);
  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get("https://backendexample.sanbercloud.com/api/student-scores")
        .then((res) => {
          // console.log(res)
          setData([...res.data]);
        })
        .catch((error) => {});
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  //   console.log(data);

  //handling input
  const handleInput = (event) => {
    let name = event.target.name;
    let course = event.target.course;
    let score = event.target.score;
    let value = event.target.value;

    if (name === "name") {
      setInput({ ...input, name: value });
    } else  if (course === "course") {
      setInput({ ...input, course: value });
    }
    else  if (score === "score") {
      setInput({ ...input, score: value });
    }
  };

  //handling submit
  const handleSubmit = (event) => {
    event.preventDefault();

    let { name,course,score } = input;

    //create data
    axios
      .post("https://backendexample.sanbercloud.com/api/contestants", { name })
      .then((res) => {
        console.log(res);
        setFetchStatus(true);
      });

    //clear input setelah create data
    setInput({
      name: "",
      course: "",
      score:""
    });
  };

  return (
    <>
      <div className="flex justify-center w-screen my-8">
        <Table>
          <Table.Head className="bg-cyan-500 hover:bg-cyan-600">
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Nama</Table.HeadCell>
            <Table.HeadCell>Mata Kuliah</Table.HeadCell>
            <Table.HeadCell>Nilai</Table.HeadCell>
            <Table.HeadCell>Index Nilai</Table.HeadCell>
          </Table.Head>
          {data !== null &&
            data.map((res, index) => {
              return (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell>{res.name}</Table.Cell>
                  <Table.Cell>{res.course}</Table.Cell>
                  <Table.Cell>{res.score}</Table.Cell>
                  <Table.Cell>
                    {res.score >= 80
                      ? "A"
                      : res.score >= 70
                      ? "B"
                      : res.score >= 60
                      ? "C"
                      : res.score >= 50
                      ? "D"
                      : "E"}
                  </Table.Cell>
                </Table.Row>
              );
            })}
        </Table>
      </div>
      <p>FORM DATA</p>
      <form onSubmit={handleSubmit} className="flex justify-center ">
        <span>Nama: </span>
        <input onChange={handleInput} value={input.name} name="name" />
        <span>Mata Kuliah: </span>
        <input onChange={handleInput} value={input.course} name="name" />
        <span>Nilai: </span>
        <input onChange={handleInput} value={input.score} name="name" />
        <input type={"submit"} />
      </form>
    </>
  );
};
export default Tugas12;
