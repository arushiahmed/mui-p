import { useState } from 'react';
import './App.css';
import {
  Typography,
  Breadcrumbs,
  Link,
  Checkbox,
  FormGroup,
  FormControl,
  FormControlLabel,
  Box,
} from '@material-ui/core';
import {
  PhotoCamera,
  PhotoCameraOutlined,
  Favorite,
  FavoriteBorderOutlined,
} from '@material-ui/icons';

function App() {
  const [checked, setChecked] = useState([false, false, false]);

  const checkedHandler = (event) => {
    setChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };
  const checkedHandler0 = (event) => {
    setChecked([event.target.checked, checked[1], checked[2]]);
  };
  const checkedHandler1 = (event) => {
    setChecked([checked[0], event.target.checked, checked[2]]);
  };
  const checkedHandler2 = (event) => {
    setChecked([checked[0], checked[1], event.target.checked]);
  };

  return (
    <>
      <Breadcrumbs area-label="breadcrumb">
        <Typography>HOME</Typography>
        <Link>HOME</Link>
        <Link>HOME</Link>
      </Breadcrumbs>

      <Breadcrumbs maxItems={2} separator="*" aria-label="breadcrumb">
        <Typography>HOME</Typography>
        <Link>HOME</Link>
        <Link>HOME</Link>
        <Link>HOME</Link>
        <Link>HOME</Link>
        <Link>HOME</Link>
        <Link>HOME</Link>
        <Link>HOME</Link>
        <Link>HOME</Link>
        <Link>HOME</Link>
        <Link>HOME</Link>
      </Breadcrumbs>

      <Box sx={{ mx: 2 }}>
        <Typography gutterBottom noWrap style={{ color: '#e4e4e4' }}>
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Typography>
      </Box>

      <Typography variant="h1">h1</Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>
      <Typography noWrap>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </Typography>

      <Box sx={{ mx: 2 }}>
        <Typography gutterBottom noWrap style={{ color: '#e4e4e4' }}>
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Typography>
      </Box>

      <Checkbox aria-label="Label"></Checkbox>
      <Checkbox aria-label="Label" defaultChecked></Checkbox>
      <Checkbox aria-label="Label" disabled></Checkbox>
      <Checkbox aria-label="Label" disabled checked></Checkbox>

      <Box sx={{ mx: 2 }}>
        <Typography gutterBottom noWrap style={{ color: '#e4e4e4' }}>
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Typography>
      </Box>

      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="ビール" />
        <FormControlLabel control={<Checkbox />} label="ワイン" />
        <FormControlLabel control={<Checkbox />} label="日本酒" />
      </FormGroup>

      <Box sx={{ mx: 2 }}>
        <Typography gutterBottom noWrap style={{ color: '#e4e4e4' }}>
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Typography>
      </Box>

      <Box>
        <Checkbox
          icon={<PhotoCameraOutlined />}
          checkedIcon={<PhotoCamera />}
        />
        <Checkbox
          icon={<FavoriteBorderOutlined />}
          checkedIcon={<Favorite />}
        />
      </Box>

      <Box sx={{ mx: 2 }}>
        <Typography gutterBottom noWrap style={{ color: '#e4e4e4' }}>
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Typography>
      </Box>

      <Box sx={{ ml: 2 }}>
        <FormControlLabel
          control={<Checkbox onClick={checkedHandler} checked={checked[0] && checked[1] && checked[2]}/>}
          label="お得セット"
        />
        <Box sx={{ ml: 4, display: 'flex', flexDirection: 'column' }}>
          <FormControlLabel
            control={
              <Checkbox checked={checked[0]} onClick={checkedHandler0} />
            }
            label="ハンバーガー"
          />
          <FormControlLabel
            control={
              <Checkbox checked={checked[1]} onClick={checkedHandler1} />
            }
            label="ドリンク"
          />
          <FormControlLabel
            control={
              <Checkbox checked={checked[2]} onClick={checkedHandler2} />
            }
            label="ポテト"
          />
        </Box>
      </Box>
    </>
  );
}

export default App;
