/**
 * Loads publisher metadata for the storefront from the local SQLite database.
 * Used during static page generation to display publisher names and links.
 */
import { asc } from 'drizzle-orm';
import type { Database } from './db';
import { publishers } from '../../db/schema';
import type { Publisher } from '../types/game';

/**
 * Fetches every publisher sorted alphabetically by name.
 * @param db - The database connection used to query publisher rows.
 * @returns A promise resolving to all publishers in name order.
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}
