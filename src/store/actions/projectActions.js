export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // Make Async Calls
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
        ...project, 
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
    }).then(() => { 
      // Dispatch 
      dispatch({type: 'CREATE_PROJECT', project: project});
    }).catch((error) => {
      dispatch({type: 'CREATE_PROJECT_ERROR', error});
    });
  }
};