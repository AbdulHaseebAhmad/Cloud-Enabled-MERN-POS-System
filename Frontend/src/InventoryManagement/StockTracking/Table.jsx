'use client';

import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import './RestockPipeline.css'; // Custom styles for AG Grid

ModuleRegistry.registerModules([AllCommunityModule]);

// Create new GridExample component
const GridExample = () => {
    const columnDefs = [
        { headerName: 'Product', field: 'product', sortable: true, filter: true },
        { headerName: 'Incoming Stock', field: 'incomingStock', sortable: true, filter: true },
        { headerName: 'Estimated Arrival', field: 'estimatedArrival', sortable: true, filter: true },
        { headerName: 'Stock Allocation', field: 'stockAllocation', sortable: true, filter: true },
        { 
          headerName: 'Restock Status', 
          field: 'restockStatus', 
          sortable: true, 
          cellRenderer: (params) => {
            const status = params.value.toLowerCase();
            switch (status) {
              case 'critical': return <span className="critical-restock">Critical</span>;
              case 'pending': return <span className="status-pending">Pending</span>;
              case 'in transit': return <span className="status-in-transit">In Transit</span>;
              case 'arrived': return <span className="status-arrived">Arrived</span>;
              case 'delayed': return <span className="status-delayed">Delayed</span>;
              default: return '';
            }
          }
        },
        { headerName: 'Total Incoming Stock Value', field: 'stockValue', sortable: true, filter: true }
      ];
    
      const rowData = [
        { product: 'Product A', incomingStock: 200, estimatedArrival: '2025-02-15', stockAllocation: 50, restockStatus: 'In Transit', stockValue: '$1200' },
        { product: 'Product B', incomingStock: 500, estimatedArrival: '2025-02-20', stockAllocation: 200, restockStatus: 'Arrived', stockValue: '$3000' },
        { product: 'Product C', incomingStock: 150, estimatedArrival: '2025-02-18', stockAllocation: 75, restockStatus: 'Critical', stockValue: '$900' },
        { product: 'Product D', incomingStock: 300, estimatedArrival: '2025-02-25', stockAllocation: 50, restockStatus: 'Delayed', stockValue: '$1800' },
        { product: 'Product E', incomingStock: 100, estimatedArrival: '2025-02-22', stockAllocation: 30, restockStatus: 'Pending', stockValue: '$600' },
        { product: 'Product F', incomingStock: 250, estimatedArrival: '2025-02-28', stockAllocation: 100, restockStatus: 'In Transit', stockValue: '$1500' },
        { product: 'Product G', incomingStock: 400, estimatedArrival: '2025-03-01', stockAllocation: 150, restockStatus: 'Arrived', stockValue: '$2400' },
        { product: 'Product H', incomingStock: 350, estimatedArrival: '2025-03-05', stockAllocation: 120, restockStatus: 'Critical', stockValue: '$2100' },
        { product: 'Product I', incomingStock: 450, estimatedArrival: '2025-03-10', stockAllocation: 200, restockStatus: 'Delayed', stockValue: '$2700' },
        { product: 'Product J', incomingStock: 600, estimatedArrival: '2025-03-15', stockAllocation: 250, restockStatus: 'Pending', stockValue: '$3600' },
        { product: 'Product K', incomingStock: 700, estimatedArrival: '2025-03-20', stockAllocation: 300, restockStatus: 'In Transit', stockValue: '$4200' },
        { product: 'Product L', incomingStock: 800, estimatedArrival: '2025-03-25', stockAllocation: 350, restockStatus: 'Arrived', stockValue: '$4800' },
        { product: 'Product M', incomingStock: 900, estimatedArrival: '2025-03-30', stockAllocation: 400, restockStatus: 'Critical', stockValue: '$5400' },
        { product: 'Product N', incomingStock: 1000, estimatedArrival: '2025-04-05', stockAllocation: 450, restockStatus: 'Delayed', stockValue: '$6000' },
        { product: 'Product O', incomingStock: 1100, estimatedArrival: '2025-04-10', stockAllocation: 500, restockStatus: 'Pending', stockValue: '$6600' }
      ];
    
      return (
        <div className="restock-pipeline-section" style={{width: '100%',height: '500px'}}>
          <div id="myGrid" className="ag-theme-alpine" >
            <AgGridReact
              columnDefs={columnDefs}
              rowData={rowData}
              pagination={true}
              paginationPageSize={10}
              domLayout='autoHeight'
            />
          </div>
        </div>
      );
};


export default GridExample;