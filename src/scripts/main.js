'use strict';

const employees = Array.from(document.querySelectorAll('ul li'));

employees.sort((a, b) => {
  const salaryA = parseFloat(
    a.getAttribute('data-salary').replace(/[^\d.-]/g, ''),
  );
  const salaryB = parseFloat(
    b.getAttribute('data-salary').replace(/[^\d.-]/g, ''),
  );

  return salaryB - salaryA;
});

const employeeList = document.querySelector('ul');

employeeList.innerHTML = '';

// Додаємо відсортовані <li> елементи назад у <ul>
employees.forEach((employee) => {
  employeeList.appendChild(employee);
});
