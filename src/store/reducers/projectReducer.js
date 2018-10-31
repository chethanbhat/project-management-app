const initState = {
  projects: [
    {id: '1', title: 'Complete Net Ninja React-Redux App', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum dolorum illo quam corporis perspiciatis sit, totam deserunt et vitae nesciunt iure, ratione itaque nemo pariatur placeat animi voluptate sapiente non!'},
    {id: '2', title: 'Wes Bos Advanced React Course', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum dolorum illo quam corporis perspiciatis sit, totam deserunt et vitae nesciunt iure, ratione itaque nemo pariatur placeat animi voluptate sapiente non!'},
    {id: '3', title: 'Traversy MERN Stack Course', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum dolorum illo quam corporis perspiciatis sit, totam deserunt et vitae nesciunt iure, ratione itaque nemo pariatur placeat animi voluptate sapiente non!'},
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('created project error', action.error);
      return state;      
    default:
      return state;
  }
}

export default projectReducer;