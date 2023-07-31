const RenderPage = () => {
  const populateSelectOptions = (selectElement, options) => {
    selectElement.innerHTML = '';

    Object.keys(options).forEach((key) => {
      const optionValue = key;
      const optionText = options[key];
      const optionElement = document.createElement('option');
      optionElement.value = optionValue;
      optionElement.textContent = optionText;
      selectElement.appendChild(optionElement);
    });
  };

  return { populateSelectOptions }
}

export default RenderPage;