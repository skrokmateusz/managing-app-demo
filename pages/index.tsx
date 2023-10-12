import { getSession } from 'next-auth/react';

import StartingPageContent from '@/components/starting-page/starting-page-content';

export default function Home() {
	return <div className='flex'>
		<StartingPageContent />;
	</div>;
}

