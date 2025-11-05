import asyncHandler from 'express-async-handler';

import { CartItem } from '../modals/cartModal.js'; 

//  GET CART
export const getCart = asyncHandler(async (req, res) => {
    const items = await CartItem.find({ user: req.user._id }).populate('item');

    const formatted = items.map(ci => ({
        _id: ci._id.toString(),
        item: ci.item,
        quantity: ci.quantity
    }));
    res.json(formatted);
});

export const addToCart = asyncHandler(async (req, res) => {
    let  { itemId, quantity } = req.body;
    quantity = Number(quantity);
    // Validation (as seen in your snippet)
    if (!itemId || isNaN(quantity) || quantity < 1) {
        res.status(400);
        throw new Error('itemId and a positive quantity are required');
    }

    let cartItem = await CartItem.findOne({ user: req.user._id, item: itemId });

    if (cartItem) {
        // Item exists: Update quantity
        cartItem.quantity += quantity;
        await cartItem.save();
    } else {
        // Item does not exist: Create new cart item
        cartItem = await CartItem.create({
            user: req.user._id,
            item: itemId,
            quantity: quantity,
        });
    }
    
    // Populate and send response
    await cartItem.populate('item');
    res.status(201).json({ 
        _id: cartItem._id.toString(), 
        item: cartItem.item, 
        quantity: cartItem.quantity 
    });
});

// 3. 🔄 UPDATE CART ITEM (MISSING FUNCTION - ADDED HERE)
// This handles the PUT request, typically used to change the quantity of an existing item.
export const updateCartItem = asyncHandler(async (req, res) => {
    const { quantity } = req.body;
    const cartItemId = req.params.id;
    
    // Validation
    if (typeof quantity !== 'number' || quantity < 0) {
        res.status(400);
        throw new Error('Quantity must be a non-negative number');
    }

    const cartItem = await CartItem.findOne({ _id: cartItemId, user: req.user._id });

    if (!cartItem) {
        res.status(404);
        throw new Error('Cart item not found');
    }

    if (quantity === 0) {
        // If quantity is set to 0, delete the item
        await cartItem.deleteOne();
        return res.status(204).end();
    }

    // Update quantity and save
    cartItem.quantity = quantity;
    await cartItem.save();
    
    // Populate and send response
    await cartItem.populate('item');
    res.json({
        _id: cartItem._id.toString(),
        item: cartItem.item,
        quantity: cartItem.quantity,
    });
});

// 4. 🗑️ DELETE SINGLE CART ITEM
export const deleteCartItem = asyncHandler(async (req, res) => {
    const cartItem = await CartItem.findOne({ _id: req.params.id, user: req.user._id });
    
    if (!cartItem) {
        res.status(404);
        throw new Error('Cart item not found');
    }

    await cartItem.deleteOne(); 
    res.json({ _id: req.params.id });
});

// 5. 🧹 CLEAR ALL CART ITEMS
export const clearCart = asyncHandler(async (req, res) => {
    await CartItem.deleteMany({ user: req.user._id });
    res.json({ message: 'Cart Cleared' });
});