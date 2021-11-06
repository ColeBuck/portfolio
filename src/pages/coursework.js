import React from "react"
import Navbar from "../components/Navbar"
import CourseCard from "../components/CourseCard"
import Footer from "../components/Footer"
import "../components/Base.scss"

const courses = [
    {
        title:"Web Systems Programming",
        description:"A great class on the fundamentals of web programming: HTML, CSS, and JavaScript. Also touched on topics such as asynchronous programming, working with API's, and NoSQL databases.",
        abbrev:"CSE 264",
        link:"https://engineering.lehigh.edu/cse/academics/course-index/cse-264-web-systems-programming-3"
    },
    {
        title:"Software Engineering",
        description:"For me personally, this was a trial-by-fire introduction to the world of software engineering. Whether it was trying to solve merge conflicts at 3 AM, or spending an entire day debugging one particular issue, every week was a new challenge. Some specific topics I learned: Git, the Agile development process, and unit testing.",
        abbrev:"CSE 216",
        link:"https://engineering.lehigh.edu/cse/academics/course-index/cse-216-software-engineering-3"
    },
    {
        title:"Web Design 1",
        description:"After taking the above Software Engineering class, I took this class to learn more about the UI/UX side of software engineering. We covered things like color schemes, typography, accessibility, etc.",
        abbrev:"DES 070",
        link:"https://catalog.lehigh.edu/courselisting/des/"
    },
    {
        title:"Network Security",
        description:"An engaging class that covered both network attacks and defense. We experimented with things like DNS poisoning, DDoS attacks, cross-site scripting, and SQL injection.",
        abbrev:"CSE 343",
        link:"https://engineering.lehigh.edu/cse/academics/course-index/cse-343-network-security-3"
    },

]

export default function Coursework() {
    return <div>
        <Navbar active="coursework"/>
        <div class="courses">
            {courses.map((item, index) => {
            const colors = ['dodgerblue', 'black'];
            return <CourseCard color={colors[index % colors.length]} title={item.title} description={item.description} link={item.link} abbrev={item.abbrev}></CourseCard>  
            })}
        </div>
        <Footer/>
    </div>
}