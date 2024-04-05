import { Heading1, Settings } from "lucide-react";
import { Heading } from "@/components/heading";

const SettingsPage = () => {
    return (
        <div>
            <Heading
                title="Settings"
                description="Manage account settings."
                icon={Settings}
                iconColor="text-gray-700"
                bgColor="bg-gray-700/10"
            />
        
          
            
            <div className="px-4 lg:px-8 
        items-center gap-x-3 mb-8">
                <h2 className="text-xl font-semibold mb-4">  Terms and Conditions</h2>
                {/* Add content for terms and conditions here */}
                <p className="text-gray-600"> Review and agree to the terms of service and privacy policy governing your use of the platform.</p>
                <p className="text-gray-600"> Learn more about how your data is collected, used, and protected.</p>
                <p className="text-gray-600">  Please review our terms and conditions <a href="/terms" className="text-blue-600"></a>.</p>
            </div>
            <div className="px-4 lg:px-8 
        items-center gap-x-3 mb-8">
                <h2 className="text-xl font-semibold mb-4">  Feedback and Support</h2>
                <p className="text-gray-600"> Provide feedback on your experience using PilotGPT to help improve the platform.</p>
                <p className="text-gray-600"> Access support resources, including FAQs, tutorials, and contact information for customer support.</p>
            </div>
            <div className="px-4 lg:px-8 
        items-center gap-x-3 mb-8">
                <h2 className="text-xl font-semibold mb-4">  Logout</h2>
                {/* Add content for logout here */}
            </div>
        </div>
    );
}

export default SettingsPage;
