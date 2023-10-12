import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';

function StartingPageContent() {
	const [loginError, setLoginError] = useState(false);
	const router = useRouter();
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const { data: session, status } = useSession();

	const submitHandler = async (event: any) => {
		event.preventDefault();
		const enteredEmail = emailRef.current!.value;

		const enteredPassword = passwordRef.current!.value;
		const indexOfAt = enteredEmail.indexOf('@');
		const navAdress = enteredEmail.slice(0, indexOfAt);

		const response = await signIn('credentials', { redirect: false, email: enteredEmail, password: enteredPassword });
	


		if (response.status === 401) {
			setLoginError(true);
		}

		if (navAdress === 'michaelscott') {
			router.replace(`/sales-manager/`);
		} else {
			router.replace(`/${navAdress}/`);
		}

	};

	return (
		<div className="bg-gray-200 w-96 rounded py-16 px-12 mx-auto my-20 flex flex-col items-center justify-center">
			<img
				className="rounded-full h-32 w-32"
				src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
				alt="user avatar"
			/>
			<form onSubmit={submitHandler} className="mt-8 mb-4">
				<div className="mb-4">
					<label htmlFor="userEmail" className="sr-only">
						Email address
					</label>
					<input
						className="border-solid border border-gray-400 rounded px-2 py-3"
						type="email"
						id="userEmail"
						placeholder="Email address"
						required
						ref={emailRef}
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="userEmail" className="sr-only">
						Password
					</label>
					<input
						className="border-solid border border-gray-400 rounded px-2 py-3"
						type="password"
						id="userPass"
						placeholder="Password"
						required
						ref={passwordRef}
					/>
				</div>
				{loginError && <p className="text-center text-red-600">Incorrect credentials</p>}
				<button className="bg-gray-700 hover:bg-gray-800 text-white font-bold w-full py-3" type="submit">
					Sign in
				</button>
			</form>
		</div>
	);
}

export default StartingPageContent;

// export async function hashPassword(password: string) {
// 	const hashedPassword = await hash(password, 12);
// 	return hashedPassword;
// }
