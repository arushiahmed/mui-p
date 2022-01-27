import { useState } from 'react';
import './App.module.scss';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {
  Typography,
  Breadcrumbs,
  Link,
  Checkbox,
  FormGroup,
  FormControl,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  CardMedia,
  CardHeader,
  Button,
  TextField,
  Box,
  createTheme,
} from '@material-ui/core';
import {
  Masonry,
  DatePicker,
  LocalizationProvider,
  StaticDatePicker,
} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import jaLocale from 'date-fns/locale/ja';
import {
  PhotoCamera,
  PhotoCameraOutlined,
  Favorite,
  FavoriteBorderOutlined,
  ExpandMoreOutlined,
} from '@material-ui/icons';
import { green, purple } from '@mui/material/colors';

const useStyles = makeStyles({
  cardBackground: {
    background: 'rgba(255,255,255,0.6)',
  },
  fontBold: {
    fontWeight: 'bold',
  },
  datepicker_panel: {
    width: '90%',
    margin: 'auto',
  },
});

const materialTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
  components: {
    MuiStaticDatePicker: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
        },
      },
    },
  },
});

function App() {
  const [checked, setChecked] = useState([false, false, false]);
  const classes = useStyles();
  const [checkboxValue, setCheckboxValue] = useState('');
  const [value, setValue] = useState(new Date());

  const drinkCheckHandler = (e) => {
    setCheckboxValue(e.target.value);
    console.log(e.target);
  };

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

  const prefectureData = [
    {
      name: '北海道',
      nameEn: 'Hokkaido',
      description:
        '北海道（ほっかいどう、（英: Hokkaido）は、日本の北海道地方に位置する道。日本列島を構成する主要4島のひとつで、日本の北部に位置する島。道庁所在地は札幌市。47都道府県中唯一の「道」である。ブランド総合研究所による「都道府県の魅力度ランキング」で2021年現在、13年連続で1位に選ばれ、観光意欲度、産品購入意欲度でも1位、居住意欲度でも3位となっており、各意欲の面で高い評価を得ている[6]。',
    },
    {
      name: '沖縄',
      nameEn: 'Okinawa',
      description:
        '沖縄県（おきなわけん、（沖縄語: ウチナー /ʔucinaa/[1][2]、英: Okinawa Prefecture）は、日本の九州・沖縄地方に位置する県。県庁所在地は那覇市で最も西にあり、沖縄本島、宮古島、石垣島など多くの島々から構成される[3]。',
    },
    {
      name: '東京',
      nameEn: 'Tokyo',
      description:
        '東京（とうきょう、英: Tokyo）は、日本の地名。関東平野の南部に位置し、東京湾に面する都市。日本の首都機能がある[1][注 1]。墨田区上空から見た東京（東京スカイツリーから、2014年）。画面右下から左上へ流れる川は隅田川都庁舎展望室から南東方面を見た東京の夜景「東京」は、日本の首都で広域的地方公共団体である東京都を指す場合と、特に東京都区部（東京23区）を指す場合とがある[2]（#「東京」の範囲を参照）。',
    },
    {
      name: '大阪',
      nameEn: 'Osaka',
      description:
        '大阪（おおさか、英語: Osaka）は、日本の近畿地方（関西地方）の地名、都市。律令国では摂津国の範囲であり、近畿の経済・文化の中心地で、古くは大坂と表記し、古都・副都・水都としての歴史を持つ。現在の「大阪」は、近畿地方に位置する包括的地方公共団体・大阪府や、その府庁所在地であり西日本最大の都市・大阪市を指し、広い意味では大阪市を中心とする京阪神（近畿地方、大阪都市圏〈阪神都市圏〉、京阪神大都市圏、近畿圏など）を漠然と総称することにも使われる。',
    },
    {
      name: '京都',
      nameEn: 'Kyoto',
      description:
        '京都（きょうと、みやこ、きょうのみやこ、英: Kyōto[1][2][3]）は、日本の地名、都市。歴史的には794年以降日本の首都であった平安京で、当時は日本の政治・文化の中心地であった。現在の京都は、包括的地方公共団体・京都府の地域や、その府庁所在地たる基礎的地方公共団体・京都市の地域を指す。金閣寺、清水寺などが、世界文化遺産に登録された。京都は山に囲まれ、自然豊かな場所。',
    },
    {
      name: '福岡',
      nameEn: 'Fukuoka',
      description:
        '福岡県（ふくおかけん、（英: Fukuoka Prefecture）は、日本の九州地方に位置する県。県庁所在地は福岡市[1]。九州地方北部に位置し、九州地方の県では最も人口が多い。県庁所在地の福岡市は、九州地方最大の人口を擁する都市であり、西日本においても大阪市に次ぐ人口を擁する都市である[2]。福岡市と北九州市の2つの政令指定都市を抱え、いわゆる三大都市圏以外では人口密度が1,000人/km2を超える唯一の県である[3]。',
    },
  ];

  const dateHandler = (params) => {
    // setValue(params.inputProps.value);
    console.log(params);
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
        <FormControlLabel
          control={<Checkbox onClick={drinkCheckHandler} />}
          label="ビール"
          value="ビール"
        />
        <FormControlLabel
          control={<Checkbox onClick={drinkCheckHandler} />}
          label="ワイン"
          value="ワイン"
        />
        <FormControlLabel
          control={<Checkbox onClick={drinkCheckHandler} />}
          label="日本酒"
          value="日本酒"
        />
      </FormGroup>
      <Typography>{checkboxValue}</Typography>

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
          control={
            <Checkbox
              onClick={checkedHandler}
              checked={checked[0] && checked[1] && checked[2]}
            />
          }
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

      <Box sx={{ mx: 2 }}>
        <Typography gutterBottom noWrap style={{ color: '#e4e4e4' }}>
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'baceline',
          justifyContent: 'space-between',
        }}
      >
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
            <Typography>アコーディオン1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>jweofjwoefhwougfjewijweo</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
            <Typography>アコーディオン2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>jweofjwoefhwougfjewijweo</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
            <Typography>アコーディオン3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>jweofjwoefhwougfjewijweo</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box sx={{ mx: 2 }}>
        <Typography gutterBottom noWrap style={{ color: '#e4e4e4' }}>
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Typography>
      </Box>

      <Box
        sx={{
          background: 'linear-gradient(#e66465, #9198e5)',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          py: 4,
          px: 2,
        }}
      >
        <Masonry columns={2} spacing={1}>
          {prefectureData.map(({ name, nameEn, description }) => (
            <Box key={name} sx={{ my: 2, mx: 'auto', width: '45%' }}>
              <Card className={classes.cardBackground}>
                <CardContent>
                  <CardHeader title="Header"></CardHeader>
                  <Typography
                    variant="h4"
                    className={classes.fontBold}
                    gutterBottom
                  >
                    {name}
                    <Typography component="span">-{nameEn}-</Typography>
                  </Typography>
                  <Typography>{description}</Typography>
                  <CardActionArea></CardActionArea>
                  <CardActions>
                    <Button variant="outlined" className={classes.fontBold}>
                      ホームページへ
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Masonry>
      </Box>

      <Box sx={{ mx: 2 }}>
        <Typography gutterBottom noWrap style={{ color: '#e4e4e4' }}>
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Typography>
      </Box>

      <Box sx={{ width: '205px', my: 4, mx: 'auto' }}>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={jaLocale}>
          <ThemeProvider theme={materialTheme}>
            <DatePicker
              label="Basic example"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              name="date"
              minDate={new Date('1900-04-01')}
              maxDate={new Date()}
              renderInput={(params) => <TextField {...params} />}
            />
          </ThemeProvider>
        </LocalizationProvider>
      </Box>

      {/* <Box sx={{ maxWidth: '500px', mx: 'auto' }}> */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={materialTheme}>
          <StaticDatePicker
            orientation="landscape"
            openTo="day"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            minDate={new Date('1900-04-01')}
            maxDate={new Date()}
            renderInput={(params) => <TextField {...params} />}
          />
        </ThemeProvider>
      </LocalizationProvider>
      {/* </Box> */}
    </>
  );
}

export default App;
