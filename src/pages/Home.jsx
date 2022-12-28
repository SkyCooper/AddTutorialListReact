import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const url = "http://127.0.0.1:8000/tutorials/"; // django
  // const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";  //noah hoca
  // const url = "https://cw-axios-example.herokuapp.com/api/tutorials";  //çift sayılar.
  // readme içerisinde 3 tane API url var, 1 tanesini kullan.

  //? CRUD: (GET-READ)
  const getTutorials = async () => {
    try {
      // hata varsa yakalamak için try-catch bloğu içine yazıyoruz.
      const { data } = await axios(url);
      // axios datayı alıp, res.JSON yapmaya gerek olmadan veriyi JSON yapıyor.
      // apiden gelen veri data keyi içindeki arrayde olduğundan yolda destruct etti.
      console.log(data);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  //? didmount
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutor={tutorials} getTutorials={getTutorials} />
      {/* gelen veri data olarak alındı ve tutorials satatine atandı, sonra tutor ismi ile prop olarak yolladı */}
    </>
  );
};

export default Home;
