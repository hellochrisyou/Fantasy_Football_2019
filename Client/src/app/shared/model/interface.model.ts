export interface QB {
  name: string;
  passingTD: number;
  passingYard: number;
  interception: number;
  sack: number;
  rushingYard: number;
  rushingTD: number;
  fumble: number;
  fantasy_points?: number;
}

export interface RB {
  name: string;
  rushingYard: number;
  rushingTD: number;
  reception: number;
  receivingYard: number;
  receivingTD: number;
  fumble: number;
  fantasy_points?: number;
}

export interface WR {
  name: string;
  reception: number;
  receivingYard: number;
  receivingTD: number;
  fantasy_points?: number;
}

export interface TE {
  name: string;
  reception: number;
  receivingYard: number;
  receivingTD: number;
  fantasy_points?: number;
}

export interface DEF {
  name: string;
  sack: number;
  interception: number;
  fumblesRecovered: number;
  safety: number;
  TD: number;
  pointsAllowed: number;
  fantasy_points?: number;
}

export interface Kicker {
  name: string;
  PAT: number;
  fg0To19: number;
  fg20To29: number;
  fg30To39: number;
  fg40To49: number;
  fg50Plus: number;
  fantasy_points?: number;
}

export interface Account {
  id?: number | string;
  name: string;
  admin?: boolean;
  master?: boolean;
  leagues?: League[];
  teams?: Team[];
}

export interface League {
  id?: number | string;
  name: string;
  count?: number;
  current_week?: number;
  start_week?: number;
  draftOrder?: number;
  status?: 'Created' | 'Draft' | 'Ongoing' | 'Finished';
  teams?: Team[];
}

export interface Team {
  id?: number | string;
  name: string;
  wins?: number;
  loss?: number;
  tie?: number;
  score?: number;
  draft_position?: number;
  matchup?: number;
  matchup_id?: number;
  helmet?: string;
  players?: Player[];
}

export interface Player {
  id?: number | string;
  name: string;
  position: string;
  active: boolean;
  isFlex?: boolean;
  fantasy_points?: number;
}

export interface DialogData {
  title: string;
  subTitle: string;
  text: string;
}

export interface WaiverData {
  player: Player;
}

export interface DTO {
  myLeagueName: string;
  myAccountName: string;
  myTeamName: string;
  myTeamHelmet: string;
  otherTeamName: string;
  player1: Player;
  player2: Player;
}

export interface LeagueMenu {
  name: string;
  count: number;
  draft: boolean;
  onGoing: boolean;
  teamExist: boolean;
}

export interface Matchup {
  myPlayer: Player;
  otherPlayer: Player;
}
