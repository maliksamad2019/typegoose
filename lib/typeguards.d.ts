/// <reference types="node" />
import * as mongoose from 'mongoose';
import type { DocumentType, Ref, RefType } from './types';
/**
 * Check if the given document is populated
 * @param doc The Ref with uncertain type
 */
export declare function isDocument<T, S extends RefType>(doc: Ref<T, S>): doc is DocumentType<T>;
/**
 * Check if the given array is fully populated
 * Only returns "true" if all members in the array are populated
 * @param docs The Array of Refs with uncertain type
 */
export declare function isDocumentArray<T, S extends RefType>(docs: mongoose.Types.Array<Ref<T, S>> | undefined): docs is mongoose.Types.Array<DocumentType<NonNullable<T>>>;
/**
 * Check if the given array is fully populated
 * Only returns "true" if all members in the array are populated
 * @param docs The Array of Refs with uncertain type
 */
export declare function isDocumentArray<T, S extends RefType>(docs: Ref<T, S>[] | undefined): docs is DocumentType<NonNullable<T>>[];
declare type AllowedRefTypes = typeof String | typeof Number | typeof Buffer | typeof mongoose.Types.ObjectId | typeof mongoose.Types.Buffer;
/**
 * Check if the document is of type "refType"
 * @param doc The Ref with uncretain type
 * @param refType The Expected Reference Type (this is required because this type is only known at compile time, not at runtime)
 */
export declare function isRefType<T, S extends RefType>(doc: Ref<T, S> | undefined, refType: AllowedRefTypes): doc is NonNullable<S>;
/**
 * Check if the array is fully of type "refType"
 * Only returns "true" if all members in the array are of type "refType"
 * @param docs The Ref with uncretain type
 * @param refType The Expected Reference Type (this is required because this type is only known at compile time, not at runtime)
 */
export declare function isRefTypeArray<T, S extends RefType>(docs: mongoose.Types.Array<Ref<T, S>> | undefined, refType: AllowedRefTypes): docs is mongoose.Types.Array<NonNullable<S>>;
/**
 * Check if the array is fully of type "refType"
 * Only returns "true" if all members in the array are of type "refType"
 * @param docs The Ref with uncretain type
 * @param refType The Expected Reference Type (this is required because this type is only known at compile time, not at runtime)
 */
export declare function isRefTypeArray<T, S extends RefType>(docs: Ref<T, S>[] | undefined, refType: AllowedRefTypes): docs is NonNullable<S>[];
/**
 * Check if the input is a mongoose.Model
 * @param model The Value to check
 */
export declare function isModel(model: any): model is mongoose.Model<any>;
export {};
