package com.fantasy.football.scheduler;

//@Configuration
//@EnableScheduling

public class Scheduler {

	// https://static.javadoc.io/org.springframework/spring-context/4.1.2.RELEASE/org/springframework/scheduling/annotation/EnableScheduling.html

	// @Autowired
	// private LeagueRepository leagueRepository;
	// @Autowired
	// TeamService teamService;

	// @Scheduled(fixedRate = 1000)
	// @Transactional
	// public void GetStats() throws JsonParseException, IOException {
	//
	// int matchup = 0;
	// int score = 0;
	//
	// QBClass tempQB = new QBClass();
	// RBClass tempRB = new RBClass();
	// WRClass tempWR = new WRClass();
	// TEClass tempTE = new TEClass();
	// DefenseClass tempDefense = new DefenseClass();
	// KickerClass tempKicker = new KickerClass();
	//
	//
	//
	//
	//
	//
	//
	//
	//
	// Set < League > leagues = new HashSet < > ();
	// leagues = leagueRepository.findAll();
	// for (League league: leagues) {
	// if (league.getStatus().equals("Ongoing")) {
	// if (league.getCurrentWeek() == 13) {
	// // Goto Play off
	// }
	// league.setCurrentWeek(league.getCurrentWeek() + 1);
	//
	// for (Team team: league.getTeams()) {
	// score = 0;
	// //Cycle through teams
	// for (Player player: team.getPlayers()) {
	// //Cycle through player
	// if (player.getPosition().equals("QB")) {
	// tempQB.setName(player.getPlayerName());
	// tempQB = GetQBStats(tempQB);
	// tempQB.CalculateFantasyPoints();
	// player.setFantasyPoints(tempQB.getFantasyPoints());
	// score += tempQB.getFantasyPoints();
	// team.addPlayer(player);
	// tempQB = new QBClass();
	// }
	// if (player.getPosition().equals("RB")) {
	// tempRB.setName(player.getPlayerName());
	// tempRB = GetRBStats(tempRB);
	// tempRB.CalculateFantasyPoints();
	// player.setFantasyPoints(tempRB.getFantasyPoints());
	// score += tempRB.getFantasyPoints();
	// team.addPlayer(player);
	// tempRB = new RBClass();
	// }
	// if (player.getPosition().equals("WR")) {
	// tempWR.setName(player.getPlayerName());
	// tempWR = GetWRStats(tempWR);
	// tempWR.CalculateFantasyPoints();
	// player.setFantasyPoints(tempWR.getFantasyPoints());
	// score += tempWR.getFantasyPoints();
	// team.addPlayer(player);
	// tempWR = new WRClass();
	// }
	// if (player.getPosition().equals("TE")) {
	// tempTE.setName(player.getPlayerName());
	// tempTE = GetTEStats(tempTE);
	// tempTE.CalculateFantasyPoints();
	// player.setFantasyPoints(tempTE.getFantasyPoints());
	// score += tempTE.getFantasyPoints();
	// team.addPlayer(player);
	// tempTE = new TEClass();
	// }
	// if (player.getPosition().equals("Defense")) {
	// tempDefense.setName(player.getPlayerName());
	// tempDefense = GetDefenseStats(tempDefense);
	// tempDefense.CalculateFantasyPoints();
	// player.setFantasyPoints(tempDefense.getFantasyPoints());
	// score += tempDefense.getFantasyPoints();
	// team.addPlayer(player);
	// tempDefense = new DefenseClass();
	// }
	// if (player.getPosition().equals("Kicker")) {
	// tempKicker.setName(player.getPlayerName());
	// tempKicker = GetKickerStats(tempKicker);
	// tempKicker.CalculateFantasyPoints();
	// player.setFantasyPoints(tempKicker.getFantasyPoints());
	// score += tempKicker.getFantasyPoints();
	// team.addPlayer(player);
	// tempKicker = new KickerClass();
	// }
	// }
	// team.setScore(score);
	// }
	// for (Team team: league.getTeams()) {
	// matchup = team.getMatchup();
	// for (Team team2: league.getTeams()) {
	// if (matchup == team2.getMatchupId()) {
	// if (team.getScore() < team2.getScore()) {
	// team2.setWins(team2.getWins() + 1);
	// break;
	// } else if (team.getScore() > team2.getScore()) {
	// team2.setLoss(team2.getLoss() + 1);
	// break;
	// } else {
	// team2.setTie(team.getTie() + 1);
	// break;
	// }
	// }
	// }
	// }
	// }
	// }
	// leagueRepository.saveAll(leagues);
	// teamService.TeamMatchup();
	// }
	//
	//
	//
	// public QBClass GetQBStats(QBClass qb) throws JsonParseException, IOException
	// {
	// String name = qb.getName();
	// int passingTD = 0;
	// int passingYard = 0;
	// int interception = 0;
	// int sack = 0;
	// int rushingYard = 0;
	// int rushingTD = 0;
	// int fumble = 0;
	//
	// JsonParser QBparser = null;
	// QBparser = QBrestAPI(QBparser);
	// JsonToken jsonToken = QBparser.nextToken();
	// String fieldName = name;
	//
	// while (!("players".equals(fieldName))) {
	// jsonToken = QBparser.nextToken();
	// fieldName = QBparser.getCurrentName();
	// }
	// while (!("name".equals(fieldName))) {
	// jsonToken = QBparser.nextToken();
	// fieldName = QBparser.getCurrentName();
	// }
	// while (!("players".equals(fieldName))) {
	// jsonToken = QBparser.nextToken();
	// fieldName = QBparser.getCurrentName();
	// if (QBparser.getValueAsString() == null) {
	// continue;
	// }
	// if (fieldName.equals("name")) {
	// if (QBparser.getValueAsString().equals(name)) {
	// while (!("stats".equals(fieldName))) {
	// fieldName = QBparser.getCurrentName();
	// jsonToken = QBparser.nextToken();
	// }
	// jsonToken = QBparser.nextValue();
	// jsonToken = QBparser.nextToken();
	// jsonToken = QBparser.nextToken();
	// while ((jsonToken = QBparser.nextToken()) != JsonToken.END_OBJECT) {
	// fieldName = QBparser.getCurrentName();
	// if (("5").equals(fieldName)) {
	// jsonToken = QBparser.nextToken();
	// passingYard = QBparser.getValueAsInt();
	// } else if (("6").equals(fieldName)) {
	// jsonToken = QBparser.nextToken();
	// passingTD = QBparser.getValueAsInt();
	// } else if (("7").equals(fieldName)) {
	// jsonToken = QBparser.nextToken();
	// interception = QBparser.getValueAsInt();
	// } else if (("8").equals(fieldName)) {
	// jsonToken = QBparser.nextToken();
	// sack = QBparser.getValueAsInt();
	// } else if (("14").equals(fieldName)) {
	// jsonToken = QBparser.nextToken();
	// rushingYard = QBparser.getValueAsInt();
	// } else if (("15").equals(fieldName)) {
	// jsonToken = QBparser.nextToken();
	// rushingTD = QBparser.getValueAsInt();
	// } else if (("30").equals(fieldName)) {
	// jsonToken = QBparser.nextToken();
	// fumble = QBparser.getValueAsInt();
	// }
	// }
	// fieldName = null;
	// break;
	// }
	// }
	// }
	//
	// qb.setPassingYard(passingYard);
	// qb.setPassingTD(passingTD);
	// qb.setInterception(interception);
	// qb.setSack(sack);
	// qb.setRushingYard(rushingYard);
	// qb.setRushingTD(rushingTD);
	// qb.setFumble(fumble);
	// return qb;
	// }
	//
	//
	//
	// public RBClass GetRBStats(RBClass rb) throws JsonParseException, IOException
	// {
	// String name = rb.getName();
	// int rushingYard = 0;
	// int rushingTD = 0;
	// int reception = 0;
	// int receivingYard = 0;
	// int receivingTD = 0;
	// int fumble = 0;
	//
	// JsonParser RBparser = null;
	// RBparser = RBrestAPI(RBparser);
	// JsonToken jsonToken = RBparser.nextToken();
	// String fieldName = name;
	//
	// while (!("players".equals(fieldName))) {
	// jsonToken = RBparser.nextToken();
	// fieldName = RBparser.getCurrentName();
	// }
	// while (!("name".equals(fieldName))) {
	// jsonToken = RBparser.nextToken();
	// fieldName = RBparser.getCurrentName();
	// }
	// while (!("players".equals(fieldName))) {
	// jsonToken = RBparser.nextToken();
	// fieldName = RBparser.getCurrentName();
	// if (RBparser.getValueAsString() == null) {
	// continue;
	// }
	// if (fieldName.equals("name")) {
	// if (RBparser.getValueAsString().equals(name)) {
	// while (!("stats".equals(fieldName))) {
	// fieldName = RBparser.getCurrentName();
	// jsonToken = RBparser.nextToken();
	// }
	// jsonToken = RBparser.nextValue();
	// jsonToken = RBparser.nextToken();
	// jsonToken = RBparser.nextToken();
	// while ((jsonToken = RBparser.nextToken()) != JsonToken.END_OBJECT) {
	// fieldName = RBparser.getCurrentName();
	// if (("14").equals(fieldName)) {
	// jsonToken = RBparser.nextToken();
	// rushingYard = RBparser.getValueAsInt();
	// } else if (("15").equals(fieldName)) {
	// jsonToken = RBparser.nextToken();
	// rushingTD = RBparser.getValueAsInt();
	// } else if (("20").equals(fieldName)) {
	// jsonToken = RBparser.nextToken();
	// reception = RBparser.getValueAsInt();
	// } else if (("21").equals(fieldName)) {
	// jsonToken = RBparser.nextToken();
	// receivingYard = RBparser.getValueAsInt();
	// } else if (("22").equals(fieldName)) {
	// jsonToken = RBparser.nextToken();
	// receivingTD = RBparser.getValueAsInt();
	// } else if (("29").equals(fieldName)) {
	// jsonToken = RBparser.nextToken();
	// fumble = RBparser.getValueAsInt();
	// }
	// }
	// fieldName = null;
	// break;
	// }
	// }
	//
	// }
	// rb.setRushingYard(rushingYard);
	// rb.setRushingTD(rushingTD);
	// rb.setReception(reception);
	// rb.setReceivingYard(receivingYard);
	// rb.setReceivingTD(receivingTD);
	// rb.setFumble(fumble);
	// return rb;
	// }
	//
	// public WRClass GetWRStats(WRClass wr) throws JsonParseException, IOException
	// {
	//
	// String name = wr.getName();
	// int reception = 0;
	// int receivingYard = 0;
	// int receivingTD = 0;
	//
	// JsonParser WRparser = null;
	// WRparser = WRrestAPI(WRparser);
	// JsonToken jsonToken = WRparser.nextToken();
	// String fieldName = name;
	//
	// while (!("players".equals(fieldName))) {
	// jsonToken = WRparser.nextToken();
	// fieldName = WRparser.getCurrentName();
	// }
	// while (!("name".equals(fieldName))) {
	// jsonToken = WRparser.nextToken();
	// fieldName = WRparser.getCurrentName();
	// }
	// while (!("players".equals(fieldName))) {
	// jsonToken = WRparser.nextToken();
	// fieldName = WRparser.getCurrentName();
	// if (WRparser.getValueAsString() == null) {
	// continue;
	// }
	// if (fieldName.equals("name")) {
	// if (WRparser.getValueAsString().equals(name)) {
	// while (!("stats".equals(fieldName))) {
	// fieldName = WRparser.getCurrentName();
	// jsonToken = WRparser.nextToken();
	// }
	// jsonToken = WRparser.nextValue();
	// jsonToken = WRparser.nextToken();
	// jsonToken = WRparser.nextToken();
	// while ((jsonToken = WRparser.nextToken()) != JsonToken.END_OBJECT) {
	// fieldName = WRparser.getCurrentName();
	// if (("20").equals(fieldName)) {
	// jsonToken = WRparser.nextToken();
	// reception = WRparser.getValueAsInt();
	// } else if (("21").equals(fieldName)) {
	// jsonToken = WRparser.nextToken();
	// receivingYard = WRparser.getValueAsInt();
	// } else if (("22").equals(fieldName)) {
	// jsonToken = WRparser.nextToken();
	// receivingTD = WRparser.getValueAsInt();
	// }
	// }
	// fieldName = null;
	// break;
	// }
	// }
	//
	// }
	// wr.setReception(reception);
	// wr.setReceivingYard(receivingYard);
	// wr.setReceivingTD(receivingTD);
	// return wr;
	// }
	//
	// public TEClass GetTEStats(TEClass te) throws JsonParseException, IOException
	// {
	// String name = te.getName();
	// int reception = 0;
	// int receivingYard = 0;
	// int receivingTD = 0;
	// int fantasyPoints = 0;
	//
	// JsonParser TEparser = null;
	// TEparser = TErestAPI(TEparser);
	// JsonToken jsonToken = TEparser.nextToken();
	// String fieldName = name;
	//
	// while (!("players".equals(fieldName))) {
	// jsonToken = TEparser.nextToken();
	// fieldName = TEparser.getCurrentName();
	// }
	// while (!("name".equals(fieldName))) {
	// jsonToken = TEparser.nextToken();
	// fieldName = TEparser.getCurrentName();
	// }
	// while (!("players".equals(fieldName))) {
	// jsonToken = TEparser.nextToken();
	// fieldName = TEparser.getCurrentName();
	// if (TEparser.getValueAsString() == null) {
	// continue;
	// }
	// if (fieldName.equals("name")) {
	// if (TEparser.getValueAsString().equals(name)) {
	// while (!("stats".equals(fieldName))) {
	// fieldName = TEparser.getCurrentName();
	// jsonToken = TEparser.nextToken();
	// }
	// jsonToken = TEparser.nextValue();
	// jsonToken = TEparser.nextToken();
	// jsonToken = TEparser.nextToken();
	// while ((jsonToken = TEparser.nextToken()) != JsonToken.END_OBJECT) {
	// fieldName = TEparser.getCurrentName();
	// if (("20").equals(fieldName)) {
	// jsonToken = TEparser.nextToken();
	// reception = TEparser.getValueAsInt();
	// } else if (("21").equals(fieldName)) {
	// jsonToken = TEparser.nextToken();
	// receivingYard = TEparser.getValueAsInt();
	// } else if (("22").equals(fieldName)) {
	// jsonToken = TEparser.nextToken();
	// receivingTD = TEparser.getValueAsInt();
	// }
	// }
	// fieldName = null;
	// break;
	// }
	// }
	//
	// }
	// te.setReception(reception);
	// te.setReceivingYard(receivingYard);
	// te.setReceivingTD(receivingTD);
	// return te;
	// }
	//
	// public DefenseClass GetDefenseStats(DefenseClass defense) throws
	// JsonParseException, IOException {
	// String name = defense.getName();
	// int sack = 0;
	// int interception = 0;
	// int fumblesRecovered = 0;
	// int safety = 0;
	// int TD = 0;
	// int pointsAllowed = 0;
	//
	// JsonParser defenseParser = null;
	// defenseParser = defenseRestAPI(defenseParser);
	// JsonToken jsonToken = defenseParser.nextToken();
	// String fieldName = name;
	//
	// while (!("players".equals(fieldName))) {
	// jsonToken = defenseParser.nextToken();
	// fieldName = defenseParser.getCurrentName();
	// }
	// while (!("name".equals(fieldName))) {
	// jsonToken = defenseParser.nextToken();
	// fieldName = defenseParser.getCurrentName();
	// }
	// while (!("players".equals(fieldName))) {
	// jsonToken = defenseParser.nextToken();
	// fieldName = defenseParser.getCurrentName();
	// if (defenseParser.getValueAsString() == null) {
	// continue;
	// }
	// if (fieldName.equals("name")) {
	// if (defenseParser.getValueAsString().equals(name)) {
	// while (!("stats".equals(fieldName))) {
	// fieldName = defenseParser.getCurrentName();
	// jsonToken = defenseParser.nextToken();
	// }
	// jsonToken = defenseParser.nextValue();
	// jsonToken = defenseParser.nextToken();
	// jsonToken = defenseParser.nextToken();
	// while ((jsonToken = defenseParser.nextToken()) != JsonToken.END_OBJECT) {
	// fieldName = defenseParser.getCurrentName();
	// if (("45").equals(fieldName)) {
	// jsonToken = defenseParser.nextToken();
	// sack = defenseParser.getValueAsInt();
	// } else if (("46").equals(fieldName)) {
	// jsonToken = defenseParser.nextToken();
	// interception = defenseParser.getValueAsInt();
	// } else if (("47").equals(fieldName)) {
	// jsonToken = defenseParser.nextToken();
	// fumblesRecovered = defenseParser.getValueAsInt();
	// } else if (("49").equals(fieldName)) {
	// jsonToken = defenseParser.nextToken();
	// safety = defenseParser.getValueAsInt();
	// } else if (("50").equals(fieldName)) {
	// jsonToken = defenseParser.nextToken();
	// TD = defenseParser.getValueAsInt();
	// } else if (("54").equals(fieldName)) {
	// jsonToken = defenseParser.nextToken();
	// pointsAllowed = defenseParser.getValueAsInt();
	// }
	// }
	// fieldName = null;
	// break;
	// }
	// }
	// }
	//
	// defense.setSack(sack);
	// defense.setInterception(interception);
	// defense.setFumblesRecovered(fumblesRecovered);
	// defense.setSafety(safety);
	// defense.setTD(TD);
	// defense.setPointsAllowed(pointsAllowed);
	// return defense;
	// }
	//
	// public KickerClass GetKickerStats(KickerClass kicker) throws
	// JsonParseException, IOException {
	//
	// String name = kicker.getName();
	// int PAT = 0;
	// int fg0To19 = 0;
	// int fg20To29 = 0;
	// int fg30To39 = 0;
	// int fg40To49 = 0;
	// int fg50Plus = 0;
	//
	// JsonParser kickerParser = null;
	// kickerParser = kickerRestAPI(kickerParser);
	// JsonToken jsonToken = kickerParser.nextToken();
	// String fieldName = name;
	//
	// while (!("players".equals(fieldName))) {
	// jsonToken = kickerParser.nextToken();
	// fieldName = kickerParser.getCurrentName();
	// }
	// while (!("name".equals(fieldName))) {
	// jsonToken = kickerParser.nextToken();
	// fieldName = kickerParser.getCurrentName();
	// }
	// while (!("players".equals(fieldName))) {
	// jsonToken = kickerParser.nextToken();
	// fieldName = kickerParser.getCurrentName();
	// if (kickerParser.getValueAsString() == null) {
	// continue;
	// }
	// if (fieldName.equals("name")) {
	// if (kickerParser.getValueAsString().equals(name)) {
	// while (!("stats".equals(fieldName))) {
	// fieldName = kickerParser.getCurrentName();
	// jsonToken = kickerParser.nextToken();
	// }
	// jsonToken = kickerParser.nextValue();
	// jsonToken = kickerParser.nextToken();
	// jsonToken = kickerParser.nextToken();
	// while ((jsonToken = kickerParser.nextToken()) != JsonToken.END_OBJECT) {
	// fieldName = kickerParser.getCurrentName();
	// if (("33").equals(fieldName)) {
	// jsonToken = kickerParser.nextToken();
	// PAT = kickerParser.getValueAsInt();
	// } else if (("35").equals(fieldName)) {
	// jsonToken = kickerParser.nextToken();
	// fg0To19 = kickerParser.getValueAsInt();
	// } else if (("36").equals(fieldName)) {
	// jsonToken = kickerParser.nextToken();
	// fg20To29 = kickerParser.getValueAsInt();
	// } else if (("37").equals(fieldName)) {
	// jsonToken = kickerParser.nextToken();
	// fg30To39 = kickerParser.getValueAsInt();
	// } else if (("38").equals(fieldName)) {
	// jsonToken = kickerParser.nextToken();
	// fg40To49 = kickerParser.getValueAsInt();
	// } else if (("39").equals(fieldName)) {
	// jsonToken = kickerParser.nextToken();
	// fg50Plus = kickerParser.getValueAsInt();
	// }
	// }
	// fieldName = null;
	// break;
	// }
	// }
	// }
	//
	//
	// kicker.setPAT(PAT);
	// kicker.setFg0To19(fg0To19);
	// kicker.setFg20To29(fg20To29);
	// kicker.setFg30To39(fg30To39);
	// kicker.setFg40To49(fg40To49);
	// kicker.setFg50Plus(fg50Plus);
	//
	// return kicker;
	// }
	//
	// public JsonParser QBrestAPI(JsonParser QBparser) throws JsonParseException,
	// IOException {
	// RestTemplate QBrestTemplate = new RestTemplate();
	// String QBresourceUrl
	// =
	// "https://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&position=QB";
	// ResponseEntity < String > QBresponse =
	// QBrestTemplate.getForEntity(QBresourceUrl, String.class);
	// String QBjson = QBresponse.getBody();
	//
	// JsonFactory QBfactory = new JsonFactory();
	// QBparser = QBfactory.createParser(QBjson);
	//
	// return QBparser;
	// }
	//
	// public JsonParser RBrestAPI(JsonParser RBparser) throws JsonParseException,
	// IOException {
	// RestTemplate RBrestTemplate = new RestTemplate();
	// String RBresourceUrl
	// =
	// "https://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&position=RB";
	// ResponseEntity < String > RBresponse =
	// RBrestTemplate.getForEntity(RBresourceUrl, String.class);
	// String RBjson = RBresponse.getBody();
	//
	// JsonFactory RBfactory = new JsonFactory();
	// RBparser = RBfactory.createParser(RBjson);
	// return RBparser;
	// }
	//
	// public JsonParser WRrestAPI(JsonParser WRparser) throws JsonParseException,
	// IOException {
	// RestTemplate WRrestTemplate = new RestTemplate();
	// String WRresourceUrl
	// =
	// "https://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&position=WR";
	// ResponseEntity < String > WRresponse =
	// WRrestTemplate.getForEntity(WRresourceUrl, String.class);
	// String WRjson = WRresponse.getBody();
	//
	// JsonFactory WRfactory = new JsonFactory();
	// WRparser = WRfactory.createParser(WRjson);
	// return WRparser;
	// }
	//
	// public JsonParser TErestAPI(JsonParser TEparser) throws JsonParseException,
	// IOException {
	// RestTemplate TErestTemplate = new RestTemplate();
	// String TEresourceUrl
	// =
	// "https://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&position=TE";
	// ResponseEntity < String > TEresponse =
	// TErestTemplate.getForEntity(TEresourceUrl, String.class);
	// String TEjson = TEresponse.getBody();
	//
	// JsonFactory TEfactory = new JsonFactory();
	// TEparser = TEfactory.createParser(TEjson);
	// return TEparser;
	// }
	//
	// public JsonParser defenseRestAPI(JsonParser defenseParser) throws
	// JsonParseException, IOException {
	// RestTemplate defenseRestTemplate = new RestTemplate();
	// String defenseResourceUrl
	// =
	// "https://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&position=DEF";
	// ResponseEntity < String > defenseResponse =
	// defenseRestTemplate.getForEntity(defenseResourceUrl, String.class);
	// String defenseJson = defenseResponse.getBody();
	//
	// JsonFactory defenseFactory = new JsonFactory();
	// defenseParser = defenseFactory.createParser(defenseJson);
	// return defenseParser;
	// }
	//
	// public JsonParser kickerRestAPI(JsonParser kickerParser) throws
	// JsonParseException, IOException {
	// RestTemplate kickerRestTemplate = new RestTemplate();
	// String kickerResourceUrl
	// =
	// "https://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&position=K";
	// ResponseEntity < String > kickerResponse =
	// kickerRestTemplate.getForEntity(kickerResourceUrl, String.class);
	// String kickerJson = kickerResponse.getBody();
	//
	// JsonFactory kickerFactory = new JsonFactory();
	// kickerParser = kickerFactory.createParser(kickerJson);
	// return kickerParser;
	// }

}