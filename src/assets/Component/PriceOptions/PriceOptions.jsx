import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
//all the json formated data.the question is 
// i need some json data that will have price options for my gym.
//  please provide me a realistic price option name .
// also add features for each price option. do not forget to add id.
const priceOptions = [
    {
        "id": 1,
        "name": "Basic Plan",
        "price": 29.99,
        "features": [
            "Access to gym floor",
            "Locker room access",
            "Free Wi-Fi",
            "Open gym (no personal trainer)"
        ]
    },
    {
        "id": 2,
        "name": "Standard Plan",
        "price": 49.99,
        "features": [
            "Access to gym floor",
            "Locker room & shower access",
            "Group fitness classes",
            "1 free personal training session per month",
            "Nutritional guidance"
        ]
    },
    {
        "id": 3,
        "name": "Premium Plan",
        "price": 79.99,
        "features": [
            "24/7 access to gym",
            "Unlimited group classes",
            "5 personal training sessions per month",
            "Sauna & steam room access",
            "Diet & workout consultation",
            "Priority customer support"
        ]
    },
    {
        "id": 4,
        "name": "Elite Plan",
        "price": 219.99,
        "features": [
            "All Premium Plan benefits",
            "Unlimited personal training",
            "Private locker & VIP lounge access",
            "Custom meal planning",
            "Massage therapy (once per month)"
        ]
    },
    {
        "id": 5,
        "name": "Hybrid Plan",
        "price": 1934.99,
        "features": [
            "All Premium Plan benefits",
            "Unlimited personal training",
            "Private locker & VIP lounge access",
            "Custom meal planning",
            "Massage therapy (once per month)"
        ]
    },
    {
        "id": 6,
        "name": "Elite Plan New",
        "price": 169.990,
        "features": [
            "All Premium Plan benefits",
            "Unlimited personal training",
            "Private locker & VIP lounge access",
            "Custom meal planning",
            "Massage therapy (once per month)"
        ]
    }
];
      
    return (
        <div className="m-12">
            <h2 className="text-5xl text-center p-4">Best Prices In The town</h2>
            <div className="grid md:grid-cols-3 gap-4">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            
            </div>
        </div>
    );
};

export default PriceOptions;