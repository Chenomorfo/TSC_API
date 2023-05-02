const CounterType = (type, enemyType) => {
  if (type.Id === enemyType.weakness) return 1;
  if (type.weakness === enemyType.Id) return -1;
  return 0;
};

const FieldBoost = (Type, FieldType) => {
  if (Type.id === FieldType) return 1.3;
  if (Type.weakness === FieldType) return 0.7;
  return 1;
};
