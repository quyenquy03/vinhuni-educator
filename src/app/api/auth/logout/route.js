import { cookies } from "next/headers";

export async function POST() {
    const cookie= cookies();
    cookie.delete('accessToken')
    return Response.json({
        status: 200
    })
}