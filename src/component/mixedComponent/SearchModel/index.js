import React, { useState } from "react";
import SearchInput from "../../singleComponent/SearchInput";
import SearchButton from "../../singleComponent/SearchButton";
import Car from "../../../assets/img/car.svg";
import Moto from "../../../assets/img/moto.svg";
import Achaa from "../../../assets/img/achaa.svg";
const SearchModel = () => {
  const [value, setValue] = useState(null);
  const [textValue, setTextValue] = useState("");
  const [checks, setChecks] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);

    console.log(e.target.value);
  };

  const changedText = (e) => {
    setTextValue(e.target.value);
    setChecks(false);
  };

  const haih = () => {
    textValue === ""
      ? setChecks(true)
      : alert("Таны хайсан Утга бол: " + textValue);
    // console.log('Таны хайсан утга бол', textValue)
  };
  return (
    <div className="bg-white rounded-lg h-20 w-96 h-96">
      <div className="flex justify-center mt-10">
        <p className="border-blue-500 border-b-2 flex w-44 justify-center font-semibold text-blue-500 cursor-pointer">
          Тээврийн хэрэгсэл
        </p>

        <p className="border-gray-300 border-b-2 flex w-44 justify-center text-gray-300 cursor-not-allowed">
          Жолооч
        </p>
      </div>

      <form>
        <div className="flex">
          <div className="flex m-8 ">
            <input
              type="radio"
              value="0000УБА"
              checked={value === "0000УБА" || value === null}
              onChange={handleChange}
            />
            <span>
              <img src={Car} className="w-12 h-12" />
            </span>
          </div>
          <div className="flex m-8">
            <input
              type="radio"
              value="УБ000"
              checked={value === "УБ000"}
              onChange={handleChange}
            />
            <span>
              <img src={Moto} className="w-12 h-12" />
            </span>
          </div>
          <div className="flex m-8">
            <input
              type="radio"
              value="0000АЧ"
              checked={value === "0000АЧ"}
              //   {...plaftormInputProps}
              onChange={handleChange}
            />

            <img src={Achaa} className="w-12 h-12" />
          </div>
        </div>

        <p className="font-myfont text-center text-xl">
          {" "}
          Улсын дугаараа оруулна уу{" "}
        </p>
      </form>
      <div className="flex flex-col justify-center align-middle items-center">
        <SearchInput
          placehold={value}
          utga={textValue}
          changedText={changedText}
        />
        {checks ? (
          <p className="self-center text-red-600">
            Уучлаарай та хайх утгаа оруулна уу
          </p>
        ) : null}
        <SearchButton haih={haih} />
      </div>
    </div>
  );
};
export default SearchModel;
