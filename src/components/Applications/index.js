import React from 'react';
import styled from 'styled-components';
import SampleFile from '../../sampleFile.pdf';
import Principal from '../../assets/principle.JPG';

function AppSection() {
  return (
    <>
      <Wrapper>
        <ClickWrapper className="container-fluid col-12 col-md-5">
          <a href={SampleFile} target="_blank" rel="noopener noreferrer" download>
            <Bell className="fa fa-download" aria-hidden="true" />
          </a>
          <ClickHeading className="pb-3">Applications for 2023 are still open</ClickHeading>
          <Button2 type="button" className="btn pull-right w-25">Click here</Button2>
        </ClickWrapper>
      </Wrapper>
      <VerseWrapper className="container d-flex">
        <img src={Principal} alt="principal" width={300} height={400} />
        <Message className="">
          <h1>Principal Message</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet laborum.
          </p>
          <p className="pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia.
          </p>
        </Message>
      </VerseWrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding-top: 6rem;
`;
const VerseWrapper = styled.div`
  padding-top: 7rem;
`;
const ClickWrapper = styled.div`
    background-color: #EFEFEF;
    padding: 5rem;
`;
const ClickHeading = styled.h1`
  color: red;
`;
const Bell = styled.i`
  cursor: pointer;
  font-size: 2rem;
  color: #000;
`;
const Button2 = styled.button`
  background-color: rgb(246, 255, 0);
  font-size: 1.2rem;
  font-weight: 500;
  border: 1px solid black;
 `;
const Message = styled.div`
  padding-left: 8rem;
 `;
export default AppSection;