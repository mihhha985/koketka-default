import Header from "@/component/Header";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
		<div className="layout">
			<Header />
			{children}
			<footer className="text-center pb-5 mt-auto">
				<p>© 2021-2024 Модница. Все права защещины.</p>
			</footer>
		</div>
	);
}