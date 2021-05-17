import React from "react";
import phone1 from "../../../assets/img/phone1.jpg";
import phone2 from "../../../assets/img/phone2.jpg";
import phone3 from "../../../assets/img/phone3.jpg";
import phone4 from "../../../assets/img/phone4.jpg";
import phone5 from "../../../assets/img/phone5.jpg";
import phone6 from "../../../assets/img/phone6.jpg";
const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const [uzeh, setUzeh] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="mx-32 my-4 w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                ХАЙХ
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                ТАТВАР, ХУРААМЖ
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                ТӨЛБӨР
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                ТОРГУУЛЬ
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                ҮЗЛЭГ ОНОШИЛГОО
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 6
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                ДААТГАЛ
              </a>
            </li>
          </ul>

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="flex ">
                    <div>
                      <img src={phone1} className="w-72 h-96 mr-8 " />
                    </div>
                    <div>
                      <p class="flex">
                        <a
                          onClick={(e) => setUzeh(!uzeh)}
                          class="bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-3 cursor-pointer focus:outline-none mr-2"
                        >
                          Тээврийн хэрэгслийн мэдээлэл хайх, ЭНД Дарна уу
                        </a>
                      </p>
                      {uzeh ? (
                        <div class="border px-4 py-3 my-2 text-gray-700">
                          Тээврийн хэрэгсэл болох машин, мотоцикл, чиргүүлийн
                          улсын дугаарыг оруулан “Хайх” товчийг дарна. Авто
                          тээврийн үндэсний төвд бүртгэлтэй тээврийн хэрэгслийн
                          мэдээллийг хайлтын үр дүнгээр харуулна.
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex ">
                    <div>
                      <img src={phone2} className="w-72 h-96" />
                    </div>
                    <div>
                      <p class="flex">
                        <a
                          onClick={(e) => setUzeh(!uzeh)}
                          class="bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-3 cursor-pointer focus:outline-none mr-2"
                        >
                          Татвар, хураамжийн мэдээлэл ба түүх
                        </a>
                      </p>
                      {uzeh ? (
                        <div class="border px-4 py-3 my-2 text-gray-700">
                          Тухайн оны татвар төлөгдөөгүй бол дэлгэцийн дээд талд
                          татвар, хураамжийн нэр төрлөөр харуулах ба “Татвар
                          төлөх” товчийг даран шууд төлөлт хийж болно. Мөн өмнөх
                          онуудын татвар төлөлтийн түүхтэй танилцах боломжтой ба
                          төлөгдөөгүй оныг сонгон төлж болно.
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <div className="flex ">
                    <div>
                      <img src={phone4} className="w-72 h-96" />
                    </div>
                    <div>
                      <p class="flex">
                        <a
                          onClick={(e) => setUzeh(!uzeh)}
                          class="bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-3 cursor-pointer focus:outline-none mr-2"
                        >
                          Торгуулийн жагсаалт
                        </a>
                      </p>
                      {uzeh ? (
                        <div class="border px-4 py-3 my-2 text-gray-700">
                          Тухайн тээврийн хэрэгсэлтэй холбоотой бүх төрлийн
                          татварын мэдээллийг нэг дор харуулах ба та хүссэн
                          огноогоор хайлт хийх боломжтой.
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="flex ">
                    <div>
                      <img src={phone3} className="w-72 h-96" />
                    </div>
                    <div>
                      <p class="flex">
                        <a
                          onClick={(e) => setUzeh(!uzeh)}
                          class="bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-3 cursor-pointer focus:outline-none mr-2"
                        >
                          Төлбөрийн жагсаалт
                        </a>
                      </p>
                      {uzeh ? (
                        <div class="border px-4 py-3 my-2 text-gray-700">
                          Татвар, торгууль болон бусад төрлийн үйлчилгээг авахад
                          төлбөр төлсөн мэдээллийг харуулна.
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <div className="flex ">
                    <div>
                      <img src={phone5} className="w-66 h-96 mr-6" />
                    </div>
                    <div>
                      <p class="flex">
                        <a
                          onClick={(e) => setUzeh(!uzeh)}
                          class="bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-3 cursor-pointer focus:outline-none mr-2"
                        >
                          Үзлэг оношилгооны мэдээлэл
                        </a>
                      </p>
                      {uzeh ? (
                        <div class="border px-4 py-3 my-2 text-gray-700">
                          Тээврийн хэрэгслийн улсын оношилгооны мэдээллээ харна.
                          Үзлэгт орсон огноо, үзлэгт дахин орох огноо гэх мэт.
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                  <div className="flex ">
                    <div>
                      <img src={phone6} className="w-66 h-96 mr-6" />
                    </div>
                    <div>
                      <p class="flex">
                        <a
                          onClick={(e) => setUzeh(!uzeh)}
                          class="bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-3 cursor-pointer focus:outline-none mr-2"
                        >
                          Даатгалын мэдээлэл
                        </a>
                      </p>
                      {uzeh ? (
                        <div class="border px-4 py-3 my-2 text-gray-700">
                          Тээврийн хэрэгслийн даатгалын мэдээллээ харна.
                          Даатгалын гэрээний дугаар, гэрээний эхлэх ба дуусах
                          огноо гэх мэт.
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="blue" />;
    </>
  );
}
