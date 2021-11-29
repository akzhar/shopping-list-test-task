import React, {useRef, RefObject} from 'react';
import { useDispatch } from 'react-redux';

import { VALID_PHOTO_EXTENSIONS } from '@consts/const';
import ActionCreator from '@store/actions';
import defaultPhotoPath from '@assets/img/default_product_photo.png';

type TInputPhoto = {
  imageRef: RefObject<HTMLImageElement>,
  isRequired: boolean
};

const InputPhoto:React.FC<TInputPhoto> = ({ imageRef, isRequired= false }: TInputPhoto) => {

  const dispatch = useDispatch();

  const photoInputRef = useRef<HTMLInputElement>(null);
  const photoDropZoneRef = useRef<HTMLFieldSetElement>(null);

  const renderPhotoIfFileIsValid = (file: File) => {
    const mimeType = file.type.toLowerCase();
    const fileExtension = mimeType.slice(mimeType.indexOf('/') + 1);
    if (VALID_PHOTO_EXTENSIONS.includes(fileExtension)) {
      const fReader = new FileReader();
      fReader.readAsDataURL(file);
      fReader.addEventListener('load', (evt) => {
        const imgElem = imageRef.current;
        const imgPath = evt.target?.result;
        if (imgElem && imgPath) {
          imgElem.src = imgPath.toString();
        }
      });
      const dt = new DataTransfer();
      dt.items.add(file);
      const fileList = dt.files;
      const fileInputElem = photoInputRef.current;
      if (fileInputElem) {
        fileInputElem.files = fileList;
      }
    } else {
      dispatch(ActionCreator.setWarningMessage(
        {
          label: 'Упс...',
          text: `Неподдерживаемый формат файла: ${file.name}`
        }
      ));
    }
  };

  const avatarDropZoneHighlight = () => {
    const fileDropZoneElem = photoDropZoneRef.current;
    if (fileDropZoneElem) {
      fileDropZoneElem.classList.add('input-photo__dropzone--dragged-over');
    }
  };

  const avatarDropZoneLowlight = () => {
    const fileDropZoneElem = photoDropZoneRef.current;
    if (fileDropZoneElem) {
      fileDropZoneElem.classList.remove('input-photo__dropzone--dragged-over');
    }
  };

  const onPhotoDropZoneDragOver = (evt: React.DragEvent) => {
    evt.preventDefault();
    avatarDropZoneHighlight();
  };

  const onPhotoDropZoneDragLeave = (evt: React.DragEvent) => {
    evt.preventDefault();
    avatarDropZoneLowlight();
  };

  const onPhotoDropZoneDrop = (evt: React.DragEvent ) => {
    evt.preventDefault();
    avatarDropZoneLowlight();
    const file: File = evt.dataTransfer.files[0];
    renderPhotoIfFileIsValid(file);
  };

  const onPhotoInputChange = () => {
    const fileInputElem = photoInputRef.current;
    if (fileInputElem && fileInputElem.files?.length) {
      const file: File = fileInputElem.files[0];
      renderPhotoIfFileIsValid(file);
    }
  };

  return (
    <div className="input-photo">
      <fieldset
        className="input-photo__dropzone"
        ref={photoDropZoneRef}
        onDragOver={onPhotoDropZoneDragOver}
        onDragLeave={onPhotoDropZoneDragLeave}
        onDrop={onPhotoDropZoneDrop}
      >
        <legend className="visually-hidden">Загрузка фото</legend>
        <div className="input-photo__image">
          <img src={defaultPhotoPath} alt="Фото" ref={imageRef}/>
        </div>
        <div className="input-photo__upload">
          <input
            id="photo"
            type="file"
            name="photo"
            ref={photoInputRef}
            onChange={onPhotoInputChange}
            required={isRequired}
        />
          <label htmlFor="photo">Сменить фото</label>
        </div>
      </fieldset>
    </div>
  );
};

export default InputPhoto;
