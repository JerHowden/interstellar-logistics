type Facility = {
  id: string;
  core: Levels;
  warehouse: Levels;
} & (
  | {
      type: 'space';
      shipyard: LevelsOptional;
    }
  | {
      type: 'grounded';
      harvesting: LevelsOptional;
      processing: LevelsOptional;
      manufacturing: LevelsOptional;
    }
);
