import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@mui/styles';

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

type RTLProps = {
  children: React.ReactNode;
  isRtl: boolean;
};

function RTL(props: RTLProps) {
  if (props.isRtl) {
    return <StylesProvider jss={jss}>{props.children}</StylesProvider>;
  }
  return <>{props.children}</>;
}

export default RTL;
