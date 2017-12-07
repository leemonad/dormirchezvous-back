import DataLoader from 'dataloader';
import { Op } from 'sequelize';

export const getAdsByEventIds = AdConnector => ids =>
  AdConnector.findAll({
    where: {
      eventId: {
        [Op.in]: ids,
      },
    },
  }).then(ads => ids.map(id => ads.filter(ad => ad.eventId === id)));

export default connector => ({
  adsByEventId: new DataLoader(getAdsByEventIds(connector.Ad), {
    cache: false,
  }),
});
