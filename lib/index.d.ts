import mongoose from 'mongoose';
import type { BeAnObject, IndexOptions } from './types';
/**
 * Defines a index for this Class which will then be added to the Schema.
 * @param fields Which fields to index (if multiple fields are set, it will be a compound index)
 * @param options Options to pass to MongoDB driver's createIndex() function
 * @example Example:
 * ```ts
 * @index({ article: 1, user: 1 }, { unique: true })
 * class ClassName {}
 * ```
 */
export declare function index<T extends BeAnObject = BeAnObject>(fields: mongoose.IndexDefinition, options?: IndexOptions<T>): ClassDecorator;
export { index as Index };
