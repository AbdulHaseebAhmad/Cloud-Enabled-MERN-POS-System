import { AgCharts } from "ag-charts-react";
import PropTypes from 'prop-types';

const CurrentStockChart = ({options,}) => {


  return <AgCharts options={options}  style={{width:'90%',height:'500px',justifySelf:'center'}}/>;
};
CurrentStockChart.propTypes = {
  options: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default CurrentStockChart;
