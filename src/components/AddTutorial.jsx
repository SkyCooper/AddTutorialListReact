import axios from "axios";
import { useState } from "react";

const AddTutorial = ({ getTutorials }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTutor = { title, description };
    // { "title" title, "description" : description } key/value olarak objeye çevirdik gelen verileri
    // üstteki kısa kullanım, key/value isimleri aynı isimli olduğundan böyşe kullanılabilir.
    //     {
    //     "id": 954,
    //     "title": "cooper",
    //     "description": "deneme",
    //     "published": false,
    //     "createdAt": "2022-10-19T05:38:16.376Z",
    //     "updatedAt": "2022-10-19T05:38:16.376Z"
    // }, biz sadece title/description yazıyoruz diğer bilgileri (ID vs.) api otomatik yapıyor.
    addTutorial(newTutor);
    // girilen statelerden oluşturulan yeni obje addTutorial'a parametre olarak atandı.
    setTitle("");
    setDescription("");
// preventDefault ile sayfanın refresh olması engellendi fakat formu temizlemek için içini yukarıdaki gibi boşalttık.
  };

  //! POST - CRUD (Create)
  const addTutorial = async (newTutor) => {
    const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
    try {
      await axios.post(url, newTutor);
      // sadece axios yazarsak get işlemi yapar, onun için başına POST yazıyoruz.
      // 2 parametre alıyor, post yapılacak api adresi ve post edilecek veri
      // url sabit, veri ise parametre olarak fonksiyondan geliyor.
    } catch (error) {
      console.log(error);
    }
    getTutorials(); // yukarıdan prop olarak gönderildi, havada destrut edildi ve burada kullanıldı.

    // post yapıldıktan sonra veri girişi oluyor fakat aşağıdaki listede görünmüyor. çünkü React sadece ilgili yeri render ediyor. bunun için TutorialList componentinin güncellenmesi lazım(state veya prop değişmesi lazım.)
    // post ile veri tabanına veri yazıldığından sadece orası güncellendi.
    // getTutorials() fonksiyonu ise serverden API ile get işlemi yaptığından, içindeki setTutorials() ile tutorials statini güncelledi
    // ikiside statelerini home componentinden aldığı için oradaki  getTutorials() fonksiyonu prop olarak 2 componente gönderilir.
    //!  <AddTutorial getTutorials={getTutorials} />
    //! <TutorialList tutor={tutorials} getTutorials={getTutorials} />
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        {/* form içinde submit butonuna basıldığında yani -->onSubmit olunca yapılacak işlemleri tanımladık. */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-danger mb-4">Submit</button>
      </form>
    </div>
  );
};

export default AddTutorial;
