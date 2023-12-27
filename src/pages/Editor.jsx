import { Header } from "../components";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { EditorData } from "../../public/assets/dummy";
const Editor = () => {
  return (
    <div className="section">
      <Header category={"Apps"} title={"Editor"} />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, QuickToolbar, Image, Link]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
