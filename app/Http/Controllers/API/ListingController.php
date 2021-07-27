<?php


namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Listing;

class ListingController extends Controller
{
    public function index()
    {
        $listings = Listing::all()->toArray();

        return response()->json($listings);
    }

    public function show($id)
    {
        $listing = Listing::find($id)->toArray();

        return response()->json($listing);
    }
}
