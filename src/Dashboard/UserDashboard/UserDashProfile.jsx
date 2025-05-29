import useAuth from "../../Hooks/useAuth";

const UserDashProfile = () => {
  const { user } = useAuth();
  // Access user data from context

  return (
    <div className="flex justify-center items-center mt-16 bg-white max-w-2xl rounded-lg mx-auto h-[290px]">
      <div className="profile-info">
        
        {user ? (
          <>
            <div className="mx-auto text-center">
              <img
                src={user.photoURL || "https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png"} // Fallback to default image if no photoURL
                alt={user.displayName || "User"}
                className="h-[70px] w-[70px] lg:h-[120px] lg:w-[120px] rounded-full mx-auto text-center"
              />
            </div>
            <div className="profile-details">
              <p className="text-center">
                <strong>Name:</strong> {user.displayName}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </div>
          </>
        ) : (
          <p>No user data available. Please log in.</p>
        )}
      </div>
    </div>
  );
};

export default UserDashProfile;
