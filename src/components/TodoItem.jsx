function TodoItem() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">Buy Milk</div>
        <div className="col-4">4/10/2023</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger kg-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
