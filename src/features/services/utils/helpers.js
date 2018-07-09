import Russia from '../../assets/flags/Russia.svg';
import Uruguay from '../../assets/flags/Uruguay.svg';
import SaudiArabia from '../../assets/flags/SaudiArabia.svg';
import Egypt from '../../assets/flags/Egypt.svg';
import Iran from '../../assets/flags/Iran.svg';
import Morocco from '../../assets/flags/Morocco.svg';
import Portugal from '../../assets/flags/Portugal.png';
import Spain from '../../assets/flags/Spain.png';
import Australia from '../../assets/flags/Australia.svg';
import Denmark from '../../assets/flags/Denmark.svg';
import France from '../../assets/flags/France.svg';
import Nigeria from '../../assets/flags/Nigeria.svg';
import Iceland from '../../assets/flags/Iceland.svg';
import Peru from '../../assets/flags/Peru.png';
import Argentina from '../../assets/flags/Argentina.svg';
import Croatia from '../../assets/flags/Croatia.svg';
import Brazil from '../../assets/flags/Brazil.svg';
import CostaRica from '../../assets/flags/CostaRica.svg';
import Serbia from '../../assets/flags/Serbia.png';
import Switzerland from '../../assets/flags/Switzerland.svg';
import Germany from '../../assets/flags/Germany.svg';
import Korea from '../../assets/flags/Korea.svg';
import Mexico from '../../assets/flags/Mexico.png';
import Sweden from '../../assets/flags/Sweden.svg';
import Belgium from '../../assets/flags/Belgium.svg';
import England from '../../assets/flags/England.svg';
import Panama from '../../assets/flags/Panama.svg';
import Tunisia from '../../assets/flags/Tunisia.svg';
import Colombia from '../../assets/flags/Colombia.svg';
import Japan from '../../assets/flags/Japan.svg';
import Poland from '../../assets/flags/Poland.svg';
import Senegal from '../../assets/flags/Senegal.svg';
import * as _ from 'ramda';




export const getCountryStyle = (country) => {
  switch (country) {
    case "Russia":
      return {
        backgroundImage: `url(${Russia})`,
        backgroundRepeat: "no-repeat",
      	backgroundPosition: "center center",
      	backgroundSize: "contain",
      };
    case "Saudi Arabia":
      return  {
        backgroundImage: `url(${SaudiArabia})`,
        backgroundRepeat: "no-repeat",
      	backgroundPosition: "center center",
      	backgroundSize: "contain",
      };
    case "Uruguay":
      return  {
        backgroundImage: `url(${Uruguay})`,
        backgroundRepeat: "no-repeat",
      	backgroundPosition: "center center",
      	backgroundSize: "contain",
      };
    case "Egypt":
      return  {
        backgroundImage: `url(${Egypt})`,
        backgroundRepeat: "no-repeat",
      	backgroundPosition: "center center",
      	backgroundSize: "contain",
      };
    case "Iran":
      return  {
        backgroundImage: `url(${Iran})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
      };
    case "Morocco":
      return  {
        backgroundImage: `url(${Morocco})`,
        backgroundRepeat: "no-repeat",
      	backgroundPosition: "center center",
      	backgroundSize: "contain",
      };
    case "Portugal":
      return  {
        backgroundImage: `url(${Portugal})`,
        backgroundRepeat: "no-repeat",
      	backgroundPosition: "center center",
      	backgroundSize: "contain",
      };
    case "Spain":
      return  {
        backgroundImage: `url(${Spain})`,
        backgroundRepeat: "no-repeat",
      	backgroundPosition: "center center",
      	backgroundSize: "contain",
      };
    case "Australia":
      return  {
        backgroundImage: `url(${Australia})`,
        backgroundRepeat: "no-repeat",
      	backgroundPosition: "center center",
      	backgroundSize: "contain",
      };
    case "Denmark":
      return  {
        backgroundImage: `url(${Denmark})`,
        backgroundRepeat: "no-repeat",
      	backgroundPosition: "center center",
      	backgroundSize: "contain",
      };
    case "France":
      return  {
        backgroundImage: `url(${France})`,
        backgroundRepeat: "no-repeat",
      	backgroundPosition: "center center",
      	backgroundSize: "contain",
      };
    case "Nigeria":
      return  {
        backgroundImage: `url(${Nigeria})`,
        backgroundRepeat: "no-repeat",
      	backgroundPosition: "center center",
      	backgroundSize: "contain",
      };
    case "Iceland":
      return  {
        backgroundImage: `url(${Iceland})`,
        backgroundRepeat: "no-repeat",
      	backgroundPosition: "center center",
      	backgroundSize: "contain",
      };
    case "Peru":
      return  {
        backgroundImage: `url(${Peru})`,
        backgroundRepeat: "no-repeat",
      	backgroundPosition: "center center",
      	backgroundSize: "contain",
      };
    case "Argentina":
      return  {
        backgroundImage: `url(${Argentina})`,
        backgroundRepeat: "no-repeat",
      	backgroundPosition: "center center",
      	backgroundSize: "contain",
      };
    case "Croatia":
      return  {
        backgroundImage: `url(${Croatia})`,
        backgroundRepeat: "no-repeat",
      	backgroundPosition: "center center",
      	backgroundSize: "contain",
      };
    case "Brazil":
      return  {
        backgroundImage: `url(${Brazil})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
      };
    case "Costa Rica":
      return  {
        backgroundImage: `url(${CostaRica})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
      };
    case "Serbia":
      return  {
        backgroundImage: `url(${Serbia})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
      };
    case "Switzerland":
      return  {
        backgroundImage: `url(${Switzerland})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
      };
    case "Germany":
      return  {
        backgroundImage: `url(${Germany})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
      };
    case "Korea":
      return  {
        backgroundImage: `url(${Korea})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
      };

    case "Mexico":
      return  {
        backgroundImage: `url(${Mexico})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
      };

    case "Sweden":
      return  {
        backgroundImage: `url(${Sweden})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
      };
    case "Belgium":
      return  {
        backgroundImage: `url(${Belgium})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
      };
    case "England":
      return  {
        backgroundImage: `url(${England})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
      };
    case "Panama":
      return  {
        backgroundImage: `url(${Panama})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
      };
    case "Tunisia":
      return  {
        backgroundImage: `url(${Tunisia})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
      };
    case "Colombia":
      return  {
        backgroundImage: `url(${Colombia})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
      };
    case "Japan":
      return  {
        backgroundImage: `url(${Japan})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
      };
    case "Poland":
      return  {
        backgroundImage: `url(${Poland})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
      };
    case "Senegal":
      return  {
        backgroundImage: `url(${Senegal})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
      };
  }
};

export function sortByFIFAOrder(group) {
  const groupArray = Object.keys(group).map((team) => (
    Object.assign({}, group[team], {team})
  ))
  const sortByOrder = _.sortWith([
    _.descend(_.prop('Pts')),
    _.descend(_.prop('GD')),
    _.descend(_.prop('GF')),
    _.ascend(_.prop('team')),
  ]);
  const orderedArray = sortByOrder(groupArray)
  return orderedArray
}

function calcPoints(groupStagePicks, round16Results, quarterResults, semiResults, finalResults, user) {

  let groupStagePoints = 0;
  let round16Points = 0;
  let quarterPoints = 0;
  let semiPoints = 0;
  let threeFourPoints = 0;
  let finalPoints = 0;

  const groupStageArray = Object.keys(groupStagePicks).map((group) => (
    groupStagePicks[group]
  ));
  const round16Array = Object.keys(round16Results).map((gameId) => (
    round16Results[gameId]
  ));
  const quarterArray = Object.keys(quarterResults).map((gameId) => (
    quarterResults[gameId]
  ));

  const semiArray = Object.keys(semiResults).map((gameId) => (
    semiResults[gameId]
  ));

  const finalArray = Object.keys(finalResults).map((gameId) => (
    finalResults[gameId]
  ));

  for (const group of groupStageArray) {
    if (group.status === "open") {
      groupStagePoints += 0
    } else if(group.status === "closed") {
      if (user.roundOnePicks[group.group].firstPlacePick === group.firstPlace) {
        groupStagePoints += 10
      }
      if (user.roundOnePicks[group.group].firstPlacePick === group.secondPlace) {
        groupStagePoints += 5
      }
      if (user.roundOnePicks[group.group].secondPlacePick === group.firstPlace) {
        groupStagePoints += 5
      }

      if (user.roundOnePicks[group.group].secondPlacePick === group.secondPlace) {
        groupStagePoints += 10
      }
    }
  }

  for (const game of round16Array) {

    if (game.status === "closed" && user.round16Picks && user.round16Picks[game.id]) {
      const actualGoalsDifference = game.team1Score - game.team2Score
      const guessedGoalsDifference = user.round16Picks[game.id].team1Score - user.round16Picks[game.id].team2Score
      if (user.round16Picks[game.id].teamAdvance === game.teamAdvance) {
        round16Points += 2
      }

      if (user.round16Picks[game.id].team1Score === game.team1Score) {
        round16Points += 1
      }

      if (user.round16Picks[game.id].team2Score === game.team2Score) {
        round16Points += 1
      }

      if (actualGoalsDifference === guessedGoalsDifference) {
        round16Points += 1
      }

    }
  }

  for (const game of quarterArray) {

    if (game.status === "closed" && user.quarterPicks && user.quarterPicks[game.id]) {
      const actualGoalsDifference = game.team1Score - game.team2Score
      const guessedGoalsDifference = user.quarterPicks[game.id].team1Score - user.quarterPicks[game.id].team2Score
      if (user.quarterPicks[game.id].teamAdvance === game.teamAdvance) {
        quarterPoints += 6
      }

      if (user.quarterPicks[game.id].team1Score === game.team1Score) {
        quarterPoints += 3
      }

      if (user.quarterPicks[game.id].team2Score === game.team2Score) {
        quarterPoints += 3
      }

      if (actualGoalsDifference === guessedGoalsDifference) {
        quarterPoints += 3
      }

    }
  }

  for (const game of semiArray) {

    if (game.status === "closed" && user.semiPicks && user.semiPicks[game.id]) {
      const actualGoalsDifference = game.team1Score - game.team2Score
      const guessedGoalsDifference = user.semiPicks[game.id].team1Score - user.semiPicks[game.id].team2Score
      if (user.semiPicks[game.id].teamAdvance === game.teamAdvance) {
        semiPoints += 16
      }

      if (user.semiPicks[game.id].team1Score === game.team1Score) {
        semiPoints += 8
      }

      if (user.semiPicks[game.id].team2Score === game.team2Score) {
        semiPoints += 8
      }

      if (actualGoalsDifference === guessedGoalsDifference) {
        semiPoints += 8
      }

    }
  }

  for (const game of finalArray) {

    if (game.id === "game1") {
      if (game.status === "closed" && user.finalPicks && user.finalPicks[game.id]) {
        const actualGoalsDifference = game.team1Score - game.team2Score
        const guessedGoalsDifference = user.finalPicks[game.id].team1Score - user.finalPicks[game.id].team2Score
        if (user.finalPicks[game.id].teamAdvance === game.teamAdvance) {
          threeFourPoints += 12
        }

        if (user.finalPicks[game.id].team1Score === game.team1Score) {
          threeFourPoints += 6
        }

        if (user.finalPicks[game.id].team2Score === game.team2Score) {
          threeFourPoints += 6
        }

        if (actualGoalsDifference === guessedGoalsDifference) {
          threeFourPoints += 6
        }

      }
    } else if (game.id === "game2") {
      if (game.status === "closed" && user.finalPicks && user.finalPicks[game.id]) {
        const actualGoalsDifference = game.team1Score - game.team2Score
        const guessedGoalsDifference = user.finalPicks[game.id].team1Score - user.finalPicks[game.id].team2Score
        if (user.finalPicks[game.id].teamAdvance === game.teamAdvance) {
          finalPoints += 40
        }

        if (user.finalPicks[game.id].team1Score === game.team1Score) {
          finalPoints += 20
        }

        if (user.finalPicks[game.id].team2Score === game.team2Score) {
          finalPoints += 20
        }

        if (actualGoalsDifference === guessedGoalsDifference) {
          finalPoints += 20
        }

      }
    }

  }

  const totalPoints = groupStagePoints + round16Points + quarterPoints + semiPoints + threeFourPoints + finalPoints

  return _.merge(user, {groupStagePoints, round16Points, quarterPoints, semiPoints, threeFourPoints, finalPoints, totalPoints})

}

export const curriedPoints = _.curry(calcPoints)
