import { useAuth } from '../Components/Modules/AuthContext';


function Logout() {
    const { logout } = useAuth();
    return (
        <div className="logout-container">
            <h1>Logout</h1>
            <p>You have successfully logged out.</p>
            <button onClick={() => {
                logout();
                console.log('User logged out successfully');
            }}>
                Logout
            </button>
        </div>
    );
}

export default Logout;