module.exports = (fullName) => {
  if(typeof fullName !== 'string') return 'Error';
  const nameAndlastname = fullName.split(' ');
  const [ firstName, lastName ] = nameAndlastname;
  if(!firstName || !lastName || nameAndlastname.length > 2) return 'Error';
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase() ;
};
