function LoadingSpinner() {
  return (
    <>
      <dialog id="loading_spinner" className="modal">
        <form method="dialog" className="modal-box w-auto bg-transparent">
          <span className="loading loading-spinner loading-lg"></span>
        </form>
      </dialog>
    </>
  );
}

export default LoadingSpinner;
