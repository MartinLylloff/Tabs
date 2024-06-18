import { useState, useEffect } from "react";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const fetchData = () => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return;
        }
      })
      .then((data) => {
        setIsLoading(false);
        setJobs(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateIndex = (index) => {
    setSelectedIndex(index);
  };

  return (
    <main className="jobs-center">
      <BtnContainer
        jobs={jobs}
        setSelectedIndex={updateIndex}
        selectedIndex={selectedIndex}
      />
      <h2>{isLoading ? "Loading" : <JobInfo {...jobs[selectedIndex]} />}</h2>
    </main>
  );
};
export default App;
