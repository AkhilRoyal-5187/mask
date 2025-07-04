import { query, mutation } from "./_generated/server";
import {v} from 'convex/values';

export const getProducts = query({
    args:{},
    handler :async(ctx, args)=>{
        const products = await ctx.db.query("products").collect();
        return products;
    }
})