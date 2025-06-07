import tryBlurt from './assets/Try Blurt.png'
import Screens from './assets/Screens.png'
import githubMark from './assets/github-mark.png'

function App() {
  return (
    <>
      <div className='flex'>
        <div className="w-[50vw] h-[100vh] justify-center-safe flex flex-col ml-[9vw]">
          <img className="w-[27vw] mb-[1.4vw]" src={tryBlurt} draggable="false" />

          <p className="font-bold mb-[2vw] text-[1.1vw] text-[#595959] w-[24vw]">Add custom sound effects, play them instantly, and enjoy fun times with friends!</p>

          <p className="font-medium mb-[2.5vw] text-[1.1vw] text-[#3C3C3C] w-[25vw]">Available Platform: Android</p>

          <div className="flex flex-row">
            <a href="https://github.com/SujalAgre/Blurt/releases/download/v1.0/blurt-app.apk" target='_blank'>
              <button className="bg-white h-[9.5vh] w-[13vw] font-medium text-[#595959] rounded-[1.3vw] [box-shadow:0_0_0_0.3vw_#424242,0.3vw_0.25vw_0_0.2vw_#3B3B3B] text-[1.3vw] mr-[1.5vw] cursor-pointer">
                Download App
              </button>
            </a>

            <a href="https://github.com/SujalAgre/Blurt" target='_blank'>
              <button className="bg-white h-[9.5vh] w-[5vw] font-medium text-[#595959] rounded-[1.3vw] [box-shadow:0_0_0_0.3vw_#424242,0.3vw_0.25vw_0_0.2vw_#3B3B3B] flex items-center justify-center cursor-pointer">
                <img src={githubMark} alt="GitHub Logo" className="h-[60%] w-auto" draggable="false" />
              </button>
            </a>


          </div>
        </div>
        <div className="w-[50vw] h-[100vh] items-center justify-center flex absolute right-[1.5vw]">
          <img className="w-[23vw]" src={Screens} draggable="false" />
        </div>
      </div>
    </>
  )
}

export default App