/**
 * Aggregator & Loader for Subtopic Revision Notes (Bilingual: English & Sinhala)
 * Complete Grade 11 Science Curriculum (Units 1 - 15)
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
import { unit9RevisionData } from './g11-u9.js';
import { unit9RevisionDataSi } from './g11-u9-si.js';
import { unit10RevisionData } from './g11-u10.js';
import { unit10RevisionDataSi } from './g11-u10-si.js';
import { unit11RevisionData } from './g11-u11.js';
import { unit11RevisionDataSi } from './g11-u11-si.js';
import { unit12RevisionData } from './g11-u12.js';
import { unit12RevisionDataSi } from './g11-u12-si.js';
import { unit13RevisionData } from './g11-u13.js';
import { unit13RevisionDataSi } from './g11-u13-si.js';
import { unit14RevisionData } from './g11-u14.js';
import { unit14RevisionDataSi } from './g11-u14-si.js';
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
  'g11-u9': unit9RevisionData,
  'g11-u10': unit10RevisionData,
  'g11-u11': unit11RevisionData,
  'g11-u12': unit12RevisionData,
  'g11-u13': unit13RevisionData,
  'g11-u14': unit14RevisionData,
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
  'g11-u9': unit9RevisionDataSi,
  'g11-u10': unit10RevisionDataSi,
  'g11-u11': unit11RevisionDataSi,
  'g11-u12': unit12RevisionDataSi,
  'g11-u13': unit13RevisionDataSi,
  'g11-u14': unit14RevisionDataSi,
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
  unit9RevisionData, 
  unit9RevisionDataSi, 
  unit10RevisionData, 
  unit10RevisionDataSi, 
  unit11RevisionData, 
  unit11RevisionDataSi, 
  unit12RevisionData, 
  unit12RevisionDataSi, 
  unit13RevisionData, 
  unit13RevisionDataSi, 
  unit14RevisionData, 
  unit14RevisionDataSi, 
  unit15RevisionData, 
  unit15RevisionDataSi 
};
export default { en: subtopicNotesRegistryEn, si: subtopicNotesRegistrySi };
