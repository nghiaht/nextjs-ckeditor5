# nextjs-ckeditor5

Sample for using CKEditor5 with custom build (additional plugins..) in Next.js

## Input

- Use the CKEditor React component (https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html)

- Use the ckeditor5-build-classic but custom its build (https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html#forking-an-existing-build), install a plugin (SimpleUploadAdapter) for example purpose

## Tutorials

### Custom ckeditor-5-build-classic

For example, add the plugin SimpleUploadAdapter into ckeditor-5-build-classic

- Install the plugin SimpleUploadAdapter

```
cd ckeditor5-build-classic-custom
npm install


// src/ckeditor.js
...
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
...
```

- Put it into the plugin list

```
// src/ckeditor.js
...
ClassicEditor.builtinPlugins = [
    ...
    SimpleUploadAdapter
]
...
```

- Re-build with added plugin for next step

```
npm run build
```

## Using ckeditor-5-build-classic-custom in your app

- Use the local package ckeditor5-build-classic-custom

```
cd app

# Check package.json to see the usage of local package ckeditor5-build-classic-custom

// package.json
...
"@ckeditor/ckeditor5-build-classic": "file:../ckeditor5-build-classic-custom",
...

npm install
```

- Create a Editor component, put CKEditor5 there by using CKEditor's official React component (https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html)

```
// components/editor.js
...
import CKEditor from "@ckeditor/ckeditor5-react";
...
```

- Config the plugin SimpleUploadAdapter

```
// components/editor.js
...
<CKEditor
          editor={ClassicEditor}
          config={{
            // Pass the config for SimpleUploadAdapter
            simpleUpload: {
              // The URL that the images are uploaded to.
              uploadUrl: "http://example.com",

              // Enable the XMLHttpRequest.withCredentials property.
              withCredentials: true,

              // Headers sent along with the XMLHttpRequest to the upload server.
              headers: {
                "X-CSRF-TOKEN": "CSRF-Token",
                Authorization: "Bearer <JSON Web Token>",
              },
            },
          }}
...
```

- Dynamic import the Editor component with mode ssr=false to prevent errors in Next.js

```
// pages/index.js
...
const Editor = dynamic(() => import("../components/editor"), {ssr: false})
...
```

- Start app

```
npm run dev
```

- Build & export

```
npm run build
npm run export
```

## Author

* nghiaht