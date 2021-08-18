function converter(item, from, to) { 
    //temperature
    if(from == 'C' && to == 'F'){return (item * 9/5) + 32;}
    if(from == 'F' && to == 'C'){return(item - 32) * 5/9};
    if(from == 'C' && to == 'K'){return item + 273.15};
    if(from == 'K' && to == 'C'){return item - 273.15};
    if(from == 'F' && to == 'K'){return(item - 32) * 5/9 + 273.15};
    if(from == 'K' && to == 'F'){return(item - 273.15) * 9/5 + 32};
    //International system of units
    if(from == 'KM' && to == 'M'){return item * 1000};
    if(from == 'DM' && to == 'M'){return item * 0.1};
    if(from == 'CM' && to == 'M'){return item * 0.01};
    if(from == 'MM' && to == 'M'){return item * 0.001 };
    if(from == 'MKM' && to == 'MM'){return item * 0.001 };
    if(from == 'NM' && to == 'MKM'){return item * 0.001 };
    if(from == 'A' && to == 'NM'){return item * 0.1 };
    //USA and Britain
    if(from == 'LEA' && to == 'M'){return item * 4828.032};
    if(from == 'MI' && to == 'M'){return item * 1609344};
    if(from == 'FUR' && to == 'M'){return item * 201.168};
    if(from == 'CH' && to == 'M'){return item * 20.1168};
    if(from == 'RD' && to == 'M'){return item * 5.0292};
    if(from == 'YD' && to == 'M'){return item * 0.9144};
    if(from == 'CU' && to == 'M'){return item * 0.4572};
    if(from == 'FT' && to == 'M'){return item * 0.3048};
    if(from == 'SP' && to == 'M'){return item * 0.2286};
    if(from == 'HD' && to == 'M'){return item * 0.1016};
    if(from == 'IN' && to == 'M'){return item * 0.0254};
    if(from == 'LN' && to == 'M'){return item * 0.0021666666666};
    if(from == 'CL' && to == 'M'){return item * 0.000254};
    if(from == 'MIL' && to == 'M'){return item * 0.0000254};
    //International maritime units
    if(from == 'NL' && to == 'M'){return item * 5556.0};
    if(from == 'NMI' && to == 'M'){return item * 1852.0};
    if(from == 'KAB' && to == 'M'){return item * 185.2};
    if(from == 'FTM' && to == 'M'){return item * 1.8288};
    //US naval units
    if(from == 'NMIUS' && to == 'M'){return item * 1853.248};
    //British naval units
    if(from == 'NMIB' && to == 'M'){return item * 1853.1848};
}

console.log(converter(67, 'KM', 'M'));