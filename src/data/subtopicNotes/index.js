/**
 * Aggregator & Loader for Subtopic Revision Notes (Bilingual: English & Sinhala)
 */
import { unit1RevisionData } from './g11-u1.js';
import { unit1RevisionDataSi } from './g11-u1-si.js';
import { unit15RevisionData } from './g11-u15.js';
import { unit15RevisionDataSi } from './g11-u15-si.js';

const subtopicNotesRegistryEn = {
  'g11-u1': unit1RevisionData,
  'g11-u15': unit15RevisionData,
};

const subtopicNotesRegistrySi = {
  'g11-u1': unit1RevisionDataSi,
  'g11-u15': unit15RevisionDataSi,
};

export const getUnitRevisionData = (unitId, isSinhala = false) => {
  const registry = isSinhala ? subtopicNotesRegistrySi : subtopicNotesRegistryEn;
  return registry[unitId] || subtopicNotesRegistryEn[unitId] || null;
};

export const getSubtopicNote = (unitId, subtopicId, isSinhala = false) => {
  const unit = getUnitRevisionData(unitId, isSinhala);
  if (!unit || !unit.subtopics) return null;
  return unit.subtopics.find((s) => s.id === subtopicId) || null;
};

export { unit1RevisionData, unit1RevisionDataSi, unit15RevisionData, unit15RevisionDataSi };
export default { en: subtopicNotesRegistryEn, si: subtopicNotesRegistrySi };
