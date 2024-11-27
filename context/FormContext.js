'use client'

import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    state: '',
    city: '',
    visitReason: '',
    techIndustry: '',
    favoriteSoftware: '',
    techExcitement: ''
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => useContext(FormContext);