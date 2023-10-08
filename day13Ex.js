
// Sample data
const countries = [
    { name: 'USA', population: 331002651, area: 9525067 },
    { name: 'China', population: 1439323776, area: 9596961 },
    { name: 'India', population: 1380004385, area: 3287263 },
    // Add more countries as needed
  ];
  
  const countriesObject = {
    USA: { population: 331002651, area: 9525067 },
    China: { population: 1439323776, area: 9596961 },
    India: { population: 1380004385, area: 3287263 },
    // Add more countries as needed
  };
  
  // Group logs using console.group()
  console.group('Countries Data');
  console.group('Array Data');
  console.table(countries); // Display the array as a table
  console.groupEnd(); // End of Array Data group
  
  console.group('Object Data');
  console.table(countriesObject); // Display the object as a table
  console.groupEnd(); // End of Object Data group
  
  console.groupEnd(); // End of Countries Data group
  