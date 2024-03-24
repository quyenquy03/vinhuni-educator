export async function POST(request) {
    const res = await request.json();
    const accessToken = res?.data?.accessToken;
    const data = res?.data;
    const expires = (new Date(Date.now()+ 5*60*1000)).toUTCString();
    if(res.statusCode != 200 || !accessToken) {
        return Response.json({res});
    } 
    return Response.json({data, status: 200}, {
        status: 200,
        headers: {
            'Set-cookie': `accessToken=${accessToken}; expires=${expires}; path=/; Secure; HttpOnly; `
        }
    })
}