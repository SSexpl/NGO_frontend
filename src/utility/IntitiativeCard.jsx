export const InitiativesCard=({title , description})=>
{
    return(
    <div class="w-full sm:w-1/2 lg:w-1/3 p-4">
    <div class="bg-gray-200 rounded-lg p-8">
    <h3 class="text-xl font-bold mb-4">{title}</h3>
    <p class="text-gray-700">{description}</p>
  </div>
  </div>
    );
}