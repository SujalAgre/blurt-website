import tryBlurt from './assets/Try Blurt.png'
import Screens from './assets/Screens.png'
import githubMark from './assets/github-mark.png'

function App() {
  return (
    <>
      <div className='flex md:flex-row sm:flex-col '>
        <div className="sm:w-[100vw] sm:h-[86vh] md:w-[50vw] md:h-[100vh] sm:items-center md:items-start justify-center flex flex-col md:ml-[10vw]">
          <img className="sm:w-[250px] md:w-[27vw] sm:mb-[10px] md:mb-[1.4vw]" src={tryBlurt} draggable="false" />

          <p className="font-bold sm:mb-[10px] md:mb-[2vw] sm:w-[80vw] sm:text-[13px] md:text-left sm:text-center md:text-[1.1vw] text-[#595959] md:w-[24vw]">Add custom sound effects, play them instantly, and enjoy fun times with friends!</p>

          <p className="font-medium sm:mb-[17px] md:mb-[2.2vw] sm:text-[15px] md:text-left sm:text-center md:text-[1.1vw] text-[#3C3C3C] md:w-[25vw]">Available on Android</p>

          <div className="flex flex-row">
            <a href="https://github.com/SujalAgre/Blurt/releases/download/v1.0/blurt-app.apk" target='_blank'>
              <button className="hover:bg-[#EBFFB3] bg-white sm:h-[53px] sm:w-[140px] md:h-[9.5vh] md:w-[13vw] font-medium text-[#595959] sm:rounded-[13px] md:rounded-[1.3vw] sm:[box-shadow:0_0_0_3px_#424242,2.5px_2.5px_0_2px_#3B3B3B] md:[box-shadow:0_0_0_0.3vw_#424242,0.3vw_0.25vw_0_0.2vw_#3B3B3B] md:text-[1.3vw] sm:mr-[17px] md:mr-[1.5vw] cursor-pointer">
                Download App
              </button>
            </a>

            <a href="https://github.com/SujalAgre/Blurt" target='_blank'>
              <button className="hover:bg-[#EBFFB3] bg-white sm:h-[53px] sm:w-[53px] sm:rounded-[13px] md:h-[9.5vh] md:w-[5vw] font-medium text-[#595959] md:rounded-[1.3vw] sm:[box-shadow:0_0_0_3px_#424242,2.5px_2.5px_0_2px_#3B3B3B] md:[box-shadow:0_0_0_0.3vw_#424242,0.3vw_0.25vw_0_0.2vw_#3B3B3B] flex items-center justify-center cursor-pointer">
                <img src={githubMark} alt="GitHub Logo" className="h-[60%] w-auto" draggable="false" />
              </button>
            </a>
          </div>

        </div>

        <div className="md:w-[50vw] sm:hidden md:h-[100vh] items-center justify-center md:flex md:mr-15">
          <img className="sm:w-[200px] md:w-[23vw]" src={Screens} draggable="false" />
        </div>

      </div>
    </>
  )
}

export default App