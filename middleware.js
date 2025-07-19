const Listing = require("./models/listing.js")
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema,reviewSchema}= require("./schema.js");
const Review = require("./models/review.js")

module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","you must be logged in to create listing!");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl =req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req,res,next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not the owner of this listing!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

//Validation for schema middleware(joi)
module.exports.validateListing=(req,res,next)=>{
    let {error} = listingSchema.validate(req.body); //joi used for identifying errors
    if(error){
        let errMsg=error.details.map((el)=>{el.message}).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

//Validation for schema middleware(joi)
module.exports.validateReview=(req,res,next)=>{
    let {error} = reviewSchema.validate(req.body); //joi used for identifying errors
    if(error){
        let errMsg=error.details.map((el)=>{el.message}).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

module.exports.isReviewAuthor = async (req,res,next)=>{
    let {id,reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not the author of this review!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};