const data = [
    {
        "sexp_sex": "Male",
        "number": 83156,
        "age5p_age_in_five_year_groups": "0-4 years"
    },
    {
        "sexp_sex": "Female",
        "number": 78572,
        "age5p_age_in_five_year_groups": "0-4 years"
    },
    {
        "sexp_sex": "Male",
        "number": 84278,
        "age5p_age_in_five_year_groups": "5-9 years"
    },
    {
        "sexp_sex": "Female",
        "number": 79873,
        "age5p_age_in_five_year_groups": "5-9 years"
    },
    {
        "sexp_sex": "Female",
        "number": 73504,
        "age5p_age_in_five_year_groups": "10-14 years"
    },
    {
        "sexp_sex": "Male",
        "number": 77299,
        "age5p_age_in_five_year_groups": "10-14 years"
    }     
  ]
export default data;

export const endpointData = {
    rows: data
}

export const chartData = {
    label: ['5-9 years', '10-14 years'],
    male: [3, 5],
    female: [2, 6]
}
