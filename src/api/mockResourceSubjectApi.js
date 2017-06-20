
const resourceSubjects = [
    {
        "Category": "React",
        "NumberOfResources": 7
    },
    {
        "Category": "Redux",
        "NumberOfResources": 2
    },
    {
        "Category": "JavaScript",
        "NumberOfResources": 5
    },
    {
        "Category": "ES6",
        "NumberOfResources": 3
    },
    {
        "Category": "NCrunch",
        "NumberOfResources": 2
    },
    {
        "Category": "Specflow",
        "NumberOfResources": 3
    },
    {
        "Category": "Other",
        "NumberOfResources": 1
    }
];

class ResourceSubjectApi {
  static getAllResourceSubjects() {
    //debugger;
    return new Promise ((resolve) => {
      resolve(Object.assign([], resourceSubjects));
    });
  }
}

export default ResourceSubjectApi;
