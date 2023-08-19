import React from 'react'
import { VerticalTimeline, VerticalTimelineElement, } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="March 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Shaanthi Schools, Pollachi, Tamil Nadu
          </h3>
          <p> Higher Secondary Education </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sri Krishna Arts And Science College, Coimbatore,  Tamil Nadu
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May  2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Intern - Aacharya Solutions
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Coimbatore
          </h4>
          <p>Developed the Full Stack Web Application using Django.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Intern - DataCarz
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Coimbatore
          </h4>
          <p>
            Indulged with team on developing MultiChannel Web Application using ReactJs and NodeJs
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>   
  );
}

export default Experience
