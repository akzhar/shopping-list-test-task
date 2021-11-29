import React, { useRef, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import InputPhoto from '@components/InputPhoto';
import { DEFAULT_PRICE_UNITS } from '@consts/const';
import ActionCreator from '@store/actions';

const getBase64Image = (imgElem: HTMLImageElement | null) => {
  if (!imgElem) return '';
  const canvas = document.createElement('canvas');
  canvas.width = imgElem.naturalWidth;
  canvas.height = imgElem.naturalHeight;

  const ctx = canvas.getContext('2d');
  ctx?.drawImage(imgElem, 0, 0);

  const dataURL = canvas.toDataURL('image/png');

  return dataURL.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
}

const NewProductForm: React.FC = () => {

  const dispatch = useDispatch();

  const formRef = useRef<HTMLFormElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const form = formRef.current;
    if (form) {
      const productData = new FormData(form);

      const photoElem: HTMLImageElement | null = imageRef.current;

      dispatch(ActionCreator.createProduct({
        productName: productData.get('productName')?.toString() || '',
        productPrice: Number(productData.get('productPrice')) || 0,
        productPhotoData: getBase64Image(photoElem),
        productDescription: productData.get('productDescription')?.toString() || ''
      }));
      dispatch(ActionCreator.setInfoMessage(
        {
          label: 'Супер!',
          text: 'Новый продукт создан'
        }
      ));
    }
  };

  return (
    <form className="new-product-form" action="#" method="post" ref={formRef} onSubmit={handleFormSubmit}>
      <fieldset className="student-form__questions">
        <legend className="visually-hidden">Вопросы о новом продукте</legend>
        <div className="new-product-form__wrapper">
          <InputPhoto imageRef={imageRef} isRequired/>
          <div className="new-product-form__question">
            <label htmlFor="productPrice">Цена продукта, {DEFAULT_PRICE_UNITS}</label>
            <input
              className="new-product-form__input"
              type="number"
              name="productPrice"
              id="productPrice"
              placeholder="Цена..."
              required
            />
          </div>
        </div>
        <div className="new-product-form__question">
          <label htmlFor="productName">Название продукта</label>
          <input
            className="new-product-form__input"
            type="text"
            name="productName"
            id="productName"
            placeholder="Название..."
            required
          />
        </div>
        <div className="new-product-form__question">
          <label htmlFor="productDescription">Описание (опционально)</label>
          <textarea
            className="new-product-form__input"
            name="productDescription"
            id="productDescription"
            placeholder="Описание..."
            rows={10}
          />
        </div>
      </fieldset>
      <button className="button" type="submit">Создать</button>
    </form>
  );
};

export default NewProductForm;
