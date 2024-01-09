import { Button } from "@material-tailwind/react";

export default function ErrorMessage() {
  return (
    <div className='flex flex-col justify-center align-middle items-center min-h-[300px] gap-y-2 font-jetbrainMonoRegular'>
      <h2>Error</h2>
      <h3>
        Opps, something went wrong.
      </h3>
      <Button onClick={() => location.reload()} className="bg-blue-400 text-white">Try again</Button>
    </div>
  )
}
