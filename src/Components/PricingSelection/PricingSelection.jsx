import SinglePricingSelection from "../SinglePricingSelection/SinglePricingSelection";


const PricingSelection = () => {



    const priceSelections = [
        {
            "id": 1,
            "name": "Standard",
            "price": 10.99,
            "features": [
                "Basic menu options",
                "Standard preparation",
                "Regular serving size"
            ]
        },
        {
            "id": 2,
            "name": "Premium",
            "price": 15.99,
            "features": [
                "Expanded menu choices",
                "Premium ingredients",
                "Generous serving size"
            ]
        },
        {
            "id": 3,
            "name": "Deluxe",
            "price": 22.99,
            "features": [
                "Full menu access",
                "Top-tier ingredients",
                "Large serving size",
                "Priority service"
            ]
        }
    ]


    return (
        <div className="m-12">
            <div >
                <h2 className="text-3xl">Best Prices:</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {
                        priceSelections.map(selection => <SinglePricingSelection key={selection.id} selection={selection}></SinglePricingSelection>)
                    }
                </div>
            </div>

        </div>
    );
};

export default PricingSelection;