import React, { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './DocumentItem.scss';

import {
  extensionExtractor,
  getExtensionIcon,
} from './Documenthelp';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function DocumentItem({
  type,
  label,
  id,
  parent,
  addFile,
  addFolder,
  deleteItem,
  renameItem,
  removed,
}) {
  return (
    <div className={`document-item ${removed && 'removed'}`} id={id}>
      <div className='head-wrapper'>
        <div className='head'>
          <div className='icon'>
            {type == 'folder' ? (
              <FontAwesomeIcon icon={icon({ name: 'folder' })} />
            ) : (
              getExtensionIcon(extensionExtractor(label))
            )}
          </div>
          <div className='label'>
            <span>{label}</span>
          </div>
        </div>
        <div className='controls'>
          <div className='add-file' onClick={() => addFile(id)}>
            <FontAwesomeIcon icon={icon({ name: 'file-circle-plus' })} />
          </div>
          <div className='add-folder' onClick={() => addFolder(id)}>
            <FontAwesomeIcon icon={icon({ name: 'folder-plus' })} />
          </div>
          <div className='delete' onClick={() => deleteItem(id)}>
            <FontAwesomeIcon icon={icon({ name: 'trash' })} />
          </div>
          <div className='rename' onClick={() => renameItem(id)}>
            <FontAwesomeIcon icon={icon({ name: 'pen-to-square' })} />
          </div>
        </div>
      </div>
      <div className='body'>{/* Here will be children documents */}</div>
    </div>
  );
}

export default DocumentItem;
