export const LOGO =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwN8RtzBT6EIllyR4Agp_QFobIfDwOtwgSw&s";
export const MENU =
  "https://thumb.ac-illust.com/41/41a956254bcd191e942220ca7fb13d71_t.jpeg";

  export const COLUMNS = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row) => (
        <img 
          src={row.image} 
          alt="userImage" 
          style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
        />
      ),
      sortable: false,
    },
    {
      name: "FullName",
      selector: (row) => `${row.firstName} ${row.lastName}`,
      sortable: true,
    },
    {
      name: "Demography",
      selector: (row) =>  `${row.gender === 'Male' ? 'M' : 'F'}/${row.age}`,
      sortable: false,
    },
    {
      name: "Designation",
      selector: (row) => row.company?.title,
      sortable: false,
    },
    {
      name: "Location",
      selector: (row) =>`${ row.address?.state }, ${row.address?.stateCode}`,
      sortable: false,
    },
  ];
  