'use client';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';

const DashboardHeader = () => {
    return (
        <header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white">
            <div className="flex h-16 items-center justify-between px-6 lg:px-8">
                {/* Left side - Organization Switcher */}
                <div className="flex items-center">
                    <OrganizationSwitcher/>
                </div>

                {/* Right side - User Profile */}
                <div className="flex items-center">
                    <UserButton
                        appearance={{
                            elements: {
                                avatarBox: "w-9 h-9",
                                userButtonPopoverCard: "shadow-lg",
                            }
                        }}
                        afterSignOutUrl="/"
                    />
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
