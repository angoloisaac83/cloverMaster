// Define the InvitedUser interface
interface InvitedUser {
    id: string;
    username: string;
  }
  
  // Define the UserData interface
  interface UserData {
    id: string;
    username: string;
    level: string;
    minedcoin: number;
    invited: InvitedUser[];
  }
  
  // Declare the userData array
  const userData: UserData[] = [
    {
      id: "11221123",
      username: 'User1',
      level: '1',
      minedcoin: 1000,
      invited: [
        {
          id: "11221124",
          username: 'InvitedUser1'
        },
        {
          id: "11221125",
          username: 'InvitedUser2'
        }
      ]
    },
    {
      id: "11221123",
      username: 'User2',
      level: '1',
      minedcoin: 1000,
      invited: [
        {
          id: "11221124",
          username: 'InvitedUser1'
        },
        {
          id: "11221125",
          username: 'InvitedUser2'
        }
      ]
    }
    ,
    {
      id: "11221123",
      username: 'User3',
      level: '1',
      minedcoin: 1000,
      invited: [
        {
          id: "11221124",
          username: 'InvitedUser1'
        },
        {
          id: "11221125",
          username: 'InvitedUser2'
        }
      ]
    }
    // Add more user objects if needed
  ];
  
  // Example usage of userData
  console.log(userData);
  