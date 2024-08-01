import { UserList } from "@/lib/user-list";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return <>
    
    <Link href="/users/add">add user</Link>
    <Suspense fallback={<p>Loading...</p>}>
      <UserList />
    </Suspense>
  </>
}