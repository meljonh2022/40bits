import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="flex items-center justify-center">
                    <div className="bg-gray-300 p-10 rounded-lg shadow-md" style={{ width: '60rem', height: 'auto' }}>
                        <h2 className="text-center text-5xl font-bold text-gray-900 mb-6">Edit Profile</h2>
                        <h1 className="text-center text-2xl text-gray-600 mb-8">Update your profile information.</h1>
                        
                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
                                <div className="w-full sm:w-1/2 p-6 sm:p-10 bg-white shadow sm:rounded-lg">
                                    <UpdateProfileInformationForm
                                        mustVerifyEmail={mustVerifyEmail}
                                        status={status}
                                        className="max-w-xl"
                                    />
                                </div>

                                <div className="w-full sm:w-1/2 p-6 sm:p-10 bg-white shadow sm:rounded-lg">
                                    <UpdatePasswordForm className="max-w-xl" />
                                </div>
                            </div>

                            <div className="w-full p-6 sm:p-10 bg-white shadow sm:rounded-lg">
                                <DeleteUserForm className="max-w-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
