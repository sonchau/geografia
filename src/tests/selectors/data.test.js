import {buildQuery, getLabels, getMale, getFemale, getData} from '../../selectors/data';
import data from '../fixtures/data';

test('should build query and return empty string if no input year', () => {
    const result = buildQuery();
    expect(result).toEqual('');
});

test('should build query and return query', () => {
    const result = buildQuery("something");
    expect(result).toEqual(`SELECT sexp_sex, sum(number) AS number, age5p_age_in_five_year_groups FROM something GROUP BY sexp_sex, age5p_age_in_five_year_groups ORDER BY age5p_age_in_five_year_groups='100 years and over', age5p_age_in_five_year_groups='95-99 years', age5p_age_in_five_year_groups='90-94 years', age5p_age_in_five_year_groups='85-89 years', age5p_age_in_five_year_groups='80-84 years', age5p_age_in_five_year_groups='75-79 years', age5p_age_in_five_year_groups='70-74 years', age5p_age_in_five_year_groups='65-69 years', age5p_age_in_five_year_groups='60-64 years', age5p_age_in_five_year_groups='55-59 years', age5p_age_in_five_year_groups='50-54 years', age5p_age_in_five_year_groups='45-49 years', age5p_age_in_five_year_groups='40-44 years', age5p_age_in_five_year_groups='35-39 years', age5p_age_in_five_year_groups='30-34 years', age5p_age_in_five_year_groups='25-29 years', age5p_age_in_five_year_groups='20-24 years', age5p_age_in_five_year_groups='15-19 years', age5p_age_in_five_year_groups='10-14 years', age5p_age_in_five_year_groups='5-9 years', age5p_age_in_five_year_groups='0-4 years'`);
});

test('should get all the labels', () => {
    const result = getLabels(data);
    expect(result).toEqual(['0-4 years', '5-9 years', '10-14 years']);
});

test('should get all male', () => {
    const result = getMale(data);
    expect(result).toEqual([83156, 84278, 77299]);
});

test('should get all female', () => {
    const result = getFemale(data);
    expect(result).toEqual([78572, 79873, 73504]);
});

test('should get data object', () => {
    const result = getData(data);
    expect(result).toEqual({
        label: ['0-4 years', '5-9 years', '10-14 years'],
        male: [83156, 84278, 77299],
        female: [78572, 79873, 73504]
    });
});