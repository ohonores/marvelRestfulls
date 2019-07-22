import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/core/styles/withStyles";
import AddIcon from '@material-ui/icons/Add';
import RemoveCircle from '@material-ui/icons/Remove';

import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux'
import {
  fetchCharacters,
  getDetails,
} from '../actions'
import ListSuperHeroes from './ListSuperHeroes'
const OFFSET = 10;
const style = makeStyles(theme => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  gridList: {
    height: 450,
  },
  image: {
    width: 128,
    height: 128,
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    maxHeight: 300,
    height: "100px",
  },
  padding: {
    padding: theme.spacing(0, 20),
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
class Columns extends React.Component {
  constructor(){
    super();
    this.offset = OFFSET;
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCharacters(OFFSET));
  }
  setCharacters(records) {
    return records.map(

    )
  }
  getCharacter(id) {
    return this.props.items && this.props.items.results && id ? this.props.items.results.filter(f => f.id === id)[0] : null;
  }
  setSelectedIndexCharacter(id) {
    const { dispatch } = this.props
    dispatch(getDetails(id));
  }
  handleListItemClick = (event, id) => {
    this.setSelectedIndexCharacter(id);
  }
  paginacion(event, tipo) {
    const { dispatch } = this.props;
    
    switch (tipo) {
      case "NEXT":
        this.offset += OFFSET;
        dispatch(fetchCharacters(this.offset));
        break;
      case "PREVIEW":
        if((this.offset -  OFFSET)<=10){
          this.offset = OFFSET;
        }else{
          this.offset -= OFFSET;
        }
        dispatch(fetchCharacters(this.offset));
        break;
      default:
        break;
    }

  }
 
  render() {
    const classes = this.props.classes;
    const seleccionado = this.getCharacter(this.props.id ?this.props.id :this.props.items && this.props.items.results ? this.props.items.results[0].id : 0);

    console.log("items", this.props.items, seleccionado, this.props.id);
    return (
      <Paper className={classes.paper}>
        <Toolbar>

<Fab color="secondary" aria-label="Add" className={classes.fabButton}>
  <AddIcon onClick={event => this.paginacion(event, "NEXT")} />
</Fab>
<Fab color="secondary" aria-label="Add" className={classes.fabButton}>
  <RemoveCircle onClick={event => this.paginacion(event, "PREVIEW")} />
</Fab>



</Toolbar>
        <Grid container spacing={2} direction="row"

          alignContent="flex-start">
           
          <Grid item className={classes.gridList} cellheight={160}>
            
            <Grid item sm container>
              <Grid item sm container>
              <ListSuperHeroes results={this.props.items && this.props.items.results? this.props.items.results:[]} classes={classes} handleListItemClick={this.handleListItemClick} ></ListSuperHeroes>
              
              </Grid>

              
            </Grid>
          </Grid> {seleccionado &&
            <Grid item sm container alignContent="flex-start">


              <Grid item direction="column" container spacing={2}>
                <Grid item>
                  <h1>{seleccionado.name}</h1>
                </Grid>
                <Grid item >
                  < img alt={seleccionado.nombre} src={seleccionado.thumbnail.path + "/portrait_uncanny." + seleccionado.thumbnail.extension} />
                  <Typography variant="body2" gutterBottom>
                    {seleccionado.description ? seleccionado.description : "Does not has description"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: {seleccionado.id}
                  </Typography>
                </Grid>
                <Grid item>
                  {["comics", "series", "events", "stories"].map((indicador, index) => (
                    <React.Fragment key={index}><Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {indicador + " "}
                    </Typography>
                      <Grid item>
                        {seleccionado[indicador].items.map((item, index) => (
                          <React.Fragment key={"link-" + index}> <a href={item.resourceURI} >{item.name}</a><br /></React.Fragment>
                        ))
                        }

                      </Grid>
                    </React.Fragment>
                  ))
                  }
                </Grid>
              </Grid>

            </Grid>}
        </Grid>

      </Paper>
    )
  }
}

export default withStyles(style)(
  connect(
    ({ tipos }) => ({ items: tipos.items, id: tipos.id, paginacion: tipos.paginacion ? tipos.paginacion : { start: 0, end: 6 } }))(Columns))