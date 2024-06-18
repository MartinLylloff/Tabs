import { v4 as uuidv4 } from "uuid";

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty, index) => {
        const id = uuidv4();

        return (
          <div className="job-desc">
            <span></span>
            <h2 key={id}>{duty}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;
