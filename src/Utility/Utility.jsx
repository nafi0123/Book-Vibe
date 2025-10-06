import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");

  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    Swal.fire({
      icon: "error",
      title: "Already exist",
      text: "Something went wrong!",
    });
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
    MySwal.fire({
      title: "Good job!",
      text: "Book added to Read list!",
      icon: "success",
      confirmButtonColor: "#10b981",
    });
  }
};

export { addToStoredDB, getStoredBook };
