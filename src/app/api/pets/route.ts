import { query } from '@/lib/db';

export async function GET() {
  try {
    const { results } = await query(`
      SELECT p.*, pc.Species, pc.Breed, pc.SizeCategory, pc.Temperament, 
       pc.LifeExpectancyMin, pc.LifeExpectancyMax, pc.GroomingNeeds,
       pc.ActivityLevel, pc.GoodWithChildren, pc.GoodWithOtherPets,
       GROUP_CONCAT(pp.PhotoURL) AS PhotoURLs
FROM Pet p
JOIN PetCategory pc ON p.CategoryID = pc.CategoryID
LEFT JOIN PetPhoto pp ON p.PetID = pp.PetID
WHERE p.AdoptionStatus = 'Available'
GROUP BY p.PetID
    `);
    
    return Response.json(results);
  } catch (error) {
    return Response.json(
      { error: 'Failed to fetch pets' },
      { status: 500 }
    );
  }
}