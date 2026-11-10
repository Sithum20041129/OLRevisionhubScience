/**
 * Aggregator & Loader for Subtopic Revision Notes (Bilingual: English & Sinhala)
 */
import { unit1RevisionData } from './g11-u1.js';
import { unit1RevisionDataSi } from './g11-u1-si.js';
import { unit2RevisionData } from './g11-u2.js';
import { unit2RevisionDataSi } from './g11-u2-si.js';
import { unit3RevisionData } from './g11-u3.js';
import { unit3RevisionDataSi } from './g11-u3-si.js';
import { unit4RevisionData } from './g11-u4.js';
import { unit4RevisionDataSi } from './g11-u4-si.js';
import { unit5RevisionData } from './g11-u5.js';
import { unit5RevisionDataSi } from './g11-u5-si.js';
import { unit6RevisionData } from './g11-u6.js';
import { unit6RevisionDataSi } from './g11-u6-si.js';
import { unit7RevisionData } from './g11-u7.js';
import { unit7RevisionDataSi } from './g11-u7-si.js';
import { unit8RevisionData } from './g11-u8.js';
import { unit8RevisionDataSi } from './g11-u8-si.js';
import { unit15RevisionData } from './g11-u15.js';
import { unit15RevisionDataSi } from './g11-u15-si.js';

const subtopicNotesRegistryEn = {
  'g11-u1': unit1RevisionData,
  'g11-u2': unit2RevisionData,
  'g11-u3': unit3RevisionData,
  'g11-u4': unit4RevisionData,
  'g11-u5': unit5RevisionData,
  'g11-u6': unit6RevisionData,
  'g11-u7': unit7RevisionData,
  'g11-u8': unit8RevisionData,
  'g11-u15': unit15RevisionData,
};

const subtopicNotesRegistrySi = {
  'g11-u1': unit1RevisionDataSi,
  'g11-u2': unit2RevisionDataSi,
  'g11-u3': unit3RevisionDataSi,
  'g11-u4': unit4RevisionDataSi,
  'g11-u5': unit5RevisionDataSi,
  'g11-u6': unit6RevisionDataSi,
  'g11-u7': unit7RevisionDataSi,
  'g11-u8': unit8RevisionDataSi,
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

export { 
  unit1RevisionData, 
  unit1RevisionDataSi, 
  unit2RevisionData, 
  unit2RevisionDataSi, 
  unit3RevisionData, 
  unit3RevisionDataSi, 
  unit4RevisionData, 
  unit4RevisionDataSi, 
  unit5RevisionData, 
  unit5RevisionDataSi, 
  unit6RevisionData, 
  unit6RevisionDataSi, 
  unit7RevisionData, 
  unit7RevisionDataSi, 
  unit8RevisionData, 
  unit8RevisionDataSi, 
  unit15RevisionData, 
  unit15RevisionDataSi 
};
export default { en: subtopicNotesRegistryEn, si: subtopicNotesRegistrySi };
