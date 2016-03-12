function createEnumObject(array) {
	const object = {};
	array.forEach(val => object[val] = val);
	return object;
}

const PROMO_TYPES_LIST = ['CREDIT'];
exports.PROMO_TYPES_LIST = PROMO_TYPES_LIST;
exports.PROMO_TYPES_DICT = createEnumObject(PROMO_TYPES_LIST);