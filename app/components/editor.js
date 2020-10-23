import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html
class Editor extends Component {
  render() {
    return (
      <div className="App">
        <h2>Using CKEditor 5 build in React</h2>
        <CKEditor
          editor={ClassicEditor}
          // https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html#component-properties
          // https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/configuration.html
          config={{
            // Pass the config for SimpleUploadAdapter
            // https://ckeditor.com/docs/ckeditor5/latest/features/image-upload/simple-upload-adapter.html
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
          data="<p>Hello from CKEditor 5!</p>"
          onInit={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    );
  }
}

export default Editor;
