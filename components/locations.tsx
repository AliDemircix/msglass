import Image from 'next/image';

const Locations = () => {
  const locationsData = [
    {
      image: '/location1.jpg',
      address: '123 Main Street, Cityville',
      shop: 'MST ',
      Phone: '+1 123-456-7890',
      openingHours: {
        'Monday to Saturday ': '9:00 AM - 5:00 PM',
        Sunday: 'Closed',
      },
    },
    {
      image: '/location1.jpg',
      address: '456 Oak Avenue, Townsville',
      shop: 'MST Bussum',
      Phone: '+1 987-654-3210',
      openingHours: {
        'Monday to Saturday ': '10:00 AM - 6:00 PM',

        Sunday: 'Closed',
      },
    },
  ];
  return (
    <div>
      <p className="text-3xl font-semibold font-semibold text-center text-slate-700 mb-12">
        Visit Both of Our Locations:
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-12">
        {locationsData.map((location, index) => (
          <div key={index} className={' my-6 relative md:my-3 relative'}>
            <div className={'relative h-64  '}>
              <Image
                src={location.image}
                alt={`Location ${index + 1}`}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="bg-gray-100 p-4 absolute top-12 -right-12 md:top-12 right-6 ">
              <p className="font-bold text-3xl mb-2 w-52">{location.shop}</p>
              <p className="text-sm">{location.address}</p>
              <p className="mt-2 font-bold underline">Opening Hours:</p>
              <ul className="mt-2">
                {Object.entries(location.openingHours).map(([day, hours]) => (
                  <li key={day} className="text-sm">
                    <span className="font-bold ">{day}:</span> {hours}
                  </li>
                ))}
              </ul>
              <p className="mt-2 font-bold underline">Phone:</p>
              <p className="text-sm">{location.Phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Locations;
