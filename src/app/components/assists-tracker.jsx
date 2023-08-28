import cookieSvg from "../../../public/cookie.svg";

function AssistsTracker({ assists }) {
  return (
    <div className="flex">
      <img
        className={`w-6 h-6 mr-2 ${assists >= 1 ? "opacity-50" : ""}`}
        src={cookieSvg.src}
        alt="Cookie"
      />
      <img
        className={`w-6 h-6 mr-2 ${assists >= 2 ? "opacity-50" : ""}`}
        src={cookieSvg.src}
        alt="Cookie"
      />
      <img
        className={`w-6 h-6 mr-2 ${assists >= 3 ? "opacity-50" : ""}`}
        src={cookieSvg.src}
        alt="Cookie"
      />
    </div>
  );
}

export default AssistsTracker;
