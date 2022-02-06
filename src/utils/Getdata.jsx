import faker from 'faker';

const GetData = () => {
	const arr = [];

	for (let i = 0; i < 20; i++) {
		const genders = ['male', 'female'];
		const gender = faker.random.arrayElement(genders);

		const name = faker.name.firstName(gender);

		const city = faker.address.city();
		const breed = faker.animal.cat();
		const age = faker.datatype.number(20);
		const price = faker.commerce.price(50, 1000);

		arr.push({ name, gender, city, breed, age, price });
		console.log(arr);
	}

	return arr;
};

export default GetData;
