import Image from 'next/image';
import locationImg1 from '../public/location1.jpg';

const Locations = () => {
  const locationsData = [
    {
      image: '/location1.jpg',
      address: '123 Main Street, Cityville',
      Phone: '+1 123-456-7890',
      openingHours: {
        'Monday to Saturday ': '9:00 AM - 5:00 PM',
        Sunday: 'Closed',
      },
    },
    {
      image: '/location1.jpg',
      address: '456 Oak Avenue, Townsville',
      Phone: '+1 987-654-3210',
      openingHours: {
        'Monday to Saturday ': '10:00 AM - 6:00 PM',

        Sunday: 'Closed',
      },
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
      {locationsData.map((location, index) => (
        <div
          key={index}
          className="bg-gray-100 p-4 rounded-md grid sm:grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="relative h-60">
            <Image
              src={location.image}
              alt={`Location ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <div className="leading-6">
              <p className="font-bold">Address:</p>
              <p>{location.address}</p>
              <p className="mt-2 font-bold">Phone:</p>
              <p>{location.Phone}</p>
            </div>
            <p className="mt-2 font-bold">Opening Hours:</p>
            <ul className="mt-1">
              {Object.entries(location.openingHours).map(([day, hours]) => (
                <li key={day}>
                  <span className="font-bold">{day}:</span> {hours}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Locations;
