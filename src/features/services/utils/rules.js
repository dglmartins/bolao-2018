export const rules = {
  "Group Stage": {
    eachQualified: {points: 5, maxPoints: 80, description: "Each team qualified - per pick"},
    positionQualified: {points: 5, maxPoints: 80, description: "Correct order qualified - per pick"},
    bestCampaign: {points: 40, maxPoints: 40, description: "Bonus best campaign"},
    maxPoints: {points: null, maxPoints: 200, description: "Max points group stage"}
  },
  "Round of 16": {
    eachWinner: {points: 2, maxPoints: 16, description: "Correct winner pick - per game"},
    goalsDif: {points: 1, maxPoints: 8, description: "Correct goals difference - per game"},
    goalsWinner: {points: 1, maxPoints: 8, description: "Correct goals winner - per game"},
    goalsLoser: {points: 1, maxPoints: 8, description: "Correct goals loser - per game"},
    maxPoints: {points: null, maxPoints: 40, description: "Max points round of 16"}
  },
  "Quarter-finals": {
    eachWinner: {points: 6, maxPoints: 24, description: "Correct winner pick - per game"},
    goalsDif: {points: 3, maxPoints: 12, description: "Correct goals difference - per game"},
    goalsWinner: {points: 3, maxPoints: 12, description: "Correct goals winner - per game"},
    goalsLoser: {points: 3, maxPoints: 12, description: "Correct goals loser - per game"},
    maxPoints: {points: null, maxPoints: 60, description: "Max points group quarter finals"}
  },
  "Semi-finals": {
    eachWinner: {points: 16, maxPoints: 32, description: "Correct winner pick - per game"},
    goalsDif: {points: 8, maxPoints: 16, description: "Correct goals difference - per game"},
    goalsWinner: {points: 8, maxPoints: 16, description: "Correct goals winner - per game"},
    goalsLoser: {points: 8, maxPoints: 16, description: "Correct goals loser - per game"},
    maxPoints: {points: null, maxPoints: 80, description: "Max points semifinals"}
  },
  "3rd vs 4th": {
    eachWinner: {points: 12, maxPoints: 12, description: "Correct winner pick"},
    goalsDif: {points: 6, maxPoints: 6, description: "Correct goals difference"},
    goalsWinner: {points: 6, maxPoints: 6, description: "Correct goals winner"},
    goalsLoser: {points: 6, maxPoints: 6, description: "Correct goals loser"},
    maxPoints: {points: null, maxPoints: 30, description: "Max points 3rd x 4th"}
  },
  "Finals": {
    eachWinner: {points: 40, maxPoints: 40, description: "Correct winner pick"},
    goalsDif: {points: 20, maxPoints: 20, description: "Correct goals difference"},
    goalsWinner: {points: 20, maxPoints: 20, description: "Correct goals winner"},
    goalsLoser: {points: 20, maxPoints: 20, description: "Correct goals winner"},
    maxPoints: {points: null, maxPoints: 100, description: "Max points group finals"}
  },
  "Top scorer": {
    topScorer: {points: 40, maxPoints: 40, description: "Points bonus top scorer"},
    maxPoints: {points: null, maxPoints: 40, description: "Max points bonus top scorer"}
  },

}
