import { NextResponse } from 'next/server';

export function middleware(req) {
    const token = req.cookies.get('sessionToken'); // Obtener la cookie de sesión

    console.log("Middleware ejecutado");
    console.log("Token encontrado:", token);

    if (!token && req.nextUrl.pathname.startsWith('/productos')) {
        console.log("Redirigiendo a /errores por falta de sesión");
        return NextResponse.redirect(new URL('/errores', req.url));
    }

    return NextResponse.next();
}

// Asegurar que solo se ejecuta en /productos
export const config = {
    matcher: '/productos',
};
