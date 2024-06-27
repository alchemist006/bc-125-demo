import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MuiAccordian from '.';
import { CandidateData } from '../../../mocks/mockData';


describe('Candidate MuiAccordian', () => {
    it("should render accordion card", () => {
        render(<MuiAccordian title="Candidate Information" cardData={CandidateData} />)

        const text = screen.getByText("Candidate Information");
        expect(text).toBeInTheDocument();   
    })
    it("should render candidate Information", () => {
        render(<MuiAccordian title="Candidate Information" cardData={CandidateData} />)

        const text = screen.getByText("Candidate Information");
        expect(text).toBeInTheDocument(); 
        
        const accordion = screen.getByRole("button");
        expect(accordion).toBeInTheDocument();
        fireEvent.click(accordion);
        expect(screen.getByText(CandidateData[0].subtitle)).toBeInTheDocument();

        fireEvent.click(accordion);
        expect(screen.getByTestId('item-style')).toBeInTheDocument;
        fireEvent.click(accordion);
        expect(screen.queryByTestId('item-style')).not.toBeInTheDocument;
    })
});