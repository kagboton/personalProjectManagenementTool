import { Divider } from '@material-ui/core'
import axios from 'axios'
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from '../../constants/ActionTypes'



export const createProject = (project, history) => async dispatch => {

    try {
        await axios.post( "/api/project/", project)
        history.push({
            pathname : "/dashboard"
        })
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const getProjects = () => async dispatch => {
    const response = await axios.get("/api/project/all")
    dispatch({
        type: GET_PROJECTS,
        payload: response.data
    })
}

export const getProject = (id, history) => async dispatch => {
    try{
        const response = await axios.get(`/api/project/${id}`)
        dispatch({
            type: GET_PROJECT,
            payload: response.data
        })
    }catch(error){
        history.push({
            pathname : "/dashboard"
        })
    }    

}

export const deleteProject = id => async dispatch => {
    
    if(window.confirm("Are you sure to delete the project? This will delete all the data related to it")){
        await axios.delete(`/api/project/${id}`)
        dispatch({
            type: DELETE_PROJECT,
            payload: id
        })
    }
    
}