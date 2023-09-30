export const CollaborationCard=({title,description,url})=>
{
    return(
    <div class="w-full md:w-1/2 lg:w-1/3 p-4">
    <div class="relative overflow-hidden rounded-lg">
      <div class="absolute inset-0 bg-gray-700 bg-opacity-25 transition-opacity"></div>
      <div class="relative h-64 bg-gray-700">
        <img class="absolute inset-0 h-full w-full object-cover" src={url} alt=""></img>
      </div>
      <div class="p-6">
        <h3 class="text-lg font-medium text-white">{title}</h3>
        <p class="mt-4 text-sm text-white">{description}</p>
        <div class="mt-6">
          <a href="#" class="text-base font-medium text-indigo-500">Learn more &rarr;</a>
        </div>
      </div>
    </div>
  </div>
    );
}