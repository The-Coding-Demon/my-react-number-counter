export const Numbercounter = ({ count, numbercount }) => {
  const Handleup = () => {
    numbercount(count + 1);
  };

  const Handlereset = () => {
    numbercount((count = 0));
  };

  const Handledown = () => {
    if (count > 0) {
      numbercount(count - 1);
    }
  };

  return (
    <div className="border m-3 p-3 text-center">
      <h1>Counter: {count}</h1>
      <div className="d-flex p-3 gap-3 justify-content-center">
        <button class="btn btn-primary" type="submit" onClick={Handleup}>
          Up
        </button>
        <button class="btn btn-primary" type="reset" onClick={Handlereset}>
          Reset
        </button>
        <button class="btn btn-primary" type="submit" onClick={Handledown}>
          Down
        </button>
      </div>
    </div>
  );
};
