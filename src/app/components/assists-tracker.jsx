import cookieSvg from "../../../public/cookie.svg";

function AssistsTracker({ assists }) {
  return (
    <div className="flex">
      <img
        className={`w-6 h-6 mr-2 ${assists >= 1 ? "used" : ""}`}
        src={cookieSvg.src}
        alt="Cookie"
      />
      <img
        className={`w-6 h-6 mr-2 ${assists >= 2 ? "used" : ""}`}
        src={cookieSvg.src}
        alt="Cookie"
      />
      <img
        className={`w-6 h-6 mr-2 ${assists >= 3 ? "used" : ""}`}
        src={cookieSvg.src}
        alt="Cookie"
      />
    </div>
  );
}

export default AssistsTracker;
