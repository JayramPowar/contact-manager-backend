import express from 'express';
import asyncHandler from "express-async-handler";


export const registerUser = asyncHandler(async (req, res) => {
    res.json({message :"Register here"});
});

export const loginUser = asyncHandler(async (req, res) => {
    res.json({message :"Login here"});
});

export const getCurrentUser = asyncHandler(async (req, res) => {
    res.json({message :"Current user here"});
});