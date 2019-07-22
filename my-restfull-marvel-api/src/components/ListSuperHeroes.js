
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CheckCircle from '@material-ui/icons/CheckCircle';
import HighlightOff from '@material-ui/icons/HighlightOff';

class ListSuperHeroes extends React.Component {
  constructor(props) {
    super();
  }
  getIcon(available) {
    return available !== 0 ? <CheckCircle color="primary" /> : <HighlightOff color="error" />
  }
  render() {
    return (
      <List className={this.props.classes.list}>

        {this.props.results && this.props.results.map(character => (
          <ListItem alignItems="flex-start" key={character.id} button
            onClick={event => this.props.handleListItemClick(event, character.id)}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={character.thumbnail.path + '/standard_medium.' + character.thumbnail.extension} />
            </ListItemAvatar>
            <ListItemText
              primary={character.name}
              secondary={
                <React.Fragment>

                  {["comics", "series", "events", "stories"].map((indicador, index) => (
                    <React.Fragment key={index}><Typography
                      component="span"
                      variant="body2"
                      className={this.props.classes.inline}
                      color="textPrimary"
                    >
                      {indicador + " "}
                    </Typography> {character[indicador] && this.getIcon(character[indicador].available)}</React.Fragment>
                  ))
                  }
                </React.Fragment>
              }
            />
          </ListItem>


        ))}
      </List>
    );
  }

}
export default ListSuperHeroes;