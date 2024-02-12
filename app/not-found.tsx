import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex w-full mt-20">
      <div className="m-auto text-center">
        <h1 className="font-primary font-semibold text-4xl sm:text-5xl mb-4">Page Not Found</h1>
        <p className="mb-4">404 Error: Could not find requested resource</p>
        <Link className="gradient-text hover:underline" href="/">Return Home</Link>
      </div>
    </div>
  )
}