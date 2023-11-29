import { TypeAnimation } from 'react-type-animation';

export const Homepage = () => {
  return(
    <div className="min-h-[300px]">
      <TypeAnimation
      className="text-2xl font-jetbrainMonoBold"
        sequence={[
          'Hello!',
          1000,
          'Welcome to Blogger!',
          1000
        ]}
        wrapper="h1"
        speed={50}
        repeat={3}
      />
    </div>
  )
}