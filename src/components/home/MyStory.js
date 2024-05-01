import '../../styles/mystory.scss';

export default function MyStory() {
    return <>
    <div className="myStory">
        <div className='intakePipe'>
        </div>
        <div class="pipeOutlet"></div>
        <h1 className='myStoryHeading'>My Story</h1>
        <div className='underLine'>
        </div>
        <div className='dotPointsContainer'>
            <div className='dotPointsMargin'></div>
            <span className='time'>2019</span>
            <span className='dotPoint'>Started my professional journey as a Service Desk Specialist at HOYTS</span>
            <div className='dotPointsMargin'></div>
            <span className='time'>2021</span>
            <span className='dotPoint'>Started degree in Computer Science at UOW with Software Engineering Major</span>
            <div className='dotPointsMargin'></div>
            <span className='time'>2022</span>
            <span className='dotPoint'>Improved my ability with C++ and Java, started building Android apps</span>
            <div className='dotPointsMargin'></div>
            <span className='time'>2023</span>
            <span className='dotPoint'>Started learning and building projects in Next.JS, React and SpringBoot</span>
            <div className='dotPointsMargin'></div>
            <span className='time'>2024</span>
            <span className='dotPoint'>Graduated university, looking for an opportunity to learn and improve my skills</span>
            <div className='dotPointsMargin'></div>
            <div className='outtakePipe'></div>
        </div>
    </div></>
}