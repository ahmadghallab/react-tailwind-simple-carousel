import SimpleCarousel from './components/SimpleCarousel';
import useLayout from './hooks/useLayout';

function App() {
  const { dir } = useLayout();

  return (
    <div className='p-4' dir={dir}>
      <div className='max-w-lg mx-auto space-y-7'>
        <h2 className='font-bold text-3xl'>Simple Carousel</h2>
        <SimpleCarousel>
          {[...Array(15)].map((_, index) => {
            return (
              <div
                key={index}
                className='flex items-center justify-center shrink-0 bg-gray-200 w-16 h-16'
              >
                {index + 1}
              </div>
            );
          })}
        </SimpleCarousel>
      </div>
    </div>
  );
}

export default App;
