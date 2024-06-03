import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Head title="Sign Up" />

            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center mr-8">
                    <img src="/assets/logo.JPG" alt="Logo" className="h-96 mb-6" />
                    {/* Increased image height to h-96 */}
                </div>

                <div className="w-full max-w-md bg-gray-200 p-8 rounded-lg shadow-md">
                    {status && <div className="mb-6 font-medium text-lg text-green-600">{status}</div>}
                    {/* Add your text elements here */}
                    <div className="text-4xl font-semibold text-center mb-4">
                        <h1>Welcome to 40bit</h1>
                    </div>
                    <div className="text-lg text-center mb-4">
                        <p>Sign up to explore more.</p>
                    </div>
                    {/* End of text elements */}
                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="email" value="Email" className="text-lg" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-2 block w-full text-lg"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="Enter your email name"
                            />
                            <InputError message={errors.email} className="mt-2 text-lg" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Password" className="text-lg" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-2 block w-full text-lg"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="Enter your password"
                            />
                            <InputError message={errors.password} className="mt-2 text-lg" />
                        </div>

                        <div className="flex items-center justify-between mt-6">
                            <button
                                type="button"
                                className=" px-6 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600  focus:ring-gray-500 text-lg"
                                onClick={() => setData({ email: '', password: '' })}
                            >
                                Cancel
                            </button>
                            <PrimaryButton className="px-6 py-2 ml-6 bg-yellow-500 hover:bg-yellow-600 text-lg" disabled={processing}>
                                Login
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
