import Stripe from "stripe";
import handler from "./util/handler";
import { calculateCost} from "./util/cost";

export const main = handler(async (event) => {

    const { storage, source } = JSON.parse(event.body);
    const amount = calculateCost(storage);
    const description = "Scratch charge";

    const key = "sk_test_51KsOTiFQQLyHOSEsGFWygpqi6qWlF5KUnrF4E6Enb8wtW3cM4Q0BOPQxUhmup1pRXetlNxXpL5iBFMIylbmDNSSb008G0R5VWr";

    //const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const stripe = new Stripe(key);

    await stripe.charges.create({
        source, 
        amount,
        description,
        currency: "usd"
    });

    return { status: true };
});