"use client";

import { Logo, Menu, ConnectMedia, MobileMenu, ThemeSwitcher } from "components";
import { useMediaQuery } from "utils";

export function AppHeader() {
	const isMobile = useMediaQuery();

	return (
		<header className="pt-5 pb-5 sticky top-0 z-10 bg-inherit shadow-sm">
			<div className="container-md">
				<div className="flex   justify-between  gap-3">
					<Logo />
				<div>
						{isMobile ? <MobileMenu /> : <Menu />}
					<div className="flex items-center gap-5">
						{!isMobile &&<div className="  absolute right-6 top-[20rem]"> <ConnectMedia /> </div>}
						{/* <ThemeSwitcher /> */}
					</div>
				</div>
				</div>
			</div>
		</header>
	);
}
