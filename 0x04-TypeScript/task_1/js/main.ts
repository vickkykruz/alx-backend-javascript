export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allow adding any additional attributes
}

const teacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Adding additional attribute
};

console.log(teacher);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
