export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-[#E0E0E0] dark:border-[#757575] border-t-[#5B2A86] dark:border-t-[#FFDE5A] rounded-full animate-spin" />
        <p className="text-[#757575] dark:text-[#E0E0E0]">Loading...</p>
      </div>
    </div>
  )
} 