export const Card1=(props)=>
{

      return(
                 <div class=" bg-white w-full sm:w-1/2 lg:w-1/4 p-4 flex justify-around items-center rounded-md m-2 box-border gap-4 hover:p-x-5">
                    <div class="bg-white  rounded-lg  w-5/6">
                      <p class="italic text-gray-800">{props.content}</p>
                      <p class="font-bold text-gray-700 p-2">-{props.author}</p>
                    </div>
                    <div class="h-14 border-solid border-2 border-black rounded-full w-1/6"></div>
                  </div>
      );
}