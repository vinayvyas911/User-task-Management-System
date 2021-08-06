import { Injectable } from '@angular/core';
import { Post } from '../Classes/post';
import { Todo } from '../Classes/todo';
import { User } from '../Classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  UsersStorage : User[] = []

  constructor() { }
  
  //Save The Users in Service
  saveUsersData(users : User[]){
    this.UsersStorage = users
  }

  getUsersData(){
    return this.UsersStorage;
  }

  deleteUserData(userId : String){
    const allUsers = this.UsersStorage;
    const crntUserIndex = this.UsersStorage.findIndex((user:User)=> user._id === userId);
    allUsers.splice(crntUserIndex , 1)
    this.UsersStorage = allUsers;

  }

  addUserData(user : User){
    let usersArr= this.UsersStorage;
    usersArr.push(user);
    this.UsersStorage = usersArr;
  }
  
  addNewTodoToUser(userId : String , newTodo : Todo){
    let usersArr= this.UsersStorage;
    let crntUser = usersArr.findIndex((user : User)=> user._id === userId);
    usersArr[crntUser].todos!.push(newTodo)
    this.UsersStorage = usersArr
  }

  markTodoCompleted(userId :string , todoId: String){
    
    let usersArr = this.UsersStorage;
    let crntUser = usersArr.findIndex((user : User)=> user._id === userId);
    usersArr[crntUser].todos!.find((x : Todo) => x._id == todoId)!.completed! = true;
    this.UsersStorage = usersArr;
    console.log(this.UsersStorage)
  }
  
  addNewPostToUser(userId : String , newPost : Post){
    let usersArr= this.UsersStorage;
    let crntUser = usersArr.findIndex((user : User)=> user._id === userId);
    usersArr[crntUser].posts?.push(newPost)
    this.UsersStorage = usersArr
  }

  

}