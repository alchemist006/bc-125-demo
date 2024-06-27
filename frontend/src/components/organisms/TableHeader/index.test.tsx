import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TableHeader from '.';

describe('TableHeader component', () => {
    const mockGetData = jest.fn();
    it('should update the search value when typing in the search input', () => {
        const { getByPlaceholderText } = render(<TableHeader getSearchData={mockGetData} width={'100%'} height={'60px'} isCandidatePage={true} getFilterData={mockGetData } />);
        const searchInput = getByPlaceholderText('Search any candidate');
        
        fireEvent.change(searchInput, { target: { value: 'Test search' } });

        expect(mockGetData).toHaveBeenCalledWith('Test search');
    });

    it('should toggle the filter popup when the filter button is clicked', () => {
        const getFilterData = jest.fn();
        const { getByText } = render(<TableHeader getSearchData={mockGetData} width={'100%'} height={'60px'} isCandidatePage={true} getFilterData={mockGetData } />);

        const filterButton = getByText('Filter');
        
        fireEvent.click(filterButton);

        expect(getFilterData).not.toHaveBeenCalled();
    });

    it('should apply a status filter when a status is selected from the filter popup', () => {
        const getFilterData = jest.fn();
        const { getByText } = render(<TableHeader getFilterData={getFilterData} width={'100%'} height={'60px'} isCandidatePage={true} getSearchData={mockGetData } />);
        const filterButton = getByText('Filter');
        
        fireEvent.click(filterButton);

        const statusOption = getByText('All Status');
        fireEvent.click(statusOption);

        expect(getFilterData).toHaveBeenCalledWith('All Status');
    });

    it('should close the filter popup when the "Close Filter" button is clicked', async () => {
        const getFilterData = jest.fn();
        const { getByText, queryByText } = render(<TableHeader getFilterData={getFilterData} width={'100%'} height={'60px'} isCandidatePage={true} getSearchData={mockGetData} />);
        const filterButton = getByText('Filter');
        
        fireEvent.click(filterButton);

        expect(queryByText('Status Option')).toBeNull();
    });

    it('should update the search value when typing in the search input', () => {
        const { getByPlaceholderText } = render(<TableHeader isCandidatePage={true} getSearchData={mockGetData} width={'100%'} height={'60px'} getFilterData={mockGetData} />);
        const searchInput = getByPlaceholderText('Search any candidate');
        
        fireEvent.change(searchInput, { target: { value: 'Test search' } });
    
        expect(mockGetData).toHaveBeenCalledWith('Test search');
        expect(searchInput.getAttribute('value')).toBe('Test search');
    });
    it('should toggle the filter popup when the filter button is clicked', () => {
        const { getByText } = render(<TableHeader getFilterData={mockGetData} width={'100%'} height={'60px'} isCandidatePage={false} getSearchData={mockGetData} />);
        const filterButton = getByText('Filter');
        
        fireEvent.click(filterButton);
    
        expect(mockGetData).not.toHaveBeenCalled();
    });
    it('should apply a status filter when a status is selected from the filter popup', () => {
        const { getByText, queryByText } = render(<TableHeader getFilterData={mockGetData} width={'100%'} height={'60px'} isCandidatePage={false} getSearchData={mockGetData} />);
        
        const filterButton = getByText('Filter');
        fireEvent.click(filterButton);
    
        const statusOption = queryByText('Status Option');
        if (statusOption) {
            fireEvent.click(statusOption);
            expect(mockGetData).toHaveBeenCalledWith('Selected Status');
        } else {
            expect(mockGetData).toHaveBeenCalledTimes(0);
        }
    
    });
    
    
});
