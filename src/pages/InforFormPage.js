import React from 'react';
import InputField from '../components/InputField';
import InfoPageHeader from '../components/InfoPageHeader';
import TextArea from '../components/TextArea';

const InforFormPage = () => (
  <div className="container">
    <InfoPageHeader />
    <form>
      <fieldset>
        <InputField inputFieldId="title" inputFieldType="text" inputFieldName="Tittle" />
        <InputField inputFieldId="surname" inputFieldType="text" inputFieldName="Surname" />
        <InputField inputFieldId="full_name" inputFieldType="text" inputFieldName="Full Name" />
        <TextArea textAreaID="address" textAreaTitle="Home Address" />
        <InputField inputFieldId="email" inputFieldType="email" inputFieldName="Email" />
      </fieldset>
    </form>
  </div>
);

export default InforFormPage;
