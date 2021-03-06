const evidenceGathering = 'Evidence gathering & review';

const phaseMap = {
  1: 'Claim received',
  2: 'Initial processing',
  3: evidenceGathering,
  4: evidenceGathering,
  5: evidenceGathering,
  6: evidenceGathering,
  7: 'Preparation for decision notification',
  8: 'Complete'
};

export function getPhaseDescription(phase) {
  return phaseMap[phase];
}

export function getUserPhaseDescription(phase) {
  if (phase < 3) {
    return phaseMap[phase];
  } else if (phase === 3) {
    return evidenceGathering;
  }

  return phaseMap[phase + 3];
}

export function getPhaseDescriptionFromEvent(event) {
  const phase = parseInt(event.type.replace('phase', ''), 10);
  return phaseMap[phase];
}

export function getUserPhase(phase) {
  if (phase < 3) {
    return phase;
  } else if (phase >= 3 && phase < 7) {
    return 3;
  }

  return phase - 3;
}

export function groupTimelineActivity(events) {
  const phases = {};
  const phaseEvents = events;
  let activity = [];
  let lastPhaseNumber = 1;

  phaseEvents.forEach(event => {
    if (event.type.startsWith('phase')) {
      const phaseNumber = parseInt(event.type.replace('phase', ''), 10);
      const userPhaseNumber = getUserPhase(phaseNumber);
      if (userPhaseNumber !== lastPhaseNumber) {
        activity.push({
          type: 'phase_entered',
          date: event.date
        });
      }
      phases[userPhaseNumber + 1] = (phases[userPhaseNumber + 1] || []).concat(activity);
      activity = [];
      lastPhaseNumber = userPhaseNumber;
    } else {
      activity.push(event);
    }
  });

  if (activity.length > 0) {
    phases[lastPhaseNumber] = (phases[lastPhaseNumber] || []).concat(activity);
  }

  return phases;
}

export function displayFileSize(size) {
  if (size < 1024) {
    return `${size}B`;
  }

  const kbSize = size / 1024;
  if (kbSize < 1024) {
    return `${Math.round(kbSize)}KB`;
  }

  const mbSize = kbSize / 1024;
  return `${Math.round(mbSize)}MB`;
}

export const DOC_TYPES = [
  { value: 'L029', label: 'Copy of a DD214' },
  { value: 'L450', label: 'STR - Dental - Photocopy' },
  { value: 'L451', label: 'STR - Medical - Photocopy' },
  { value: 'L049', label: 'Medical Treatment Record - Non-Government Facility' },
  { value: 'L034', label: 'Military Personnel Record' },
  { value: 'L107', label: 'VA Form 21-4142 - Authorization To Disclose Information' },
  { value: 'L827', label: 'VA Form 21-4142a - General Release for Medical Provider Information' },
  { value: 'L229', label: 'VA Form 21-0781a - Statement in Support of Claim for PTSD Secondary to Personal Assault' },
  { value: 'L228', label: 'VA Form 21-0781 - Statement in Support of Claim for PTSD' },
  { value: 'L149', label: 'VA Form 21-8940 - Veterans Application for Increased Compensation Based on Un-employability' },
  { value: 'L115', label: 'VA Form 21-4192 - Request for Employment Information in Connection with Claim for Disability' },
  { value: 'L159', label: 'VA Form 26-4555 - Application in Acquiring Specially Adapted Housing or Special Home Adaptation Grant' },
  { value: 'L117', label: 'VA Form 21-4502 - Application for Automobile or Other Conveyance and Adaptive Equipment Under 38 U.S.C. 3901-3904' },
  { value: 'L139', label: 'VA Form 21-686c - Declaration of Status of Dependents' },
  { value: 'L133', label: 'VA Form 21-674 - Request for Approval of School Attendance' },
  { value: 'L102', label: 'VA Form 21-2680 - Examination for Housebound Status or Permanent Need for Regular Aid & Attendance' },
  { value: 'L222', label: 'VA Form 21-0779 - Request for Nursing Home Information in Connection with Claim for Aid & Attendance' },
  { value: 'L702', label: 'Disability Benefits Questionnaire (DBQ)' },
  { value: 'L703', label: 'Goldmann Perimetry Chart/Field Of Vision Chart' },
  { value: 'L070', label: 'Photographs' },
  { value: 'L023', label: 'Other Correspondence' }
];

export function getDocTypeDescription(docType) {
  return DOC_TYPES.filter(type => type.value === docType)[0].label;
}

export function isCompleteClaim({ attributes }) {
  return !!attributes.claimType
    && !!attributes.contentionList.length
    && !!attributes.dateFiled
    && !!attributes.vaRepresentative;
}
