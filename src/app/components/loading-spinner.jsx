function LoadingSpinner() {
  return (
    <>
      <dialog id="loading_spinner" className="modal">
        <form method="dialog" className="modal-box w-auto">
          <span className="loading loading-spinner loading-lg text-info"></span>
        </form>
      </dialog>
    </>
  );
}

export default LoadingSpinner;
