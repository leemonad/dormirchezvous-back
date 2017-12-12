import AdDataloaders from './Ad/dataloaders';

export default connectors => ({
  ...AdDataloaders(connectors),
});
