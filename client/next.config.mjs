/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    remotePatterns: [
      {
        hostname: process.env.API_HOST,
      },
			
    ],
  },
	env:{
		serverUrl:`${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}`,
		name:'Модница',
		title:'VIP знакомства',
		description:'Сайт знакомств с элитными девушками и мужчинами',
	}
};

export default nextConfig;
