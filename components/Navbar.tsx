import Link from "next/link";
import Image from "next/image";
// import { auth, signOut, signIn } from "@/auth";
// import { BadgePlus, LogOut } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = async () => {
  // const session = await auth();

  return (
    <header className="px-3 sm:px-5 py-2 sm:py-3 bg-yellow-100 shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={40} height={30} />
        </Link>
        <div className="text-xl sm:text-3xl font-semibold text-center">
          Jhandi Mundi{" "}
          <span className="text-xs sm:text-sm font-bold">
            {"(under development)"}
          </span>
        </div>
        {/* <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                 <BadgePlus className="size-6 sm:hidden" /> 
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                   <LogOut className="size-6 sm:hidden text-red-500" /> 
                </button>
              </form>

              {/* <Link href={`/user/${session?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link> 
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
