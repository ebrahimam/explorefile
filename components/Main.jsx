// import './Main.scss';
import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'react-uuid';
//for generating id

import DocumentItem from './DocumentItem';
import { documents } from '../data/documents';

function Main() {
  const explorer = useRef();
  const [docs, setDocs] = useState(documents);

//   const findFileWithId = (id) => {
//     let result = null;
//     docs.forEach((doc) => {
//       if (doc.id == id) result = doc;
//     });
//     if (!result) throw new Error('could not find document');
//     return result;
//   };
//Add file
  const addFile = (id) => {
    const doc = findFileWithId(id);
    const newDocType = 'file';
    const newDocParentId = doc.type == 'file' ? doc.parent : doc.id;
    const newDocId = 'file' + uuidv4();
    const newDocLabel = prompt('Please Enter File Label:');
    if (!newDocLabel) return alert('Please Enter Valid Label');
    const newDoc = {
      id: newDocId,
      type: newDocType,
      parent: newDocParentId,
      label: newDocLabel,
    };
    setDocs([...docs, newDoc]);
  };

  const addFolder = (id) => {
    const doc = findFileWithId(id);
    const newDocType = 'folder';
    const newDocParentId = doc.type == 'file' ? doc.parent : doc.id;
    const newDocId = 'folder' + uuidv4();
    const newDocLabel = prompt('Please Enter Folder Label:');
    if (!newDocLabel) return alert('Please Enter Valid Label');
    const newDoc = {
      id: newDocId,
      type: newDocType,
      parent: newDocParentId,
      label: newDocLabel,
    };
    setDocs([...docs, newDoc]);
  };

  const deleteItem = (id) => {
    const postDocs = docs.map((doc) => {
      if (doc.id == id || doc.parent == id) doc.removed = true;
      return doc;
    });
    setDocs([...postDocs]);
  };

  const renameItem = (id) => {
    const newLabel = prompt('Enter New Label:');
    const postDocs = docs.map((doc) => {
      if (doc.id == id) doc.label = newLabel;
      return doc;
    });
    setDocs([...postDocs]);
  };

  const reorderDocuments = (docs) => {
    docs.forEach((doc) => {
      const parentId = doc.parent;
      const docId = doc.id;
      if (parentId == 'root') return;
      const curDoc = explorer.current.querySelector(`#${docId}`);
      const parentBody = explorer.current.querySelector(`#${parentId} .body`);
      parentBody.append(curDoc);
    });
  }; // end

  useEffect(() => {
    reorderDocuments(docs);
  }, [docs]);

  return (
    <div className='file-explorer' ref={explorer}>
      {docs.map((doc) => {
        return (
          <DocumentItem
            key={doc.id}
            label={doc.label}
            id={doc.id}
            type={doc.type}
            parent={doc.parent}
            removed={doc.removed}
            // controls
            addFile={addFile}
            addFolder={addFolder}
            deleteItem={deleteItem}
            renameItem={renameItem}
          />
        );
      })}
    </div>
  );
}

export default Main;
