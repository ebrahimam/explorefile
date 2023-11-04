import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

export const extensionExtractor = (fullname) => {
  const extension = fullname.split('.')[1];
  return extension;
}; // end extensionExtractor
//name includes .html example if string name.include(".html") so result is html
export const getExtensionIcon = (extension) => {
  console.log('extension', extension);
  const extensionsIcons = {
    jsx: (
      <FontAwesomeIcon
        icon={icon({
          style: 'brands',
          name: 'react',
        })}
      />
    ),
    js: (
      <FontAwesomeIcon
        icon={icon({
          style: 'brands',
          name: 'js',
        })}
      />
    ),
    html: (
      <FontAwesomeIcon
        icon={icon({
          style: 'brands',
          name: 'html5',
        })}
      />
    ),
    htm: (
      <FontAwesomeIcon
        icon={icon({
          name: 'html5',
          style: 'brands',
        })}
      />
    ),
    css: (
      <FontAwesomeIcon
        icon={icon({
          name: 'css3-alt',
          style: 'brands',
        })}
      />
    ),
    scss: (
      <FontAwesomeIcon
        icon={icon({
          name: 'sass',
          style: 'brands',
        })}
      />
    ),
    sass: (
      <FontAwesomeIcon
        icon={icon({
          name: 'sass',
          style: 'brands',
        })}
      />
    ),
    go: (
      <FontAwesomeIcon
        icon={icon({
          name: 'golang',
          style: 'brands',
        })}
      />
    ),
    java: (
      <FontAwesomeIcon
        icon={icon({
          name: 'java',
          style: 'brands',
        })}
      />
    ),
    directory: (
      <FontAwesomeIcon
        icon={icon({
          name: 'folder',
        })}
      />
    ),
  };
  let iconCompo = extensionsIcons[extension];
  if (!iconCompo)
    iconCompo = (
      <FontAwesomeIcon
        icon={icon({
          name: 'file',
        })}
      />
    );
  return iconCompo;
};
