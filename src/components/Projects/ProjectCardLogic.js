import React from 'react';
import EmployeePayroll from './../../assests/project-img/project-stack3.png';
import EAadhar from './../../assests/project-img/project-stackaadhar.png';
import EmployeeManager from './../../assests/project-img/project-stack.png';
import Stack3 from './../../assests/project-stack-img/project-stack-3.png';

const ProjectCardLogic = () => {
  const projectData = [
    {
      image: EmployeePayroll,
      stack: Stack3,
      title: 'Employee Payroll Management System  ',
      title2: 'Spring Boot, Angular, HTML5,CSS3,Bootstrap, MySQL',
      color: 'card-color-1',
      codeLink: 'https://github.com/baljeet-singh97/Employee-Payroll-Management',
      demoLink: '#',
      description:
        'Employee can Register, login and apply for leave. View and Download Salary Details, Can View Attendance. Admin can manage all the employees. Admin can add, delete, update Employees, Accept reject Leave Requests, Add, Update, Delete Employees Salary, Add, Update, Delete Employees Attendance.',
    },
    {
      image: EAadhar,
      stack: Stack3,
      title: 'My E-Aadhar Portal',
      title2: 'Spring Boot, Angular, HTML5,CSS3,Bootstrap, MySQL',
      color: 'card-color-1',
      codeLink: 'https://github.com/baljeet-singh97/My-E-Aadhar-Portal',
      demoLink: '#',
      description:
        'The App helps user to Apply for new Aadhar Card, Delete, Update. All Request go to Admin and admin will accept or reject the request and based on admin action results will reflect to the user.',
    },
    {
      image: EmployeeManager,
      stack: Stack3,
      title: 'Employee Manager',
      title2: 'Spring Boot, Angular, HTML5,CSS3,Bootstrap, MySQL',
      color: 'card-color-1',
      codeLink: 'https://github.com/baljeet-singh97/Employee-Manager',
      demoLink: '#',
      description:
        'Admin can fetch all the employee data of the organization and Admin can Add new Employee, delete Employee, Update Employee Data.',
    },
 
  
  ];

  const projectMap = projectData.map((ele) => {
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="image-container">
            <img className="card-img" src={ele.image} alt="Roadtojs"></img>
            <img className="card-back-img" src={ele.stack} alt="Roadtojs"></img>
          </div>
          <div className={`card-body ${ele.color}`}>
            <h5 className="card-title">{ele.title}</h5>
            <h5 className="card-title">{ele.title2}</h5>
            <p className="card-text">{ele.description}</p>
            <a href={ele.codeLink}>
              <button className="css-button-shadow-border-sliding--black me-3">Code</button>
            </a>
            <a href={ele.demoLink}>
              <button className="css-button-shadow-border-sliding--black ms-3 ">Demo</button>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <>{projectMap}</>;
};

export default ProjectCardLogic;
