import Price from "../Price/Price";

const PriceOpton = () => {

    const priceOption = [
        {
            "id": 1,
            "name": "Basic",
            "price": "$29.99/month",
            "features": [
                "Access to cardio area",
                "Limited access to weightlifting area",
                "Access to group fitness classes",
                "Locker usage"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": "$49.99/month",
            "features": [
                "Full access to cardio and weightlifting areas",
                "Access to group fitness classes",
                "Personal trainer consultation",
                "Sauna access"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": "$79.99/month",
            "features": [
                "Full access to all facilities",
                "Unlimited group fitness classes",
                "Free access to special events",
                "Complimentary towel service",
                "Smoothie bar access",
                "Monthly massage session"
            ]
        }
    ]


    return (
        <div className="m-5">
            <h2 className="text-5xl mb-6 font-bold">Best prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-4">
                {
                    priceOption.map((option) => <Price key={option.id} option={option}></Price>)
                }
            </div>
        </div>
    );
};

export default PriceOpton;