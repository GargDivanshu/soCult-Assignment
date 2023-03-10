import React, {useState} from 'react'
import { people } from './people';


const Discover = () => {

    const [friendOne, setFriendOne] = useState(false); 
    const [friendTwo, setFriendTwo] = useState(false);
    const [friendThree, setFriendThree] = useState(false);
    const [friendFour, setFriendFour] = useState(false);
    const [friendFive, setFriendFive] = useState(false);
    const [friendSix, setFriendSix] = useState(false);
    const [friendSeven, setFriendSeven] = useState(false);
    

    const add = "Add Friend"; 
    const added = "Added"

//     function handleAddFriend(image) {
//         // setAddFriend(friend); 
//         var __FOUND = -1;
// for(var i=0; i<people.length; i++) {
// 	if(people[i].name == image) {
// 		// __FOUND is set to the index of the element
// 		__FOUND = i;
// 		break;
// 	}
//     console.log(i); 
// }

//     }


  return (
    <div className="bg-white p-3 shadow-md hover:shadow-lg h-min  rounded-md">
    <div
    className="text-textgray text-xl min-h  font-semibold "
    >
        Who to Follow

{/* i haven't mapped them coz i wanted the people object array to use 
usestate here, and for each person there is one usestate
this can be easily avoided while mapping dataa of users for DB & passing the info of 
whether we want to add them as friend directly to DB by associating it with their userID  */}


        <div className="flex my-4 py-2 "
                    key="John"
                  
                    >
                    <img 
                        src="https://th.bing.com/th/id/OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH?pid=ImgDet&rs=1"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className=" mx-3 grid grid-cols-1 text-xs border-b-2 border-slate-300 border-inherit">
                    <span
                    className="text-blue-400 "
                    >John</span>
                    <span
                    onClick={
                        ()=> setFriendOne(!friendOne)
                    }
                    className={` hover:text-green-600 cursor-pointer ${(friendOne === false) ? "text-green" : "text-red" }`}
                    >{
                        (friendOne === false) ? add : added
                    }
                    </span>
                    </div>
                        
                    </div>



                    <div className="flex my-4 py-2 "
                    key="John"
                  
                    >
                    <img 
                        src="https://th.bing.com/th/id/OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH?pid=ImgDet&rs=1"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className=" mx-3 grid grid-cols-1 text-xs border-b-2 border-slate-300 border-inherit">
                    <span
                    className="text-blue-400 "
                    >John</span>
                    <span
                    onClick={
                        ()=> setFriendTwo(!friendTwo)
                    }
                    className={` hover:text-green-600 cursor-pointer ${(friendTwo === false) ? "text-green" : "text-red" }`}
                    >{
                        (friendTwo === false) ? add : added
                    }
                    </span>
                    </div>
                        
                    </div>



                    <div className="flex my-4 py-2 "
                    key="John"
                  
                    >
                    <img 
                        src="https://th.bing.com/th/id/OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH?pid=ImgDet&rs=1"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className=" mx-3 grid grid-cols-1 text-xs border-b-2 border-slate-300 border-inherit">
                    <span
                    className="text-blue-400 "
                    >John</span>
                    <span
                    onClick={
                        ()=> setFriendThree(!friendThree)
                    }
                    className={` hover:text-green-600 cursor-pointer ${(friendThree === false) ? "text-green" : "text-red" }`}
                    >{
                        (friendThree === false) ? add : added
                    }
                    </span>
                    </div>
                        
                    </div>


                    <div className="flex my-4 py-2 "
                    key="John"
                  
                    >
                    <img 
                        src="https://th.bing.com/th/id/OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH?pid=ImgDet&rs=1"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className=" mx-3 grid grid-cols-1 text-xs border-b-2 border-slate-300 border-inherit">
                    <span
                    className="text-blue-400 "
                    >John</span>
                    <span
                    onClick={
                        ()=> setFriendFour(!friendFour)
                    }
                    className={` hover:text-green-600 cursor-pointer ${(friendFour === false) ? "text-green" : "text-red" }`}
                    >{
                        (friendFour === false) ? add : added
                    }
                    </span>
                    </div>
                        
                    </div>
    </div>
    
    </div>
  )
}

export default Discover