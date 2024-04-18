import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Animal Health"
          title="Animal health"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Agrochemicals"
          title="Agrochemicals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Farmtools & Equipment"
          title="Farmtools & Equipment"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;