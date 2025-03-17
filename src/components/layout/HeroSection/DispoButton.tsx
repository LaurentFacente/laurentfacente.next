export function DispoButton({}) {
	return (
		<a
			className='focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center relative'
			rel='noopener noreferrer'
		>
			Disponible pour des missions freelance
			<span className='relative flex h-3 w-3'>
				<span className='bg-emerald-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75'></span>
				<span className='bg-emerald-400 relative inline-flex h-3 w-3 rounded-full'></span>
			</span>
		</a>
	);
}
