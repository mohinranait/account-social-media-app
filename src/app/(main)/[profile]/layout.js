import ProfileLayout from "@/components/pages/profile/ProfileLayout"
import ProfileProvider from "@/provider/ProfileProvider"





const UserProfileLayout = ({ children }) => {

    return (
        <ProfileProvider>
            <ProfileLayout>
                {children}
            </ProfileLayout>
        </ProfileProvider>
    )
}

export default UserProfileLayout