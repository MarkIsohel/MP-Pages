import { Tab } from '@headlessui/react'
import StudentLogin from './StudentLogin'
import AdminLogin from './AdminLogin'


function TabLogin() {
    return (
        <div className="w-full  px-2 py-24">
            <Tab.Group>
                <Tab.List className="flex justify-center space-x-4">
                    <Tab
                        className="bg-gray-100 text-gray-800 font-medium py-2 px-6 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        Admin
                    </Tab>
                    <Tab
                        className="bg-gray-100 text-gray-800 font-medium py-2 px-6 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        Student
                    </Tab>
                </Tab.List>

                <Tab.Panels className="mt-2">

                    <Tab.Panel>
                        <AdminLogin />
                    </Tab.Panel>

                    <Tab.Panel>
                        <StudentLogin />
                    </Tab.Panel>

                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default TabLogin