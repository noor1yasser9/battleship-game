// استدعاء من game loop بعد كل هجوم:
GameOverScreen.show({
  winner      : state.lastAttackResult.winner,  // 'player' | 'opponent'
  shotsCount  : state.shotsCount,               // { player: N, opponent: N }
  playerName  : 'أنت',                          // اختياري
  opponentName: 'الخصم',                        // اختياري
});