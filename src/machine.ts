import { Machine, StateMachine } from "xstate";

export interface TicTacToeStateSchema {
  states: {
    X_WINS: {};
    O_WINS: {};
    DRAW: {};
    XOXOXOX__: {};
    XOXOXOOXX: {};
    XOXOXOOX_: {};
    XOXOXOXXO: {};
    XOXOXO_XO: {};
    XOXOXO_X_: {};
    XOXOXO__X: {};
    XOXOXO___: {};
    XOXOXXOOX: {};
    XOXOXXOO_: {};
    XOXOXXOXO: {};
    XOXOXXO_O: {};
    XOXOXXO__: {};
    XOXOX_OXO: {};
    XOXOX_OX_: {};
    XOXOX_O_X: {};
    XOXOX_O__: {};
    XOXOXXXOO: {};
    XOXOXX_OO: {};
    XOXOXX_O_: {};
    XOXOX_XO_: {};
    XOXOX__OX: {};
    XOXOX__O_: {};
    XOXOXX__O: {};
    XOXOX_X_O: {};
    XOXOX__XO: {};
    XOXOX___O: {};
    XOXOX____: {};
    XOXOOXXO_: {};
    XOXOOXXXO: {};
    XOXOOXX_O: {};
    XOXOOXX__: {};
    XOXOOXOXX: {};
    XOXOOXOX_: {};
    XOXOOX_XO: {};
    XOXOOX_X_: {};
    XOXOOX__X: {};
    XOXOOX___: {};
    XOXO_XOXO: {};
    XOXO_XOX_: {};
    XOXO_XO_X: {};
    XOXO_XO__: {};
    XOXO_XXOO: {};
    XOXO_XXO_: {};
    XOXO_X_OX: {};
    XOXO_X_O_: {};
    XOXO_XX_O: {};
    XOXO_X_XO: {};
    XOXO_X__O: {};
    XOXO_X___: {};
    XOXOOOXX_: {};
    XOXOO_XXO: {};
    XOXOO_XX_: {};
    XOXOOOX_X: {};
    XOXOO_XOX: {};
    XOXOO_X_X: {};
    XOXOO_X__: {};
    XOXO_OXXO: {};
    XOXO_OXX_: {};
    XOXOXOXOX: {};
    XOXO_OXOX: {};
    XOXO_OX_X: {};
    XOXO_OX__: {};
    XOXO__XOX: {};
    XOXO__XO_: {};
    XOXO__XXO: {};
    XOXO__X_O: {};
    XOXO__X__: {};
    XOXOOO_XX: {};
    XOXOO_OXX: {};
    XOXOO__XX: {};
    XOXOO__X_: {};
    XOXO_OOXX: {};
    XOXO_O_XX: {};
    XOXO_O_X_: {};
    XOXO__OXX: {};
    XOXO__OX_: {};
    XOXO___XO: {};
    XOXO___X_: {};
    XOXOO___X: {};
    XOXO_O__X: {};
    XOXO__O_X: {};
    XOXO___OX: {};
    XOXO____X: {};
    XOXO_____: {};
    XOXXOOX__: {};
    XOXXOOOXX: {};
    XOXXOOOX_: {};
    XOXXOOXXO: {};
    XOXXOO_XO: {};
    XOXXOO_X_: {};
    XOXXOOO_X: {};
    XOXXOO_OX: {};
    XOXXOO__X: {};
    XOXXOO___: {};
    XOXXOXOO_: {};
    XOXXOXOXO: {};
    XOXXOXO_O: {};
    XOXXOXO__: {};
    XOXXO_OXO: {};
    XOXXO_OX_: {};
    XOXXO_OOX: {};
    XOXXO_O_X: {};
    XOXXO_O__: {};
    XOXXO__O_: {};
    XOXXOX_OO: {};
    XOXXOX__O: {};
    XOXXO_X_O: {};
    XOXXO__XO: {};
    XOXXO___O: {};
    XOXXO____: {};
    XOX_OXOXO: {};
    XOX_OXOX_: {};
    XOX_OXO_X: {};
    XOX_OXO__: {};
    XOX_OX_O_: {};
    XOX_OXXOO: {};
    XOX_OXX_O: {};
    XOX_OX_XO: {};
    XOX_OX__O: {};
    XOX_OX___: {};
    XOX_OOXXO: {};
    XOX_OOXX_: {};
    XOX_OOXOX: {};
    XOX_OOX_X: {};
    XOX_OOX__: {};
    XOX_O_XO_: {};
    XOX_O_XXO: {};
    XOX_O_X_O: {};
    XOX_O_X__: {};
    XOX_OOOXX: {};
    XOX_OO_XX: {};
    XOX_OO_X_: {};
    XOX_O_OXX: {};
    XOX_O_OX_: {};
    XOX_O__XO: {};
    XOX_O__X_: {};
    XOX_OO__X: {};
    XOX_O_O_X: {};
    XOX_O__OX: {};
    XOX_O___X: {};
    XOX_O____: {};
    XOXXXOOOX: {};
    XOXXXOOO_: {};
    XOXXXOOXO: {};
    XOXXXOO_O: {};
    XOXXXOO__: {};
    XOXX_OOXO: {};
    XOXX_OOX_: {};
    XOXX_OOOX: {};
    XOXX_OO_X: {};
    XOXX_OO__: {};
    XOXXXOXOO: {};
    XOXXXO_OO: {};
    XOXXXO_O_: {};
    XOXX_OXO_: {};
    XOXX_O_OX: {};
    XOXX_O_O_: {};
    XOXXXO__O: {};
    XOXX_OX_O: {};
    XOXX_O_XO: {};
    XOXX_O__O: {};
    XOXX_O___: {};
    XOX_XOOXO: {};
    XOX_XOOX_: {};
    XOX_XOO_X: {};
    XOX_XOO__: {};
    XOX_XOXO_: {};
    XOX_XO_OX: {};
    XOX_XO_O_: {};
    XOX_XOX_O: {};
    XOX_XO_XO: {};
    XOX_XO__O: {};
    XOX_XO___: {};
    XOX__OXOX: {};
    XOX__OXO_: {};
    XOX__OXXO: {};
    XOX__OX_O: {};
    XOX__OX__: {};
    XOX__OOXX: {};
    XOX__OOX_: {};
    XOX__O_XO: {};
    XOX__O_X_: {};
    XOX__OO_X: {};
    XOX__O_OX: {};
    XOX__O__X: {};
    XOX__O___: {};
    XOXXX_OOO: {};
    XOXXX_OO_: {};
    XOXX_XOOO: {};
    XOXX_XOO_: {};
    XOXX__OOX: {};
    XOXX__OO_: {};
    XOXXX_O_O: {};
    XOXX_XO_O: {};
    XOXX__OXO: {};
    XOXX__O_O: {};
    XOXX__O__: {};
    XOX_XXOOO: {};
    XOX_XXOO_: {};
    XOX_X_OOX: {};
    XOX_X_OO_: {};
    XOX_XXO_O: {};
    XOX_X_OXO: {};
    XOX_X_O_O: {};
    XOX_X_O__: {};
    XOX__XOOX: {};
    XOX__XOO_: {};
    XOX__XOXO: {};
    XOX__XO_O: {};
    XOX__XO__: {};
    XOX___OXO: {};
    XOX___OX_: {};
    XOX___OOX: {};
    XOX___O_X: {};
    XOX___O__: {};
    XOXXX__OO: {};
    XOXX_X_OO: {};
    XOXX__XOO: {};
    XOXX___OO: {};
    XOXX___O_: {};
    XOX_XX_OO: {};
    XOX_X_XOO: {};
    XOX_X__OO: {};
    XOX_X__O_: {};
    XOX__XXOO: {};
    XOX__X_OO: {};
    XOX__X_O_: {};
    XOX___XOO: {};
    XOX___XO_: {};
    XOX____OX: {};
    XOX____O_: {};
    XOXX____O: {};
    XOX_X___O: {};
    XOX__X__O: {};
    XOX___X_O: {};
    XOX____XO: {};
    XOX_____O: {};
    XOX______: {};
    XOOXXOX__: {};
    XOOXXOOXX: {};
    XOOXXOOX_: {};
    XOOXXO_XO: {};
    XOOXXO_X_: {};
    XOOXXO__X: {};
    XOOXXO___: {};
    XOOXXXO__: {};
    XOOXXXOXO: {};
    XOOXX_OXO: {};
    XOOXX_OX_: {};
    XOOXX_O_X: {};
    XOOXX_O__: {};
    XOOXXX_O_: {};
    XOOXX_XO_: {};
    XOOXX__OX: {};
    XOOXX__O_: {};
    XOOXXX__O: {};
    XOOXX_X_O: {};
    XOOXX__XO: {};
    XOOXX___O: {};
    XOOXX____: {};
    XOOXOXX__: {};
    XOOXOXOX_: {};
    XOOXOXXXO: {};
    XOOXOX_XO: {};
    XOOXOX_X_: {};
    XOOXOXO_X: {};
    XOOXOX_OX: {};
    XOOXOX__X: {};
    XOOXOX___: {};
    XOOX_XOXO: {};
    XOOX_XOX_: {};
    XOOXXXOOX: {};
    XOOX_XOOX: {};
    XOOX_XO_X: {};
    XOOX_XO__: {};
    XOOX_XXO_: {};
    XOOX_X_OX: {};
    XOOX_X_O_: {};
    XOOX_XX_O: {};
    XOOX_X_XO: {};
    XOOX_X__O: {};
    XOOX_X___: {};
    XOOX__X__: {};
    XOOXO_XX_: {};
    XOOXOOXXX: {};
    XOOXOO_XX: {};
    XOOXO_OXX: {};
    XOOXO__XX: {};
    XOOXO__X_: {};
    XOOX_OXX_: {};
    XOOX_OOXX: {};
    XOOX_O_XX: {};
    XOOX_O_X_: {};
    XOOX__OXX: {};
    XOOX__OX_: {};
    XOOX__XXO: {};
    XOOX___XO: {};
    XOOX___X_: {};
    XOOXO_X_X: {};
    XOOXO___X: {};
    XOOX_OX_X: {};
    XOOX_O__X: {};
    XOOX__O_X: {};
    XOOX__XOX: {};
    XOOX___OX: {};
    XOOX____X: {};
    XOOX_____: {};
    XO_XOXOXO: {};
    XO_XOXOX_: {};
    XO_XOXOOX: {};
    XO_XOXO_X: {};
    XO_XOXO__: {};
    XO_XOX_O_: {};
    XO_XOXX_O: {};
    XO_XOX_XO: {};
    XO_XOX__O: {};
    XO_XOX___: {};
    XO_XO_X__: {};
    XO_XOOXX_: {};
    XO_XOOOXX: {};
    XO_XOO_XX: {};
    XO_XOO_X_: {};
    XO_XO_OXX: {};
    XO_XO_OX_: {};
    XO_XO_XXO: {};
    XO_XO__XO: {};
    XO_XO__X_: {};
    XO_XOOX_X: {};
    XO_XOO__X: {};
    XO_XO_O_X: {};
    XO_XO__OX: {};
    XO_XO___X: {};
    XO_XO____: {};
    XO_XXOOXO: {};
    XO_XXOOX_: {};
    XO_XXOO_X: {};
    XO_XXOO__: {};
    XO_XXOXO_: {};
    XO_XXO_OX: {};
    XO_XXO_O_: {};
    XO_XXOX_O: {};
    XO_XXO_XO: {};
    XO_XXO__O: {};
    XO_XXO___: {};
    XO_X_OX__: {};
    XO_X_OOXX: {};
    XO_X_OOX_: {};
    XO_X_OXXO: {};
    XO_X_O_XO: {};
    XO_X_O_X_: {};
    XO_X_OO_X: {};
    XO_X_OXOX: {};
    XO_X_O_OX: {};
    XO_X_O__X: {};
    XO_X_O___: {};
    XO_XXXOO_: {};
    XO_XX_OOX: {};
    XO_XX_OO_: {};
    XO_XXXO_O: {};
    XO_XX_OXO: {};
    XO_XX_O_O: {};
    XO_XX_O__: {};
    XO_X_XOOX: {};
    XO_X_XOO_: {};
    XO_X_XOXO: {};
    XO_X_XO_O: {};
    XO_X_XO__: {};
    XO_X__OXO: {};
    XO_X__OX_: {};
    XO_X__OOX: {};
    XO_X__O_X: {};
    XO_X__O__: {};
    XO_XXX_OO: {};
    XO_XX_XOO: {};
    XO_XX__OO: {};
    XO_XX__O_: {};
    XO_X_XXOO: {};
    XO_X_X_OO: {};
    XO_X_X_O_: {};
    XO_X__XO_: {};
    XO_X___OX: {};
    XO_X___O_: {};
    XO_XX___O: {};
    XO_X_X__O: {};
    XO_X__X_O: {};
    XO_X___XO: {};
    XO_X____O: {};
    XO_X_____: {};
    XOOOXXXOX: {};
    XOOOXXXO_: {};
    XOOOXXXXO: {};
    XOOOXXX_O: {};
    XOOOXXX__: {};
    XOOOXXOXX: {};
    XOOOXXOX_: {};
    XOOOXX_XO: {};
    XOOOXX_X_: {};
    XOOOXX__X: {};
    XOOOXX___: {};
    XOO_XXOXO: {};
    XOO_XXOX_: {};
    XOO_XXO_X: {};
    XOO_XXO__: {};
    XOOXXXXOO: {};
    XOO_XXXOO: {};
    XOO_XXXO_: {};
    XOO_XX_OX: {};
    XOO_XX_O_: {};
    XOO_XXX_O: {};
    XOO_XX_XO: {};
    XOO_XX__O: {};
    XOO_XX___: {};
    XOOOXOXXX: {};
    XOOOXOXX_: {};
    XOOOX_XXO: {};
    XOOOX_XX_: {};
    XOOOX_X_X: {};
    XOOOX_X__: {};
    XOO_XOXXO: {};
    XOO_XOXX_: {};
    XOO_XOX_X: {};
    XOO_XOX__: {};
    XOO_X_XOX: {};
    XOO_X_XO_: {};
    XOO_X_XXO: {};
    XOO_X_X_O: {};
    XOO_X_X__: {};
    XOOOX__XX: {};
    XOOOX__X_: {};
    XOO_XO_XX: {};
    XOO_XO_X_: {};
    XOO_X_OXX: {};
    XOO_X_OX_: {};
    XOO_X__XO: {};
    XOO_X__X_: {};
    XOO_X___X: {};
    XOO_X____: {};
    XO_OXXOXO: {};
    XO_OXXOX_: {};
    XO_OXXO_X: {};
    XO_OXXO__: {};
    XO_OXXXOO: {};
    XO_OXXXO_: {};
    XO_OXX_OX: {};
    XO_OXX_O_: {};
    XO_OXXX_O: {};
    XO_OXX_XO: {};
    XO_OXX__O: {};
    XO_OXX___: {};
    XO_OXOXXO: {};
    XO_OXOXX_: {};
    XO_OXOX_X: {};
    XO_OXOX__: {};
    XO_OX_XOX: {};
    XO_OX_XO_: {};
    XO_OX_XXO: {};
    XO_OX_X_O: {};
    XO_OX_X__: {};
    XO_OXO_XX: {};
    XO_OXO_X_: {};
    XO_OX_OXX: {};
    XO_OX_OX_: {};
    XO_OX__XO: {};
    XO_OX__X_: {};
    XO_OX___X: {};
    XO_OX____: {};
    XO__XOXOX: {};
    XO__XOXO_: {};
    XO__XOXXO: {};
    XO__XOX_O: {};
    XO__XOX__: {};
    XO__XOOXX: {};
    XO__XOOX_: {};
    XO__XO_XO: {};
    XO__XO_X_: {};
    XO__XO__X: {};
    XO__XO___: {};
    XO__XXOOX: {};
    XO__XXOO_: {};
    XO__XXOXO: {};
    XO__XXO_O: {};
    XO__XXO__: {};
    XO__X_OXO: {};
    XO__X_OX_: {};
    XO__X_O_X: {};
    XO__X_O__: {};
    XO__XXXOO: {};
    XO__XX_OO: {};
    XO__XX_O_: {};
    XO__X_XOO: {};
    XO__X_XO_: {};
    XO__X__OX: {};
    XO__X__O_: {};
    XO__XX__O: {};
    XO__X_X_O: {};
    XO__X__XO: {};
    XO__X___O: {};
    XO__X____: {};
    XOOOOXXXX: {};
    XOOOOXXX_: {};
    XOOO_XXXO: {};
    XOOO_XXX_: {};
    XOOOOXX_X: {};
    XOOO_XXOX: {};
    XOOO_XX_X: {};
    XOOO_XX__: {};
    XOO_OXXXO: {};
    XOO_OXXX_: {};
    XOO_OXXOX: {};
    XOO_OXX_X: {};
    XOO_OXX__: {};
    XOO__XXOX: {};
    XOO__XXO_: {};
    XOO__XXXO: {};
    XOO__XX_O: {};
    XOO__XX__: {};
    XOOOOX_XX: {};
    XOOO_XOXX: {};
    XOOO_X_XX: {};
    XOOO_X_X_: {};
    XOO_OXOXX: {};
    XOO_OX_XX: {};
    XOO_OX_X_: {};
    XOO__XOXX: {};
    XOO__XOX_: {};
    XOO__X_XO: {};
    XOO__X_X_: {};
    XOOO_X__X: {};
    XOO_OX__X: {};
    XOO__XO_X: {};
    XOO__X_OX: {};
    XOO__X__X: {};
    XOO__X___: {};
    XO_OOXXXO: {};
    XO_OOXXX_: {};
    XO_OOXXOX: {};
    XO_OOXX_X: {};
    XO_OOXX__: {};
    XO_O_XXOX: {};
    XO_O_XXO_: {};
    XO_O_XXXO: {};
    XO_O_XX_O: {};
    XO_O_XX__: {};
    XO_OOXOXX: {};
    XO_OOX_XX: {};
    XO_OOX_X_: {};
    XO_O_XOXX: {};
    XO_O_XOX_: {};
    XO_O_X_XO: {};
    XO_O_X_X_: {};
    XO_OOX__X: {};
    XO_O_XO_X: {};
    XO_O_X_OX: {};
    XO_O_X__X: {};
    XO_O_X___: {};
    XO__OXXO_: {};
    XO__OXXXO: {};
    XO__OXX_O: {};
    XO__OXX__: {};
    XO__OXOXX: {};
    XO__OXOX_: {};
    XO__OX_XO: {};
    XO__OX_X_: {};
    XO__OXO_X: {};
    XO__OX_OX: {};
    XO__OX__X: {};
    XO__OX___: {};
    XO___XOXO: {};
    XO___XOX_: {};
    XO___XOOX: {};
    XO___XO_X: {};
    XO___XO__: {};
    XO___XXOO: {};
    XO___XXO_: {};
    XO___X_OX: {};
    XO___X_O_: {};
    XO___XX_O: {};
    XO___X_XO: {};
    XO___X__O: {};
    XO___X___: {};
    XOOO__XXX: {};
    XOOO__XX_: {};
    XOO_O_XXX: {};
    XOO_O_XX_: {};
    XOO__OXXX: {};
    XOO__OXX_: {};
    XOO___XXO: {};
    XOO___XX_: {};
    XOOO__X_X: {};
    XOO_O_X_X: {};
    XOO__OX_X: {};
    XOO___XOX: {};
    XOO___X_X: {};
    XOO___X__: {};
    XO_OO_XXX: {};
    XO_OO_XX_: {};
    XO_O_OXXX: {};
    XO_O_OXX_: {};
    XO_O__XXO: {};
    XO_O__XX_: {};
    XO_OO_X_X: {};
    XO_O_OX_X: {};
    XO_O__XOX: {};
    XO_O__X_X: {};
    XO_O__X__: {};
    XO__OOXXX: {};
    XO__OOXX_: {};
    XO__O_XXO: {};
    XO__O_XX_: {};
    XO__OOX_X: {};
    XO__O_XOX: {};
    XO__O_X_X: {};
    XO__O_X__: {};
    XO___OXXO: {};
    XO___OXX_: {};
    XO___OXOX: {};
    XO___OX_X: {};
    XO___OX__: {};
    XO____XOX: {};
    XO____XO_: {};
    XO____XXO: {};
    XO____X_O: {};
    XO____X__: {};
    XOOO___XX: {};
    XOO_O__XX: {};
    XOO__O_XX: {};
    XOO___OXX: {};
    XOO____XX: {};
    XOO____X_: {};
    XO_OO__XX: {};
    XO_O_O_XX: {};
    XO_O__OXX: {};
    XO_O___XX: {};
    XO_O___X_: {};
    XO__OO_XX: {};
    XO__O_OXX: {};
    XO__O__XX: {};
    XO__O__X_: {};
    XO___OOXX: {};
    XO___O_XX: {};
    XO___O_X_: {};
    XO____OXX: {};
    XO____OX_: {};
    XO_____XO: {};
    XO_____X_: {};
    XOO_____X: {};
    XO_O____X: {};
    XO__O___X: {};
    XO___O__X: {};
    XO____O_X: {};
    XO_____OX: {};
    XO______X: {};
    XO_______: {};
    XXOOXOXOX: {};
    XXOOXOXO_: {};
    XXOOXOX_O: {};
    XXOOXOX__: {};
    XXOOXO_X_: {};
    XXOOXO__X: {};
    XXOOXO___: {};
    XXOOXXOOX: {};
    XXOOXXOO_: {};
    XXOOXXOXO: {};
    XXOOXXO_O: {};
    XXOOXXO__: {};
    XXOOX_OX_: {};
    XXOOX_O_X: {};
    XXOOX_O__: {};
    XXOOXXXOO: {};
    XXOOXX_OO: {};
    XXOOXX_O_: {};
    XXOOX_XOO: {};
    XXOOX_XO_: {};
    XXOOX__OX: {};
    XXOOX__O_: {};
    XXOOXX__O: {};
    XXOOX_X_O: {};
    XXOOX__XO: {};
    XXOOX___O: {};
    XXOOX____: {};
    XXOOOXXOX: {};
    XXOOOXXO_: {};
    XXOOOXXXO: {};
    XXOOOXX_O: {};
    XXOOOXX__: {};
    XXOOOXOX_: {};
    XXOOOX_XO: {};
    XXOOOX_X_: {};
    XXOOOXO_X: {};
    XXOOOX_OX: {};
    XXOOOX__X: {};
    XXOOOX___: {};
    XXOO_XOXO: {};
    XXOO_XOX_: {};
    XXOO_XOOX: {};
    XXOO_XO_X: {};
    XXOO_XO__: {};
    XXOO_XXOO: {};
    XXOO_XXO_: {};
    XXOO_X_OX: {};
    XXOO_X_O_: {};
    XXOO_XX_O: {};
    XXOO_X_XO: {};
    XXOO_X__O: {};
    XXOO_X___: {};
    XXOOOOXX_: {};
    XXOOO_XXO: {};
    XXOOO_XX_: {};
    XXOOOOX_X: {};
    XXOOO_XOX: {};
    XXOOO_X_X: {};
    XXOOO_X__: {};
    XXOO_OXXO: {};
    XXOO_OXX_: {};
    XXOO_OXOX: {};
    XXOO_OX_X: {};
    XXOO_OX__: {};
    XXOO__XOX: {};
    XXOO__XO_: {};
    XXOO__XXO: {};
    XXOO__X_O: {};
    XXOO__X__: {};
    XXOOOO_XX: {};
    XXOOO_OXX: {};
    XXOOO__XX: {};
    XXOOO__X_: {};
    XXOOXOOXX: {};
    XXOO_OOXX: {};
    XXOO_O_XX: {};
    XXOO_O_X_: {};
    XXOO__OXX: {};
    XXOO__OX_: {};
    XXOO___XO: {};
    XXOO___X_: {};
    XXOOO___X: {};
    XXOO_O__X: {};
    XXOO__O_X: {};
    XXOO___OX: {};
    XXOO____X: {};
    XXOO_____: {};
    XXOXOOX__: {};
    XXOXOOOX_: {};
    XXOXOO_XO: {};
    XXOXOO_X_: {};
    XXOXOOO_X: {};
    XXOXOOXOX: {};
    XXOXOO_OX: {};
    XXOXOO__X: {};
    XXOXOO___: {};
    XXOXO_O__: {};
    XXOXOXOO_: {};
    XXOXOXXOO: {};
    XXOXOX_OO: {};
    XXOXOX_O_: {};
    XXOXO_XO_: {};
    XXOXO_OOX: {};
    XXOXO__OX: {};
    XXOXO__O_: {};
    XXOXOXO_O: {};
    XXOXOX__O: {};
    XXOXO_X_O: {};
    XXOXO_OXO: {};
    XXOXO__XO: {};
    XXOXO___O: {};
    XXOXO____: {};
    XXO_OXO__: {};
    XXO_OXXOO: {};
    XXO_OXXO_: {};
    XXO_OXOOX: {};
    XXO_OX_OX: {};
    XXO_OX_O_: {};
    XXO_OXX_O: {};
    XXO_OXOXO: {};
    XXO_OX_XO: {};
    XXO_OX__O: {};
    XXO_OX___: {};
    XXO_OOXXO: {};
    XXO_OOXX_: {};
    XXO_OOXOX: {};
    XXO_OOX_X: {};
    XXO_OOX__: {};
    XXO_O_XOX: {};
    XXO_O_XO_: {};
    XXO_O_XXO: {};
    XXO_O_X_O: {};
    XXO_O_X__: {};
    XXO_OOOXX: {};
    XXO_OO_XX: {};
    XXO_OO_X_: {};
    XXO_O_OX_: {};
    XXO_O__XO: {};
    XXO_O__X_: {};
    XXO_OO__X: {};
    XXO_O_O_X: {};
    XXO_O__OX: {};
    XXO_O___X: {};
    XXO_O____: {};
    XXOXXOOOX: {};
    XXOXXOOO_: {};
    XXOXXOO_O: {};
    XXOXXOO__: {};
    XXOX_OOXO: {};
    XXOX_OOX_: {};
    XXOX_OOOX: {};
    XXOX_OO_X: {};
    XXOX_OO__: {};
    XXOXXO_OO: {};
    XXOXXO_O_: {};
    XXOX_OXO_: {};
    XXOX_O_OX: {};
    XXOX_O_O_: {};
    XXOX_O__O: {};
    XXOX_O___: {};
    XXO_XOOX_: {};
    XXO_XOO_X: {};
    XXO_XOO__: {};
    XXO_XOXOO: {};
    XXO_XOXO_: {};
    XXO_XO_OX: {};
    XXO_XO_O_: {};
    XXO_XO__O: {};
    XXO_XO___: {};
    XXO__OXOX: {};
    XXO__OXO_: {};
    XXO__OX_O: {};
    XXO__OX__: {};
    XXO__OOXX: {};
    XXO__OOX_: {};
    XXO__O_XO: {};
    XXO__O_X_: {};
    XXO__OO_X: {};
    XXO__O_OX: {};
    XXO__O__X: {};
    XXO__O___: {};
    XXOXX_OOO: {};
    XXOXX_OO_: {};
    XXOX_XOOO: {};
    XXOX_XOO_: {};
    XXOX__OOX: {};
    XXOX__OO_: {};
    XXOXX_O_O: {};
    XXOX_XO_O: {};
    XXOX__OXO: {};
    XXOX__O_O: {};
    XXOX__O__: {};
    XXO_XXOOO: {};
    XXO_XXOO_: {};
    XXO_X_OOX: {};
    XXO_X_OO_: {};
    XXO_XXO_O: {};
    XXO_X_OXO: {};
    XXO_X_O_O: {};
    XXO_X_O__: {};
    XXO__XOOX: {};
    XXO__XOO_: {};
    XXO__XOXO: {};
    XXO__XO_O: {};
    XXO__XO__: {};
    XXO___OXO: {};
    XXO___OX_: {};
    XXO___OOX: {};
    XXO___O_X: {};
    XXO___O__: {};
    XXOXX__OO: {};
    XXOX_X_OO: {};
    XXOX__XOO: {};
    XXOX___OO: {};
    XXOX___O_: {};
    XXO_XX_OO: {};
    XXO_X_XOO: {};
    XXO_X__OO: {};
    XXO_X__O_: {};
    XXO__XXOO: {};
    XXO__X_OO: {};
    XXO__X_O_: {};
    XXO___XOO: {};
    XXO___XO_: {};
    XXO____OX: {};
    XXO____O_: {};
    XXOX____O: {};
    XXO_X___O: {};
    XXO__X__O: {};
    XXO___X_O: {};
    XXO____XO: {};
    XXO_____O: {};
    XXO______: {};
    X_OXOXO__: {};
    X_OXOXXO_: {};
    X_OXOXOOX: {};
    X_OXOX_OX: {};
    X_OXOX_O_: {};
    X_OXOXX_O: {};
    X_OXOXOXO: {};
    X_OXOX_XO: {};
    X_OXOX__O: {};
    X_OXOX___: {};
    X_OXO_X__: {};
    X_OXOOXX_: {};
    X_OXOOOXX: {};
    X_OXOO_XX: {};
    X_OXOO_X_: {};
    X_OXO_OX_: {};
    X_OXO_XXO: {};
    X_OXO__XO: {};
    X_OXO__X_: {};
    X_OXOOX_X: {};
    X_OXOO__X: {};
    X_OXO_O_X: {};
    X_OXO_XOX: {};
    X_OXO__OX: {};
    X_OXO___X: {};
    X_OXO____: {};
    X_OXXOOXO: {};
    X_OXXOOX_: {};
    X_OXXOO_X: {};
    X_OXXOO__: {};
    X_OXXOXO_: {};
    X_OXXO_OX: {};
    X_OXXO_O_: {};
    X_OXXO__O: {};
    X_OXXO___: {};
    X_OX_OX__: {};
    X_OX_OOXX: {};
    X_OX_OOX_: {};
    X_OX_O_XO: {};
    X_OX_O_X_: {};
    X_OX_OO_X: {};
    X_OX_OXOX: {};
    X_OX_O_OX: {};
    X_OX_O__X: {};
    X_OX_O___: {};
    X_OXXXOO_: {};
    X_OXX_OOX: {};
    X_OXX_OO_: {};
    X_OXXXO_O: {};
    X_OXX_OXO: {};
    X_OXX_O_O: {};
    X_OXX_O__: {};
    X_OX_XOOX: {};
    X_OX_XOO_: {};
    X_OX_XOXO: {};
    X_OX_XO_O: {};
    X_OX_XO__: {};
    X_OX__OXO: {};
    X_OX__OX_: {};
    X_OX__OOX: {};
    X_OX__O_X: {};
    X_OX__O__: {};
    X_OXXX_OO: {};
    X_OXX_XOO: {};
    X_OXX__OO: {};
    X_OXX__O_: {};
    X_OX_XXOO: {};
    X_OX_X_OO: {};
    X_OX_X_O_: {};
    X_OX__XO_: {};
    X_OX___OX: {};
    X_OX___O_: {};
    X_OXX___O: {};
    X_OX_X__O: {};
    X_OX__X_O: {};
    X_OX___XO: {};
    X_OX____O: {};
    X_OX_____: {};
    X_OOXXOXO: {};
    X_OOXXOX_: {};
    X_OOXXO_X: {};
    X_OOXXO__: {};
    X_OOXXXOO: {};
    X_OOXXXO_: {};
    X_OOXX_OX: {};
    X_OOXX_O_: {};
    X_OOXXX_O: {};
    X_OOXX_XO: {};
    X_OOXX__O: {};
    X_OOXX___: {};
    X_OOXOXXO: {};
    X_OOXOXX_: {};
    X_OOXOX_X: {};
    X_OOXOX__: {};
    X_OOX_XOX: {};
    X_OOX_XO_: {};
    X_OOX_XXO: {};
    X_OOX_X_O: {};
    X_OOX_X__: {};
    X_OOXO_XX: {};
    X_OOXO_X_: {};
    X_OOX_OXX: {};
    X_OOX_OX_: {};
    X_OOX__XO: {};
    X_OOX__X_: {};
    X_OOX___X: {};
    X_OOX____: {};
    X_O_XOXOX: {};
    X_O_XOXO_: {};
    X_O_XOX_O: {};
    X_O_XOX__: {};
    X_O_XOOXX: {};
    X_O_XOOX_: {};
    X_O_XO_XO: {};
    X_O_XO_X_: {};
    X_O_XO__X: {};
    X_O_XO___: {};
    X_O_XXOOX: {};
    X_O_XXOO_: {};
    X_O_XXOXO: {};
    X_O_XXO_O: {};
    X_O_XXO__: {};
    X_O_X_OXO: {};
    X_O_X_OX_: {};
    X_O_X_O_X: {};
    X_O_X_O__: {};
    X_O_XXXOO: {};
    X_O_XX_OO: {};
    X_O_XX_O_: {};
    X_O_X_XOO: {};
    X_O_X_XO_: {};
    X_O_X__OX: {};
    X_O_X__O_: {};
    X_O_XX__O: {};
    X_O_X_X_O: {};
    X_O_X__XO: {};
    X_O_X___O: {};
    X_O_X____: {};
    X_OOOXXXO: {};
    X_OOOXXX_: {};
    X_OOOXXOX: {};
    X_OOOXX_X: {};
    X_OOOXX__: {};
    X_OO_XXOX: {};
    X_OO_XXO_: {};
    X_OO_XXXO: {};
    X_OO_XX_O: {};
    X_OO_XX__: {};
    X_OOOXOXX: {};
    X_OOOX_XX: {};
    X_OOOX_X_: {};
    X_OO_XOXX: {};
    X_OO_XOX_: {};
    X_OO_X_XO: {};
    X_OO_X_X_: {};
    X_OOOX__X: {};
    X_OO_XO_X: {};
    X_OO_X_OX: {};
    X_OO_X__X: {};
    X_OO_X___: {};
    X_O_OXXOX: {};
    X_O_OXXO_: {};
    X_O_OXXXO: {};
    X_O_OXX_O: {};
    X_O_OXX__: {};
    X_O_OXOX_: {};
    X_O_OX_XO: {};
    X_O_OX_X_: {};
    X_O_OXO_X: {};
    X_O_OX_OX: {};
    X_O_OX__X: {};
    X_O_OX___: {};
    X_O__XOXO: {};
    X_O__XOX_: {};
    X_O__XOOX: {};
    X_O__XO_X: {};
    X_O__XO__: {};
    X_O__XXOO: {};
    X_O__XXO_: {};
    X_O__X_OX: {};
    X_O__X_O_: {};
    X_O__XX_O: {};
    X_O__X_XO: {};
    X_O__X__O: {};
    X_O__X___: {};
    X_OOO_XXX: {};
    X_OOO_XX_: {};
    X_OO_OXXX: {};
    X_OO_OXX_: {};
    X_OO__XXO: {};
    X_OO__XX_: {};
    X_OOO_X_X: {};
    X_OO_OX_X: {};
    X_OO__XOX: {};
    X_OO__X_X: {};
    X_OO__X__: {};
    X_O_OOXXX: {};
    X_O_OOXX_: {};
    X_O_O_XXO: {};
    X_O_O_XX_: {};
    X_O_OOX_X: {};
    X_O_O_XOX: {};
    X_O_O_X_X: {};
    X_O_O_X__: {};
    X_O__OXXO: {};
    X_O__OXX_: {};
    X_O__OXOX: {};
    X_O__OX_X: {};
    X_O__OX__: {};
    X_O___XOX: {};
    X_O___XO_: {};
    X_O___XXO: {};
    X_O___X_O: {};
    X_O___X__: {};
    X_OOO__XX: {};
    X_OO_O_XX: {};
    X_OO__OXX: {};
    X_OO___XX: {};
    X_OO___X_: {};
    X_O_OO_XX: {};
    X_O_O_OXX: {};
    X_O_O__XX: {};
    X_O_O__X_: {};
    X_O__OOXX: {};
    X_O__O_XX: {};
    X_O__O_X_: {};
    X_O___OXX: {};
    X_O___OX_: {};
    X_O____XO: {};
    X_O____X_: {};
    X_OO____X: {};
    X_O_O___X: {};
    X_O__O__X: {};
    X_O___O_X: {};
    X_O____OX: {};
    X_O_____X: {};
    X_O______: {};
    XXXOO____: {};
    XXXOOXO__: {};
    XXXOOXOXO: {};
    XX_OOXOXO: {};
    XX_OOXOX_: {};
    XXXOOXOOX: {};
    XX_OOXOOX: {};
    XX_OOXO_X: {};
    XX_OOXO__: {};
    XXXOOX_O_: {};
    XXXOOXXOO: {};
    XX_OOXXOO: {};
    XX_OOXXO_: {};
    XX_OOX_OX: {};
    XX_OOX_O_: {};
    XXXOOX__O: {};
    XX_OOXX_O: {};
    XX_OOX_XO: {};
    XX_OOX__O: {};
    XX_OOX___: {};
    XX_OOOX__: {};
    XXXOO_XO_: {};
    XX_OOOXOX: {};
    XX_OO_XOX: {};
    XX_OO_XO_: {};
    XXXOO_X_O: {};
    XX_OOOXXO: {};
    XX_OO_XXO: {};
    XX_OO_X_O: {};
    XX_OO_X__: {};
    XX_OOO_X_: {};
    XXXOO_OX_: {};
    XX_OOOOXX: {};
    XX_OO_OXX: {};
    XX_OO_OX_: {};
    XXXOO__XO: {};
    XX_OO__XO: {};
    XX_OO__X_: {};
    XX_OOO__X: {};
    XXXOO_O_X: {};
    XX_OO_O_X: {};
    XXXOO__OX: {};
    XX_OO__OX: {};
    XX_OO___X: {};
    XX_OO____: {};
    XXXO_O___: {};
    XXXOXOO__: {};
    XX_OXOOX_: {};
    XX_OXOO_X: {};
    XX_OXOO__: {};
    XXXOXO_O_: {};
    XXXOXOXOO: {};
    XX_OXOXOO: {};
    XX_OXOXO_: {};
    XX_OXO_OX: {};
    XX_OXO_O_: {};
    XXXOXO__O: {};
    XX_OXOX_O: {};
    XX_OXO_XO: {};
    XX_OXO__O: {};
    XX_OXO___: {};
    XXXO_OXO_: {};
    XX_O_OXOX: {};
    XX_O_OXO_: {};
    XXXO_OX_O: {};
    XX_O_OXXO: {};
    XX_O_OX_O: {};
    XX_O_OX__: {};
    XXXO_OOX_: {};
    XX_O_OOXX: {};
    XX_O_OOX_: {};
    XXXO_O_XO: {};
    XX_O_O_XO: {};
    XX_O_O_X_: {};
    XXXO_OO_X: {};
    XX_O_OO_X: {};
    XXXO_O_OX: {};
    XX_O_O_OX: {};
    XX_O_O__X: {};
    XX_O_O___: {};
    XXXO__O__: {};
    XXXOX_OO_: {};
    XX_OXXOOO: {};
    XX_OXXOO_: {};
    XX_OX_OOX: {};
    XX_OX_OO_: {};
    XXXOX_O_O: {};
    XX_OXXO_O: {};
    XX_OX_OXO: {};
    XX_OX_O_O: {};
    XX_OX_O__: {};
    XXXO_XOO_: {};
    XX_O_XOOX: {};
    XX_O_XOO_: {};
    XXXO_XO_O: {};
    XX_O_XOXO: {};
    XX_O_XO_O: {};
    XX_O_XO__: {};
    XXXO__OXO: {};
    XX_O__OXO: {};
    XX_O__OX_: {};
    XXXO__OOX: {};
    XX_O__OOX: {};
    XX_O__O_X: {};
    XX_O__O__: {};
    XXXO___O_: {};
    XXXOX__OO: {};
    XX_OXX_OO: {};
    XX_OX_XOO: {};
    XX_OX__OO: {};
    XX_OX__O_: {};
    XXXO_X_OO: {};
    XX_O_XXOO: {};
    XX_O_X_OO: {};
    XX_O_X_O_: {};
    XXXO__XOO: {};
    XX_O__XOO: {};
    XX_O__XO_: {};
    XX_O___OX: {};
    XX_O___O_: {};
    XXXO____O: {};
    XX_OX___O: {};
    XX_O_X__O: {};
    XX_O__X_O: {};
    XX_O___XO: {};
    XX_O____O: {};
    XX_O_____: {};
    X_XOOXOXO: {};
    X_XOOXOX_: {};
    X_XOOXO_X: {};
    X_XOOXO__: {};
    X_XOOXXOO: {};
    X_XOOXXO_: {};
    X_XOOX_OX: {};
    X_XOOX_O_: {};
    X_XOOXX_O: {};
    X_XOOX_XO: {};
    X_XOOX__O: {};
    X_XOOX___: {};
    X_XOOOX__: {};
    X_XOOOXOX: {};
    X_XOO_XOX: {};
    X_XOO_XO_: {};
    X_XOOOXXO: {};
    X_XOO_XXO: {};
    X_XOO_X_O: {};
    X_XOO_X__: {};
    X_XOOO_X_: {};
    X_XOOOOXX: {};
    X_XOO_OXX: {};
    X_XOO_OX_: {};
    X_XOO__XO: {};
    X_XOO__X_: {};
    X_XOOO__X: {};
    X_XOO_O_X: {};
    X_XOO__OX: {};
    X_XOO___X: {};
    X_XOO____: {};
    XXXOXOOXO: {};
    X_XOXOOXO: {};
    X_XOXOOX_: {};
    X_XOXOO_X: {};
    X_XOXOO__: {};
    X_XOXOXO_: {};
    X_XOXO_OX: {};
    X_XOXO_O_: {};
    X_XOXOX_O: {};
    X_XOXO_XO: {};
    X_XOXO__O: {};
    X_XOXO___: {};
    X_XO_OXOX: {};
    X_XO_OXO_: {};
    X_XO_OXXO: {};
    X_XO_OX_O: {};
    X_XO_OX__: {};
    X_XO_OOXX: {};
    X_XO_OOX_: {};
    X_XO_O_XO: {};
    X_XO_O_X_: {};
    X_XO_OO_X: {};
    X_XO_O_OX: {};
    X_XO_O__X: {};
    X_XO_O___: {};
    X_XOXXOOO: {};
    X_XOXXOO_: {};
    X_XOX_OOX: {};
    X_XOX_OO_: {};
    X_XOXXO_O: {};
    X_XOX_OXO: {};
    X_XOX_O_O: {};
    X_XOX_O__: {};
    X_XO_XOOX: {};
    X_XO_XOO_: {};
    X_XO_XOXO: {};
    X_XO_XO_O: {};
    X_XO_XO__: {};
    X_XO__OXO: {};
    X_XO__OX_: {};
    X_XO__OOX: {};
    X_XO__O_X: {};
    X_XO__O__: {};
    X_XOXX_OO: {};
    X_XOX_XOO: {};
    X_XOX__OO: {};
    X_XOX__O_: {};
    X_XO_XXOO: {};
    X_XO_X_OO: {};
    X_XO_X_O_: {};
    X_XO__XOO: {};
    X_XO__XO_: {};
    X_XO___OX: {};
    X_XO___O_: {};
    X_XOX___O: {};
    X_XO_X__O: {};
    X_XO__X_O: {};
    X_XO___XO: {};
    X_XO____O: {};
    X_XO_____: {};
    X__OXOXOX: {};
    X__OXOXO_: {};
    X__OXOXXO: {};
    X__OXOX_O: {};
    X__OXOX__: {};
    X__OXOOXX: {};
    X__OXOOX_: {};
    X__OXO_XO: {};
    X__OXO_X_: {};
    X__OXO__X: {};
    X__OXO___: {};
    X__OXXOOX: {};
    X__OXXOO_: {};
    X__OXXOXO: {};
    X__OXXO_O: {};
    X__OXXO__: {};
    X__OX_OXO: {};
    X__OX_OX_: {};
    X__OX_O_X: {};
    X__OX_O__: {};
    X__OXXXOO: {};
    X__OXX_OO: {};
    X__OXX_O_: {};
    X__OX_XOO: {};
    X__OX_XO_: {};
    X__OX__OX: {};
    X__OX__O_: {};
    X__OXX__O: {};
    X__OX_X_O: {};
    X__OX__XO: {};
    X__OX___O: {};
    X__OX____: {};
    X__OOXXOX: {};
    X__OOXXO_: {};
    X__OOXXXO: {};
    X__OOXX_O: {};
    X__OOXX__: {};
    X__OOXOXX: {};
    X__OOXOX_: {};
    X__OOX_XO: {};
    X__OOX_X_: {};
    X__OOXO_X: {};
    X__OOX_OX: {};
    X__OOX__X: {};
    X__OOX___: {};
    X__O_XOXO: {};
    X__O_XOX_: {};
    X__O_XOOX: {};
    X__O_XO_X: {};
    X__O_XO__: {};
    X__O_XXOO: {};
    X__O_XXO_: {};
    X__O_X_OX: {};
    X__O_X_O_: {};
    X__O_XX_O: {};
    X__O_X_XO: {};
    X__O_X__O: {};
    X__O_X___: {};
    X__OOOXX_: {};
    X__OO_XXO: {};
    X__OO_XX_: {};
    X__OOOX_X: {};
    X__OO_XOX: {};
    X__OO_X_X: {};
    X__OO_X__: {};
    X__O_OXXO: {};
    X__O_OXX_: {};
    X__O_OXOX: {};
    X__O_OX_X: {};
    X__O_OX__: {};
    X__O__XOX: {};
    X__O__XO_: {};
    X__O__XXO: {};
    X__O__X_O: {};
    X__O__X__: {};
    X__OOO_XX: {};
    X__OO_OXX: {};
    X__OO__XX: {};
    X__OO__X_: {};
    X__O_OOXX: {};
    X__O_O_XX: {};
    X__O_O_X_: {};
    X__O__OXX: {};
    X__O__OX_: {};
    X__O___XO: {};
    X__O___X_: {};
    X__OO___X: {};
    X__O_O__X: {};
    X__O__O_X: {};
    X__O___OX: {};
    X__O____X: {};
    X__O_____: {};
    XXX_OO___: {};
    XXXXOOO__: {};
    XXXXOOOXO: {};
    XX_XOOOXO: {};
    XX_XOOOX_: {};
    XXXXOOOOX: {};
    XX_XOOOOX: {};
    XX_XOOO_X: {};
    XX_XOOO__: {};
    XXXXOO_O_: {};
    XX_XOOXO_: {};
    XX_XOO_OX: {};
    XX_XOO_O_: {};
    XXXXOO__O: {};
    XX_XOOX_O: {};
    XX_XOO_XO: {};
    XX_XOO__O: {};
    XX_XOO___: {};
    XXX_OOXO_: {};
    XX__OOXOX: {};
    XX__OOXO_: {};
    XXX_OOX_O: {};
    XX__OOXXO: {};
    XX__OOX_O: {};
    XX__OOX__: {};
    XXX_OOOX_: {};
    XX__OOOXX: {};
    XX__OOOX_: {};
    XXX_OO_XO: {};
    XX__OO_XO: {};
    XX__OO_X_: {};
    XXX_OOO_X: {};
    XX__OOO_X: {};
    XXX_OO_OX: {};
    XX__OO_OX: {};
    XX__OO__X: {};
    XX__OO___: {};
    XXX_O_O__: {};
    XXXXO_OO_: {};
    XX_XOXOOO: {};
    XX_XOXOO_: {};
    XX_XO_OOX: {};
    XX_XO_OO_: {};
    XXXXO_O_O: {};
    XX_XOXO_O: {};
    XX_XO_OXO: {};
    XX_XO_O_O: {};
    XX_XO_O__: {};
    XXX_OXOO_: {};
    XX__OXOOX: {};
    XX__OXOO_: {};
    XXX_OXO_O: {};
    XX__OXOXO: {};
    XX__OXO_O: {};
    XX__OXO__: {};
    XXX_O_OXO: {};
    XX__O_OXO: {};
    XX__O_OX_: {};
    XXX_O_OOX: {};
    XX__O_OOX: {};
    XX__O_O_X: {};
    XX__O_O__: {};
    XXX_O__O_: {};
    XXXXO__OO: {};
    XX_XOX_OO: {};
    XX_XO_XOO: {};
    XX_XO__OO: {};
    XX_XO__O_: {};
    XXX_OX_OO: {};
    XX__OXXOO: {};
    XX__OX_OO: {};
    XX__OX_O_: {};
    XXX_O_XOO: {};
    XX__O_XOO: {};
    XX__O_XO_: {};
    XX__O__OX: {};
    XX__O__O_: {};
    XXX_O___O: {};
    XX_XO___O: {};
    XX__OX__O: {};
    XX__O_X_O: {};
    XX__O__XO: {};
    XX__O___O: {};
    XX__O____: {};
    X_XXOOOXO: {};
    X_XXOOOX_: {};
    X_XXOOOOX: {};
    X_XXOOO_X: {};
    X_XXOOO__: {};
    X_XXOOXO_: {};
    X_XXOO_OX: {};
    X_XXOO_O_: {};
    X_XXOOX_O: {};
    X_XXOO_XO: {};
    X_XXOO__O: {};
    X_XXOO___: {};
    X_X_OOXOX: {};
    X_X_OOXO_: {};
    X_X_OOXXO: {};
    X_X_OOX_O: {};
    X_X_OOX__: {};
    X_X_OOOXX: {};
    X_X_OOOX_: {};
    X_X_OO_XO: {};
    X_X_OO_X_: {};
    X_X_OOO_X: {};
    X_X_OO_OX: {};
    X_X_OO__X: {};
    X_X_OO___: {};
    X_XXOXOOO: {};
    X_XXOXOO_: {};
    X_XXO_OOX: {};
    X_XXO_OO_: {};
    X_XXOXO_O: {};
    X_XXO_OXO: {};
    X_XXO_O_O: {};
    X_XXO_O__: {};
    X_X_OXOOX: {};
    X_X_OXOO_: {};
    X_X_OXOXO: {};
    X_X_OXO_O: {};
    X_X_OXO__: {};
    X_X_O_OXO: {};
    X_X_O_OX_: {};
    X_X_O_OOX: {};
    X_X_O_O_X: {};
    X_X_O_O__: {};
    X_XXOX_OO: {};
    X_XXO_XOO: {};
    X_XXO__OO: {};
    X_XXO__O_: {};
    X_X_OXXOO: {};
    X_X_OX_OO: {};
    X_X_OX_O_: {};
    X_X_O_XOO: {};
    X_X_O_XO_: {};
    X_X_O__OX: {};
    X_X_O__O_: {};
    X_XXO___O: {};
    X_X_OX__O: {};
    X_X_O_X_O: {};
    X_X_O__XO: {};
    X_X_O___O: {};
    X_X_O____: {};
    X__XOOX__: {};
    X__XOOOXX: {};
    X__XOOOX_: {};
    X__XOOXXO: {};
    X__XOO_XO: {};
    X__XOO_X_: {};
    X__XOOO_X: {};
    X__XOOXOX: {};
    X__XOO_OX: {};
    X__XOO__X: {};
    X__XOO___: {};
    X__XOXOOX: {};
    X__XOXOO_: {};
    X__XOXOXO: {};
    X__XOXO_O: {};
    X__XOXO__: {};
    X__XO_OXO: {};
    X__XO_OX_: {};
    X__XO_OOX: {};
    X__XO_O_X: {};
    X__XO_O__: {};
    X__XOXXOO: {};
    X__XOX_OO: {};
    X__XOX_O_: {};
    X__XO_XO_: {};
    X__XO__OX: {};
    X__XO__O_: {};
    X__XOX__O: {};
    X__XO_X_O: {};
    X__XO__XO: {};
    X__XO___O: {};
    X__XO____: {};
    X___OXOXO: {};
    X___OXOX_: {};
    X___OXOOX: {};
    X___OXO_X: {};
    X___OXO__: {};
    X___OXXOO: {};
    X___OXXO_: {};
    X___OX_OX: {};
    X___OX_O_: {};
    X___OXX_O: {};
    X___OX_XO: {};
    X___OX__O: {};
    X___OX___: {};
    X___OOXXO: {};
    X___OOXX_: {};
    X___OOXOX: {};
    X___OOX_X: {};
    X___OOX__: {};
    X___O_XOX: {};
    X___O_XO_: {};
    X___O_XXO: {};
    X___O_X_O: {};
    X___O_X__: {};
    X___OOOXX: {};
    X___OO_XX: {};
    X___OO_X_: {};
    X___O_OXX: {};
    X___O_OX_: {};
    X___O__XO: {};
    X___O__X_: {};
    X___OO__X: {};
    X___O_O_X: {};
    X___O__OX: {};
    X___O___X: {};
    X___O____: {};
    XXX__OO__: {};
    XXXX_OOO_: {};
    XX_XXOOOO: {};
    XX_XXOOO_: {};
    XX_X_OOOX: {};
    XX_X_OOO_: {};
    XXXX_OO_O: {};
    XX_XXOO_O: {};
    XX_X_OOXO: {};
    XX_X_OO_O: {};
    XX_X_OO__: {};
    XXX_XOOO_: {};
    XX__XOOOX: {};
    XX__XOOO_: {};
    XXX_XOO_O: {};
    XX__XOOXO: {};
    XX__XOO_O: {};
    XX__XOO__: {};
    XXX__OOXO: {};
    XX___OOXO: {};
    XX___OOX_: {};
    XXX__OOOX: {};
    XX___OOOX: {};
    XX___OO_X: {};
    XX___OO__: {};
    XXX__O_O_: {};
    XXXX_O_OO: {};
    XX_XXO_OO: {};
    XX_X_OXOO: {};
    XX_X_O_OO: {};
    XX_X_O_O_: {};
    XXX_XO_OO: {};
    XX__XOXOO: {};
    XX__XO_OO: {};
    XX__XO_O_: {};
    XXX__OXOO: {};
    XX___OXOO: {};
    XX___OXO_: {};
    XX___O_OX: {};
    XX___O_O_: {};
    XXX__O__O: {};
    XX_X_O__O: {};
    XX__XO__O: {};
    XX___OX_O: {};
    XX___O_XO: {};
    XX___O__O: {};
    XX___O___: {};
    X_XXXOOOO: {};
    X_XXXOOO_: {};
    X_XX_OOOX: {};
    X_XX_OOO_: {};
    X_XXXOO_O: {};
    X_XX_OOXO: {};
    X_XX_OO_O: {};
    X_XX_OO__: {};
    X_X_XOOOX: {};
    X_X_XOOO_: {};
    X_X_XOOXO: {};
    X_X_XOO_O: {};
    X_X_XOO__: {};
    X_X__OOXO: {};
    X_X__OOX_: {};
    X_X__OOOX: {};
    X_X__OO_X: {};
    X_X__OO__: {};
    X_XXXO_OO: {};
    X_XX_OXOO: {};
    X_XX_O_OO: {};
    X_XX_O_O_: {};
    X_X_XOXOO: {};
    X_X_XO_OO: {};
    X_X_XO_O_: {};
    X_X__OXOO: {};
    X_X__OXO_: {};
    X_X__O_OX: {};
    X_X__O_O_: {};
    X_XX_O__O: {};
    X_X_XO__O: {};
    X_X__OX_O: {};
    X_X__O_XO: {};
    X_X__O__O: {};
    X_X__O___: {};
    X__XXOOOX: {};
    X__XXOOO_: {};
    X__XXOOXO: {};
    X__XXOO_O: {};
    X__XXOO__: {};
    X__X_OOXO: {};
    X__X_OOX_: {};
    X__X_OOOX: {};
    X__X_OO_X: {};
    X__X_OO__: {};
    X__XXOXOO: {};
    X__XXO_OO: {};
    X__XXO_O_: {};
    X__X_OXO_: {};
    X__X_O_OX: {};
    X__X_O_O_: {};
    X__XXO__O: {};
    X__X_OX_O: {};
    X__X_O_XO: {};
    X__X_O__O: {};
    X__X_O___: {};
    X___XOOXO: {};
    X___XOOX_: {};
    X___XOO_X: {};
    X___XOO__: {};
    X___XOXOO: {};
    X___XOXO_: {};
    X___XO_OX: {};
    X___XO_O_: {};
    X___XOX_O: {};
    X___XO_XO: {};
    X___XO__O: {};
    X___XO___: {};
    X____OXOX: {};
    X____OXO_: {};
    X____OXXO: {};
    X____OX_O: {};
    X____OX__: {};
    X____OOXX: {};
    X____OOX_: {};
    X____O_XO: {};
    X____O_X_: {};
    X____OO_X: {};
    X____O_OX: {};
    X____O__X: {};
    X____O___: {};
    XXX___OO_: {};
    XX_X__OOO: {};
    XX_X__OO_: {};
    XX__X_OOO: {};
    XX__X_OO_: {};
    XX___XOOO: {};
    XX___XOO_: {};
    XX____OOX: {};
    XX____OO_: {};
    XXX___O_O: {};
    XX_X__O_O: {};
    XX__X_O_O: {};
    XX___XO_O: {};
    XX____OXO: {};
    XX____O_O: {};
    XX____O__: {};
    X_XX__OOO: {};
    X_XX__OO_: {};
    X_X_X_OOO: {};
    X_X_X_OO_: {};
    X_X__XOOO: {};
    X_X__XOO_: {};
    X_X___OOX: {};
    X_X___OO_: {};
    X_XX__O_O: {};
    X_X_X_O_O: {};
    X_X__XO_O: {};
    X_X___OXO: {};
    X_X___O_O: {};
    X_X___O__: {};
    X__XX_OOO: {};
    X__XX_OO_: {};
    X__X_XOOO: {};
    X__X_XOO_: {};
    X__X__OOX: {};
    X__X__OO_: {};
    X__XX_O_O: {};
    X__X_XO_O: {};
    X__X__OXO: {};
    X__X__O_O: {};
    X__X__O__: {};
    X___XXOOO: {};
    X___XXOO_: {};
    X___X_OOX: {};
    X___X_OO_: {};
    X___XXO_O: {};
    X___X_OXO: {};
    X___X_O_O: {};
    X___X_O__: {};
    X____XOOX: {};
    X____XOO_: {};
    X____XOXO: {};
    X____XO_O: {};
    X____XO__: {};
    X_____OXO: {};
    X_____OX_: {};
    X_____OOX: {};
    X_____O_X: {};
    X_____O__: {};
    XXX____OO: {};
    XX_X___OO: {};
    XX__X__OO: {};
    XX___X_OO: {};
    XX____XOO: {};
    XX_____OO: {};
    XX_____O_: {};
    X_XX___OO: {};
    X_X_X__OO: {};
    X_X__X_OO: {};
    X_X___XOO: {};
    X_X____OO: {};
    X_X____O_: {};
    X__XX__OO: {};
    X__X_X_OO: {};
    X__X__XOO: {};
    X__X___OO: {};
    X__X___O_: {};
    X___XX_OO: {};
    X___X_XOO: {};
    X___X__OO: {};
    X___X__O_: {};
    X____XXOO: {};
    X____X_OO: {};
    X____X_O_: {};
    X_____XOO: {};
    X_____XO_: {};
    X______OX: {};
    X______O_: {};
    XX______O: {};
    X_X_____O: {};
    X__X____O: {};
    X___X___O: {};
    X____X__O: {};
    X_____X_O: {};
    X______XO: {};
    X_______O: {};
    X________: {};
    OXXOXOX__: {};
    OXXOXO_X_: {};
    OXXOXOO_X: {};
    OXXOXOXOX: {};
    OXXOXO_OX: {};
    OXXOXO__X: {};
    OXXOXO___: {};
    OXXOX_O__: {};
    OXXOXXOO_: {};
    OXXOXXXOO: {};
    OXXOXX_OO: {};
    OXXOXX_O_: {};
    OXXOX_XO_: {};
    OXXOX_OOX: {};
    OXXOX__OX: {};
    OXXOX__O_: {};
    OXXOXXO_O: {};
    OXXOXX__O: {};
    OXXOX_X_O: {};
    OXXOX__XO: {};
    OXXOX___O: {};
    OXXOX____: {};
    OXXOOXXOX: {};
    OXXOOXXO_: {};
    OXXOOXX_O: {};
    OXXOOXX__: {};
    OXXOOXOX_: {};
    OXXOOX_XO: {};
    OXXOOX_X_: {};
    OXXOOX__X: {};
    OXXOOX___: {};
    OXXO_XO__: {};
    OXXO_XXOO: {};
    OXXO_XXO_: {};
    OXXO_X_OX: {};
    OXXO_X_O_: {};
    OXXO_XX_O: {};
    OXXO_XOXO: {};
    OXXO_X_XO: {};
    OXXO_X__O: {};
    OXXO_X___: {};
    OXXOOOXX_: {};
    OXXOO_XXO: {};
    OXXOO_XX_: {};
    OXXOOOX_X: {};
    OXXOO_XOX: {};
    OXXOO_X_X: {};
    OXXOO_X__: {};
    OXXOXOXXO: {};
    OXXO_OXXO: {};
    OXXO_OXX_: {};
    OXXO_OXOX: {};
    OXXO_OX_X: {};
    OXXO_OX__: {};
    OXXO__XOX: {};
    OXXO__XO_: {};
    OXXO__XXO: {};
    OXXO__X_O: {};
    OXXO__X__: {};
    OXXOOO_XX: {};
    OXXOO_OXX: {};
    OXXOO__XX: {};
    OXXOO__X_: {};
    OXXO_OOXX: {};
    OXXO_O_XX: {};
    OXXO_O_X_: {};
    OXXO__OX_: {};
    OXXO___XO: {};
    OXXO___X_: {};
    OXXOO___X: {};
    OXXO_O__X: {};
    OXXO__O_X: {};
    OXXO___OX: {};
    OXXO____X: {};
    OXXO_____: {};
    OXXXOOXOX: {};
    OXXXOOXO_: {};
    OXXXOOX_O: {};
    OXXXOOX__: {};
    OXXXOOOXX: {};
    OXXXOOOX_: {};
    OXXXOO_XO: {};
    OXXXOO_X_: {};
    OXXXOOO_X: {};
    OXXXOO_OX: {};
    OXXXOO__X: {};
    OXXXOO___: {};
    OXXXOXOOX: {};
    OXXXOXOO_: {};
    OXXXOXO_O: {};
    OXXXOXO__: {};
    OXXXO_OXO: {};
    OXXXO_OX_: {};
    OXXXO_OOX: {};
    OXXXO_O_X: {};
    OXXXO_O__: {};
    OXXXOX_OO: {};
    OXXXOX_O_: {};
    OXXXO_XOO: {};
    OXXXO_XO_: {};
    OXXXO__OX: {};
    OXXXO__O_: {};
    OXXXO___O: {};
    OXXXO____: {};
    OXX_OXOXO: {};
    OXX_OXOX_: {};
    OXX_OXO_X: {};
    OXX_OXO__: {};
    OXX_OXXOO: {};
    OXX_OXXO_: {};
    OXX_OX_OX: {};
    OXX_OX_O_: {};
    OXX_OX__O: {};
    OXX_OX___: {};
    OXX_OOXXO: {};
    OXX_OOXX_: {};
    OXX_OOXOX: {};
    OXX_OOX_X: {};
    OXX_OOX__: {};
    OXX_O_XOX: {};
    OXX_O_XO_: {};
    OXX_O_X_O: {};
    OXX_O_X__: {};
    OXX_OOOXX: {};
    OXX_OO_XX: {};
    OXX_OO_X_: {};
    OXX_O_OXX: {};
    OXX_O_OX_: {};
    OXX_O__XO: {};
    OXX_O__X_: {};
    OXX_OO__X: {};
    OXX_O_O_X: {};
    OXX_O__OX: {};
    OXX_O___X: {};
    OXX_O____: {};
    OXXXXOOOX: {};
    OXXXXOOO_: {};
    OXXXXOOXO: {};
    OXXXXOO_O: {};
    OXXXXOO__: {};
    OXXX_OOXO: {};
    OXXX_OOX_: {};
    OXXX_OOOX: {};
    OXXX_OO_X: {};
    OXXX_OO__: {};
    OXXXXOXOO: {};
    OXXXXO_OO: {};
    OXXXXO_O_: {};
    OXXX_OXOO: {};
    OXXX_OXO_: {};
    OXXX_O_OX: {};
    OXXX_O_O_: {};
    OXXXXO__O: {};
    OXXX_OX_O: {};
    OXXX_O_XO: {};
    OXXX_O__O: {};
    OXXX_O___: {};
    OXX_XOOX_: {};
    OXX_XOOOX: {};
    OXX_XOO_X: {};
    OXX_XOO__: {};
    OXX_XOXO_: {};
    OXX_XO_OX: {};
    OXX_XO_O_: {};
    OXX_XOX_O: {};
    OXX_XO_XO: {};
    OXX_XO__O: {};
    OXX_XO___: {};
    OXX__OXOX: {};
    OXX__OXO_: {};
    OXX__OXXO: {};
    OXX__OX_O: {};
    OXX__OX__: {};
    OXX__OOXX: {};
    OXX__OOX_: {};
    OXX__O_XO: {};
    OXX__O_X_: {};
    OXX__OO_X: {};
    OXX__O_OX: {};
    OXX__O__X: {};
    OXX__O___: {};
    OXXXX_OOO: {};
    OXXXX_OO_: {};
    OXXX_XOOO: {};
    OXXX_XOO_: {};
    OXXX__OOX: {};
    OXXX__OO_: {};
    OXXXX_O_O: {};
    OXXX_XO_O: {};
    OXXX__OXO: {};
    OXXX__O_O: {};
    OXXX__O__: {};
    OXX_XXOOO: {};
    OXX_XXOO_: {};
    OXX_X_OOX: {};
    OXX_X_OO_: {};
    OXX_XXO_O: {};
    OXX_X_OXO: {};
    OXX_X_O_O: {};
    OXX_X_O__: {};
    OXX__XOOX: {};
    OXX__XOO_: {};
    OXX__XOXO: {};
    OXX__XO_O: {};
    OXX__XO__: {};
    OXX___OXO: {};
    OXX___OX_: {};
    OXX___OOX: {};
    OXX___O_X: {};
    OXX___O__: {};
    OXXXX__OO: {};
    OXXX_X_OO: {};
    OXXX__XOO: {};
    OXXX___OO: {};
    OXXX___O_: {};
    OXX_XX_OO: {};
    OXX_X_XOO: {};
    OXX_X__OO: {};
    OXX_X__O_: {};
    OXX__XXOO: {};
    OXX__X_OO: {};
    OXX__X_O_: {};
    OXX___XOO: {};
    OXX___XO_: {};
    OXX____OX: {};
    OXX____O_: {};
    OXXX____O: {};
    OXX_X___O: {};
    OXX__X__O: {};
    OXX___X_O: {};
    OXX____XO: {};
    OXX_____O: {};
    OXX______: {};
    OXOXXOXOX: {};
    OXOXXOXO_: {};
    OXOXXOX_O: {};
    OXOXXOX__: {};
    OXOXXO_X_: {};
    OXOXXOOXX: {};
    OXOXXOO_X: {};
    OXOXXO_OX: {};
    OXOXXO__X: {};
    OXOXXO___: {};
    OXOXXXO__: {};
    OXOXX_OX_: {};
    OXOXXXOOX: {};
    OXOXX_OOX: {};
    OXOXX_O_X: {};
    OXOXX_O__: {};
    OXOXXX_O_: {};
    OXOXXXXOO: {};
    OXOXX_XOO: {};
    OXOXX_XO_: {};
    OXOXX__OX: {};
    OXOXX__O_: {};
    OXOXXX__O: {};
    OXOXX_X_O: {};
    OXOXX__XO: {};
    OXOXX___O: {};
    OXOXX____: {};
    OXOXOXXOX: {};
    OXOXOXXO_: {};
    OXOXOXX_O: {};
    OXOXOXX__: {};
    OXOXOXOX_: {};
    OXOXOX_XO: {};
    OXOXOX_X_: {};
    OXOXOXO_X: {};
    OXOXOX_OX: {};
    OXOXOX__X: {};
    OXOXOX___: {};
    OXOXXXOXO: {};
    OXOX_XOXO: {};
    OXOX_XOX_: {};
    OXOX_XOOX: {};
    OXOX_XO_X: {};
    OXOX_XO__: {};
    OXOX_XXOO: {};
    OXOX_XXO_: {};
    OXOX_X_OX: {};
    OXOX_X_O_: {};
    OXOX_XX_O: {};
    OXOX_X_XO: {};
    OXOX_X__O: {};
    OXOX_X___: {};
    OXOXOOXXX: {};
    OXOXOOXX_: {};
    OXOXO_XXO: {};
    OXOXO_XX_: {};
    OXOXOOX_X: {};
    OXOXO_XOX: {};
    OXOXO_X_X: {};
    OXOXO_X__: {};
    OXOX_OXXO: {};
    OXOX_OXX_: {};
    OXOX_OXOX: {};
    OXOX_OX_X: {};
    OXOX_OX__: {};
    OXOX__XOX: {};
    OXOX__XO_: {};
    OXOX__XXO: {};
    OXOX__X_O: {};
    OXOX__X__: {};
    OXOXOO_XX: {};
    OXOXO_OXX: {};
    OXOXO__XX: {};
    OXOXO__X_: {};
    OXOX_OOXX: {};
    OXOX_O_XX: {};
    OXOX_O_X_: {};
    OXOX__OXX: {};
    OXOX__OX_: {};
    OXOX___XO: {};
    OXOX___X_: {};
    OXOXO___X: {};
    OXOX_O__X: {};
    OXOX__O_X: {};
    OXOX___OX: {};
    OXOX____X: {};
    OXOX_____: {};
    OX_XOXOXO: {};
    OX_XOXOX_: {};
    OX_XOXOOX: {};
    OX_XOXO_X: {};
    OX_XOXO__: {};
    OX_XOXXOO: {};
    OX_XOXXO_: {};
    OX_XOX_OX: {};
    OX_XOX_O_: {};
    OX_XOX__O: {};
    OX_XOX___: {};
    OX_XOOXXO: {};
    OX_XOOXX_: {};
    OX_XOOXOX: {};
    OX_XOOX_X: {};
    OX_XOOX__: {};
    OX_XO_XOX: {};
    OX_XO_XO_: {};
    OX_XO_X_O: {};
    OX_XO_X__: {};
    OX_XOOOXX: {};
    OX_XOO_XX: {};
    OX_XOO_X_: {};
    OX_XO_OXX: {};
    OX_XO_OX_: {};
    OX_XO__XO: {};
    OX_XO__X_: {};
    OX_XOO__X: {};
    OX_XO_O_X: {};
    OX_XO__OX: {};
    OX_XO___X: {};
    OX_XO____: {};
    OX_XXOOX_: {};
    OX_XXOOOX: {};
    OX_XXOO_X: {};
    OX_XXOO__: {};
    OX_XXOXOO: {};
    OX_XXOXO_: {};
    OX_XXO_OX: {};
    OX_XXO_O_: {};
    OX_XXOX_O: {};
    OX_XXO_XO: {};
    OX_XXO__O: {};
    OX_XXO___: {};
    OX_X_OXOX: {};
    OX_X_OXO_: {};
    OX_X_OXXO: {};
    OX_X_OX_O: {};
    OX_X_OX__: {};
    OX_X_OOXX: {};
    OX_X_OOX_: {};
    OX_X_O_XO: {};
    OX_X_O_X_: {};
    OX_X_OO_X: {};
    OX_X_O_OX: {};
    OX_X_O__X: {};
    OX_X_O___: {};
    OX_XXXOO_: {};
    OX_XX_OOX: {};
    OX_XX_OO_: {};
    OX_XXXO_O: {};
    OX_XX_OXO: {};
    OX_XX_O_O: {};
    OX_XX_O__: {};
    OX_X_XOOX: {};
    OX_X_XOO_: {};
    OX_X_XOXO: {};
    OX_X_XO_O: {};
    OX_X_XO__: {};
    OX_X__OXO: {};
    OX_X__OX_: {};
    OX_X__OOX: {};
    OX_X__O_X: {};
    OX_X__O__: {};
    OX_XXX_OO: {};
    OX_XX_XOO: {};
    OX_XX__OO: {};
    OX_XX__O_: {};
    OX_X_XXOO: {};
    OX_X_X_OO: {};
    OX_X_X_O_: {};
    OX_X__XOO: {};
    OX_X__XO_: {};
    OX_X___OX: {};
    OX_X___O_: {};
    OX_XX___O: {};
    OX_X_X__O: {};
    OX_X__X_O: {};
    OX_X___XO: {};
    OX_X____O: {};
    OX_X_____: {};
    OXOOXXXOX: {};
    OXOOXXXO_: {};
    OXOOXXXXO: {};
    OXOOXXX_O: {};
    OXOOXXX__: {};
    OXOOXX_X_: {};
    OXOOXXO_X: {};
    OXOOXX_OX: {};
    OXOOXX__X: {};
    OXOOXX___: {};
    OXO_XXOX_: {};
    OXO_XXOOX: {};
    OXO_XXO_X: {};
    OXO_XXO__: {};
    OXO_XXXOO: {};
    OXO_XXXO_: {};
    OXO_XX_OX: {};
    OXO_XX_O_: {};
    OXO_XXX_O: {};
    OXO_XX_XO: {};
    OXO_XX__O: {};
    OXO_XX___: {};
    OXOOX_XX_: {};
    OXOOXOXXX: {};
    OXOOXOX_X: {};
    OXOOX_XOX: {};
    OXOOX_X_X: {};
    OXOOX_X__: {};
    OXO_XOXX_: {};
    OXO_XOXOX: {};
    OXO_XOX_X: {};
    OXO_XOX__: {};
    OXO_X_XOX: {};
    OXO_X_XO_: {};
    OXO_X_XXO: {};
    OXO_X_X_O: {};
    OXO_X_X__: {};
    OXO_X__X_: {};
    OXOOX__XX: {};
    OXOOX___X: {};
    OXO_XO_XX: {};
    OXO_XO__X: {};
    OXO_X_OXX: {};
    OXO_X_O_X: {};
    OXO_X__OX: {};
    OXO_X___X: {};
    OXO_X____: {};
    OX_OXXO__: {};
    OX_OXXXOO: {};
    OX_OXXXO_: {};
    OX_OXXOOX: {};
    OX_OXX_OX: {};
    OX_OXX_O_: {};
    OX_OXXX_O: {};
    OX_OXX_XO: {};
    OX_OXX__O: {};
    OX_OXX___: {};
    OX_OXOXX_: {};
    OX_OXOXOX: {};
    OX_OXOX_X: {};
    OX_OXOX__: {};
    OX_OX_XOX: {};
    OX_OX_XO_: {};
    OX_OX_XXO: {};
    OX_OX_X_O: {};
    OX_OX_X__: {};
    OX_OX__X_: {};
    OX_OXO_XX: {};
    OX_OXO__X: {};
    OX_OX_O_X: {};
    OX_OX__OX: {};
    OX_OX___X: {};
    OX_OX____: {};
    OX__XOXOX: {};
    OX__XOXO_: {};
    OX__XOXXO: {};
    OX__XOX_O: {};
    OX__XOX__: {};
    OX__XO_X_: {};
    OX__XOOXX: {};
    OX__XOO_X: {};
    OX__XO_OX: {};
    OX__XO__X: {};
    OX__XO___: {};
    OX__XXOOX: {};
    OX__XXOO_: {};
    OX__XXOXO: {};
    OX__XXO_O: {};
    OX__XXO__: {};
    OX__X_OX_: {};
    OX__X_OOX: {};
    OX__X_O_X: {};
    OX__X_O__: {};
    OX__XXXOO: {};
    OX__XX_OO: {};
    OX__XX_O_: {};
    OX__X_XOO: {};
    OX__X_XO_: {};
    OX__X__OX: {};
    OX__X__O_: {};
    OX__XX__O: {};
    OX__X_X_O: {};
    OX__X__XO: {};
    OX__X___O: {};
    OX__X____: {};
    OXOOOXXXX: {};
    OXOOOXXX_: {};
    OXOO_XXXO: {};
    OXOO_XXX_: {};
    OXOOOXX_X: {};
    OXOO_XXOX: {};
    OXOO_XX_X: {};
    OXOO_XX__: {};
    OXO_OXXXO: {};
    OXO_OXXX_: {};
    OXO_OXXOX: {};
    OXO_OXX_X: {};
    OXO_OXX__: {};
    OXO__XXOX: {};
    OXO__XXO_: {};
    OXO__XXXO: {};
    OXO__XX_O: {};
    OXO__XX__: {};
    OXOOOX_XX: {};
    OXOO_XOXX: {};
    OXOO_X_XX: {};
    OXOO_X_X_: {};
    OXO_OXOXX: {};
    OXO_OX_XX: {};
    OXO_OX_X_: {};
    OXO__XOXX: {};
    OXO__XOX_: {};
    OXO__X_XO: {};
    OXO__X_X_: {};
    OXOO_X__X: {};
    OXO_OX__X: {};
    OXO__XO_X: {};
    OXO__X_OX: {};
    OXO__X__X: {};
    OXO__X___: {};
    OX_OOXXXO: {};
    OX_OOXXX_: {};
    OX_OOXXOX: {};
    OX_OOXX_X: {};
    OX_OOXX__: {};
    OX_O_XXOX: {};
    OX_O_XXO_: {};
    OX_O_XXXO: {};
    OX_O_XX_O: {};
    OX_O_XX__: {};
    OX_OOXOXX: {};
    OX_OOX_XX: {};
    OX_OOX_X_: {};
    OX_O_XOX_: {};
    OX_O_X_XO: {};
    OX_O_X_X_: {};
    OX_OOX__X: {};
    OX_O_XO_X: {};
    OX_O_X_OX: {};
    OX_O_X__X: {};
    OX_O_X___: {};
    OX__OXXOX: {};
    OX__OXXO_: {};
    OX__OXX_O: {};
    OX__OXX__: {};
    OX__OXOXX: {};
    OX__OXOX_: {};
    OX__OX_XO: {};
    OX__OX_X_: {};
    OX__OXO_X: {};
    OX__OX_OX: {};
    OX__OX__X: {};
    OX__OX___: {};
    OX___XOXO: {};
    OX___XOX_: {};
    OX___XOOX: {};
    OX___XO_X: {};
    OX___XO__: {};
    OX___XXOO: {};
    OX___XXO_: {};
    OX___X_OX: {};
    OX___X_O_: {};
    OX___XX_O: {};
    OX___X_XO: {};
    OX___X__O: {};
    OX___X___: {};
    OXOO__XXX: {};
    OXOO__XX_: {};
    OXO_O_XXX: {};
    OXO_O_XX_: {};
    OXO__OXXX: {};
    OXO__OXX_: {};
    OXO___XXO: {};
    OXO___XX_: {};
    OXOO__X_X: {};
    OXO_O_X_X: {};
    OXO__OX_X: {};
    OXO___XOX: {};
    OXO___X_X: {};
    OXO___X__: {};
    OX_OO_XXX: {};
    OX_OO_XX_: {};
    OX_O_OXXX: {};
    OX_O_OXX_: {};
    OX_O__XXO: {};
    OX_O__XX_: {};
    OX_OO_X_X: {};
    OX_O_OX_X: {};
    OX_O__XOX: {};
    OX_O__X_X: {};
    OX_O__X__: {};
    OX__OOXXX: {};
    OX__OOXX_: {};
    OX__O_XXO: {};
    OX__O_XX_: {};
    OX__OOX_X: {};
    OX__O_XOX: {};
    OX__O_X_X: {};
    OX__O_X__: {};
    OX___OXXO: {};
    OX___OXX_: {};
    OX___OXOX: {};
    OX___OX_X: {};
    OX___OX__: {};
    OX____XOX: {};
    OX____XO_: {};
    OX____XXO: {};
    OX____X_O: {};
    OX____X__: {};
    OXOO___XX: {};
    OXO_O__XX: {};
    OXO__O_XX: {};
    OXO___OXX: {};
    OXO____XX: {};
    OXO____X_: {};
    OX_OO__XX: {};
    OX_O_O_XX: {};
    OX_O__OXX: {};
    OX_O___XX: {};
    OX_O___X_: {};
    OX__OO_XX: {};
    OX__O_OXX: {};
    OX__O__XX: {};
    OX__O__X_: {};
    OX___OOXX: {};
    OX___O_XX: {};
    OX___O_X_: {};
    OX____OXX: {};
    OX____OX_: {};
    OX_____XO: {};
    OX_____X_: {};
    OXO_____X: {};
    OX_O____X: {};
    OX__O___X: {};
    OX___O__X: {};
    OX____O_X: {};
    OX_____OX: {};
    OX______X: {};
    OX_______: {};
    _XOXOXO__: {};
    _XOXOXXOO: {};
    _XOXOXXO_: {};
    _XOXOXOOX: {};
    _XOXOX_OX: {};
    _XOXOX_O_: {};
    _XOXOXX_O: {};
    _XOXOXOXO: {};
    _XOXOX_XO: {};
    _XOXOX__O: {};
    _XOXOX___: {};
    _XOXOOXXO: {};
    _XOXOOXX_: {};
    _XOXOOXOX: {};
    _XOXOOX_X: {};
    _XOXOOX__: {};
    _XOXO_XOX: {};
    _XOXO_XO_: {};
    _XOXO_XXO: {};
    _XOXO_X_O: {};
    _XOXO_X__: {};
    _XOXOOOXX: {};
    _XOXOO_XX: {};
    _XOXOO_X_: {};
    _XOXO_OX_: {};
    _XOXO__XO: {};
    _XOXO__X_: {};
    _XOXOO__X: {};
    _XOXO_O_X: {};
    _XOXO__OX: {};
    _XOXO___X: {};
    _XOXO____: {};
    _XOXXOOX_: {};
    _XOXXOOOX: {};
    _XOXXOO_X: {};
    _XOXXOO__: {};
    _XOXXOXOO: {};
    _XOXXOXO_: {};
    _XOXXO_OX: {};
    _XOXXO_O_: {};
    _XOXXO__O: {};
    _XOXXO___: {};
    _XOX_OXOX: {};
    _XOX_OXO_: {};
    _XOX_OX_O: {};
    _XOX_OX__: {};
    _XOX_OOXX: {};
    _XOX_OOX_: {};
    _XOX_O_XO: {};
    _XOX_O_X_: {};
    _XOX_OO_X: {};
    _XOX_O_OX: {};
    _XOX_O__X: {};
    _XOX_O___: {};
    _XOXXXOO_: {};
    _XOXX_OOX: {};
    _XOXX_OO_: {};
    _XOXXXO_O: {};
    _XOXX_OXO: {};
    _XOXX_O_O: {};
    _XOXX_O__: {};
    _XOX_XOOX: {};
    _XOX_XOO_: {};
    _XOX_XOXO: {};
    _XOX_XO_O: {};
    _XOX_XO__: {};
    _XOX__OXO: {};
    _XOX__OX_: {};
    _XOX__OOX: {};
    _XOX__O_X: {};
    _XOX__O__: {};
    _XOXXX_OO: {};
    _XOXX_XOO: {};
    _XOXX__OO: {};
    _XOXX__O_: {};
    _XOX_XXOO: {};
    _XOX_X_OO: {};
    _XOX_X_O_: {};
    _XOX__XOO: {};
    _XOX__XO_: {};
    _XOX___OX: {};
    _XOX___O_: {};
    _XOXX___O: {};
    _XOX_X__O: {};
    _XOX__X_O: {};
    _XOX___XO: {};
    _XOX____O: {};
    _XOX_____: {};
    _XOOXXOX_: {};
    _XOOXXOOX: {};
    _XOOXXO_X: {};
    _XOOXXO__: {};
    _XOOXXXOO: {};
    _XOOXXXO_: {};
    _XOOXX_OX: {};
    _XOOXX_O_: {};
    _XOOXXX_O: {};
    _XOOXX_XO: {};
    _XOOXX__O: {};
    _XOOXX___: {};
    _XOOXOXX_: {};
    _XOOXOXOX: {};
    _XOOXOX_X: {};
    _XOOXOX__: {};
    _XOOX_XOX: {};
    _XOOX_XO_: {};
    _XOOX_XXO: {};
    _XOOX_X_O: {};
    _XOOX_X__: {};
    _XOOX__X_: {};
    _XOOXO_XX: {};
    _XOOXO__X: {};
    _XOOX_OXX: {};
    _XOOX_O_X: {};
    _XOOX__OX: {};
    _XOOX___X: {};
    _XOOX____: {};
    _XO_XOXOX: {};
    _XO_XOXO_: {};
    _XO_XOX_O: {};
    _XO_XOX__: {};
    _XO_XO_X_: {};
    _XO_XOOXX: {};
    _XO_XOO_X: {};
    _XO_XO_OX: {};
    _XO_XO__X: {};
    _XO_XO___: {};
    _XO_XXOOX: {};
    _XO_XXOO_: {};
    _XO_XXOXO: {};
    _XO_XXO_O: {};
    _XO_XXO__: {};
    _XO_X_OX_: {};
    _XO_X_OOX: {};
    _XO_X_O_X: {};
    _XO_X_O__: {};
    _XO_XXXOO: {};
    _XO_XX_OO: {};
    _XO_XX_O_: {};
    _XO_X_XOO: {};
    _XO_X_XO_: {};
    _XO_X__OX: {};
    _XO_X__O_: {};
    _XO_XX__O: {};
    _XO_X_X_O: {};
    _XO_X__XO: {};
    _XO_X___O: {};
    _XO_X____: {};
    _XOOOXXXO: {};
    _XOOOXXX_: {};
    _XOOOXXOX: {};
    _XOOOXX_X: {};
    _XOOOXX__: {};
    _XOO_XXOX: {};
    _XOO_XXO_: {};
    _XOO_XXXO: {};
    _XOO_XX_O: {};
    _XOO_XX__: {};
    _XOOOXOXX: {};
    _XOOOX_XX: {};
    _XOOOX_X_: {};
    _XOO_XOXX: {};
    _XOO_XOX_: {};
    _XOO_X_XO: {};
    _XOO_X_X_: {};
    _XOOOX__X: {};
    _XOO_XO_X: {};
    _XOO_X_OX: {};
    _XOO_X__X: {};
    _XOO_X___: {};
    _XO_OXXOX: {};
    _XO_OXXO_: {};
    _XO_OXXXO: {};
    _XO_OXX_O: {};
    _XO_OXX__: {};
    _XO_OXOX_: {};
    _XO_OX_XO: {};
    _XO_OX_X_: {};
    _XO_OXO_X: {};
    _XO_OX_OX: {};
    _XO_OX__X: {};
    _XO_OX___: {};
    _XO__XOXO: {};
    _XO__XOX_: {};
    _XO__XOOX: {};
    _XO__XO_X: {};
    _XO__XO__: {};
    _XO__XXOO: {};
    _XO__XXO_: {};
    _XO__X_OX: {};
    _XO__X_O_: {};
    _XO__XX_O: {};
    _XO__X_XO: {};
    _XO__X__O: {};
    _XO__X___: {};
    _XOOO_XXX: {};
    _XOOO_XX_: {};
    _XOO_OXXX: {};
    _XOO_OXX_: {};
    _XOO__XXO: {};
    _XOO__XX_: {};
    _XOOO_X_X: {};
    _XOO_OX_X: {};
    _XOO__XOX: {};
    _XOO__X_X: {};
    _XOO__X__: {};
    _XO_OOXXX: {};
    _XO_OOXX_: {};
    _XO_O_XXO: {};
    _XO_O_XX_: {};
    _XO_OOX_X: {};
    _XO_O_XOX: {};
    _XO_O_X_X: {};
    _XO_O_X__: {};
    _XO__OXXO: {};
    _XO__OXX_: {};
    _XO__OXOX: {};
    _XO__OX_X: {};
    _XO__OX__: {};
    _XO___XOX: {};
    _XO___XO_: {};
    _XO___XXO: {};
    _XO___X_O: {};
    _XO___X__: {};
    _XOOO__XX: {};
    _XOO_O_XX: {};
    _XOO__OXX: {};
    _XOO___XX: {};
    _XOO___X_: {};
    _XO_OO_XX: {};
    _XO_O_OXX: {};
    _XO_O__XX: {};
    _XO_O__X_: {};
    _XO__OOXX: {};
    _XO__O_XX: {};
    _XO__O_X_: {};
    _XO___OXX: {};
    _XO___OX_: {};
    _XO____XO: {};
    _XO____X_: {};
    _XOO____X: {};
    _XO_O___X: {};
    _XO__O__X: {};
    _XO___O_X: {};
    _XO____OX: {};
    _XO_____X: {};
    _XO______: {};
    _XXOOXOXO: {};
    _XXOOXOX_: {};
    _XXOOXO_X: {};
    _XXOOXO__: {};
    _XXOOXXOO: {};
    _XXOOXXO_: {};
    _XXOOX_OX: {};
    _XXOOX_O_: {};
    _XXOOXX_O: {};
    _XXOOX_XO: {};
    _XXOOX__O: {};
    _XXOOX___: {};
    _XXOOOX__: {};
    _XXOOOXOX: {};
    _XXOO_XOX: {};
    _XXOO_XO_: {};
    _XXOOOXXO: {};
    _XXOO_XXO: {};
    _XXOO_X_O: {};
    _XXOO_X__: {};
    _XXOOO_X_: {};
    _XXOOOOXX: {};
    _XXOO_OXX: {};
    _XXOO_OX_: {};
    _XXOO__XO: {};
    _XXOO__X_: {};
    _XXOOO__X: {};
    _XXOO_O_X: {};
    _XXOO__OX: {};
    _XXOO___X: {};
    _XXOO____: {};
    _XXOXOOX_: {};
    XXXOXOOOX: {};
    _XXOXOOOX: {};
    _XXOXOO_X: {};
    _XXOXOO__: {};
    _XXOXOXO_: {};
    _XXOXO_OX: {};
    _XXOXO_O_: {};
    _XXOXOX_O: {};
    _XXOXO_XO: {};
    _XXOXO__O: {};
    _XXOXO___: {};
    _XXO_OXOX: {};
    _XXO_OXO_: {};
    _XXO_OXXO: {};
    _XXO_OX_O: {};
    _XXO_OX__: {};
    _XXO_OOXX: {};
    _XXO_OOX_: {};
    _XXO_O_XO: {};
    _XXO_O_X_: {};
    _XXO_OO_X: {};
    _XXO_O_OX: {};
    _XXO_O__X: {};
    _XXO_O___: {};
    _XXOXXOOO: {};
    _XXOXXOO_: {};
    _XXOX_OOX: {};
    _XXOX_OO_: {};
    _XXOXXO_O: {};
    _XXOX_OXO: {};
    _XXOX_O_O: {};
    _XXOX_O__: {};
    _XXO_XOOX: {};
    _XXO_XOO_: {};
    _XXO_XOXO: {};
    _XXO_XO_O: {};
    _XXO_XO__: {};
    _XXO__OXO: {};
    _XXO__OX_: {};
    _XXO__OOX: {};
    _XXO__O_X: {};
    _XXO__O__: {};
    _XXOXX_OO: {};
    _XXOX_XOO: {};
    _XXOX__OO: {};
    _XXOX__O_: {};
    _XXO_XXOO: {};
    _XXO_X_OO: {};
    _XXO_X_O_: {};
    _XXO__XOO: {};
    _XXO__XO_: {};
    _XXO___OX: {};
    _XXO___O_: {};
    _XXOX___O: {};
    _XXO_X__O: {};
    _XXO__X_O: {};
    _XXO___XO: {};
    _XXO____O: {};
    _XXO_____: {};
    _X_OXOXOX: {};
    _X_OXOXO_: {};
    _X_OXOXXO: {};
    _X_OXOX_O: {};
    _X_OXOX__: {};
    _X_OXO_X_: {};
    _X_OXOOXX: {};
    _X_OXOO_X: {};
    _X_OXO_OX: {};
    _X_OXO__X: {};
    _X_OXO___: {};
    _X_OXXOOX: {};
    _X_OXXOO_: {};
    _X_OXXOXO: {};
    _X_OXXO_O: {};
    _X_OXXO__: {};
    _X_OX_OX_: {};
    _X_OX_OOX: {};
    _X_OX_O_X: {};
    _X_OX_O__: {};
    _X_OXXXOO: {};
    _X_OXX_OO: {};
    _X_OXX_O_: {};
    _X_OX_XOO: {};
    _X_OX_XO_: {};
    _X_OX__OX: {};
    _X_OX__O_: {};
    _X_OXX__O: {};
    _X_OX_X_O: {};
    _X_OX__XO: {};
    _X_OX___O: {};
    _X_OX____: {};
    _X_OOXXOX: {};
    _X_OOXXO_: {};
    _X_OOXXXO: {};
    _X_OOXX_O: {};
    _X_OOXX__: {};
    _X_OOXOXX: {};
    _X_OOXOX_: {};
    _X_OOX_XO: {};
    _X_OOX_X_: {};
    _X_OOXO_X: {};
    _X_OOX_OX: {};
    _X_OOX__X: {};
    _X_OOX___: {};
    _X_O_XOXO: {};
    _X_O_XOX_: {};
    _X_O_XOOX: {};
    _X_O_XO_X: {};
    _X_O_XO__: {};
    _X_O_XXOO: {};
    _X_O_XXO_: {};
    _X_O_X_OX: {};
    _X_O_X_O_: {};
    _X_O_XX_O: {};
    _X_O_X_XO: {};
    _X_O_X__O: {};
    _X_O_X___: {};
    _X_OOOXX_: {};
    _X_OO_XXO: {};
    _X_OO_XX_: {};
    _X_OOOX_X: {};
    _X_OO_XOX: {};
    _X_OO_X_X: {};
    _X_OO_X__: {};
    _X_O_OXXO: {};
    _X_O_OXX_: {};
    _X_O_OXOX: {};
    _X_O_OX_X: {};
    _X_O_OX__: {};
    _X_O__XOX: {};
    _X_O__XO_: {};
    _X_O__XXO: {};
    _X_O__X_O: {};
    _X_O__X__: {};
    _X_OOO_XX: {};
    _X_OO_OXX: {};
    _X_OO__XX: {};
    _X_OO__X_: {};
    _X_O_OOXX: {};
    _X_O_O_XX: {};
    _X_O_O_X_: {};
    _X_O__OXX: {};
    _X_O__OX_: {};
    _X_O___XO: {};
    _X_O___X_: {};
    _X_OO___X: {};
    _X_O_O__X: {};
    _X_O__O_X: {};
    _X_O___OX: {};
    _X_O____X: {};
    _X_O_____: {};
    _XXXOOOXO: {};
    _XXXOOOX_: {};
    _XXXOOOOX: {};
    _XXXOOO_X: {};
    _XXXOOO__: {};
    XXXXOOXOO: {};
    _XXXOOXOO: {};
    _XXXOOXO_: {};
    _XXXOO_OX: {};
    _XXXOO_O_: {};
    _XXXOOX_O: {};
    _XXXOO_XO: {};
    _XXXOO__O: {};
    _XXXOO___: {};
    _XX_OOXOX: {};
    _XX_OOXO_: {};
    _XX_OOXXO: {};
    _XX_OOX_O: {};
    _XX_OOX__: {};
    _XX_OOOXX: {};
    _XX_OOOX_: {};
    _XX_OO_XO: {};
    _XX_OO_X_: {};
    _XX_OOO_X: {};
    _XX_OO_OX: {};
    _XX_OO__X: {};
    _XX_OO___: {};
    _XXXOXOOO: {};
    _XXXOXOO_: {};
    _XXXO_OOX: {};
    _XXXO_OO_: {};
    _XXXOXO_O: {};
    _XXXO_OXO: {};
    _XXXO_O_O: {};
    _XXXO_O__: {};
    _XX_OXOOX: {};
    _XX_OXOO_: {};
    _XX_OXOXO: {};
    _XX_OXO_O: {};
    _XX_OXO__: {};
    _XX_O_OXO: {};
    _XX_O_OX_: {};
    _XX_O_OOX: {};
    _XX_O_O_X: {};
    _XX_O_O__: {};
    _XXXOX_OO: {};
    _XXXO_XOO: {};
    _XXXO__OO: {};
    _XXXO__O_: {};
    _XX_OXXOO: {};
    _XX_OX_OO: {};
    _XX_OX_O_: {};
    _XX_O_XOO: {};
    _XX_O_XO_: {};
    _XX_O__OX: {};
    _XX_O__O_: {};
    _XXXO___O: {};
    _XX_OX__O: {};
    _XX_O_X_O: {};
    _XX_O__XO: {};
    _XX_O___O: {};
    _XX_O____: {};
    _X_XOOXOX: {};
    _X_XOOXO_: {};
    _X_XOOXXO: {};
    _X_XOOX_O: {};
    _X_XOOX__: {};
    _X_XOOOXX: {};
    _X_XOOOX_: {};
    _X_XOO_XO: {};
    _X_XOO_X_: {};
    _X_XOOO_X: {};
    _X_XOO_OX: {};
    _X_XOO__X: {};
    _X_XOO___: {};
    _X_XOXOOX: {};
    _X_XOXOO_: {};
    _X_XOXOXO: {};
    _X_XOXO_O: {};
    _X_XOXO__: {};
    _X_XO_OXO: {};
    _X_XO_OX_: {};
    _X_XO_OOX: {};
    _X_XO_O_X: {};
    _X_XO_O__: {};
    _X_XOXXOO: {};
    _X_XOX_OO: {};
    _X_XOX_O_: {};
    _X_XO_XOO: {};
    _X_XO_XO_: {};
    _X_XO__OX: {};
    _X_XO__O_: {};
    _X_XOX__O: {};
    _X_XO_X_O: {};
    _X_XO__XO: {};
    _X_XO___O: {};
    _X_XO____: {};
    _X__OXOXO: {};
    _X__OXOX_: {};
    _X__OXOOX: {};
    _X__OXO_X: {};
    _X__OXO__: {};
    _X__OXXOO: {};
    _X__OXXO_: {};
    _X__OX_OX: {};
    _X__OX_O_: {};
    _X__OXX_O: {};
    _X__OX_XO: {};
    _X__OX__O: {};
    _X__OX___: {};
    _X__OOXXO: {};
    _X__OOXX_: {};
    _X__OOXOX: {};
    _X__OOX_X: {};
    _X__OOX__: {};
    _X__O_XOX: {};
    _X__O_XO_: {};
    _X__O_XXO: {};
    _X__O_X_O: {};
    _X__O_X__: {};
    _X__OOOXX: {};
    _X__OO_XX: {};
    _X__OO_X_: {};
    _X__O_OXX: {};
    _X__O_OX_: {};
    _X__O__XO: {};
    _X__O__X_: {};
    _X__OO__X: {};
    _X__O_O_X: {};
    _X__O__OX: {};
    _X__O___X: {};
    _X__O____: {};
    _XXXXOOOO: {};
    _XXXXOOO_: {};
    _XXX_OOOX: {};
    _XXX_OOO_: {};
    _XXXXOO_O: {};
    _XXX_OOXO: {};
    _XXX_OO_O: {};
    _XXX_OO__: {};
    _XX_XOOOX: {};
    _XX_XOOO_: {};
    _XX_XOOXO: {};
    _XX_XOO_O: {};
    _XX_XOO__: {};
    _XX__OOXO: {};
    _XX__OOX_: {};
    _XX__OOOX: {};
    _XX__OO_X: {};
    _XX__OO__: {};
    _XXXXO_OO: {};
    _XXX_OXOO: {};
    _XXX_O_OO: {};
    _XXX_O_O_: {};
    _XX_XOXOO: {};
    _XX_XO_OO: {};
    _XX_XO_O_: {};
    _XX__OXOO: {};
    _XX__OXO_: {};
    _XX__O_OX: {};
    _XX__O_O_: {};
    _XXX_O__O: {};
    _XX_XO__O: {};
    _XX__OX_O: {};
    _XX__O_XO: {};
    _XX__O__O: {};
    _XX__O___: {};
    _X_XXOOOX: {};
    _X_XXOOO_: {};
    _X_XXOOXO: {};
    _X_XXOO_O: {};
    _X_XXOO__: {};
    _X_X_OOXO: {};
    _X_X_OOX_: {};
    _X_X_OOOX: {};
    _X_X_OO_X: {};
    _X_X_OO__: {};
    _X_XXOXOO: {};
    _X_XXO_OO: {};
    _X_XXO_O_: {};
    _X_X_OXOO: {};
    _X_X_OXO_: {};
    _X_X_O_OX: {};
    _X_X_O_O_: {};
    _X_XXO__O: {};
    _X_X_OX_O: {};
    _X_X_O_XO: {};
    _X_X_O__O: {};
    _X_X_O___: {};
    _X__XOOX_: {};
    _X__XOOOX: {};
    _X__XOO_X: {};
    _X__XOO__: {};
    _X__XOXOO: {};
    _X__XOXO_: {};
    _X__XO_OX: {};
    _X__XO_O_: {};
    _X__XOX_O: {};
    _X__XO_XO: {};
    _X__XO__O: {};
    _X__XO___: {};
    _X___OXOX: {};
    _X___OXO_: {};
    _X___OXXO: {};
    _X___OX_O: {};
    _X___OX__: {};
    _X___OOXX: {};
    _X___OOX_: {};
    _X___O_XO: {};
    _X___O_X_: {};
    _X___OO_X: {};
    _X___O_OX: {};
    _X___O__X: {};
    _X___O___: {};
    _XXX__OOO: {};
    _XXX__OO_: {};
    _XX_X_OOO: {};
    _XX_X_OO_: {};
    _XX__XOOO: {};
    _XX__XOO_: {};
    _XX___OOX: {};
    _XX___OO_: {};
    _XXX__O_O: {};
    _XX_X_O_O: {};
    _XX__XO_O: {};
    _XX___OXO: {};
    _XX___O_O: {};
    _XX___O__: {};
    _X_XX_OOO: {};
    _X_XX_OO_: {};
    _X_X_XOOO: {};
    _X_X_XOO_: {};
    _X_X__OOX: {};
    _X_X__OO_: {};
    _X_XX_O_O: {};
    _X_X_XO_O: {};
    _X_X__OXO: {};
    _X_X__O_O: {};
    _X_X__O__: {};
    _X__XXOOO: {};
    _X__XXOO_: {};
    _X__X_OOX: {};
    _X__X_OO_: {};
    _X__XXO_O: {};
    _X__X_OXO: {};
    _X__X_O_O: {};
    _X__X_O__: {};
    _X___XOOX: {};
    _X___XOO_: {};
    _X___XOXO: {};
    _X___XO_O: {};
    _X___XO__: {};
    _X____OXO: {};
    _X____OX_: {};
    _X____OOX: {};
    _X____O_X: {};
    _X____O__: {};
    _XXX___OO: {};
    _XX_X__OO: {};
    _XX__X_OO: {};
    _XX___XOO: {};
    _XX____OO: {};
    _XX____O_: {};
    _X_XX__OO: {};
    _X_X_X_OO: {};
    _X_X__XOO: {};
    _X_X___OO: {};
    _X_X___O_: {};
    _X__XX_OO: {};
    _X__X_XOO: {};
    _X__X__OO: {};
    _X__X__O_: {};
    _X___XXOO: {};
    _X___X_OO: {};
    _X___X_O_: {};
    _X____XOO: {};
    _X____XO_: {};
    _X_____OX: {};
    _X_____O_: {};
    _XX_____O: {};
    _X_X____O: {};
    _X__X___O: {};
    _X___X__O: {};
    _X____X_O: {};
    _X_____XO: {};
    _X______O: {};
    _X_______: {};
    OOXXXOX__: {};
    OOXXXOOXX: {};
    OOXXXOOX_: {};
    OOXXXOXXO: {};
    OOXXXO_XO: {};
    OOXXXO_X_: {};
    OOXXXOO_X: {};
    OOXXXOXOX: {};
    OOXXXO_OX: {};
    OOXXXO__X: {};
    OOXXXO___: {};
    OOXXXXO__: {};
    OOXXXXOXO: {};
    OOXXX_OXO: {};
    OOXXX_OX_: {};
    OOXXXXOOX: {};
    OOXXX_OOX: {};
    OOXXX_O_X: {};
    OOXXX_O__: {};
    OOXXXX_O_: {};
    OOXXX_XO_: {};
    OOXXX__OX: {};
    OOXXX__O_: {};
    OOXXXX__O: {};
    OOXXX_X_O: {};
    OOXXX__XO: {};
    OOXXX___O: {};
    OOXXX____: {};
    OOXXOXXO_: {};
    OOXXOXX_O: {};
    OOXXOXX__: {};
    OOXXOXOXX: {};
    OOXXOXOX_: {};
    OOXXOX_XO: {};
    OOXXOX_X_: {};
    OOXXOX__X: {};
    OOXXOX___: {};
    OOXX_XOXO: {};
    OOXX_XOX_: {};
    OOXX_XO_X: {};
    OOXX_XO__: {};
    OOXXXXXOO: {};
    OOXX_XXOO: {};
    OOXX_XXO_: {};
    OOXX_X_OX: {};
    OOXX_X_O_: {};
    OOXX_XX_O: {};
    OOXX_X_XO: {};
    OOXX_X__O: {};
    OOXX_X___: {};
    OOXXOOXXX: {};
    OOXXOOXX_: {};
    OOXXO_XXO: {};
    OOXXO_XX_: {};
    OOXXOOX_X: {};
    OOXXO_XOX: {};
    OOXXO_X_X: {};
    OOXXO_X__: {};
    OOXX_OXXO: {};
    OOXX_OXX_: {};
    OOXX_OXOX: {};
    OOXX_OX_X: {};
    OOXX_OX__: {};
    OOXX__XOX: {};
    OOXX__XO_: {};
    OOXX__XXO: {};
    OOXX__X_O: {};
    OOXX__X__: {};
    OOXXOO_XX: {};
    OOXXO_OXX: {};
    OOXXO__XX: {};
    OOXXO__X_: {};
    OOXX_OOXX: {};
    OOXX_O_XX: {};
    OOXX_O_X_: {};
    OOXX__OXX: {};
    OOXX__OX_: {};
    OOXX___XO: {};
    OOXX___X_: {};
    OOXXO___X: {};
    OOXX_O__X: {};
    OOXX__O_X: {};
    OOXX___OX: {};
    OOXX____X: {};
    OOXX_____: {};
    O_XXOXOXO: {};
    O_XXOXOX_: {};
    O_XXOXO_X: {};
    O_XXOXO__: {};
    O_XXOXXOO: {};
    O_XXOXXO_: {};
    O_XXOX_OX: {};
    O_XXOX_O_: {};
    O_XXOX__O: {};
    O_XXOX___: {};
    O_XXOOXXO: {};
    O_XXOOXX_: {};
    O_XXOOXOX: {};
    O_XXOOX_X: {};
    O_XXOOX__: {};
    O_XXO_XOX: {};
    O_XXO_XO_: {};
    O_XXO_X_O: {};
    O_XXO_X__: {};
    O_XXOOOXX: {};
    O_XXOO_XX: {};
    O_XXOO_X_: {};
    O_XXO_OXX: {};
    O_XXO_OX_: {};
    O_XXO__XO: {};
    O_XXO__X_: {};
    O_XXOO__X: {};
    O_XXO_O_X: {};
    O_XXO__OX: {};
    O_XXO___X: {};
    O_XXO____: {};
    O_XXXOOXO: {};
    O_XXXOOX_: {};
    O_XXXOOOX: {};
    O_XXXOO_X: {};
    O_XXXOO__: {};
    O_XXXOXO_: {};
    O_XXXO_OX: {};
    O_XXXO_O_: {};
    O_XXXOX_O: {};
    O_XXXO_XO: {};
    O_XXXO__O: {};
    O_XXXO___: {};
    O_XX_OXOX: {};
    O_XX_OXO_: {};
    O_XX_OXXO: {};
    O_XX_OX_O: {};
    O_XX_OX__: {};
    O_XX_OOXX: {};
    O_XX_OOX_: {};
    O_XX_O_XO: {};
    O_XX_O_X_: {};
    O_XX_OO_X: {};
    O_XX_O_OX: {};
    O_XX_O__X: {};
    O_XX_O___: {};
    O_XXXXOO_: {};
    O_XXX_OOX: {};
    O_XXX_OO_: {};
    O_XXXXO_O: {};
    O_XXX_OXO: {};
    O_XXX_O_O: {};
    O_XXX_O__: {};
    O_XX_XOOX: {};
    O_XX_XOO_: {};
    O_XX_XOXO: {};
    O_XX_XO_O: {};
    O_XX_XO__: {};
    O_XX__OXO: {};
    O_XX__OX_: {};
    O_XX__OOX: {};
    O_XX__O_X: {};
    O_XX__O__: {};
    O_XXXX_OO: {};
    O_XXX_XOO: {};
    O_XXX__OO: {};
    O_XXX__O_: {};
    O_XX_XXOO: {};
    O_XX_X_OO: {};
    O_XX_X_O_: {};
    O_XX__XOO: {};
    O_XX__XO_: {};
    O_XX___OX: {};
    O_XX___O_: {};
    O_XXX___O: {};
    O_XX_X__O: {};
    O_XX__X_O: {};
    O_XX___XO: {};
    O_XX____O: {};
    O_XX_____: {};
    OOXOXXX__: {};
    OOXOXXOX_: {};
    OOXOXXXXO: {};
    OOXOXX_XO: {};
    OOXOXX_X_: {};
    OOXOXX__X: {};
    OOXOXX___: {};
    OOX_XXOXO: {};
    OOX_XXOX_: {};
    OOX_XXO_X: {};
    OOX_XXO__: {};
    OOX_XXXO_: {};
    OOX_XX_OX: {};
    OOX_XX_O_: {};
    OOX_XXX_O: {};
    OOX_XX_XO: {};
    OOX_XX__O: {};
    OOX_XX___: {};
    OOX_X_X__: {};
    OOXOX_XX_: {};
    OOXOXOXXX: {};
    OOXOXO_XX: {};
    OOXOX_OXX: {};
    OOXOX__XX: {};
    OOXOX__X_: {};
    OOX_XOXX_: {};
    OOX_XOOXX: {};
    OOX_XO_XX: {};
    OOX_XO_X_: {};
    OOX_X_OXX: {};
    OOX_X_OX_: {};
    OOX_X_XXO: {};
    OOX_X__XO: {};
    OOX_X__X_: {};
    OOXOX_X_X: {};
    OOXOX___X: {};
    OOX_XOX_X: {};
    OOX_XO__X: {};
    OOX_X_O_X: {};
    OOX_X_XOX: {};
    OOX_X__OX: {};
    OOX_X___X: {};
    OOX_X____: {};
    O_XOXXO__: {};
    O_XOXXXO_: {};
    O_XOXX_OX: {};
    O_XOXX_O_: {};
    O_XOXXX_O: {};
    O_XOXXOXO: {};
    O_XOXX_XO: {};
    O_XOXX__O: {};
    O_XOXX___: {};
    O_XOX_X__: {};
    O_XOXOXX_: {};
    O_XOXOOXX: {};
    O_XOXO_XX: {};
    O_XOXO_X_: {};
    O_XOX_OX_: {};
    O_XOX_XXO: {};
    O_XOX__XO: {};
    O_XOX__X_: {};
    O_XOXOX_X: {};
    O_XOXO__X: {};
    O_XOX_O_X: {};
    O_XOX_XOX: {};
    O_XOX__OX: {};
    O_XOX___X: {};
    O_XOX____: {};
    O_X_XOX__: {};
    O_X_XOOXX: {};
    O_X_XOOX_: {};
    O_X_XOXXO: {};
    O_X_XO_XO: {};
    O_X_XO_X_: {};
    O_X_XOO_X: {};
    O_X_XOXOX: {};
    O_X_XO_OX: {};
    O_X_XO__X: {};
    O_X_XO___: {};
    O_X_XXOOX: {};
    O_X_XXOO_: {};
    O_X_XXOXO: {};
    O_X_XXO_O: {};
    O_X_XXO__: {};
    O_X_X_OXO: {};
    O_X_X_OX_: {};
    O_X_X_OOX: {};
    O_X_X_O_X: {};
    O_X_X_O__: {};
    O_X_XXXOO: {};
    O_X_XX_OO: {};
    O_X_XX_O_: {};
    O_X_X_XO_: {};
    O_X_X__OX: {};
    O_X_X__O_: {};
    O_X_XX__O: {};
    O_X_X_X_O: {};
    O_X_X__XO: {};
    O_X_X___O: {};
    O_X_X____: {};
    OOXOOXXXX: {};
    OOXOOXXX_: {};
    OOXO_XXXO: {};
    OOXO_XXX_: {};
    OOXO_XX_X: {};
    OOXO_XX__: {};
    OOX_OXXXO: {};
    OOX_OXXX_: {};
    OOX_OXX_X: {};
    OOX_OXX__: {};
    OOX__XXOX: {};
    OOX__XXO_: {};
    OOX__XXXO: {};
    OOX__XX_O: {};
    OOX__XX__: {};
    OOXO_X_XX: {};
    OOXO_X_X_: {};
    OOX_OX_XX: {};
    OOX_OX_X_: {};
    OOX__XOXX: {};
    OOX__XOX_: {};
    OOX__X_XO: {};
    OOX__X_X_: {};
    OOX__X__X: {};
    OOX__X___: {};
    O_XOOXXXO: {};
    O_XOOXXX_: {};
    O_XOOXX_X: {};
    O_XOOXX__: {};
    O_XO_XXOX: {};
    O_XO_XXO_: {};
    O_XO_XXXO: {};
    O_XO_XX_O: {};
    O_XO_XX__: {};
    O_XOOX_XX: {};
    O_XOOX_X_: {};
    O_XO_XOX_: {};
    O_XO_X_XO: {};
    O_XO_X_X_: {};
    O_XO_X__X: {};
    O_XO_X___: {};
    O_X_OXXOX: {};
    O_X_OXXO_: {};
    O_X_OXX_O: {};
    O_X_OXX__: {};
    O_X_OXOXX: {};
    O_X_OXOX_: {};
    O_X_OX_XO: {};
    O_X_OX_X_: {};
    O_X_OX__X: {};
    O_X_OX___: {};
    O_X__XOXO: {};
    O_X__XOX_: {};
    O_X__XO_X: {};
    O_X__XO__: {};
    O_X__XXOO: {};
    O_X__XXO_: {};
    O_X__X_OX: {};
    O_X__X_O_: {};
    O_X__XX_O: {};
    O_X__X_XO: {};
    O_X__X__O: {};
    O_X__X___: {};
    OOXO__XXX: {};
    OOXO__XX_: {};
    OOX_O_XXX: {};
    OOX_O_XX_: {};
    OOX__OXXX: {};
    OOX__OXX_: {};
    OOX___XXO: {};
    OOX___XX_: {};
    OOXO__X_X: {};
    OOX_O_X_X: {};
    OOX__OX_X: {};
    OOX___XOX: {};
    OOX___X_X: {};
    OOX___X__: {};
    O_XOO_XXX: {};
    O_XOO_XX_: {};
    O_XO_OXXX: {};
    O_XO_OXX_: {};
    O_XO__XXO: {};
    O_XO__XX_: {};
    O_XOO_X_X: {};
    O_XO_OX_X: {};
    O_XO__XOX: {};
    O_XO__X_X: {};
    O_XO__X__: {};
    O_X_OOXXX: {};
    O_X_OOXX_: {};
    O_X_O_XXO: {};
    O_X_O_XX_: {};
    O_X_OOX_X: {};
    O_X_O_XOX: {};
    O_X_O_X_X: {};
    O_X_O_X__: {};
    O_X__OXXO: {};
    O_X__OXX_: {};
    O_X__OXOX: {};
    O_X__OX_X: {};
    O_X__OX__: {};
    O_X___XOX: {};
    O_X___XO_: {};
    O_X___XXO: {};
    O_X___X_O: {};
    O_X___X__: {};
    OOXO___XX: {};
    OOX_O__XX: {};
    OOX__O_XX: {};
    OOX___OXX: {};
    OOX____XX: {};
    OOX____X_: {};
    O_XOO__XX: {};
    O_XO_O_XX: {};
    O_XO__OXX: {};
    O_XO___XX: {};
    O_XO___X_: {};
    O_X_OO_XX: {};
    O_X_O_OXX: {};
    O_X_O__XX: {};
    O_X_O__X_: {};
    O_X__OOXX: {};
    O_X__O_XX: {};
    O_X__O_X_: {};
    O_X___OXX: {};
    O_X___OX_: {};
    O_X____XO: {};
    O_X____X_: {};
    OOX_____X: {};
    O_XO____X: {};
    O_X_O___X: {};
    O_X__O__X: {};
    O_X___O_X: {};
    O_X____OX: {};
    O_X_____X: {};
    O_X______: {};
    _OXXOXOXO: {};
    _OXXOXOX_: {};
    _OXXOXO_X: {};
    _OXXOXO__: {};
    _OXXOX_O_: {};
    _OXXOXXOO: {};
    _OXXOXX_O: {};
    _OXXOX_XO: {};
    _OXXOX__O: {};
    _OXXOX___: {};
    _OXXOOXXO: {};
    _OXXOOXX_: {};
    _OXXOOXOX: {};
    _OXXOOX_X: {};
    _OXXOOX__: {};
    _OXXO_XO_: {};
    _OXXO_XXO: {};
    _OXXO_X_O: {};
    _OXXO_X__: {};
    _OXXOOOXX: {};
    _OXXOO_XX: {};
    _OXXOO_X_: {};
    _OXXO_OXX: {};
    _OXXO_OX_: {};
    _OXXO__XO: {};
    _OXXO__X_: {};
    _OXXOO__X: {};
    _OXXO_O_X: {};
    _OXXO__OX: {};
    _OXXO___X: {};
    _OXXO____: {};
    _OXXXOOXO: {};
    _OXXXOOX_: {};
    _OXXXOOOX: {};
    _OXXXOO_X: {};
    _OXXXOO__: {};
    _OXXXOXO_: {};
    _OXXXO_OX: {};
    _OXXXO_O_: {};
    _OXXXOX_O: {};
    _OXXXO_XO: {};
    _OXXXO__O: {};
    _OXXXO___: {};
    _OXX_OXOX: {};
    _OXX_OXO_: {};
    _OXX_OXXO: {};
    _OXX_OX_O: {};
    _OXX_OX__: {};
    _OXX_OOXX: {};
    _OXX_OOX_: {};
    _OXX_O_XO: {};
    _OXX_O_X_: {};
    _OXX_OO_X: {};
    _OXX_O_OX: {};
    _OXX_O__X: {};
    _OXX_O___: {};
    _OXXXXOO_: {};
    _OXXX_OOX: {};
    _OXXX_OO_: {};
    _OXXXXO_O: {};
    _OXXX_OXO: {};
    _OXXX_O_O: {};
    _OXXX_O__: {};
    _OXX_XOOX: {};
    _OXX_XOO_: {};
    _OXX_XOXO: {};
    _OXX_XO_O: {};
    _OXX_XO__: {};
    _OXX__OXO: {};
    _OXX__OX_: {};
    _OXX__OOX: {};
    _OXX__O_X: {};
    _OXX__O__: {};
    _OXXXX_OO: {};
    _OXXX_XOO: {};
    _OXXX__OO: {};
    _OXXX__O_: {};
    _OXX_XXOO: {};
    _OXX_X_OO: {};
    _OXX_X_O_: {};
    _OXX__XOO: {};
    _OXX__XO_: {};
    _OXX___OX: {};
    _OXX___O_: {};
    _OXXX___O: {};
    _OXX_X__O: {};
    _OXX__X_O: {};
    _OXX___XO: {};
    _OXX____O: {};
    _OXX_____: {};
    _OXOXXOXO: {};
    _OXOXXOX_: {};
    _OXOXXO_X: {};
    _OXOXXO__: {};
    _OXOXXXO_: {};
    _OXOXX_OX: {};
    _OXOXX_O_: {};
    _OXOXXX_O: {};
    _OXOXX_XO: {};
    _OXOXX__O: {};
    _OXOXX___: {};
    _OXOX_X__: {};
    _OXOXOXX_: {};
    _OXOXOOXX: {};
    _OXOXO_XX: {};
    _OXOXO_X_: {};
    _OXOX_OXX: {};
    _OXOX_OX_: {};
    _OXOX_XXO: {};
    _OXOX__XO: {};
    _OXOX__X_: {};
    _OXOXOX_X: {};
    _OXOXO__X: {};
    _OXOX_O_X: {};
    _OXOX_XOX: {};
    _OXOX__OX: {};
    _OXOX___X: {};
    _OXOX____: {};
    _OX_XOX__: {};
    _OX_XOOXX: {};
    _OX_XOOX_: {};
    _OX_XOXXO: {};
    _OX_XO_XO: {};
    _OX_XO_X_: {};
    _OX_XOO_X: {};
    _OX_XOXOX: {};
    _OX_XO_OX: {};
    _OX_XO__X: {};
    _OX_XO___: {};
    _OX_XXOOX: {};
    _OX_XXOO_: {};
    _OX_XXOXO: {};
    _OX_XXO_O: {};
    _OX_XXO__: {};
    _OX_X_OXO: {};
    _OX_X_OX_: {};
    _OX_X_OOX: {};
    _OX_X_O_X: {};
    _OX_X_O__: {};
    _OX_XXXOO: {};
    _OX_XX_OO: {};
    _OX_XX_O_: {};
    _OX_X_XO_: {};
    _OX_X__OX: {};
    _OX_X__O_: {};
    _OX_XX__O: {};
    _OX_X_X_O: {};
    _OX_X__XO: {};
    _OX_X___O: {};
    _OX_X____: {};
    _OXOOXXXO: {};
    _OXOOXXX_: {};
    _OXOOXX_X: {};
    _OXOOXX__: {};
    _OXO_XXOX: {};
    _OXO_XXO_: {};
    _OXO_XXXO: {};
    _OXO_XX_O: {};
    _OXO_XX__: {};
    _OXOOX_XX: {};
    _OXOOX_X_: {};
    _OXO_XOXX: {};
    _OXO_XOX_: {};
    _OXO_X_XO: {};
    _OXO_X_X_: {};
    _OXO_X__X: {};
    _OXO_X___: {};
    _OX_OXXO_: {};
    _OX_OXXXO: {};
    _OX_OXX_O: {};
    _OX_OXX__: {};
    _OX_OXOXX: {};
    _OX_OXOX_: {};
    _OX_OX_XO: {};
    _OX_OX_X_: {};
    _OX_OX__X: {};
    _OX_OX___: {};
    _OX__XOXO: {};
    _OX__XOX_: {};
    _OX__XO_X: {};
    _OX__XO__: {};
    _OX__XXOO: {};
    _OX__XXO_: {};
    _OX__X_OX: {};
    _OX__X_O_: {};
    _OX__XX_O: {};
    _OX__X_XO: {};
    _OX__X__O: {};
    _OX__X___: {};
    _OXOO_XXX: {};
    _OXOO_XX_: {};
    _OXO_OXXX: {};
    _OXO_OXX_: {};
    _OXO__XXO: {};
    _OXO__XX_: {};
    _OXOO_X_X: {};
    _OXO_OX_X: {};
    _OXO__XOX: {};
    _OXO__X_X: {};
    _OXO__X__: {};
    _OX_OOXXX: {};
    _OX_OOXX_: {};
    _OX_O_XXO: {};
    _OX_O_XX_: {};
    _OX_OOX_X: {};
    _OX_O_XOX: {};
    _OX_O_X_X: {};
    _OX_O_X__: {};
    _OX__OXXO: {};
    _OX__OXX_: {};
    _OX__OXOX: {};
    _OX__OX_X: {};
    _OX__OX__: {};
    _OX___XOX: {};
    _OX___XO_: {};
    _OX___XXO: {};
    _OX___X_O: {};
    _OX___X__: {};
    _OXOO__XX: {};
    _OXO_O_XX: {};
    _OXO__OXX: {};
    _OXO___XX: {};
    _OXO___X_: {};
    _OX_OO_XX: {};
    _OX_O_OXX: {};
    _OX_O__XX: {};
    _OX_O__X_: {};
    _OX__OOXX: {};
    _OX__O_XX: {};
    _OX__O_X_: {};
    _OX___OXX: {};
    _OX___OX_: {};
    _OX____XO: {};
    _OX____X_: {};
    _OXO____X: {};
    _OX_O___X: {};
    _OX__O__X: {};
    _OX___O_X: {};
    _OX____OX: {};
    _OX_____X: {};
    _OX______: {};
    __XOXOX__: {};
    __XOXOOXX: {};
    __XOXOOX_: {};
    __XOXOXXO: {};
    __XOXO_XO: {};
    __XOXO_X_: {};
    __XOXOO_X: {};
    __XOXOXOX: {};
    __XOXO_OX: {};
    __XOXO__X: {};
    __XOXO___: {};
    __XOXXOOX: {};
    __XOXXOO_: {};
    __XOXXOXO: {};
    __XOXXO_O: {};
    __XOXXO__: {};
    __XOX_OXO: {};
    __XOX_OX_: {};
    __XOX_OOX: {};
    __XOX_O_X: {};
    __XOX_O__: {};
    __XOXXXOO: {};
    __XOXX_OO: {};
    __XOXX_O_: {};
    __XOX_XO_: {};
    __XOX__OX: {};
    __XOX__O_: {};
    __XOXX__O: {};
    __XOX_X_O: {};
    __XOX__XO: {};
    __XOX___O: {};
    __XOX____: {};
    __XOOXXOX: {};
    __XOOXXO_: {};
    __XOOXXXO: {};
    __XOOXX_O: {};
    __XOOXX__: {};
    __XOOXOXX: {};
    __XOOXOX_: {};
    __XOOX_XO: {};
    __XOOX_X_: {};
    __XOOX__X: {};
    __XOOX___: {};
    __XO_XOXO: {};
    __XO_XOX_: {};
    __XO_XO_X: {};
    __XO_XO__: {};
    __XO_XXOO: {};
    __XO_XXO_: {};
    __XO_X_OX: {};
    __XO_X_O_: {};
    __XO_XX_O: {};
    __XO_X_XO: {};
    __XO_X__O: {};
    __XO_X___: {};
    __XOOOXX_: {};
    __XOO_XXO: {};
    __XOO_XX_: {};
    __XOOOX_X: {};
    __XOO_XOX: {};
    __XOO_X_X: {};
    __XOO_X__: {};
    __XO_OXXO: {};
    __XO_OXX_: {};
    __XO_OXOX: {};
    __XO_OX_X: {};
    __XO_OX__: {};
    __XO__XOX: {};
    __XO__XO_: {};
    __XO__XXO: {};
    __XO__X_O: {};
    __XO__X__: {};
    __XOOO_XX: {};
    __XOO_OXX: {};
    __XOO__XX: {};
    __XOO__X_: {};
    __XO_OOXX: {};
    __XO_O_XX: {};
    __XO_O_X_: {};
    __XO__OXX: {};
    __XO__OX_: {};
    __XO___XO: {};
    __XO___X_: {};
    __XOO___X: {};
    __XO_O__X: {};
    __XO__O_X: {};
    __XO___OX: {};
    __XO____X: {};
    __XO_____: {};
    __XXOOXOX: {};
    __XXOOXO_: {};
    __XXOOXXO: {};
    __XXOOX_O: {};
    __XXOOX__: {};
    __XXOOOXX: {};
    __XXOOOX_: {};
    __XXOO_XO: {};
    __XXOO_X_: {};
    __XXOOO_X: {};
    __XXOO_OX: {};
    __XXOO__X: {};
    __XXOO___: {};
    __XXOXOOX: {};
    __XXOXOO_: {};
    __XXOXOXO: {};
    __XXOXO_O: {};
    __XXOXO__: {};
    __XXO_OXO: {};
    __XXO_OX_: {};
    __XXO_OOX: {};
    __XXO_O_X: {};
    __XXO_O__: {};
    __XXOXXOO: {};
    __XXOX_OO: {};
    __XXOX_O_: {};
    __XXO_XOO: {};
    __XXO_XO_: {};
    __XXO__OX: {};
    __XXO__O_: {};
    __XXOX__O: {};
    __XXO_X_O: {};
    __XXO__XO: {};
    __XXO___O: {};
    __XXO____: {};
    __X_OXOXO: {};
    __X_OXOX_: {};
    __X_OXO_X: {};
    __X_OXO__: {};
    __X_OXXOO: {};
    __X_OXXO_: {};
    __X_OX_OX: {};
    __X_OX_O_: {};
    __X_OXX_O: {};
    __X_OX_XO: {};
    __X_OX__O: {};
    __X_OX___: {};
    __X_OOXXO: {};
    __X_OOXX_: {};
    __X_OOXOX: {};
    __X_OOX_X: {};
    __X_OOX__: {};
    __X_O_XOX: {};
    __X_O_XO_: {};
    __X_O_XXO: {};
    __X_O_X_O: {};
    __X_O_X__: {};
    __X_OOOXX: {};
    __X_OO_XX: {};
    __X_OO_X_: {};
    __X_O_OXX: {};
    __X_O_OX_: {};
    __X_O__XO: {};
    __X_O__X_: {};
    __X_OO__X: {};
    __X_O_O_X: {};
    __X_O__OX: {};
    __X_O___X: {};
    __X_O____: {};
    __XXXOOOX: {};
    __XXXOOO_: {};
    __XXXOOXO: {};
    __XXXOO_O: {};
    __XXXOO__: {};
    __XX_OOXO: {};
    __XX_OOX_: {};
    __XX_OOOX: {};
    __XX_OO_X: {};
    __XX_OO__: {};
    __XXXOXOO: {};
    __XXXO_OO: {};
    __XXXO_O_: {};
    __XX_OXOO: {};
    __XX_OXO_: {};
    __XX_O_OX: {};
    __XX_O_O_: {};
    __XXXO__O: {};
    __XX_OX_O: {};
    __XX_O_XO: {};
    __XX_O__O: {};
    __XX_O___: {};
    __X_XOOXO: {};
    __X_XOOX_: {};
    __X_XOOOX: {};
    __X_XOO_X: {};
    __X_XOO__: {};
    __X_XOXO_: {};
    __X_XO_OX: {};
    __X_XO_O_: {};
    __X_XOX_O: {};
    __X_XO_XO: {};
    __X_XO__O: {};
    __X_XO___: {};
    __X__OXOX: {};
    __X__OXO_: {};
    __X__OXXO: {};
    __X__OX_O: {};
    __X__OX__: {};
    __X__OOXX: {};
    __X__OOX_: {};
    __X__O_XO: {};
    __X__O_X_: {};
    __X__OO_X: {};
    __X__O_OX: {};
    __X__O__X: {};
    __X__O___: {};
    __XXX_OOO: {};
    __XXX_OO_: {};
    __XX_XOOO: {};
    __XX_XOO_: {};
    __XX__OOX: {};
    __XX__OO_: {};
    __XXX_O_O: {};
    __XX_XO_O: {};
    __XX__OXO: {};
    __XX__O_O: {};
    __XX__O__: {};
    __X_XXOOO: {};
    __X_XXOO_: {};
    __X_X_OOX: {};
    __X_X_OO_: {};
    __X_XXO_O: {};
    __X_X_OXO: {};
    __X_X_O_O: {};
    __X_X_O__: {};
    __X__XOOX: {};
    __X__XOO_: {};
    __X__XOXO: {};
    __X__XO_O: {};
    __X__XO__: {};
    __X___OXO: {};
    __X___OX_: {};
    __X___OOX: {};
    __X___O_X: {};
    __X___O__: {};
    __XXX__OO: {};
    __XX_X_OO: {};
    __XX__XOO: {};
    __XX___OO: {};
    __XX___O_: {};
    __X_XX_OO: {};
    __X_X_XOO: {};
    __X_X__OO: {};
    __X_X__O_: {};
    __X__XXOO: {};
    __X__X_OO: {};
    __X__X_O_: {};
    __X___XOO: {};
    __X___XO_: {};
    __X____OX: {};
    __X____O_: {};
    __XX____O: {};
    __X_X___O: {};
    __X__X__O: {};
    __X___X_O: {};
    __X____XO: {};
    __X_____O: {};
    __X______: {};
    OO_XXX___: {};
    OOOXX_X__: {};
    OOOXXOXX_: {};
    OO_XXOXXO: {};
    OO_XXOXX_: {};
    OOOXXOX_X: {};
    OO_XXOXOX: {};
    OO_XXOX_X: {};
    OO_XXOX__: {};
    OO_XXXXO_: {};
    OOOXX_XOX: {};
    OO_XX_XOX: {};
    OO_XX_XO_: {};
    OO_XXXX_O: {};
    OOOXX_XXO: {};
    OO_XX_XXO: {};
    OO_XX_X_O: {};
    OO_XX_X__: {};
    OOOXX__X_: {};
    OOOXXO_XX: {};
    OO_XXOOXX: {};
    OO_XXO_XX: {};
    OO_XXO_X_: {};
    OO_XXXOX_: {};
    OOOXX_OXX: {};
    OO_XX_OXX: {};
    OO_XX_OX_: {};
    OO_XXX_XO: {};
    OO_XX__XO: {};
    OO_XX__X_: {};
    OOOXX___X: {};
    OO_XXO__X: {};
    OO_XXXO_X: {};
    OO_XX_O_X: {};
    OO_XXX_OX: {};
    OO_XX__OX: {};
    OO_XX___X: {};
    OO_XX____: {};
    O_OXXX___: {};
    O_OXXOXXO: {};
    O_OXXOXX_: {};
    O_OXXOXOX: {};
    O_OXXOX_X: {};
    O_OXXOX__: {};
    O_OXXXXO_: {};
    O_OXX_XOX: {};
    O_OXX_XO_: {};
    O_OXXXX_O: {};
    O_OXX_XXO: {};
    O_OXX_X_O: {};
    O_OXX_X__: {};
    O_OXXOOXX: {};
    O_OXXO_XX: {};
    O_OXXO_X_: {};
    O_OXXXOX_: {};
    O_OXX_OXX: {};
    O_OXX_OX_: {};
    O_OXXX_XO: {};
    O_OXX__XO: {};
    O_OXX__X_: {};
    O_OXXO__X: {};
    O_OXXXO_X: {};
    O_OXX_O_X: {};
    O_OXXX_OX: {};
    O_OXX__OX: {};
    O_OXX___X: {};
    O_OXX____: {};
    O__XXOXOX: {};
    O__XXOXO_: {};
    O__XXOXXO: {};
    O__XXOX_O: {};
    O__XXOX__: {};
    O__XXOOXX: {};
    O__XXOOX_: {};
    O__XXO_XO: {};
    O__XXO_X_: {};
    O__XXOO_X: {};
    O__XXO_OX: {};
    O__XXO__X: {};
    O__XXO___: {};
    O__XXXO__: {};
    O__XXXOXO: {};
    O__XX_OXO: {};
    O__XX_OX_: {};
    O__XXXOOX: {};
    O__XX_OOX: {};
    O__XX_O_X: {};
    O__XX_O__: {};
    O__XXX_O_: {};
    O__XXXXOO: {};
    O__XX_XOO: {};
    O__XX_XO_: {};
    O__XX__OX: {};
    O__XX__O_: {};
    O__XXX__O: {};
    O__XX_X_O: {};
    O__XX__XO: {};
    O__XX___O: {};
    O__XX____: {};
    OOOX_XX__: {};
    OOOXOXXX_: {};
    OO_XOXXXO: {};
    OO_XOXXX_: {};
    OOOXOXX_X: {};
    OO_XOXXOX: {};
    OO_XOXX_X: {};
    OO_XOXX__: {};
    OOOX_XXOX: {};
    OO_X_XXOX: {};
    OO_X_XXO_: {};
    OOOX_XXXO: {};
    OO_X_XXXO: {};
    OO_X_XX_O: {};
    OO_X_XX__: {};
    OOOX_X_X_: {};
    OOOXOX_XX: {};
    OO_XOXOXX: {};
    OO_XOX_XX: {};
    OO_XOX_X_: {};
    OOOX_XOXX: {};
    OO_X_XOXX: {};
    OO_X_XOX_: {};
    OO_X_X_XO: {};
    OO_X_X_X_: {};
    OOOX_X__X: {};
    OO_XOX__X: {};
    OO_X_XO_X: {};
    OO_X_X_OX: {};
    OO_X_X__X: {};
    OO_X_X___: {};
    O_OXOXXXO: {};
    O_OXOXXX_: {};
    O_OXOXXOX: {};
    O_OXOXX_X: {};
    O_OXOXX__: {};
    O_OX_XXOX: {};
    O_OX_XXO_: {};
    O_OX_XXXO: {};
    O_OX_XX_O: {};
    O_OX_XX__: {};
    O_OXOXOXX: {};
    O_OXOX_XX: {};
    O_OXOX_X_: {};
    O_OX_XOXX: {};
    O_OX_XOX_: {};
    O_OX_X_XO: {};
    O_OX_X_X_: {};
    O_OXOX__X: {};
    O_OX_XO_X: {};
    O_OX_X_OX: {};
    O_OX_X__X: {};
    O_OX_X___: {};
    O__XOXXOX: {};
    O__XOXXO_: {};
    O__XOXX_O: {};
    O__XOXX__: {};
    O__XOXOXX: {};
    O__XOXOX_: {};
    O__XOX_XO: {};
    O__XOX_X_: {};
    O__XOXO_X: {};
    O__XOX_OX: {};
    O__XOX__X: {};
    O__XOX___: {};
    O__X_XOXO: {};
    O__X_XOX_: {};
    O__X_XOOX: {};
    O__X_XO_X: {};
    O__X_XO__: {};
    O__X_XXOO: {};
    O__X_XXO_: {};
    O__X_X_OX: {};
    O__X_X_O_: {};
    O__X_XX_O: {};
    O__X_X_XO: {};
    O__X_X__O: {};
    O__X_X___: {};
    OOOX__XX_: {};
    OO_XO_XXX: {};
    OO_XO_XX_: {};
    OO_X_OXXX: {};
    OO_X_OXX_: {};
    OO_X__XXO: {};
    OO_X__XX_: {};
    OOOX__X_X: {};
    OO_XO_X_X: {};
    OO_X_OX_X: {};
    OO_X__XOX: {};
    OO_X__X_X: {};
    OO_X__X__: {};
    O_OXO_XXX: {};
    O_OXO_XX_: {};
    O_OX_OXXX: {};
    O_OX_OXX_: {};
    O_OX__XXO: {};
    O_OX__XX_: {};
    O_OXO_X_X: {};
    O_OX_OX_X: {};
    O_OX__XOX: {};
    O_OX__X_X: {};
    O_OX__X__: {};
    O__XOOXXX: {};
    O__XOOXX_: {};
    O__XO_XXO: {};
    O__XO_XX_: {};
    O__XOOX_X: {};
    O__XO_XOX: {};
    O__XO_X_X: {};
    O__XO_X__: {};
    O__X_OXXO: {};
    O__X_OXX_: {};
    O__X_OXOX: {};
    O__X_OX_X: {};
    O__X_OX__: {};
    O__X__XOX: {};
    O__X__XO_: {};
    O__X__XXO: {};
    O__X__X_O: {};
    O__X__X__: {};
    OOOX___XX: {};
    OO_XO__XX: {};
    OO_X_O_XX: {};
    OO_X__OXX: {};
    OO_X___XX: {};
    OO_X___X_: {};
    O_OXO__XX: {};
    O_OX_O_XX: {};
    O_OX__OXX: {};
    O_OX___XX: {};
    O_OX___X_: {};
    O__XOO_XX: {};
    O__XO_OXX: {};
    O__XO__XX: {};
    O__XO__X_: {};
    O__X_OOXX: {};
    O__X_O_XX: {};
    O__X_O_X_: {};
    O__X__OXX: {};
    O__X__OX_: {};
    O__X___XO: {};
    O__X___X_: {};
    OO_X____X: {};
    O_OX____X: {};
    O__XO___X: {};
    O__X_O__X: {};
    O__X__O_X: {};
    O__X___OX: {};
    O__X____X: {};
    O__X_____: {};
    _OOXXX___: {};
    _OOXXOXXO: {};
    _OOXXOXX_: {};
    XOOXXOXOX: {};
    _OOXXOXOX: {};
    _OOXXOX_X: {};
    _OOXXOX__: {};
    _OOXXXXO_: {};
    _OOXX_XOX: {};
    _OOXX_XO_: {};
    _OOXXXX_O: {};
    _OOXX_XXO: {};
    _OOXX_X_O: {};
    _OOXX_X__: {};
    _OOXXOOXX: {};
    _OOXXO_XX: {};
    _OOXXO_X_: {};
    _OOXXXOX_: {};
    _OOXX_OXX: {};
    _OOXX_OX_: {};
    _OOXXX_XO: {};
    _OOXX__XO: {};
    _OOXX__X_: {};
    _OOXXO__X: {};
    _OOXXXO_X: {};
    _OOXX_O_X: {};
    _OOXXX_OX: {};
    _OOXX__OX: {};
    _OOXX___X: {};
    _OOXX____: {};
    _O_XXOXOX: {};
    _O_XXOXO_: {};
    _O_XXOXXO: {};
    _O_XXOX_O: {};
    _O_XXOX__: {};
    _O_XXOOXX: {};
    _O_XXOOX_: {};
    _O_XXO_XO: {};
    _O_XXO_X_: {};
    _O_XXOO_X: {};
    _O_XXO_OX: {};
    _O_XXO__X: {};
    _O_XXO___: {};
    _O_XXXO__: {};
    _O_XXXOXO: {};
    _O_XX_OXO: {};
    _O_XX_OX_: {};
    _O_XXXOOX: {};
    _O_XX_OOX: {};
    _O_XX_O_X: {};
    _O_XX_O__: {};
    _O_XXX_O_: {};
    _O_XXXXOO: {};
    _O_XX_XOO: {};
    _O_XX_XO_: {};
    _O_XX__OX: {};
    _O_XX__O_: {};
    _O_XXX__O: {};
    _O_XX_X_O: {};
    _O_XX__XO: {};
    _O_XX___O: {};
    _O_XX____: {};
    _OOXOXXXO: {};
    _OOXOXXX_: {};
    _OOXOXXOX: {};
    _OOXOXX_X: {};
    _OOXOXX__: {};
    _OOX_XXOX: {};
    _OOX_XXO_: {};
    _OOX_XXXO: {};
    _OOX_XX_O: {};
    _OOX_XX__: {};
    _OOXOXOXX: {};
    _OOXOX_XX: {};
    _OOXOX_X_: {};
    _OOX_XOXX: {};
    _OOX_XOX_: {};
    _OOX_X_XO: {};
    _OOX_X_X_: {};
    _OOXOX__X: {};
    _OOX_XO_X: {};
    _OOX_X_OX: {};
    _OOX_X__X: {};
    _OOX_X___: {};
    _O_XOXXO_: {};
    _O_XOXXXO: {};
    _O_XOXX_O: {};
    _O_XOXX__: {};
    _O_XOXOXX: {};
    _O_XOXOX_: {};
    _O_XOX_XO: {};
    _O_XOX_X_: {};
    _O_XOXO_X: {};
    _O_XOX_OX: {};
    _O_XOX__X: {};
    _O_XOX___: {};
    _O_X_XOXO: {};
    _O_X_XOX_: {};
    _O_X_XOOX: {};
    _O_X_XO_X: {};
    _O_X_XO__: {};
    _O_X_XXOO: {};
    _O_X_XXO_: {};
    _O_X_X_OX: {};
    _O_X_X_O_: {};
    _O_X_XX_O: {};
    _O_X_X_XO: {};
    _O_X_X__O: {};
    _O_X_X___: {};
    _OOXO_XXX: {};
    _OOXO_XX_: {};
    _OOX_OXXX: {};
    _OOX_OXX_: {};
    _OOX__XXO: {};
    _OOX__XX_: {};
    _OOXO_X_X: {};
    _OOX_OX_X: {};
    _OOX__XOX: {};
    _OOX__X_X: {};
    _OOX__X__: {};
    _O_XOOXXX: {};
    _O_XOOXX_: {};
    _O_XO_XXO: {};
    _O_XO_XX_: {};
    _O_XOOX_X: {};
    _O_XO_XOX: {};
    _O_XO_X_X: {};
    _O_XO_X__: {};
    _O_X_OXXO: {};
    _O_X_OXX_: {};
    _O_X_OXOX: {};
    _O_X_OX_X: {};
    _O_X_OX__: {};
    _O_X__XOX: {};
    _O_X__XO_: {};
    _O_X__XXO: {};
    _O_X__X_O: {};
    _O_X__X__: {};
    _OOXO__XX: {};
    _OOX_O_XX: {};
    _OOX__OXX: {};
    _OOX___XX: {};
    _OOX___X_: {};
    _O_XOO_XX: {};
    _O_XO_OXX: {};
    _O_XO__XX: {};
    _O_XO__X_: {};
    _O_X_OOXX: {};
    _O_X_O_XX: {};
    _O_X_O_X_: {};
    _O_X__OXX: {};
    _O_X__OX_: {};
    _O_X___XO: {};
    _O_X___X_: {};
    _OOX____X: {};
    _O_XO___X: {};
    _O_X_O__X: {};
    _O_X__O_X: {};
    _O_X___OX: {};
    _O_X____X: {};
    _O_X_____: {};
    __OXXOXOX: {};
    __OXXOXO_: {};
    __OXXOX_O: {};
    __OXXOX__: {};
    __OXXOOXX: {};
    __OXXOOX_: {};
    __OXXO_XO: {};
    __OXXO_X_: {};
    __OXXOO_X: {};
    __OXXO_OX: {};
    __OXXO__X: {};
    __OXXO___: {};
    __OXXXO__: {};
    __OXXXOXO: {};
    __OXX_OXO: {};
    __OXX_OX_: {};
    __OXXXOOX: {};
    __OXX_OOX: {};
    __OXX_O_X: {};
    __OXX_O__: {};
    __OXXX_O_: {};
    __OXXXXOO: {};
    __OXX_XOO: {};
    __OXX_XO_: {};
    __OXX__OX: {};
    __OXX__O_: {};
    __OXXX__O: {};
    __OXX_X_O: {};
    __OXX__XO: {};
    __OXX___O: {};
    __OXX____: {};
    __OXOXXOX: {};
    __OXOXXO_: {};
    __OXOXXXO: {};
    __OXOXX_O: {};
    __OXOXX__: {};
    __OXOXOX_: {};
    __OXOX_XO: {};
    __OXOX_X_: {};
    __OXOXO_X: {};
    __OXOX_OX: {};
    __OXOX__X: {};
    __OXOX___: {};
    __OX_XOXO: {};
    __OX_XOX_: {};
    __OX_XOOX: {};
    __OX_XO_X: {};
    __OX_XO__: {};
    __OX_XXOO: {};
    __OX_XXO_: {};
    __OX_X_OX: {};
    __OX_X_O_: {};
    __OX_XX_O: {};
    __OX_X_XO: {};
    __OX_X__O: {};
    __OX_X___: {};
    __OXOOXXX: {};
    __OXOOXX_: {};
    __OXO_XXO: {};
    __OXO_XX_: {};
    __OXOOX_X: {};
    __OXO_XOX: {};
    __OXO_X_X: {};
    __OXO_X__: {};
    __OX_OXXO: {};
    __OX_OXX_: {};
    __OX_OXOX: {};
    __OX_OX_X: {};
    __OX_OX__: {};
    __OX__XOX: {};
    __OX__XO_: {};
    __OX__XXO: {};
    __OX__X_O: {};
    __OX__X__: {};
    __OXOO_XX: {};
    __OXO_OXX: {};
    __OXO__XX: {};
    __OXO__X_: {};
    __OX_OOXX: {};
    __OX_O_XX: {};
    __OX_O_X_: {};
    __OX__OXX: {};
    __OX__OX_: {};
    __OX___XO: {};
    __OX___X_: {};
    __OXO___X: {};
    __OX_O__X: {};
    __OX__O_X: {};
    __OX___OX: {};
    __OX____X: {};
    __OX_____: {};
    ___XOXOXO: {};
    ___XOXOX_: {};
    ___XOXOOX: {};
    ___XOXO_X: {};
    ___XOXO__: {};
    ___XOXXOO: {};
    ___XOXXO_: {};
    ___XOX_OX: {};
    ___XOX_O_: {};
    ___XOXX_O: {};
    ___XOX_XO: {};
    ___XOX__O: {};
    ___XOX___: {};
    ___XOOXXO: {};
    ___XOOXX_: {};
    ___XOOXOX: {};
    ___XOOX_X: {};
    ___XOOX__: {};
    ___XO_XOX: {};
    ___XO_XO_: {};
    ___XO_XXO: {};
    ___XO_X_O: {};
    ___XO_X__: {};
    ___XOOOXX: {};
    ___XOO_XX: {};
    ___XOO_X_: {};
    ___XO_OXX: {};
    ___XO_OX_: {};
    ___XO__XO: {};
    ___XO__X_: {};
    ___XOO__X: {};
    ___XO_O_X: {};
    ___XO__OX: {};
    ___XO___X: {};
    ___XO____: {};
    ___XXOOXO: {};
    ___XXOOX_: {};
    ___XXOOOX: {};
    ___XXOO_X: {};
    ___XXOO__: {};
    ___XXOXOO: {};
    ___XXOXO_: {};
    ___XXO_OX: {};
    ___XXO_O_: {};
    ___XXOX_O: {};
    ___XXO_XO: {};
    ___XXO__O: {};
    ___XXO___: {};
    ___X_OXOX: {};
    ___X_OXO_: {};
    ___X_OXXO: {};
    ___X_OX_O: {};
    ___X_OX__: {};
    ___X_OOXX: {};
    ___X_OOX_: {};
    ___X_O_XO: {};
    ___X_O_X_: {};
    ___X_OO_X: {};
    ___X_O_OX: {};
    ___X_O__X: {};
    ___X_O___: {};
    ___XXXOO_: {};
    ___XX_OOX: {};
    ___XX_OO_: {};
    ___XXXO_O: {};
    ___XX_OXO: {};
    ___XX_O_O: {};
    ___XX_O__: {};
    ___X_XOOX: {};
    ___X_XOO_: {};
    ___X_XOXO: {};
    ___X_XO_O: {};
    ___X_XO__: {};
    ___X__OXO: {};
    ___X__OX_: {};
    ___X__OOX: {};
    ___X__O_X: {};
    ___X__O__: {};
    ___XXX_OO: {};
    ___XX_XOO: {};
    ___XX__OO: {};
    ___XX__O_: {};
    ___X_XXOO: {};
    ___X_X_OO: {};
    ___X_X_O_: {};
    ___X__XOO: {};
    ___X__XO_: {};
    ___X___OX: {};
    ___X___O_: {};
    ___XX___O: {};
    ___X_X__O: {};
    ___X__X_O: {};
    ___X___XO: {};
    ___X____O: {};
    ___X_____: {};
    OOO_XXX__: {};
    OOOOXXXX_: {};
    OO_OXXXXO: {};
    OO_OXXXX_: {};
    OOOOXXX_X: {};
    OOXOXXXOX: {};
    OO_OXXXOX: {};
    OO_OXXX_X: {};
    OO_OXXX__: {};
    OOO_XXXOX: {};
    OO__XXXOX: {};
    OO__XXXO_: {};
    OOO_XXXXO: {};
    OO__XXXXO: {};
    OO__XXX_O: {};
    OO__XXX__: {};
    OOO_XX_X_: {};
    OOOOXX_XX: {};
    OO_OXXOXX: {};
    OO_OXX_XX: {};
    OO_OXX_X_: {};
    OOO_XXOXX: {};
    OO__XXOXX: {};
    OO__XXOX_: {};
    OO__XX_XO: {};
    OO__XX_X_: {};
    OOO_XX__X: {};
    OO_OXX__X: {};
    OO__XXO_X: {};
    OO__XX_OX: {};
    OO__XX__X: {};
    OO__XX___: {};
    O_OOXXXXO: {};
    O_OOXXXX_: {};
    O_OOXXXOX: {};
    O_OOXXX_X: {};
    O_OOXXX__: {};
    O_O_XXXOX: {};
    O_O_XXXO_: {};
    O_O_XXXXO: {};
    O_O_XXX_O: {};
    O_O_XXX__: {};
    O_OOXXOXX: {};
    O_OOXX_XX: {};
    O_OOXX_X_: {};
    O_O_XXOXX: {};
    O_O_XXOX_: {};
    O_O_XX_XO: {};
    O_O_XX_X_: {};
    O_OOXX__X: {};
    O_O_XXO_X: {};
    O_O_XX_OX: {};
    O_O_XX__X: {};
    O_O_XX___: {};
    O__OXXXOX: {};
    O__OXXXO_: {};
    O__OXXXXO: {};
    O__OXXX_O: {};
    O__OXXX__: {};
    O__OXXOX_: {};
    O__OXX_XO: {};
    O__OXX_X_: {};
    O__OXXO_X: {};
    O__OXX_OX: {};
    O__OXX__X: {};
    O__OXX___: {};
    O___XXOXO: {};
    O___XXOX_: {};
    O___XXOOX: {};
    O___XXO_X: {};
    O___XXO__: {};
    O___XXXOO: {};
    O___XXXO_: {};
    O___XX_OX: {};
    O___XX_O_: {};
    O___XXX_O: {};
    O___XX_XO: {};
    O___XX__O: {};
    O___XX___: {};
    OOO_X_XX_: {};
    OO_OX_XXX: {};
    OO_OX_XX_: {};
    OO__XOXXX: {};
    OO__XOXX_: {};
    OO__X_XXO: {};
    OO__X_XX_: {};
    OOO_X_X_X: {};
    OO_OX_X_X: {};
    OO__XOX_X: {};
    OO__X_XOX: {};
    OO__X_X_X: {};
    OO__X_X__: {};
    O_OOX_XXX: {};
    O_OOX_XX_: {};
    O_O_XOXXX: {};
    O_O_XOXX_: {};
    O_O_X_XXO: {};
    O_O_X_XX_: {};
    O_OOX_X_X: {};
    O_O_XOX_X: {};
    O_O_X_XOX: {};
    O_O_X_X_X: {};
    O_O_X_X__: {};
    O__OXOXXX: {};
    O__OXOXX_: {};
    O__OX_XXO: {};
    O__OX_XX_: {};
    O__OXOX_X: {};
    O__OX_XOX: {};
    O__OX_X_X: {};
    O__OX_X__: {};
    O___XOXXO: {};
    O___XOXX_: {};
    O___XOXOX: {};
    O___XOX_X: {};
    O___XOX__: {};
    O___X_XOX: {};
    O___X_XO_: {};
    O___X_XXO: {};
    O___X_X_O: {};
    O___X_X__: {};
    OOO_X__XX: {};
    OO_OX__XX: {};
    OO__XO_XX: {};
    OO__X_OXX: {};
    OO__X__XX: {};
    OO__X__X_: {};
    O_OOX__XX: {};
    O_O_XO_XX: {};
    O_O_X_OXX: {};
    O_O_X__XX: {};
    O_O_X__X_: {};
    O__OXO_XX: {};
    O__OX_OXX: {};
    O__OX__XX: {};
    O__OX__X_: {};
    O___XOOXX: {};
    O___XO_XX: {};
    O___XO_X_: {};
    O___X_OXX: {};
    O___X_OX_: {};
    O___X__XO: {};
    O___X__X_: {};
    OO__X___X: {};
    O_O_X___X: {};
    O__OX___X: {};
    O___XO__X: {};
    O___X_O_X: {};
    O___X__OX: {};
    O___X___X: {};
    O___X____: {};
    _OOOXXXXO: {};
    _OOOXXXX_: {};
    _OOOXXXOX: {};
    _OOOXXX_X: {};
    _OOOXXX__: {};
    _OO_XXXOX: {};
    _OO_XXXO_: {};
    _OO_XXXXO: {};
    _OO_XXX_O: {};
    _OO_XXX__: {};
    _OOOXXOXX: {};
    _OOOXX_XX: {};
    _OOOXX_X_: {};
    _OO_XXOXX: {};
    _OO_XXOX_: {};
    _OO_XX_XO: {};
    _OO_XX_X_: {};
    _OOOXX__X: {};
    _OO_XXO_X: {};
    _OO_XX_OX: {};
    _OO_XX__X: {};
    _OO_XX___: {};
    _O_OXXXOX: {};
    _O_OXXXO_: {};
    _O_OXXXXO: {};
    _O_OXXX_O: {};
    _O_OXXX__: {};
    _O_OXXOXX: {};
    _O_OXXOX_: {};
    _O_OXX_XO: {};
    _O_OXX_X_: {};
    _O_OXXO_X: {};
    _O_OXX_OX: {};
    _O_OXX__X: {};
    _O_OXX___: {};
    _O__XXOXO: {};
    _O__XXOX_: {};
    _O__XXOOX: {};
    _O__XXO_X: {};
    _O__XXO__: {};
    _O__XXXOO: {};
    _O__XXXO_: {};
    _O__XX_OX: {};
    _O__XX_O_: {};
    _O__XXX_O: {};
    _O__XX_XO: {};
    _O__XX__O: {};
    _O__XX___: {};
    _OOOX_XXX: {};
    _OOOX_XX_: {};
    _OO_XOXXX: {};
    _OO_XOXX_: {};
    _OO_X_XXO: {};
    _OO_X_XX_: {};
    _OOOX_X_X: {};
    _OO_XOX_X: {};
    _OO_X_XOX: {};
    _OO_X_X_X: {};
    _OO_X_X__: {};
    _O_OXOXXX: {};
    _O_OXOXX_: {};
    _O_OX_XXO: {};
    _O_OX_XX_: {};
    _O_OXOX_X: {};
    _O_OX_XOX: {};
    _O_OX_X_X: {};
    _O_OX_X__: {};
    _O__XOXXO: {};
    _O__XOXX_: {};
    _O__XOXOX: {};
    _O__XOX_X: {};
    _O__XOX__: {};
    _O__X_XOX: {};
    _O__X_XO_: {};
    _O__X_XXO: {};
    _O__X_X_O: {};
    _O__X_X__: {};
    _OOOX__XX: {};
    _OO_XO_XX: {};
    _OO_X_OXX: {};
    _OO_X__XX: {};
    _OO_X__X_: {};
    _O_OXO_XX: {};
    _O_OX_OXX: {};
    _O_OX__XX: {};
    _O_OX__X_: {};
    _O__XOOXX: {};
    _O__XO_XX: {};
    _O__XO_X_: {};
    _O__X_OXX: {};
    _O__X_OX_: {};
    _O__X__XO: {};
    _O__X__X_: {};
    _OO_X___X: {};
    _O_OX___X: {};
    _O__XO__X: {};
    _O__X_O_X: {};
    _O__X__OX: {};
    _O__X___X: {};
    _O__X____: {};
    __OOXXXOX: {};
    __OOXXXO_: {};
    __OOXXXXO: {};
    __OOXXX_O: {};
    __OOXXX__: {};
    __OOXXOXX: {};
    __OOXXOX_: {};
    __OOXX_XO: {};
    __OOXX_X_: {};
    __OOXXO_X: {};
    __OOXX_OX: {};
    __OOXX__X: {};
    __OOXX___: {};
    __O_XXOXO: {};
    __O_XXOX_: {};
    __O_XXOOX: {};
    __O_XXO_X: {};
    __O_XXO__: {};
    __O_XXXOO: {};
    __O_XXXO_: {};
    __O_XX_OX: {};
    __O_XX_O_: {};
    __O_XXX_O: {};
    __O_XX_XO: {};
    __O_XX__O: {};
    __O_XX___: {};
    __OOXOXXX: {};
    __OOXOXX_: {};
    __OOX_XXO: {};
    __OOX_XX_: {};
    __OOXOX_X: {};
    __OOX_XOX: {};
    __OOX_X_X: {};
    __OOX_X__: {};
    __O_XOXXO: {};
    __O_XOXX_: {};
    __O_XOXOX: {};
    __O_XOX_X: {};
    __O_XOX__: {};
    __O_X_XOX: {};
    __O_X_XO_: {};
    __O_X_XXO: {};
    __O_X_X_O: {};
    __O_X_X__: {};
    __OOXO_XX: {};
    __OOX_OXX: {};
    __OOX__XX: {};
    __OOX__X_: {};
    __O_XOOXX: {};
    __O_XO_XX: {};
    __O_XO_X_: {};
    __O_X_OXX: {};
    __O_X_OX_: {};
    __O_X__XO: {};
    __O_X__X_: {};
    __OOX___X: {};
    __O_XO__X: {};
    __O_X_O_X: {};
    __O_X__OX: {};
    __O_X___X: {};
    __O_X____: {};
    ___OXXOXO: {};
    ___OXXOX_: {};
    ___OXXOOX: {};
    ___OXXO_X: {};
    ___OXXO__: {};
    ___OXXXOO: {};
    ___OXXXO_: {};
    ___OXX_OX: {};
    ___OXX_O_: {};
    ___OXXX_O: {};
    ___OXX_XO: {};
    ___OXX__O: {};
    ___OXX___: {};
    ___OXOXXO: {};
    ___OXOXX_: {};
    ___OXOXOX: {};
    ___OXOX_X: {};
    ___OXOX__: {};
    ___OX_XOX: {};
    ___OX_XO_: {};
    ___OX_XXO: {};
    ___OX_X_O: {};
    ___OX_X__: {};
    ___OXOOXX: {};
    ___OXO_XX: {};
    ___OXO_X_: {};
    ___OX_OXX: {};
    ___OX_OX_: {};
    ___OX__XO: {};
    ___OX__X_: {};
    ___OXO__X: {};
    ___OX_O_X: {};
    ___OX__OX: {};
    ___OX___X: {};
    ___OX____: {};
    ____XOXOX: {};
    ____XOXO_: {};
    ____XOXXO: {};
    ____XOX_O: {};
    ____XOX__: {};
    ____XOOXX: {};
    ____XOOX_: {};
    ____XO_XO: {};
    ____XO_X_: {};
    ____XOO_X: {};
    ____XO_OX: {};
    ____XO__X: {};
    ____XO___: {};
    ____XXOOX: {};
    ____XXOO_: {};
    ____XXOXO: {};
    ____XXO_O: {};
    ____XXO__: {};
    ____X_OXO: {};
    ____X_OX_: {};
    ____X_OOX: {};
    ____X_O_X: {};
    ____X_O__: {};
    ____XXXOO: {};
    ____XX_OO: {};
    ____XX_O_: {};
    ____X_XOO: {};
    ____X_XO_: {};
    ____X__OX: {};
    ____X__O_: {};
    ____XX__O: {};
    ____X_X_O: {};
    ____X__XO: {};
    ____X___O: {};
    ____X____: {};
    OOO__XXX_: {};
    OO_O_XXXX: {};
    OO_O_XXX_: {};
    OO__OXXXX: {};
    OO__OXXX_: {};
    OO___XXXO: {};
    OO___XXX_: {};
    OOO__XX_X: {};
    OO_O_XX_X: {};
    OO__OXX_X: {};
    OO___XXOX: {};
    OO___XX_X: {};
    OO___XX__: {};
    O_OO_XXXX: {};
    O_OO_XXX_: {};
    O_O_OXXXX: {};
    O_O_OXXX_: {};
    O_O__XXXO: {};
    O_O__XXX_: {};
    O_OO_XX_X: {};
    O_O_OXX_X: {};
    O_O__XXOX: {};
    O_O__XX_X: {};
    O_O__XX__: {};
    O__OOXXXX: {};
    O__OOXXX_: {};
    O__O_XXXO: {};
    O__O_XXX_: {};
    O__OOXX_X: {};
    O__O_XXOX: {};
    O__O_XX_X: {};
    O__O_XX__: {};
    O___OXXXO: {};
    O___OXXX_: {};
    O___OXXOX: {};
    O___OXX_X: {};
    O___OXX__: {};
    O____XXOX: {};
    O____XXO_: {};
    O____XXXO: {};
    O____XX_O: {};
    O____XX__: {};
    OOO__X_XX: {};
    OO_O_X_XX: {};
    OO__OX_XX: {};
    OO___XOXX: {};
    OO___X_XX: {};
    OO___X_X_: {};
    O_OO_X_XX: {};
    O_O_OX_XX: {};
    O_O__XOXX: {};
    O_O__X_XX: {};
    O_O__X_X_: {};
    O__OOX_XX: {};
    O__O_XOXX: {};
    O__O_X_XX: {};
    O__O_X_X_: {};
    O___OXOXX: {};
    O___OX_XX: {};
    O___OX_X_: {};
    O____XOXX: {};
    O____XOX_: {};
    O____X_XO: {};
    O____X_X_: {};
    OO___X__X: {};
    O_O__X__X: {};
    O__O_X__X: {};
    O___OX__X: {};
    O____XO_X: {};
    O____X_OX: {};
    O____X__X: {};
    O____X___: {};
    _OOO_XXXX: {};
    _OOO_XXX_: {};
    _OO_OXXXX: {};
    _OO_OXXX_: {};
    _OO__XXXO: {};
    _OO__XXX_: {};
    _OOO_XX_X: {};
    _OO_OXX_X: {};
    _OO__XXOX: {};
    _OO__XX_X: {};
    _OO__XX__: {};
    _O_OOXXXX: {};
    _O_OOXXX_: {};
    _O_O_XXXO: {};
    _O_O_XXX_: {};
    _O_OOXX_X: {};
    _O_O_XXOX: {};
    _O_O_XX_X: {};
    _O_O_XX__: {};
    _O__OXXXO: {};
    _O__OXXX_: {};
    _O__OXXOX: {};
    _O__OXX_X: {};
    _O__OXX__: {};
    _O___XXOX: {};
    _O___XXO_: {};
    _O___XXXO: {};
    _O___XX_O: {};
    _O___XX__: {};
    _OOO_X_XX: {};
    _OO_OX_XX: {};
    _OO__XOXX: {};
    _OO__X_XX: {};
    _OO__X_X_: {};
    _O_OOX_XX: {};
    _O_O_XOXX: {};
    _O_O_X_XX: {};
    _O_O_X_X_: {};
    _O__OXOXX: {};
    _O__OX_XX: {};
    _O__OX_X_: {};
    _O___XOXX: {};
    _O___XOX_: {};
    _O___X_XO: {};
    _O___X_X_: {};
    _OO__X__X: {};
    _O_O_X__X: {};
    _O__OX__X: {};
    _O___XO_X: {};
    _O___X_OX: {};
    _O___X__X: {};
    _O___X___: {};
    __OOOXXXX: {};
    __OOOXXX_: {};
    __OO_XXXO: {};
    __OO_XXX_: {};
    __OOOXX_X: {};
    __OO_XXOX: {};
    __OO_XX_X: {};
    __OO_XX__: {};
    __O_OXXXO: {};
    __O_OXXX_: {};
    __O_OXXOX: {};
    __O_OXX_X: {};
    __O_OXX__: {};
    __O__XXOX: {};
    __O__XXO_: {};
    __O__XXXO: {};
    __O__XX_O: {};
    __O__XX__: {};
    __OOOX_XX: {};
    __OO_XOXX: {};
    __OO_X_XX: {};
    __OO_X_X_: {};
    __O_OXOXX: {};
    __O_OX_XX: {};
    __O_OX_X_: {};
    __O__XOXX: {};
    __O__XOX_: {};
    __O__X_XO: {};
    __O__X_X_: {};
    __OO_X__X: {};
    __O_OX__X: {};
    __O__XO_X: {};
    __O__X_OX: {};
    __O__X__X: {};
    __O__X___: {};
    ___OOXXXO: {};
    ___OOXXX_: {};
    ___OOXXOX: {};
    ___OOXX_X: {};
    ___OOXX__: {};
    ___O_XXOX: {};
    ___O_XXO_: {};
    ___O_XXXO: {};
    ___O_XX_O: {};
    ___O_XX__: {};
    ___OOXOXX: {};
    ___OOX_XX: {};
    ___OOX_X_: {};
    ___O_XOXX: {};
    ___O_XOX_: {};
    ___O_X_XO: {};
    ___O_X_X_: {};
    ___OOX__X: {};
    ___O_XO_X: {};
    ___O_X_OX: {};
    ___O_X__X: {};
    ___O_X___: {};
    ____OXXOX: {};
    ____OXXO_: {};
    ____OXXXO: {};
    ____OXX_O: {};
    ____OXX__: {};
    ____OXOXX: {};
    ____OXOX_: {};
    ____OX_XO: {};
    ____OX_X_: {};
    ____OXO_X: {};
    ____OX_OX: {};
    ____OX__X: {};
    ____OX___: {};
    _____XOXO: {};
    _____XOX_: {};
    _____XOOX: {};
    _____XO_X: {};
    _____XO__: {};
    _____XXOO: {};
    _____XXO_: {};
    _____X_OX: {};
    _____X_O_: {};
    _____XX_O: {};
    _____X_XO: {};
    _____X__O: {};
    _____X___: {};
    OO____XXX: {};
    OO____XX_: {};
    O_O___XXX: {};
    O_O___XX_: {};
    O__O__XXX: {};
    O__O__XX_: {};
    O___O_XXX: {};
    O___O_XX_: {};
    O____OXXX: {};
    O____OXX_: {};
    O_____XXO: {};
    O_____XX_: {};
    OO____X_X: {};
    O_O___X_X: {};
    O__O__X_X: {};
    O___O_X_X: {};
    O____OX_X: {};
    O_____XOX: {};
    O_____X_X: {};
    O_____X__: {};
    _OO___XXX: {};
    _OO___XX_: {};
    _O_O__XXX: {};
    _O_O__XX_: {};
    _O__O_XXX: {};
    _O__O_XX_: {};
    _O___OXXX: {};
    _O___OXX_: {};
    _O____XXO: {};
    _O____XX_: {};
    _OO___X_X: {};
    _O_O__X_X: {};
    _O__O_X_X: {};
    _O___OX_X: {};
    _O____XOX: {};
    _O____X_X: {};
    _O____X__: {};
    __OO__XXX: {};
    __OO__XX_: {};
    __O_O_XXX: {};
    __O_O_XX_: {};
    __O__OXXX: {};
    __O__OXX_: {};
    __O___XXO: {};
    __O___XX_: {};
    __OO__X_X: {};
    __O_O_X_X: {};
    __O__OX_X: {};
    __O___XOX: {};
    __O___X_X: {};
    __O___X__: {};
    ___OO_XXX: {};
    ___OO_XX_: {};
    ___O_OXXX: {};
    ___O_OXX_: {};
    ___O__XXO: {};
    ___O__XX_: {};
    ___OO_X_X: {};
    ___O_OX_X: {};
    ___O__XOX: {};
    ___O__X_X: {};
    ___O__X__: {};
    ____OOXXX: {};
    ____OOXX_: {};
    ____O_XXO: {};
    ____O_XX_: {};
    ____OOX_X: {};
    ____O_XOX: {};
    ____O_X_X: {};
    ____O_X__: {};
    _____OXXO: {};
    _____OXX_: {};
    _____OXOX: {};
    _____OX_X: {};
    _____OX__: {};
    ______XOX: {};
    ______XO_: {};
    ______XXO: {};
    ______X_O: {};
    ______X__: {};
    OO_____XX: {};
    O_O____XX: {};
    O__O___XX: {};
    O___O__XX: {};
    O____O_XX: {};
    O_____OXX: {};
    O______XX: {};
    O______X_: {};
    _OO____XX: {};
    _O_O___XX: {};
    _O__O__XX: {};
    _O___O_XX: {};
    _O____OXX: {};
    _O_____XX: {};
    _O_____X_: {};
    __OO___XX: {};
    __O_O__XX: {};
    __O__O_XX: {};
    __O___OXX: {};
    __O____XX: {};
    __O____X_: {};
    ___OO__XX: {};
    ___O_O_XX: {};
    ___O__OXX: {};
    ___O___XX: {};
    ___O___X_: {};
    ____OO_XX: {};
    ____O_OXX: {};
    ____O__XX: {};
    ____O__X_: {};
    _____OOXX: {};
    _____O_XX: {};
    _____O_X_: {};
    ______OXX: {};
    ______OX_: {};
    _______XO: {};
    _______X_: {};
    O_______X: {};
    _O______X: {};
    __O_____X: {};
    ___O____X: {};
    ____O___X: {};
    _____O__X: {};
    ______O_X: {};
    _______OX: {};
    ________X: {};
    _________: {};
  };
}

export type TicTacToeEvent =
  | { type: "PLAY_X_TOP_LEFT" }
  | { type: "PLAY_X_TOP_CENTER" }
  | { type: "PLAY_X_TOP_RIGHT" }
  | { type: "PLAY_X_MIDDLE_LEFT" }
  | { type: "PLAY_X_CENTER" }
  | { type: "PLAY_X_MIDDLE_RIGHT" }
  | { type: "PLAY_X_BOTTOM_LEFT" }
  | { type: "PLAY_X_BOTTOM_CENTER" }
  | { type: "PLAY_X_BOTTOM_RIGHT" }
  | { type: "PLAY_O_TOP_LEFT" }
  | { type: "PLAY_O_TOP_CENTER" }
  | { type: "PLAY_O_TOP_RIGHT" }
  | { type: "PLAY_O_MIDDLE_LEFT" }
  | { type: "PLAY_O_CENTER" }
  | { type: "PLAY_O_MIDDLE_RIGHT" }
  | { type: "PLAY_O_BOTTOM_LEFT" }
  | { type: "PLAY_O_BOTTOM_CENTER" }
  | { type: "PLAY_O_BOTTOM_RIGHT" };

export interface TicTacToeContext {}

type TicTacToeStateMachine = StateMachine<
  TicTacToeContext,
  TicTacToeStateSchema,
  TicTacToeEvent
>;

const machine: TicTacToeStateMachine = Machine<
  TicTacToeContext,
  TicTacToeStateSchema,
  TicTacToeEvent
>({
  id: "tictactoe",
  initial: "_________",
  states: {
    X_WINS: { type: "final" },
    O_WINS: { type: "final" },
    DRAW: { type: "final" },
    _________: {
      on: {
        PLAY_X_TOP_LEFT: "X________",
        PLAY_X_TOP_CENTER: "_X_______",
        PLAY_X_TOP_RIGHT: "__X______",
        PLAY_X_MIDDLE_LEFT: "___X_____",
        PLAY_X_CENTER: "____X____",
        PLAY_X_MIDDLE_RIGHT: "_____X___",
        PLAY_X_BOTTOM_LEFT: "______X__",
        PLAY_X_BOTTOM_CENTER: "_______X_",
        PLAY_X_BOTTOM_RIGHT: "________X"
      }
    },
    XOXOXOX__: { on: { "": "X_WINS" } },
    XOXOXOOXX: { on: { "": "X_WINS" } },
    XOXOXOOX_: { on: { PLAY_X_BOTTOM_RIGHT: "XOXOXOOXX" } },
    XOXOXOXXO: { on: { "": "X_WINS" } },
    XOXOXO_XO: { on: { PLAY_X_BOTTOM_LEFT: "XOXOXOXXO" } },
    XOXOXO_X_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XOXOXOOX_",
        PLAY_O_BOTTOM_RIGHT: "XOXOXO_XO"
      }
    },
    XOXOXO__X: { on: { "": "X_WINS" } },
    XOXOXO___: {
      on: {
        PLAY_X_BOTTOM_LEFT: "XOXOXOX__",
        PLAY_X_BOTTOM_CENTER: "XOXOXO_X_",
        PLAY_X_BOTTOM_RIGHT: "XOXOXO__X"
      }
    },
    XOXOXXOOX: { on: { "": "X_WINS" } },
    XOXOXXOO_: { on: { PLAY_X_BOTTOM_RIGHT: "XOXOXXOOX" } },
    XOXOXXOXO: { on: { "": "DRAW" } },
    XOXOXXO_O: { on: { PLAY_X_BOTTOM_CENTER: "XOXOXXOXO" } },
    XOXOXXO__: {
      on: {
        PLAY_O_BOTTOM_CENTER: "XOXOXXOO_",
        PLAY_O_BOTTOM_RIGHT: "XOXOXXO_O"
      }
    },
    XOXOX_OXO: { on: { PLAY_X_MIDDLE_RIGHT: "XOXOXXOXO" } },
    XOXOX_OX_: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XOXOXOOX_",
        PLAY_O_BOTTOM_RIGHT: "XOXOX_OXO"
      }
    },
    XOXOX_O_X: { on: { "": "X_WINS" } },
    XOXOX_O__: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XOXOXXO__",
        PLAY_X_BOTTOM_CENTER: "XOXOX_OX_",
        PLAY_X_BOTTOM_RIGHT: "XOXOX_O_X"
      }
    },
    XOXOXXXOO: { on: { "": "X_WINS" } },
    XOXOXX_OO: { on: { PLAY_X_BOTTOM_LEFT: "XOXOXXXOO" } },
    XOXOXX_O_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XOXOXXOO_",
        PLAY_O_BOTTOM_RIGHT: "XOXOXX_OO"
      }
    },
    XOXOX_XO_: { on: { "": "X_WINS" } },
    XOXOX__OX: { on: { "": "X_WINS" } },
    XOXOX__O_: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XOXOXX_O_",
        PLAY_X_BOTTOM_LEFT: "XOXOX_XO_",
        PLAY_X_BOTTOM_RIGHT: "XOXOX__OX"
      }
    },
    XOXOXX__O: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XOXOXXO_O",
        PLAY_O_BOTTOM_CENTER: "XOXOXX_OO"
      }
    },
    XOXOX_X_O: { on: { "": "X_WINS" } },
    XOXOX__XO: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XOXOXO_XO",
        PLAY_O_BOTTOM_LEFT: "XOXOX_OXO"
      }
    },
    XOXOX___O: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XOXOXX__O",
        PLAY_X_BOTTOM_LEFT: "XOXOX_X_O",
        PLAY_X_BOTTOM_CENTER: "XOXOX__XO"
      }
    },
    XOXOX____: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XOXOXO___",
        PLAY_O_BOTTOM_LEFT: "XOXOX_O__",
        PLAY_O_BOTTOM_CENTER: "XOXOX__O_",
        PLAY_O_BOTTOM_RIGHT: "XOXOX___O"
      }
    },
    XOXOOXXO_: { on: { "": "O_WINS" } },
    XOXOOXXXO: { on: { "": "DRAW" } },
    XOXOOXX_O: { on: { PLAY_X_BOTTOM_CENTER: "XOXOOXXXO" } },
    XOXOOXX__: {
      on: {
        PLAY_O_BOTTOM_CENTER: "XOXOOXXO_",
        PLAY_O_BOTTOM_RIGHT: "XOXOOXX_O"
      }
    },
    XOXOOXOXX: { on: { "": "X_WINS" } },
    XOXOOXOX_: { on: { PLAY_X_BOTTOM_RIGHT: "XOXOOXOXX" } },
    XOXOOX_XO: { on: { PLAY_X_BOTTOM_LEFT: "XOXOOXXXO" } },
    XOXOOX_X_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XOXOOXOX_",
        PLAY_O_BOTTOM_RIGHT: "XOXOOX_XO"
      }
    },
    XOXOOX__X: { on: { "": "X_WINS" } },
    XOXOOX___: {
      on: {
        PLAY_X_BOTTOM_LEFT: "XOXOOXX__",
        PLAY_X_BOTTOM_CENTER: "XOXOOX_X_",
        PLAY_X_BOTTOM_RIGHT: "XOXOOX__X"
      }
    },
    XOXO_XOXO: { on: { PLAY_X_CENTER: "XOXOXXOXO" } },
    XOXO_XOX_: {
      on: { PLAY_O_CENTER: "XOXOOXOX_", PLAY_O_BOTTOM_RIGHT: "XOXO_XOXO" }
    },
    XOXO_XO_X: { on: { "": "X_WINS" } },
    XOXO_XO__: {
      on: {
        PLAY_X_CENTER: "XOXOXXO__",
        PLAY_X_BOTTOM_CENTER: "XOXO_XOX_",
        PLAY_X_BOTTOM_RIGHT: "XOXO_XO_X"
      }
    },
    XOXO_XXOO: { on: { PLAY_X_CENTER: "XOXOXXXOO" } },
    XOXO_XXO_: {
      on: { PLAY_O_CENTER: "XOXOOXXO_", PLAY_O_BOTTOM_RIGHT: "XOXO_XXOO" }
    },
    XOXO_X_OX: { on: { "": "X_WINS" } },
    XOXO_X_O_: {
      on: {
        PLAY_X_CENTER: "XOXOXX_O_",
        PLAY_X_BOTTOM_LEFT: "XOXO_XXO_",
        PLAY_X_BOTTOM_RIGHT: "XOXO_X_OX"
      }
    },
    XOXO_XX_O: {
      on: { PLAY_O_CENTER: "XOXOOXX_O", PLAY_O_BOTTOM_CENTER: "XOXO_XXOO" }
    },
    XOXO_X_XO: {
      on: { PLAY_O_CENTER: "XOXOOX_XO", PLAY_O_BOTTOM_LEFT: "XOXO_XOXO" }
    },
    XOXO_X__O: {
      on: {
        PLAY_X_CENTER: "XOXOXX__O",
        PLAY_X_BOTTOM_LEFT: "XOXO_XX_O",
        PLAY_X_BOTTOM_CENTER: "XOXO_X_XO"
      }
    },
    XOXO_X___: {
      on: {
        PLAY_O_CENTER: "XOXOOX___",
        PLAY_O_BOTTOM_LEFT: "XOXO_XO__",
        PLAY_O_BOTTOM_CENTER: "XOXO_X_O_",
        PLAY_O_BOTTOM_RIGHT: "XOXO_X__O"
      }
    },
    XOXOOOXX_: { on: { "": "O_WINS" } },
    XOXOO_XXO: { on: { PLAY_X_MIDDLE_RIGHT: "XOXOOXXXO" } },
    XOXOO_XX_: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XOXOOOXX_",
        PLAY_O_BOTTOM_RIGHT: "XOXOO_XXO"
      }
    },
    XOXOOOX_X: { on: { "": "O_WINS" } },
    XOXOO_XOX: { on: { "": "O_WINS" } },
    XOXOO_X_X: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XOXOOOX_X",
        PLAY_O_BOTTOM_CENTER: "XOXOO_XOX"
      }
    },
    XOXOO_X__: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XOXOOXX__",
        PLAY_X_BOTTOM_CENTER: "XOXOO_XX_",
        PLAY_X_BOTTOM_RIGHT: "XOXOO_X_X"
      }
    },
    XOXO_OXXO: { on: { PLAY_X_CENTER: "XOXOXOXXO" } },
    XOXO_OXX_: {
      on: { PLAY_O_CENTER: "XOXOOOXX_", PLAY_O_BOTTOM_RIGHT: "XOXO_OXXO" }
    },
    XOXOXOXOX: { on: { "": "X_WINS" } },
    XOXO_OXOX: { on: { PLAY_X_CENTER: "XOXOXOXOX" } },
    XOXO_OX_X: {
      on: { PLAY_O_CENTER: "XOXOOOX_X", PLAY_O_BOTTOM_CENTER: "XOXO_OXOX" }
    },
    XOXO_OX__: {
      on: {
        PLAY_X_CENTER: "XOXOXOX__",
        PLAY_X_BOTTOM_CENTER: "XOXO_OXX_",
        PLAY_X_BOTTOM_RIGHT: "XOXO_OX_X"
      }
    },
    XOXO__XOX: {
      on: { PLAY_O_CENTER: "XOXOO_XOX", PLAY_O_MIDDLE_RIGHT: "XOXO_OXOX" }
    },
    XOXO__XO_: {
      on: {
        PLAY_X_CENTER: "XOXOX_XO_",
        PLAY_X_MIDDLE_RIGHT: "XOXO_XXO_",
        PLAY_X_BOTTOM_RIGHT: "XOXO__XOX"
      }
    },
    XOXO__XXO: {
      on: { PLAY_O_CENTER: "XOXOO_XXO", PLAY_O_MIDDLE_RIGHT: "XOXO_OXXO" }
    },
    XOXO__X_O: {
      on: {
        PLAY_X_CENTER: "XOXOX_X_O",
        PLAY_X_MIDDLE_RIGHT: "XOXO_XX_O",
        PLAY_X_BOTTOM_CENTER: "XOXO__XXO"
      }
    },
    XOXO__X__: {
      on: {
        PLAY_O_CENTER: "XOXOO_X__",
        PLAY_O_MIDDLE_RIGHT: "XOXO_OX__",
        PLAY_O_BOTTOM_CENTER: "XOXO__XO_",
        PLAY_O_BOTTOM_RIGHT: "XOXO__X_O"
      }
    },
    XOXOOO_XX: { on: { "": "O_WINS" } },
    XOXOO_OXX: { on: { PLAY_X_MIDDLE_RIGHT: "XOXOOXOXX" } },
    XOXOO__XX: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XOXOOO_XX",
        PLAY_O_BOTTOM_LEFT: "XOXOO_OXX"
      }
    },
    XOXOO__X_: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XOXOOX_X_",
        PLAY_X_BOTTOM_LEFT: "XOXOO_XX_",
        PLAY_X_BOTTOM_RIGHT: "XOXOO__XX"
      }
    },
    XOXO_OOXX: { on: { PLAY_X_CENTER: "XOXOXOOXX" } },
    XOXO_O_XX: {
      on: { PLAY_O_CENTER: "XOXOOO_XX", PLAY_O_BOTTOM_LEFT: "XOXO_OOXX" }
    },
    XOXO_O_X_: {
      on: {
        PLAY_X_CENTER: "XOXOXO_X_",
        PLAY_X_BOTTOM_LEFT: "XOXO_OXX_",
        PLAY_X_BOTTOM_RIGHT: "XOXO_O_XX"
      }
    },
    XOXO__OXX: {
      on: { PLAY_O_CENTER: "XOXOO_OXX", PLAY_O_MIDDLE_RIGHT: "XOXO_OOXX" }
    },
    XOXO__OX_: {
      on: {
        PLAY_X_CENTER: "XOXOX_OX_",
        PLAY_X_MIDDLE_RIGHT: "XOXO_XOX_",
        PLAY_X_BOTTOM_RIGHT: "XOXO__OXX"
      }
    },
    XOXO___XO: {
      on: {
        PLAY_X_CENTER: "XOXOX__XO",
        PLAY_X_MIDDLE_RIGHT: "XOXO_X_XO",
        PLAY_X_BOTTOM_LEFT: "XOXO__XXO"
      }
    },
    XOXO___X_: {
      on: {
        PLAY_O_CENTER: "XOXOO__X_",
        PLAY_O_MIDDLE_RIGHT: "XOXO_O_X_",
        PLAY_O_BOTTOM_LEFT: "XOXO__OX_",
        PLAY_O_BOTTOM_RIGHT: "XOXO___XO"
      }
    },
    XOXOO___X: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XOXOOX__X",
        PLAY_X_BOTTOM_LEFT: "XOXOO_X_X",
        PLAY_X_BOTTOM_CENTER: "XOXOO__XX"
      }
    },
    XOXO_O__X: {
      on: {
        PLAY_X_CENTER: "XOXOXO__X",
        PLAY_X_BOTTOM_LEFT: "XOXO_OX_X",
        PLAY_X_BOTTOM_CENTER: "XOXO_O_XX"
      }
    },
    XOXO__O_X: {
      on: {
        PLAY_X_CENTER: "XOXOX_O_X",
        PLAY_X_MIDDLE_RIGHT: "XOXO_XO_X",
        PLAY_X_BOTTOM_CENTER: "XOXO__OXX"
      }
    },
    XOXO___OX: {
      on: {
        PLAY_X_CENTER: "XOXOX__OX",
        PLAY_X_MIDDLE_RIGHT: "XOXO_X_OX",
        PLAY_X_BOTTOM_LEFT: "XOXO__XOX"
      }
    },
    XOXO____X: {
      on: {
        PLAY_O_CENTER: "XOXOO___X",
        PLAY_O_MIDDLE_RIGHT: "XOXO_O__X",
        PLAY_O_BOTTOM_LEFT: "XOXO__O_X",
        PLAY_O_BOTTOM_CENTER: "XOXO___OX"
      }
    },
    XOXO_____: {
      on: {
        PLAY_X_CENTER: "XOXOX____",
        PLAY_X_MIDDLE_RIGHT: "XOXO_X___",
        PLAY_X_BOTTOM_LEFT: "XOXO__X__",
        PLAY_X_BOTTOM_CENTER: "XOXO___X_",
        PLAY_X_BOTTOM_RIGHT: "XOXO____X"
      }
    },
    XOXXOOX__: { on: { "": "X_WINS" } },
    XOXXOOOXX: { on: { "": "DRAW" } },
    XOXXOOOX_: { on: { PLAY_X_BOTTOM_RIGHT: "XOXXOOOXX" } },
    XOXXOOXXO: { on: { "": "X_WINS" } },
    XOXXOO_XO: { on: { PLAY_X_BOTTOM_LEFT: "XOXXOOXXO" } },
    XOXXOO_X_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XOXXOOOX_",
        PLAY_O_BOTTOM_RIGHT: "XOXXOO_XO"
      }
    },
    XOXXOOO_X: { on: { PLAY_X_BOTTOM_CENTER: "XOXXOOOXX" } },
    XOXXOO_OX: { on: { "": "O_WINS" } },
    XOXXOO__X: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XOXXOOO_X",
        PLAY_O_BOTTOM_CENTER: "XOXXOO_OX"
      }
    },
    XOXXOO___: {
      on: {
        PLAY_X_BOTTOM_LEFT: "XOXXOOX__",
        PLAY_X_BOTTOM_CENTER: "XOXXOO_X_",
        PLAY_X_BOTTOM_RIGHT: "XOXXOO__X"
      }
    },
    XOXXOXOO_: { on: { "": "O_WINS" } },
    XOXXOXOXO: { on: { "": "DRAW" } },
    XOXXOXO_O: { on: { PLAY_X_BOTTOM_CENTER: "XOXXOXOXO" } },
    XOXXOXO__: {
      on: {
        PLAY_O_BOTTOM_CENTER: "XOXXOXOO_",
        PLAY_O_BOTTOM_RIGHT: "XOXXOXO_O"
      }
    },
    XOXXO_OXO: { on: { PLAY_X_MIDDLE_RIGHT: "XOXXOXOXO" } },
    XOXXO_OX_: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XOXXOOOX_",
        PLAY_O_BOTTOM_RIGHT: "XOXXO_OXO"
      }
    },
    XOXXO_OOX: { on: { "": "O_WINS" } },
    XOXXO_O_X: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XOXXOOO_X",
        PLAY_O_BOTTOM_CENTER: "XOXXO_OOX"
      }
    },
    XOXXO_O__: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XOXXOXO__",
        PLAY_X_BOTTOM_CENTER: "XOXXO_OX_",
        PLAY_X_BOTTOM_RIGHT: "XOXXO_O_X"
      }
    },
    XOXXO__O_: { on: { "": "O_WINS" } },
    XOXXOX_OO: { on: { "": "O_WINS" } },
    XOXXOX__O: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XOXXOXO_O",
        PLAY_O_BOTTOM_CENTER: "XOXXOX_OO"
      }
    },
    XOXXO_X_O: { on: { "": "X_WINS" } },
    XOXXO__XO: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XOXXOO_XO",
        PLAY_O_BOTTOM_LEFT: "XOXXO_OXO"
      }
    },
    XOXXO___O: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XOXXOX__O",
        PLAY_X_BOTTOM_LEFT: "XOXXO_X_O",
        PLAY_X_BOTTOM_CENTER: "XOXXO__XO"
      }
    },
    XOXXO____: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XOXXOO___",
        PLAY_O_BOTTOM_LEFT: "XOXXO_O__",
        PLAY_O_BOTTOM_CENTER: "XOXXO__O_",
        PLAY_O_BOTTOM_RIGHT: "XOXXO___O"
      }
    },
    XOX_OXOXO: { on: { PLAY_X_MIDDLE_LEFT: "XOXXOXOXO" } },
    XOX_OXOX_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXOOXOX_",
        PLAY_O_BOTTOM_RIGHT: "XOX_OXOXO"
      }
    },
    XOX_OXO_X: { on: { "": "X_WINS" } },
    XOX_OXO__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXXOXO__",
        PLAY_X_BOTTOM_CENTER: "XOX_OXOX_",
        PLAY_X_BOTTOM_RIGHT: "XOX_OXO_X"
      }
    },
    XOX_OX_O_: { on: { "": "O_WINS" } },
    XOX_OXXOO: { on: { "": "O_WINS" } },
    XOX_OXX_O: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXOOXX_O",
        PLAY_O_BOTTOM_CENTER: "XOX_OXXOO"
      }
    },
    XOX_OX_XO: {
      on: { PLAY_O_MIDDLE_LEFT: "XOXOOX_XO", PLAY_O_BOTTOM_LEFT: "XOX_OXOXO" }
    },
    XOX_OX__O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXXOX__O",
        PLAY_X_BOTTOM_LEFT: "XOX_OXX_O",
        PLAY_X_BOTTOM_CENTER: "XOX_OX_XO"
      }
    },
    XOX_OX___: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXOOX___",
        PLAY_O_BOTTOM_LEFT: "XOX_OXO__",
        PLAY_O_BOTTOM_CENTER: "XOX_OX_O_",
        PLAY_O_BOTTOM_RIGHT: "XOX_OX__O"
      }
    },
    XOX_OOXXO: { on: { PLAY_X_MIDDLE_LEFT: "XOXXOOXXO" } },
    XOX_OOXX_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXOOOXX_",
        PLAY_O_BOTTOM_RIGHT: "XOX_OOXXO"
      }
    },
    XOX_OOXOX: { on: { "": "O_WINS" } },
    XOX_OOX_X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXOOOX_X",
        PLAY_O_BOTTOM_CENTER: "XOX_OOXOX"
      }
    },
    XOX_OOX__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXXOOX__",
        PLAY_X_BOTTOM_CENTER: "XOX_OOXX_",
        PLAY_X_BOTTOM_RIGHT: "XOX_OOX_X"
      }
    },
    XOX_O_XO_: { on: { "": "O_WINS" } },
    XOX_O_XXO: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXOO_XXO",
        PLAY_O_MIDDLE_RIGHT: "XOX_OOXXO"
      }
    },
    XOX_O_X_O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXXO_X_O",
        PLAY_X_MIDDLE_RIGHT: "XOX_OXX_O",
        PLAY_X_BOTTOM_CENTER: "XOX_O_XXO"
      }
    },
    XOX_O_X__: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXOO_X__",
        PLAY_O_MIDDLE_RIGHT: "XOX_OOX__",
        PLAY_O_BOTTOM_CENTER: "XOX_O_XO_",
        PLAY_O_BOTTOM_RIGHT: "XOX_O_X_O"
      }
    },
    XOX_OOOXX: { on: { PLAY_X_MIDDLE_LEFT: "XOXXOOOXX" } },
    XOX_OO_XX: {
      on: { PLAY_O_MIDDLE_LEFT: "XOXOOO_XX", PLAY_O_BOTTOM_LEFT: "XOX_OOOXX" }
    },
    XOX_OO_X_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXXOO_X_",
        PLAY_X_BOTTOM_LEFT: "XOX_OOXX_",
        PLAY_X_BOTTOM_RIGHT: "XOX_OO_XX"
      }
    },
    XOX_O_OXX: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXOO_OXX",
        PLAY_O_MIDDLE_RIGHT: "XOX_OOOXX"
      }
    },
    XOX_O_OX_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXXO_OX_",
        PLAY_X_MIDDLE_RIGHT: "XOX_OXOX_",
        PLAY_X_BOTTOM_RIGHT: "XOX_O_OXX"
      }
    },
    XOX_O__XO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXXO__XO",
        PLAY_X_MIDDLE_RIGHT: "XOX_OX_XO",
        PLAY_X_BOTTOM_LEFT: "XOX_O_XXO"
      }
    },
    XOX_O__X_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXOO__X_",
        PLAY_O_MIDDLE_RIGHT: "XOX_OO_X_",
        PLAY_O_BOTTOM_LEFT: "XOX_O_OX_",
        PLAY_O_BOTTOM_RIGHT: "XOX_O__XO"
      }
    },
    XOX_OO__X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXXOO__X",
        PLAY_X_BOTTOM_LEFT: "XOX_OOX_X",
        PLAY_X_BOTTOM_CENTER: "XOX_OO_XX"
      }
    },
    XOX_O_O_X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXXO_O_X",
        PLAY_X_MIDDLE_RIGHT: "XOX_OXO_X",
        PLAY_X_BOTTOM_CENTER: "XOX_O_OXX"
      }
    },
    XOX_O__OX: { on: { "": "O_WINS" } },
    XOX_O___X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXOO___X",
        PLAY_O_MIDDLE_RIGHT: "XOX_OO__X",
        PLAY_O_BOTTOM_LEFT: "XOX_O_O_X",
        PLAY_O_BOTTOM_CENTER: "XOX_O__OX"
      }
    },
    XOX_O____: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXXO____",
        PLAY_X_MIDDLE_RIGHT: "XOX_OX___",
        PLAY_X_BOTTOM_LEFT: "XOX_O_X__",
        PLAY_X_BOTTOM_CENTER: "XOX_O__X_",
        PLAY_X_BOTTOM_RIGHT: "XOX_O___X"
      }
    },
    XOXXXOOOX: { on: { "": "X_WINS" } },
    XOXXXOOO_: { on: { PLAY_X_BOTTOM_RIGHT: "XOXXXOOOX" } },
    XOXXXOOXO: { on: { "": "DRAW" } },
    XOXXXOO_O: { on: { PLAY_X_BOTTOM_CENTER: "XOXXXOOXO" } },
    XOXXXOO__: {
      on: {
        PLAY_O_BOTTOM_CENTER: "XOXXXOOO_",
        PLAY_O_BOTTOM_RIGHT: "XOXXXOO_O"
      }
    },
    XOXX_OOXO: { on: { PLAY_X_CENTER: "XOXXXOOXO" } },
    XOXX_OOX_: {
      on: { PLAY_O_CENTER: "XOXXOOOX_", PLAY_O_BOTTOM_RIGHT: "XOXX_OOXO" }
    },
    XOXX_OOOX: { on: { PLAY_X_CENTER: "XOXXXOOOX" } },
    XOXX_OO_X: {
      on: { PLAY_O_CENTER: "XOXXOOO_X", PLAY_O_BOTTOM_CENTER: "XOXX_OOOX" }
    },
    XOXX_OO__: {
      on: {
        PLAY_X_CENTER: "XOXXXOO__",
        PLAY_X_BOTTOM_CENTER: "XOXX_OOX_",
        PLAY_X_BOTTOM_RIGHT: "XOXX_OO_X"
      }
    },
    XOXXXOXOO: { on: { "": "X_WINS" } },
    XOXXXO_OO: { on: { PLAY_X_BOTTOM_LEFT: "XOXXXOXOO" } },
    XOXXXO_O_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XOXXXOOO_",
        PLAY_O_BOTTOM_RIGHT: "XOXXXO_OO"
      }
    },
    XOXX_OXO_: { on: { "": "X_WINS" } },
    XOXX_O_OX: {
      on: { PLAY_O_CENTER: "XOXXOO_OX", PLAY_O_BOTTOM_LEFT: "XOXX_OOOX" }
    },
    XOXX_O_O_: {
      on: {
        PLAY_X_CENTER: "XOXXXO_O_",
        PLAY_X_BOTTOM_LEFT: "XOXX_OXO_",
        PLAY_X_BOTTOM_RIGHT: "XOXX_O_OX"
      }
    },
    XOXXXO__O: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XOXXXOO_O",
        PLAY_O_BOTTOM_CENTER: "XOXXXO_OO"
      }
    },
    XOXX_OX_O: { on: { "": "X_WINS" } },
    XOXX_O_XO: {
      on: { PLAY_O_CENTER: "XOXXOO_XO", PLAY_O_BOTTOM_LEFT: "XOXX_OOXO" }
    },
    XOXX_O__O: {
      on: {
        PLAY_X_CENTER: "XOXXXO__O",
        PLAY_X_BOTTOM_LEFT: "XOXX_OX_O",
        PLAY_X_BOTTOM_CENTER: "XOXX_O_XO"
      }
    },
    XOXX_O___: {
      on: {
        PLAY_O_CENTER: "XOXXOO___",
        PLAY_O_BOTTOM_LEFT: "XOXX_OO__",
        PLAY_O_BOTTOM_CENTER: "XOXX_O_O_",
        PLAY_O_BOTTOM_RIGHT: "XOXX_O__O"
      }
    },
    XOX_XOOXO: { on: { PLAY_X_MIDDLE_LEFT: "XOXXXOOXO" } },
    XOX_XOOX_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXOXOOX_",
        PLAY_O_BOTTOM_RIGHT: "XOX_XOOXO"
      }
    },
    XOX_XOO_X: { on: { "": "X_WINS" } },
    XOX_XOO__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXXXOO__",
        PLAY_X_BOTTOM_CENTER: "XOX_XOOX_",
        PLAY_X_BOTTOM_RIGHT: "XOX_XOO_X"
      }
    },
    XOX_XOXO_: { on: { "": "X_WINS" } },
    XOX_XO_OX: { on: { "": "X_WINS" } },
    XOX_XO_O_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXXXO_O_",
        PLAY_X_BOTTOM_LEFT: "XOX_XOXO_",
        PLAY_X_BOTTOM_RIGHT: "XOX_XO_OX"
      }
    },
    XOX_XOX_O: { on: { "": "X_WINS" } },
    XOX_XO_XO: {
      on: { PLAY_O_MIDDLE_LEFT: "XOXOXO_XO", PLAY_O_BOTTOM_LEFT: "XOX_XOOXO" }
    },
    XOX_XO__O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXXXO__O",
        PLAY_X_BOTTOM_LEFT: "XOX_XOX_O",
        PLAY_X_BOTTOM_CENTER: "XOX_XO_XO"
      }
    },
    XOX_XO___: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXOXO___",
        PLAY_O_BOTTOM_LEFT: "XOX_XOO__",
        PLAY_O_BOTTOM_CENTER: "XOX_XO_O_",
        PLAY_O_BOTTOM_RIGHT: "XOX_XO__O"
      }
    },
    XOX__OXOX: {
      on: { PLAY_O_MIDDLE_LEFT: "XOXO_OXOX", PLAY_O_CENTER: "XOX_OOXOX" }
    },
    XOX__OXO_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXX_OXO_",
        PLAY_X_CENTER: "XOX_XOXO_",
        PLAY_X_BOTTOM_RIGHT: "XOX__OXOX"
      }
    },
    XOX__OXXO: {
      on: { PLAY_O_MIDDLE_LEFT: "XOXO_OXXO", PLAY_O_CENTER: "XOX_OOXXO" }
    },
    XOX__OX_O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXX_OX_O",
        PLAY_X_CENTER: "XOX_XOX_O",
        PLAY_X_BOTTOM_CENTER: "XOX__OXXO"
      }
    },
    XOX__OX__: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXO_OX__",
        PLAY_O_CENTER: "XOX_OOX__",
        PLAY_O_BOTTOM_CENTER: "XOX__OXO_",
        PLAY_O_BOTTOM_RIGHT: "XOX__OX_O"
      }
    },
    XOX__OOXX: {
      on: { PLAY_O_MIDDLE_LEFT: "XOXO_OOXX", PLAY_O_CENTER: "XOX_OOOXX" }
    },
    XOX__OOX_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXX_OOX_",
        PLAY_X_CENTER: "XOX_XOOX_",
        PLAY_X_BOTTOM_RIGHT: "XOX__OOXX"
      }
    },
    XOX__O_XO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXX_O_XO",
        PLAY_X_CENTER: "XOX_XO_XO",
        PLAY_X_BOTTOM_LEFT: "XOX__OXXO"
      }
    },
    XOX__O_X_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXO_O_X_",
        PLAY_O_CENTER: "XOX_OO_X_",
        PLAY_O_BOTTOM_LEFT: "XOX__OOX_",
        PLAY_O_BOTTOM_RIGHT: "XOX__O_XO"
      }
    },
    XOX__OO_X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXX_OO_X",
        PLAY_X_CENTER: "XOX_XOO_X",
        PLAY_X_BOTTOM_CENTER: "XOX__OOXX"
      }
    },
    XOX__O_OX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXX_O_OX",
        PLAY_X_CENTER: "XOX_XO_OX",
        PLAY_X_BOTTOM_LEFT: "XOX__OXOX"
      }
    },
    XOX__O__X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXO_O__X",
        PLAY_O_CENTER: "XOX_OO__X",
        PLAY_O_BOTTOM_LEFT: "XOX__OO_X",
        PLAY_O_BOTTOM_CENTER: "XOX__O_OX"
      }
    },
    XOX__O___: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXX_O___",
        PLAY_X_CENTER: "XOX_XO___",
        PLAY_X_BOTTOM_LEFT: "XOX__OX__",
        PLAY_X_BOTTOM_CENTER: "XOX__O_X_",
        PLAY_X_BOTTOM_RIGHT: "XOX__O__X"
      }
    },
    XOXXX_OOO: { on: { "": "O_WINS" } },
    XOXXX_OO_: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XOXXXOOO_",
        PLAY_O_BOTTOM_RIGHT: "XOXXX_OOO"
      }
    },
    XOXX_XOOO: { on: { "": "O_WINS" } },
    XOXX_XOO_: {
      on: { PLAY_O_CENTER: "XOXXOXOO_", PLAY_O_BOTTOM_RIGHT: "XOXX_XOOO" }
    },
    XOXX__OOX: {
      on: { PLAY_O_CENTER: "XOXXO_OOX", PLAY_O_MIDDLE_RIGHT: "XOXX_OOOX" }
    },
    XOXX__OO_: {
      on: {
        PLAY_X_CENTER: "XOXXX_OO_",
        PLAY_X_MIDDLE_RIGHT: "XOXX_XOO_",
        PLAY_X_BOTTOM_RIGHT: "XOXX__OOX"
      }
    },
    XOXXX_O_O: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XOXXXOO_O",
        PLAY_O_BOTTOM_CENTER: "XOXXX_OOO"
      }
    },
    XOXX_XO_O: {
      on: { PLAY_O_CENTER: "XOXXOXO_O", PLAY_O_BOTTOM_CENTER: "XOXX_XOOO" }
    },
    XOXX__OXO: {
      on: { PLAY_O_CENTER: "XOXXO_OXO", PLAY_O_MIDDLE_RIGHT: "XOXX_OOXO" }
    },
    XOXX__O_O: {
      on: {
        PLAY_X_CENTER: "XOXXX_O_O",
        PLAY_X_MIDDLE_RIGHT: "XOXX_XO_O",
        PLAY_X_BOTTOM_CENTER: "XOXX__OXO"
      }
    },
    XOXX__O__: {
      on: {
        PLAY_O_CENTER: "XOXXO_O__",
        PLAY_O_MIDDLE_RIGHT: "XOXX_OO__",
        PLAY_O_BOTTOM_CENTER: "XOXX__OO_",
        PLAY_O_BOTTOM_RIGHT: "XOXX__O_O"
      }
    },
    XOX_XXOOO: { on: { "": "O_WINS" } },
    XOX_XXOO_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXOXXOO_",
        PLAY_O_BOTTOM_RIGHT: "XOX_XXOOO"
      }
    },
    XOX_X_OOX: { on: { "": "X_WINS" } },
    XOX_X_OO_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXXX_OO_",
        PLAY_X_MIDDLE_RIGHT: "XOX_XXOO_",
        PLAY_X_BOTTOM_RIGHT: "XOX_X_OOX"
      }
    },
    XOX_XXO_O: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXOXXO_O",
        PLAY_O_BOTTOM_CENTER: "XOX_XXOOO"
      }
    },
    XOX_X_OXO: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXOX_OXO",
        PLAY_O_MIDDLE_RIGHT: "XOX_XOOXO"
      }
    },
    XOX_X_O_O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXXX_O_O",
        PLAY_X_MIDDLE_RIGHT: "XOX_XXO_O",
        PLAY_X_BOTTOM_CENTER: "XOX_X_OXO"
      }
    },
    XOX_X_O__: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXOX_O__",
        PLAY_O_MIDDLE_RIGHT: "XOX_XOO__",
        PLAY_O_BOTTOM_CENTER: "XOX_X_OO_",
        PLAY_O_BOTTOM_RIGHT: "XOX_X_O_O"
      }
    },
    XOX__XOOX: { on: { "": "X_WINS" } },
    XOX__XOO_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXX_XOO_",
        PLAY_X_CENTER: "XOX_XXOO_",
        PLAY_X_BOTTOM_RIGHT: "XOX__XOOX"
      }
    },
    XOX__XOXO: {
      on: { PLAY_O_MIDDLE_LEFT: "XOXO_XOXO", PLAY_O_CENTER: "XOX_OXOXO" }
    },
    XOX__XO_O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXX_XO_O",
        PLAY_X_CENTER: "XOX_XXO_O",
        PLAY_X_BOTTOM_CENTER: "XOX__XOXO"
      }
    },
    XOX__XO__: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXO_XO__",
        PLAY_O_CENTER: "XOX_OXO__",
        PLAY_O_BOTTOM_CENTER: "XOX__XOO_",
        PLAY_O_BOTTOM_RIGHT: "XOX__XO_O"
      }
    },
    XOX___OXO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXX__OXO",
        PLAY_X_CENTER: "XOX_X_OXO",
        PLAY_X_MIDDLE_RIGHT: "XOX__XOXO"
      }
    },
    XOX___OX_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXO__OX_",
        PLAY_O_CENTER: "XOX_O_OX_",
        PLAY_O_MIDDLE_RIGHT: "XOX__OOX_",
        PLAY_O_BOTTOM_RIGHT: "XOX___OXO"
      }
    },
    XOX___OOX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXX__OOX",
        PLAY_X_CENTER: "XOX_X_OOX",
        PLAY_X_MIDDLE_RIGHT: "XOX__XOOX"
      }
    },
    XOX___O_X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXO__O_X",
        PLAY_O_CENTER: "XOX_O_O_X",
        PLAY_O_MIDDLE_RIGHT: "XOX__OO_X",
        PLAY_O_BOTTOM_CENTER: "XOX___OOX"
      }
    },
    XOX___O__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXX__O__",
        PLAY_X_CENTER: "XOX_X_O__",
        PLAY_X_MIDDLE_RIGHT: "XOX__XO__",
        PLAY_X_BOTTOM_CENTER: "XOX___OX_",
        PLAY_X_BOTTOM_RIGHT: "XOX___O_X"
      }
    },
    XOXXX__OO: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XOXXXO_OO",
        PLAY_O_BOTTOM_LEFT: "XOXXX_OOO"
      }
    },
    XOXX_X_OO: {
      on: { PLAY_O_CENTER: "XOXXOX_OO", PLAY_O_BOTTOM_LEFT: "XOXX_XOOO" }
    },
    XOXX__XOO: { on: { "": "X_WINS" } },
    XOXX___OO: {
      on: {
        PLAY_X_CENTER: "XOXXX__OO",
        PLAY_X_MIDDLE_RIGHT: "XOXX_X_OO",
        PLAY_X_BOTTOM_LEFT: "XOXX__XOO"
      }
    },
    XOXX___O_: {
      on: {
        PLAY_O_CENTER: "XOXXO__O_",
        PLAY_O_MIDDLE_RIGHT: "XOXX_O_O_",
        PLAY_O_BOTTOM_LEFT: "XOXX__OO_",
        PLAY_O_BOTTOM_RIGHT: "XOXX___OO"
      }
    },
    XOX_XX_OO: {
      on: { PLAY_O_MIDDLE_LEFT: "XOXOXX_OO", PLAY_O_BOTTOM_LEFT: "XOX_XXOOO" }
    },
    XOX_X_XOO: { on: { "": "X_WINS" } },
    XOX_X__OO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXXX__OO",
        PLAY_X_MIDDLE_RIGHT: "XOX_XX_OO",
        PLAY_X_BOTTOM_LEFT: "XOX_X_XOO"
      }
    },
    XOX_X__O_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXOX__O_",
        PLAY_O_MIDDLE_RIGHT: "XOX_XO_O_",
        PLAY_O_BOTTOM_LEFT: "XOX_X_OO_",
        PLAY_O_BOTTOM_RIGHT: "XOX_X__OO"
      }
    },
    XOX__XXOO: {
      on: { PLAY_O_MIDDLE_LEFT: "XOXO_XXOO", PLAY_O_CENTER: "XOX_OXXOO" }
    },
    XOX__X_OO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXX_X_OO",
        PLAY_X_CENTER: "XOX_XX_OO",
        PLAY_X_BOTTOM_LEFT: "XOX__XXOO"
      }
    },
    XOX__X_O_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXO_X_O_",
        PLAY_O_CENTER: "XOX_OX_O_",
        PLAY_O_BOTTOM_LEFT: "XOX__XOO_",
        PLAY_O_BOTTOM_RIGHT: "XOX__X_OO"
      }
    },
    XOX___XOO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXX__XOO",
        PLAY_X_CENTER: "XOX_X_XOO",
        PLAY_X_MIDDLE_RIGHT: "XOX__XXOO"
      }
    },
    XOX___XO_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXO__XO_",
        PLAY_O_CENTER: "XOX_O_XO_",
        PLAY_O_MIDDLE_RIGHT: "XOX__OXO_",
        PLAY_O_BOTTOM_RIGHT: "XOX___XOO"
      }
    },
    XOX____OX: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXO___OX",
        PLAY_O_CENTER: "XOX_O__OX",
        PLAY_O_MIDDLE_RIGHT: "XOX__O_OX",
        PLAY_O_BOTTOM_LEFT: "XOX___OOX"
      }
    },
    XOX____O_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXX___O_",
        PLAY_X_CENTER: "XOX_X__O_",
        PLAY_X_MIDDLE_RIGHT: "XOX__X_O_",
        PLAY_X_BOTTOM_LEFT: "XOX___XO_",
        PLAY_X_BOTTOM_RIGHT: "XOX____OX"
      }
    },
    XOXX____O: {
      on: {
        PLAY_O_CENTER: "XOXXO___O",
        PLAY_O_MIDDLE_RIGHT: "XOXX_O__O",
        PLAY_O_BOTTOM_LEFT: "XOXX__O_O",
        PLAY_O_BOTTOM_CENTER: "XOXX___OO"
      }
    },
    XOX_X___O: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXOX___O",
        PLAY_O_MIDDLE_RIGHT: "XOX_XO__O",
        PLAY_O_BOTTOM_LEFT: "XOX_X_O_O",
        PLAY_O_BOTTOM_CENTER: "XOX_X__OO"
      }
    },
    XOX__X__O: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXO_X__O",
        PLAY_O_CENTER: "XOX_OX__O",
        PLAY_O_BOTTOM_LEFT: "XOX__XO_O",
        PLAY_O_BOTTOM_CENTER: "XOX__X_OO"
      }
    },
    XOX___X_O: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXO__X_O",
        PLAY_O_CENTER: "XOX_O_X_O",
        PLAY_O_MIDDLE_RIGHT: "XOX__OX_O",
        PLAY_O_BOTTOM_CENTER: "XOX___XOO"
      }
    },
    XOX____XO: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXO___XO",
        PLAY_O_CENTER: "XOX_O__XO",
        PLAY_O_MIDDLE_RIGHT: "XOX__O_XO",
        PLAY_O_BOTTOM_LEFT: "XOX___OXO"
      }
    },
    XOX_____O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOXX____O",
        PLAY_X_CENTER: "XOX_X___O",
        PLAY_X_MIDDLE_RIGHT: "XOX__X__O",
        PLAY_X_BOTTOM_LEFT: "XOX___X_O",
        PLAY_X_BOTTOM_CENTER: "XOX____XO"
      }
    },
    XOX______: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOXO_____",
        PLAY_O_CENTER: "XOX_O____",
        PLAY_O_MIDDLE_RIGHT: "XOX__O___",
        PLAY_O_BOTTOM_LEFT: "XOX___O__",
        PLAY_O_BOTTOM_CENTER: "XOX____O_",
        PLAY_O_BOTTOM_RIGHT: "XOX_____O"
      }
    },
    XOOXXOX__: { on: { "": "X_WINS" } },
    XOOXXOOXX: { on: { "": "X_WINS" } },
    XOOXXOOX_: { on: { PLAY_X_BOTTOM_RIGHT: "XOOXXOOXX" } },
    XOOXXO_XO: { on: { "": "O_WINS" } },
    XOOXXO_X_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XOOXXOOX_",
        PLAY_O_BOTTOM_RIGHT: "XOOXXO_XO"
      }
    },
    XOOXXO__X: { on: { "": "X_WINS" } },
    XOOXXO___: {
      on: {
        PLAY_X_BOTTOM_LEFT: "XOOXXOX__",
        PLAY_X_BOTTOM_CENTER: "XOOXXO_X_",
        PLAY_X_BOTTOM_RIGHT: "XOOXXO__X"
      }
    },
    XOOXXXO__: { on: { "": "X_WINS" } },
    XOOXXXOXO: { on: { "": "X_WINS" } },
    XOOXX_OXO: { on: { PLAY_X_MIDDLE_RIGHT: "XOOXXXOXO" } },
    XOOXX_OX_: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XOOXXOOX_",
        PLAY_O_BOTTOM_RIGHT: "XOOXX_OXO"
      }
    },
    XOOXX_O_X: { on: { "": "X_WINS" } },
    XOOXX_O__: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XOOXXXO__",
        PLAY_X_BOTTOM_CENTER: "XOOXX_OX_",
        PLAY_X_BOTTOM_RIGHT: "XOOXX_O_X"
      }
    },
    XOOXXX_O_: { on: { "": "X_WINS" } },
    XOOXX_XO_: { on: { "": "X_WINS" } },
    XOOXX__OX: { on: { "": "X_WINS" } },
    XOOXX__O_: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XOOXXX_O_",
        PLAY_X_BOTTOM_LEFT: "XOOXX_XO_",
        PLAY_X_BOTTOM_RIGHT: "XOOXX__OX"
      }
    },
    XOOXXX__O: { on: { "": "X_WINS" } },
    XOOXX_X_O: { on: { "": "X_WINS" } },
    XOOXX__XO: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XOOXXO_XO",
        PLAY_O_BOTTOM_LEFT: "XOOXX_OXO"
      }
    },
    XOOXX___O: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XOOXXX__O",
        PLAY_X_BOTTOM_LEFT: "XOOXX_X_O",
        PLAY_X_BOTTOM_CENTER: "XOOXX__XO"
      }
    },
    XOOXX____: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XOOXXO___",
        PLAY_O_BOTTOM_LEFT: "XOOXX_O__",
        PLAY_O_BOTTOM_CENTER: "XOOXX__O_",
        PLAY_O_BOTTOM_RIGHT: "XOOXX___O"
      }
    },
    XOOXOXX__: { on: { "": "X_WINS" } },
    XOOXOXOX_: { on: { "": "O_WINS" } },
    XOOXOXXXO: { on: { "": "X_WINS" } },
    XOOXOX_XO: { on: { PLAY_X_BOTTOM_LEFT: "XOOXOXXXO" } },
    XOOXOX_X_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XOOXOXOX_",
        PLAY_O_BOTTOM_RIGHT: "XOOXOX_XO"
      }
    },
    XOOXOXO_X: { on: { "": "O_WINS" } },
    XOOXOX_OX: { on: { "": "O_WINS" } },
    XOOXOX__X: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XOOXOXO_X",
        PLAY_O_BOTTOM_CENTER: "XOOXOX_OX"
      }
    },
    XOOXOX___: {
      on: {
        PLAY_X_BOTTOM_LEFT: "XOOXOXX__",
        PLAY_X_BOTTOM_CENTER: "XOOXOX_X_",
        PLAY_X_BOTTOM_RIGHT: "XOOXOX__X"
      }
    },
    XOOX_XOXO: { on: { PLAY_X_CENTER: "XOOXXXOXO" } },
    XOOX_XOX_: {
      on: { PLAY_O_CENTER: "XOOXOXOX_", PLAY_O_BOTTOM_RIGHT: "XOOX_XOXO" }
    },
    XOOXXXOOX: { on: { "": "X_WINS" } },
    XOOX_XOOX: { on: { PLAY_X_CENTER: "XOOXXXOOX" } },
    XOOX_XO_X: {
      on: { PLAY_O_CENTER: "XOOXOXO_X", PLAY_O_BOTTOM_CENTER: "XOOX_XOOX" }
    },
    XOOX_XO__: {
      on: {
        PLAY_X_CENTER: "XOOXXXO__",
        PLAY_X_BOTTOM_CENTER: "XOOX_XOX_",
        PLAY_X_BOTTOM_RIGHT: "XOOX_XO_X"
      }
    },
    XOOX_XXO_: { on: { "": "X_WINS" } },
    XOOX_X_OX: {
      on: { PLAY_O_CENTER: "XOOXOX_OX", PLAY_O_BOTTOM_LEFT: "XOOX_XOOX" }
    },
    XOOX_X_O_: {
      on: {
        PLAY_X_CENTER: "XOOXXX_O_",
        PLAY_X_BOTTOM_LEFT: "XOOX_XXO_",
        PLAY_X_BOTTOM_RIGHT: "XOOX_X_OX"
      }
    },
    XOOX_XX_O: { on: { "": "X_WINS" } },
    XOOX_X_XO: {
      on: { PLAY_O_CENTER: "XOOXOX_XO", PLAY_O_BOTTOM_LEFT: "XOOX_XOXO" }
    },
    XOOX_X__O: {
      on: {
        PLAY_X_CENTER: "XOOXXX__O",
        PLAY_X_BOTTOM_LEFT: "XOOX_XX_O",
        PLAY_X_BOTTOM_CENTER: "XOOX_X_XO"
      }
    },
    XOOX_X___: {
      on: {
        PLAY_O_CENTER: "XOOXOX___",
        PLAY_O_BOTTOM_LEFT: "XOOX_XO__",
        PLAY_O_BOTTOM_CENTER: "XOOX_X_O_",
        PLAY_O_BOTTOM_RIGHT: "XOOX_X__O"
      }
    },
    XOOX__X__: { on: { "": "X_WINS" } },
    XOOXO_XX_: { on: { "": "X_WINS" } },
    XOOXOOXXX: { on: { "": "X_WINS" } },
    XOOXOO_XX: { on: { PLAY_X_BOTTOM_LEFT: "XOOXOOXXX" } },
    XOOXO_OXX: { on: { "": "O_WINS" } },
    XOOXO__XX: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XOOXOO_XX",
        PLAY_O_BOTTOM_LEFT: "XOOXO_OXX"
      }
    },
    XOOXO__X_: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XOOXOX_X_",
        PLAY_X_BOTTOM_LEFT: "XOOXO_XX_",
        PLAY_X_BOTTOM_RIGHT: "XOOXO__XX"
      }
    },
    XOOX_OXX_: { on: { "": "X_WINS" } },
    XOOX_OOXX: { on: { PLAY_X_CENTER: "XOOXXOOXX" } },
    XOOX_O_XX: {
      on: { PLAY_O_CENTER: "XOOXOO_XX", PLAY_O_BOTTOM_LEFT: "XOOX_OOXX" }
    },
    XOOX_O_X_: {
      on: {
        PLAY_X_CENTER: "XOOXXO_X_",
        PLAY_X_BOTTOM_LEFT: "XOOX_OXX_",
        PLAY_X_BOTTOM_RIGHT: "XOOX_O_XX"
      }
    },
    XOOX__OXX: {
      on: { PLAY_O_CENTER: "XOOXO_OXX", PLAY_O_MIDDLE_RIGHT: "XOOX_OOXX" }
    },
    XOOX__OX_: {
      on: {
        PLAY_X_CENTER: "XOOXX_OX_",
        PLAY_X_MIDDLE_RIGHT: "XOOX_XOX_",
        PLAY_X_BOTTOM_RIGHT: "XOOX__OXX"
      }
    },
    XOOX__XXO: { on: { "": "X_WINS" } },
    XOOX___XO: {
      on: {
        PLAY_X_CENTER: "XOOXX__XO",
        PLAY_X_MIDDLE_RIGHT: "XOOX_X_XO",
        PLAY_X_BOTTOM_LEFT: "XOOX__XXO"
      }
    },
    XOOX___X_: {
      on: {
        PLAY_O_CENTER: "XOOXO__X_",
        PLAY_O_MIDDLE_RIGHT: "XOOX_O_X_",
        PLAY_O_BOTTOM_LEFT: "XOOX__OX_",
        PLAY_O_BOTTOM_RIGHT: "XOOX___XO"
      }
    },
    XOOXO_X_X: { on: { "": "X_WINS" } },
    XOOXO___X: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XOOXOX__X",
        PLAY_X_BOTTOM_LEFT: "XOOXO_X_X",
        PLAY_X_BOTTOM_CENTER: "XOOXO__XX"
      }
    },
    XOOX_OX_X: { on: { "": "X_WINS" } },
    XOOX_O__X: {
      on: {
        PLAY_X_CENTER: "XOOXXO__X",
        PLAY_X_BOTTOM_LEFT: "XOOX_OX_X",
        PLAY_X_BOTTOM_CENTER: "XOOX_O_XX"
      }
    },
    XOOX__O_X: {
      on: {
        PLAY_X_CENTER: "XOOXX_O_X",
        PLAY_X_MIDDLE_RIGHT: "XOOX_XO_X",
        PLAY_X_BOTTOM_CENTER: "XOOX__OXX"
      }
    },
    XOOX__XOX: { on: { "": "X_WINS" } },
    XOOX___OX: {
      on: {
        PLAY_X_CENTER: "XOOXX__OX",
        PLAY_X_MIDDLE_RIGHT: "XOOX_X_OX",
        PLAY_X_BOTTOM_LEFT: "XOOX__XOX"
      }
    },
    XOOX____X: {
      on: {
        PLAY_O_CENTER: "XOOXO___X",
        PLAY_O_MIDDLE_RIGHT: "XOOX_O__X",
        PLAY_O_BOTTOM_LEFT: "XOOX__O_X",
        PLAY_O_BOTTOM_CENTER: "XOOX___OX"
      }
    },
    XOOX_____: {
      on: {
        PLAY_X_CENTER: "XOOXX____",
        PLAY_X_MIDDLE_RIGHT: "XOOX_X___",
        PLAY_X_BOTTOM_LEFT: "XOOX__X__",
        PLAY_X_BOTTOM_CENTER: "XOOX___X_",
        PLAY_X_BOTTOM_RIGHT: "XOOX____X"
      }
    },
    XO_XOXOXO: { on: { PLAY_X_TOP_RIGHT: "XOXXOXOXO" } },
    XO_XOXOX_: {
      on: { PLAY_O_TOP_RIGHT: "XOOXOXOX_", PLAY_O_BOTTOM_RIGHT: "XO_XOXOXO" }
    },
    XO_XOXOOX: { on: { "": "O_WINS" } },
    XO_XOXO_X: {
      on: { PLAY_O_TOP_RIGHT: "XOOXOXO_X", PLAY_O_BOTTOM_CENTER: "XO_XOXOOX" }
    },
    XO_XOXO__: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXXOXO__",
        PLAY_X_BOTTOM_CENTER: "XO_XOXOX_",
        PLAY_X_BOTTOM_RIGHT: "XO_XOXO_X"
      }
    },
    XO_XOX_O_: { on: { "": "O_WINS" } },
    XO_XOXX_O: { on: { "": "X_WINS" } },
    XO_XOX_XO: {
      on: { PLAY_O_TOP_RIGHT: "XOOXOX_XO", PLAY_O_BOTTOM_LEFT: "XO_XOXOXO" }
    },
    XO_XOX__O: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXXOX__O",
        PLAY_X_BOTTOM_LEFT: "XO_XOXX_O",
        PLAY_X_BOTTOM_CENTER: "XO_XOX_XO"
      }
    },
    XO_XOX___: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOXOX___",
        PLAY_O_BOTTOM_LEFT: "XO_XOXO__",
        PLAY_O_BOTTOM_CENTER: "XO_XOX_O_",
        PLAY_O_BOTTOM_RIGHT: "XO_XOX__O"
      }
    },
    XO_XO_X__: { on: { "": "X_WINS" } },
    XO_XOOXX_: { on: { "": "X_WINS" } },
    XO_XOOOXX: { on: { PLAY_X_TOP_RIGHT: "XOXXOOOXX" } },
    XO_XOO_XX: {
      on: { PLAY_O_TOP_RIGHT: "XOOXOO_XX", PLAY_O_BOTTOM_LEFT: "XO_XOOOXX" }
    },
    XO_XOO_X_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXXOO_X_",
        PLAY_X_BOTTOM_LEFT: "XO_XOOXX_",
        PLAY_X_BOTTOM_RIGHT: "XO_XOO_XX"
      }
    },
    XO_XO_OXX: {
      on: { PLAY_O_TOP_RIGHT: "XOOXO_OXX", PLAY_O_MIDDLE_RIGHT: "XO_XOOOXX" }
    },
    XO_XO_OX_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXXO_OX_",
        PLAY_X_MIDDLE_RIGHT: "XO_XOXOX_",
        PLAY_X_BOTTOM_RIGHT: "XO_XO_OXX"
      }
    },
    XO_XO_XXO: { on: { "": "X_WINS" } },
    XO_XO__XO: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXXO__XO",
        PLAY_X_MIDDLE_RIGHT: "XO_XOX_XO",
        PLAY_X_BOTTOM_LEFT: "XO_XO_XXO"
      }
    },
    XO_XO__X_: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOXO__X_",
        PLAY_O_MIDDLE_RIGHT: "XO_XOO_X_",
        PLAY_O_BOTTOM_LEFT: "XO_XO_OX_",
        PLAY_O_BOTTOM_RIGHT: "XO_XO__XO"
      }
    },
    XO_XOOX_X: { on: { "": "X_WINS" } },
    XO_XOO__X: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXXOO__X",
        PLAY_X_BOTTOM_LEFT: "XO_XOOX_X",
        PLAY_X_BOTTOM_CENTER: "XO_XOO_XX"
      }
    },
    XO_XO_O_X: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXXO_O_X",
        PLAY_X_MIDDLE_RIGHT: "XO_XOXO_X",
        PLAY_X_BOTTOM_CENTER: "XO_XO_OXX"
      }
    },
    XO_XO__OX: { on: { "": "O_WINS" } },
    XO_XO___X: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOXO___X",
        PLAY_O_MIDDLE_RIGHT: "XO_XOO__X",
        PLAY_O_BOTTOM_LEFT: "XO_XO_O_X",
        PLAY_O_BOTTOM_CENTER: "XO_XO__OX"
      }
    },
    XO_XO____: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXXO____",
        PLAY_X_MIDDLE_RIGHT: "XO_XOX___",
        PLAY_X_BOTTOM_LEFT: "XO_XO_X__",
        PLAY_X_BOTTOM_CENTER: "XO_XO__X_",
        PLAY_X_BOTTOM_RIGHT: "XO_XO___X"
      }
    },
    XO_XXOOXO: { on: { PLAY_X_TOP_RIGHT: "XOXXXOOXO" } },
    XO_XXOOX_: {
      on: { PLAY_O_TOP_RIGHT: "XOOXXOOX_", PLAY_O_BOTTOM_RIGHT: "XO_XXOOXO" }
    },
    XO_XXOO_X: { on: { "": "X_WINS" } },
    XO_XXOO__: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXXXOO__",
        PLAY_X_BOTTOM_CENTER: "XO_XXOOX_",
        PLAY_X_BOTTOM_RIGHT: "XO_XXOO_X"
      }
    },
    XO_XXOXO_: { on: { "": "X_WINS" } },
    XO_XXO_OX: { on: { "": "X_WINS" } },
    XO_XXO_O_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXXXO_O_",
        PLAY_X_BOTTOM_LEFT: "XO_XXOXO_",
        PLAY_X_BOTTOM_RIGHT: "XO_XXO_OX"
      }
    },
    XO_XXOX_O: { on: { "": "X_WINS" } },
    XO_XXO_XO: {
      on: { PLAY_O_TOP_RIGHT: "XOOXXO_XO", PLAY_O_BOTTOM_LEFT: "XO_XXOOXO" }
    },
    XO_XXO__O: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXXXO__O",
        PLAY_X_BOTTOM_LEFT: "XO_XXOX_O",
        PLAY_X_BOTTOM_CENTER: "XO_XXO_XO"
      }
    },
    XO_XXO___: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOXXO___",
        PLAY_O_BOTTOM_LEFT: "XO_XXOO__",
        PLAY_O_BOTTOM_CENTER: "XO_XXO_O_",
        PLAY_O_BOTTOM_RIGHT: "XO_XXO__O"
      }
    },
    XO_X_OX__: { on: { "": "X_WINS" } },
    XO_X_OOXX: {
      on: { PLAY_O_TOP_RIGHT: "XOOX_OOXX", PLAY_O_CENTER: "XO_XOOOXX" }
    },
    XO_X_OOX_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXX_OOX_",
        PLAY_X_CENTER: "XO_XXOOX_",
        PLAY_X_BOTTOM_RIGHT: "XO_X_OOXX"
      }
    },
    XO_X_OXXO: { on: { "": "X_WINS" } },
    XO_X_O_XO: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXX_O_XO",
        PLAY_X_CENTER: "XO_XXO_XO",
        PLAY_X_BOTTOM_LEFT: "XO_X_OXXO"
      }
    },
    XO_X_O_X_: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOX_O_X_",
        PLAY_O_CENTER: "XO_XOO_X_",
        PLAY_O_BOTTOM_LEFT: "XO_X_OOX_",
        PLAY_O_BOTTOM_RIGHT: "XO_X_O_XO"
      }
    },
    XO_X_OO_X: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXX_OO_X",
        PLAY_X_CENTER: "XO_XXOO_X",
        PLAY_X_BOTTOM_CENTER: "XO_X_OOXX"
      }
    },
    XO_X_OXOX: { on: { "": "X_WINS" } },
    XO_X_O_OX: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXX_O_OX",
        PLAY_X_CENTER: "XO_XXO_OX",
        PLAY_X_BOTTOM_LEFT: "XO_X_OXOX"
      }
    },
    XO_X_O__X: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOX_O__X",
        PLAY_O_CENTER: "XO_XOO__X",
        PLAY_O_BOTTOM_LEFT: "XO_X_OO_X",
        PLAY_O_BOTTOM_CENTER: "XO_X_O_OX"
      }
    },
    XO_X_O___: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXX_O___",
        PLAY_X_CENTER: "XO_XXO___",
        PLAY_X_BOTTOM_LEFT: "XO_X_OX__",
        PLAY_X_BOTTOM_CENTER: "XO_X_O_X_",
        PLAY_X_BOTTOM_RIGHT: "XO_X_O__X"
      }
    },
    XO_XXXOO_: { on: { "": "X_WINS" } },
    XO_XX_OOX: { on: { "": "X_WINS" } },
    XO_XX_OO_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXXX_OO_",
        PLAY_X_MIDDLE_RIGHT: "XO_XXXOO_",
        PLAY_X_BOTTOM_RIGHT: "XO_XX_OOX"
      }
    },
    XO_XXXO_O: { on: { "": "X_WINS" } },
    XO_XX_OXO: {
      on: { PLAY_O_TOP_RIGHT: "XOOXX_OXO", PLAY_O_MIDDLE_RIGHT: "XO_XXOOXO" }
    },
    XO_XX_O_O: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXXX_O_O",
        PLAY_X_MIDDLE_RIGHT: "XO_XXXO_O",
        PLAY_X_BOTTOM_CENTER: "XO_XX_OXO"
      }
    },
    XO_XX_O__: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOXX_O__",
        PLAY_O_MIDDLE_RIGHT: "XO_XXOO__",
        PLAY_O_BOTTOM_CENTER: "XO_XX_OO_",
        PLAY_O_BOTTOM_RIGHT: "XO_XX_O_O"
      }
    },
    XO_X_XOOX: {
      on: { PLAY_O_TOP_RIGHT: "XOOX_XOOX", PLAY_O_CENTER: "XO_XOXOOX" }
    },
    XO_X_XOO_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXX_XOO_",
        PLAY_X_CENTER: "XO_XXXOO_",
        PLAY_X_BOTTOM_RIGHT: "XO_X_XOOX"
      }
    },
    XO_X_XOXO: {
      on: { PLAY_O_TOP_RIGHT: "XOOX_XOXO", PLAY_O_CENTER: "XO_XOXOXO" }
    },
    XO_X_XO_O: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXX_XO_O",
        PLAY_X_CENTER: "XO_XXXO_O",
        PLAY_X_BOTTOM_CENTER: "XO_X_XOXO"
      }
    },
    XO_X_XO__: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOX_XO__",
        PLAY_O_CENTER: "XO_XOXO__",
        PLAY_O_BOTTOM_CENTER: "XO_X_XOO_",
        PLAY_O_BOTTOM_RIGHT: "XO_X_XO_O"
      }
    },
    XO_X__OXO: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXX__OXO",
        PLAY_X_CENTER: "XO_XX_OXO",
        PLAY_X_MIDDLE_RIGHT: "XO_X_XOXO"
      }
    },
    XO_X__OX_: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOX__OX_",
        PLAY_O_CENTER: "XO_XO_OX_",
        PLAY_O_MIDDLE_RIGHT: "XO_X_OOX_",
        PLAY_O_BOTTOM_RIGHT: "XO_X__OXO"
      }
    },
    XO_X__OOX: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXX__OOX",
        PLAY_X_CENTER: "XO_XX_OOX",
        PLAY_X_MIDDLE_RIGHT: "XO_X_XOOX"
      }
    },
    XO_X__O_X: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOX__O_X",
        PLAY_O_CENTER: "XO_XO_O_X",
        PLAY_O_MIDDLE_RIGHT: "XO_X_OO_X",
        PLAY_O_BOTTOM_CENTER: "XO_X__OOX"
      }
    },
    XO_X__O__: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXX__O__",
        PLAY_X_CENTER: "XO_XX_O__",
        PLAY_X_MIDDLE_RIGHT: "XO_X_XO__",
        PLAY_X_BOTTOM_CENTER: "XO_X__OX_",
        PLAY_X_BOTTOM_RIGHT: "XO_X__O_X"
      }
    },
    XO_XXX_OO: { on: { "": "X_WINS" } },
    XO_XX_XOO: { on: { "": "X_WINS" } },
    XO_XX__OO: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXXX__OO",
        PLAY_X_MIDDLE_RIGHT: "XO_XXX_OO",
        PLAY_X_BOTTOM_LEFT: "XO_XX_XOO"
      }
    },
    XO_XX__O_: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOXX__O_",
        PLAY_O_MIDDLE_RIGHT: "XO_XXO_O_",
        PLAY_O_BOTTOM_LEFT: "XO_XX_OO_",
        PLAY_O_BOTTOM_RIGHT: "XO_XX__OO"
      }
    },
    XO_X_XXOO: { on: { "": "X_WINS" } },
    XO_X_X_OO: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXX_X_OO",
        PLAY_X_CENTER: "XO_XXX_OO",
        PLAY_X_BOTTOM_LEFT: "XO_X_XXOO"
      }
    },
    XO_X_X_O_: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOX_X_O_",
        PLAY_O_CENTER: "XO_XOX_O_",
        PLAY_O_BOTTOM_LEFT: "XO_X_XOO_",
        PLAY_O_BOTTOM_RIGHT: "XO_X_X_OO"
      }
    },
    XO_X__XO_: { on: { "": "X_WINS" } },
    XO_X___OX: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOX___OX",
        PLAY_O_CENTER: "XO_XO__OX",
        PLAY_O_MIDDLE_RIGHT: "XO_X_O_OX",
        PLAY_O_BOTTOM_LEFT: "XO_X__OOX"
      }
    },
    XO_X___O_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXX___O_",
        PLAY_X_CENTER: "XO_XX__O_",
        PLAY_X_MIDDLE_RIGHT: "XO_X_X_O_",
        PLAY_X_BOTTOM_LEFT: "XO_X__XO_",
        PLAY_X_BOTTOM_RIGHT: "XO_X___OX"
      }
    },
    XO_XX___O: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOXX___O",
        PLAY_O_MIDDLE_RIGHT: "XO_XXO__O",
        PLAY_O_BOTTOM_LEFT: "XO_XX_O_O",
        PLAY_O_BOTTOM_CENTER: "XO_XX__OO"
      }
    },
    XO_X_X__O: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOX_X__O",
        PLAY_O_CENTER: "XO_XOX__O",
        PLAY_O_BOTTOM_LEFT: "XO_X_XO_O",
        PLAY_O_BOTTOM_CENTER: "XO_X_X_OO"
      }
    },
    XO_X__X_O: { on: { "": "X_WINS" } },
    XO_X___XO: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOX___XO",
        PLAY_O_CENTER: "XO_XO__XO",
        PLAY_O_MIDDLE_RIGHT: "XO_X_O_XO",
        PLAY_O_BOTTOM_LEFT: "XO_X__OXO"
      }
    },
    XO_X____O: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXX____O",
        PLAY_X_CENTER: "XO_XX___O",
        PLAY_X_MIDDLE_RIGHT: "XO_X_X__O",
        PLAY_X_BOTTOM_LEFT: "XO_X__X_O",
        PLAY_X_BOTTOM_CENTER: "XO_X___XO"
      }
    },
    XO_X_____: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOX_____",
        PLAY_O_CENTER: "XO_XO____",
        PLAY_O_MIDDLE_RIGHT: "XO_X_O___",
        PLAY_O_BOTTOM_LEFT: "XO_X__O__",
        PLAY_O_BOTTOM_CENTER: "XO_X___O_",
        PLAY_O_BOTTOM_RIGHT: "XO_X____O"
      }
    },
    XOOOXXXOX: { on: { "": "X_WINS" } },
    XOOOXXXO_: { on: { PLAY_X_BOTTOM_RIGHT: "XOOOXXXOX" } },
    XOOOXXXXO: { on: { "": "DRAW" } },
    XOOOXXX_O: { on: { PLAY_X_BOTTOM_CENTER: "XOOOXXXXO" } },
    XOOOXXX__: {
      on: {
        PLAY_O_BOTTOM_CENTER: "XOOOXXXO_",
        PLAY_O_BOTTOM_RIGHT: "XOOOXXX_O"
      }
    },
    XOOOXXOXX: { on: { "": "X_WINS" } },
    XOOOXXOX_: { on: { PLAY_X_BOTTOM_RIGHT: "XOOOXXOXX" } },
    XOOOXX_XO: { on: { PLAY_X_BOTTOM_LEFT: "XOOOXXXXO" } },
    XOOOXX_X_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XOOOXXOX_",
        PLAY_O_BOTTOM_RIGHT: "XOOOXX_XO"
      }
    },
    XOOOXX__X: { on: { "": "X_WINS" } },
    XOOOXX___: {
      on: {
        PLAY_X_BOTTOM_LEFT: "XOOOXXX__",
        PLAY_X_BOTTOM_CENTER: "XOOOXX_X_",
        PLAY_X_BOTTOM_RIGHT: "XOOOXX__X"
      }
    },
    XOO_XXOXO: { on: { PLAY_X_MIDDLE_LEFT: "XOOXXXOXO" } },
    XOO_XXOX_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOOOXXOX_",
        PLAY_O_BOTTOM_RIGHT: "XOO_XXOXO"
      }
    },
    XOO_XXO_X: { on: { "": "X_WINS" } },
    XOO_XXO__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOXXXO__",
        PLAY_X_BOTTOM_CENTER: "XOO_XXOX_",
        PLAY_X_BOTTOM_RIGHT: "XOO_XXO_X"
      }
    },
    XOOXXXXOO: { on: { "": "X_WINS" } },
    XOO_XXXOO: { on: { PLAY_X_MIDDLE_LEFT: "XOOXXXXOO" } },
    XOO_XXXO_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOOOXXXO_",
        PLAY_O_BOTTOM_RIGHT: "XOO_XXXOO"
      }
    },
    XOO_XX_OX: { on: { "": "X_WINS" } },
    XOO_XX_O_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOXXX_O_",
        PLAY_X_BOTTOM_LEFT: "XOO_XXXO_",
        PLAY_X_BOTTOM_RIGHT: "XOO_XX_OX"
      }
    },
    XOO_XXX_O: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOOOXXX_O",
        PLAY_O_BOTTOM_CENTER: "XOO_XXXOO"
      }
    },
    XOO_XX_XO: {
      on: { PLAY_O_MIDDLE_LEFT: "XOOOXX_XO", PLAY_O_BOTTOM_LEFT: "XOO_XXOXO" }
    },
    XOO_XX__O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOXXX__O",
        PLAY_X_BOTTOM_LEFT: "XOO_XXX_O",
        PLAY_X_BOTTOM_CENTER: "XOO_XX_XO"
      }
    },
    XOO_XX___: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOOOXX___",
        PLAY_O_BOTTOM_LEFT: "XOO_XXO__",
        PLAY_O_BOTTOM_CENTER: "XOO_XX_O_",
        PLAY_O_BOTTOM_RIGHT: "XOO_XX__O"
      }
    },
    XOOOXOXXX: { on: { "": "X_WINS" } },
    XOOOXOXX_: { on: { PLAY_X_BOTTOM_RIGHT: "XOOOXOXXX" } },
    XOOOX_XXO: { on: { PLAY_X_MIDDLE_RIGHT: "XOOOXXXXO" } },
    XOOOX_XX_: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XOOOXOXX_",
        PLAY_O_BOTTOM_RIGHT: "XOOOX_XXO"
      }
    },
    XOOOX_X_X: { on: { "": "X_WINS" } },
    XOOOX_X__: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XOOOXXX__",
        PLAY_X_BOTTOM_CENTER: "XOOOX_XX_",
        PLAY_X_BOTTOM_RIGHT: "XOOOX_X_X"
      }
    },
    XOO_XOXXO: { on: { "": "O_WINS" } },
    XOO_XOXX_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOOOXOXX_",
        PLAY_O_BOTTOM_RIGHT: "XOO_XOXXO"
      }
    },
    XOO_XOX_X: { on: { "": "X_WINS" } },
    XOO_XOX__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOXXOX__",
        PLAY_X_BOTTOM_CENTER: "XOO_XOXX_",
        PLAY_X_BOTTOM_RIGHT: "XOO_XOX_X"
      }
    },
    XOO_X_XOX: { on: { "": "X_WINS" } },
    XOO_X_XO_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOXX_XO_",
        PLAY_X_MIDDLE_RIGHT: "XOO_XXXO_",
        PLAY_X_BOTTOM_RIGHT: "XOO_X_XOX"
      }
    },
    XOO_X_XXO: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOOOX_XXO",
        PLAY_O_MIDDLE_RIGHT: "XOO_XOXXO"
      }
    },
    XOO_X_X_O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOXX_X_O",
        PLAY_X_MIDDLE_RIGHT: "XOO_XXX_O",
        PLAY_X_BOTTOM_CENTER: "XOO_X_XXO"
      }
    },
    XOO_X_X__: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOOOX_X__",
        PLAY_O_MIDDLE_RIGHT: "XOO_XOX__",
        PLAY_O_BOTTOM_CENTER: "XOO_X_XO_",
        PLAY_O_BOTTOM_RIGHT: "XOO_X_X_O"
      }
    },
    XOOOX__XX: { on: { "": "X_WINS" } },
    XOOOX__X_: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XOOOXX_X_",
        PLAY_X_BOTTOM_LEFT: "XOOOX_XX_",
        PLAY_X_BOTTOM_RIGHT: "XOOOX__XX"
      }
    },
    XOO_XO_XX: { on: { "": "X_WINS" } },
    XOO_XO_X_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOXXO_X_",
        PLAY_X_BOTTOM_LEFT: "XOO_XOXX_",
        PLAY_X_BOTTOM_RIGHT: "XOO_XO_XX"
      }
    },
    XOO_X_OXX: { on: { "": "X_WINS" } },
    XOO_X_OX_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOXX_OX_",
        PLAY_X_MIDDLE_RIGHT: "XOO_XXOX_",
        PLAY_X_BOTTOM_RIGHT: "XOO_X_OXX"
      }
    },
    XOO_X__XO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOXX__XO",
        PLAY_X_MIDDLE_RIGHT: "XOO_XX_XO",
        PLAY_X_BOTTOM_LEFT: "XOO_X_XXO"
      }
    },
    XOO_X__X_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOOOX__X_",
        PLAY_O_MIDDLE_RIGHT: "XOO_XO_X_",
        PLAY_O_BOTTOM_LEFT: "XOO_X_OX_",
        PLAY_O_BOTTOM_RIGHT: "XOO_X__XO"
      }
    },
    XOO_X___X: { on: { "": "X_WINS" } },
    XOO_X____: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOXX____",
        PLAY_X_MIDDLE_RIGHT: "XOO_XX___",
        PLAY_X_BOTTOM_LEFT: "XOO_X_X__",
        PLAY_X_BOTTOM_CENTER: "XOO_X__X_",
        PLAY_X_BOTTOM_RIGHT: "XOO_X___X"
      }
    },
    XO_OXXOXO: { on: { PLAY_X_TOP_RIGHT: "XOXOXXOXO" } },
    XO_OXXOX_: {
      on: { PLAY_O_TOP_RIGHT: "XOOOXXOX_", PLAY_O_BOTTOM_RIGHT: "XO_OXXOXO" }
    },
    XO_OXXO_X: { on: { "": "X_WINS" } },
    XO_OXXO__: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXOXXO__",
        PLAY_X_BOTTOM_CENTER: "XO_OXXOX_",
        PLAY_X_BOTTOM_RIGHT: "XO_OXXO_X"
      }
    },
    XO_OXXXOO: { on: { PLAY_X_TOP_RIGHT: "XOXOXXXOO" } },
    XO_OXXXO_: {
      on: { PLAY_O_TOP_RIGHT: "XOOOXXXO_", PLAY_O_BOTTOM_RIGHT: "XO_OXXXOO" }
    },
    XO_OXX_OX: { on: { "": "X_WINS" } },
    XO_OXX_O_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXOXX_O_",
        PLAY_X_BOTTOM_LEFT: "XO_OXXXO_",
        PLAY_X_BOTTOM_RIGHT: "XO_OXX_OX"
      }
    },
    XO_OXXX_O: {
      on: { PLAY_O_TOP_RIGHT: "XOOOXXX_O", PLAY_O_BOTTOM_CENTER: "XO_OXXXOO" }
    },
    XO_OXX_XO: {
      on: { PLAY_O_TOP_RIGHT: "XOOOXX_XO", PLAY_O_BOTTOM_LEFT: "XO_OXXOXO" }
    },
    XO_OXX__O: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXOXX__O",
        PLAY_X_BOTTOM_LEFT: "XO_OXXX_O",
        PLAY_X_BOTTOM_CENTER: "XO_OXX_XO"
      }
    },
    XO_OXX___: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOOXX___",
        PLAY_O_BOTTOM_LEFT: "XO_OXXO__",
        PLAY_O_BOTTOM_CENTER: "XO_OXX_O_",
        PLAY_O_BOTTOM_RIGHT: "XO_OXX__O"
      }
    },
    XO_OXOXXO: { on: { PLAY_X_TOP_RIGHT: "XOXOXOXXO" } },
    XO_OXOXX_: {
      on: { PLAY_O_TOP_RIGHT: "XOOOXOXX_", PLAY_O_BOTTOM_RIGHT: "XO_OXOXXO" }
    },
    XO_OXOX_X: { on: { "": "X_WINS" } },
    XO_OXOX__: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXOXOX__",
        PLAY_X_BOTTOM_CENTER: "XO_OXOXX_",
        PLAY_X_BOTTOM_RIGHT: "XO_OXOX_X"
      }
    },
    XO_OX_XOX: { on: { "": "X_WINS" } },
    XO_OX_XO_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXOX_XO_",
        PLAY_X_MIDDLE_RIGHT: "XO_OXXXO_",
        PLAY_X_BOTTOM_RIGHT: "XO_OX_XOX"
      }
    },
    XO_OX_XXO: {
      on: { PLAY_O_TOP_RIGHT: "XOOOX_XXO", PLAY_O_MIDDLE_RIGHT: "XO_OXOXXO" }
    },
    XO_OX_X_O: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXOX_X_O",
        PLAY_X_MIDDLE_RIGHT: "XO_OXXX_O",
        PLAY_X_BOTTOM_CENTER: "XO_OX_XXO"
      }
    },
    XO_OX_X__: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOOX_X__",
        PLAY_O_MIDDLE_RIGHT: "XO_OXOX__",
        PLAY_O_BOTTOM_CENTER: "XO_OX_XO_",
        PLAY_O_BOTTOM_RIGHT: "XO_OX_X_O"
      }
    },
    XO_OXO_XX: { on: { "": "X_WINS" } },
    XO_OXO_X_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXOXO_X_",
        PLAY_X_BOTTOM_LEFT: "XO_OXOXX_",
        PLAY_X_BOTTOM_RIGHT: "XO_OXO_XX"
      }
    },
    XO_OX_OXX: { on: { "": "X_WINS" } },
    XO_OX_OX_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXOX_OX_",
        PLAY_X_MIDDLE_RIGHT: "XO_OXXOX_",
        PLAY_X_BOTTOM_RIGHT: "XO_OX_OXX"
      }
    },
    XO_OX__XO: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXOX__XO",
        PLAY_X_MIDDLE_RIGHT: "XO_OXX_XO",
        PLAY_X_BOTTOM_LEFT: "XO_OX_XXO"
      }
    },
    XO_OX__X_: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOOX__X_",
        PLAY_O_MIDDLE_RIGHT: "XO_OXO_X_",
        PLAY_O_BOTTOM_LEFT: "XO_OX_OX_",
        PLAY_O_BOTTOM_RIGHT: "XO_OX__XO"
      }
    },
    XO_OX___X: { on: { "": "X_WINS" } },
    XO_OX____: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXOX____",
        PLAY_X_MIDDLE_RIGHT: "XO_OXX___",
        PLAY_X_BOTTOM_LEFT: "XO_OX_X__",
        PLAY_X_BOTTOM_CENTER: "XO_OX__X_",
        PLAY_X_BOTTOM_RIGHT: "XO_OX___X"
      }
    },
    XO__XOXOX: { on: { "": "X_WINS" } },
    XO__XOXO_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_XOXO_",
        PLAY_X_MIDDLE_LEFT: "XO_XXOXO_",
        PLAY_X_BOTTOM_RIGHT: "XO__XOXOX"
      }
    },
    XO__XOXXO: {
      on: { PLAY_O_TOP_RIGHT: "XOO_XOXXO", PLAY_O_MIDDLE_LEFT: "XO_OXOXXO" }
    },
    XO__XOX_O: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_XOX_O",
        PLAY_X_MIDDLE_LEFT: "XO_XXOX_O",
        PLAY_X_BOTTOM_CENTER: "XO__XOXXO"
      }
    },
    XO__XOX__: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO_XOX__",
        PLAY_O_MIDDLE_LEFT: "XO_OXOX__",
        PLAY_O_BOTTOM_CENTER: "XO__XOXO_",
        PLAY_O_BOTTOM_RIGHT: "XO__XOX_O"
      }
    },
    XO__XOOXX: { on: { "": "X_WINS" } },
    XO__XOOX_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_XOOX_",
        PLAY_X_MIDDLE_LEFT: "XO_XXOOX_",
        PLAY_X_BOTTOM_RIGHT: "XO__XOOXX"
      }
    },
    XO__XO_XO: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_XO_XO",
        PLAY_X_MIDDLE_LEFT: "XO_XXO_XO",
        PLAY_X_BOTTOM_LEFT: "XO__XOXXO"
      }
    },
    XO__XO_X_: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO_XO_X_",
        PLAY_O_MIDDLE_LEFT: "XO_OXO_X_",
        PLAY_O_BOTTOM_LEFT: "XO__XOOX_",
        PLAY_O_BOTTOM_RIGHT: "XO__XO_XO"
      }
    },
    XO__XO__X: { on: { "": "X_WINS" } },
    XO__XO___: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_XO___",
        PLAY_X_MIDDLE_LEFT: "XO_XXO___",
        PLAY_X_BOTTOM_LEFT: "XO__XOX__",
        PLAY_X_BOTTOM_CENTER: "XO__XO_X_",
        PLAY_X_BOTTOM_RIGHT: "XO__XO__X"
      }
    },
    XO__XXOOX: { on: { "": "X_WINS" } },
    XO__XXOO_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_XXOO_",
        PLAY_X_MIDDLE_LEFT: "XO_XXXOO_",
        PLAY_X_BOTTOM_RIGHT: "XO__XXOOX"
      }
    },
    XO__XXOXO: {
      on: { PLAY_O_TOP_RIGHT: "XOO_XXOXO", PLAY_O_MIDDLE_LEFT: "XO_OXXOXO" }
    },
    XO__XXO_O: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_XXO_O",
        PLAY_X_MIDDLE_LEFT: "XO_XXXO_O",
        PLAY_X_BOTTOM_CENTER: "XO__XXOXO"
      }
    },
    XO__XXO__: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO_XXO__",
        PLAY_O_MIDDLE_LEFT: "XO_OXXO__",
        PLAY_O_BOTTOM_CENTER: "XO__XXOO_",
        PLAY_O_BOTTOM_RIGHT: "XO__XXO_O"
      }
    },
    XO__X_OXO: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_X_OXO",
        PLAY_X_MIDDLE_LEFT: "XO_XX_OXO",
        PLAY_X_MIDDLE_RIGHT: "XO__XXOXO"
      }
    },
    XO__X_OX_: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO_X_OX_",
        PLAY_O_MIDDLE_LEFT: "XO_OX_OX_",
        PLAY_O_MIDDLE_RIGHT: "XO__XOOX_",
        PLAY_O_BOTTOM_RIGHT: "XO__X_OXO"
      }
    },
    XO__X_O_X: { on: { "": "X_WINS" } },
    XO__X_O__: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_X_O__",
        PLAY_X_MIDDLE_LEFT: "XO_XX_O__",
        PLAY_X_MIDDLE_RIGHT: "XO__XXO__",
        PLAY_X_BOTTOM_CENTER: "XO__X_OX_",
        PLAY_X_BOTTOM_RIGHT: "XO__X_O_X"
      }
    },
    XO__XXXOO: {
      on: { PLAY_O_TOP_RIGHT: "XOO_XXXOO", PLAY_O_MIDDLE_LEFT: "XO_OXXXOO" }
    },
    XO__XX_OO: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_XX_OO",
        PLAY_X_MIDDLE_LEFT: "XO_XXX_OO",
        PLAY_X_BOTTOM_LEFT: "XO__XXXOO"
      }
    },
    XO__XX_O_: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO_XX_O_",
        PLAY_O_MIDDLE_LEFT: "XO_OXX_O_",
        PLAY_O_BOTTOM_LEFT: "XO__XXOO_",
        PLAY_O_BOTTOM_RIGHT: "XO__XX_OO"
      }
    },
    XO__X_XOO: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_X_XOO",
        PLAY_X_MIDDLE_LEFT: "XO_XX_XOO",
        PLAY_X_MIDDLE_RIGHT: "XO__XXXOO"
      }
    },
    XO__X_XO_: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO_X_XO_",
        PLAY_O_MIDDLE_LEFT: "XO_OX_XO_",
        PLAY_O_MIDDLE_RIGHT: "XO__XOXO_",
        PLAY_O_BOTTOM_RIGHT: "XO__X_XOO"
      }
    },
    XO__X__OX: { on: { "": "X_WINS" } },
    XO__X__O_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_X__O_",
        PLAY_X_MIDDLE_LEFT: "XO_XX__O_",
        PLAY_X_MIDDLE_RIGHT: "XO__XX_O_",
        PLAY_X_BOTTOM_LEFT: "XO__X_XO_",
        PLAY_X_BOTTOM_RIGHT: "XO__X__OX"
      }
    },
    XO__XX__O: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO_XX__O",
        PLAY_O_MIDDLE_LEFT: "XO_OXX__O",
        PLAY_O_BOTTOM_LEFT: "XO__XXO_O",
        PLAY_O_BOTTOM_CENTER: "XO__XX_OO"
      }
    },
    XO__X_X_O: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO_X_X_O",
        PLAY_O_MIDDLE_LEFT: "XO_OX_X_O",
        PLAY_O_MIDDLE_RIGHT: "XO__XOX_O",
        PLAY_O_BOTTOM_CENTER: "XO__X_XOO"
      }
    },
    XO__X__XO: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO_X__XO",
        PLAY_O_MIDDLE_LEFT: "XO_OX__XO",
        PLAY_O_MIDDLE_RIGHT: "XO__XO_XO",
        PLAY_O_BOTTOM_LEFT: "XO__X_OXO"
      }
    },
    XO__X___O: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_X___O",
        PLAY_X_MIDDLE_LEFT: "XO_XX___O",
        PLAY_X_MIDDLE_RIGHT: "XO__XX__O",
        PLAY_X_BOTTOM_LEFT: "XO__X_X_O",
        PLAY_X_BOTTOM_CENTER: "XO__X__XO"
      }
    },
    XO__X____: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO_X____",
        PLAY_O_MIDDLE_LEFT: "XO_OX____",
        PLAY_O_MIDDLE_RIGHT: "XO__XO___",
        PLAY_O_BOTTOM_LEFT: "XO__X_O__",
        PLAY_O_BOTTOM_CENTER: "XO__X__O_",
        PLAY_O_BOTTOM_RIGHT: "XO__X___O"
      }
    },
    XOOOOXXXX: { on: { "": "X_WINS" } },
    XOOOOXXX_: { on: { PLAY_X_BOTTOM_RIGHT: "XOOOOXXXX" } },
    XOOO_XXXO: { on: { PLAY_X_CENTER: "XOOOXXXXO" } },
    XOOO_XXX_: {
      on: { PLAY_O_CENTER: "XOOOOXXX_", PLAY_O_BOTTOM_RIGHT: "XOOO_XXXO" }
    },
    XOOOOXX_X: { on: { PLAY_X_BOTTOM_CENTER: "XOOOOXXXX" } },
    XOOO_XXOX: { on: { PLAY_X_CENTER: "XOOOXXXOX" } },
    XOOO_XX_X: {
      on: { PLAY_O_CENTER: "XOOOOXX_X", PLAY_O_BOTTOM_CENTER: "XOOO_XXOX" }
    },
    XOOO_XX__: {
      on: {
        PLAY_X_CENTER: "XOOOXXX__",
        PLAY_X_BOTTOM_CENTER: "XOOO_XXX_",
        PLAY_X_BOTTOM_RIGHT: "XOOO_XX_X"
      }
    },
    XOO_OXXXO: { on: { PLAY_X_MIDDLE_LEFT: "XOOXOXXXO" } },
    XOO_OXXX_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOOOOXXX_",
        PLAY_O_BOTTOM_RIGHT: "XOO_OXXXO"
      }
    },
    XOO_OXXOX: { on: { "": "O_WINS" } },
    XOO_OXX_X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOOOOXX_X",
        PLAY_O_BOTTOM_CENTER: "XOO_OXXOX"
      }
    },
    XOO_OXX__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOXOXX__",
        PLAY_X_BOTTOM_CENTER: "XOO_OXXX_",
        PLAY_X_BOTTOM_RIGHT: "XOO_OXX_X"
      }
    },
    XOO__XXOX: {
      on: { PLAY_O_MIDDLE_LEFT: "XOOO_XXOX", PLAY_O_CENTER: "XOO_OXXOX" }
    },
    XOO__XXO_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOX_XXO_",
        PLAY_X_CENTER: "XOO_XXXO_",
        PLAY_X_BOTTOM_RIGHT: "XOO__XXOX"
      }
    },
    XOO__XXXO: {
      on: { PLAY_O_MIDDLE_LEFT: "XOOO_XXXO", PLAY_O_CENTER: "XOO_OXXXO" }
    },
    XOO__XX_O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOX_XX_O",
        PLAY_X_CENTER: "XOO_XXX_O",
        PLAY_X_BOTTOM_CENTER: "XOO__XXXO"
      }
    },
    XOO__XX__: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOOO_XX__",
        PLAY_O_CENTER: "XOO_OXX__",
        PLAY_O_BOTTOM_CENTER: "XOO__XXO_",
        PLAY_O_BOTTOM_RIGHT: "XOO__XX_O"
      }
    },
    XOOOOX_XX: { on: { PLAY_X_BOTTOM_LEFT: "XOOOOXXXX" } },
    XOOO_XOXX: { on: { PLAY_X_CENTER: "XOOOXXOXX" } },
    XOOO_X_XX: {
      on: { PLAY_O_CENTER: "XOOOOX_XX", PLAY_O_BOTTOM_LEFT: "XOOO_XOXX" }
    },
    XOOO_X_X_: {
      on: {
        PLAY_X_CENTER: "XOOOXX_X_",
        PLAY_X_BOTTOM_LEFT: "XOOO_XXX_",
        PLAY_X_BOTTOM_RIGHT: "XOOO_X_XX"
      }
    },
    XOO_OXOXX: { on: { "": "O_WINS" } },
    XOO_OX_XX: {
      on: { PLAY_O_MIDDLE_LEFT: "XOOOOX_XX", PLAY_O_BOTTOM_LEFT: "XOO_OXOXX" }
    },
    XOO_OX_X_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOXOX_X_",
        PLAY_X_BOTTOM_LEFT: "XOO_OXXX_",
        PLAY_X_BOTTOM_RIGHT: "XOO_OX_XX"
      }
    },
    XOO__XOXX: {
      on: { PLAY_O_MIDDLE_LEFT: "XOOO_XOXX", PLAY_O_CENTER: "XOO_OXOXX" }
    },
    XOO__XOX_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOX_XOX_",
        PLAY_X_CENTER: "XOO_XXOX_",
        PLAY_X_BOTTOM_RIGHT: "XOO__XOXX"
      }
    },
    XOO__X_XO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOX_X_XO",
        PLAY_X_CENTER: "XOO_XX_XO",
        PLAY_X_BOTTOM_LEFT: "XOO__XXXO"
      }
    },
    XOO__X_X_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOOO_X_X_",
        PLAY_O_CENTER: "XOO_OX_X_",
        PLAY_O_BOTTOM_LEFT: "XOO__XOX_",
        PLAY_O_BOTTOM_RIGHT: "XOO__X_XO"
      }
    },
    XOOO_X__X: {
      on: {
        PLAY_X_CENTER: "XOOOXX__X",
        PLAY_X_BOTTOM_LEFT: "XOOO_XX_X",
        PLAY_X_BOTTOM_CENTER: "XOOO_X_XX"
      }
    },
    XOO_OX__X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOXOX__X",
        PLAY_X_BOTTOM_LEFT: "XOO_OXX_X",
        PLAY_X_BOTTOM_CENTER: "XOO_OX_XX"
      }
    },
    XOO__XO_X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOX_XO_X",
        PLAY_X_CENTER: "XOO_XXO_X",
        PLAY_X_BOTTOM_CENTER: "XOO__XOXX"
      }
    },
    XOO__X_OX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOX_X_OX",
        PLAY_X_CENTER: "XOO_XX_OX",
        PLAY_X_BOTTOM_LEFT: "XOO__XXOX"
      }
    },
    XOO__X__X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOOO_X__X",
        PLAY_O_CENTER: "XOO_OX__X",
        PLAY_O_BOTTOM_LEFT: "XOO__XO_X",
        PLAY_O_BOTTOM_CENTER: "XOO__X_OX"
      }
    },
    XOO__X___: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOX_X___",
        PLAY_X_CENTER: "XOO_XX___",
        PLAY_X_BOTTOM_LEFT: "XOO__XX__",
        PLAY_X_BOTTOM_CENTER: "XOO__X_X_",
        PLAY_X_BOTTOM_RIGHT: "XOO__X__X"
      }
    },
    XO_OOXXXO: { on: { PLAY_X_TOP_RIGHT: "XOXOOXXXO" } },
    XO_OOXXX_: {
      on: { PLAY_O_TOP_RIGHT: "XOOOOXXX_", PLAY_O_BOTTOM_RIGHT: "XO_OOXXXO" }
    },
    XO_OOXXOX: { on: { "": "O_WINS" } },
    XO_OOXX_X: {
      on: { PLAY_O_TOP_RIGHT: "XOOOOXX_X", PLAY_O_BOTTOM_CENTER: "XO_OOXXOX" }
    },
    XO_OOXX__: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXOOXX__",
        PLAY_X_BOTTOM_CENTER: "XO_OOXXX_",
        PLAY_X_BOTTOM_RIGHT: "XO_OOXX_X"
      }
    },
    XO_O_XXOX: {
      on: { PLAY_O_TOP_RIGHT: "XOOO_XXOX", PLAY_O_CENTER: "XO_OOXXOX" }
    },
    XO_O_XXO_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXO_XXO_",
        PLAY_X_CENTER: "XO_OXXXO_",
        PLAY_X_BOTTOM_RIGHT: "XO_O_XXOX"
      }
    },
    XO_O_XXXO: {
      on: { PLAY_O_TOP_RIGHT: "XOOO_XXXO", PLAY_O_CENTER: "XO_OOXXXO" }
    },
    XO_O_XX_O: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXO_XX_O",
        PLAY_X_CENTER: "XO_OXXX_O",
        PLAY_X_BOTTOM_CENTER: "XO_O_XXXO"
      }
    },
    XO_O_XX__: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOO_XX__",
        PLAY_O_CENTER: "XO_OOXX__",
        PLAY_O_BOTTOM_CENTER: "XO_O_XXO_",
        PLAY_O_BOTTOM_RIGHT: "XO_O_XX_O"
      }
    },
    XO_OOXOXX: { on: { PLAY_X_TOP_RIGHT: "XOXOOXOXX" } },
    XO_OOX_XX: {
      on: { PLAY_O_TOP_RIGHT: "XOOOOX_XX", PLAY_O_BOTTOM_LEFT: "XO_OOXOXX" }
    },
    XO_OOX_X_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXOOX_X_",
        PLAY_X_BOTTOM_LEFT: "XO_OOXXX_",
        PLAY_X_BOTTOM_RIGHT: "XO_OOX_XX"
      }
    },
    XO_O_XOXX: {
      on: { PLAY_O_TOP_RIGHT: "XOOO_XOXX", PLAY_O_CENTER: "XO_OOXOXX" }
    },
    XO_O_XOX_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXO_XOX_",
        PLAY_X_CENTER: "XO_OXXOX_",
        PLAY_X_BOTTOM_RIGHT: "XO_O_XOXX"
      }
    },
    XO_O_X_XO: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXO_X_XO",
        PLAY_X_CENTER: "XO_OXX_XO",
        PLAY_X_BOTTOM_LEFT: "XO_O_XXXO"
      }
    },
    XO_O_X_X_: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOO_X_X_",
        PLAY_O_CENTER: "XO_OOX_X_",
        PLAY_O_BOTTOM_LEFT: "XO_O_XOX_",
        PLAY_O_BOTTOM_RIGHT: "XO_O_X_XO"
      }
    },
    XO_OOX__X: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXOOX__X",
        PLAY_X_BOTTOM_LEFT: "XO_OOXX_X",
        PLAY_X_BOTTOM_CENTER: "XO_OOX_XX"
      }
    },
    XO_O_XO_X: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXO_XO_X",
        PLAY_X_CENTER: "XO_OXXO_X",
        PLAY_X_BOTTOM_CENTER: "XO_O_XOXX"
      }
    },
    XO_O_X_OX: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXO_X_OX",
        PLAY_X_CENTER: "XO_OXX_OX",
        PLAY_X_BOTTOM_LEFT: "XO_O_XXOX"
      }
    },
    XO_O_X__X: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOO_X__X",
        PLAY_O_CENTER: "XO_OOX__X",
        PLAY_O_BOTTOM_LEFT: "XO_O_XO_X",
        PLAY_O_BOTTOM_CENTER: "XO_O_X_OX"
      }
    },
    XO_O_X___: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXO_X___",
        PLAY_X_CENTER: "XO_OXX___",
        PLAY_X_BOTTOM_LEFT: "XO_O_XX__",
        PLAY_X_BOTTOM_CENTER: "XO_O_X_X_",
        PLAY_X_BOTTOM_RIGHT: "XO_O_X__X"
      }
    },
    XO__OXXO_: { on: { "": "O_WINS" } },
    XO__OXXXO: {
      on: { PLAY_O_TOP_RIGHT: "XOO_OXXXO", PLAY_O_MIDDLE_LEFT: "XO_OOXXXO" }
    },
    XO__OXX_O: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_OXX_O",
        PLAY_X_MIDDLE_LEFT: "XO_XOXX_O",
        PLAY_X_BOTTOM_CENTER: "XO__OXXXO"
      }
    },
    XO__OXX__: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO_OXX__",
        PLAY_O_MIDDLE_LEFT: "XO_OOXX__",
        PLAY_O_BOTTOM_CENTER: "XO__OXXO_",
        PLAY_O_BOTTOM_RIGHT: "XO__OXX_O"
      }
    },
    XO__OXOXX: {
      on: { PLAY_O_TOP_RIGHT: "XOO_OXOXX", PLAY_O_MIDDLE_LEFT: "XO_OOXOXX" }
    },
    XO__OXOX_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_OXOX_",
        PLAY_X_MIDDLE_LEFT: "XO_XOXOX_",
        PLAY_X_BOTTOM_RIGHT: "XO__OXOXX"
      }
    },
    XO__OX_XO: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_OX_XO",
        PLAY_X_MIDDLE_LEFT: "XO_XOX_XO",
        PLAY_X_BOTTOM_LEFT: "XO__OXXXO"
      }
    },
    XO__OX_X_: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO_OX_X_",
        PLAY_O_MIDDLE_LEFT: "XO_OOX_X_",
        PLAY_O_BOTTOM_LEFT: "XO__OXOX_",
        PLAY_O_BOTTOM_RIGHT: "XO__OX_XO"
      }
    },
    XO__OXO_X: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_OXO_X",
        PLAY_X_MIDDLE_LEFT: "XO_XOXO_X",
        PLAY_X_BOTTOM_CENTER: "XO__OXOXX"
      }
    },
    XO__OX_OX: { on: { "": "O_WINS" } },
    XO__OX__X: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO_OX__X",
        PLAY_O_MIDDLE_LEFT: "XO_OOX__X",
        PLAY_O_BOTTOM_LEFT: "XO__OXO_X",
        PLAY_O_BOTTOM_CENTER: "XO__OX_OX"
      }
    },
    XO__OX___: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_OX___",
        PLAY_X_MIDDLE_LEFT: "XO_XOX___",
        PLAY_X_BOTTOM_LEFT: "XO__OXX__",
        PLAY_X_BOTTOM_CENTER: "XO__OX_X_",
        PLAY_X_BOTTOM_RIGHT: "XO__OX__X"
      }
    },
    XO___XOXO: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX__XOXO",
        PLAY_X_MIDDLE_LEFT: "XO_X_XOXO",
        PLAY_X_CENTER: "XO__XXOXO"
      }
    },
    XO___XOX_: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO__XOX_",
        PLAY_O_MIDDLE_LEFT: "XO_O_XOX_",
        PLAY_O_CENTER: "XO__OXOX_",
        PLAY_O_BOTTOM_RIGHT: "XO___XOXO"
      }
    },
    XO___XOOX: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX__XOOX",
        PLAY_X_MIDDLE_LEFT: "XO_X_XOOX",
        PLAY_X_CENTER: "XO__XXOOX"
      }
    },
    XO___XO_X: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO__XO_X",
        PLAY_O_MIDDLE_LEFT: "XO_O_XO_X",
        PLAY_O_CENTER: "XO__OXO_X",
        PLAY_O_BOTTOM_CENTER: "XO___XOOX"
      }
    },
    XO___XO__: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX__XO__",
        PLAY_X_MIDDLE_LEFT: "XO_X_XO__",
        PLAY_X_CENTER: "XO__XXO__",
        PLAY_X_BOTTOM_CENTER: "XO___XOX_",
        PLAY_X_BOTTOM_RIGHT: "XO___XO_X"
      }
    },
    XO___XXOO: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX__XXOO",
        PLAY_X_MIDDLE_LEFT: "XO_X_XXOO",
        PLAY_X_CENTER: "XO__XXXOO"
      }
    },
    XO___XXO_: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO__XXO_",
        PLAY_O_MIDDLE_LEFT: "XO_O_XXO_",
        PLAY_O_CENTER: "XO__OXXO_",
        PLAY_O_BOTTOM_RIGHT: "XO___XXOO"
      }
    },
    XO___X_OX: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO__X_OX",
        PLAY_O_MIDDLE_LEFT: "XO_O_X_OX",
        PLAY_O_CENTER: "XO__OX_OX",
        PLAY_O_BOTTOM_LEFT: "XO___XOOX"
      }
    },
    XO___X_O_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX__X_O_",
        PLAY_X_MIDDLE_LEFT: "XO_X_X_O_",
        PLAY_X_CENTER: "XO__XX_O_",
        PLAY_X_BOTTOM_LEFT: "XO___XXO_",
        PLAY_X_BOTTOM_RIGHT: "XO___X_OX"
      }
    },
    XO___XX_O: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO__XX_O",
        PLAY_O_MIDDLE_LEFT: "XO_O_XX_O",
        PLAY_O_CENTER: "XO__OXX_O",
        PLAY_O_BOTTOM_CENTER: "XO___XXOO"
      }
    },
    XO___X_XO: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO__X_XO",
        PLAY_O_MIDDLE_LEFT: "XO_O_X_XO",
        PLAY_O_CENTER: "XO__OX_XO",
        PLAY_O_BOTTOM_LEFT: "XO___XOXO"
      }
    },
    XO___X__O: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX__X__O",
        PLAY_X_MIDDLE_LEFT: "XO_X_X__O",
        PLAY_X_CENTER: "XO__XX__O",
        PLAY_X_BOTTOM_LEFT: "XO___XX_O",
        PLAY_X_BOTTOM_CENTER: "XO___X_XO"
      }
    },
    XO___X___: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO__X___",
        PLAY_O_MIDDLE_LEFT: "XO_O_X___",
        PLAY_O_CENTER: "XO__OX___",
        PLAY_O_BOTTOM_LEFT: "XO___XO__",
        PLAY_O_BOTTOM_CENTER: "XO___X_O_",
        PLAY_O_BOTTOM_RIGHT: "XO___X__O"
      }
    },
    XOOO__XXX: { on: { "": "X_WINS" } },
    XOOO__XX_: {
      on: {
        PLAY_X_CENTER: "XOOOX_XX_",
        PLAY_X_MIDDLE_RIGHT: "XOOO_XXX_",
        PLAY_X_BOTTOM_RIGHT: "XOOO__XXX"
      }
    },
    XOO_O_XXX: { on: { "": "X_WINS" } },
    XOO_O_XX_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOXO_XX_",
        PLAY_X_MIDDLE_RIGHT: "XOO_OXXX_",
        PLAY_X_BOTTOM_RIGHT: "XOO_O_XXX"
      }
    },
    XOO__OXXX: { on: { "": "X_WINS" } },
    XOO__OXX_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOX_OXX_",
        PLAY_X_CENTER: "XOO_XOXX_",
        PLAY_X_BOTTOM_RIGHT: "XOO__OXXX"
      }
    },
    XOO___XXO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOX__XXO",
        PLAY_X_CENTER: "XOO_X_XXO",
        PLAY_X_MIDDLE_RIGHT: "XOO__XXXO"
      }
    },
    XOO___XX_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOOO__XX_",
        PLAY_O_CENTER: "XOO_O_XX_",
        PLAY_O_MIDDLE_RIGHT: "XOO__OXX_",
        PLAY_O_BOTTOM_RIGHT: "XOO___XXO"
      }
    },
    XOOO__X_X: {
      on: {
        PLAY_X_CENTER: "XOOOX_X_X",
        PLAY_X_MIDDLE_RIGHT: "XOOO_XX_X",
        PLAY_X_BOTTOM_CENTER: "XOOO__XXX"
      }
    },
    XOO_O_X_X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOXO_X_X",
        PLAY_X_MIDDLE_RIGHT: "XOO_OXX_X",
        PLAY_X_BOTTOM_CENTER: "XOO_O_XXX"
      }
    },
    XOO__OX_X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOX_OX_X",
        PLAY_X_CENTER: "XOO_XOX_X",
        PLAY_X_BOTTOM_CENTER: "XOO__OXXX"
      }
    },
    XOO___XOX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOX__XOX",
        PLAY_X_CENTER: "XOO_X_XOX",
        PLAY_X_MIDDLE_RIGHT: "XOO__XXOX"
      }
    },
    XOO___X_X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOOO__X_X",
        PLAY_O_CENTER: "XOO_O_X_X",
        PLAY_O_MIDDLE_RIGHT: "XOO__OX_X",
        PLAY_O_BOTTOM_CENTER: "XOO___XOX"
      }
    },
    XOO___X__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOX__X__",
        PLAY_X_CENTER: "XOO_X_X__",
        PLAY_X_MIDDLE_RIGHT: "XOO__XX__",
        PLAY_X_BOTTOM_CENTER: "XOO___XX_",
        PLAY_X_BOTTOM_RIGHT: "XOO___X_X"
      }
    },
    XO_OO_XXX: { on: { "": "X_WINS" } },
    XO_OO_XX_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXOO_XX_",
        PLAY_X_MIDDLE_RIGHT: "XO_OOXXX_",
        PLAY_X_BOTTOM_RIGHT: "XO_OO_XXX"
      }
    },
    XO_O_OXXX: { on: { "": "X_WINS" } },
    XO_O_OXX_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXO_OXX_",
        PLAY_X_CENTER: "XO_OXOXX_",
        PLAY_X_BOTTOM_RIGHT: "XO_O_OXXX"
      }
    },
    XO_O__XXO: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXO__XXO",
        PLAY_X_CENTER: "XO_OX_XXO",
        PLAY_X_MIDDLE_RIGHT: "XO_O_XXXO"
      }
    },
    XO_O__XX_: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOO__XX_",
        PLAY_O_CENTER: "XO_OO_XX_",
        PLAY_O_MIDDLE_RIGHT: "XO_O_OXX_",
        PLAY_O_BOTTOM_RIGHT: "XO_O__XXO"
      }
    },
    XO_OO_X_X: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXOO_X_X",
        PLAY_X_MIDDLE_RIGHT: "XO_OOXX_X",
        PLAY_X_BOTTOM_CENTER: "XO_OO_XXX"
      }
    },
    XO_O_OX_X: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXO_OX_X",
        PLAY_X_CENTER: "XO_OXOX_X",
        PLAY_X_BOTTOM_CENTER: "XO_O_OXXX"
      }
    },
    XO_O__XOX: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXO__XOX",
        PLAY_X_CENTER: "XO_OX_XOX",
        PLAY_X_MIDDLE_RIGHT: "XO_O_XXOX"
      }
    },
    XO_O__X_X: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOO__X_X",
        PLAY_O_CENTER: "XO_OO_X_X",
        PLAY_O_MIDDLE_RIGHT: "XO_O_OX_X",
        PLAY_O_BOTTOM_CENTER: "XO_O__XOX"
      }
    },
    XO_O__X__: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXO__X__",
        PLAY_X_CENTER: "XO_OX_X__",
        PLAY_X_MIDDLE_RIGHT: "XO_O_XX__",
        PLAY_X_BOTTOM_CENTER: "XO_O__XX_",
        PLAY_X_BOTTOM_RIGHT: "XO_O__X_X"
      }
    },
    XO__OOXXX: { on: { "": "X_WINS" } },
    XO__OOXX_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_OOXX_",
        PLAY_X_MIDDLE_LEFT: "XO_XOOXX_",
        PLAY_X_BOTTOM_RIGHT: "XO__OOXXX"
      }
    },
    XO__O_XXO: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_O_XXO",
        PLAY_X_MIDDLE_LEFT: "XO_XO_XXO",
        PLAY_X_MIDDLE_RIGHT: "XO__OXXXO"
      }
    },
    XO__O_XX_: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO_O_XX_",
        PLAY_O_MIDDLE_LEFT: "XO_OO_XX_",
        PLAY_O_MIDDLE_RIGHT: "XO__OOXX_",
        PLAY_O_BOTTOM_RIGHT: "XO__O_XXO"
      }
    },
    XO__OOX_X: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_OOX_X",
        PLAY_X_MIDDLE_LEFT: "XO_XOOX_X",
        PLAY_X_BOTTOM_CENTER: "XO__OOXXX"
      }
    },
    XO__O_XOX: { on: { "": "O_WINS" } },
    XO__O_X_X: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO_O_X_X",
        PLAY_O_MIDDLE_LEFT: "XO_OO_X_X",
        PLAY_O_MIDDLE_RIGHT: "XO__OOX_X",
        PLAY_O_BOTTOM_CENTER: "XO__O_XOX"
      }
    },
    XO__O_X__: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_O_X__",
        PLAY_X_MIDDLE_LEFT: "XO_XO_X__",
        PLAY_X_MIDDLE_RIGHT: "XO__OXX__",
        PLAY_X_BOTTOM_CENTER: "XO__O_XX_",
        PLAY_X_BOTTOM_RIGHT: "XO__O_X_X"
      }
    },
    XO___OXXO: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX__OXXO",
        PLAY_X_MIDDLE_LEFT: "XO_X_OXXO",
        PLAY_X_CENTER: "XO__XOXXO"
      }
    },
    XO___OXX_: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO__OXX_",
        PLAY_O_MIDDLE_LEFT: "XO_O_OXX_",
        PLAY_O_CENTER: "XO__OOXX_",
        PLAY_O_BOTTOM_RIGHT: "XO___OXXO"
      }
    },
    XO___OXOX: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX__OXOX",
        PLAY_X_MIDDLE_LEFT: "XO_X_OXOX",
        PLAY_X_CENTER: "XO__XOXOX"
      }
    },
    XO___OX_X: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO__OX_X",
        PLAY_O_MIDDLE_LEFT: "XO_O_OX_X",
        PLAY_O_CENTER: "XO__OOX_X",
        PLAY_O_BOTTOM_CENTER: "XO___OXOX"
      }
    },
    XO___OX__: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX__OX__",
        PLAY_X_MIDDLE_LEFT: "XO_X_OX__",
        PLAY_X_CENTER: "XO__XOX__",
        PLAY_X_BOTTOM_CENTER: "XO___OXX_",
        PLAY_X_BOTTOM_RIGHT: "XO___OX_X"
      }
    },
    XO____XOX: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO___XOX",
        PLAY_O_MIDDLE_LEFT: "XO_O__XOX",
        PLAY_O_CENTER: "XO__O_XOX",
        PLAY_O_MIDDLE_RIGHT: "XO___OXOX"
      }
    },
    XO____XO_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX___XO_",
        PLAY_X_MIDDLE_LEFT: "XO_X__XO_",
        PLAY_X_CENTER: "XO__X_XO_",
        PLAY_X_MIDDLE_RIGHT: "XO___XXO_",
        PLAY_X_BOTTOM_RIGHT: "XO____XOX"
      }
    },
    XO____XXO: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO___XXO",
        PLAY_O_MIDDLE_LEFT: "XO_O__XXO",
        PLAY_O_CENTER: "XO__O_XXO",
        PLAY_O_MIDDLE_RIGHT: "XO___OXXO"
      }
    },
    XO____X_O: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX___X_O",
        PLAY_X_MIDDLE_LEFT: "XO_X__X_O",
        PLAY_X_CENTER: "XO__X_X_O",
        PLAY_X_MIDDLE_RIGHT: "XO___XX_O",
        PLAY_X_BOTTOM_CENTER: "XO____XXO"
      }
    },
    XO____X__: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO___X__",
        PLAY_O_MIDDLE_LEFT: "XO_O__X__",
        PLAY_O_CENTER: "XO__O_X__",
        PLAY_O_MIDDLE_RIGHT: "XO___OX__",
        PLAY_O_BOTTOM_CENTER: "XO____XO_",
        PLAY_O_BOTTOM_RIGHT: "XO____X_O"
      }
    },
    XOOO___XX: {
      on: {
        PLAY_X_CENTER: "XOOOX__XX",
        PLAY_X_MIDDLE_RIGHT: "XOOO_X_XX",
        PLAY_X_BOTTOM_LEFT: "XOOO__XXX"
      }
    },
    XOO_O__XX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOXO__XX",
        PLAY_X_MIDDLE_RIGHT: "XOO_OX_XX",
        PLAY_X_BOTTOM_LEFT: "XOO_O_XXX"
      }
    },
    XOO__O_XX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOX_O_XX",
        PLAY_X_CENTER: "XOO_XO_XX",
        PLAY_X_BOTTOM_LEFT: "XOO__OXXX"
      }
    },
    XOO___OXX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOX__OXX",
        PLAY_X_CENTER: "XOO_X_OXX",
        PLAY_X_MIDDLE_RIGHT: "XOO__XOXX"
      }
    },
    XOO____XX: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XOOO___XX",
        PLAY_O_CENTER: "XOO_O__XX",
        PLAY_O_MIDDLE_RIGHT: "XOO__O_XX",
        PLAY_O_BOTTOM_LEFT: "XOO___OXX"
      }
    },
    XOO____X_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOX___X_",
        PLAY_X_CENTER: "XOO_X__X_",
        PLAY_X_MIDDLE_RIGHT: "XOO__X_X_",
        PLAY_X_BOTTOM_LEFT: "XOO___XX_",
        PLAY_X_BOTTOM_RIGHT: "XOO____XX"
      }
    },
    XO_OO__XX: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXOO__XX",
        PLAY_X_MIDDLE_RIGHT: "XO_OOX_XX",
        PLAY_X_BOTTOM_LEFT: "XO_OO_XXX"
      }
    },
    XO_O_O_XX: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXO_O_XX",
        PLAY_X_CENTER: "XO_OXO_XX",
        PLAY_X_BOTTOM_LEFT: "XO_O_OXXX"
      }
    },
    XO_O__OXX: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXO__OXX",
        PLAY_X_CENTER: "XO_OX_OXX",
        PLAY_X_MIDDLE_RIGHT: "XO_O_XOXX"
      }
    },
    XO_O___XX: {
      on: {
        PLAY_O_TOP_RIGHT: "XOOO___XX",
        PLAY_O_CENTER: "XO_OO__XX",
        PLAY_O_MIDDLE_RIGHT: "XO_O_O_XX",
        PLAY_O_BOTTOM_LEFT: "XO_O__OXX"
      }
    },
    XO_O___X_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXO___X_",
        PLAY_X_CENTER: "XO_OX__X_",
        PLAY_X_MIDDLE_RIGHT: "XO_O_X_X_",
        PLAY_X_BOTTOM_LEFT: "XO_O__XX_",
        PLAY_X_BOTTOM_RIGHT: "XO_O___XX"
      }
    },
    XO__OO_XX: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_OO_XX",
        PLAY_X_MIDDLE_LEFT: "XO_XOO_XX",
        PLAY_X_BOTTOM_LEFT: "XO__OOXXX"
      }
    },
    XO__O_OXX: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_O_OXX",
        PLAY_X_MIDDLE_LEFT: "XO_XO_OXX",
        PLAY_X_MIDDLE_RIGHT: "XO__OXOXX"
      }
    },
    XO__O__XX: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO_O__XX",
        PLAY_O_MIDDLE_LEFT: "XO_OO__XX",
        PLAY_O_MIDDLE_RIGHT: "XO__OO_XX",
        PLAY_O_BOTTOM_LEFT: "XO__O_OXX"
      }
    },
    XO__O__X_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_O__X_",
        PLAY_X_MIDDLE_LEFT: "XO_XO__X_",
        PLAY_X_MIDDLE_RIGHT: "XO__OX_X_",
        PLAY_X_BOTTOM_LEFT: "XO__O_XX_",
        PLAY_X_BOTTOM_RIGHT: "XO__O__XX"
      }
    },
    XO___OOXX: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX__OOXX",
        PLAY_X_MIDDLE_LEFT: "XO_X_OOXX",
        PLAY_X_CENTER: "XO__XOOXX"
      }
    },
    XO___O_XX: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO__O_XX",
        PLAY_O_MIDDLE_LEFT: "XO_O_O_XX",
        PLAY_O_CENTER: "XO__OO_XX",
        PLAY_O_BOTTOM_LEFT: "XO___OOXX"
      }
    },
    XO___O_X_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX__O_X_",
        PLAY_X_MIDDLE_LEFT: "XO_X_O_X_",
        PLAY_X_CENTER: "XO__XO_X_",
        PLAY_X_BOTTOM_LEFT: "XO___OXX_",
        PLAY_X_BOTTOM_RIGHT: "XO___O_XX"
      }
    },
    XO____OXX: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO___OXX",
        PLAY_O_MIDDLE_LEFT: "XO_O__OXX",
        PLAY_O_CENTER: "XO__O_OXX",
        PLAY_O_MIDDLE_RIGHT: "XO___OOXX"
      }
    },
    XO____OX_: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX___OX_",
        PLAY_X_MIDDLE_LEFT: "XO_X__OX_",
        PLAY_X_CENTER: "XO__X_OX_",
        PLAY_X_MIDDLE_RIGHT: "XO___XOX_",
        PLAY_X_BOTTOM_RIGHT: "XO____OXX"
      }
    },
    XO_____XO: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX____XO",
        PLAY_X_MIDDLE_LEFT: "XO_X___XO",
        PLAY_X_CENTER: "XO__X__XO",
        PLAY_X_MIDDLE_RIGHT: "XO___X_XO",
        PLAY_X_BOTTOM_LEFT: "XO____XXO"
      }
    },
    XO_____X_: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO____X_",
        PLAY_O_MIDDLE_LEFT: "XO_O___X_",
        PLAY_O_CENTER: "XO__O__X_",
        PLAY_O_MIDDLE_RIGHT: "XO___O_X_",
        PLAY_O_BOTTOM_LEFT: "XO____OX_",
        PLAY_O_BOTTOM_RIGHT: "XO_____XO"
      }
    },
    XOO_____X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XOOX____X",
        PLAY_X_CENTER: "XOO_X___X",
        PLAY_X_MIDDLE_RIGHT: "XOO__X__X",
        PLAY_X_BOTTOM_LEFT: "XOO___X_X",
        PLAY_X_BOTTOM_CENTER: "XOO____XX"
      }
    },
    XO_O____X: {
      on: {
        PLAY_X_TOP_RIGHT: "XOXO____X",
        PLAY_X_CENTER: "XO_OX___X",
        PLAY_X_MIDDLE_RIGHT: "XO_O_X__X",
        PLAY_X_BOTTOM_LEFT: "XO_O__X_X",
        PLAY_X_BOTTOM_CENTER: "XO_O___XX"
      }
    },
    XO__O___X: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX_O___X",
        PLAY_X_MIDDLE_LEFT: "XO_XO___X",
        PLAY_X_MIDDLE_RIGHT: "XO__OX__X",
        PLAY_X_BOTTOM_LEFT: "XO__O_X_X",
        PLAY_X_BOTTOM_CENTER: "XO__O__XX"
      }
    },
    XO___O__X: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX__O__X",
        PLAY_X_MIDDLE_LEFT: "XO_X_O__X",
        PLAY_X_CENTER: "XO__XO__X",
        PLAY_X_BOTTOM_LEFT: "XO___OX_X",
        PLAY_X_BOTTOM_CENTER: "XO___O_XX"
      }
    },
    XO____O_X: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX___O_X",
        PLAY_X_MIDDLE_LEFT: "XO_X__O_X",
        PLAY_X_CENTER: "XO__X_O_X",
        PLAY_X_MIDDLE_RIGHT: "XO___XO_X",
        PLAY_X_BOTTOM_CENTER: "XO____OXX"
      }
    },
    XO_____OX: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX____OX",
        PLAY_X_MIDDLE_LEFT: "XO_X___OX",
        PLAY_X_CENTER: "XO__X__OX",
        PLAY_X_MIDDLE_RIGHT: "XO___X_OX",
        PLAY_X_BOTTOM_LEFT: "XO____XOX"
      }
    },
    XO______X: {
      on: {
        PLAY_O_TOP_RIGHT: "XOO_____X",
        PLAY_O_MIDDLE_LEFT: "XO_O____X",
        PLAY_O_CENTER: "XO__O___X",
        PLAY_O_MIDDLE_RIGHT: "XO___O__X",
        PLAY_O_BOTTOM_LEFT: "XO____O_X",
        PLAY_O_BOTTOM_CENTER: "XO_____OX"
      }
    },
    XO_______: {
      on: {
        PLAY_X_TOP_RIGHT: "XOX______",
        PLAY_X_MIDDLE_LEFT: "XO_X_____",
        PLAY_X_CENTER: "XO__X____",
        PLAY_X_MIDDLE_RIGHT: "XO___X___",
        PLAY_X_BOTTOM_LEFT: "XO____X__",
        PLAY_X_BOTTOM_CENTER: "XO_____X_",
        PLAY_X_BOTTOM_RIGHT: "XO______X"
      }
    },
    XXOOXOXOX: { on: { "": "X_WINS" } },
    XXOOXOXO_: { on: { PLAY_X_BOTTOM_RIGHT: "XXOOXOXOX" } },
    XXOOXOX_O: { on: { "": "O_WINS" } },
    XXOOXOX__: {
      on: {
        PLAY_O_BOTTOM_CENTER: "XXOOXOXO_",
        PLAY_O_BOTTOM_RIGHT: "XXOOXOX_O"
      }
    },
    XXOOXO_X_: { on: { "": "X_WINS" } },
    XXOOXO__X: { on: { "": "X_WINS" } },
    XXOOXO___: {
      on: {
        PLAY_X_BOTTOM_LEFT: "XXOOXOX__",
        PLAY_X_BOTTOM_CENTER: "XXOOXO_X_",
        PLAY_X_BOTTOM_RIGHT: "XXOOXO__X"
      }
    },
    XXOOXXOOX: { on: { "": "X_WINS" } },
    XXOOXXOO_: { on: { PLAY_X_BOTTOM_RIGHT: "XXOOXXOOX" } },
    XXOOXXOXO: { on: { "": "X_WINS" } },
    XXOOXXO_O: { on: { PLAY_X_BOTTOM_CENTER: "XXOOXXOXO" } },
    XXOOXXO__: {
      on: {
        PLAY_O_BOTTOM_CENTER: "XXOOXXOO_",
        PLAY_O_BOTTOM_RIGHT: "XXOOXXO_O"
      }
    },
    XXOOX_OX_: { on: { "": "X_WINS" } },
    XXOOX_O_X: { on: { "": "X_WINS" } },
    XXOOX_O__: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XXOOXXO__",
        PLAY_X_BOTTOM_CENTER: "XXOOX_OX_",
        PLAY_X_BOTTOM_RIGHT: "XXOOX_O_X"
      }
    },
    XXOOXXXOO: { on: { "": "DRAW" } },
    XXOOXX_OO: { on: { PLAY_X_BOTTOM_LEFT: "XXOOXXXOO" } },
    XXOOXX_O_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XXOOXXOO_",
        PLAY_O_BOTTOM_RIGHT: "XXOOXX_OO"
      }
    },
    XXOOX_XOO: { on: { PLAY_X_MIDDLE_RIGHT: "XXOOXXXOO" } },
    XXOOX_XO_: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XXOOXOXO_",
        PLAY_O_BOTTOM_RIGHT: "XXOOX_XOO"
      }
    },
    XXOOX__OX: { on: { "": "X_WINS" } },
    XXOOX__O_: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XXOOXX_O_",
        PLAY_X_BOTTOM_LEFT: "XXOOX_XO_",
        PLAY_X_BOTTOM_RIGHT: "XXOOX__OX"
      }
    },
    XXOOXX__O: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XXOOXXO_O",
        PLAY_O_BOTTOM_CENTER: "XXOOXX_OO"
      }
    },
    XXOOX_X_O: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XXOOXOX_O",
        PLAY_O_BOTTOM_CENTER: "XXOOX_XOO"
      }
    },
    XXOOX__XO: { on: { "": "X_WINS" } },
    XXOOX___O: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XXOOXX__O",
        PLAY_X_BOTTOM_LEFT: "XXOOX_X_O",
        PLAY_X_BOTTOM_CENTER: "XXOOX__XO"
      }
    },
    XXOOX____: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XXOOXO___",
        PLAY_O_BOTTOM_LEFT: "XXOOX_O__",
        PLAY_O_BOTTOM_CENTER: "XXOOX__O_",
        PLAY_O_BOTTOM_RIGHT: "XXOOX___O"
      }
    },
    XXOOOXXOX: { on: { "": "DRAW" } },
    XXOOOXXO_: { on: { PLAY_X_BOTTOM_RIGHT: "XXOOOXXOX" } },
    XXOOOXXXO: { on: { "": "DRAW" } },
    XXOOOXX_O: { on: { PLAY_X_BOTTOM_CENTER: "XXOOOXXXO" } },
    XXOOOXX__: {
      on: {
        PLAY_O_BOTTOM_CENTER: "XXOOOXXO_",
        PLAY_O_BOTTOM_RIGHT: "XXOOOXX_O"
      }
    },
    XXOOOXOX_: { on: { "": "O_WINS" } },
    XXOOOX_XO: { on: { PLAY_X_BOTTOM_LEFT: "XXOOOXXXO" } },
    XXOOOX_X_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XXOOOXOX_",
        PLAY_O_BOTTOM_RIGHT: "XXOOOX_XO"
      }
    },
    XXOOOXO_X: { on: { "": "O_WINS" } },
    XXOOOX_OX: { on: { PLAY_X_BOTTOM_LEFT: "XXOOOXXOX" } },
    XXOOOX__X: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XXOOOXO_X",
        PLAY_O_BOTTOM_CENTER: "XXOOOX_OX"
      }
    },
    XXOOOX___: {
      on: {
        PLAY_X_BOTTOM_LEFT: "XXOOOXX__",
        PLAY_X_BOTTOM_CENTER: "XXOOOX_X_",
        PLAY_X_BOTTOM_RIGHT: "XXOOOX__X"
      }
    },
    XXOO_XOXO: { on: { PLAY_X_CENTER: "XXOOXXOXO" } },
    XXOO_XOX_: {
      on: { PLAY_O_CENTER: "XXOOOXOX_", PLAY_O_BOTTOM_RIGHT: "XXOO_XOXO" }
    },
    XXOO_XOOX: { on: { PLAY_X_CENTER: "XXOOXXOOX" } },
    XXOO_XO_X: {
      on: { PLAY_O_CENTER: "XXOOOXO_X", PLAY_O_BOTTOM_CENTER: "XXOO_XOOX" }
    },
    XXOO_XO__: {
      on: {
        PLAY_X_CENTER: "XXOOXXO__",
        PLAY_X_BOTTOM_CENTER: "XXOO_XOX_",
        PLAY_X_BOTTOM_RIGHT: "XXOO_XO_X"
      }
    },
    XXOO_XXOO: { on: { PLAY_X_CENTER: "XXOOXXXOO" } },
    XXOO_XXO_: {
      on: { PLAY_O_CENTER: "XXOOOXXO_", PLAY_O_BOTTOM_RIGHT: "XXOO_XXOO" }
    },
    XXOO_X_OX: {
      on: { PLAY_O_CENTER: "XXOOOX_OX", PLAY_O_BOTTOM_LEFT: "XXOO_XOOX" }
    },
    XXOO_X_O_: {
      on: {
        PLAY_X_CENTER: "XXOOXX_O_",
        PLAY_X_BOTTOM_LEFT: "XXOO_XXO_",
        PLAY_X_BOTTOM_RIGHT: "XXOO_X_OX"
      }
    },
    XXOO_XX_O: {
      on: { PLAY_O_CENTER: "XXOOOXX_O", PLAY_O_BOTTOM_CENTER: "XXOO_XXOO" }
    },
    XXOO_X_XO: {
      on: { PLAY_O_CENTER: "XXOOOX_XO", PLAY_O_BOTTOM_LEFT: "XXOO_XOXO" }
    },
    XXOO_X__O: {
      on: {
        PLAY_X_CENTER: "XXOOXX__O",
        PLAY_X_BOTTOM_LEFT: "XXOO_XX_O",
        PLAY_X_BOTTOM_CENTER: "XXOO_X_XO"
      }
    },
    XXOO_X___: {
      on: {
        PLAY_O_CENTER: "XXOOOX___",
        PLAY_O_BOTTOM_LEFT: "XXOO_XO__",
        PLAY_O_BOTTOM_CENTER: "XXOO_X_O_",
        PLAY_O_BOTTOM_RIGHT: "XXOO_X__O"
      }
    },
    XXOOOOXX_: { on: { "": "O_WINS" } },
    XXOOO_XXO: { on: { PLAY_X_MIDDLE_RIGHT: "XXOOOXXXO" } },
    XXOOO_XX_: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XXOOOOXX_",
        PLAY_O_BOTTOM_RIGHT: "XXOOO_XXO"
      }
    },
    XXOOOOX_X: { on: { "": "O_WINS" } },
    XXOOO_XOX: { on: { PLAY_X_MIDDLE_RIGHT: "XXOOOXXOX" } },
    XXOOO_X_X: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XXOOOOX_X",
        PLAY_O_BOTTOM_CENTER: "XXOOO_XOX"
      }
    },
    XXOOO_X__: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XXOOOXX__",
        PLAY_X_BOTTOM_CENTER: "XXOOO_XX_",
        PLAY_X_BOTTOM_RIGHT: "XXOOO_X_X"
      }
    },
    XXOO_OXXO: { on: { "": "O_WINS" } },
    XXOO_OXX_: {
      on: { PLAY_O_CENTER: "XXOOOOXX_", PLAY_O_BOTTOM_RIGHT: "XXOO_OXXO" }
    },
    XXOO_OXOX: { on: { PLAY_X_CENTER: "XXOOXOXOX" } },
    XXOO_OX_X: {
      on: { PLAY_O_CENTER: "XXOOOOX_X", PLAY_O_BOTTOM_CENTER: "XXOO_OXOX" }
    },
    XXOO_OX__: {
      on: {
        PLAY_X_CENTER: "XXOOXOX__",
        PLAY_X_BOTTOM_CENTER: "XXOO_OXX_",
        PLAY_X_BOTTOM_RIGHT: "XXOO_OX_X"
      }
    },
    XXOO__XOX: {
      on: { PLAY_O_CENTER: "XXOOO_XOX", PLAY_O_MIDDLE_RIGHT: "XXOO_OXOX" }
    },
    XXOO__XO_: {
      on: {
        PLAY_X_CENTER: "XXOOX_XO_",
        PLAY_X_MIDDLE_RIGHT: "XXOO_XXO_",
        PLAY_X_BOTTOM_RIGHT: "XXOO__XOX"
      }
    },
    XXOO__XXO: {
      on: { PLAY_O_CENTER: "XXOOO_XXO", PLAY_O_MIDDLE_RIGHT: "XXOO_OXXO" }
    },
    XXOO__X_O: {
      on: {
        PLAY_X_CENTER: "XXOOX_X_O",
        PLAY_X_MIDDLE_RIGHT: "XXOO_XX_O",
        PLAY_X_BOTTOM_CENTER: "XXOO__XXO"
      }
    },
    XXOO__X__: {
      on: {
        PLAY_O_CENTER: "XXOOO_X__",
        PLAY_O_MIDDLE_RIGHT: "XXOO_OX__",
        PLAY_O_BOTTOM_CENTER: "XXOO__XO_",
        PLAY_O_BOTTOM_RIGHT: "XXOO__X_O"
      }
    },
    XXOOOO_XX: { on: { "": "O_WINS" } },
    XXOOO_OXX: { on: { "": "O_WINS" } },
    XXOOO__XX: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XXOOOO_XX",
        PLAY_O_BOTTOM_LEFT: "XXOOO_OXX"
      }
    },
    XXOOO__X_: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XXOOOX_X_",
        PLAY_X_BOTTOM_LEFT: "XXOOO_XX_",
        PLAY_X_BOTTOM_RIGHT: "XXOOO__XX"
      }
    },
    XXOOXOOXX: { on: { "": "X_WINS" } },
    XXOO_OOXX: { on: { PLAY_X_CENTER: "XXOOXOOXX" } },
    XXOO_O_XX: {
      on: { PLAY_O_CENTER: "XXOOOO_XX", PLAY_O_BOTTOM_LEFT: "XXOO_OOXX" }
    },
    XXOO_O_X_: {
      on: {
        PLAY_X_CENTER: "XXOOXO_X_",
        PLAY_X_BOTTOM_LEFT: "XXOO_OXX_",
        PLAY_X_BOTTOM_RIGHT: "XXOO_O_XX"
      }
    },
    XXOO__OXX: {
      on: { PLAY_O_CENTER: "XXOOO_OXX", PLAY_O_MIDDLE_RIGHT: "XXOO_OOXX" }
    },
    XXOO__OX_: {
      on: {
        PLAY_X_CENTER: "XXOOX_OX_",
        PLAY_X_MIDDLE_RIGHT: "XXOO_XOX_",
        PLAY_X_BOTTOM_RIGHT: "XXOO__OXX"
      }
    },
    XXOO___XO: {
      on: {
        PLAY_X_CENTER: "XXOOX__XO",
        PLAY_X_MIDDLE_RIGHT: "XXOO_X_XO",
        PLAY_X_BOTTOM_LEFT: "XXOO__XXO"
      }
    },
    XXOO___X_: {
      on: {
        PLAY_O_CENTER: "XXOOO__X_",
        PLAY_O_MIDDLE_RIGHT: "XXOO_O_X_",
        PLAY_O_BOTTOM_LEFT: "XXOO__OX_",
        PLAY_O_BOTTOM_RIGHT: "XXOO___XO"
      }
    },
    XXOOO___X: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XXOOOX__X",
        PLAY_X_BOTTOM_LEFT: "XXOOO_X_X",
        PLAY_X_BOTTOM_CENTER: "XXOOO__XX"
      }
    },
    XXOO_O__X: {
      on: {
        PLAY_X_CENTER: "XXOOXO__X",
        PLAY_X_BOTTOM_LEFT: "XXOO_OX_X",
        PLAY_X_BOTTOM_CENTER: "XXOO_O_XX"
      }
    },
    XXOO__O_X: {
      on: {
        PLAY_X_CENTER: "XXOOX_O_X",
        PLAY_X_MIDDLE_RIGHT: "XXOO_XO_X",
        PLAY_X_BOTTOM_CENTER: "XXOO__OXX"
      }
    },
    XXOO___OX: {
      on: {
        PLAY_X_CENTER: "XXOOX__OX",
        PLAY_X_MIDDLE_RIGHT: "XXOO_X_OX",
        PLAY_X_BOTTOM_LEFT: "XXOO__XOX"
      }
    },
    XXOO____X: {
      on: {
        PLAY_O_CENTER: "XXOOO___X",
        PLAY_O_MIDDLE_RIGHT: "XXOO_O__X",
        PLAY_O_BOTTOM_LEFT: "XXOO__O_X",
        PLAY_O_BOTTOM_CENTER: "XXOO___OX"
      }
    },
    XXOO_____: {
      on: {
        PLAY_X_CENTER: "XXOOX____",
        PLAY_X_MIDDLE_RIGHT: "XXOO_X___",
        PLAY_X_BOTTOM_LEFT: "XXOO__X__",
        PLAY_X_BOTTOM_CENTER: "XXOO___X_",
        PLAY_X_BOTTOM_RIGHT: "XXOO____X"
      }
    },
    XXOXOOX__: { on: { "": "X_WINS" } },
    XXOXOOOX_: { on: { "": "O_WINS" } },
    XXOXOO_XO: { on: { "": "O_WINS" } },
    XXOXOO_X_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XXOXOOOX_",
        PLAY_O_BOTTOM_RIGHT: "XXOXOO_XO"
      }
    },
    XXOXOOO_X: { on: { "": "O_WINS" } },
    XXOXOOXOX: { on: { "": "X_WINS" } },
    XXOXOO_OX: { on: { PLAY_X_BOTTOM_LEFT: "XXOXOOXOX" } },
    XXOXOO__X: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XXOXOOO_X",
        PLAY_O_BOTTOM_CENTER: "XXOXOO_OX"
      }
    },
    XXOXOO___: {
      on: {
        PLAY_X_BOTTOM_LEFT: "XXOXOOX__",
        PLAY_X_BOTTOM_CENTER: "XXOXOO_X_",
        PLAY_X_BOTTOM_RIGHT: "XXOXOO__X"
      }
    },
    XXOXO_O__: { on: { "": "O_WINS" } },
    XXOXOXOO_: { on: { "": "O_WINS" } },
    XXOXOXXOO: { on: { "": "X_WINS" } },
    XXOXOX_OO: { on: { PLAY_X_BOTTOM_LEFT: "XXOXOXXOO" } },
    XXOXOX_O_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XXOXOXOO_",
        PLAY_O_BOTTOM_RIGHT: "XXOXOX_OO"
      }
    },
    XXOXO_XO_: { on: { "": "X_WINS" } },
    XXOXO_OOX: { on: { "": "O_WINS" } },
    XXOXO__OX: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XXOXOO_OX",
        PLAY_O_BOTTOM_LEFT: "XXOXO_OOX"
      }
    },
    XXOXO__O_: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XXOXOX_O_",
        PLAY_X_BOTTOM_LEFT: "XXOXO_XO_",
        PLAY_X_BOTTOM_RIGHT: "XXOXO__OX"
      }
    },
    XXOXOXO_O: { on: { "": "O_WINS" } },
    XXOXOX__O: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XXOXOXO_O",
        PLAY_O_BOTTOM_CENTER: "XXOXOX_OO"
      }
    },
    XXOXO_X_O: { on: { "": "X_WINS" } },
    XXOXO_OXO: { on: { "": "O_WINS" } },
    XXOXO__XO: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XXOXOO_XO",
        PLAY_O_BOTTOM_LEFT: "XXOXO_OXO"
      }
    },
    XXOXO___O: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "XXOXOX__O",
        PLAY_X_BOTTOM_LEFT: "XXOXO_X_O",
        PLAY_X_BOTTOM_CENTER: "XXOXO__XO"
      }
    },
    XXOXO____: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XXOXOO___",
        PLAY_O_BOTTOM_LEFT: "XXOXO_O__",
        PLAY_O_BOTTOM_CENTER: "XXOXO__O_",
        PLAY_O_BOTTOM_RIGHT: "XXOXO___O"
      }
    },
    XXO_OXO__: { on: { "": "O_WINS" } },
    XXO_OXXOO: { on: { PLAY_X_MIDDLE_LEFT: "XXOXOXXOO" } },
    XXO_OXXO_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOOOXXO_",
        PLAY_O_BOTTOM_RIGHT: "XXO_OXXOO"
      }
    },
    XXO_OXOOX: { on: { "": "O_WINS" } },
    XXO_OX_OX: {
      on: { PLAY_O_MIDDLE_LEFT: "XXOOOX_OX", PLAY_O_BOTTOM_LEFT: "XXO_OXOOX" }
    },
    XXO_OX_O_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOXOX_O_",
        PLAY_X_BOTTOM_LEFT: "XXO_OXXO_",
        PLAY_X_BOTTOM_RIGHT: "XXO_OX_OX"
      }
    },
    XXO_OXX_O: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOOOXX_O",
        PLAY_O_BOTTOM_CENTER: "XXO_OXXOO"
      }
    },
    XXO_OXOXO: { on: { "": "O_WINS" } },
    XXO_OX_XO: {
      on: { PLAY_O_MIDDLE_LEFT: "XXOOOX_XO", PLAY_O_BOTTOM_LEFT: "XXO_OXOXO" }
    },
    XXO_OX__O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOXOX__O",
        PLAY_X_BOTTOM_LEFT: "XXO_OXX_O",
        PLAY_X_BOTTOM_CENTER: "XXO_OX_XO"
      }
    },
    XXO_OX___: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOOOX___",
        PLAY_O_BOTTOM_LEFT: "XXO_OXO__",
        PLAY_O_BOTTOM_CENTER: "XXO_OX_O_",
        PLAY_O_BOTTOM_RIGHT: "XXO_OX__O"
      }
    },
    XXO_OOXXO: { on: { "": "O_WINS" } },
    XXO_OOXX_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOOOOXX_",
        PLAY_O_BOTTOM_RIGHT: "XXO_OOXXO"
      }
    },
    XXO_OOXOX: { on: { PLAY_X_MIDDLE_LEFT: "XXOXOOXOX" } },
    XXO_OOX_X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOOOOX_X",
        PLAY_O_BOTTOM_CENTER: "XXO_OOXOX"
      }
    },
    XXO_OOX__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOXOOX__",
        PLAY_X_BOTTOM_CENTER: "XXO_OOXX_",
        PLAY_X_BOTTOM_RIGHT: "XXO_OOX_X"
      }
    },
    XXO_O_XOX: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOOO_XOX",
        PLAY_O_MIDDLE_RIGHT: "XXO_OOXOX"
      }
    },
    XXO_O_XO_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOXO_XO_",
        PLAY_X_MIDDLE_RIGHT: "XXO_OXXO_",
        PLAY_X_BOTTOM_RIGHT: "XXO_O_XOX"
      }
    },
    XXO_O_XXO: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOOO_XXO",
        PLAY_O_MIDDLE_RIGHT: "XXO_OOXXO"
      }
    },
    XXO_O_X_O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOXO_X_O",
        PLAY_X_MIDDLE_RIGHT: "XXO_OXX_O",
        PLAY_X_BOTTOM_CENTER: "XXO_O_XXO"
      }
    },
    XXO_O_X__: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOOO_X__",
        PLAY_O_MIDDLE_RIGHT: "XXO_OOX__",
        PLAY_O_BOTTOM_CENTER: "XXO_O_XO_",
        PLAY_O_BOTTOM_RIGHT: "XXO_O_X_O"
      }
    },
    XXO_OOOXX: { on: { "": "O_WINS" } },
    XXO_OO_XX: {
      on: { PLAY_O_MIDDLE_LEFT: "XXOOOO_XX", PLAY_O_BOTTOM_LEFT: "XXO_OOOXX" }
    },
    XXO_OO_X_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOXOO_X_",
        PLAY_X_BOTTOM_LEFT: "XXO_OOXX_",
        PLAY_X_BOTTOM_RIGHT: "XXO_OO_XX"
      }
    },
    XXO_O_OX_: { on: { "": "O_WINS" } },
    XXO_O__XO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOXO__XO",
        PLAY_X_MIDDLE_RIGHT: "XXO_OX_XO",
        PLAY_X_BOTTOM_LEFT: "XXO_O_XXO"
      }
    },
    XXO_O__X_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOOO__X_",
        PLAY_O_MIDDLE_RIGHT: "XXO_OO_X_",
        PLAY_O_BOTTOM_LEFT: "XXO_O_OX_",
        PLAY_O_BOTTOM_RIGHT: "XXO_O__XO"
      }
    },
    XXO_OO__X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOXOO__X",
        PLAY_X_BOTTOM_LEFT: "XXO_OOX_X",
        PLAY_X_BOTTOM_CENTER: "XXO_OO_XX"
      }
    },
    XXO_O_O_X: { on: { "": "O_WINS" } },
    XXO_O__OX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOXO__OX",
        PLAY_X_MIDDLE_RIGHT: "XXO_OX_OX",
        PLAY_X_BOTTOM_LEFT: "XXO_O_XOX"
      }
    },
    XXO_O___X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOOO___X",
        PLAY_O_MIDDLE_RIGHT: "XXO_OO__X",
        PLAY_O_BOTTOM_LEFT: "XXO_O_O_X",
        PLAY_O_BOTTOM_CENTER: "XXO_O__OX"
      }
    },
    XXO_O____: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOXO____",
        PLAY_X_MIDDLE_RIGHT: "XXO_OX___",
        PLAY_X_BOTTOM_LEFT: "XXO_O_X__",
        PLAY_X_BOTTOM_CENTER: "XXO_O__X_",
        PLAY_X_BOTTOM_RIGHT: "XXO_O___X"
      }
    },
    XXOXXOOOX: { on: { "": "X_WINS" } },
    XXOXXOOO_: { on: { PLAY_X_BOTTOM_RIGHT: "XXOXXOOOX" } },
    XXOXXOO_O: { on: { "": "O_WINS" } },
    XXOXXOO__: {
      on: {
        PLAY_O_BOTTOM_CENTER: "XXOXXOOO_",
        PLAY_O_BOTTOM_RIGHT: "XXOXXOO_O"
      }
    },
    XXOX_OOXO: { on: { "": "O_WINS" } },
    XXOX_OOX_: {
      on: { PLAY_O_CENTER: "XXOXOOOX_", PLAY_O_BOTTOM_RIGHT: "XXOX_OOXO" }
    },
    XXOX_OOOX: { on: { PLAY_X_CENTER: "XXOXXOOOX" } },
    XXOX_OO_X: {
      on: { PLAY_O_CENTER: "XXOXOOO_X", PLAY_O_BOTTOM_CENTER: "XXOX_OOOX" }
    },
    XXOX_OO__: {
      on: {
        PLAY_X_CENTER: "XXOXXOO__",
        PLAY_X_BOTTOM_CENTER: "XXOX_OOX_",
        PLAY_X_BOTTOM_RIGHT: "XXOX_OO_X"
      }
    },
    XXOXXO_OO: { on: { "": "O_WINS" } },
    XXOXXO_O_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "XXOXXOOO_",
        PLAY_O_BOTTOM_RIGHT: "XXOXXO_OO"
      }
    },
    XXOX_OXO_: { on: { "": "X_WINS" } },
    XXOX_O_OX: {
      on: { PLAY_O_CENTER: "XXOXOO_OX", PLAY_O_BOTTOM_LEFT: "XXOX_OOOX" }
    },
    XXOX_O_O_: {
      on: {
        PLAY_X_CENTER: "XXOXXO_O_",
        PLAY_X_BOTTOM_LEFT: "XXOX_OXO_",
        PLAY_X_BOTTOM_RIGHT: "XXOX_O_OX"
      }
    },
    XXOX_O__O: { on: { "": "O_WINS" } },
    XXOX_O___: {
      on: {
        PLAY_O_CENTER: "XXOXOO___",
        PLAY_O_BOTTOM_LEFT: "XXOX_OO__",
        PLAY_O_BOTTOM_CENTER: "XXOX_O_O_",
        PLAY_O_BOTTOM_RIGHT: "XXOX_O__O"
      }
    },
    XXO_XOOX_: { on: { "": "X_WINS" } },
    XXO_XOO_X: { on: { "": "X_WINS" } },
    XXO_XOO__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOXXOO__",
        PLAY_X_BOTTOM_CENTER: "XXO_XOOX_",
        PLAY_X_BOTTOM_RIGHT: "XXO_XOO_X"
      }
    },
    XXO_XOXOO: { on: { "": "O_WINS" } },
    XXO_XOXO_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOOXOXO_",
        PLAY_O_BOTTOM_RIGHT: "XXO_XOXOO"
      }
    },
    XXO_XO_OX: { on: { "": "X_WINS" } },
    XXO_XO_O_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOXXO_O_",
        PLAY_X_BOTTOM_LEFT: "XXO_XOXO_",
        PLAY_X_BOTTOM_RIGHT: "XXO_XO_OX"
      }
    },
    XXO_XO__O: { on: { "": "O_WINS" } },
    XXO_XO___: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOOXO___",
        PLAY_O_BOTTOM_LEFT: "XXO_XOO__",
        PLAY_O_BOTTOM_CENTER: "XXO_XO_O_",
        PLAY_O_BOTTOM_RIGHT: "XXO_XO__O"
      }
    },
    XXO__OXOX: {
      on: { PLAY_O_MIDDLE_LEFT: "XXOO_OXOX", PLAY_O_CENTER: "XXO_OOXOX" }
    },
    XXO__OXO_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOX_OXO_",
        PLAY_X_CENTER: "XXO_XOXO_",
        PLAY_X_BOTTOM_RIGHT: "XXO__OXOX"
      }
    },
    XXO__OX_O: { on: { "": "O_WINS" } },
    XXO__OX__: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOO_OX__",
        PLAY_O_CENTER: "XXO_OOX__",
        PLAY_O_BOTTOM_CENTER: "XXO__OXO_",
        PLAY_O_BOTTOM_RIGHT: "XXO__OX_O"
      }
    },
    XXO__OOXX: {
      on: { PLAY_O_MIDDLE_LEFT: "XXOO_OOXX", PLAY_O_CENTER: "XXO_OOOXX" }
    },
    XXO__OOX_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOX_OOX_",
        PLAY_X_CENTER: "XXO_XOOX_",
        PLAY_X_BOTTOM_RIGHT: "XXO__OOXX"
      }
    },
    XXO__O_XO: { on: { "": "O_WINS" } },
    XXO__O_X_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOO_O_X_",
        PLAY_O_CENTER: "XXO_OO_X_",
        PLAY_O_BOTTOM_LEFT: "XXO__OOX_",
        PLAY_O_BOTTOM_RIGHT: "XXO__O_XO"
      }
    },
    XXO__OO_X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOX_OO_X",
        PLAY_X_CENTER: "XXO_XOO_X",
        PLAY_X_BOTTOM_CENTER: "XXO__OOXX"
      }
    },
    XXO__O_OX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOX_O_OX",
        PLAY_X_CENTER: "XXO_XO_OX",
        PLAY_X_BOTTOM_LEFT: "XXO__OXOX"
      }
    },
    XXO__O__X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOO_O__X",
        PLAY_O_CENTER: "XXO_OO__X",
        PLAY_O_BOTTOM_LEFT: "XXO__OO_X",
        PLAY_O_BOTTOM_CENTER: "XXO__O_OX"
      }
    },
    XXO__O___: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOX_O___",
        PLAY_X_CENTER: "XXO_XO___",
        PLAY_X_BOTTOM_LEFT: "XXO__OX__",
        PLAY_X_BOTTOM_CENTER: "XXO__O_X_",
        PLAY_X_BOTTOM_RIGHT: "XXO__O__X"
      }
    },
    XXOXX_OOO: { on: { "": "O_WINS" } },
    XXOXX_OO_: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XXOXXOOO_",
        PLAY_O_BOTTOM_RIGHT: "XXOXX_OOO"
      }
    },
    XXOX_XOOO: { on: { "": "O_WINS" } },
    XXOX_XOO_: {
      on: { PLAY_O_CENTER: "XXOXOXOO_", PLAY_O_BOTTOM_RIGHT: "XXOX_XOOO" }
    },
    XXOX__OOX: {
      on: { PLAY_O_CENTER: "XXOXO_OOX", PLAY_O_MIDDLE_RIGHT: "XXOX_OOOX" }
    },
    XXOX__OO_: {
      on: {
        PLAY_X_CENTER: "XXOXX_OO_",
        PLAY_X_MIDDLE_RIGHT: "XXOX_XOO_",
        PLAY_X_BOTTOM_RIGHT: "XXOX__OOX"
      }
    },
    XXOXX_O_O: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XXOXXOO_O",
        PLAY_O_BOTTOM_CENTER: "XXOXX_OOO"
      }
    },
    XXOX_XO_O: {
      on: { PLAY_O_CENTER: "XXOXOXO_O", PLAY_O_BOTTOM_CENTER: "XXOX_XOOO" }
    },
    XXOX__OXO: {
      on: { PLAY_O_CENTER: "XXOXO_OXO", PLAY_O_MIDDLE_RIGHT: "XXOX_OOXO" }
    },
    XXOX__O_O: {
      on: {
        PLAY_X_CENTER: "XXOXX_O_O",
        PLAY_X_MIDDLE_RIGHT: "XXOX_XO_O",
        PLAY_X_BOTTOM_CENTER: "XXOX__OXO"
      }
    },
    XXOX__O__: {
      on: {
        PLAY_O_CENTER: "XXOXO_O__",
        PLAY_O_MIDDLE_RIGHT: "XXOX_OO__",
        PLAY_O_BOTTOM_CENTER: "XXOX__OO_",
        PLAY_O_BOTTOM_RIGHT: "XXOX__O_O"
      }
    },
    XXO_XXOOO: { on: { "": "O_WINS" } },
    XXO_XXOO_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOOXXOO_",
        PLAY_O_BOTTOM_RIGHT: "XXO_XXOOO"
      }
    },
    XXO_X_OOX: { on: { "": "X_WINS" } },
    XXO_X_OO_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOXX_OO_",
        PLAY_X_MIDDLE_RIGHT: "XXO_XXOO_",
        PLAY_X_BOTTOM_RIGHT: "XXO_X_OOX"
      }
    },
    XXO_XXO_O: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOOXXO_O",
        PLAY_O_BOTTOM_CENTER: "XXO_XXOOO"
      }
    },
    XXO_X_OXO: { on: { "": "X_WINS" } },
    XXO_X_O_O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOXX_O_O",
        PLAY_X_MIDDLE_RIGHT: "XXO_XXO_O",
        PLAY_X_BOTTOM_CENTER: "XXO_X_OXO"
      }
    },
    XXO_X_O__: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOOX_O__",
        PLAY_O_MIDDLE_RIGHT: "XXO_XOO__",
        PLAY_O_BOTTOM_CENTER: "XXO_X_OO_",
        PLAY_O_BOTTOM_RIGHT: "XXO_X_O_O"
      }
    },
    XXO__XOOX: {
      on: { PLAY_O_MIDDLE_LEFT: "XXOO_XOOX", PLAY_O_CENTER: "XXO_OXOOX" }
    },
    XXO__XOO_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOX_XOO_",
        PLAY_X_CENTER: "XXO_XXOO_",
        PLAY_X_BOTTOM_RIGHT: "XXO__XOOX"
      }
    },
    XXO__XOXO: {
      on: { PLAY_O_MIDDLE_LEFT: "XXOO_XOXO", PLAY_O_CENTER: "XXO_OXOXO" }
    },
    XXO__XO_O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOX_XO_O",
        PLAY_X_CENTER: "XXO_XXO_O",
        PLAY_X_BOTTOM_CENTER: "XXO__XOXO"
      }
    },
    XXO__XO__: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOO_XO__",
        PLAY_O_CENTER: "XXO_OXO__",
        PLAY_O_BOTTOM_CENTER: "XXO__XOO_",
        PLAY_O_BOTTOM_RIGHT: "XXO__XO_O"
      }
    },
    XXO___OXO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOX__OXO",
        PLAY_X_CENTER: "XXO_X_OXO",
        PLAY_X_MIDDLE_RIGHT: "XXO__XOXO"
      }
    },
    XXO___OX_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOO__OX_",
        PLAY_O_CENTER: "XXO_O_OX_",
        PLAY_O_MIDDLE_RIGHT: "XXO__OOX_",
        PLAY_O_BOTTOM_RIGHT: "XXO___OXO"
      }
    },
    XXO___OOX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOX__OOX",
        PLAY_X_CENTER: "XXO_X_OOX",
        PLAY_X_MIDDLE_RIGHT: "XXO__XOOX"
      }
    },
    XXO___O_X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOO__O_X",
        PLAY_O_CENTER: "XXO_O_O_X",
        PLAY_O_MIDDLE_RIGHT: "XXO__OO_X",
        PLAY_O_BOTTOM_CENTER: "XXO___OOX"
      }
    },
    XXO___O__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOX__O__",
        PLAY_X_CENTER: "XXO_X_O__",
        PLAY_X_MIDDLE_RIGHT: "XXO__XO__",
        PLAY_X_BOTTOM_CENTER: "XXO___OX_",
        PLAY_X_BOTTOM_RIGHT: "XXO___O_X"
      }
    },
    XXOXX__OO: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "XXOXXO_OO",
        PLAY_O_BOTTOM_LEFT: "XXOXX_OOO"
      }
    },
    XXOX_X_OO: {
      on: { PLAY_O_CENTER: "XXOXOX_OO", PLAY_O_BOTTOM_LEFT: "XXOX_XOOO" }
    },
    XXOX__XOO: { on: { "": "X_WINS" } },
    XXOX___OO: {
      on: {
        PLAY_X_CENTER: "XXOXX__OO",
        PLAY_X_MIDDLE_RIGHT: "XXOX_X_OO",
        PLAY_X_BOTTOM_LEFT: "XXOX__XOO"
      }
    },
    XXOX___O_: {
      on: {
        PLAY_O_CENTER: "XXOXO__O_",
        PLAY_O_MIDDLE_RIGHT: "XXOX_O_O_",
        PLAY_O_BOTTOM_LEFT: "XXOX__OO_",
        PLAY_O_BOTTOM_RIGHT: "XXOX___OO"
      }
    },
    XXO_XX_OO: {
      on: { PLAY_O_MIDDLE_LEFT: "XXOOXX_OO", PLAY_O_BOTTOM_LEFT: "XXO_XXOOO" }
    },
    XXO_X_XOO: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOOX_XOO",
        PLAY_O_MIDDLE_RIGHT: "XXO_XOXOO"
      }
    },
    XXO_X__OO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOXX__OO",
        PLAY_X_MIDDLE_RIGHT: "XXO_XX_OO",
        PLAY_X_BOTTOM_LEFT: "XXO_X_XOO"
      }
    },
    XXO_X__O_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOOX__O_",
        PLAY_O_MIDDLE_RIGHT: "XXO_XO_O_",
        PLAY_O_BOTTOM_LEFT: "XXO_X_OO_",
        PLAY_O_BOTTOM_RIGHT: "XXO_X__OO"
      }
    },
    XXO__XXOO: {
      on: { PLAY_O_MIDDLE_LEFT: "XXOO_XXOO", PLAY_O_CENTER: "XXO_OXXOO" }
    },
    XXO__X_OO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOX_X_OO",
        PLAY_X_CENTER: "XXO_XX_OO",
        PLAY_X_BOTTOM_LEFT: "XXO__XXOO"
      }
    },
    XXO__X_O_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOO_X_O_",
        PLAY_O_CENTER: "XXO_OX_O_",
        PLAY_O_BOTTOM_LEFT: "XXO__XOO_",
        PLAY_O_BOTTOM_RIGHT: "XXO__X_OO"
      }
    },
    XXO___XOO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOX__XOO",
        PLAY_X_CENTER: "XXO_X_XOO",
        PLAY_X_MIDDLE_RIGHT: "XXO__XXOO"
      }
    },
    XXO___XO_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOO__XO_",
        PLAY_O_CENTER: "XXO_O_XO_",
        PLAY_O_MIDDLE_RIGHT: "XXO__OXO_",
        PLAY_O_BOTTOM_RIGHT: "XXO___XOO"
      }
    },
    XXO____OX: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOO___OX",
        PLAY_O_CENTER: "XXO_O__OX",
        PLAY_O_MIDDLE_RIGHT: "XXO__O_OX",
        PLAY_O_BOTTOM_LEFT: "XXO___OOX"
      }
    },
    XXO____O_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOX___O_",
        PLAY_X_CENTER: "XXO_X__O_",
        PLAY_X_MIDDLE_RIGHT: "XXO__X_O_",
        PLAY_X_BOTTOM_LEFT: "XXO___XO_",
        PLAY_X_BOTTOM_RIGHT: "XXO____OX"
      }
    },
    XXOX____O: {
      on: {
        PLAY_O_CENTER: "XXOXO___O",
        PLAY_O_MIDDLE_RIGHT: "XXOX_O__O",
        PLAY_O_BOTTOM_LEFT: "XXOX__O_O",
        PLAY_O_BOTTOM_CENTER: "XXOX___OO"
      }
    },
    XXO_X___O: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOOX___O",
        PLAY_O_MIDDLE_RIGHT: "XXO_XO__O",
        PLAY_O_BOTTOM_LEFT: "XXO_X_O_O",
        PLAY_O_BOTTOM_CENTER: "XXO_X__OO"
      }
    },
    XXO__X__O: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOO_X__O",
        PLAY_O_CENTER: "XXO_OX__O",
        PLAY_O_BOTTOM_LEFT: "XXO__XO_O",
        PLAY_O_BOTTOM_CENTER: "XXO__X_OO"
      }
    },
    XXO___X_O: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOO__X_O",
        PLAY_O_CENTER: "XXO_O_X_O",
        PLAY_O_MIDDLE_RIGHT: "XXO__OX_O",
        PLAY_O_BOTTOM_CENTER: "XXO___XOO"
      }
    },
    XXO____XO: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOO___XO",
        PLAY_O_CENTER: "XXO_O__XO",
        PLAY_O_MIDDLE_RIGHT: "XXO__O_XO",
        PLAY_O_BOTTOM_LEFT: "XXO___OXO"
      }
    },
    XXO_____O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "XXOX____O",
        PLAY_X_CENTER: "XXO_X___O",
        PLAY_X_MIDDLE_RIGHT: "XXO__X__O",
        PLAY_X_BOTTOM_LEFT: "XXO___X_O",
        PLAY_X_BOTTOM_CENTER: "XXO____XO"
      }
    },
    XXO______: {
      on: {
        PLAY_O_MIDDLE_LEFT: "XXOO_____",
        PLAY_O_CENTER: "XXO_O____",
        PLAY_O_MIDDLE_RIGHT: "XXO__O___",
        PLAY_O_BOTTOM_LEFT: "XXO___O__",
        PLAY_O_BOTTOM_CENTER: "XXO____O_",
        PLAY_O_BOTTOM_RIGHT: "XXO_____O"
      }
    },
    X_OXOXO__: { on: { "": "O_WINS" } },
    X_OXOXXO_: { on: { "": "X_WINS" } },
    X_OXOXOOX: { on: { "": "O_WINS" } },
    X_OXOX_OX: {
      on: { PLAY_O_TOP_CENTER: "XOOXOX_OX", PLAY_O_BOTTOM_LEFT: "X_OXOXOOX" }
    },
    X_OXOX_O_: {
      on: {
        PLAY_X_TOP_CENTER: "XXOXOX_O_",
        PLAY_X_BOTTOM_LEFT: "X_OXOXXO_",
        PLAY_X_BOTTOM_RIGHT: "X_OXOX_OX"
      }
    },
    X_OXOXX_O: { on: { "": "X_WINS" } },
    X_OXOXOXO: { on: { "": "O_WINS" } },
    X_OXOX_XO: {
      on: { PLAY_O_TOP_CENTER: "XOOXOX_XO", PLAY_O_BOTTOM_LEFT: "X_OXOXOXO" }
    },
    X_OXOX__O: {
      on: {
        PLAY_X_TOP_CENTER: "XXOXOX__O",
        PLAY_X_BOTTOM_LEFT: "X_OXOXX_O",
        PLAY_X_BOTTOM_CENTER: "X_OXOX_XO"
      }
    },
    X_OXOX___: {
      on: {
        PLAY_O_TOP_CENTER: "XOOXOX___",
        PLAY_O_BOTTOM_LEFT: "X_OXOXO__",
        PLAY_O_BOTTOM_CENTER: "X_OXOX_O_",
        PLAY_O_BOTTOM_RIGHT: "X_OXOX__O"
      }
    },
    X_OXO_X__: { on: { "": "X_WINS" } },
    X_OXOOXX_: { on: { "": "X_WINS" } },
    X_OXOOOXX: { on: { "": "O_WINS" } },
    X_OXOO_XX: {
      on: { PLAY_O_TOP_CENTER: "XOOXOO_XX", PLAY_O_BOTTOM_LEFT: "X_OXOOOXX" }
    },
    X_OXOO_X_: {
      on: {
        PLAY_X_TOP_CENTER: "XXOXOO_X_",
        PLAY_X_BOTTOM_LEFT: "X_OXOOXX_",
        PLAY_X_BOTTOM_RIGHT: "X_OXOO_XX"
      }
    },
    X_OXO_OX_: { on: { "": "O_WINS" } },
    X_OXO_XXO: { on: { "": "X_WINS" } },
    X_OXO__XO: {
      on: {
        PLAY_X_TOP_CENTER: "XXOXO__XO",
        PLAY_X_MIDDLE_RIGHT: "X_OXOX_XO",
        PLAY_X_BOTTOM_LEFT: "X_OXO_XXO"
      }
    },
    X_OXO__X_: {
      on: {
        PLAY_O_TOP_CENTER: "XOOXO__X_",
        PLAY_O_MIDDLE_RIGHT: "X_OXOO_X_",
        PLAY_O_BOTTOM_LEFT: "X_OXO_OX_",
        PLAY_O_BOTTOM_RIGHT: "X_OXO__XO"
      }
    },
    X_OXOOX_X: { on: { "": "X_WINS" } },
    X_OXOO__X: {
      on: {
        PLAY_X_TOP_CENTER: "XXOXOO__X",
        PLAY_X_BOTTOM_LEFT: "X_OXOOX_X",
        PLAY_X_BOTTOM_CENTER: "X_OXOO_XX"
      }
    },
    X_OXO_O_X: { on: { "": "O_WINS" } },
    X_OXO_XOX: { on: { "": "X_WINS" } },
    X_OXO__OX: {
      on: {
        PLAY_X_TOP_CENTER: "XXOXO__OX",
        PLAY_X_MIDDLE_RIGHT: "X_OXOX_OX",
        PLAY_X_BOTTOM_LEFT: "X_OXO_XOX"
      }
    },
    X_OXO___X: {
      on: {
        PLAY_O_TOP_CENTER: "XOOXO___X",
        PLAY_O_MIDDLE_RIGHT: "X_OXOO__X",
        PLAY_O_BOTTOM_LEFT: "X_OXO_O_X",
        PLAY_O_BOTTOM_CENTER: "X_OXO__OX"
      }
    },
    X_OXO____: {
      on: {
        PLAY_X_TOP_CENTER: "XXOXO____",
        PLAY_X_MIDDLE_RIGHT: "X_OXOX___",
        PLAY_X_BOTTOM_LEFT: "X_OXO_X__",
        PLAY_X_BOTTOM_CENTER: "X_OXO__X_",
        PLAY_X_BOTTOM_RIGHT: "X_OXO___X"
      }
    },
    X_OXXOOXO: { on: { "": "O_WINS" } },
    X_OXXOOX_: {
      on: { PLAY_O_TOP_CENTER: "XOOXXOOX_", PLAY_O_BOTTOM_RIGHT: "X_OXXOOXO" }
    },
    X_OXXOO_X: { on: { "": "X_WINS" } },
    X_OXXOO__: {
      on: {
        PLAY_X_TOP_CENTER: "XXOXXOO__",
        PLAY_X_BOTTOM_CENTER: "X_OXXOOX_",
        PLAY_X_BOTTOM_RIGHT: "X_OXXOO_X"
      }
    },
    X_OXXOXO_: { on: { "": "X_WINS" } },
    X_OXXO_OX: { on: { "": "X_WINS" } },
    X_OXXO_O_: {
      on: {
        PLAY_X_TOP_CENTER: "XXOXXO_O_",
        PLAY_X_BOTTOM_LEFT: "X_OXXOXO_",
        PLAY_X_BOTTOM_RIGHT: "X_OXXO_OX"
      }
    },
    X_OXXO__O: { on: { "": "O_WINS" } },
    X_OXXO___: {
      on: {
        PLAY_O_TOP_CENTER: "XOOXXO___",
        PLAY_O_BOTTOM_LEFT: "X_OXXOO__",
        PLAY_O_BOTTOM_CENTER: "X_OXXO_O_",
        PLAY_O_BOTTOM_RIGHT: "X_OXXO__O"
      }
    },
    X_OX_OX__: { on: { "": "X_WINS" } },
    X_OX_OOXX: {
      on: { PLAY_O_TOP_CENTER: "XOOX_OOXX", PLAY_O_CENTER: "X_OXOOOXX" }
    },
    X_OX_OOX_: {
      on: {
        PLAY_X_TOP_CENTER: "XXOX_OOX_",
        PLAY_X_CENTER: "X_OXXOOX_",
        PLAY_X_BOTTOM_RIGHT: "X_OX_OOXX"
      }
    },
    X_OX_O_XO: { on: { "": "O_WINS" } },
    X_OX_O_X_: {
      on: {
        PLAY_O_TOP_CENTER: "XOOX_O_X_",
        PLAY_O_CENTER: "X_OXOO_X_",
        PLAY_O_BOTTOM_LEFT: "X_OX_OOX_",
        PLAY_O_BOTTOM_RIGHT: "X_OX_O_XO"
      }
    },
    X_OX_OO_X: {
      on: {
        PLAY_X_TOP_CENTER: "XXOX_OO_X",
        PLAY_X_CENTER: "X_OXXOO_X",
        PLAY_X_BOTTOM_CENTER: "X_OX_OOXX"
      }
    },
    X_OX_OXOX: { on: { "": "X_WINS" } },
    X_OX_O_OX: {
      on: {
        PLAY_X_TOP_CENTER: "XXOX_O_OX",
        PLAY_X_CENTER: "X_OXXO_OX",
        PLAY_X_BOTTOM_LEFT: "X_OX_OXOX"
      }
    },
    X_OX_O__X: {
      on: {
        PLAY_O_TOP_CENTER: "XOOX_O__X",
        PLAY_O_CENTER: "X_OXOO__X",
        PLAY_O_BOTTOM_LEFT: "X_OX_OO_X",
        PLAY_O_BOTTOM_CENTER: "X_OX_O_OX"
      }
    },
    X_OX_O___: {
      on: {
        PLAY_X_TOP_CENTER: "XXOX_O___",
        PLAY_X_CENTER: "X_OXXO___",
        PLAY_X_BOTTOM_LEFT: "X_OX_OX__",
        PLAY_X_BOTTOM_CENTER: "X_OX_O_X_",
        PLAY_X_BOTTOM_RIGHT: "X_OX_O__X"
      }
    },
    X_OXXXOO_: { on: { "": "X_WINS" } },
    X_OXX_OOX: { on: { "": "X_WINS" } },
    X_OXX_OO_: {
      on: {
        PLAY_X_TOP_CENTER: "XXOXX_OO_",
        PLAY_X_MIDDLE_RIGHT: "X_OXXXOO_",
        PLAY_X_BOTTOM_RIGHT: "X_OXX_OOX"
      }
    },
    X_OXXXO_O: { on: { "": "X_WINS" } },
    X_OXX_OXO: {
      on: { PLAY_O_TOP_CENTER: "XOOXX_OXO", PLAY_O_MIDDLE_RIGHT: "X_OXXOOXO" }
    },
    X_OXX_O_O: {
      on: {
        PLAY_X_TOP_CENTER: "XXOXX_O_O",
        PLAY_X_MIDDLE_RIGHT: "X_OXXXO_O",
        PLAY_X_BOTTOM_CENTER: "X_OXX_OXO"
      }
    },
    X_OXX_O__: {
      on: {
        PLAY_O_TOP_CENTER: "XOOXX_O__",
        PLAY_O_MIDDLE_RIGHT: "X_OXXOO__",
        PLAY_O_BOTTOM_CENTER: "X_OXX_OO_",
        PLAY_O_BOTTOM_RIGHT: "X_OXX_O_O"
      }
    },
    X_OX_XOOX: {
      on: { PLAY_O_TOP_CENTER: "XOOX_XOOX", PLAY_O_CENTER: "X_OXOXOOX" }
    },
    X_OX_XOO_: {
      on: {
        PLAY_X_TOP_CENTER: "XXOX_XOO_",
        PLAY_X_CENTER: "X_OXXXOO_",
        PLAY_X_BOTTOM_RIGHT: "X_OX_XOOX"
      }
    },
    X_OX_XOXO: {
      on: { PLAY_O_TOP_CENTER: "XOOX_XOXO", PLAY_O_CENTER: "X_OXOXOXO" }
    },
    X_OX_XO_O: {
      on: {
        PLAY_X_TOP_CENTER: "XXOX_XO_O",
        PLAY_X_CENTER: "X_OXXXO_O",
        PLAY_X_BOTTOM_CENTER: "X_OX_XOXO"
      }
    },
    X_OX_XO__: {
      on: {
        PLAY_O_TOP_CENTER: "XOOX_XO__",
        PLAY_O_CENTER: "X_OXOXO__",
        PLAY_O_BOTTOM_CENTER: "X_OX_XOO_",
        PLAY_O_BOTTOM_RIGHT: "X_OX_XO_O"
      }
    },
    X_OX__OXO: {
      on: {
        PLAY_X_TOP_CENTER: "XXOX__OXO",
        PLAY_X_CENTER: "X_OXX_OXO",
        PLAY_X_MIDDLE_RIGHT: "X_OX_XOXO"
      }
    },
    X_OX__OX_: {
      on: {
        PLAY_O_TOP_CENTER: "XOOX__OX_",
        PLAY_O_CENTER: "X_OXO_OX_",
        PLAY_O_MIDDLE_RIGHT: "X_OX_OOX_",
        PLAY_O_BOTTOM_RIGHT: "X_OX__OXO"
      }
    },
    X_OX__OOX: {
      on: {
        PLAY_X_TOP_CENTER: "XXOX__OOX",
        PLAY_X_CENTER: "X_OXX_OOX",
        PLAY_X_MIDDLE_RIGHT: "X_OX_XOOX"
      }
    },
    X_OX__O_X: {
      on: {
        PLAY_O_TOP_CENTER: "XOOX__O_X",
        PLAY_O_CENTER: "X_OXO_O_X",
        PLAY_O_MIDDLE_RIGHT: "X_OX_OO_X",
        PLAY_O_BOTTOM_CENTER: "X_OX__OOX"
      }
    },
    X_OX__O__: {
      on: {
        PLAY_X_TOP_CENTER: "XXOX__O__",
        PLAY_X_CENTER: "X_OXX_O__",
        PLAY_X_MIDDLE_RIGHT: "X_OX_XO__",
        PLAY_X_BOTTOM_CENTER: "X_OX__OX_",
        PLAY_X_BOTTOM_RIGHT: "X_OX__O_X"
      }
    },
    X_OXXX_OO: { on: { "": "X_WINS" } },
    X_OXX_XOO: { on: { "": "X_WINS" } },
    X_OXX__OO: {
      on: {
        PLAY_X_TOP_CENTER: "XXOXX__OO",
        PLAY_X_MIDDLE_RIGHT: "X_OXXX_OO",
        PLAY_X_BOTTOM_LEFT: "X_OXX_XOO"
      }
    },
    X_OXX__O_: {
      on: {
        PLAY_O_TOP_CENTER: "XOOXX__O_",
        PLAY_O_MIDDLE_RIGHT: "X_OXXO_O_",
        PLAY_O_BOTTOM_LEFT: "X_OXX_OO_",
        PLAY_O_BOTTOM_RIGHT: "X_OXX__OO"
      }
    },
    X_OX_XXOO: { on: { "": "X_WINS" } },
    X_OX_X_OO: {
      on: {
        PLAY_X_TOP_CENTER: "XXOX_X_OO",
        PLAY_X_CENTER: "X_OXXX_OO",
        PLAY_X_BOTTOM_LEFT: "X_OX_XXOO"
      }
    },
    X_OX_X_O_: {
      on: {
        PLAY_O_TOP_CENTER: "XOOX_X_O_",
        PLAY_O_CENTER: "X_OXOX_O_",
        PLAY_O_BOTTOM_LEFT: "X_OX_XOO_",
        PLAY_O_BOTTOM_RIGHT: "X_OX_X_OO"
      }
    },
    X_OX__XO_: { on: { "": "X_WINS" } },
    X_OX___OX: {
      on: {
        PLAY_O_TOP_CENTER: "XOOX___OX",
        PLAY_O_CENTER: "X_OXO__OX",
        PLAY_O_MIDDLE_RIGHT: "X_OX_O_OX",
        PLAY_O_BOTTOM_LEFT: "X_OX__OOX"
      }
    },
    X_OX___O_: {
      on: {
        PLAY_X_TOP_CENTER: "XXOX___O_",
        PLAY_X_CENTER: "X_OXX__O_",
        PLAY_X_MIDDLE_RIGHT: "X_OX_X_O_",
        PLAY_X_BOTTOM_LEFT: "X_OX__XO_",
        PLAY_X_BOTTOM_RIGHT: "X_OX___OX"
      }
    },
    X_OXX___O: {
      on: {
        PLAY_O_TOP_CENTER: "XOOXX___O",
        PLAY_O_MIDDLE_RIGHT: "X_OXXO__O",
        PLAY_O_BOTTOM_LEFT: "X_OXX_O_O",
        PLAY_O_BOTTOM_CENTER: "X_OXX__OO"
      }
    },
    X_OX_X__O: {
      on: {
        PLAY_O_TOP_CENTER: "XOOX_X__O",
        PLAY_O_CENTER: "X_OXOX__O",
        PLAY_O_BOTTOM_LEFT: "X_OX_XO_O",
        PLAY_O_BOTTOM_CENTER: "X_OX_X_OO"
      }
    },
    X_OX__X_O: { on: { "": "X_WINS" } },
    X_OX___XO: {
      on: {
        PLAY_O_TOP_CENTER: "XOOX___XO",
        PLAY_O_CENTER: "X_OXO__XO",
        PLAY_O_MIDDLE_RIGHT: "X_OX_O_XO",
        PLAY_O_BOTTOM_LEFT: "X_OX__OXO"
      }
    },
    X_OX____O: {
      on: {
        PLAY_X_TOP_CENTER: "XXOX____O",
        PLAY_X_CENTER: "X_OXX___O",
        PLAY_X_MIDDLE_RIGHT: "X_OX_X__O",
        PLAY_X_BOTTOM_LEFT: "X_OX__X_O",
        PLAY_X_BOTTOM_CENTER: "X_OX___XO"
      }
    },
    X_OX_____: {
      on: {
        PLAY_O_TOP_CENTER: "XOOX_____",
        PLAY_O_CENTER: "X_OXO____",
        PLAY_O_MIDDLE_RIGHT: "X_OX_O___",
        PLAY_O_BOTTOM_LEFT: "X_OX__O__",
        PLAY_O_BOTTOM_CENTER: "X_OX___O_",
        PLAY_O_BOTTOM_RIGHT: "X_OX____O"
      }
    },
    X_OOXXOXO: { on: { PLAY_X_TOP_CENTER: "XXOOXXOXO" } },
    X_OOXXOX_: {
      on: { PLAY_O_TOP_CENTER: "XOOOXXOX_", PLAY_O_BOTTOM_RIGHT: "X_OOXXOXO" }
    },
    X_OOXXO_X: { on: { "": "X_WINS" } },
    X_OOXXO__: {
      on: {
        PLAY_X_TOP_CENTER: "XXOOXXO__",
        PLAY_X_BOTTOM_CENTER: "X_OOXXOX_",
        PLAY_X_BOTTOM_RIGHT: "X_OOXXO_X"
      }
    },
    X_OOXXXOO: { on: { PLAY_X_TOP_CENTER: "XXOOXXXOO" } },
    X_OOXXXO_: {
      on: { PLAY_O_TOP_CENTER: "XOOOXXXO_", PLAY_O_BOTTOM_RIGHT: "X_OOXXXOO" }
    },
    X_OOXX_OX: { on: { "": "X_WINS" } },
    X_OOXX_O_: {
      on: {
        PLAY_X_TOP_CENTER: "XXOOXX_O_",
        PLAY_X_BOTTOM_LEFT: "X_OOXXXO_",
        PLAY_X_BOTTOM_RIGHT: "X_OOXX_OX"
      }
    },
    X_OOXXX_O: {
      on: {
        PLAY_O_TOP_CENTER: "XOOOXXX_O",
        PLAY_O_BOTTOM_CENTER: "X_OOXXXOO"
      }
    },
    X_OOXX_XO: {
      on: { PLAY_O_TOP_CENTER: "XOOOXX_XO", PLAY_O_BOTTOM_LEFT: "X_OOXXOXO" }
    },
    X_OOXX__O: {
      on: {
        PLAY_X_TOP_CENTER: "XXOOXX__O",
        PLAY_X_BOTTOM_LEFT: "X_OOXXX_O",
        PLAY_X_BOTTOM_CENTER: "X_OOXX_XO"
      }
    },
    X_OOXX___: {
      on: {
        PLAY_O_TOP_CENTER: "XOOOXX___",
        PLAY_O_BOTTOM_LEFT: "X_OOXXO__",
        PLAY_O_BOTTOM_CENTER: "X_OOXX_O_",
        PLAY_O_BOTTOM_RIGHT: "X_OOXX__O"
      }
    },
    X_OOXOXXO: { on: { "": "O_WINS" } },
    X_OOXOXX_: {
      on: { PLAY_O_TOP_CENTER: "XOOOXOXX_", PLAY_O_BOTTOM_RIGHT: "X_OOXOXXO" }
    },
    X_OOXOX_X: { on: { "": "X_WINS" } },
    X_OOXOX__: {
      on: {
        PLAY_X_TOP_CENTER: "XXOOXOX__",
        PLAY_X_BOTTOM_CENTER: "X_OOXOXX_",
        PLAY_X_BOTTOM_RIGHT: "X_OOXOX_X"
      }
    },
    X_OOX_XOX: { on: { "": "X_WINS" } },
    X_OOX_XO_: {
      on: {
        PLAY_X_TOP_CENTER: "XXOOX_XO_",
        PLAY_X_MIDDLE_RIGHT: "X_OOXXXO_",
        PLAY_X_BOTTOM_RIGHT: "X_OOX_XOX"
      }
    },
    X_OOX_XXO: {
      on: { PLAY_O_TOP_CENTER: "XOOOX_XXO", PLAY_O_MIDDLE_RIGHT: "X_OOXOXXO" }
    },
    X_OOX_X_O: {
      on: {
        PLAY_X_TOP_CENTER: "XXOOX_X_O",
        PLAY_X_MIDDLE_RIGHT: "X_OOXXX_O",
        PLAY_X_BOTTOM_CENTER: "X_OOX_XXO"
      }
    },
    X_OOX_X__: {
      on: {
        PLAY_O_TOP_CENTER: "XOOOX_X__",
        PLAY_O_MIDDLE_RIGHT: "X_OOXOX__",
        PLAY_O_BOTTOM_CENTER: "X_OOX_XO_",
        PLAY_O_BOTTOM_RIGHT: "X_OOX_X_O"
      }
    },
    X_OOXO_XX: { on: { "": "X_WINS" } },
    X_OOXO_X_: {
      on: {
        PLAY_X_TOP_CENTER: "XXOOXO_X_",
        PLAY_X_BOTTOM_LEFT: "X_OOXOXX_",
        PLAY_X_BOTTOM_RIGHT: "X_OOXO_XX"
      }
    },
    X_OOX_OXX: { on: { "": "X_WINS" } },
    X_OOX_OX_: {
      on: {
        PLAY_X_TOP_CENTER: "XXOOX_OX_",
        PLAY_X_MIDDLE_RIGHT: "X_OOXXOX_",
        PLAY_X_BOTTOM_RIGHT: "X_OOX_OXX"
      }
    },
    X_OOX__XO: {
      on: {
        PLAY_X_TOP_CENTER: "XXOOX__XO",
        PLAY_X_MIDDLE_RIGHT: "X_OOXX_XO",
        PLAY_X_BOTTOM_LEFT: "X_OOX_XXO"
      }
    },
    X_OOX__X_: {
      on: {
        PLAY_O_TOP_CENTER: "XOOOX__X_",
        PLAY_O_MIDDLE_RIGHT: "X_OOXO_X_",
        PLAY_O_BOTTOM_LEFT: "X_OOX_OX_",
        PLAY_O_BOTTOM_RIGHT: "X_OOX__XO"
      }
    },
    X_OOX___X: { on: { "": "X_WINS" } },
    X_OOX____: {
      on: {
        PLAY_X_TOP_CENTER: "XXOOX____",
        PLAY_X_MIDDLE_RIGHT: "X_OOXX___",
        PLAY_X_BOTTOM_LEFT: "X_OOX_X__",
        PLAY_X_BOTTOM_CENTER: "X_OOX__X_",
        PLAY_X_BOTTOM_RIGHT: "X_OOX___X"
      }
    },
    X_O_XOXOX: { on: { "": "X_WINS" } },
    X_O_XOXO_: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_XOXO_",
        PLAY_X_MIDDLE_LEFT: "X_OXXOXO_",
        PLAY_X_BOTTOM_RIGHT: "X_O_XOXOX"
      }
    },
    X_O_XOX_O: { on: { "": "O_WINS" } },
    X_O_XOX__: {
      on: {
        PLAY_O_TOP_CENTER: "XOO_XOX__",
        PLAY_O_MIDDLE_LEFT: "X_OOXOX__",
        PLAY_O_BOTTOM_CENTER: "X_O_XOXO_",
        PLAY_O_BOTTOM_RIGHT: "X_O_XOX_O"
      }
    },
    X_O_XOOXX: { on: { "": "X_WINS" } },
    X_O_XOOX_: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_XOOX_",
        PLAY_X_MIDDLE_LEFT: "X_OXXOOX_",
        PLAY_X_BOTTOM_RIGHT: "X_O_XOOXX"
      }
    },
    X_O_XO_XO: { on: { "": "O_WINS" } },
    X_O_XO_X_: {
      on: {
        PLAY_O_TOP_CENTER: "XOO_XO_X_",
        PLAY_O_MIDDLE_LEFT: "X_OOXO_X_",
        PLAY_O_BOTTOM_LEFT: "X_O_XOOX_",
        PLAY_O_BOTTOM_RIGHT: "X_O_XO_XO"
      }
    },
    X_O_XO__X: { on: { "": "X_WINS" } },
    X_O_XO___: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_XO___",
        PLAY_X_MIDDLE_LEFT: "X_OXXO___",
        PLAY_X_BOTTOM_LEFT: "X_O_XOX__",
        PLAY_X_BOTTOM_CENTER: "X_O_XO_X_",
        PLAY_X_BOTTOM_RIGHT: "X_O_XO__X"
      }
    },
    X_O_XXOOX: { on: { "": "X_WINS" } },
    X_O_XXOO_: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_XXOO_",
        PLAY_X_MIDDLE_LEFT: "X_OXXXOO_",
        PLAY_X_BOTTOM_RIGHT: "X_O_XXOOX"
      }
    },
    X_O_XXOXO: {
      on: { PLAY_O_TOP_CENTER: "XOO_XXOXO", PLAY_O_MIDDLE_LEFT: "X_OOXXOXO" }
    },
    X_O_XXO_O: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_XXO_O",
        PLAY_X_MIDDLE_LEFT: "X_OXXXO_O",
        PLAY_X_BOTTOM_CENTER: "X_O_XXOXO"
      }
    },
    X_O_XXO__: {
      on: {
        PLAY_O_TOP_CENTER: "XOO_XXO__",
        PLAY_O_MIDDLE_LEFT: "X_OOXXO__",
        PLAY_O_BOTTOM_CENTER: "X_O_XXOO_",
        PLAY_O_BOTTOM_RIGHT: "X_O_XXO_O"
      }
    },
    X_O_X_OXO: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_X_OXO",
        PLAY_X_MIDDLE_LEFT: "X_OXX_OXO",
        PLAY_X_MIDDLE_RIGHT: "X_O_XXOXO"
      }
    },
    X_O_X_OX_: {
      on: {
        PLAY_O_TOP_CENTER: "XOO_X_OX_",
        PLAY_O_MIDDLE_LEFT: "X_OOX_OX_",
        PLAY_O_MIDDLE_RIGHT: "X_O_XOOX_",
        PLAY_O_BOTTOM_RIGHT: "X_O_X_OXO"
      }
    },
    X_O_X_O_X: { on: { "": "X_WINS" } },
    X_O_X_O__: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_X_O__",
        PLAY_X_MIDDLE_LEFT: "X_OXX_O__",
        PLAY_X_MIDDLE_RIGHT: "X_O_XXO__",
        PLAY_X_BOTTOM_CENTER: "X_O_X_OX_",
        PLAY_X_BOTTOM_RIGHT: "X_O_X_O_X"
      }
    },
    X_O_XXXOO: {
      on: { PLAY_O_TOP_CENTER: "XOO_XXXOO", PLAY_O_MIDDLE_LEFT: "X_OOXXXOO" }
    },
    X_O_XX_OO: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_XX_OO",
        PLAY_X_MIDDLE_LEFT: "X_OXXX_OO",
        PLAY_X_BOTTOM_LEFT: "X_O_XXXOO"
      }
    },
    X_O_XX_O_: {
      on: {
        PLAY_O_TOP_CENTER: "XOO_XX_O_",
        PLAY_O_MIDDLE_LEFT: "X_OOXX_O_",
        PLAY_O_BOTTOM_LEFT: "X_O_XXOO_",
        PLAY_O_BOTTOM_RIGHT: "X_O_XX_OO"
      }
    },
    X_O_X_XOO: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_X_XOO",
        PLAY_X_MIDDLE_LEFT: "X_OXX_XOO",
        PLAY_X_MIDDLE_RIGHT: "X_O_XXXOO"
      }
    },
    X_O_X_XO_: {
      on: {
        PLAY_O_TOP_CENTER: "XOO_X_XO_",
        PLAY_O_MIDDLE_LEFT: "X_OOX_XO_",
        PLAY_O_MIDDLE_RIGHT: "X_O_XOXO_",
        PLAY_O_BOTTOM_RIGHT: "X_O_X_XOO"
      }
    },
    X_O_X__OX: { on: { "": "X_WINS" } },
    X_O_X__O_: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_X__O_",
        PLAY_X_MIDDLE_LEFT: "X_OXX__O_",
        PLAY_X_MIDDLE_RIGHT: "X_O_XX_O_",
        PLAY_X_BOTTOM_LEFT: "X_O_X_XO_",
        PLAY_X_BOTTOM_RIGHT: "X_O_X__OX"
      }
    },
    X_O_XX__O: {
      on: {
        PLAY_O_TOP_CENTER: "XOO_XX__O",
        PLAY_O_MIDDLE_LEFT: "X_OOXX__O",
        PLAY_O_BOTTOM_LEFT: "X_O_XXO_O",
        PLAY_O_BOTTOM_CENTER: "X_O_XX_OO"
      }
    },
    X_O_X_X_O: {
      on: {
        PLAY_O_TOP_CENTER: "XOO_X_X_O",
        PLAY_O_MIDDLE_LEFT: "X_OOX_X_O",
        PLAY_O_MIDDLE_RIGHT: "X_O_XOX_O",
        PLAY_O_BOTTOM_CENTER: "X_O_X_XOO"
      }
    },
    X_O_X__XO: {
      on: {
        PLAY_O_TOP_CENTER: "XOO_X__XO",
        PLAY_O_MIDDLE_LEFT: "X_OOX__XO",
        PLAY_O_MIDDLE_RIGHT: "X_O_XO_XO",
        PLAY_O_BOTTOM_LEFT: "X_O_X_OXO"
      }
    },
    X_O_X___O: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_X___O",
        PLAY_X_MIDDLE_LEFT: "X_OXX___O",
        PLAY_X_MIDDLE_RIGHT: "X_O_XX__O",
        PLAY_X_BOTTOM_LEFT: "X_O_X_X_O",
        PLAY_X_BOTTOM_CENTER: "X_O_X__XO"
      }
    },
    X_O_X____: {
      on: {
        PLAY_O_TOP_CENTER: "XOO_X____",
        PLAY_O_MIDDLE_LEFT: "X_OOX____",
        PLAY_O_MIDDLE_RIGHT: "X_O_XO___",
        PLAY_O_BOTTOM_LEFT: "X_O_X_O__",
        PLAY_O_BOTTOM_CENTER: "X_O_X__O_",
        PLAY_O_BOTTOM_RIGHT: "X_O_X___O"
      }
    },
    X_OOOXXXO: { on: { PLAY_X_TOP_CENTER: "XXOOOXXXO" } },
    X_OOOXXX_: {
      on: { PLAY_O_TOP_CENTER: "XOOOOXXX_", PLAY_O_BOTTOM_RIGHT: "X_OOOXXXO" }
    },
    X_OOOXXOX: { on: { PLAY_X_TOP_CENTER: "XXOOOXXOX" } },
    X_OOOXX_X: {
      on: {
        PLAY_O_TOP_CENTER: "XOOOOXX_X",
        PLAY_O_BOTTOM_CENTER: "X_OOOXXOX"
      }
    },
    X_OOOXX__: {
      on: {
        PLAY_X_TOP_CENTER: "XXOOOXX__",
        PLAY_X_BOTTOM_CENTER: "X_OOOXXX_",
        PLAY_X_BOTTOM_RIGHT: "X_OOOXX_X"
      }
    },
    X_OO_XXOX: {
      on: { PLAY_O_TOP_CENTER: "XOOO_XXOX", PLAY_O_CENTER: "X_OOOXXOX" }
    },
    X_OO_XXO_: {
      on: {
        PLAY_X_TOP_CENTER: "XXOO_XXO_",
        PLAY_X_CENTER: "X_OOXXXO_",
        PLAY_X_BOTTOM_RIGHT: "X_OO_XXOX"
      }
    },
    X_OO_XXXO: {
      on: { PLAY_O_TOP_CENTER: "XOOO_XXXO", PLAY_O_CENTER: "X_OOOXXXO" }
    },
    X_OO_XX_O: {
      on: {
        PLAY_X_TOP_CENTER: "XXOO_XX_O",
        PLAY_X_CENTER: "X_OOXXX_O",
        PLAY_X_BOTTOM_CENTER: "X_OO_XXXO"
      }
    },
    X_OO_XX__: {
      on: {
        PLAY_O_TOP_CENTER: "XOOO_XX__",
        PLAY_O_CENTER: "X_OOOXX__",
        PLAY_O_BOTTOM_CENTER: "X_OO_XXO_",
        PLAY_O_BOTTOM_RIGHT: "X_OO_XX_O"
      }
    },
    X_OOOXOXX: { on: { "": "O_WINS" } },
    X_OOOX_XX: {
      on: { PLAY_O_TOP_CENTER: "XOOOOX_XX", PLAY_O_BOTTOM_LEFT: "X_OOOXOXX" }
    },
    X_OOOX_X_: {
      on: {
        PLAY_X_TOP_CENTER: "XXOOOX_X_",
        PLAY_X_BOTTOM_LEFT: "X_OOOXXX_",
        PLAY_X_BOTTOM_RIGHT: "X_OOOX_XX"
      }
    },
    X_OO_XOXX: {
      on: { PLAY_O_TOP_CENTER: "XOOO_XOXX", PLAY_O_CENTER: "X_OOOXOXX" }
    },
    X_OO_XOX_: {
      on: {
        PLAY_X_TOP_CENTER: "XXOO_XOX_",
        PLAY_X_CENTER: "X_OOXXOX_",
        PLAY_X_BOTTOM_RIGHT: "X_OO_XOXX"
      }
    },
    X_OO_X_XO: {
      on: {
        PLAY_X_TOP_CENTER: "XXOO_X_XO",
        PLAY_X_CENTER: "X_OOXX_XO",
        PLAY_X_BOTTOM_LEFT: "X_OO_XXXO"
      }
    },
    X_OO_X_X_: {
      on: {
        PLAY_O_TOP_CENTER: "XOOO_X_X_",
        PLAY_O_CENTER: "X_OOOX_X_",
        PLAY_O_BOTTOM_LEFT: "X_OO_XOX_",
        PLAY_O_BOTTOM_RIGHT: "X_OO_X_XO"
      }
    },
    X_OOOX__X: {
      on: {
        PLAY_X_TOP_CENTER: "XXOOOX__X",
        PLAY_X_BOTTOM_LEFT: "X_OOOXX_X",
        PLAY_X_BOTTOM_CENTER: "X_OOOX_XX"
      }
    },
    X_OO_XO_X: {
      on: {
        PLAY_X_TOP_CENTER: "XXOO_XO_X",
        PLAY_X_CENTER: "X_OOXXO_X",
        PLAY_X_BOTTOM_CENTER: "X_OO_XOXX"
      }
    },
    X_OO_X_OX: {
      on: {
        PLAY_X_TOP_CENTER: "XXOO_X_OX",
        PLAY_X_CENTER: "X_OOXX_OX",
        PLAY_X_BOTTOM_LEFT: "X_OO_XXOX"
      }
    },
    X_OO_X__X: {
      on: {
        PLAY_O_TOP_CENTER: "XOOO_X__X",
        PLAY_O_CENTER: "X_OOOX__X",
        PLAY_O_BOTTOM_LEFT: "X_OO_XO_X",
        PLAY_O_BOTTOM_CENTER: "X_OO_X_OX"
      }
    },
    X_OO_X___: {
      on: {
        PLAY_X_TOP_CENTER: "XXOO_X___",
        PLAY_X_CENTER: "X_OOXX___",
        PLAY_X_BOTTOM_LEFT: "X_OO_XX__",
        PLAY_X_BOTTOM_CENTER: "X_OO_X_X_",
        PLAY_X_BOTTOM_RIGHT: "X_OO_X__X"
      }
    },
    X_O_OXXOX: {
      on: { PLAY_O_TOP_CENTER: "XOO_OXXOX", PLAY_O_MIDDLE_LEFT: "X_OOOXXOX" }
    },
    X_O_OXXO_: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_OXXO_",
        PLAY_X_MIDDLE_LEFT: "X_OXOXXO_",
        PLAY_X_BOTTOM_RIGHT: "X_O_OXXOX"
      }
    },
    X_O_OXXXO: {
      on: { PLAY_O_TOP_CENTER: "XOO_OXXXO", PLAY_O_MIDDLE_LEFT: "X_OOOXXXO" }
    },
    X_O_OXX_O: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_OXX_O",
        PLAY_X_MIDDLE_LEFT: "X_OXOXX_O",
        PLAY_X_BOTTOM_CENTER: "X_O_OXXXO"
      }
    },
    X_O_OXX__: {
      on: {
        PLAY_O_TOP_CENTER: "XOO_OXX__",
        PLAY_O_MIDDLE_LEFT: "X_OOOXX__",
        PLAY_O_BOTTOM_CENTER: "X_O_OXXO_",
        PLAY_O_BOTTOM_RIGHT: "X_O_OXX_O"
      }
    },
    X_O_OXOX_: { on: { "": "O_WINS" } },
    X_O_OX_XO: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_OX_XO",
        PLAY_X_MIDDLE_LEFT: "X_OXOX_XO",
        PLAY_X_BOTTOM_LEFT: "X_O_OXXXO"
      }
    },
    X_O_OX_X_: {
      on: {
        PLAY_O_TOP_CENTER: "XOO_OX_X_",
        PLAY_O_MIDDLE_LEFT: "X_OOOX_X_",
        PLAY_O_BOTTOM_LEFT: "X_O_OXOX_",
        PLAY_O_BOTTOM_RIGHT: "X_O_OX_XO"
      }
    },
    X_O_OXO_X: { on: { "": "O_WINS" } },
    X_O_OX_OX: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_OX_OX",
        PLAY_X_MIDDLE_LEFT: "X_OXOX_OX",
        PLAY_X_BOTTOM_LEFT: "X_O_OXXOX"
      }
    },
    X_O_OX__X: {
      on: {
        PLAY_O_TOP_CENTER: "XOO_OX__X",
        PLAY_O_MIDDLE_LEFT: "X_OOOX__X",
        PLAY_O_BOTTOM_LEFT: "X_O_OXO_X",
        PLAY_O_BOTTOM_CENTER: "X_O_OX_OX"
      }
    },
    X_O_OX___: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_OX___",
        PLAY_X_MIDDLE_LEFT: "X_OXOX___",
        PLAY_X_BOTTOM_LEFT: "X_O_OXX__",
        PLAY_X_BOTTOM_CENTER: "X_O_OX_X_",
        PLAY_X_BOTTOM_RIGHT: "X_O_OX__X"
      }
    },
    X_O__XOXO: {
      on: {
        PLAY_X_TOP_CENTER: "XXO__XOXO",
        PLAY_X_MIDDLE_LEFT: "X_OX_XOXO",
        PLAY_X_CENTER: "X_O_XXOXO"
      }
    },
    X_O__XOX_: {
      on: {
        PLAY_O_TOP_CENTER: "XOO__XOX_",
        PLAY_O_MIDDLE_LEFT: "X_OO_XOX_",
        PLAY_O_CENTER: "X_O_OXOX_",
        PLAY_O_BOTTOM_RIGHT: "X_O__XOXO"
      }
    },
    X_O__XOOX: {
      on: {
        PLAY_X_TOP_CENTER: "XXO__XOOX",
        PLAY_X_MIDDLE_LEFT: "X_OX_XOOX",
        PLAY_X_CENTER: "X_O_XXOOX"
      }
    },
    X_O__XO_X: {
      on: {
        PLAY_O_TOP_CENTER: "XOO__XO_X",
        PLAY_O_MIDDLE_LEFT: "X_OO_XO_X",
        PLAY_O_CENTER: "X_O_OXO_X",
        PLAY_O_BOTTOM_CENTER: "X_O__XOOX"
      }
    },
    X_O__XO__: {
      on: {
        PLAY_X_TOP_CENTER: "XXO__XO__",
        PLAY_X_MIDDLE_LEFT: "X_OX_XO__",
        PLAY_X_CENTER: "X_O_XXO__",
        PLAY_X_BOTTOM_CENTER: "X_O__XOX_",
        PLAY_X_BOTTOM_RIGHT: "X_O__XO_X"
      }
    },
    X_O__XXOO: {
      on: {
        PLAY_X_TOP_CENTER: "XXO__XXOO",
        PLAY_X_MIDDLE_LEFT: "X_OX_XXOO",
        PLAY_X_CENTER: "X_O_XXXOO"
      }
    },
    X_O__XXO_: {
      on: {
        PLAY_O_TOP_CENTER: "XOO__XXO_",
        PLAY_O_MIDDLE_LEFT: "X_OO_XXO_",
        PLAY_O_CENTER: "X_O_OXXO_",
        PLAY_O_BOTTOM_RIGHT: "X_O__XXOO"
      }
    },
    X_O__X_OX: {
      on: {
        PLAY_O_TOP_CENTER: "XOO__X_OX",
        PLAY_O_MIDDLE_LEFT: "X_OO_X_OX",
        PLAY_O_CENTER: "X_O_OX_OX",
        PLAY_O_BOTTOM_LEFT: "X_O__XOOX"
      }
    },
    X_O__X_O_: {
      on: {
        PLAY_X_TOP_CENTER: "XXO__X_O_",
        PLAY_X_MIDDLE_LEFT: "X_OX_X_O_",
        PLAY_X_CENTER: "X_O_XX_O_",
        PLAY_X_BOTTOM_LEFT: "X_O__XXO_",
        PLAY_X_BOTTOM_RIGHT: "X_O__X_OX"
      }
    },
    X_O__XX_O: {
      on: {
        PLAY_O_TOP_CENTER: "XOO__XX_O",
        PLAY_O_MIDDLE_LEFT: "X_OO_XX_O",
        PLAY_O_CENTER: "X_O_OXX_O",
        PLAY_O_BOTTOM_CENTER: "X_O__XXOO"
      }
    },
    X_O__X_XO: {
      on: {
        PLAY_O_TOP_CENTER: "XOO__X_XO",
        PLAY_O_MIDDLE_LEFT: "X_OO_X_XO",
        PLAY_O_CENTER: "X_O_OX_XO",
        PLAY_O_BOTTOM_LEFT: "X_O__XOXO"
      }
    },
    X_O__X__O: {
      on: {
        PLAY_X_TOP_CENTER: "XXO__X__O",
        PLAY_X_MIDDLE_LEFT: "X_OX_X__O",
        PLAY_X_CENTER: "X_O_XX__O",
        PLAY_X_BOTTOM_LEFT: "X_O__XX_O",
        PLAY_X_BOTTOM_CENTER: "X_O__X_XO"
      }
    },
    X_O__X___: {
      on: {
        PLAY_O_TOP_CENTER: "XOO__X___",
        PLAY_O_MIDDLE_LEFT: "X_OO_X___",
        PLAY_O_CENTER: "X_O_OX___",
        PLAY_O_BOTTOM_LEFT: "X_O__XO__",
        PLAY_O_BOTTOM_CENTER: "X_O__X_O_",
        PLAY_O_BOTTOM_RIGHT: "X_O__X__O"
      }
    },
    X_OOO_XXX: { on: { "": "X_WINS" } },
    X_OOO_XX_: {
      on: {
        PLAY_X_TOP_CENTER: "XXOOO_XX_",
        PLAY_X_MIDDLE_RIGHT: "X_OOOXXX_",
        PLAY_X_BOTTOM_RIGHT: "X_OOO_XXX"
      }
    },
    X_OO_OXXX: { on: { "": "X_WINS" } },
    X_OO_OXX_: {
      on: {
        PLAY_X_TOP_CENTER: "XXOO_OXX_",
        PLAY_X_CENTER: "X_OOXOXX_",
        PLAY_X_BOTTOM_RIGHT: "X_OO_OXXX"
      }
    },
    X_OO__XXO: {
      on: {
        PLAY_X_TOP_CENTER: "XXOO__XXO",
        PLAY_X_CENTER: "X_OOX_XXO",
        PLAY_X_MIDDLE_RIGHT: "X_OO_XXXO"
      }
    },
    X_OO__XX_: {
      on: {
        PLAY_O_TOP_CENTER: "XOOO__XX_",
        PLAY_O_CENTER: "X_OOO_XX_",
        PLAY_O_MIDDLE_RIGHT: "X_OO_OXX_",
        PLAY_O_BOTTOM_RIGHT: "X_OO__XXO"
      }
    },
    X_OOO_X_X: {
      on: {
        PLAY_X_TOP_CENTER: "XXOOO_X_X",
        PLAY_X_MIDDLE_RIGHT: "X_OOOXX_X",
        PLAY_X_BOTTOM_CENTER: "X_OOO_XXX"
      }
    },
    X_OO_OX_X: {
      on: {
        PLAY_X_TOP_CENTER: "XXOO_OX_X",
        PLAY_X_CENTER: "X_OOXOX_X",
        PLAY_X_BOTTOM_CENTER: "X_OO_OXXX"
      }
    },
    X_OO__XOX: {
      on: {
        PLAY_X_TOP_CENTER: "XXOO__XOX",
        PLAY_X_CENTER: "X_OOX_XOX",
        PLAY_X_MIDDLE_RIGHT: "X_OO_XXOX"
      }
    },
    X_OO__X_X: {
      on: {
        PLAY_O_TOP_CENTER: "XOOO__X_X",
        PLAY_O_CENTER: "X_OOO_X_X",
        PLAY_O_MIDDLE_RIGHT: "X_OO_OX_X",
        PLAY_O_BOTTOM_CENTER: "X_OO__XOX"
      }
    },
    X_OO__X__: {
      on: {
        PLAY_X_TOP_CENTER: "XXOO__X__",
        PLAY_X_CENTER: "X_OOX_X__",
        PLAY_X_MIDDLE_RIGHT: "X_OO_XX__",
        PLAY_X_BOTTOM_CENTER: "X_OO__XX_",
        PLAY_X_BOTTOM_RIGHT: "X_OO__X_X"
      }
    },
    X_O_OOXXX: { on: { "": "X_WINS" } },
    X_O_OOXX_: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_OOXX_",
        PLAY_X_MIDDLE_LEFT: "X_OXOOXX_",
        PLAY_X_BOTTOM_RIGHT: "X_O_OOXXX"
      }
    },
    X_O_O_XXO: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_O_XXO",
        PLAY_X_MIDDLE_LEFT: "X_OXO_XXO",
        PLAY_X_MIDDLE_RIGHT: "X_O_OXXXO"
      }
    },
    X_O_O_XX_: {
      on: {
        PLAY_O_TOP_CENTER: "XOO_O_XX_",
        PLAY_O_MIDDLE_LEFT: "X_OOO_XX_",
        PLAY_O_MIDDLE_RIGHT: "X_O_OOXX_",
        PLAY_O_BOTTOM_RIGHT: "X_O_O_XXO"
      }
    },
    X_O_OOX_X: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_OOX_X",
        PLAY_X_MIDDLE_LEFT: "X_OXOOX_X",
        PLAY_X_BOTTOM_CENTER: "X_O_OOXXX"
      }
    },
    X_O_O_XOX: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_O_XOX",
        PLAY_X_MIDDLE_LEFT: "X_OXO_XOX",
        PLAY_X_MIDDLE_RIGHT: "X_O_OXXOX"
      }
    },
    X_O_O_X_X: {
      on: {
        PLAY_O_TOP_CENTER: "XOO_O_X_X",
        PLAY_O_MIDDLE_LEFT: "X_OOO_X_X",
        PLAY_O_MIDDLE_RIGHT: "X_O_OOX_X",
        PLAY_O_BOTTOM_CENTER: "X_O_O_XOX"
      }
    },
    X_O_O_X__: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_O_X__",
        PLAY_X_MIDDLE_LEFT: "X_OXO_X__",
        PLAY_X_MIDDLE_RIGHT: "X_O_OXX__",
        PLAY_X_BOTTOM_CENTER: "X_O_O_XX_",
        PLAY_X_BOTTOM_RIGHT: "X_O_O_X_X"
      }
    },
    X_O__OXXO: { on: { "": "O_WINS" } },
    X_O__OXX_: {
      on: {
        PLAY_O_TOP_CENTER: "XOO__OXX_",
        PLAY_O_MIDDLE_LEFT: "X_OO_OXX_",
        PLAY_O_CENTER: "X_O_OOXX_",
        PLAY_O_BOTTOM_RIGHT: "X_O__OXXO"
      }
    },
    X_O__OXOX: {
      on: {
        PLAY_X_TOP_CENTER: "XXO__OXOX",
        PLAY_X_MIDDLE_LEFT: "X_OX_OXOX",
        PLAY_X_CENTER: "X_O_XOXOX"
      }
    },
    X_O__OX_X: {
      on: {
        PLAY_O_TOP_CENTER: "XOO__OX_X",
        PLAY_O_MIDDLE_LEFT: "X_OO_OX_X",
        PLAY_O_CENTER: "X_O_OOX_X",
        PLAY_O_BOTTOM_CENTER: "X_O__OXOX"
      }
    },
    X_O__OX__: {
      on: {
        PLAY_X_TOP_CENTER: "XXO__OX__",
        PLAY_X_MIDDLE_LEFT: "X_OX_OX__",
        PLAY_X_CENTER: "X_O_XOX__",
        PLAY_X_BOTTOM_CENTER: "X_O__OXX_",
        PLAY_X_BOTTOM_RIGHT: "X_O__OX_X"
      }
    },
    X_O___XOX: {
      on: {
        PLAY_O_TOP_CENTER: "XOO___XOX",
        PLAY_O_MIDDLE_LEFT: "X_OO__XOX",
        PLAY_O_CENTER: "X_O_O_XOX",
        PLAY_O_MIDDLE_RIGHT: "X_O__OXOX"
      }
    },
    X_O___XO_: {
      on: {
        PLAY_X_TOP_CENTER: "XXO___XO_",
        PLAY_X_MIDDLE_LEFT: "X_OX__XO_",
        PLAY_X_CENTER: "X_O_X_XO_",
        PLAY_X_MIDDLE_RIGHT: "X_O__XXO_",
        PLAY_X_BOTTOM_RIGHT: "X_O___XOX"
      }
    },
    X_O___XXO: {
      on: {
        PLAY_O_TOP_CENTER: "XOO___XXO",
        PLAY_O_MIDDLE_LEFT: "X_OO__XXO",
        PLAY_O_CENTER: "X_O_O_XXO",
        PLAY_O_MIDDLE_RIGHT: "X_O__OXXO"
      }
    },
    X_O___X_O: {
      on: {
        PLAY_X_TOP_CENTER: "XXO___X_O",
        PLAY_X_MIDDLE_LEFT: "X_OX__X_O",
        PLAY_X_CENTER: "X_O_X_X_O",
        PLAY_X_MIDDLE_RIGHT: "X_O__XX_O",
        PLAY_X_BOTTOM_CENTER: "X_O___XXO"
      }
    },
    X_O___X__: {
      on: {
        PLAY_O_TOP_CENTER: "XOO___X__",
        PLAY_O_MIDDLE_LEFT: "X_OO__X__",
        PLAY_O_CENTER: "X_O_O_X__",
        PLAY_O_MIDDLE_RIGHT: "X_O__OX__",
        PLAY_O_BOTTOM_CENTER: "X_O___XO_",
        PLAY_O_BOTTOM_RIGHT: "X_O___X_O"
      }
    },
    X_OOO__XX: {
      on: {
        PLAY_X_TOP_CENTER: "XXOOO__XX",
        PLAY_X_MIDDLE_RIGHT: "X_OOOX_XX",
        PLAY_X_BOTTOM_LEFT: "X_OOO_XXX"
      }
    },
    X_OO_O_XX: {
      on: {
        PLAY_X_TOP_CENTER: "XXOO_O_XX",
        PLAY_X_CENTER: "X_OOXO_XX",
        PLAY_X_BOTTOM_LEFT: "X_OO_OXXX"
      }
    },
    X_OO__OXX: {
      on: {
        PLAY_X_TOP_CENTER: "XXOO__OXX",
        PLAY_X_CENTER: "X_OOX_OXX",
        PLAY_X_MIDDLE_RIGHT: "X_OO_XOXX"
      }
    },
    X_OO___XX: {
      on: {
        PLAY_O_TOP_CENTER: "XOOO___XX",
        PLAY_O_CENTER: "X_OOO__XX",
        PLAY_O_MIDDLE_RIGHT: "X_OO_O_XX",
        PLAY_O_BOTTOM_LEFT: "X_OO__OXX"
      }
    },
    X_OO___X_: {
      on: {
        PLAY_X_TOP_CENTER: "XXOO___X_",
        PLAY_X_CENTER: "X_OOX__X_",
        PLAY_X_MIDDLE_RIGHT: "X_OO_X_X_",
        PLAY_X_BOTTOM_LEFT: "X_OO__XX_",
        PLAY_X_BOTTOM_RIGHT: "X_OO___XX"
      }
    },
    X_O_OO_XX: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_OO_XX",
        PLAY_X_MIDDLE_LEFT: "X_OXOO_XX",
        PLAY_X_BOTTOM_LEFT: "X_O_OOXXX"
      }
    },
    X_O_O_OXX: { on: { "": "O_WINS" } },
    X_O_O__XX: {
      on: {
        PLAY_O_TOP_CENTER: "XOO_O__XX",
        PLAY_O_MIDDLE_LEFT: "X_OOO__XX",
        PLAY_O_MIDDLE_RIGHT: "X_O_OO_XX",
        PLAY_O_BOTTOM_LEFT: "X_O_O_OXX"
      }
    },
    X_O_O__X_: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_O__X_",
        PLAY_X_MIDDLE_LEFT: "X_OXO__X_",
        PLAY_X_MIDDLE_RIGHT: "X_O_OX_X_",
        PLAY_X_BOTTOM_LEFT: "X_O_O_XX_",
        PLAY_X_BOTTOM_RIGHT: "X_O_O__XX"
      }
    },
    X_O__OOXX: {
      on: {
        PLAY_X_TOP_CENTER: "XXO__OOXX",
        PLAY_X_MIDDLE_LEFT: "X_OX_OOXX",
        PLAY_X_CENTER: "X_O_XOOXX"
      }
    },
    X_O__O_XX: {
      on: {
        PLAY_O_TOP_CENTER: "XOO__O_XX",
        PLAY_O_MIDDLE_LEFT: "X_OO_O_XX",
        PLAY_O_CENTER: "X_O_OO_XX",
        PLAY_O_BOTTOM_LEFT: "X_O__OOXX"
      }
    },
    X_O__O_X_: {
      on: {
        PLAY_X_TOP_CENTER: "XXO__O_X_",
        PLAY_X_MIDDLE_LEFT: "X_OX_O_X_",
        PLAY_X_CENTER: "X_O_XO_X_",
        PLAY_X_BOTTOM_LEFT: "X_O__OXX_",
        PLAY_X_BOTTOM_RIGHT: "X_O__O_XX"
      }
    },
    X_O___OXX: {
      on: {
        PLAY_O_TOP_CENTER: "XOO___OXX",
        PLAY_O_MIDDLE_LEFT: "X_OO__OXX",
        PLAY_O_CENTER: "X_O_O_OXX",
        PLAY_O_MIDDLE_RIGHT: "X_O__OOXX"
      }
    },
    X_O___OX_: {
      on: {
        PLAY_X_TOP_CENTER: "XXO___OX_",
        PLAY_X_MIDDLE_LEFT: "X_OX__OX_",
        PLAY_X_CENTER: "X_O_X_OX_",
        PLAY_X_MIDDLE_RIGHT: "X_O__XOX_",
        PLAY_X_BOTTOM_RIGHT: "X_O___OXX"
      }
    },
    X_O____XO: {
      on: {
        PLAY_X_TOP_CENTER: "XXO____XO",
        PLAY_X_MIDDLE_LEFT: "X_OX___XO",
        PLAY_X_CENTER: "X_O_X__XO",
        PLAY_X_MIDDLE_RIGHT: "X_O__X_XO",
        PLAY_X_BOTTOM_LEFT: "X_O___XXO"
      }
    },
    X_O____X_: {
      on: {
        PLAY_O_TOP_CENTER: "XOO____X_",
        PLAY_O_MIDDLE_LEFT: "X_OO___X_",
        PLAY_O_CENTER: "X_O_O__X_",
        PLAY_O_MIDDLE_RIGHT: "X_O__O_X_",
        PLAY_O_BOTTOM_LEFT: "X_O___OX_",
        PLAY_O_BOTTOM_RIGHT: "X_O____XO"
      }
    },
    X_OO____X: {
      on: {
        PLAY_X_TOP_CENTER: "XXOO____X",
        PLAY_X_CENTER: "X_OOX___X",
        PLAY_X_MIDDLE_RIGHT: "X_OO_X__X",
        PLAY_X_BOTTOM_LEFT: "X_OO__X_X",
        PLAY_X_BOTTOM_CENTER: "X_OO___XX"
      }
    },
    X_O_O___X: {
      on: {
        PLAY_X_TOP_CENTER: "XXO_O___X",
        PLAY_X_MIDDLE_LEFT: "X_OXO___X",
        PLAY_X_MIDDLE_RIGHT: "X_O_OX__X",
        PLAY_X_BOTTOM_LEFT: "X_O_O_X_X",
        PLAY_X_BOTTOM_CENTER: "X_O_O__XX"
      }
    },
    X_O__O__X: {
      on: {
        PLAY_X_TOP_CENTER: "XXO__O__X",
        PLAY_X_MIDDLE_LEFT: "X_OX_O__X",
        PLAY_X_CENTER: "X_O_XO__X",
        PLAY_X_BOTTOM_LEFT: "X_O__OX_X",
        PLAY_X_BOTTOM_CENTER: "X_O__O_XX"
      }
    },
    X_O___O_X: {
      on: {
        PLAY_X_TOP_CENTER: "XXO___O_X",
        PLAY_X_MIDDLE_LEFT: "X_OX__O_X",
        PLAY_X_CENTER: "X_O_X_O_X",
        PLAY_X_MIDDLE_RIGHT: "X_O__XO_X",
        PLAY_X_BOTTOM_CENTER: "X_O___OXX"
      }
    },
    X_O____OX: {
      on: {
        PLAY_X_TOP_CENTER: "XXO____OX",
        PLAY_X_MIDDLE_LEFT: "X_OX___OX",
        PLAY_X_CENTER: "X_O_X__OX",
        PLAY_X_MIDDLE_RIGHT: "X_O__X_OX",
        PLAY_X_BOTTOM_LEFT: "X_O___XOX"
      }
    },
    X_O_____X: {
      on: {
        PLAY_O_TOP_CENTER: "XOO_____X",
        PLAY_O_MIDDLE_LEFT: "X_OO____X",
        PLAY_O_CENTER: "X_O_O___X",
        PLAY_O_MIDDLE_RIGHT: "X_O__O__X",
        PLAY_O_BOTTOM_LEFT: "X_O___O_X",
        PLAY_O_BOTTOM_CENTER: "X_O____OX"
      }
    },
    X_O______: {
      on: {
        PLAY_X_TOP_CENTER: "XXO______",
        PLAY_X_MIDDLE_LEFT: "X_OX_____",
        PLAY_X_CENTER: "X_O_X____",
        PLAY_X_MIDDLE_RIGHT: "X_O__X___",
        PLAY_X_BOTTOM_LEFT: "X_O___X__",
        PLAY_X_BOTTOM_CENTER: "X_O____X_",
        PLAY_X_BOTTOM_RIGHT: "X_O_____X"
      }
    },
    XXXOO____: { on: { "": "X_WINS" } },
    XXXOOXO__: { on: { "": "X_WINS" } },
    XXXOOXOXO: { on: { "": "X_WINS" } },
    XX_OOXOXO: { on: { PLAY_X_TOP_RIGHT: "XXXOOXOXO" } },
    XX_OOXOX_: {
      on: { PLAY_O_TOP_RIGHT: "XXOOOXOX_", PLAY_O_BOTTOM_RIGHT: "XX_OOXOXO" }
    },
    XXXOOXOOX: { on: { "": "X_WINS" } },
    XX_OOXOOX: { on: { PLAY_X_TOP_RIGHT: "XXXOOXOOX" } },
    XX_OOXO_X: {
      on: { PLAY_O_TOP_RIGHT: "XXOOOXO_X", PLAY_O_BOTTOM_CENTER: "XX_OOXOOX" }
    },
    XX_OOXO__: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXOOXO__",
        PLAY_X_BOTTOM_CENTER: "XX_OOXOX_",
        PLAY_X_BOTTOM_RIGHT: "XX_OOXO_X"
      }
    },
    XXXOOX_O_: { on: { "": "X_WINS" } },
    XXXOOXXOO: { on: { "": "X_WINS" } },
    XX_OOXXOO: { on: { PLAY_X_TOP_RIGHT: "XXXOOXXOO" } },
    XX_OOXXO_: {
      on: { PLAY_O_TOP_RIGHT: "XXOOOXXO_", PLAY_O_BOTTOM_RIGHT: "XX_OOXXOO" }
    },
    XX_OOX_OX: {
      on: { PLAY_O_TOP_RIGHT: "XXOOOX_OX", PLAY_O_BOTTOM_LEFT: "XX_OOXOOX" }
    },
    XX_OOX_O_: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXOOX_O_",
        PLAY_X_BOTTOM_LEFT: "XX_OOXXO_",
        PLAY_X_BOTTOM_RIGHT: "XX_OOX_OX"
      }
    },
    XXXOOX__O: { on: { "": "X_WINS" } },
    XX_OOXX_O: {
      on: { PLAY_O_TOP_RIGHT: "XXOOOXX_O", PLAY_O_BOTTOM_CENTER: "XX_OOXXOO" }
    },
    XX_OOX_XO: {
      on: { PLAY_O_TOP_RIGHT: "XXOOOX_XO", PLAY_O_BOTTOM_LEFT: "XX_OOXOXO" }
    },
    XX_OOX__O: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXOOX__O",
        PLAY_X_BOTTOM_LEFT: "XX_OOXX_O",
        PLAY_X_BOTTOM_CENTER: "XX_OOX_XO"
      }
    },
    XX_OOX___: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOOOX___",
        PLAY_O_BOTTOM_LEFT: "XX_OOXO__",
        PLAY_O_BOTTOM_CENTER: "XX_OOX_O_",
        PLAY_O_BOTTOM_RIGHT: "XX_OOX__O"
      }
    },
    XX_OOOX__: { on: { "": "O_WINS" } },
    XXXOO_XO_: { on: { "": "X_WINS" } },
    XX_OOOXOX: { on: { "": "O_WINS" } },
    XX_OO_XOX: {
      on: { PLAY_O_TOP_RIGHT: "XXOOO_XOX", PLAY_O_MIDDLE_RIGHT: "XX_OOOXOX" }
    },
    XX_OO_XO_: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXOO_XO_",
        PLAY_X_MIDDLE_RIGHT: "XX_OOXXO_",
        PLAY_X_BOTTOM_RIGHT: "XX_OO_XOX"
      }
    },
    XXXOO_X_O: { on: { "": "X_WINS" } },
    XX_OOOXXO: { on: { "": "O_WINS" } },
    XX_OO_XXO: {
      on: { PLAY_O_TOP_RIGHT: "XXOOO_XXO", PLAY_O_MIDDLE_RIGHT: "XX_OOOXXO" }
    },
    XX_OO_X_O: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXOO_X_O",
        PLAY_X_MIDDLE_RIGHT: "XX_OOXX_O",
        PLAY_X_BOTTOM_CENTER: "XX_OO_XXO"
      }
    },
    XX_OO_X__: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOOO_X__",
        PLAY_O_MIDDLE_RIGHT: "XX_OOOX__",
        PLAY_O_BOTTOM_CENTER: "XX_OO_XO_",
        PLAY_O_BOTTOM_RIGHT: "XX_OO_X_O"
      }
    },
    XX_OOO_X_: { on: { "": "O_WINS" } },
    XXXOO_OX_: { on: { "": "X_WINS" } },
    XX_OOOOXX: { on: { "": "O_WINS" } },
    XX_OO_OXX: {
      on: { PLAY_O_TOP_RIGHT: "XXOOO_OXX", PLAY_O_MIDDLE_RIGHT: "XX_OOOOXX" }
    },
    XX_OO_OX_: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXOO_OX_",
        PLAY_X_MIDDLE_RIGHT: "XX_OOXOX_",
        PLAY_X_BOTTOM_RIGHT: "XX_OO_OXX"
      }
    },
    XXXOO__XO: { on: { "": "X_WINS" } },
    XX_OO__XO: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXOO__XO",
        PLAY_X_MIDDLE_RIGHT: "XX_OOX_XO",
        PLAY_X_BOTTOM_LEFT: "XX_OO_XXO"
      }
    },
    XX_OO__X_: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOOO__X_",
        PLAY_O_MIDDLE_RIGHT: "XX_OOO_X_",
        PLAY_O_BOTTOM_LEFT: "XX_OO_OX_",
        PLAY_O_BOTTOM_RIGHT: "XX_OO__XO"
      }
    },
    XX_OOO__X: { on: { "": "O_WINS" } },
    XXXOO_O_X: { on: { "": "X_WINS" } },
    XX_OO_O_X: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXOO_O_X",
        PLAY_X_MIDDLE_RIGHT: "XX_OOXO_X",
        PLAY_X_BOTTOM_CENTER: "XX_OO_OXX"
      }
    },
    XXXOO__OX: { on: { "": "X_WINS" } },
    XX_OO__OX: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXOO__OX",
        PLAY_X_MIDDLE_RIGHT: "XX_OOX_OX",
        PLAY_X_BOTTOM_LEFT: "XX_OO_XOX"
      }
    },
    XX_OO___X: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOOO___X",
        PLAY_O_MIDDLE_RIGHT: "XX_OOO__X",
        PLAY_O_BOTTOM_LEFT: "XX_OO_O_X",
        PLAY_O_BOTTOM_CENTER: "XX_OO__OX"
      }
    },
    XX_OO____: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXOO____",
        PLAY_X_MIDDLE_RIGHT: "XX_OOX___",
        PLAY_X_BOTTOM_LEFT: "XX_OO_X__",
        PLAY_X_BOTTOM_CENTER: "XX_OO__X_",
        PLAY_X_BOTTOM_RIGHT: "XX_OO___X"
      }
    },
    XXXO_O___: { on: { "": "X_WINS" } },
    XXXOXOO__: { on: { "": "X_WINS" } },
    XX_OXOOX_: { on: { "": "X_WINS" } },
    XX_OXOO_X: { on: { "": "X_WINS" } },
    XX_OXOO__: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXOXOO__",
        PLAY_X_BOTTOM_CENTER: "XX_OXOOX_",
        PLAY_X_BOTTOM_RIGHT: "XX_OXOO_X"
      }
    },
    XXXOXO_O_: { on: { "": "X_WINS" } },
    XXXOXOXOO: { on: { "": "X_WINS" } },
    XX_OXOXOO: { on: { PLAY_X_TOP_RIGHT: "XXXOXOXOO" } },
    XX_OXOXO_: {
      on: { PLAY_O_TOP_RIGHT: "XXOOXOXO_", PLAY_O_BOTTOM_RIGHT: "XX_OXOXOO" }
    },
    XX_OXO_OX: { on: { "": "X_WINS" } },
    XX_OXO_O_: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXOXO_O_",
        PLAY_X_BOTTOM_LEFT: "XX_OXOXO_",
        PLAY_X_BOTTOM_RIGHT: "XX_OXO_OX"
      }
    },
    XXXOXO__O: { on: { "": "X_WINS" } },
    XX_OXOX_O: {
      on: { PLAY_O_TOP_RIGHT: "XXOOXOX_O", PLAY_O_BOTTOM_CENTER: "XX_OXOXOO" }
    },
    XX_OXO_XO: { on: { "": "X_WINS" } },
    XX_OXO__O: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXOXO__O",
        PLAY_X_BOTTOM_LEFT: "XX_OXOX_O",
        PLAY_X_BOTTOM_CENTER: "XX_OXO_XO"
      }
    },
    XX_OXO___: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOOXO___",
        PLAY_O_BOTTOM_LEFT: "XX_OXOO__",
        PLAY_O_BOTTOM_CENTER: "XX_OXO_O_",
        PLAY_O_BOTTOM_RIGHT: "XX_OXO__O"
      }
    },
    XXXO_OXO_: { on: { "": "X_WINS" } },
    XX_O_OXOX: {
      on: { PLAY_O_TOP_RIGHT: "XXOO_OXOX", PLAY_O_CENTER: "XX_OOOXOX" }
    },
    XX_O_OXO_: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXO_OXO_",
        PLAY_X_CENTER: "XX_OXOXO_",
        PLAY_X_BOTTOM_RIGHT: "XX_O_OXOX"
      }
    },
    XXXO_OX_O: { on: { "": "X_WINS" } },
    XX_O_OXXO: {
      on: { PLAY_O_TOP_RIGHT: "XXOO_OXXO", PLAY_O_CENTER: "XX_OOOXXO" }
    },
    XX_O_OX_O: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXO_OX_O",
        PLAY_X_CENTER: "XX_OXOX_O",
        PLAY_X_BOTTOM_CENTER: "XX_O_OXXO"
      }
    },
    XX_O_OX__: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOO_OX__",
        PLAY_O_CENTER: "XX_OOOX__",
        PLAY_O_BOTTOM_CENTER: "XX_O_OXO_",
        PLAY_O_BOTTOM_RIGHT: "XX_O_OX_O"
      }
    },
    XXXO_OOX_: { on: { "": "X_WINS" } },
    XX_O_OOXX: {
      on: { PLAY_O_TOP_RIGHT: "XXOO_OOXX", PLAY_O_CENTER: "XX_OOOOXX" }
    },
    XX_O_OOX_: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXO_OOX_",
        PLAY_X_CENTER: "XX_OXOOX_",
        PLAY_X_BOTTOM_RIGHT: "XX_O_OOXX"
      }
    },
    XXXO_O_XO: { on: { "": "X_WINS" } },
    XX_O_O_XO: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXO_O_XO",
        PLAY_X_CENTER: "XX_OXO_XO",
        PLAY_X_BOTTOM_LEFT: "XX_O_OXXO"
      }
    },
    XX_O_O_X_: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOO_O_X_",
        PLAY_O_CENTER: "XX_OOO_X_",
        PLAY_O_BOTTOM_LEFT: "XX_O_OOX_",
        PLAY_O_BOTTOM_RIGHT: "XX_O_O_XO"
      }
    },
    XXXO_OO_X: { on: { "": "X_WINS" } },
    XX_O_OO_X: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXO_OO_X",
        PLAY_X_CENTER: "XX_OXOO_X",
        PLAY_X_BOTTOM_CENTER: "XX_O_OOXX"
      }
    },
    XXXO_O_OX: { on: { "": "X_WINS" } },
    XX_O_O_OX: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXO_O_OX",
        PLAY_X_CENTER: "XX_OXO_OX",
        PLAY_X_BOTTOM_LEFT: "XX_O_OXOX"
      }
    },
    XX_O_O__X: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOO_O__X",
        PLAY_O_CENTER: "XX_OOO__X",
        PLAY_O_BOTTOM_LEFT: "XX_O_OO_X",
        PLAY_O_BOTTOM_CENTER: "XX_O_O_OX"
      }
    },
    XX_O_O___: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXO_O___",
        PLAY_X_CENTER: "XX_OXO___",
        PLAY_X_BOTTOM_LEFT: "XX_O_OX__",
        PLAY_X_BOTTOM_CENTER: "XX_O_O_X_",
        PLAY_X_BOTTOM_RIGHT: "XX_O_O__X"
      }
    },
    XXXO__O__: { on: { "": "X_WINS" } },
    XXXOX_OO_: { on: { "": "X_WINS" } },
    XX_OXXOOO: { on: { "": "O_WINS" } },
    XX_OXXOO_: {
      on: { PLAY_O_TOP_RIGHT: "XXOOXXOO_", PLAY_O_BOTTOM_RIGHT: "XX_OXXOOO" }
    },
    XX_OX_OOX: { on: { "": "X_WINS" } },
    XX_OX_OO_: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXOX_OO_",
        PLAY_X_MIDDLE_RIGHT: "XX_OXXOO_",
        PLAY_X_BOTTOM_RIGHT: "XX_OX_OOX"
      }
    },
    XXXOX_O_O: { on: { "": "X_WINS" } },
    XX_OXXO_O: {
      on: { PLAY_O_TOP_RIGHT: "XXOOXXO_O", PLAY_O_BOTTOM_CENTER: "XX_OXXOOO" }
    },
    XX_OX_OXO: { on: { "": "X_WINS" } },
    XX_OX_O_O: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXOX_O_O",
        PLAY_X_MIDDLE_RIGHT: "XX_OXXO_O",
        PLAY_X_BOTTOM_CENTER: "XX_OX_OXO"
      }
    },
    XX_OX_O__: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOOX_O__",
        PLAY_O_MIDDLE_RIGHT: "XX_OXOO__",
        PLAY_O_BOTTOM_CENTER: "XX_OX_OO_",
        PLAY_O_BOTTOM_RIGHT: "XX_OX_O_O"
      }
    },
    XXXO_XOO_: { on: { "": "X_WINS" } },
    XX_O_XOOX: {
      on: { PLAY_O_TOP_RIGHT: "XXOO_XOOX", PLAY_O_CENTER: "XX_OOXOOX" }
    },
    XX_O_XOO_: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXO_XOO_",
        PLAY_X_CENTER: "XX_OXXOO_",
        PLAY_X_BOTTOM_RIGHT: "XX_O_XOOX"
      }
    },
    XXXO_XO_O: { on: { "": "X_WINS" } },
    XX_O_XOXO: {
      on: { PLAY_O_TOP_RIGHT: "XXOO_XOXO", PLAY_O_CENTER: "XX_OOXOXO" }
    },
    XX_O_XO_O: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXO_XO_O",
        PLAY_X_CENTER: "XX_OXXO_O",
        PLAY_X_BOTTOM_CENTER: "XX_O_XOXO"
      }
    },
    XX_O_XO__: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOO_XO__",
        PLAY_O_CENTER: "XX_OOXO__",
        PLAY_O_BOTTOM_CENTER: "XX_O_XOO_",
        PLAY_O_BOTTOM_RIGHT: "XX_O_XO_O"
      }
    },
    XXXO__OXO: { on: { "": "X_WINS" } },
    XX_O__OXO: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXO__OXO",
        PLAY_X_CENTER: "XX_OX_OXO",
        PLAY_X_MIDDLE_RIGHT: "XX_O_XOXO"
      }
    },
    XX_O__OX_: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOO__OX_",
        PLAY_O_CENTER: "XX_OO_OX_",
        PLAY_O_MIDDLE_RIGHT: "XX_O_OOX_",
        PLAY_O_BOTTOM_RIGHT: "XX_O__OXO"
      }
    },
    XXXO__OOX: { on: { "": "X_WINS" } },
    XX_O__OOX: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXO__OOX",
        PLAY_X_CENTER: "XX_OX_OOX",
        PLAY_X_MIDDLE_RIGHT: "XX_O_XOOX"
      }
    },
    XX_O__O_X: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOO__O_X",
        PLAY_O_CENTER: "XX_OO_O_X",
        PLAY_O_MIDDLE_RIGHT: "XX_O_OO_X",
        PLAY_O_BOTTOM_CENTER: "XX_O__OOX"
      }
    },
    XX_O__O__: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXO__O__",
        PLAY_X_CENTER: "XX_OX_O__",
        PLAY_X_MIDDLE_RIGHT: "XX_O_XO__",
        PLAY_X_BOTTOM_CENTER: "XX_O__OX_",
        PLAY_X_BOTTOM_RIGHT: "XX_O__O_X"
      }
    },
    XXXO___O_: { on: { "": "X_WINS" } },
    XXXOX__OO: { on: { "": "X_WINS" } },
    XX_OXX_OO: {
      on: { PLAY_O_TOP_RIGHT: "XXOOXX_OO", PLAY_O_BOTTOM_LEFT: "XX_OXXOOO" }
    },
    XX_OX_XOO: {
      on: { PLAY_O_TOP_RIGHT: "XXOOX_XOO", PLAY_O_MIDDLE_RIGHT: "XX_OXOXOO" }
    },
    XX_OX__OO: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXOX__OO",
        PLAY_X_MIDDLE_RIGHT: "XX_OXX_OO",
        PLAY_X_BOTTOM_LEFT: "XX_OX_XOO"
      }
    },
    XX_OX__O_: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOOX__O_",
        PLAY_O_MIDDLE_RIGHT: "XX_OXO_O_",
        PLAY_O_BOTTOM_LEFT: "XX_OX_OO_",
        PLAY_O_BOTTOM_RIGHT: "XX_OX__OO"
      }
    },
    XXXO_X_OO: { on: { "": "X_WINS" } },
    XX_O_XXOO: {
      on: { PLAY_O_TOP_RIGHT: "XXOO_XXOO", PLAY_O_CENTER: "XX_OOXXOO" }
    },
    XX_O_X_OO: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXO_X_OO",
        PLAY_X_CENTER: "XX_OXX_OO",
        PLAY_X_BOTTOM_LEFT: "XX_O_XXOO"
      }
    },
    XX_O_X_O_: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOO_X_O_",
        PLAY_O_CENTER: "XX_OOX_O_",
        PLAY_O_BOTTOM_LEFT: "XX_O_XOO_",
        PLAY_O_BOTTOM_RIGHT: "XX_O_X_OO"
      }
    },
    XXXO__XOO: { on: { "": "X_WINS" } },
    XX_O__XOO: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXO__XOO",
        PLAY_X_CENTER: "XX_OX_XOO",
        PLAY_X_MIDDLE_RIGHT: "XX_O_XXOO"
      }
    },
    XX_O__XO_: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOO__XO_",
        PLAY_O_CENTER: "XX_OO_XO_",
        PLAY_O_MIDDLE_RIGHT: "XX_O_OXO_",
        PLAY_O_BOTTOM_RIGHT: "XX_O__XOO"
      }
    },
    XX_O___OX: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOO___OX",
        PLAY_O_CENTER: "XX_OO__OX",
        PLAY_O_MIDDLE_RIGHT: "XX_O_O_OX",
        PLAY_O_BOTTOM_LEFT: "XX_O__OOX"
      }
    },
    XX_O___O_: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXO___O_",
        PLAY_X_CENTER: "XX_OX__O_",
        PLAY_X_MIDDLE_RIGHT: "XX_O_X_O_",
        PLAY_X_BOTTOM_LEFT: "XX_O__XO_",
        PLAY_X_BOTTOM_RIGHT: "XX_O___OX"
      }
    },
    XXXO____O: { on: { "": "X_WINS" } },
    XX_OX___O: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOOX___O",
        PLAY_O_MIDDLE_RIGHT: "XX_OXO__O",
        PLAY_O_BOTTOM_LEFT: "XX_OX_O_O",
        PLAY_O_BOTTOM_CENTER: "XX_OX__OO"
      }
    },
    XX_O_X__O: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOO_X__O",
        PLAY_O_CENTER: "XX_OOX__O",
        PLAY_O_BOTTOM_LEFT: "XX_O_XO_O",
        PLAY_O_BOTTOM_CENTER: "XX_O_X_OO"
      }
    },
    XX_O__X_O: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOO__X_O",
        PLAY_O_CENTER: "XX_OO_X_O",
        PLAY_O_MIDDLE_RIGHT: "XX_O_OX_O",
        PLAY_O_BOTTOM_CENTER: "XX_O__XOO"
      }
    },
    XX_O___XO: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOO___XO",
        PLAY_O_CENTER: "XX_OO__XO",
        PLAY_O_MIDDLE_RIGHT: "XX_O_O_XO",
        PLAY_O_BOTTOM_LEFT: "XX_O__OXO"
      }
    },
    XX_O____O: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXO____O",
        PLAY_X_CENTER: "XX_OX___O",
        PLAY_X_MIDDLE_RIGHT: "XX_O_X__O",
        PLAY_X_BOTTOM_LEFT: "XX_O__X_O",
        PLAY_X_BOTTOM_CENTER: "XX_O___XO"
      }
    },
    XX_O_____: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOO_____",
        PLAY_O_CENTER: "XX_OO____",
        PLAY_O_MIDDLE_RIGHT: "XX_O_O___",
        PLAY_O_BOTTOM_LEFT: "XX_O__O__",
        PLAY_O_BOTTOM_CENTER: "XX_O___O_",
        PLAY_O_BOTTOM_RIGHT: "XX_O____O"
      }
    },
    X_XOOXOXO: { on: { PLAY_X_TOP_CENTER: "XXXOOXOXO" } },
    X_XOOXOX_: {
      on: { PLAY_O_TOP_CENTER: "XOXOOXOX_", PLAY_O_BOTTOM_RIGHT: "X_XOOXOXO" }
    },
    X_XOOXO_X: { on: { "": "X_WINS" } },
    X_XOOXO__: {
      on: {
        PLAY_X_TOP_CENTER: "XXXOOXO__",
        PLAY_X_BOTTOM_CENTER: "X_XOOXOX_",
        PLAY_X_BOTTOM_RIGHT: "X_XOOXO_X"
      }
    },
    X_XOOXXOO: { on: { PLAY_X_TOP_CENTER: "XXXOOXXOO" } },
    X_XOOXXO_: {
      on: { PLAY_O_TOP_CENTER: "XOXOOXXO_", PLAY_O_BOTTOM_RIGHT: "X_XOOXXOO" }
    },
    X_XOOX_OX: { on: { "": "X_WINS" } },
    X_XOOX_O_: {
      on: {
        PLAY_X_TOP_CENTER: "XXXOOX_O_",
        PLAY_X_BOTTOM_LEFT: "X_XOOXXO_",
        PLAY_X_BOTTOM_RIGHT: "X_XOOX_OX"
      }
    },
    X_XOOXX_O: {
      on: {
        PLAY_O_TOP_CENTER: "XOXOOXX_O",
        PLAY_O_BOTTOM_CENTER: "X_XOOXXOO"
      }
    },
    X_XOOX_XO: {
      on: { PLAY_O_TOP_CENTER: "XOXOOX_XO", PLAY_O_BOTTOM_LEFT: "X_XOOXOXO" }
    },
    X_XOOX__O: {
      on: {
        PLAY_X_TOP_CENTER: "XXXOOX__O",
        PLAY_X_BOTTOM_LEFT: "X_XOOXX_O",
        PLAY_X_BOTTOM_CENTER: "X_XOOX_XO"
      }
    },
    X_XOOX___: {
      on: {
        PLAY_O_TOP_CENTER: "XOXOOX___",
        PLAY_O_BOTTOM_LEFT: "X_XOOXO__",
        PLAY_O_BOTTOM_CENTER: "X_XOOX_O_",
        PLAY_O_BOTTOM_RIGHT: "X_XOOX__O"
      }
    },
    X_XOOOX__: { on: { "": "O_WINS" } },
    X_XOOOXOX: { on: { "": "O_WINS" } },
    X_XOO_XOX: {
      on: { PLAY_O_TOP_CENTER: "XOXOO_XOX", PLAY_O_MIDDLE_RIGHT: "X_XOOOXOX" }
    },
    X_XOO_XO_: {
      on: {
        PLAY_X_TOP_CENTER: "XXXOO_XO_",
        PLAY_X_MIDDLE_RIGHT: "X_XOOXXO_",
        PLAY_X_BOTTOM_RIGHT: "X_XOO_XOX"
      }
    },
    X_XOOOXXO: { on: { "": "O_WINS" } },
    X_XOO_XXO: {
      on: { PLAY_O_TOP_CENTER: "XOXOO_XXO", PLAY_O_MIDDLE_RIGHT: "X_XOOOXXO" }
    },
    X_XOO_X_O: {
      on: {
        PLAY_X_TOP_CENTER: "XXXOO_X_O",
        PLAY_X_MIDDLE_RIGHT: "X_XOOXX_O",
        PLAY_X_BOTTOM_CENTER: "X_XOO_XXO"
      }
    },
    X_XOO_X__: {
      on: {
        PLAY_O_TOP_CENTER: "XOXOO_X__",
        PLAY_O_MIDDLE_RIGHT: "X_XOOOX__",
        PLAY_O_BOTTOM_CENTER: "X_XOO_XO_",
        PLAY_O_BOTTOM_RIGHT: "X_XOO_X_O"
      }
    },
    X_XOOO_X_: { on: { "": "O_WINS" } },
    X_XOOOOXX: { on: { "": "O_WINS" } },
    X_XOO_OXX: {
      on: { PLAY_O_TOP_CENTER: "XOXOO_OXX", PLAY_O_MIDDLE_RIGHT: "X_XOOOOXX" }
    },
    X_XOO_OX_: {
      on: {
        PLAY_X_TOP_CENTER: "XXXOO_OX_",
        PLAY_X_MIDDLE_RIGHT: "X_XOOXOX_",
        PLAY_X_BOTTOM_RIGHT: "X_XOO_OXX"
      }
    },
    X_XOO__XO: {
      on: {
        PLAY_X_TOP_CENTER: "XXXOO__XO",
        PLAY_X_MIDDLE_RIGHT: "X_XOOX_XO",
        PLAY_X_BOTTOM_LEFT: "X_XOO_XXO"
      }
    },
    X_XOO__X_: {
      on: {
        PLAY_O_TOP_CENTER: "XOXOO__X_",
        PLAY_O_MIDDLE_RIGHT: "X_XOOO_X_",
        PLAY_O_BOTTOM_LEFT: "X_XOO_OX_",
        PLAY_O_BOTTOM_RIGHT: "X_XOO__XO"
      }
    },
    X_XOOO__X: { on: { "": "O_WINS" } },
    X_XOO_O_X: {
      on: {
        PLAY_X_TOP_CENTER: "XXXOO_O_X",
        PLAY_X_MIDDLE_RIGHT: "X_XOOXO_X",
        PLAY_X_BOTTOM_CENTER: "X_XOO_OXX"
      }
    },
    X_XOO__OX: {
      on: {
        PLAY_X_TOP_CENTER: "XXXOO__OX",
        PLAY_X_MIDDLE_RIGHT: "X_XOOX_OX",
        PLAY_X_BOTTOM_LEFT: "X_XOO_XOX"
      }
    },
    X_XOO___X: {
      on: {
        PLAY_O_TOP_CENTER: "XOXOO___X",
        PLAY_O_MIDDLE_RIGHT: "X_XOOO__X",
        PLAY_O_BOTTOM_LEFT: "X_XOO_O_X",
        PLAY_O_BOTTOM_CENTER: "X_XOO__OX"
      }
    },
    X_XOO____: {
      on: {
        PLAY_X_TOP_CENTER: "XXXOO____",
        PLAY_X_MIDDLE_RIGHT: "X_XOOX___",
        PLAY_X_BOTTOM_LEFT: "X_XOO_X__",
        PLAY_X_BOTTOM_CENTER: "X_XOO__X_",
        PLAY_X_BOTTOM_RIGHT: "X_XOO___X"
      }
    },
    XXXOXOOXO: { on: { "": "X_WINS" } },
    X_XOXOOXO: { on: { PLAY_X_TOP_CENTER: "XXXOXOOXO" } },
    X_XOXOOX_: {
      on: { PLAY_O_TOP_CENTER: "XOXOXOOX_", PLAY_O_BOTTOM_RIGHT: "X_XOXOOXO" }
    },
    X_XOXOO_X: { on: { "": "X_WINS" } },
    X_XOXOO__: {
      on: {
        PLAY_X_TOP_CENTER: "XXXOXOO__",
        PLAY_X_BOTTOM_CENTER: "X_XOXOOX_",
        PLAY_X_BOTTOM_RIGHT: "X_XOXOO_X"
      }
    },
    X_XOXOXO_: { on: { "": "X_WINS" } },
    X_XOXO_OX: { on: { "": "X_WINS" } },
    X_XOXO_O_: {
      on: {
        PLAY_X_TOP_CENTER: "XXXOXO_O_",
        PLAY_X_BOTTOM_LEFT: "X_XOXOXO_",
        PLAY_X_BOTTOM_RIGHT: "X_XOXO_OX"
      }
    },
    X_XOXOX_O: { on: { "": "X_WINS" } },
    X_XOXO_XO: {
      on: { PLAY_O_TOP_CENTER: "XOXOXO_XO", PLAY_O_BOTTOM_LEFT: "X_XOXOOXO" }
    },
    X_XOXO__O: {
      on: {
        PLAY_X_TOP_CENTER: "XXXOXO__O",
        PLAY_X_BOTTOM_LEFT: "X_XOXOX_O",
        PLAY_X_BOTTOM_CENTER: "X_XOXO_XO"
      }
    },
    X_XOXO___: {
      on: {
        PLAY_O_TOP_CENTER: "XOXOXO___",
        PLAY_O_BOTTOM_LEFT: "X_XOXOO__",
        PLAY_O_BOTTOM_CENTER: "X_XOXO_O_",
        PLAY_O_BOTTOM_RIGHT: "X_XOXO__O"
      }
    },
    X_XO_OXOX: {
      on: { PLAY_O_TOP_CENTER: "XOXO_OXOX", PLAY_O_CENTER: "X_XOOOXOX" }
    },
    X_XO_OXO_: {
      on: {
        PLAY_X_TOP_CENTER: "XXXO_OXO_",
        PLAY_X_CENTER: "X_XOXOXO_",
        PLAY_X_BOTTOM_RIGHT: "X_XO_OXOX"
      }
    },
    X_XO_OXXO: {
      on: { PLAY_O_TOP_CENTER: "XOXO_OXXO", PLAY_O_CENTER: "X_XOOOXXO" }
    },
    X_XO_OX_O: {
      on: {
        PLAY_X_TOP_CENTER: "XXXO_OX_O",
        PLAY_X_CENTER: "X_XOXOX_O",
        PLAY_X_BOTTOM_CENTER: "X_XO_OXXO"
      }
    },
    X_XO_OX__: {
      on: {
        PLAY_O_TOP_CENTER: "XOXO_OX__",
        PLAY_O_CENTER: "X_XOOOX__",
        PLAY_O_BOTTOM_CENTER: "X_XO_OXO_",
        PLAY_O_BOTTOM_RIGHT: "X_XO_OX_O"
      }
    },
    X_XO_OOXX: {
      on: { PLAY_O_TOP_CENTER: "XOXO_OOXX", PLAY_O_CENTER: "X_XOOOOXX" }
    },
    X_XO_OOX_: {
      on: {
        PLAY_X_TOP_CENTER: "XXXO_OOX_",
        PLAY_X_CENTER: "X_XOXOOX_",
        PLAY_X_BOTTOM_RIGHT: "X_XO_OOXX"
      }
    },
    X_XO_O_XO: {
      on: {
        PLAY_X_TOP_CENTER: "XXXO_O_XO",
        PLAY_X_CENTER: "X_XOXO_XO",
        PLAY_X_BOTTOM_LEFT: "X_XO_OXXO"
      }
    },
    X_XO_O_X_: {
      on: {
        PLAY_O_TOP_CENTER: "XOXO_O_X_",
        PLAY_O_CENTER: "X_XOOO_X_",
        PLAY_O_BOTTOM_LEFT: "X_XO_OOX_",
        PLAY_O_BOTTOM_RIGHT: "X_XO_O_XO"
      }
    },
    X_XO_OO_X: {
      on: {
        PLAY_X_TOP_CENTER: "XXXO_OO_X",
        PLAY_X_CENTER: "X_XOXOO_X",
        PLAY_X_BOTTOM_CENTER: "X_XO_OOXX"
      }
    },
    X_XO_O_OX: {
      on: {
        PLAY_X_TOP_CENTER: "XXXO_O_OX",
        PLAY_X_CENTER: "X_XOXO_OX",
        PLAY_X_BOTTOM_LEFT: "X_XO_OXOX"
      }
    },
    X_XO_O__X: {
      on: {
        PLAY_O_TOP_CENTER: "XOXO_O__X",
        PLAY_O_CENTER: "X_XOOO__X",
        PLAY_O_BOTTOM_LEFT: "X_XO_OO_X",
        PLAY_O_BOTTOM_CENTER: "X_XO_O_OX"
      }
    },
    X_XO_O___: {
      on: {
        PLAY_X_TOP_CENTER: "XXXO_O___",
        PLAY_X_CENTER: "X_XOXO___",
        PLAY_X_BOTTOM_LEFT: "X_XO_OX__",
        PLAY_X_BOTTOM_CENTER: "X_XO_O_X_",
        PLAY_X_BOTTOM_RIGHT: "X_XO_O__X"
      }
    },
    X_XOXXOOO: { on: { "": "O_WINS" } },
    X_XOXXOO_: {
      on: { PLAY_O_TOP_CENTER: "XOXOXXOO_", PLAY_O_BOTTOM_RIGHT: "X_XOXXOOO" }
    },
    X_XOX_OOX: { on: { "": "X_WINS" } },
    X_XOX_OO_: {
      on: {
        PLAY_X_TOP_CENTER: "XXXOX_OO_",
        PLAY_X_MIDDLE_RIGHT: "X_XOXXOO_",
        PLAY_X_BOTTOM_RIGHT: "X_XOX_OOX"
      }
    },
    X_XOXXO_O: {
      on: {
        PLAY_O_TOP_CENTER: "XOXOXXO_O",
        PLAY_O_BOTTOM_CENTER: "X_XOXXOOO"
      }
    },
    X_XOX_OXO: {
      on: { PLAY_O_TOP_CENTER: "XOXOX_OXO", PLAY_O_MIDDLE_RIGHT: "X_XOXOOXO" }
    },
    X_XOX_O_O: {
      on: {
        PLAY_X_TOP_CENTER: "XXXOX_O_O",
        PLAY_X_MIDDLE_RIGHT: "X_XOXXO_O",
        PLAY_X_BOTTOM_CENTER: "X_XOX_OXO"
      }
    },
    X_XOX_O__: {
      on: {
        PLAY_O_TOP_CENTER: "XOXOX_O__",
        PLAY_O_MIDDLE_RIGHT: "X_XOXOO__",
        PLAY_O_BOTTOM_CENTER: "X_XOX_OO_",
        PLAY_O_BOTTOM_RIGHT: "X_XOX_O_O"
      }
    },
    X_XO_XOOX: { on: { "": "X_WINS" } },
    X_XO_XOO_: {
      on: {
        PLAY_X_TOP_CENTER: "XXXO_XOO_",
        PLAY_X_CENTER: "X_XOXXOO_",
        PLAY_X_BOTTOM_RIGHT: "X_XO_XOOX"
      }
    },
    X_XO_XOXO: {
      on: { PLAY_O_TOP_CENTER: "XOXO_XOXO", PLAY_O_CENTER: "X_XOOXOXO" }
    },
    X_XO_XO_O: {
      on: {
        PLAY_X_TOP_CENTER: "XXXO_XO_O",
        PLAY_X_CENTER: "X_XOXXO_O",
        PLAY_X_BOTTOM_CENTER: "X_XO_XOXO"
      }
    },
    X_XO_XO__: {
      on: {
        PLAY_O_TOP_CENTER: "XOXO_XO__",
        PLAY_O_CENTER: "X_XOOXO__",
        PLAY_O_BOTTOM_CENTER: "X_XO_XOO_",
        PLAY_O_BOTTOM_RIGHT: "X_XO_XO_O"
      }
    },
    X_XO__OXO: {
      on: {
        PLAY_X_TOP_CENTER: "XXXO__OXO",
        PLAY_X_CENTER: "X_XOX_OXO",
        PLAY_X_MIDDLE_RIGHT: "X_XO_XOXO"
      }
    },
    X_XO__OX_: {
      on: {
        PLAY_O_TOP_CENTER: "XOXO__OX_",
        PLAY_O_CENTER: "X_XOO_OX_",
        PLAY_O_MIDDLE_RIGHT: "X_XO_OOX_",
        PLAY_O_BOTTOM_RIGHT: "X_XO__OXO"
      }
    },
    X_XO__OOX: {
      on: {
        PLAY_X_TOP_CENTER: "XXXO__OOX",
        PLAY_X_CENTER: "X_XOX_OOX",
        PLAY_X_MIDDLE_RIGHT: "X_XO_XOOX"
      }
    },
    X_XO__O_X: {
      on: {
        PLAY_O_TOP_CENTER: "XOXO__O_X",
        PLAY_O_CENTER: "X_XOO_O_X",
        PLAY_O_MIDDLE_RIGHT: "X_XO_OO_X",
        PLAY_O_BOTTOM_CENTER: "X_XO__OOX"
      }
    },
    X_XO__O__: {
      on: {
        PLAY_X_TOP_CENTER: "XXXO__O__",
        PLAY_X_CENTER: "X_XOX_O__",
        PLAY_X_MIDDLE_RIGHT: "X_XO_XO__",
        PLAY_X_BOTTOM_CENTER: "X_XO__OX_",
        PLAY_X_BOTTOM_RIGHT: "X_XO__O_X"
      }
    },
    X_XOXX_OO: {
      on: { PLAY_O_TOP_CENTER: "XOXOXX_OO", PLAY_O_BOTTOM_LEFT: "X_XOXXOOO" }
    },
    X_XOX_XOO: { on: { "": "X_WINS" } },
    X_XOX__OO: {
      on: {
        PLAY_X_TOP_CENTER: "XXXOX__OO",
        PLAY_X_MIDDLE_RIGHT: "X_XOXX_OO",
        PLAY_X_BOTTOM_LEFT: "X_XOX_XOO"
      }
    },
    X_XOX__O_: {
      on: {
        PLAY_O_TOP_CENTER: "XOXOX__O_",
        PLAY_O_MIDDLE_RIGHT: "X_XOXO_O_",
        PLAY_O_BOTTOM_LEFT: "X_XOX_OO_",
        PLAY_O_BOTTOM_RIGHT: "X_XOX__OO"
      }
    },
    X_XO_XXOO: {
      on: { PLAY_O_TOP_CENTER: "XOXO_XXOO", PLAY_O_CENTER: "X_XOOXXOO" }
    },
    X_XO_X_OO: {
      on: {
        PLAY_X_TOP_CENTER: "XXXO_X_OO",
        PLAY_X_CENTER: "X_XOXX_OO",
        PLAY_X_BOTTOM_LEFT: "X_XO_XXOO"
      }
    },
    X_XO_X_O_: {
      on: {
        PLAY_O_TOP_CENTER: "XOXO_X_O_",
        PLAY_O_CENTER: "X_XOOX_O_",
        PLAY_O_BOTTOM_LEFT: "X_XO_XOO_",
        PLAY_O_BOTTOM_RIGHT: "X_XO_X_OO"
      }
    },
    X_XO__XOO: {
      on: {
        PLAY_X_TOP_CENTER: "XXXO__XOO",
        PLAY_X_CENTER: "X_XOX_XOO",
        PLAY_X_MIDDLE_RIGHT: "X_XO_XXOO"
      }
    },
    X_XO__XO_: {
      on: {
        PLAY_O_TOP_CENTER: "XOXO__XO_",
        PLAY_O_CENTER: "X_XOO_XO_",
        PLAY_O_MIDDLE_RIGHT: "X_XO_OXO_",
        PLAY_O_BOTTOM_RIGHT: "X_XO__XOO"
      }
    },
    X_XO___OX: {
      on: {
        PLAY_O_TOP_CENTER: "XOXO___OX",
        PLAY_O_CENTER: "X_XOO__OX",
        PLAY_O_MIDDLE_RIGHT: "X_XO_O_OX",
        PLAY_O_BOTTOM_LEFT: "X_XO__OOX"
      }
    },
    X_XO___O_: {
      on: {
        PLAY_X_TOP_CENTER: "XXXO___O_",
        PLAY_X_CENTER: "X_XOX__O_",
        PLAY_X_MIDDLE_RIGHT: "X_XO_X_O_",
        PLAY_X_BOTTOM_LEFT: "X_XO__XO_",
        PLAY_X_BOTTOM_RIGHT: "X_XO___OX"
      }
    },
    X_XOX___O: {
      on: {
        PLAY_O_TOP_CENTER: "XOXOX___O",
        PLAY_O_MIDDLE_RIGHT: "X_XOXO__O",
        PLAY_O_BOTTOM_LEFT: "X_XOX_O_O",
        PLAY_O_BOTTOM_CENTER: "X_XOX__OO"
      }
    },
    X_XO_X__O: {
      on: {
        PLAY_O_TOP_CENTER: "XOXO_X__O",
        PLAY_O_CENTER: "X_XOOX__O",
        PLAY_O_BOTTOM_LEFT: "X_XO_XO_O",
        PLAY_O_BOTTOM_CENTER: "X_XO_X_OO"
      }
    },
    X_XO__X_O: {
      on: {
        PLAY_O_TOP_CENTER: "XOXO__X_O",
        PLAY_O_CENTER: "X_XOO_X_O",
        PLAY_O_MIDDLE_RIGHT: "X_XO_OX_O",
        PLAY_O_BOTTOM_CENTER: "X_XO__XOO"
      }
    },
    X_XO___XO: {
      on: {
        PLAY_O_TOP_CENTER: "XOXO___XO",
        PLAY_O_CENTER: "X_XOO__XO",
        PLAY_O_MIDDLE_RIGHT: "X_XO_O_XO",
        PLAY_O_BOTTOM_LEFT: "X_XO__OXO"
      }
    },
    X_XO____O: {
      on: {
        PLAY_X_TOP_CENTER: "XXXO____O",
        PLAY_X_CENTER: "X_XOX___O",
        PLAY_X_MIDDLE_RIGHT: "X_XO_X__O",
        PLAY_X_BOTTOM_LEFT: "X_XO__X_O",
        PLAY_X_BOTTOM_CENTER: "X_XO___XO"
      }
    },
    X_XO_____: {
      on: {
        PLAY_O_TOP_CENTER: "XOXO_____",
        PLAY_O_CENTER: "X_XOO____",
        PLAY_O_MIDDLE_RIGHT: "X_XO_O___",
        PLAY_O_BOTTOM_LEFT: "X_XO__O__",
        PLAY_O_BOTTOM_CENTER: "X_XO___O_",
        PLAY_O_BOTTOM_RIGHT: "X_XO____O"
      }
    },
    X__OXOXOX: { on: { "": "X_WINS" } },
    X__OXOXO_: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OXOXO_",
        PLAY_X_TOP_RIGHT: "X_XOXOXO_",
        PLAY_X_BOTTOM_RIGHT: "X__OXOXOX"
      }
    },
    X__OXOXXO: {
      on: { PLAY_O_TOP_CENTER: "XO_OXOXXO", PLAY_O_TOP_RIGHT: "X_OOXOXXO" }
    },
    X__OXOX_O: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OXOX_O",
        PLAY_X_TOP_RIGHT: "X_XOXOX_O",
        PLAY_X_BOTTOM_CENTER: "X__OXOXXO"
      }
    },
    X__OXOX__: {
      on: {
        PLAY_O_TOP_CENTER: "XO_OXOX__",
        PLAY_O_TOP_RIGHT: "X_OOXOX__",
        PLAY_O_BOTTOM_CENTER: "X__OXOXO_",
        PLAY_O_BOTTOM_RIGHT: "X__OXOX_O"
      }
    },
    X__OXOOXX: { on: { "": "X_WINS" } },
    X__OXOOX_: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OXOOX_",
        PLAY_X_TOP_RIGHT: "X_XOXOOX_",
        PLAY_X_BOTTOM_RIGHT: "X__OXOOXX"
      }
    },
    X__OXO_XO: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OXO_XO",
        PLAY_X_TOP_RIGHT: "X_XOXO_XO",
        PLAY_X_BOTTOM_LEFT: "X__OXOXXO"
      }
    },
    X__OXO_X_: {
      on: {
        PLAY_O_TOP_CENTER: "XO_OXO_X_",
        PLAY_O_TOP_RIGHT: "X_OOXO_X_",
        PLAY_O_BOTTOM_LEFT: "X__OXOOX_",
        PLAY_O_BOTTOM_RIGHT: "X__OXO_XO"
      }
    },
    X__OXO__X: { on: { "": "X_WINS" } },
    X__OXO___: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OXO___",
        PLAY_X_TOP_RIGHT: "X_XOXO___",
        PLAY_X_BOTTOM_LEFT: "X__OXOX__",
        PLAY_X_BOTTOM_CENTER: "X__OXO_X_",
        PLAY_X_BOTTOM_RIGHT: "X__OXO__X"
      }
    },
    X__OXXOOX: { on: { "": "X_WINS" } },
    X__OXXOO_: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OXXOO_",
        PLAY_X_TOP_RIGHT: "X_XOXXOO_",
        PLAY_X_BOTTOM_RIGHT: "X__OXXOOX"
      }
    },
    X__OXXOXO: {
      on: { PLAY_O_TOP_CENTER: "XO_OXXOXO", PLAY_O_TOP_RIGHT: "X_OOXXOXO" }
    },
    X__OXXO_O: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OXXO_O",
        PLAY_X_TOP_RIGHT: "X_XOXXO_O",
        PLAY_X_BOTTOM_CENTER: "X__OXXOXO"
      }
    },
    X__OXXO__: {
      on: {
        PLAY_O_TOP_CENTER: "XO_OXXO__",
        PLAY_O_TOP_RIGHT: "X_OOXXO__",
        PLAY_O_BOTTOM_CENTER: "X__OXXOO_",
        PLAY_O_BOTTOM_RIGHT: "X__OXXO_O"
      }
    },
    X__OX_OXO: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OX_OXO",
        PLAY_X_TOP_RIGHT: "X_XOX_OXO",
        PLAY_X_MIDDLE_RIGHT: "X__OXXOXO"
      }
    },
    X__OX_OX_: {
      on: {
        PLAY_O_TOP_CENTER: "XO_OX_OX_",
        PLAY_O_TOP_RIGHT: "X_OOX_OX_",
        PLAY_O_MIDDLE_RIGHT: "X__OXOOX_",
        PLAY_O_BOTTOM_RIGHT: "X__OX_OXO"
      }
    },
    X__OX_O_X: { on: { "": "X_WINS" } },
    X__OX_O__: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OX_O__",
        PLAY_X_TOP_RIGHT: "X_XOX_O__",
        PLAY_X_MIDDLE_RIGHT: "X__OXXO__",
        PLAY_X_BOTTOM_CENTER: "X__OX_OX_",
        PLAY_X_BOTTOM_RIGHT: "X__OX_O_X"
      }
    },
    X__OXXXOO: {
      on: { PLAY_O_TOP_CENTER: "XO_OXXXOO", PLAY_O_TOP_RIGHT: "X_OOXXXOO" }
    },
    X__OXX_OO: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OXX_OO",
        PLAY_X_TOP_RIGHT: "X_XOXX_OO",
        PLAY_X_BOTTOM_LEFT: "X__OXXXOO"
      }
    },
    X__OXX_O_: {
      on: {
        PLAY_O_TOP_CENTER: "XO_OXX_O_",
        PLAY_O_TOP_RIGHT: "X_OOXX_O_",
        PLAY_O_BOTTOM_LEFT: "X__OXXOO_",
        PLAY_O_BOTTOM_RIGHT: "X__OXX_OO"
      }
    },
    X__OX_XOO: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OX_XOO",
        PLAY_X_TOP_RIGHT: "X_XOX_XOO",
        PLAY_X_MIDDLE_RIGHT: "X__OXXXOO"
      }
    },
    X__OX_XO_: {
      on: {
        PLAY_O_TOP_CENTER: "XO_OX_XO_",
        PLAY_O_TOP_RIGHT: "X_OOX_XO_",
        PLAY_O_MIDDLE_RIGHT: "X__OXOXO_",
        PLAY_O_BOTTOM_RIGHT: "X__OX_XOO"
      }
    },
    X__OX__OX: { on: { "": "X_WINS" } },
    X__OX__O_: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OX__O_",
        PLAY_X_TOP_RIGHT: "X_XOX__O_",
        PLAY_X_MIDDLE_RIGHT: "X__OXX_O_",
        PLAY_X_BOTTOM_LEFT: "X__OX_XO_",
        PLAY_X_BOTTOM_RIGHT: "X__OX__OX"
      }
    },
    X__OXX__O: {
      on: {
        PLAY_O_TOP_CENTER: "XO_OXX__O",
        PLAY_O_TOP_RIGHT: "X_OOXX__O",
        PLAY_O_BOTTOM_LEFT: "X__OXXO_O",
        PLAY_O_BOTTOM_CENTER: "X__OXX_OO"
      }
    },
    X__OX_X_O: {
      on: {
        PLAY_O_TOP_CENTER: "XO_OX_X_O",
        PLAY_O_TOP_RIGHT: "X_OOX_X_O",
        PLAY_O_MIDDLE_RIGHT: "X__OXOX_O",
        PLAY_O_BOTTOM_CENTER: "X__OX_XOO"
      }
    },
    X__OX__XO: {
      on: {
        PLAY_O_TOP_CENTER: "XO_OX__XO",
        PLAY_O_TOP_RIGHT: "X_OOX__XO",
        PLAY_O_MIDDLE_RIGHT: "X__OXO_XO",
        PLAY_O_BOTTOM_LEFT: "X__OX_OXO"
      }
    },
    X__OX___O: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OX___O",
        PLAY_X_TOP_RIGHT: "X_XOX___O",
        PLAY_X_MIDDLE_RIGHT: "X__OXX__O",
        PLAY_X_BOTTOM_LEFT: "X__OX_X_O",
        PLAY_X_BOTTOM_CENTER: "X__OX__XO"
      }
    },
    X__OX____: {
      on: {
        PLAY_O_TOP_CENTER: "XO_OX____",
        PLAY_O_TOP_RIGHT: "X_OOX____",
        PLAY_O_MIDDLE_RIGHT: "X__OXO___",
        PLAY_O_BOTTOM_LEFT: "X__OX_O__",
        PLAY_O_BOTTOM_CENTER: "X__OX__O_",
        PLAY_O_BOTTOM_RIGHT: "X__OX___O"
      }
    },
    X__OOXXOX: {
      on: { PLAY_O_TOP_CENTER: "XO_OOXXOX", PLAY_O_TOP_RIGHT: "X_OOOXXOX" }
    },
    X__OOXXO_: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OOXXO_",
        PLAY_X_TOP_RIGHT: "X_XOOXXO_",
        PLAY_X_BOTTOM_RIGHT: "X__OOXXOX"
      }
    },
    X__OOXXXO: {
      on: { PLAY_O_TOP_CENTER: "XO_OOXXXO", PLAY_O_TOP_RIGHT: "X_OOOXXXO" }
    },
    X__OOXX_O: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OOXX_O",
        PLAY_X_TOP_RIGHT: "X_XOOXX_O",
        PLAY_X_BOTTOM_CENTER: "X__OOXXXO"
      }
    },
    X__OOXX__: {
      on: {
        PLAY_O_TOP_CENTER: "XO_OOXX__",
        PLAY_O_TOP_RIGHT: "X_OOOXX__",
        PLAY_O_BOTTOM_CENTER: "X__OOXXO_",
        PLAY_O_BOTTOM_RIGHT: "X__OOXX_O"
      }
    },
    X__OOXOXX: {
      on: { PLAY_O_TOP_CENTER: "XO_OOXOXX", PLAY_O_TOP_RIGHT: "X_OOOXOXX" }
    },
    X__OOXOX_: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OOXOX_",
        PLAY_X_TOP_RIGHT: "X_XOOXOX_",
        PLAY_X_BOTTOM_RIGHT: "X__OOXOXX"
      }
    },
    X__OOX_XO: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OOX_XO",
        PLAY_X_TOP_RIGHT: "X_XOOX_XO",
        PLAY_X_BOTTOM_LEFT: "X__OOXXXO"
      }
    },
    X__OOX_X_: {
      on: {
        PLAY_O_TOP_CENTER: "XO_OOX_X_",
        PLAY_O_TOP_RIGHT: "X_OOOX_X_",
        PLAY_O_BOTTOM_LEFT: "X__OOXOX_",
        PLAY_O_BOTTOM_RIGHT: "X__OOX_XO"
      }
    },
    X__OOXO_X: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OOXO_X",
        PLAY_X_TOP_RIGHT: "X_XOOXO_X",
        PLAY_X_BOTTOM_CENTER: "X__OOXOXX"
      }
    },
    X__OOX_OX: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OOX_OX",
        PLAY_X_TOP_RIGHT: "X_XOOX_OX",
        PLAY_X_BOTTOM_LEFT: "X__OOXXOX"
      }
    },
    X__OOX__X: {
      on: {
        PLAY_O_TOP_CENTER: "XO_OOX__X",
        PLAY_O_TOP_RIGHT: "X_OOOX__X",
        PLAY_O_BOTTOM_LEFT: "X__OOXO_X",
        PLAY_O_BOTTOM_CENTER: "X__OOX_OX"
      }
    },
    X__OOX___: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OOX___",
        PLAY_X_TOP_RIGHT: "X_XOOX___",
        PLAY_X_BOTTOM_LEFT: "X__OOXX__",
        PLAY_X_BOTTOM_CENTER: "X__OOX_X_",
        PLAY_X_BOTTOM_RIGHT: "X__OOX__X"
      }
    },
    X__O_XOXO: {
      on: {
        PLAY_X_TOP_CENTER: "XX_O_XOXO",
        PLAY_X_TOP_RIGHT: "X_XO_XOXO",
        PLAY_X_CENTER: "X__OXXOXO"
      }
    },
    X__O_XOX_: {
      on: {
        PLAY_O_TOP_CENTER: "XO_O_XOX_",
        PLAY_O_TOP_RIGHT: "X_OO_XOX_",
        PLAY_O_CENTER: "X__OOXOX_",
        PLAY_O_BOTTOM_RIGHT: "X__O_XOXO"
      }
    },
    X__O_XOOX: {
      on: {
        PLAY_X_TOP_CENTER: "XX_O_XOOX",
        PLAY_X_TOP_RIGHT: "X_XO_XOOX",
        PLAY_X_CENTER: "X__OXXOOX"
      }
    },
    X__O_XO_X: {
      on: {
        PLAY_O_TOP_CENTER: "XO_O_XO_X",
        PLAY_O_TOP_RIGHT: "X_OO_XO_X",
        PLAY_O_CENTER: "X__OOXO_X",
        PLAY_O_BOTTOM_CENTER: "X__O_XOOX"
      }
    },
    X__O_XO__: {
      on: {
        PLAY_X_TOP_CENTER: "XX_O_XO__",
        PLAY_X_TOP_RIGHT: "X_XO_XO__",
        PLAY_X_CENTER: "X__OXXO__",
        PLAY_X_BOTTOM_CENTER: "X__O_XOX_",
        PLAY_X_BOTTOM_RIGHT: "X__O_XO_X"
      }
    },
    X__O_XXOO: {
      on: {
        PLAY_X_TOP_CENTER: "XX_O_XXOO",
        PLAY_X_TOP_RIGHT: "X_XO_XXOO",
        PLAY_X_CENTER: "X__OXXXOO"
      }
    },
    X__O_XXO_: {
      on: {
        PLAY_O_TOP_CENTER: "XO_O_XXO_",
        PLAY_O_TOP_RIGHT: "X_OO_XXO_",
        PLAY_O_CENTER: "X__OOXXO_",
        PLAY_O_BOTTOM_RIGHT: "X__O_XXOO"
      }
    },
    X__O_X_OX: {
      on: {
        PLAY_O_TOP_CENTER: "XO_O_X_OX",
        PLAY_O_TOP_RIGHT: "X_OO_X_OX",
        PLAY_O_CENTER: "X__OOX_OX",
        PLAY_O_BOTTOM_LEFT: "X__O_XOOX"
      }
    },
    X__O_X_O_: {
      on: {
        PLAY_X_TOP_CENTER: "XX_O_X_O_",
        PLAY_X_TOP_RIGHT: "X_XO_X_O_",
        PLAY_X_CENTER: "X__OXX_O_",
        PLAY_X_BOTTOM_LEFT: "X__O_XXO_",
        PLAY_X_BOTTOM_RIGHT: "X__O_X_OX"
      }
    },
    X__O_XX_O: {
      on: {
        PLAY_O_TOP_CENTER: "XO_O_XX_O",
        PLAY_O_TOP_RIGHT: "X_OO_XX_O",
        PLAY_O_CENTER: "X__OOXX_O",
        PLAY_O_BOTTOM_CENTER: "X__O_XXOO"
      }
    },
    X__O_X_XO: {
      on: {
        PLAY_O_TOP_CENTER: "XO_O_X_XO",
        PLAY_O_TOP_RIGHT: "X_OO_X_XO",
        PLAY_O_CENTER: "X__OOX_XO",
        PLAY_O_BOTTOM_LEFT: "X__O_XOXO"
      }
    },
    X__O_X__O: {
      on: {
        PLAY_X_TOP_CENTER: "XX_O_X__O",
        PLAY_X_TOP_RIGHT: "X_XO_X__O",
        PLAY_X_CENTER: "X__OXX__O",
        PLAY_X_BOTTOM_LEFT: "X__O_XX_O",
        PLAY_X_BOTTOM_CENTER: "X__O_X_XO"
      }
    },
    X__O_X___: {
      on: {
        PLAY_O_TOP_CENTER: "XO_O_X___",
        PLAY_O_TOP_RIGHT: "X_OO_X___",
        PLAY_O_CENTER: "X__OOX___",
        PLAY_O_BOTTOM_LEFT: "X__O_XO__",
        PLAY_O_BOTTOM_CENTER: "X__O_X_O_",
        PLAY_O_BOTTOM_RIGHT: "X__O_X__O"
      }
    },
    X__OOOXX_: { on: { "": "O_WINS" } },
    X__OO_XXO: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OO_XXO",
        PLAY_X_TOP_RIGHT: "X_XOO_XXO",
        PLAY_X_MIDDLE_RIGHT: "X__OOXXXO"
      }
    },
    X__OO_XX_: {
      on: {
        PLAY_O_TOP_CENTER: "XO_OO_XX_",
        PLAY_O_TOP_RIGHT: "X_OOO_XX_",
        PLAY_O_MIDDLE_RIGHT: "X__OOOXX_",
        PLAY_O_BOTTOM_RIGHT: "X__OO_XXO"
      }
    },
    X__OOOX_X: { on: { "": "O_WINS" } },
    X__OO_XOX: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OO_XOX",
        PLAY_X_TOP_RIGHT: "X_XOO_XOX",
        PLAY_X_MIDDLE_RIGHT: "X__OOXXOX"
      }
    },
    X__OO_X_X: {
      on: {
        PLAY_O_TOP_CENTER: "XO_OO_X_X",
        PLAY_O_TOP_RIGHT: "X_OOO_X_X",
        PLAY_O_MIDDLE_RIGHT: "X__OOOX_X",
        PLAY_O_BOTTOM_CENTER: "X__OO_XOX"
      }
    },
    X__OO_X__: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OO_X__",
        PLAY_X_TOP_RIGHT: "X_XOO_X__",
        PLAY_X_MIDDLE_RIGHT: "X__OOXX__",
        PLAY_X_BOTTOM_CENTER: "X__OO_XX_",
        PLAY_X_BOTTOM_RIGHT: "X__OO_X_X"
      }
    },
    X__O_OXXO: {
      on: {
        PLAY_X_TOP_CENTER: "XX_O_OXXO",
        PLAY_X_TOP_RIGHT: "X_XO_OXXO",
        PLAY_X_CENTER: "X__OXOXXO"
      }
    },
    X__O_OXX_: {
      on: {
        PLAY_O_TOP_CENTER: "XO_O_OXX_",
        PLAY_O_TOP_RIGHT: "X_OO_OXX_",
        PLAY_O_CENTER: "X__OOOXX_",
        PLAY_O_BOTTOM_RIGHT: "X__O_OXXO"
      }
    },
    X__O_OXOX: {
      on: {
        PLAY_X_TOP_CENTER: "XX_O_OXOX",
        PLAY_X_TOP_RIGHT: "X_XO_OXOX",
        PLAY_X_CENTER: "X__OXOXOX"
      }
    },
    X__O_OX_X: {
      on: {
        PLAY_O_TOP_CENTER: "XO_O_OX_X",
        PLAY_O_TOP_RIGHT: "X_OO_OX_X",
        PLAY_O_CENTER: "X__OOOX_X",
        PLAY_O_BOTTOM_CENTER: "X__O_OXOX"
      }
    },
    X__O_OX__: {
      on: {
        PLAY_X_TOP_CENTER: "XX_O_OX__",
        PLAY_X_TOP_RIGHT: "X_XO_OX__",
        PLAY_X_CENTER: "X__OXOX__",
        PLAY_X_BOTTOM_CENTER: "X__O_OXX_",
        PLAY_X_BOTTOM_RIGHT: "X__O_OX_X"
      }
    },
    X__O__XOX: {
      on: {
        PLAY_O_TOP_CENTER: "XO_O__XOX",
        PLAY_O_TOP_RIGHT: "X_OO__XOX",
        PLAY_O_CENTER: "X__OO_XOX",
        PLAY_O_MIDDLE_RIGHT: "X__O_OXOX"
      }
    },
    X__O__XO_: {
      on: {
        PLAY_X_TOP_CENTER: "XX_O__XO_",
        PLAY_X_TOP_RIGHT: "X_XO__XO_",
        PLAY_X_CENTER: "X__OX_XO_",
        PLAY_X_MIDDLE_RIGHT: "X__O_XXO_",
        PLAY_X_BOTTOM_RIGHT: "X__O__XOX"
      }
    },
    X__O__XXO: {
      on: {
        PLAY_O_TOP_CENTER: "XO_O__XXO",
        PLAY_O_TOP_RIGHT: "X_OO__XXO",
        PLAY_O_CENTER: "X__OO_XXO",
        PLAY_O_MIDDLE_RIGHT: "X__O_OXXO"
      }
    },
    X__O__X_O: {
      on: {
        PLAY_X_TOP_CENTER: "XX_O__X_O",
        PLAY_X_TOP_RIGHT: "X_XO__X_O",
        PLAY_X_CENTER: "X__OX_X_O",
        PLAY_X_MIDDLE_RIGHT: "X__O_XX_O",
        PLAY_X_BOTTOM_CENTER: "X__O__XXO"
      }
    },
    X__O__X__: {
      on: {
        PLAY_O_TOP_CENTER: "XO_O__X__",
        PLAY_O_TOP_RIGHT: "X_OO__X__",
        PLAY_O_CENTER: "X__OO_X__",
        PLAY_O_MIDDLE_RIGHT: "X__O_OX__",
        PLAY_O_BOTTOM_CENTER: "X__O__XO_",
        PLAY_O_BOTTOM_RIGHT: "X__O__X_O"
      }
    },
    X__OOO_XX: { on: { "": "O_WINS" } },
    X__OO_OXX: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OO_OXX",
        PLAY_X_TOP_RIGHT: "X_XOO_OXX",
        PLAY_X_MIDDLE_RIGHT: "X__OOXOXX"
      }
    },
    X__OO__XX: {
      on: {
        PLAY_O_TOP_CENTER: "XO_OO__XX",
        PLAY_O_TOP_RIGHT: "X_OOO__XX",
        PLAY_O_MIDDLE_RIGHT: "X__OOO_XX",
        PLAY_O_BOTTOM_LEFT: "X__OO_OXX"
      }
    },
    X__OO__X_: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OO__X_",
        PLAY_X_TOP_RIGHT: "X_XOO__X_",
        PLAY_X_MIDDLE_RIGHT: "X__OOX_X_",
        PLAY_X_BOTTOM_LEFT: "X__OO_XX_",
        PLAY_X_BOTTOM_RIGHT: "X__OO__XX"
      }
    },
    X__O_OOXX: {
      on: {
        PLAY_X_TOP_CENTER: "XX_O_OOXX",
        PLAY_X_TOP_RIGHT: "X_XO_OOXX",
        PLAY_X_CENTER: "X__OXOOXX"
      }
    },
    X__O_O_XX: {
      on: {
        PLAY_O_TOP_CENTER: "XO_O_O_XX",
        PLAY_O_TOP_RIGHT: "X_OO_O_XX",
        PLAY_O_CENTER: "X__OOO_XX",
        PLAY_O_BOTTOM_LEFT: "X__O_OOXX"
      }
    },
    X__O_O_X_: {
      on: {
        PLAY_X_TOP_CENTER: "XX_O_O_X_",
        PLAY_X_TOP_RIGHT: "X_XO_O_X_",
        PLAY_X_CENTER: "X__OXO_X_",
        PLAY_X_BOTTOM_LEFT: "X__O_OXX_",
        PLAY_X_BOTTOM_RIGHT: "X__O_O_XX"
      }
    },
    X__O__OXX: {
      on: {
        PLAY_O_TOP_CENTER: "XO_O__OXX",
        PLAY_O_TOP_RIGHT: "X_OO__OXX",
        PLAY_O_CENTER: "X__OO_OXX",
        PLAY_O_MIDDLE_RIGHT: "X__O_OOXX"
      }
    },
    X__O__OX_: {
      on: {
        PLAY_X_TOP_CENTER: "XX_O__OX_",
        PLAY_X_TOP_RIGHT: "X_XO__OX_",
        PLAY_X_CENTER: "X__OX_OX_",
        PLAY_X_MIDDLE_RIGHT: "X__O_XOX_",
        PLAY_X_BOTTOM_RIGHT: "X__O__OXX"
      }
    },
    X__O___XO: {
      on: {
        PLAY_X_TOP_CENTER: "XX_O___XO",
        PLAY_X_TOP_RIGHT: "X_XO___XO",
        PLAY_X_CENTER: "X__OX__XO",
        PLAY_X_MIDDLE_RIGHT: "X__O_X_XO",
        PLAY_X_BOTTOM_LEFT: "X__O__XXO"
      }
    },
    X__O___X_: {
      on: {
        PLAY_O_TOP_CENTER: "XO_O___X_",
        PLAY_O_TOP_RIGHT: "X_OO___X_",
        PLAY_O_CENTER: "X__OO__X_",
        PLAY_O_MIDDLE_RIGHT: "X__O_O_X_",
        PLAY_O_BOTTOM_LEFT: "X__O__OX_",
        PLAY_O_BOTTOM_RIGHT: "X__O___XO"
      }
    },
    X__OO___X: {
      on: {
        PLAY_X_TOP_CENTER: "XX_OO___X",
        PLAY_X_TOP_RIGHT: "X_XOO___X",
        PLAY_X_MIDDLE_RIGHT: "X__OOX__X",
        PLAY_X_BOTTOM_LEFT: "X__OO_X_X",
        PLAY_X_BOTTOM_CENTER: "X__OO__XX"
      }
    },
    X__O_O__X: {
      on: {
        PLAY_X_TOP_CENTER: "XX_O_O__X",
        PLAY_X_TOP_RIGHT: "X_XO_O__X",
        PLAY_X_CENTER: "X__OXO__X",
        PLAY_X_BOTTOM_LEFT: "X__O_OX_X",
        PLAY_X_BOTTOM_CENTER: "X__O_O_XX"
      }
    },
    X__O__O_X: {
      on: {
        PLAY_X_TOP_CENTER: "XX_O__O_X",
        PLAY_X_TOP_RIGHT: "X_XO__O_X",
        PLAY_X_CENTER: "X__OX_O_X",
        PLAY_X_MIDDLE_RIGHT: "X__O_XO_X",
        PLAY_X_BOTTOM_CENTER: "X__O__OXX"
      }
    },
    X__O___OX: {
      on: {
        PLAY_X_TOP_CENTER: "XX_O___OX",
        PLAY_X_TOP_RIGHT: "X_XO___OX",
        PLAY_X_CENTER: "X__OX__OX",
        PLAY_X_MIDDLE_RIGHT: "X__O_X_OX",
        PLAY_X_BOTTOM_LEFT: "X__O__XOX"
      }
    },
    X__O____X: {
      on: {
        PLAY_O_TOP_CENTER: "XO_O____X",
        PLAY_O_TOP_RIGHT: "X_OO____X",
        PLAY_O_CENTER: "X__OO___X",
        PLAY_O_MIDDLE_RIGHT: "X__O_O__X",
        PLAY_O_BOTTOM_LEFT: "X__O__O_X",
        PLAY_O_BOTTOM_CENTER: "X__O___OX"
      }
    },
    X__O_____: {
      on: {
        PLAY_X_TOP_CENTER: "XX_O_____",
        PLAY_X_TOP_RIGHT: "X_XO_____",
        PLAY_X_CENTER: "X__OX____",
        PLAY_X_MIDDLE_RIGHT: "X__O_X___",
        PLAY_X_BOTTOM_LEFT: "X__O__X__",
        PLAY_X_BOTTOM_CENTER: "X__O___X_",
        PLAY_X_BOTTOM_RIGHT: "X__O____X"
      }
    },
    XXX_OO___: { on: { "": "X_WINS" } },
    XXXXOOO__: { on: { "": "X_WINS" } },
    XXXXOOOXO: { on: { "": "X_WINS" } },
    XX_XOOOXO: { on: { PLAY_X_TOP_RIGHT: "XXXXOOOXO" } },
    XX_XOOOX_: {
      on: { PLAY_O_TOP_RIGHT: "XXOXOOOX_", PLAY_O_BOTTOM_RIGHT: "XX_XOOOXO" }
    },
    XXXXOOOOX: { on: { "": "X_WINS" } },
    XX_XOOOOX: { on: { PLAY_X_TOP_RIGHT: "XXXXOOOOX" } },
    XX_XOOO_X: {
      on: { PLAY_O_TOP_RIGHT: "XXOXOOO_X", PLAY_O_BOTTOM_CENTER: "XX_XOOOOX" }
    },
    XX_XOOO__: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXXOOO__",
        PLAY_X_BOTTOM_CENTER: "XX_XOOOX_",
        PLAY_X_BOTTOM_RIGHT: "XX_XOOO_X"
      }
    },
    XXXXOO_O_: { on: { "": "X_WINS" } },
    XX_XOOXO_: { on: { "": "X_WINS" } },
    XX_XOO_OX: {
      on: { PLAY_O_TOP_RIGHT: "XXOXOO_OX", PLAY_O_BOTTOM_LEFT: "XX_XOOOOX" }
    },
    XX_XOO_O_: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXXOO_O_",
        PLAY_X_BOTTOM_LEFT: "XX_XOOXO_",
        PLAY_X_BOTTOM_RIGHT: "XX_XOO_OX"
      }
    },
    XXXXOO__O: { on: { "": "X_WINS" } },
    XX_XOOX_O: { on: { "": "X_WINS" } },
    XX_XOO_XO: {
      on: { PLAY_O_TOP_RIGHT: "XXOXOO_XO", PLAY_O_BOTTOM_LEFT: "XX_XOOOXO" }
    },
    XX_XOO__O: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXXOO__O",
        PLAY_X_BOTTOM_LEFT: "XX_XOOX_O",
        PLAY_X_BOTTOM_CENTER: "XX_XOO_XO"
      }
    },
    XX_XOO___: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOXOO___",
        PLAY_O_BOTTOM_LEFT: "XX_XOOO__",
        PLAY_O_BOTTOM_CENTER: "XX_XOO_O_",
        PLAY_O_BOTTOM_RIGHT: "XX_XOO__O"
      }
    },
    XXX_OOXO_: { on: { "": "X_WINS" } },
    XX__OOXOX: {
      on: { PLAY_O_TOP_RIGHT: "XXO_OOXOX", PLAY_O_MIDDLE_LEFT: "XX_OOOXOX" }
    },
    XX__OOXO_: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX_OOXO_",
        PLAY_X_MIDDLE_LEFT: "XX_XOOXO_",
        PLAY_X_BOTTOM_RIGHT: "XX__OOXOX"
      }
    },
    XXX_OOX_O: { on: { "": "X_WINS" } },
    XX__OOXXO: {
      on: { PLAY_O_TOP_RIGHT: "XXO_OOXXO", PLAY_O_MIDDLE_LEFT: "XX_OOOXXO" }
    },
    XX__OOX_O: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX_OOX_O",
        PLAY_X_MIDDLE_LEFT: "XX_XOOX_O",
        PLAY_X_BOTTOM_CENTER: "XX__OOXXO"
      }
    },
    XX__OOX__: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_OOX__",
        PLAY_O_MIDDLE_LEFT: "XX_OOOX__",
        PLAY_O_BOTTOM_CENTER: "XX__OOXO_",
        PLAY_O_BOTTOM_RIGHT: "XX__OOX_O"
      }
    },
    XXX_OOOX_: { on: { "": "X_WINS" } },
    XX__OOOXX: {
      on: { PLAY_O_TOP_RIGHT: "XXO_OOOXX", PLAY_O_MIDDLE_LEFT: "XX_OOOOXX" }
    },
    XX__OOOX_: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX_OOOX_",
        PLAY_X_MIDDLE_LEFT: "XX_XOOOX_",
        PLAY_X_BOTTOM_RIGHT: "XX__OOOXX"
      }
    },
    XXX_OO_XO: { on: { "": "X_WINS" } },
    XX__OO_XO: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX_OO_XO",
        PLAY_X_MIDDLE_LEFT: "XX_XOO_XO",
        PLAY_X_BOTTOM_LEFT: "XX__OOXXO"
      }
    },
    XX__OO_X_: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_OO_X_",
        PLAY_O_MIDDLE_LEFT: "XX_OOO_X_",
        PLAY_O_BOTTOM_LEFT: "XX__OOOX_",
        PLAY_O_BOTTOM_RIGHT: "XX__OO_XO"
      }
    },
    XXX_OOO_X: { on: { "": "X_WINS" } },
    XX__OOO_X: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX_OOO_X",
        PLAY_X_MIDDLE_LEFT: "XX_XOOO_X",
        PLAY_X_BOTTOM_CENTER: "XX__OOOXX"
      }
    },
    XXX_OO_OX: { on: { "": "X_WINS" } },
    XX__OO_OX: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX_OO_OX",
        PLAY_X_MIDDLE_LEFT: "XX_XOO_OX",
        PLAY_X_BOTTOM_LEFT: "XX__OOXOX"
      }
    },
    XX__OO__X: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_OO__X",
        PLAY_O_MIDDLE_LEFT: "XX_OOO__X",
        PLAY_O_BOTTOM_LEFT: "XX__OOO_X",
        PLAY_O_BOTTOM_CENTER: "XX__OO_OX"
      }
    },
    XX__OO___: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX_OO___",
        PLAY_X_MIDDLE_LEFT: "XX_XOO___",
        PLAY_X_BOTTOM_LEFT: "XX__OOX__",
        PLAY_X_BOTTOM_CENTER: "XX__OO_X_",
        PLAY_X_BOTTOM_RIGHT: "XX__OO__X"
      }
    },
    XXX_O_O__: { on: { "": "X_WINS" } },
    XXXXO_OO_: { on: { "": "X_WINS" } },
    XX_XOXOOO: { on: { "": "O_WINS" } },
    XX_XOXOO_: {
      on: { PLAY_O_TOP_RIGHT: "XXOXOXOO_", PLAY_O_BOTTOM_RIGHT: "XX_XOXOOO" }
    },
    XX_XO_OOX: {
      on: { PLAY_O_TOP_RIGHT: "XXOXO_OOX", PLAY_O_MIDDLE_RIGHT: "XX_XOOOOX" }
    },
    XX_XO_OO_: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXXO_OO_",
        PLAY_X_MIDDLE_RIGHT: "XX_XOXOO_",
        PLAY_X_BOTTOM_RIGHT: "XX_XO_OOX"
      }
    },
    XXXXO_O_O: { on: { "": "X_WINS" } },
    XX_XOXO_O: {
      on: { PLAY_O_TOP_RIGHT: "XXOXOXO_O", PLAY_O_BOTTOM_CENTER: "XX_XOXOOO" }
    },
    XX_XO_OXO: {
      on: { PLAY_O_TOP_RIGHT: "XXOXO_OXO", PLAY_O_MIDDLE_RIGHT: "XX_XOOOXO" }
    },
    XX_XO_O_O: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXXO_O_O",
        PLAY_X_MIDDLE_RIGHT: "XX_XOXO_O",
        PLAY_X_BOTTOM_CENTER: "XX_XO_OXO"
      }
    },
    XX_XO_O__: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOXO_O__",
        PLAY_O_MIDDLE_RIGHT: "XX_XOOO__",
        PLAY_O_BOTTOM_CENTER: "XX_XO_OO_",
        PLAY_O_BOTTOM_RIGHT: "XX_XO_O_O"
      }
    },
    XXX_OXOO_: { on: { "": "X_WINS" } },
    XX__OXOOX: {
      on: { PLAY_O_TOP_RIGHT: "XXO_OXOOX", PLAY_O_MIDDLE_LEFT: "XX_OOXOOX" }
    },
    XX__OXOO_: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX_OXOO_",
        PLAY_X_MIDDLE_LEFT: "XX_XOXOO_",
        PLAY_X_BOTTOM_RIGHT: "XX__OXOOX"
      }
    },
    XXX_OXO_O: { on: { "": "X_WINS" } },
    XX__OXOXO: {
      on: { PLAY_O_TOP_RIGHT: "XXO_OXOXO", PLAY_O_MIDDLE_LEFT: "XX_OOXOXO" }
    },
    XX__OXO_O: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX_OXO_O",
        PLAY_X_MIDDLE_LEFT: "XX_XOXO_O",
        PLAY_X_BOTTOM_CENTER: "XX__OXOXO"
      }
    },
    XX__OXO__: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_OXO__",
        PLAY_O_MIDDLE_LEFT: "XX_OOXO__",
        PLAY_O_BOTTOM_CENTER: "XX__OXOO_",
        PLAY_O_BOTTOM_RIGHT: "XX__OXO_O"
      }
    },
    XXX_O_OXO: { on: { "": "X_WINS" } },
    XX__O_OXO: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX_O_OXO",
        PLAY_X_MIDDLE_LEFT: "XX_XO_OXO",
        PLAY_X_MIDDLE_RIGHT: "XX__OXOXO"
      }
    },
    XX__O_OX_: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_O_OX_",
        PLAY_O_MIDDLE_LEFT: "XX_OO_OX_",
        PLAY_O_MIDDLE_RIGHT: "XX__OOOX_",
        PLAY_O_BOTTOM_RIGHT: "XX__O_OXO"
      }
    },
    XXX_O_OOX: { on: { "": "X_WINS" } },
    XX__O_OOX: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX_O_OOX",
        PLAY_X_MIDDLE_LEFT: "XX_XO_OOX",
        PLAY_X_MIDDLE_RIGHT: "XX__OXOOX"
      }
    },
    XX__O_O_X: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_O_O_X",
        PLAY_O_MIDDLE_LEFT: "XX_OO_O_X",
        PLAY_O_MIDDLE_RIGHT: "XX__OOO_X",
        PLAY_O_BOTTOM_CENTER: "XX__O_OOX"
      }
    },
    XX__O_O__: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX_O_O__",
        PLAY_X_MIDDLE_LEFT: "XX_XO_O__",
        PLAY_X_MIDDLE_RIGHT: "XX__OXO__",
        PLAY_X_BOTTOM_CENTER: "XX__O_OX_",
        PLAY_X_BOTTOM_RIGHT: "XX__O_O_X"
      }
    },
    XXX_O__O_: { on: { "": "X_WINS" } },
    XXXXO__OO: { on: { "": "X_WINS" } },
    XX_XOX_OO: {
      on: { PLAY_O_TOP_RIGHT: "XXOXOX_OO", PLAY_O_BOTTOM_LEFT: "XX_XOXOOO" }
    },
    XX_XO_XOO: { on: { "": "X_WINS" } },
    XX_XO__OO: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXXO__OO",
        PLAY_X_MIDDLE_RIGHT: "XX_XOX_OO",
        PLAY_X_BOTTOM_LEFT: "XX_XO_XOO"
      }
    },
    XX_XO__O_: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOXO__O_",
        PLAY_O_MIDDLE_RIGHT: "XX_XOO_O_",
        PLAY_O_BOTTOM_LEFT: "XX_XO_OO_",
        PLAY_O_BOTTOM_RIGHT: "XX_XO__OO"
      }
    },
    XXX_OX_OO: { on: { "": "X_WINS" } },
    XX__OXXOO: {
      on: { PLAY_O_TOP_RIGHT: "XXO_OXXOO", PLAY_O_MIDDLE_LEFT: "XX_OOXXOO" }
    },
    XX__OX_OO: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX_OX_OO",
        PLAY_X_MIDDLE_LEFT: "XX_XOX_OO",
        PLAY_X_BOTTOM_LEFT: "XX__OXXOO"
      }
    },
    XX__OX_O_: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_OX_O_",
        PLAY_O_MIDDLE_LEFT: "XX_OOX_O_",
        PLAY_O_BOTTOM_LEFT: "XX__OXOO_",
        PLAY_O_BOTTOM_RIGHT: "XX__OX_OO"
      }
    },
    XXX_O_XOO: { on: { "": "X_WINS" } },
    XX__O_XOO: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX_O_XOO",
        PLAY_X_MIDDLE_LEFT: "XX_XO_XOO",
        PLAY_X_MIDDLE_RIGHT: "XX__OXXOO"
      }
    },
    XX__O_XO_: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_O_XO_",
        PLAY_O_MIDDLE_LEFT: "XX_OO_XO_",
        PLAY_O_MIDDLE_RIGHT: "XX__OOXO_",
        PLAY_O_BOTTOM_RIGHT: "XX__O_XOO"
      }
    },
    XX__O__OX: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_O__OX",
        PLAY_O_MIDDLE_LEFT: "XX_OO__OX",
        PLAY_O_MIDDLE_RIGHT: "XX__OO_OX",
        PLAY_O_BOTTOM_LEFT: "XX__O_OOX"
      }
    },
    XX__O__O_: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX_O__O_",
        PLAY_X_MIDDLE_LEFT: "XX_XO__O_",
        PLAY_X_MIDDLE_RIGHT: "XX__OX_O_",
        PLAY_X_BOTTOM_LEFT: "XX__O_XO_",
        PLAY_X_BOTTOM_RIGHT: "XX__O__OX"
      }
    },
    XXX_O___O: { on: { "": "X_WINS" } },
    XX_XO___O: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOXO___O",
        PLAY_O_MIDDLE_RIGHT: "XX_XOO__O",
        PLAY_O_BOTTOM_LEFT: "XX_XO_O_O",
        PLAY_O_BOTTOM_CENTER: "XX_XO__OO"
      }
    },
    XX__OX__O: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_OX__O",
        PLAY_O_MIDDLE_LEFT: "XX_OOX__O",
        PLAY_O_BOTTOM_LEFT: "XX__OXO_O",
        PLAY_O_BOTTOM_CENTER: "XX__OX_OO"
      }
    },
    XX__O_X_O: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_O_X_O",
        PLAY_O_MIDDLE_LEFT: "XX_OO_X_O",
        PLAY_O_MIDDLE_RIGHT: "XX__OOX_O",
        PLAY_O_BOTTOM_CENTER: "XX__O_XOO"
      }
    },
    XX__O__XO: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_O__XO",
        PLAY_O_MIDDLE_LEFT: "XX_OO__XO",
        PLAY_O_MIDDLE_RIGHT: "XX__OO_XO",
        PLAY_O_BOTTOM_LEFT: "XX__O_OXO"
      }
    },
    XX__O___O: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX_O___O",
        PLAY_X_MIDDLE_LEFT: "XX_XO___O",
        PLAY_X_MIDDLE_RIGHT: "XX__OX__O",
        PLAY_X_BOTTOM_LEFT: "XX__O_X_O",
        PLAY_X_BOTTOM_CENTER: "XX__O__XO"
      }
    },
    XX__O____: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_O____",
        PLAY_O_MIDDLE_LEFT: "XX_OO____",
        PLAY_O_MIDDLE_RIGHT: "XX__OO___",
        PLAY_O_BOTTOM_LEFT: "XX__O_O__",
        PLAY_O_BOTTOM_CENTER: "XX__O__O_",
        PLAY_O_BOTTOM_RIGHT: "XX__O___O"
      }
    },
    X_XXOOOXO: { on: { PLAY_X_TOP_CENTER: "XXXXOOOXO" } },
    X_XXOOOX_: {
      on: { PLAY_O_TOP_CENTER: "XOXXOOOX_", PLAY_O_BOTTOM_RIGHT: "X_XXOOOXO" }
    },
    X_XXOOOOX: { on: { PLAY_X_TOP_CENTER: "XXXXOOOOX" } },
    X_XXOOO_X: {
      on: {
        PLAY_O_TOP_CENTER: "XOXXOOO_X",
        PLAY_O_BOTTOM_CENTER: "X_XXOOOOX"
      }
    },
    X_XXOOO__: {
      on: {
        PLAY_X_TOP_CENTER: "XXXXOOO__",
        PLAY_X_BOTTOM_CENTER: "X_XXOOOX_",
        PLAY_X_BOTTOM_RIGHT: "X_XXOOO_X"
      }
    },
    X_XXOOXO_: { on: { "": "X_WINS" } },
    X_XXOO_OX: {
      on: { PLAY_O_TOP_CENTER: "XOXXOO_OX", PLAY_O_BOTTOM_LEFT: "X_XXOOOOX" }
    },
    X_XXOO_O_: {
      on: {
        PLAY_X_TOP_CENTER: "XXXXOO_O_",
        PLAY_X_BOTTOM_LEFT: "X_XXOOXO_",
        PLAY_X_BOTTOM_RIGHT: "X_XXOO_OX"
      }
    },
    X_XXOOX_O: { on: { "": "X_WINS" } },
    X_XXOO_XO: {
      on: { PLAY_O_TOP_CENTER: "XOXXOO_XO", PLAY_O_BOTTOM_LEFT: "X_XXOOOXO" }
    },
    X_XXOO__O: {
      on: {
        PLAY_X_TOP_CENTER: "XXXXOO__O",
        PLAY_X_BOTTOM_LEFT: "X_XXOOX_O",
        PLAY_X_BOTTOM_CENTER: "X_XXOO_XO"
      }
    },
    X_XXOO___: {
      on: {
        PLAY_O_TOP_CENTER: "XOXXOO___",
        PLAY_O_BOTTOM_LEFT: "X_XXOOO__",
        PLAY_O_BOTTOM_CENTER: "X_XXOO_O_",
        PLAY_O_BOTTOM_RIGHT: "X_XXOO__O"
      }
    },
    X_X_OOXOX: {
      on: { PLAY_O_TOP_CENTER: "XOX_OOXOX", PLAY_O_MIDDLE_LEFT: "X_XOOOXOX" }
    },
    X_X_OOXO_: {
      on: {
        PLAY_X_TOP_CENTER: "XXX_OOXO_",
        PLAY_X_MIDDLE_LEFT: "X_XXOOXO_",
        PLAY_X_BOTTOM_RIGHT: "X_X_OOXOX"
      }
    },
    X_X_OOXXO: {
      on: { PLAY_O_TOP_CENTER: "XOX_OOXXO", PLAY_O_MIDDLE_LEFT: "X_XOOOXXO" }
    },
    X_X_OOX_O: {
      on: {
        PLAY_X_TOP_CENTER: "XXX_OOX_O",
        PLAY_X_MIDDLE_LEFT: "X_XXOOX_O",
        PLAY_X_BOTTOM_CENTER: "X_X_OOXXO"
      }
    },
    X_X_OOX__: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_OOX__",
        PLAY_O_MIDDLE_LEFT: "X_XOOOX__",
        PLAY_O_BOTTOM_CENTER: "X_X_OOXO_",
        PLAY_O_BOTTOM_RIGHT: "X_X_OOX_O"
      }
    },
    X_X_OOOXX: {
      on: { PLAY_O_TOP_CENTER: "XOX_OOOXX", PLAY_O_MIDDLE_LEFT: "X_XOOOOXX" }
    },
    X_X_OOOX_: {
      on: {
        PLAY_X_TOP_CENTER: "XXX_OOOX_",
        PLAY_X_MIDDLE_LEFT: "X_XXOOOX_",
        PLAY_X_BOTTOM_RIGHT: "X_X_OOOXX"
      }
    },
    X_X_OO_XO: {
      on: {
        PLAY_X_TOP_CENTER: "XXX_OO_XO",
        PLAY_X_MIDDLE_LEFT: "X_XXOO_XO",
        PLAY_X_BOTTOM_LEFT: "X_X_OOXXO"
      }
    },
    X_X_OO_X_: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_OO_X_",
        PLAY_O_MIDDLE_LEFT: "X_XOOO_X_",
        PLAY_O_BOTTOM_LEFT: "X_X_OOOX_",
        PLAY_O_BOTTOM_RIGHT: "X_X_OO_XO"
      }
    },
    X_X_OOO_X: {
      on: {
        PLAY_X_TOP_CENTER: "XXX_OOO_X",
        PLAY_X_MIDDLE_LEFT: "X_XXOOO_X",
        PLAY_X_BOTTOM_CENTER: "X_X_OOOXX"
      }
    },
    X_X_OO_OX: {
      on: {
        PLAY_X_TOP_CENTER: "XXX_OO_OX",
        PLAY_X_MIDDLE_LEFT: "X_XXOO_OX",
        PLAY_X_BOTTOM_LEFT: "X_X_OOXOX"
      }
    },
    X_X_OO__X: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_OO__X",
        PLAY_O_MIDDLE_LEFT: "X_XOOO__X",
        PLAY_O_BOTTOM_LEFT: "X_X_OOO_X",
        PLAY_O_BOTTOM_CENTER: "X_X_OO_OX"
      }
    },
    X_X_OO___: {
      on: {
        PLAY_X_TOP_CENTER: "XXX_OO___",
        PLAY_X_MIDDLE_LEFT: "X_XXOO___",
        PLAY_X_BOTTOM_LEFT: "X_X_OOX__",
        PLAY_X_BOTTOM_CENTER: "X_X_OO_X_",
        PLAY_X_BOTTOM_RIGHT: "X_X_OO__X"
      }
    },
    X_XXOXOOO: { on: { "": "O_WINS" } },
    X_XXOXOO_: {
      on: { PLAY_O_TOP_CENTER: "XOXXOXOO_", PLAY_O_BOTTOM_RIGHT: "X_XXOXOOO" }
    },
    X_XXO_OOX: {
      on: { PLAY_O_TOP_CENTER: "XOXXO_OOX", PLAY_O_MIDDLE_RIGHT: "X_XXOOOOX" }
    },
    X_XXO_OO_: {
      on: {
        PLAY_X_TOP_CENTER: "XXXXO_OO_",
        PLAY_X_MIDDLE_RIGHT: "X_XXOXOO_",
        PLAY_X_BOTTOM_RIGHT: "X_XXO_OOX"
      }
    },
    X_XXOXO_O: {
      on: {
        PLAY_O_TOP_CENTER: "XOXXOXO_O",
        PLAY_O_BOTTOM_CENTER: "X_XXOXOOO"
      }
    },
    X_XXO_OXO: {
      on: { PLAY_O_TOP_CENTER: "XOXXO_OXO", PLAY_O_MIDDLE_RIGHT: "X_XXOOOXO" }
    },
    X_XXO_O_O: {
      on: {
        PLAY_X_TOP_CENTER: "XXXXO_O_O",
        PLAY_X_MIDDLE_RIGHT: "X_XXOXO_O",
        PLAY_X_BOTTOM_CENTER: "X_XXO_OXO"
      }
    },
    X_XXO_O__: {
      on: {
        PLAY_O_TOP_CENTER: "XOXXO_O__",
        PLAY_O_MIDDLE_RIGHT: "X_XXOOO__",
        PLAY_O_BOTTOM_CENTER: "X_XXO_OO_",
        PLAY_O_BOTTOM_RIGHT: "X_XXO_O_O"
      }
    },
    X_X_OXOOX: { on: { "": "X_WINS" } },
    X_X_OXOO_: {
      on: {
        PLAY_X_TOP_CENTER: "XXX_OXOO_",
        PLAY_X_MIDDLE_LEFT: "X_XXOXOO_",
        PLAY_X_BOTTOM_RIGHT: "X_X_OXOOX"
      }
    },
    X_X_OXOXO: {
      on: { PLAY_O_TOP_CENTER: "XOX_OXOXO", PLAY_O_MIDDLE_LEFT: "X_XOOXOXO" }
    },
    X_X_OXO_O: {
      on: {
        PLAY_X_TOP_CENTER: "XXX_OXO_O",
        PLAY_X_MIDDLE_LEFT: "X_XXOXO_O",
        PLAY_X_BOTTOM_CENTER: "X_X_OXOXO"
      }
    },
    X_X_OXO__: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_OXO__",
        PLAY_O_MIDDLE_LEFT: "X_XOOXO__",
        PLAY_O_BOTTOM_CENTER: "X_X_OXOO_",
        PLAY_O_BOTTOM_RIGHT: "X_X_OXO_O"
      }
    },
    X_X_O_OXO: {
      on: {
        PLAY_X_TOP_CENTER: "XXX_O_OXO",
        PLAY_X_MIDDLE_LEFT: "X_XXO_OXO",
        PLAY_X_MIDDLE_RIGHT: "X_X_OXOXO"
      }
    },
    X_X_O_OX_: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_O_OX_",
        PLAY_O_MIDDLE_LEFT: "X_XOO_OX_",
        PLAY_O_MIDDLE_RIGHT: "X_X_OOOX_",
        PLAY_O_BOTTOM_RIGHT: "X_X_O_OXO"
      }
    },
    X_X_O_OOX: {
      on: {
        PLAY_X_TOP_CENTER: "XXX_O_OOX",
        PLAY_X_MIDDLE_LEFT: "X_XXO_OOX",
        PLAY_X_MIDDLE_RIGHT: "X_X_OXOOX"
      }
    },
    X_X_O_O_X: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_O_O_X",
        PLAY_O_MIDDLE_LEFT: "X_XOO_O_X",
        PLAY_O_MIDDLE_RIGHT: "X_X_OOO_X",
        PLAY_O_BOTTOM_CENTER: "X_X_O_OOX"
      }
    },
    X_X_O_O__: {
      on: {
        PLAY_X_TOP_CENTER: "XXX_O_O__",
        PLAY_X_MIDDLE_LEFT: "X_XXO_O__",
        PLAY_X_MIDDLE_RIGHT: "X_X_OXO__",
        PLAY_X_BOTTOM_CENTER: "X_X_O_OX_",
        PLAY_X_BOTTOM_RIGHT: "X_X_O_O_X"
      }
    },
    X_XXOX_OO: {
      on: { PLAY_O_TOP_CENTER: "XOXXOX_OO", PLAY_O_BOTTOM_LEFT: "X_XXOXOOO" }
    },
    X_XXO_XOO: { on: { "": "X_WINS" } },
    X_XXO__OO: {
      on: {
        PLAY_X_TOP_CENTER: "XXXXO__OO",
        PLAY_X_MIDDLE_RIGHT: "X_XXOX_OO",
        PLAY_X_BOTTOM_LEFT: "X_XXO_XOO"
      }
    },
    X_XXO__O_: {
      on: {
        PLAY_O_TOP_CENTER: "XOXXO__O_",
        PLAY_O_MIDDLE_RIGHT: "X_XXOO_O_",
        PLAY_O_BOTTOM_LEFT: "X_XXO_OO_",
        PLAY_O_BOTTOM_RIGHT: "X_XXO__OO"
      }
    },
    X_X_OXXOO: {
      on: { PLAY_O_TOP_CENTER: "XOX_OXXOO", PLAY_O_MIDDLE_LEFT: "X_XOOXXOO" }
    },
    X_X_OX_OO: {
      on: {
        PLAY_X_TOP_CENTER: "XXX_OX_OO",
        PLAY_X_MIDDLE_LEFT: "X_XXOX_OO",
        PLAY_X_BOTTOM_LEFT: "X_X_OXXOO"
      }
    },
    X_X_OX_O_: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_OX_O_",
        PLAY_O_MIDDLE_LEFT: "X_XOOX_O_",
        PLAY_O_BOTTOM_LEFT: "X_X_OXOO_",
        PLAY_O_BOTTOM_RIGHT: "X_X_OX_OO"
      }
    },
    X_X_O_XOO: {
      on: {
        PLAY_X_TOP_CENTER: "XXX_O_XOO",
        PLAY_X_MIDDLE_LEFT: "X_XXO_XOO",
        PLAY_X_MIDDLE_RIGHT: "X_X_OXXOO"
      }
    },
    X_X_O_XO_: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_O_XO_",
        PLAY_O_MIDDLE_LEFT: "X_XOO_XO_",
        PLAY_O_MIDDLE_RIGHT: "X_X_OOXO_",
        PLAY_O_BOTTOM_RIGHT: "X_X_O_XOO"
      }
    },
    X_X_O__OX: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_O__OX",
        PLAY_O_MIDDLE_LEFT: "X_XOO__OX",
        PLAY_O_MIDDLE_RIGHT: "X_X_OO_OX",
        PLAY_O_BOTTOM_LEFT: "X_X_O_OOX"
      }
    },
    X_X_O__O_: {
      on: {
        PLAY_X_TOP_CENTER: "XXX_O__O_",
        PLAY_X_MIDDLE_LEFT: "X_XXO__O_",
        PLAY_X_MIDDLE_RIGHT: "X_X_OX_O_",
        PLAY_X_BOTTOM_LEFT: "X_X_O_XO_",
        PLAY_X_BOTTOM_RIGHT: "X_X_O__OX"
      }
    },
    X_XXO___O: {
      on: {
        PLAY_O_TOP_CENTER: "XOXXO___O",
        PLAY_O_MIDDLE_RIGHT: "X_XXOO__O",
        PLAY_O_BOTTOM_LEFT: "X_XXO_O_O",
        PLAY_O_BOTTOM_CENTER: "X_XXO__OO"
      }
    },
    X_X_OX__O: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_OX__O",
        PLAY_O_MIDDLE_LEFT: "X_XOOX__O",
        PLAY_O_BOTTOM_LEFT: "X_X_OXO_O",
        PLAY_O_BOTTOM_CENTER: "X_X_OX_OO"
      }
    },
    X_X_O_X_O: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_O_X_O",
        PLAY_O_MIDDLE_LEFT: "X_XOO_X_O",
        PLAY_O_MIDDLE_RIGHT: "X_X_OOX_O",
        PLAY_O_BOTTOM_CENTER: "X_X_O_XOO"
      }
    },
    X_X_O__XO: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_O__XO",
        PLAY_O_MIDDLE_LEFT: "X_XOO__XO",
        PLAY_O_MIDDLE_RIGHT: "X_X_OO_XO",
        PLAY_O_BOTTOM_LEFT: "X_X_O_OXO"
      }
    },
    X_X_O___O: {
      on: {
        PLAY_X_TOP_CENTER: "XXX_O___O",
        PLAY_X_MIDDLE_LEFT: "X_XXO___O",
        PLAY_X_MIDDLE_RIGHT: "X_X_OX__O",
        PLAY_X_BOTTOM_LEFT: "X_X_O_X_O",
        PLAY_X_BOTTOM_CENTER: "X_X_O__XO"
      }
    },
    X_X_O____: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_O____",
        PLAY_O_MIDDLE_LEFT: "X_XOO____",
        PLAY_O_MIDDLE_RIGHT: "X_X_OO___",
        PLAY_O_BOTTOM_LEFT: "X_X_O_O__",
        PLAY_O_BOTTOM_CENTER: "X_X_O__O_",
        PLAY_O_BOTTOM_RIGHT: "X_X_O___O"
      }
    },
    X__XOOX__: { on: { "": "X_WINS" } },
    X__XOOOXX: {
      on: { PLAY_O_TOP_CENTER: "XO_XOOOXX", PLAY_O_TOP_RIGHT: "X_OXOOOXX" }
    },
    X__XOOOX_: {
      on: {
        PLAY_X_TOP_CENTER: "XX_XOOOX_",
        PLAY_X_TOP_RIGHT: "X_XXOOOX_",
        PLAY_X_BOTTOM_RIGHT: "X__XOOOXX"
      }
    },
    X__XOOXXO: { on: { "": "X_WINS" } },
    X__XOO_XO: {
      on: {
        PLAY_X_TOP_CENTER: "XX_XOO_XO",
        PLAY_X_TOP_RIGHT: "X_XXOO_XO",
        PLAY_X_BOTTOM_LEFT: "X__XOOXXO"
      }
    },
    X__XOO_X_: {
      on: {
        PLAY_O_TOP_CENTER: "XO_XOO_X_",
        PLAY_O_TOP_RIGHT: "X_OXOO_X_",
        PLAY_O_BOTTOM_LEFT: "X__XOOOX_",
        PLAY_O_BOTTOM_RIGHT: "X__XOO_XO"
      }
    },
    X__XOOO_X: {
      on: {
        PLAY_X_TOP_CENTER: "XX_XOOO_X",
        PLAY_X_TOP_RIGHT: "X_XXOOO_X",
        PLAY_X_BOTTOM_CENTER: "X__XOOOXX"
      }
    },
    X__XOOXOX: { on: { "": "X_WINS" } },
    X__XOO_OX: {
      on: {
        PLAY_X_TOP_CENTER: "XX_XOO_OX",
        PLAY_X_TOP_RIGHT: "X_XXOO_OX",
        PLAY_X_BOTTOM_LEFT: "X__XOOXOX"
      }
    },
    X__XOO__X: {
      on: {
        PLAY_O_TOP_CENTER: "XO_XOO__X",
        PLAY_O_TOP_RIGHT: "X_OXOO__X",
        PLAY_O_BOTTOM_LEFT: "X__XOOO_X",
        PLAY_O_BOTTOM_CENTER: "X__XOO_OX"
      }
    },
    X__XOO___: {
      on: {
        PLAY_X_TOP_CENTER: "XX_XOO___",
        PLAY_X_TOP_RIGHT: "X_XXOO___",
        PLAY_X_BOTTOM_LEFT: "X__XOOX__",
        PLAY_X_BOTTOM_CENTER: "X__XOO_X_",
        PLAY_X_BOTTOM_RIGHT: "X__XOO__X"
      }
    },
    X__XOXOOX: {
      on: { PLAY_O_TOP_CENTER: "XO_XOXOOX", PLAY_O_TOP_RIGHT: "X_OXOXOOX" }
    },
    X__XOXOO_: {
      on: {
        PLAY_X_TOP_CENTER: "XX_XOXOO_",
        PLAY_X_TOP_RIGHT: "X_XXOXOO_",
        PLAY_X_BOTTOM_RIGHT: "X__XOXOOX"
      }
    },
    X__XOXOXO: {
      on: { PLAY_O_TOP_CENTER: "XO_XOXOXO", PLAY_O_TOP_RIGHT: "X_OXOXOXO" }
    },
    X__XOXO_O: {
      on: {
        PLAY_X_TOP_CENTER: "XX_XOXO_O",
        PLAY_X_TOP_RIGHT: "X_XXOXO_O",
        PLAY_X_BOTTOM_CENTER: "X__XOXOXO"
      }
    },
    X__XOXO__: {
      on: {
        PLAY_O_TOP_CENTER: "XO_XOXO__",
        PLAY_O_TOP_RIGHT: "X_OXOXO__",
        PLAY_O_BOTTOM_CENTER: "X__XOXOO_",
        PLAY_O_BOTTOM_RIGHT: "X__XOXO_O"
      }
    },
    X__XO_OXO: {
      on: {
        PLAY_X_TOP_CENTER: "XX_XO_OXO",
        PLAY_X_TOP_RIGHT: "X_XXO_OXO",
        PLAY_X_MIDDLE_RIGHT: "X__XOXOXO"
      }
    },
    X__XO_OX_: {
      on: {
        PLAY_O_TOP_CENTER: "XO_XO_OX_",
        PLAY_O_TOP_RIGHT: "X_OXO_OX_",
        PLAY_O_MIDDLE_RIGHT: "X__XOOOX_",
        PLAY_O_BOTTOM_RIGHT: "X__XO_OXO"
      }
    },
    X__XO_OOX: {
      on: {
        PLAY_X_TOP_CENTER: "XX_XO_OOX",
        PLAY_X_TOP_RIGHT: "X_XXO_OOX",
        PLAY_X_MIDDLE_RIGHT: "X__XOXOOX"
      }
    },
    X__XO_O_X: {
      on: {
        PLAY_O_TOP_CENTER: "XO_XO_O_X",
        PLAY_O_TOP_RIGHT: "X_OXO_O_X",
        PLAY_O_MIDDLE_RIGHT: "X__XOOO_X",
        PLAY_O_BOTTOM_CENTER: "X__XO_OOX"
      }
    },
    X__XO_O__: {
      on: {
        PLAY_X_TOP_CENTER: "XX_XO_O__",
        PLAY_X_TOP_RIGHT: "X_XXO_O__",
        PLAY_X_MIDDLE_RIGHT: "X__XOXO__",
        PLAY_X_BOTTOM_CENTER: "X__XO_OX_",
        PLAY_X_BOTTOM_RIGHT: "X__XO_O_X"
      }
    },
    X__XOXXOO: { on: { "": "X_WINS" } },
    X__XOX_OO: {
      on: {
        PLAY_X_TOP_CENTER: "XX_XOX_OO",
        PLAY_X_TOP_RIGHT: "X_XXOX_OO",
        PLAY_X_BOTTOM_LEFT: "X__XOXXOO"
      }
    },
    X__XOX_O_: {
      on: {
        PLAY_O_TOP_CENTER: "XO_XOX_O_",
        PLAY_O_TOP_RIGHT: "X_OXOX_O_",
        PLAY_O_BOTTOM_LEFT: "X__XOXOO_",
        PLAY_O_BOTTOM_RIGHT: "X__XOX_OO"
      }
    },
    X__XO_XO_: { on: { "": "X_WINS" } },
    X__XO__OX: {
      on: {
        PLAY_O_TOP_CENTER: "XO_XO__OX",
        PLAY_O_TOP_RIGHT: "X_OXO__OX",
        PLAY_O_MIDDLE_RIGHT: "X__XOO_OX",
        PLAY_O_BOTTOM_LEFT: "X__XO_OOX"
      }
    },
    X__XO__O_: {
      on: {
        PLAY_X_TOP_CENTER: "XX_XO__O_",
        PLAY_X_TOP_RIGHT: "X_XXO__O_",
        PLAY_X_MIDDLE_RIGHT: "X__XOX_O_",
        PLAY_X_BOTTOM_LEFT: "X__XO_XO_",
        PLAY_X_BOTTOM_RIGHT: "X__XO__OX"
      }
    },
    X__XOX__O: {
      on: {
        PLAY_O_TOP_CENTER: "XO_XOX__O",
        PLAY_O_TOP_RIGHT: "X_OXOX__O",
        PLAY_O_BOTTOM_LEFT: "X__XOXO_O",
        PLAY_O_BOTTOM_CENTER: "X__XOX_OO"
      }
    },
    X__XO_X_O: { on: { "": "X_WINS" } },
    X__XO__XO: {
      on: {
        PLAY_O_TOP_CENTER: "XO_XO__XO",
        PLAY_O_TOP_RIGHT: "X_OXO__XO",
        PLAY_O_MIDDLE_RIGHT: "X__XOO_XO",
        PLAY_O_BOTTOM_LEFT: "X__XO_OXO"
      }
    },
    X__XO___O: {
      on: {
        PLAY_X_TOP_CENTER: "XX_XO___O",
        PLAY_X_TOP_RIGHT: "X_XXO___O",
        PLAY_X_MIDDLE_RIGHT: "X__XOX__O",
        PLAY_X_BOTTOM_LEFT: "X__XO_X_O",
        PLAY_X_BOTTOM_CENTER: "X__XO__XO"
      }
    },
    X__XO____: {
      on: {
        PLAY_O_TOP_CENTER: "XO_XO____",
        PLAY_O_TOP_RIGHT: "X_OXO____",
        PLAY_O_MIDDLE_RIGHT: "X__XOO___",
        PLAY_O_BOTTOM_LEFT: "X__XO_O__",
        PLAY_O_BOTTOM_CENTER: "X__XO__O_",
        PLAY_O_BOTTOM_RIGHT: "X__XO___O"
      }
    },
    X___OXOXO: {
      on: {
        PLAY_X_TOP_CENTER: "XX__OXOXO",
        PLAY_X_TOP_RIGHT: "X_X_OXOXO",
        PLAY_X_MIDDLE_LEFT: "X__XOXOXO"
      }
    },
    X___OXOX_: {
      on: {
        PLAY_O_TOP_CENTER: "XO__OXOX_",
        PLAY_O_TOP_RIGHT: "X_O_OXOX_",
        PLAY_O_MIDDLE_LEFT: "X__OOXOX_",
        PLAY_O_BOTTOM_RIGHT: "X___OXOXO"
      }
    },
    X___OXOOX: {
      on: {
        PLAY_X_TOP_CENTER: "XX__OXOOX",
        PLAY_X_TOP_RIGHT: "X_X_OXOOX",
        PLAY_X_MIDDLE_LEFT: "X__XOXOOX"
      }
    },
    X___OXO_X: {
      on: {
        PLAY_O_TOP_CENTER: "XO__OXO_X",
        PLAY_O_TOP_RIGHT: "X_O_OXO_X",
        PLAY_O_MIDDLE_LEFT: "X__OOXO_X",
        PLAY_O_BOTTOM_CENTER: "X___OXOOX"
      }
    },
    X___OXO__: {
      on: {
        PLAY_X_TOP_CENTER: "XX__OXO__",
        PLAY_X_TOP_RIGHT: "X_X_OXO__",
        PLAY_X_MIDDLE_LEFT: "X__XOXO__",
        PLAY_X_BOTTOM_CENTER: "X___OXOX_",
        PLAY_X_BOTTOM_RIGHT: "X___OXO_X"
      }
    },
    X___OXXOO: {
      on: {
        PLAY_X_TOP_CENTER: "XX__OXXOO",
        PLAY_X_TOP_RIGHT: "X_X_OXXOO",
        PLAY_X_MIDDLE_LEFT: "X__XOXXOO"
      }
    },
    X___OXXO_: {
      on: {
        PLAY_O_TOP_CENTER: "XO__OXXO_",
        PLAY_O_TOP_RIGHT: "X_O_OXXO_",
        PLAY_O_MIDDLE_LEFT: "X__OOXXO_",
        PLAY_O_BOTTOM_RIGHT: "X___OXXOO"
      }
    },
    X___OX_OX: {
      on: {
        PLAY_O_TOP_CENTER: "XO__OX_OX",
        PLAY_O_TOP_RIGHT: "X_O_OX_OX",
        PLAY_O_MIDDLE_LEFT: "X__OOX_OX",
        PLAY_O_BOTTOM_LEFT: "X___OXOOX"
      }
    },
    X___OX_O_: {
      on: {
        PLAY_X_TOP_CENTER: "XX__OX_O_",
        PLAY_X_TOP_RIGHT: "X_X_OX_O_",
        PLAY_X_MIDDLE_LEFT: "X__XOX_O_",
        PLAY_X_BOTTOM_LEFT: "X___OXXO_",
        PLAY_X_BOTTOM_RIGHT: "X___OX_OX"
      }
    },
    X___OXX_O: {
      on: {
        PLAY_O_TOP_CENTER: "XO__OXX_O",
        PLAY_O_TOP_RIGHT: "X_O_OXX_O",
        PLAY_O_MIDDLE_LEFT: "X__OOXX_O",
        PLAY_O_BOTTOM_CENTER: "X___OXXOO"
      }
    },
    X___OX_XO: {
      on: {
        PLAY_O_TOP_CENTER: "XO__OX_XO",
        PLAY_O_TOP_RIGHT: "X_O_OX_XO",
        PLAY_O_MIDDLE_LEFT: "X__OOX_XO",
        PLAY_O_BOTTOM_LEFT: "X___OXOXO"
      }
    },
    X___OX__O: {
      on: {
        PLAY_X_TOP_CENTER: "XX__OX__O",
        PLAY_X_TOP_RIGHT: "X_X_OX__O",
        PLAY_X_MIDDLE_LEFT: "X__XOX__O",
        PLAY_X_BOTTOM_LEFT: "X___OXX_O",
        PLAY_X_BOTTOM_CENTER: "X___OX_XO"
      }
    },
    X___OX___: {
      on: {
        PLAY_O_TOP_CENTER: "XO__OX___",
        PLAY_O_TOP_RIGHT: "X_O_OX___",
        PLAY_O_MIDDLE_LEFT: "X__OOX___",
        PLAY_O_BOTTOM_LEFT: "X___OXO__",
        PLAY_O_BOTTOM_CENTER: "X___OX_O_",
        PLAY_O_BOTTOM_RIGHT: "X___OX__O"
      }
    },
    X___OOXXO: {
      on: {
        PLAY_X_TOP_CENTER: "XX__OOXXO",
        PLAY_X_TOP_RIGHT: "X_X_OOXXO",
        PLAY_X_MIDDLE_LEFT: "X__XOOXXO"
      }
    },
    X___OOXX_: {
      on: {
        PLAY_O_TOP_CENTER: "XO__OOXX_",
        PLAY_O_TOP_RIGHT: "X_O_OOXX_",
        PLAY_O_MIDDLE_LEFT: "X__OOOXX_",
        PLAY_O_BOTTOM_RIGHT: "X___OOXXO"
      }
    },
    X___OOXOX: {
      on: {
        PLAY_X_TOP_CENTER: "XX__OOXOX",
        PLAY_X_TOP_RIGHT: "X_X_OOXOX",
        PLAY_X_MIDDLE_LEFT: "X__XOOXOX"
      }
    },
    X___OOX_X: {
      on: {
        PLAY_O_TOP_CENTER: "XO__OOX_X",
        PLAY_O_TOP_RIGHT: "X_O_OOX_X",
        PLAY_O_MIDDLE_LEFT: "X__OOOX_X",
        PLAY_O_BOTTOM_CENTER: "X___OOXOX"
      }
    },
    X___OOX__: {
      on: {
        PLAY_X_TOP_CENTER: "XX__OOX__",
        PLAY_X_TOP_RIGHT: "X_X_OOX__",
        PLAY_X_MIDDLE_LEFT: "X__XOOX__",
        PLAY_X_BOTTOM_CENTER: "X___OOXX_",
        PLAY_X_BOTTOM_RIGHT: "X___OOX_X"
      }
    },
    X___O_XOX: {
      on: {
        PLAY_O_TOP_CENTER: "XO__O_XOX",
        PLAY_O_TOP_RIGHT: "X_O_O_XOX",
        PLAY_O_MIDDLE_LEFT: "X__OO_XOX",
        PLAY_O_MIDDLE_RIGHT: "X___OOXOX"
      }
    },
    X___O_XO_: {
      on: {
        PLAY_X_TOP_CENTER: "XX__O_XO_",
        PLAY_X_TOP_RIGHT: "X_X_O_XO_",
        PLAY_X_MIDDLE_LEFT: "X__XO_XO_",
        PLAY_X_MIDDLE_RIGHT: "X___OXXO_",
        PLAY_X_BOTTOM_RIGHT: "X___O_XOX"
      }
    },
    X___O_XXO: {
      on: {
        PLAY_O_TOP_CENTER: "XO__O_XXO",
        PLAY_O_TOP_RIGHT: "X_O_O_XXO",
        PLAY_O_MIDDLE_LEFT: "X__OO_XXO",
        PLAY_O_MIDDLE_RIGHT: "X___OOXXO"
      }
    },
    X___O_X_O: {
      on: {
        PLAY_X_TOP_CENTER: "XX__O_X_O",
        PLAY_X_TOP_RIGHT: "X_X_O_X_O",
        PLAY_X_MIDDLE_LEFT: "X__XO_X_O",
        PLAY_X_MIDDLE_RIGHT: "X___OXX_O",
        PLAY_X_BOTTOM_CENTER: "X___O_XXO"
      }
    },
    X___O_X__: {
      on: {
        PLAY_O_TOP_CENTER: "XO__O_X__",
        PLAY_O_TOP_RIGHT: "X_O_O_X__",
        PLAY_O_MIDDLE_LEFT: "X__OO_X__",
        PLAY_O_MIDDLE_RIGHT: "X___OOX__",
        PLAY_O_BOTTOM_CENTER: "X___O_XO_",
        PLAY_O_BOTTOM_RIGHT: "X___O_X_O"
      }
    },
    X___OOOXX: {
      on: {
        PLAY_X_TOP_CENTER: "XX__OOOXX",
        PLAY_X_TOP_RIGHT: "X_X_OOOXX",
        PLAY_X_MIDDLE_LEFT: "X__XOOOXX"
      }
    },
    X___OO_XX: {
      on: {
        PLAY_O_TOP_CENTER: "XO__OO_XX",
        PLAY_O_TOP_RIGHT: "X_O_OO_XX",
        PLAY_O_MIDDLE_LEFT: "X__OOO_XX",
        PLAY_O_BOTTOM_LEFT: "X___OOOXX"
      }
    },
    X___OO_X_: {
      on: {
        PLAY_X_TOP_CENTER: "XX__OO_X_",
        PLAY_X_TOP_RIGHT: "X_X_OO_X_",
        PLAY_X_MIDDLE_LEFT: "X__XOO_X_",
        PLAY_X_BOTTOM_LEFT: "X___OOXX_",
        PLAY_X_BOTTOM_RIGHT: "X___OO_XX"
      }
    },
    X___O_OXX: {
      on: {
        PLAY_O_TOP_CENTER: "XO__O_OXX",
        PLAY_O_TOP_RIGHT: "X_O_O_OXX",
        PLAY_O_MIDDLE_LEFT: "X__OO_OXX",
        PLAY_O_MIDDLE_RIGHT: "X___OOOXX"
      }
    },
    X___O_OX_: {
      on: {
        PLAY_X_TOP_CENTER: "XX__O_OX_",
        PLAY_X_TOP_RIGHT: "X_X_O_OX_",
        PLAY_X_MIDDLE_LEFT: "X__XO_OX_",
        PLAY_X_MIDDLE_RIGHT: "X___OXOX_",
        PLAY_X_BOTTOM_RIGHT: "X___O_OXX"
      }
    },
    X___O__XO: {
      on: {
        PLAY_X_TOP_CENTER: "XX__O__XO",
        PLAY_X_TOP_RIGHT: "X_X_O__XO",
        PLAY_X_MIDDLE_LEFT: "X__XO__XO",
        PLAY_X_MIDDLE_RIGHT: "X___OX_XO",
        PLAY_X_BOTTOM_LEFT: "X___O_XXO"
      }
    },
    X___O__X_: {
      on: {
        PLAY_O_TOP_CENTER: "XO__O__X_",
        PLAY_O_TOP_RIGHT: "X_O_O__X_",
        PLAY_O_MIDDLE_LEFT: "X__OO__X_",
        PLAY_O_MIDDLE_RIGHT: "X___OO_X_",
        PLAY_O_BOTTOM_LEFT: "X___O_OX_",
        PLAY_O_BOTTOM_RIGHT: "X___O__XO"
      }
    },
    X___OO__X: {
      on: {
        PLAY_X_TOP_CENTER: "XX__OO__X",
        PLAY_X_TOP_RIGHT: "X_X_OO__X",
        PLAY_X_MIDDLE_LEFT: "X__XOO__X",
        PLAY_X_BOTTOM_LEFT: "X___OOX_X",
        PLAY_X_BOTTOM_CENTER: "X___OO_XX"
      }
    },
    X___O_O_X: {
      on: {
        PLAY_X_TOP_CENTER: "XX__O_O_X",
        PLAY_X_TOP_RIGHT: "X_X_O_O_X",
        PLAY_X_MIDDLE_LEFT: "X__XO_O_X",
        PLAY_X_MIDDLE_RIGHT: "X___OXO_X",
        PLAY_X_BOTTOM_CENTER: "X___O_OXX"
      }
    },
    X___O__OX: {
      on: {
        PLAY_X_TOP_CENTER: "XX__O__OX",
        PLAY_X_TOP_RIGHT: "X_X_O__OX",
        PLAY_X_MIDDLE_LEFT: "X__XO__OX",
        PLAY_X_MIDDLE_RIGHT: "X___OX_OX",
        PLAY_X_BOTTOM_LEFT: "X___O_XOX"
      }
    },
    X___O___X: {
      on: {
        PLAY_O_TOP_CENTER: "XO__O___X",
        PLAY_O_TOP_RIGHT: "X_O_O___X",
        PLAY_O_MIDDLE_LEFT: "X__OO___X",
        PLAY_O_MIDDLE_RIGHT: "X___OO__X",
        PLAY_O_BOTTOM_LEFT: "X___O_O_X",
        PLAY_O_BOTTOM_CENTER: "X___O__OX"
      }
    },
    X___O____: {
      on: {
        PLAY_X_TOP_CENTER: "XX__O____",
        PLAY_X_TOP_RIGHT: "X_X_O____",
        PLAY_X_MIDDLE_LEFT: "X__XO____",
        PLAY_X_MIDDLE_RIGHT: "X___OX___",
        PLAY_X_BOTTOM_LEFT: "X___O_X__",
        PLAY_X_BOTTOM_CENTER: "X___O__X_",
        PLAY_X_BOTTOM_RIGHT: "X___O___X"
      }
    },
    XXX__OO__: { on: { "": "X_WINS" } },
    XXXX_OOO_: { on: { "": "X_WINS" } },
    XX_XXOOOO: { on: { "": "O_WINS" } },
    XX_XXOOO_: {
      on: { PLAY_O_TOP_RIGHT: "XXOXXOOO_", PLAY_O_BOTTOM_RIGHT: "XX_XXOOOO" }
    },
    XX_X_OOOX: {
      on: { PLAY_O_TOP_RIGHT: "XXOX_OOOX", PLAY_O_CENTER: "XX_XOOOOX" }
    },
    XX_X_OOO_: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXX_OOO_",
        PLAY_X_CENTER: "XX_XXOOO_",
        PLAY_X_BOTTOM_RIGHT: "XX_X_OOOX"
      }
    },
    XXXX_OO_O: { on: { "": "X_WINS" } },
    XX_XXOO_O: {
      on: { PLAY_O_TOP_RIGHT: "XXOXXOO_O", PLAY_O_BOTTOM_CENTER: "XX_XXOOOO" }
    },
    XX_X_OOXO: {
      on: { PLAY_O_TOP_RIGHT: "XXOX_OOXO", PLAY_O_CENTER: "XX_XOOOXO" }
    },
    XX_X_OO_O: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXX_OO_O",
        PLAY_X_CENTER: "XX_XXOO_O",
        PLAY_X_BOTTOM_CENTER: "XX_X_OOXO"
      }
    },
    XX_X_OO__: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOX_OO__",
        PLAY_O_CENTER: "XX_XOOO__",
        PLAY_O_BOTTOM_CENTER: "XX_X_OOO_",
        PLAY_O_BOTTOM_RIGHT: "XX_X_OO_O"
      }
    },
    XXX_XOOO_: { on: { "": "X_WINS" } },
    XX__XOOOX: { on: { "": "X_WINS" } },
    XX__XOOO_: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX_XOOO_",
        PLAY_X_MIDDLE_LEFT: "XX_XXOOO_",
        PLAY_X_BOTTOM_RIGHT: "XX__XOOOX"
      }
    },
    XXX_XOO_O: { on: { "": "X_WINS" } },
    XX__XOOXO: { on: { "": "X_WINS" } },
    XX__XOO_O: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX_XOO_O",
        PLAY_X_MIDDLE_LEFT: "XX_XXOO_O",
        PLAY_X_BOTTOM_CENTER: "XX__XOOXO"
      }
    },
    XX__XOO__: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_XOO__",
        PLAY_O_MIDDLE_LEFT: "XX_OXOO__",
        PLAY_O_BOTTOM_CENTER: "XX__XOOO_",
        PLAY_O_BOTTOM_RIGHT: "XX__XOO_O"
      }
    },
    XXX__OOXO: { on: { "": "X_WINS" } },
    XX___OOXO: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX__OOXO",
        PLAY_X_MIDDLE_LEFT: "XX_X_OOXO",
        PLAY_X_CENTER: "XX__XOOXO"
      }
    },
    XX___OOX_: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO__OOX_",
        PLAY_O_MIDDLE_LEFT: "XX_O_OOX_",
        PLAY_O_CENTER: "XX__OOOX_",
        PLAY_O_BOTTOM_RIGHT: "XX___OOXO"
      }
    },
    XXX__OOOX: { on: { "": "X_WINS" } },
    XX___OOOX: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX__OOOX",
        PLAY_X_MIDDLE_LEFT: "XX_X_OOOX",
        PLAY_X_CENTER: "XX__XOOOX"
      }
    },
    XX___OO_X: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO__OO_X",
        PLAY_O_MIDDLE_LEFT: "XX_O_OO_X",
        PLAY_O_CENTER: "XX__OOO_X",
        PLAY_O_BOTTOM_CENTER: "XX___OOOX"
      }
    },
    XX___OO__: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX__OO__",
        PLAY_X_MIDDLE_LEFT: "XX_X_OO__",
        PLAY_X_CENTER: "XX__XOO__",
        PLAY_X_BOTTOM_CENTER: "XX___OOX_",
        PLAY_X_BOTTOM_RIGHT: "XX___OO_X"
      }
    },
    XXX__O_O_: { on: { "": "X_WINS" } },
    XXXX_O_OO: { on: { "": "X_WINS" } },
    XX_XXO_OO: {
      on: { PLAY_O_TOP_RIGHT: "XXOXXO_OO", PLAY_O_BOTTOM_LEFT: "XX_XXOOOO" }
    },
    XX_X_OXOO: { on: { "": "X_WINS" } },
    XX_X_O_OO: {
      on: {
        PLAY_X_TOP_RIGHT: "XXXX_O_OO",
        PLAY_X_CENTER: "XX_XXO_OO",
        PLAY_X_BOTTOM_LEFT: "XX_X_OXOO"
      }
    },
    XX_X_O_O_: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOX_O_O_",
        PLAY_O_CENTER: "XX_XOO_O_",
        PLAY_O_BOTTOM_LEFT: "XX_X_OOO_",
        PLAY_O_BOTTOM_RIGHT: "XX_X_O_OO"
      }
    },
    XXX_XO_OO: { on: { "": "X_WINS" } },
    XX__XOXOO: {
      on: { PLAY_O_TOP_RIGHT: "XXO_XOXOO", PLAY_O_MIDDLE_LEFT: "XX_OXOXOO" }
    },
    XX__XO_OO: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX_XO_OO",
        PLAY_X_MIDDLE_LEFT: "XX_XXO_OO",
        PLAY_X_BOTTOM_LEFT: "XX__XOXOO"
      }
    },
    XX__XO_O_: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_XO_O_",
        PLAY_O_MIDDLE_LEFT: "XX_OXO_O_",
        PLAY_O_BOTTOM_LEFT: "XX__XOOO_",
        PLAY_O_BOTTOM_RIGHT: "XX__XO_OO"
      }
    },
    XXX__OXOO: { on: { "": "X_WINS" } },
    XX___OXOO: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX__OXOO",
        PLAY_X_MIDDLE_LEFT: "XX_X_OXOO",
        PLAY_X_CENTER: "XX__XOXOO"
      }
    },
    XX___OXO_: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO__OXO_",
        PLAY_O_MIDDLE_LEFT: "XX_O_OXO_",
        PLAY_O_CENTER: "XX__OOXO_",
        PLAY_O_BOTTOM_RIGHT: "XX___OXOO"
      }
    },
    XX___O_OX: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO__O_OX",
        PLAY_O_MIDDLE_LEFT: "XX_O_O_OX",
        PLAY_O_CENTER: "XX__OO_OX",
        PLAY_O_BOTTOM_LEFT: "XX___OOOX"
      }
    },
    XX___O_O_: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX__O_O_",
        PLAY_X_MIDDLE_LEFT: "XX_X_O_O_",
        PLAY_X_CENTER: "XX__XO_O_",
        PLAY_X_BOTTOM_LEFT: "XX___OXO_",
        PLAY_X_BOTTOM_RIGHT: "XX___O_OX"
      }
    },
    XXX__O__O: { on: { "": "X_WINS" } },
    XX_X_O__O: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOX_O__O",
        PLAY_O_CENTER: "XX_XOO__O",
        PLAY_O_BOTTOM_LEFT: "XX_X_OO_O",
        PLAY_O_BOTTOM_CENTER: "XX_X_O_OO"
      }
    },
    XX__XO__O: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_XO__O",
        PLAY_O_MIDDLE_LEFT: "XX_OXO__O",
        PLAY_O_BOTTOM_LEFT: "XX__XOO_O",
        PLAY_O_BOTTOM_CENTER: "XX__XO_OO"
      }
    },
    XX___OX_O: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO__OX_O",
        PLAY_O_MIDDLE_LEFT: "XX_O_OX_O",
        PLAY_O_CENTER: "XX__OOX_O",
        PLAY_O_BOTTOM_CENTER: "XX___OXOO"
      }
    },
    XX___O_XO: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO__O_XO",
        PLAY_O_MIDDLE_LEFT: "XX_O_O_XO",
        PLAY_O_CENTER: "XX__OO_XO",
        PLAY_O_BOTTOM_LEFT: "XX___OOXO"
      }
    },
    XX___O__O: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX__O__O",
        PLAY_X_MIDDLE_LEFT: "XX_X_O__O",
        PLAY_X_CENTER: "XX__XO__O",
        PLAY_X_BOTTOM_LEFT: "XX___OX_O",
        PLAY_X_BOTTOM_CENTER: "XX___O_XO"
      }
    },
    XX___O___: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO__O___",
        PLAY_O_MIDDLE_LEFT: "XX_O_O___",
        PLAY_O_CENTER: "XX__OO___",
        PLAY_O_BOTTOM_LEFT: "XX___OO__",
        PLAY_O_BOTTOM_CENTER: "XX___O_O_",
        PLAY_O_BOTTOM_RIGHT: "XX___O__O"
      }
    },
    X_XXXOOOO: { on: { "": "O_WINS" } },
    X_XXXOOO_: {
      on: { PLAY_O_TOP_CENTER: "XOXXXOOO_", PLAY_O_BOTTOM_RIGHT: "X_XXXOOOO" }
    },
    X_XX_OOOX: {
      on: { PLAY_O_TOP_CENTER: "XOXX_OOOX", PLAY_O_CENTER: "X_XXOOOOX" }
    },
    X_XX_OOO_: {
      on: {
        PLAY_X_TOP_CENTER: "XXXX_OOO_",
        PLAY_X_CENTER: "X_XXXOOO_",
        PLAY_X_BOTTOM_RIGHT: "X_XX_OOOX"
      }
    },
    X_XXXOO_O: {
      on: {
        PLAY_O_TOP_CENTER: "XOXXXOO_O",
        PLAY_O_BOTTOM_CENTER: "X_XXXOOOO"
      }
    },
    X_XX_OOXO: {
      on: { PLAY_O_TOP_CENTER: "XOXX_OOXO", PLAY_O_CENTER: "X_XXOOOXO" }
    },
    X_XX_OO_O: {
      on: {
        PLAY_X_TOP_CENTER: "XXXX_OO_O",
        PLAY_X_CENTER: "X_XXXOO_O",
        PLAY_X_BOTTOM_CENTER: "X_XX_OOXO"
      }
    },
    X_XX_OO__: {
      on: {
        PLAY_O_TOP_CENTER: "XOXX_OO__",
        PLAY_O_CENTER: "X_XXOOO__",
        PLAY_O_BOTTOM_CENTER: "X_XX_OOO_",
        PLAY_O_BOTTOM_RIGHT: "X_XX_OO_O"
      }
    },
    X_X_XOOOX: { on: { "": "X_WINS" } },
    X_X_XOOO_: {
      on: {
        PLAY_X_TOP_CENTER: "XXX_XOOO_",
        PLAY_X_MIDDLE_LEFT: "X_XXXOOO_",
        PLAY_X_BOTTOM_RIGHT: "X_X_XOOOX"
      }
    },
    X_X_XOOXO: {
      on: { PLAY_O_TOP_CENTER: "XOX_XOOXO", PLAY_O_MIDDLE_LEFT: "X_XOXOOXO" }
    },
    X_X_XOO_O: {
      on: {
        PLAY_X_TOP_CENTER: "XXX_XOO_O",
        PLAY_X_MIDDLE_LEFT: "X_XXXOO_O",
        PLAY_X_BOTTOM_CENTER: "X_X_XOOXO"
      }
    },
    X_X_XOO__: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_XOO__",
        PLAY_O_MIDDLE_LEFT: "X_XOXOO__",
        PLAY_O_BOTTOM_CENTER: "X_X_XOOO_",
        PLAY_O_BOTTOM_RIGHT: "X_X_XOO_O"
      }
    },
    X_X__OOXO: {
      on: {
        PLAY_X_TOP_CENTER: "XXX__OOXO",
        PLAY_X_MIDDLE_LEFT: "X_XX_OOXO",
        PLAY_X_CENTER: "X_X_XOOXO"
      }
    },
    X_X__OOX_: {
      on: {
        PLAY_O_TOP_CENTER: "XOX__OOX_",
        PLAY_O_MIDDLE_LEFT: "X_XO_OOX_",
        PLAY_O_CENTER: "X_X_OOOX_",
        PLAY_O_BOTTOM_RIGHT: "X_X__OOXO"
      }
    },
    X_X__OOOX: {
      on: {
        PLAY_X_TOP_CENTER: "XXX__OOOX",
        PLAY_X_MIDDLE_LEFT: "X_XX_OOOX",
        PLAY_X_CENTER: "X_X_XOOOX"
      }
    },
    X_X__OO_X: {
      on: {
        PLAY_O_TOP_CENTER: "XOX__OO_X",
        PLAY_O_MIDDLE_LEFT: "X_XO_OO_X",
        PLAY_O_CENTER: "X_X_OOO_X",
        PLAY_O_BOTTOM_CENTER: "X_X__OOOX"
      }
    },
    X_X__OO__: {
      on: {
        PLAY_X_TOP_CENTER: "XXX__OO__",
        PLAY_X_MIDDLE_LEFT: "X_XX_OO__",
        PLAY_X_CENTER: "X_X_XOO__",
        PLAY_X_BOTTOM_CENTER: "X_X__OOX_",
        PLAY_X_BOTTOM_RIGHT: "X_X__OO_X"
      }
    },
    X_XXXO_OO: {
      on: { PLAY_O_TOP_CENTER: "XOXXXO_OO", PLAY_O_BOTTOM_LEFT: "X_XXXOOOO" }
    },
    X_XX_OXOO: { on: { "": "X_WINS" } },
    X_XX_O_OO: {
      on: {
        PLAY_X_TOP_CENTER: "XXXX_O_OO",
        PLAY_X_CENTER: "X_XXXO_OO",
        PLAY_X_BOTTOM_LEFT: "X_XX_OXOO"
      }
    },
    X_XX_O_O_: {
      on: {
        PLAY_O_TOP_CENTER: "XOXX_O_O_",
        PLAY_O_CENTER: "X_XXOO_O_",
        PLAY_O_BOTTOM_LEFT: "X_XX_OOO_",
        PLAY_O_BOTTOM_RIGHT: "X_XX_O_OO"
      }
    },
    X_X_XOXOO: { on: { "": "X_WINS" } },
    X_X_XO_OO: {
      on: {
        PLAY_X_TOP_CENTER: "XXX_XO_OO",
        PLAY_X_MIDDLE_LEFT: "X_XXXO_OO",
        PLAY_X_BOTTOM_LEFT: "X_X_XOXOO"
      }
    },
    X_X_XO_O_: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_XO_O_",
        PLAY_O_MIDDLE_LEFT: "X_XOXO_O_",
        PLAY_O_BOTTOM_LEFT: "X_X_XOOO_",
        PLAY_O_BOTTOM_RIGHT: "X_X_XO_OO"
      }
    },
    X_X__OXOO: {
      on: {
        PLAY_X_TOP_CENTER: "XXX__OXOO",
        PLAY_X_MIDDLE_LEFT: "X_XX_OXOO",
        PLAY_X_CENTER: "X_X_XOXOO"
      }
    },
    X_X__OXO_: {
      on: {
        PLAY_O_TOP_CENTER: "XOX__OXO_",
        PLAY_O_MIDDLE_LEFT: "X_XO_OXO_",
        PLAY_O_CENTER: "X_X_OOXO_",
        PLAY_O_BOTTOM_RIGHT: "X_X__OXOO"
      }
    },
    X_X__O_OX: {
      on: {
        PLAY_O_TOP_CENTER: "XOX__O_OX",
        PLAY_O_MIDDLE_LEFT: "X_XO_O_OX",
        PLAY_O_CENTER: "X_X_OO_OX",
        PLAY_O_BOTTOM_LEFT: "X_X__OOOX"
      }
    },
    X_X__O_O_: {
      on: {
        PLAY_X_TOP_CENTER: "XXX__O_O_",
        PLAY_X_MIDDLE_LEFT: "X_XX_O_O_",
        PLAY_X_CENTER: "X_X_XO_O_",
        PLAY_X_BOTTOM_LEFT: "X_X__OXO_",
        PLAY_X_BOTTOM_RIGHT: "X_X__O_OX"
      }
    },
    X_XX_O__O: {
      on: {
        PLAY_O_TOP_CENTER: "XOXX_O__O",
        PLAY_O_CENTER: "X_XXOO__O",
        PLAY_O_BOTTOM_LEFT: "X_XX_OO_O",
        PLAY_O_BOTTOM_CENTER: "X_XX_O_OO"
      }
    },
    X_X_XO__O: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_XO__O",
        PLAY_O_MIDDLE_LEFT: "X_XOXO__O",
        PLAY_O_BOTTOM_LEFT: "X_X_XOO_O",
        PLAY_O_BOTTOM_CENTER: "X_X_XO_OO"
      }
    },
    X_X__OX_O: {
      on: {
        PLAY_O_TOP_CENTER: "XOX__OX_O",
        PLAY_O_MIDDLE_LEFT: "X_XO_OX_O",
        PLAY_O_CENTER: "X_X_OOX_O",
        PLAY_O_BOTTOM_CENTER: "X_X__OXOO"
      }
    },
    X_X__O_XO: {
      on: {
        PLAY_O_TOP_CENTER: "XOX__O_XO",
        PLAY_O_MIDDLE_LEFT: "X_XO_O_XO",
        PLAY_O_CENTER: "X_X_OO_XO",
        PLAY_O_BOTTOM_LEFT: "X_X__OOXO"
      }
    },
    X_X__O__O: {
      on: {
        PLAY_X_TOP_CENTER: "XXX__O__O",
        PLAY_X_MIDDLE_LEFT: "X_XX_O__O",
        PLAY_X_CENTER: "X_X_XO__O",
        PLAY_X_BOTTOM_LEFT: "X_X__OX_O",
        PLAY_X_BOTTOM_CENTER: "X_X__O_XO"
      }
    },
    X_X__O___: {
      on: {
        PLAY_O_TOP_CENTER: "XOX__O___",
        PLAY_O_MIDDLE_LEFT: "X_XO_O___",
        PLAY_O_CENTER: "X_X_OO___",
        PLAY_O_BOTTOM_LEFT: "X_X__OO__",
        PLAY_O_BOTTOM_CENTER: "X_X__O_O_",
        PLAY_O_BOTTOM_RIGHT: "X_X__O__O"
      }
    },
    X__XXOOOX: { on: { "": "X_WINS" } },
    X__XXOOO_: {
      on: {
        PLAY_X_TOP_CENTER: "XX_XXOOO_",
        PLAY_X_TOP_RIGHT: "X_XXXOOO_",
        PLAY_X_BOTTOM_RIGHT: "X__XXOOOX"
      }
    },
    X__XXOOXO: {
      on: { PLAY_O_TOP_CENTER: "XO_XXOOXO", PLAY_O_TOP_RIGHT: "X_OXXOOXO" }
    },
    X__XXOO_O: {
      on: {
        PLAY_X_TOP_CENTER: "XX_XXOO_O",
        PLAY_X_TOP_RIGHT: "X_XXXOO_O",
        PLAY_X_BOTTOM_CENTER: "X__XXOOXO"
      }
    },
    X__XXOO__: {
      on: {
        PLAY_O_TOP_CENTER: "XO_XXOO__",
        PLAY_O_TOP_RIGHT: "X_OXXOO__",
        PLAY_O_BOTTOM_CENTER: "X__XXOOO_",
        PLAY_O_BOTTOM_RIGHT: "X__XXOO_O"
      }
    },
    X__X_OOXO: {
      on: {
        PLAY_X_TOP_CENTER: "XX_X_OOXO",
        PLAY_X_TOP_RIGHT: "X_XX_OOXO",
        PLAY_X_CENTER: "X__XXOOXO"
      }
    },
    X__X_OOX_: {
      on: {
        PLAY_O_TOP_CENTER: "XO_X_OOX_",
        PLAY_O_TOP_RIGHT: "X_OX_OOX_",
        PLAY_O_CENTER: "X__XOOOX_",
        PLAY_O_BOTTOM_RIGHT: "X__X_OOXO"
      }
    },
    X__X_OOOX: {
      on: {
        PLAY_X_TOP_CENTER: "XX_X_OOOX",
        PLAY_X_TOP_RIGHT: "X_XX_OOOX",
        PLAY_X_CENTER: "X__XXOOOX"
      }
    },
    X__X_OO_X: {
      on: {
        PLAY_O_TOP_CENTER: "XO_X_OO_X",
        PLAY_O_TOP_RIGHT: "X_OX_OO_X",
        PLAY_O_CENTER: "X__XOOO_X",
        PLAY_O_BOTTOM_CENTER: "X__X_OOOX"
      }
    },
    X__X_OO__: {
      on: {
        PLAY_X_TOP_CENTER: "XX_X_OO__",
        PLAY_X_TOP_RIGHT: "X_XX_OO__",
        PLAY_X_CENTER: "X__XXOO__",
        PLAY_X_BOTTOM_CENTER: "X__X_OOX_",
        PLAY_X_BOTTOM_RIGHT: "X__X_OO_X"
      }
    },
    X__XXOXOO: { on: { "": "X_WINS" } },
    X__XXO_OO: {
      on: {
        PLAY_X_TOP_CENTER: "XX_XXO_OO",
        PLAY_X_TOP_RIGHT: "X_XXXO_OO",
        PLAY_X_BOTTOM_LEFT: "X__XXOXOO"
      }
    },
    X__XXO_O_: {
      on: {
        PLAY_O_TOP_CENTER: "XO_XXO_O_",
        PLAY_O_TOP_RIGHT: "X_OXXO_O_",
        PLAY_O_BOTTOM_LEFT: "X__XXOOO_",
        PLAY_O_BOTTOM_RIGHT: "X__XXO_OO"
      }
    },
    X__X_OXO_: { on: { "": "X_WINS" } },
    X__X_O_OX: {
      on: {
        PLAY_O_TOP_CENTER: "XO_X_O_OX",
        PLAY_O_TOP_RIGHT: "X_OX_O_OX",
        PLAY_O_CENTER: "X__XOO_OX",
        PLAY_O_BOTTOM_LEFT: "X__X_OOOX"
      }
    },
    X__X_O_O_: {
      on: {
        PLAY_X_TOP_CENTER: "XX_X_O_O_",
        PLAY_X_TOP_RIGHT: "X_XX_O_O_",
        PLAY_X_CENTER: "X__XXO_O_",
        PLAY_X_BOTTOM_LEFT: "X__X_OXO_",
        PLAY_X_BOTTOM_RIGHT: "X__X_O_OX"
      }
    },
    X__XXO__O: {
      on: {
        PLAY_O_TOP_CENTER: "XO_XXO__O",
        PLAY_O_TOP_RIGHT: "X_OXXO__O",
        PLAY_O_BOTTOM_LEFT: "X__XXOO_O",
        PLAY_O_BOTTOM_CENTER: "X__XXO_OO"
      }
    },
    X__X_OX_O: { on: { "": "X_WINS" } },
    X__X_O_XO: {
      on: {
        PLAY_O_TOP_CENTER: "XO_X_O_XO",
        PLAY_O_TOP_RIGHT: "X_OX_O_XO",
        PLAY_O_CENTER: "X__XOO_XO",
        PLAY_O_BOTTOM_LEFT: "X__X_OOXO"
      }
    },
    X__X_O__O: {
      on: {
        PLAY_X_TOP_CENTER: "XX_X_O__O",
        PLAY_X_TOP_RIGHT: "X_XX_O__O",
        PLAY_X_CENTER: "X__XXO__O",
        PLAY_X_BOTTOM_LEFT: "X__X_OX_O",
        PLAY_X_BOTTOM_CENTER: "X__X_O_XO"
      }
    },
    X__X_O___: {
      on: {
        PLAY_O_TOP_CENTER: "XO_X_O___",
        PLAY_O_TOP_RIGHT: "X_OX_O___",
        PLAY_O_CENTER: "X__XOO___",
        PLAY_O_BOTTOM_LEFT: "X__X_OO__",
        PLAY_O_BOTTOM_CENTER: "X__X_O_O_",
        PLAY_O_BOTTOM_RIGHT: "X__X_O__O"
      }
    },
    X___XOOXO: {
      on: {
        PLAY_X_TOP_CENTER: "XX__XOOXO",
        PLAY_X_TOP_RIGHT: "X_X_XOOXO",
        PLAY_X_MIDDLE_LEFT: "X__XXOOXO"
      }
    },
    X___XOOX_: {
      on: {
        PLAY_O_TOP_CENTER: "XO__XOOX_",
        PLAY_O_TOP_RIGHT: "X_O_XOOX_",
        PLAY_O_MIDDLE_LEFT: "X__OXOOX_",
        PLAY_O_BOTTOM_RIGHT: "X___XOOXO"
      }
    },
    X___XOO_X: { on: { "": "X_WINS" } },
    X___XOO__: {
      on: {
        PLAY_X_TOP_CENTER: "XX__XOO__",
        PLAY_X_TOP_RIGHT: "X_X_XOO__",
        PLAY_X_MIDDLE_LEFT: "X__XXOO__",
        PLAY_X_BOTTOM_CENTER: "X___XOOX_",
        PLAY_X_BOTTOM_RIGHT: "X___XOO_X"
      }
    },
    X___XOXOO: {
      on: {
        PLAY_X_TOP_CENTER: "XX__XOXOO",
        PLAY_X_TOP_RIGHT: "X_X_XOXOO",
        PLAY_X_MIDDLE_LEFT: "X__XXOXOO"
      }
    },
    X___XOXO_: {
      on: {
        PLAY_O_TOP_CENTER: "XO__XOXO_",
        PLAY_O_TOP_RIGHT: "X_O_XOXO_",
        PLAY_O_MIDDLE_LEFT: "X__OXOXO_",
        PLAY_O_BOTTOM_RIGHT: "X___XOXOO"
      }
    },
    X___XO_OX: { on: { "": "X_WINS" } },
    X___XO_O_: {
      on: {
        PLAY_X_TOP_CENTER: "XX__XO_O_",
        PLAY_X_TOP_RIGHT: "X_X_XO_O_",
        PLAY_X_MIDDLE_LEFT: "X__XXO_O_",
        PLAY_X_BOTTOM_LEFT: "X___XOXO_",
        PLAY_X_BOTTOM_RIGHT: "X___XO_OX"
      }
    },
    X___XOX_O: {
      on: {
        PLAY_O_TOP_CENTER: "XO__XOX_O",
        PLAY_O_TOP_RIGHT: "X_O_XOX_O",
        PLAY_O_MIDDLE_LEFT: "X__OXOX_O",
        PLAY_O_BOTTOM_CENTER: "X___XOXOO"
      }
    },
    X___XO_XO: {
      on: {
        PLAY_O_TOP_CENTER: "XO__XO_XO",
        PLAY_O_TOP_RIGHT: "X_O_XO_XO",
        PLAY_O_MIDDLE_LEFT: "X__OXO_XO",
        PLAY_O_BOTTOM_LEFT: "X___XOOXO"
      }
    },
    X___XO__O: {
      on: {
        PLAY_X_TOP_CENTER: "XX__XO__O",
        PLAY_X_TOP_RIGHT: "X_X_XO__O",
        PLAY_X_MIDDLE_LEFT: "X__XXO__O",
        PLAY_X_BOTTOM_LEFT: "X___XOX_O",
        PLAY_X_BOTTOM_CENTER: "X___XO_XO"
      }
    },
    X___XO___: {
      on: {
        PLAY_O_TOP_CENTER: "XO__XO___",
        PLAY_O_TOP_RIGHT: "X_O_XO___",
        PLAY_O_MIDDLE_LEFT: "X__OXO___",
        PLAY_O_BOTTOM_LEFT: "X___XOO__",
        PLAY_O_BOTTOM_CENTER: "X___XO_O_",
        PLAY_O_BOTTOM_RIGHT: "X___XO__O"
      }
    },
    X____OXOX: {
      on: {
        PLAY_O_TOP_CENTER: "XO___OXOX",
        PLAY_O_TOP_RIGHT: "X_O__OXOX",
        PLAY_O_MIDDLE_LEFT: "X__O_OXOX",
        PLAY_O_CENTER: "X___OOXOX"
      }
    },
    X____OXO_: {
      on: {
        PLAY_X_TOP_CENTER: "XX___OXO_",
        PLAY_X_TOP_RIGHT: "X_X__OXO_",
        PLAY_X_MIDDLE_LEFT: "X__X_OXO_",
        PLAY_X_CENTER: "X___XOXO_",
        PLAY_X_BOTTOM_RIGHT: "X____OXOX"
      }
    },
    X____OXXO: {
      on: {
        PLAY_O_TOP_CENTER: "XO___OXXO",
        PLAY_O_TOP_RIGHT: "X_O__OXXO",
        PLAY_O_MIDDLE_LEFT: "X__O_OXXO",
        PLAY_O_CENTER: "X___OOXXO"
      }
    },
    X____OX_O: {
      on: {
        PLAY_X_TOP_CENTER: "XX___OX_O",
        PLAY_X_TOP_RIGHT: "X_X__OX_O",
        PLAY_X_MIDDLE_LEFT: "X__X_OX_O",
        PLAY_X_CENTER: "X___XOX_O",
        PLAY_X_BOTTOM_CENTER: "X____OXXO"
      }
    },
    X____OX__: {
      on: {
        PLAY_O_TOP_CENTER: "XO___OX__",
        PLAY_O_TOP_RIGHT: "X_O__OX__",
        PLAY_O_MIDDLE_LEFT: "X__O_OX__",
        PLAY_O_CENTER: "X___OOX__",
        PLAY_O_BOTTOM_CENTER: "X____OXO_",
        PLAY_O_BOTTOM_RIGHT: "X____OX_O"
      }
    },
    X____OOXX: {
      on: {
        PLAY_O_TOP_CENTER: "XO___OOXX",
        PLAY_O_TOP_RIGHT: "X_O__OOXX",
        PLAY_O_MIDDLE_LEFT: "X__O_OOXX",
        PLAY_O_CENTER: "X___OOOXX"
      }
    },
    X____OOX_: {
      on: {
        PLAY_X_TOP_CENTER: "XX___OOX_",
        PLAY_X_TOP_RIGHT: "X_X__OOX_",
        PLAY_X_MIDDLE_LEFT: "X__X_OOX_",
        PLAY_X_CENTER: "X___XOOX_",
        PLAY_X_BOTTOM_RIGHT: "X____OOXX"
      }
    },
    X____O_XO: {
      on: {
        PLAY_X_TOP_CENTER: "XX___O_XO",
        PLAY_X_TOP_RIGHT: "X_X__O_XO",
        PLAY_X_MIDDLE_LEFT: "X__X_O_XO",
        PLAY_X_CENTER: "X___XO_XO",
        PLAY_X_BOTTOM_LEFT: "X____OXXO"
      }
    },
    X____O_X_: {
      on: {
        PLAY_O_TOP_CENTER: "XO___O_X_",
        PLAY_O_TOP_RIGHT: "X_O__O_X_",
        PLAY_O_MIDDLE_LEFT: "X__O_O_X_",
        PLAY_O_CENTER: "X___OO_X_",
        PLAY_O_BOTTOM_LEFT: "X____OOX_",
        PLAY_O_BOTTOM_RIGHT: "X____O_XO"
      }
    },
    X____OO_X: {
      on: {
        PLAY_X_TOP_CENTER: "XX___OO_X",
        PLAY_X_TOP_RIGHT: "X_X__OO_X",
        PLAY_X_MIDDLE_LEFT: "X__X_OO_X",
        PLAY_X_CENTER: "X___XOO_X",
        PLAY_X_BOTTOM_CENTER: "X____OOXX"
      }
    },
    X____O_OX: {
      on: {
        PLAY_X_TOP_CENTER: "XX___O_OX",
        PLAY_X_TOP_RIGHT: "X_X__O_OX",
        PLAY_X_MIDDLE_LEFT: "X__X_O_OX",
        PLAY_X_CENTER: "X___XO_OX",
        PLAY_X_BOTTOM_LEFT: "X____OXOX"
      }
    },
    X____O__X: {
      on: {
        PLAY_O_TOP_CENTER: "XO___O__X",
        PLAY_O_TOP_RIGHT: "X_O__O__X",
        PLAY_O_MIDDLE_LEFT: "X__O_O__X",
        PLAY_O_CENTER: "X___OO__X",
        PLAY_O_BOTTOM_LEFT: "X____OO_X",
        PLAY_O_BOTTOM_CENTER: "X____O_OX"
      }
    },
    X____O___: {
      on: {
        PLAY_X_TOP_CENTER: "XX___O___",
        PLAY_X_TOP_RIGHT: "X_X__O___",
        PLAY_X_MIDDLE_LEFT: "X__X_O___",
        PLAY_X_CENTER: "X___XO___",
        PLAY_X_BOTTOM_LEFT: "X____OX__",
        PLAY_X_BOTTOM_CENTER: "X____O_X_",
        PLAY_X_BOTTOM_RIGHT: "X____O__X"
      }
    },
    XXX___OO_: { on: { "": "X_WINS" } },
    XX_X__OOO: { on: { "": "O_WINS" } },
    XX_X__OO_: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOX__OO_",
        PLAY_O_CENTER: "XX_XO_OO_",
        PLAY_O_MIDDLE_RIGHT: "XX_X_OOO_",
        PLAY_O_BOTTOM_RIGHT: "XX_X__OOO"
      }
    },
    XX__X_OOO: { on: { "": "O_WINS" } },
    XX__X_OO_: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_X_OO_",
        PLAY_O_MIDDLE_LEFT: "XX_OX_OO_",
        PLAY_O_MIDDLE_RIGHT: "XX__XOOO_",
        PLAY_O_BOTTOM_RIGHT: "XX__X_OOO"
      }
    },
    XX___XOOO: { on: { "": "O_WINS" } },
    XX___XOO_: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO__XOO_",
        PLAY_O_MIDDLE_LEFT: "XX_O_XOO_",
        PLAY_O_CENTER: "XX__OXOO_",
        PLAY_O_BOTTOM_RIGHT: "XX___XOOO"
      }
    },
    XX____OOX: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO___OOX",
        PLAY_O_MIDDLE_LEFT: "XX_O__OOX",
        PLAY_O_CENTER: "XX__O_OOX",
        PLAY_O_MIDDLE_RIGHT: "XX___OOOX"
      }
    },
    XX____OO_: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX___OO_",
        PLAY_X_MIDDLE_LEFT: "XX_X__OO_",
        PLAY_X_CENTER: "XX__X_OO_",
        PLAY_X_MIDDLE_RIGHT: "XX___XOO_",
        PLAY_X_BOTTOM_RIGHT: "XX____OOX"
      }
    },
    XXX___O_O: { on: { "": "X_WINS" } },
    XX_X__O_O: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOX__O_O",
        PLAY_O_CENTER: "XX_XO_O_O",
        PLAY_O_MIDDLE_RIGHT: "XX_X_OO_O",
        PLAY_O_BOTTOM_CENTER: "XX_X__OOO"
      }
    },
    XX__X_O_O: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_X_O_O",
        PLAY_O_MIDDLE_LEFT: "XX_OX_O_O",
        PLAY_O_MIDDLE_RIGHT: "XX__XOO_O",
        PLAY_O_BOTTOM_CENTER: "XX__X_OOO"
      }
    },
    XX___XO_O: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO__XO_O",
        PLAY_O_MIDDLE_LEFT: "XX_O_XO_O",
        PLAY_O_CENTER: "XX__OXO_O",
        PLAY_O_BOTTOM_CENTER: "XX___XOOO"
      }
    },
    XX____OXO: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO___OXO",
        PLAY_O_MIDDLE_LEFT: "XX_O__OXO",
        PLAY_O_CENTER: "XX__O_OXO",
        PLAY_O_MIDDLE_RIGHT: "XX___OOXO"
      }
    },
    XX____O_O: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX___O_O",
        PLAY_X_MIDDLE_LEFT: "XX_X__O_O",
        PLAY_X_CENTER: "XX__X_O_O",
        PLAY_X_MIDDLE_RIGHT: "XX___XO_O",
        PLAY_X_BOTTOM_CENTER: "XX____OXO"
      }
    },
    XX____O__: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO___O__",
        PLAY_O_MIDDLE_LEFT: "XX_O__O__",
        PLAY_O_CENTER: "XX__O_O__",
        PLAY_O_MIDDLE_RIGHT: "XX___OO__",
        PLAY_O_BOTTOM_CENTER: "XX____OO_",
        PLAY_O_BOTTOM_RIGHT: "XX____O_O"
      }
    },
    X_XX__OOO: { on: { "": "O_WINS" } },
    X_XX__OO_: {
      on: {
        PLAY_O_TOP_CENTER: "XOXX__OO_",
        PLAY_O_CENTER: "X_XXO_OO_",
        PLAY_O_MIDDLE_RIGHT: "X_XX_OOO_",
        PLAY_O_BOTTOM_RIGHT: "X_XX__OOO"
      }
    },
    X_X_X_OOO: { on: { "": "O_WINS" } },
    X_X_X_OO_: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_X_OO_",
        PLAY_O_MIDDLE_LEFT: "X_XOX_OO_",
        PLAY_O_MIDDLE_RIGHT: "X_X_XOOO_",
        PLAY_O_BOTTOM_RIGHT: "X_X_X_OOO"
      }
    },
    X_X__XOOO: { on: { "": "O_WINS" } },
    X_X__XOO_: {
      on: {
        PLAY_O_TOP_CENTER: "XOX__XOO_",
        PLAY_O_MIDDLE_LEFT: "X_XO_XOO_",
        PLAY_O_CENTER: "X_X_OXOO_",
        PLAY_O_BOTTOM_RIGHT: "X_X__XOOO"
      }
    },
    X_X___OOX: {
      on: {
        PLAY_O_TOP_CENTER: "XOX___OOX",
        PLAY_O_MIDDLE_LEFT: "X_XO__OOX",
        PLAY_O_CENTER: "X_X_O_OOX",
        PLAY_O_MIDDLE_RIGHT: "X_X__OOOX"
      }
    },
    X_X___OO_: {
      on: {
        PLAY_X_TOP_CENTER: "XXX___OO_",
        PLAY_X_MIDDLE_LEFT: "X_XX__OO_",
        PLAY_X_CENTER: "X_X_X_OO_",
        PLAY_X_MIDDLE_RIGHT: "X_X__XOO_",
        PLAY_X_BOTTOM_RIGHT: "X_X___OOX"
      }
    },
    X_XX__O_O: {
      on: {
        PLAY_O_TOP_CENTER: "XOXX__O_O",
        PLAY_O_CENTER: "X_XXO_O_O",
        PLAY_O_MIDDLE_RIGHT: "X_XX_OO_O",
        PLAY_O_BOTTOM_CENTER: "X_XX__OOO"
      }
    },
    X_X_X_O_O: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_X_O_O",
        PLAY_O_MIDDLE_LEFT: "X_XOX_O_O",
        PLAY_O_MIDDLE_RIGHT: "X_X_XOO_O",
        PLAY_O_BOTTOM_CENTER: "X_X_X_OOO"
      }
    },
    X_X__XO_O: {
      on: {
        PLAY_O_TOP_CENTER: "XOX__XO_O",
        PLAY_O_MIDDLE_LEFT: "X_XO_XO_O",
        PLAY_O_CENTER: "X_X_OXO_O",
        PLAY_O_BOTTOM_CENTER: "X_X__XOOO"
      }
    },
    X_X___OXO: {
      on: {
        PLAY_O_TOP_CENTER: "XOX___OXO",
        PLAY_O_MIDDLE_LEFT: "X_XO__OXO",
        PLAY_O_CENTER: "X_X_O_OXO",
        PLAY_O_MIDDLE_RIGHT: "X_X__OOXO"
      }
    },
    X_X___O_O: {
      on: {
        PLAY_X_TOP_CENTER: "XXX___O_O",
        PLAY_X_MIDDLE_LEFT: "X_XX__O_O",
        PLAY_X_CENTER: "X_X_X_O_O",
        PLAY_X_MIDDLE_RIGHT: "X_X__XO_O",
        PLAY_X_BOTTOM_CENTER: "X_X___OXO"
      }
    },
    X_X___O__: {
      on: {
        PLAY_O_TOP_CENTER: "XOX___O__",
        PLAY_O_MIDDLE_LEFT: "X_XO__O__",
        PLAY_O_CENTER: "X_X_O_O__",
        PLAY_O_MIDDLE_RIGHT: "X_X__OO__",
        PLAY_O_BOTTOM_CENTER: "X_X___OO_",
        PLAY_O_BOTTOM_RIGHT: "X_X___O_O"
      }
    },
    X__XX_OOO: { on: { "": "O_WINS" } },
    X__XX_OO_: {
      on: {
        PLAY_O_TOP_CENTER: "XO_XX_OO_",
        PLAY_O_TOP_RIGHT: "X_OXX_OO_",
        PLAY_O_MIDDLE_RIGHT: "X__XXOOO_",
        PLAY_O_BOTTOM_RIGHT: "X__XX_OOO"
      }
    },
    X__X_XOOO: { on: { "": "O_WINS" } },
    X__X_XOO_: {
      on: {
        PLAY_O_TOP_CENTER: "XO_X_XOO_",
        PLAY_O_TOP_RIGHT: "X_OX_XOO_",
        PLAY_O_CENTER: "X__XOXOO_",
        PLAY_O_BOTTOM_RIGHT: "X__X_XOOO"
      }
    },
    X__X__OOX: {
      on: {
        PLAY_O_TOP_CENTER: "XO_X__OOX",
        PLAY_O_TOP_RIGHT: "X_OX__OOX",
        PLAY_O_CENTER: "X__XO_OOX",
        PLAY_O_MIDDLE_RIGHT: "X__X_OOOX"
      }
    },
    X__X__OO_: {
      on: {
        PLAY_X_TOP_CENTER: "XX_X__OO_",
        PLAY_X_TOP_RIGHT: "X_XX__OO_",
        PLAY_X_CENTER: "X__XX_OO_",
        PLAY_X_MIDDLE_RIGHT: "X__X_XOO_",
        PLAY_X_BOTTOM_RIGHT: "X__X__OOX"
      }
    },
    X__XX_O_O: {
      on: {
        PLAY_O_TOP_CENTER: "XO_XX_O_O",
        PLAY_O_TOP_RIGHT: "X_OXX_O_O",
        PLAY_O_MIDDLE_RIGHT: "X__XXOO_O",
        PLAY_O_BOTTOM_CENTER: "X__XX_OOO"
      }
    },
    X__X_XO_O: {
      on: {
        PLAY_O_TOP_CENTER: "XO_X_XO_O",
        PLAY_O_TOP_RIGHT: "X_OX_XO_O",
        PLAY_O_CENTER: "X__XOXO_O",
        PLAY_O_BOTTOM_CENTER: "X__X_XOOO"
      }
    },
    X__X__OXO: {
      on: {
        PLAY_O_TOP_CENTER: "XO_X__OXO",
        PLAY_O_TOP_RIGHT: "X_OX__OXO",
        PLAY_O_CENTER: "X__XO_OXO",
        PLAY_O_MIDDLE_RIGHT: "X__X_OOXO"
      }
    },
    X__X__O_O: {
      on: {
        PLAY_X_TOP_CENTER: "XX_X__O_O",
        PLAY_X_TOP_RIGHT: "X_XX__O_O",
        PLAY_X_CENTER: "X__XX_O_O",
        PLAY_X_MIDDLE_RIGHT: "X__X_XO_O",
        PLAY_X_BOTTOM_CENTER: "X__X__OXO"
      }
    },
    X__X__O__: {
      on: {
        PLAY_O_TOP_CENTER: "XO_X__O__",
        PLAY_O_TOP_RIGHT: "X_OX__O__",
        PLAY_O_CENTER: "X__XO_O__",
        PLAY_O_MIDDLE_RIGHT: "X__X_OO__",
        PLAY_O_BOTTOM_CENTER: "X__X__OO_",
        PLAY_O_BOTTOM_RIGHT: "X__X__O_O"
      }
    },
    X___XXOOO: { on: { "": "O_WINS" } },
    X___XXOO_: {
      on: {
        PLAY_O_TOP_CENTER: "XO__XXOO_",
        PLAY_O_TOP_RIGHT: "X_O_XXOO_",
        PLAY_O_MIDDLE_LEFT: "X__OXXOO_",
        PLAY_O_BOTTOM_RIGHT: "X___XXOOO"
      }
    },
    X___X_OOX: { on: { "": "X_WINS" } },
    X___X_OO_: {
      on: {
        PLAY_X_TOP_CENTER: "XX__X_OO_",
        PLAY_X_TOP_RIGHT: "X_X_X_OO_",
        PLAY_X_MIDDLE_LEFT: "X__XX_OO_",
        PLAY_X_MIDDLE_RIGHT: "X___XXOO_",
        PLAY_X_BOTTOM_RIGHT: "X___X_OOX"
      }
    },
    X___XXO_O: {
      on: {
        PLAY_O_TOP_CENTER: "XO__XXO_O",
        PLAY_O_TOP_RIGHT: "X_O_XXO_O",
        PLAY_O_MIDDLE_LEFT: "X__OXXO_O",
        PLAY_O_BOTTOM_CENTER: "X___XXOOO"
      }
    },
    X___X_OXO: {
      on: {
        PLAY_O_TOP_CENTER: "XO__X_OXO",
        PLAY_O_TOP_RIGHT: "X_O_X_OXO",
        PLAY_O_MIDDLE_LEFT: "X__OX_OXO",
        PLAY_O_MIDDLE_RIGHT: "X___XOOXO"
      }
    },
    X___X_O_O: {
      on: {
        PLAY_X_TOP_CENTER: "XX__X_O_O",
        PLAY_X_TOP_RIGHT: "X_X_X_O_O",
        PLAY_X_MIDDLE_LEFT: "X__XX_O_O",
        PLAY_X_MIDDLE_RIGHT: "X___XXO_O",
        PLAY_X_BOTTOM_CENTER: "X___X_OXO"
      }
    },
    X___X_O__: {
      on: {
        PLAY_O_TOP_CENTER: "XO__X_O__",
        PLAY_O_TOP_RIGHT: "X_O_X_O__",
        PLAY_O_MIDDLE_LEFT: "X__OX_O__",
        PLAY_O_MIDDLE_RIGHT: "X___XOO__",
        PLAY_O_BOTTOM_CENTER: "X___X_OO_",
        PLAY_O_BOTTOM_RIGHT: "X___X_O_O"
      }
    },
    X____XOOX: {
      on: {
        PLAY_O_TOP_CENTER: "XO___XOOX",
        PLAY_O_TOP_RIGHT: "X_O__XOOX",
        PLAY_O_MIDDLE_LEFT: "X__O_XOOX",
        PLAY_O_CENTER: "X___OXOOX"
      }
    },
    X____XOO_: {
      on: {
        PLAY_X_TOP_CENTER: "XX___XOO_",
        PLAY_X_TOP_RIGHT: "X_X__XOO_",
        PLAY_X_MIDDLE_LEFT: "X__X_XOO_",
        PLAY_X_CENTER: "X___XXOO_",
        PLAY_X_BOTTOM_RIGHT: "X____XOOX"
      }
    },
    X____XOXO: {
      on: {
        PLAY_O_TOP_CENTER: "XO___XOXO",
        PLAY_O_TOP_RIGHT: "X_O__XOXO",
        PLAY_O_MIDDLE_LEFT: "X__O_XOXO",
        PLAY_O_CENTER: "X___OXOXO"
      }
    },
    X____XO_O: {
      on: {
        PLAY_X_TOP_CENTER: "XX___XO_O",
        PLAY_X_TOP_RIGHT: "X_X__XO_O",
        PLAY_X_MIDDLE_LEFT: "X__X_XO_O",
        PLAY_X_CENTER: "X___XXO_O",
        PLAY_X_BOTTOM_CENTER: "X____XOXO"
      }
    },
    X____XO__: {
      on: {
        PLAY_O_TOP_CENTER: "XO___XO__",
        PLAY_O_TOP_RIGHT: "X_O__XO__",
        PLAY_O_MIDDLE_LEFT: "X__O_XO__",
        PLAY_O_CENTER: "X___OXO__",
        PLAY_O_BOTTOM_CENTER: "X____XOO_",
        PLAY_O_BOTTOM_RIGHT: "X____XO_O"
      }
    },
    X_____OXO: {
      on: {
        PLAY_X_TOP_CENTER: "XX____OXO",
        PLAY_X_TOP_RIGHT: "X_X___OXO",
        PLAY_X_MIDDLE_LEFT: "X__X__OXO",
        PLAY_X_CENTER: "X___X_OXO",
        PLAY_X_MIDDLE_RIGHT: "X____XOXO"
      }
    },
    X_____OX_: {
      on: {
        PLAY_O_TOP_CENTER: "XO____OX_",
        PLAY_O_TOP_RIGHT: "X_O___OX_",
        PLAY_O_MIDDLE_LEFT: "X__O__OX_",
        PLAY_O_CENTER: "X___O_OX_",
        PLAY_O_MIDDLE_RIGHT: "X____OOX_",
        PLAY_O_BOTTOM_RIGHT: "X_____OXO"
      }
    },
    X_____OOX: {
      on: {
        PLAY_X_TOP_CENTER: "XX____OOX",
        PLAY_X_TOP_RIGHT: "X_X___OOX",
        PLAY_X_MIDDLE_LEFT: "X__X__OOX",
        PLAY_X_CENTER: "X___X_OOX",
        PLAY_X_MIDDLE_RIGHT: "X____XOOX"
      }
    },
    X_____O_X: {
      on: {
        PLAY_O_TOP_CENTER: "XO____O_X",
        PLAY_O_TOP_RIGHT: "X_O___O_X",
        PLAY_O_MIDDLE_LEFT: "X__O__O_X",
        PLAY_O_CENTER: "X___O_O_X",
        PLAY_O_MIDDLE_RIGHT: "X____OO_X",
        PLAY_O_BOTTOM_CENTER: "X_____OOX"
      }
    },
    X_____O__: {
      on: {
        PLAY_X_TOP_CENTER: "XX____O__",
        PLAY_X_TOP_RIGHT: "X_X___O__",
        PLAY_X_MIDDLE_LEFT: "X__X__O__",
        PLAY_X_CENTER: "X___X_O__",
        PLAY_X_MIDDLE_RIGHT: "X____XO__",
        PLAY_X_BOTTOM_CENTER: "X_____OX_",
        PLAY_X_BOTTOM_RIGHT: "X_____O_X"
      }
    },
    XXX____OO: { on: { "": "X_WINS" } },
    XX_X___OO: {
      on: {
        PLAY_O_TOP_RIGHT: "XXOX___OO",
        PLAY_O_CENTER: "XX_XO__OO",
        PLAY_O_MIDDLE_RIGHT: "XX_X_O_OO",
        PLAY_O_BOTTOM_LEFT: "XX_X__OOO"
      }
    },
    XX__X__OO: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_X__OO",
        PLAY_O_MIDDLE_LEFT: "XX_OX__OO",
        PLAY_O_MIDDLE_RIGHT: "XX__XO_OO",
        PLAY_O_BOTTOM_LEFT: "XX__X_OOO"
      }
    },
    XX___X_OO: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO__X_OO",
        PLAY_O_MIDDLE_LEFT: "XX_O_X_OO",
        PLAY_O_CENTER: "XX__OX_OO",
        PLAY_O_BOTTOM_LEFT: "XX___XOOO"
      }
    },
    XX____XOO: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO___XOO",
        PLAY_O_MIDDLE_LEFT: "XX_O__XOO",
        PLAY_O_CENTER: "XX__O_XOO",
        PLAY_O_MIDDLE_RIGHT: "XX___OXOO"
      }
    },
    XX_____OO: {
      on: {
        PLAY_X_TOP_RIGHT: "XXX____OO",
        PLAY_X_MIDDLE_LEFT: "XX_X___OO",
        PLAY_X_CENTER: "XX__X__OO",
        PLAY_X_MIDDLE_RIGHT: "XX___X_OO",
        PLAY_X_BOTTOM_LEFT: "XX____XOO"
      }
    },
    XX_____O_: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO____O_",
        PLAY_O_MIDDLE_LEFT: "XX_O___O_",
        PLAY_O_CENTER: "XX__O__O_",
        PLAY_O_MIDDLE_RIGHT: "XX___O_O_",
        PLAY_O_BOTTOM_LEFT: "XX____OO_",
        PLAY_O_BOTTOM_RIGHT: "XX_____OO"
      }
    },
    X_XX___OO: {
      on: {
        PLAY_O_TOP_CENTER: "XOXX___OO",
        PLAY_O_CENTER: "X_XXO__OO",
        PLAY_O_MIDDLE_RIGHT: "X_XX_O_OO",
        PLAY_O_BOTTOM_LEFT: "X_XX__OOO"
      }
    },
    X_X_X__OO: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_X__OO",
        PLAY_O_MIDDLE_LEFT: "X_XOX__OO",
        PLAY_O_MIDDLE_RIGHT: "X_X_XO_OO",
        PLAY_O_BOTTOM_LEFT: "X_X_X_OOO"
      }
    },
    X_X__X_OO: {
      on: {
        PLAY_O_TOP_CENTER: "XOX__X_OO",
        PLAY_O_MIDDLE_LEFT: "X_XO_X_OO",
        PLAY_O_CENTER: "X_X_OX_OO",
        PLAY_O_BOTTOM_LEFT: "X_X__XOOO"
      }
    },
    X_X___XOO: {
      on: {
        PLAY_O_TOP_CENTER: "XOX___XOO",
        PLAY_O_MIDDLE_LEFT: "X_XO__XOO",
        PLAY_O_CENTER: "X_X_O_XOO",
        PLAY_O_MIDDLE_RIGHT: "X_X__OXOO"
      }
    },
    X_X____OO: {
      on: {
        PLAY_X_TOP_CENTER: "XXX____OO",
        PLAY_X_MIDDLE_LEFT: "X_XX___OO",
        PLAY_X_CENTER: "X_X_X__OO",
        PLAY_X_MIDDLE_RIGHT: "X_X__X_OO",
        PLAY_X_BOTTOM_LEFT: "X_X___XOO"
      }
    },
    X_X____O_: {
      on: {
        PLAY_O_TOP_CENTER: "XOX____O_",
        PLAY_O_MIDDLE_LEFT: "X_XO___O_",
        PLAY_O_CENTER: "X_X_O__O_",
        PLAY_O_MIDDLE_RIGHT: "X_X__O_O_",
        PLAY_O_BOTTOM_LEFT: "X_X___OO_",
        PLAY_O_BOTTOM_RIGHT: "X_X____OO"
      }
    },
    X__XX__OO: {
      on: {
        PLAY_O_TOP_CENTER: "XO_XX__OO",
        PLAY_O_TOP_RIGHT: "X_OXX__OO",
        PLAY_O_MIDDLE_RIGHT: "X__XXO_OO",
        PLAY_O_BOTTOM_LEFT: "X__XX_OOO"
      }
    },
    X__X_X_OO: {
      on: {
        PLAY_O_TOP_CENTER: "XO_X_X_OO",
        PLAY_O_TOP_RIGHT: "X_OX_X_OO",
        PLAY_O_CENTER: "X__XOX_OO",
        PLAY_O_BOTTOM_LEFT: "X__X_XOOO"
      }
    },
    X__X__XOO: { on: { "": "X_WINS" } },
    X__X___OO: {
      on: {
        PLAY_X_TOP_CENTER: "XX_X___OO",
        PLAY_X_TOP_RIGHT: "X_XX___OO",
        PLAY_X_CENTER: "X__XX__OO",
        PLAY_X_MIDDLE_RIGHT: "X__X_X_OO",
        PLAY_X_BOTTOM_LEFT: "X__X__XOO"
      }
    },
    X__X___O_: {
      on: {
        PLAY_O_TOP_CENTER: "XO_X___O_",
        PLAY_O_TOP_RIGHT: "X_OX___O_",
        PLAY_O_CENTER: "X__XO__O_",
        PLAY_O_MIDDLE_RIGHT: "X__X_O_O_",
        PLAY_O_BOTTOM_LEFT: "X__X__OO_",
        PLAY_O_BOTTOM_RIGHT: "X__X___OO"
      }
    },
    X___XX_OO: {
      on: {
        PLAY_O_TOP_CENTER: "XO__XX_OO",
        PLAY_O_TOP_RIGHT: "X_O_XX_OO",
        PLAY_O_MIDDLE_LEFT: "X__OXX_OO",
        PLAY_O_BOTTOM_LEFT: "X___XXOOO"
      }
    },
    X___X_XOO: {
      on: {
        PLAY_O_TOP_CENTER: "XO__X_XOO",
        PLAY_O_TOP_RIGHT: "X_O_X_XOO",
        PLAY_O_MIDDLE_LEFT: "X__OX_XOO",
        PLAY_O_MIDDLE_RIGHT: "X___XOXOO"
      }
    },
    X___X__OO: {
      on: {
        PLAY_X_TOP_CENTER: "XX__X__OO",
        PLAY_X_TOP_RIGHT: "X_X_X__OO",
        PLAY_X_MIDDLE_LEFT: "X__XX__OO",
        PLAY_X_MIDDLE_RIGHT: "X___XX_OO",
        PLAY_X_BOTTOM_LEFT: "X___X_XOO"
      }
    },
    X___X__O_: {
      on: {
        PLAY_O_TOP_CENTER: "XO__X__O_",
        PLAY_O_TOP_RIGHT: "X_O_X__O_",
        PLAY_O_MIDDLE_LEFT: "X__OX__O_",
        PLAY_O_MIDDLE_RIGHT: "X___XO_O_",
        PLAY_O_BOTTOM_LEFT: "X___X_OO_",
        PLAY_O_BOTTOM_RIGHT: "X___X__OO"
      }
    },
    X____XXOO: {
      on: {
        PLAY_O_TOP_CENTER: "XO___XXOO",
        PLAY_O_TOP_RIGHT: "X_O__XXOO",
        PLAY_O_MIDDLE_LEFT: "X__O_XXOO",
        PLAY_O_CENTER: "X___OXXOO"
      }
    },
    X____X_OO: {
      on: {
        PLAY_X_TOP_CENTER: "XX___X_OO",
        PLAY_X_TOP_RIGHT: "X_X__X_OO",
        PLAY_X_MIDDLE_LEFT: "X__X_X_OO",
        PLAY_X_CENTER: "X___XX_OO",
        PLAY_X_BOTTOM_LEFT: "X____XXOO"
      }
    },
    X____X_O_: {
      on: {
        PLAY_O_TOP_CENTER: "XO___X_O_",
        PLAY_O_TOP_RIGHT: "X_O__X_O_",
        PLAY_O_MIDDLE_LEFT: "X__O_X_O_",
        PLAY_O_CENTER: "X___OX_O_",
        PLAY_O_BOTTOM_LEFT: "X____XOO_",
        PLAY_O_BOTTOM_RIGHT: "X____X_OO"
      }
    },
    X_____XOO: {
      on: {
        PLAY_X_TOP_CENTER: "XX____XOO",
        PLAY_X_TOP_RIGHT: "X_X___XOO",
        PLAY_X_MIDDLE_LEFT: "X__X__XOO",
        PLAY_X_CENTER: "X___X_XOO",
        PLAY_X_MIDDLE_RIGHT: "X____XXOO"
      }
    },
    X_____XO_: {
      on: {
        PLAY_O_TOP_CENTER: "XO____XO_",
        PLAY_O_TOP_RIGHT: "X_O___XO_",
        PLAY_O_MIDDLE_LEFT: "X__O__XO_",
        PLAY_O_CENTER: "X___O_XO_",
        PLAY_O_MIDDLE_RIGHT: "X____OXO_",
        PLAY_O_BOTTOM_RIGHT: "X_____XOO"
      }
    },
    X______OX: {
      on: {
        PLAY_O_TOP_CENTER: "XO_____OX",
        PLAY_O_TOP_RIGHT: "X_O____OX",
        PLAY_O_MIDDLE_LEFT: "X__O___OX",
        PLAY_O_CENTER: "X___O__OX",
        PLAY_O_MIDDLE_RIGHT: "X____O_OX",
        PLAY_O_BOTTOM_LEFT: "X_____OOX"
      }
    },
    X______O_: {
      on: {
        PLAY_X_TOP_CENTER: "XX_____O_",
        PLAY_X_TOP_RIGHT: "X_X____O_",
        PLAY_X_MIDDLE_LEFT: "X__X___O_",
        PLAY_X_CENTER: "X___X__O_",
        PLAY_X_MIDDLE_RIGHT: "X____X_O_",
        PLAY_X_BOTTOM_LEFT: "X_____XO_",
        PLAY_X_BOTTOM_RIGHT: "X______OX"
      }
    },
    XX______O: {
      on: {
        PLAY_O_TOP_RIGHT: "XXO_____O",
        PLAY_O_MIDDLE_LEFT: "XX_O____O",
        PLAY_O_CENTER: "XX__O___O",
        PLAY_O_MIDDLE_RIGHT: "XX___O__O",
        PLAY_O_BOTTOM_LEFT: "XX____O_O",
        PLAY_O_BOTTOM_CENTER: "XX_____OO"
      }
    },
    X_X_____O: {
      on: {
        PLAY_O_TOP_CENTER: "XOX_____O",
        PLAY_O_MIDDLE_LEFT: "X_XO____O",
        PLAY_O_CENTER: "X_X_O___O",
        PLAY_O_MIDDLE_RIGHT: "X_X__O__O",
        PLAY_O_BOTTOM_LEFT: "X_X___O_O",
        PLAY_O_BOTTOM_CENTER: "X_X____OO"
      }
    },
    X__X____O: {
      on: {
        PLAY_O_TOP_CENTER: "XO_X____O",
        PLAY_O_TOP_RIGHT: "X_OX____O",
        PLAY_O_CENTER: "X__XO___O",
        PLAY_O_MIDDLE_RIGHT: "X__X_O__O",
        PLAY_O_BOTTOM_LEFT: "X__X__O_O",
        PLAY_O_BOTTOM_CENTER: "X__X___OO"
      }
    },
    X___X___O: {
      on: {
        PLAY_O_TOP_CENTER: "XO__X___O",
        PLAY_O_TOP_RIGHT: "X_O_X___O",
        PLAY_O_MIDDLE_LEFT: "X__OX___O",
        PLAY_O_MIDDLE_RIGHT: "X___XO__O",
        PLAY_O_BOTTOM_LEFT: "X___X_O_O",
        PLAY_O_BOTTOM_CENTER: "X___X__OO"
      }
    },
    X____X__O: {
      on: {
        PLAY_O_TOP_CENTER: "XO___X__O",
        PLAY_O_TOP_RIGHT: "X_O__X__O",
        PLAY_O_MIDDLE_LEFT: "X__O_X__O",
        PLAY_O_CENTER: "X___OX__O",
        PLAY_O_BOTTOM_LEFT: "X____XO_O",
        PLAY_O_BOTTOM_CENTER: "X____X_OO"
      }
    },
    X_____X_O: {
      on: {
        PLAY_O_TOP_CENTER: "XO____X_O",
        PLAY_O_TOP_RIGHT: "X_O___X_O",
        PLAY_O_MIDDLE_LEFT: "X__O__X_O",
        PLAY_O_CENTER: "X___O_X_O",
        PLAY_O_MIDDLE_RIGHT: "X____OX_O",
        PLAY_O_BOTTOM_CENTER: "X_____XOO"
      }
    },
    X______XO: {
      on: {
        PLAY_O_TOP_CENTER: "XO_____XO",
        PLAY_O_TOP_RIGHT: "X_O____XO",
        PLAY_O_MIDDLE_LEFT: "X__O___XO",
        PLAY_O_CENTER: "X___O__XO",
        PLAY_O_MIDDLE_RIGHT: "X____O_XO",
        PLAY_O_BOTTOM_LEFT: "X_____OXO"
      }
    },
    X_______O: {
      on: {
        PLAY_X_TOP_CENTER: "XX______O",
        PLAY_X_TOP_RIGHT: "X_X_____O",
        PLAY_X_MIDDLE_LEFT: "X__X____O",
        PLAY_X_CENTER: "X___X___O",
        PLAY_X_MIDDLE_RIGHT: "X____X__O",
        PLAY_X_BOTTOM_LEFT: "X_____X_O",
        PLAY_X_BOTTOM_CENTER: "X______XO"
      }
    },
    X________: {
      on: {
        PLAY_O_TOP_CENTER: "XO_______",
        PLAY_O_TOP_RIGHT: "X_O______",
        PLAY_O_MIDDLE_LEFT: "X__O_____",
        PLAY_O_CENTER: "X___O____",
        PLAY_O_MIDDLE_RIGHT: "X____O___",
        PLAY_O_BOTTOM_LEFT: "X_____O__",
        PLAY_O_BOTTOM_CENTER: "X______O_",
        PLAY_O_BOTTOM_RIGHT: "X_______O"
      }
    },
    OXXOXOX__: { on: { "": "X_WINS" } },
    OXXOXO_X_: { on: { "": "X_WINS" } },
    OXXOXOO_X: { on: { "": "O_WINS" } },
    OXXOXOXOX: { on: { "": "X_WINS" } },
    OXXOXO_OX: { on: { PLAY_X_BOTTOM_LEFT: "OXXOXOXOX" } },
    OXXOXO__X: {
      on: {
        PLAY_O_BOTTOM_LEFT: "OXXOXOO_X",
        PLAY_O_BOTTOM_CENTER: "OXXOXO_OX"
      }
    },
    OXXOXO___: {
      on: {
        PLAY_X_BOTTOM_LEFT: "OXXOXOX__",
        PLAY_X_BOTTOM_CENTER: "OXXOXO_X_",
        PLAY_X_BOTTOM_RIGHT: "OXXOXO__X"
      }
    },
    OXXOX_O__: { on: { "": "O_WINS" } },
    OXXOXXOO_: { on: { "": "O_WINS" } },
    OXXOXXXOO: { on: { "": "X_WINS" } },
    OXXOXX_OO: { on: { PLAY_X_BOTTOM_LEFT: "OXXOXXXOO" } },
    OXXOXX_O_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "OXXOXXOO_",
        PLAY_O_BOTTOM_RIGHT: "OXXOXX_OO"
      }
    },
    OXXOX_XO_: { on: { "": "X_WINS" } },
    OXXOX_OOX: { on: { "": "O_WINS" } },
    OXXOX__OX: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXXOXO_OX",
        PLAY_O_BOTTOM_LEFT: "OXXOX_OOX"
      }
    },
    OXXOX__O_: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OXXOXX_O_",
        PLAY_X_BOTTOM_LEFT: "OXXOX_XO_",
        PLAY_X_BOTTOM_RIGHT: "OXXOX__OX"
      }
    },
    OXXOXXO_O: { on: { "": "O_WINS" } },
    OXXOXX__O: {
      on: {
        PLAY_O_BOTTOM_LEFT: "OXXOXXO_O",
        PLAY_O_BOTTOM_CENTER: "OXXOXX_OO"
      }
    },
    OXXOX_X_O: { on: { "": "X_WINS" } },
    OXXOX__XO: { on: { "": "X_WINS" } },
    OXXOX___O: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OXXOXX__O",
        PLAY_X_BOTTOM_LEFT: "OXXOX_X_O",
        PLAY_X_BOTTOM_CENTER: "OXXOX__XO"
      }
    },
    OXXOX____: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXXOXO___",
        PLAY_O_BOTTOM_LEFT: "OXXOX_O__",
        PLAY_O_BOTTOM_CENTER: "OXXOX__O_",
        PLAY_O_BOTTOM_RIGHT: "OXXOX___O"
      }
    },
    OXXOOXXOX: { on: { "": "X_WINS" } },
    OXXOOXXO_: { on: { PLAY_X_BOTTOM_RIGHT: "OXXOOXXOX" } },
    OXXOOXX_O: { on: { "": "O_WINS" } },
    OXXOOXX__: {
      on: {
        PLAY_O_BOTTOM_CENTER: "OXXOOXXO_",
        PLAY_O_BOTTOM_RIGHT: "OXXOOXX_O"
      }
    },
    OXXOOXOX_: { on: { "": "O_WINS" } },
    OXXOOX_XO: { on: { "": "O_WINS" } },
    OXXOOX_X_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "OXXOOXOX_",
        PLAY_O_BOTTOM_RIGHT: "OXXOOX_XO"
      }
    },
    OXXOOX__X: { on: { "": "X_WINS" } },
    OXXOOX___: {
      on: {
        PLAY_X_BOTTOM_LEFT: "OXXOOXX__",
        PLAY_X_BOTTOM_CENTER: "OXXOOX_X_",
        PLAY_X_BOTTOM_RIGHT: "OXXOOX__X"
      }
    },
    OXXO_XO__: { on: { "": "O_WINS" } },
    OXXO_XXOO: { on: { PLAY_X_CENTER: "OXXOXXXOO" } },
    OXXO_XXO_: {
      on: { PLAY_O_CENTER: "OXXOOXXO_", PLAY_O_BOTTOM_RIGHT: "OXXO_XXOO" }
    },
    OXXO_X_OX: { on: { "": "X_WINS" } },
    OXXO_X_O_: {
      on: {
        PLAY_X_CENTER: "OXXOXX_O_",
        PLAY_X_BOTTOM_LEFT: "OXXO_XXO_",
        PLAY_X_BOTTOM_RIGHT: "OXXO_X_OX"
      }
    },
    OXXO_XX_O: {
      on: { PLAY_O_CENTER: "OXXOOXX_O", PLAY_O_BOTTOM_CENTER: "OXXO_XXOO" }
    },
    OXXO_XOXO: { on: { "": "O_WINS" } },
    OXXO_X_XO: {
      on: { PLAY_O_CENTER: "OXXOOX_XO", PLAY_O_BOTTOM_LEFT: "OXXO_XOXO" }
    },
    OXXO_X__O: {
      on: {
        PLAY_X_CENTER: "OXXOXX__O",
        PLAY_X_BOTTOM_LEFT: "OXXO_XX_O",
        PLAY_X_BOTTOM_CENTER: "OXXO_X_XO"
      }
    },
    OXXO_X___: {
      on: {
        PLAY_O_CENTER: "OXXOOX___",
        PLAY_O_BOTTOM_LEFT: "OXXO_XO__",
        PLAY_O_BOTTOM_CENTER: "OXXO_X_O_",
        PLAY_O_BOTTOM_RIGHT: "OXXO_X__O"
      }
    },
    OXXOOOXX_: { on: { "": "O_WINS" } },
    OXXOO_XXO: { on: { "": "O_WINS" } },
    OXXOO_XX_: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXXOOOXX_",
        PLAY_O_BOTTOM_RIGHT: "OXXOO_XXO"
      }
    },
    OXXOOOX_X: { on: { "": "O_WINS" } },
    OXXOO_XOX: { on: { PLAY_X_MIDDLE_RIGHT: "OXXOOXXOX" } },
    OXXOO_X_X: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXXOOOX_X",
        PLAY_O_BOTTOM_CENTER: "OXXOO_XOX"
      }
    },
    OXXOO_X__: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OXXOOXX__",
        PLAY_X_BOTTOM_CENTER: "OXXOO_XX_",
        PLAY_X_BOTTOM_RIGHT: "OXXOO_X_X"
      }
    },
    OXXOXOXXO: { on: { "": "X_WINS" } },
    OXXO_OXXO: { on: { PLAY_X_CENTER: "OXXOXOXXO" } },
    OXXO_OXX_: {
      on: { PLAY_O_CENTER: "OXXOOOXX_", PLAY_O_BOTTOM_RIGHT: "OXXO_OXXO" }
    },
    OXXO_OXOX: { on: { PLAY_X_CENTER: "OXXOXOXOX" } },
    OXXO_OX_X: {
      on: { PLAY_O_CENTER: "OXXOOOX_X", PLAY_O_BOTTOM_CENTER: "OXXO_OXOX" }
    },
    OXXO_OX__: {
      on: {
        PLAY_X_CENTER: "OXXOXOX__",
        PLAY_X_BOTTOM_CENTER: "OXXO_OXX_",
        PLAY_X_BOTTOM_RIGHT: "OXXO_OX_X"
      }
    },
    OXXO__XOX: {
      on: { PLAY_O_CENTER: "OXXOO_XOX", PLAY_O_MIDDLE_RIGHT: "OXXO_OXOX" }
    },
    OXXO__XO_: {
      on: {
        PLAY_X_CENTER: "OXXOX_XO_",
        PLAY_X_MIDDLE_RIGHT: "OXXO_XXO_",
        PLAY_X_BOTTOM_RIGHT: "OXXO__XOX"
      }
    },
    OXXO__XXO: {
      on: { PLAY_O_CENTER: "OXXOO_XXO", PLAY_O_MIDDLE_RIGHT: "OXXO_OXXO" }
    },
    OXXO__X_O: {
      on: {
        PLAY_X_CENTER: "OXXOX_X_O",
        PLAY_X_MIDDLE_RIGHT: "OXXO_XX_O",
        PLAY_X_BOTTOM_CENTER: "OXXO__XXO"
      }
    },
    OXXO__X__: {
      on: {
        PLAY_O_CENTER: "OXXOO_X__",
        PLAY_O_MIDDLE_RIGHT: "OXXO_OX__",
        PLAY_O_BOTTOM_CENTER: "OXXO__XO_",
        PLAY_O_BOTTOM_RIGHT: "OXXO__X_O"
      }
    },
    OXXOOO_XX: { on: { "": "O_WINS" } },
    OXXOO_OXX: { on: { "": "O_WINS" } },
    OXXOO__XX: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXXOOO_XX",
        PLAY_O_BOTTOM_LEFT: "OXXOO_OXX"
      }
    },
    OXXOO__X_: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OXXOOX_X_",
        PLAY_X_BOTTOM_LEFT: "OXXOO_XX_",
        PLAY_X_BOTTOM_RIGHT: "OXXOO__XX"
      }
    },
    OXXO_OOXX: { on: { "": "O_WINS" } },
    OXXO_O_XX: {
      on: { PLAY_O_CENTER: "OXXOOO_XX", PLAY_O_BOTTOM_LEFT: "OXXO_OOXX" }
    },
    OXXO_O_X_: {
      on: {
        PLAY_X_CENTER: "OXXOXO_X_",
        PLAY_X_BOTTOM_LEFT: "OXXO_OXX_",
        PLAY_X_BOTTOM_RIGHT: "OXXO_O_XX"
      }
    },
    OXXO__OX_: { on: { "": "O_WINS" } },
    OXXO___XO: {
      on: {
        PLAY_X_CENTER: "OXXOX__XO",
        PLAY_X_MIDDLE_RIGHT: "OXXO_X_XO",
        PLAY_X_BOTTOM_LEFT: "OXXO__XXO"
      }
    },
    OXXO___X_: {
      on: {
        PLAY_O_CENTER: "OXXOO__X_",
        PLAY_O_MIDDLE_RIGHT: "OXXO_O_X_",
        PLAY_O_BOTTOM_LEFT: "OXXO__OX_",
        PLAY_O_BOTTOM_RIGHT: "OXXO___XO"
      }
    },
    OXXOO___X: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OXXOOX__X",
        PLAY_X_BOTTOM_LEFT: "OXXOO_X_X",
        PLAY_X_BOTTOM_CENTER: "OXXOO__XX"
      }
    },
    OXXO_O__X: {
      on: {
        PLAY_X_CENTER: "OXXOXO__X",
        PLAY_X_BOTTOM_LEFT: "OXXO_OX_X",
        PLAY_X_BOTTOM_CENTER: "OXXO_O_XX"
      }
    },
    OXXO__O_X: { on: { "": "O_WINS" } },
    OXXO___OX: {
      on: {
        PLAY_X_CENTER: "OXXOX__OX",
        PLAY_X_MIDDLE_RIGHT: "OXXO_X_OX",
        PLAY_X_BOTTOM_LEFT: "OXXO__XOX"
      }
    },
    OXXO____X: {
      on: {
        PLAY_O_CENTER: "OXXOO___X",
        PLAY_O_MIDDLE_RIGHT: "OXXO_O__X",
        PLAY_O_BOTTOM_LEFT: "OXXO__O_X",
        PLAY_O_BOTTOM_CENTER: "OXXO___OX"
      }
    },
    OXXO_____: {
      on: {
        PLAY_X_CENTER: "OXXOX____",
        PLAY_X_MIDDLE_RIGHT: "OXXO_X___",
        PLAY_X_BOTTOM_LEFT: "OXXO__X__",
        PLAY_X_BOTTOM_CENTER: "OXXO___X_",
        PLAY_X_BOTTOM_RIGHT: "OXXO____X"
      }
    },
    OXXXOOXOX: { on: { "": "DRAW" } },
    OXXXOOXO_: { on: { PLAY_X_BOTTOM_RIGHT: "OXXXOOXOX" } },
    OXXXOOX_O: { on: { "": "O_WINS" } },
    OXXXOOX__: {
      on: {
        PLAY_O_BOTTOM_CENTER: "OXXXOOXO_",
        PLAY_O_BOTTOM_RIGHT: "OXXXOOX_O"
      }
    },
    OXXXOOOXX: { on: { "": "DRAW" } },
    OXXXOOOX_: { on: { PLAY_X_BOTTOM_RIGHT: "OXXXOOOXX" } },
    OXXXOO_XO: { on: { "": "O_WINS" } },
    OXXXOO_X_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "OXXXOOOX_",
        PLAY_O_BOTTOM_RIGHT: "OXXXOO_XO"
      }
    },
    OXXXOOO_X: { on: { PLAY_X_BOTTOM_CENTER: "OXXXOOOXX" } },
    OXXXOO_OX: { on: { PLAY_X_BOTTOM_LEFT: "OXXXOOXOX" } },
    OXXXOO__X: {
      on: {
        PLAY_O_BOTTOM_LEFT: "OXXXOOO_X",
        PLAY_O_BOTTOM_CENTER: "OXXXOO_OX"
      }
    },
    OXXXOO___: {
      on: {
        PLAY_X_BOTTOM_LEFT: "OXXXOOX__",
        PLAY_X_BOTTOM_CENTER: "OXXXOO_X_",
        PLAY_X_BOTTOM_RIGHT: "OXXXOO__X"
      }
    },
    OXXXOXOOX: { on: { "": "X_WINS" } },
    OXXXOXOO_: { on: { PLAY_X_BOTTOM_RIGHT: "OXXXOXOOX" } },
    OXXXOXO_O: { on: { "": "O_WINS" } },
    OXXXOXO__: {
      on: {
        PLAY_O_BOTTOM_CENTER: "OXXXOXOO_",
        PLAY_O_BOTTOM_RIGHT: "OXXXOXO_O"
      }
    },
    OXXXO_OXO: { on: { "": "O_WINS" } },
    OXXXO_OX_: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXXXOOOX_",
        PLAY_O_BOTTOM_RIGHT: "OXXXO_OXO"
      }
    },
    OXXXO_OOX: { on: { PLAY_X_MIDDLE_RIGHT: "OXXXOXOOX" } },
    OXXXO_O_X: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXXXOOO_X",
        PLAY_O_BOTTOM_CENTER: "OXXXO_OOX"
      }
    },
    OXXXO_O__: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OXXXOXO__",
        PLAY_X_BOTTOM_CENTER: "OXXXO_OX_",
        PLAY_X_BOTTOM_RIGHT: "OXXXO_O_X"
      }
    },
    OXXXOX_OO: { on: { "": "O_WINS" } },
    OXXXOX_O_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "OXXXOXOO_",
        PLAY_O_BOTTOM_RIGHT: "OXXXOX_OO"
      }
    },
    OXXXO_XOO: { on: { "": "O_WINS" } },
    OXXXO_XO_: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXXXOOXO_",
        PLAY_O_BOTTOM_RIGHT: "OXXXO_XOO"
      }
    },
    OXXXO__OX: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXXXOO_OX",
        PLAY_O_BOTTOM_LEFT: "OXXXO_OOX"
      }
    },
    OXXXO__O_: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OXXXOX_O_",
        PLAY_X_BOTTOM_LEFT: "OXXXO_XO_",
        PLAY_X_BOTTOM_RIGHT: "OXXXO__OX"
      }
    },
    OXXXO___O: { on: { "": "O_WINS" } },
    OXXXO____: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXXXOO___",
        PLAY_O_BOTTOM_LEFT: "OXXXO_O__",
        PLAY_O_BOTTOM_CENTER: "OXXXO__O_",
        PLAY_O_BOTTOM_RIGHT: "OXXXO___O"
      }
    },
    OXX_OXOXO: { on: { "": "O_WINS" } },
    OXX_OXOX_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXOOXOX_",
        PLAY_O_BOTTOM_RIGHT: "OXX_OXOXO"
      }
    },
    OXX_OXO_X: { on: { "": "X_WINS" } },
    OXX_OXO__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXXOXO__",
        PLAY_X_BOTTOM_CENTER: "OXX_OXOX_",
        PLAY_X_BOTTOM_RIGHT: "OXX_OXO_X"
      }
    },
    OXX_OXXOO: { on: { "": "O_WINS" } },
    OXX_OXXO_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXOOXXO_",
        PLAY_O_BOTTOM_RIGHT: "OXX_OXXOO"
      }
    },
    OXX_OX_OX: { on: { "": "X_WINS" } },
    OXX_OX_O_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXXOX_O_",
        PLAY_X_BOTTOM_LEFT: "OXX_OXXO_",
        PLAY_X_BOTTOM_RIGHT: "OXX_OX_OX"
      }
    },
    OXX_OX__O: { on: { "": "O_WINS" } },
    OXX_OX___: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXOOX___",
        PLAY_O_BOTTOM_LEFT: "OXX_OXO__",
        PLAY_O_BOTTOM_CENTER: "OXX_OX_O_",
        PLAY_O_BOTTOM_RIGHT: "OXX_OX__O"
      }
    },
    OXX_OOXXO: { on: { "": "O_WINS" } },
    OXX_OOXX_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXOOOXX_",
        PLAY_O_BOTTOM_RIGHT: "OXX_OOXXO"
      }
    },
    OXX_OOXOX: { on: { PLAY_X_MIDDLE_LEFT: "OXXXOOXOX" } },
    OXX_OOX_X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXOOOX_X",
        PLAY_O_BOTTOM_CENTER: "OXX_OOXOX"
      }
    },
    OXX_OOX__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXXOOX__",
        PLAY_X_BOTTOM_CENTER: "OXX_OOXX_",
        PLAY_X_BOTTOM_RIGHT: "OXX_OOX_X"
      }
    },
    OXX_O_XOX: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXOO_XOX",
        PLAY_O_MIDDLE_RIGHT: "OXX_OOXOX"
      }
    },
    OXX_O_XO_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXXO_XO_",
        PLAY_X_MIDDLE_RIGHT: "OXX_OXXO_",
        PLAY_X_BOTTOM_RIGHT: "OXX_O_XOX"
      }
    },
    OXX_O_X_O: { on: { "": "O_WINS" } },
    OXX_O_X__: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXOO_X__",
        PLAY_O_MIDDLE_RIGHT: "OXX_OOX__",
        PLAY_O_BOTTOM_CENTER: "OXX_O_XO_",
        PLAY_O_BOTTOM_RIGHT: "OXX_O_X_O"
      }
    },
    OXX_OOOXX: { on: { PLAY_X_MIDDLE_LEFT: "OXXXOOOXX" } },
    OXX_OO_XX: {
      on: { PLAY_O_MIDDLE_LEFT: "OXXOOO_XX", PLAY_O_BOTTOM_LEFT: "OXX_OOOXX" }
    },
    OXX_OO_X_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXXOO_X_",
        PLAY_X_BOTTOM_LEFT: "OXX_OOXX_",
        PLAY_X_BOTTOM_RIGHT: "OXX_OO_XX"
      }
    },
    OXX_O_OXX: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXOO_OXX",
        PLAY_O_MIDDLE_RIGHT: "OXX_OOOXX"
      }
    },
    OXX_O_OX_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXXO_OX_",
        PLAY_X_MIDDLE_RIGHT: "OXX_OXOX_",
        PLAY_X_BOTTOM_RIGHT: "OXX_O_OXX"
      }
    },
    OXX_O__XO: { on: { "": "O_WINS" } },
    OXX_O__X_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXOO__X_",
        PLAY_O_MIDDLE_RIGHT: "OXX_OO_X_",
        PLAY_O_BOTTOM_LEFT: "OXX_O_OX_",
        PLAY_O_BOTTOM_RIGHT: "OXX_O__XO"
      }
    },
    OXX_OO__X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXXOO__X",
        PLAY_X_BOTTOM_LEFT: "OXX_OOX_X",
        PLAY_X_BOTTOM_CENTER: "OXX_OO_XX"
      }
    },
    OXX_O_O_X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXXO_O_X",
        PLAY_X_MIDDLE_RIGHT: "OXX_OXO_X",
        PLAY_X_BOTTOM_CENTER: "OXX_O_OXX"
      }
    },
    OXX_O__OX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXXO__OX",
        PLAY_X_MIDDLE_RIGHT: "OXX_OX_OX",
        PLAY_X_BOTTOM_LEFT: "OXX_O_XOX"
      }
    },
    OXX_O___X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXOO___X",
        PLAY_O_MIDDLE_RIGHT: "OXX_OO__X",
        PLAY_O_BOTTOM_LEFT: "OXX_O_O_X",
        PLAY_O_BOTTOM_CENTER: "OXX_O__OX"
      }
    },
    OXX_O____: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXXO____",
        PLAY_X_MIDDLE_RIGHT: "OXX_OX___",
        PLAY_X_BOTTOM_LEFT: "OXX_O_X__",
        PLAY_X_BOTTOM_CENTER: "OXX_O__X_",
        PLAY_X_BOTTOM_RIGHT: "OXX_O___X"
      }
    },
    OXXXXOOOX: { on: { "": "DRAW" } },
    OXXXXOOO_: { on: { PLAY_X_BOTTOM_RIGHT: "OXXXXOOOX" } },
    OXXXXOOXO: { on: { "": "X_WINS" } },
    OXXXXOO_O: { on: { PLAY_X_BOTTOM_CENTER: "OXXXXOOXO" } },
    OXXXXOO__: {
      on: {
        PLAY_O_BOTTOM_CENTER: "OXXXXOOO_",
        PLAY_O_BOTTOM_RIGHT: "OXXXXOO_O"
      }
    },
    OXXX_OOXO: { on: { PLAY_X_CENTER: "OXXXXOOXO" } },
    OXXX_OOX_: {
      on: { PLAY_O_CENTER: "OXXXOOOX_", PLAY_O_BOTTOM_RIGHT: "OXXX_OOXO" }
    },
    OXXX_OOOX: { on: { PLAY_X_CENTER: "OXXXXOOOX" } },
    OXXX_OO_X: {
      on: { PLAY_O_CENTER: "OXXXOOO_X", PLAY_O_BOTTOM_CENTER: "OXXX_OOOX" }
    },
    OXXX_OO__: {
      on: {
        PLAY_X_CENTER: "OXXXXOO__",
        PLAY_X_BOTTOM_CENTER: "OXXX_OOX_",
        PLAY_X_BOTTOM_RIGHT: "OXXX_OO_X"
      }
    },
    OXXXXOXOO: { on: { "": "X_WINS" } },
    OXXXXO_OO: { on: { PLAY_X_BOTTOM_LEFT: "OXXXXOXOO" } },
    OXXXXO_O_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "OXXXXOOO_",
        PLAY_O_BOTTOM_RIGHT: "OXXXXO_OO"
      }
    },
    OXXX_OXOO: { on: { PLAY_X_CENTER: "OXXXXOXOO" } },
    OXXX_OXO_: {
      on: { PLAY_O_CENTER: "OXXXOOXO_", PLAY_O_BOTTOM_RIGHT: "OXXX_OXOO" }
    },
    OXXX_O_OX: {
      on: { PLAY_O_CENTER: "OXXXOO_OX", PLAY_O_BOTTOM_LEFT: "OXXX_OOOX" }
    },
    OXXX_O_O_: {
      on: {
        PLAY_X_CENTER: "OXXXXO_O_",
        PLAY_X_BOTTOM_LEFT: "OXXX_OXO_",
        PLAY_X_BOTTOM_RIGHT: "OXXX_O_OX"
      }
    },
    OXXXXO__O: {
      on: {
        PLAY_O_BOTTOM_LEFT: "OXXXXOO_O",
        PLAY_O_BOTTOM_CENTER: "OXXXXO_OO"
      }
    },
    OXXX_OX_O: {
      on: { PLAY_O_CENTER: "OXXXOOX_O", PLAY_O_BOTTOM_CENTER: "OXXX_OXOO" }
    },
    OXXX_O_XO: {
      on: { PLAY_O_CENTER: "OXXXOO_XO", PLAY_O_BOTTOM_LEFT: "OXXX_OOXO" }
    },
    OXXX_O__O: {
      on: {
        PLAY_X_CENTER: "OXXXXO__O",
        PLAY_X_BOTTOM_LEFT: "OXXX_OX_O",
        PLAY_X_BOTTOM_CENTER: "OXXX_O_XO"
      }
    },
    OXXX_O___: {
      on: {
        PLAY_O_CENTER: "OXXXOO___",
        PLAY_O_BOTTOM_LEFT: "OXXX_OO__",
        PLAY_O_BOTTOM_CENTER: "OXXX_O_O_",
        PLAY_O_BOTTOM_RIGHT: "OXXX_O__O"
      }
    },
    OXX_XOOX_: { on: { "": "X_WINS" } },
    OXX_XOOOX: { on: { PLAY_X_MIDDLE_LEFT: "OXXXXOOOX" } },
    OXX_XOO_X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXOXOO_X",
        PLAY_O_BOTTOM_CENTER: "OXX_XOOOX"
      }
    },
    OXX_XOO__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXXXOO__",
        PLAY_X_BOTTOM_CENTER: "OXX_XOOX_",
        PLAY_X_BOTTOM_RIGHT: "OXX_XOO_X"
      }
    },
    OXX_XOXO_: { on: { "": "X_WINS" } },
    OXX_XO_OX: {
      on: { PLAY_O_MIDDLE_LEFT: "OXXOXO_OX", PLAY_O_BOTTOM_LEFT: "OXX_XOOOX" }
    },
    OXX_XO_O_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXXXO_O_",
        PLAY_X_BOTTOM_LEFT: "OXX_XOXO_",
        PLAY_X_BOTTOM_RIGHT: "OXX_XO_OX"
      }
    },
    OXX_XOX_O: { on: { "": "X_WINS" } },
    OXX_XO_XO: { on: { "": "X_WINS" } },
    OXX_XO__O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXXXO__O",
        PLAY_X_BOTTOM_LEFT: "OXX_XOX_O",
        PLAY_X_BOTTOM_CENTER: "OXX_XO_XO"
      }
    },
    OXX_XO___: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXOXO___",
        PLAY_O_BOTTOM_LEFT: "OXX_XOO__",
        PLAY_O_BOTTOM_CENTER: "OXX_XO_O_",
        PLAY_O_BOTTOM_RIGHT: "OXX_XO__O"
      }
    },
    OXX__OXOX: {
      on: { PLAY_O_MIDDLE_LEFT: "OXXO_OXOX", PLAY_O_CENTER: "OXX_OOXOX" }
    },
    OXX__OXO_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXX_OXO_",
        PLAY_X_CENTER: "OXX_XOXO_",
        PLAY_X_BOTTOM_RIGHT: "OXX__OXOX"
      }
    },
    OXX__OXXO: {
      on: { PLAY_O_MIDDLE_LEFT: "OXXO_OXXO", PLAY_O_CENTER: "OXX_OOXXO" }
    },
    OXX__OX_O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXX_OX_O",
        PLAY_X_CENTER: "OXX_XOX_O",
        PLAY_X_BOTTOM_CENTER: "OXX__OXXO"
      }
    },
    OXX__OX__: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXO_OX__",
        PLAY_O_CENTER: "OXX_OOX__",
        PLAY_O_BOTTOM_CENTER: "OXX__OXO_",
        PLAY_O_BOTTOM_RIGHT: "OXX__OX_O"
      }
    },
    OXX__OOXX: {
      on: { PLAY_O_MIDDLE_LEFT: "OXXO_OOXX", PLAY_O_CENTER: "OXX_OOOXX" }
    },
    OXX__OOX_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXX_OOX_",
        PLAY_X_CENTER: "OXX_XOOX_",
        PLAY_X_BOTTOM_RIGHT: "OXX__OOXX"
      }
    },
    OXX__O_XO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXX_O_XO",
        PLAY_X_CENTER: "OXX_XO_XO",
        PLAY_X_BOTTOM_LEFT: "OXX__OXXO"
      }
    },
    OXX__O_X_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXO_O_X_",
        PLAY_O_CENTER: "OXX_OO_X_",
        PLAY_O_BOTTOM_LEFT: "OXX__OOX_",
        PLAY_O_BOTTOM_RIGHT: "OXX__O_XO"
      }
    },
    OXX__OO_X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXX_OO_X",
        PLAY_X_CENTER: "OXX_XOO_X",
        PLAY_X_BOTTOM_CENTER: "OXX__OOXX"
      }
    },
    OXX__O_OX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXX_O_OX",
        PLAY_X_CENTER: "OXX_XO_OX",
        PLAY_X_BOTTOM_LEFT: "OXX__OXOX"
      }
    },
    OXX__O__X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXO_O__X",
        PLAY_O_CENTER: "OXX_OO__X",
        PLAY_O_BOTTOM_LEFT: "OXX__OO_X",
        PLAY_O_BOTTOM_CENTER: "OXX__O_OX"
      }
    },
    OXX__O___: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXX_O___",
        PLAY_X_CENTER: "OXX_XO___",
        PLAY_X_BOTTOM_LEFT: "OXX__OX__",
        PLAY_X_BOTTOM_CENTER: "OXX__O_X_",
        PLAY_X_BOTTOM_RIGHT: "OXX__O__X"
      }
    },
    OXXXX_OOO: { on: { "": "O_WINS" } },
    OXXXX_OO_: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXXXXOOO_",
        PLAY_O_BOTTOM_RIGHT: "OXXXX_OOO"
      }
    },
    OXXX_XOOO: { on: { "": "O_WINS" } },
    OXXX_XOO_: {
      on: { PLAY_O_CENTER: "OXXXOXOO_", PLAY_O_BOTTOM_RIGHT: "OXXX_XOOO" }
    },
    OXXX__OOX: {
      on: { PLAY_O_CENTER: "OXXXO_OOX", PLAY_O_MIDDLE_RIGHT: "OXXX_OOOX" }
    },
    OXXX__OO_: {
      on: {
        PLAY_X_CENTER: "OXXXX_OO_",
        PLAY_X_MIDDLE_RIGHT: "OXXX_XOO_",
        PLAY_X_BOTTOM_RIGHT: "OXXX__OOX"
      }
    },
    OXXXX_O_O: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXXXXOO_O",
        PLAY_O_BOTTOM_CENTER: "OXXXX_OOO"
      }
    },
    OXXX_XO_O: {
      on: { PLAY_O_CENTER: "OXXXOXO_O", PLAY_O_BOTTOM_CENTER: "OXXX_XOOO" }
    },
    OXXX__OXO: {
      on: { PLAY_O_CENTER: "OXXXO_OXO", PLAY_O_MIDDLE_RIGHT: "OXXX_OOXO" }
    },
    OXXX__O_O: {
      on: {
        PLAY_X_CENTER: "OXXXX_O_O",
        PLAY_X_MIDDLE_RIGHT: "OXXX_XO_O",
        PLAY_X_BOTTOM_CENTER: "OXXX__OXO"
      }
    },
    OXXX__O__: {
      on: {
        PLAY_O_CENTER: "OXXXO_O__",
        PLAY_O_MIDDLE_RIGHT: "OXXX_OO__",
        PLAY_O_BOTTOM_CENTER: "OXXX__OO_",
        PLAY_O_BOTTOM_RIGHT: "OXXX__O_O"
      }
    },
    OXX_XXOOO: { on: { "": "O_WINS" } },
    OXX_XXOO_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXOXXOO_",
        PLAY_O_BOTTOM_RIGHT: "OXX_XXOOO"
      }
    },
    OXX_X_OOX: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXOX_OOX",
        PLAY_O_MIDDLE_RIGHT: "OXX_XOOOX"
      }
    },
    OXX_X_OO_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXXX_OO_",
        PLAY_X_MIDDLE_RIGHT: "OXX_XXOO_",
        PLAY_X_BOTTOM_RIGHT: "OXX_X_OOX"
      }
    },
    OXX_XXO_O: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXOXXO_O",
        PLAY_O_BOTTOM_CENTER: "OXX_XXOOO"
      }
    },
    OXX_X_OXO: { on: { "": "X_WINS" } },
    OXX_X_O_O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXXX_O_O",
        PLAY_X_MIDDLE_RIGHT: "OXX_XXO_O",
        PLAY_X_BOTTOM_CENTER: "OXX_X_OXO"
      }
    },
    OXX_X_O__: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXOX_O__",
        PLAY_O_MIDDLE_RIGHT: "OXX_XOO__",
        PLAY_O_BOTTOM_CENTER: "OXX_X_OO_",
        PLAY_O_BOTTOM_RIGHT: "OXX_X_O_O"
      }
    },
    OXX__XOOX: { on: { "": "X_WINS" } },
    OXX__XOO_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXX_XOO_",
        PLAY_X_CENTER: "OXX_XXOO_",
        PLAY_X_BOTTOM_RIGHT: "OXX__XOOX"
      }
    },
    OXX__XOXO: {
      on: { PLAY_O_MIDDLE_LEFT: "OXXO_XOXO", PLAY_O_CENTER: "OXX_OXOXO" }
    },
    OXX__XO_O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXX_XO_O",
        PLAY_X_CENTER: "OXX_XXO_O",
        PLAY_X_BOTTOM_CENTER: "OXX__XOXO"
      }
    },
    OXX__XO__: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXO_XO__",
        PLAY_O_CENTER: "OXX_OXO__",
        PLAY_O_BOTTOM_CENTER: "OXX__XOO_",
        PLAY_O_BOTTOM_RIGHT: "OXX__XO_O"
      }
    },
    OXX___OXO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXX__OXO",
        PLAY_X_CENTER: "OXX_X_OXO",
        PLAY_X_MIDDLE_RIGHT: "OXX__XOXO"
      }
    },
    OXX___OX_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXO__OX_",
        PLAY_O_CENTER: "OXX_O_OX_",
        PLAY_O_MIDDLE_RIGHT: "OXX__OOX_",
        PLAY_O_BOTTOM_RIGHT: "OXX___OXO"
      }
    },
    OXX___OOX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXX__OOX",
        PLAY_X_CENTER: "OXX_X_OOX",
        PLAY_X_MIDDLE_RIGHT: "OXX__XOOX"
      }
    },
    OXX___O_X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXO__O_X",
        PLAY_O_CENTER: "OXX_O_O_X",
        PLAY_O_MIDDLE_RIGHT: "OXX__OO_X",
        PLAY_O_BOTTOM_CENTER: "OXX___OOX"
      }
    },
    OXX___O__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXX__O__",
        PLAY_X_CENTER: "OXX_X_O__",
        PLAY_X_MIDDLE_RIGHT: "OXX__XO__",
        PLAY_X_BOTTOM_CENTER: "OXX___OX_",
        PLAY_X_BOTTOM_RIGHT: "OXX___O_X"
      }
    },
    OXXXX__OO: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXXXXO_OO",
        PLAY_O_BOTTOM_LEFT: "OXXXX_OOO"
      }
    },
    OXXX_X_OO: {
      on: { PLAY_O_CENTER: "OXXXOX_OO", PLAY_O_BOTTOM_LEFT: "OXXX_XOOO" }
    },
    OXXX__XOO: {
      on: { PLAY_O_CENTER: "OXXXO_XOO", PLAY_O_MIDDLE_RIGHT: "OXXX_OXOO" }
    },
    OXXX___OO: {
      on: {
        PLAY_X_CENTER: "OXXXX__OO",
        PLAY_X_MIDDLE_RIGHT: "OXXX_X_OO",
        PLAY_X_BOTTOM_LEFT: "OXXX__XOO"
      }
    },
    OXXX___O_: {
      on: {
        PLAY_O_CENTER: "OXXXO__O_",
        PLAY_O_MIDDLE_RIGHT: "OXXX_O_O_",
        PLAY_O_BOTTOM_LEFT: "OXXX__OO_",
        PLAY_O_BOTTOM_RIGHT: "OXXX___OO"
      }
    },
    OXX_XX_OO: {
      on: { PLAY_O_MIDDLE_LEFT: "OXXOXX_OO", PLAY_O_BOTTOM_LEFT: "OXX_XXOOO" }
    },
    OXX_X_XOO: { on: { "": "X_WINS" } },
    OXX_X__OO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXXX__OO",
        PLAY_X_MIDDLE_RIGHT: "OXX_XX_OO",
        PLAY_X_BOTTOM_LEFT: "OXX_X_XOO"
      }
    },
    OXX_X__O_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXOX__O_",
        PLAY_O_MIDDLE_RIGHT: "OXX_XO_O_",
        PLAY_O_BOTTOM_LEFT: "OXX_X_OO_",
        PLAY_O_BOTTOM_RIGHT: "OXX_X__OO"
      }
    },
    OXX__XXOO: {
      on: { PLAY_O_MIDDLE_LEFT: "OXXO_XXOO", PLAY_O_CENTER: "OXX_OXXOO" }
    },
    OXX__X_OO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXX_X_OO",
        PLAY_X_CENTER: "OXX_XX_OO",
        PLAY_X_BOTTOM_LEFT: "OXX__XXOO"
      }
    },
    OXX__X_O_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXO_X_O_",
        PLAY_O_CENTER: "OXX_OX_O_",
        PLAY_O_BOTTOM_LEFT: "OXX__XOO_",
        PLAY_O_BOTTOM_RIGHT: "OXX__X_OO"
      }
    },
    OXX___XOO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXX__XOO",
        PLAY_X_CENTER: "OXX_X_XOO",
        PLAY_X_MIDDLE_RIGHT: "OXX__XXOO"
      }
    },
    OXX___XO_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXO__XO_",
        PLAY_O_CENTER: "OXX_O_XO_",
        PLAY_O_MIDDLE_RIGHT: "OXX__OXO_",
        PLAY_O_BOTTOM_RIGHT: "OXX___XOO"
      }
    },
    OXX____OX: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXO___OX",
        PLAY_O_CENTER: "OXX_O__OX",
        PLAY_O_MIDDLE_RIGHT: "OXX__O_OX",
        PLAY_O_BOTTOM_LEFT: "OXX___OOX"
      }
    },
    OXX____O_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXX___O_",
        PLAY_X_CENTER: "OXX_X__O_",
        PLAY_X_MIDDLE_RIGHT: "OXX__X_O_",
        PLAY_X_BOTTOM_LEFT: "OXX___XO_",
        PLAY_X_BOTTOM_RIGHT: "OXX____OX"
      }
    },
    OXXX____O: {
      on: {
        PLAY_O_CENTER: "OXXXO___O",
        PLAY_O_MIDDLE_RIGHT: "OXXX_O__O",
        PLAY_O_BOTTOM_LEFT: "OXXX__O_O",
        PLAY_O_BOTTOM_CENTER: "OXXX___OO"
      }
    },
    OXX_X___O: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXOX___O",
        PLAY_O_MIDDLE_RIGHT: "OXX_XO__O",
        PLAY_O_BOTTOM_LEFT: "OXX_X_O_O",
        PLAY_O_BOTTOM_CENTER: "OXX_X__OO"
      }
    },
    OXX__X__O: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXO_X__O",
        PLAY_O_CENTER: "OXX_OX__O",
        PLAY_O_BOTTOM_LEFT: "OXX__XO_O",
        PLAY_O_BOTTOM_CENTER: "OXX__X_OO"
      }
    },
    OXX___X_O: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXO__X_O",
        PLAY_O_CENTER: "OXX_O_X_O",
        PLAY_O_MIDDLE_RIGHT: "OXX__OX_O",
        PLAY_O_BOTTOM_CENTER: "OXX___XOO"
      }
    },
    OXX____XO: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXO___XO",
        PLAY_O_CENTER: "OXX_O__XO",
        PLAY_O_MIDDLE_RIGHT: "OXX__O_XO",
        PLAY_O_BOTTOM_LEFT: "OXX___OXO"
      }
    },
    OXX_____O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXXX____O",
        PLAY_X_CENTER: "OXX_X___O",
        PLAY_X_MIDDLE_RIGHT: "OXX__X__O",
        PLAY_X_BOTTOM_LEFT: "OXX___X_O",
        PLAY_X_BOTTOM_CENTER: "OXX____XO"
      }
    },
    OXX______: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXXO_____",
        PLAY_O_CENTER: "OXX_O____",
        PLAY_O_MIDDLE_RIGHT: "OXX__O___",
        PLAY_O_BOTTOM_LEFT: "OXX___O__",
        PLAY_O_BOTTOM_CENTER: "OXX____O_",
        PLAY_O_BOTTOM_RIGHT: "OXX_____O"
      }
    },
    OXOXXOXOX: { on: { "": "DRAW" } },
    OXOXXOXO_: { on: { PLAY_X_BOTTOM_RIGHT: "OXOXXOXOX" } },
    OXOXXOX_O: { on: { "": "O_WINS" } },
    OXOXXOX__: {
      on: {
        PLAY_O_BOTTOM_CENTER: "OXOXXOXO_",
        PLAY_O_BOTTOM_RIGHT: "OXOXXOX_O"
      }
    },
    OXOXXO_X_: { on: { "": "X_WINS" } },
    OXOXXOOXX: { on: { "": "X_WINS" } },
    OXOXXOO_X: { on: { PLAY_X_BOTTOM_CENTER: "OXOXXOOXX" } },
    OXOXXO_OX: { on: { PLAY_X_BOTTOM_LEFT: "OXOXXOXOX" } },
    OXOXXO__X: {
      on: {
        PLAY_O_BOTTOM_LEFT: "OXOXXOO_X",
        PLAY_O_BOTTOM_CENTER: "OXOXXO_OX"
      }
    },
    OXOXXO___: {
      on: {
        PLAY_X_BOTTOM_LEFT: "OXOXXOX__",
        PLAY_X_BOTTOM_CENTER: "OXOXXO_X_",
        PLAY_X_BOTTOM_RIGHT: "OXOXXO__X"
      }
    },
    OXOXXXO__: { on: { "": "X_WINS" } },
    OXOXX_OX_: { on: { "": "X_WINS" } },
    OXOXXXOOX: { on: { "": "X_WINS" } },
    OXOXX_OOX: { on: { PLAY_X_MIDDLE_RIGHT: "OXOXXXOOX" } },
    OXOXX_O_X: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXOXXOO_X",
        PLAY_O_BOTTOM_CENTER: "OXOXX_OOX"
      }
    },
    OXOXX_O__: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OXOXXXO__",
        PLAY_X_BOTTOM_CENTER: "OXOXX_OX_",
        PLAY_X_BOTTOM_RIGHT: "OXOXX_O_X"
      }
    },
    OXOXXX_O_: { on: { "": "X_WINS" } },
    OXOXXXXOO: { on: { "": "X_WINS" } },
    OXOXX_XOO: { on: { PLAY_X_MIDDLE_RIGHT: "OXOXXXXOO" } },
    OXOXX_XO_: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXOXXOXO_",
        PLAY_O_BOTTOM_RIGHT: "OXOXX_XOO"
      }
    },
    OXOXX__OX: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXOXXO_OX",
        PLAY_O_BOTTOM_LEFT: "OXOXX_OOX"
      }
    },
    OXOXX__O_: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OXOXXX_O_",
        PLAY_X_BOTTOM_LEFT: "OXOXX_XO_",
        PLAY_X_BOTTOM_RIGHT: "OXOXX__OX"
      }
    },
    OXOXXX__O: { on: { "": "X_WINS" } },
    OXOXX_X_O: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXOXXOX_O",
        PLAY_O_BOTTOM_CENTER: "OXOXX_XOO"
      }
    },
    OXOXX__XO: { on: { "": "X_WINS" } },
    OXOXX___O: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OXOXXX__O",
        PLAY_X_BOTTOM_LEFT: "OXOXX_X_O",
        PLAY_X_BOTTOM_CENTER: "OXOXX__XO"
      }
    },
    OXOXX____: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXOXXO___",
        PLAY_O_BOTTOM_LEFT: "OXOXX_O__",
        PLAY_O_BOTTOM_CENTER: "OXOXX__O_",
        PLAY_O_BOTTOM_RIGHT: "OXOXX___O"
      }
    },
    OXOXOXXOX: { on: { "": "DRAW" } },
    OXOXOXXO_: { on: { PLAY_X_BOTTOM_RIGHT: "OXOXOXXOX" } },
    OXOXOXX_O: { on: { "": "O_WINS" } },
    OXOXOXX__: {
      on: {
        PLAY_O_BOTTOM_CENTER: "OXOXOXXO_",
        PLAY_O_BOTTOM_RIGHT: "OXOXOXX_O"
      }
    },
    OXOXOXOX_: { on: { "": "O_WINS" } },
    OXOXOX_XO: { on: { "": "O_WINS" } },
    OXOXOX_X_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "OXOXOXOX_",
        PLAY_O_BOTTOM_RIGHT: "OXOXOX_XO"
      }
    },
    OXOXOXO_X: { on: { "": "O_WINS" } },
    OXOXOX_OX: { on: { PLAY_X_BOTTOM_LEFT: "OXOXOXXOX" } },
    OXOXOX__X: {
      on: {
        PLAY_O_BOTTOM_LEFT: "OXOXOXO_X",
        PLAY_O_BOTTOM_CENTER: "OXOXOX_OX"
      }
    },
    OXOXOX___: {
      on: {
        PLAY_X_BOTTOM_LEFT: "OXOXOXX__",
        PLAY_X_BOTTOM_CENTER: "OXOXOX_X_",
        PLAY_X_BOTTOM_RIGHT: "OXOXOX__X"
      }
    },
    OXOXXXOXO: { on: { "": "X_WINS" } },
    OXOX_XOXO: { on: { PLAY_X_CENTER: "OXOXXXOXO" } },
    OXOX_XOX_: {
      on: { PLAY_O_CENTER: "OXOXOXOX_", PLAY_O_BOTTOM_RIGHT: "OXOX_XOXO" }
    },
    OXOX_XOOX: { on: { PLAY_X_CENTER: "OXOXXXOOX" } },
    OXOX_XO_X: {
      on: { PLAY_O_CENTER: "OXOXOXO_X", PLAY_O_BOTTOM_CENTER: "OXOX_XOOX" }
    },
    OXOX_XO__: {
      on: {
        PLAY_X_CENTER: "OXOXXXO__",
        PLAY_X_BOTTOM_CENTER: "OXOX_XOX_",
        PLAY_X_BOTTOM_RIGHT: "OXOX_XO_X"
      }
    },
    OXOX_XXOO: { on: { PLAY_X_CENTER: "OXOXXXXOO" } },
    OXOX_XXO_: {
      on: { PLAY_O_CENTER: "OXOXOXXO_", PLAY_O_BOTTOM_RIGHT: "OXOX_XXOO" }
    },
    OXOX_X_OX: {
      on: { PLAY_O_CENTER: "OXOXOX_OX", PLAY_O_BOTTOM_LEFT: "OXOX_XOOX" }
    },
    OXOX_X_O_: {
      on: {
        PLAY_X_CENTER: "OXOXXX_O_",
        PLAY_X_BOTTOM_LEFT: "OXOX_XXO_",
        PLAY_X_BOTTOM_RIGHT: "OXOX_X_OX"
      }
    },
    OXOX_XX_O: {
      on: { PLAY_O_CENTER: "OXOXOXX_O", PLAY_O_BOTTOM_CENTER: "OXOX_XXOO" }
    },
    OXOX_X_XO: {
      on: { PLAY_O_CENTER: "OXOXOX_XO", PLAY_O_BOTTOM_LEFT: "OXOX_XOXO" }
    },
    OXOX_X__O: {
      on: {
        PLAY_X_CENTER: "OXOXXX__O",
        PLAY_X_BOTTOM_LEFT: "OXOX_XX_O",
        PLAY_X_BOTTOM_CENTER: "OXOX_X_XO"
      }
    },
    OXOX_X___: {
      on: {
        PLAY_O_CENTER: "OXOXOX___",
        PLAY_O_BOTTOM_LEFT: "OXOX_XO__",
        PLAY_O_BOTTOM_CENTER: "OXOX_X_O_",
        PLAY_O_BOTTOM_RIGHT: "OXOX_X__O"
      }
    },
    OXOXOOXXX: { on: { "": "X_WINS" } },
    OXOXOOXX_: { on: { PLAY_X_BOTTOM_RIGHT: "OXOXOOXXX" } },
    OXOXO_XXO: { on: { "": "O_WINS" } },
    OXOXO_XX_: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXOXOOXX_",
        PLAY_O_BOTTOM_RIGHT: "OXOXO_XXO"
      }
    },
    OXOXOOX_X: { on: { PLAY_X_BOTTOM_CENTER: "OXOXOOXXX" } },
    OXOXO_XOX: { on: { PLAY_X_MIDDLE_RIGHT: "OXOXOXXOX" } },
    OXOXO_X_X: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXOXOOX_X",
        PLAY_O_BOTTOM_CENTER: "OXOXO_XOX"
      }
    },
    OXOXO_X__: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OXOXOXX__",
        PLAY_X_BOTTOM_CENTER: "OXOXO_XX_",
        PLAY_X_BOTTOM_RIGHT: "OXOXO_X_X"
      }
    },
    OXOX_OXXO: { on: { "": "O_WINS" } },
    OXOX_OXX_: {
      on: { PLAY_O_CENTER: "OXOXOOXX_", PLAY_O_BOTTOM_RIGHT: "OXOX_OXXO" }
    },
    OXOX_OXOX: { on: { PLAY_X_CENTER: "OXOXXOXOX" } },
    OXOX_OX_X: {
      on: { PLAY_O_CENTER: "OXOXOOX_X", PLAY_O_BOTTOM_CENTER: "OXOX_OXOX" }
    },
    OXOX_OX__: {
      on: {
        PLAY_X_CENTER: "OXOXXOX__",
        PLAY_X_BOTTOM_CENTER: "OXOX_OXX_",
        PLAY_X_BOTTOM_RIGHT: "OXOX_OX_X"
      }
    },
    OXOX__XOX: {
      on: { PLAY_O_CENTER: "OXOXO_XOX", PLAY_O_MIDDLE_RIGHT: "OXOX_OXOX" }
    },
    OXOX__XO_: {
      on: {
        PLAY_X_CENTER: "OXOXX_XO_",
        PLAY_X_MIDDLE_RIGHT: "OXOX_XXO_",
        PLAY_X_BOTTOM_RIGHT: "OXOX__XOX"
      }
    },
    OXOX__XXO: {
      on: { PLAY_O_CENTER: "OXOXO_XXO", PLAY_O_MIDDLE_RIGHT: "OXOX_OXXO" }
    },
    OXOX__X_O: {
      on: {
        PLAY_X_CENTER: "OXOXX_X_O",
        PLAY_X_MIDDLE_RIGHT: "OXOX_XX_O",
        PLAY_X_BOTTOM_CENTER: "OXOX__XXO"
      }
    },
    OXOX__X__: {
      on: {
        PLAY_O_CENTER: "OXOXO_X__",
        PLAY_O_MIDDLE_RIGHT: "OXOX_OX__",
        PLAY_O_BOTTOM_CENTER: "OXOX__XO_",
        PLAY_O_BOTTOM_RIGHT: "OXOX__X_O"
      }
    },
    OXOXOO_XX: { on: { PLAY_X_BOTTOM_LEFT: "OXOXOOXXX" } },
    OXOXO_OXX: { on: { "": "O_WINS" } },
    OXOXO__XX: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXOXOO_XX",
        PLAY_O_BOTTOM_LEFT: "OXOXO_OXX"
      }
    },
    OXOXO__X_: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OXOXOX_X_",
        PLAY_X_BOTTOM_LEFT: "OXOXO_XX_",
        PLAY_X_BOTTOM_RIGHT: "OXOXO__XX"
      }
    },
    OXOX_OOXX: { on: { PLAY_X_CENTER: "OXOXXOOXX" } },
    OXOX_O_XX: {
      on: { PLAY_O_CENTER: "OXOXOO_XX", PLAY_O_BOTTOM_LEFT: "OXOX_OOXX" }
    },
    OXOX_O_X_: {
      on: {
        PLAY_X_CENTER: "OXOXXO_X_",
        PLAY_X_BOTTOM_LEFT: "OXOX_OXX_",
        PLAY_X_BOTTOM_RIGHT: "OXOX_O_XX"
      }
    },
    OXOX__OXX: {
      on: { PLAY_O_CENTER: "OXOXO_OXX", PLAY_O_MIDDLE_RIGHT: "OXOX_OOXX" }
    },
    OXOX__OX_: {
      on: {
        PLAY_X_CENTER: "OXOXX_OX_",
        PLAY_X_MIDDLE_RIGHT: "OXOX_XOX_",
        PLAY_X_BOTTOM_RIGHT: "OXOX__OXX"
      }
    },
    OXOX___XO: {
      on: {
        PLAY_X_CENTER: "OXOXX__XO",
        PLAY_X_MIDDLE_RIGHT: "OXOX_X_XO",
        PLAY_X_BOTTOM_LEFT: "OXOX__XXO"
      }
    },
    OXOX___X_: {
      on: {
        PLAY_O_CENTER: "OXOXO__X_",
        PLAY_O_MIDDLE_RIGHT: "OXOX_O_X_",
        PLAY_O_BOTTOM_LEFT: "OXOX__OX_",
        PLAY_O_BOTTOM_RIGHT: "OXOX___XO"
      }
    },
    OXOXO___X: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OXOXOX__X",
        PLAY_X_BOTTOM_LEFT: "OXOXO_X_X",
        PLAY_X_BOTTOM_CENTER: "OXOXO__XX"
      }
    },
    OXOX_O__X: {
      on: {
        PLAY_X_CENTER: "OXOXXO__X",
        PLAY_X_BOTTOM_LEFT: "OXOX_OX_X",
        PLAY_X_BOTTOM_CENTER: "OXOX_O_XX"
      }
    },
    OXOX__O_X: {
      on: {
        PLAY_X_CENTER: "OXOXX_O_X",
        PLAY_X_MIDDLE_RIGHT: "OXOX_XO_X",
        PLAY_X_BOTTOM_CENTER: "OXOX__OXX"
      }
    },
    OXOX___OX: {
      on: {
        PLAY_X_CENTER: "OXOXX__OX",
        PLAY_X_MIDDLE_RIGHT: "OXOX_X_OX",
        PLAY_X_BOTTOM_LEFT: "OXOX__XOX"
      }
    },
    OXOX____X: {
      on: {
        PLAY_O_CENTER: "OXOXO___X",
        PLAY_O_MIDDLE_RIGHT: "OXOX_O__X",
        PLAY_O_BOTTOM_LEFT: "OXOX__O_X",
        PLAY_O_BOTTOM_CENTER: "OXOX___OX"
      }
    },
    OXOX_____: {
      on: {
        PLAY_X_CENTER: "OXOXX____",
        PLAY_X_MIDDLE_RIGHT: "OXOX_X___",
        PLAY_X_BOTTOM_LEFT: "OXOX__X__",
        PLAY_X_BOTTOM_CENTER: "OXOX___X_",
        PLAY_X_BOTTOM_RIGHT: "OXOX____X"
      }
    },
    OX_XOXOXO: { on: { "": "O_WINS" } },
    OX_XOXOX_: {
      on: { PLAY_O_TOP_RIGHT: "OXOXOXOX_", PLAY_O_BOTTOM_RIGHT: "OX_XOXOXO" }
    },
    OX_XOXOOX: { on: { PLAY_X_TOP_RIGHT: "OXXXOXOOX" } },
    OX_XOXO_X: {
      on: { PLAY_O_TOP_RIGHT: "OXOXOXO_X", PLAY_O_BOTTOM_CENTER: "OX_XOXOOX" }
    },
    OX_XOXO__: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXXOXO__",
        PLAY_X_BOTTOM_CENTER: "OX_XOXOX_",
        PLAY_X_BOTTOM_RIGHT: "OX_XOXO_X"
      }
    },
    OX_XOXXOO: { on: { "": "O_WINS" } },
    OX_XOXXO_: {
      on: { PLAY_O_TOP_RIGHT: "OXOXOXXO_", PLAY_O_BOTTOM_RIGHT: "OX_XOXXOO" }
    },
    OX_XOX_OX: {
      on: { PLAY_O_TOP_RIGHT: "OXOXOX_OX", PLAY_O_BOTTOM_LEFT: "OX_XOXOOX" }
    },
    OX_XOX_O_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXXOX_O_",
        PLAY_X_BOTTOM_LEFT: "OX_XOXXO_",
        PLAY_X_BOTTOM_RIGHT: "OX_XOX_OX"
      }
    },
    OX_XOX__O: { on: { "": "O_WINS" } },
    OX_XOX___: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOXOX___",
        PLAY_O_BOTTOM_LEFT: "OX_XOXO__",
        PLAY_O_BOTTOM_CENTER: "OX_XOX_O_",
        PLAY_O_BOTTOM_RIGHT: "OX_XOX__O"
      }
    },
    OX_XOOXXO: { on: { "": "O_WINS" } },
    OX_XOOXX_: {
      on: { PLAY_O_TOP_RIGHT: "OXOXOOXX_", PLAY_O_BOTTOM_RIGHT: "OX_XOOXXO" }
    },
    OX_XOOXOX: { on: { PLAY_X_TOP_RIGHT: "OXXXOOXOX" } },
    OX_XOOX_X: {
      on: { PLAY_O_TOP_RIGHT: "OXOXOOX_X", PLAY_O_BOTTOM_CENTER: "OX_XOOXOX" }
    },
    OX_XOOX__: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXXOOX__",
        PLAY_X_BOTTOM_CENTER: "OX_XOOXX_",
        PLAY_X_BOTTOM_RIGHT: "OX_XOOX_X"
      }
    },
    OX_XO_XOX: {
      on: { PLAY_O_TOP_RIGHT: "OXOXO_XOX", PLAY_O_MIDDLE_RIGHT: "OX_XOOXOX" }
    },
    OX_XO_XO_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXXO_XO_",
        PLAY_X_MIDDLE_RIGHT: "OX_XOXXO_",
        PLAY_X_BOTTOM_RIGHT: "OX_XO_XOX"
      }
    },
    OX_XO_X_O: { on: { "": "O_WINS" } },
    OX_XO_X__: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOXO_X__",
        PLAY_O_MIDDLE_RIGHT: "OX_XOOX__",
        PLAY_O_BOTTOM_CENTER: "OX_XO_XO_",
        PLAY_O_BOTTOM_RIGHT: "OX_XO_X_O"
      }
    },
    OX_XOOOXX: { on: { PLAY_X_TOP_RIGHT: "OXXXOOOXX" } },
    OX_XOO_XX: {
      on: { PLAY_O_TOP_RIGHT: "OXOXOO_XX", PLAY_O_BOTTOM_LEFT: "OX_XOOOXX" }
    },
    OX_XOO_X_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXXOO_X_",
        PLAY_X_BOTTOM_LEFT: "OX_XOOXX_",
        PLAY_X_BOTTOM_RIGHT: "OX_XOO_XX"
      }
    },
    OX_XO_OXX: {
      on: { PLAY_O_TOP_RIGHT: "OXOXO_OXX", PLAY_O_MIDDLE_RIGHT: "OX_XOOOXX" }
    },
    OX_XO_OX_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXXO_OX_",
        PLAY_X_MIDDLE_RIGHT: "OX_XOXOX_",
        PLAY_X_BOTTOM_RIGHT: "OX_XO_OXX"
      }
    },
    OX_XO__XO: { on: { "": "O_WINS" } },
    OX_XO__X_: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOXO__X_",
        PLAY_O_MIDDLE_RIGHT: "OX_XOO_X_",
        PLAY_O_BOTTOM_LEFT: "OX_XO_OX_",
        PLAY_O_BOTTOM_RIGHT: "OX_XO__XO"
      }
    },
    OX_XOO__X: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXXOO__X",
        PLAY_X_BOTTOM_LEFT: "OX_XOOX_X",
        PLAY_X_BOTTOM_CENTER: "OX_XOO_XX"
      }
    },
    OX_XO_O_X: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXXO_O_X",
        PLAY_X_MIDDLE_RIGHT: "OX_XOXO_X",
        PLAY_X_BOTTOM_CENTER: "OX_XO_OXX"
      }
    },
    OX_XO__OX: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXXO__OX",
        PLAY_X_MIDDLE_RIGHT: "OX_XOX_OX",
        PLAY_X_BOTTOM_LEFT: "OX_XO_XOX"
      }
    },
    OX_XO___X: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOXO___X",
        PLAY_O_MIDDLE_RIGHT: "OX_XOO__X",
        PLAY_O_BOTTOM_LEFT: "OX_XO_O_X",
        PLAY_O_BOTTOM_CENTER: "OX_XO__OX"
      }
    },
    OX_XO____: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXXO____",
        PLAY_X_MIDDLE_RIGHT: "OX_XOX___",
        PLAY_X_BOTTOM_LEFT: "OX_XO_X__",
        PLAY_X_BOTTOM_CENTER: "OX_XO__X_",
        PLAY_X_BOTTOM_RIGHT: "OX_XO___X"
      }
    },
    OX_XXOOX_: { on: { "": "X_WINS" } },
    OX_XXOOOX: { on: { PLAY_X_TOP_RIGHT: "OXXXXOOOX" } },
    OX_XXOO_X: {
      on: { PLAY_O_TOP_RIGHT: "OXOXXOO_X", PLAY_O_BOTTOM_CENTER: "OX_XXOOOX" }
    },
    OX_XXOO__: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXXXOO__",
        PLAY_X_BOTTOM_CENTER: "OX_XXOOX_",
        PLAY_X_BOTTOM_RIGHT: "OX_XXOO_X"
      }
    },
    OX_XXOXOO: { on: { PLAY_X_TOP_RIGHT: "OXXXXOXOO" } },
    OX_XXOXO_: {
      on: { PLAY_O_TOP_RIGHT: "OXOXXOXO_", PLAY_O_BOTTOM_RIGHT: "OX_XXOXOO" }
    },
    OX_XXO_OX: {
      on: { PLAY_O_TOP_RIGHT: "OXOXXO_OX", PLAY_O_BOTTOM_LEFT: "OX_XXOOOX" }
    },
    OX_XXO_O_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXXXO_O_",
        PLAY_X_BOTTOM_LEFT: "OX_XXOXO_",
        PLAY_X_BOTTOM_RIGHT: "OX_XXO_OX"
      }
    },
    OX_XXOX_O: {
      on: { PLAY_O_TOP_RIGHT: "OXOXXOX_O", PLAY_O_BOTTOM_CENTER: "OX_XXOXOO" }
    },
    OX_XXO_XO: { on: { "": "X_WINS" } },
    OX_XXO__O: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXXXO__O",
        PLAY_X_BOTTOM_LEFT: "OX_XXOX_O",
        PLAY_X_BOTTOM_CENTER: "OX_XXO_XO"
      }
    },
    OX_XXO___: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOXXO___",
        PLAY_O_BOTTOM_LEFT: "OX_XXOO__",
        PLAY_O_BOTTOM_CENTER: "OX_XXO_O_",
        PLAY_O_BOTTOM_RIGHT: "OX_XXO__O"
      }
    },
    OX_X_OXOX: {
      on: { PLAY_O_TOP_RIGHT: "OXOX_OXOX", PLAY_O_CENTER: "OX_XOOXOX" }
    },
    OX_X_OXO_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXX_OXO_",
        PLAY_X_CENTER: "OX_XXOXO_",
        PLAY_X_BOTTOM_RIGHT: "OX_X_OXOX"
      }
    },
    OX_X_OXXO: {
      on: { PLAY_O_TOP_RIGHT: "OXOX_OXXO", PLAY_O_CENTER: "OX_XOOXXO" }
    },
    OX_X_OX_O: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXX_OX_O",
        PLAY_X_CENTER: "OX_XXOX_O",
        PLAY_X_BOTTOM_CENTER: "OX_X_OXXO"
      }
    },
    OX_X_OX__: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOX_OX__",
        PLAY_O_CENTER: "OX_XOOX__",
        PLAY_O_BOTTOM_CENTER: "OX_X_OXO_",
        PLAY_O_BOTTOM_RIGHT: "OX_X_OX_O"
      }
    },
    OX_X_OOXX: {
      on: { PLAY_O_TOP_RIGHT: "OXOX_OOXX", PLAY_O_CENTER: "OX_XOOOXX" }
    },
    OX_X_OOX_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXX_OOX_",
        PLAY_X_CENTER: "OX_XXOOX_",
        PLAY_X_BOTTOM_RIGHT: "OX_X_OOXX"
      }
    },
    OX_X_O_XO: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXX_O_XO",
        PLAY_X_CENTER: "OX_XXO_XO",
        PLAY_X_BOTTOM_LEFT: "OX_X_OXXO"
      }
    },
    OX_X_O_X_: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOX_O_X_",
        PLAY_O_CENTER: "OX_XOO_X_",
        PLAY_O_BOTTOM_LEFT: "OX_X_OOX_",
        PLAY_O_BOTTOM_RIGHT: "OX_X_O_XO"
      }
    },
    OX_X_OO_X: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXX_OO_X",
        PLAY_X_CENTER: "OX_XXOO_X",
        PLAY_X_BOTTOM_CENTER: "OX_X_OOXX"
      }
    },
    OX_X_O_OX: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXX_O_OX",
        PLAY_X_CENTER: "OX_XXO_OX",
        PLAY_X_BOTTOM_LEFT: "OX_X_OXOX"
      }
    },
    OX_X_O__X: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOX_O__X",
        PLAY_O_CENTER: "OX_XOO__X",
        PLAY_O_BOTTOM_LEFT: "OX_X_OO_X",
        PLAY_O_BOTTOM_CENTER: "OX_X_O_OX"
      }
    },
    OX_X_O___: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXX_O___",
        PLAY_X_CENTER: "OX_XXO___",
        PLAY_X_BOTTOM_LEFT: "OX_X_OX__",
        PLAY_X_BOTTOM_CENTER: "OX_X_O_X_",
        PLAY_X_BOTTOM_RIGHT: "OX_X_O__X"
      }
    },
    OX_XXXOO_: { on: { "": "X_WINS" } },
    OX_XX_OOX: {
      on: { PLAY_O_TOP_RIGHT: "OXOXX_OOX", PLAY_O_MIDDLE_RIGHT: "OX_XXOOOX" }
    },
    OX_XX_OO_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXXX_OO_",
        PLAY_X_MIDDLE_RIGHT: "OX_XXXOO_",
        PLAY_X_BOTTOM_RIGHT: "OX_XX_OOX"
      }
    },
    OX_XXXO_O: { on: { "": "X_WINS" } },
    OX_XX_OXO: { on: { "": "X_WINS" } },
    OX_XX_O_O: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXXX_O_O",
        PLAY_X_MIDDLE_RIGHT: "OX_XXXO_O",
        PLAY_X_BOTTOM_CENTER: "OX_XX_OXO"
      }
    },
    OX_XX_O__: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOXX_O__",
        PLAY_O_MIDDLE_RIGHT: "OX_XXOO__",
        PLAY_O_BOTTOM_CENTER: "OX_XX_OO_",
        PLAY_O_BOTTOM_RIGHT: "OX_XX_O_O"
      }
    },
    OX_X_XOOX: {
      on: { PLAY_O_TOP_RIGHT: "OXOX_XOOX", PLAY_O_CENTER: "OX_XOXOOX" }
    },
    OX_X_XOO_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXX_XOO_",
        PLAY_X_CENTER: "OX_XXXOO_",
        PLAY_X_BOTTOM_RIGHT: "OX_X_XOOX"
      }
    },
    OX_X_XOXO: {
      on: { PLAY_O_TOP_RIGHT: "OXOX_XOXO", PLAY_O_CENTER: "OX_XOXOXO" }
    },
    OX_X_XO_O: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXX_XO_O",
        PLAY_X_CENTER: "OX_XXXO_O",
        PLAY_X_BOTTOM_CENTER: "OX_X_XOXO"
      }
    },
    OX_X_XO__: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOX_XO__",
        PLAY_O_CENTER: "OX_XOXO__",
        PLAY_O_BOTTOM_CENTER: "OX_X_XOO_",
        PLAY_O_BOTTOM_RIGHT: "OX_X_XO_O"
      }
    },
    OX_X__OXO: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXX__OXO",
        PLAY_X_CENTER: "OX_XX_OXO",
        PLAY_X_MIDDLE_RIGHT: "OX_X_XOXO"
      }
    },
    OX_X__OX_: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOX__OX_",
        PLAY_O_CENTER: "OX_XO_OX_",
        PLAY_O_MIDDLE_RIGHT: "OX_X_OOX_",
        PLAY_O_BOTTOM_RIGHT: "OX_X__OXO"
      }
    },
    OX_X__OOX: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXX__OOX",
        PLAY_X_CENTER: "OX_XX_OOX",
        PLAY_X_MIDDLE_RIGHT: "OX_X_XOOX"
      }
    },
    OX_X__O_X: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOX__O_X",
        PLAY_O_CENTER: "OX_XO_O_X",
        PLAY_O_MIDDLE_RIGHT: "OX_X_OO_X",
        PLAY_O_BOTTOM_CENTER: "OX_X__OOX"
      }
    },
    OX_X__O__: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXX__O__",
        PLAY_X_CENTER: "OX_XX_O__",
        PLAY_X_MIDDLE_RIGHT: "OX_X_XO__",
        PLAY_X_BOTTOM_CENTER: "OX_X__OX_",
        PLAY_X_BOTTOM_RIGHT: "OX_X__O_X"
      }
    },
    OX_XXX_OO: { on: { "": "X_WINS" } },
    OX_XX_XOO: {
      on: { PLAY_O_TOP_RIGHT: "OXOXX_XOO", PLAY_O_MIDDLE_RIGHT: "OX_XXOXOO" }
    },
    OX_XX__OO: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXXX__OO",
        PLAY_X_MIDDLE_RIGHT: "OX_XXX_OO",
        PLAY_X_BOTTOM_LEFT: "OX_XX_XOO"
      }
    },
    OX_XX__O_: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOXX__O_",
        PLAY_O_MIDDLE_RIGHT: "OX_XXO_O_",
        PLAY_O_BOTTOM_LEFT: "OX_XX_OO_",
        PLAY_O_BOTTOM_RIGHT: "OX_XX__OO"
      }
    },
    OX_X_XXOO: {
      on: { PLAY_O_TOP_RIGHT: "OXOX_XXOO", PLAY_O_CENTER: "OX_XOXXOO" }
    },
    OX_X_X_OO: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXX_X_OO",
        PLAY_X_CENTER: "OX_XXX_OO",
        PLAY_X_BOTTOM_LEFT: "OX_X_XXOO"
      }
    },
    OX_X_X_O_: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOX_X_O_",
        PLAY_O_CENTER: "OX_XOX_O_",
        PLAY_O_BOTTOM_LEFT: "OX_X_XOO_",
        PLAY_O_BOTTOM_RIGHT: "OX_X_X_OO"
      }
    },
    OX_X__XOO: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXX__XOO",
        PLAY_X_CENTER: "OX_XX_XOO",
        PLAY_X_MIDDLE_RIGHT: "OX_X_XXOO"
      }
    },
    OX_X__XO_: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOX__XO_",
        PLAY_O_CENTER: "OX_XO_XO_",
        PLAY_O_MIDDLE_RIGHT: "OX_X_OXO_",
        PLAY_O_BOTTOM_RIGHT: "OX_X__XOO"
      }
    },
    OX_X___OX: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOX___OX",
        PLAY_O_CENTER: "OX_XO__OX",
        PLAY_O_MIDDLE_RIGHT: "OX_X_O_OX",
        PLAY_O_BOTTOM_LEFT: "OX_X__OOX"
      }
    },
    OX_X___O_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXX___O_",
        PLAY_X_CENTER: "OX_XX__O_",
        PLAY_X_MIDDLE_RIGHT: "OX_X_X_O_",
        PLAY_X_BOTTOM_LEFT: "OX_X__XO_",
        PLAY_X_BOTTOM_RIGHT: "OX_X___OX"
      }
    },
    OX_XX___O: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOXX___O",
        PLAY_O_MIDDLE_RIGHT: "OX_XXO__O",
        PLAY_O_BOTTOM_LEFT: "OX_XX_O_O",
        PLAY_O_BOTTOM_CENTER: "OX_XX__OO"
      }
    },
    OX_X_X__O: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOX_X__O",
        PLAY_O_CENTER: "OX_XOX__O",
        PLAY_O_BOTTOM_LEFT: "OX_X_XO_O",
        PLAY_O_BOTTOM_CENTER: "OX_X_X_OO"
      }
    },
    OX_X__X_O: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOX__X_O",
        PLAY_O_CENTER: "OX_XO_X_O",
        PLAY_O_MIDDLE_RIGHT: "OX_X_OX_O",
        PLAY_O_BOTTOM_CENTER: "OX_X__XOO"
      }
    },
    OX_X___XO: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOX___XO",
        PLAY_O_CENTER: "OX_XO__XO",
        PLAY_O_MIDDLE_RIGHT: "OX_X_O_XO",
        PLAY_O_BOTTOM_LEFT: "OX_X__OXO"
      }
    },
    OX_X____O: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXX____O",
        PLAY_X_CENTER: "OX_XX___O",
        PLAY_X_MIDDLE_RIGHT: "OX_X_X__O",
        PLAY_X_BOTTOM_LEFT: "OX_X__X_O",
        PLAY_X_BOTTOM_CENTER: "OX_X___XO"
      }
    },
    OX_X_____: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOX_____",
        PLAY_O_CENTER: "OX_XO____",
        PLAY_O_MIDDLE_RIGHT: "OX_X_O___",
        PLAY_O_BOTTOM_LEFT: "OX_X__O__",
        PLAY_O_BOTTOM_CENTER: "OX_X___O_",
        PLAY_O_BOTTOM_RIGHT: "OX_X____O"
      }
    },
    OXOOXXXOX: { on: { "": "DRAW" } },
    OXOOXXXO_: { on: { PLAY_X_BOTTOM_RIGHT: "OXOOXXXOX" } },
    OXOOXXXXO: { on: { "": "X_WINS" } },
    OXOOXXX_O: { on: { PLAY_X_BOTTOM_CENTER: "OXOOXXXXO" } },
    OXOOXXX__: {
      on: {
        PLAY_O_BOTTOM_CENTER: "OXOOXXXO_",
        PLAY_O_BOTTOM_RIGHT: "OXOOXXX_O"
      }
    },
    OXOOXX_X_: { on: { "": "X_WINS" } },
    OXOOXXO_X: { on: { "": "O_WINS" } },
    OXOOXX_OX: { on: { PLAY_X_BOTTOM_LEFT: "OXOOXXXOX" } },
    OXOOXX__X: {
      on: {
        PLAY_O_BOTTOM_LEFT: "OXOOXXO_X",
        PLAY_O_BOTTOM_CENTER: "OXOOXX_OX"
      }
    },
    OXOOXX___: {
      on: {
        PLAY_X_BOTTOM_LEFT: "OXOOXXX__",
        PLAY_X_BOTTOM_CENTER: "OXOOXX_X_",
        PLAY_X_BOTTOM_RIGHT: "OXOOXX__X"
      }
    },
    OXO_XXOX_: { on: { "": "X_WINS" } },
    OXO_XXOOX: { on: { PLAY_X_MIDDLE_LEFT: "OXOXXXOOX" } },
    OXO_XXO_X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXOOXXO_X",
        PLAY_O_BOTTOM_CENTER: "OXO_XXOOX"
      }
    },
    OXO_XXO__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOXXXO__",
        PLAY_X_BOTTOM_CENTER: "OXO_XXOX_",
        PLAY_X_BOTTOM_RIGHT: "OXO_XXO_X"
      }
    },
    OXO_XXXOO: { on: { PLAY_X_MIDDLE_LEFT: "OXOXXXXOO" } },
    OXO_XXXO_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXOOXXXO_",
        PLAY_O_BOTTOM_RIGHT: "OXO_XXXOO"
      }
    },
    OXO_XX_OX: {
      on: { PLAY_O_MIDDLE_LEFT: "OXOOXX_OX", PLAY_O_BOTTOM_LEFT: "OXO_XXOOX" }
    },
    OXO_XX_O_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOXXX_O_",
        PLAY_X_BOTTOM_LEFT: "OXO_XXXO_",
        PLAY_X_BOTTOM_RIGHT: "OXO_XX_OX"
      }
    },
    OXO_XXX_O: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXOOXXX_O",
        PLAY_O_BOTTOM_CENTER: "OXO_XXXOO"
      }
    },
    OXO_XX_XO: { on: { "": "X_WINS" } },
    OXO_XX__O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOXXX__O",
        PLAY_X_BOTTOM_LEFT: "OXO_XXX_O",
        PLAY_X_BOTTOM_CENTER: "OXO_XX_XO"
      }
    },
    OXO_XX___: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXOOXX___",
        PLAY_O_BOTTOM_LEFT: "OXO_XXO__",
        PLAY_O_BOTTOM_CENTER: "OXO_XX_O_",
        PLAY_O_BOTTOM_RIGHT: "OXO_XX__O"
      }
    },
    OXOOX_XX_: { on: { "": "X_WINS" } },
    OXOOXOXXX: { on: { "": "X_WINS" } },
    OXOOXOX_X: { on: { PLAY_X_BOTTOM_CENTER: "OXOOXOXXX" } },
    OXOOX_XOX: { on: { PLAY_X_MIDDLE_RIGHT: "OXOOXXXOX" } },
    OXOOX_X_X: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OXOOXOX_X",
        PLAY_O_BOTTOM_CENTER: "OXOOX_XOX"
      }
    },
    OXOOX_X__: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OXOOXXX__",
        PLAY_X_BOTTOM_CENTER: "OXOOX_XX_",
        PLAY_X_BOTTOM_RIGHT: "OXOOX_X_X"
      }
    },
    OXO_XOXX_: { on: { "": "X_WINS" } },
    OXO_XOXOX: { on: { PLAY_X_MIDDLE_LEFT: "OXOXXOXOX" } },
    OXO_XOX_X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXOOXOX_X",
        PLAY_O_BOTTOM_CENTER: "OXO_XOXOX"
      }
    },
    OXO_XOX__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOXXOX__",
        PLAY_X_BOTTOM_CENTER: "OXO_XOXX_",
        PLAY_X_BOTTOM_RIGHT: "OXO_XOX_X"
      }
    },
    OXO_X_XOX: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXOOX_XOX",
        PLAY_O_MIDDLE_RIGHT: "OXO_XOXOX"
      }
    },
    OXO_X_XO_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOXX_XO_",
        PLAY_X_MIDDLE_RIGHT: "OXO_XXXO_",
        PLAY_X_BOTTOM_RIGHT: "OXO_X_XOX"
      }
    },
    OXO_X_XXO: { on: { "": "X_WINS" } },
    OXO_X_X_O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOXX_X_O",
        PLAY_X_MIDDLE_RIGHT: "OXO_XXX_O",
        PLAY_X_BOTTOM_CENTER: "OXO_X_XXO"
      }
    },
    OXO_X_X__: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXOOX_X__",
        PLAY_O_MIDDLE_RIGHT: "OXO_XOX__",
        PLAY_O_BOTTOM_CENTER: "OXO_X_XO_",
        PLAY_O_BOTTOM_RIGHT: "OXO_X_X_O"
      }
    },
    OXO_X__X_: { on: { "": "X_WINS" } },
    OXOOX__XX: { on: { "": "X_WINS" } },
    OXOOX___X: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OXOOXX__X",
        PLAY_X_BOTTOM_LEFT: "OXOOX_X_X",
        PLAY_X_BOTTOM_CENTER: "OXOOX__XX"
      }
    },
    OXO_XO_XX: { on: { "": "X_WINS" } },
    OXO_XO__X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOXXO__X",
        PLAY_X_BOTTOM_LEFT: "OXO_XOX_X",
        PLAY_X_BOTTOM_CENTER: "OXO_XO_XX"
      }
    },
    OXO_X_OXX: { on: { "": "X_WINS" } },
    OXO_X_O_X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOXX_O_X",
        PLAY_X_MIDDLE_RIGHT: "OXO_XXO_X",
        PLAY_X_BOTTOM_CENTER: "OXO_X_OXX"
      }
    },
    OXO_X__OX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOXX__OX",
        PLAY_X_MIDDLE_RIGHT: "OXO_XX_OX",
        PLAY_X_BOTTOM_LEFT: "OXO_X_XOX"
      }
    },
    OXO_X___X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXOOX___X",
        PLAY_O_MIDDLE_RIGHT: "OXO_XO__X",
        PLAY_O_BOTTOM_LEFT: "OXO_X_O_X",
        PLAY_O_BOTTOM_CENTER: "OXO_X__OX"
      }
    },
    OXO_X____: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOXX____",
        PLAY_X_MIDDLE_RIGHT: "OXO_XX___",
        PLAY_X_BOTTOM_LEFT: "OXO_X_X__",
        PLAY_X_BOTTOM_CENTER: "OXO_X__X_",
        PLAY_X_BOTTOM_RIGHT: "OXO_X___X"
      }
    },
    OX_OXXO__: { on: { "": "O_WINS" } },
    OX_OXXXOO: { on: { PLAY_X_TOP_RIGHT: "OXXOXXXOO" } },
    OX_OXXXO_: {
      on: { PLAY_O_TOP_RIGHT: "OXOOXXXO_", PLAY_O_BOTTOM_RIGHT: "OX_OXXXOO" }
    },
    OX_OXXOOX: { on: { "": "O_WINS" } },
    OX_OXX_OX: {
      on: { PLAY_O_TOP_RIGHT: "OXOOXX_OX", PLAY_O_BOTTOM_LEFT: "OX_OXXOOX" }
    },
    OX_OXX_O_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXOXX_O_",
        PLAY_X_BOTTOM_LEFT: "OX_OXXXO_",
        PLAY_X_BOTTOM_RIGHT: "OX_OXX_OX"
      }
    },
    OX_OXXX_O: {
      on: { PLAY_O_TOP_RIGHT: "OXOOXXX_O", PLAY_O_BOTTOM_CENTER: "OX_OXXXOO" }
    },
    OX_OXX_XO: { on: { "": "X_WINS" } },
    OX_OXX__O: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXOXX__O",
        PLAY_X_BOTTOM_LEFT: "OX_OXXX_O",
        PLAY_X_BOTTOM_CENTER: "OX_OXX_XO"
      }
    },
    OX_OXX___: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOOXX___",
        PLAY_O_BOTTOM_LEFT: "OX_OXXO__",
        PLAY_O_BOTTOM_CENTER: "OX_OXX_O_",
        PLAY_O_BOTTOM_RIGHT: "OX_OXX__O"
      }
    },
    OX_OXOXX_: { on: { "": "X_WINS" } },
    OX_OXOXOX: { on: { PLAY_X_TOP_RIGHT: "OXXOXOXOX" } },
    OX_OXOX_X: {
      on: { PLAY_O_TOP_RIGHT: "OXOOXOX_X", PLAY_O_BOTTOM_CENTER: "OX_OXOXOX" }
    },
    OX_OXOX__: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXOXOX__",
        PLAY_X_BOTTOM_CENTER: "OX_OXOXX_",
        PLAY_X_BOTTOM_RIGHT: "OX_OXOX_X"
      }
    },
    OX_OX_XOX: {
      on: { PLAY_O_TOP_RIGHT: "OXOOX_XOX", PLAY_O_MIDDLE_RIGHT: "OX_OXOXOX" }
    },
    OX_OX_XO_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXOX_XO_",
        PLAY_X_MIDDLE_RIGHT: "OX_OXXXO_",
        PLAY_X_BOTTOM_RIGHT: "OX_OX_XOX"
      }
    },
    OX_OX_XXO: { on: { "": "X_WINS" } },
    OX_OX_X_O: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXOX_X_O",
        PLAY_X_MIDDLE_RIGHT: "OX_OXXX_O",
        PLAY_X_BOTTOM_CENTER: "OX_OX_XXO"
      }
    },
    OX_OX_X__: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOOX_X__",
        PLAY_O_MIDDLE_RIGHT: "OX_OXOX__",
        PLAY_O_BOTTOM_CENTER: "OX_OX_XO_",
        PLAY_O_BOTTOM_RIGHT: "OX_OX_X_O"
      }
    },
    OX_OX__X_: { on: { "": "X_WINS" } },
    OX_OXO_XX: { on: { "": "X_WINS" } },
    OX_OXO__X: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXOXO__X",
        PLAY_X_BOTTOM_LEFT: "OX_OXOX_X",
        PLAY_X_BOTTOM_CENTER: "OX_OXO_XX"
      }
    },
    OX_OX_O_X: { on: { "": "O_WINS" } },
    OX_OX__OX: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXOX__OX",
        PLAY_X_MIDDLE_RIGHT: "OX_OXX_OX",
        PLAY_X_BOTTOM_LEFT: "OX_OX_XOX"
      }
    },
    OX_OX___X: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOOX___X",
        PLAY_O_MIDDLE_RIGHT: "OX_OXO__X",
        PLAY_O_BOTTOM_LEFT: "OX_OX_O_X",
        PLAY_O_BOTTOM_CENTER: "OX_OX__OX"
      }
    },
    OX_OX____: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXOX____",
        PLAY_X_MIDDLE_RIGHT: "OX_OXX___",
        PLAY_X_BOTTOM_LEFT: "OX_OX_X__",
        PLAY_X_BOTTOM_CENTER: "OX_OX__X_",
        PLAY_X_BOTTOM_RIGHT: "OX_OX___X"
      }
    },
    OX__XOXOX: {
      on: { PLAY_O_TOP_RIGHT: "OXO_XOXOX", PLAY_O_MIDDLE_LEFT: "OX_OXOXOX" }
    },
    OX__XOXO_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_XOXO_",
        PLAY_X_MIDDLE_LEFT: "OX_XXOXO_",
        PLAY_X_BOTTOM_RIGHT: "OX__XOXOX"
      }
    },
    OX__XOXXO: { on: { "": "X_WINS" } },
    OX__XOX_O: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_XOX_O",
        PLAY_X_MIDDLE_LEFT: "OX_XXOX_O",
        PLAY_X_BOTTOM_CENTER: "OX__XOXXO"
      }
    },
    OX__XOX__: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO_XOX__",
        PLAY_O_MIDDLE_LEFT: "OX_OXOX__",
        PLAY_O_BOTTOM_CENTER: "OX__XOXO_",
        PLAY_O_BOTTOM_RIGHT: "OX__XOX_O"
      }
    },
    OX__XO_X_: { on: { "": "X_WINS" } },
    OX__XOOXX: { on: { "": "X_WINS" } },
    OX__XOO_X: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_XOO_X",
        PLAY_X_MIDDLE_LEFT: "OX_XXOO_X",
        PLAY_X_BOTTOM_CENTER: "OX__XOOXX"
      }
    },
    OX__XO_OX: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_XO_OX",
        PLAY_X_MIDDLE_LEFT: "OX_XXO_OX",
        PLAY_X_BOTTOM_LEFT: "OX__XOXOX"
      }
    },
    OX__XO__X: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO_XO__X",
        PLAY_O_MIDDLE_LEFT: "OX_OXO__X",
        PLAY_O_BOTTOM_LEFT: "OX__XOO_X",
        PLAY_O_BOTTOM_CENTER: "OX__XO_OX"
      }
    },
    OX__XO___: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_XO___",
        PLAY_X_MIDDLE_LEFT: "OX_XXO___",
        PLAY_X_BOTTOM_LEFT: "OX__XOX__",
        PLAY_X_BOTTOM_CENTER: "OX__XO_X_",
        PLAY_X_BOTTOM_RIGHT: "OX__XO__X"
      }
    },
    OX__XXOOX: {
      on: { PLAY_O_TOP_RIGHT: "OXO_XXOOX", PLAY_O_MIDDLE_LEFT: "OX_OXXOOX" }
    },
    OX__XXOO_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_XXOO_",
        PLAY_X_MIDDLE_LEFT: "OX_XXXOO_",
        PLAY_X_BOTTOM_RIGHT: "OX__XXOOX"
      }
    },
    OX__XXOXO: { on: { "": "X_WINS" } },
    OX__XXO_O: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_XXO_O",
        PLAY_X_MIDDLE_LEFT: "OX_XXXO_O",
        PLAY_X_BOTTOM_CENTER: "OX__XXOXO"
      }
    },
    OX__XXO__: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO_XXO__",
        PLAY_O_MIDDLE_LEFT: "OX_OXXO__",
        PLAY_O_BOTTOM_CENTER: "OX__XXOO_",
        PLAY_O_BOTTOM_RIGHT: "OX__XXO_O"
      }
    },
    OX__X_OX_: { on: { "": "X_WINS" } },
    OX__X_OOX: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_X_OOX",
        PLAY_X_MIDDLE_LEFT: "OX_XX_OOX",
        PLAY_X_MIDDLE_RIGHT: "OX__XXOOX"
      }
    },
    OX__X_O_X: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO_X_O_X",
        PLAY_O_MIDDLE_LEFT: "OX_OX_O_X",
        PLAY_O_MIDDLE_RIGHT: "OX__XOO_X",
        PLAY_O_BOTTOM_CENTER: "OX__X_OOX"
      }
    },
    OX__X_O__: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_X_O__",
        PLAY_X_MIDDLE_LEFT: "OX_XX_O__",
        PLAY_X_MIDDLE_RIGHT: "OX__XXO__",
        PLAY_X_BOTTOM_CENTER: "OX__X_OX_",
        PLAY_X_BOTTOM_RIGHT: "OX__X_O_X"
      }
    },
    OX__XXXOO: {
      on: { PLAY_O_TOP_RIGHT: "OXO_XXXOO", PLAY_O_MIDDLE_LEFT: "OX_OXXXOO" }
    },
    OX__XX_OO: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_XX_OO",
        PLAY_X_MIDDLE_LEFT: "OX_XXX_OO",
        PLAY_X_BOTTOM_LEFT: "OX__XXXOO"
      }
    },
    OX__XX_O_: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO_XX_O_",
        PLAY_O_MIDDLE_LEFT: "OX_OXX_O_",
        PLAY_O_BOTTOM_LEFT: "OX__XXOO_",
        PLAY_O_BOTTOM_RIGHT: "OX__XX_OO"
      }
    },
    OX__X_XOO: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_X_XOO",
        PLAY_X_MIDDLE_LEFT: "OX_XX_XOO",
        PLAY_X_MIDDLE_RIGHT: "OX__XXXOO"
      }
    },
    OX__X_XO_: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO_X_XO_",
        PLAY_O_MIDDLE_LEFT: "OX_OX_XO_",
        PLAY_O_MIDDLE_RIGHT: "OX__XOXO_",
        PLAY_O_BOTTOM_RIGHT: "OX__X_XOO"
      }
    },
    OX__X__OX: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO_X__OX",
        PLAY_O_MIDDLE_LEFT: "OX_OX__OX",
        PLAY_O_MIDDLE_RIGHT: "OX__XO_OX",
        PLAY_O_BOTTOM_LEFT: "OX__X_OOX"
      }
    },
    OX__X__O_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_X__O_",
        PLAY_X_MIDDLE_LEFT: "OX_XX__O_",
        PLAY_X_MIDDLE_RIGHT: "OX__XX_O_",
        PLAY_X_BOTTOM_LEFT: "OX__X_XO_",
        PLAY_X_BOTTOM_RIGHT: "OX__X__OX"
      }
    },
    OX__XX__O: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO_XX__O",
        PLAY_O_MIDDLE_LEFT: "OX_OXX__O",
        PLAY_O_BOTTOM_LEFT: "OX__XXO_O",
        PLAY_O_BOTTOM_CENTER: "OX__XX_OO"
      }
    },
    OX__X_X_O: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO_X_X_O",
        PLAY_O_MIDDLE_LEFT: "OX_OX_X_O",
        PLAY_O_MIDDLE_RIGHT: "OX__XOX_O",
        PLAY_O_BOTTOM_CENTER: "OX__X_XOO"
      }
    },
    OX__X__XO: { on: { "": "X_WINS" } },
    OX__X___O: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_X___O",
        PLAY_X_MIDDLE_LEFT: "OX_XX___O",
        PLAY_X_MIDDLE_RIGHT: "OX__XX__O",
        PLAY_X_BOTTOM_LEFT: "OX__X_X_O",
        PLAY_X_BOTTOM_CENTER: "OX__X__XO"
      }
    },
    OX__X____: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO_X____",
        PLAY_O_MIDDLE_LEFT: "OX_OX____",
        PLAY_O_MIDDLE_RIGHT: "OX__XO___",
        PLAY_O_BOTTOM_LEFT: "OX__X_O__",
        PLAY_O_BOTTOM_CENTER: "OX__X__O_",
        PLAY_O_BOTTOM_RIGHT: "OX__X___O"
      }
    },
    OXOOOXXXX: { on: { "": "X_WINS" } },
    OXOOOXXX_: { on: { PLAY_X_BOTTOM_RIGHT: "OXOOOXXXX" } },
    OXOO_XXXO: { on: { PLAY_X_CENTER: "OXOOXXXXO" } },
    OXOO_XXX_: {
      on: { PLAY_O_CENTER: "OXOOOXXX_", PLAY_O_BOTTOM_RIGHT: "OXOO_XXXO" }
    },
    OXOOOXX_X: { on: { PLAY_X_BOTTOM_CENTER: "OXOOOXXXX" } },
    OXOO_XXOX: { on: { PLAY_X_CENTER: "OXOOXXXOX" } },
    OXOO_XX_X: {
      on: { PLAY_O_CENTER: "OXOOOXX_X", PLAY_O_BOTTOM_CENTER: "OXOO_XXOX" }
    },
    OXOO_XX__: {
      on: {
        PLAY_X_CENTER: "OXOOXXX__",
        PLAY_X_BOTTOM_CENTER: "OXOO_XXX_",
        PLAY_X_BOTTOM_RIGHT: "OXOO_XX_X"
      }
    },
    OXO_OXXXO: { on: { "": "O_WINS" } },
    OXO_OXXX_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXOOOXXX_",
        PLAY_O_BOTTOM_RIGHT: "OXO_OXXXO"
      }
    },
    OXO_OXXOX: { on: { PLAY_X_MIDDLE_LEFT: "OXOXOXXOX" } },
    OXO_OXX_X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXOOOXX_X",
        PLAY_O_BOTTOM_CENTER: "OXO_OXXOX"
      }
    },
    OXO_OXX__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOXOXX__",
        PLAY_X_BOTTOM_CENTER: "OXO_OXXX_",
        PLAY_X_BOTTOM_RIGHT: "OXO_OXX_X"
      }
    },
    OXO__XXOX: {
      on: { PLAY_O_MIDDLE_LEFT: "OXOO_XXOX", PLAY_O_CENTER: "OXO_OXXOX" }
    },
    OXO__XXO_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOX_XXO_",
        PLAY_X_CENTER: "OXO_XXXO_",
        PLAY_X_BOTTOM_RIGHT: "OXO__XXOX"
      }
    },
    OXO__XXXO: {
      on: { PLAY_O_MIDDLE_LEFT: "OXOO_XXXO", PLAY_O_CENTER: "OXO_OXXXO" }
    },
    OXO__XX_O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOX_XX_O",
        PLAY_X_CENTER: "OXO_XXX_O",
        PLAY_X_BOTTOM_CENTER: "OXO__XXXO"
      }
    },
    OXO__XX__: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXOO_XX__",
        PLAY_O_CENTER: "OXO_OXX__",
        PLAY_O_BOTTOM_CENTER: "OXO__XXO_",
        PLAY_O_BOTTOM_RIGHT: "OXO__XX_O"
      }
    },
    OXOOOX_XX: { on: { PLAY_X_BOTTOM_LEFT: "OXOOOXXXX" } },
    OXOO_XOXX: { on: { "": "O_WINS" } },
    OXOO_X_XX: {
      on: { PLAY_O_CENTER: "OXOOOX_XX", PLAY_O_BOTTOM_LEFT: "OXOO_XOXX" }
    },
    OXOO_X_X_: {
      on: {
        PLAY_X_CENTER: "OXOOXX_X_",
        PLAY_X_BOTTOM_LEFT: "OXOO_XXX_",
        PLAY_X_BOTTOM_RIGHT: "OXOO_X_XX"
      }
    },
    OXO_OXOXX: { on: { "": "O_WINS" } },
    OXO_OX_XX: {
      on: { PLAY_O_MIDDLE_LEFT: "OXOOOX_XX", PLAY_O_BOTTOM_LEFT: "OXO_OXOXX" }
    },
    OXO_OX_X_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOXOX_X_",
        PLAY_X_BOTTOM_LEFT: "OXO_OXXX_",
        PLAY_X_BOTTOM_RIGHT: "OXO_OX_XX"
      }
    },
    OXO__XOXX: {
      on: { PLAY_O_MIDDLE_LEFT: "OXOO_XOXX", PLAY_O_CENTER: "OXO_OXOXX" }
    },
    OXO__XOX_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOX_XOX_",
        PLAY_X_CENTER: "OXO_XXOX_",
        PLAY_X_BOTTOM_RIGHT: "OXO__XOXX"
      }
    },
    OXO__X_XO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOX_X_XO",
        PLAY_X_CENTER: "OXO_XX_XO",
        PLAY_X_BOTTOM_LEFT: "OXO__XXXO"
      }
    },
    OXO__X_X_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXOO_X_X_",
        PLAY_O_CENTER: "OXO_OX_X_",
        PLAY_O_BOTTOM_LEFT: "OXO__XOX_",
        PLAY_O_BOTTOM_RIGHT: "OXO__X_XO"
      }
    },
    OXOO_X__X: {
      on: {
        PLAY_X_CENTER: "OXOOXX__X",
        PLAY_X_BOTTOM_LEFT: "OXOO_XX_X",
        PLAY_X_BOTTOM_CENTER: "OXOO_X_XX"
      }
    },
    OXO_OX__X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOXOX__X",
        PLAY_X_BOTTOM_LEFT: "OXO_OXX_X",
        PLAY_X_BOTTOM_CENTER: "OXO_OX_XX"
      }
    },
    OXO__XO_X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOX_XO_X",
        PLAY_X_CENTER: "OXO_XXO_X",
        PLAY_X_BOTTOM_CENTER: "OXO__XOXX"
      }
    },
    OXO__X_OX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOX_X_OX",
        PLAY_X_CENTER: "OXO_XX_OX",
        PLAY_X_BOTTOM_LEFT: "OXO__XXOX"
      }
    },
    OXO__X__X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXOO_X__X",
        PLAY_O_CENTER: "OXO_OX__X",
        PLAY_O_BOTTOM_LEFT: "OXO__XO_X",
        PLAY_O_BOTTOM_CENTER: "OXO__X_OX"
      }
    },
    OXO__X___: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOX_X___",
        PLAY_X_CENTER: "OXO_XX___",
        PLAY_X_BOTTOM_LEFT: "OXO__XX__",
        PLAY_X_BOTTOM_CENTER: "OXO__X_X_",
        PLAY_X_BOTTOM_RIGHT: "OXO__X__X"
      }
    },
    OX_OOXXXO: { on: { "": "O_WINS" } },
    OX_OOXXX_: {
      on: { PLAY_O_TOP_RIGHT: "OXOOOXXX_", PLAY_O_BOTTOM_RIGHT: "OX_OOXXXO" }
    },
    OX_OOXXOX: { on: { PLAY_X_TOP_RIGHT: "OXXOOXXOX" } },
    OX_OOXX_X: {
      on: { PLAY_O_TOP_RIGHT: "OXOOOXX_X", PLAY_O_BOTTOM_CENTER: "OX_OOXXOX" }
    },
    OX_OOXX__: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXOOXX__",
        PLAY_X_BOTTOM_CENTER: "OX_OOXXX_",
        PLAY_X_BOTTOM_RIGHT: "OX_OOXX_X"
      }
    },
    OX_O_XXOX: {
      on: { PLAY_O_TOP_RIGHT: "OXOO_XXOX", PLAY_O_CENTER: "OX_OOXXOX" }
    },
    OX_O_XXO_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXO_XXO_",
        PLAY_X_CENTER: "OX_OXXXO_",
        PLAY_X_BOTTOM_RIGHT: "OX_O_XXOX"
      }
    },
    OX_O_XXXO: {
      on: { PLAY_O_TOP_RIGHT: "OXOO_XXXO", PLAY_O_CENTER: "OX_OOXXXO" }
    },
    OX_O_XX_O: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXO_XX_O",
        PLAY_X_CENTER: "OX_OXXX_O",
        PLAY_X_BOTTOM_CENTER: "OX_O_XXXO"
      }
    },
    OX_O_XX__: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOO_XX__",
        PLAY_O_CENTER: "OX_OOXX__",
        PLAY_O_BOTTOM_CENTER: "OX_O_XXO_",
        PLAY_O_BOTTOM_RIGHT: "OX_O_XX_O"
      }
    },
    OX_OOXOXX: { on: { "": "O_WINS" } },
    OX_OOX_XX: {
      on: { PLAY_O_TOP_RIGHT: "OXOOOX_XX", PLAY_O_BOTTOM_LEFT: "OX_OOXOXX" }
    },
    OX_OOX_X_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXOOX_X_",
        PLAY_X_BOTTOM_LEFT: "OX_OOXXX_",
        PLAY_X_BOTTOM_RIGHT: "OX_OOX_XX"
      }
    },
    OX_O_XOX_: { on: { "": "O_WINS" } },
    OX_O_X_XO: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXO_X_XO",
        PLAY_X_CENTER: "OX_OXX_XO",
        PLAY_X_BOTTOM_LEFT: "OX_O_XXXO"
      }
    },
    OX_O_X_X_: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOO_X_X_",
        PLAY_O_CENTER: "OX_OOX_X_",
        PLAY_O_BOTTOM_LEFT: "OX_O_XOX_",
        PLAY_O_BOTTOM_RIGHT: "OX_O_X_XO"
      }
    },
    OX_OOX__X: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXOOX__X",
        PLAY_X_BOTTOM_LEFT: "OX_OOXX_X",
        PLAY_X_BOTTOM_CENTER: "OX_OOX_XX"
      }
    },
    OX_O_XO_X: { on: { "": "O_WINS" } },
    OX_O_X_OX: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXO_X_OX",
        PLAY_X_CENTER: "OX_OXX_OX",
        PLAY_X_BOTTOM_LEFT: "OX_O_XXOX"
      }
    },
    OX_O_X__X: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOO_X__X",
        PLAY_O_CENTER: "OX_OOX__X",
        PLAY_O_BOTTOM_LEFT: "OX_O_XO_X",
        PLAY_O_BOTTOM_CENTER: "OX_O_X_OX"
      }
    },
    OX_O_X___: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXO_X___",
        PLAY_X_CENTER: "OX_OXX___",
        PLAY_X_BOTTOM_LEFT: "OX_O_XX__",
        PLAY_X_BOTTOM_CENTER: "OX_O_X_X_",
        PLAY_X_BOTTOM_RIGHT: "OX_O_X__X"
      }
    },
    OX__OXXOX: {
      on: { PLAY_O_TOP_RIGHT: "OXO_OXXOX", PLAY_O_MIDDLE_LEFT: "OX_OOXXOX" }
    },
    OX__OXXO_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_OXXO_",
        PLAY_X_MIDDLE_LEFT: "OX_XOXXO_",
        PLAY_X_BOTTOM_RIGHT: "OX__OXXOX"
      }
    },
    OX__OXX_O: { on: { "": "O_WINS" } },
    OX__OXX__: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO_OXX__",
        PLAY_O_MIDDLE_LEFT: "OX_OOXX__",
        PLAY_O_BOTTOM_CENTER: "OX__OXXO_",
        PLAY_O_BOTTOM_RIGHT: "OX__OXX_O"
      }
    },
    OX__OXOXX: {
      on: { PLAY_O_TOP_RIGHT: "OXO_OXOXX", PLAY_O_MIDDLE_LEFT: "OX_OOXOXX" }
    },
    OX__OXOX_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_OXOX_",
        PLAY_X_MIDDLE_LEFT: "OX_XOXOX_",
        PLAY_X_BOTTOM_RIGHT: "OX__OXOXX"
      }
    },
    OX__OX_XO: { on: { "": "O_WINS" } },
    OX__OX_X_: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO_OX_X_",
        PLAY_O_MIDDLE_LEFT: "OX_OOX_X_",
        PLAY_O_BOTTOM_LEFT: "OX__OXOX_",
        PLAY_O_BOTTOM_RIGHT: "OX__OX_XO"
      }
    },
    OX__OXO_X: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_OXO_X",
        PLAY_X_MIDDLE_LEFT: "OX_XOXO_X",
        PLAY_X_BOTTOM_CENTER: "OX__OXOXX"
      }
    },
    OX__OX_OX: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_OX_OX",
        PLAY_X_MIDDLE_LEFT: "OX_XOX_OX",
        PLAY_X_BOTTOM_LEFT: "OX__OXXOX"
      }
    },
    OX__OX__X: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO_OX__X",
        PLAY_O_MIDDLE_LEFT: "OX_OOX__X",
        PLAY_O_BOTTOM_LEFT: "OX__OXO_X",
        PLAY_O_BOTTOM_CENTER: "OX__OX_OX"
      }
    },
    OX__OX___: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_OX___",
        PLAY_X_MIDDLE_LEFT: "OX_XOX___",
        PLAY_X_BOTTOM_LEFT: "OX__OXX__",
        PLAY_X_BOTTOM_CENTER: "OX__OX_X_",
        PLAY_X_BOTTOM_RIGHT: "OX__OX__X"
      }
    },
    OX___XOXO: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX__XOXO",
        PLAY_X_MIDDLE_LEFT: "OX_X_XOXO",
        PLAY_X_CENTER: "OX__XXOXO"
      }
    },
    OX___XOX_: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO__XOX_",
        PLAY_O_MIDDLE_LEFT: "OX_O_XOX_",
        PLAY_O_CENTER: "OX__OXOX_",
        PLAY_O_BOTTOM_RIGHT: "OX___XOXO"
      }
    },
    OX___XOOX: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX__XOOX",
        PLAY_X_MIDDLE_LEFT: "OX_X_XOOX",
        PLAY_X_CENTER: "OX__XXOOX"
      }
    },
    OX___XO_X: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO__XO_X",
        PLAY_O_MIDDLE_LEFT: "OX_O_XO_X",
        PLAY_O_CENTER: "OX__OXO_X",
        PLAY_O_BOTTOM_CENTER: "OX___XOOX"
      }
    },
    OX___XO__: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX__XO__",
        PLAY_X_MIDDLE_LEFT: "OX_X_XO__",
        PLAY_X_CENTER: "OX__XXO__",
        PLAY_X_BOTTOM_CENTER: "OX___XOX_",
        PLAY_X_BOTTOM_RIGHT: "OX___XO_X"
      }
    },
    OX___XXOO: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX__XXOO",
        PLAY_X_MIDDLE_LEFT: "OX_X_XXOO",
        PLAY_X_CENTER: "OX__XXXOO"
      }
    },
    OX___XXO_: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO__XXO_",
        PLAY_O_MIDDLE_LEFT: "OX_O_XXO_",
        PLAY_O_CENTER: "OX__OXXO_",
        PLAY_O_BOTTOM_RIGHT: "OX___XXOO"
      }
    },
    OX___X_OX: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO__X_OX",
        PLAY_O_MIDDLE_LEFT: "OX_O_X_OX",
        PLAY_O_CENTER: "OX__OX_OX",
        PLAY_O_BOTTOM_LEFT: "OX___XOOX"
      }
    },
    OX___X_O_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX__X_O_",
        PLAY_X_MIDDLE_LEFT: "OX_X_X_O_",
        PLAY_X_CENTER: "OX__XX_O_",
        PLAY_X_BOTTOM_LEFT: "OX___XXO_",
        PLAY_X_BOTTOM_RIGHT: "OX___X_OX"
      }
    },
    OX___XX_O: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO__XX_O",
        PLAY_O_MIDDLE_LEFT: "OX_O_XX_O",
        PLAY_O_CENTER: "OX__OXX_O",
        PLAY_O_BOTTOM_CENTER: "OX___XXOO"
      }
    },
    OX___X_XO: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO__X_XO",
        PLAY_O_MIDDLE_LEFT: "OX_O_X_XO",
        PLAY_O_CENTER: "OX__OX_XO",
        PLAY_O_BOTTOM_LEFT: "OX___XOXO"
      }
    },
    OX___X__O: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX__X__O",
        PLAY_X_MIDDLE_LEFT: "OX_X_X__O",
        PLAY_X_CENTER: "OX__XX__O",
        PLAY_X_BOTTOM_LEFT: "OX___XX_O",
        PLAY_X_BOTTOM_CENTER: "OX___X_XO"
      }
    },
    OX___X___: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO__X___",
        PLAY_O_MIDDLE_LEFT: "OX_O_X___",
        PLAY_O_CENTER: "OX__OX___",
        PLAY_O_BOTTOM_LEFT: "OX___XO__",
        PLAY_O_BOTTOM_CENTER: "OX___X_O_",
        PLAY_O_BOTTOM_RIGHT: "OX___X__O"
      }
    },
    OXOO__XXX: { on: { "": "X_WINS" } },
    OXOO__XX_: {
      on: {
        PLAY_X_CENTER: "OXOOX_XX_",
        PLAY_X_MIDDLE_RIGHT: "OXOO_XXX_",
        PLAY_X_BOTTOM_RIGHT: "OXOO__XXX"
      }
    },
    OXO_O_XXX: { on: { "": "X_WINS" } },
    OXO_O_XX_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOXO_XX_",
        PLAY_X_MIDDLE_RIGHT: "OXO_OXXX_",
        PLAY_X_BOTTOM_RIGHT: "OXO_O_XXX"
      }
    },
    OXO__OXXX: { on: { "": "X_WINS" } },
    OXO__OXX_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOX_OXX_",
        PLAY_X_CENTER: "OXO_XOXX_",
        PLAY_X_BOTTOM_RIGHT: "OXO__OXXX"
      }
    },
    OXO___XXO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOX__XXO",
        PLAY_X_CENTER: "OXO_X_XXO",
        PLAY_X_MIDDLE_RIGHT: "OXO__XXXO"
      }
    },
    OXO___XX_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXOO__XX_",
        PLAY_O_CENTER: "OXO_O_XX_",
        PLAY_O_MIDDLE_RIGHT: "OXO__OXX_",
        PLAY_O_BOTTOM_RIGHT: "OXO___XXO"
      }
    },
    OXOO__X_X: {
      on: {
        PLAY_X_CENTER: "OXOOX_X_X",
        PLAY_X_MIDDLE_RIGHT: "OXOO_XX_X",
        PLAY_X_BOTTOM_CENTER: "OXOO__XXX"
      }
    },
    OXO_O_X_X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOXO_X_X",
        PLAY_X_MIDDLE_RIGHT: "OXO_OXX_X",
        PLAY_X_BOTTOM_CENTER: "OXO_O_XXX"
      }
    },
    OXO__OX_X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOX_OX_X",
        PLAY_X_CENTER: "OXO_XOX_X",
        PLAY_X_BOTTOM_CENTER: "OXO__OXXX"
      }
    },
    OXO___XOX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOX__XOX",
        PLAY_X_CENTER: "OXO_X_XOX",
        PLAY_X_MIDDLE_RIGHT: "OXO__XXOX"
      }
    },
    OXO___X_X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXOO__X_X",
        PLAY_O_CENTER: "OXO_O_X_X",
        PLAY_O_MIDDLE_RIGHT: "OXO__OX_X",
        PLAY_O_BOTTOM_CENTER: "OXO___XOX"
      }
    },
    OXO___X__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOX__X__",
        PLAY_X_CENTER: "OXO_X_X__",
        PLAY_X_MIDDLE_RIGHT: "OXO__XX__",
        PLAY_X_BOTTOM_CENTER: "OXO___XX_",
        PLAY_X_BOTTOM_RIGHT: "OXO___X_X"
      }
    },
    OX_OO_XXX: { on: { "": "X_WINS" } },
    OX_OO_XX_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXOO_XX_",
        PLAY_X_MIDDLE_RIGHT: "OX_OOXXX_",
        PLAY_X_BOTTOM_RIGHT: "OX_OO_XXX"
      }
    },
    OX_O_OXXX: { on: { "": "X_WINS" } },
    OX_O_OXX_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXO_OXX_",
        PLAY_X_CENTER: "OX_OXOXX_",
        PLAY_X_BOTTOM_RIGHT: "OX_O_OXXX"
      }
    },
    OX_O__XXO: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXO__XXO",
        PLAY_X_CENTER: "OX_OX_XXO",
        PLAY_X_MIDDLE_RIGHT: "OX_O_XXXO"
      }
    },
    OX_O__XX_: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOO__XX_",
        PLAY_O_CENTER: "OX_OO_XX_",
        PLAY_O_MIDDLE_RIGHT: "OX_O_OXX_",
        PLAY_O_BOTTOM_RIGHT: "OX_O__XXO"
      }
    },
    OX_OO_X_X: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXOO_X_X",
        PLAY_X_MIDDLE_RIGHT: "OX_OOXX_X",
        PLAY_X_BOTTOM_CENTER: "OX_OO_XXX"
      }
    },
    OX_O_OX_X: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXO_OX_X",
        PLAY_X_CENTER: "OX_OXOX_X",
        PLAY_X_BOTTOM_CENTER: "OX_O_OXXX"
      }
    },
    OX_O__XOX: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXO__XOX",
        PLAY_X_CENTER: "OX_OX_XOX",
        PLAY_X_MIDDLE_RIGHT: "OX_O_XXOX"
      }
    },
    OX_O__X_X: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOO__X_X",
        PLAY_O_CENTER: "OX_OO_X_X",
        PLAY_O_MIDDLE_RIGHT: "OX_O_OX_X",
        PLAY_O_BOTTOM_CENTER: "OX_O__XOX"
      }
    },
    OX_O__X__: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXO__X__",
        PLAY_X_CENTER: "OX_OX_X__",
        PLAY_X_MIDDLE_RIGHT: "OX_O_XX__",
        PLAY_X_BOTTOM_CENTER: "OX_O__XX_",
        PLAY_X_BOTTOM_RIGHT: "OX_O__X_X"
      }
    },
    OX__OOXXX: { on: { "": "X_WINS" } },
    OX__OOXX_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_OOXX_",
        PLAY_X_MIDDLE_LEFT: "OX_XOOXX_",
        PLAY_X_BOTTOM_RIGHT: "OX__OOXXX"
      }
    },
    OX__O_XXO: { on: { "": "O_WINS" } },
    OX__O_XX_: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO_O_XX_",
        PLAY_O_MIDDLE_LEFT: "OX_OO_XX_",
        PLAY_O_MIDDLE_RIGHT: "OX__OOXX_",
        PLAY_O_BOTTOM_RIGHT: "OX__O_XXO"
      }
    },
    OX__OOX_X: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_OOX_X",
        PLAY_X_MIDDLE_LEFT: "OX_XOOX_X",
        PLAY_X_BOTTOM_CENTER: "OX__OOXXX"
      }
    },
    OX__O_XOX: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_O_XOX",
        PLAY_X_MIDDLE_LEFT: "OX_XO_XOX",
        PLAY_X_MIDDLE_RIGHT: "OX__OXXOX"
      }
    },
    OX__O_X_X: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO_O_X_X",
        PLAY_O_MIDDLE_LEFT: "OX_OO_X_X",
        PLAY_O_MIDDLE_RIGHT: "OX__OOX_X",
        PLAY_O_BOTTOM_CENTER: "OX__O_XOX"
      }
    },
    OX__O_X__: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_O_X__",
        PLAY_X_MIDDLE_LEFT: "OX_XO_X__",
        PLAY_X_MIDDLE_RIGHT: "OX__OXX__",
        PLAY_X_BOTTOM_CENTER: "OX__O_XX_",
        PLAY_X_BOTTOM_RIGHT: "OX__O_X_X"
      }
    },
    OX___OXXO: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX__OXXO",
        PLAY_X_MIDDLE_LEFT: "OX_X_OXXO",
        PLAY_X_CENTER: "OX__XOXXO"
      }
    },
    OX___OXX_: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO__OXX_",
        PLAY_O_MIDDLE_LEFT: "OX_O_OXX_",
        PLAY_O_CENTER: "OX__OOXX_",
        PLAY_O_BOTTOM_RIGHT: "OX___OXXO"
      }
    },
    OX___OXOX: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX__OXOX",
        PLAY_X_MIDDLE_LEFT: "OX_X_OXOX",
        PLAY_X_CENTER: "OX__XOXOX"
      }
    },
    OX___OX_X: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO__OX_X",
        PLAY_O_MIDDLE_LEFT: "OX_O_OX_X",
        PLAY_O_CENTER: "OX__OOX_X",
        PLAY_O_BOTTOM_CENTER: "OX___OXOX"
      }
    },
    OX___OX__: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX__OX__",
        PLAY_X_MIDDLE_LEFT: "OX_X_OX__",
        PLAY_X_CENTER: "OX__XOX__",
        PLAY_X_BOTTOM_CENTER: "OX___OXX_",
        PLAY_X_BOTTOM_RIGHT: "OX___OX_X"
      }
    },
    OX____XOX: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO___XOX",
        PLAY_O_MIDDLE_LEFT: "OX_O__XOX",
        PLAY_O_CENTER: "OX__O_XOX",
        PLAY_O_MIDDLE_RIGHT: "OX___OXOX"
      }
    },
    OX____XO_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX___XO_",
        PLAY_X_MIDDLE_LEFT: "OX_X__XO_",
        PLAY_X_CENTER: "OX__X_XO_",
        PLAY_X_MIDDLE_RIGHT: "OX___XXO_",
        PLAY_X_BOTTOM_RIGHT: "OX____XOX"
      }
    },
    OX____XXO: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO___XXO",
        PLAY_O_MIDDLE_LEFT: "OX_O__XXO",
        PLAY_O_CENTER: "OX__O_XXO",
        PLAY_O_MIDDLE_RIGHT: "OX___OXXO"
      }
    },
    OX____X_O: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX___X_O",
        PLAY_X_MIDDLE_LEFT: "OX_X__X_O",
        PLAY_X_CENTER: "OX__X_X_O",
        PLAY_X_MIDDLE_RIGHT: "OX___XX_O",
        PLAY_X_BOTTOM_CENTER: "OX____XXO"
      }
    },
    OX____X__: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO___X__",
        PLAY_O_MIDDLE_LEFT: "OX_O__X__",
        PLAY_O_CENTER: "OX__O_X__",
        PLAY_O_MIDDLE_RIGHT: "OX___OX__",
        PLAY_O_BOTTOM_CENTER: "OX____XO_",
        PLAY_O_BOTTOM_RIGHT: "OX____X_O"
      }
    },
    OXOO___XX: {
      on: {
        PLAY_X_CENTER: "OXOOX__XX",
        PLAY_X_MIDDLE_RIGHT: "OXOO_X_XX",
        PLAY_X_BOTTOM_LEFT: "OXOO__XXX"
      }
    },
    OXO_O__XX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOXO__XX",
        PLAY_X_MIDDLE_RIGHT: "OXO_OX_XX",
        PLAY_X_BOTTOM_LEFT: "OXO_O_XXX"
      }
    },
    OXO__O_XX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOX_O_XX",
        PLAY_X_CENTER: "OXO_XO_XX",
        PLAY_X_BOTTOM_LEFT: "OXO__OXXX"
      }
    },
    OXO___OXX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOX__OXX",
        PLAY_X_CENTER: "OXO_X_OXX",
        PLAY_X_MIDDLE_RIGHT: "OXO__XOXX"
      }
    },
    OXO____XX: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OXOO___XX",
        PLAY_O_CENTER: "OXO_O__XX",
        PLAY_O_MIDDLE_RIGHT: "OXO__O_XX",
        PLAY_O_BOTTOM_LEFT: "OXO___OXX"
      }
    },
    OXO____X_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOX___X_",
        PLAY_X_CENTER: "OXO_X__X_",
        PLAY_X_MIDDLE_RIGHT: "OXO__X_X_",
        PLAY_X_BOTTOM_LEFT: "OXO___XX_",
        PLAY_X_BOTTOM_RIGHT: "OXO____XX"
      }
    },
    OX_OO__XX: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXOO__XX",
        PLAY_X_MIDDLE_RIGHT: "OX_OOX_XX",
        PLAY_X_BOTTOM_LEFT: "OX_OO_XXX"
      }
    },
    OX_O_O_XX: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXO_O_XX",
        PLAY_X_CENTER: "OX_OXO_XX",
        PLAY_X_BOTTOM_LEFT: "OX_O_OXXX"
      }
    },
    OX_O__OXX: { on: { "": "O_WINS" } },
    OX_O___XX: {
      on: {
        PLAY_O_TOP_RIGHT: "OXOO___XX",
        PLAY_O_CENTER: "OX_OO__XX",
        PLAY_O_MIDDLE_RIGHT: "OX_O_O_XX",
        PLAY_O_BOTTOM_LEFT: "OX_O__OXX"
      }
    },
    OX_O___X_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXO___X_",
        PLAY_X_CENTER: "OX_OX__X_",
        PLAY_X_MIDDLE_RIGHT: "OX_O_X_X_",
        PLAY_X_BOTTOM_LEFT: "OX_O__XX_",
        PLAY_X_BOTTOM_RIGHT: "OX_O___XX"
      }
    },
    OX__OO_XX: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_OO_XX",
        PLAY_X_MIDDLE_LEFT: "OX_XOO_XX",
        PLAY_X_BOTTOM_LEFT: "OX__OOXXX"
      }
    },
    OX__O_OXX: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_O_OXX",
        PLAY_X_MIDDLE_LEFT: "OX_XO_OXX",
        PLAY_X_MIDDLE_RIGHT: "OX__OXOXX"
      }
    },
    OX__O__XX: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO_O__XX",
        PLAY_O_MIDDLE_LEFT: "OX_OO__XX",
        PLAY_O_MIDDLE_RIGHT: "OX__OO_XX",
        PLAY_O_BOTTOM_LEFT: "OX__O_OXX"
      }
    },
    OX__O__X_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_O__X_",
        PLAY_X_MIDDLE_LEFT: "OX_XO__X_",
        PLAY_X_MIDDLE_RIGHT: "OX__OX_X_",
        PLAY_X_BOTTOM_LEFT: "OX__O_XX_",
        PLAY_X_BOTTOM_RIGHT: "OX__O__XX"
      }
    },
    OX___OOXX: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX__OOXX",
        PLAY_X_MIDDLE_LEFT: "OX_X_OOXX",
        PLAY_X_CENTER: "OX__XOOXX"
      }
    },
    OX___O_XX: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO__O_XX",
        PLAY_O_MIDDLE_LEFT: "OX_O_O_XX",
        PLAY_O_CENTER: "OX__OO_XX",
        PLAY_O_BOTTOM_LEFT: "OX___OOXX"
      }
    },
    OX___O_X_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX__O_X_",
        PLAY_X_MIDDLE_LEFT: "OX_X_O_X_",
        PLAY_X_CENTER: "OX__XO_X_",
        PLAY_X_BOTTOM_LEFT: "OX___OXX_",
        PLAY_X_BOTTOM_RIGHT: "OX___O_XX"
      }
    },
    OX____OXX: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO___OXX",
        PLAY_O_MIDDLE_LEFT: "OX_O__OXX",
        PLAY_O_CENTER: "OX__O_OXX",
        PLAY_O_MIDDLE_RIGHT: "OX___OOXX"
      }
    },
    OX____OX_: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX___OX_",
        PLAY_X_MIDDLE_LEFT: "OX_X__OX_",
        PLAY_X_CENTER: "OX__X_OX_",
        PLAY_X_MIDDLE_RIGHT: "OX___XOX_",
        PLAY_X_BOTTOM_RIGHT: "OX____OXX"
      }
    },
    OX_____XO: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX____XO",
        PLAY_X_MIDDLE_LEFT: "OX_X___XO",
        PLAY_X_CENTER: "OX__X__XO",
        PLAY_X_MIDDLE_RIGHT: "OX___X_XO",
        PLAY_X_BOTTOM_LEFT: "OX____XXO"
      }
    },
    OX_____X_: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO____X_",
        PLAY_O_MIDDLE_LEFT: "OX_O___X_",
        PLAY_O_CENTER: "OX__O__X_",
        PLAY_O_MIDDLE_RIGHT: "OX___O_X_",
        PLAY_O_BOTTOM_LEFT: "OX____OX_",
        PLAY_O_BOTTOM_RIGHT: "OX_____XO"
      }
    },
    OXO_____X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OXOX____X",
        PLAY_X_CENTER: "OXO_X___X",
        PLAY_X_MIDDLE_RIGHT: "OXO__X__X",
        PLAY_X_BOTTOM_LEFT: "OXO___X_X",
        PLAY_X_BOTTOM_CENTER: "OXO____XX"
      }
    },
    OX_O____X: {
      on: {
        PLAY_X_TOP_RIGHT: "OXXO____X",
        PLAY_X_CENTER: "OX_OX___X",
        PLAY_X_MIDDLE_RIGHT: "OX_O_X__X",
        PLAY_X_BOTTOM_LEFT: "OX_O__X_X",
        PLAY_X_BOTTOM_CENTER: "OX_O___XX"
      }
    },
    OX__O___X: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX_O___X",
        PLAY_X_MIDDLE_LEFT: "OX_XO___X",
        PLAY_X_MIDDLE_RIGHT: "OX__OX__X",
        PLAY_X_BOTTOM_LEFT: "OX__O_X_X",
        PLAY_X_BOTTOM_CENTER: "OX__O__XX"
      }
    },
    OX___O__X: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX__O__X",
        PLAY_X_MIDDLE_LEFT: "OX_X_O__X",
        PLAY_X_CENTER: "OX__XO__X",
        PLAY_X_BOTTOM_LEFT: "OX___OX_X",
        PLAY_X_BOTTOM_CENTER: "OX___O_XX"
      }
    },
    OX____O_X: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX___O_X",
        PLAY_X_MIDDLE_LEFT: "OX_X__O_X",
        PLAY_X_CENTER: "OX__X_O_X",
        PLAY_X_MIDDLE_RIGHT: "OX___XO_X",
        PLAY_X_BOTTOM_CENTER: "OX____OXX"
      }
    },
    OX_____OX: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX____OX",
        PLAY_X_MIDDLE_LEFT: "OX_X___OX",
        PLAY_X_CENTER: "OX__X__OX",
        PLAY_X_MIDDLE_RIGHT: "OX___X_OX",
        PLAY_X_BOTTOM_LEFT: "OX____XOX"
      }
    },
    OX______X: {
      on: {
        PLAY_O_TOP_RIGHT: "OXO_____X",
        PLAY_O_MIDDLE_LEFT: "OX_O____X",
        PLAY_O_CENTER: "OX__O___X",
        PLAY_O_MIDDLE_RIGHT: "OX___O__X",
        PLAY_O_BOTTOM_LEFT: "OX____O_X",
        PLAY_O_BOTTOM_CENTER: "OX_____OX"
      }
    },
    OX_______: {
      on: {
        PLAY_X_TOP_RIGHT: "OXX______",
        PLAY_X_MIDDLE_LEFT: "OX_X_____",
        PLAY_X_CENTER: "OX__X____",
        PLAY_X_MIDDLE_RIGHT: "OX___X___",
        PLAY_X_BOTTOM_LEFT: "OX____X__",
        PLAY_X_BOTTOM_CENTER: "OX_____X_",
        PLAY_X_BOTTOM_RIGHT: "OX______X"
      }
    },
    _XOXOXO__: { on: { "": "O_WINS" } },
    _XOXOXXOO: { on: { PLAY_X_TOP_LEFT: "XXOXOXXOO" } },
    _XOXOXXO_: {
      on: { PLAY_O_TOP_LEFT: "OXOXOXXO_", PLAY_O_BOTTOM_RIGHT: "_XOXOXXOO" }
    },
    _XOXOXOOX: { on: { "": "O_WINS" } },
    _XOXOX_OX: {
      on: { PLAY_O_TOP_LEFT: "OXOXOX_OX", PLAY_O_BOTTOM_LEFT: "_XOXOXOOX" }
    },
    _XOXOX_O_: {
      on: {
        PLAY_X_TOP_LEFT: "XXOXOX_O_",
        PLAY_X_BOTTOM_LEFT: "_XOXOXXO_",
        PLAY_X_BOTTOM_RIGHT: "_XOXOX_OX"
      }
    },
    _XOXOXX_O: {
      on: { PLAY_O_TOP_LEFT: "OXOXOXX_O", PLAY_O_BOTTOM_CENTER: "_XOXOXXOO" }
    },
    _XOXOXOXO: { on: { "": "O_WINS" } },
    _XOXOX_XO: {
      on: { PLAY_O_TOP_LEFT: "OXOXOX_XO", PLAY_O_BOTTOM_LEFT: "_XOXOXOXO" }
    },
    _XOXOX__O: {
      on: {
        PLAY_X_TOP_LEFT: "XXOXOX__O",
        PLAY_X_BOTTOM_LEFT: "_XOXOXX_O",
        PLAY_X_BOTTOM_CENTER: "_XOXOX_XO"
      }
    },
    _XOXOX___: {
      on: {
        PLAY_O_TOP_LEFT: "OXOXOX___",
        PLAY_O_BOTTOM_LEFT: "_XOXOXO__",
        PLAY_O_BOTTOM_CENTER: "_XOXOX_O_",
        PLAY_O_BOTTOM_RIGHT: "_XOXOX__O"
      }
    },
    _XOXOOXXO: { on: { "": "O_WINS" } },
    _XOXOOXX_: {
      on: { PLAY_O_TOP_LEFT: "OXOXOOXX_", PLAY_O_BOTTOM_RIGHT: "_XOXOOXXO" }
    },
    _XOXOOXOX: { on: { PLAY_X_TOP_LEFT: "XXOXOOXOX" } },
    _XOXOOX_X: {
      on: { PLAY_O_TOP_LEFT: "OXOXOOX_X", PLAY_O_BOTTOM_CENTER: "_XOXOOXOX" }
    },
    _XOXOOX__: {
      on: {
        PLAY_X_TOP_LEFT: "XXOXOOX__",
        PLAY_X_BOTTOM_CENTER: "_XOXOOXX_",
        PLAY_X_BOTTOM_RIGHT: "_XOXOOX_X"
      }
    },
    _XOXO_XOX: {
      on: { PLAY_O_TOP_LEFT: "OXOXO_XOX", PLAY_O_MIDDLE_RIGHT: "_XOXOOXOX" }
    },
    _XOXO_XO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXOXO_XO_",
        PLAY_X_MIDDLE_RIGHT: "_XOXOXXO_",
        PLAY_X_BOTTOM_RIGHT: "_XOXO_XOX"
      }
    },
    _XOXO_XXO: {
      on: { PLAY_O_TOP_LEFT: "OXOXO_XXO", PLAY_O_MIDDLE_RIGHT: "_XOXOOXXO" }
    },
    _XOXO_X_O: {
      on: {
        PLAY_X_TOP_LEFT: "XXOXO_X_O",
        PLAY_X_MIDDLE_RIGHT: "_XOXOXX_O",
        PLAY_X_BOTTOM_CENTER: "_XOXO_XXO"
      }
    },
    _XOXO_X__: {
      on: {
        PLAY_O_TOP_LEFT: "OXOXO_X__",
        PLAY_O_MIDDLE_RIGHT: "_XOXOOX__",
        PLAY_O_BOTTOM_CENTER: "_XOXO_XO_",
        PLAY_O_BOTTOM_RIGHT: "_XOXO_X_O"
      }
    },
    _XOXOOOXX: { on: { "": "O_WINS" } },
    _XOXOO_XX: {
      on: { PLAY_O_TOP_LEFT: "OXOXOO_XX", PLAY_O_BOTTOM_LEFT: "_XOXOOOXX" }
    },
    _XOXOO_X_: {
      on: {
        PLAY_X_TOP_LEFT: "XXOXOO_X_",
        PLAY_X_BOTTOM_LEFT: "_XOXOOXX_",
        PLAY_X_BOTTOM_RIGHT: "_XOXOO_XX"
      }
    },
    _XOXO_OX_: { on: { "": "O_WINS" } },
    _XOXO__XO: {
      on: {
        PLAY_X_TOP_LEFT: "XXOXO__XO",
        PLAY_X_MIDDLE_RIGHT: "_XOXOX_XO",
        PLAY_X_BOTTOM_LEFT: "_XOXO_XXO"
      }
    },
    _XOXO__X_: {
      on: {
        PLAY_O_TOP_LEFT: "OXOXO__X_",
        PLAY_O_MIDDLE_RIGHT: "_XOXOO_X_",
        PLAY_O_BOTTOM_LEFT: "_XOXO_OX_",
        PLAY_O_BOTTOM_RIGHT: "_XOXO__XO"
      }
    },
    _XOXOO__X: {
      on: {
        PLAY_X_TOP_LEFT: "XXOXOO__X",
        PLAY_X_BOTTOM_LEFT: "_XOXOOX_X",
        PLAY_X_BOTTOM_CENTER: "_XOXOO_XX"
      }
    },
    _XOXO_O_X: { on: { "": "O_WINS" } },
    _XOXO__OX: {
      on: {
        PLAY_X_TOP_LEFT: "XXOXO__OX",
        PLAY_X_MIDDLE_RIGHT: "_XOXOX_OX",
        PLAY_X_BOTTOM_LEFT: "_XOXO_XOX"
      }
    },
    _XOXO___X: {
      on: {
        PLAY_O_TOP_LEFT: "OXOXO___X",
        PLAY_O_MIDDLE_RIGHT: "_XOXOO__X",
        PLAY_O_BOTTOM_LEFT: "_XOXO_O_X",
        PLAY_O_BOTTOM_CENTER: "_XOXO__OX"
      }
    },
    _XOXO____: {
      on: {
        PLAY_X_TOP_LEFT: "XXOXO____",
        PLAY_X_MIDDLE_RIGHT: "_XOXOX___",
        PLAY_X_BOTTOM_LEFT: "_XOXO_X__",
        PLAY_X_BOTTOM_CENTER: "_XOXO__X_",
        PLAY_X_BOTTOM_RIGHT: "_XOXO___X"
      }
    },
    _XOXXOOX_: { on: { "": "X_WINS" } },
    _XOXXOOOX: { on: { PLAY_X_TOP_LEFT: "XXOXXOOOX" } },
    _XOXXOO_X: {
      on: { PLAY_O_TOP_LEFT: "OXOXXOO_X", PLAY_O_BOTTOM_CENTER: "_XOXXOOOX" }
    },
    _XOXXOO__: {
      on: {
        PLAY_X_TOP_LEFT: "XXOXXOO__",
        PLAY_X_BOTTOM_CENTER: "_XOXXOOX_",
        PLAY_X_BOTTOM_RIGHT: "_XOXXOO_X"
      }
    },
    _XOXXOXOO: { on: { "": "O_WINS" } },
    _XOXXOXO_: {
      on: { PLAY_O_TOP_LEFT: "OXOXXOXO_", PLAY_O_BOTTOM_RIGHT: "_XOXXOXOO" }
    },
    _XOXXO_OX: {
      on: { PLAY_O_TOP_LEFT: "OXOXXO_OX", PLAY_O_BOTTOM_LEFT: "_XOXXOOOX" }
    },
    _XOXXO_O_: {
      on: {
        PLAY_X_TOP_LEFT: "XXOXXO_O_",
        PLAY_X_BOTTOM_LEFT: "_XOXXOXO_",
        PLAY_X_BOTTOM_RIGHT: "_XOXXO_OX"
      }
    },
    _XOXXO__O: { on: { "": "O_WINS" } },
    _XOXXO___: {
      on: {
        PLAY_O_TOP_LEFT: "OXOXXO___",
        PLAY_O_BOTTOM_LEFT: "_XOXXOO__",
        PLAY_O_BOTTOM_CENTER: "_XOXXO_O_",
        PLAY_O_BOTTOM_RIGHT: "_XOXXO__O"
      }
    },
    _XOX_OXOX: {
      on: { PLAY_O_TOP_LEFT: "OXOX_OXOX", PLAY_O_CENTER: "_XOXOOXOX" }
    },
    _XOX_OXO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXOX_OXO_",
        PLAY_X_CENTER: "_XOXXOXO_",
        PLAY_X_BOTTOM_RIGHT: "_XOX_OXOX"
      }
    },
    _XOX_OX_O: { on: { "": "O_WINS" } },
    _XOX_OX__: {
      on: {
        PLAY_O_TOP_LEFT: "OXOX_OX__",
        PLAY_O_CENTER: "_XOXOOX__",
        PLAY_O_BOTTOM_CENTER: "_XOX_OXO_",
        PLAY_O_BOTTOM_RIGHT: "_XOX_OX_O"
      }
    },
    _XOX_OOXX: {
      on: { PLAY_O_TOP_LEFT: "OXOX_OOXX", PLAY_O_CENTER: "_XOXOOOXX" }
    },
    _XOX_OOX_: {
      on: {
        PLAY_X_TOP_LEFT: "XXOX_OOX_",
        PLAY_X_CENTER: "_XOXXOOX_",
        PLAY_X_BOTTOM_RIGHT: "_XOX_OOXX"
      }
    },
    _XOX_O_XO: { on: { "": "O_WINS" } },
    _XOX_O_X_: {
      on: {
        PLAY_O_TOP_LEFT: "OXOX_O_X_",
        PLAY_O_CENTER: "_XOXOO_X_",
        PLAY_O_BOTTOM_LEFT: "_XOX_OOX_",
        PLAY_O_BOTTOM_RIGHT: "_XOX_O_XO"
      }
    },
    _XOX_OO_X: {
      on: {
        PLAY_X_TOP_LEFT: "XXOX_OO_X",
        PLAY_X_CENTER: "_XOXXOO_X",
        PLAY_X_BOTTOM_CENTER: "_XOX_OOXX"
      }
    },
    _XOX_O_OX: {
      on: {
        PLAY_X_TOP_LEFT: "XXOX_O_OX",
        PLAY_X_CENTER: "_XOXXO_OX",
        PLAY_X_BOTTOM_LEFT: "_XOX_OXOX"
      }
    },
    _XOX_O__X: {
      on: {
        PLAY_O_TOP_LEFT: "OXOX_O__X",
        PLAY_O_CENTER: "_XOXOO__X",
        PLAY_O_BOTTOM_LEFT: "_XOX_OO_X",
        PLAY_O_BOTTOM_CENTER: "_XOX_O_OX"
      }
    },
    _XOX_O___: {
      on: {
        PLAY_X_TOP_LEFT: "XXOX_O___",
        PLAY_X_CENTER: "_XOXXO___",
        PLAY_X_BOTTOM_LEFT: "_XOX_OX__",
        PLAY_X_BOTTOM_CENTER: "_XOX_O_X_",
        PLAY_X_BOTTOM_RIGHT: "_XOX_O__X"
      }
    },
    _XOXXXOO_: { on: { "": "X_WINS" } },
    _XOXX_OOX: {
      on: { PLAY_O_TOP_LEFT: "OXOXX_OOX", PLAY_O_MIDDLE_RIGHT: "_XOXXOOOX" }
    },
    _XOXX_OO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXOXX_OO_",
        PLAY_X_MIDDLE_RIGHT: "_XOXXXOO_",
        PLAY_X_BOTTOM_RIGHT: "_XOXX_OOX"
      }
    },
    _XOXXXO_O: { on: { "": "X_WINS" } },
    _XOXX_OXO: { on: { "": "X_WINS" } },
    _XOXX_O_O: {
      on: {
        PLAY_X_TOP_LEFT: "XXOXX_O_O",
        PLAY_X_MIDDLE_RIGHT: "_XOXXXO_O",
        PLAY_X_BOTTOM_CENTER: "_XOXX_OXO"
      }
    },
    _XOXX_O__: {
      on: {
        PLAY_O_TOP_LEFT: "OXOXX_O__",
        PLAY_O_MIDDLE_RIGHT: "_XOXXOO__",
        PLAY_O_BOTTOM_CENTER: "_XOXX_OO_",
        PLAY_O_BOTTOM_RIGHT: "_XOXX_O_O"
      }
    },
    _XOX_XOOX: {
      on: { PLAY_O_TOP_LEFT: "OXOX_XOOX", PLAY_O_CENTER: "_XOXOXOOX" }
    },
    _XOX_XOO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXOX_XOO_",
        PLAY_X_CENTER: "_XOXXXOO_",
        PLAY_X_BOTTOM_RIGHT: "_XOX_XOOX"
      }
    },
    _XOX_XOXO: {
      on: { PLAY_O_TOP_LEFT: "OXOX_XOXO", PLAY_O_CENTER: "_XOXOXOXO" }
    },
    _XOX_XO_O: {
      on: {
        PLAY_X_TOP_LEFT: "XXOX_XO_O",
        PLAY_X_CENTER: "_XOXXXO_O",
        PLAY_X_BOTTOM_CENTER: "_XOX_XOXO"
      }
    },
    _XOX_XO__: {
      on: {
        PLAY_O_TOP_LEFT: "OXOX_XO__",
        PLAY_O_CENTER: "_XOXOXO__",
        PLAY_O_BOTTOM_CENTER: "_XOX_XOO_",
        PLAY_O_BOTTOM_RIGHT: "_XOX_XO_O"
      }
    },
    _XOX__OXO: {
      on: {
        PLAY_X_TOP_LEFT: "XXOX__OXO",
        PLAY_X_CENTER: "_XOXX_OXO",
        PLAY_X_MIDDLE_RIGHT: "_XOX_XOXO"
      }
    },
    _XOX__OX_: {
      on: {
        PLAY_O_TOP_LEFT: "OXOX__OX_",
        PLAY_O_CENTER: "_XOXO_OX_",
        PLAY_O_MIDDLE_RIGHT: "_XOX_OOX_",
        PLAY_O_BOTTOM_RIGHT: "_XOX__OXO"
      }
    },
    _XOX__OOX: {
      on: {
        PLAY_X_TOP_LEFT: "XXOX__OOX",
        PLAY_X_CENTER: "_XOXX_OOX",
        PLAY_X_MIDDLE_RIGHT: "_XOX_XOOX"
      }
    },
    _XOX__O_X: {
      on: {
        PLAY_O_TOP_LEFT: "OXOX__O_X",
        PLAY_O_CENTER: "_XOXO_O_X",
        PLAY_O_MIDDLE_RIGHT: "_XOX_OO_X",
        PLAY_O_BOTTOM_CENTER: "_XOX__OOX"
      }
    },
    _XOX__O__: {
      on: {
        PLAY_X_TOP_LEFT: "XXOX__O__",
        PLAY_X_CENTER: "_XOXX_O__",
        PLAY_X_MIDDLE_RIGHT: "_XOX_XO__",
        PLAY_X_BOTTOM_CENTER: "_XOX__OX_",
        PLAY_X_BOTTOM_RIGHT: "_XOX__O_X"
      }
    },
    _XOXXX_OO: { on: { "": "X_WINS" } },
    _XOXX_XOO: {
      on: { PLAY_O_TOP_LEFT: "OXOXX_XOO", PLAY_O_MIDDLE_RIGHT: "_XOXXOXOO" }
    },
    _XOXX__OO: {
      on: {
        PLAY_X_TOP_LEFT: "XXOXX__OO",
        PLAY_X_MIDDLE_RIGHT: "_XOXXX_OO",
        PLAY_X_BOTTOM_LEFT: "_XOXX_XOO"
      }
    },
    _XOXX__O_: {
      on: {
        PLAY_O_TOP_LEFT: "OXOXX__O_",
        PLAY_O_MIDDLE_RIGHT: "_XOXXO_O_",
        PLAY_O_BOTTOM_LEFT: "_XOXX_OO_",
        PLAY_O_BOTTOM_RIGHT: "_XOXX__OO"
      }
    },
    _XOX_XXOO: {
      on: { PLAY_O_TOP_LEFT: "OXOX_XXOO", PLAY_O_CENTER: "_XOXOXXOO" }
    },
    _XOX_X_OO: {
      on: {
        PLAY_X_TOP_LEFT: "XXOX_X_OO",
        PLAY_X_CENTER: "_XOXXX_OO",
        PLAY_X_BOTTOM_LEFT: "_XOX_XXOO"
      }
    },
    _XOX_X_O_: {
      on: {
        PLAY_O_TOP_LEFT: "OXOX_X_O_",
        PLAY_O_CENTER: "_XOXOX_O_",
        PLAY_O_BOTTOM_LEFT: "_XOX_XOO_",
        PLAY_O_BOTTOM_RIGHT: "_XOX_X_OO"
      }
    },
    _XOX__XOO: {
      on: {
        PLAY_X_TOP_LEFT: "XXOX__XOO",
        PLAY_X_CENTER: "_XOXX_XOO",
        PLAY_X_MIDDLE_RIGHT: "_XOX_XXOO"
      }
    },
    _XOX__XO_: {
      on: {
        PLAY_O_TOP_LEFT: "OXOX__XO_",
        PLAY_O_CENTER: "_XOXO_XO_",
        PLAY_O_MIDDLE_RIGHT: "_XOX_OXO_",
        PLAY_O_BOTTOM_RIGHT: "_XOX__XOO"
      }
    },
    _XOX___OX: {
      on: {
        PLAY_O_TOP_LEFT: "OXOX___OX",
        PLAY_O_CENTER: "_XOXO__OX",
        PLAY_O_MIDDLE_RIGHT: "_XOX_O_OX",
        PLAY_O_BOTTOM_LEFT: "_XOX__OOX"
      }
    },
    _XOX___O_: {
      on: {
        PLAY_X_TOP_LEFT: "XXOX___O_",
        PLAY_X_CENTER: "_XOXX__O_",
        PLAY_X_MIDDLE_RIGHT: "_XOX_X_O_",
        PLAY_X_BOTTOM_LEFT: "_XOX__XO_",
        PLAY_X_BOTTOM_RIGHT: "_XOX___OX"
      }
    },
    _XOXX___O: {
      on: {
        PLAY_O_TOP_LEFT: "OXOXX___O",
        PLAY_O_MIDDLE_RIGHT: "_XOXXO__O",
        PLAY_O_BOTTOM_LEFT: "_XOXX_O_O",
        PLAY_O_BOTTOM_CENTER: "_XOXX__OO"
      }
    },
    _XOX_X__O: {
      on: {
        PLAY_O_TOP_LEFT: "OXOX_X__O",
        PLAY_O_CENTER: "_XOXOX__O",
        PLAY_O_BOTTOM_LEFT: "_XOX_XO_O",
        PLAY_O_BOTTOM_CENTER: "_XOX_X_OO"
      }
    },
    _XOX__X_O: {
      on: {
        PLAY_O_TOP_LEFT: "OXOX__X_O",
        PLAY_O_CENTER: "_XOXO_X_O",
        PLAY_O_MIDDLE_RIGHT: "_XOX_OX_O",
        PLAY_O_BOTTOM_CENTER: "_XOX__XOO"
      }
    },
    _XOX___XO: {
      on: {
        PLAY_O_TOP_LEFT: "OXOX___XO",
        PLAY_O_CENTER: "_XOXO__XO",
        PLAY_O_MIDDLE_RIGHT: "_XOX_O_XO",
        PLAY_O_BOTTOM_LEFT: "_XOX__OXO"
      }
    },
    _XOX____O: {
      on: {
        PLAY_X_TOP_LEFT: "XXOX____O",
        PLAY_X_CENTER: "_XOXX___O",
        PLAY_X_MIDDLE_RIGHT: "_XOX_X__O",
        PLAY_X_BOTTOM_LEFT: "_XOX__X_O",
        PLAY_X_BOTTOM_CENTER: "_XOX___XO"
      }
    },
    _XOX_____: {
      on: {
        PLAY_O_TOP_LEFT: "OXOX_____",
        PLAY_O_CENTER: "_XOXO____",
        PLAY_O_MIDDLE_RIGHT: "_XOX_O___",
        PLAY_O_BOTTOM_LEFT: "_XOX__O__",
        PLAY_O_BOTTOM_CENTER: "_XOX___O_",
        PLAY_O_BOTTOM_RIGHT: "_XOX____O"
      }
    },
    _XOOXXOX_: { on: { "": "X_WINS" } },
    _XOOXXOOX: { on: { PLAY_X_TOP_LEFT: "XXOOXXOOX" } },
    _XOOXXO_X: {
      on: { PLAY_O_TOP_LEFT: "OXOOXXO_X", PLAY_O_BOTTOM_CENTER: "_XOOXXOOX" }
    },
    _XOOXXO__: {
      on: {
        PLAY_X_TOP_LEFT: "XXOOXXO__",
        PLAY_X_BOTTOM_CENTER: "_XOOXXOX_",
        PLAY_X_BOTTOM_RIGHT: "_XOOXXO_X"
      }
    },
    _XOOXXXOO: { on: { PLAY_X_TOP_LEFT: "XXOOXXXOO" } },
    _XOOXXXO_: {
      on: { PLAY_O_TOP_LEFT: "OXOOXXXO_", PLAY_O_BOTTOM_RIGHT: "_XOOXXXOO" }
    },
    _XOOXX_OX: {
      on: { PLAY_O_TOP_LEFT: "OXOOXX_OX", PLAY_O_BOTTOM_LEFT: "_XOOXXOOX" }
    },
    _XOOXX_O_: {
      on: {
        PLAY_X_TOP_LEFT: "XXOOXX_O_",
        PLAY_X_BOTTOM_LEFT: "_XOOXXXO_",
        PLAY_X_BOTTOM_RIGHT: "_XOOXX_OX"
      }
    },
    _XOOXXX_O: {
      on: { PLAY_O_TOP_LEFT: "OXOOXXX_O", PLAY_O_BOTTOM_CENTER: "_XOOXXXOO" }
    },
    _XOOXX_XO: { on: { "": "X_WINS" } },
    _XOOXX__O: {
      on: {
        PLAY_X_TOP_LEFT: "XXOOXX__O",
        PLAY_X_BOTTOM_LEFT: "_XOOXXX_O",
        PLAY_X_BOTTOM_CENTER: "_XOOXX_XO"
      }
    },
    _XOOXX___: {
      on: {
        PLAY_O_TOP_LEFT: "OXOOXX___",
        PLAY_O_BOTTOM_LEFT: "_XOOXXO__",
        PLAY_O_BOTTOM_CENTER: "_XOOXX_O_",
        PLAY_O_BOTTOM_RIGHT: "_XOOXX__O"
      }
    },
    _XOOXOXX_: { on: { "": "X_WINS" } },
    _XOOXOXOX: { on: { PLAY_X_TOP_LEFT: "XXOOXOXOX" } },
    _XOOXOX_X: {
      on: { PLAY_O_TOP_LEFT: "OXOOXOX_X", PLAY_O_BOTTOM_CENTER: "_XOOXOXOX" }
    },
    _XOOXOX__: {
      on: {
        PLAY_X_TOP_LEFT: "XXOOXOX__",
        PLAY_X_BOTTOM_CENTER: "_XOOXOXX_",
        PLAY_X_BOTTOM_RIGHT: "_XOOXOX_X"
      }
    },
    _XOOX_XOX: {
      on: { PLAY_O_TOP_LEFT: "OXOOX_XOX", PLAY_O_MIDDLE_RIGHT: "_XOOXOXOX" }
    },
    _XOOX_XO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXOOX_XO_",
        PLAY_X_MIDDLE_RIGHT: "_XOOXXXO_",
        PLAY_X_BOTTOM_RIGHT: "_XOOX_XOX"
      }
    },
    _XOOX_XXO: { on: { "": "X_WINS" } },
    _XOOX_X_O: {
      on: {
        PLAY_X_TOP_LEFT: "XXOOX_X_O",
        PLAY_X_MIDDLE_RIGHT: "_XOOXXX_O",
        PLAY_X_BOTTOM_CENTER: "_XOOX_XXO"
      }
    },
    _XOOX_X__: {
      on: {
        PLAY_O_TOP_LEFT: "OXOOX_X__",
        PLAY_O_MIDDLE_RIGHT: "_XOOXOX__",
        PLAY_O_BOTTOM_CENTER: "_XOOX_XO_",
        PLAY_O_BOTTOM_RIGHT: "_XOOX_X_O"
      }
    },
    _XOOX__X_: { on: { "": "X_WINS" } },
    _XOOXO_XX: { on: { "": "X_WINS" } },
    _XOOXO__X: {
      on: {
        PLAY_X_TOP_LEFT: "XXOOXO__X",
        PLAY_X_BOTTOM_LEFT: "_XOOXOX_X",
        PLAY_X_BOTTOM_CENTER: "_XOOXO_XX"
      }
    },
    _XOOX_OXX: { on: { "": "X_WINS" } },
    _XOOX_O_X: {
      on: {
        PLAY_X_TOP_LEFT: "XXOOX_O_X",
        PLAY_X_MIDDLE_RIGHT: "_XOOXXO_X",
        PLAY_X_BOTTOM_CENTER: "_XOOX_OXX"
      }
    },
    _XOOX__OX: {
      on: {
        PLAY_X_TOP_LEFT: "XXOOX__OX",
        PLAY_X_MIDDLE_RIGHT: "_XOOXX_OX",
        PLAY_X_BOTTOM_LEFT: "_XOOX_XOX"
      }
    },
    _XOOX___X: {
      on: {
        PLAY_O_TOP_LEFT: "OXOOX___X",
        PLAY_O_MIDDLE_RIGHT: "_XOOXO__X",
        PLAY_O_BOTTOM_LEFT: "_XOOX_O_X",
        PLAY_O_BOTTOM_CENTER: "_XOOX__OX"
      }
    },
    _XOOX____: {
      on: {
        PLAY_X_TOP_LEFT: "XXOOX____",
        PLAY_X_MIDDLE_RIGHT: "_XOOXX___",
        PLAY_X_BOTTOM_LEFT: "_XOOX_X__",
        PLAY_X_BOTTOM_CENTER: "_XOOX__X_",
        PLAY_X_BOTTOM_RIGHT: "_XOOX___X"
      }
    },
    _XO_XOXOX: {
      on: { PLAY_O_TOP_LEFT: "OXO_XOXOX", PLAY_O_MIDDLE_LEFT: "_XOOXOXOX" }
    },
    _XO_XOXO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_XOXO_",
        PLAY_X_MIDDLE_LEFT: "_XOXXOXO_",
        PLAY_X_BOTTOM_RIGHT: "_XO_XOXOX"
      }
    },
    _XO_XOX_O: { on: { "": "O_WINS" } },
    _XO_XOX__: {
      on: {
        PLAY_O_TOP_LEFT: "OXO_XOX__",
        PLAY_O_MIDDLE_LEFT: "_XOOXOX__",
        PLAY_O_BOTTOM_CENTER: "_XO_XOXO_",
        PLAY_O_BOTTOM_RIGHT: "_XO_XOX_O"
      }
    },
    _XO_XO_X_: { on: { "": "X_WINS" } },
    _XO_XOOXX: { on: { "": "X_WINS" } },
    _XO_XOO_X: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_XOO_X",
        PLAY_X_MIDDLE_LEFT: "_XOXXOO_X",
        PLAY_X_BOTTOM_CENTER: "_XO_XOOXX"
      }
    },
    _XO_XO_OX: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_XO_OX",
        PLAY_X_MIDDLE_LEFT: "_XOXXO_OX",
        PLAY_X_BOTTOM_LEFT: "_XO_XOXOX"
      }
    },
    _XO_XO__X: {
      on: {
        PLAY_O_TOP_LEFT: "OXO_XO__X",
        PLAY_O_MIDDLE_LEFT: "_XOOXO__X",
        PLAY_O_BOTTOM_LEFT: "_XO_XOO_X",
        PLAY_O_BOTTOM_CENTER: "_XO_XO_OX"
      }
    },
    _XO_XO___: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_XO___",
        PLAY_X_MIDDLE_LEFT: "_XOXXO___",
        PLAY_X_BOTTOM_LEFT: "_XO_XOX__",
        PLAY_X_BOTTOM_CENTER: "_XO_XO_X_",
        PLAY_X_BOTTOM_RIGHT: "_XO_XO__X"
      }
    },
    _XO_XXOOX: {
      on: { PLAY_O_TOP_LEFT: "OXO_XXOOX", PLAY_O_MIDDLE_LEFT: "_XOOXXOOX" }
    },
    _XO_XXOO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_XXOO_",
        PLAY_X_MIDDLE_LEFT: "_XOXXXOO_",
        PLAY_X_BOTTOM_RIGHT: "_XO_XXOOX"
      }
    },
    _XO_XXOXO: { on: { "": "X_WINS" } },
    _XO_XXO_O: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_XXO_O",
        PLAY_X_MIDDLE_LEFT: "_XOXXXO_O",
        PLAY_X_BOTTOM_CENTER: "_XO_XXOXO"
      }
    },
    _XO_XXO__: {
      on: {
        PLAY_O_TOP_LEFT: "OXO_XXO__",
        PLAY_O_MIDDLE_LEFT: "_XOOXXO__",
        PLAY_O_BOTTOM_CENTER: "_XO_XXOO_",
        PLAY_O_BOTTOM_RIGHT: "_XO_XXO_O"
      }
    },
    _XO_X_OX_: { on: { "": "X_WINS" } },
    _XO_X_OOX: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_X_OOX",
        PLAY_X_MIDDLE_LEFT: "_XOXX_OOX",
        PLAY_X_MIDDLE_RIGHT: "_XO_XXOOX"
      }
    },
    _XO_X_O_X: {
      on: {
        PLAY_O_TOP_LEFT: "OXO_X_O_X",
        PLAY_O_MIDDLE_LEFT: "_XOOX_O_X",
        PLAY_O_MIDDLE_RIGHT: "_XO_XOO_X",
        PLAY_O_BOTTOM_CENTER: "_XO_X_OOX"
      }
    },
    _XO_X_O__: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_X_O__",
        PLAY_X_MIDDLE_LEFT: "_XOXX_O__",
        PLAY_X_MIDDLE_RIGHT: "_XO_XXO__",
        PLAY_X_BOTTOM_CENTER: "_XO_X_OX_",
        PLAY_X_BOTTOM_RIGHT: "_XO_X_O_X"
      }
    },
    _XO_XXXOO: {
      on: { PLAY_O_TOP_LEFT: "OXO_XXXOO", PLAY_O_MIDDLE_LEFT: "_XOOXXXOO" }
    },
    _XO_XX_OO: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_XX_OO",
        PLAY_X_MIDDLE_LEFT: "_XOXXX_OO",
        PLAY_X_BOTTOM_LEFT: "_XO_XXXOO"
      }
    },
    _XO_XX_O_: {
      on: {
        PLAY_O_TOP_LEFT: "OXO_XX_O_",
        PLAY_O_MIDDLE_LEFT: "_XOOXX_O_",
        PLAY_O_BOTTOM_LEFT: "_XO_XXOO_",
        PLAY_O_BOTTOM_RIGHT: "_XO_XX_OO"
      }
    },
    _XO_X_XOO: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_X_XOO",
        PLAY_X_MIDDLE_LEFT: "_XOXX_XOO",
        PLAY_X_MIDDLE_RIGHT: "_XO_XXXOO"
      }
    },
    _XO_X_XO_: {
      on: {
        PLAY_O_TOP_LEFT: "OXO_X_XO_",
        PLAY_O_MIDDLE_LEFT: "_XOOX_XO_",
        PLAY_O_MIDDLE_RIGHT: "_XO_XOXO_",
        PLAY_O_BOTTOM_RIGHT: "_XO_X_XOO"
      }
    },
    _XO_X__OX: {
      on: {
        PLAY_O_TOP_LEFT: "OXO_X__OX",
        PLAY_O_MIDDLE_LEFT: "_XOOX__OX",
        PLAY_O_MIDDLE_RIGHT: "_XO_XO_OX",
        PLAY_O_BOTTOM_LEFT: "_XO_X_OOX"
      }
    },
    _XO_X__O_: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_X__O_",
        PLAY_X_MIDDLE_LEFT: "_XOXX__O_",
        PLAY_X_MIDDLE_RIGHT: "_XO_XX_O_",
        PLAY_X_BOTTOM_LEFT: "_XO_X_XO_",
        PLAY_X_BOTTOM_RIGHT: "_XO_X__OX"
      }
    },
    _XO_XX__O: {
      on: {
        PLAY_O_TOP_LEFT: "OXO_XX__O",
        PLAY_O_MIDDLE_LEFT: "_XOOXX__O",
        PLAY_O_BOTTOM_LEFT: "_XO_XXO_O",
        PLAY_O_BOTTOM_CENTER: "_XO_XX_OO"
      }
    },
    _XO_X_X_O: {
      on: {
        PLAY_O_TOP_LEFT: "OXO_X_X_O",
        PLAY_O_MIDDLE_LEFT: "_XOOX_X_O",
        PLAY_O_MIDDLE_RIGHT: "_XO_XOX_O",
        PLAY_O_BOTTOM_CENTER: "_XO_X_XOO"
      }
    },
    _XO_X__XO: { on: { "": "X_WINS" } },
    _XO_X___O: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_X___O",
        PLAY_X_MIDDLE_LEFT: "_XOXX___O",
        PLAY_X_MIDDLE_RIGHT: "_XO_XX__O",
        PLAY_X_BOTTOM_LEFT: "_XO_X_X_O",
        PLAY_X_BOTTOM_CENTER: "_XO_X__XO"
      }
    },
    _XO_X____: {
      on: {
        PLAY_O_TOP_LEFT: "OXO_X____",
        PLAY_O_MIDDLE_LEFT: "_XOOX____",
        PLAY_O_MIDDLE_RIGHT: "_XO_XO___",
        PLAY_O_BOTTOM_LEFT: "_XO_X_O__",
        PLAY_O_BOTTOM_CENTER: "_XO_X__O_",
        PLAY_O_BOTTOM_RIGHT: "_XO_X___O"
      }
    },
    _XOOOXXXO: { on: { PLAY_X_TOP_LEFT: "XXOOOXXXO" } },
    _XOOOXXX_: {
      on: { PLAY_O_TOP_LEFT: "OXOOOXXX_", PLAY_O_BOTTOM_RIGHT: "_XOOOXXXO" }
    },
    _XOOOXXOX: { on: { PLAY_X_TOP_LEFT: "XXOOOXXOX" } },
    _XOOOXX_X: {
      on: { PLAY_O_TOP_LEFT: "OXOOOXX_X", PLAY_O_BOTTOM_CENTER: "_XOOOXXOX" }
    },
    _XOOOXX__: {
      on: {
        PLAY_X_TOP_LEFT: "XXOOOXX__",
        PLAY_X_BOTTOM_CENTER: "_XOOOXXX_",
        PLAY_X_BOTTOM_RIGHT: "_XOOOXX_X"
      }
    },
    _XOO_XXOX: {
      on: { PLAY_O_TOP_LEFT: "OXOO_XXOX", PLAY_O_CENTER: "_XOOOXXOX" }
    },
    _XOO_XXO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXOO_XXO_",
        PLAY_X_CENTER: "_XOOXXXO_",
        PLAY_X_BOTTOM_RIGHT: "_XOO_XXOX"
      }
    },
    _XOO_XXXO: {
      on: { PLAY_O_TOP_LEFT: "OXOO_XXXO", PLAY_O_CENTER: "_XOOOXXXO" }
    },
    _XOO_XX_O: {
      on: {
        PLAY_X_TOP_LEFT: "XXOO_XX_O",
        PLAY_X_CENTER: "_XOOXXX_O",
        PLAY_X_BOTTOM_CENTER: "_XOO_XXXO"
      }
    },
    _XOO_XX__: {
      on: {
        PLAY_O_TOP_LEFT: "OXOO_XX__",
        PLAY_O_CENTER: "_XOOOXX__",
        PLAY_O_BOTTOM_CENTER: "_XOO_XXO_",
        PLAY_O_BOTTOM_RIGHT: "_XOO_XX_O"
      }
    },
    _XOOOXOXX: { on: { "": "O_WINS" } },
    _XOOOX_XX: {
      on: { PLAY_O_TOP_LEFT: "OXOOOX_XX", PLAY_O_BOTTOM_LEFT: "_XOOOXOXX" }
    },
    _XOOOX_X_: {
      on: {
        PLAY_X_TOP_LEFT: "XXOOOX_X_",
        PLAY_X_BOTTOM_LEFT: "_XOOOXXX_",
        PLAY_X_BOTTOM_RIGHT: "_XOOOX_XX"
      }
    },
    _XOO_XOXX: {
      on: { PLAY_O_TOP_LEFT: "OXOO_XOXX", PLAY_O_CENTER: "_XOOOXOXX" }
    },
    _XOO_XOX_: {
      on: {
        PLAY_X_TOP_LEFT: "XXOO_XOX_",
        PLAY_X_CENTER: "_XOOXXOX_",
        PLAY_X_BOTTOM_RIGHT: "_XOO_XOXX"
      }
    },
    _XOO_X_XO: {
      on: {
        PLAY_X_TOP_LEFT: "XXOO_X_XO",
        PLAY_X_CENTER: "_XOOXX_XO",
        PLAY_X_BOTTOM_LEFT: "_XOO_XXXO"
      }
    },
    _XOO_X_X_: {
      on: {
        PLAY_O_TOP_LEFT: "OXOO_X_X_",
        PLAY_O_CENTER: "_XOOOX_X_",
        PLAY_O_BOTTOM_LEFT: "_XOO_XOX_",
        PLAY_O_BOTTOM_RIGHT: "_XOO_X_XO"
      }
    },
    _XOOOX__X: {
      on: {
        PLAY_X_TOP_LEFT: "XXOOOX__X",
        PLAY_X_BOTTOM_LEFT: "_XOOOXX_X",
        PLAY_X_BOTTOM_CENTER: "_XOOOX_XX"
      }
    },
    _XOO_XO_X: {
      on: {
        PLAY_X_TOP_LEFT: "XXOO_XO_X",
        PLAY_X_CENTER: "_XOOXXO_X",
        PLAY_X_BOTTOM_CENTER: "_XOO_XOXX"
      }
    },
    _XOO_X_OX: {
      on: {
        PLAY_X_TOP_LEFT: "XXOO_X_OX",
        PLAY_X_CENTER: "_XOOXX_OX",
        PLAY_X_BOTTOM_LEFT: "_XOO_XXOX"
      }
    },
    _XOO_X__X: {
      on: {
        PLAY_O_TOP_LEFT: "OXOO_X__X",
        PLAY_O_CENTER: "_XOOOX__X",
        PLAY_O_BOTTOM_LEFT: "_XOO_XO_X",
        PLAY_O_BOTTOM_CENTER: "_XOO_X_OX"
      }
    },
    _XOO_X___: {
      on: {
        PLAY_X_TOP_LEFT: "XXOO_X___",
        PLAY_X_CENTER: "_XOOXX___",
        PLAY_X_BOTTOM_LEFT: "_XOO_XX__",
        PLAY_X_BOTTOM_CENTER: "_XOO_X_X_",
        PLAY_X_BOTTOM_RIGHT: "_XOO_X__X"
      }
    },
    _XO_OXXOX: {
      on: { PLAY_O_TOP_LEFT: "OXO_OXXOX", PLAY_O_MIDDLE_LEFT: "_XOOOXXOX" }
    },
    _XO_OXXO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_OXXO_",
        PLAY_X_MIDDLE_LEFT: "_XOXOXXO_",
        PLAY_X_BOTTOM_RIGHT: "_XO_OXXOX"
      }
    },
    _XO_OXXXO: {
      on: { PLAY_O_TOP_LEFT: "OXO_OXXXO", PLAY_O_MIDDLE_LEFT: "_XOOOXXXO" }
    },
    _XO_OXX_O: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_OXX_O",
        PLAY_X_MIDDLE_LEFT: "_XOXOXX_O",
        PLAY_X_BOTTOM_CENTER: "_XO_OXXXO"
      }
    },
    _XO_OXX__: {
      on: {
        PLAY_O_TOP_LEFT: "OXO_OXX__",
        PLAY_O_MIDDLE_LEFT: "_XOOOXX__",
        PLAY_O_BOTTOM_CENTER: "_XO_OXXO_",
        PLAY_O_BOTTOM_RIGHT: "_XO_OXX_O"
      }
    },
    _XO_OXOX_: { on: { "": "O_WINS" } },
    _XO_OX_XO: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_OX_XO",
        PLAY_X_MIDDLE_LEFT: "_XOXOX_XO",
        PLAY_X_BOTTOM_LEFT: "_XO_OXXXO"
      }
    },
    _XO_OX_X_: {
      on: {
        PLAY_O_TOP_LEFT: "OXO_OX_X_",
        PLAY_O_MIDDLE_LEFT: "_XOOOX_X_",
        PLAY_O_BOTTOM_LEFT: "_XO_OXOX_",
        PLAY_O_BOTTOM_RIGHT: "_XO_OX_XO"
      }
    },
    _XO_OXO_X: { on: { "": "O_WINS" } },
    _XO_OX_OX: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_OX_OX",
        PLAY_X_MIDDLE_LEFT: "_XOXOX_OX",
        PLAY_X_BOTTOM_LEFT: "_XO_OXXOX"
      }
    },
    _XO_OX__X: {
      on: {
        PLAY_O_TOP_LEFT: "OXO_OX__X",
        PLAY_O_MIDDLE_LEFT: "_XOOOX__X",
        PLAY_O_BOTTOM_LEFT: "_XO_OXO_X",
        PLAY_O_BOTTOM_CENTER: "_XO_OX_OX"
      }
    },
    _XO_OX___: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_OX___",
        PLAY_X_MIDDLE_LEFT: "_XOXOX___",
        PLAY_X_BOTTOM_LEFT: "_XO_OXX__",
        PLAY_X_BOTTOM_CENTER: "_XO_OX_X_",
        PLAY_X_BOTTOM_RIGHT: "_XO_OX__X"
      }
    },
    _XO__XOXO: {
      on: {
        PLAY_X_TOP_LEFT: "XXO__XOXO",
        PLAY_X_MIDDLE_LEFT: "_XOX_XOXO",
        PLAY_X_CENTER: "_XO_XXOXO"
      }
    },
    _XO__XOX_: {
      on: {
        PLAY_O_TOP_LEFT: "OXO__XOX_",
        PLAY_O_MIDDLE_LEFT: "_XOO_XOX_",
        PLAY_O_CENTER: "_XO_OXOX_",
        PLAY_O_BOTTOM_RIGHT: "_XO__XOXO"
      }
    },
    _XO__XOOX: {
      on: {
        PLAY_X_TOP_LEFT: "XXO__XOOX",
        PLAY_X_MIDDLE_LEFT: "_XOX_XOOX",
        PLAY_X_CENTER: "_XO_XXOOX"
      }
    },
    _XO__XO_X: {
      on: {
        PLAY_O_TOP_LEFT: "OXO__XO_X",
        PLAY_O_MIDDLE_LEFT: "_XOO_XO_X",
        PLAY_O_CENTER: "_XO_OXO_X",
        PLAY_O_BOTTOM_CENTER: "_XO__XOOX"
      }
    },
    _XO__XO__: {
      on: {
        PLAY_X_TOP_LEFT: "XXO__XO__",
        PLAY_X_MIDDLE_LEFT: "_XOX_XO__",
        PLAY_X_CENTER: "_XO_XXO__",
        PLAY_X_BOTTOM_CENTER: "_XO__XOX_",
        PLAY_X_BOTTOM_RIGHT: "_XO__XO_X"
      }
    },
    _XO__XXOO: {
      on: {
        PLAY_X_TOP_LEFT: "XXO__XXOO",
        PLAY_X_MIDDLE_LEFT: "_XOX_XXOO",
        PLAY_X_CENTER: "_XO_XXXOO"
      }
    },
    _XO__XXO_: {
      on: {
        PLAY_O_TOP_LEFT: "OXO__XXO_",
        PLAY_O_MIDDLE_LEFT: "_XOO_XXO_",
        PLAY_O_CENTER: "_XO_OXXO_",
        PLAY_O_BOTTOM_RIGHT: "_XO__XXOO"
      }
    },
    _XO__X_OX: {
      on: {
        PLAY_O_TOP_LEFT: "OXO__X_OX",
        PLAY_O_MIDDLE_LEFT: "_XOO_X_OX",
        PLAY_O_CENTER: "_XO_OX_OX",
        PLAY_O_BOTTOM_LEFT: "_XO__XOOX"
      }
    },
    _XO__X_O_: {
      on: {
        PLAY_X_TOP_LEFT: "XXO__X_O_",
        PLAY_X_MIDDLE_LEFT: "_XOX_X_O_",
        PLAY_X_CENTER: "_XO_XX_O_",
        PLAY_X_BOTTOM_LEFT: "_XO__XXO_",
        PLAY_X_BOTTOM_RIGHT: "_XO__X_OX"
      }
    },
    _XO__XX_O: {
      on: {
        PLAY_O_TOP_LEFT: "OXO__XX_O",
        PLAY_O_MIDDLE_LEFT: "_XOO_XX_O",
        PLAY_O_CENTER: "_XO_OXX_O",
        PLAY_O_BOTTOM_CENTER: "_XO__XXOO"
      }
    },
    _XO__X_XO: {
      on: {
        PLAY_O_TOP_LEFT: "OXO__X_XO",
        PLAY_O_MIDDLE_LEFT: "_XOO_X_XO",
        PLAY_O_CENTER: "_XO_OX_XO",
        PLAY_O_BOTTOM_LEFT: "_XO__XOXO"
      }
    },
    _XO__X__O: {
      on: {
        PLAY_X_TOP_LEFT: "XXO__X__O",
        PLAY_X_MIDDLE_LEFT: "_XOX_X__O",
        PLAY_X_CENTER: "_XO_XX__O",
        PLAY_X_BOTTOM_LEFT: "_XO__XX_O",
        PLAY_X_BOTTOM_CENTER: "_XO__X_XO"
      }
    },
    _XO__X___: {
      on: {
        PLAY_O_TOP_LEFT: "OXO__X___",
        PLAY_O_MIDDLE_LEFT: "_XOO_X___",
        PLAY_O_CENTER: "_XO_OX___",
        PLAY_O_BOTTOM_LEFT: "_XO__XO__",
        PLAY_O_BOTTOM_CENTER: "_XO__X_O_",
        PLAY_O_BOTTOM_RIGHT: "_XO__X__O"
      }
    },
    _XOOO_XXX: { on: { "": "X_WINS" } },
    _XOOO_XX_: {
      on: {
        PLAY_X_TOP_LEFT: "XXOOO_XX_",
        PLAY_X_MIDDLE_RIGHT: "_XOOOXXX_",
        PLAY_X_BOTTOM_RIGHT: "_XOOO_XXX"
      }
    },
    _XOO_OXXX: { on: { "": "X_WINS" } },
    _XOO_OXX_: {
      on: {
        PLAY_X_TOP_LEFT: "XXOO_OXX_",
        PLAY_X_CENTER: "_XOOXOXX_",
        PLAY_X_BOTTOM_RIGHT: "_XOO_OXXX"
      }
    },
    _XOO__XXO: {
      on: {
        PLAY_X_TOP_LEFT: "XXOO__XXO",
        PLAY_X_CENTER: "_XOOX_XXO",
        PLAY_X_MIDDLE_RIGHT: "_XOO_XXXO"
      }
    },
    _XOO__XX_: {
      on: {
        PLAY_O_TOP_LEFT: "OXOO__XX_",
        PLAY_O_CENTER: "_XOOO_XX_",
        PLAY_O_MIDDLE_RIGHT: "_XOO_OXX_",
        PLAY_O_BOTTOM_RIGHT: "_XOO__XXO"
      }
    },
    _XOOO_X_X: {
      on: {
        PLAY_X_TOP_LEFT: "XXOOO_X_X",
        PLAY_X_MIDDLE_RIGHT: "_XOOOXX_X",
        PLAY_X_BOTTOM_CENTER: "_XOOO_XXX"
      }
    },
    _XOO_OX_X: {
      on: {
        PLAY_X_TOP_LEFT: "XXOO_OX_X",
        PLAY_X_CENTER: "_XOOXOX_X",
        PLAY_X_BOTTOM_CENTER: "_XOO_OXXX"
      }
    },
    _XOO__XOX: {
      on: {
        PLAY_X_TOP_LEFT: "XXOO__XOX",
        PLAY_X_CENTER: "_XOOX_XOX",
        PLAY_X_MIDDLE_RIGHT: "_XOO_XXOX"
      }
    },
    _XOO__X_X: {
      on: {
        PLAY_O_TOP_LEFT: "OXOO__X_X",
        PLAY_O_CENTER: "_XOOO_X_X",
        PLAY_O_MIDDLE_RIGHT: "_XOO_OX_X",
        PLAY_O_BOTTOM_CENTER: "_XOO__XOX"
      }
    },
    _XOO__X__: {
      on: {
        PLAY_X_TOP_LEFT: "XXOO__X__",
        PLAY_X_CENTER: "_XOOX_X__",
        PLAY_X_MIDDLE_RIGHT: "_XOO_XX__",
        PLAY_X_BOTTOM_CENTER: "_XOO__XX_",
        PLAY_X_BOTTOM_RIGHT: "_XOO__X_X"
      }
    },
    _XO_OOXXX: { on: { "": "X_WINS" } },
    _XO_OOXX_: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_OOXX_",
        PLAY_X_MIDDLE_LEFT: "_XOXOOXX_",
        PLAY_X_BOTTOM_RIGHT: "_XO_OOXXX"
      }
    },
    _XO_O_XXO: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_O_XXO",
        PLAY_X_MIDDLE_LEFT: "_XOXO_XXO",
        PLAY_X_MIDDLE_RIGHT: "_XO_OXXXO"
      }
    },
    _XO_O_XX_: {
      on: {
        PLAY_O_TOP_LEFT: "OXO_O_XX_",
        PLAY_O_MIDDLE_LEFT: "_XOOO_XX_",
        PLAY_O_MIDDLE_RIGHT: "_XO_OOXX_",
        PLAY_O_BOTTOM_RIGHT: "_XO_O_XXO"
      }
    },
    _XO_OOX_X: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_OOX_X",
        PLAY_X_MIDDLE_LEFT: "_XOXOOX_X",
        PLAY_X_BOTTOM_CENTER: "_XO_OOXXX"
      }
    },
    _XO_O_XOX: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_O_XOX",
        PLAY_X_MIDDLE_LEFT: "_XOXO_XOX",
        PLAY_X_MIDDLE_RIGHT: "_XO_OXXOX"
      }
    },
    _XO_O_X_X: {
      on: {
        PLAY_O_TOP_LEFT: "OXO_O_X_X",
        PLAY_O_MIDDLE_LEFT: "_XOOO_X_X",
        PLAY_O_MIDDLE_RIGHT: "_XO_OOX_X",
        PLAY_O_BOTTOM_CENTER: "_XO_O_XOX"
      }
    },
    _XO_O_X__: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_O_X__",
        PLAY_X_MIDDLE_LEFT: "_XOXO_X__",
        PLAY_X_MIDDLE_RIGHT: "_XO_OXX__",
        PLAY_X_BOTTOM_CENTER: "_XO_O_XX_",
        PLAY_X_BOTTOM_RIGHT: "_XO_O_X_X"
      }
    },
    _XO__OXXO: { on: { "": "O_WINS" } },
    _XO__OXX_: {
      on: {
        PLAY_O_TOP_LEFT: "OXO__OXX_",
        PLAY_O_MIDDLE_LEFT: "_XOO_OXX_",
        PLAY_O_CENTER: "_XO_OOXX_",
        PLAY_O_BOTTOM_RIGHT: "_XO__OXXO"
      }
    },
    _XO__OXOX: {
      on: {
        PLAY_X_TOP_LEFT: "XXO__OXOX",
        PLAY_X_MIDDLE_LEFT: "_XOX_OXOX",
        PLAY_X_CENTER: "_XO_XOXOX"
      }
    },
    _XO__OX_X: {
      on: {
        PLAY_O_TOP_LEFT: "OXO__OX_X",
        PLAY_O_MIDDLE_LEFT: "_XOO_OX_X",
        PLAY_O_CENTER: "_XO_OOX_X",
        PLAY_O_BOTTOM_CENTER: "_XO__OXOX"
      }
    },
    _XO__OX__: {
      on: {
        PLAY_X_TOP_LEFT: "XXO__OX__",
        PLAY_X_MIDDLE_LEFT: "_XOX_OX__",
        PLAY_X_CENTER: "_XO_XOX__",
        PLAY_X_BOTTOM_CENTER: "_XO__OXX_",
        PLAY_X_BOTTOM_RIGHT: "_XO__OX_X"
      }
    },
    _XO___XOX: {
      on: {
        PLAY_O_TOP_LEFT: "OXO___XOX",
        PLAY_O_MIDDLE_LEFT: "_XOO__XOX",
        PLAY_O_CENTER: "_XO_O_XOX",
        PLAY_O_MIDDLE_RIGHT: "_XO__OXOX"
      }
    },
    _XO___XO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXO___XO_",
        PLAY_X_MIDDLE_LEFT: "_XOX__XO_",
        PLAY_X_CENTER: "_XO_X_XO_",
        PLAY_X_MIDDLE_RIGHT: "_XO__XXO_",
        PLAY_X_BOTTOM_RIGHT: "_XO___XOX"
      }
    },
    _XO___XXO: {
      on: {
        PLAY_O_TOP_LEFT: "OXO___XXO",
        PLAY_O_MIDDLE_LEFT: "_XOO__XXO",
        PLAY_O_CENTER: "_XO_O_XXO",
        PLAY_O_MIDDLE_RIGHT: "_XO__OXXO"
      }
    },
    _XO___X_O: {
      on: {
        PLAY_X_TOP_LEFT: "XXO___X_O",
        PLAY_X_MIDDLE_LEFT: "_XOX__X_O",
        PLAY_X_CENTER: "_XO_X_X_O",
        PLAY_X_MIDDLE_RIGHT: "_XO__XX_O",
        PLAY_X_BOTTOM_CENTER: "_XO___XXO"
      }
    },
    _XO___X__: {
      on: {
        PLAY_O_TOP_LEFT: "OXO___X__",
        PLAY_O_MIDDLE_LEFT: "_XOO__X__",
        PLAY_O_CENTER: "_XO_O_X__",
        PLAY_O_MIDDLE_RIGHT: "_XO__OX__",
        PLAY_O_BOTTOM_CENTER: "_XO___XO_",
        PLAY_O_BOTTOM_RIGHT: "_XO___X_O"
      }
    },
    _XOOO__XX: {
      on: {
        PLAY_X_TOP_LEFT: "XXOOO__XX",
        PLAY_X_MIDDLE_RIGHT: "_XOOOX_XX",
        PLAY_X_BOTTOM_LEFT: "_XOOO_XXX"
      }
    },
    _XOO_O_XX: {
      on: {
        PLAY_X_TOP_LEFT: "XXOO_O_XX",
        PLAY_X_CENTER: "_XOOXO_XX",
        PLAY_X_BOTTOM_LEFT: "_XOO_OXXX"
      }
    },
    _XOO__OXX: {
      on: {
        PLAY_X_TOP_LEFT: "XXOO__OXX",
        PLAY_X_CENTER: "_XOOX_OXX",
        PLAY_X_MIDDLE_RIGHT: "_XOO_XOXX"
      }
    },
    _XOO___XX: {
      on: {
        PLAY_O_TOP_LEFT: "OXOO___XX",
        PLAY_O_CENTER: "_XOOO__XX",
        PLAY_O_MIDDLE_RIGHT: "_XOO_O_XX",
        PLAY_O_BOTTOM_LEFT: "_XOO__OXX"
      }
    },
    _XOO___X_: {
      on: {
        PLAY_X_TOP_LEFT: "XXOO___X_",
        PLAY_X_CENTER: "_XOOX__X_",
        PLAY_X_MIDDLE_RIGHT: "_XOO_X_X_",
        PLAY_X_BOTTOM_LEFT: "_XOO__XX_",
        PLAY_X_BOTTOM_RIGHT: "_XOO___XX"
      }
    },
    _XO_OO_XX: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_OO_XX",
        PLAY_X_MIDDLE_LEFT: "_XOXOO_XX",
        PLAY_X_BOTTOM_LEFT: "_XO_OOXXX"
      }
    },
    _XO_O_OXX: { on: { "": "O_WINS" } },
    _XO_O__XX: {
      on: {
        PLAY_O_TOP_LEFT: "OXO_O__XX",
        PLAY_O_MIDDLE_LEFT: "_XOOO__XX",
        PLAY_O_MIDDLE_RIGHT: "_XO_OO_XX",
        PLAY_O_BOTTOM_LEFT: "_XO_O_OXX"
      }
    },
    _XO_O__X_: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_O__X_",
        PLAY_X_MIDDLE_LEFT: "_XOXO__X_",
        PLAY_X_MIDDLE_RIGHT: "_XO_OX_X_",
        PLAY_X_BOTTOM_LEFT: "_XO_O_XX_",
        PLAY_X_BOTTOM_RIGHT: "_XO_O__XX"
      }
    },
    _XO__OOXX: {
      on: {
        PLAY_X_TOP_LEFT: "XXO__OOXX",
        PLAY_X_MIDDLE_LEFT: "_XOX_OOXX",
        PLAY_X_CENTER: "_XO_XOOXX"
      }
    },
    _XO__O_XX: {
      on: {
        PLAY_O_TOP_LEFT: "OXO__O_XX",
        PLAY_O_MIDDLE_LEFT: "_XOO_O_XX",
        PLAY_O_CENTER: "_XO_OO_XX",
        PLAY_O_BOTTOM_LEFT: "_XO__OOXX"
      }
    },
    _XO__O_X_: {
      on: {
        PLAY_X_TOP_LEFT: "XXO__O_X_",
        PLAY_X_MIDDLE_LEFT: "_XOX_O_X_",
        PLAY_X_CENTER: "_XO_XO_X_",
        PLAY_X_BOTTOM_LEFT: "_XO__OXX_",
        PLAY_X_BOTTOM_RIGHT: "_XO__O_XX"
      }
    },
    _XO___OXX: {
      on: {
        PLAY_O_TOP_LEFT: "OXO___OXX",
        PLAY_O_MIDDLE_LEFT: "_XOO__OXX",
        PLAY_O_CENTER: "_XO_O_OXX",
        PLAY_O_MIDDLE_RIGHT: "_XO__OOXX"
      }
    },
    _XO___OX_: {
      on: {
        PLAY_X_TOP_LEFT: "XXO___OX_",
        PLAY_X_MIDDLE_LEFT: "_XOX__OX_",
        PLAY_X_CENTER: "_XO_X_OX_",
        PLAY_X_MIDDLE_RIGHT: "_XO__XOX_",
        PLAY_X_BOTTOM_RIGHT: "_XO___OXX"
      }
    },
    _XO____XO: {
      on: {
        PLAY_X_TOP_LEFT: "XXO____XO",
        PLAY_X_MIDDLE_LEFT: "_XOX___XO",
        PLAY_X_CENTER: "_XO_X__XO",
        PLAY_X_MIDDLE_RIGHT: "_XO__X_XO",
        PLAY_X_BOTTOM_LEFT: "_XO___XXO"
      }
    },
    _XO____X_: {
      on: {
        PLAY_O_TOP_LEFT: "OXO____X_",
        PLAY_O_MIDDLE_LEFT: "_XOO___X_",
        PLAY_O_CENTER: "_XO_O__X_",
        PLAY_O_MIDDLE_RIGHT: "_XO__O_X_",
        PLAY_O_BOTTOM_LEFT: "_XO___OX_",
        PLAY_O_BOTTOM_RIGHT: "_XO____XO"
      }
    },
    _XOO____X: {
      on: {
        PLAY_X_TOP_LEFT: "XXOO____X",
        PLAY_X_CENTER: "_XOOX___X",
        PLAY_X_MIDDLE_RIGHT: "_XOO_X__X",
        PLAY_X_BOTTOM_LEFT: "_XOO__X_X",
        PLAY_X_BOTTOM_CENTER: "_XOO___XX"
      }
    },
    _XO_O___X: {
      on: {
        PLAY_X_TOP_LEFT: "XXO_O___X",
        PLAY_X_MIDDLE_LEFT: "_XOXO___X",
        PLAY_X_MIDDLE_RIGHT: "_XO_OX__X",
        PLAY_X_BOTTOM_LEFT: "_XO_O_X_X",
        PLAY_X_BOTTOM_CENTER: "_XO_O__XX"
      }
    },
    _XO__O__X: {
      on: {
        PLAY_X_TOP_LEFT: "XXO__O__X",
        PLAY_X_MIDDLE_LEFT: "_XOX_O__X",
        PLAY_X_CENTER: "_XO_XO__X",
        PLAY_X_BOTTOM_LEFT: "_XO__OX_X",
        PLAY_X_BOTTOM_CENTER: "_XO__O_XX"
      }
    },
    _XO___O_X: {
      on: {
        PLAY_X_TOP_LEFT: "XXO___O_X",
        PLAY_X_MIDDLE_LEFT: "_XOX__O_X",
        PLAY_X_CENTER: "_XO_X_O_X",
        PLAY_X_MIDDLE_RIGHT: "_XO__XO_X",
        PLAY_X_BOTTOM_CENTER: "_XO___OXX"
      }
    },
    _XO____OX: {
      on: {
        PLAY_X_TOP_LEFT: "XXO____OX",
        PLAY_X_MIDDLE_LEFT: "_XOX___OX",
        PLAY_X_CENTER: "_XO_X__OX",
        PLAY_X_MIDDLE_RIGHT: "_XO__X_OX",
        PLAY_X_BOTTOM_LEFT: "_XO___XOX"
      }
    },
    _XO_____X: {
      on: {
        PLAY_O_TOP_LEFT: "OXO_____X",
        PLAY_O_MIDDLE_LEFT: "_XOO____X",
        PLAY_O_CENTER: "_XO_O___X",
        PLAY_O_MIDDLE_RIGHT: "_XO__O__X",
        PLAY_O_BOTTOM_LEFT: "_XO___O_X",
        PLAY_O_BOTTOM_CENTER: "_XO____OX"
      }
    },
    _XO______: {
      on: {
        PLAY_X_TOP_LEFT: "XXO______",
        PLAY_X_MIDDLE_LEFT: "_XOX_____",
        PLAY_X_CENTER: "_XO_X____",
        PLAY_X_MIDDLE_RIGHT: "_XO__X___",
        PLAY_X_BOTTOM_LEFT: "_XO___X__",
        PLAY_X_BOTTOM_CENTER: "_XO____X_",
        PLAY_X_BOTTOM_RIGHT: "_XO_____X"
      }
    },
    _XXOOXOXO: { on: { PLAY_X_TOP_LEFT: "XXXOOXOXO" } },
    _XXOOXOX_: {
      on: { PLAY_O_TOP_LEFT: "OXXOOXOX_", PLAY_O_BOTTOM_RIGHT: "_XXOOXOXO" }
    },
    _XXOOXO_X: { on: { "": "X_WINS" } },
    _XXOOXO__: {
      on: {
        PLAY_X_TOP_LEFT: "XXXOOXO__",
        PLAY_X_BOTTOM_CENTER: "_XXOOXOX_",
        PLAY_X_BOTTOM_RIGHT: "_XXOOXO_X"
      }
    },
    _XXOOXXOO: { on: { PLAY_X_TOP_LEFT: "XXXOOXXOO" } },
    _XXOOXXO_: {
      on: { PLAY_O_TOP_LEFT: "OXXOOXXO_", PLAY_O_BOTTOM_RIGHT: "_XXOOXXOO" }
    },
    _XXOOX_OX: { on: { "": "X_WINS" } },
    _XXOOX_O_: {
      on: {
        PLAY_X_TOP_LEFT: "XXXOOX_O_",
        PLAY_X_BOTTOM_LEFT: "_XXOOXXO_",
        PLAY_X_BOTTOM_RIGHT: "_XXOOX_OX"
      }
    },
    _XXOOXX_O: {
      on: { PLAY_O_TOP_LEFT: "OXXOOXX_O", PLAY_O_BOTTOM_CENTER: "_XXOOXXOO" }
    },
    _XXOOX_XO: {
      on: { PLAY_O_TOP_LEFT: "OXXOOX_XO", PLAY_O_BOTTOM_LEFT: "_XXOOXOXO" }
    },
    _XXOOX__O: {
      on: {
        PLAY_X_TOP_LEFT: "XXXOOX__O",
        PLAY_X_BOTTOM_LEFT: "_XXOOXX_O",
        PLAY_X_BOTTOM_CENTER: "_XXOOX_XO"
      }
    },
    _XXOOX___: {
      on: {
        PLAY_O_TOP_LEFT: "OXXOOX___",
        PLAY_O_BOTTOM_LEFT: "_XXOOXO__",
        PLAY_O_BOTTOM_CENTER: "_XXOOX_O_",
        PLAY_O_BOTTOM_RIGHT: "_XXOOX__O"
      }
    },
    _XXOOOX__: { on: { "": "O_WINS" } },
    _XXOOOXOX: { on: { "": "O_WINS" } },
    _XXOO_XOX: {
      on: { PLAY_O_TOP_LEFT: "OXXOO_XOX", PLAY_O_MIDDLE_RIGHT: "_XXOOOXOX" }
    },
    _XXOO_XO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXXOO_XO_",
        PLAY_X_MIDDLE_RIGHT: "_XXOOXXO_",
        PLAY_X_BOTTOM_RIGHT: "_XXOO_XOX"
      }
    },
    _XXOOOXXO: { on: { "": "O_WINS" } },
    _XXOO_XXO: {
      on: { PLAY_O_TOP_LEFT: "OXXOO_XXO", PLAY_O_MIDDLE_RIGHT: "_XXOOOXXO" }
    },
    _XXOO_X_O: {
      on: {
        PLAY_X_TOP_LEFT: "XXXOO_X_O",
        PLAY_X_MIDDLE_RIGHT: "_XXOOXX_O",
        PLAY_X_BOTTOM_CENTER: "_XXOO_XXO"
      }
    },
    _XXOO_X__: {
      on: {
        PLAY_O_TOP_LEFT: "OXXOO_X__",
        PLAY_O_MIDDLE_RIGHT: "_XXOOOX__",
        PLAY_O_BOTTOM_CENTER: "_XXOO_XO_",
        PLAY_O_BOTTOM_RIGHT: "_XXOO_X_O"
      }
    },
    _XXOOO_X_: { on: { "": "O_WINS" } },
    _XXOOOOXX: { on: { "": "O_WINS" } },
    _XXOO_OXX: {
      on: { PLAY_O_TOP_LEFT: "OXXOO_OXX", PLAY_O_MIDDLE_RIGHT: "_XXOOOOXX" }
    },
    _XXOO_OX_: {
      on: {
        PLAY_X_TOP_LEFT: "XXXOO_OX_",
        PLAY_X_MIDDLE_RIGHT: "_XXOOXOX_",
        PLAY_X_BOTTOM_RIGHT: "_XXOO_OXX"
      }
    },
    _XXOO__XO: {
      on: {
        PLAY_X_TOP_LEFT: "XXXOO__XO",
        PLAY_X_MIDDLE_RIGHT: "_XXOOX_XO",
        PLAY_X_BOTTOM_LEFT: "_XXOO_XXO"
      }
    },
    _XXOO__X_: {
      on: {
        PLAY_O_TOP_LEFT: "OXXOO__X_",
        PLAY_O_MIDDLE_RIGHT: "_XXOOO_X_",
        PLAY_O_BOTTOM_LEFT: "_XXOO_OX_",
        PLAY_O_BOTTOM_RIGHT: "_XXOO__XO"
      }
    },
    _XXOOO__X: { on: { "": "O_WINS" } },
    _XXOO_O_X: {
      on: {
        PLAY_X_TOP_LEFT: "XXXOO_O_X",
        PLAY_X_MIDDLE_RIGHT: "_XXOOXO_X",
        PLAY_X_BOTTOM_CENTER: "_XXOO_OXX"
      }
    },
    _XXOO__OX: {
      on: {
        PLAY_X_TOP_LEFT: "XXXOO__OX",
        PLAY_X_MIDDLE_RIGHT: "_XXOOX_OX",
        PLAY_X_BOTTOM_LEFT: "_XXOO_XOX"
      }
    },
    _XXOO___X: {
      on: {
        PLAY_O_TOP_LEFT: "OXXOO___X",
        PLAY_O_MIDDLE_RIGHT: "_XXOOO__X",
        PLAY_O_BOTTOM_LEFT: "_XXOO_O_X",
        PLAY_O_BOTTOM_CENTER: "_XXOO__OX"
      }
    },
    _XXOO____: {
      on: {
        PLAY_X_TOP_LEFT: "XXXOO____",
        PLAY_X_MIDDLE_RIGHT: "_XXOOX___",
        PLAY_X_BOTTOM_LEFT: "_XXOO_X__",
        PLAY_X_BOTTOM_CENTER: "_XXOO__X_",
        PLAY_X_BOTTOM_RIGHT: "_XXOO___X"
      }
    },
    _XXOXOOX_: { on: { "": "X_WINS" } },
    XXXOXOOOX: { on: { "": "X_WINS" } },
    _XXOXOOOX: { on: { PLAY_X_TOP_LEFT: "XXXOXOOOX" } },
    _XXOXOO_X: {
      on: { PLAY_O_TOP_LEFT: "OXXOXOO_X", PLAY_O_BOTTOM_CENTER: "_XXOXOOOX" }
    },
    _XXOXOO__: {
      on: {
        PLAY_X_TOP_LEFT: "XXXOXOO__",
        PLAY_X_BOTTOM_CENTER: "_XXOXOOX_",
        PLAY_X_BOTTOM_RIGHT: "_XXOXOO_X"
      }
    },
    _XXOXOXO_: { on: { "": "X_WINS" } },
    _XXOXO_OX: {
      on: { PLAY_O_TOP_LEFT: "OXXOXO_OX", PLAY_O_BOTTOM_LEFT: "_XXOXOOOX" }
    },
    _XXOXO_O_: {
      on: {
        PLAY_X_TOP_LEFT: "XXXOXO_O_",
        PLAY_X_BOTTOM_LEFT: "_XXOXOXO_",
        PLAY_X_BOTTOM_RIGHT: "_XXOXO_OX"
      }
    },
    _XXOXOX_O: { on: { "": "X_WINS" } },
    _XXOXO_XO: { on: { "": "X_WINS" } },
    _XXOXO__O: {
      on: {
        PLAY_X_TOP_LEFT: "XXXOXO__O",
        PLAY_X_BOTTOM_LEFT: "_XXOXOX_O",
        PLAY_X_BOTTOM_CENTER: "_XXOXO_XO"
      }
    },
    _XXOXO___: {
      on: {
        PLAY_O_TOP_LEFT: "OXXOXO___",
        PLAY_O_BOTTOM_LEFT: "_XXOXOO__",
        PLAY_O_BOTTOM_CENTER: "_XXOXO_O_",
        PLAY_O_BOTTOM_RIGHT: "_XXOXO__O"
      }
    },
    _XXO_OXOX: {
      on: { PLAY_O_TOP_LEFT: "OXXO_OXOX", PLAY_O_CENTER: "_XXOOOXOX" }
    },
    _XXO_OXO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXXO_OXO_",
        PLAY_X_CENTER: "_XXOXOXO_",
        PLAY_X_BOTTOM_RIGHT: "_XXO_OXOX"
      }
    },
    _XXO_OXXO: {
      on: { PLAY_O_TOP_LEFT: "OXXO_OXXO", PLAY_O_CENTER: "_XXOOOXXO" }
    },
    _XXO_OX_O: {
      on: {
        PLAY_X_TOP_LEFT: "XXXO_OX_O",
        PLAY_X_CENTER: "_XXOXOX_O",
        PLAY_X_BOTTOM_CENTER: "_XXO_OXXO"
      }
    },
    _XXO_OX__: {
      on: {
        PLAY_O_TOP_LEFT: "OXXO_OX__",
        PLAY_O_CENTER: "_XXOOOX__",
        PLAY_O_BOTTOM_CENTER: "_XXO_OXO_",
        PLAY_O_BOTTOM_RIGHT: "_XXO_OX_O"
      }
    },
    _XXO_OOXX: {
      on: { PLAY_O_TOP_LEFT: "OXXO_OOXX", PLAY_O_CENTER: "_XXOOOOXX" }
    },
    _XXO_OOX_: {
      on: {
        PLAY_X_TOP_LEFT: "XXXO_OOX_",
        PLAY_X_CENTER: "_XXOXOOX_",
        PLAY_X_BOTTOM_RIGHT: "_XXO_OOXX"
      }
    },
    _XXO_O_XO: {
      on: {
        PLAY_X_TOP_LEFT: "XXXO_O_XO",
        PLAY_X_CENTER: "_XXOXO_XO",
        PLAY_X_BOTTOM_LEFT: "_XXO_OXXO"
      }
    },
    _XXO_O_X_: {
      on: {
        PLAY_O_TOP_LEFT: "OXXO_O_X_",
        PLAY_O_CENTER: "_XXOOO_X_",
        PLAY_O_BOTTOM_LEFT: "_XXO_OOX_",
        PLAY_O_BOTTOM_RIGHT: "_XXO_O_XO"
      }
    },
    _XXO_OO_X: {
      on: {
        PLAY_X_TOP_LEFT: "XXXO_OO_X",
        PLAY_X_CENTER: "_XXOXOO_X",
        PLAY_X_BOTTOM_CENTER: "_XXO_OOXX"
      }
    },
    _XXO_O_OX: {
      on: {
        PLAY_X_TOP_LEFT: "XXXO_O_OX",
        PLAY_X_CENTER: "_XXOXO_OX",
        PLAY_X_BOTTOM_LEFT: "_XXO_OXOX"
      }
    },
    _XXO_O__X: {
      on: {
        PLAY_O_TOP_LEFT: "OXXO_O__X",
        PLAY_O_CENTER: "_XXOOO__X",
        PLAY_O_BOTTOM_LEFT: "_XXO_OO_X",
        PLAY_O_BOTTOM_CENTER: "_XXO_O_OX"
      }
    },
    _XXO_O___: {
      on: {
        PLAY_X_TOP_LEFT: "XXXO_O___",
        PLAY_X_CENTER: "_XXOXO___",
        PLAY_X_BOTTOM_LEFT: "_XXO_OX__",
        PLAY_X_BOTTOM_CENTER: "_XXO_O_X_",
        PLAY_X_BOTTOM_RIGHT: "_XXO_O__X"
      }
    },
    _XXOXXOOO: { on: { "": "O_WINS" } },
    _XXOXXOO_: {
      on: { PLAY_O_TOP_LEFT: "OXXOXXOO_", PLAY_O_BOTTOM_RIGHT: "_XXOXXOOO" }
    },
    _XXOX_OOX: {
      on: { PLAY_O_TOP_LEFT: "OXXOX_OOX", PLAY_O_MIDDLE_RIGHT: "_XXOXOOOX" }
    },
    _XXOX_OO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXXOX_OO_",
        PLAY_X_MIDDLE_RIGHT: "_XXOXXOO_",
        PLAY_X_BOTTOM_RIGHT: "_XXOX_OOX"
      }
    },
    _XXOXXO_O: {
      on: { PLAY_O_TOP_LEFT: "OXXOXXO_O", PLAY_O_BOTTOM_CENTER: "_XXOXXOOO" }
    },
    _XXOX_OXO: { on: { "": "X_WINS" } },
    _XXOX_O_O: {
      on: {
        PLAY_X_TOP_LEFT: "XXXOX_O_O",
        PLAY_X_MIDDLE_RIGHT: "_XXOXXO_O",
        PLAY_X_BOTTOM_CENTER: "_XXOX_OXO"
      }
    },
    _XXOX_O__: {
      on: {
        PLAY_O_TOP_LEFT: "OXXOX_O__",
        PLAY_O_MIDDLE_RIGHT: "_XXOXOO__",
        PLAY_O_BOTTOM_CENTER: "_XXOX_OO_",
        PLAY_O_BOTTOM_RIGHT: "_XXOX_O_O"
      }
    },
    _XXO_XOOX: { on: { "": "X_WINS" } },
    _XXO_XOO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXXO_XOO_",
        PLAY_X_CENTER: "_XXOXXOO_",
        PLAY_X_BOTTOM_RIGHT: "_XXO_XOOX"
      }
    },
    _XXO_XOXO: {
      on: { PLAY_O_TOP_LEFT: "OXXO_XOXO", PLAY_O_CENTER: "_XXOOXOXO" }
    },
    _XXO_XO_O: {
      on: {
        PLAY_X_TOP_LEFT: "XXXO_XO_O",
        PLAY_X_CENTER: "_XXOXXO_O",
        PLAY_X_BOTTOM_CENTER: "_XXO_XOXO"
      }
    },
    _XXO_XO__: {
      on: {
        PLAY_O_TOP_LEFT: "OXXO_XO__",
        PLAY_O_CENTER: "_XXOOXO__",
        PLAY_O_BOTTOM_CENTER: "_XXO_XOO_",
        PLAY_O_BOTTOM_RIGHT: "_XXO_XO_O"
      }
    },
    _XXO__OXO: {
      on: {
        PLAY_X_TOP_LEFT: "XXXO__OXO",
        PLAY_X_CENTER: "_XXOX_OXO",
        PLAY_X_MIDDLE_RIGHT: "_XXO_XOXO"
      }
    },
    _XXO__OX_: {
      on: {
        PLAY_O_TOP_LEFT: "OXXO__OX_",
        PLAY_O_CENTER: "_XXOO_OX_",
        PLAY_O_MIDDLE_RIGHT: "_XXO_OOX_",
        PLAY_O_BOTTOM_RIGHT: "_XXO__OXO"
      }
    },
    _XXO__OOX: {
      on: {
        PLAY_X_TOP_LEFT: "XXXO__OOX",
        PLAY_X_CENTER: "_XXOX_OOX",
        PLAY_X_MIDDLE_RIGHT: "_XXO_XOOX"
      }
    },
    _XXO__O_X: {
      on: {
        PLAY_O_TOP_LEFT: "OXXO__O_X",
        PLAY_O_CENTER: "_XXOO_O_X",
        PLAY_O_MIDDLE_RIGHT: "_XXO_OO_X",
        PLAY_O_BOTTOM_CENTER: "_XXO__OOX"
      }
    },
    _XXO__O__: {
      on: {
        PLAY_X_TOP_LEFT: "XXXO__O__",
        PLAY_X_CENTER: "_XXOX_O__",
        PLAY_X_MIDDLE_RIGHT: "_XXO_XO__",
        PLAY_X_BOTTOM_CENTER: "_XXO__OX_",
        PLAY_X_BOTTOM_RIGHT: "_XXO__O_X"
      }
    },
    _XXOXX_OO: {
      on: { PLAY_O_TOP_LEFT: "OXXOXX_OO", PLAY_O_BOTTOM_LEFT: "_XXOXXOOO" }
    },
    _XXOX_XOO: { on: { "": "X_WINS" } },
    _XXOX__OO: {
      on: {
        PLAY_X_TOP_LEFT: "XXXOX__OO",
        PLAY_X_MIDDLE_RIGHT: "_XXOXX_OO",
        PLAY_X_BOTTOM_LEFT: "_XXOX_XOO"
      }
    },
    _XXOX__O_: {
      on: {
        PLAY_O_TOP_LEFT: "OXXOX__O_",
        PLAY_O_MIDDLE_RIGHT: "_XXOXO_O_",
        PLAY_O_BOTTOM_LEFT: "_XXOX_OO_",
        PLAY_O_BOTTOM_RIGHT: "_XXOX__OO"
      }
    },
    _XXO_XXOO: {
      on: { PLAY_O_TOP_LEFT: "OXXO_XXOO", PLAY_O_CENTER: "_XXOOXXOO" }
    },
    _XXO_X_OO: {
      on: {
        PLAY_X_TOP_LEFT: "XXXO_X_OO",
        PLAY_X_CENTER: "_XXOXX_OO",
        PLAY_X_BOTTOM_LEFT: "_XXO_XXOO"
      }
    },
    _XXO_X_O_: {
      on: {
        PLAY_O_TOP_LEFT: "OXXO_X_O_",
        PLAY_O_CENTER: "_XXOOX_O_",
        PLAY_O_BOTTOM_LEFT: "_XXO_XOO_",
        PLAY_O_BOTTOM_RIGHT: "_XXO_X_OO"
      }
    },
    _XXO__XOO: {
      on: {
        PLAY_X_TOP_LEFT: "XXXO__XOO",
        PLAY_X_CENTER: "_XXOX_XOO",
        PLAY_X_MIDDLE_RIGHT: "_XXO_XXOO"
      }
    },
    _XXO__XO_: {
      on: {
        PLAY_O_TOP_LEFT: "OXXO__XO_",
        PLAY_O_CENTER: "_XXOO_XO_",
        PLAY_O_MIDDLE_RIGHT: "_XXO_OXO_",
        PLAY_O_BOTTOM_RIGHT: "_XXO__XOO"
      }
    },
    _XXO___OX: {
      on: {
        PLAY_O_TOP_LEFT: "OXXO___OX",
        PLAY_O_CENTER: "_XXOO__OX",
        PLAY_O_MIDDLE_RIGHT: "_XXO_O_OX",
        PLAY_O_BOTTOM_LEFT: "_XXO__OOX"
      }
    },
    _XXO___O_: {
      on: {
        PLAY_X_TOP_LEFT: "XXXO___O_",
        PLAY_X_CENTER: "_XXOX__O_",
        PLAY_X_MIDDLE_RIGHT: "_XXO_X_O_",
        PLAY_X_BOTTOM_LEFT: "_XXO__XO_",
        PLAY_X_BOTTOM_RIGHT: "_XXO___OX"
      }
    },
    _XXOX___O: {
      on: {
        PLAY_O_TOP_LEFT: "OXXOX___O",
        PLAY_O_MIDDLE_RIGHT: "_XXOXO__O",
        PLAY_O_BOTTOM_LEFT: "_XXOX_O_O",
        PLAY_O_BOTTOM_CENTER: "_XXOX__OO"
      }
    },
    _XXO_X__O: {
      on: {
        PLAY_O_TOP_LEFT: "OXXO_X__O",
        PLAY_O_CENTER: "_XXOOX__O",
        PLAY_O_BOTTOM_LEFT: "_XXO_XO_O",
        PLAY_O_BOTTOM_CENTER: "_XXO_X_OO"
      }
    },
    _XXO__X_O: {
      on: {
        PLAY_O_TOP_LEFT: "OXXO__X_O",
        PLAY_O_CENTER: "_XXOO_X_O",
        PLAY_O_MIDDLE_RIGHT: "_XXO_OX_O",
        PLAY_O_BOTTOM_CENTER: "_XXO__XOO"
      }
    },
    _XXO___XO: {
      on: {
        PLAY_O_TOP_LEFT: "OXXO___XO",
        PLAY_O_CENTER: "_XXOO__XO",
        PLAY_O_MIDDLE_RIGHT: "_XXO_O_XO",
        PLAY_O_BOTTOM_LEFT: "_XXO__OXO"
      }
    },
    _XXO____O: {
      on: {
        PLAY_X_TOP_LEFT: "XXXO____O",
        PLAY_X_CENTER: "_XXOX___O",
        PLAY_X_MIDDLE_RIGHT: "_XXO_X__O",
        PLAY_X_BOTTOM_LEFT: "_XXO__X_O",
        PLAY_X_BOTTOM_CENTER: "_XXO___XO"
      }
    },
    _XXO_____: {
      on: {
        PLAY_O_TOP_LEFT: "OXXO_____",
        PLAY_O_CENTER: "_XXOO____",
        PLAY_O_MIDDLE_RIGHT: "_XXO_O___",
        PLAY_O_BOTTOM_LEFT: "_XXO__O__",
        PLAY_O_BOTTOM_CENTER: "_XXO___O_",
        PLAY_O_BOTTOM_RIGHT: "_XXO____O"
      }
    },
    _X_OXOXOX: {
      on: { PLAY_O_TOP_LEFT: "OX_OXOXOX", PLAY_O_TOP_RIGHT: "_XOOXOXOX" }
    },
    _X_OXOXO_: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OXOXO_",
        PLAY_X_TOP_RIGHT: "_XXOXOXO_",
        PLAY_X_BOTTOM_RIGHT: "_X_OXOXOX"
      }
    },
    _X_OXOXXO: { on: { "": "X_WINS" } },
    _X_OXOX_O: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OXOX_O",
        PLAY_X_TOP_RIGHT: "_XXOXOX_O",
        PLAY_X_BOTTOM_CENTER: "_X_OXOXXO"
      }
    },
    _X_OXOX__: {
      on: {
        PLAY_O_TOP_LEFT: "OX_OXOX__",
        PLAY_O_TOP_RIGHT: "_XOOXOX__",
        PLAY_O_BOTTOM_CENTER: "_X_OXOXO_",
        PLAY_O_BOTTOM_RIGHT: "_X_OXOX_O"
      }
    },
    _X_OXO_X_: { on: { "": "X_WINS" } },
    _X_OXOOXX: { on: { "": "X_WINS" } },
    _X_OXOO_X: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OXOO_X",
        PLAY_X_TOP_RIGHT: "_XXOXOO_X",
        PLAY_X_BOTTOM_CENTER: "_X_OXOOXX"
      }
    },
    _X_OXO_OX: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OXO_OX",
        PLAY_X_TOP_RIGHT: "_XXOXO_OX",
        PLAY_X_BOTTOM_LEFT: "_X_OXOXOX"
      }
    },
    _X_OXO__X: {
      on: {
        PLAY_O_TOP_LEFT: "OX_OXO__X",
        PLAY_O_TOP_RIGHT: "_XOOXO__X",
        PLAY_O_BOTTOM_LEFT: "_X_OXOO_X",
        PLAY_O_BOTTOM_CENTER: "_X_OXO_OX"
      }
    },
    _X_OXO___: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OXO___",
        PLAY_X_TOP_RIGHT: "_XXOXO___",
        PLAY_X_BOTTOM_LEFT: "_X_OXOX__",
        PLAY_X_BOTTOM_CENTER: "_X_OXO_X_",
        PLAY_X_BOTTOM_RIGHT: "_X_OXO__X"
      }
    },
    _X_OXXOOX: {
      on: { PLAY_O_TOP_LEFT: "OX_OXXOOX", PLAY_O_TOP_RIGHT: "_XOOXXOOX" }
    },
    _X_OXXOO_: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OXXOO_",
        PLAY_X_TOP_RIGHT: "_XXOXXOO_",
        PLAY_X_BOTTOM_RIGHT: "_X_OXXOOX"
      }
    },
    _X_OXXOXO: { on: { "": "X_WINS" } },
    _X_OXXO_O: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OXXO_O",
        PLAY_X_TOP_RIGHT: "_XXOXXO_O",
        PLAY_X_BOTTOM_CENTER: "_X_OXXOXO"
      }
    },
    _X_OXXO__: {
      on: {
        PLAY_O_TOP_LEFT: "OX_OXXO__",
        PLAY_O_TOP_RIGHT: "_XOOXXO__",
        PLAY_O_BOTTOM_CENTER: "_X_OXXOO_",
        PLAY_O_BOTTOM_RIGHT: "_X_OXXO_O"
      }
    },
    _X_OX_OX_: { on: { "": "X_WINS" } },
    _X_OX_OOX: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OX_OOX",
        PLAY_X_TOP_RIGHT: "_XXOX_OOX",
        PLAY_X_MIDDLE_RIGHT: "_X_OXXOOX"
      }
    },
    _X_OX_O_X: {
      on: {
        PLAY_O_TOP_LEFT: "OX_OX_O_X",
        PLAY_O_TOP_RIGHT: "_XOOX_O_X",
        PLAY_O_MIDDLE_RIGHT: "_X_OXOO_X",
        PLAY_O_BOTTOM_CENTER: "_X_OX_OOX"
      }
    },
    _X_OX_O__: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OX_O__",
        PLAY_X_TOP_RIGHT: "_XXOX_O__",
        PLAY_X_MIDDLE_RIGHT: "_X_OXXO__",
        PLAY_X_BOTTOM_CENTER: "_X_OX_OX_",
        PLAY_X_BOTTOM_RIGHT: "_X_OX_O_X"
      }
    },
    _X_OXXXOO: {
      on: { PLAY_O_TOP_LEFT: "OX_OXXXOO", PLAY_O_TOP_RIGHT: "_XOOXXXOO" }
    },
    _X_OXX_OO: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OXX_OO",
        PLAY_X_TOP_RIGHT: "_XXOXX_OO",
        PLAY_X_BOTTOM_LEFT: "_X_OXXXOO"
      }
    },
    _X_OXX_O_: {
      on: {
        PLAY_O_TOP_LEFT: "OX_OXX_O_",
        PLAY_O_TOP_RIGHT: "_XOOXX_O_",
        PLAY_O_BOTTOM_LEFT: "_X_OXXOO_",
        PLAY_O_BOTTOM_RIGHT: "_X_OXX_OO"
      }
    },
    _X_OX_XOO: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OX_XOO",
        PLAY_X_TOP_RIGHT: "_XXOX_XOO",
        PLAY_X_MIDDLE_RIGHT: "_X_OXXXOO"
      }
    },
    _X_OX_XO_: {
      on: {
        PLAY_O_TOP_LEFT: "OX_OX_XO_",
        PLAY_O_TOP_RIGHT: "_XOOX_XO_",
        PLAY_O_MIDDLE_RIGHT: "_X_OXOXO_",
        PLAY_O_BOTTOM_RIGHT: "_X_OX_XOO"
      }
    },
    _X_OX__OX: {
      on: {
        PLAY_O_TOP_LEFT: "OX_OX__OX",
        PLAY_O_TOP_RIGHT: "_XOOX__OX",
        PLAY_O_MIDDLE_RIGHT: "_X_OXO_OX",
        PLAY_O_BOTTOM_LEFT: "_X_OX_OOX"
      }
    },
    _X_OX__O_: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OX__O_",
        PLAY_X_TOP_RIGHT: "_XXOX__O_",
        PLAY_X_MIDDLE_RIGHT: "_X_OXX_O_",
        PLAY_X_BOTTOM_LEFT: "_X_OX_XO_",
        PLAY_X_BOTTOM_RIGHT: "_X_OX__OX"
      }
    },
    _X_OXX__O: {
      on: {
        PLAY_O_TOP_LEFT: "OX_OXX__O",
        PLAY_O_TOP_RIGHT: "_XOOXX__O",
        PLAY_O_BOTTOM_LEFT: "_X_OXXO_O",
        PLAY_O_BOTTOM_CENTER: "_X_OXX_OO"
      }
    },
    _X_OX_X_O: {
      on: {
        PLAY_O_TOP_LEFT: "OX_OX_X_O",
        PLAY_O_TOP_RIGHT: "_XOOX_X_O",
        PLAY_O_MIDDLE_RIGHT: "_X_OXOX_O",
        PLAY_O_BOTTOM_CENTER: "_X_OX_XOO"
      }
    },
    _X_OX__XO: { on: { "": "X_WINS" } },
    _X_OX___O: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OX___O",
        PLAY_X_TOP_RIGHT: "_XXOX___O",
        PLAY_X_MIDDLE_RIGHT: "_X_OXX__O",
        PLAY_X_BOTTOM_LEFT: "_X_OX_X_O",
        PLAY_X_BOTTOM_CENTER: "_X_OX__XO"
      }
    },
    _X_OX____: {
      on: {
        PLAY_O_TOP_LEFT: "OX_OX____",
        PLAY_O_TOP_RIGHT: "_XOOX____",
        PLAY_O_MIDDLE_RIGHT: "_X_OXO___",
        PLAY_O_BOTTOM_LEFT: "_X_OX_O__",
        PLAY_O_BOTTOM_CENTER: "_X_OX__O_",
        PLAY_O_BOTTOM_RIGHT: "_X_OX___O"
      }
    },
    _X_OOXXOX: {
      on: { PLAY_O_TOP_LEFT: "OX_OOXXOX", PLAY_O_TOP_RIGHT: "_XOOOXXOX" }
    },
    _X_OOXXO_: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OOXXO_",
        PLAY_X_TOP_RIGHT: "_XXOOXXO_",
        PLAY_X_BOTTOM_RIGHT: "_X_OOXXOX"
      }
    },
    _X_OOXXXO: {
      on: { PLAY_O_TOP_LEFT: "OX_OOXXXO", PLAY_O_TOP_RIGHT: "_XOOOXXXO" }
    },
    _X_OOXX_O: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OOXX_O",
        PLAY_X_TOP_RIGHT: "_XXOOXX_O",
        PLAY_X_BOTTOM_CENTER: "_X_OOXXXO"
      }
    },
    _X_OOXX__: {
      on: {
        PLAY_O_TOP_LEFT: "OX_OOXX__",
        PLAY_O_TOP_RIGHT: "_XOOOXX__",
        PLAY_O_BOTTOM_CENTER: "_X_OOXXO_",
        PLAY_O_BOTTOM_RIGHT: "_X_OOXX_O"
      }
    },
    _X_OOXOXX: {
      on: { PLAY_O_TOP_LEFT: "OX_OOXOXX", PLAY_O_TOP_RIGHT: "_XOOOXOXX" }
    },
    _X_OOXOX_: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OOXOX_",
        PLAY_X_TOP_RIGHT: "_XXOOXOX_",
        PLAY_X_BOTTOM_RIGHT: "_X_OOXOXX"
      }
    },
    _X_OOX_XO: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OOX_XO",
        PLAY_X_TOP_RIGHT: "_XXOOX_XO",
        PLAY_X_BOTTOM_LEFT: "_X_OOXXXO"
      }
    },
    _X_OOX_X_: {
      on: {
        PLAY_O_TOP_LEFT: "OX_OOX_X_",
        PLAY_O_TOP_RIGHT: "_XOOOX_X_",
        PLAY_O_BOTTOM_LEFT: "_X_OOXOX_",
        PLAY_O_BOTTOM_RIGHT: "_X_OOX_XO"
      }
    },
    _X_OOXO_X: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OOXO_X",
        PLAY_X_TOP_RIGHT: "_XXOOXO_X",
        PLAY_X_BOTTOM_CENTER: "_X_OOXOXX"
      }
    },
    _X_OOX_OX: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OOX_OX",
        PLAY_X_TOP_RIGHT: "_XXOOX_OX",
        PLAY_X_BOTTOM_LEFT: "_X_OOXXOX"
      }
    },
    _X_OOX__X: {
      on: {
        PLAY_O_TOP_LEFT: "OX_OOX__X",
        PLAY_O_TOP_RIGHT: "_XOOOX__X",
        PLAY_O_BOTTOM_LEFT: "_X_OOXO_X",
        PLAY_O_BOTTOM_CENTER: "_X_OOX_OX"
      }
    },
    _X_OOX___: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OOX___",
        PLAY_X_TOP_RIGHT: "_XXOOX___",
        PLAY_X_BOTTOM_LEFT: "_X_OOXX__",
        PLAY_X_BOTTOM_CENTER: "_X_OOX_X_",
        PLAY_X_BOTTOM_RIGHT: "_X_OOX__X"
      }
    },
    _X_O_XOXO: {
      on: {
        PLAY_X_TOP_LEFT: "XX_O_XOXO",
        PLAY_X_TOP_RIGHT: "_XXO_XOXO",
        PLAY_X_CENTER: "_X_OXXOXO"
      }
    },
    _X_O_XOX_: {
      on: {
        PLAY_O_TOP_LEFT: "OX_O_XOX_",
        PLAY_O_TOP_RIGHT: "_XOO_XOX_",
        PLAY_O_CENTER: "_X_OOXOX_",
        PLAY_O_BOTTOM_RIGHT: "_X_O_XOXO"
      }
    },
    _X_O_XOOX: {
      on: {
        PLAY_X_TOP_LEFT: "XX_O_XOOX",
        PLAY_X_TOP_RIGHT: "_XXO_XOOX",
        PLAY_X_CENTER: "_X_OXXOOX"
      }
    },
    _X_O_XO_X: {
      on: {
        PLAY_O_TOP_LEFT: "OX_O_XO_X",
        PLAY_O_TOP_RIGHT: "_XOO_XO_X",
        PLAY_O_CENTER: "_X_OOXO_X",
        PLAY_O_BOTTOM_CENTER: "_X_O_XOOX"
      }
    },
    _X_O_XO__: {
      on: {
        PLAY_X_TOP_LEFT: "XX_O_XO__",
        PLAY_X_TOP_RIGHT: "_XXO_XO__",
        PLAY_X_CENTER: "_X_OXXO__",
        PLAY_X_BOTTOM_CENTER: "_X_O_XOX_",
        PLAY_X_BOTTOM_RIGHT: "_X_O_XO_X"
      }
    },
    _X_O_XXOO: {
      on: {
        PLAY_X_TOP_LEFT: "XX_O_XXOO",
        PLAY_X_TOP_RIGHT: "_XXO_XXOO",
        PLAY_X_CENTER: "_X_OXXXOO"
      }
    },
    _X_O_XXO_: {
      on: {
        PLAY_O_TOP_LEFT: "OX_O_XXO_",
        PLAY_O_TOP_RIGHT: "_XOO_XXO_",
        PLAY_O_CENTER: "_X_OOXXO_",
        PLAY_O_BOTTOM_RIGHT: "_X_O_XXOO"
      }
    },
    _X_O_X_OX: {
      on: {
        PLAY_O_TOP_LEFT: "OX_O_X_OX",
        PLAY_O_TOP_RIGHT: "_XOO_X_OX",
        PLAY_O_CENTER: "_X_OOX_OX",
        PLAY_O_BOTTOM_LEFT: "_X_O_XOOX"
      }
    },
    _X_O_X_O_: {
      on: {
        PLAY_X_TOP_LEFT: "XX_O_X_O_",
        PLAY_X_TOP_RIGHT: "_XXO_X_O_",
        PLAY_X_CENTER: "_X_OXX_O_",
        PLAY_X_BOTTOM_LEFT: "_X_O_XXO_",
        PLAY_X_BOTTOM_RIGHT: "_X_O_X_OX"
      }
    },
    _X_O_XX_O: {
      on: {
        PLAY_O_TOP_LEFT: "OX_O_XX_O",
        PLAY_O_TOP_RIGHT: "_XOO_XX_O",
        PLAY_O_CENTER: "_X_OOXX_O",
        PLAY_O_BOTTOM_CENTER: "_X_O_XXOO"
      }
    },
    _X_O_X_XO: {
      on: {
        PLAY_O_TOP_LEFT: "OX_O_X_XO",
        PLAY_O_TOP_RIGHT: "_XOO_X_XO",
        PLAY_O_CENTER: "_X_OOX_XO",
        PLAY_O_BOTTOM_LEFT: "_X_O_XOXO"
      }
    },
    _X_O_X__O: {
      on: {
        PLAY_X_TOP_LEFT: "XX_O_X__O",
        PLAY_X_TOP_RIGHT: "_XXO_X__O",
        PLAY_X_CENTER: "_X_OXX__O",
        PLAY_X_BOTTOM_LEFT: "_X_O_XX_O",
        PLAY_X_BOTTOM_CENTER: "_X_O_X_XO"
      }
    },
    _X_O_X___: {
      on: {
        PLAY_O_TOP_LEFT: "OX_O_X___",
        PLAY_O_TOP_RIGHT: "_XOO_X___",
        PLAY_O_CENTER: "_X_OOX___",
        PLAY_O_BOTTOM_LEFT: "_X_O_XO__",
        PLAY_O_BOTTOM_CENTER: "_X_O_X_O_",
        PLAY_O_BOTTOM_RIGHT: "_X_O_X__O"
      }
    },
    _X_OOOXX_: { on: { "": "O_WINS" } },
    _X_OO_XXO: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OO_XXO",
        PLAY_X_TOP_RIGHT: "_XXOO_XXO",
        PLAY_X_MIDDLE_RIGHT: "_X_OOXXXO"
      }
    },
    _X_OO_XX_: {
      on: {
        PLAY_O_TOP_LEFT: "OX_OO_XX_",
        PLAY_O_TOP_RIGHT: "_XOOO_XX_",
        PLAY_O_MIDDLE_RIGHT: "_X_OOOXX_",
        PLAY_O_BOTTOM_RIGHT: "_X_OO_XXO"
      }
    },
    _X_OOOX_X: { on: { "": "O_WINS" } },
    _X_OO_XOX: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OO_XOX",
        PLAY_X_TOP_RIGHT: "_XXOO_XOX",
        PLAY_X_MIDDLE_RIGHT: "_X_OOXXOX"
      }
    },
    _X_OO_X_X: {
      on: {
        PLAY_O_TOP_LEFT: "OX_OO_X_X",
        PLAY_O_TOP_RIGHT: "_XOOO_X_X",
        PLAY_O_MIDDLE_RIGHT: "_X_OOOX_X",
        PLAY_O_BOTTOM_CENTER: "_X_OO_XOX"
      }
    },
    _X_OO_X__: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OO_X__",
        PLAY_X_TOP_RIGHT: "_XXOO_X__",
        PLAY_X_MIDDLE_RIGHT: "_X_OOXX__",
        PLAY_X_BOTTOM_CENTER: "_X_OO_XX_",
        PLAY_X_BOTTOM_RIGHT: "_X_OO_X_X"
      }
    },
    _X_O_OXXO: {
      on: {
        PLAY_X_TOP_LEFT: "XX_O_OXXO",
        PLAY_X_TOP_RIGHT: "_XXO_OXXO",
        PLAY_X_CENTER: "_X_OXOXXO"
      }
    },
    _X_O_OXX_: {
      on: {
        PLAY_O_TOP_LEFT: "OX_O_OXX_",
        PLAY_O_TOP_RIGHT: "_XOO_OXX_",
        PLAY_O_CENTER: "_X_OOOXX_",
        PLAY_O_BOTTOM_RIGHT: "_X_O_OXXO"
      }
    },
    _X_O_OXOX: {
      on: {
        PLAY_X_TOP_LEFT: "XX_O_OXOX",
        PLAY_X_TOP_RIGHT: "_XXO_OXOX",
        PLAY_X_CENTER: "_X_OXOXOX"
      }
    },
    _X_O_OX_X: {
      on: {
        PLAY_O_TOP_LEFT: "OX_O_OX_X",
        PLAY_O_TOP_RIGHT: "_XOO_OX_X",
        PLAY_O_CENTER: "_X_OOOX_X",
        PLAY_O_BOTTOM_CENTER: "_X_O_OXOX"
      }
    },
    _X_O_OX__: {
      on: {
        PLAY_X_TOP_LEFT: "XX_O_OX__",
        PLAY_X_TOP_RIGHT: "_XXO_OX__",
        PLAY_X_CENTER: "_X_OXOX__",
        PLAY_X_BOTTOM_CENTER: "_X_O_OXX_",
        PLAY_X_BOTTOM_RIGHT: "_X_O_OX_X"
      }
    },
    _X_O__XOX: {
      on: {
        PLAY_O_TOP_LEFT: "OX_O__XOX",
        PLAY_O_TOP_RIGHT: "_XOO__XOX",
        PLAY_O_CENTER: "_X_OO_XOX",
        PLAY_O_MIDDLE_RIGHT: "_X_O_OXOX"
      }
    },
    _X_O__XO_: {
      on: {
        PLAY_X_TOP_LEFT: "XX_O__XO_",
        PLAY_X_TOP_RIGHT: "_XXO__XO_",
        PLAY_X_CENTER: "_X_OX_XO_",
        PLAY_X_MIDDLE_RIGHT: "_X_O_XXO_",
        PLAY_X_BOTTOM_RIGHT: "_X_O__XOX"
      }
    },
    _X_O__XXO: {
      on: {
        PLAY_O_TOP_LEFT: "OX_O__XXO",
        PLAY_O_TOP_RIGHT: "_XOO__XXO",
        PLAY_O_CENTER: "_X_OO_XXO",
        PLAY_O_MIDDLE_RIGHT: "_X_O_OXXO"
      }
    },
    _X_O__X_O: {
      on: {
        PLAY_X_TOP_LEFT: "XX_O__X_O",
        PLAY_X_TOP_RIGHT: "_XXO__X_O",
        PLAY_X_CENTER: "_X_OX_X_O",
        PLAY_X_MIDDLE_RIGHT: "_X_O_XX_O",
        PLAY_X_BOTTOM_CENTER: "_X_O__XXO"
      }
    },
    _X_O__X__: {
      on: {
        PLAY_O_TOP_LEFT: "OX_O__X__",
        PLAY_O_TOP_RIGHT: "_XOO__X__",
        PLAY_O_CENTER: "_X_OO_X__",
        PLAY_O_MIDDLE_RIGHT: "_X_O_OX__",
        PLAY_O_BOTTOM_CENTER: "_X_O__XO_",
        PLAY_O_BOTTOM_RIGHT: "_X_O__X_O"
      }
    },
    _X_OOO_XX: { on: { "": "O_WINS" } },
    _X_OO_OXX: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OO_OXX",
        PLAY_X_TOP_RIGHT: "_XXOO_OXX",
        PLAY_X_MIDDLE_RIGHT: "_X_OOXOXX"
      }
    },
    _X_OO__XX: {
      on: {
        PLAY_O_TOP_LEFT: "OX_OO__XX",
        PLAY_O_TOP_RIGHT: "_XOOO__XX",
        PLAY_O_MIDDLE_RIGHT: "_X_OOO_XX",
        PLAY_O_BOTTOM_LEFT: "_X_OO_OXX"
      }
    },
    _X_OO__X_: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OO__X_",
        PLAY_X_TOP_RIGHT: "_XXOO__X_",
        PLAY_X_MIDDLE_RIGHT: "_X_OOX_X_",
        PLAY_X_BOTTOM_LEFT: "_X_OO_XX_",
        PLAY_X_BOTTOM_RIGHT: "_X_OO__XX"
      }
    },
    _X_O_OOXX: {
      on: {
        PLAY_X_TOP_LEFT: "XX_O_OOXX",
        PLAY_X_TOP_RIGHT: "_XXO_OOXX",
        PLAY_X_CENTER: "_X_OXOOXX"
      }
    },
    _X_O_O_XX: {
      on: {
        PLAY_O_TOP_LEFT: "OX_O_O_XX",
        PLAY_O_TOP_RIGHT: "_XOO_O_XX",
        PLAY_O_CENTER: "_X_OOO_XX",
        PLAY_O_BOTTOM_LEFT: "_X_O_OOXX"
      }
    },
    _X_O_O_X_: {
      on: {
        PLAY_X_TOP_LEFT: "XX_O_O_X_",
        PLAY_X_TOP_RIGHT: "_XXO_O_X_",
        PLAY_X_CENTER: "_X_OXO_X_",
        PLAY_X_BOTTOM_LEFT: "_X_O_OXX_",
        PLAY_X_BOTTOM_RIGHT: "_X_O_O_XX"
      }
    },
    _X_O__OXX: {
      on: {
        PLAY_O_TOP_LEFT: "OX_O__OXX",
        PLAY_O_TOP_RIGHT: "_XOO__OXX",
        PLAY_O_CENTER: "_X_OO_OXX",
        PLAY_O_MIDDLE_RIGHT: "_X_O_OOXX"
      }
    },
    _X_O__OX_: {
      on: {
        PLAY_X_TOP_LEFT: "XX_O__OX_",
        PLAY_X_TOP_RIGHT: "_XXO__OX_",
        PLAY_X_CENTER: "_X_OX_OX_",
        PLAY_X_MIDDLE_RIGHT: "_X_O_XOX_",
        PLAY_X_BOTTOM_RIGHT: "_X_O__OXX"
      }
    },
    _X_O___XO: {
      on: {
        PLAY_X_TOP_LEFT: "XX_O___XO",
        PLAY_X_TOP_RIGHT: "_XXO___XO",
        PLAY_X_CENTER: "_X_OX__XO",
        PLAY_X_MIDDLE_RIGHT: "_X_O_X_XO",
        PLAY_X_BOTTOM_LEFT: "_X_O__XXO"
      }
    },
    _X_O___X_: {
      on: {
        PLAY_O_TOP_LEFT: "OX_O___X_",
        PLAY_O_TOP_RIGHT: "_XOO___X_",
        PLAY_O_CENTER: "_X_OO__X_",
        PLAY_O_MIDDLE_RIGHT: "_X_O_O_X_",
        PLAY_O_BOTTOM_LEFT: "_X_O__OX_",
        PLAY_O_BOTTOM_RIGHT: "_X_O___XO"
      }
    },
    _X_OO___X: {
      on: {
        PLAY_X_TOP_LEFT: "XX_OO___X",
        PLAY_X_TOP_RIGHT: "_XXOO___X",
        PLAY_X_MIDDLE_RIGHT: "_X_OOX__X",
        PLAY_X_BOTTOM_LEFT: "_X_OO_X_X",
        PLAY_X_BOTTOM_CENTER: "_X_OO__XX"
      }
    },
    _X_O_O__X: {
      on: {
        PLAY_X_TOP_LEFT: "XX_O_O__X",
        PLAY_X_TOP_RIGHT: "_XXO_O__X",
        PLAY_X_CENTER: "_X_OXO__X",
        PLAY_X_BOTTOM_LEFT: "_X_O_OX_X",
        PLAY_X_BOTTOM_CENTER: "_X_O_O_XX"
      }
    },
    _X_O__O_X: {
      on: {
        PLAY_X_TOP_LEFT: "XX_O__O_X",
        PLAY_X_TOP_RIGHT: "_XXO__O_X",
        PLAY_X_CENTER: "_X_OX_O_X",
        PLAY_X_MIDDLE_RIGHT: "_X_O_XO_X",
        PLAY_X_BOTTOM_CENTER: "_X_O__OXX"
      }
    },
    _X_O___OX: {
      on: {
        PLAY_X_TOP_LEFT: "XX_O___OX",
        PLAY_X_TOP_RIGHT: "_XXO___OX",
        PLAY_X_CENTER: "_X_OX__OX",
        PLAY_X_MIDDLE_RIGHT: "_X_O_X_OX",
        PLAY_X_BOTTOM_LEFT: "_X_O__XOX"
      }
    },
    _X_O____X: {
      on: {
        PLAY_O_TOP_LEFT: "OX_O____X",
        PLAY_O_TOP_RIGHT: "_XOO____X",
        PLAY_O_CENTER: "_X_OO___X",
        PLAY_O_MIDDLE_RIGHT: "_X_O_O__X",
        PLAY_O_BOTTOM_LEFT: "_X_O__O_X",
        PLAY_O_BOTTOM_CENTER: "_X_O___OX"
      }
    },
    _X_O_____: {
      on: {
        PLAY_X_TOP_LEFT: "XX_O_____",
        PLAY_X_TOP_RIGHT: "_XXO_____",
        PLAY_X_CENTER: "_X_OX____",
        PLAY_X_MIDDLE_RIGHT: "_X_O_X___",
        PLAY_X_BOTTOM_LEFT: "_X_O__X__",
        PLAY_X_BOTTOM_CENTER: "_X_O___X_",
        PLAY_X_BOTTOM_RIGHT: "_X_O____X"
      }
    },
    _XXXOOOXO: { on: { PLAY_X_TOP_LEFT: "XXXXOOOXO" } },
    _XXXOOOX_: {
      on: { PLAY_O_TOP_LEFT: "OXXXOOOX_", PLAY_O_BOTTOM_RIGHT: "_XXXOOOXO" }
    },
    _XXXOOOOX: { on: { PLAY_X_TOP_LEFT: "XXXXOOOOX" } },
    _XXXOOO_X: {
      on: { PLAY_O_TOP_LEFT: "OXXXOOO_X", PLAY_O_BOTTOM_CENTER: "_XXXOOOOX" }
    },
    _XXXOOO__: {
      on: {
        PLAY_X_TOP_LEFT: "XXXXOOO__",
        PLAY_X_BOTTOM_CENTER: "_XXXOOOX_",
        PLAY_X_BOTTOM_RIGHT: "_XXXOOO_X"
      }
    },
    XXXXOOXOO: { on: { "": "X_WINS" } },
    _XXXOOXOO: { on: { PLAY_X_TOP_LEFT: "XXXXOOXOO" } },
    _XXXOOXO_: {
      on: { PLAY_O_TOP_LEFT: "OXXXOOXO_", PLAY_O_BOTTOM_RIGHT: "_XXXOOXOO" }
    },
    _XXXOO_OX: {
      on: { PLAY_O_TOP_LEFT: "OXXXOO_OX", PLAY_O_BOTTOM_LEFT: "_XXXOOOOX" }
    },
    _XXXOO_O_: {
      on: {
        PLAY_X_TOP_LEFT: "XXXXOO_O_",
        PLAY_X_BOTTOM_LEFT: "_XXXOOXO_",
        PLAY_X_BOTTOM_RIGHT: "_XXXOO_OX"
      }
    },
    _XXXOOX_O: {
      on: { PLAY_O_TOP_LEFT: "OXXXOOX_O", PLAY_O_BOTTOM_CENTER: "_XXXOOXOO" }
    },
    _XXXOO_XO: {
      on: { PLAY_O_TOP_LEFT: "OXXXOO_XO", PLAY_O_BOTTOM_LEFT: "_XXXOOOXO" }
    },
    _XXXOO__O: {
      on: {
        PLAY_X_TOP_LEFT: "XXXXOO__O",
        PLAY_X_BOTTOM_LEFT: "_XXXOOX_O",
        PLAY_X_BOTTOM_CENTER: "_XXXOO_XO"
      }
    },
    _XXXOO___: {
      on: {
        PLAY_O_TOP_LEFT: "OXXXOO___",
        PLAY_O_BOTTOM_LEFT: "_XXXOOO__",
        PLAY_O_BOTTOM_CENTER: "_XXXOO_O_",
        PLAY_O_BOTTOM_RIGHT: "_XXXOO__O"
      }
    },
    _XX_OOXOX: {
      on: { PLAY_O_TOP_LEFT: "OXX_OOXOX", PLAY_O_MIDDLE_LEFT: "_XXOOOXOX" }
    },
    _XX_OOXO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXX_OOXO_",
        PLAY_X_MIDDLE_LEFT: "_XXXOOXO_",
        PLAY_X_BOTTOM_RIGHT: "_XX_OOXOX"
      }
    },
    _XX_OOXXO: {
      on: { PLAY_O_TOP_LEFT: "OXX_OOXXO", PLAY_O_MIDDLE_LEFT: "_XXOOOXXO" }
    },
    _XX_OOX_O: {
      on: {
        PLAY_X_TOP_LEFT: "XXX_OOX_O",
        PLAY_X_MIDDLE_LEFT: "_XXXOOX_O",
        PLAY_X_BOTTOM_CENTER: "_XX_OOXXO"
      }
    },
    _XX_OOX__: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_OOX__",
        PLAY_O_MIDDLE_LEFT: "_XXOOOX__",
        PLAY_O_BOTTOM_CENTER: "_XX_OOXO_",
        PLAY_O_BOTTOM_RIGHT: "_XX_OOX_O"
      }
    },
    _XX_OOOXX: {
      on: { PLAY_O_TOP_LEFT: "OXX_OOOXX", PLAY_O_MIDDLE_LEFT: "_XXOOOOXX" }
    },
    _XX_OOOX_: {
      on: {
        PLAY_X_TOP_LEFT: "XXX_OOOX_",
        PLAY_X_MIDDLE_LEFT: "_XXXOOOX_",
        PLAY_X_BOTTOM_RIGHT: "_XX_OOOXX"
      }
    },
    _XX_OO_XO: {
      on: {
        PLAY_X_TOP_LEFT: "XXX_OO_XO",
        PLAY_X_MIDDLE_LEFT: "_XXXOO_XO",
        PLAY_X_BOTTOM_LEFT: "_XX_OOXXO"
      }
    },
    _XX_OO_X_: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_OO_X_",
        PLAY_O_MIDDLE_LEFT: "_XXOOO_X_",
        PLAY_O_BOTTOM_LEFT: "_XX_OOOX_",
        PLAY_O_BOTTOM_RIGHT: "_XX_OO_XO"
      }
    },
    _XX_OOO_X: {
      on: {
        PLAY_X_TOP_LEFT: "XXX_OOO_X",
        PLAY_X_MIDDLE_LEFT: "_XXXOOO_X",
        PLAY_X_BOTTOM_CENTER: "_XX_OOOXX"
      }
    },
    _XX_OO_OX: {
      on: {
        PLAY_X_TOP_LEFT: "XXX_OO_OX",
        PLAY_X_MIDDLE_LEFT: "_XXXOO_OX",
        PLAY_X_BOTTOM_LEFT: "_XX_OOXOX"
      }
    },
    _XX_OO__X: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_OO__X",
        PLAY_O_MIDDLE_LEFT: "_XXOOO__X",
        PLAY_O_BOTTOM_LEFT: "_XX_OOO_X",
        PLAY_O_BOTTOM_CENTER: "_XX_OO_OX"
      }
    },
    _XX_OO___: {
      on: {
        PLAY_X_TOP_LEFT: "XXX_OO___",
        PLAY_X_MIDDLE_LEFT: "_XXXOO___",
        PLAY_X_BOTTOM_LEFT: "_XX_OOX__",
        PLAY_X_BOTTOM_CENTER: "_XX_OO_X_",
        PLAY_X_BOTTOM_RIGHT: "_XX_OO__X"
      }
    },
    _XXXOXOOO: { on: { "": "O_WINS" } },
    _XXXOXOO_: {
      on: { PLAY_O_TOP_LEFT: "OXXXOXOO_", PLAY_O_BOTTOM_RIGHT: "_XXXOXOOO" }
    },
    _XXXO_OOX: {
      on: { PLAY_O_TOP_LEFT: "OXXXO_OOX", PLAY_O_MIDDLE_RIGHT: "_XXXOOOOX" }
    },
    _XXXO_OO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXXXO_OO_",
        PLAY_X_MIDDLE_RIGHT: "_XXXOXOO_",
        PLAY_X_BOTTOM_RIGHT: "_XXXO_OOX"
      }
    },
    _XXXOXO_O: {
      on: { PLAY_O_TOP_LEFT: "OXXXOXO_O", PLAY_O_BOTTOM_CENTER: "_XXXOXOOO" }
    },
    _XXXO_OXO: {
      on: { PLAY_O_TOP_LEFT: "OXXXO_OXO", PLAY_O_MIDDLE_RIGHT: "_XXXOOOXO" }
    },
    _XXXO_O_O: {
      on: {
        PLAY_X_TOP_LEFT: "XXXXO_O_O",
        PLAY_X_MIDDLE_RIGHT: "_XXXOXO_O",
        PLAY_X_BOTTOM_CENTER: "_XXXO_OXO"
      }
    },
    _XXXO_O__: {
      on: {
        PLAY_O_TOP_LEFT: "OXXXO_O__",
        PLAY_O_MIDDLE_RIGHT: "_XXXOOO__",
        PLAY_O_BOTTOM_CENTER: "_XXXO_OO_",
        PLAY_O_BOTTOM_RIGHT: "_XXXO_O_O"
      }
    },
    _XX_OXOOX: { on: { "": "X_WINS" } },
    _XX_OXOO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXX_OXOO_",
        PLAY_X_MIDDLE_LEFT: "_XXXOXOO_",
        PLAY_X_BOTTOM_RIGHT: "_XX_OXOOX"
      }
    },
    _XX_OXOXO: {
      on: { PLAY_O_TOP_LEFT: "OXX_OXOXO", PLAY_O_MIDDLE_LEFT: "_XXOOXOXO" }
    },
    _XX_OXO_O: {
      on: {
        PLAY_X_TOP_LEFT: "XXX_OXO_O",
        PLAY_X_MIDDLE_LEFT: "_XXXOXO_O",
        PLAY_X_BOTTOM_CENTER: "_XX_OXOXO"
      }
    },
    _XX_OXO__: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_OXO__",
        PLAY_O_MIDDLE_LEFT: "_XXOOXO__",
        PLAY_O_BOTTOM_CENTER: "_XX_OXOO_",
        PLAY_O_BOTTOM_RIGHT: "_XX_OXO_O"
      }
    },
    _XX_O_OXO: {
      on: {
        PLAY_X_TOP_LEFT: "XXX_O_OXO",
        PLAY_X_MIDDLE_LEFT: "_XXXO_OXO",
        PLAY_X_MIDDLE_RIGHT: "_XX_OXOXO"
      }
    },
    _XX_O_OX_: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_O_OX_",
        PLAY_O_MIDDLE_LEFT: "_XXOO_OX_",
        PLAY_O_MIDDLE_RIGHT: "_XX_OOOX_",
        PLAY_O_BOTTOM_RIGHT: "_XX_O_OXO"
      }
    },
    _XX_O_OOX: {
      on: {
        PLAY_X_TOP_LEFT: "XXX_O_OOX",
        PLAY_X_MIDDLE_LEFT: "_XXXO_OOX",
        PLAY_X_MIDDLE_RIGHT: "_XX_OXOOX"
      }
    },
    _XX_O_O_X: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_O_O_X",
        PLAY_O_MIDDLE_LEFT: "_XXOO_O_X",
        PLAY_O_MIDDLE_RIGHT: "_XX_OOO_X",
        PLAY_O_BOTTOM_CENTER: "_XX_O_OOX"
      }
    },
    _XX_O_O__: {
      on: {
        PLAY_X_TOP_LEFT: "XXX_O_O__",
        PLAY_X_MIDDLE_LEFT: "_XXXO_O__",
        PLAY_X_MIDDLE_RIGHT: "_XX_OXO__",
        PLAY_X_BOTTOM_CENTER: "_XX_O_OX_",
        PLAY_X_BOTTOM_RIGHT: "_XX_O_O_X"
      }
    },
    _XXXOX_OO: {
      on: { PLAY_O_TOP_LEFT: "OXXXOX_OO", PLAY_O_BOTTOM_LEFT: "_XXXOXOOO" }
    },
    _XXXO_XOO: {
      on: { PLAY_O_TOP_LEFT: "OXXXO_XOO", PLAY_O_MIDDLE_RIGHT: "_XXXOOXOO" }
    },
    _XXXO__OO: {
      on: {
        PLAY_X_TOP_LEFT: "XXXXO__OO",
        PLAY_X_MIDDLE_RIGHT: "_XXXOX_OO",
        PLAY_X_BOTTOM_LEFT: "_XXXO_XOO"
      }
    },
    _XXXO__O_: {
      on: {
        PLAY_O_TOP_LEFT: "OXXXO__O_",
        PLAY_O_MIDDLE_RIGHT: "_XXXOO_O_",
        PLAY_O_BOTTOM_LEFT: "_XXXO_OO_",
        PLAY_O_BOTTOM_RIGHT: "_XXXO__OO"
      }
    },
    _XX_OXXOO: {
      on: { PLAY_O_TOP_LEFT: "OXX_OXXOO", PLAY_O_MIDDLE_LEFT: "_XXOOXXOO" }
    },
    _XX_OX_OO: {
      on: {
        PLAY_X_TOP_LEFT: "XXX_OX_OO",
        PLAY_X_MIDDLE_LEFT: "_XXXOX_OO",
        PLAY_X_BOTTOM_LEFT: "_XX_OXXOO"
      }
    },
    _XX_OX_O_: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_OX_O_",
        PLAY_O_MIDDLE_LEFT: "_XXOOX_O_",
        PLAY_O_BOTTOM_LEFT: "_XX_OXOO_",
        PLAY_O_BOTTOM_RIGHT: "_XX_OX_OO"
      }
    },
    _XX_O_XOO: {
      on: {
        PLAY_X_TOP_LEFT: "XXX_O_XOO",
        PLAY_X_MIDDLE_LEFT: "_XXXO_XOO",
        PLAY_X_MIDDLE_RIGHT: "_XX_OXXOO"
      }
    },
    _XX_O_XO_: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_O_XO_",
        PLAY_O_MIDDLE_LEFT: "_XXOO_XO_",
        PLAY_O_MIDDLE_RIGHT: "_XX_OOXO_",
        PLAY_O_BOTTOM_RIGHT: "_XX_O_XOO"
      }
    },
    _XX_O__OX: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_O__OX",
        PLAY_O_MIDDLE_LEFT: "_XXOO__OX",
        PLAY_O_MIDDLE_RIGHT: "_XX_OO_OX",
        PLAY_O_BOTTOM_LEFT: "_XX_O_OOX"
      }
    },
    _XX_O__O_: {
      on: {
        PLAY_X_TOP_LEFT: "XXX_O__O_",
        PLAY_X_MIDDLE_LEFT: "_XXXO__O_",
        PLAY_X_MIDDLE_RIGHT: "_XX_OX_O_",
        PLAY_X_BOTTOM_LEFT: "_XX_O_XO_",
        PLAY_X_BOTTOM_RIGHT: "_XX_O__OX"
      }
    },
    _XXXO___O: {
      on: {
        PLAY_O_TOP_LEFT: "OXXXO___O",
        PLAY_O_MIDDLE_RIGHT: "_XXXOO__O",
        PLAY_O_BOTTOM_LEFT: "_XXXO_O_O",
        PLAY_O_BOTTOM_CENTER: "_XXXO__OO"
      }
    },
    _XX_OX__O: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_OX__O",
        PLAY_O_MIDDLE_LEFT: "_XXOOX__O",
        PLAY_O_BOTTOM_LEFT: "_XX_OXO_O",
        PLAY_O_BOTTOM_CENTER: "_XX_OX_OO"
      }
    },
    _XX_O_X_O: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_O_X_O",
        PLAY_O_MIDDLE_LEFT: "_XXOO_X_O",
        PLAY_O_MIDDLE_RIGHT: "_XX_OOX_O",
        PLAY_O_BOTTOM_CENTER: "_XX_O_XOO"
      }
    },
    _XX_O__XO: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_O__XO",
        PLAY_O_MIDDLE_LEFT: "_XXOO__XO",
        PLAY_O_MIDDLE_RIGHT: "_XX_OO_XO",
        PLAY_O_BOTTOM_LEFT: "_XX_O_OXO"
      }
    },
    _XX_O___O: {
      on: {
        PLAY_X_TOP_LEFT: "XXX_O___O",
        PLAY_X_MIDDLE_LEFT: "_XXXO___O",
        PLAY_X_MIDDLE_RIGHT: "_XX_OX__O",
        PLAY_X_BOTTOM_LEFT: "_XX_O_X_O",
        PLAY_X_BOTTOM_CENTER: "_XX_O__XO"
      }
    },
    _XX_O____: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_O____",
        PLAY_O_MIDDLE_LEFT: "_XXOO____",
        PLAY_O_MIDDLE_RIGHT: "_XX_OO___",
        PLAY_O_BOTTOM_LEFT: "_XX_O_O__",
        PLAY_O_BOTTOM_CENTER: "_XX_O__O_",
        PLAY_O_BOTTOM_RIGHT: "_XX_O___O"
      }
    },
    _X_XOOXOX: {
      on: { PLAY_O_TOP_LEFT: "OX_XOOXOX", PLAY_O_TOP_RIGHT: "_XOXOOXOX" }
    },
    _X_XOOXO_: {
      on: {
        PLAY_X_TOP_LEFT: "XX_XOOXO_",
        PLAY_X_TOP_RIGHT: "_XXXOOXO_",
        PLAY_X_BOTTOM_RIGHT: "_X_XOOXOX"
      }
    },
    _X_XOOXXO: {
      on: { PLAY_O_TOP_LEFT: "OX_XOOXXO", PLAY_O_TOP_RIGHT: "_XOXOOXXO" }
    },
    _X_XOOX_O: {
      on: {
        PLAY_X_TOP_LEFT: "XX_XOOX_O",
        PLAY_X_TOP_RIGHT: "_XXXOOX_O",
        PLAY_X_BOTTOM_CENTER: "_X_XOOXXO"
      }
    },
    _X_XOOX__: {
      on: {
        PLAY_O_TOP_LEFT: "OX_XOOX__",
        PLAY_O_TOP_RIGHT: "_XOXOOX__",
        PLAY_O_BOTTOM_CENTER: "_X_XOOXO_",
        PLAY_O_BOTTOM_RIGHT: "_X_XOOX_O"
      }
    },
    _X_XOOOXX: {
      on: { PLAY_O_TOP_LEFT: "OX_XOOOXX", PLAY_O_TOP_RIGHT: "_XOXOOOXX" }
    },
    _X_XOOOX_: {
      on: {
        PLAY_X_TOP_LEFT: "XX_XOOOX_",
        PLAY_X_TOP_RIGHT: "_XXXOOOX_",
        PLAY_X_BOTTOM_RIGHT: "_X_XOOOXX"
      }
    },
    _X_XOO_XO: {
      on: {
        PLAY_X_TOP_LEFT: "XX_XOO_XO",
        PLAY_X_TOP_RIGHT: "_XXXOO_XO",
        PLAY_X_BOTTOM_LEFT: "_X_XOOXXO"
      }
    },
    _X_XOO_X_: {
      on: {
        PLAY_O_TOP_LEFT: "OX_XOO_X_",
        PLAY_O_TOP_RIGHT: "_XOXOO_X_",
        PLAY_O_BOTTOM_LEFT: "_X_XOOOX_",
        PLAY_O_BOTTOM_RIGHT: "_X_XOO_XO"
      }
    },
    _X_XOOO_X: {
      on: {
        PLAY_X_TOP_LEFT: "XX_XOOO_X",
        PLAY_X_TOP_RIGHT: "_XXXOOO_X",
        PLAY_X_BOTTOM_CENTER: "_X_XOOOXX"
      }
    },
    _X_XOO_OX: {
      on: {
        PLAY_X_TOP_LEFT: "XX_XOO_OX",
        PLAY_X_TOP_RIGHT: "_XXXOO_OX",
        PLAY_X_BOTTOM_LEFT: "_X_XOOXOX"
      }
    },
    _X_XOO__X: {
      on: {
        PLAY_O_TOP_LEFT: "OX_XOO__X",
        PLAY_O_TOP_RIGHT: "_XOXOO__X",
        PLAY_O_BOTTOM_LEFT: "_X_XOOO_X",
        PLAY_O_BOTTOM_CENTER: "_X_XOO_OX"
      }
    },
    _X_XOO___: {
      on: {
        PLAY_X_TOP_LEFT: "XX_XOO___",
        PLAY_X_TOP_RIGHT: "_XXXOO___",
        PLAY_X_BOTTOM_LEFT: "_X_XOOX__",
        PLAY_X_BOTTOM_CENTER: "_X_XOO_X_",
        PLAY_X_BOTTOM_RIGHT: "_X_XOO__X"
      }
    },
    _X_XOXOOX: {
      on: { PLAY_O_TOP_LEFT: "OX_XOXOOX", PLAY_O_TOP_RIGHT: "_XOXOXOOX" }
    },
    _X_XOXOO_: {
      on: {
        PLAY_X_TOP_LEFT: "XX_XOXOO_",
        PLAY_X_TOP_RIGHT: "_XXXOXOO_",
        PLAY_X_BOTTOM_RIGHT: "_X_XOXOOX"
      }
    },
    _X_XOXOXO: {
      on: { PLAY_O_TOP_LEFT: "OX_XOXOXO", PLAY_O_TOP_RIGHT: "_XOXOXOXO" }
    },
    _X_XOXO_O: {
      on: {
        PLAY_X_TOP_LEFT: "XX_XOXO_O",
        PLAY_X_TOP_RIGHT: "_XXXOXO_O",
        PLAY_X_BOTTOM_CENTER: "_X_XOXOXO"
      }
    },
    _X_XOXO__: {
      on: {
        PLAY_O_TOP_LEFT: "OX_XOXO__",
        PLAY_O_TOP_RIGHT: "_XOXOXO__",
        PLAY_O_BOTTOM_CENTER: "_X_XOXOO_",
        PLAY_O_BOTTOM_RIGHT: "_X_XOXO_O"
      }
    },
    _X_XO_OXO: {
      on: {
        PLAY_X_TOP_LEFT: "XX_XO_OXO",
        PLAY_X_TOP_RIGHT: "_XXXO_OXO",
        PLAY_X_MIDDLE_RIGHT: "_X_XOXOXO"
      }
    },
    _X_XO_OX_: {
      on: {
        PLAY_O_TOP_LEFT: "OX_XO_OX_",
        PLAY_O_TOP_RIGHT: "_XOXO_OX_",
        PLAY_O_MIDDLE_RIGHT: "_X_XOOOX_",
        PLAY_O_BOTTOM_RIGHT: "_X_XO_OXO"
      }
    },
    _X_XO_OOX: {
      on: {
        PLAY_X_TOP_LEFT: "XX_XO_OOX",
        PLAY_X_TOP_RIGHT: "_XXXO_OOX",
        PLAY_X_MIDDLE_RIGHT: "_X_XOXOOX"
      }
    },
    _X_XO_O_X: {
      on: {
        PLAY_O_TOP_LEFT: "OX_XO_O_X",
        PLAY_O_TOP_RIGHT: "_XOXO_O_X",
        PLAY_O_MIDDLE_RIGHT: "_X_XOOO_X",
        PLAY_O_BOTTOM_CENTER: "_X_XO_OOX"
      }
    },
    _X_XO_O__: {
      on: {
        PLAY_X_TOP_LEFT: "XX_XO_O__",
        PLAY_X_TOP_RIGHT: "_XXXO_O__",
        PLAY_X_MIDDLE_RIGHT: "_X_XOXO__",
        PLAY_X_BOTTOM_CENTER: "_X_XO_OX_",
        PLAY_X_BOTTOM_RIGHT: "_X_XO_O_X"
      }
    },
    _X_XOXXOO: {
      on: { PLAY_O_TOP_LEFT: "OX_XOXXOO", PLAY_O_TOP_RIGHT: "_XOXOXXOO" }
    },
    _X_XOX_OO: {
      on: {
        PLAY_X_TOP_LEFT: "XX_XOX_OO",
        PLAY_X_TOP_RIGHT: "_XXXOX_OO",
        PLAY_X_BOTTOM_LEFT: "_X_XOXXOO"
      }
    },
    _X_XOX_O_: {
      on: {
        PLAY_O_TOP_LEFT: "OX_XOX_O_",
        PLAY_O_TOP_RIGHT: "_XOXOX_O_",
        PLAY_O_BOTTOM_LEFT: "_X_XOXOO_",
        PLAY_O_BOTTOM_RIGHT: "_X_XOX_OO"
      }
    },
    _X_XO_XOO: {
      on: {
        PLAY_X_TOP_LEFT: "XX_XO_XOO",
        PLAY_X_TOP_RIGHT: "_XXXO_XOO",
        PLAY_X_MIDDLE_RIGHT: "_X_XOXXOO"
      }
    },
    _X_XO_XO_: {
      on: {
        PLAY_O_TOP_LEFT: "OX_XO_XO_",
        PLAY_O_TOP_RIGHT: "_XOXO_XO_",
        PLAY_O_MIDDLE_RIGHT: "_X_XOOXO_",
        PLAY_O_BOTTOM_RIGHT: "_X_XO_XOO"
      }
    },
    _X_XO__OX: {
      on: {
        PLAY_O_TOP_LEFT: "OX_XO__OX",
        PLAY_O_TOP_RIGHT: "_XOXO__OX",
        PLAY_O_MIDDLE_RIGHT: "_X_XOO_OX",
        PLAY_O_BOTTOM_LEFT: "_X_XO_OOX"
      }
    },
    _X_XO__O_: {
      on: {
        PLAY_X_TOP_LEFT: "XX_XO__O_",
        PLAY_X_TOP_RIGHT: "_XXXO__O_",
        PLAY_X_MIDDLE_RIGHT: "_X_XOX_O_",
        PLAY_X_BOTTOM_LEFT: "_X_XO_XO_",
        PLAY_X_BOTTOM_RIGHT: "_X_XO__OX"
      }
    },
    _X_XOX__O: {
      on: {
        PLAY_O_TOP_LEFT: "OX_XOX__O",
        PLAY_O_TOP_RIGHT: "_XOXOX__O",
        PLAY_O_BOTTOM_LEFT: "_X_XOXO_O",
        PLAY_O_BOTTOM_CENTER: "_X_XOX_OO"
      }
    },
    _X_XO_X_O: {
      on: {
        PLAY_O_TOP_LEFT: "OX_XO_X_O",
        PLAY_O_TOP_RIGHT: "_XOXO_X_O",
        PLAY_O_MIDDLE_RIGHT: "_X_XOOX_O",
        PLAY_O_BOTTOM_CENTER: "_X_XO_XOO"
      }
    },
    _X_XO__XO: {
      on: {
        PLAY_O_TOP_LEFT: "OX_XO__XO",
        PLAY_O_TOP_RIGHT: "_XOXO__XO",
        PLAY_O_MIDDLE_RIGHT: "_X_XOO_XO",
        PLAY_O_BOTTOM_LEFT: "_X_XO_OXO"
      }
    },
    _X_XO___O: {
      on: {
        PLAY_X_TOP_LEFT: "XX_XO___O",
        PLAY_X_TOP_RIGHT: "_XXXO___O",
        PLAY_X_MIDDLE_RIGHT: "_X_XOX__O",
        PLAY_X_BOTTOM_LEFT: "_X_XO_X_O",
        PLAY_X_BOTTOM_CENTER: "_X_XO__XO"
      }
    },
    _X_XO____: {
      on: {
        PLAY_O_TOP_LEFT: "OX_XO____",
        PLAY_O_TOP_RIGHT: "_XOXO____",
        PLAY_O_MIDDLE_RIGHT: "_X_XOO___",
        PLAY_O_BOTTOM_LEFT: "_X_XO_O__",
        PLAY_O_BOTTOM_CENTER: "_X_XO__O_",
        PLAY_O_BOTTOM_RIGHT: "_X_XO___O"
      }
    },
    _X__OXOXO: {
      on: {
        PLAY_X_TOP_LEFT: "XX__OXOXO",
        PLAY_X_TOP_RIGHT: "_XX_OXOXO",
        PLAY_X_MIDDLE_LEFT: "_X_XOXOXO"
      }
    },
    _X__OXOX_: {
      on: {
        PLAY_O_TOP_LEFT: "OX__OXOX_",
        PLAY_O_TOP_RIGHT: "_XO_OXOX_",
        PLAY_O_MIDDLE_LEFT: "_X_OOXOX_",
        PLAY_O_BOTTOM_RIGHT: "_X__OXOXO"
      }
    },
    _X__OXOOX: {
      on: {
        PLAY_X_TOP_LEFT: "XX__OXOOX",
        PLAY_X_TOP_RIGHT: "_XX_OXOOX",
        PLAY_X_MIDDLE_LEFT: "_X_XOXOOX"
      }
    },
    _X__OXO_X: {
      on: {
        PLAY_O_TOP_LEFT: "OX__OXO_X",
        PLAY_O_TOP_RIGHT: "_XO_OXO_X",
        PLAY_O_MIDDLE_LEFT: "_X_OOXO_X",
        PLAY_O_BOTTOM_CENTER: "_X__OXOOX"
      }
    },
    _X__OXO__: {
      on: {
        PLAY_X_TOP_LEFT: "XX__OXO__",
        PLAY_X_TOP_RIGHT: "_XX_OXO__",
        PLAY_X_MIDDLE_LEFT: "_X_XOXO__",
        PLAY_X_BOTTOM_CENTER: "_X__OXOX_",
        PLAY_X_BOTTOM_RIGHT: "_X__OXO_X"
      }
    },
    _X__OXXOO: {
      on: {
        PLAY_X_TOP_LEFT: "XX__OXXOO",
        PLAY_X_TOP_RIGHT: "_XX_OXXOO",
        PLAY_X_MIDDLE_LEFT: "_X_XOXXOO"
      }
    },
    _X__OXXO_: {
      on: {
        PLAY_O_TOP_LEFT: "OX__OXXO_",
        PLAY_O_TOP_RIGHT: "_XO_OXXO_",
        PLAY_O_MIDDLE_LEFT: "_X_OOXXO_",
        PLAY_O_BOTTOM_RIGHT: "_X__OXXOO"
      }
    },
    _X__OX_OX: {
      on: {
        PLAY_O_TOP_LEFT: "OX__OX_OX",
        PLAY_O_TOP_RIGHT: "_XO_OX_OX",
        PLAY_O_MIDDLE_LEFT: "_X_OOX_OX",
        PLAY_O_BOTTOM_LEFT: "_X__OXOOX"
      }
    },
    _X__OX_O_: {
      on: {
        PLAY_X_TOP_LEFT: "XX__OX_O_",
        PLAY_X_TOP_RIGHT: "_XX_OX_O_",
        PLAY_X_MIDDLE_LEFT: "_X_XOX_O_",
        PLAY_X_BOTTOM_LEFT: "_X__OXXO_",
        PLAY_X_BOTTOM_RIGHT: "_X__OX_OX"
      }
    },
    _X__OXX_O: {
      on: {
        PLAY_O_TOP_LEFT: "OX__OXX_O",
        PLAY_O_TOP_RIGHT: "_XO_OXX_O",
        PLAY_O_MIDDLE_LEFT: "_X_OOXX_O",
        PLAY_O_BOTTOM_CENTER: "_X__OXXOO"
      }
    },
    _X__OX_XO: {
      on: {
        PLAY_O_TOP_LEFT: "OX__OX_XO",
        PLAY_O_TOP_RIGHT: "_XO_OX_XO",
        PLAY_O_MIDDLE_LEFT: "_X_OOX_XO",
        PLAY_O_BOTTOM_LEFT: "_X__OXOXO"
      }
    },
    _X__OX__O: {
      on: {
        PLAY_X_TOP_LEFT: "XX__OX__O",
        PLAY_X_TOP_RIGHT: "_XX_OX__O",
        PLAY_X_MIDDLE_LEFT: "_X_XOX__O",
        PLAY_X_BOTTOM_LEFT: "_X__OXX_O",
        PLAY_X_BOTTOM_CENTER: "_X__OX_XO"
      }
    },
    _X__OX___: {
      on: {
        PLAY_O_TOP_LEFT: "OX__OX___",
        PLAY_O_TOP_RIGHT: "_XO_OX___",
        PLAY_O_MIDDLE_LEFT: "_X_OOX___",
        PLAY_O_BOTTOM_LEFT: "_X__OXO__",
        PLAY_O_BOTTOM_CENTER: "_X__OX_O_",
        PLAY_O_BOTTOM_RIGHT: "_X__OX__O"
      }
    },
    _X__OOXXO: {
      on: {
        PLAY_X_TOP_LEFT: "XX__OOXXO",
        PLAY_X_TOP_RIGHT: "_XX_OOXXO",
        PLAY_X_MIDDLE_LEFT: "_X_XOOXXO"
      }
    },
    _X__OOXX_: {
      on: {
        PLAY_O_TOP_LEFT: "OX__OOXX_",
        PLAY_O_TOP_RIGHT: "_XO_OOXX_",
        PLAY_O_MIDDLE_LEFT: "_X_OOOXX_",
        PLAY_O_BOTTOM_RIGHT: "_X__OOXXO"
      }
    },
    _X__OOXOX: {
      on: {
        PLAY_X_TOP_LEFT: "XX__OOXOX",
        PLAY_X_TOP_RIGHT: "_XX_OOXOX",
        PLAY_X_MIDDLE_LEFT: "_X_XOOXOX"
      }
    },
    _X__OOX_X: {
      on: {
        PLAY_O_TOP_LEFT: "OX__OOX_X",
        PLAY_O_TOP_RIGHT: "_XO_OOX_X",
        PLAY_O_MIDDLE_LEFT: "_X_OOOX_X",
        PLAY_O_BOTTOM_CENTER: "_X__OOXOX"
      }
    },
    _X__OOX__: {
      on: {
        PLAY_X_TOP_LEFT: "XX__OOX__",
        PLAY_X_TOP_RIGHT: "_XX_OOX__",
        PLAY_X_MIDDLE_LEFT: "_X_XOOX__",
        PLAY_X_BOTTOM_CENTER: "_X__OOXX_",
        PLAY_X_BOTTOM_RIGHT: "_X__OOX_X"
      }
    },
    _X__O_XOX: {
      on: {
        PLAY_O_TOP_LEFT: "OX__O_XOX",
        PLAY_O_TOP_RIGHT: "_XO_O_XOX",
        PLAY_O_MIDDLE_LEFT: "_X_OO_XOX",
        PLAY_O_MIDDLE_RIGHT: "_X__OOXOX"
      }
    },
    _X__O_XO_: {
      on: {
        PLAY_X_TOP_LEFT: "XX__O_XO_",
        PLAY_X_TOP_RIGHT: "_XX_O_XO_",
        PLAY_X_MIDDLE_LEFT: "_X_XO_XO_",
        PLAY_X_MIDDLE_RIGHT: "_X__OXXO_",
        PLAY_X_BOTTOM_RIGHT: "_X__O_XOX"
      }
    },
    _X__O_XXO: {
      on: {
        PLAY_O_TOP_LEFT: "OX__O_XXO",
        PLAY_O_TOP_RIGHT: "_XO_O_XXO",
        PLAY_O_MIDDLE_LEFT: "_X_OO_XXO",
        PLAY_O_MIDDLE_RIGHT: "_X__OOXXO"
      }
    },
    _X__O_X_O: {
      on: {
        PLAY_X_TOP_LEFT: "XX__O_X_O",
        PLAY_X_TOP_RIGHT: "_XX_O_X_O",
        PLAY_X_MIDDLE_LEFT: "_X_XO_X_O",
        PLAY_X_MIDDLE_RIGHT: "_X__OXX_O",
        PLAY_X_BOTTOM_CENTER: "_X__O_XXO"
      }
    },
    _X__O_X__: {
      on: {
        PLAY_O_TOP_LEFT: "OX__O_X__",
        PLAY_O_TOP_RIGHT: "_XO_O_X__",
        PLAY_O_MIDDLE_LEFT: "_X_OO_X__",
        PLAY_O_MIDDLE_RIGHT: "_X__OOX__",
        PLAY_O_BOTTOM_CENTER: "_X__O_XO_",
        PLAY_O_BOTTOM_RIGHT: "_X__O_X_O"
      }
    },
    _X__OOOXX: {
      on: {
        PLAY_X_TOP_LEFT: "XX__OOOXX",
        PLAY_X_TOP_RIGHT: "_XX_OOOXX",
        PLAY_X_MIDDLE_LEFT: "_X_XOOOXX"
      }
    },
    _X__OO_XX: {
      on: {
        PLAY_O_TOP_LEFT: "OX__OO_XX",
        PLAY_O_TOP_RIGHT: "_XO_OO_XX",
        PLAY_O_MIDDLE_LEFT: "_X_OOO_XX",
        PLAY_O_BOTTOM_LEFT: "_X__OOOXX"
      }
    },
    _X__OO_X_: {
      on: {
        PLAY_X_TOP_LEFT: "XX__OO_X_",
        PLAY_X_TOP_RIGHT: "_XX_OO_X_",
        PLAY_X_MIDDLE_LEFT: "_X_XOO_X_",
        PLAY_X_BOTTOM_LEFT: "_X__OOXX_",
        PLAY_X_BOTTOM_RIGHT: "_X__OO_XX"
      }
    },
    _X__O_OXX: {
      on: {
        PLAY_O_TOP_LEFT: "OX__O_OXX",
        PLAY_O_TOP_RIGHT: "_XO_O_OXX",
        PLAY_O_MIDDLE_LEFT: "_X_OO_OXX",
        PLAY_O_MIDDLE_RIGHT: "_X__OOOXX"
      }
    },
    _X__O_OX_: {
      on: {
        PLAY_X_TOP_LEFT: "XX__O_OX_",
        PLAY_X_TOP_RIGHT: "_XX_O_OX_",
        PLAY_X_MIDDLE_LEFT: "_X_XO_OX_",
        PLAY_X_MIDDLE_RIGHT: "_X__OXOX_",
        PLAY_X_BOTTOM_RIGHT: "_X__O_OXX"
      }
    },
    _X__O__XO: {
      on: {
        PLAY_X_TOP_LEFT: "XX__O__XO",
        PLAY_X_TOP_RIGHT: "_XX_O__XO",
        PLAY_X_MIDDLE_LEFT: "_X_XO__XO",
        PLAY_X_MIDDLE_RIGHT: "_X__OX_XO",
        PLAY_X_BOTTOM_LEFT: "_X__O_XXO"
      }
    },
    _X__O__X_: {
      on: {
        PLAY_O_TOP_LEFT: "OX__O__X_",
        PLAY_O_TOP_RIGHT: "_XO_O__X_",
        PLAY_O_MIDDLE_LEFT: "_X_OO__X_",
        PLAY_O_MIDDLE_RIGHT: "_X__OO_X_",
        PLAY_O_BOTTOM_LEFT: "_X__O_OX_",
        PLAY_O_BOTTOM_RIGHT: "_X__O__XO"
      }
    },
    _X__OO__X: {
      on: {
        PLAY_X_TOP_LEFT: "XX__OO__X",
        PLAY_X_TOP_RIGHT: "_XX_OO__X",
        PLAY_X_MIDDLE_LEFT: "_X_XOO__X",
        PLAY_X_BOTTOM_LEFT: "_X__OOX_X",
        PLAY_X_BOTTOM_CENTER: "_X__OO_XX"
      }
    },
    _X__O_O_X: {
      on: {
        PLAY_X_TOP_LEFT: "XX__O_O_X",
        PLAY_X_TOP_RIGHT: "_XX_O_O_X",
        PLAY_X_MIDDLE_LEFT: "_X_XO_O_X",
        PLAY_X_MIDDLE_RIGHT: "_X__OXO_X",
        PLAY_X_BOTTOM_CENTER: "_X__O_OXX"
      }
    },
    _X__O__OX: {
      on: {
        PLAY_X_TOP_LEFT: "XX__O__OX",
        PLAY_X_TOP_RIGHT: "_XX_O__OX",
        PLAY_X_MIDDLE_LEFT: "_X_XO__OX",
        PLAY_X_MIDDLE_RIGHT: "_X__OX_OX",
        PLAY_X_BOTTOM_LEFT: "_X__O_XOX"
      }
    },
    _X__O___X: {
      on: {
        PLAY_O_TOP_LEFT: "OX__O___X",
        PLAY_O_TOP_RIGHT: "_XO_O___X",
        PLAY_O_MIDDLE_LEFT: "_X_OO___X",
        PLAY_O_MIDDLE_RIGHT: "_X__OO__X",
        PLAY_O_BOTTOM_LEFT: "_X__O_O_X",
        PLAY_O_BOTTOM_CENTER: "_X__O__OX"
      }
    },
    _X__O____: {
      on: {
        PLAY_X_TOP_LEFT: "XX__O____",
        PLAY_X_TOP_RIGHT: "_XX_O____",
        PLAY_X_MIDDLE_LEFT: "_X_XO____",
        PLAY_X_MIDDLE_RIGHT: "_X__OX___",
        PLAY_X_BOTTOM_LEFT: "_X__O_X__",
        PLAY_X_BOTTOM_CENTER: "_X__O__X_",
        PLAY_X_BOTTOM_RIGHT: "_X__O___X"
      }
    },
    _XXXXOOOO: { on: { "": "O_WINS" } },
    _XXXXOOO_: {
      on: { PLAY_O_TOP_LEFT: "OXXXXOOO_", PLAY_O_BOTTOM_RIGHT: "_XXXXOOOO" }
    },
    _XXX_OOOX: {
      on: { PLAY_O_TOP_LEFT: "OXXX_OOOX", PLAY_O_CENTER: "_XXXOOOOX" }
    },
    _XXX_OOO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXXX_OOO_",
        PLAY_X_CENTER: "_XXXXOOO_",
        PLAY_X_BOTTOM_RIGHT: "_XXX_OOOX"
      }
    },
    _XXXXOO_O: {
      on: { PLAY_O_TOP_LEFT: "OXXXXOO_O", PLAY_O_BOTTOM_CENTER: "_XXXXOOOO" }
    },
    _XXX_OOXO: {
      on: { PLAY_O_TOP_LEFT: "OXXX_OOXO", PLAY_O_CENTER: "_XXXOOOXO" }
    },
    _XXX_OO_O: {
      on: {
        PLAY_X_TOP_LEFT: "XXXX_OO_O",
        PLAY_X_CENTER: "_XXXXOO_O",
        PLAY_X_BOTTOM_CENTER: "_XXX_OOXO"
      }
    },
    _XXX_OO__: {
      on: {
        PLAY_O_TOP_LEFT: "OXXX_OO__",
        PLAY_O_CENTER: "_XXXOOO__",
        PLAY_O_BOTTOM_CENTER: "_XXX_OOO_",
        PLAY_O_BOTTOM_RIGHT: "_XXX_OO_O"
      }
    },
    _XX_XOOOX: {
      on: { PLAY_O_TOP_LEFT: "OXX_XOOOX", PLAY_O_MIDDLE_LEFT: "_XXOXOOOX" }
    },
    _XX_XOOO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXX_XOOO_",
        PLAY_X_MIDDLE_LEFT: "_XXXXOOO_",
        PLAY_X_BOTTOM_RIGHT: "_XX_XOOOX"
      }
    },
    _XX_XOOXO: { on: { "": "X_WINS" } },
    _XX_XOO_O: {
      on: {
        PLAY_X_TOP_LEFT: "XXX_XOO_O",
        PLAY_X_MIDDLE_LEFT: "_XXXXOO_O",
        PLAY_X_BOTTOM_CENTER: "_XX_XOOXO"
      }
    },
    _XX_XOO__: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_XOO__",
        PLAY_O_MIDDLE_LEFT: "_XXOXOO__",
        PLAY_O_BOTTOM_CENTER: "_XX_XOOO_",
        PLAY_O_BOTTOM_RIGHT: "_XX_XOO_O"
      }
    },
    _XX__OOXO: {
      on: {
        PLAY_X_TOP_LEFT: "XXX__OOXO",
        PLAY_X_MIDDLE_LEFT: "_XXX_OOXO",
        PLAY_X_CENTER: "_XX_XOOXO"
      }
    },
    _XX__OOX_: {
      on: {
        PLAY_O_TOP_LEFT: "OXX__OOX_",
        PLAY_O_MIDDLE_LEFT: "_XXO_OOX_",
        PLAY_O_CENTER: "_XX_OOOX_",
        PLAY_O_BOTTOM_RIGHT: "_XX__OOXO"
      }
    },
    _XX__OOOX: {
      on: {
        PLAY_X_TOP_LEFT: "XXX__OOOX",
        PLAY_X_MIDDLE_LEFT: "_XXX_OOOX",
        PLAY_X_CENTER: "_XX_XOOOX"
      }
    },
    _XX__OO_X: {
      on: {
        PLAY_O_TOP_LEFT: "OXX__OO_X",
        PLAY_O_MIDDLE_LEFT: "_XXO_OO_X",
        PLAY_O_CENTER: "_XX_OOO_X",
        PLAY_O_BOTTOM_CENTER: "_XX__OOOX"
      }
    },
    _XX__OO__: {
      on: {
        PLAY_X_TOP_LEFT: "XXX__OO__",
        PLAY_X_MIDDLE_LEFT: "_XXX_OO__",
        PLAY_X_CENTER: "_XX_XOO__",
        PLAY_X_BOTTOM_CENTER: "_XX__OOX_",
        PLAY_X_BOTTOM_RIGHT: "_XX__OO_X"
      }
    },
    _XXXXO_OO: {
      on: { PLAY_O_TOP_LEFT: "OXXXXO_OO", PLAY_O_BOTTOM_LEFT: "_XXXXOOOO" }
    },
    _XXX_OXOO: {
      on: { PLAY_O_TOP_LEFT: "OXXX_OXOO", PLAY_O_CENTER: "_XXXOOXOO" }
    },
    _XXX_O_OO: {
      on: {
        PLAY_X_TOP_LEFT: "XXXX_O_OO",
        PLAY_X_CENTER: "_XXXXO_OO",
        PLAY_X_BOTTOM_LEFT: "_XXX_OXOO"
      }
    },
    _XXX_O_O_: {
      on: {
        PLAY_O_TOP_LEFT: "OXXX_O_O_",
        PLAY_O_CENTER: "_XXXOO_O_",
        PLAY_O_BOTTOM_LEFT: "_XXX_OOO_",
        PLAY_O_BOTTOM_RIGHT: "_XXX_O_OO"
      }
    },
    _XX_XOXOO: { on: { "": "X_WINS" } },
    _XX_XO_OO: {
      on: {
        PLAY_X_TOP_LEFT: "XXX_XO_OO",
        PLAY_X_MIDDLE_LEFT: "_XXXXO_OO",
        PLAY_X_BOTTOM_LEFT: "_XX_XOXOO"
      }
    },
    _XX_XO_O_: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_XO_O_",
        PLAY_O_MIDDLE_LEFT: "_XXOXO_O_",
        PLAY_O_BOTTOM_LEFT: "_XX_XOOO_",
        PLAY_O_BOTTOM_RIGHT: "_XX_XO_OO"
      }
    },
    _XX__OXOO: {
      on: {
        PLAY_X_TOP_LEFT: "XXX__OXOO",
        PLAY_X_MIDDLE_LEFT: "_XXX_OXOO",
        PLAY_X_CENTER: "_XX_XOXOO"
      }
    },
    _XX__OXO_: {
      on: {
        PLAY_O_TOP_LEFT: "OXX__OXO_",
        PLAY_O_MIDDLE_LEFT: "_XXO_OXO_",
        PLAY_O_CENTER: "_XX_OOXO_",
        PLAY_O_BOTTOM_RIGHT: "_XX__OXOO"
      }
    },
    _XX__O_OX: {
      on: {
        PLAY_O_TOP_LEFT: "OXX__O_OX",
        PLAY_O_MIDDLE_LEFT: "_XXO_O_OX",
        PLAY_O_CENTER: "_XX_OO_OX",
        PLAY_O_BOTTOM_LEFT: "_XX__OOOX"
      }
    },
    _XX__O_O_: {
      on: {
        PLAY_X_TOP_LEFT: "XXX__O_O_",
        PLAY_X_MIDDLE_LEFT: "_XXX_O_O_",
        PLAY_X_CENTER: "_XX_XO_O_",
        PLAY_X_BOTTOM_LEFT: "_XX__OXO_",
        PLAY_X_BOTTOM_RIGHT: "_XX__O_OX"
      }
    },
    _XXX_O__O: {
      on: {
        PLAY_O_TOP_LEFT: "OXXX_O__O",
        PLAY_O_CENTER: "_XXXOO__O",
        PLAY_O_BOTTOM_LEFT: "_XXX_OO_O",
        PLAY_O_BOTTOM_CENTER: "_XXX_O_OO"
      }
    },
    _XX_XO__O: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_XO__O",
        PLAY_O_MIDDLE_LEFT: "_XXOXO__O",
        PLAY_O_BOTTOM_LEFT: "_XX_XOO_O",
        PLAY_O_BOTTOM_CENTER: "_XX_XO_OO"
      }
    },
    _XX__OX_O: {
      on: {
        PLAY_O_TOP_LEFT: "OXX__OX_O",
        PLAY_O_MIDDLE_LEFT: "_XXO_OX_O",
        PLAY_O_CENTER: "_XX_OOX_O",
        PLAY_O_BOTTOM_CENTER: "_XX__OXOO"
      }
    },
    _XX__O_XO: {
      on: {
        PLAY_O_TOP_LEFT: "OXX__O_XO",
        PLAY_O_MIDDLE_LEFT: "_XXO_O_XO",
        PLAY_O_CENTER: "_XX_OO_XO",
        PLAY_O_BOTTOM_LEFT: "_XX__OOXO"
      }
    },
    _XX__O__O: {
      on: {
        PLAY_X_TOP_LEFT: "XXX__O__O",
        PLAY_X_MIDDLE_LEFT: "_XXX_O__O",
        PLAY_X_CENTER: "_XX_XO__O",
        PLAY_X_BOTTOM_LEFT: "_XX__OX_O",
        PLAY_X_BOTTOM_CENTER: "_XX__O_XO"
      }
    },
    _XX__O___: {
      on: {
        PLAY_O_TOP_LEFT: "OXX__O___",
        PLAY_O_MIDDLE_LEFT: "_XXO_O___",
        PLAY_O_CENTER: "_XX_OO___",
        PLAY_O_BOTTOM_LEFT: "_XX__OO__",
        PLAY_O_BOTTOM_CENTER: "_XX__O_O_",
        PLAY_O_BOTTOM_RIGHT: "_XX__O__O"
      }
    },
    _X_XXOOOX: {
      on: { PLAY_O_TOP_LEFT: "OX_XXOOOX", PLAY_O_TOP_RIGHT: "_XOXXOOOX" }
    },
    _X_XXOOO_: {
      on: {
        PLAY_X_TOP_LEFT: "XX_XXOOO_",
        PLAY_X_TOP_RIGHT: "_XXXXOOO_",
        PLAY_X_BOTTOM_RIGHT: "_X_XXOOOX"
      }
    },
    _X_XXOOXO: { on: { "": "X_WINS" } },
    _X_XXOO_O: {
      on: {
        PLAY_X_TOP_LEFT: "XX_XXOO_O",
        PLAY_X_TOP_RIGHT: "_XXXXOO_O",
        PLAY_X_BOTTOM_CENTER: "_X_XXOOXO"
      }
    },
    _X_XXOO__: {
      on: {
        PLAY_O_TOP_LEFT: "OX_XXOO__",
        PLAY_O_TOP_RIGHT: "_XOXXOO__",
        PLAY_O_BOTTOM_CENTER: "_X_XXOOO_",
        PLAY_O_BOTTOM_RIGHT: "_X_XXOO_O"
      }
    },
    _X_X_OOXO: {
      on: {
        PLAY_X_TOP_LEFT: "XX_X_OOXO",
        PLAY_X_TOP_RIGHT: "_XXX_OOXO",
        PLAY_X_CENTER: "_X_XXOOXO"
      }
    },
    _X_X_OOX_: {
      on: {
        PLAY_O_TOP_LEFT: "OX_X_OOX_",
        PLAY_O_TOP_RIGHT: "_XOX_OOX_",
        PLAY_O_CENTER: "_X_XOOOX_",
        PLAY_O_BOTTOM_RIGHT: "_X_X_OOXO"
      }
    },
    _X_X_OOOX: {
      on: {
        PLAY_X_TOP_LEFT: "XX_X_OOOX",
        PLAY_X_TOP_RIGHT: "_XXX_OOOX",
        PLAY_X_CENTER: "_X_XXOOOX"
      }
    },
    _X_X_OO_X: {
      on: {
        PLAY_O_TOP_LEFT: "OX_X_OO_X",
        PLAY_O_TOP_RIGHT: "_XOX_OO_X",
        PLAY_O_CENTER: "_X_XOOO_X",
        PLAY_O_BOTTOM_CENTER: "_X_X_OOOX"
      }
    },
    _X_X_OO__: {
      on: {
        PLAY_X_TOP_LEFT: "XX_X_OO__",
        PLAY_X_TOP_RIGHT: "_XXX_OO__",
        PLAY_X_CENTER: "_X_XXOO__",
        PLAY_X_BOTTOM_CENTER: "_X_X_OOX_",
        PLAY_X_BOTTOM_RIGHT: "_X_X_OO_X"
      }
    },
    _X_XXOXOO: {
      on: { PLAY_O_TOP_LEFT: "OX_XXOXOO", PLAY_O_TOP_RIGHT: "_XOXXOXOO" }
    },
    _X_XXO_OO: {
      on: {
        PLAY_X_TOP_LEFT: "XX_XXO_OO",
        PLAY_X_TOP_RIGHT: "_XXXXO_OO",
        PLAY_X_BOTTOM_LEFT: "_X_XXOXOO"
      }
    },
    _X_XXO_O_: {
      on: {
        PLAY_O_TOP_LEFT: "OX_XXO_O_",
        PLAY_O_TOP_RIGHT: "_XOXXO_O_",
        PLAY_O_BOTTOM_LEFT: "_X_XXOOO_",
        PLAY_O_BOTTOM_RIGHT: "_X_XXO_OO"
      }
    },
    _X_X_OXOO: {
      on: {
        PLAY_X_TOP_LEFT: "XX_X_OXOO",
        PLAY_X_TOP_RIGHT: "_XXX_OXOO",
        PLAY_X_CENTER: "_X_XXOXOO"
      }
    },
    _X_X_OXO_: {
      on: {
        PLAY_O_TOP_LEFT: "OX_X_OXO_",
        PLAY_O_TOP_RIGHT: "_XOX_OXO_",
        PLAY_O_CENTER: "_X_XOOXO_",
        PLAY_O_BOTTOM_RIGHT: "_X_X_OXOO"
      }
    },
    _X_X_O_OX: {
      on: {
        PLAY_O_TOP_LEFT: "OX_X_O_OX",
        PLAY_O_TOP_RIGHT: "_XOX_O_OX",
        PLAY_O_CENTER: "_X_XOO_OX",
        PLAY_O_BOTTOM_LEFT: "_X_X_OOOX"
      }
    },
    _X_X_O_O_: {
      on: {
        PLAY_X_TOP_LEFT: "XX_X_O_O_",
        PLAY_X_TOP_RIGHT: "_XXX_O_O_",
        PLAY_X_CENTER: "_X_XXO_O_",
        PLAY_X_BOTTOM_LEFT: "_X_X_OXO_",
        PLAY_X_BOTTOM_RIGHT: "_X_X_O_OX"
      }
    },
    _X_XXO__O: {
      on: {
        PLAY_O_TOP_LEFT: "OX_XXO__O",
        PLAY_O_TOP_RIGHT: "_XOXXO__O",
        PLAY_O_BOTTOM_LEFT: "_X_XXOO_O",
        PLAY_O_BOTTOM_CENTER: "_X_XXO_OO"
      }
    },
    _X_X_OX_O: {
      on: {
        PLAY_O_TOP_LEFT: "OX_X_OX_O",
        PLAY_O_TOP_RIGHT: "_XOX_OX_O",
        PLAY_O_CENTER: "_X_XOOX_O",
        PLAY_O_BOTTOM_CENTER: "_X_X_OXOO"
      }
    },
    _X_X_O_XO: {
      on: {
        PLAY_O_TOP_LEFT: "OX_X_O_XO",
        PLAY_O_TOP_RIGHT: "_XOX_O_XO",
        PLAY_O_CENTER: "_X_XOO_XO",
        PLAY_O_BOTTOM_LEFT: "_X_X_OOXO"
      }
    },
    _X_X_O__O: {
      on: {
        PLAY_X_TOP_LEFT: "XX_X_O__O",
        PLAY_X_TOP_RIGHT: "_XXX_O__O",
        PLAY_X_CENTER: "_X_XXO__O",
        PLAY_X_BOTTOM_LEFT: "_X_X_OX_O",
        PLAY_X_BOTTOM_CENTER: "_X_X_O_XO"
      }
    },
    _X_X_O___: {
      on: {
        PLAY_O_TOP_LEFT: "OX_X_O___",
        PLAY_O_TOP_RIGHT: "_XOX_O___",
        PLAY_O_CENTER: "_X_XOO___",
        PLAY_O_BOTTOM_LEFT: "_X_X_OO__",
        PLAY_O_BOTTOM_CENTER: "_X_X_O_O_",
        PLAY_O_BOTTOM_RIGHT: "_X_X_O__O"
      }
    },
    _X__XOOX_: { on: { "": "X_WINS" } },
    _X__XOOOX: {
      on: {
        PLAY_X_TOP_LEFT: "XX__XOOOX",
        PLAY_X_TOP_RIGHT: "_XX_XOOOX",
        PLAY_X_MIDDLE_LEFT: "_X_XXOOOX"
      }
    },
    _X__XOO_X: {
      on: {
        PLAY_O_TOP_LEFT: "OX__XOO_X",
        PLAY_O_TOP_RIGHT: "_XO_XOO_X",
        PLAY_O_MIDDLE_LEFT: "_X_OXOO_X",
        PLAY_O_BOTTOM_CENTER: "_X__XOOOX"
      }
    },
    _X__XOO__: {
      on: {
        PLAY_X_TOP_LEFT: "XX__XOO__",
        PLAY_X_TOP_RIGHT: "_XX_XOO__",
        PLAY_X_MIDDLE_LEFT: "_X_XXOO__",
        PLAY_X_BOTTOM_CENTER: "_X__XOOX_",
        PLAY_X_BOTTOM_RIGHT: "_X__XOO_X"
      }
    },
    _X__XOXOO: {
      on: {
        PLAY_X_TOP_LEFT: "XX__XOXOO",
        PLAY_X_TOP_RIGHT: "_XX_XOXOO",
        PLAY_X_MIDDLE_LEFT: "_X_XXOXOO"
      }
    },
    _X__XOXO_: {
      on: {
        PLAY_O_TOP_LEFT: "OX__XOXO_",
        PLAY_O_TOP_RIGHT: "_XO_XOXO_",
        PLAY_O_MIDDLE_LEFT: "_X_OXOXO_",
        PLAY_O_BOTTOM_RIGHT: "_X__XOXOO"
      }
    },
    _X__XO_OX: {
      on: {
        PLAY_O_TOP_LEFT: "OX__XO_OX",
        PLAY_O_TOP_RIGHT: "_XO_XO_OX",
        PLAY_O_MIDDLE_LEFT: "_X_OXO_OX",
        PLAY_O_BOTTOM_LEFT: "_X__XOOOX"
      }
    },
    _X__XO_O_: {
      on: {
        PLAY_X_TOP_LEFT: "XX__XO_O_",
        PLAY_X_TOP_RIGHT: "_XX_XO_O_",
        PLAY_X_MIDDLE_LEFT: "_X_XXO_O_",
        PLAY_X_BOTTOM_LEFT: "_X__XOXO_",
        PLAY_X_BOTTOM_RIGHT: "_X__XO_OX"
      }
    },
    _X__XOX_O: {
      on: {
        PLAY_O_TOP_LEFT: "OX__XOX_O",
        PLAY_O_TOP_RIGHT: "_XO_XOX_O",
        PLAY_O_MIDDLE_LEFT: "_X_OXOX_O",
        PLAY_O_BOTTOM_CENTER: "_X__XOXOO"
      }
    },
    _X__XO_XO: { on: { "": "X_WINS" } },
    _X__XO__O: {
      on: {
        PLAY_X_TOP_LEFT: "XX__XO__O",
        PLAY_X_TOP_RIGHT: "_XX_XO__O",
        PLAY_X_MIDDLE_LEFT: "_X_XXO__O",
        PLAY_X_BOTTOM_LEFT: "_X__XOX_O",
        PLAY_X_BOTTOM_CENTER: "_X__XO_XO"
      }
    },
    _X__XO___: {
      on: {
        PLAY_O_TOP_LEFT: "OX__XO___",
        PLAY_O_TOP_RIGHT: "_XO_XO___",
        PLAY_O_MIDDLE_LEFT: "_X_OXO___",
        PLAY_O_BOTTOM_LEFT: "_X__XOO__",
        PLAY_O_BOTTOM_CENTER: "_X__XO_O_",
        PLAY_O_BOTTOM_RIGHT: "_X__XO__O"
      }
    },
    _X___OXOX: {
      on: {
        PLAY_O_TOP_LEFT: "OX___OXOX",
        PLAY_O_TOP_RIGHT: "_XO__OXOX",
        PLAY_O_MIDDLE_LEFT: "_X_O_OXOX",
        PLAY_O_CENTER: "_X__OOXOX"
      }
    },
    _X___OXO_: {
      on: {
        PLAY_X_TOP_LEFT: "XX___OXO_",
        PLAY_X_TOP_RIGHT: "_XX__OXO_",
        PLAY_X_MIDDLE_LEFT: "_X_X_OXO_",
        PLAY_X_CENTER: "_X__XOXO_",
        PLAY_X_BOTTOM_RIGHT: "_X___OXOX"
      }
    },
    _X___OXXO: {
      on: {
        PLAY_O_TOP_LEFT: "OX___OXXO",
        PLAY_O_TOP_RIGHT: "_XO__OXXO",
        PLAY_O_MIDDLE_LEFT: "_X_O_OXXO",
        PLAY_O_CENTER: "_X__OOXXO"
      }
    },
    _X___OX_O: {
      on: {
        PLAY_X_TOP_LEFT: "XX___OX_O",
        PLAY_X_TOP_RIGHT: "_XX__OX_O",
        PLAY_X_MIDDLE_LEFT: "_X_X_OX_O",
        PLAY_X_CENTER: "_X__XOX_O",
        PLAY_X_BOTTOM_CENTER: "_X___OXXO"
      }
    },
    _X___OX__: {
      on: {
        PLAY_O_TOP_LEFT: "OX___OX__",
        PLAY_O_TOP_RIGHT: "_XO__OX__",
        PLAY_O_MIDDLE_LEFT: "_X_O_OX__",
        PLAY_O_CENTER: "_X__OOX__",
        PLAY_O_BOTTOM_CENTER: "_X___OXO_",
        PLAY_O_BOTTOM_RIGHT: "_X___OX_O"
      }
    },
    _X___OOXX: {
      on: {
        PLAY_O_TOP_LEFT: "OX___OOXX",
        PLAY_O_TOP_RIGHT: "_XO__OOXX",
        PLAY_O_MIDDLE_LEFT: "_X_O_OOXX",
        PLAY_O_CENTER: "_X__OOOXX"
      }
    },
    _X___OOX_: {
      on: {
        PLAY_X_TOP_LEFT: "XX___OOX_",
        PLAY_X_TOP_RIGHT: "_XX__OOX_",
        PLAY_X_MIDDLE_LEFT: "_X_X_OOX_",
        PLAY_X_CENTER: "_X__XOOX_",
        PLAY_X_BOTTOM_RIGHT: "_X___OOXX"
      }
    },
    _X___O_XO: {
      on: {
        PLAY_X_TOP_LEFT: "XX___O_XO",
        PLAY_X_TOP_RIGHT: "_XX__O_XO",
        PLAY_X_MIDDLE_LEFT: "_X_X_O_XO",
        PLAY_X_CENTER: "_X__XO_XO",
        PLAY_X_BOTTOM_LEFT: "_X___OXXO"
      }
    },
    _X___O_X_: {
      on: {
        PLAY_O_TOP_LEFT: "OX___O_X_",
        PLAY_O_TOP_RIGHT: "_XO__O_X_",
        PLAY_O_MIDDLE_LEFT: "_X_O_O_X_",
        PLAY_O_CENTER: "_X__OO_X_",
        PLAY_O_BOTTOM_LEFT: "_X___OOX_",
        PLAY_O_BOTTOM_RIGHT: "_X___O_XO"
      }
    },
    _X___OO_X: {
      on: {
        PLAY_X_TOP_LEFT: "XX___OO_X",
        PLAY_X_TOP_RIGHT: "_XX__OO_X",
        PLAY_X_MIDDLE_LEFT: "_X_X_OO_X",
        PLAY_X_CENTER: "_X__XOO_X",
        PLAY_X_BOTTOM_CENTER: "_X___OOXX"
      }
    },
    _X___O_OX: {
      on: {
        PLAY_X_TOP_LEFT: "XX___O_OX",
        PLAY_X_TOP_RIGHT: "_XX__O_OX",
        PLAY_X_MIDDLE_LEFT: "_X_X_O_OX",
        PLAY_X_CENTER: "_X__XO_OX",
        PLAY_X_BOTTOM_LEFT: "_X___OXOX"
      }
    },
    _X___O__X: {
      on: {
        PLAY_O_TOP_LEFT: "OX___O__X",
        PLAY_O_TOP_RIGHT: "_XO__O__X",
        PLAY_O_MIDDLE_LEFT: "_X_O_O__X",
        PLAY_O_CENTER: "_X__OO__X",
        PLAY_O_BOTTOM_LEFT: "_X___OO_X",
        PLAY_O_BOTTOM_CENTER: "_X___O_OX"
      }
    },
    _X___O___: {
      on: {
        PLAY_X_TOP_LEFT: "XX___O___",
        PLAY_X_TOP_RIGHT: "_XX__O___",
        PLAY_X_MIDDLE_LEFT: "_X_X_O___",
        PLAY_X_CENTER: "_X__XO___",
        PLAY_X_BOTTOM_LEFT: "_X___OX__",
        PLAY_X_BOTTOM_CENTER: "_X___O_X_",
        PLAY_X_BOTTOM_RIGHT: "_X___O__X"
      }
    },
    _XXX__OOO: { on: { "": "O_WINS" } },
    _XXX__OO_: {
      on: {
        PLAY_O_TOP_LEFT: "OXXX__OO_",
        PLAY_O_CENTER: "_XXXO_OO_",
        PLAY_O_MIDDLE_RIGHT: "_XXX_OOO_",
        PLAY_O_BOTTOM_RIGHT: "_XXX__OOO"
      }
    },
    _XX_X_OOO: { on: { "": "O_WINS" } },
    _XX_X_OO_: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_X_OO_",
        PLAY_O_MIDDLE_LEFT: "_XXOX_OO_",
        PLAY_O_MIDDLE_RIGHT: "_XX_XOOO_",
        PLAY_O_BOTTOM_RIGHT: "_XX_X_OOO"
      }
    },
    _XX__XOOO: { on: { "": "O_WINS" } },
    _XX__XOO_: {
      on: {
        PLAY_O_TOP_LEFT: "OXX__XOO_",
        PLAY_O_MIDDLE_LEFT: "_XXO_XOO_",
        PLAY_O_CENTER: "_XX_OXOO_",
        PLAY_O_BOTTOM_RIGHT: "_XX__XOOO"
      }
    },
    _XX___OOX: {
      on: {
        PLAY_O_TOP_LEFT: "OXX___OOX",
        PLAY_O_MIDDLE_LEFT: "_XXO__OOX",
        PLAY_O_CENTER: "_XX_O_OOX",
        PLAY_O_MIDDLE_RIGHT: "_XX__OOOX"
      }
    },
    _XX___OO_: {
      on: {
        PLAY_X_TOP_LEFT: "XXX___OO_",
        PLAY_X_MIDDLE_LEFT: "_XXX__OO_",
        PLAY_X_CENTER: "_XX_X_OO_",
        PLAY_X_MIDDLE_RIGHT: "_XX__XOO_",
        PLAY_X_BOTTOM_RIGHT: "_XX___OOX"
      }
    },
    _XXX__O_O: {
      on: {
        PLAY_O_TOP_LEFT: "OXXX__O_O",
        PLAY_O_CENTER: "_XXXO_O_O",
        PLAY_O_MIDDLE_RIGHT: "_XXX_OO_O",
        PLAY_O_BOTTOM_CENTER: "_XXX__OOO"
      }
    },
    _XX_X_O_O: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_X_O_O",
        PLAY_O_MIDDLE_LEFT: "_XXOX_O_O",
        PLAY_O_MIDDLE_RIGHT: "_XX_XOO_O",
        PLAY_O_BOTTOM_CENTER: "_XX_X_OOO"
      }
    },
    _XX__XO_O: {
      on: {
        PLAY_O_TOP_LEFT: "OXX__XO_O",
        PLAY_O_MIDDLE_LEFT: "_XXO_XO_O",
        PLAY_O_CENTER: "_XX_OXO_O",
        PLAY_O_BOTTOM_CENTER: "_XX__XOOO"
      }
    },
    _XX___OXO: {
      on: {
        PLAY_O_TOP_LEFT: "OXX___OXO",
        PLAY_O_MIDDLE_LEFT: "_XXO__OXO",
        PLAY_O_CENTER: "_XX_O_OXO",
        PLAY_O_MIDDLE_RIGHT: "_XX__OOXO"
      }
    },
    _XX___O_O: {
      on: {
        PLAY_X_TOP_LEFT: "XXX___O_O",
        PLAY_X_MIDDLE_LEFT: "_XXX__O_O",
        PLAY_X_CENTER: "_XX_X_O_O",
        PLAY_X_MIDDLE_RIGHT: "_XX__XO_O",
        PLAY_X_BOTTOM_CENTER: "_XX___OXO"
      }
    },
    _XX___O__: {
      on: {
        PLAY_O_TOP_LEFT: "OXX___O__",
        PLAY_O_MIDDLE_LEFT: "_XXO__O__",
        PLAY_O_CENTER: "_XX_O_O__",
        PLAY_O_MIDDLE_RIGHT: "_XX__OO__",
        PLAY_O_BOTTOM_CENTER: "_XX___OO_",
        PLAY_O_BOTTOM_RIGHT: "_XX___O_O"
      }
    },
    _X_XX_OOO: { on: { "": "O_WINS" } },
    _X_XX_OO_: {
      on: {
        PLAY_O_TOP_LEFT: "OX_XX_OO_",
        PLAY_O_TOP_RIGHT: "_XOXX_OO_",
        PLAY_O_MIDDLE_RIGHT: "_X_XXOOO_",
        PLAY_O_BOTTOM_RIGHT: "_X_XX_OOO"
      }
    },
    _X_X_XOOO: { on: { "": "O_WINS" } },
    _X_X_XOO_: {
      on: {
        PLAY_O_TOP_LEFT: "OX_X_XOO_",
        PLAY_O_TOP_RIGHT: "_XOX_XOO_",
        PLAY_O_CENTER: "_X_XOXOO_",
        PLAY_O_BOTTOM_RIGHT: "_X_X_XOOO"
      }
    },
    _X_X__OOX: {
      on: {
        PLAY_O_TOP_LEFT: "OX_X__OOX",
        PLAY_O_TOP_RIGHT: "_XOX__OOX",
        PLAY_O_CENTER: "_X_XO_OOX",
        PLAY_O_MIDDLE_RIGHT: "_X_X_OOOX"
      }
    },
    _X_X__OO_: {
      on: {
        PLAY_X_TOP_LEFT: "XX_X__OO_",
        PLAY_X_TOP_RIGHT: "_XXX__OO_",
        PLAY_X_CENTER: "_X_XX_OO_",
        PLAY_X_MIDDLE_RIGHT: "_X_X_XOO_",
        PLAY_X_BOTTOM_RIGHT: "_X_X__OOX"
      }
    },
    _X_XX_O_O: {
      on: {
        PLAY_O_TOP_LEFT: "OX_XX_O_O",
        PLAY_O_TOP_RIGHT: "_XOXX_O_O",
        PLAY_O_MIDDLE_RIGHT: "_X_XXOO_O",
        PLAY_O_BOTTOM_CENTER: "_X_XX_OOO"
      }
    },
    _X_X_XO_O: {
      on: {
        PLAY_O_TOP_LEFT: "OX_X_XO_O",
        PLAY_O_TOP_RIGHT: "_XOX_XO_O",
        PLAY_O_CENTER: "_X_XOXO_O",
        PLAY_O_BOTTOM_CENTER: "_X_X_XOOO"
      }
    },
    _X_X__OXO: {
      on: {
        PLAY_O_TOP_LEFT: "OX_X__OXO",
        PLAY_O_TOP_RIGHT: "_XOX__OXO",
        PLAY_O_CENTER: "_X_XO_OXO",
        PLAY_O_MIDDLE_RIGHT: "_X_X_OOXO"
      }
    },
    _X_X__O_O: {
      on: {
        PLAY_X_TOP_LEFT: "XX_X__O_O",
        PLAY_X_TOP_RIGHT: "_XXX__O_O",
        PLAY_X_CENTER: "_X_XX_O_O",
        PLAY_X_MIDDLE_RIGHT: "_X_X_XO_O",
        PLAY_X_BOTTOM_CENTER: "_X_X__OXO"
      }
    },
    _X_X__O__: {
      on: {
        PLAY_O_TOP_LEFT: "OX_X__O__",
        PLAY_O_TOP_RIGHT: "_XOX__O__",
        PLAY_O_CENTER: "_X_XO_O__",
        PLAY_O_MIDDLE_RIGHT: "_X_X_OO__",
        PLAY_O_BOTTOM_CENTER: "_X_X__OO_",
        PLAY_O_BOTTOM_RIGHT: "_X_X__O_O"
      }
    },
    _X__XXOOO: { on: { "": "O_WINS" } },
    _X__XXOO_: {
      on: {
        PLAY_O_TOP_LEFT: "OX__XXOO_",
        PLAY_O_TOP_RIGHT: "_XO_XXOO_",
        PLAY_O_MIDDLE_LEFT: "_X_OXXOO_",
        PLAY_O_BOTTOM_RIGHT: "_X__XXOOO"
      }
    },
    _X__X_OOX: {
      on: {
        PLAY_O_TOP_LEFT: "OX__X_OOX",
        PLAY_O_TOP_RIGHT: "_XO_X_OOX",
        PLAY_O_MIDDLE_LEFT: "_X_OX_OOX",
        PLAY_O_MIDDLE_RIGHT: "_X__XOOOX"
      }
    },
    _X__X_OO_: {
      on: {
        PLAY_X_TOP_LEFT: "XX__X_OO_",
        PLAY_X_TOP_RIGHT: "_XX_X_OO_",
        PLAY_X_MIDDLE_LEFT: "_X_XX_OO_",
        PLAY_X_MIDDLE_RIGHT: "_X__XXOO_",
        PLAY_X_BOTTOM_RIGHT: "_X__X_OOX"
      }
    },
    _X__XXO_O: {
      on: {
        PLAY_O_TOP_LEFT: "OX__XXO_O",
        PLAY_O_TOP_RIGHT: "_XO_XXO_O",
        PLAY_O_MIDDLE_LEFT: "_X_OXXO_O",
        PLAY_O_BOTTOM_CENTER: "_X__XXOOO"
      }
    },
    _X__X_OXO: { on: { "": "X_WINS" } },
    _X__X_O_O: {
      on: {
        PLAY_X_TOP_LEFT: "XX__X_O_O",
        PLAY_X_TOP_RIGHT: "_XX_X_O_O",
        PLAY_X_MIDDLE_LEFT: "_X_XX_O_O",
        PLAY_X_MIDDLE_RIGHT: "_X__XXO_O",
        PLAY_X_BOTTOM_CENTER: "_X__X_OXO"
      }
    },
    _X__X_O__: {
      on: {
        PLAY_O_TOP_LEFT: "OX__X_O__",
        PLAY_O_TOP_RIGHT: "_XO_X_O__",
        PLAY_O_MIDDLE_LEFT: "_X_OX_O__",
        PLAY_O_MIDDLE_RIGHT: "_X__XOO__",
        PLAY_O_BOTTOM_CENTER: "_X__X_OO_",
        PLAY_O_BOTTOM_RIGHT: "_X__X_O_O"
      }
    },
    _X___XOOX: {
      on: {
        PLAY_O_TOP_LEFT: "OX___XOOX",
        PLAY_O_TOP_RIGHT: "_XO__XOOX",
        PLAY_O_MIDDLE_LEFT: "_X_O_XOOX",
        PLAY_O_CENTER: "_X__OXOOX"
      }
    },
    _X___XOO_: {
      on: {
        PLAY_X_TOP_LEFT: "XX___XOO_",
        PLAY_X_TOP_RIGHT: "_XX__XOO_",
        PLAY_X_MIDDLE_LEFT: "_X_X_XOO_",
        PLAY_X_CENTER: "_X__XXOO_",
        PLAY_X_BOTTOM_RIGHT: "_X___XOOX"
      }
    },
    _X___XOXO: {
      on: {
        PLAY_O_TOP_LEFT: "OX___XOXO",
        PLAY_O_TOP_RIGHT: "_XO__XOXO",
        PLAY_O_MIDDLE_LEFT: "_X_O_XOXO",
        PLAY_O_CENTER: "_X__OXOXO"
      }
    },
    _X___XO_O: {
      on: {
        PLAY_X_TOP_LEFT: "XX___XO_O",
        PLAY_X_TOP_RIGHT: "_XX__XO_O",
        PLAY_X_MIDDLE_LEFT: "_X_X_XO_O",
        PLAY_X_CENTER: "_X__XXO_O",
        PLAY_X_BOTTOM_CENTER: "_X___XOXO"
      }
    },
    _X___XO__: {
      on: {
        PLAY_O_TOP_LEFT: "OX___XO__",
        PLAY_O_TOP_RIGHT: "_XO__XO__",
        PLAY_O_MIDDLE_LEFT: "_X_O_XO__",
        PLAY_O_CENTER: "_X__OXO__",
        PLAY_O_BOTTOM_CENTER: "_X___XOO_",
        PLAY_O_BOTTOM_RIGHT: "_X___XO_O"
      }
    },
    _X____OXO: {
      on: {
        PLAY_X_TOP_LEFT: "XX____OXO",
        PLAY_X_TOP_RIGHT: "_XX___OXO",
        PLAY_X_MIDDLE_LEFT: "_X_X__OXO",
        PLAY_X_CENTER: "_X__X_OXO",
        PLAY_X_MIDDLE_RIGHT: "_X___XOXO"
      }
    },
    _X____OX_: {
      on: {
        PLAY_O_TOP_LEFT: "OX____OX_",
        PLAY_O_TOP_RIGHT: "_XO___OX_",
        PLAY_O_MIDDLE_LEFT: "_X_O__OX_",
        PLAY_O_CENTER: "_X__O_OX_",
        PLAY_O_MIDDLE_RIGHT: "_X___OOX_",
        PLAY_O_BOTTOM_RIGHT: "_X____OXO"
      }
    },
    _X____OOX: {
      on: {
        PLAY_X_TOP_LEFT: "XX____OOX",
        PLAY_X_TOP_RIGHT: "_XX___OOX",
        PLAY_X_MIDDLE_LEFT: "_X_X__OOX",
        PLAY_X_CENTER: "_X__X_OOX",
        PLAY_X_MIDDLE_RIGHT: "_X___XOOX"
      }
    },
    _X____O_X: {
      on: {
        PLAY_O_TOP_LEFT: "OX____O_X",
        PLAY_O_TOP_RIGHT: "_XO___O_X",
        PLAY_O_MIDDLE_LEFT: "_X_O__O_X",
        PLAY_O_CENTER: "_X__O_O_X",
        PLAY_O_MIDDLE_RIGHT: "_X___OO_X",
        PLAY_O_BOTTOM_CENTER: "_X____OOX"
      }
    },
    _X____O__: {
      on: {
        PLAY_X_TOP_LEFT: "XX____O__",
        PLAY_X_TOP_RIGHT: "_XX___O__",
        PLAY_X_MIDDLE_LEFT: "_X_X__O__",
        PLAY_X_CENTER: "_X__X_O__",
        PLAY_X_MIDDLE_RIGHT: "_X___XO__",
        PLAY_X_BOTTOM_CENTER: "_X____OX_",
        PLAY_X_BOTTOM_RIGHT: "_X____O_X"
      }
    },
    _XXX___OO: {
      on: {
        PLAY_O_TOP_LEFT: "OXXX___OO",
        PLAY_O_CENTER: "_XXXO__OO",
        PLAY_O_MIDDLE_RIGHT: "_XXX_O_OO",
        PLAY_O_BOTTOM_LEFT: "_XXX__OOO"
      }
    },
    _XX_X__OO: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_X__OO",
        PLAY_O_MIDDLE_LEFT: "_XXOX__OO",
        PLAY_O_MIDDLE_RIGHT: "_XX_XO_OO",
        PLAY_O_BOTTOM_LEFT: "_XX_X_OOO"
      }
    },
    _XX__X_OO: {
      on: {
        PLAY_O_TOP_LEFT: "OXX__X_OO",
        PLAY_O_MIDDLE_LEFT: "_XXO_X_OO",
        PLAY_O_CENTER: "_XX_OX_OO",
        PLAY_O_BOTTOM_LEFT: "_XX__XOOO"
      }
    },
    _XX___XOO: {
      on: {
        PLAY_O_TOP_LEFT: "OXX___XOO",
        PLAY_O_MIDDLE_LEFT: "_XXO__XOO",
        PLAY_O_CENTER: "_XX_O_XOO",
        PLAY_O_MIDDLE_RIGHT: "_XX__OXOO"
      }
    },
    _XX____OO: {
      on: {
        PLAY_X_TOP_LEFT: "XXX____OO",
        PLAY_X_MIDDLE_LEFT: "_XXX___OO",
        PLAY_X_CENTER: "_XX_X__OO",
        PLAY_X_MIDDLE_RIGHT: "_XX__X_OO",
        PLAY_X_BOTTOM_LEFT: "_XX___XOO"
      }
    },
    _XX____O_: {
      on: {
        PLAY_O_TOP_LEFT: "OXX____O_",
        PLAY_O_MIDDLE_LEFT: "_XXO___O_",
        PLAY_O_CENTER: "_XX_O__O_",
        PLAY_O_MIDDLE_RIGHT: "_XX__O_O_",
        PLAY_O_BOTTOM_LEFT: "_XX___OO_",
        PLAY_O_BOTTOM_RIGHT: "_XX____OO"
      }
    },
    _X_XX__OO: {
      on: {
        PLAY_O_TOP_LEFT: "OX_XX__OO",
        PLAY_O_TOP_RIGHT: "_XOXX__OO",
        PLAY_O_MIDDLE_RIGHT: "_X_XXO_OO",
        PLAY_O_BOTTOM_LEFT: "_X_XX_OOO"
      }
    },
    _X_X_X_OO: {
      on: {
        PLAY_O_TOP_LEFT: "OX_X_X_OO",
        PLAY_O_TOP_RIGHT: "_XOX_X_OO",
        PLAY_O_CENTER: "_X_XOX_OO",
        PLAY_O_BOTTOM_LEFT: "_X_X_XOOO"
      }
    },
    _X_X__XOO: {
      on: {
        PLAY_O_TOP_LEFT: "OX_X__XOO",
        PLAY_O_TOP_RIGHT: "_XOX__XOO",
        PLAY_O_CENTER: "_X_XO_XOO",
        PLAY_O_MIDDLE_RIGHT: "_X_X_OXOO"
      }
    },
    _X_X___OO: {
      on: {
        PLAY_X_TOP_LEFT: "XX_X___OO",
        PLAY_X_TOP_RIGHT: "_XXX___OO",
        PLAY_X_CENTER: "_X_XX__OO",
        PLAY_X_MIDDLE_RIGHT: "_X_X_X_OO",
        PLAY_X_BOTTOM_LEFT: "_X_X__XOO"
      }
    },
    _X_X___O_: {
      on: {
        PLAY_O_TOP_LEFT: "OX_X___O_",
        PLAY_O_TOP_RIGHT: "_XOX___O_",
        PLAY_O_CENTER: "_X_XO__O_",
        PLAY_O_MIDDLE_RIGHT: "_X_X_O_O_",
        PLAY_O_BOTTOM_LEFT: "_X_X__OO_",
        PLAY_O_BOTTOM_RIGHT: "_X_X___OO"
      }
    },
    _X__XX_OO: {
      on: {
        PLAY_O_TOP_LEFT: "OX__XX_OO",
        PLAY_O_TOP_RIGHT: "_XO_XX_OO",
        PLAY_O_MIDDLE_LEFT: "_X_OXX_OO",
        PLAY_O_BOTTOM_LEFT: "_X__XXOOO"
      }
    },
    _X__X_XOO: {
      on: {
        PLAY_O_TOP_LEFT: "OX__X_XOO",
        PLAY_O_TOP_RIGHT: "_XO_X_XOO",
        PLAY_O_MIDDLE_LEFT: "_X_OX_XOO",
        PLAY_O_MIDDLE_RIGHT: "_X__XOXOO"
      }
    },
    _X__X__OO: {
      on: {
        PLAY_X_TOP_LEFT: "XX__X__OO",
        PLAY_X_TOP_RIGHT: "_XX_X__OO",
        PLAY_X_MIDDLE_LEFT: "_X_XX__OO",
        PLAY_X_MIDDLE_RIGHT: "_X__XX_OO",
        PLAY_X_BOTTOM_LEFT: "_X__X_XOO"
      }
    },
    _X__X__O_: {
      on: {
        PLAY_O_TOP_LEFT: "OX__X__O_",
        PLAY_O_TOP_RIGHT: "_XO_X__O_",
        PLAY_O_MIDDLE_LEFT: "_X_OX__O_",
        PLAY_O_MIDDLE_RIGHT: "_X__XO_O_",
        PLAY_O_BOTTOM_LEFT: "_X__X_OO_",
        PLAY_O_BOTTOM_RIGHT: "_X__X__OO"
      }
    },
    _X___XXOO: {
      on: {
        PLAY_O_TOP_LEFT: "OX___XXOO",
        PLAY_O_TOP_RIGHT: "_XO__XXOO",
        PLAY_O_MIDDLE_LEFT: "_X_O_XXOO",
        PLAY_O_CENTER: "_X__OXXOO"
      }
    },
    _X___X_OO: {
      on: {
        PLAY_X_TOP_LEFT: "XX___X_OO",
        PLAY_X_TOP_RIGHT: "_XX__X_OO",
        PLAY_X_MIDDLE_LEFT: "_X_X_X_OO",
        PLAY_X_CENTER: "_X__XX_OO",
        PLAY_X_BOTTOM_LEFT: "_X___XXOO"
      }
    },
    _X___X_O_: {
      on: {
        PLAY_O_TOP_LEFT: "OX___X_O_",
        PLAY_O_TOP_RIGHT: "_XO__X_O_",
        PLAY_O_MIDDLE_LEFT: "_X_O_X_O_",
        PLAY_O_CENTER: "_X__OX_O_",
        PLAY_O_BOTTOM_LEFT: "_X___XOO_",
        PLAY_O_BOTTOM_RIGHT: "_X___X_OO"
      }
    },
    _X____XOO: {
      on: {
        PLAY_X_TOP_LEFT: "XX____XOO",
        PLAY_X_TOP_RIGHT: "_XX___XOO",
        PLAY_X_MIDDLE_LEFT: "_X_X__XOO",
        PLAY_X_CENTER: "_X__X_XOO",
        PLAY_X_MIDDLE_RIGHT: "_X___XXOO"
      }
    },
    _X____XO_: {
      on: {
        PLAY_O_TOP_LEFT: "OX____XO_",
        PLAY_O_TOP_RIGHT: "_XO___XO_",
        PLAY_O_MIDDLE_LEFT: "_X_O__XO_",
        PLAY_O_CENTER: "_X__O_XO_",
        PLAY_O_MIDDLE_RIGHT: "_X___OXO_",
        PLAY_O_BOTTOM_RIGHT: "_X____XOO"
      }
    },
    _X_____OX: {
      on: {
        PLAY_O_TOP_LEFT: "OX_____OX",
        PLAY_O_TOP_RIGHT: "_XO____OX",
        PLAY_O_MIDDLE_LEFT: "_X_O___OX",
        PLAY_O_CENTER: "_X__O__OX",
        PLAY_O_MIDDLE_RIGHT: "_X___O_OX",
        PLAY_O_BOTTOM_LEFT: "_X____OOX"
      }
    },
    _X_____O_: {
      on: {
        PLAY_X_TOP_LEFT: "XX_____O_",
        PLAY_X_TOP_RIGHT: "_XX____O_",
        PLAY_X_MIDDLE_LEFT: "_X_X___O_",
        PLAY_X_CENTER: "_X__X__O_",
        PLAY_X_MIDDLE_RIGHT: "_X___X_O_",
        PLAY_X_BOTTOM_LEFT: "_X____XO_",
        PLAY_X_BOTTOM_RIGHT: "_X_____OX"
      }
    },
    _XX_____O: {
      on: {
        PLAY_O_TOP_LEFT: "OXX_____O",
        PLAY_O_MIDDLE_LEFT: "_XXO____O",
        PLAY_O_CENTER: "_XX_O___O",
        PLAY_O_MIDDLE_RIGHT: "_XX__O__O",
        PLAY_O_BOTTOM_LEFT: "_XX___O_O",
        PLAY_O_BOTTOM_CENTER: "_XX____OO"
      }
    },
    _X_X____O: {
      on: {
        PLAY_O_TOP_LEFT: "OX_X____O",
        PLAY_O_TOP_RIGHT: "_XOX____O",
        PLAY_O_CENTER: "_X_XO___O",
        PLAY_O_MIDDLE_RIGHT: "_X_X_O__O",
        PLAY_O_BOTTOM_LEFT: "_X_X__O_O",
        PLAY_O_BOTTOM_CENTER: "_X_X___OO"
      }
    },
    _X__X___O: {
      on: {
        PLAY_O_TOP_LEFT: "OX__X___O",
        PLAY_O_TOP_RIGHT: "_XO_X___O",
        PLAY_O_MIDDLE_LEFT: "_X_OX___O",
        PLAY_O_MIDDLE_RIGHT: "_X__XO__O",
        PLAY_O_BOTTOM_LEFT: "_X__X_O_O",
        PLAY_O_BOTTOM_CENTER: "_X__X__OO"
      }
    },
    _X___X__O: {
      on: {
        PLAY_O_TOP_LEFT: "OX___X__O",
        PLAY_O_TOP_RIGHT: "_XO__X__O",
        PLAY_O_MIDDLE_LEFT: "_X_O_X__O",
        PLAY_O_CENTER: "_X__OX__O",
        PLAY_O_BOTTOM_LEFT: "_X___XO_O",
        PLAY_O_BOTTOM_CENTER: "_X___X_OO"
      }
    },
    _X____X_O: {
      on: {
        PLAY_O_TOP_LEFT: "OX____X_O",
        PLAY_O_TOP_RIGHT: "_XO___X_O",
        PLAY_O_MIDDLE_LEFT: "_X_O__X_O",
        PLAY_O_CENTER: "_X__O_X_O",
        PLAY_O_MIDDLE_RIGHT: "_X___OX_O",
        PLAY_O_BOTTOM_CENTER: "_X____XOO"
      }
    },
    _X_____XO: {
      on: {
        PLAY_O_TOP_LEFT: "OX_____XO",
        PLAY_O_TOP_RIGHT: "_XO____XO",
        PLAY_O_MIDDLE_LEFT: "_X_O___XO",
        PLAY_O_CENTER: "_X__O__XO",
        PLAY_O_MIDDLE_RIGHT: "_X___O_XO",
        PLAY_O_BOTTOM_LEFT: "_X____OXO"
      }
    },
    _X______O: {
      on: {
        PLAY_X_TOP_LEFT: "XX______O",
        PLAY_X_TOP_RIGHT: "_XX_____O",
        PLAY_X_MIDDLE_LEFT: "_X_X____O",
        PLAY_X_CENTER: "_X__X___O",
        PLAY_X_MIDDLE_RIGHT: "_X___X__O",
        PLAY_X_BOTTOM_LEFT: "_X____X_O",
        PLAY_X_BOTTOM_CENTER: "_X_____XO"
      }
    },
    _X_______: {
      on: {
        PLAY_O_TOP_LEFT: "OX_______",
        PLAY_O_TOP_RIGHT: "_XO______",
        PLAY_O_MIDDLE_LEFT: "_X_O_____",
        PLAY_O_CENTER: "_X__O____",
        PLAY_O_MIDDLE_RIGHT: "_X___O___",
        PLAY_O_BOTTOM_LEFT: "_X____O__",
        PLAY_O_BOTTOM_CENTER: "_X_____O_",
        PLAY_O_BOTTOM_RIGHT: "_X______O"
      }
    },
    OOXXXOX__: { on: { "": "X_WINS" } },
    OOXXXOOXX: { on: { "": "DRAW" } },
    OOXXXOOX_: { on: { PLAY_X_BOTTOM_RIGHT: "OOXXXOOXX" } },
    OOXXXOXXO: { on: { "": "X_WINS" } },
    OOXXXO_XO: { on: { PLAY_X_BOTTOM_LEFT: "OOXXXOXXO" } },
    OOXXXO_X_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "OOXXXOOX_",
        PLAY_O_BOTTOM_RIGHT: "OOXXXO_XO"
      }
    },
    OOXXXOO_X: { on: { PLAY_X_BOTTOM_CENTER: "OOXXXOOXX" } },
    OOXXXOXOX: { on: { "": "X_WINS" } },
    OOXXXO_OX: { on: { PLAY_X_BOTTOM_LEFT: "OOXXXOXOX" } },
    OOXXXO__X: {
      on: {
        PLAY_O_BOTTOM_LEFT: "OOXXXOO_X",
        PLAY_O_BOTTOM_CENTER: "OOXXXO_OX"
      }
    },
    OOXXXO___: {
      on: {
        PLAY_X_BOTTOM_LEFT: "OOXXXOX__",
        PLAY_X_BOTTOM_CENTER: "OOXXXO_X_",
        PLAY_X_BOTTOM_RIGHT: "OOXXXO__X"
      }
    },
    OOXXXXO__: { on: { "": "X_WINS" } },
    OOXXXXOXO: { on: { "": "X_WINS" } },
    OOXXX_OXO: { on: { PLAY_X_MIDDLE_RIGHT: "OOXXXXOXO" } },
    OOXXX_OX_: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OOXXXOOX_",
        PLAY_O_BOTTOM_RIGHT: "OOXXX_OXO"
      }
    },
    OOXXXXOOX: { on: { "": "X_WINS" } },
    OOXXX_OOX: { on: { PLAY_X_MIDDLE_RIGHT: "OOXXXXOOX" } },
    OOXXX_O_X: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OOXXXOO_X",
        PLAY_O_BOTTOM_CENTER: "OOXXX_OOX"
      }
    },
    OOXXX_O__: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OOXXXXO__",
        PLAY_X_BOTTOM_CENTER: "OOXXX_OX_",
        PLAY_X_BOTTOM_RIGHT: "OOXXX_O_X"
      }
    },
    OOXXXX_O_: { on: { "": "X_WINS" } },
    OOXXX_XO_: { on: { "": "X_WINS" } },
    OOXXX__OX: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OOXXXO_OX",
        PLAY_O_BOTTOM_LEFT: "OOXXX_OOX"
      }
    },
    OOXXX__O_: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OOXXXX_O_",
        PLAY_X_BOTTOM_LEFT: "OOXXX_XO_",
        PLAY_X_BOTTOM_RIGHT: "OOXXX__OX"
      }
    },
    OOXXXX__O: { on: { "": "X_WINS" } },
    OOXXX_X_O: { on: { "": "X_WINS" } },
    OOXXX__XO: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OOXXXO_XO",
        PLAY_O_BOTTOM_LEFT: "OOXXX_OXO"
      }
    },
    OOXXX___O: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OOXXXX__O",
        PLAY_X_BOTTOM_LEFT: "OOXXX_X_O",
        PLAY_X_BOTTOM_CENTER: "OOXXX__XO"
      }
    },
    OOXXX____: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OOXXXO___",
        PLAY_O_BOTTOM_LEFT: "OOXXX_O__",
        PLAY_O_BOTTOM_CENTER: "OOXXX__O_",
        PLAY_O_BOTTOM_RIGHT: "OOXXX___O"
      }
    },
    OOXXOXXO_: { on: { "": "O_WINS" } },
    OOXXOXX_O: { on: { "": "O_WINS" } },
    OOXXOXX__: {
      on: {
        PLAY_O_BOTTOM_CENTER: "OOXXOXXO_",
        PLAY_O_BOTTOM_RIGHT: "OOXXOXX_O"
      }
    },
    OOXXOXOXX: { on: { "": "X_WINS" } },
    OOXXOXOX_: { on: { PLAY_X_BOTTOM_RIGHT: "OOXXOXOXX" } },
    OOXXOX_XO: { on: { "": "O_WINS" } },
    OOXXOX_X_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "OOXXOXOX_",
        PLAY_O_BOTTOM_RIGHT: "OOXXOX_XO"
      }
    },
    OOXXOX__X: { on: { "": "X_WINS" } },
    OOXXOX___: {
      on: {
        PLAY_X_BOTTOM_LEFT: "OOXXOXX__",
        PLAY_X_BOTTOM_CENTER: "OOXXOX_X_",
        PLAY_X_BOTTOM_RIGHT: "OOXXOX__X"
      }
    },
    OOXX_XOXO: { on: { PLAY_X_CENTER: "OOXXXXOXO" } },
    OOXX_XOX_: {
      on: { PLAY_O_CENTER: "OOXXOXOX_", PLAY_O_BOTTOM_RIGHT: "OOXX_XOXO" }
    },
    OOXX_XO_X: { on: { "": "X_WINS" } },
    OOXX_XO__: {
      on: {
        PLAY_X_CENTER: "OOXXXXO__",
        PLAY_X_BOTTOM_CENTER: "OOXX_XOX_",
        PLAY_X_BOTTOM_RIGHT: "OOXX_XO_X"
      }
    },
    OOXXXXXOO: { on: { "": "X_WINS" } },
    OOXX_XXOO: { on: { PLAY_X_CENTER: "OOXXXXXOO" } },
    OOXX_XXO_: {
      on: { PLAY_O_CENTER: "OOXXOXXO_", PLAY_O_BOTTOM_RIGHT: "OOXX_XXOO" }
    },
    OOXX_X_OX: { on: { "": "X_WINS" } },
    OOXX_X_O_: {
      on: {
        PLAY_X_CENTER: "OOXXXX_O_",
        PLAY_X_BOTTOM_LEFT: "OOXX_XXO_",
        PLAY_X_BOTTOM_RIGHT: "OOXX_X_OX"
      }
    },
    OOXX_XX_O: {
      on: { PLAY_O_CENTER: "OOXXOXX_O", PLAY_O_BOTTOM_CENTER: "OOXX_XXOO" }
    },
    OOXX_X_XO: {
      on: { PLAY_O_CENTER: "OOXXOX_XO", PLAY_O_BOTTOM_LEFT: "OOXX_XOXO" }
    },
    OOXX_X__O: {
      on: {
        PLAY_X_CENTER: "OOXXXX__O",
        PLAY_X_BOTTOM_LEFT: "OOXX_XX_O",
        PLAY_X_BOTTOM_CENTER: "OOXX_X_XO"
      }
    },
    OOXX_X___: {
      on: {
        PLAY_O_CENTER: "OOXXOX___",
        PLAY_O_BOTTOM_LEFT: "OOXX_XO__",
        PLAY_O_BOTTOM_CENTER: "OOXX_X_O_",
        PLAY_O_BOTTOM_RIGHT: "OOXX_X__O"
      }
    },
    OOXXOOXXX: { on: { "": "X_WINS" } },
    OOXXOOXX_: { on: { PLAY_X_BOTTOM_RIGHT: "OOXXOOXXX" } },
    OOXXO_XXO: { on: { "": "O_WINS" } },
    OOXXO_XX_: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OOXXOOXX_",
        PLAY_O_BOTTOM_RIGHT: "OOXXO_XXO"
      }
    },
    OOXXOOX_X: { on: { PLAY_X_BOTTOM_CENTER: "OOXXOOXXX" } },
    OOXXO_XOX: { on: { "": "O_WINS" } },
    OOXXO_X_X: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OOXXOOX_X",
        PLAY_O_BOTTOM_CENTER: "OOXXO_XOX"
      }
    },
    OOXXO_X__: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OOXXOXX__",
        PLAY_X_BOTTOM_CENTER: "OOXXO_XX_",
        PLAY_X_BOTTOM_RIGHT: "OOXXO_X_X"
      }
    },
    OOXX_OXXO: { on: { PLAY_X_CENTER: "OOXXXOXXO" } },
    OOXX_OXX_: {
      on: { PLAY_O_CENTER: "OOXXOOXX_", PLAY_O_BOTTOM_RIGHT: "OOXX_OXXO" }
    },
    OOXX_OXOX: { on: { PLAY_X_CENTER: "OOXXXOXOX" } },
    OOXX_OX_X: {
      on: { PLAY_O_CENTER: "OOXXOOX_X", PLAY_O_BOTTOM_CENTER: "OOXX_OXOX" }
    },
    OOXX_OX__: {
      on: {
        PLAY_X_CENTER: "OOXXXOX__",
        PLAY_X_BOTTOM_CENTER: "OOXX_OXX_",
        PLAY_X_BOTTOM_RIGHT: "OOXX_OX_X"
      }
    },
    OOXX__XOX: {
      on: { PLAY_O_CENTER: "OOXXO_XOX", PLAY_O_MIDDLE_RIGHT: "OOXX_OXOX" }
    },
    OOXX__XO_: {
      on: {
        PLAY_X_CENTER: "OOXXX_XO_",
        PLAY_X_MIDDLE_RIGHT: "OOXX_XXO_",
        PLAY_X_BOTTOM_RIGHT: "OOXX__XOX"
      }
    },
    OOXX__XXO: {
      on: { PLAY_O_CENTER: "OOXXO_XXO", PLAY_O_MIDDLE_RIGHT: "OOXX_OXXO" }
    },
    OOXX__X_O: {
      on: {
        PLAY_X_CENTER: "OOXXX_X_O",
        PLAY_X_MIDDLE_RIGHT: "OOXX_XX_O",
        PLAY_X_BOTTOM_CENTER: "OOXX__XXO"
      }
    },
    OOXX__X__: {
      on: {
        PLAY_O_CENTER: "OOXXO_X__",
        PLAY_O_MIDDLE_RIGHT: "OOXX_OX__",
        PLAY_O_BOTTOM_CENTER: "OOXX__XO_",
        PLAY_O_BOTTOM_RIGHT: "OOXX__X_O"
      }
    },
    OOXXOO_XX: { on: { PLAY_X_BOTTOM_LEFT: "OOXXOOXXX" } },
    OOXXO_OXX: { on: { PLAY_X_MIDDLE_RIGHT: "OOXXOXOXX" } },
    OOXXO__XX: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OOXXOO_XX",
        PLAY_O_BOTTOM_LEFT: "OOXXO_OXX"
      }
    },
    OOXXO__X_: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OOXXOX_X_",
        PLAY_X_BOTTOM_LEFT: "OOXXO_XX_",
        PLAY_X_BOTTOM_RIGHT: "OOXXO__XX"
      }
    },
    OOXX_OOXX: { on: { PLAY_X_CENTER: "OOXXXOOXX" } },
    OOXX_O_XX: {
      on: { PLAY_O_CENTER: "OOXXOO_XX", PLAY_O_BOTTOM_LEFT: "OOXX_OOXX" }
    },
    OOXX_O_X_: {
      on: {
        PLAY_X_CENTER: "OOXXXO_X_",
        PLAY_X_BOTTOM_LEFT: "OOXX_OXX_",
        PLAY_X_BOTTOM_RIGHT: "OOXX_O_XX"
      }
    },
    OOXX__OXX: {
      on: { PLAY_O_CENTER: "OOXXO_OXX", PLAY_O_MIDDLE_RIGHT: "OOXX_OOXX" }
    },
    OOXX__OX_: {
      on: {
        PLAY_X_CENTER: "OOXXX_OX_",
        PLAY_X_MIDDLE_RIGHT: "OOXX_XOX_",
        PLAY_X_BOTTOM_RIGHT: "OOXX__OXX"
      }
    },
    OOXX___XO: {
      on: {
        PLAY_X_CENTER: "OOXXX__XO",
        PLAY_X_MIDDLE_RIGHT: "OOXX_X_XO",
        PLAY_X_BOTTOM_LEFT: "OOXX__XXO"
      }
    },
    OOXX___X_: {
      on: {
        PLAY_O_CENTER: "OOXXO__X_",
        PLAY_O_MIDDLE_RIGHT: "OOXX_O_X_",
        PLAY_O_BOTTOM_LEFT: "OOXX__OX_",
        PLAY_O_BOTTOM_RIGHT: "OOXX___XO"
      }
    },
    OOXXO___X: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OOXXOX__X",
        PLAY_X_BOTTOM_LEFT: "OOXXO_X_X",
        PLAY_X_BOTTOM_CENTER: "OOXXO__XX"
      }
    },
    OOXX_O__X: {
      on: {
        PLAY_X_CENTER: "OOXXXO__X",
        PLAY_X_BOTTOM_LEFT: "OOXX_OX_X",
        PLAY_X_BOTTOM_CENTER: "OOXX_O_XX"
      }
    },
    OOXX__O_X: {
      on: {
        PLAY_X_CENTER: "OOXXX_O_X",
        PLAY_X_MIDDLE_RIGHT: "OOXX_XO_X",
        PLAY_X_BOTTOM_CENTER: "OOXX__OXX"
      }
    },
    OOXX___OX: {
      on: {
        PLAY_X_CENTER: "OOXXX__OX",
        PLAY_X_MIDDLE_RIGHT: "OOXX_X_OX",
        PLAY_X_BOTTOM_LEFT: "OOXX__XOX"
      }
    },
    OOXX____X: {
      on: {
        PLAY_O_CENTER: "OOXXO___X",
        PLAY_O_MIDDLE_RIGHT: "OOXX_O__X",
        PLAY_O_BOTTOM_LEFT: "OOXX__O_X",
        PLAY_O_BOTTOM_CENTER: "OOXX___OX"
      }
    },
    OOXX_____: {
      on: {
        PLAY_X_CENTER: "OOXXX____",
        PLAY_X_MIDDLE_RIGHT: "OOXX_X___",
        PLAY_X_BOTTOM_LEFT: "OOXX__X__",
        PLAY_X_BOTTOM_CENTER: "OOXX___X_",
        PLAY_X_BOTTOM_RIGHT: "OOXX____X"
      }
    },
    O_XXOXOXO: { on: { "": "O_WINS" } },
    O_XXOXOX_: {
      on: { PLAY_O_TOP_CENTER: "OOXXOXOX_", PLAY_O_BOTTOM_RIGHT: "O_XXOXOXO" }
    },
    O_XXOXO_X: { on: { "": "X_WINS" } },
    O_XXOXO__: {
      on: {
        PLAY_X_TOP_CENTER: "OXXXOXO__",
        PLAY_X_BOTTOM_CENTER: "O_XXOXOX_",
        PLAY_X_BOTTOM_RIGHT: "O_XXOXO_X"
      }
    },
    O_XXOXXOO: { on: { "": "O_WINS" } },
    O_XXOXXO_: {
      on: { PLAY_O_TOP_CENTER: "OOXXOXXO_", PLAY_O_BOTTOM_RIGHT: "O_XXOXXOO" }
    },
    O_XXOX_OX: { on: { "": "X_WINS" } },
    O_XXOX_O_: {
      on: {
        PLAY_X_TOP_CENTER: "OXXXOX_O_",
        PLAY_X_BOTTOM_LEFT: "O_XXOXXO_",
        PLAY_X_BOTTOM_RIGHT: "O_XXOX_OX"
      }
    },
    O_XXOX__O: { on: { "": "O_WINS" } },
    O_XXOX___: {
      on: {
        PLAY_O_TOP_CENTER: "OOXXOX___",
        PLAY_O_BOTTOM_LEFT: "O_XXOXO__",
        PLAY_O_BOTTOM_CENTER: "O_XXOX_O_",
        PLAY_O_BOTTOM_RIGHT: "O_XXOX__O"
      }
    },
    O_XXOOXXO: { on: { "": "O_WINS" } },
    O_XXOOXX_: {
      on: { PLAY_O_TOP_CENTER: "OOXXOOXX_", PLAY_O_BOTTOM_RIGHT: "O_XXOOXXO" }
    },
    O_XXOOXOX: { on: { PLAY_X_TOP_CENTER: "OXXXOOXOX" } },
    O_XXOOX_X: {
      on: {
        PLAY_O_TOP_CENTER: "OOXXOOX_X",
        PLAY_O_BOTTOM_CENTER: "O_XXOOXOX"
      }
    },
    O_XXOOX__: {
      on: {
        PLAY_X_TOP_CENTER: "OXXXOOX__",
        PLAY_X_BOTTOM_CENTER: "O_XXOOXX_",
        PLAY_X_BOTTOM_RIGHT: "O_XXOOX_X"
      }
    },
    O_XXO_XOX: {
      on: { PLAY_O_TOP_CENTER: "OOXXO_XOX", PLAY_O_MIDDLE_RIGHT: "O_XXOOXOX" }
    },
    O_XXO_XO_: {
      on: {
        PLAY_X_TOP_CENTER: "OXXXO_XO_",
        PLAY_X_MIDDLE_RIGHT: "O_XXOXXO_",
        PLAY_X_BOTTOM_RIGHT: "O_XXO_XOX"
      }
    },
    O_XXO_X_O: { on: { "": "O_WINS" } },
    O_XXO_X__: {
      on: {
        PLAY_O_TOP_CENTER: "OOXXO_X__",
        PLAY_O_MIDDLE_RIGHT: "O_XXOOX__",
        PLAY_O_BOTTOM_CENTER: "O_XXO_XO_",
        PLAY_O_BOTTOM_RIGHT: "O_XXO_X_O"
      }
    },
    O_XXOOOXX: { on: { PLAY_X_TOP_CENTER: "OXXXOOOXX" } },
    O_XXOO_XX: {
      on: { PLAY_O_TOP_CENTER: "OOXXOO_XX", PLAY_O_BOTTOM_LEFT: "O_XXOOOXX" }
    },
    O_XXOO_X_: {
      on: {
        PLAY_X_TOP_CENTER: "OXXXOO_X_",
        PLAY_X_BOTTOM_LEFT: "O_XXOOXX_",
        PLAY_X_BOTTOM_RIGHT: "O_XXOO_XX"
      }
    },
    O_XXO_OXX: {
      on: { PLAY_O_TOP_CENTER: "OOXXO_OXX", PLAY_O_MIDDLE_RIGHT: "O_XXOOOXX" }
    },
    O_XXO_OX_: {
      on: {
        PLAY_X_TOP_CENTER: "OXXXO_OX_",
        PLAY_X_MIDDLE_RIGHT: "O_XXOXOX_",
        PLAY_X_BOTTOM_RIGHT: "O_XXO_OXX"
      }
    },
    O_XXO__XO: { on: { "": "O_WINS" } },
    O_XXO__X_: {
      on: {
        PLAY_O_TOP_CENTER: "OOXXO__X_",
        PLAY_O_MIDDLE_RIGHT: "O_XXOO_X_",
        PLAY_O_BOTTOM_LEFT: "O_XXO_OX_",
        PLAY_O_BOTTOM_RIGHT: "O_XXO__XO"
      }
    },
    O_XXOO__X: {
      on: {
        PLAY_X_TOP_CENTER: "OXXXOO__X",
        PLAY_X_BOTTOM_LEFT: "O_XXOOX_X",
        PLAY_X_BOTTOM_CENTER: "O_XXOO_XX"
      }
    },
    O_XXO_O_X: {
      on: {
        PLAY_X_TOP_CENTER: "OXXXO_O_X",
        PLAY_X_MIDDLE_RIGHT: "O_XXOXO_X",
        PLAY_X_BOTTOM_CENTER: "O_XXO_OXX"
      }
    },
    O_XXO__OX: {
      on: {
        PLAY_X_TOP_CENTER: "OXXXO__OX",
        PLAY_X_MIDDLE_RIGHT: "O_XXOX_OX",
        PLAY_X_BOTTOM_LEFT: "O_XXO_XOX"
      }
    },
    O_XXO___X: {
      on: {
        PLAY_O_TOP_CENTER: "OOXXO___X",
        PLAY_O_MIDDLE_RIGHT: "O_XXOO__X",
        PLAY_O_BOTTOM_LEFT: "O_XXO_O_X",
        PLAY_O_BOTTOM_CENTER: "O_XXO__OX"
      }
    },
    O_XXO____: {
      on: {
        PLAY_X_TOP_CENTER: "OXXXO____",
        PLAY_X_MIDDLE_RIGHT: "O_XXOX___",
        PLAY_X_BOTTOM_LEFT: "O_XXO_X__",
        PLAY_X_BOTTOM_CENTER: "O_XXO__X_",
        PLAY_X_BOTTOM_RIGHT: "O_XXO___X"
      }
    },
    O_XXXOOXO: { on: { PLAY_X_TOP_CENTER: "OXXXXOOXO" } },
    O_XXXOOX_: {
      on: { PLAY_O_TOP_CENTER: "OOXXXOOX_", PLAY_O_BOTTOM_RIGHT: "O_XXXOOXO" }
    },
    O_XXXOOOX: { on: { PLAY_X_TOP_CENTER: "OXXXXOOOX" } },
    O_XXXOO_X: {
      on: {
        PLAY_O_TOP_CENTER: "OOXXXOO_X",
        PLAY_O_BOTTOM_CENTER: "O_XXXOOOX"
      }
    },
    O_XXXOO__: {
      on: {
        PLAY_X_TOP_CENTER: "OXXXXOO__",
        PLAY_X_BOTTOM_CENTER: "O_XXXOOX_",
        PLAY_X_BOTTOM_RIGHT: "O_XXXOO_X"
      }
    },
    O_XXXOXO_: { on: { "": "X_WINS" } },
    O_XXXO_OX: {
      on: { PLAY_O_TOP_CENTER: "OOXXXO_OX", PLAY_O_BOTTOM_LEFT: "O_XXXOOOX" }
    },
    O_XXXO_O_: {
      on: {
        PLAY_X_TOP_CENTER: "OXXXXO_O_",
        PLAY_X_BOTTOM_LEFT: "O_XXXOXO_",
        PLAY_X_BOTTOM_RIGHT: "O_XXXO_OX"
      }
    },
    O_XXXOX_O: { on: { "": "X_WINS" } },
    O_XXXO_XO: {
      on: { PLAY_O_TOP_CENTER: "OOXXXO_XO", PLAY_O_BOTTOM_LEFT: "O_XXXOOXO" }
    },
    O_XXXO__O: {
      on: {
        PLAY_X_TOP_CENTER: "OXXXXO__O",
        PLAY_X_BOTTOM_LEFT: "O_XXXOX_O",
        PLAY_X_BOTTOM_CENTER: "O_XXXO_XO"
      }
    },
    O_XXXO___: {
      on: {
        PLAY_O_TOP_CENTER: "OOXXXO___",
        PLAY_O_BOTTOM_LEFT: "O_XXXOO__",
        PLAY_O_BOTTOM_CENTER: "O_XXXO_O_",
        PLAY_O_BOTTOM_RIGHT: "O_XXXO__O"
      }
    },
    O_XX_OXOX: {
      on: { PLAY_O_TOP_CENTER: "OOXX_OXOX", PLAY_O_CENTER: "O_XXOOXOX" }
    },
    O_XX_OXO_: {
      on: {
        PLAY_X_TOP_CENTER: "OXXX_OXO_",
        PLAY_X_CENTER: "O_XXXOXO_",
        PLAY_X_BOTTOM_RIGHT: "O_XX_OXOX"
      }
    },
    O_XX_OXXO: {
      on: { PLAY_O_TOP_CENTER: "OOXX_OXXO", PLAY_O_CENTER: "O_XXOOXXO" }
    },
    O_XX_OX_O: {
      on: {
        PLAY_X_TOP_CENTER: "OXXX_OX_O",
        PLAY_X_CENTER: "O_XXXOX_O",
        PLAY_X_BOTTOM_CENTER: "O_XX_OXXO"
      }
    },
    O_XX_OX__: {
      on: {
        PLAY_O_TOP_CENTER: "OOXX_OX__",
        PLAY_O_CENTER: "O_XXOOX__",
        PLAY_O_BOTTOM_CENTER: "O_XX_OXO_",
        PLAY_O_BOTTOM_RIGHT: "O_XX_OX_O"
      }
    },
    O_XX_OOXX: {
      on: { PLAY_O_TOP_CENTER: "OOXX_OOXX", PLAY_O_CENTER: "O_XXOOOXX" }
    },
    O_XX_OOX_: {
      on: {
        PLAY_X_TOP_CENTER: "OXXX_OOX_",
        PLAY_X_CENTER: "O_XXXOOX_",
        PLAY_X_BOTTOM_RIGHT: "O_XX_OOXX"
      }
    },
    O_XX_O_XO: {
      on: {
        PLAY_X_TOP_CENTER: "OXXX_O_XO",
        PLAY_X_CENTER: "O_XXXO_XO",
        PLAY_X_BOTTOM_LEFT: "O_XX_OXXO"
      }
    },
    O_XX_O_X_: {
      on: {
        PLAY_O_TOP_CENTER: "OOXX_O_X_",
        PLAY_O_CENTER: "O_XXOO_X_",
        PLAY_O_BOTTOM_LEFT: "O_XX_OOX_",
        PLAY_O_BOTTOM_RIGHT: "O_XX_O_XO"
      }
    },
    O_XX_OO_X: {
      on: {
        PLAY_X_TOP_CENTER: "OXXX_OO_X",
        PLAY_X_CENTER: "O_XXXOO_X",
        PLAY_X_BOTTOM_CENTER: "O_XX_OOXX"
      }
    },
    O_XX_O_OX: {
      on: {
        PLAY_X_TOP_CENTER: "OXXX_O_OX",
        PLAY_X_CENTER: "O_XXXO_OX",
        PLAY_X_BOTTOM_LEFT: "O_XX_OXOX"
      }
    },
    O_XX_O__X: {
      on: {
        PLAY_O_TOP_CENTER: "OOXX_O__X",
        PLAY_O_CENTER: "O_XXOO__X",
        PLAY_O_BOTTOM_LEFT: "O_XX_OO_X",
        PLAY_O_BOTTOM_CENTER: "O_XX_O_OX"
      }
    },
    O_XX_O___: {
      on: {
        PLAY_X_TOP_CENTER: "OXXX_O___",
        PLAY_X_CENTER: "O_XXXO___",
        PLAY_X_BOTTOM_LEFT: "O_XX_OX__",
        PLAY_X_BOTTOM_CENTER: "O_XX_O_X_",
        PLAY_X_BOTTOM_RIGHT: "O_XX_O__X"
      }
    },
    O_XXXXOO_: { on: { "": "X_WINS" } },
    O_XXX_OOX: {
      on: { PLAY_O_TOP_CENTER: "OOXXX_OOX", PLAY_O_MIDDLE_RIGHT: "O_XXXOOOX" }
    },
    O_XXX_OO_: {
      on: {
        PLAY_X_TOP_CENTER: "OXXXX_OO_",
        PLAY_X_MIDDLE_RIGHT: "O_XXXXOO_",
        PLAY_X_BOTTOM_RIGHT: "O_XXX_OOX"
      }
    },
    O_XXXXO_O: { on: { "": "X_WINS" } },
    O_XXX_OXO: {
      on: { PLAY_O_TOP_CENTER: "OOXXX_OXO", PLAY_O_MIDDLE_RIGHT: "O_XXXOOXO" }
    },
    O_XXX_O_O: {
      on: {
        PLAY_X_TOP_CENTER: "OXXXX_O_O",
        PLAY_X_MIDDLE_RIGHT: "O_XXXXO_O",
        PLAY_X_BOTTOM_CENTER: "O_XXX_OXO"
      }
    },
    O_XXX_O__: {
      on: {
        PLAY_O_TOP_CENTER: "OOXXX_O__",
        PLAY_O_MIDDLE_RIGHT: "O_XXXOO__",
        PLAY_O_BOTTOM_CENTER: "O_XXX_OO_",
        PLAY_O_BOTTOM_RIGHT: "O_XXX_O_O"
      }
    },
    O_XX_XOOX: { on: { "": "X_WINS" } },
    O_XX_XOO_: {
      on: {
        PLAY_X_TOP_CENTER: "OXXX_XOO_",
        PLAY_X_CENTER: "O_XXXXOO_",
        PLAY_X_BOTTOM_RIGHT: "O_XX_XOOX"
      }
    },
    O_XX_XOXO: {
      on: { PLAY_O_TOP_CENTER: "OOXX_XOXO", PLAY_O_CENTER: "O_XXOXOXO" }
    },
    O_XX_XO_O: {
      on: {
        PLAY_X_TOP_CENTER: "OXXX_XO_O",
        PLAY_X_CENTER: "O_XXXXO_O",
        PLAY_X_BOTTOM_CENTER: "O_XX_XOXO"
      }
    },
    O_XX_XO__: {
      on: {
        PLAY_O_TOP_CENTER: "OOXX_XO__",
        PLAY_O_CENTER: "O_XXOXO__",
        PLAY_O_BOTTOM_CENTER: "O_XX_XOO_",
        PLAY_O_BOTTOM_RIGHT: "O_XX_XO_O"
      }
    },
    O_XX__OXO: {
      on: {
        PLAY_X_TOP_CENTER: "OXXX__OXO",
        PLAY_X_CENTER: "O_XXX_OXO",
        PLAY_X_MIDDLE_RIGHT: "O_XX_XOXO"
      }
    },
    O_XX__OX_: {
      on: {
        PLAY_O_TOP_CENTER: "OOXX__OX_",
        PLAY_O_CENTER: "O_XXO_OX_",
        PLAY_O_MIDDLE_RIGHT: "O_XX_OOX_",
        PLAY_O_BOTTOM_RIGHT: "O_XX__OXO"
      }
    },
    O_XX__OOX: {
      on: {
        PLAY_X_TOP_CENTER: "OXXX__OOX",
        PLAY_X_CENTER: "O_XXX_OOX",
        PLAY_X_MIDDLE_RIGHT: "O_XX_XOOX"
      }
    },
    O_XX__O_X: {
      on: {
        PLAY_O_TOP_CENTER: "OOXX__O_X",
        PLAY_O_CENTER: "O_XXO_O_X",
        PLAY_O_MIDDLE_RIGHT: "O_XX_OO_X",
        PLAY_O_BOTTOM_CENTER: "O_XX__OOX"
      }
    },
    O_XX__O__: {
      on: {
        PLAY_X_TOP_CENTER: "OXXX__O__",
        PLAY_X_CENTER: "O_XXX_O__",
        PLAY_X_MIDDLE_RIGHT: "O_XX_XO__",
        PLAY_X_BOTTOM_CENTER: "O_XX__OX_",
        PLAY_X_BOTTOM_RIGHT: "O_XX__O_X"
      }
    },
    O_XXXX_OO: { on: { "": "X_WINS" } },
    O_XXX_XOO: { on: { "": "X_WINS" } },
    O_XXX__OO: {
      on: {
        PLAY_X_TOP_CENTER: "OXXXX__OO",
        PLAY_X_MIDDLE_RIGHT: "O_XXXX_OO",
        PLAY_X_BOTTOM_LEFT: "O_XXX_XOO"
      }
    },
    O_XXX__O_: {
      on: {
        PLAY_O_TOP_CENTER: "OOXXX__O_",
        PLAY_O_MIDDLE_RIGHT: "O_XXXO_O_",
        PLAY_O_BOTTOM_LEFT: "O_XXX_OO_",
        PLAY_O_BOTTOM_RIGHT: "O_XXX__OO"
      }
    },
    O_XX_XXOO: {
      on: { PLAY_O_TOP_CENTER: "OOXX_XXOO", PLAY_O_CENTER: "O_XXOXXOO" }
    },
    O_XX_X_OO: {
      on: {
        PLAY_X_TOP_CENTER: "OXXX_X_OO",
        PLAY_X_CENTER: "O_XXXX_OO",
        PLAY_X_BOTTOM_LEFT: "O_XX_XXOO"
      }
    },
    O_XX_X_O_: {
      on: {
        PLAY_O_TOP_CENTER: "OOXX_X_O_",
        PLAY_O_CENTER: "O_XXOX_O_",
        PLAY_O_BOTTOM_LEFT: "O_XX_XOO_",
        PLAY_O_BOTTOM_RIGHT: "O_XX_X_OO"
      }
    },
    O_XX__XOO: {
      on: {
        PLAY_X_TOP_CENTER: "OXXX__XOO",
        PLAY_X_CENTER: "O_XXX_XOO",
        PLAY_X_MIDDLE_RIGHT: "O_XX_XXOO"
      }
    },
    O_XX__XO_: {
      on: {
        PLAY_O_TOP_CENTER: "OOXX__XO_",
        PLAY_O_CENTER: "O_XXO_XO_",
        PLAY_O_MIDDLE_RIGHT: "O_XX_OXO_",
        PLAY_O_BOTTOM_RIGHT: "O_XX__XOO"
      }
    },
    O_XX___OX: {
      on: {
        PLAY_O_TOP_CENTER: "OOXX___OX",
        PLAY_O_CENTER: "O_XXO__OX",
        PLAY_O_MIDDLE_RIGHT: "O_XX_O_OX",
        PLAY_O_BOTTOM_LEFT: "O_XX__OOX"
      }
    },
    O_XX___O_: {
      on: {
        PLAY_X_TOP_CENTER: "OXXX___O_",
        PLAY_X_CENTER: "O_XXX__O_",
        PLAY_X_MIDDLE_RIGHT: "O_XX_X_O_",
        PLAY_X_BOTTOM_LEFT: "O_XX__XO_",
        PLAY_X_BOTTOM_RIGHT: "O_XX___OX"
      }
    },
    O_XXX___O: {
      on: {
        PLAY_O_TOP_CENTER: "OOXXX___O",
        PLAY_O_MIDDLE_RIGHT: "O_XXXO__O",
        PLAY_O_BOTTOM_LEFT: "O_XXX_O_O",
        PLAY_O_BOTTOM_CENTER: "O_XXX__OO"
      }
    },
    O_XX_X__O: {
      on: {
        PLAY_O_TOP_CENTER: "OOXX_X__O",
        PLAY_O_CENTER: "O_XXOX__O",
        PLAY_O_BOTTOM_LEFT: "O_XX_XO_O",
        PLAY_O_BOTTOM_CENTER: "O_XX_X_OO"
      }
    },
    O_XX__X_O: {
      on: {
        PLAY_O_TOP_CENTER: "OOXX__X_O",
        PLAY_O_CENTER: "O_XXO_X_O",
        PLAY_O_MIDDLE_RIGHT: "O_XX_OX_O",
        PLAY_O_BOTTOM_CENTER: "O_XX__XOO"
      }
    },
    O_XX___XO: {
      on: {
        PLAY_O_TOP_CENTER: "OOXX___XO",
        PLAY_O_CENTER: "O_XXO__XO",
        PLAY_O_MIDDLE_RIGHT: "O_XX_O_XO",
        PLAY_O_BOTTOM_LEFT: "O_XX__OXO"
      }
    },
    O_XX____O: {
      on: {
        PLAY_X_TOP_CENTER: "OXXX____O",
        PLAY_X_CENTER: "O_XXX___O",
        PLAY_X_MIDDLE_RIGHT: "O_XX_X__O",
        PLAY_X_BOTTOM_LEFT: "O_XX__X_O",
        PLAY_X_BOTTOM_CENTER: "O_XX___XO"
      }
    },
    O_XX_____: {
      on: {
        PLAY_O_TOP_CENTER: "OOXX_____",
        PLAY_O_CENTER: "O_XXO____",
        PLAY_O_MIDDLE_RIGHT: "O_XX_O___",
        PLAY_O_BOTTOM_LEFT: "O_XX__O__",
        PLAY_O_BOTTOM_CENTER: "O_XX___O_",
        PLAY_O_BOTTOM_RIGHT: "O_XX____O"
      }
    },
    OOXOXXX__: { on: { "": "X_WINS" } },
    OOXOXXOX_: { on: { "": "O_WINS" } },
    OOXOXXXXO: { on: { "": "X_WINS" } },
    OOXOXX_XO: { on: { PLAY_X_BOTTOM_LEFT: "OOXOXXXXO" } },
    OOXOXX_X_: {
      on: {
        PLAY_O_BOTTOM_LEFT: "OOXOXXOX_",
        PLAY_O_BOTTOM_RIGHT: "OOXOXX_XO"
      }
    },
    OOXOXX__X: { on: { "": "X_WINS" } },
    OOXOXX___: {
      on: {
        PLAY_X_BOTTOM_LEFT: "OOXOXXX__",
        PLAY_X_BOTTOM_CENTER: "OOXOXX_X_",
        PLAY_X_BOTTOM_RIGHT: "OOXOXX__X"
      }
    },
    OOX_XXOXO: { on: { PLAY_X_MIDDLE_LEFT: "OOXXXXOXO" } },
    OOX_XXOX_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OOXOXXOX_",
        PLAY_O_BOTTOM_RIGHT: "OOX_XXOXO"
      }
    },
    OOX_XXO_X: { on: { "": "X_WINS" } },
    OOX_XXO__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXXXXO__",
        PLAY_X_BOTTOM_CENTER: "OOX_XXOX_",
        PLAY_X_BOTTOM_RIGHT: "OOX_XXO_X"
      }
    },
    OOX_XXXO_: { on: { "": "X_WINS" } },
    OOX_XX_OX: { on: { "": "X_WINS" } },
    OOX_XX_O_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXXXX_O_",
        PLAY_X_BOTTOM_LEFT: "OOX_XXXO_",
        PLAY_X_BOTTOM_RIGHT: "OOX_XX_OX"
      }
    },
    OOX_XXX_O: { on: { "": "X_WINS" } },
    OOX_XX_XO: {
      on: { PLAY_O_MIDDLE_LEFT: "OOXOXX_XO", PLAY_O_BOTTOM_LEFT: "OOX_XXOXO" }
    },
    OOX_XX__O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXXXX__O",
        PLAY_X_BOTTOM_LEFT: "OOX_XXX_O",
        PLAY_X_BOTTOM_CENTER: "OOX_XX_XO"
      }
    },
    OOX_XX___: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OOXOXX___",
        PLAY_O_BOTTOM_LEFT: "OOX_XXO__",
        PLAY_O_BOTTOM_CENTER: "OOX_XX_O_",
        PLAY_O_BOTTOM_RIGHT: "OOX_XX__O"
      }
    },
    OOX_X_X__: { on: { "": "X_WINS" } },
    OOXOX_XX_: { on: { "": "X_WINS" } },
    OOXOXOXXX: { on: { "": "X_WINS" } },
    OOXOXO_XX: { on: { PLAY_X_BOTTOM_LEFT: "OOXOXOXXX" } },
    OOXOX_OXX: { on: { "": "O_WINS" } },
    OOXOX__XX: {
      on: {
        PLAY_O_MIDDLE_RIGHT: "OOXOXO_XX",
        PLAY_O_BOTTOM_LEFT: "OOXOX_OXX"
      }
    },
    OOXOX__X_: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OOXOXX_X_",
        PLAY_X_BOTTOM_LEFT: "OOXOX_XX_",
        PLAY_X_BOTTOM_RIGHT: "OOXOX__XX"
      }
    },
    OOX_XOXX_: { on: { "": "X_WINS" } },
    OOX_XOOXX: { on: { PLAY_X_MIDDLE_LEFT: "OOXXXOOXX" } },
    OOX_XO_XX: {
      on: { PLAY_O_MIDDLE_LEFT: "OOXOXO_XX", PLAY_O_BOTTOM_LEFT: "OOX_XOOXX" }
    },
    OOX_XO_X_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXXXO_X_",
        PLAY_X_BOTTOM_LEFT: "OOX_XOXX_",
        PLAY_X_BOTTOM_RIGHT: "OOX_XO_XX"
      }
    },
    OOX_X_OXX: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OOXOX_OXX",
        PLAY_O_MIDDLE_RIGHT: "OOX_XOOXX"
      }
    },
    OOX_X_OX_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXXX_OX_",
        PLAY_X_MIDDLE_RIGHT: "OOX_XXOX_",
        PLAY_X_BOTTOM_RIGHT: "OOX_X_OXX"
      }
    },
    OOX_X_XXO: { on: { "": "X_WINS" } },
    OOX_X__XO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXXX__XO",
        PLAY_X_MIDDLE_RIGHT: "OOX_XX_XO",
        PLAY_X_BOTTOM_LEFT: "OOX_X_XXO"
      }
    },
    OOX_X__X_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OOXOX__X_",
        PLAY_O_MIDDLE_RIGHT: "OOX_XO_X_",
        PLAY_O_BOTTOM_LEFT: "OOX_X_OX_",
        PLAY_O_BOTTOM_RIGHT: "OOX_X__XO"
      }
    },
    OOXOX_X_X: { on: { "": "X_WINS" } },
    OOXOX___X: {
      on: {
        PLAY_X_MIDDLE_RIGHT: "OOXOXX__X",
        PLAY_X_BOTTOM_LEFT: "OOXOX_X_X",
        PLAY_X_BOTTOM_CENTER: "OOXOX__XX"
      }
    },
    OOX_XOX_X: { on: { "": "X_WINS" } },
    OOX_XO__X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXXXO__X",
        PLAY_X_BOTTOM_LEFT: "OOX_XOX_X",
        PLAY_X_BOTTOM_CENTER: "OOX_XO_XX"
      }
    },
    OOX_X_O_X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXXX_O_X",
        PLAY_X_MIDDLE_RIGHT: "OOX_XXO_X",
        PLAY_X_BOTTOM_CENTER: "OOX_X_OXX"
      }
    },
    OOX_X_XOX: { on: { "": "X_WINS" } },
    OOX_X__OX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXXX__OX",
        PLAY_X_MIDDLE_RIGHT: "OOX_XX_OX",
        PLAY_X_BOTTOM_LEFT: "OOX_X_XOX"
      }
    },
    OOX_X___X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OOXOX___X",
        PLAY_O_MIDDLE_RIGHT: "OOX_XO__X",
        PLAY_O_BOTTOM_LEFT: "OOX_X_O_X",
        PLAY_O_BOTTOM_CENTER: "OOX_X__OX"
      }
    },
    OOX_X____: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXXX____",
        PLAY_X_MIDDLE_RIGHT: "OOX_XX___",
        PLAY_X_BOTTOM_LEFT: "OOX_X_X__",
        PLAY_X_BOTTOM_CENTER: "OOX_X__X_",
        PLAY_X_BOTTOM_RIGHT: "OOX_X___X"
      }
    },
    O_XOXXO__: { on: { "": "O_WINS" } },
    O_XOXXXO_: { on: { "": "X_WINS" } },
    O_XOXX_OX: { on: { "": "X_WINS" } },
    O_XOXX_O_: {
      on: {
        PLAY_X_TOP_CENTER: "OXXOXX_O_",
        PLAY_X_BOTTOM_LEFT: "O_XOXXXO_",
        PLAY_X_BOTTOM_RIGHT: "O_XOXX_OX"
      }
    },
    O_XOXXX_O: { on: { "": "X_WINS" } },
    O_XOXXOXO: { on: { "": "O_WINS" } },
    O_XOXX_XO: {
      on: { PLAY_O_TOP_CENTER: "OOXOXX_XO", PLAY_O_BOTTOM_LEFT: "O_XOXXOXO" }
    },
    O_XOXX__O: {
      on: {
        PLAY_X_TOP_CENTER: "OXXOXX__O",
        PLAY_X_BOTTOM_LEFT: "O_XOXXX_O",
        PLAY_X_BOTTOM_CENTER: "O_XOXX_XO"
      }
    },
    O_XOXX___: {
      on: {
        PLAY_O_TOP_CENTER: "OOXOXX___",
        PLAY_O_BOTTOM_LEFT: "O_XOXXO__",
        PLAY_O_BOTTOM_CENTER: "O_XOXX_O_",
        PLAY_O_BOTTOM_RIGHT: "O_XOXX__O"
      }
    },
    O_XOX_X__: { on: { "": "X_WINS" } },
    O_XOXOXX_: { on: { "": "X_WINS" } },
    O_XOXOOXX: { on: { "": "O_WINS" } },
    O_XOXO_XX: {
      on: { PLAY_O_TOP_CENTER: "OOXOXO_XX", PLAY_O_BOTTOM_LEFT: "O_XOXOOXX" }
    },
    O_XOXO_X_: {
      on: {
        PLAY_X_TOP_CENTER: "OXXOXO_X_",
        PLAY_X_BOTTOM_LEFT: "O_XOXOXX_",
        PLAY_X_BOTTOM_RIGHT: "O_XOXO_XX"
      }
    },
    O_XOX_OX_: { on: { "": "O_WINS" } },
    O_XOX_XXO: { on: { "": "X_WINS" } },
    O_XOX__XO: {
      on: {
        PLAY_X_TOP_CENTER: "OXXOX__XO",
        PLAY_X_MIDDLE_RIGHT: "O_XOXX_XO",
        PLAY_X_BOTTOM_LEFT: "O_XOX_XXO"
      }
    },
    O_XOX__X_: {
      on: {
        PLAY_O_TOP_CENTER: "OOXOX__X_",
        PLAY_O_MIDDLE_RIGHT: "O_XOXO_X_",
        PLAY_O_BOTTOM_LEFT: "O_XOX_OX_",
        PLAY_O_BOTTOM_RIGHT: "O_XOX__XO"
      }
    },
    O_XOXOX_X: { on: { "": "X_WINS" } },
    O_XOXO__X: {
      on: {
        PLAY_X_TOP_CENTER: "OXXOXO__X",
        PLAY_X_BOTTOM_LEFT: "O_XOXOX_X",
        PLAY_X_BOTTOM_CENTER: "O_XOXO_XX"
      }
    },
    O_XOX_O_X: { on: { "": "O_WINS" } },
    O_XOX_XOX: { on: { "": "X_WINS" } },
    O_XOX__OX: {
      on: {
        PLAY_X_TOP_CENTER: "OXXOX__OX",
        PLAY_X_MIDDLE_RIGHT: "O_XOXX_OX",
        PLAY_X_BOTTOM_LEFT: "O_XOX_XOX"
      }
    },
    O_XOX___X: {
      on: {
        PLAY_O_TOP_CENTER: "OOXOX___X",
        PLAY_O_MIDDLE_RIGHT: "O_XOXO__X",
        PLAY_O_BOTTOM_LEFT: "O_XOX_O_X",
        PLAY_O_BOTTOM_CENTER: "O_XOX__OX"
      }
    },
    O_XOX____: {
      on: {
        PLAY_X_TOP_CENTER: "OXXOX____",
        PLAY_X_MIDDLE_RIGHT: "O_XOXX___",
        PLAY_X_BOTTOM_LEFT: "O_XOX_X__",
        PLAY_X_BOTTOM_CENTER: "O_XOX__X_",
        PLAY_X_BOTTOM_RIGHT: "O_XOX___X"
      }
    },
    O_X_XOX__: { on: { "": "X_WINS" } },
    O_X_XOOXX: {
      on: { PLAY_O_TOP_CENTER: "OOX_XOOXX", PLAY_O_MIDDLE_LEFT: "O_XOXOOXX" }
    },
    O_X_XOOX_: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_XOOX_",
        PLAY_X_MIDDLE_LEFT: "O_XXXOOX_",
        PLAY_X_BOTTOM_RIGHT: "O_X_XOOXX"
      }
    },
    O_X_XOXXO: { on: { "": "X_WINS" } },
    O_X_XO_XO: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_XO_XO",
        PLAY_X_MIDDLE_LEFT: "O_XXXO_XO",
        PLAY_X_BOTTOM_LEFT: "O_X_XOXXO"
      }
    },
    O_X_XO_X_: {
      on: {
        PLAY_O_TOP_CENTER: "OOX_XO_X_",
        PLAY_O_MIDDLE_LEFT: "O_XOXO_X_",
        PLAY_O_BOTTOM_LEFT: "O_X_XOOX_",
        PLAY_O_BOTTOM_RIGHT: "O_X_XO_XO"
      }
    },
    O_X_XOO_X: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_XOO_X",
        PLAY_X_MIDDLE_LEFT: "O_XXXOO_X",
        PLAY_X_BOTTOM_CENTER: "O_X_XOOXX"
      }
    },
    O_X_XOXOX: { on: { "": "X_WINS" } },
    O_X_XO_OX: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_XO_OX",
        PLAY_X_MIDDLE_LEFT: "O_XXXO_OX",
        PLAY_X_BOTTOM_LEFT: "O_X_XOXOX"
      }
    },
    O_X_XO__X: {
      on: {
        PLAY_O_TOP_CENTER: "OOX_XO__X",
        PLAY_O_MIDDLE_LEFT: "O_XOXO__X",
        PLAY_O_BOTTOM_LEFT: "O_X_XOO_X",
        PLAY_O_BOTTOM_CENTER: "O_X_XO_OX"
      }
    },
    O_X_XO___: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_XO___",
        PLAY_X_MIDDLE_LEFT: "O_XXXO___",
        PLAY_X_BOTTOM_LEFT: "O_X_XOX__",
        PLAY_X_BOTTOM_CENTER: "O_X_XO_X_",
        PLAY_X_BOTTOM_RIGHT: "O_X_XO__X"
      }
    },
    O_X_XXOOX: { on: { "": "X_WINS" } },
    O_X_XXOO_: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_XXOO_",
        PLAY_X_MIDDLE_LEFT: "O_XXXXOO_",
        PLAY_X_BOTTOM_RIGHT: "O_X_XXOOX"
      }
    },
    O_X_XXOXO: {
      on: { PLAY_O_TOP_CENTER: "OOX_XXOXO", PLAY_O_MIDDLE_LEFT: "O_XOXXOXO" }
    },
    O_X_XXO_O: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_XXO_O",
        PLAY_X_MIDDLE_LEFT: "O_XXXXO_O",
        PLAY_X_BOTTOM_CENTER: "O_X_XXOXO"
      }
    },
    O_X_XXO__: {
      on: {
        PLAY_O_TOP_CENTER: "OOX_XXO__",
        PLAY_O_MIDDLE_LEFT: "O_XOXXO__",
        PLAY_O_BOTTOM_CENTER: "O_X_XXOO_",
        PLAY_O_BOTTOM_RIGHT: "O_X_XXO_O"
      }
    },
    O_X_X_OXO: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_X_OXO",
        PLAY_X_MIDDLE_LEFT: "O_XXX_OXO",
        PLAY_X_MIDDLE_RIGHT: "O_X_XXOXO"
      }
    },
    O_X_X_OX_: {
      on: {
        PLAY_O_TOP_CENTER: "OOX_X_OX_",
        PLAY_O_MIDDLE_LEFT: "O_XOX_OX_",
        PLAY_O_MIDDLE_RIGHT: "O_X_XOOX_",
        PLAY_O_BOTTOM_RIGHT: "O_X_X_OXO"
      }
    },
    O_X_X_OOX: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_X_OOX",
        PLAY_X_MIDDLE_LEFT: "O_XXX_OOX",
        PLAY_X_MIDDLE_RIGHT: "O_X_XXOOX"
      }
    },
    O_X_X_O_X: {
      on: {
        PLAY_O_TOP_CENTER: "OOX_X_O_X",
        PLAY_O_MIDDLE_LEFT: "O_XOX_O_X",
        PLAY_O_MIDDLE_RIGHT: "O_X_XOO_X",
        PLAY_O_BOTTOM_CENTER: "O_X_X_OOX"
      }
    },
    O_X_X_O__: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_X_O__",
        PLAY_X_MIDDLE_LEFT: "O_XXX_O__",
        PLAY_X_MIDDLE_RIGHT: "O_X_XXO__",
        PLAY_X_BOTTOM_CENTER: "O_X_X_OX_",
        PLAY_X_BOTTOM_RIGHT: "O_X_X_O_X"
      }
    },
    O_X_XXXOO: { on: { "": "X_WINS" } },
    O_X_XX_OO: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_XX_OO",
        PLAY_X_MIDDLE_LEFT: "O_XXXX_OO",
        PLAY_X_BOTTOM_LEFT: "O_X_XXXOO"
      }
    },
    O_X_XX_O_: {
      on: {
        PLAY_O_TOP_CENTER: "OOX_XX_O_",
        PLAY_O_MIDDLE_LEFT: "O_XOXX_O_",
        PLAY_O_BOTTOM_LEFT: "O_X_XXOO_",
        PLAY_O_BOTTOM_RIGHT: "O_X_XX_OO"
      }
    },
    O_X_X_XO_: { on: { "": "X_WINS" } },
    O_X_X__OX: {
      on: {
        PLAY_O_TOP_CENTER: "OOX_X__OX",
        PLAY_O_MIDDLE_LEFT: "O_XOX__OX",
        PLAY_O_MIDDLE_RIGHT: "O_X_XO_OX",
        PLAY_O_BOTTOM_LEFT: "O_X_X_OOX"
      }
    },
    O_X_X__O_: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_X__O_",
        PLAY_X_MIDDLE_LEFT: "O_XXX__O_",
        PLAY_X_MIDDLE_RIGHT: "O_X_XX_O_",
        PLAY_X_BOTTOM_LEFT: "O_X_X_XO_",
        PLAY_X_BOTTOM_RIGHT: "O_X_X__OX"
      }
    },
    O_X_XX__O: {
      on: {
        PLAY_O_TOP_CENTER: "OOX_XX__O",
        PLAY_O_MIDDLE_LEFT: "O_XOXX__O",
        PLAY_O_BOTTOM_LEFT: "O_X_XXO_O",
        PLAY_O_BOTTOM_CENTER: "O_X_XX_OO"
      }
    },
    O_X_X_X_O: { on: { "": "X_WINS" } },
    O_X_X__XO: {
      on: {
        PLAY_O_TOP_CENTER: "OOX_X__XO",
        PLAY_O_MIDDLE_LEFT: "O_XOX__XO",
        PLAY_O_MIDDLE_RIGHT: "O_X_XO_XO",
        PLAY_O_BOTTOM_LEFT: "O_X_X_OXO"
      }
    },
    O_X_X___O: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_X___O",
        PLAY_X_MIDDLE_LEFT: "O_XXX___O",
        PLAY_X_MIDDLE_RIGHT: "O_X_XX__O",
        PLAY_X_BOTTOM_LEFT: "O_X_X_X_O",
        PLAY_X_BOTTOM_CENTER: "O_X_X__XO"
      }
    },
    O_X_X____: {
      on: {
        PLAY_O_TOP_CENTER: "OOX_X____",
        PLAY_O_MIDDLE_LEFT: "O_XOX____",
        PLAY_O_MIDDLE_RIGHT: "O_X_XO___",
        PLAY_O_BOTTOM_LEFT: "O_X_X_O__",
        PLAY_O_BOTTOM_CENTER: "O_X_X__O_",
        PLAY_O_BOTTOM_RIGHT: "O_X_X___O"
      }
    },
    OOXOOXXXX: { on: { "": "X_WINS" } },
    OOXOOXXX_: { on: { PLAY_X_BOTTOM_RIGHT: "OOXOOXXXX" } },
    OOXO_XXXO: { on: { PLAY_X_CENTER: "OOXOXXXXO" } },
    OOXO_XXX_: {
      on: { PLAY_O_CENTER: "OOXOOXXX_", PLAY_O_BOTTOM_RIGHT: "OOXO_XXXO" }
    },
    OOXO_XX_X: { on: { "": "X_WINS" } },
    OOXO_XX__: {
      on: {
        PLAY_X_CENTER: "OOXOXXX__",
        PLAY_X_BOTTOM_CENTER: "OOXO_XXX_",
        PLAY_X_BOTTOM_RIGHT: "OOXO_XX_X"
      }
    },
    OOX_OXXXO: { on: { "": "O_WINS" } },
    OOX_OXXX_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OOXOOXXX_",
        PLAY_O_BOTTOM_RIGHT: "OOX_OXXXO"
      }
    },
    OOX_OXX_X: { on: { "": "X_WINS" } },
    OOX_OXX__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXXOXX__",
        PLAY_X_BOTTOM_CENTER: "OOX_OXXX_",
        PLAY_X_BOTTOM_RIGHT: "OOX_OXX_X"
      }
    },
    OOX__XXOX: { on: { "": "X_WINS" } },
    OOX__XXO_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXX_XXO_",
        PLAY_X_CENTER: "OOX_XXXO_",
        PLAY_X_BOTTOM_RIGHT: "OOX__XXOX"
      }
    },
    OOX__XXXO: {
      on: { PLAY_O_MIDDLE_LEFT: "OOXO_XXXO", PLAY_O_CENTER: "OOX_OXXXO" }
    },
    OOX__XX_O: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXX_XX_O",
        PLAY_X_CENTER: "OOX_XXX_O",
        PLAY_X_BOTTOM_CENTER: "OOX__XXXO"
      }
    },
    OOX__XX__: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OOXO_XX__",
        PLAY_O_CENTER: "OOX_OXX__",
        PLAY_O_BOTTOM_CENTER: "OOX__XXO_",
        PLAY_O_BOTTOM_RIGHT: "OOX__XX_O"
      }
    },
    OOXO_X_XX: { on: { "": "X_WINS" } },
    OOXO_X_X_: {
      on: {
        PLAY_X_CENTER: "OOXOXX_X_",
        PLAY_X_BOTTOM_LEFT: "OOXO_XXX_",
        PLAY_X_BOTTOM_RIGHT: "OOXO_X_XX"
      }
    },
    OOX_OX_XX: { on: { "": "X_WINS" } },
    OOX_OX_X_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXXOX_X_",
        PLAY_X_BOTTOM_LEFT: "OOX_OXXX_",
        PLAY_X_BOTTOM_RIGHT: "OOX_OX_XX"
      }
    },
    OOX__XOXX: { on: { "": "X_WINS" } },
    OOX__XOX_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXX_XOX_",
        PLAY_X_CENTER: "OOX_XXOX_",
        PLAY_X_BOTTOM_RIGHT: "OOX__XOXX"
      }
    },
    OOX__X_XO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXX_X_XO",
        PLAY_X_CENTER: "OOX_XX_XO",
        PLAY_X_BOTTOM_LEFT: "OOX__XXXO"
      }
    },
    OOX__X_X_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OOXO_X_X_",
        PLAY_O_CENTER: "OOX_OX_X_",
        PLAY_O_BOTTOM_LEFT: "OOX__XOX_",
        PLAY_O_BOTTOM_RIGHT: "OOX__X_XO"
      }
    },
    OOX__X__X: { on: { "": "X_WINS" } },
    OOX__X___: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXX_X___",
        PLAY_X_CENTER: "OOX_XX___",
        PLAY_X_BOTTOM_LEFT: "OOX__XX__",
        PLAY_X_BOTTOM_CENTER: "OOX__X_X_",
        PLAY_X_BOTTOM_RIGHT: "OOX__X__X"
      }
    },
    O_XOOXXXO: { on: { "": "O_WINS" } },
    O_XOOXXX_: {
      on: { PLAY_O_TOP_CENTER: "OOXOOXXX_", PLAY_O_BOTTOM_RIGHT: "O_XOOXXXO" }
    },
    O_XOOXX_X: { on: { "": "X_WINS" } },
    O_XOOXX__: {
      on: {
        PLAY_X_TOP_CENTER: "OXXOOXX__",
        PLAY_X_BOTTOM_CENTER: "O_XOOXXX_",
        PLAY_X_BOTTOM_RIGHT: "O_XOOXX_X"
      }
    },
    O_XO_XXOX: { on: { "": "X_WINS" } },
    O_XO_XXO_: {
      on: {
        PLAY_X_TOP_CENTER: "OXXO_XXO_",
        PLAY_X_CENTER: "O_XOXXXO_",
        PLAY_X_BOTTOM_RIGHT: "O_XO_XXOX"
      }
    },
    O_XO_XXXO: {
      on: { PLAY_O_TOP_CENTER: "OOXO_XXXO", PLAY_O_CENTER: "O_XOOXXXO" }
    },
    O_XO_XX_O: {
      on: {
        PLAY_X_TOP_CENTER: "OXXO_XX_O",
        PLAY_X_CENTER: "O_XOXXX_O",
        PLAY_X_BOTTOM_CENTER: "O_XO_XXXO"
      }
    },
    O_XO_XX__: {
      on: {
        PLAY_O_TOP_CENTER: "OOXO_XX__",
        PLAY_O_CENTER: "O_XOOXX__",
        PLAY_O_BOTTOM_CENTER: "O_XO_XXO_",
        PLAY_O_BOTTOM_RIGHT: "O_XO_XX_O"
      }
    },
    O_XOOX_XX: { on: { "": "X_WINS" } },
    O_XOOX_X_: {
      on: {
        PLAY_X_TOP_CENTER: "OXXOOX_X_",
        PLAY_X_BOTTOM_LEFT: "O_XOOXXX_",
        PLAY_X_BOTTOM_RIGHT: "O_XOOX_XX"
      }
    },
    O_XO_XOX_: { on: { "": "O_WINS" } },
    O_XO_X_XO: {
      on: {
        PLAY_X_TOP_CENTER: "OXXO_X_XO",
        PLAY_X_CENTER: "O_XOXX_XO",
        PLAY_X_BOTTOM_LEFT: "O_XO_XXXO"
      }
    },
    O_XO_X_X_: {
      on: {
        PLAY_O_TOP_CENTER: "OOXO_X_X_",
        PLAY_O_CENTER: "O_XOOX_X_",
        PLAY_O_BOTTOM_LEFT: "O_XO_XOX_",
        PLAY_O_BOTTOM_RIGHT: "O_XO_X_XO"
      }
    },
    O_XO_X__X: { on: { "": "X_WINS" } },
    O_XO_X___: {
      on: {
        PLAY_X_TOP_CENTER: "OXXO_X___",
        PLAY_X_CENTER: "O_XOXX___",
        PLAY_X_BOTTOM_LEFT: "O_XO_XX__",
        PLAY_X_BOTTOM_CENTER: "O_XO_X_X_",
        PLAY_X_BOTTOM_RIGHT: "O_XO_X__X"
      }
    },
    O_X_OXXOX: { on: { "": "X_WINS" } },
    O_X_OXXO_: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_OXXO_",
        PLAY_X_MIDDLE_LEFT: "O_XXOXXO_",
        PLAY_X_BOTTOM_RIGHT: "O_X_OXXOX"
      }
    },
    O_X_OXX_O: { on: { "": "O_WINS" } },
    O_X_OXX__: {
      on: {
        PLAY_O_TOP_CENTER: "OOX_OXX__",
        PLAY_O_MIDDLE_LEFT: "O_XOOXX__",
        PLAY_O_BOTTOM_CENTER: "O_X_OXXO_",
        PLAY_O_BOTTOM_RIGHT: "O_X_OXX_O"
      }
    },
    O_X_OXOXX: { on: { "": "X_WINS" } },
    O_X_OXOX_: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_OXOX_",
        PLAY_X_MIDDLE_LEFT: "O_XXOXOX_",
        PLAY_X_BOTTOM_RIGHT: "O_X_OXOXX"
      }
    },
    O_X_OX_XO: { on: { "": "O_WINS" } },
    O_X_OX_X_: {
      on: {
        PLAY_O_TOP_CENTER: "OOX_OX_X_",
        PLAY_O_MIDDLE_LEFT: "O_XOOX_X_",
        PLAY_O_BOTTOM_LEFT: "O_X_OXOX_",
        PLAY_O_BOTTOM_RIGHT: "O_X_OX_XO"
      }
    },
    O_X_OX__X: { on: { "": "X_WINS" } },
    O_X_OX___: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_OX___",
        PLAY_X_MIDDLE_LEFT: "O_XXOX___",
        PLAY_X_BOTTOM_LEFT: "O_X_OXX__",
        PLAY_X_BOTTOM_CENTER: "O_X_OX_X_",
        PLAY_X_BOTTOM_RIGHT: "O_X_OX__X"
      }
    },
    O_X__XOXO: {
      on: {
        PLAY_X_TOP_CENTER: "OXX__XOXO",
        PLAY_X_MIDDLE_LEFT: "O_XX_XOXO",
        PLAY_X_CENTER: "O_X_XXOXO"
      }
    },
    O_X__XOX_: {
      on: {
        PLAY_O_TOP_CENTER: "OOX__XOX_",
        PLAY_O_MIDDLE_LEFT: "O_XO_XOX_",
        PLAY_O_CENTER: "O_X_OXOX_",
        PLAY_O_BOTTOM_RIGHT: "O_X__XOXO"
      }
    },
    O_X__XO_X: { on: { "": "X_WINS" } },
    O_X__XO__: {
      on: {
        PLAY_X_TOP_CENTER: "OXX__XO__",
        PLAY_X_MIDDLE_LEFT: "O_XX_XO__",
        PLAY_X_CENTER: "O_X_XXO__",
        PLAY_X_BOTTOM_CENTER: "O_X__XOX_",
        PLAY_X_BOTTOM_RIGHT: "O_X__XO_X"
      }
    },
    O_X__XXOO: {
      on: {
        PLAY_X_TOP_CENTER: "OXX__XXOO",
        PLAY_X_MIDDLE_LEFT: "O_XX_XXOO",
        PLAY_X_CENTER: "O_X_XXXOO"
      }
    },
    O_X__XXO_: {
      on: {
        PLAY_O_TOP_CENTER: "OOX__XXO_",
        PLAY_O_MIDDLE_LEFT: "O_XO_XXO_",
        PLAY_O_CENTER: "O_X_OXXO_",
        PLAY_O_BOTTOM_RIGHT: "O_X__XXOO"
      }
    },
    O_X__X_OX: { on: { "": "X_WINS" } },
    O_X__X_O_: {
      on: {
        PLAY_X_TOP_CENTER: "OXX__X_O_",
        PLAY_X_MIDDLE_LEFT: "O_XX_X_O_",
        PLAY_X_CENTER: "O_X_XX_O_",
        PLAY_X_BOTTOM_LEFT: "O_X__XXO_",
        PLAY_X_BOTTOM_RIGHT: "O_X__X_OX"
      }
    },
    O_X__XX_O: {
      on: {
        PLAY_O_TOP_CENTER: "OOX__XX_O",
        PLAY_O_MIDDLE_LEFT: "O_XO_XX_O",
        PLAY_O_CENTER: "O_X_OXX_O",
        PLAY_O_BOTTOM_CENTER: "O_X__XXOO"
      }
    },
    O_X__X_XO: {
      on: {
        PLAY_O_TOP_CENTER: "OOX__X_XO",
        PLAY_O_MIDDLE_LEFT: "O_XO_X_XO",
        PLAY_O_CENTER: "O_X_OX_XO",
        PLAY_O_BOTTOM_LEFT: "O_X__XOXO"
      }
    },
    O_X__X__O: {
      on: {
        PLAY_X_TOP_CENTER: "OXX__X__O",
        PLAY_X_MIDDLE_LEFT: "O_XX_X__O",
        PLAY_X_CENTER: "O_X_XX__O",
        PLAY_X_BOTTOM_LEFT: "O_X__XX_O",
        PLAY_X_BOTTOM_CENTER: "O_X__X_XO"
      }
    },
    O_X__X___: {
      on: {
        PLAY_O_TOP_CENTER: "OOX__X___",
        PLAY_O_MIDDLE_LEFT: "O_XO_X___",
        PLAY_O_CENTER: "O_X_OX___",
        PLAY_O_BOTTOM_LEFT: "O_X__XO__",
        PLAY_O_BOTTOM_CENTER: "O_X__X_O_",
        PLAY_O_BOTTOM_RIGHT: "O_X__X__O"
      }
    },
    OOXO__XXX: { on: { "": "X_WINS" } },
    OOXO__XX_: {
      on: {
        PLAY_X_CENTER: "OOXOX_XX_",
        PLAY_X_MIDDLE_RIGHT: "OOXO_XXX_",
        PLAY_X_BOTTOM_RIGHT: "OOXO__XXX"
      }
    },
    OOX_O_XXX: { on: { "": "X_WINS" } },
    OOX_O_XX_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXXO_XX_",
        PLAY_X_MIDDLE_RIGHT: "OOX_OXXX_",
        PLAY_X_BOTTOM_RIGHT: "OOX_O_XXX"
      }
    },
    OOX__OXXX: { on: { "": "X_WINS" } },
    OOX__OXX_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXX_OXX_",
        PLAY_X_CENTER: "OOX_XOXX_",
        PLAY_X_BOTTOM_RIGHT: "OOX__OXXX"
      }
    },
    OOX___XXO: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXX__XXO",
        PLAY_X_CENTER: "OOX_X_XXO",
        PLAY_X_MIDDLE_RIGHT: "OOX__XXXO"
      }
    },
    OOX___XX_: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OOXO__XX_",
        PLAY_O_CENTER: "OOX_O_XX_",
        PLAY_O_MIDDLE_RIGHT: "OOX__OXX_",
        PLAY_O_BOTTOM_RIGHT: "OOX___XXO"
      }
    },
    OOXO__X_X: {
      on: {
        PLAY_X_CENTER: "OOXOX_X_X",
        PLAY_X_MIDDLE_RIGHT: "OOXO_XX_X",
        PLAY_X_BOTTOM_CENTER: "OOXO__XXX"
      }
    },
    OOX_O_X_X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXXO_X_X",
        PLAY_X_MIDDLE_RIGHT: "OOX_OXX_X",
        PLAY_X_BOTTOM_CENTER: "OOX_O_XXX"
      }
    },
    OOX__OX_X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXX_OX_X",
        PLAY_X_CENTER: "OOX_XOX_X",
        PLAY_X_BOTTOM_CENTER: "OOX__OXXX"
      }
    },
    OOX___XOX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXX__XOX",
        PLAY_X_CENTER: "OOX_X_XOX",
        PLAY_X_MIDDLE_RIGHT: "OOX__XXOX"
      }
    },
    OOX___X_X: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OOXO__X_X",
        PLAY_O_CENTER: "OOX_O_X_X",
        PLAY_O_MIDDLE_RIGHT: "OOX__OX_X",
        PLAY_O_BOTTOM_CENTER: "OOX___XOX"
      }
    },
    OOX___X__: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXX__X__",
        PLAY_X_CENTER: "OOX_X_X__",
        PLAY_X_MIDDLE_RIGHT: "OOX__XX__",
        PLAY_X_BOTTOM_CENTER: "OOX___XX_",
        PLAY_X_BOTTOM_RIGHT: "OOX___X_X"
      }
    },
    O_XOO_XXX: { on: { "": "X_WINS" } },
    O_XOO_XX_: {
      on: {
        PLAY_X_TOP_CENTER: "OXXOO_XX_",
        PLAY_X_MIDDLE_RIGHT: "O_XOOXXX_",
        PLAY_X_BOTTOM_RIGHT: "O_XOO_XXX"
      }
    },
    O_XO_OXXX: { on: { "": "X_WINS" } },
    O_XO_OXX_: {
      on: {
        PLAY_X_TOP_CENTER: "OXXO_OXX_",
        PLAY_X_CENTER: "O_XOXOXX_",
        PLAY_X_BOTTOM_RIGHT: "O_XO_OXXX"
      }
    },
    O_XO__XXO: {
      on: {
        PLAY_X_TOP_CENTER: "OXXO__XXO",
        PLAY_X_CENTER: "O_XOX_XXO",
        PLAY_X_MIDDLE_RIGHT: "O_XO_XXXO"
      }
    },
    O_XO__XX_: {
      on: {
        PLAY_O_TOP_CENTER: "OOXO__XX_",
        PLAY_O_CENTER: "O_XOO_XX_",
        PLAY_O_MIDDLE_RIGHT: "O_XO_OXX_",
        PLAY_O_BOTTOM_RIGHT: "O_XO__XXO"
      }
    },
    O_XOO_X_X: {
      on: {
        PLAY_X_TOP_CENTER: "OXXOO_X_X",
        PLAY_X_MIDDLE_RIGHT: "O_XOOXX_X",
        PLAY_X_BOTTOM_CENTER: "O_XOO_XXX"
      }
    },
    O_XO_OX_X: {
      on: {
        PLAY_X_TOP_CENTER: "OXXO_OX_X",
        PLAY_X_CENTER: "O_XOXOX_X",
        PLAY_X_BOTTOM_CENTER: "O_XO_OXXX"
      }
    },
    O_XO__XOX: {
      on: {
        PLAY_X_TOP_CENTER: "OXXO__XOX",
        PLAY_X_CENTER: "O_XOX_XOX",
        PLAY_X_MIDDLE_RIGHT: "O_XO_XXOX"
      }
    },
    O_XO__X_X: {
      on: {
        PLAY_O_TOP_CENTER: "OOXO__X_X",
        PLAY_O_CENTER: "O_XOO_X_X",
        PLAY_O_MIDDLE_RIGHT: "O_XO_OX_X",
        PLAY_O_BOTTOM_CENTER: "O_XO__XOX"
      }
    },
    O_XO__X__: {
      on: {
        PLAY_X_TOP_CENTER: "OXXO__X__",
        PLAY_X_CENTER: "O_XOX_X__",
        PLAY_X_MIDDLE_RIGHT: "O_XO_XX__",
        PLAY_X_BOTTOM_CENTER: "O_XO__XX_",
        PLAY_X_BOTTOM_RIGHT: "O_XO__X_X"
      }
    },
    O_X_OOXXX: { on: { "": "X_WINS" } },
    O_X_OOXX_: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_OOXX_",
        PLAY_X_MIDDLE_LEFT: "O_XXOOXX_",
        PLAY_X_BOTTOM_RIGHT: "O_X_OOXXX"
      }
    },
    O_X_O_XXO: { on: { "": "O_WINS" } },
    O_X_O_XX_: {
      on: {
        PLAY_O_TOP_CENTER: "OOX_O_XX_",
        PLAY_O_MIDDLE_LEFT: "O_XOO_XX_",
        PLAY_O_MIDDLE_RIGHT: "O_X_OOXX_",
        PLAY_O_BOTTOM_RIGHT: "O_X_O_XXO"
      }
    },
    O_X_OOX_X: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_OOX_X",
        PLAY_X_MIDDLE_LEFT: "O_XXOOX_X",
        PLAY_X_BOTTOM_CENTER: "O_X_OOXXX"
      }
    },
    O_X_O_XOX: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_O_XOX",
        PLAY_X_MIDDLE_LEFT: "O_XXO_XOX",
        PLAY_X_MIDDLE_RIGHT: "O_X_OXXOX"
      }
    },
    O_X_O_X_X: {
      on: {
        PLAY_O_TOP_CENTER: "OOX_O_X_X",
        PLAY_O_MIDDLE_LEFT: "O_XOO_X_X",
        PLAY_O_MIDDLE_RIGHT: "O_X_OOX_X",
        PLAY_O_BOTTOM_CENTER: "O_X_O_XOX"
      }
    },
    O_X_O_X__: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_O_X__",
        PLAY_X_MIDDLE_LEFT: "O_XXO_X__",
        PLAY_X_MIDDLE_RIGHT: "O_X_OXX__",
        PLAY_X_BOTTOM_CENTER: "O_X_O_XX_",
        PLAY_X_BOTTOM_RIGHT: "O_X_O_X_X"
      }
    },
    O_X__OXXO: {
      on: {
        PLAY_X_TOP_CENTER: "OXX__OXXO",
        PLAY_X_MIDDLE_LEFT: "O_XX_OXXO",
        PLAY_X_CENTER: "O_X_XOXXO"
      }
    },
    O_X__OXX_: {
      on: {
        PLAY_O_TOP_CENTER: "OOX__OXX_",
        PLAY_O_MIDDLE_LEFT: "O_XO_OXX_",
        PLAY_O_CENTER: "O_X_OOXX_",
        PLAY_O_BOTTOM_RIGHT: "O_X__OXXO"
      }
    },
    O_X__OXOX: {
      on: {
        PLAY_X_TOP_CENTER: "OXX__OXOX",
        PLAY_X_MIDDLE_LEFT: "O_XX_OXOX",
        PLAY_X_CENTER: "O_X_XOXOX"
      }
    },
    O_X__OX_X: {
      on: {
        PLAY_O_TOP_CENTER: "OOX__OX_X",
        PLAY_O_MIDDLE_LEFT: "O_XO_OX_X",
        PLAY_O_CENTER: "O_X_OOX_X",
        PLAY_O_BOTTOM_CENTER: "O_X__OXOX"
      }
    },
    O_X__OX__: {
      on: {
        PLAY_X_TOP_CENTER: "OXX__OX__",
        PLAY_X_MIDDLE_LEFT: "O_XX_OX__",
        PLAY_X_CENTER: "O_X_XOX__",
        PLAY_X_BOTTOM_CENTER: "O_X__OXX_",
        PLAY_X_BOTTOM_RIGHT: "O_X__OX_X"
      }
    },
    O_X___XOX: {
      on: {
        PLAY_O_TOP_CENTER: "OOX___XOX",
        PLAY_O_MIDDLE_LEFT: "O_XO__XOX",
        PLAY_O_CENTER: "O_X_O_XOX",
        PLAY_O_MIDDLE_RIGHT: "O_X__OXOX"
      }
    },
    O_X___XO_: {
      on: {
        PLAY_X_TOP_CENTER: "OXX___XO_",
        PLAY_X_MIDDLE_LEFT: "O_XX__XO_",
        PLAY_X_CENTER: "O_X_X_XO_",
        PLAY_X_MIDDLE_RIGHT: "O_X__XXO_",
        PLAY_X_BOTTOM_RIGHT: "O_X___XOX"
      }
    },
    O_X___XXO: {
      on: {
        PLAY_O_TOP_CENTER: "OOX___XXO",
        PLAY_O_MIDDLE_LEFT: "O_XO__XXO",
        PLAY_O_CENTER: "O_X_O_XXO",
        PLAY_O_MIDDLE_RIGHT: "O_X__OXXO"
      }
    },
    O_X___X_O: {
      on: {
        PLAY_X_TOP_CENTER: "OXX___X_O",
        PLAY_X_MIDDLE_LEFT: "O_XX__X_O",
        PLAY_X_CENTER: "O_X_X_X_O",
        PLAY_X_MIDDLE_RIGHT: "O_X__XX_O",
        PLAY_X_BOTTOM_CENTER: "O_X___XXO"
      }
    },
    O_X___X__: {
      on: {
        PLAY_O_TOP_CENTER: "OOX___X__",
        PLAY_O_MIDDLE_LEFT: "O_XO__X__",
        PLAY_O_CENTER: "O_X_O_X__",
        PLAY_O_MIDDLE_RIGHT: "O_X__OX__",
        PLAY_O_BOTTOM_CENTER: "O_X___XO_",
        PLAY_O_BOTTOM_RIGHT: "O_X___X_O"
      }
    },
    OOXO___XX: {
      on: {
        PLAY_X_CENTER: "OOXOX__XX",
        PLAY_X_MIDDLE_RIGHT: "OOXO_X_XX",
        PLAY_X_BOTTOM_LEFT: "OOXO__XXX"
      }
    },
    OOX_O__XX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXXO__XX",
        PLAY_X_MIDDLE_RIGHT: "OOX_OX_XX",
        PLAY_X_BOTTOM_LEFT: "OOX_O_XXX"
      }
    },
    OOX__O_XX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXX_O_XX",
        PLAY_X_CENTER: "OOX_XO_XX",
        PLAY_X_BOTTOM_LEFT: "OOX__OXXX"
      }
    },
    OOX___OXX: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXX__OXX",
        PLAY_X_CENTER: "OOX_X_OXX",
        PLAY_X_MIDDLE_RIGHT: "OOX__XOXX"
      }
    },
    OOX____XX: {
      on: {
        PLAY_O_MIDDLE_LEFT: "OOXO___XX",
        PLAY_O_CENTER: "OOX_O__XX",
        PLAY_O_MIDDLE_RIGHT: "OOX__O_XX",
        PLAY_O_BOTTOM_LEFT: "OOX___OXX"
      }
    },
    OOX____X_: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXX___X_",
        PLAY_X_CENTER: "OOX_X__X_",
        PLAY_X_MIDDLE_RIGHT: "OOX__X_X_",
        PLAY_X_BOTTOM_LEFT: "OOX___XX_",
        PLAY_X_BOTTOM_RIGHT: "OOX____XX"
      }
    },
    O_XOO__XX: {
      on: {
        PLAY_X_TOP_CENTER: "OXXOO__XX",
        PLAY_X_MIDDLE_RIGHT: "O_XOOX_XX",
        PLAY_X_BOTTOM_LEFT: "O_XOO_XXX"
      }
    },
    O_XO_O_XX: {
      on: {
        PLAY_X_TOP_CENTER: "OXXO_O_XX",
        PLAY_X_CENTER: "O_XOXO_XX",
        PLAY_X_BOTTOM_LEFT: "O_XO_OXXX"
      }
    },
    O_XO__OXX: { on: { "": "O_WINS" } },
    O_XO___XX: {
      on: {
        PLAY_O_TOP_CENTER: "OOXO___XX",
        PLAY_O_CENTER: "O_XOO__XX",
        PLAY_O_MIDDLE_RIGHT: "O_XO_O_XX",
        PLAY_O_BOTTOM_LEFT: "O_XO__OXX"
      }
    },
    O_XO___X_: {
      on: {
        PLAY_X_TOP_CENTER: "OXXO___X_",
        PLAY_X_CENTER: "O_XOX__X_",
        PLAY_X_MIDDLE_RIGHT: "O_XO_X_X_",
        PLAY_X_BOTTOM_LEFT: "O_XO__XX_",
        PLAY_X_BOTTOM_RIGHT: "O_XO___XX"
      }
    },
    O_X_OO_XX: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_OO_XX",
        PLAY_X_MIDDLE_LEFT: "O_XXOO_XX",
        PLAY_X_BOTTOM_LEFT: "O_X_OOXXX"
      }
    },
    O_X_O_OXX: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_O_OXX",
        PLAY_X_MIDDLE_LEFT: "O_XXO_OXX",
        PLAY_X_MIDDLE_RIGHT: "O_X_OXOXX"
      }
    },
    O_X_O__XX: {
      on: {
        PLAY_O_TOP_CENTER: "OOX_O__XX",
        PLAY_O_MIDDLE_LEFT: "O_XOO__XX",
        PLAY_O_MIDDLE_RIGHT: "O_X_OO_XX",
        PLAY_O_BOTTOM_LEFT: "O_X_O_OXX"
      }
    },
    O_X_O__X_: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_O__X_",
        PLAY_X_MIDDLE_LEFT: "O_XXO__X_",
        PLAY_X_MIDDLE_RIGHT: "O_X_OX_X_",
        PLAY_X_BOTTOM_LEFT: "O_X_O_XX_",
        PLAY_X_BOTTOM_RIGHT: "O_X_O__XX"
      }
    },
    O_X__OOXX: {
      on: {
        PLAY_X_TOP_CENTER: "OXX__OOXX",
        PLAY_X_MIDDLE_LEFT: "O_XX_OOXX",
        PLAY_X_CENTER: "O_X_XOOXX"
      }
    },
    O_X__O_XX: {
      on: {
        PLAY_O_TOP_CENTER: "OOX__O_XX",
        PLAY_O_MIDDLE_LEFT: "O_XO_O_XX",
        PLAY_O_CENTER: "O_X_OO_XX",
        PLAY_O_BOTTOM_LEFT: "O_X__OOXX"
      }
    },
    O_X__O_X_: {
      on: {
        PLAY_X_TOP_CENTER: "OXX__O_X_",
        PLAY_X_MIDDLE_LEFT: "O_XX_O_X_",
        PLAY_X_CENTER: "O_X_XO_X_",
        PLAY_X_BOTTOM_LEFT: "O_X__OXX_",
        PLAY_X_BOTTOM_RIGHT: "O_X__O_XX"
      }
    },
    O_X___OXX: {
      on: {
        PLAY_O_TOP_CENTER: "OOX___OXX",
        PLAY_O_MIDDLE_LEFT: "O_XO__OXX",
        PLAY_O_CENTER: "O_X_O_OXX",
        PLAY_O_MIDDLE_RIGHT: "O_X__OOXX"
      }
    },
    O_X___OX_: {
      on: {
        PLAY_X_TOP_CENTER: "OXX___OX_",
        PLAY_X_MIDDLE_LEFT: "O_XX__OX_",
        PLAY_X_CENTER: "O_X_X_OX_",
        PLAY_X_MIDDLE_RIGHT: "O_X__XOX_",
        PLAY_X_BOTTOM_RIGHT: "O_X___OXX"
      }
    },
    O_X____XO: {
      on: {
        PLAY_X_TOP_CENTER: "OXX____XO",
        PLAY_X_MIDDLE_LEFT: "O_XX___XO",
        PLAY_X_CENTER: "O_X_X__XO",
        PLAY_X_MIDDLE_RIGHT: "O_X__X_XO",
        PLAY_X_BOTTOM_LEFT: "O_X___XXO"
      }
    },
    O_X____X_: {
      on: {
        PLAY_O_TOP_CENTER: "OOX____X_",
        PLAY_O_MIDDLE_LEFT: "O_XO___X_",
        PLAY_O_CENTER: "O_X_O__X_",
        PLAY_O_MIDDLE_RIGHT: "O_X__O_X_",
        PLAY_O_BOTTOM_LEFT: "O_X___OX_",
        PLAY_O_BOTTOM_RIGHT: "O_X____XO"
      }
    },
    OOX_____X: {
      on: {
        PLAY_X_MIDDLE_LEFT: "OOXX____X",
        PLAY_X_CENTER: "OOX_X___X",
        PLAY_X_MIDDLE_RIGHT: "OOX__X__X",
        PLAY_X_BOTTOM_LEFT: "OOX___X_X",
        PLAY_X_BOTTOM_CENTER: "OOX____XX"
      }
    },
    O_XO____X: {
      on: {
        PLAY_X_TOP_CENTER: "OXXO____X",
        PLAY_X_CENTER: "O_XOX___X",
        PLAY_X_MIDDLE_RIGHT: "O_XO_X__X",
        PLAY_X_BOTTOM_LEFT: "O_XO__X_X",
        PLAY_X_BOTTOM_CENTER: "O_XO___XX"
      }
    },
    O_X_O___X: {
      on: {
        PLAY_X_TOP_CENTER: "OXX_O___X",
        PLAY_X_MIDDLE_LEFT: "O_XXO___X",
        PLAY_X_MIDDLE_RIGHT: "O_X_OX__X",
        PLAY_X_BOTTOM_LEFT: "O_X_O_X_X",
        PLAY_X_BOTTOM_CENTER: "O_X_O__XX"
      }
    },
    O_X__O__X: {
      on: {
        PLAY_X_TOP_CENTER: "OXX__O__X",
        PLAY_X_MIDDLE_LEFT: "O_XX_O__X",
        PLAY_X_CENTER: "O_X_XO__X",
        PLAY_X_BOTTOM_LEFT: "O_X__OX_X",
        PLAY_X_BOTTOM_CENTER: "O_X__O_XX"
      }
    },
    O_X___O_X: {
      on: {
        PLAY_X_TOP_CENTER: "OXX___O_X",
        PLAY_X_MIDDLE_LEFT: "O_XX__O_X",
        PLAY_X_CENTER: "O_X_X_O_X",
        PLAY_X_MIDDLE_RIGHT: "O_X__XO_X",
        PLAY_X_BOTTOM_CENTER: "O_X___OXX"
      }
    },
    O_X____OX: {
      on: {
        PLAY_X_TOP_CENTER: "OXX____OX",
        PLAY_X_MIDDLE_LEFT: "O_XX___OX",
        PLAY_X_CENTER: "O_X_X__OX",
        PLAY_X_MIDDLE_RIGHT: "O_X__X_OX",
        PLAY_X_BOTTOM_LEFT: "O_X___XOX"
      }
    },
    O_X_____X: {
      on: {
        PLAY_O_TOP_CENTER: "OOX_____X",
        PLAY_O_MIDDLE_LEFT: "O_XO____X",
        PLAY_O_CENTER: "O_X_O___X",
        PLAY_O_MIDDLE_RIGHT: "O_X__O__X",
        PLAY_O_BOTTOM_LEFT: "O_X___O_X",
        PLAY_O_BOTTOM_CENTER: "O_X____OX"
      }
    },
    O_X______: {
      on: {
        PLAY_X_TOP_CENTER: "OXX______",
        PLAY_X_MIDDLE_LEFT: "O_XX_____",
        PLAY_X_CENTER: "O_X_X____",
        PLAY_X_MIDDLE_RIGHT: "O_X__X___",
        PLAY_X_BOTTOM_LEFT: "O_X___X__",
        PLAY_X_BOTTOM_CENTER: "O_X____X_",
        PLAY_X_BOTTOM_RIGHT: "O_X_____X"
      }
    },
    _OXXOXOXO: { on: { PLAY_X_TOP_LEFT: "XOXXOXOXO" } },
    _OXXOXOX_: {
      on: { PLAY_O_TOP_LEFT: "OOXXOXOX_", PLAY_O_BOTTOM_RIGHT: "_OXXOXOXO" }
    },
    _OXXOXO_X: { on: { "": "X_WINS" } },
    _OXXOXO__: {
      on: {
        PLAY_X_TOP_LEFT: "XOXXOXO__",
        PLAY_X_BOTTOM_CENTER: "_OXXOXOX_",
        PLAY_X_BOTTOM_RIGHT: "_OXXOXO_X"
      }
    },
    _OXXOX_O_: { on: { "": "O_WINS" } },
    _OXXOXXOO: { on: { "": "O_WINS" } },
    _OXXOXX_O: {
      on: { PLAY_O_TOP_LEFT: "OOXXOXX_O", PLAY_O_BOTTOM_CENTER: "_OXXOXXOO" }
    },
    _OXXOX_XO: {
      on: { PLAY_O_TOP_LEFT: "OOXXOX_XO", PLAY_O_BOTTOM_LEFT: "_OXXOXOXO" }
    },
    _OXXOX__O: {
      on: {
        PLAY_X_TOP_LEFT: "XOXXOX__O",
        PLAY_X_BOTTOM_LEFT: "_OXXOXX_O",
        PLAY_X_BOTTOM_CENTER: "_OXXOX_XO"
      }
    },
    _OXXOX___: {
      on: {
        PLAY_O_TOP_LEFT: "OOXXOX___",
        PLAY_O_BOTTOM_LEFT: "_OXXOXO__",
        PLAY_O_BOTTOM_CENTER: "_OXXOX_O_",
        PLAY_O_BOTTOM_RIGHT: "_OXXOX__O"
      }
    },
    _OXXOOXXO: { on: { PLAY_X_TOP_LEFT: "XOXXOOXXO" } },
    _OXXOOXX_: {
      on: { PLAY_O_TOP_LEFT: "OOXXOOXX_", PLAY_O_BOTTOM_RIGHT: "_OXXOOXXO" }
    },
    _OXXOOXOX: { on: { "": "O_WINS" } },
    _OXXOOX_X: {
      on: { PLAY_O_TOP_LEFT: "OOXXOOX_X", PLAY_O_BOTTOM_CENTER: "_OXXOOXOX" }
    },
    _OXXOOX__: {
      on: {
        PLAY_X_TOP_LEFT: "XOXXOOX__",
        PLAY_X_BOTTOM_CENTER: "_OXXOOXX_",
        PLAY_X_BOTTOM_RIGHT: "_OXXOOX_X"
      }
    },
    _OXXO_XO_: { on: { "": "O_WINS" } },
    _OXXO_XXO: {
      on: { PLAY_O_TOP_LEFT: "OOXXO_XXO", PLAY_O_MIDDLE_RIGHT: "_OXXOOXXO" }
    },
    _OXXO_X_O: {
      on: {
        PLAY_X_TOP_LEFT: "XOXXO_X_O",
        PLAY_X_MIDDLE_RIGHT: "_OXXOXX_O",
        PLAY_X_BOTTOM_CENTER: "_OXXO_XXO"
      }
    },
    _OXXO_X__: {
      on: {
        PLAY_O_TOP_LEFT: "OOXXO_X__",
        PLAY_O_MIDDLE_RIGHT: "_OXXOOX__",
        PLAY_O_BOTTOM_CENTER: "_OXXO_XO_",
        PLAY_O_BOTTOM_RIGHT: "_OXXO_X_O"
      }
    },
    _OXXOOOXX: { on: { PLAY_X_TOP_LEFT: "XOXXOOOXX" } },
    _OXXOO_XX: {
      on: { PLAY_O_TOP_LEFT: "OOXXOO_XX", PLAY_O_BOTTOM_LEFT: "_OXXOOOXX" }
    },
    _OXXOO_X_: {
      on: {
        PLAY_X_TOP_LEFT: "XOXXOO_X_",
        PLAY_X_BOTTOM_LEFT: "_OXXOOXX_",
        PLAY_X_BOTTOM_RIGHT: "_OXXOO_XX"
      }
    },
    _OXXO_OXX: {
      on: { PLAY_O_TOP_LEFT: "OOXXO_OXX", PLAY_O_MIDDLE_RIGHT: "_OXXOOOXX" }
    },
    _OXXO_OX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOXXO_OX_",
        PLAY_X_MIDDLE_RIGHT: "_OXXOXOX_",
        PLAY_X_BOTTOM_RIGHT: "_OXXO_OXX"
      }
    },
    _OXXO__XO: {
      on: {
        PLAY_X_TOP_LEFT: "XOXXO__XO",
        PLAY_X_MIDDLE_RIGHT: "_OXXOX_XO",
        PLAY_X_BOTTOM_LEFT: "_OXXO_XXO"
      }
    },
    _OXXO__X_: {
      on: {
        PLAY_O_TOP_LEFT: "OOXXO__X_",
        PLAY_O_MIDDLE_RIGHT: "_OXXOO_X_",
        PLAY_O_BOTTOM_LEFT: "_OXXO_OX_",
        PLAY_O_BOTTOM_RIGHT: "_OXXO__XO"
      }
    },
    _OXXOO__X: {
      on: {
        PLAY_X_TOP_LEFT: "XOXXOO__X",
        PLAY_X_BOTTOM_LEFT: "_OXXOOX_X",
        PLAY_X_BOTTOM_CENTER: "_OXXOO_XX"
      }
    },
    _OXXO_O_X: {
      on: {
        PLAY_X_TOP_LEFT: "XOXXO_O_X",
        PLAY_X_MIDDLE_RIGHT: "_OXXOXO_X",
        PLAY_X_BOTTOM_CENTER: "_OXXO_OXX"
      }
    },
    _OXXO__OX: { on: { "": "O_WINS" } },
    _OXXO___X: {
      on: {
        PLAY_O_TOP_LEFT: "OOXXO___X",
        PLAY_O_MIDDLE_RIGHT: "_OXXOO__X",
        PLAY_O_BOTTOM_LEFT: "_OXXO_O_X",
        PLAY_O_BOTTOM_CENTER: "_OXXO__OX"
      }
    },
    _OXXO____: {
      on: {
        PLAY_X_TOP_LEFT: "XOXXO____",
        PLAY_X_MIDDLE_RIGHT: "_OXXOX___",
        PLAY_X_BOTTOM_LEFT: "_OXXO_X__",
        PLAY_X_BOTTOM_CENTER: "_OXXO__X_",
        PLAY_X_BOTTOM_RIGHT: "_OXXO___X"
      }
    },
    _OXXXOOXO: { on: { PLAY_X_TOP_LEFT: "XOXXXOOXO" } },
    _OXXXOOX_: {
      on: { PLAY_O_TOP_LEFT: "OOXXXOOX_", PLAY_O_BOTTOM_RIGHT: "_OXXXOOXO" }
    },
    _OXXXOOOX: { on: { PLAY_X_TOP_LEFT: "XOXXXOOOX" } },
    _OXXXOO_X: {
      on: { PLAY_O_TOP_LEFT: "OOXXXOO_X", PLAY_O_BOTTOM_CENTER: "_OXXXOOOX" }
    },
    _OXXXOO__: {
      on: {
        PLAY_X_TOP_LEFT: "XOXXXOO__",
        PLAY_X_BOTTOM_CENTER: "_OXXXOOX_",
        PLAY_X_BOTTOM_RIGHT: "_OXXXOO_X"
      }
    },
    _OXXXOXO_: { on: { "": "X_WINS" } },
    _OXXXO_OX: {
      on: { PLAY_O_TOP_LEFT: "OOXXXO_OX", PLAY_O_BOTTOM_LEFT: "_OXXXOOOX" }
    },
    _OXXXO_O_: {
      on: {
        PLAY_X_TOP_LEFT: "XOXXXO_O_",
        PLAY_X_BOTTOM_LEFT: "_OXXXOXO_",
        PLAY_X_BOTTOM_RIGHT: "_OXXXO_OX"
      }
    },
    _OXXXOX_O: { on: { "": "X_WINS" } },
    _OXXXO_XO: {
      on: { PLAY_O_TOP_LEFT: "OOXXXO_XO", PLAY_O_BOTTOM_LEFT: "_OXXXOOXO" }
    },
    _OXXXO__O: {
      on: {
        PLAY_X_TOP_LEFT: "XOXXXO__O",
        PLAY_X_BOTTOM_LEFT: "_OXXXOX_O",
        PLAY_X_BOTTOM_CENTER: "_OXXXO_XO"
      }
    },
    _OXXXO___: {
      on: {
        PLAY_O_TOP_LEFT: "OOXXXO___",
        PLAY_O_BOTTOM_LEFT: "_OXXXOO__",
        PLAY_O_BOTTOM_CENTER: "_OXXXO_O_",
        PLAY_O_BOTTOM_RIGHT: "_OXXXO__O"
      }
    },
    _OXX_OXOX: {
      on: { PLAY_O_TOP_LEFT: "OOXX_OXOX", PLAY_O_CENTER: "_OXXOOXOX" }
    },
    _OXX_OXO_: {
      on: {
        PLAY_X_TOP_LEFT: "XOXX_OXO_",
        PLAY_X_CENTER: "_OXXXOXO_",
        PLAY_X_BOTTOM_RIGHT: "_OXX_OXOX"
      }
    },
    _OXX_OXXO: {
      on: { PLAY_O_TOP_LEFT: "OOXX_OXXO", PLAY_O_CENTER: "_OXXOOXXO" }
    },
    _OXX_OX_O: {
      on: {
        PLAY_X_TOP_LEFT: "XOXX_OX_O",
        PLAY_X_CENTER: "_OXXXOX_O",
        PLAY_X_BOTTOM_CENTER: "_OXX_OXXO"
      }
    },
    _OXX_OX__: {
      on: {
        PLAY_O_TOP_LEFT: "OOXX_OX__",
        PLAY_O_CENTER: "_OXXOOX__",
        PLAY_O_BOTTOM_CENTER: "_OXX_OXO_",
        PLAY_O_BOTTOM_RIGHT: "_OXX_OX_O"
      }
    },
    _OXX_OOXX: {
      on: { PLAY_O_TOP_LEFT: "OOXX_OOXX", PLAY_O_CENTER: "_OXXOOOXX" }
    },
    _OXX_OOX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOXX_OOX_",
        PLAY_X_CENTER: "_OXXXOOX_",
        PLAY_X_BOTTOM_RIGHT: "_OXX_OOXX"
      }
    },
    _OXX_O_XO: {
      on: {
        PLAY_X_TOP_LEFT: "XOXX_O_XO",
        PLAY_X_CENTER: "_OXXXO_XO",
        PLAY_X_BOTTOM_LEFT: "_OXX_OXXO"
      }
    },
    _OXX_O_X_: {
      on: {
        PLAY_O_TOP_LEFT: "OOXX_O_X_",
        PLAY_O_CENTER: "_OXXOO_X_",
        PLAY_O_BOTTOM_LEFT: "_OXX_OOX_",
        PLAY_O_BOTTOM_RIGHT: "_OXX_O_XO"
      }
    },
    _OXX_OO_X: {
      on: {
        PLAY_X_TOP_LEFT: "XOXX_OO_X",
        PLAY_X_CENTER: "_OXXXOO_X",
        PLAY_X_BOTTOM_CENTER: "_OXX_OOXX"
      }
    },
    _OXX_O_OX: {
      on: {
        PLAY_X_TOP_LEFT: "XOXX_O_OX",
        PLAY_X_CENTER: "_OXXXO_OX",
        PLAY_X_BOTTOM_LEFT: "_OXX_OXOX"
      }
    },
    _OXX_O__X: {
      on: {
        PLAY_O_TOP_LEFT: "OOXX_O__X",
        PLAY_O_CENTER: "_OXXOO__X",
        PLAY_O_BOTTOM_LEFT: "_OXX_OO_X",
        PLAY_O_BOTTOM_CENTER: "_OXX_O_OX"
      }
    },
    _OXX_O___: {
      on: {
        PLAY_X_TOP_LEFT: "XOXX_O___",
        PLAY_X_CENTER: "_OXXXO___",
        PLAY_X_BOTTOM_LEFT: "_OXX_OX__",
        PLAY_X_BOTTOM_CENTER: "_OXX_O_X_",
        PLAY_X_BOTTOM_RIGHT: "_OXX_O__X"
      }
    },
    _OXXXXOO_: { on: { "": "X_WINS" } },
    _OXXX_OOX: {
      on: { PLAY_O_TOP_LEFT: "OOXXX_OOX", PLAY_O_MIDDLE_RIGHT: "_OXXXOOOX" }
    },
    _OXXX_OO_: {
      on: {
        PLAY_X_TOP_LEFT: "XOXXX_OO_",
        PLAY_X_MIDDLE_RIGHT: "_OXXXXOO_",
        PLAY_X_BOTTOM_RIGHT: "_OXXX_OOX"
      }
    },
    _OXXXXO_O: { on: { "": "X_WINS" } },
    _OXXX_OXO: {
      on: { PLAY_O_TOP_LEFT: "OOXXX_OXO", PLAY_O_MIDDLE_RIGHT: "_OXXXOOXO" }
    },
    _OXXX_O_O: {
      on: {
        PLAY_X_TOP_LEFT: "XOXXX_O_O",
        PLAY_X_MIDDLE_RIGHT: "_OXXXXO_O",
        PLAY_X_BOTTOM_CENTER: "_OXXX_OXO"
      }
    },
    _OXXX_O__: {
      on: {
        PLAY_O_TOP_LEFT: "OOXXX_O__",
        PLAY_O_MIDDLE_RIGHT: "_OXXXOO__",
        PLAY_O_BOTTOM_CENTER: "_OXXX_OO_",
        PLAY_O_BOTTOM_RIGHT: "_OXXX_O_O"
      }
    },
    _OXX_XOOX: { on: { "": "X_WINS" } },
    _OXX_XOO_: {
      on: {
        PLAY_X_TOP_LEFT: "XOXX_XOO_",
        PLAY_X_CENTER: "_OXXXXOO_",
        PLAY_X_BOTTOM_RIGHT: "_OXX_XOOX"
      }
    },
    _OXX_XOXO: {
      on: { PLAY_O_TOP_LEFT: "OOXX_XOXO", PLAY_O_CENTER: "_OXXOXOXO" }
    },
    _OXX_XO_O: {
      on: {
        PLAY_X_TOP_LEFT: "XOXX_XO_O",
        PLAY_X_CENTER: "_OXXXXO_O",
        PLAY_X_BOTTOM_CENTER: "_OXX_XOXO"
      }
    },
    _OXX_XO__: {
      on: {
        PLAY_O_TOP_LEFT: "OOXX_XO__",
        PLAY_O_CENTER: "_OXXOXO__",
        PLAY_O_BOTTOM_CENTER: "_OXX_XOO_",
        PLAY_O_BOTTOM_RIGHT: "_OXX_XO_O"
      }
    },
    _OXX__OXO: {
      on: {
        PLAY_X_TOP_LEFT: "XOXX__OXO",
        PLAY_X_CENTER: "_OXXX_OXO",
        PLAY_X_MIDDLE_RIGHT: "_OXX_XOXO"
      }
    },
    _OXX__OX_: {
      on: {
        PLAY_O_TOP_LEFT: "OOXX__OX_",
        PLAY_O_CENTER: "_OXXO_OX_",
        PLAY_O_MIDDLE_RIGHT: "_OXX_OOX_",
        PLAY_O_BOTTOM_RIGHT: "_OXX__OXO"
      }
    },
    _OXX__OOX: {
      on: {
        PLAY_X_TOP_LEFT: "XOXX__OOX",
        PLAY_X_CENTER: "_OXXX_OOX",
        PLAY_X_MIDDLE_RIGHT: "_OXX_XOOX"
      }
    },
    _OXX__O_X: {
      on: {
        PLAY_O_TOP_LEFT: "OOXX__O_X",
        PLAY_O_CENTER: "_OXXO_O_X",
        PLAY_O_MIDDLE_RIGHT: "_OXX_OO_X",
        PLAY_O_BOTTOM_CENTER: "_OXX__OOX"
      }
    },
    _OXX__O__: {
      on: {
        PLAY_X_TOP_LEFT: "XOXX__O__",
        PLAY_X_CENTER: "_OXXX_O__",
        PLAY_X_MIDDLE_RIGHT: "_OXX_XO__",
        PLAY_X_BOTTOM_CENTER: "_OXX__OX_",
        PLAY_X_BOTTOM_RIGHT: "_OXX__O_X"
      }
    },
    _OXXXX_OO: { on: { "": "X_WINS" } },
    _OXXX_XOO: { on: { "": "X_WINS" } },
    _OXXX__OO: {
      on: {
        PLAY_X_TOP_LEFT: "XOXXX__OO",
        PLAY_X_MIDDLE_RIGHT: "_OXXXX_OO",
        PLAY_X_BOTTOM_LEFT: "_OXXX_XOO"
      }
    },
    _OXXX__O_: {
      on: {
        PLAY_O_TOP_LEFT: "OOXXX__O_",
        PLAY_O_MIDDLE_RIGHT: "_OXXXO_O_",
        PLAY_O_BOTTOM_LEFT: "_OXXX_OO_",
        PLAY_O_BOTTOM_RIGHT: "_OXXX__OO"
      }
    },
    _OXX_XXOO: {
      on: { PLAY_O_TOP_LEFT: "OOXX_XXOO", PLAY_O_CENTER: "_OXXOXXOO" }
    },
    _OXX_X_OO: {
      on: {
        PLAY_X_TOP_LEFT: "XOXX_X_OO",
        PLAY_X_CENTER: "_OXXXX_OO",
        PLAY_X_BOTTOM_LEFT: "_OXX_XXOO"
      }
    },
    _OXX_X_O_: {
      on: {
        PLAY_O_TOP_LEFT: "OOXX_X_O_",
        PLAY_O_CENTER: "_OXXOX_O_",
        PLAY_O_BOTTOM_LEFT: "_OXX_XOO_",
        PLAY_O_BOTTOM_RIGHT: "_OXX_X_OO"
      }
    },
    _OXX__XOO: {
      on: {
        PLAY_X_TOP_LEFT: "XOXX__XOO",
        PLAY_X_CENTER: "_OXXX_XOO",
        PLAY_X_MIDDLE_RIGHT: "_OXX_XXOO"
      }
    },
    _OXX__XO_: {
      on: {
        PLAY_O_TOP_LEFT: "OOXX__XO_",
        PLAY_O_CENTER: "_OXXO_XO_",
        PLAY_O_MIDDLE_RIGHT: "_OXX_OXO_",
        PLAY_O_BOTTOM_RIGHT: "_OXX__XOO"
      }
    },
    _OXX___OX: {
      on: {
        PLAY_O_TOP_LEFT: "OOXX___OX",
        PLAY_O_CENTER: "_OXXO__OX",
        PLAY_O_MIDDLE_RIGHT: "_OXX_O_OX",
        PLAY_O_BOTTOM_LEFT: "_OXX__OOX"
      }
    },
    _OXX___O_: {
      on: {
        PLAY_X_TOP_LEFT: "XOXX___O_",
        PLAY_X_CENTER: "_OXXX__O_",
        PLAY_X_MIDDLE_RIGHT: "_OXX_X_O_",
        PLAY_X_BOTTOM_LEFT: "_OXX__XO_",
        PLAY_X_BOTTOM_RIGHT: "_OXX___OX"
      }
    },
    _OXXX___O: {
      on: {
        PLAY_O_TOP_LEFT: "OOXXX___O",
        PLAY_O_MIDDLE_RIGHT: "_OXXXO__O",
        PLAY_O_BOTTOM_LEFT: "_OXXX_O_O",
        PLAY_O_BOTTOM_CENTER: "_OXXX__OO"
      }
    },
    _OXX_X__O: {
      on: {
        PLAY_O_TOP_LEFT: "OOXX_X__O",
        PLAY_O_CENTER: "_OXXOX__O",
        PLAY_O_BOTTOM_LEFT: "_OXX_XO_O",
        PLAY_O_BOTTOM_CENTER: "_OXX_X_OO"
      }
    },
    _OXX__X_O: {
      on: {
        PLAY_O_TOP_LEFT: "OOXX__X_O",
        PLAY_O_CENTER: "_OXXO_X_O",
        PLAY_O_MIDDLE_RIGHT: "_OXX_OX_O",
        PLAY_O_BOTTOM_CENTER: "_OXX__XOO"
      }
    },
    _OXX___XO: {
      on: {
        PLAY_O_TOP_LEFT: "OOXX___XO",
        PLAY_O_CENTER: "_OXXO__XO",
        PLAY_O_MIDDLE_RIGHT: "_OXX_O_XO",
        PLAY_O_BOTTOM_LEFT: "_OXX__OXO"
      }
    },
    _OXX____O: {
      on: {
        PLAY_X_TOP_LEFT: "XOXX____O",
        PLAY_X_CENTER: "_OXXX___O",
        PLAY_X_MIDDLE_RIGHT: "_OXX_X__O",
        PLAY_X_BOTTOM_LEFT: "_OXX__X_O",
        PLAY_X_BOTTOM_CENTER: "_OXX___XO"
      }
    },
    _OXX_____: {
      on: {
        PLAY_O_TOP_LEFT: "OOXX_____",
        PLAY_O_CENTER: "_OXXO____",
        PLAY_O_MIDDLE_RIGHT: "_OXX_O___",
        PLAY_O_BOTTOM_LEFT: "_OXX__O__",
        PLAY_O_BOTTOM_CENTER: "_OXX___O_",
        PLAY_O_BOTTOM_RIGHT: "_OXX____O"
      }
    },
    _OXOXXOXO: { on: { PLAY_X_TOP_LEFT: "XOXOXXOXO" } },
    _OXOXXOX_: {
      on: { PLAY_O_TOP_LEFT: "OOXOXXOX_", PLAY_O_BOTTOM_RIGHT: "_OXOXXOXO" }
    },
    _OXOXXO_X: { on: { "": "X_WINS" } },
    _OXOXXO__: {
      on: {
        PLAY_X_TOP_LEFT: "XOXOXXO__",
        PLAY_X_BOTTOM_CENTER: "_OXOXXOX_",
        PLAY_X_BOTTOM_RIGHT: "_OXOXXO_X"
      }
    },
    _OXOXXXO_: { on: { "": "X_WINS" } },
    _OXOXX_OX: { on: { "": "X_WINS" } },
    _OXOXX_O_: {
      on: {
        PLAY_X_TOP_LEFT: "XOXOXX_O_",
        PLAY_X_BOTTOM_LEFT: "_OXOXXXO_",
        PLAY_X_BOTTOM_RIGHT: "_OXOXX_OX"
      }
    },
    _OXOXXX_O: { on: { "": "X_WINS" } },
    _OXOXX_XO: {
      on: { PLAY_O_TOP_LEFT: "OOXOXX_XO", PLAY_O_BOTTOM_LEFT: "_OXOXXOXO" }
    },
    _OXOXX__O: {
      on: {
        PLAY_X_TOP_LEFT: "XOXOXX__O",
        PLAY_X_BOTTOM_LEFT: "_OXOXXX_O",
        PLAY_X_BOTTOM_CENTER: "_OXOXX_XO"
      }
    },
    _OXOXX___: {
      on: {
        PLAY_O_TOP_LEFT: "OOXOXX___",
        PLAY_O_BOTTOM_LEFT: "_OXOXXO__",
        PLAY_O_BOTTOM_CENTER: "_OXOXX_O_",
        PLAY_O_BOTTOM_RIGHT: "_OXOXX__O"
      }
    },
    _OXOX_X__: { on: { "": "X_WINS" } },
    _OXOXOXX_: { on: { "": "X_WINS" } },
    _OXOXOOXX: { on: { PLAY_X_TOP_LEFT: "XOXOXOOXX" } },
    _OXOXO_XX: {
      on: { PLAY_O_TOP_LEFT: "OOXOXO_XX", PLAY_O_BOTTOM_LEFT: "_OXOXOOXX" }
    },
    _OXOXO_X_: {
      on: {
        PLAY_X_TOP_LEFT: "XOXOXO_X_",
        PLAY_X_BOTTOM_LEFT: "_OXOXOXX_",
        PLAY_X_BOTTOM_RIGHT: "_OXOXO_XX"
      }
    },
    _OXOX_OXX: {
      on: { PLAY_O_TOP_LEFT: "OOXOX_OXX", PLAY_O_MIDDLE_RIGHT: "_OXOXOOXX" }
    },
    _OXOX_OX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOXOX_OX_",
        PLAY_X_MIDDLE_RIGHT: "_OXOXXOX_",
        PLAY_X_BOTTOM_RIGHT: "_OXOX_OXX"
      }
    },
    _OXOX_XXO: { on: { "": "X_WINS" } },
    _OXOX__XO: {
      on: {
        PLAY_X_TOP_LEFT: "XOXOX__XO",
        PLAY_X_MIDDLE_RIGHT: "_OXOXX_XO",
        PLAY_X_BOTTOM_LEFT: "_OXOX_XXO"
      }
    },
    _OXOX__X_: {
      on: {
        PLAY_O_TOP_LEFT: "OOXOX__X_",
        PLAY_O_MIDDLE_RIGHT: "_OXOXO_X_",
        PLAY_O_BOTTOM_LEFT: "_OXOX_OX_",
        PLAY_O_BOTTOM_RIGHT: "_OXOX__XO"
      }
    },
    _OXOXOX_X: { on: { "": "X_WINS" } },
    _OXOXO__X: {
      on: {
        PLAY_X_TOP_LEFT: "XOXOXO__X",
        PLAY_X_BOTTOM_LEFT: "_OXOXOX_X",
        PLAY_X_BOTTOM_CENTER: "_OXOXO_XX"
      }
    },
    _OXOX_O_X: {
      on: {
        PLAY_X_TOP_LEFT: "XOXOX_O_X",
        PLAY_X_MIDDLE_RIGHT: "_OXOXXO_X",
        PLAY_X_BOTTOM_CENTER: "_OXOX_OXX"
      }
    },
    _OXOX_XOX: { on: { "": "X_WINS" } },
    _OXOX__OX: {
      on: {
        PLAY_X_TOP_LEFT: "XOXOX__OX",
        PLAY_X_MIDDLE_RIGHT: "_OXOXX_OX",
        PLAY_X_BOTTOM_LEFT: "_OXOX_XOX"
      }
    },
    _OXOX___X: {
      on: {
        PLAY_O_TOP_LEFT: "OOXOX___X",
        PLAY_O_MIDDLE_RIGHT: "_OXOXO__X",
        PLAY_O_BOTTOM_LEFT: "_OXOX_O_X",
        PLAY_O_BOTTOM_CENTER: "_OXOX__OX"
      }
    },
    _OXOX____: {
      on: {
        PLAY_X_TOP_LEFT: "XOXOX____",
        PLAY_X_MIDDLE_RIGHT: "_OXOXX___",
        PLAY_X_BOTTOM_LEFT: "_OXOX_X__",
        PLAY_X_BOTTOM_CENTER: "_OXOX__X_",
        PLAY_X_BOTTOM_RIGHT: "_OXOX___X"
      }
    },
    _OX_XOX__: { on: { "": "X_WINS" } },
    _OX_XOOXX: {
      on: { PLAY_O_TOP_LEFT: "OOX_XOOXX", PLAY_O_MIDDLE_LEFT: "_OXOXOOXX" }
    },
    _OX_XOOX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_XOOX_",
        PLAY_X_MIDDLE_LEFT: "_OXXXOOX_",
        PLAY_X_BOTTOM_RIGHT: "_OX_XOOXX"
      }
    },
    _OX_XOXXO: { on: { "": "X_WINS" } },
    _OX_XO_XO: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_XO_XO",
        PLAY_X_MIDDLE_LEFT: "_OXXXO_XO",
        PLAY_X_BOTTOM_LEFT: "_OX_XOXXO"
      }
    },
    _OX_XO_X_: {
      on: {
        PLAY_O_TOP_LEFT: "OOX_XO_X_",
        PLAY_O_MIDDLE_LEFT: "_OXOXO_X_",
        PLAY_O_BOTTOM_LEFT: "_OX_XOOX_",
        PLAY_O_BOTTOM_RIGHT: "_OX_XO_XO"
      }
    },
    _OX_XOO_X: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_XOO_X",
        PLAY_X_MIDDLE_LEFT: "_OXXXOO_X",
        PLAY_X_BOTTOM_CENTER: "_OX_XOOXX"
      }
    },
    _OX_XOXOX: { on: { "": "X_WINS" } },
    _OX_XO_OX: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_XO_OX",
        PLAY_X_MIDDLE_LEFT: "_OXXXO_OX",
        PLAY_X_BOTTOM_LEFT: "_OX_XOXOX"
      }
    },
    _OX_XO__X: {
      on: {
        PLAY_O_TOP_LEFT: "OOX_XO__X",
        PLAY_O_MIDDLE_LEFT: "_OXOXO__X",
        PLAY_O_BOTTOM_LEFT: "_OX_XOO_X",
        PLAY_O_BOTTOM_CENTER: "_OX_XO_OX"
      }
    },
    _OX_XO___: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_XO___",
        PLAY_X_MIDDLE_LEFT: "_OXXXO___",
        PLAY_X_BOTTOM_LEFT: "_OX_XOX__",
        PLAY_X_BOTTOM_CENTER: "_OX_XO_X_",
        PLAY_X_BOTTOM_RIGHT: "_OX_XO__X"
      }
    },
    _OX_XXOOX: { on: { "": "X_WINS" } },
    _OX_XXOO_: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_XXOO_",
        PLAY_X_MIDDLE_LEFT: "_OXXXXOO_",
        PLAY_X_BOTTOM_RIGHT: "_OX_XXOOX"
      }
    },
    _OX_XXOXO: {
      on: { PLAY_O_TOP_LEFT: "OOX_XXOXO", PLAY_O_MIDDLE_LEFT: "_OXOXXOXO" }
    },
    _OX_XXO_O: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_XXO_O",
        PLAY_X_MIDDLE_LEFT: "_OXXXXO_O",
        PLAY_X_BOTTOM_CENTER: "_OX_XXOXO"
      }
    },
    _OX_XXO__: {
      on: {
        PLAY_O_TOP_LEFT: "OOX_XXO__",
        PLAY_O_MIDDLE_LEFT: "_OXOXXO__",
        PLAY_O_BOTTOM_CENTER: "_OX_XXOO_",
        PLAY_O_BOTTOM_RIGHT: "_OX_XXO_O"
      }
    },
    _OX_X_OXO: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_X_OXO",
        PLAY_X_MIDDLE_LEFT: "_OXXX_OXO",
        PLAY_X_MIDDLE_RIGHT: "_OX_XXOXO"
      }
    },
    _OX_X_OX_: {
      on: {
        PLAY_O_TOP_LEFT: "OOX_X_OX_",
        PLAY_O_MIDDLE_LEFT: "_OXOX_OX_",
        PLAY_O_MIDDLE_RIGHT: "_OX_XOOX_",
        PLAY_O_BOTTOM_RIGHT: "_OX_X_OXO"
      }
    },
    _OX_X_OOX: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_X_OOX",
        PLAY_X_MIDDLE_LEFT: "_OXXX_OOX",
        PLAY_X_MIDDLE_RIGHT: "_OX_XXOOX"
      }
    },
    _OX_X_O_X: {
      on: {
        PLAY_O_TOP_LEFT: "OOX_X_O_X",
        PLAY_O_MIDDLE_LEFT: "_OXOX_O_X",
        PLAY_O_MIDDLE_RIGHT: "_OX_XOO_X",
        PLAY_O_BOTTOM_CENTER: "_OX_X_OOX"
      }
    },
    _OX_X_O__: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_X_O__",
        PLAY_X_MIDDLE_LEFT: "_OXXX_O__",
        PLAY_X_MIDDLE_RIGHT: "_OX_XXO__",
        PLAY_X_BOTTOM_CENTER: "_OX_X_OX_",
        PLAY_X_BOTTOM_RIGHT: "_OX_X_O_X"
      }
    },
    _OX_XXXOO: { on: { "": "X_WINS" } },
    _OX_XX_OO: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_XX_OO",
        PLAY_X_MIDDLE_LEFT: "_OXXXX_OO",
        PLAY_X_BOTTOM_LEFT: "_OX_XXXOO"
      }
    },
    _OX_XX_O_: {
      on: {
        PLAY_O_TOP_LEFT: "OOX_XX_O_",
        PLAY_O_MIDDLE_LEFT: "_OXOXX_O_",
        PLAY_O_BOTTOM_LEFT: "_OX_XXOO_",
        PLAY_O_BOTTOM_RIGHT: "_OX_XX_OO"
      }
    },
    _OX_X_XO_: { on: { "": "X_WINS" } },
    _OX_X__OX: {
      on: {
        PLAY_O_TOP_LEFT: "OOX_X__OX",
        PLAY_O_MIDDLE_LEFT: "_OXOX__OX",
        PLAY_O_MIDDLE_RIGHT: "_OX_XO_OX",
        PLAY_O_BOTTOM_LEFT: "_OX_X_OOX"
      }
    },
    _OX_X__O_: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_X__O_",
        PLAY_X_MIDDLE_LEFT: "_OXXX__O_",
        PLAY_X_MIDDLE_RIGHT: "_OX_XX_O_",
        PLAY_X_BOTTOM_LEFT: "_OX_X_XO_",
        PLAY_X_BOTTOM_RIGHT: "_OX_X__OX"
      }
    },
    _OX_XX__O: {
      on: {
        PLAY_O_TOP_LEFT: "OOX_XX__O",
        PLAY_O_MIDDLE_LEFT: "_OXOXX__O",
        PLAY_O_BOTTOM_LEFT: "_OX_XXO_O",
        PLAY_O_BOTTOM_CENTER: "_OX_XX_OO"
      }
    },
    _OX_X_X_O: { on: { "": "X_WINS" } },
    _OX_X__XO: {
      on: {
        PLAY_O_TOP_LEFT: "OOX_X__XO",
        PLAY_O_MIDDLE_LEFT: "_OXOX__XO",
        PLAY_O_MIDDLE_RIGHT: "_OX_XO_XO",
        PLAY_O_BOTTOM_LEFT: "_OX_X_OXO"
      }
    },
    _OX_X___O: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_X___O",
        PLAY_X_MIDDLE_LEFT: "_OXXX___O",
        PLAY_X_MIDDLE_RIGHT: "_OX_XX__O",
        PLAY_X_BOTTOM_LEFT: "_OX_X_X_O",
        PLAY_X_BOTTOM_CENTER: "_OX_X__XO"
      }
    },
    _OX_X____: {
      on: {
        PLAY_O_TOP_LEFT: "OOX_X____",
        PLAY_O_MIDDLE_LEFT: "_OXOX____",
        PLAY_O_MIDDLE_RIGHT: "_OX_XO___",
        PLAY_O_BOTTOM_LEFT: "_OX_X_O__",
        PLAY_O_BOTTOM_CENTER: "_OX_X__O_",
        PLAY_O_BOTTOM_RIGHT: "_OX_X___O"
      }
    },
    _OXOOXXXO: { on: { PLAY_X_TOP_LEFT: "XOXOOXXXO" } },
    _OXOOXXX_: {
      on: { PLAY_O_TOP_LEFT: "OOXOOXXX_", PLAY_O_BOTTOM_RIGHT: "_OXOOXXXO" }
    },
    _OXOOXX_X: { on: { "": "X_WINS" } },
    _OXOOXX__: {
      on: {
        PLAY_X_TOP_LEFT: "XOXOOXX__",
        PLAY_X_BOTTOM_CENTER: "_OXOOXXX_",
        PLAY_X_BOTTOM_RIGHT: "_OXOOXX_X"
      }
    },
    _OXO_XXOX: { on: { "": "X_WINS" } },
    _OXO_XXO_: {
      on: {
        PLAY_X_TOP_LEFT: "XOXO_XXO_",
        PLAY_X_CENTER: "_OXOXXXO_",
        PLAY_X_BOTTOM_RIGHT: "_OXO_XXOX"
      }
    },
    _OXO_XXXO: {
      on: { PLAY_O_TOP_LEFT: "OOXO_XXXO", PLAY_O_CENTER: "_OXOOXXXO" }
    },
    _OXO_XX_O: {
      on: {
        PLAY_X_TOP_LEFT: "XOXO_XX_O",
        PLAY_X_CENTER: "_OXOXXX_O",
        PLAY_X_BOTTOM_CENTER: "_OXO_XXXO"
      }
    },
    _OXO_XX__: {
      on: {
        PLAY_O_TOP_LEFT: "OOXO_XX__",
        PLAY_O_CENTER: "_OXOOXX__",
        PLAY_O_BOTTOM_CENTER: "_OXO_XXO_",
        PLAY_O_BOTTOM_RIGHT: "_OXO_XX_O"
      }
    },
    _OXOOX_XX: { on: { "": "X_WINS" } },
    _OXOOX_X_: {
      on: {
        PLAY_X_TOP_LEFT: "XOXOOX_X_",
        PLAY_X_BOTTOM_LEFT: "_OXOOXXX_",
        PLAY_X_BOTTOM_RIGHT: "_OXOOX_XX"
      }
    },
    _OXO_XOXX: { on: { "": "X_WINS" } },
    _OXO_XOX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOXO_XOX_",
        PLAY_X_CENTER: "_OXOXXOX_",
        PLAY_X_BOTTOM_RIGHT: "_OXO_XOXX"
      }
    },
    _OXO_X_XO: {
      on: {
        PLAY_X_TOP_LEFT: "XOXO_X_XO",
        PLAY_X_CENTER: "_OXOXX_XO",
        PLAY_X_BOTTOM_LEFT: "_OXO_XXXO"
      }
    },
    _OXO_X_X_: {
      on: {
        PLAY_O_TOP_LEFT: "OOXO_X_X_",
        PLAY_O_CENTER: "_OXOOX_X_",
        PLAY_O_BOTTOM_LEFT: "_OXO_XOX_",
        PLAY_O_BOTTOM_RIGHT: "_OXO_X_XO"
      }
    },
    _OXO_X__X: { on: { "": "X_WINS" } },
    _OXO_X___: {
      on: {
        PLAY_X_TOP_LEFT: "XOXO_X___",
        PLAY_X_CENTER: "_OXOXX___",
        PLAY_X_BOTTOM_LEFT: "_OXO_XX__",
        PLAY_X_BOTTOM_CENTER: "_OXO_X_X_",
        PLAY_X_BOTTOM_RIGHT: "_OXO_X__X"
      }
    },
    _OX_OXXO_: { on: { "": "O_WINS" } },
    _OX_OXXXO: {
      on: { PLAY_O_TOP_LEFT: "OOX_OXXXO", PLAY_O_MIDDLE_LEFT: "_OXOOXXXO" }
    },
    _OX_OXX_O: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_OXX_O",
        PLAY_X_MIDDLE_LEFT: "_OXXOXX_O",
        PLAY_X_BOTTOM_CENTER: "_OX_OXXXO"
      }
    },
    _OX_OXX__: {
      on: {
        PLAY_O_TOP_LEFT: "OOX_OXX__",
        PLAY_O_MIDDLE_LEFT: "_OXOOXX__",
        PLAY_O_BOTTOM_CENTER: "_OX_OXXO_",
        PLAY_O_BOTTOM_RIGHT: "_OX_OXX_O"
      }
    },
    _OX_OXOXX: { on: { "": "X_WINS" } },
    _OX_OXOX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_OXOX_",
        PLAY_X_MIDDLE_LEFT: "_OXXOXOX_",
        PLAY_X_BOTTOM_RIGHT: "_OX_OXOXX"
      }
    },
    _OX_OX_XO: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_OX_XO",
        PLAY_X_MIDDLE_LEFT: "_OXXOX_XO",
        PLAY_X_BOTTOM_LEFT: "_OX_OXXXO"
      }
    },
    _OX_OX_X_: {
      on: {
        PLAY_O_TOP_LEFT: "OOX_OX_X_",
        PLAY_O_MIDDLE_LEFT: "_OXOOX_X_",
        PLAY_O_BOTTOM_LEFT: "_OX_OXOX_",
        PLAY_O_BOTTOM_RIGHT: "_OX_OX_XO"
      }
    },
    _OX_OX__X: { on: { "": "X_WINS" } },
    _OX_OX___: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_OX___",
        PLAY_X_MIDDLE_LEFT: "_OXXOX___",
        PLAY_X_BOTTOM_LEFT: "_OX_OXX__",
        PLAY_X_BOTTOM_CENTER: "_OX_OX_X_",
        PLAY_X_BOTTOM_RIGHT: "_OX_OX__X"
      }
    },
    _OX__XOXO: {
      on: {
        PLAY_X_TOP_LEFT: "XOX__XOXO",
        PLAY_X_MIDDLE_LEFT: "_OXX_XOXO",
        PLAY_X_CENTER: "_OX_XXOXO"
      }
    },
    _OX__XOX_: {
      on: {
        PLAY_O_TOP_LEFT: "OOX__XOX_",
        PLAY_O_MIDDLE_LEFT: "_OXO_XOX_",
        PLAY_O_CENTER: "_OX_OXOX_",
        PLAY_O_BOTTOM_RIGHT: "_OX__XOXO"
      }
    },
    _OX__XO_X: { on: { "": "X_WINS" } },
    _OX__XO__: {
      on: {
        PLAY_X_TOP_LEFT: "XOX__XO__",
        PLAY_X_MIDDLE_LEFT: "_OXX_XO__",
        PLAY_X_CENTER: "_OX_XXO__",
        PLAY_X_BOTTOM_CENTER: "_OX__XOX_",
        PLAY_X_BOTTOM_RIGHT: "_OX__XO_X"
      }
    },
    _OX__XXOO: {
      on: {
        PLAY_X_TOP_LEFT: "XOX__XXOO",
        PLAY_X_MIDDLE_LEFT: "_OXX_XXOO",
        PLAY_X_CENTER: "_OX_XXXOO"
      }
    },
    _OX__XXO_: {
      on: {
        PLAY_O_TOP_LEFT: "OOX__XXO_",
        PLAY_O_MIDDLE_LEFT: "_OXO_XXO_",
        PLAY_O_CENTER: "_OX_OXXO_",
        PLAY_O_BOTTOM_RIGHT: "_OX__XXOO"
      }
    },
    _OX__X_OX: { on: { "": "X_WINS" } },
    _OX__X_O_: {
      on: {
        PLAY_X_TOP_LEFT: "XOX__X_O_",
        PLAY_X_MIDDLE_LEFT: "_OXX_X_O_",
        PLAY_X_CENTER: "_OX_XX_O_",
        PLAY_X_BOTTOM_LEFT: "_OX__XXO_",
        PLAY_X_BOTTOM_RIGHT: "_OX__X_OX"
      }
    },
    _OX__XX_O: {
      on: {
        PLAY_O_TOP_LEFT: "OOX__XX_O",
        PLAY_O_MIDDLE_LEFT: "_OXO_XX_O",
        PLAY_O_CENTER: "_OX_OXX_O",
        PLAY_O_BOTTOM_CENTER: "_OX__XXOO"
      }
    },
    _OX__X_XO: {
      on: {
        PLAY_O_TOP_LEFT: "OOX__X_XO",
        PLAY_O_MIDDLE_LEFT: "_OXO_X_XO",
        PLAY_O_CENTER: "_OX_OX_XO",
        PLAY_O_BOTTOM_LEFT: "_OX__XOXO"
      }
    },
    _OX__X__O: {
      on: {
        PLAY_X_TOP_LEFT: "XOX__X__O",
        PLAY_X_MIDDLE_LEFT: "_OXX_X__O",
        PLAY_X_CENTER: "_OX_XX__O",
        PLAY_X_BOTTOM_LEFT: "_OX__XX_O",
        PLAY_X_BOTTOM_CENTER: "_OX__X_XO"
      }
    },
    _OX__X___: {
      on: {
        PLAY_O_TOP_LEFT: "OOX__X___",
        PLAY_O_MIDDLE_LEFT: "_OXO_X___",
        PLAY_O_CENTER: "_OX_OX___",
        PLAY_O_BOTTOM_LEFT: "_OX__XO__",
        PLAY_O_BOTTOM_CENTER: "_OX__X_O_",
        PLAY_O_BOTTOM_RIGHT: "_OX__X__O"
      }
    },
    _OXOO_XXX: { on: { "": "X_WINS" } },
    _OXOO_XX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOXOO_XX_",
        PLAY_X_MIDDLE_RIGHT: "_OXOOXXX_",
        PLAY_X_BOTTOM_RIGHT: "_OXOO_XXX"
      }
    },
    _OXO_OXXX: { on: { "": "X_WINS" } },
    _OXO_OXX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOXO_OXX_",
        PLAY_X_CENTER: "_OXOXOXX_",
        PLAY_X_BOTTOM_RIGHT: "_OXO_OXXX"
      }
    },
    _OXO__XXO: {
      on: {
        PLAY_X_TOP_LEFT: "XOXO__XXO",
        PLAY_X_CENTER: "_OXOX_XXO",
        PLAY_X_MIDDLE_RIGHT: "_OXO_XXXO"
      }
    },
    _OXO__XX_: {
      on: {
        PLAY_O_TOP_LEFT: "OOXO__XX_",
        PLAY_O_CENTER: "_OXOO_XX_",
        PLAY_O_MIDDLE_RIGHT: "_OXO_OXX_",
        PLAY_O_BOTTOM_RIGHT: "_OXO__XXO"
      }
    },
    _OXOO_X_X: {
      on: {
        PLAY_X_TOP_LEFT: "XOXOO_X_X",
        PLAY_X_MIDDLE_RIGHT: "_OXOOXX_X",
        PLAY_X_BOTTOM_CENTER: "_OXOO_XXX"
      }
    },
    _OXO_OX_X: {
      on: {
        PLAY_X_TOP_LEFT: "XOXO_OX_X",
        PLAY_X_CENTER: "_OXOXOX_X",
        PLAY_X_BOTTOM_CENTER: "_OXO_OXXX"
      }
    },
    _OXO__XOX: {
      on: {
        PLAY_X_TOP_LEFT: "XOXO__XOX",
        PLAY_X_CENTER: "_OXOX_XOX",
        PLAY_X_MIDDLE_RIGHT: "_OXO_XXOX"
      }
    },
    _OXO__X_X: {
      on: {
        PLAY_O_TOP_LEFT: "OOXO__X_X",
        PLAY_O_CENTER: "_OXOO_X_X",
        PLAY_O_MIDDLE_RIGHT: "_OXO_OX_X",
        PLAY_O_BOTTOM_CENTER: "_OXO__XOX"
      }
    },
    _OXO__X__: {
      on: {
        PLAY_X_TOP_LEFT: "XOXO__X__",
        PLAY_X_CENTER: "_OXOX_X__",
        PLAY_X_MIDDLE_RIGHT: "_OXO_XX__",
        PLAY_X_BOTTOM_CENTER: "_OXO__XX_",
        PLAY_X_BOTTOM_RIGHT: "_OXO__X_X"
      }
    },
    _OX_OOXXX: { on: { "": "X_WINS" } },
    _OX_OOXX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_OOXX_",
        PLAY_X_MIDDLE_LEFT: "_OXXOOXX_",
        PLAY_X_BOTTOM_RIGHT: "_OX_OOXXX"
      }
    },
    _OX_O_XXO: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_O_XXO",
        PLAY_X_MIDDLE_LEFT: "_OXXO_XXO",
        PLAY_X_MIDDLE_RIGHT: "_OX_OXXXO"
      }
    },
    _OX_O_XX_: {
      on: {
        PLAY_O_TOP_LEFT: "OOX_O_XX_",
        PLAY_O_MIDDLE_LEFT: "_OXOO_XX_",
        PLAY_O_MIDDLE_RIGHT: "_OX_OOXX_",
        PLAY_O_BOTTOM_RIGHT: "_OX_O_XXO"
      }
    },
    _OX_OOX_X: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_OOX_X",
        PLAY_X_MIDDLE_LEFT: "_OXXOOX_X",
        PLAY_X_BOTTOM_CENTER: "_OX_OOXXX"
      }
    },
    _OX_O_XOX: { on: { "": "O_WINS" } },
    _OX_O_X_X: {
      on: {
        PLAY_O_TOP_LEFT: "OOX_O_X_X",
        PLAY_O_MIDDLE_LEFT: "_OXOO_X_X",
        PLAY_O_MIDDLE_RIGHT: "_OX_OOX_X",
        PLAY_O_BOTTOM_CENTER: "_OX_O_XOX"
      }
    },
    _OX_O_X__: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_O_X__",
        PLAY_X_MIDDLE_LEFT: "_OXXO_X__",
        PLAY_X_MIDDLE_RIGHT: "_OX_OXX__",
        PLAY_X_BOTTOM_CENTER: "_OX_O_XX_",
        PLAY_X_BOTTOM_RIGHT: "_OX_O_X_X"
      }
    },
    _OX__OXXO: {
      on: {
        PLAY_X_TOP_LEFT: "XOX__OXXO",
        PLAY_X_MIDDLE_LEFT: "_OXX_OXXO",
        PLAY_X_CENTER: "_OX_XOXXO"
      }
    },
    _OX__OXX_: {
      on: {
        PLAY_O_TOP_LEFT: "OOX__OXX_",
        PLAY_O_MIDDLE_LEFT: "_OXO_OXX_",
        PLAY_O_CENTER: "_OX_OOXX_",
        PLAY_O_BOTTOM_RIGHT: "_OX__OXXO"
      }
    },
    _OX__OXOX: {
      on: {
        PLAY_X_TOP_LEFT: "XOX__OXOX",
        PLAY_X_MIDDLE_LEFT: "_OXX_OXOX",
        PLAY_X_CENTER: "_OX_XOXOX"
      }
    },
    _OX__OX_X: {
      on: {
        PLAY_O_TOP_LEFT: "OOX__OX_X",
        PLAY_O_MIDDLE_LEFT: "_OXO_OX_X",
        PLAY_O_CENTER: "_OX_OOX_X",
        PLAY_O_BOTTOM_CENTER: "_OX__OXOX"
      }
    },
    _OX__OX__: {
      on: {
        PLAY_X_TOP_LEFT: "XOX__OX__",
        PLAY_X_MIDDLE_LEFT: "_OXX_OX__",
        PLAY_X_CENTER: "_OX_XOX__",
        PLAY_X_BOTTOM_CENTER: "_OX__OXX_",
        PLAY_X_BOTTOM_RIGHT: "_OX__OX_X"
      }
    },
    _OX___XOX: {
      on: {
        PLAY_O_TOP_LEFT: "OOX___XOX",
        PLAY_O_MIDDLE_LEFT: "_OXO__XOX",
        PLAY_O_CENTER: "_OX_O_XOX",
        PLAY_O_MIDDLE_RIGHT: "_OX__OXOX"
      }
    },
    _OX___XO_: {
      on: {
        PLAY_X_TOP_LEFT: "XOX___XO_",
        PLAY_X_MIDDLE_LEFT: "_OXX__XO_",
        PLAY_X_CENTER: "_OX_X_XO_",
        PLAY_X_MIDDLE_RIGHT: "_OX__XXO_",
        PLAY_X_BOTTOM_RIGHT: "_OX___XOX"
      }
    },
    _OX___XXO: {
      on: {
        PLAY_O_TOP_LEFT: "OOX___XXO",
        PLAY_O_MIDDLE_LEFT: "_OXO__XXO",
        PLAY_O_CENTER: "_OX_O_XXO",
        PLAY_O_MIDDLE_RIGHT: "_OX__OXXO"
      }
    },
    _OX___X_O: {
      on: {
        PLAY_X_TOP_LEFT: "XOX___X_O",
        PLAY_X_MIDDLE_LEFT: "_OXX__X_O",
        PLAY_X_CENTER: "_OX_X_X_O",
        PLAY_X_MIDDLE_RIGHT: "_OX__XX_O",
        PLAY_X_BOTTOM_CENTER: "_OX___XXO"
      }
    },
    _OX___X__: {
      on: {
        PLAY_O_TOP_LEFT: "OOX___X__",
        PLAY_O_MIDDLE_LEFT: "_OXO__X__",
        PLAY_O_CENTER: "_OX_O_X__",
        PLAY_O_MIDDLE_RIGHT: "_OX__OX__",
        PLAY_O_BOTTOM_CENTER: "_OX___XO_",
        PLAY_O_BOTTOM_RIGHT: "_OX___X_O"
      }
    },
    _OXOO__XX: {
      on: {
        PLAY_X_TOP_LEFT: "XOXOO__XX",
        PLAY_X_MIDDLE_RIGHT: "_OXOOX_XX",
        PLAY_X_BOTTOM_LEFT: "_OXOO_XXX"
      }
    },
    _OXO_O_XX: {
      on: {
        PLAY_X_TOP_LEFT: "XOXO_O_XX",
        PLAY_X_CENTER: "_OXOXO_XX",
        PLAY_X_BOTTOM_LEFT: "_OXO_OXXX"
      }
    },
    _OXO__OXX: {
      on: {
        PLAY_X_TOP_LEFT: "XOXO__OXX",
        PLAY_X_CENTER: "_OXOX_OXX",
        PLAY_X_MIDDLE_RIGHT: "_OXO_XOXX"
      }
    },
    _OXO___XX: {
      on: {
        PLAY_O_TOP_LEFT: "OOXO___XX",
        PLAY_O_CENTER: "_OXOO__XX",
        PLAY_O_MIDDLE_RIGHT: "_OXO_O_XX",
        PLAY_O_BOTTOM_LEFT: "_OXO__OXX"
      }
    },
    _OXO___X_: {
      on: {
        PLAY_X_TOP_LEFT: "XOXO___X_",
        PLAY_X_CENTER: "_OXOX__X_",
        PLAY_X_MIDDLE_RIGHT: "_OXO_X_X_",
        PLAY_X_BOTTOM_LEFT: "_OXO__XX_",
        PLAY_X_BOTTOM_RIGHT: "_OXO___XX"
      }
    },
    _OX_OO_XX: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_OO_XX",
        PLAY_X_MIDDLE_LEFT: "_OXXOO_XX",
        PLAY_X_BOTTOM_LEFT: "_OX_OOXXX"
      }
    },
    _OX_O_OXX: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_O_OXX",
        PLAY_X_MIDDLE_LEFT: "_OXXO_OXX",
        PLAY_X_MIDDLE_RIGHT: "_OX_OXOXX"
      }
    },
    _OX_O__XX: {
      on: {
        PLAY_O_TOP_LEFT: "OOX_O__XX",
        PLAY_O_MIDDLE_LEFT: "_OXOO__XX",
        PLAY_O_MIDDLE_RIGHT: "_OX_OO_XX",
        PLAY_O_BOTTOM_LEFT: "_OX_O_OXX"
      }
    },
    _OX_O__X_: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_O__X_",
        PLAY_X_MIDDLE_LEFT: "_OXXO__X_",
        PLAY_X_MIDDLE_RIGHT: "_OX_OX_X_",
        PLAY_X_BOTTOM_LEFT: "_OX_O_XX_",
        PLAY_X_BOTTOM_RIGHT: "_OX_O__XX"
      }
    },
    _OX__OOXX: {
      on: {
        PLAY_X_TOP_LEFT: "XOX__OOXX",
        PLAY_X_MIDDLE_LEFT: "_OXX_OOXX",
        PLAY_X_CENTER: "_OX_XOOXX"
      }
    },
    _OX__O_XX: {
      on: {
        PLAY_O_TOP_LEFT: "OOX__O_XX",
        PLAY_O_MIDDLE_LEFT: "_OXO_O_XX",
        PLAY_O_CENTER: "_OX_OO_XX",
        PLAY_O_BOTTOM_LEFT: "_OX__OOXX"
      }
    },
    _OX__O_X_: {
      on: {
        PLAY_X_TOP_LEFT: "XOX__O_X_",
        PLAY_X_MIDDLE_LEFT: "_OXX_O_X_",
        PLAY_X_CENTER: "_OX_XO_X_",
        PLAY_X_BOTTOM_LEFT: "_OX__OXX_",
        PLAY_X_BOTTOM_RIGHT: "_OX__O_XX"
      }
    },
    _OX___OXX: {
      on: {
        PLAY_O_TOP_LEFT: "OOX___OXX",
        PLAY_O_MIDDLE_LEFT: "_OXO__OXX",
        PLAY_O_CENTER: "_OX_O_OXX",
        PLAY_O_MIDDLE_RIGHT: "_OX__OOXX"
      }
    },
    _OX___OX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOX___OX_",
        PLAY_X_MIDDLE_LEFT: "_OXX__OX_",
        PLAY_X_CENTER: "_OX_X_OX_",
        PLAY_X_MIDDLE_RIGHT: "_OX__XOX_",
        PLAY_X_BOTTOM_RIGHT: "_OX___OXX"
      }
    },
    _OX____XO: {
      on: {
        PLAY_X_TOP_LEFT: "XOX____XO",
        PLAY_X_MIDDLE_LEFT: "_OXX___XO",
        PLAY_X_CENTER: "_OX_X__XO",
        PLAY_X_MIDDLE_RIGHT: "_OX__X_XO",
        PLAY_X_BOTTOM_LEFT: "_OX___XXO"
      }
    },
    _OX____X_: {
      on: {
        PLAY_O_TOP_LEFT: "OOX____X_",
        PLAY_O_MIDDLE_LEFT: "_OXO___X_",
        PLAY_O_CENTER: "_OX_O__X_",
        PLAY_O_MIDDLE_RIGHT: "_OX__O_X_",
        PLAY_O_BOTTOM_LEFT: "_OX___OX_",
        PLAY_O_BOTTOM_RIGHT: "_OX____XO"
      }
    },
    _OXO____X: {
      on: {
        PLAY_X_TOP_LEFT: "XOXO____X",
        PLAY_X_CENTER: "_OXOX___X",
        PLAY_X_MIDDLE_RIGHT: "_OXO_X__X",
        PLAY_X_BOTTOM_LEFT: "_OXO__X_X",
        PLAY_X_BOTTOM_CENTER: "_OXO___XX"
      }
    },
    _OX_O___X: {
      on: {
        PLAY_X_TOP_LEFT: "XOX_O___X",
        PLAY_X_MIDDLE_LEFT: "_OXXO___X",
        PLAY_X_MIDDLE_RIGHT: "_OX_OX__X",
        PLAY_X_BOTTOM_LEFT: "_OX_O_X_X",
        PLAY_X_BOTTOM_CENTER: "_OX_O__XX"
      }
    },
    _OX__O__X: {
      on: {
        PLAY_X_TOP_LEFT: "XOX__O__X",
        PLAY_X_MIDDLE_LEFT: "_OXX_O__X",
        PLAY_X_CENTER: "_OX_XO__X",
        PLAY_X_BOTTOM_LEFT: "_OX__OX_X",
        PLAY_X_BOTTOM_CENTER: "_OX__O_XX"
      }
    },
    _OX___O_X: {
      on: {
        PLAY_X_TOP_LEFT: "XOX___O_X",
        PLAY_X_MIDDLE_LEFT: "_OXX__O_X",
        PLAY_X_CENTER: "_OX_X_O_X",
        PLAY_X_MIDDLE_RIGHT: "_OX__XO_X",
        PLAY_X_BOTTOM_CENTER: "_OX___OXX"
      }
    },
    _OX____OX: {
      on: {
        PLAY_X_TOP_LEFT: "XOX____OX",
        PLAY_X_MIDDLE_LEFT: "_OXX___OX",
        PLAY_X_CENTER: "_OX_X__OX",
        PLAY_X_MIDDLE_RIGHT: "_OX__X_OX",
        PLAY_X_BOTTOM_LEFT: "_OX___XOX"
      }
    },
    _OX_____X: {
      on: {
        PLAY_O_TOP_LEFT: "OOX_____X",
        PLAY_O_MIDDLE_LEFT: "_OXO____X",
        PLAY_O_CENTER: "_OX_O___X",
        PLAY_O_MIDDLE_RIGHT: "_OX__O__X",
        PLAY_O_BOTTOM_LEFT: "_OX___O_X",
        PLAY_O_BOTTOM_CENTER: "_OX____OX"
      }
    },
    _OX______: {
      on: {
        PLAY_X_TOP_LEFT: "XOX______",
        PLAY_X_MIDDLE_LEFT: "_OXX_____",
        PLAY_X_CENTER: "_OX_X____",
        PLAY_X_MIDDLE_RIGHT: "_OX__X___",
        PLAY_X_BOTTOM_LEFT: "_OX___X__",
        PLAY_X_BOTTOM_CENTER: "_OX____X_",
        PLAY_X_BOTTOM_RIGHT: "_OX_____X"
      }
    },
    __XOXOX__: { on: { "": "X_WINS" } },
    __XOXOOXX: {
      on: { PLAY_O_TOP_LEFT: "O_XOXOOXX", PLAY_O_TOP_CENTER: "_OXOXOOXX" }
    },
    __XOXOOX_: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOXOOX_",
        PLAY_X_TOP_CENTER: "_XXOXOOX_",
        PLAY_X_BOTTOM_RIGHT: "__XOXOOXX"
      }
    },
    __XOXOXXO: { on: { "": "X_WINS" } },
    __XOXO_XO: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOXO_XO",
        PLAY_X_TOP_CENTER: "_XXOXO_XO",
        PLAY_X_BOTTOM_LEFT: "__XOXOXXO"
      }
    },
    __XOXO_X_: {
      on: {
        PLAY_O_TOP_LEFT: "O_XOXO_X_",
        PLAY_O_TOP_CENTER: "_OXOXO_X_",
        PLAY_O_BOTTOM_LEFT: "__XOXOOX_",
        PLAY_O_BOTTOM_RIGHT: "__XOXO_XO"
      }
    },
    __XOXOO_X: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOXOO_X",
        PLAY_X_TOP_CENTER: "_XXOXOO_X",
        PLAY_X_BOTTOM_CENTER: "__XOXOOXX"
      }
    },
    __XOXOXOX: { on: { "": "X_WINS" } },
    __XOXO_OX: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOXO_OX",
        PLAY_X_TOP_CENTER: "_XXOXO_OX",
        PLAY_X_BOTTOM_LEFT: "__XOXOXOX"
      }
    },
    __XOXO__X: {
      on: {
        PLAY_O_TOP_LEFT: "O_XOXO__X",
        PLAY_O_TOP_CENTER: "_OXOXO__X",
        PLAY_O_BOTTOM_LEFT: "__XOXOO_X",
        PLAY_O_BOTTOM_CENTER: "__XOXO_OX"
      }
    },
    __XOXO___: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOXO___",
        PLAY_X_TOP_CENTER: "_XXOXO___",
        PLAY_X_BOTTOM_LEFT: "__XOXOX__",
        PLAY_X_BOTTOM_CENTER: "__XOXO_X_",
        PLAY_X_BOTTOM_RIGHT: "__XOXO__X"
      }
    },
    __XOXXOOX: { on: { "": "X_WINS" } },
    __XOXXOO_: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOXXOO_",
        PLAY_X_TOP_CENTER: "_XXOXXOO_",
        PLAY_X_BOTTOM_RIGHT: "__XOXXOOX"
      }
    },
    __XOXXOXO: {
      on: { PLAY_O_TOP_LEFT: "O_XOXXOXO", PLAY_O_TOP_CENTER: "_OXOXXOXO" }
    },
    __XOXXO_O: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOXXO_O",
        PLAY_X_TOP_CENTER: "_XXOXXO_O",
        PLAY_X_BOTTOM_CENTER: "__XOXXOXO"
      }
    },
    __XOXXO__: {
      on: {
        PLAY_O_TOP_LEFT: "O_XOXXO__",
        PLAY_O_TOP_CENTER: "_OXOXXO__",
        PLAY_O_BOTTOM_CENTER: "__XOXXOO_",
        PLAY_O_BOTTOM_RIGHT: "__XOXXO_O"
      }
    },
    __XOX_OXO: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOX_OXO",
        PLAY_X_TOP_CENTER: "_XXOX_OXO",
        PLAY_X_MIDDLE_RIGHT: "__XOXXOXO"
      }
    },
    __XOX_OX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_XOX_OX_",
        PLAY_O_TOP_CENTER: "_OXOX_OX_",
        PLAY_O_MIDDLE_RIGHT: "__XOXOOX_",
        PLAY_O_BOTTOM_RIGHT: "__XOX_OXO"
      }
    },
    __XOX_OOX: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOX_OOX",
        PLAY_X_TOP_CENTER: "_XXOX_OOX",
        PLAY_X_MIDDLE_RIGHT: "__XOXXOOX"
      }
    },
    __XOX_O_X: {
      on: {
        PLAY_O_TOP_LEFT: "O_XOX_O_X",
        PLAY_O_TOP_CENTER: "_OXOX_O_X",
        PLAY_O_MIDDLE_RIGHT: "__XOXOO_X",
        PLAY_O_BOTTOM_CENTER: "__XOX_OOX"
      }
    },
    __XOX_O__: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOX_O__",
        PLAY_X_TOP_CENTER: "_XXOX_O__",
        PLAY_X_MIDDLE_RIGHT: "__XOXXO__",
        PLAY_X_BOTTOM_CENTER: "__XOX_OX_",
        PLAY_X_BOTTOM_RIGHT: "__XOX_O_X"
      }
    },
    __XOXXXOO: { on: { "": "X_WINS" } },
    __XOXX_OO: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOXX_OO",
        PLAY_X_TOP_CENTER: "_XXOXX_OO",
        PLAY_X_BOTTOM_LEFT: "__XOXXXOO"
      }
    },
    __XOXX_O_: {
      on: {
        PLAY_O_TOP_LEFT: "O_XOXX_O_",
        PLAY_O_TOP_CENTER: "_OXOXX_O_",
        PLAY_O_BOTTOM_LEFT: "__XOXXOO_",
        PLAY_O_BOTTOM_RIGHT: "__XOXX_OO"
      }
    },
    __XOX_XO_: { on: { "": "X_WINS" } },
    __XOX__OX: {
      on: {
        PLAY_O_TOP_LEFT: "O_XOX__OX",
        PLAY_O_TOP_CENTER: "_OXOX__OX",
        PLAY_O_MIDDLE_RIGHT: "__XOXO_OX",
        PLAY_O_BOTTOM_LEFT: "__XOX_OOX"
      }
    },
    __XOX__O_: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOX__O_",
        PLAY_X_TOP_CENTER: "_XXOX__O_",
        PLAY_X_MIDDLE_RIGHT: "__XOXX_O_",
        PLAY_X_BOTTOM_LEFT: "__XOX_XO_",
        PLAY_X_BOTTOM_RIGHT: "__XOX__OX"
      }
    },
    __XOXX__O: {
      on: {
        PLAY_O_TOP_LEFT: "O_XOXX__O",
        PLAY_O_TOP_CENTER: "_OXOXX__O",
        PLAY_O_BOTTOM_LEFT: "__XOXXO_O",
        PLAY_O_BOTTOM_CENTER: "__XOXX_OO"
      }
    },
    __XOX_X_O: { on: { "": "X_WINS" } },
    __XOX__XO: {
      on: {
        PLAY_O_TOP_LEFT: "O_XOX__XO",
        PLAY_O_TOP_CENTER: "_OXOX__XO",
        PLAY_O_MIDDLE_RIGHT: "__XOXO_XO",
        PLAY_O_BOTTOM_LEFT: "__XOX_OXO"
      }
    },
    __XOX___O: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOX___O",
        PLAY_X_TOP_CENTER: "_XXOX___O",
        PLAY_X_MIDDLE_RIGHT: "__XOXX__O",
        PLAY_X_BOTTOM_LEFT: "__XOX_X_O",
        PLAY_X_BOTTOM_CENTER: "__XOX__XO"
      }
    },
    __XOX____: {
      on: {
        PLAY_O_TOP_LEFT: "O_XOX____",
        PLAY_O_TOP_CENTER: "_OXOX____",
        PLAY_O_MIDDLE_RIGHT: "__XOXO___",
        PLAY_O_BOTTOM_LEFT: "__XOX_O__",
        PLAY_O_BOTTOM_CENTER: "__XOX__O_",
        PLAY_O_BOTTOM_RIGHT: "__XOX___O"
      }
    },
    __XOOXXOX: { on: { "": "X_WINS" } },
    __XOOXXO_: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOOXXO_",
        PLAY_X_TOP_CENTER: "_XXOOXXO_",
        PLAY_X_BOTTOM_RIGHT: "__XOOXXOX"
      }
    },
    __XOOXXXO: {
      on: { PLAY_O_TOP_LEFT: "O_XOOXXXO", PLAY_O_TOP_CENTER: "_OXOOXXXO" }
    },
    __XOOXX_O: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOOXX_O",
        PLAY_X_TOP_CENTER: "_XXOOXX_O",
        PLAY_X_BOTTOM_CENTER: "__XOOXXXO"
      }
    },
    __XOOXX__: {
      on: {
        PLAY_O_TOP_LEFT: "O_XOOXX__",
        PLAY_O_TOP_CENTER: "_OXOOXX__",
        PLAY_O_BOTTOM_CENTER: "__XOOXXO_",
        PLAY_O_BOTTOM_RIGHT: "__XOOXX_O"
      }
    },
    __XOOXOXX: { on: { "": "X_WINS" } },
    __XOOXOX_: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOOXOX_",
        PLAY_X_TOP_CENTER: "_XXOOXOX_",
        PLAY_X_BOTTOM_RIGHT: "__XOOXOXX"
      }
    },
    __XOOX_XO: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOOX_XO",
        PLAY_X_TOP_CENTER: "_XXOOX_XO",
        PLAY_X_BOTTOM_LEFT: "__XOOXXXO"
      }
    },
    __XOOX_X_: {
      on: {
        PLAY_O_TOP_LEFT: "O_XOOX_X_",
        PLAY_O_TOP_CENTER: "_OXOOX_X_",
        PLAY_O_BOTTOM_LEFT: "__XOOXOX_",
        PLAY_O_BOTTOM_RIGHT: "__XOOX_XO"
      }
    },
    __XOOX__X: { on: { "": "X_WINS" } },
    __XOOX___: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOOX___",
        PLAY_X_TOP_CENTER: "_XXOOX___",
        PLAY_X_BOTTOM_LEFT: "__XOOXX__",
        PLAY_X_BOTTOM_CENTER: "__XOOX_X_",
        PLAY_X_BOTTOM_RIGHT: "__XOOX__X"
      }
    },
    __XO_XOXO: {
      on: {
        PLAY_X_TOP_LEFT: "X_XO_XOXO",
        PLAY_X_TOP_CENTER: "_XXO_XOXO",
        PLAY_X_CENTER: "__XOXXOXO"
      }
    },
    __XO_XOX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_XO_XOX_",
        PLAY_O_TOP_CENTER: "_OXO_XOX_",
        PLAY_O_CENTER: "__XOOXOX_",
        PLAY_O_BOTTOM_RIGHT: "__XO_XOXO"
      }
    },
    __XO_XO_X: { on: { "": "X_WINS" } },
    __XO_XO__: {
      on: {
        PLAY_X_TOP_LEFT: "X_XO_XO__",
        PLAY_X_TOP_CENTER: "_XXO_XO__",
        PLAY_X_CENTER: "__XOXXO__",
        PLAY_X_BOTTOM_CENTER: "__XO_XOX_",
        PLAY_X_BOTTOM_RIGHT: "__XO_XO_X"
      }
    },
    __XO_XXOO: {
      on: {
        PLAY_X_TOP_LEFT: "X_XO_XXOO",
        PLAY_X_TOP_CENTER: "_XXO_XXOO",
        PLAY_X_CENTER: "__XOXXXOO"
      }
    },
    __XO_XXO_: {
      on: {
        PLAY_O_TOP_LEFT: "O_XO_XXO_",
        PLAY_O_TOP_CENTER: "_OXO_XXO_",
        PLAY_O_CENTER: "__XOOXXO_",
        PLAY_O_BOTTOM_RIGHT: "__XO_XXOO"
      }
    },
    __XO_X_OX: { on: { "": "X_WINS" } },
    __XO_X_O_: {
      on: {
        PLAY_X_TOP_LEFT: "X_XO_X_O_",
        PLAY_X_TOP_CENTER: "_XXO_X_O_",
        PLAY_X_CENTER: "__XOXX_O_",
        PLAY_X_BOTTOM_LEFT: "__XO_XXO_",
        PLAY_X_BOTTOM_RIGHT: "__XO_X_OX"
      }
    },
    __XO_XX_O: {
      on: {
        PLAY_O_TOP_LEFT: "O_XO_XX_O",
        PLAY_O_TOP_CENTER: "_OXO_XX_O",
        PLAY_O_CENTER: "__XOOXX_O",
        PLAY_O_BOTTOM_CENTER: "__XO_XXOO"
      }
    },
    __XO_X_XO: {
      on: {
        PLAY_O_TOP_LEFT: "O_XO_X_XO",
        PLAY_O_TOP_CENTER: "_OXO_X_XO",
        PLAY_O_CENTER: "__XOOX_XO",
        PLAY_O_BOTTOM_LEFT: "__XO_XOXO"
      }
    },
    __XO_X__O: {
      on: {
        PLAY_X_TOP_LEFT: "X_XO_X__O",
        PLAY_X_TOP_CENTER: "_XXO_X__O",
        PLAY_X_CENTER: "__XOXX__O",
        PLAY_X_BOTTOM_LEFT: "__XO_XX_O",
        PLAY_X_BOTTOM_CENTER: "__XO_X_XO"
      }
    },
    __XO_X___: {
      on: {
        PLAY_O_TOP_LEFT: "O_XO_X___",
        PLAY_O_TOP_CENTER: "_OXO_X___",
        PLAY_O_CENTER: "__XOOX___",
        PLAY_O_BOTTOM_LEFT: "__XO_XO__",
        PLAY_O_BOTTOM_CENTER: "__XO_X_O_",
        PLAY_O_BOTTOM_RIGHT: "__XO_X__O"
      }
    },
    __XOOOXX_: { on: { "": "O_WINS" } },
    __XOO_XXO: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOO_XXO",
        PLAY_X_TOP_CENTER: "_XXOO_XXO",
        PLAY_X_MIDDLE_RIGHT: "__XOOXXXO"
      }
    },
    __XOO_XX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_XOO_XX_",
        PLAY_O_TOP_CENTER: "_OXOO_XX_",
        PLAY_O_MIDDLE_RIGHT: "__XOOOXX_",
        PLAY_O_BOTTOM_RIGHT: "__XOO_XXO"
      }
    },
    __XOOOX_X: { on: { "": "O_WINS" } },
    __XOO_XOX: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOO_XOX",
        PLAY_X_TOP_CENTER: "_XXOO_XOX",
        PLAY_X_MIDDLE_RIGHT: "__XOOXXOX"
      }
    },
    __XOO_X_X: {
      on: {
        PLAY_O_TOP_LEFT: "O_XOO_X_X",
        PLAY_O_TOP_CENTER: "_OXOO_X_X",
        PLAY_O_MIDDLE_RIGHT: "__XOOOX_X",
        PLAY_O_BOTTOM_CENTER: "__XOO_XOX"
      }
    },
    __XOO_X__: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOO_X__",
        PLAY_X_TOP_CENTER: "_XXOO_X__",
        PLAY_X_MIDDLE_RIGHT: "__XOOXX__",
        PLAY_X_BOTTOM_CENTER: "__XOO_XX_",
        PLAY_X_BOTTOM_RIGHT: "__XOO_X_X"
      }
    },
    __XO_OXXO: {
      on: {
        PLAY_X_TOP_LEFT: "X_XO_OXXO",
        PLAY_X_TOP_CENTER: "_XXO_OXXO",
        PLAY_X_CENTER: "__XOXOXXO"
      }
    },
    __XO_OXX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_XO_OXX_",
        PLAY_O_TOP_CENTER: "_OXO_OXX_",
        PLAY_O_CENTER: "__XOOOXX_",
        PLAY_O_BOTTOM_RIGHT: "__XO_OXXO"
      }
    },
    __XO_OXOX: {
      on: {
        PLAY_X_TOP_LEFT: "X_XO_OXOX",
        PLAY_X_TOP_CENTER: "_XXO_OXOX",
        PLAY_X_CENTER: "__XOXOXOX"
      }
    },
    __XO_OX_X: {
      on: {
        PLAY_O_TOP_LEFT: "O_XO_OX_X",
        PLAY_O_TOP_CENTER: "_OXO_OX_X",
        PLAY_O_CENTER: "__XOOOX_X",
        PLAY_O_BOTTOM_CENTER: "__XO_OXOX"
      }
    },
    __XO_OX__: {
      on: {
        PLAY_X_TOP_LEFT: "X_XO_OX__",
        PLAY_X_TOP_CENTER: "_XXO_OX__",
        PLAY_X_CENTER: "__XOXOX__",
        PLAY_X_BOTTOM_CENTER: "__XO_OXX_",
        PLAY_X_BOTTOM_RIGHT: "__XO_OX_X"
      }
    },
    __XO__XOX: {
      on: {
        PLAY_O_TOP_LEFT: "O_XO__XOX",
        PLAY_O_TOP_CENTER: "_OXO__XOX",
        PLAY_O_CENTER: "__XOO_XOX",
        PLAY_O_MIDDLE_RIGHT: "__XO_OXOX"
      }
    },
    __XO__XO_: {
      on: {
        PLAY_X_TOP_LEFT: "X_XO__XO_",
        PLAY_X_TOP_CENTER: "_XXO__XO_",
        PLAY_X_CENTER: "__XOX_XO_",
        PLAY_X_MIDDLE_RIGHT: "__XO_XXO_",
        PLAY_X_BOTTOM_RIGHT: "__XO__XOX"
      }
    },
    __XO__XXO: {
      on: {
        PLAY_O_TOP_LEFT: "O_XO__XXO",
        PLAY_O_TOP_CENTER: "_OXO__XXO",
        PLAY_O_CENTER: "__XOO_XXO",
        PLAY_O_MIDDLE_RIGHT: "__XO_OXXO"
      }
    },
    __XO__X_O: {
      on: {
        PLAY_X_TOP_LEFT: "X_XO__X_O",
        PLAY_X_TOP_CENTER: "_XXO__X_O",
        PLAY_X_CENTER: "__XOX_X_O",
        PLAY_X_MIDDLE_RIGHT: "__XO_XX_O",
        PLAY_X_BOTTOM_CENTER: "__XO__XXO"
      }
    },
    __XO__X__: {
      on: {
        PLAY_O_TOP_LEFT: "O_XO__X__",
        PLAY_O_TOP_CENTER: "_OXO__X__",
        PLAY_O_CENTER: "__XOO_X__",
        PLAY_O_MIDDLE_RIGHT: "__XO_OX__",
        PLAY_O_BOTTOM_CENTER: "__XO__XO_",
        PLAY_O_BOTTOM_RIGHT: "__XO__X_O"
      }
    },
    __XOOO_XX: { on: { "": "O_WINS" } },
    __XOO_OXX: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOO_OXX",
        PLAY_X_TOP_CENTER: "_XXOO_OXX",
        PLAY_X_MIDDLE_RIGHT: "__XOOXOXX"
      }
    },
    __XOO__XX: {
      on: {
        PLAY_O_TOP_LEFT: "O_XOO__XX",
        PLAY_O_TOP_CENTER: "_OXOO__XX",
        PLAY_O_MIDDLE_RIGHT: "__XOOO_XX",
        PLAY_O_BOTTOM_LEFT: "__XOO_OXX"
      }
    },
    __XOO__X_: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOO__X_",
        PLAY_X_TOP_CENTER: "_XXOO__X_",
        PLAY_X_MIDDLE_RIGHT: "__XOOX_X_",
        PLAY_X_BOTTOM_LEFT: "__XOO_XX_",
        PLAY_X_BOTTOM_RIGHT: "__XOO__XX"
      }
    },
    __XO_OOXX: {
      on: {
        PLAY_X_TOP_LEFT: "X_XO_OOXX",
        PLAY_X_TOP_CENTER: "_XXO_OOXX",
        PLAY_X_CENTER: "__XOXOOXX"
      }
    },
    __XO_O_XX: {
      on: {
        PLAY_O_TOP_LEFT: "O_XO_O_XX",
        PLAY_O_TOP_CENTER: "_OXO_O_XX",
        PLAY_O_CENTER: "__XOOO_XX",
        PLAY_O_BOTTOM_LEFT: "__XO_OOXX"
      }
    },
    __XO_O_X_: {
      on: {
        PLAY_X_TOP_LEFT: "X_XO_O_X_",
        PLAY_X_TOP_CENTER: "_XXO_O_X_",
        PLAY_X_CENTER: "__XOXO_X_",
        PLAY_X_BOTTOM_LEFT: "__XO_OXX_",
        PLAY_X_BOTTOM_RIGHT: "__XO_O_XX"
      }
    },
    __XO__OXX: {
      on: {
        PLAY_O_TOP_LEFT: "O_XO__OXX",
        PLAY_O_TOP_CENTER: "_OXO__OXX",
        PLAY_O_CENTER: "__XOO_OXX",
        PLAY_O_MIDDLE_RIGHT: "__XO_OOXX"
      }
    },
    __XO__OX_: {
      on: {
        PLAY_X_TOP_LEFT: "X_XO__OX_",
        PLAY_X_TOP_CENTER: "_XXO__OX_",
        PLAY_X_CENTER: "__XOX_OX_",
        PLAY_X_MIDDLE_RIGHT: "__XO_XOX_",
        PLAY_X_BOTTOM_RIGHT: "__XO__OXX"
      }
    },
    __XO___XO: {
      on: {
        PLAY_X_TOP_LEFT: "X_XO___XO",
        PLAY_X_TOP_CENTER: "_XXO___XO",
        PLAY_X_CENTER: "__XOX__XO",
        PLAY_X_MIDDLE_RIGHT: "__XO_X_XO",
        PLAY_X_BOTTOM_LEFT: "__XO__XXO"
      }
    },
    __XO___X_: {
      on: {
        PLAY_O_TOP_LEFT: "O_XO___X_",
        PLAY_O_TOP_CENTER: "_OXO___X_",
        PLAY_O_CENTER: "__XOO__X_",
        PLAY_O_MIDDLE_RIGHT: "__XO_O_X_",
        PLAY_O_BOTTOM_LEFT: "__XO__OX_",
        PLAY_O_BOTTOM_RIGHT: "__XO___XO"
      }
    },
    __XOO___X: {
      on: {
        PLAY_X_TOP_LEFT: "X_XOO___X",
        PLAY_X_TOP_CENTER: "_XXOO___X",
        PLAY_X_MIDDLE_RIGHT: "__XOOX__X",
        PLAY_X_BOTTOM_LEFT: "__XOO_X_X",
        PLAY_X_BOTTOM_CENTER: "__XOO__XX"
      }
    },
    __XO_O__X: {
      on: {
        PLAY_X_TOP_LEFT: "X_XO_O__X",
        PLAY_X_TOP_CENTER: "_XXO_O__X",
        PLAY_X_CENTER: "__XOXO__X",
        PLAY_X_BOTTOM_LEFT: "__XO_OX_X",
        PLAY_X_BOTTOM_CENTER: "__XO_O_XX"
      }
    },
    __XO__O_X: {
      on: {
        PLAY_X_TOP_LEFT: "X_XO__O_X",
        PLAY_X_TOP_CENTER: "_XXO__O_X",
        PLAY_X_CENTER: "__XOX_O_X",
        PLAY_X_MIDDLE_RIGHT: "__XO_XO_X",
        PLAY_X_BOTTOM_CENTER: "__XO__OXX"
      }
    },
    __XO___OX: {
      on: {
        PLAY_X_TOP_LEFT: "X_XO___OX",
        PLAY_X_TOP_CENTER: "_XXO___OX",
        PLAY_X_CENTER: "__XOX__OX",
        PLAY_X_MIDDLE_RIGHT: "__XO_X_OX",
        PLAY_X_BOTTOM_LEFT: "__XO__XOX"
      }
    },
    __XO____X: {
      on: {
        PLAY_O_TOP_LEFT: "O_XO____X",
        PLAY_O_TOP_CENTER: "_OXO____X",
        PLAY_O_CENTER: "__XOO___X",
        PLAY_O_MIDDLE_RIGHT: "__XO_O__X",
        PLAY_O_BOTTOM_LEFT: "__XO__O_X",
        PLAY_O_BOTTOM_CENTER: "__XO___OX"
      }
    },
    __XO_____: {
      on: {
        PLAY_X_TOP_LEFT: "X_XO_____",
        PLAY_X_TOP_CENTER: "_XXO_____",
        PLAY_X_CENTER: "__XOX____",
        PLAY_X_MIDDLE_RIGHT: "__XO_X___",
        PLAY_X_BOTTOM_LEFT: "__XO__X__",
        PLAY_X_BOTTOM_CENTER: "__XO___X_",
        PLAY_X_BOTTOM_RIGHT: "__XO____X"
      }
    },
    __XXOOXOX: {
      on: { PLAY_O_TOP_LEFT: "O_XXOOXOX", PLAY_O_TOP_CENTER: "_OXXOOXOX" }
    },
    __XXOOXO_: {
      on: {
        PLAY_X_TOP_LEFT: "X_XXOOXO_",
        PLAY_X_TOP_CENTER: "_XXXOOXO_",
        PLAY_X_BOTTOM_RIGHT: "__XXOOXOX"
      }
    },
    __XXOOXXO: {
      on: { PLAY_O_TOP_LEFT: "O_XXOOXXO", PLAY_O_TOP_CENTER: "_OXXOOXXO" }
    },
    __XXOOX_O: {
      on: {
        PLAY_X_TOP_LEFT: "X_XXOOX_O",
        PLAY_X_TOP_CENTER: "_XXXOOX_O",
        PLAY_X_BOTTOM_CENTER: "__XXOOXXO"
      }
    },
    __XXOOX__: {
      on: {
        PLAY_O_TOP_LEFT: "O_XXOOX__",
        PLAY_O_TOP_CENTER: "_OXXOOX__",
        PLAY_O_BOTTOM_CENTER: "__XXOOXO_",
        PLAY_O_BOTTOM_RIGHT: "__XXOOX_O"
      }
    },
    __XXOOOXX: {
      on: { PLAY_O_TOP_LEFT: "O_XXOOOXX", PLAY_O_TOP_CENTER: "_OXXOOOXX" }
    },
    __XXOOOX_: {
      on: {
        PLAY_X_TOP_LEFT: "X_XXOOOX_",
        PLAY_X_TOP_CENTER: "_XXXOOOX_",
        PLAY_X_BOTTOM_RIGHT: "__XXOOOXX"
      }
    },
    __XXOO_XO: {
      on: {
        PLAY_X_TOP_LEFT: "X_XXOO_XO",
        PLAY_X_TOP_CENTER: "_XXXOO_XO",
        PLAY_X_BOTTOM_LEFT: "__XXOOXXO"
      }
    },
    __XXOO_X_: {
      on: {
        PLAY_O_TOP_LEFT: "O_XXOO_X_",
        PLAY_O_TOP_CENTER: "_OXXOO_X_",
        PLAY_O_BOTTOM_LEFT: "__XXOOOX_",
        PLAY_O_BOTTOM_RIGHT: "__XXOO_XO"
      }
    },
    __XXOOO_X: {
      on: {
        PLAY_X_TOP_LEFT: "X_XXOOO_X",
        PLAY_X_TOP_CENTER: "_XXXOOO_X",
        PLAY_X_BOTTOM_CENTER: "__XXOOOXX"
      }
    },
    __XXOO_OX: {
      on: {
        PLAY_X_TOP_LEFT: "X_XXOO_OX",
        PLAY_X_TOP_CENTER: "_XXXOO_OX",
        PLAY_X_BOTTOM_LEFT: "__XXOOXOX"
      }
    },
    __XXOO__X: {
      on: {
        PLAY_O_TOP_LEFT: "O_XXOO__X",
        PLAY_O_TOP_CENTER: "_OXXOO__X",
        PLAY_O_BOTTOM_LEFT: "__XXOOO_X",
        PLAY_O_BOTTOM_CENTER: "__XXOO_OX"
      }
    },
    __XXOO___: {
      on: {
        PLAY_X_TOP_LEFT: "X_XXOO___",
        PLAY_X_TOP_CENTER: "_XXXOO___",
        PLAY_X_BOTTOM_LEFT: "__XXOOX__",
        PLAY_X_BOTTOM_CENTER: "__XXOO_X_",
        PLAY_X_BOTTOM_RIGHT: "__XXOO__X"
      }
    },
    __XXOXOOX: { on: { "": "X_WINS" } },
    __XXOXOO_: {
      on: {
        PLAY_X_TOP_LEFT: "X_XXOXOO_",
        PLAY_X_TOP_CENTER: "_XXXOXOO_",
        PLAY_X_BOTTOM_RIGHT: "__XXOXOOX"
      }
    },
    __XXOXOXO: {
      on: { PLAY_O_TOP_LEFT: "O_XXOXOXO", PLAY_O_TOP_CENTER: "_OXXOXOXO" }
    },
    __XXOXO_O: {
      on: {
        PLAY_X_TOP_LEFT: "X_XXOXO_O",
        PLAY_X_TOP_CENTER: "_XXXOXO_O",
        PLAY_X_BOTTOM_CENTER: "__XXOXOXO"
      }
    },
    __XXOXO__: {
      on: {
        PLAY_O_TOP_LEFT: "O_XXOXO__",
        PLAY_O_TOP_CENTER: "_OXXOXO__",
        PLAY_O_BOTTOM_CENTER: "__XXOXOO_",
        PLAY_O_BOTTOM_RIGHT: "__XXOXO_O"
      }
    },
    __XXO_OXO: {
      on: {
        PLAY_X_TOP_LEFT: "X_XXO_OXO",
        PLAY_X_TOP_CENTER: "_XXXO_OXO",
        PLAY_X_MIDDLE_RIGHT: "__XXOXOXO"
      }
    },
    __XXO_OX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_XXO_OX_",
        PLAY_O_TOP_CENTER: "_OXXO_OX_",
        PLAY_O_MIDDLE_RIGHT: "__XXOOOX_",
        PLAY_O_BOTTOM_RIGHT: "__XXO_OXO"
      }
    },
    __XXO_OOX: {
      on: {
        PLAY_X_TOP_LEFT: "X_XXO_OOX",
        PLAY_X_TOP_CENTER: "_XXXO_OOX",
        PLAY_X_MIDDLE_RIGHT: "__XXOXOOX"
      }
    },
    __XXO_O_X: {
      on: {
        PLAY_O_TOP_LEFT: "O_XXO_O_X",
        PLAY_O_TOP_CENTER: "_OXXO_O_X",
        PLAY_O_MIDDLE_RIGHT: "__XXOOO_X",
        PLAY_O_BOTTOM_CENTER: "__XXO_OOX"
      }
    },
    __XXO_O__: {
      on: {
        PLAY_X_TOP_LEFT: "X_XXO_O__",
        PLAY_X_TOP_CENTER: "_XXXO_O__",
        PLAY_X_MIDDLE_RIGHT: "__XXOXO__",
        PLAY_X_BOTTOM_CENTER: "__XXO_OX_",
        PLAY_X_BOTTOM_RIGHT: "__XXO_O_X"
      }
    },
    __XXOXXOO: {
      on: { PLAY_O_TOP_LEFT: "O_XXOXXOO", PLAY_O_TOP_CENTER: "_OXXOXXOO" }
    },
    __XXOX_OO: {
      on: {
        PLAY_X_TOP_LEFT: "X_XXOX_OO",
        PLAY_X_TOP_CENTER: "_XXXOX_OO",
        PLAY_X_BOTTOM_LEFT: "__XXOXXOO"
      }
    },
    __XXOX_O_: {
      on: {
        PLAY_O_TOP_LEFT: "O_XXOX_O_",
        PLAY_O_TOP_CENTER: "_OXXOX_O_",
        PLAY_O_BOTTOM_LEFT: "__XXOXOO_",
        PLAY_O_BOTTOM_RIGHT: "__XXOX_OO"
      }
    },
    __XXO_XOO: {
      on: {
        PLAY_X_TOP_LEFT: "X_XXO_XOO",
        PLAY_X_TOP_CENTER: "_XXXO_XOO",
        PLAY_X_MIDDLE_RIGHT: "__XXOXXOO"
      }
    },
    __XXO_XO_: {
      on: {
        PLAY_O_TOP_LEFT: "O_XXO_XO_",
        PLAY_O_TOP_CENTER: "_OXXO_XO_",
        PLAY_O_MIDDLE_RIGHT: "__XXOOXO_",
        PLAY_O_BOTTOM_RIGHT: "__XXO_XOO"
      }
    },
    __XXO__OX: {
      on: {
        PLAY_O_TOP_LEFT: "O_XXO__OX",
        PLAY_O_TOP_CENTER: "_OXXO__OX",
        PLAY_O_MIDDLE_RIGHT: "__XXOO_OX",
        PLAY_O_BOTTOM_LEFT: "__XXO_OOX"
      }
    },
    __XXO__O_: {
      on: {
        PLAY_X_TOP_LEFT: "X_XXO__O_",
        PLAY_X_TOP_CENTER: "_XXXO__O_",
        PLAY_X_MIDDLE_RIGHT: "__XXOX_O_",
        PLAY_X_BOTTOM_LEFT: "__XXO_XO_",
        PLAY_X_BOTTOM_RIGHT: "__XXO__OX"
      }
    },
    __XXOX__O: {
      on: {
        PLAY_O_TOP_LEFT: "O_XXOX__O",
        PLAY_O_TOP_CENTER: "_OXXOX__O",
        PLAY_O_BOTTOM_LEFT: "__XXOXO_O",
        PLAY_O_BOTTOM_CENTER: "__XXOX_OO"
      }
    },
    __XXO_X_O: {
      on: {
        PLAY_O_TOP_LEFT: "O_XXO_X_O",
        PLAY_O_TOP_CENTER: "_OXXO_X_O",
        PLAY_O_MIDDLE_RIGHT: "__XXOOX_O",
        PLAY_O_BOTTOM_CENTER: "__XXO_XOO"
      }
    },
    __XXO__XO: {
      on: {
        PLAY_O_TOP_LEFT: "O_XXO__XO",
        PLAY_O_TOP_CENTER: "_OXXO__XO",
        PLAY_O_MIDDLE_RIGHT: "__XXOO_XO",
        PLAY_O_BOTTOM_LEFT: "__XXO_OXO"
      }
    },
    __XXO___O: {
      on: {
        PLAY_X_TOP_LEFT: "X_XXO___O",
        PLAY_X_TOP_CENTER: "_XXXO___O",
        PLAY_X_MIDDLE_RIGHT: "__XXOX__O",
        PLAY_X_BOTTOM_LEFT: "__XXO_X_O",
        PLAY_X_BOTTOM_CENTER: "__XXO__XO"
      }
    },
    __XXO____: {
      on: {
        PLAY_O_TOP_LEFT: "O_XXO____",
        PLAY_O_TOP_CENTER: "_OXXO____",
        PLAY_O_MIDDLE_RIGHT: "__XXOO___",
        PLAY_O_BOTTOM_LEFT: "__XXO_O__",
        PLAY_O_BOTTOM_CENTER: "__XXO__O_",
        PLAY_O_BOTTOM_RIGHT: "__XXO___O"
      }
    },
    __X_OXOXO: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_OXOXO",
        PLAY_X_TOP_CENTER: "_XX_OXOXO",
        PLAY_X_MIDDLE_LEFT: "__XXOXOXO"
      }
    },
    __X_OXOX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_OXOX_",
        PLAY_O_TOP_CENTER: "_OX_OXOX_",
        PLAY_O_MIDDLE_LEFT: "__XOOXOX_",
        PLAY_O_BOTTOM_RIGHT: "__X_OXOXO"
      }
    },
    __X_OXO_X: { on: { "": "X_WINS" } },
    __X_OXO__: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_OXO__",
        PLAY_X_TOP_CENTER: "_XX_OXO__",
        PLAY_X_MIDDLE_LEFT: "__XXOXO__",
        PLAY_X_BOTTOM_CENTER: "__X_OXOX_",
        PLAY_X_BOTTOM_RIGHT: "__X_OXO_X"
      }
    },
    __X_OXXOO: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_OXXOO",
        PLAY_X_TOP_CENTER: "_XX_OXXOO",
        PLAY_X_MIDDLE_LEFT: "__XXOXXOO"
      }
    },
    __X_OXXO_: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_OXXO_",
        PLAY_O_TOP_CENTER: "_OX_OXXO_",
        PLAY_O_MIDDLE_LEFT: "__XOOXXO_",
        PLAY_O_BOTTOM_RIGHT: "__X_OXXOO"
      }
    },
    __X_OX_OX: { on: { "": "X_WINS" } },
    __X_OX_O_: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_OX_O_",
        PLAY_X_TOP_CENTER: "_XX_OX_O_",
        PLAY_X_MIDDLE_LEFT: "__XXOX_O_",
        PLAY_X_BOTTOM_LEFT: "__X_OXXO_",
        PLAY_X_BOTTOM_RIGHT: "__X_OX_OX"
      }
    },
    __X_OXX_O: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_OXX_O",
        PLAY_O_TOP_CENTER: "_OX_OXX_O",
        PLAY_O_MIDDLE_LEFT: "__XOOXX_O",
        PLAY_O_BOTTOM_CENTER: "__X_OXXOO"
      }
    },
    __X_OX_XO: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_OX_XO",
        PLAY_O_TOP_CENTER: "_OX_OX_XO",
        PLAY_O_MIDDLE_LEFT: "__XOOX_XO",
        PLAY_O_BOTTOM_LEFT: "__X_OXOXO"
      }
    },
    __X_OX__O: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_OX__O",
        PLAY_X_TOP_CENTER: "_XX_OX__O",
        PLAY_X_MIDDLE_LEFT: "__XXOX__O",
        PLAY_X_BOTTOM_LEFT: "__X_OXX_O",
        PLAY_X_BOTTOM_CENTER: "__X_OX_XO"
      }
    },
    __X_OX___: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_OX___",
        PLAY_O_TOP_CENTER: "_OX_OX___",
        PLAY_O_MIDDLE_LEFT: "__XOOX___",
        PLAY_O_BOTTOM_LEFT: "__X_OXO__",
        PLAY_O_BOTTOM_CENTER: "__X_OX_O_",
        PLAY_O_BOTTOM_RIGHT: "__X_OX__O"
      }
    },
    __X_OOXXO: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_OOXXO",
        PLAY_X_TOP_CENTER: "_XX_OOXXO",
        PLAY_X_MIDDLE_LEFT: "__XXOOXXO"
      }
    },
    __X_OOXX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_OOXX_",
        PLAY_O_TOP_CENTER: "_OX_OOXX_",
        PLAY_O_MIDDLE_LEFT: "__XOOOXX_",
        PLAY_O_BOTTOM_RIGHT: "__X_OOXXO"
      }
    },
    __X_OOXOX: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_OOXOX",
        PLAY_X_TOP_CENTER: "_XX_OOXOX",
        PLAY_X_MIDDLE_LEFT: "__XXOOXOX"
      }
    },
    __X_OOX_X: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_OOX_X",
        PLAY_O_TOP_CENTER: "_OX_OOX_X",
        PLAY_O_MIDDLE_LEFT: "__XOOOX_X",
        PLAY_O_BOTTOM_CENTER: "__X_OOXOX"
      }
    },
    __X_OOX__: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_OOX__",
        PLAY_X_TOP_CENTER: "_XX_OOX__",
        PLAY_X_MIDDLE_LEFT: "__XXOOX__",
        PLAY_X_BOTTOM_CENTER: "__X_OOXX_",
        PLAY_X_BOTTOM_RIGHT: "__X_OOX_X"
      }
    },
    __X_O_XOX: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_O_XOX",
        PLAY_O_TOP_CENTER: "_OX_O_XOX",
        PLAY_O_MIDDLE_LEFT: "__XOO_XOX",
        PLAY_O_MIDDLE_RIGHT: "__X_OOXOX"
      }
    },
    __X_O_XO_: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_O_XO_",
        PLAY_X_TOP_CENTER: "_XX_O_XO_",
        PLAY_X_MIDDLE_LEFT: "__XXO_XO_",
        PLAY_X_MIDDLE_RIGHT: "__X_OXXO_",
        PLAY_X_BOTTOM_RIGHT: "__X_O_XOX"
      }
    },
    __X_O_XXO: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_O_XXO",
        PLAY_O_TOP_CENTER: "_OX_O_XXO",
        PLAY_O_MIDDLE_LEFT: "__XOO_XXO",
        PLAY_O_MIDDLE_RIGHT: "__X_OOXXO"
      }
    },
    __X_O_X_O: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_O_X_O",
        PLAY_X_TOP_CENTER: "_XX_O_X_O",
        PLAY_X_MIDDLE_LEFT: "__XXO_X_O",
        PLAY_X_MIDDLE_RIGHT: "__X_OXX_O",
        PLAY_X_BOTTOM_CENTER: "__X_O_XXO"
      }
    },
    __X_O_X__: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_O_X__",
        PLAY_O_TOP_CENTER: "_OX_O_X__",
        PLAY_O_MIDDLE_LEFT: "__XOO_X__",
        PLAY_O_MIDDLE_RIGHT: "__X_OOX__",
        PLAY_O_BOTTOM_CENTER: "__X_O_XO_",
        PLAY_O_BOTTOM_RIGHT: "__X_O_X_O"
      }
    },
    __X_OOOXX: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_OOOXX",
        PLAY_X_TOP_CENTER: "_XX_OOOXX",
        PLAY_X_MIDDLE_LEFT: "__XXOOOXX"
      }
    },
    __X_OO_XX: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_OO_XX",
        PLAY_O_TOP_CENTER: "_OX_OO_XX",
        PLAY_O_MIDDLE_LEFT: "__XOOO_XX",
        PLAY_O_BOTTOM_LEFT: "__X_OOOXX"
      }
    },
    __X_OO_X_: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_OO_X_",
        PLAY_X_TOP_CENTER: "_XX_OO_X_",
        PLAY_X_MIDDLE_LEFT: "__XXOO_X_",
        PLAY_X_BOTTOM_LEFT: "__X_OOXX_",
        PLAY_X_BOTTOM_RIGHT: "__X_OO_XX"
      }
    },
    __X_O_OXX: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_O_OXX",
        PLAY_O_TOP_CENTER: "_OX_O_OXX",
        PLAY_O_MIDDLE_LEFT: "__XOO_OXX",
        PLAY_O_MIDDLE_RIGHT: "__X_OOOXX"
      }
    },
    __X_O_OX_: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_O_OX_",
        PLAY_X_TOP_CENTER: "_XX_O_OX_",
        PLAY_X_MIDDLE_LEFT: "__XXO_OX_",
        PLAY_X_MIDDLE_RIGHT: "__X_OXOX_",
        PLAY_X_BOTTOM_RIGHT: "__X_O_OXX"
      }
    },
    __X_O__XO: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_O__XO",
        PLAY_X_TOP_CENTER: "_XX_O__XO",
        PLAY_X_MIDDLE_LEFT: "__XXO__XO",
        PLAY_X_MIDDLE_RIGHT: "__X_OX_XO",
        PLAY_X_BOTTOM_LEFT: "__X_O_XXO"
      }
    },
    __X_O__X_: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_O__X_",
        PLAY_O_TOP_CENTER: "_OX_O__X_",
        PLAY_O_MIDDLE_LEFT: "__XOO__X_",
        PLAY_O_MIDDLE_RIGHT: "__X_OO_X_",
        PLAY_O_BOTTOM_LEFT: "__X_O_OX_",
        PLAY_O_BOTTOM_RIGHT: "__X_O__XO"
      }
    },
    __X_OO__X: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_OO__X",
        PLAY_X_TOP_CENTER: "_XX_OO__X",
        PLAY_X_MIDDLE_LEFT: "__XXOO__X",
        PLAY_X_BOTTOM_LEFT: "__X_OOX_X",
        PLAY_X_BOTTOM_CENTER: "__X_OO_XX"
      }
    },
    __X_O_O_X: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_O_O_X",
        PLAY_X_TOP_CENTER: "_XX_O_O_X",
        PLAY_X_MIDDLE_LEFT: "__XXO_O_X",
        PLAY_X_MIDDLE_RIGHT: "__X_OXO_X",
        PLAY_X_BOTTOM_CENTER: "__X_O_OXX"
      }
    },
    __X_O__OX: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_O__OX",
        PLAY_X_TOP_CENTER: "_XX_O__OX",
        PLAY_X_MIDDLE_LEFT: "__XXO__OX",
        PLAY_X_MIDDLE_RIGHT: "__X_OX_OX",
        PLAY_X_BOTTOM_LEFT: "__X_O_XOX"
      }
    },
    __X_O___X: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_O___X",
        PLAY_O_TOP_CENTER: "_OX_O___X",
        PLAY_O_MIDDLE_LEFT: "__XOO___X",
        PLAY_O_MIDDLE_RIGHT: "__X_OO__X",
        PLAY_O_BOTTOM_LEFT: "__X_O_O_X",
        PLAY_O_BOTTOM_CENTER: "__X_O__OX"
      }
    },
    __X_O____: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_O____",
        PLAY_X_TOP_CENTER: "_XX_O____",
        PLAY_X_MIDDLE_LEFT: "__XXO____",
        PLAY_X_MIDDLE_RIGHT: "__X_OX___",
        PLAY_X_BOTTOM_LEFT: "__X_O_X__",
        PLAY_X_BOTTOM_CENTER: "__X_O__X_",
        PLAY_X_BOTTOM_RIGHT: "__X_O___X"
      }
    },
    __XXXOOOX: {
      on: { PLAY_O_TOP_LEFT: "O_XXXOOOX", PLAY_O_TOP_CENTER: "_OXXXOOOX" }
    },
    __XXXOOO_: {
      on: {
        PLAY_X_TOP_LEFT: "X_XXXOOO_",
        PLAY_X_TOP_CENTER: "_XXXXOOO_",
        PLAY_X_BOTTOM_RIGHT: "__XXXOOOX"
      }
    },
    __XXXOOXO: {
      on: { PLAY_O_TOP_LEFT: "O_XXXOOXO", PLAY_O_TOP_CENTER: "_OXXXOOXO" }
    },
    __XXXOO_O: {
      on: {
        PLAY_X_TOP_LEFT: "X_XXXOO_O",
        PLAY_X_TOP_CENTER: "_XXXXOO_O",
        PLAY_X_BOTTOM_CENTER: "__XXXOOXO"
      }
    },
    __XXXOO__: {
      on: {
        PLAY_O_TOP_LEFT: "O_XXXOO__",
        PLAY_O_TOP_CENTER: "_OXXXOO__",
        PLAY_O_BOTTOM_CENTER: "__XXXOOO_",
        PLAY_O_BOTTOM_RIGHT: "__XXXOO_O"
      }
    },
    __XX_OOXO: {
      on: {
        PLAY_X_TOP_LEFT: "X_XX_OOXO",
        PLAY_X_TOP_CENTER: "_XXX_OOXO",
        PLAY_X_CENTER: "__XXXOOXO"
      }
    },
    __XX_OOX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_XX_OOX_",
        PLAY_O_TOP_CENTER: "_OXX_OOX_",
        PLAY_O_CENTER: "__XXOOOX_",
        PLAY_O_BOTTOM_RIGHT: "__XX_OOXO"
      }
    },
    __XX_OOOX: {
      on: {
        PLAY_X_TOP_LEFT: "X_XX_OOOX",
        PLAY_X_TOP_CENTER: "_XXX_OOOX",
        PLAY_X_CENTER: "__XXXOOOX"
      }
    },
    __XX_OO_X: {
      on: {
        PLAY_O_TOP_LEFT: "O_XX_OO_X",
        PLAY_O_TOP_CENTER: "_OXX_OO_X",
        PLAY_O_CENTER: "__XXOOO_X",
        PLAY_O_BOTTOM_CENTER: "__XX_OOOX"
      }
    },
    __XX_OO__: {
      on: {
        PLAY_X_TOP_LEFT: "X_XX_OO__",
        PLAY_X_TOP_CENTER: "_XXX_OO__",
        PLAY_X_CENTER: "__XXXOO__",
        PLAY_X_BOTTOM_CENTER: "__XX_OOX_",
        PLAY_X_BOTTOM_RIGHT: "__XX_OO_X"
      }
    },
    __XXXOXOO: { on: { "": "X_WINS" } },
    __XXXO_OO: {
      on: {
        PLAY_X_TOP_LEFT: "X_XXXO_OO",
        PLAY_X_TOP_CENTER: "_XXXXO_OO",
        PLAY_X_BOTTOM_LEFT: "__XXXOXOO"
      }
    },
    __XXXO_O_: {
      on: {
        PLAY_O_TOP_LEFT: "O_XXXO_O_",
        PLAY_O_TOP_CENTER: "_OXXXO_O_",
        PLAY_O_BOTTOM_LEFT: "__XXXOOO_",
        PLAY_O_BOTTOM_RIGHT: "__XXXO_OO"
      }
    },
    __XX_OXOO: {
      on: {
        PLAY_X_TOP_LEFT: "X_XX_OXOO",
        PLAY_X_TOP_CENTER: "_XXX_OXOO",
        PLAY_X_CENTER: "__XXXOXOO"
      }
    },
    __XX_OXO_: {
      on: {
        PLAY_O_TOP_LEFT: "O_XX_OXO_",
        PLAY_O_TOP_CENTER: "_OXX_OXO_",
        PLAY_O_CENTER: "__XXOOXO_",
        PLAY_O_BOTTOM_RIGHT: "__XX_OXOO"
      }
    },
    __XX_O_OX: {
      on: {
        PLAY_O_TOP_LEFT: "O_XX_O_OX",
        PLAY_O_TOP_CENTER: "_OXX_O_OX",
        PLAY_O_CENTER: "__XXOO_OX",
        PLAY_O_BOTTOM_LEFT: "__XX_OOOX"
      }
    },
    __XX_O_O_: {
      on: {
        PLAY_X_TOP_LEFT: "X_XX_O_O_",
        PLAY_X_TOP_CENTER: "_XXX_O_O_",
        PLAY_X_CENTER: "__XXXO_O_",
        PLAY_X_BOTTOM_LEFT: "__XX_OXO_",
        PLAY_X_BOTTOM_RIGHT: "__XX_O_OX"
      }
    },
    __XXXO__O: {
      on: {
        PLAY_O_TOP_LEFT: "O_XXXO__O",
        PLAY_O_TOP_CENTER: "_OXXXO__O",
        PLAY_O_BOTTOM_LEFT: "__XXXOO_O",
        PLAY_O_BOTTOM_CENTER: "__XXXO_OO"
      }
    },
    __XX_OX_O: {
      on: {
        PLAY_O_TOP_LEFT: "O_XX_OX_O",
        PLAY_O_TOP_CENTER: "_OXX_OX_O",
        PLAY_O_CENTER: "__XXOOX_O",
        PLAY_O_BOTTOM_CENTER: "__XX_OXOO"
      }
    },
    __XX_O_XO: {
      on: {
        PLAY_O_TOP_LEFT: "O_XX_O_XO",
        PLAY_O_TOP_CENTER: "_OXX_O_XO",
        PLAY_O_CENTER: "__XXOO_XO",
        PLAY_O_BOTTOM_LEFT: "__XX_OOXO"
      }
    },
    __XX_O__O: {
      on: {
        PLAY_X_TOP_LEFT: "X_XX_O__O",
        PLAY_X_TOP_CENTER: "_XXX_O__O",
        PLAY_X_CENTER: "__XXXO__O",
        PLAY_X_BOTTOM_LEFT: "__XX_OX_O",
        PLAY_X_BOTTOM_CENTER: "__XX_O_XO"
      }
    },
    __XX_O___: {
      on: {
        PLAY_O_TOP_LEFT: "O_XX_O___",
        PLAY_O_TOP_CENTER: "_OXX_O___",
        PLAY_O_CENTER: "__XXOO___",
        PLAY_O_BOTTOM_LEFT: "__XX_OO__",
        PLAY_O_BOTTOM_CENTER: "__XX_O_O_",
        PLAY_O_BOTTOM_RIGHT: "__XX_O__O"
      }
    },
    __X_XOOXO: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_XOOXO",
        PLAY_X_TOP_CENTER: "_XX_XOOXO",
        PLAY_X_MIDDLE_LEFT: "__XXXOOXO"
      }
    },
    __X_XOOX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_XOOX_",
        PLAY_O_TOP_CENTER: "_OX_XOOX_",
        PLAY_O_MIDDLE_LEFT: "__XOXOOX_",
        PLAY_O_BOTTOM_RIGHT: "__X_XOOXO"
      }
    },
    __X_XOOOX: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_XOOOX",
        PLAY_X_TOP_CENTER: "_XX_XOOOX",
        PLAY_X_MIDDLE_LEFT: "__XXXOOOX"
      }
    },
    __X_XOO_X: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_XOO_X",
        PLAY_O_TOP_CENTER: "_OX_XOO_X",
        PLAY_O_MIDDLE_LEFT: "__XOXOO_X",
        PLAY_O_BOTTOM_CENTER: "__X_XOOOX"
      }
    },
    __X_XOO__: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_XOO__",
        PLAY_X_TOP_CENTER: "_XX_XOO__",
        PLAY_X_MIDDLE_LEFT: "__XXXOO__",
        PLAY_X_BOTTOM_CENTER: "__X_XOOX_",
        PLAY_X_BOTTOM_RIGHT: "__X_XOO_X"
      }
    },
    __X_XOXO_: { on: { "": "X_WINS" } },
    __X_XO_OX: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_XO_OX",
        PLAY_O_TOP_CENTER: "_OX_XO_OX",
        PLAY_O_MIDDLE_LEFT: "__XOXO_OX",
        PLAY_O_BOTTOM_LEFT: "__X_XOOOX"
      }
    },
    __X_XO_O_: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_XO_O_",
        PLAY_X_TOP_CENTER: "_XX_XO_O_",
        PLAY_X_MIDDLE_LEFT: "__XXXO_O_",
        PLAY_X_BOTTOM_LEFT: "__X_XOXO_",
        PLAY_X_BOTTOM_RIGHT: "__X_XO_OX"
      }
    },
    __X_XOX_O: { on: { "": "X_WINS" } },
    __X_XO_XO: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_XO_XO",
        PLAY_O_TOP_CENTER: "_OX_XO_XO",
        PLAY_O_MIDDLE_LEFT: "__XOXO_XO",
        PLAY_O_BOTTOM_LEFT: "__X_XOOXO"
      }
    },
    __X_XO__O: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_XO__O",
        PLAY_X_TOP_CENTER: "_XX_XO__O",
        PLAY_X_MIDDLE_LEFT: "__XXXO__O",
        PLAY_X_BOTTOM_LEFT: "__X_XOX_O",
        PLAY_X_BOTTOM_CENTER: "__X_XO_XO"
      }
    },
    __X_XO___: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_XO___",
        PLAY_O_TOP_CENTER: "_OX_XO___",
        PLAY_O_MIDDLE_LEFT: "__XOXO___",
        PLAY_O_BOTTOM_LEFT: "__X_XOO__",
        PLAY_O_BOTTOM_CENTER: "__X_XO_O_",
        PLAY_O_BOTTOM_RIGHT: "__X_XO__O"
      }
    },
    __X__OXOX: {
      on: {
        PLAY_O_TOP_LEFT: "O_X__OXOX",
        PLAY_O_TOP_CENTER: "_OX__OXOX",
        PLAY_O_MIDDLE_LEFT: "__XO_OXOX",
        PLAY_O_CENTER: "__X_OOXOX"
      }
    },
    __X__OXO_: {
      on: {
        PLAY_X_TOP_LEFT: "X_X__OXO_",
        PLAY_X_TOP_CENTER: "_XX__OXO_",
        PLAY_X_MIDDLE_LEFT: "__XX_OXO_",
        PLAY_X_CENTER: "__X_XOXO_",
        PLAY_X_BOTTOM_RIGHT: "__X__OXOX"
      }
    },
    __X__OXXO: {
      on: {
        PLAY_O_TOP_LEFT: "O_X__OXXO",
        PLAY_O_TOP_CENTER: "_OX__OXXO",
        PLAY_O_MIDDLE_LEFT: "__XO_OXXO",
        PLAY_O_CENTER: "__X_OOXXO"
      }
    },
    __X__OX_O: {
      on: {
        PLAY_X_TOP_LEFT: "X_X__OX_O",
        PLAY_X_TOP_CENTER: "_XX__OX_O",
        PLAY_X_MIDDLE_LEFT: "__XX_OX_O",
        PLAY_X_CENTER: "__X_XOX_O",
        PLAY_X_BOTTOM_CENTER: "__X__OXXO"
      }
    },
    __X__OX__: {
      on: {
        PLAY_O_TOP_LEFT: "O_X__OX__",
        PLAY_O_TOP_CENTER: "_OX__OX__",
        PLAY_O_MIDDLE_LEFT: "__XO_OX__",
        PLAY_O_CENTER: "__X_OOX__",
        PLAY_O_BOTTOM_CENTER: "__X__OXO_",
        PLAY_O_BOTTOM_RIGHT: "__X__OX_O"
      }
    },
    __X__OOXX: {
      on: {
        PLAY_O_TOP_LEFT: "O_X__OOXX",
        PLAY_O_TOP_CENTER: "_OX__OOXX",
        PLAY_O_MIDDLE_LEFT: "__XO_OOXX",
        PLAY_O_CENTER: "__X_OOOXX"
      }
    },
    __X__OOX_: {
      on: {
        PLAY_X_TOP_LEFT: "X_X__OOX_",
        PLAY_X_TOP_CENTER: "_XX__OOX_",
        PLAY_X_MIDDLE_LEFT: "__XX_OOX_",
        PLAY_X_CENTER: "__X_XOOX_",
        PLAY_X_BOTTOM_RIGHT: "__X__OOXX"
      }
    },
    __X__O_XO: {
      on: {
        PLAY_X_TOP_LEFT: "X_X__O_XO",
        PLAY_X_TOP_CENTER: "_XX__O_XO",
        PLAY_X_MIDDLE_LEFT: "__XX_O_XO",
        PLAY_X_CENTER: "__X_XO_XO",
        PLAY_X_BOTTOM_LEFT: "__X__OXXO"
      }
    },
    __X__O_X_: {
      on: {
        PLAY_O_TOP_LEFT: "O_X__O_X_",
        PLAY_O_TOP_CENTER: "_OX__O_X_",
        PLAY_O_MIDDLE_LEFT: "__XO_O_X_",
        PLAY_O_CENTER: "__X_OO_X_",
        PLAY_O_BOTTOM_LEFT: "__X__OOX_",
        PLAY_O_BOTTOM_RIGHT: "__X__O_XO"
      }
    },
    __X__OO_X: {
      on: {
        PLAY_X_TOP_LEFT: "X_X__OO_X",
        PLAY_X_TOP_CENTER: "_XX__OO_X",
        PLAY_X_MIDDLE_LEFT: "__XX_OO_X",
        PLAY_X_CENTER: "__X_XOO_X",
        PLAY_X_BOTTOM_CENTER: "__X__OOXX"
      }
    },
    __X__O_OX: {
      on: {
        PLAY_X_TOP_LEFT: "X_X__O_OX",
        PLAY_X_TOP_CENTER: "_XX__O_OX",
        PLAY_X_MIDDLE_LEFT: "__XX_O_OX",
        PLAY_X_CENTER: "__X_XO_OX",
        PLAY_X_BOTTOM_LEFT: "__X__OXOX"
      }
    },
    __X__O__X: {
      on: {
        PLAY_O_TOP_LEFT: "O_X__O__X",
        PLAY_O_TOP_CENTER: "_OX__O__X",
        PLAY_O_MIDDLE_LEFT: "__XO_O__X",
        PLAY_O_CENTER: "__X_OO__X",
        PLAY_O_BOTTOM_LEFT: "__X__OO_X",
        PLAY_O_BOTTOM_CENTER: "__X__O_OX"
      }
    },
    __X__O___: {
      on: {
        PLAY_X_TOP_LEFT: "X_X__O___",
        PLAY_X_TOP_CENTER: "_XX__O___",
        PLAY_X_MIDDLE_LEFT: "__XX_O___",
        PLAY_X_CENTER: "__X_XO___",
        PLAY_X_BOTTOM_LEFT: "__X__OX__",
        PLAY_X_BOTTOM_CENTER: "__X__O_X_",
        PLAY_X_BOTTOM_RIGHT: "__X__O__X"
      }
    },
    __XXX_OOO: { on: { "": "O_WINS" } },
    __XXX_OO_: {
      on: {
        PLAY_O_TOP_LEFT: "O_XXX_OO_",
        PLAY_O_TOP_CENTER: "_OXXX_OO_",
        PLAY_O_MIDDLE_RIGHT: "__XXXOOO_",
        PLAY_O_BOTTOM_RIGHT: "__XXX_OOO"
      }
    },
    __XX_XOOO: { on: { "": "O_WINS" } },
    __XX_XOO_: {
      on: {
        PLAY_O_TOP_LEFT: "O_XX_XOO_",
        PLAY_O_TOP_CENTER: "_OXX_XOO_",
        PLAY_O_CENTER: "__XXOXOO_",
        PLAY_O_BOTTOM_RIGHT: "__XX_XOOO"
      }
    },
    __XX__OOX: {
      on: {
        PLAY_O_TOP_LEFT: "O_XX__OOX",
        PLAY_O_TOP_CENTER: "_OXX__OOX",
        PLAY_O_CENTER: "__XXO_OOX",
        PLAY_O_MIDDLE_RIGHT: "__XX_OOOX"
      }
    },
    __XX__OO_: {
      on: {
        PLAY_X_TOP_LEFT: "X_XX__OO_",
        PLAY_X_TOP_CENTER: "_XXX__OO_",
        PLAY_X_CENTER: "__XXX_OO_",
        PLAY_X_MIDDLE_RIGHT: "__XX_XOO_",
        PLAY_X_BOTTOM_RIGHT: "__XX__OOX"
      }
    },
    __XXX_O_O: {
      on: {
        PLAY_O_TOP_LEFT: "O_XXX_O_O",
        PLAY_O_TOP_CENTER: "_OXXX_O_O",
        PLAY_O_MIDDLE_RIGHT: "__XXXOO_O",
        PLAY_O_BOTTOM_CENTER: "__XXX_OOO"
      }
    },
    __XX_XO_O: {
      on: {
        PLAY_O_TOP_LEFT: "O_XX_XO_O",
        PLAY_O_TOP_CENTER: "_OXX_XO_O",
        PLAY_O_CENTER: "__XXOXO_O",
        PLAY_O_BOTTOM_CENTER: "__XX_XOOO"
      }
    },
    __XX__OXO: {
      on: {
        PLAY_O_TOP_LEFT: "O_XX__OXO",
        PLAY_O_TOP_CENTER: "_OXX__OXO",
        PLAY_O_CENTER: "__XXO_OXO",
        PLAY_O_MIDDLE_RIGHT: "__XX_OOXO"
      }
    },
    __XX__O_O: {
      on: {
        PLAY_X_TOP_LEFT: "X_XX__O_O",
        PLAY_X_TOP_CENTER: "_XXX__O_O",
        PLAY_X_CENTER: "__XXX_O_O",
        PLAY_X_MIDDLE_RIGHT: "__XX_XO_O",
        PLAY_X_BOTTOM_CENTER: "__XX__OXO"
      }
    },
    __XX__O__: {
      on: {
        PLAY_O_TOP_LEFT: "O_XX__O__",
        PLAY_O_TOP_CENTER: "_OXX__O__",
        PLAY_O_CENTER: "__XXO_O__",
        PLAY_O_MIDDLE_RIGHT: "__XX_OO__",
        PLAY_O_BOTTOM_CENTER: "__XX__OO_",
        PLAY_O_BOTTOM_RIGHT: "__XX__O_O"
      }
    },
    __X_XXOOO: { on: { "": "O_WINS" } },
    __X_XXOO_: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_XXOO_",
        PLAY_O_TOP_CENTER: "_OX_XXOO_",
        PLAY_O_MIDDLE_LEFT: "__XOXXOO_",
        PLAY_O_BOTTOM_RIGHT: "__X_XXOOO"
      }
    },
    __X_X_OOX: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_X_OOX",
        PLAY_O_TOP_CENTER: "_OX_X_OOX",
        PLAY_O_MIDDLE_LEFT: "__XOX_OOX",
        PLAY_O_MIDDLE_RIGHT: "__X_XOOOX"
      }
    },
    __X_X_OO_: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_X_OO_",
        PLAY_X_TOP_CENTER: "_XX_X_OO_",
        PLAY_X_MIDDLE_LEFT: "__XXX_OO_",
        PLAY_X_MIDDLE_RIGHT: "__X_XXOO_",
        PLAY_X_BOTTOM_RIGHT: "__X_X_OOX"
      }
    },
    __X_XXO_O: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_XXO_O",
        PLAY_O_TOP_CENTER: "_OX_XXO_O",
        PLAY_O_MIDDLE_LEFT: "__XOXXO_O",
        PLAY_O_BOTTOM_CENTER: "__X_XXOOO"
      }
    },
    __X_X_OXO: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_X_OXO",
        PLAY_O_TOP_CENTER: "_OX_X_OXO",
        PLAY_O_MIDDLE_LEFT: "__XOX_OXO",
        PLAY_O_MIDDLE_RIGHT: "__X_XOOXO"
      }
    },
    __X_X_O_O: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_X_O_O",
        PLAY_X_TOP_CENTER: "_XX_X_O_O",
        PLAY_X_MIDDLE_LEFT: "__XXX_O_O",
        PLAY_X_MIDDLE_RIGHT: "__X_XXO_O",
        PLAY_X_BOTTOM_CENTER: "__X_X_OXO"
      }
    },
    __X_X_O__: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_X_O__",
        PLAY_O_TOP_CENTER: "_OX_X_O__",
        PLAY_O_MIDDLE_LEFT: "__XOX_O__",
        PLAY_O_MIDDLE_RIGHT: "__X_XOO__",
        PLAY_O_BOTTOM_CENTER: "__X_X_OO_",
        PLAY_O_BOTTOM_RIGHT: "__X_X_O_O"
      }
    },
    __X__XOOX: { on: { "": "X_WINS" } },
    __X__XOO_: {
      on: {
        PLAY_X_TOP_LEFT: "X_X__XOO_",
        PLAY_X_TOP_CENTER: "_XX__XOO_",
        PLAY_X_MIDDLE_LEFT: "__XX_XOO_",
        PLAY_X_CENTER: "__X_XXOO_",
        PLAY_X_BOTTOM_RIGHT: "__X__XOOX"
      }
    },
    __X__XOXO: {
      on: {
        PLAY_O_TOP_LEFT: "O_X__XOXO",
        PLAY_O_TOP_CENTER: "_OX__XOXO",
        PLAY_O_MIDDLE_LEFT: "__XO_XOXO",
        PLAY_O_CENTER: "__X_OXOXO"
      }
    },
    __X__XO_O: {
      on: {
        PLAY_X_TOP_LEFT: "X_X__XO_O",
        PLAY_X_TOP_CENTER: "_XX__XO_O",
        PLAY_X_MIDDLE_LEFT: "__XX_XO_O",
        PLAY_X_CENTER: "__X_XXO_O",
        PLAY_X_BOTTOM_CENTER: "__X__XOXO"
      }
    },
    __X__XO__: {
      on: {
        PLAY_O_TOP_LEFT: "O_X__XO__",
        PLAY_O_TOP_CENTER: "_OX__XO__",
        PLAY_O_MIDDLE_LEFT: "__XO_XO__",
        PLAY_O_CENTER: "__X_OXO__",
        PLAY_O_BOTTOM_CENTER: "__X__XOO_",
        PLAY_O_BOTTOM_RIGHT: "__X__XO_O"
      }
    },
    __X___OXO: {
      on: {
        PLAY_X_TOP_LEFT: "X_X___OXO",
        PLAY_X_TOP_CENTER: "_XX___OXO",
        PLAY_X_MIDDLE_LEFT: "__XX__OXO",
        PLAY_X_CENTER: "__X_X_OXO",
        PLAY_X_MIDDLE_RIGHT: "__X__XOXO"
      }
    },
    __X___OX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_X___OX_",
        PLAY_O_TOP_CENTER: "_OX___OX_",
        PLAY_O_MIDDLE_LEFT: "__XO__OX_",
        PLAY_O_CENTER: "__X_O_OX_",
        PLAY_O_MIDDLE_RIGHT: "__X__OOX_",
        PLAY_O_BOTTOM_RIGHT: "__X___OXO"
      }
    },
    __X___OOX: {
      on: {
        PLAY_X_TOP_LEFT: "X_X___OOX",
        PLAY_X_TOP_CENTER: "_XX___OOX",
        PLAY_X_MIDDLE_LEFT: "__XX__OOX",
        PLAY_X_CENTER: "__X_X_OOX",
        PLAY_X_MIDDLE_RIGHT: "__X__XOOX"
      }
    },
    __X___O_X: {
      on: {
        PLAY_O_TOP_LEFT: "O_X___O_X",
        PLAY_O_TOP_CENTER: "_OX___O_X",
        PLAY_O_MIDDLE_LEFT: "__XO__O_X",
        PLAY_O_CENTER: "__X_O_O_X",
        PLAY_O_MIDDLE_RIGHT: "__X__OO_X",
        PLAY_O_BOTTOM_CENTER: "__X___OOX"
      }
    },
    __X___O__: {
      on: {
        PLAY_X_TOP_LEFT: "X_X___O__",
        PLAY_X_TOP_CENTER: "_XX___O__",
        PLAY_X_MIDDLE_LEFT: "__XX__O__",
        PLAY_X_CENTER: "__X_X_O__",
        PLAY_X_MIDDLE_RIGHT: "__X__XO__",
        PLAY_X_BOTTOM_CENTER: "__X___OX_",
        PLAY_X_BOTTOM_RIGHT: "__X___O_X"
      }
    },
    __XXX__OO: {
      on: {
        PLAY_O_TOP_LEFT: "O_XXX__OO",
        PLAY_O_TOP_CENTER: "_OXXX__OO",
        PLAY_O_MIDDLE_RIGHT: "__XXXO_OO",
        PLAY_O_BOTTOM_LEFT: "__XXX_OOO"
      }
    },
    __XX_X_OO: {
      on: {
        PLAY_O_TOP_LEFT: "O_XX_X_OO",
        PLAY_O_TOP_CENTER: "_OXX_X_OO",
        PLAY_O_CENTER: "__XXOX_OO",
        PLAY_O_BOTTOM_LEFT: "__XX_XOOO"
      }
    },
    __XX__XOO: {
      on: {
        PLAY_O_TOP_LEFT: "O_XX__XOO",
        PLAY_O_TOP_CENTER: "_OXX__XOO",
        PLAY_O_CENTER: "__XXO_XOO",
        PLAY_O_MIDDLE_RIGHT: "__XX_OXOO"
      }
    },
    __XX___OO: {
      on: {
        PLAY_X_TOP_LEFT: "X_XX___OO",
        PLAY_X_TOP_CENTER: "_XXX___OO",
        PLAY_X_CENTER: "__XXX__OO",
        PLAY_X_MIDDLE_RIGHT: "__XX_X_OO",
        PLAY_X_BOTTOM_LEFT: "__XX__XOO"
      }
    },
    __XX___O_: {
      on: {
        PLAY_O_TOP_LEFT: "O_XX___O_",
        PLAY_O_TOP_CENTER: "_OXX___O_",
        PLAY_O_CENTER: "__XXO__O_",
        PLAY_O_MIDDLE_RIGHT: "__XX_O_O_",
        PLAY_O_BOTTOM_LEFT: "__XX__OO_",
        PLAY_O_BOTTOM_RIGHT: "__XX___OO"
      }
    },
    __X_XX_OO: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_XX_OO",
        PLAY_O_TOP_CENTER: "_OX_XX_OO",
        PLAY_O_MIDDLE_LEFT: "__XOXX_OO",
        PLAY_O_BOTTOM_LEFT: "__X_XXOOO"
      }
    },
    __X_X_XOO: { on: { "": "X_WINS" } },
    __X_X__OO: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_X__OO",
        PLAY_X_TOP_CENTER: "_XX_X__OO",
        PLAY_X_MIDDLE_LEFT: "__XXX__OO",
        PLAY_X_MIDDLE_RIGHT: "__X_XX_OO",
        PLAY_X_BOTTOM_LEFT: "__X_X_XOO"
      }
    },
    __X_X__O_: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_X__O_",
        PLAY_O_TOP_CENTER: "_OX_X__O_",
        PLAY_O_MIDDLE_LEFT: "__XOX__O_",
        PLAY_O_MIDDLE_RIGHT: "__X_XO_O_",
        PLAY_O_BOTTOM_LEFT: "__X_X_OO_",
        PLAY_O_BOTTOM_RIGHT: "__X_X__OO"
      }
    },
    __X__XXOO: {
      on: {
        PLAY_O_TOP_LEFT: "O_X__XXOO",
        PLAY_O_TOP_CENTER: "_OX__XXOO",
        PLAY_O_MIDDLE_LEFT: "__XO_XXOO",
        PLAY_O_CENTER: "__X_OXXOO"
      }
    },
    __X__X_OO: {
      on: {
        PLAY_X_TOP_LEFT: "X_X__X_OO",
        PLAY_X_TOP_CENTER: "_XX__X_OO",
        PLAY_X_MIDDLE_LEFT: "__XX_X_OO",
        PLAY_X_CENTER: "__X_XX_OO",
        PLAY_X_BOTTOM_LEFT: "__X__XXOO"
      }
    },
    __X__X_O_: {
      on: {
        PLAY_O_TOP_LEFT: "O_X__X_O_",
        PLAY_O_TOP_CENTER: "_OX__X_O_",
        PLAY_O_MIDDLE_LEFT: "__XO_X_O_",
        PLAY_O_CENTER: "__X_OX_O_",
        PLAY_O_BOTTOM_LEFT: "__X__XOO_",
        PLAY_O_BOTTOM_RIGHT: "__X__X_OO"
      }
    },
    __X___XOO: {
      on: {
        PLAY_X_TOP_LEFT: "X_X___XOO",
        PLAY_X_TOP_CENTER: "_XX___XOO",
        PLAY_X_MIDDLE_LEFT: "__XX__XOO",
        PLAY_X_CENTER: "__X_X_XOO",
        PLAY_X_MIDDLE_RIGHT: "__X__XXOO"
      }
    },
    __X___XO_: {
      on: {
        PLAY_O_TOP_LEFT: "O_X___XO_",
        PLAY_O_TOP_CENTER: "_OX___XO_",
        PLAY_O_MIDDLE_LEFT: "__XO__XO_",
        PLAY_O_CENTER: "__X_O_XO_",
        PLAY_O_MIDDLE_RIGHT: "__X__OXO_",
        PLAY_O_BOTTOM_RIGHT: "__X___XOO"
      }
    },
    __X____OX: {
      on: {
        PLAY_O_TOP_LEFT: "O_X____OX",
        PLAY_O_TOP_CENTER: "_OX____OX",
        PLAY_O_MIDDLE_LEFT: "__XO___OX",
        PLAY_O_CENTER: "__X_O__OX",
        PLAY_O_MIDDLE_RIGHT: "__X__O_OX",
        PLAY_O_BOTTOM_LEFT: "__X___OOX"
      }
    },
    __X____O_: {
      on: {
        PLAY_X_TOP_LEFT: "X_X____O_",
        PLAY_X_TOP_CENTER: "_XX____O_",
        PLAY_X_MIDDLE_LEFT: "__XX___O_",
        PLAY_X_CENTER: "__X_X__O_",
        PLAY_X_MIDDLE_RIGHT: "__X__X_O_",
        PLAY_X_BOTTOM_LEFT: "__X___XO_",
        PLAY_X_BOTTOM_RIGHT: "__X____OX"
      }
    },
    __XX____O: {
      on: {
        PLAY_O_TOP_LEFT: "O_XX____O",
        PLAY_O_TOP_CENTER: "_OXX____O",
        PLAY_O_CENTER: "__XXO___O",
        PLAY_O_MIDDLE_RIGHT: "__XX_O__O",
        PLAY_O_BOTTOM_LEFT: "__XX__O_O",
        PLAY_O_BOTTOM_CENTER: "__XX___OO"
      }
    },
    __X_X___O: {
      on: {
        PLAY_O_TOP_LEFT: "O_X_X___O",
        PLAY_O_TOP_CENTER: "_OX_X___O",
        PLAY_O_MIDDLE_LEFT: "__XOX___O",
        PLAY_O_MIDDLE_RIGHT: "__X_XO__O",
        PLAY_O_BOTTOM_LEFT: "__X_X_O_O",
        PLAY_O_BOTTOM_CENTER: "__X_X__OO"
      }
    },
    __X__X__O: {
      on: {
        PLAY_O_TOP_LEFT: "O_X__X__O",
        PLAY_O_TOP_CENTER: "_OX__X__O",
        PLAY_O_MIDDLE_LEFT: "__XO_X__O",
        PLAY_O_CENTER: "__X_OX__O",
        PLAY_O_BOTTOM_LEFT: "__X__XO_O",
        PLAY_O_BOTTOM_CENTER: "__X__X_OO"
      }
    },
    __X___X_O: {
      on: {
        PLAY_O_TOP_LEFT: "O_X___X_O",
        PLAY_O_TOP_CENTER: "_OX___X_O",
        PLAY_O_MIDDLE_LEFT: "__XO__X_O",
        PLAY_O_CENTER: "__X_O_X_O",
        PLAY_O_MIDDLE_RIGHT: "__X__OX_O",
        PLAY_O_BOTTOM_CENTER: "__X___XOO"
      }
    },
    __X____XO: {
      on: {
        PLAY_O_TOP_LEFT: "O_X____XO",
        PLAY_O_TOP_CENTER: "_OX____XO",
        PLAY_O_MIDDLE_LEFT: "__XO___XO",
        PLAY_O_CENTER: "__X_O__XO",
        PLAY_O_MIDDLE_RIGHT: "__X__O_XO",
        PLAY_O_BOTTOM_LEFT: "__X___OXO"
      }
    },
    __X_____O: {
      on: {
        PLAY_X_TOP_LEFT: "X_X_____O",
        PLAY_X_TOP_CENTER: "_XX_____O",
        PLAY_X_MIDDLE_LEFT: "__XX____O",
        PLAY_X_CENTER: "__X_X___O",
        PLAY_X_MIDDLE_RIGHT: "__X__X__O",
        PLAY_X_BOTTOM_LEFT: "__X___X_O",
        PLAY_X_BOTTOM_CENTER: "__X____XO"
      }
    },
    __X______: {
      on: {
        PLAY_O_TOP_LEFT: "O_X______",
        PLAY_O_TOP_CENTER: "_OX______",
        PLAY_O_MIDDLE_LEFT: "__XO_____",
        PLAY_O_CENTER: "__X_O____",
        PLAY_O_MIDDLE_RIGHT: "__X__O___",
        PLAY_O_BOTTOM_LEFT: "__X___O__",
        PLAY_O_BOTTOM_CENTER: "__X____O_",
        PLAY_O_BOTTOM_RIGHT: "__X_____O"
      }
    },
    OO_XXX___: { on: { "": "X_WINS" } },
    OOOXX_X__: { on: { "": "O_WINS" } },
    OOOXXOXX_: { on: { "": "O_WINS" } },
    OO_XXOXXO: { on: { PLAY_X_TOP_RIGHT: "OOXXXOXXO" } },
    OO_XXOXX_: {
      on: { PLAY_O_TOP_RIGHT: "OOOXXOXX_", PLAY_O_BOTTOM_RIGHT: "OO_XXOXXO" }
    },
    OOOXXOX_X: { on: { "": "O_WINS" } },
    OO_XXOXOX: { on: { PLAY_X_TOP_RIGHT: "OOXXXOXOX" } },
    OO_XXOX_X: {
      on: { PLAY_O_TOP_RIGHT: "OOOXXOX_X", PLAY_O_BOTTOM_CENTER: "OO_XXOXOX" }
    },
    OO_XXOX__: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXXXOX__",
        PLAY_X_BOTTOM_CENTER: "OO_XXOXX_",
        PLAY_X_BOTTOM_RIGHT: "OO_XXOX_X"
      }
    },
    OO_XXXXO_: { on: { "": "X_WINS" } },
    OOOXX_XOX: { on: { "": "O_WINS" } },
    OO_XX_XOX: {
      on: { PLAY_O_TOP_RIGHT: "OOOXX_XOX", PLAY_O_MIDDLE_RIGHT: "OO_XXOXOX" }
    },
    OO_XX_XO_: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXXX_XO_",
        PLAY_X_MIDDLE_RIGHT: "OO_XXXXO_",
        PLAY_X_BOTTOM_RIGHT: "OO_XX_XOX"
      }
    },
    OO_XXXX_O: { on: { "": "X_WINS" } },
    OOOXX_XXO: { on: { "": "O_WINS" } },
    OO_XX_XXO: {
      on: { PLAY_O_TOP_RIGHT: "OOOXX_XXO", PLAY_O_MIDDLE_RIGHT: "OO_XXOXXO" }
    },
    OO_XX_X_O: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXXX_X_O",
        PLAY_X_MIDDLE_RIGHT: "OO_XXXX_O",
        PLAY_X_BOTTOM_CENTER: "OO_XX_XXO"
      }
    },
    OO_XX_X__: {
      on: {
        PLAY_O_TOP_RIGHT: "OOOXX_X__",
        PLAY_O_MIDDLE_RIGHT: "OO_XXOX__",
        PLAY_O_BOTTOM_CENTER: "OO_XX_XO_",
        PLAY_O_BOTTOM_RIGHT: "OO_XX_X_O"
      }
    },
    OOOXX__X_: { on: { "": "O_WINS" } },
    OOOXXO_XX: { on: { "": "O_WINS" } },
    OO_XXOOXX: { on: { PLAY_X_TOP_RIGHT: "OOXXXOOXX" } },
    OO_XXO_XX: {
      on: { PLAY_O_TOP_RIGHT: "OOOXXO_XX", PLAY_O_BOTTOM_LEFT: "OO_XXOOXX" }
    },
    OO_XXO_X_: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXXXO_X_",
        PLAY_X_BOTTOM_LEFT: "OO_XXOXX_",
        PLAY_X_BOTTOM_RIGHT: "OO_XXO_XX"
      }
    },
    OO_XXXOX_: { on: { "": "X_WINS" } },
    OOOXX_OXX: { on: { "": "O_WINS" } },
    OO_XX_OXX: {
      on: { PLAY_O_TOP_RIGHT: "OOOXX_OXX", PLAY_O_MIDDLE_RIGHT: "OO_XXOOXX" }
    },
    OO_XX_OX_: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXXX_OX_",
        PLAY_X_MIDDLE_RIGHT: "OO_XXXOX_",
        PLAY_X_BOTTOM_RIGHT: "OO_XX_OXX"
      }
    },
    OO_XXX_XO: { on: { "": "X_WINS" } },
    OO_XX__XO: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXXX__XO",
        PLAY_X_MIDDLE_RIGHT: "OO_XXX_XO",
        PLAY_X_BOTTOM_LEFT: "OO_XX_XXO"
      }
    },
    OO_XX__X_: {
      on: {
        PLAY_O_TOP_RIGHT: "OOOXX__X_",
        PLAY_O_MIDDLE_RIGHT: "OO_XXO_X_",
        PLAY_O_BOTTOM_LEFT: "OO_XX_OX_",
        PLAY_O_BOTTOM_RIGHT: "OO_XX__XO"
      }
    },
    OOOXX___X: { on: { "": "O_WINS" } },
    OO_XXO__X: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXXXO__X",
        PLAY_X_BOTTOM_LEFT: "OO_XXOX_X",
        PLAY_X_BOTTOM_CENTER: "OO_XXO_XX"
      }
    },
    OO_XXXO_X: { on: { "": "X_WINS" } },
    OO_XX_O_X: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXXX_O_X",
        PLAY_X_MIDDLE_RIGHT: "OO_XXXO_X",
        PLAY_X_BOTTOM_CENTER: "OO_XX_OXX"
      }
    },
    OO_XXX_OX: { on: { "": "X_WINS" } },
    OO_XX__OX: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXXX__OX",
        PLAY_X_MIDDLE_RIGHT: "OO_XXX_OX",
        PLAY_X_BOTTOM_LEFT: "OO_XX_XOX"
      }
    },
    OO_XX___X: {
      on: {
        PLAY_O_TOP_RIGHT: "OOOXX___X",
        PLAY_O_MIDDLE_RIGHT: "OO_XXO__X",
        PLAY_O_BOTTOM_LEFT: "OO_XX_O_X",
        PLAY_O_BOTTOM_CENTER: "OO_XX__OX"
      }
    },
    OO_XX____: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXXX____",
        PLAY_X_MIDDLE_RIGHT: "OO_XXX___",
        PLAY_X_BOTTOM_LEFT: "OO_XX_X__",
        PLAY_X_BOTTOM_CENTER: "OO_XX__X_",
        PLAY_X_BOTTOM_RIGHT: "OO_XX___X"
      }
    },
    O_OXXX___: { on: { "": "X_WINS" } },
    O_OXXOXXO: { on: { "": "O_WINS" } },
    O_OXXOXX_: {
      on: { PLAY_O_TOP_CENTER: "OOOXXOXX_", PLAY_O_BOTTOM_RIGHT: "O_OXXOXXO" }
    },
    O_OXXOXOX: { on: { PLAY_X_TOP_CENTER: "OXOXXOXOX" } },
    O_OXXOX_X: {
      on: {
        PLAY_O_TOP_CENTER: "OOOXXOX_X",
        PLAY_O_BOTTOM_CENTER: "O_OXXOXOX"
      }
    },
    O_OXXOX__: {
      on: {
        PLAY_X_TOP_CENTER: "OXOXXOX__",
        PLAY_X_BOTTOM_CENTER: "O_OXXOXX_",
        PLAY_X_BOTTOM_RIGHT: "O_OXXOX_X"
      }
    },
    O_OXXXXO_: { on: { "": "X_WINS" } },
    O_OXX_XOX: {
      on: { PLAY_O_TOP_CENTER: "OOOXX_XOX", PLAY_O_MIDDLE_RIGHT: "O_OXXOXOX" }
    },
    O_OXX_XO_: {
      on: {
        PLAY_X_TOP_CENTER: "OXOXX_XO_",
        PLAY_X_MIDDLE_RIGHT: "O_OXXXXO_",
        PLAY_X_BOTTOM_RIGHT: "O_OXX_XOX"
      }
    },
    O_OXXXX_O: { on: { "": "X_WINS" } },
    O_OXX_XXO: {
      on: { PLAY_O_TOP_CENTER: "OOOXX_XXO", PLAY_O_MIDDLE_RIGHT: "O_OXXOXXO" }
    },
    O_OXX_X_O: {
      on: {
        PLAY_X_TOP_CENTER: "OXOXX_X_O",
        PLAY_X_MIDDLE_RIGHT: "O_OXXXX_O",
        PLAY_X_BOTTOM_CENTER: "O_OXX_XXO"
      }
    },
    O_OXX_X__: {
      on: {
        PLAY_O_TOP_CENTER: "OOOXX_X__",
        PLAY_O_MIDDLE_RIGHT: "O_OXXOX__",
        PLAY_O_BOTTOM_CENTER: "O_OXX_XO_",
        PLAY_O_BOTTOM_RIGHT: "O_OXX_X_O"
      }
    },
    O_OXXOOXX: { on: { PLAY_X_TOP_CENTER: "OXOXXOOXX" } },
    O_OXXO_XX: {
      on: { PLAY_O_TOP_CENTER: "OOOXXO_XX", PLAY_O_BOTTOM_LEFT: "O_OXXOOXX" }
    },
    O_OXXO_X_: {
      on: {
        PLAY_X_TOP_CENTER: "OXOXXO_X_",
        PLAY_X_BOTTOM_LEFT: "O_OXXOXX_",
        PLAY_X_BOTTOM_RIGHT: "O_OXXO_XX"
      }
    },
    O_OXXXOX_: { on: { "": "X_WINS" } },
    O_OXX_OXX: {
      on: { PLAY_O_TOP_CENTER: "OOOXX_OXX", PLAY_O_MIDDLE_RIGHT: "O_OXXOOXX" }
    },
    O_OXX_OX_: {
      on: {
        PLAY_X_TOP_CENTER: "OXOXX_OX_",
        PLAY_X_MIDDLE_RIGHT: "O_OXXXOX_",
        PLAY_X_BOTTOM_RIGHT: "O_OXX_OXX"
      }
    },
    O_OXXX_XO: { on: { "": "X_WINS" } },
    O_OXX__XO: {
      on: {
        PLAY_X_TOP_CENTER: "OXOXX__XO",
        PLAY_X_MIDDLE_RIGHT: "O_OXXX_XO",
        PLAY_X_BOTTOM_LEFT: "O_OXX_XXO"
      }
    },
    O_OXX__X_: {
      on: {
        PLAY_O_TOP_CENTER: "OOOXX__X_",
        PLAY_O_MIDDLE_RIGHT: "O_OXXO_X_",
        PLAY_O_BOTTOM_LEFT: "O_OXX_OX_",
        PLAY_O_BOTTOM_RIGHT: "O_OXX__XO"
      }
    },
    O_OXXO__X: {
      on: {
        PLAY_X_TOP_CENTER: "OXOXXO__X",
        PLAY_X_BOTTOM_LEFT: "O_OXXOX_X",
        PLAY_X_BOTTOM_CENTER: "O_OXXO_XX"
      }
    },
    O_OXXXO_X: { on: { "": "X_WINS" } },
    O_OXX_O_X: {
      on: {
        PLAY_X_TOP_CENTER: "OXOXX_O_X",
        PLAY_X_MIDDLE_RIGHT: "O_OXXXO_X",
        PLAY_X_BOTTOM_CENTER: "O_OXX_OXX"
      }
    },
    O_OXXX_OX: { on: { "": "X_WINS" } },
    O_OXX__OX: {
      on: {
        PLAY_X_TOP_CENTER: "OXOXX__OX",
        PLAY_X_MIDDLE_RIGHT: "O_OXXX_OX",
        PLAY_X_BOTTOM_LEFT: "O_OXX_XOX"
      }
    },
    O_OXX___X: {
      on: {
        PLAY_O_TOP_CENTER: "OOOXX___X",
        PLAY_O_MIDDLE_RIGHT: "O_OXXO__X",
        PLAY_O_BOTTOM_LEFT: "O_OXX_O_X",
        PLAY_O_BOTTOM_CENTER: "O_OXX__OX"
      }
    },
    O_OXX____: {
      on: {
        PLAY_X_TOP_CENTER: "OXOXX____",
        PLAY_X_MIDDLE_RIGHT: "O_OXXX___",
        PLAY_X_BOTTOM_LEFT: "O_OXX_X__",
        PLAY_X_BOTTOM_CENTER: "O_OXX__X_",
        PLAY_X_BOTTOM_RIGHT: "O_OXX___X"
      }
    },
    O__XXOXOX: {
      on: { PLAY_O_TOP_CENTER: "OO_XXOXOX", PLAY_O_TOP_RIGHT: "O_OXXOXOX" }
    },
    O__XXOXO_: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XXOXO_",
        PLAY_X_TOP_RIGHT: "O_XXXOXO_",
        PLAY_X_BOTTOM_RIGHT: "O__XXOXOX"
      }
    },
    O__XXOXXO: {
      on: { PLAY_O_TOP_CENTER: "OO_XXOXXO", PLAY_O_TOP_RIGHT: "O_OXXOXXO" }
    },
    O__XXOX_O: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XXOX_O",
        PLAY_X_TOP_RIGHT: "O_XXXOX_O",
        PLAY_X_BOTTOM_CENTER: "O__XXOXXO"
      }
    },
    O__XXOX__: {
      on: {
        PLAY_O_TOP_CENTER: "OO_XXOX__",
        PLAY_O_TOP_RIGHT: "O_OXXOX__",
        PLAY_O_BOTTOM_CENTER: "O__XXOXO_",
        PLAY_O_BOTTOM_RIGHT: "O__XXOX_O"
      }
    },
    O__XXOOXX: {
      on: { PLAY_O_TOP_CENTER: "OO_XXOOXX", PLAY_O_TOP_RIGHT: "O_OXXOOXX" }
    },
    O__XXOOX_: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XXOOX_",
        PLAY_X_TOP_RIGHT: "O_XXXOOX_",
        PLAY_X_BOTTOM_RIGHT: "O__XXOOXX"
      }
    },
    O__XXO_XO: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XXO_XO",
        PLAY_X_TOP_RIGHT: "O_XXXO_XO",
        PLAY_X_BOTTOM_LEFT: "O__XXOXXO"
      }
    },
    O__XXO_X_: {
      on: {
        PLAY_O_TOP_CENTER: "OO_XXO_X_",
        PLAY_O_TOP_RIGHT: "O_OXXO_X_",
        PLAY_O_BOTTOM_LEFT: "O__XXOOX_",
        PLAY_O_BOTTOM_RIGHT: "O__XXO_XO"
      }
    },
    O__XXOO_X: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XXOO_X",
        PLAY_X_TOP_RIGHT: "O_XXXOO_X",
        PLAY_X_BOTTOM_CENTER: "O__XXOOXX"
      }
    },
    O__XXO_OX: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XXO_OX",
        PLAY_X_TOP_RIGHT: "O_XXXO_OX",
        PLAY_X_BOTTOM_LEFT: "O__XXOXOX"
      }
    },
    O__XXO__X: {
      on: {
        PLAY_O_TOP_CENTER: "OO_XXO__X",
        PLAY_O_TOP_RIGHT: "O_OXXO__X",
        PLAY_O_BOTTOM_LEFT: "O__XXOO_X",
        PLAY_O_BOTTOM_CENTER: "O__XXO_OX"
      }
    },
    O__XXO___: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XXO___",
        PLAY_X_TOP_RIGHT: "O_XXXO___",
        PLAY_X_BOTTOM_LEFT: "O__XXOX__",
        PLAY_X_BOTTOM_CENTER: "O__XXO_X_",
        PLAY_X_BOTTOM_RIGHT: "O__XXO__X"
      }
    },
    O__XXXO__: { on: { "": "X_WINS" } },
    O__XXXOXO: { on: { "": "X_WINS" } },
    O__XX_OXO: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XX_OXO",
        PLAY_X_TOP_RIGHT: "O_XXX_OXO",
        PLAY_X_MIDDLE_RIGHT: "O__XXXOXO"
      }
    },
    O__XX_OX_: {
      on: {
        PLAY_O_TOP_CENTER: "OO_XX_OX_",
        PLAY_O_TOP_RIGHT: "O_OXX_OX_",
        PLAY_O_MIDDLE_RIGHT: "O__XXOOX_",
        PLAY_O_BOTTOM_RIGHT: "O__XX_OXO"
      }
    },
    O__XXXOOX: { on: { "": "X_WINS" } },
    O__XX_OOX: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XX_OOX",
        PLAY_X_TOP_RIGHT: "O_XXX_OOX",
        PLAY_X_MIDDLE_RIGHT: "O__XXXOOX"
      }
    },
    O__XX_O_X: {
      on: {
        PLAY_O_TOP_CENTER: "OO_XX_O_X",
        PLAY_O_TOP_RIGHT: "O_OXX_O_X",
        PLAY_O_MIDDLE_RIGHT: "O__XXOO_X",
        PLAY_O_BOTTOM_CENTER: "O__XX_OOX"
      }
    },
    O__XX_O__: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XX_O__",
        PLAY_X_TOP_RIGHT: "O_XXX_O__",
        PLAY_X_MIDDLE_RIGHT: "O__XXXO__",
        PLAY_X_BOTTOM_CENTER: "O__XX_OX_",
        PLAY_X_BOTTOM_RIGHT: "O__XX_O_X"
      }
    },
    O__XXX_O_: { on: { "": "X_WINS" } },
    O__XXXXOO: { on: { "": "X_WINS" } },
    O__XX_XOO: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XX_XOO",
        PLAY_X_TOP_RIGHT: "O_XXX_XOO",
        PLAY_X_MIDDLE_RIGHT: "O__XXXXOO"
      }
    },
    O__XX_XO_: {
      on: {
        PLAY_O_TOP_CENTER: "OO_XX_XO_",
        PLAY_O_TOP_RIGHT: "O_OXX_XO_",
        PLAY_O_MIDDLE_RIGHT: "O__XXOXO_",
        PLAY_O_BOTTOM_RIGHT: "O__XX_XOO"
      }
    },
    O__XX__OX: {
      on: {
        PLAY_O_TOP_CENTER: "OO_XX__OX",
        PLAY_O_TOP_RIGHT: "O_OXX__OX",
        PLAY_O_MIDDLE_RIGHT: "O__XXO_OX",
        PLAY_O_BOTTOM_LEFT: "O__XX_OOX"
      }
    },
    O__XX__O_: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XX__O_",
        PLAY_X_TOP_RIGHT: "O_XXX__O_",
        PLAY_X_MIDDLE_RIGHT: "O__XXX_O_",
        PLAY_X_BOTTOM_LEFT: "O__XX_XO_",
        PLAY_X_BOTTOM_RIGHT: "O__XX__OX"
      }
    },
    O__XXX__O: { on: { "": "X_WINS" } },
    O__XX_X_O: {
      on: {
        PLAY_O_TOP_CENTER: "OO_XX_X_O",
        PLAY_O_TOP_RIGHT: "O_OXX_X_O",
        PLAY_O_MIDDLE_RIGHT: "O__XXOX_O",
        PLAY_O_BOTTOM_CENTER: "O__XX_XOO"
      }
    },
    O__XX__XO: {
      on: {
        PLAY_O_TOP_CENTER: "OO_XX__XO",
        PLAY_O_TOP_RIGHT: "O_OXX__XO",
        PLAY_O_MIDDLE_RIGHT: "O__XXO_XO",
        PLAY_O_BOTTOM_LEFT: "O__XX_OXO"
      }
    },
    O__XX___O: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XX___O",
        PLAY_X_TOP_RIGHT: "O_XXX___O",
        PLAY_X_MIDDLE_RIGHT: "O__XXX__O",
        PLAY_X_BOTTOM_LEFT: "O__XX_X_O",
        PLAY_X_BOTTOM_CENTER: "O__XX__XO"
      }
    },
    O__XX____: {
      on: {
        PLAY_O_TOP_CENTER: "OO_XX____",
        PLAY_O_TOP_RIGHT: "O_OXX____",
        PLAY_O_MIDDLE_RIGHT: "O__XXO___",
        PLAY_O_BOTTOM_LEFT: "O__XX_O__",
        PLAY_O_BOTTOM_CENTER: "O__XX__O_",
        PLAY_O_BOTTOM_RIGHT: "O__XX___O"
      }
    },
    OOOX_XX__: { on: { "": "O_WINS" } },
    OOOXOXXX_: { on: { "": "O_WINS" } },
    OO_XOXXXO: { on: { "": "O_WINS" } },
    OO_XOXXX_: {
      on: { PLAY_O_TOP_RIGHT: "OOOXOXXX_", PLAY_O_BOTTOM_RIGHT: "OO_XOXXXO" }
    },
    OOOXOXX_X: { on: { "": "O_WINS" } },
    OO_XOXXOX: { on: { "": "O_WINS" } },
    OO_XOXX_X: {
      on: { PLAY_O_TOP_RIGHT: "OOOXOXX_X", PLAY_O_BOTTOM_CENTER: "OO_XOXXOX" }
    },
    OO_XOXX__: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXXOXX__",
        PLAY_X_BOTTOM_CENTER: "OO_XOXXX_",
        PLAY_X_BOTTOM_RIGHT: "OO_XOXX_X"
      }
    },
    OOOX_XXOX: { on: { "": "O_WINS" } },
    OO_X_XXOX: {
      on: { PLAY_O_TOP_RIGHT: "OOOX_XXOX", PLAY_O_CENTER: "OO_XOXXOX" }
    },
    OO_X_XXO_: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXX_XXO_",
        PLAY_X_CENTER: "OO_XXXXO_",
        PLAY_X_BOTTOM_RIGHT: "OO_X_XXOX"
      }
    },
    OOOX_XXXO: { on: { "": "O_WINS" } },
    OO_X_XXXO: {
      on: { PLAY_O_TOP_RIGHT: "OOOX_XXXO", PLAY_O_CENTER: "OO_XOXXXO" }
    },
    OO_X_XX_O: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXX_XX_O",
        PLAY_X_CENTER: "OO_XXXX_O",
        PLAY_X_BOTTOM_CENTER: "OO_X_XXXO"
      }
    },
    OO_X_XX__: {
      on: {
        PLAY_O_TOP_RIGHT: "OOOX_XX__",
        PLAY_O_CENTER: "OO_XOXX__",
        PLAY_O_BOTTOM_CENTER: "OO_X_XXO_",
        PLAY_O_BOTTOM_RIGHT: "OO_X_XX_O"
      }
    },
    OOOX_X_X_: { on: { "": "O_WINS" } },
    OOOXOX_XX: { on: { "": "O_WINS" } },
    OO_XOXOXX: { on: { PLAY_X_TOP_RIGHT: "OOXXOXOXX" } },
    OO_XOX_XX: {
      on: { PLAY_O_TOP_RIGHT: "OOOXOX_XX", PLAY_O_BOTTOM_LEFT: "OO_XOXOXX" }
    },
    OO_XOX_X_: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXXOX_X_",
        PLAY_X_BOTTOM_LEFT: "OO_XOXXX_",
        PLAY_X_BOTTOM_RIGHT: "OO_XOX_XX"
      }
    },
    OOOX_XOXX: { on: { "": "O_WINS" } },
    OO_X_XOXX: {
      on: { PLAY_O_TOP_RIGHT: "OOOX_XOXX", PLAY_O_CENTER: "OO_XOXOXX" }
    },
    OO_X_XOX_: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXX_XOX_",
        PLAY_X_CENTER: "OO_XXXOX_",
        PLAY_X_BOTTOM_RIGHT: "OO_X_XOXX"
      }
    },
    OO_X_X_XO: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXX_X_XO",
        PLAY_X_CENTER: "OO_XXX_XO",
        PLAY_X_BOTTOM_LEFT: "OO_X_XXXO"
      }
    },
    OO_X_X_X_: {
      on: {
        PLAY_O_TOP_RIGHT: "OOOX_X_X_",
        PLAY_O_CENTER: "OO_XOX_X_",
        PLAY_O_BOTTOM_LEFT: "OO_X_XOX_",
        PLAY_O_BOTTOM_RIGHT: "OO_X_X_XO"
      }
    },
    OOOX_X__X: { on: { "": "O_WINS" } },
    OO_XOX__X: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXXOX__X",
        PLAY_X_BOTTOM_LEFT: "OO_XOXX_X",
        PLAY_X_BOTTOM_CENTER: "OO_XOX_XX"
      }
    },
    OO_X_XO_X: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXX_XO_X",
        PLAY_X_CENTER: "OO_XXXO_X",
        PLAY_X_BOTTOM_CENTER: "OO_X_XOXX"
      }
    },
    OO_X_X_OX: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXX_X_OX",
        PLAY_X_CENTER: "OO_XXX_OX",
        PLAY_X_BOTTOM_LEFT: "OO_X_XXOX"
      }
    },
    OO_X_X__X: {
      on: {
        PLAY_O_TOP_RIGHT: "OOOX_X__X",
        PLAY_O_CENTER: "OO_XOX__X",
        PLAY_O_BOTTOM_LEFT: "OO_X_XO_X",
        PLAY_O_BOTTOM_CENTER: "OO_X_X_OX"
      }
    },
    OO_X_X___: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXX_X___",
        PLAY_X_CENTER: "OO_XXX___",
        PLAY_X_BOTTOM_LEFT: "OO_X_XX__",
        PLAY_X_BOTTOM_CENTER: "OO_X_X_X_",
        PLAY_X_BOTTOM_RIGHT: "OO_X_X__X"
      }
    },
    O_OXOXXXO: { on: { "": "O_WINS" } },
    O_OXOXXX_: {
      on: { PLAY_O_TOP_CENTER: "OOOXOXXX_", PLAY_O_BOTTOM_RIGHT: "O_OXOXXXO" }
    },
    O_OXOXXOX: { on: { PLAY_X_TOP_CENTER: "OXOXOXXOX" } },
    O_OXOXX_X: {
      on: {
        PLAY_O_TOP_CENTER: "OOOXOXX_X",
        PLAY_O_BOTTOM_CENTER: "O_OXOXXOX"
      }
    },
    O_OXOXX__: {
      on: {
        PLAY_X_TOP_CENTER: "OXOXOXX__",
        PLAY_X_BOTTOM_CENTER: "O_OXOXXX_",
        PLAY_X_BOTTOM_RIGHT: "O_OXOXX_X"
      }
    },
    O_OX_XXOX: {
      on: { PLAY_O_TOP_CENTER: "OOOX_XXOX", PLAY_O_CENTER: "O_OXOXXOX" }
    },
    O_OX_XXO_: {
      on: {
        PLAY_X_TOP_CENTER: "OXOX_XXO_",
        PLAY_X_CENTER: "O_OXXXXO_",
        PLAY_X_BOTTOM_RIGHT: "O_OX_XXOX"
      }
    },
    O_OX_XXXO: {
      on: { PLAY_O_TOP_CENTER: "OOOX_XXXO", PLAY_O_CENTER: "O_OXOXXXO" }
    },
    O_OX_XX_O: {
      on: {
        PLAY_X_TOP_CENTER: "OXOX_XX_O",
        PLAY_X_CENTER: "O_OXXXX_O",
        PLAY_X_BOTTOM_CENTER: "O_OX_XXXO"
      }
    },
    O_OX_XX__: {
      on: {
        PLAY_O_TOP_CENTER: "OOOX_XX__",
        PLAY_O_CENTER: "O_OXOXX__",
        PLAY_O_BOTTOM_CENTER: "O_OX_XXO_",
        PLAY_O_BOTTOM_RIGHT: "O_OX_XX_O"
      }
    },
    O_OXOXOXX: { on: { "": "O_WINS" } },
    O_OXOX_XX: {
      on: { PLAY_O_TOP_CENTER: "OOOXOX_XX", PLAY_O_BOTTOM_LEFT: "O_OXOXOXX" }
    },
    O_OXOX_X_: {
      on: {
        PLAY_X_TOP_CENTER: "OXOXOX_X_",
        PLAY_X_BOTTOM_LEFT: "O_OXOXXX_",
        PLAY_X_BOTTOM_RIGHT: "O_OXOX_XX"
      }
    },
    O_OX_XOXX: {
      on: { PLAY_O_TOP_CENTER: "OOOX_XOXX", PLAY_O_CENTER: "O_OXOXOXX" }
    },
    O_OX_XOX_: {
      on: {
        PLAY_X_TOP_CENTER: "OXOX_XOX_",
        PLAY_X_CENTER: "O_OXXXOX_",
        PLAY_X_BOTTOM_RIGHT: "O_OX_XOXX"
      }
    },
    O_OX_X_XO: {
      on: {
        PLAY_X_TOP_CENTER: "OXOX_X_XO",
        PLAY_X_CENTER: "O_OXXX_XO",
        PLAY_X_BOTTOM_LEFT: "O_OX_XXXO"
      }
    },
    O_OX_X_X_: {
      on: {
        PLAY_O_TOP_CENTER: "OOOX_X_X_",
        PLAY_O_CENTER: "O_OXOX_X_",
        PLAY_O_BOTTOM_LEFT: "O_OX_XOX_",
        PLAY_O_BOTTOM_RIGHT: "O_OX_X_XO"
      }
    },
    O_OXOX__X: {
      on: {
        PLAY_X_TOP_CENTER: "OXOXOX__X",
        PLAY_X_BOTTOM_LEFT: "O_OXOXX_X",
        PLAY_X_BOTTOM_CENTER: "O_OXOX_XX"
      }
    },
    O_OX_XO_X: {
      on: {
        PLAY_X_TOP_CENTER: "OXOX_XO_X",
        PLAY_X_CENTER: "O_OXXXO_X",
        PLAY_X_BOTTOM_CENTER: "O_OX_XOXX"
      }
    },
    O_OX_X_OX: {
      on: {
        PLAY_X_TOP_CENTER: "OXOX_X_OX",
        PLAY_X_CENTER: "O_OXXX_OX",
        PLAY_X_BOTTOM_LEFT: "O_OX_XXOX"
      }
    },
    O_OX_X__X: {
      on: {
        PLAY_O_TOP_CENTER: "OOOX_X__X",
        PLAY_O_CENTER: "O_OXOX__X",
        PLAY_O_BOTTOM_LEFT: "O_OX_XO_X",
        PLAY_O_BOTTOM_CENTER: "O_OX_X_OX"
      }
    },
    O_OX_X___: {
      on: {
        PLAY_X_TOP_CENTER: "OXOX_X___",
        PLAY_X_CENTER: "O_OXXX___",
        PLAY_X_BOTTOM_LEFT: "O_OX_XX__",
        PLAY_X_BOTTOM_CENTER: "O_OX_X_X_",
        PLAY_X_BOTTOM_RIGHT: "O_OX_X__X"
      }
    },
    O__XOXXOX: {
      on: { PLAY_O_TOP_CENTER: "OO_XOXXOX", PLAY_O_TOP_RIGHT: "O_OXOXXOX" }
    },
    O__XOXXO_: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XOXXO_",
        PLAY_X_TOP_RIGHT: "O_XXOXXO_",
        PLAY_X_BOTTOM_RIGHT: "O__XOXXOX"
      }
    },
    O__XOXX_O: { on: { "": "O_WINS" } },
    O__XOXX__: {
      on: {
        PLAY_O_TOP_CENTER: "OO_XOXX__",
        PLAY_O_TOP_RIGHT: "O_OXOXX__",
        PLAY_O_BOTTOM_CENTER: "O__XOXXO_",
        PLAY_O_BOTTOM_RIGHT: "O__XOXX_O"
      }
    },
    O__XOXOXX: {
      on: { PLAY_O_TOP_CENTER: "OO_XOXOXX", PLAY_O_TOP_RIGHT: "O_OXOXOXX" }
    },
    O__XOXOX_: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XOXOX_",
        PLAY_X_TOP_RIGHT: "O_XXOXOX_",
        PLAY_X_BOTTOM_RIGHT: "O__XOXOXX"
      }
    },
    O__XOX_XO: { on: { "": "O_WINS" } },
    O__XOX_X_: {
      on: {
        PLAY_O_TOP_CENTER: "OO_XOX_X_",
        PLAY_O_TOP_RIGHT: "O_OXOX_X_",
        PLAY_O_BOTTOM_LEFT: "O__XOXOX_",
        PLAY_O_BOTTOM_RIGHT: "O__XOX_XO"
      }
    },
    O__XOXO_X: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XOXO_X",
        PLAY_X_TOP_RIGHT: "O_XXOXO_X",
        PLAY_X_BOTTOM_CENTER: "O__XOXOXX"
      }
    },
    O__XOX_OX: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XOX_OX",
        PLAY_X_TOP_RIGHT: "O_XXOX_OX",
        PLAY_X_BOTTOM_LEFT: "O__XOXXOX"
      }
    },
    O__XOX__X: {
      on: {
        PLAY_O_TOP_CENTER: "OO_XOX__X",
        PLAY_O_TOP_RIGHT: "O_OXOX__X",
        PLAY_O_BOTTOM_LEFT: "O__XOXO_X",
        PLAY_O_BOTTOM_CENTER: "O__XOX_OX"
      }
    },
    O__XOX___: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XOX___",
        PLAY_X_TOP_RIGHT: "O_XXOX___",
        PLAY_X_BOTTOM_LEFT: "O__XOXX__",
        PLAY_X_BOTTOM_CENTER: "O__XOX_X_",
        PLAY_X_BOTTOM_RIGHT: "O__XOX__X"
      }
    },
    O__X_XOXO: {
      on: {
        PLAY_X_TOP_CENTER: "OX_X_XOXO",
        PLAY_X_TOP_RIGHT: "O_XX_XOXO",
        PLAY_X_CENTER: "O__XXXOXO"
      }
    },
    O__X_XOX_: {
      on: {
        PLAY_O_TOP_CENTER: "OO_X_XOX_",
        PLAY_O_TOP_RIGHT: "O_OX_XOX_",
        PLAY_O_CENTER: "O__XOXOX_",
        PLAY_O_BOTTOM_RIGHT: "O__X_XOXO"
      }
    },
    O__X_XOOX: {
      on: {
        PLAY_X_TOP_CENTER: "OX_X_XOOX",
        PLAY_X_TOP_RIGHT: "O_XX_XOOX",
        PLAY_X_CENTER: "O__XXXOOX"
      }
    },
    O__X_XO_X: {
      on: {
        PLAY_O_TOP_CENTER: "OO_X_XO_X",
        PLAY_O_TOP_RIGHT: "O_OX_XO_X",
        PLAY_O_CENTER: "O__XOXO_X",
        PLAY_O_BOTTOM_CENTER: "O__X_XOOX"
      }
    },
    O__X_XO__: {
      on: {
        PLAY_X_TOP_CENTER: "OX_X_XO__",
        PLAY_X_TOP_RIGHT: "O_XX_XO__",
        PLAY_X_CENTER: "O__XXXO__",
        PLAY_X_BOTTOM_CENTER: "O__X_XOX_",
        PLAY_X_BOTTOM_RIGHT: "O__X_XO_X"
      }
    },
    O__X_XXOO: {
      on: {
        PLAY_X_TOP_CENTER: "OX_X_XXOO",
        PLAY_X_TOP_RIGHT: "O_XX_XXOO",
        PLAY_X_CENTER: "O__XXXXOO"
      }
    },
    O__X_XXO_: {
      on: {
        PLAY_O_TOP_CENTER: "OO_X_XXO_",
        PLAY_O_TOP_RIGHT: "O_OX_XXO_",
        PLAY_O_CENTER: "O__XOXXO_",
        PLAY_O_BOTTOM_RIGHT: "O__X_XXOO"
      }
    },
    O__X_X_OX: {
      on: {
        PLAY_O_TOP_CENTER: "OO_X_X_OX",
        PLAY_O_TOP_RIGHT: "O_OX_X_OX",
        PLAY_O_CENTER: "O__XOX_OX",
        PLAY_O_BOTTOM_LEFT: "O__X_XOOX"
      }
    },
    O__X_X_O_: {
      on: {
        PLAY_X_TOP_CENTER: "OX_X_X_O_",
        PLAY_X_TOP_RIGHT: "O_XX_X_O_",
        PLAY_X_CENTER: "O__XXX_O_",
        PLAY_X_BOTTOM_LEFT: "O__X_XXO_",
        PLAY_X_BOTTOM_RIGHT: "O__X_X_OX"
      }
    },
    O__X_XX_O: {
      on: {
        PLAY_O_TOP_CENTER: "OO_X_XX_O",
        PLAY_O_TOP_RIGHT: "O_OX_XX_O",
        PLAY_O_CENTER: "O__XOXX_O",
        PLAY_O_BOTTOM_CENTER: "O__X_XXOO"
      }
    },
    O__X_X_XO: {
      on: {
        PLAY_O_TOP_CENTER: "OO_X_X_XO",
        PLAY_O_TOP_RIGHT: "O_OX_X_XO",
        PLAY_O_CENTER: "O__XOX_XO",
        PLAY_O_BOTTOM_LEFT: "O__X_XOXO"
      }
    },
    O__X_X__O: {
      on: {
        PLAY_X_TOP_CENTER: "OX_X_X__O",
        PLAY_X_TOP_RIGHT: "O_XX_X__O",
        PLAY_X_CENTER: "O__XXX__O",
        PLAY_X_BOTTOM_LEFT: "O__X_XX_O",
        PLAY_X_BOTTOM_CENTER: "O__X_X_XO"
      }
    },
    O__X_X___: {
      on: {
        PLAY_O_TOP_CENTER: "OO_X_X___",
        PLAY_O_TOP_RIGHT: "O_OX_X___",
        PLAY_O_CENTER: "O__XOX___",
        PLAY_O_BOTTOM_LEFT: "O__X_XO__",
        PLAY_O_BOTTOM_CENTER: "O__X_X_O_",
        PLAY_O_BOTTOM_RIGHT: "O__X_X__O"
      }
    },
    OOOX__XX_: { on: { "": "O_WINS" } },
    OO_XO_XXX: { on: { "": "X_WINS" } },
    OO_XO_XX_: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXXO_XX_",
        PLAY_X_MIDDLE_RIGHT: "OO_XOXXX_",
        PLAY_X_BOTTOM_RIGHT: "OO_XO_XXX"
      }
    },
    OO_X_OXXX: { on: { "": "X_WINS" } },
    OO_X_OXX_: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXX_OXX_",
        PLAY_X_CENTER: "OO_XXOXX_",
        PLAY_X_BOTTOM_RIGHT: "OO_X_OXXX"
      }
    },
    OO_X__XXO: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXX__XXO",
        PLAY_X_CENTER: "OO_XX_XXO",
        PLAY_X_MIDDLE_RIGHT: "OO_X_XXXO"
      }
    },
    OO_X__XX_: {
      on: {
        PLAY_O_TOP_RIGHT: "OOOX__XX_",
        PLAY_O_CENTER: "OO_XO_XX_",
        PLAY_O_MIDDLE_RIGHT: "OO_X_OXX_",
        PLAY_O_BOTTOM_RIGHT: "OO_X__XXO"
      }
    },
    OOOX__X_X: { on: { "": "O_WINS" } },
    OO_XO_X_X: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXXO_X_X",
        PLAY_X_MIDDLE_RIGHT: "OO_XOXX_X",
        PLAY_X_BOTTOM_CENTER: "OO_XO_XXX"
      }
    },
    OO_X_OX_X: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXX_OX_X",
        PLAY_X_CENTER: "OO_XXOX_X",
        PLAY_X_BOTTOM_CENTER: "OO_X_OXXX"
      }
    },
    OO_X__XOX: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXX__XOX",
        PLAY_X_CENTER: "OO_XX_XOX",
        PLAY_X_MIDDLE_RIGHT: "OO_X_XXOX"
      }
    },
    OO_X__X_X: {
      on: {
        PLAY_O_TOP_RIGHT: "OOOX__X_X",
        PLAY_O_CENTER: "OO_XO_X_X",
        PLAY_O_MIDDLE_RIGHT: "OO_X_OX_X",
        PLAY_O_BOTTOM_CENTER: "OO_X__XOX"
      }
    },
    OO_X__X__: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXX__X__",
        PLAY_X_CENTER: "OO_XX_X__",
        PLAY_X_MIDDLE_RIGHT: "OO_X_XX__",
        PLAY_X_BOTTOM_CENTER: "OO_X__XX_",
        PLAY_X_BOTTOM_RIGHT: "OO_X__X_X"
      }
    },
    O_OXO_XXX: { on: { "": "X_WINS" } },
    O_OXO_XX_: {
      on: {
        PLAY_X_TOP_CENTER: "OXOXO_XX_",
        PLAY_X_MIDDLE_RIGHT: "O_OXOXXX_",
        PLAY_X_BOTTOM_RIGHT: "O_OXO_XXX"
      }
    },
    O_OX_OXXX: { on: { "": "X_WINS" } },
    O_OX_OXX_: {
      on: {
        PLAY_X_TOP_CENTER: "OXOX_OXX_",
        PLAY_X_CENTER: "O_OXXOXX_",
        PLAY_X_BOTTOM_RIGHT: "O_OX_OXXX"
      }
    },
    O_OX__XXO: {
      on: {
        PLAY_X_TOP_CENTER: "OXOX__XXO",
        PLAY_X_CENTER: "O_OXX_XXO",
        PLAY_X_MIDDLE_RIGHT: "O_OX_XXXO"
      }
    },
    O_OX__XX_: {
      on: {
        PLAY_O_TOP_CENTER: "OOOX__XX_",
        PLAY_O_CENTER: "O_OXO_XX_",
        PLAY_O_MIDDLE_RIGHT: "O_OX_OXX_",
        PLAY_O_BOTTOM_RIGHT: "O_OX__XXO"
      }
    },
    O_OXO_X_X: {
      on: {
        PLAY_X_TOP_CENTER: "OXOXO_X_X",
        PLAY_X_MIDDLE_RIGHT: "O_OXOXX_X",
        PLAY_X_BOTTOM_CENTER: "O_OXO_XXX"
      }
    },
    O_OX_OX_X: {
      on: {
        PLAY_X_TOP_CENTER: "OXOX_OX_X",
        PLAY_X_CENTER: "O_OXXOX_X",
        PLAY_X_BOTTOM_CENTER: "O_OX_OXXX"
      }
    },
    O_OX__XOX: {
      on: {
        PLAY_X_TOP_CENTER: "OXOX__XOX",
        PLAY_X_CENTER: "O_OXX_XOX",
        PLAY_X_MIDDLE_RIGHT: "O_OX_XXOX"
      }
    },
    O_OX__X_X: {
      on: {
        PLAY_O_TOP_CENTER: "OOOX__X_X",
        PLAY_O_CENTER: "O_OXO_X_X",
        PLAY_O_MIDDLE_RIGHT: "O_OX_OX_X",
        PLAY_O_BOTTOM_CENTER: "O_OX__XOX"
      }
    },
    O_OX__X__: {
      on: {
        PLAY_X_TOP_CENTER: "OXOX__X__",
        PLAY_X_CENTER: "O_OXX_X__",
        PLAY_X_MIDDLE_RIGHT: "O_OX_XX__",
        PLAY_X_BOTTOM_CENTER: "O_OX__XX_",
        PLAY_X_BOTTOM_RIGHT: "O_OX__X_X"
      }
    },
    O__XOOXXX: { on: { "": "X_WINS" } },
    O__XOOXX_: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XOOXX_",
        PLAY_X_TOP_RIGHT: "O_XXOOXX_",
        PLAY_X_BOTTOM_RIGHT: "O__XOOXXX"
      }
    },
    O__XO_XXO: { on: { "": "O_WINS" } },
    O__XO_XX_: {
      on: {
        PLAY_O_TOP_CENTER: "OO_XO_XX_",
        PLAY_O_TOP_RIGHT: "O_OXO_XX_",
        PLAY_O_MIDDLE_RIGHT: "O__XOOXX_",
        PLAY_O_BOTTOM_RIGHT: "O__XO_XXO"
      }
    },
    O__XOOX_X: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XOOX_X",
        PLAY_X_TOP_RIGHT: "O_XXOOX_X",
        PLAY_X_BOTTOM_CENTER: "O__XOOXXX"
      }
    },
    O__XO_XOX: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XO_XOX",
        PLAY_X_TOP_RIGHT: "O_XXO_XOX",
        PLAY_X_MIDDLE_RIGHT: "O__XOXXOX"
      }
    },
    O__XO_X_X: {
      on: {
        PLAY_O_TOP_CENTER: "OO_XO_X_X",
        PLAY_O_TOP_RIGHT: "O_OXO_X_X",
        PLAY_O_MIDDLE_RIGHT: "O__XOOX_X",
        PLAY_O_BOTTOM_CENTER: "O__XO_XOX"
      }
    },
    O__XO_X__: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XO_X__",
        PLAY_X_TOP_RIGHT: "O_XXO_X__",
        PLAY_X_MIDDLE_RIGHT: "O__XOXX__",
        PLAY_X_BOTTOM_CENTER: "O__XO_XX_",
        PLAY_X_BOTTOM_RIGHT: "O__XO_X_X"
      }
    },
    O__X_OXXO: {
      on: {
        PLAY_X_TOP_CENTER: "OX_X_OXXO",
        PLAY_X_TOP_RIGHT: "O_XX_OXXO",
        PLAY_X_CENTER: "O__XXOXXO"
      }
    },
    O__X_OXX_: {
      on: {
        PLAY_O_TOP_CENTER: "OO_X_OXX_",
        PLAY_O_TOP_RIGHT: "O_OX_OXX_",
        PLAY_O_CENTER: "O__XOOXX_",
        PLAY_O_BOTTOM_RIGHT: "O__X_OXXO"
      }
    },
    O__X_OXOX: {
      on: {
        PLAY_X_TOP_CENTER: "OX_X_OXOX",
        PLAY_X_TOP_RIGHT: "O_XX_OXOX",
        PLAY_X_CENTER: "O__XXOXOX"
      }
    },
    O__X_OX_X: {
      on: {
        PLAY_O_TOP_CENTER: "OO_X_OX_X",
        PLAY_O_TOP_RIGHT: "O_OX_OX_X",
        PLAY_O_CENTER: "O__XOOX_X",
        PLAY_O_BOTTOM_CENTER: "O__X_OXOX"
      }
    },
    O__X_OX__: {
      on: {
        PLAY_X_TOP_CENTER: "OX_X_OX__",
        PLAY_X_TOP_RIGHT: "O_XX_OX__",
        PLAY_X_CENTER: "O__XXOX__",
        PLAY_X_BOTTOM_CENTER: "O__X_OXX_",
        PLAY_X_BOTTOM_RIGHT: "O__X_OX_X"
      }
    },
    O__X__XOX: {
      on: {
        PLAY_O_TOP_CENTER: "OO_X__XOX",
        PLAY_O_TOP_RIGHT: "O_OX__XOX",
        PLAY_O_CENTER: "O__XO_XOX",
        PLAY_O_MIDDLE_RIGHT: "O__X_OXOX"
      }
    },
    O__X__XO_: {
      on: {
        PLAY_X_TOP_CENTER: "OX_X__XO_",
        PLAY_X_TOP_RIGHT: "O_XX__XO_",
        PLAY_X_CENTER: "O__XX_XO_",
        PLAY_X_MIDDLE_RIGHT: "O__X_XXO_",
        PLAY_X_BOTTOM_RIGHT: "O__X__XOX"
      }
    },
    O__X__XXO: {
      on: {
        PLAY_O_TOP_CENTER: "OO_X__XXO",
        PLAY_O_TOP_RIGHT: "O_OX__XXO",
        PLAY_O_CENTER: "O__XO_XXO",
        PLAY_O_MIDDLE_RIGHT: "O__X_OXXO"
      }
    },
    O__X__X_O: {
      on: {
        PLAY_X_TOP_CENTER: "OX_X__X_O",
        PLAY_X_TOP_RIGHT: "O_XX__X_O",
        PLAY_X_CENTER: "O__XX_X_O",
        PLAY_X_MIDDLE_RIGHT: "O__X_XX_O",
        PLAY_X_BOTTOM_CENTER: "O__X__XXO"
      }
    },
    O__X__X__: {
      on: {
        PLAY_O_TOP_CENTER: "OO_X__X__",
        PLAY_O_TOP_RIGHT: "O_OX__X__",
        PLAY_O_CENTER: "O__XO_X__",
        PLAY_O_MIDDLE_RIGHT: "O__X_OX__",
        PLAY_O_BOTTOM_CENTER: "O__X__XO_",
        PLAY_O_BOTTOM_RIGHT: "O__X__X_O"
      }
    },
    OOOX___XX: { on: { "": "O_WINS" } },
    OO_XO__XX: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXXO__XX",
        PLAY_X_MIDDLE_RIGHT: "OO_XOX_XX",
        PLAY_X_BOTTOM_LEFT: "OO_XO_XXX"
      }
    },
    OO_X_O_XX: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXX_O_XX",
        PLAY_X_CENTER: "OO_XXO_XX",
        PLAY_X_BOTTOM_LEFT: "OO_X_OXXX"
      }
    },
    OO_X__OXX: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXX__OXX",
        PLAY_X_CENTER: "OO_XX_OXX",
        PLAY_X_MIDDLE_RIGHT: "OO_X_XOXX"
      }
    },
    OO_X___XX: {
      on: {
        PLAY_O_TOP_RIGHT: "OOOX___XX",
        PLAY_O_CENTER: "OO_XO__XX",
        PLAY_O_MIDDLE_RIGHT: "OO_X_O_XX",
        PLAY_O_BOTTOM_LEFT: "OO_X__OXX"
      }
    },
    OO_X___X_: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXX___X_",
        PLAY_X_CENTER: "OO_XX__X_",
        PLAY_X_MIDDLE_RIGHT: "OO_X_X_X_",
        PLAY_X_BOTTOM_LEFT: "OO_X__XX_",
        PLAY_X_BOTTOM_RIGHT: "OO_X___XX"
      }
    },
    O_OXO__XX: {
      on: {
        PLAY_X_TOP_CENTER: "OXOXO__XX",
        PLAY_X_MIDDLE_RIGHT: "O_OXOX_XX",
        PLAY_X_BOTTOM_LEFT: "O_OXO_XXX"
      }
    },
    O_OX_O_XX: {
      on: {
        PLAY_X_TOP_CENTER: "OXOX_O_XX",
        PLAY_X_CENTER: "O_OXXO_XX",
        PLAY_X_BOTTOM_LEFT: "O_OX_OXXX"
      }
    },
    O_OX__OXX: {
      on: {
        PLAY_X_TOP_CENTER: "OXOX__OXX",
        PLAY_X_CENTER: "O_OXX_OXX",
        PLAY_X_MIDDLE_RIGHT: "O_OX_XOXX"
      }
    },
    O_OX___XX: {
      on: {
        PLAY_O_TOP_CENTER: "OOOX___XX",
        PLAY_O_CENTER: "O_OXO__XX",
        PLAY_O_MIDDLE_RIGHT: "O_OX_O_XX",
        PLAY_O_BOTTOM_LEFT: "O_OX__OXX"
      }
    },
    O_OX___X_: {
      on: {
        PLAY_X_TOP_CENTER: "OXOX___X_",
        PLAY_X_CENTER: "O_OXX__X_",
        PLAY_X_MIDDLE_RIGHT: "O_OX_X_X_",
        PLAY_X_BOTTOM_LEFT: "O_OX__XX_",
        PLAY_X_BOTTOM_RIGHT: "O_OX___XX"
      }
    },
    O__XOO_XX: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XOO_XX",
        PLAY_X_TOP_RIGHT: "O_XXOO_XX",
        PLAY_X_BOTTOM_LEFT: "O__XOOXXX"
      }
    },
    O__XO_OXX: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XO_OXX",
        PLAY_X_TOP_RIGHT: "O_XXO_OXX",
        PLAY_X_MIDDLE_RIGHT: "O__XOXOXX"
      }
    },
    O__XO__XX: {
      on: {
        PLAY_O_TOP_CENTER: "OO_XO__XX",
        PLAY_O_TOP_RIGHT: "O_OXO__XX",
        PLAY_O_MIDDLE_RIGHT: "O__XOO_XX",
        PLAY_O_BOTTOM_LEFT: "O__XO_OXX"
      }
    },
    O__XO__X_: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XO__X_",
        PLAY_X_TOP_RIGHT: "O_XXO__X_",
        PLAY_X_MIDDLE_RIGHT: "O__XOX_X_",
        PLAY_X_BOTTOM_LEFT: "O__XO_XX_",
        PLAY_X_BOTTOM_RIGHT: "O__XO__XX"
      }
    },
    O__X_OOXX: {
      on: {
        PLAY_X_TOP_CENTER: "OX_X_OOXX",
        PLAY_X_TOP_RIGHT: "O_XX_OOXX",
        PLAY_X_CENTER: "O__XXOOXX"
      }
    },
    O__X_O_XX: {
      on: {
        PLAY_O_TOP_CENTER: "OO_X_O_XX",
        PLAY_O_TOP_RIGHT: "O_OX_O_XX",
        PLAY_O_CENTER: "O__XOO_XX",
        PLAY_O_BOTTOM_LEFT: "O__X_OOXX"
      }
    },
    O__X_O_X_: {
      on: {
        PLAY_X_TOP_CENTER: "OX_X_O_X_",
        PLAY_X_TOP_RIGHT: "O_XX_O_X_",
        PLAY_X_CENTER: "O__XXO_X_",
        PLAY_X_BOTTOM_LEFT: "O__X_OXX_",
        PLAY_X_BOTTOM_RIGHT: "O__X_O_XX"
      }
    },
    O__X__OXX: {
      on: {
        PLAY_O_TOP_CENTER: "OO_X__OXX",
        PLAY_O_TOP_RIGHT: "O_OX__OXX",
        PLAY_O_CENTER: "O__XO_OXX",
        PLAY_O_MIDDLE_RIGHT: "O__X_OOXX"
      }
    },
    O__X__OX_: {
      on: {
        PLAY_X_TOP_CENTER: "OX_X__OX_",
        PLAY_X_TOP_RIGHT: "O_XX__OX_",
        PLAY_X_CENTER: "O__XX_OX_",
        PLAY_X_MIDDLE_RIGHT: "O__X_XOX_",
        PLAY_X_BOTTOM_RIGHT: "O__X__OXX"
      }
    },
    O__X___XO: {
      on: {
        PLAY_X_TOP_CENTER: "OX_X___XO",
        PLAY_X_TOP_RIGHT: "O_XX___XO",
        PLAY_X_CENTER: "O__XX__XO",
        PLAY_X_MIDDLE_RIGHT: "O__X_X_XO",
        PLAY_X_BOTTOM_LEFT: "O__X__XXO"
      }
    },
    O__X___X_: {
      on: {
        PLAY_O_TOP_CENTER: "OO_X___X_",
        PLAY_O_TOP_RIGHT: "O_OX___X_",
        PLAY_O_CENTER: "O__XO__X_",
        PLAY_O_MIDDLE_RIGHT: "O__X_O_X_",
        PLAY_O_BOTTOM_LEFT: "O__X__OX_",
        PLAY_O_BOTTOM_RIGHT: "O__X___XO"
      }
    },
    OO_X____X: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXX____X",
        PLAY_X_CENTER: "OO_XX___X",
        PLAY_X_MIDDLE_RIGHT: "OO_X_X__X",
        PLAY_X_BOTTOM_LEFT: "OO_X__X_X",
        PLAY_X_BOTTOM_CENTER: "OO_X___XX"
      }
    },
    O_OX____X: {
      on: {
        PLAY_X_TOP_CENTER: "OXOX____X",
        PLAY_X_CENTER: "O_OXX___X",
        PLAY_X_MIDDLE_RIGHT: "O_OX_X__X",
        PLAY_X_BOTTOM_LEFT: "O_OX__X_X",
        PLAY_X_BOTTOM_CENTER: "O_OX___XX"
      }
    },
    O__XO___X: {
      on: {
        PLAY_X_TOP_CENTER: "OX_XO___X",
        PLAY_X_TOP_RIGHT: "O_XXO___X",
        PLAY_X_MIDDLE_RIGHT: "O__XOX__X",
        PLAY_X_BOTTOM_LEFT: "O__XO_X_X",
        PLAY_X_BOTTOM_CENTER: "O__XO__XX"
      }
    },
    O__X_O__X: {
      on: {
        PLAY_X_TOP_CENTER: "OX_X_O__X",
        PLAY_X_TOP_RIGHT: "O_XX_O__X",
        PLAY_X_CENTER: "O__XXO__X",
        PLAY_X_BOTTOM_LEFT: "O__X_OX_X",
        PLAY_X_BOTTOM_CENTER: "O__X_O_XX"
      }
    },
    O__X__O_X: {
      on: {
        PLAY_X_TOP_CENTER: "OX_X__O_X",
        PLAY_X_TOP_RIGHT: "O_XX__O_X",
        PLAY_X_CENTER: "O__XX_O_X",
        PLAY_X_MIDDLE_RIGHT: "O__X_XO_X",
        PLAY_X_BOTTOM_CENTER: "O__X__OXX"
      }
    },
    O__X___OX: {
      on: {
        PLAY_X_TOP_CENTER: "OX_X___OX",
        PLAY_X_TOP_RIGHT: "O_XX___OX",
        PLAY_X_CENTER: "O__XX__OX",
        PLAY_X_MIDDLE_RIGHT: "O__X_X_OX",
        PLAY_X_BOTTOM_LEFT: "O__X__XOX"
      }
    },
    O__X____X: {
      on: {
        PLAY_O_TOP_CENTER: "OO_X____X",
        PLAY_O_TOP_RIGHT: "O_OX____X",
        PLAY_O_CENTER: "O__XO___X",
        PLAY_O_MIDDLE_RIGHT: "O__X_O__X",
        PLAY_O_BOTTOM_LEFT: "O__X__O_X",
        PLAY_O_BOTTOM_CENTER: "O__X___OX"
      }
    },
    O__X_____: {
      on: {
        PLAY_X_TOP_CENTER: "OX_X_____",
        PLAY_X_TOP_RIGHT: "O_XX_____",
        PLAY_X_CENTER: "O__XX____",
        PLAY_X_MIDDLE_RIGHT: "O__X_X___",
        PLAY_X_BOTTOM_LEFT: "O__X__X__",
        PLAY_X_BOTTOM_CENTER: "O__X___X_",
        PLAY_X_BOTTOM_RIGHT: "O__X____X"
      }
    },
    _OOXXX___: { on: { "": "X_WINS" } },
    _OOXXOXXO: { on: { "": "O_WINS" } },
    _OOXXOXX_: {
      on: { PLAY_O_TOP_LEFT: "OOOXXOXX_", PLAY_O_BOTTOM_RIGHT: "_OOXXOXXO" }
    },
    XOOXXOXOX: { on: { "": "X_WINS" } },
    _OOXXOXOX: { on: { PLAY_X_TOP_LEFT: "XOOXXOXOX" } },
    _OOXXOX_X: {
      on: { PLAY_O_TOP_LEFT: "OOOXXOX_X", PLAY_O_BOTTOM_CENTER: "_OOXXOXOX" }
    },
    _OOXXOX__: {
      on: {
        PLAY_X_TOP_LEFT: "XOOXXOX__",
        PLAY_X_BOTTOM_CENTER: "_OOXXOXX_",
        PLAY_X_BOTTOM_RIGHT: "_OOXXOX_X"
      }
    },
    _OOXXXXO_: { on: { "": "X_WINS" } },
    _OOXX_XOX: {
      on: { PLAY_O_TOP_LEFT: "OOOXX_XOX", PLAY_O_MIDDLE_RIGHT: "_OOXXOXOX" }
    },
    _OOXX_XO_: {
      on: {
        PLAY_X_TOP_LEFT: "XOOXX_XO_",
        PLAY_X_MIDDLE_RIGHT: "_OOXXXXO_",
        PLAY_X_BOTTOM_RIGHT: "_OOXX_XOX"
      }
    },
    _OOXXXX_O: { on: { "": "X_WINS" } },
    _OOXX_XXO: {
      on: { PLAY_O_TOP_LEFT: "OOOXX_XXO", PLAY_O_MIDDLE_RIGHT: "_OOXXOXXO" }
    },
    _OOXX_X_O: {
      on: {
        PLAY_X_TOP_LEFT: "XOOXX_X_O",
        PLAY_X_MIDDLE_RIGHT: "_OOXXXX_O",
        PLAY_X_BOTTOM_CENTER: "_OOXX_XXO"
      }
    },
    _OOXX_X__: {
      on: {
        PLAY_O_TOP_LEFT: "OOOXX_X__",
        PLAY_O_MIDDLE_RIGHT: "_OOXXOX__",
        PLAY_O_BOTTOM_CENTER: "_OOXX_XO_",
        PLAY_O_BOTTOM_RIGHT: "_OOXX_X_O"
      }
    },
    _OOXXOOXX: { on: { PLAY_X_TOP_LEFT: "XOOXXOOXX" } },
    _OOXXO_XX: {
      on: { PLAY_O_TOP_LEFT: "OOOXXO_XX", PLAY_O_BOTTOM_LEFT: "_OOXXOOXX" }
    },
    _OOXXO_X_: {
      on: {
        PLAY_X_TOP_LEFT: "XOOXXO_X_",
        PLAY_X_BOTTOM_LEFT: "_OOXXOXX_",
        PLAY_X_BOTTOM_RIGHT: "_OOXXO_XX"
      }
    },
    _OOXXXOX_: { on: { "": "X_WINS" } },
    _OOXX_OXX: {
      on: { PLAY_O_TOP_LEFT: "OOOXX_OXX", PLAY_O_MIDDLE_RIGHT: "_OOXXOOXX" }
    },
    _OOXX_OX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOOXX_OX_",
        PLAY_X_MIDDLE_RIGHT: "_OOXXXOX_",
        PLAY_X_BOTTOM_RIGHT: "_OOXX_OXX"
      }
    },
    _OOXXX_XO: { on: { "": "X_WINS" } },
    _OOXX__XO: {
      on: {
        PLAY_X_TOP_LEFT: "XOOXX__XO",
        PLAY_X_MIDDLE_RIGHT: "_OOXXX_XO",
        PLAY_X_BOTTOM_LEFT: "_OOXX_XXO"
      }
    },
    _OOXX__X_: {
      on: {
        PLAY_O_TOP_LEFT: "OOOXX__X_",
        PLAY_O_MIDDLE_RIGHT: "_OOXXO_X_",
        PLAY_O_BOTTOM_LEFT: "_OOXX_OX_",
        PLAY_O_BOTTOM_RIGHT: "_OOXX__XO"
      }
    },
    _OOXXO__X: {
      on: {
        PLAY_X_TOP_LEFT: "XOOXXO__X",
        PLAY_X_BOTTOM_LEFT: "_OOXXOX_X",
        PLAY_X_BOTTOM_CENTER: "_OOXXO_XX"
      }
    },
    _OOXXXO_X: { on: { "": "X_WINS" } },
    _OOXX_O_X: {
      on: {
        PLAY_X_TOP_LEFT: "XOOXX_O_X",
        PLAY_X_MIDDLE_RIGHT: "_OOXXXO_X",
        PLAY_X_BOTTOM_CENTER: "_OOXX_OXX"
      }
    },
    _OOXXX_OX: { on: { "": "X_WINS" } },
    _OOXX__OX: {
      on: {
        PLAY_X_TOP_LEFT: "XOOXX__OX",
        PLAY_X_MIDDLE_RIGHT: "_OOXXX_OX",
        PLAY_X_BOTTOM_LEFT: "_OOXX_XOX"
      }
    },
    _OOXX___X: {
      on: {
        PLAY_O_TOP_LEFT: "OOOXX___X",
        PLAY_O_MIDDLE_RIGHT: "_OOXXO__X",
        PLAY_O_BOTTOM_LEFT: "_OOXX_O_X",
        PLAY_O_BOTTOM_CENTER: "_OOXX__OX"
      }
    },
    _OOXX____: {
      on: {
        PLAY_X_TOP_LEFT: "XOOXX____",
        PLAY_X_MIDDLE_RIGHT: "_OOXXX___",
        PLAY_X_BOTTOM_LEFT: "_OOXX_X__",
        PLAY_X_BOTTOM_CENTER: "_OOXX__X_",
        PLAY_X_BOTTOM_RIGHT: "_OOXX___X"
      }
    },
    _O_XXOXOX: {
      on: { PLAY_O_TOP_LEFT: "OO_XXOXOX", PLAY_O_TOP_RIGHT: "_OOXXOXOX" }
    },
    _O_XXOXO_: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XXOXO_",
        PLAY_X_TOP_RIGHT: "_OXXXOXO_",
        PLAY_X_BOTTOM_RIGHT: "_O_XXOXOX"
      }
    },
    _O_XXOXXO: {
      on: { PLAY_O_TOP_LEFT: "OO_XXOXXO", PLAY_O_TOP_RIGHT: "_OOXXOXXO" }
    },
    _O_XXOX_O: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XXOX_O",
        PLAY_X_TOP_RIGHT: "_OXXXOX_O",
        PLAY_X_BOTTOM_CENTER: "_O_XXOXXO"
      }
    },
    _O_XXOX__: {
      on: {
        PLAY_O_TOP_LEFT: "OO_XXOX__",
        PLAY_O_TOP_RIGHT: "_OOXXOX__",
        PLAY_O_BOTTOM_CENTER: "_O_XXOXO_",
        PLAY_O_BOTTOM_RIGHT: "_O_XXOX_O"
      }
    },
    _O_XXOOXX: {
      on: { PLAY_O_TOP_LEFT: "OO_XXOOXX", PLAY_O_TOP_RIGHT: "_OOXXOOXX" }
    },
    _O_XXOOX_: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XXOOX_",
        PLAY_X_TOP_RIGHT: "_OXXXOOX_",
        PLAY_X_BOTTOM_RIGHT: "_O_XXOOXX"
      }
    },
    _O_XXO_XO: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XXO_XO",
        PLAY_X_TOP_RIGHT: "_OXXXO_XO",
        PLAY_X_BOTTOM_LEFT: "_O_XXOXXO"
      }
    },
    _O_XXO_X_: {
      on: {
        PLAY_O_TOP_LEFT: "OO_XXO_X_",
        PLAY_O_TOP_RIGHT: "_OOXXO_X_",
        PLAY_O_BOTTOM_LEFT: "_O_XXOOX_",
        PLAY_O_BOTTOM_RIGHT: "_O_XXO_XO"
      }
    },
    _O_XXOO_X: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XXOO_X",
        PLAY_X_TOP_RIGHT: "_OXXXOO_X",
        PLAY_X_BOTTOM_CENTER: "_O_XXOOXX"
      }
    },
    _O_XXO_OX: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XXO_OX",
        PLAY_X_TOP_RIGHT: "_OXXXO_OX",
        PLAY_X_BOTTOM_LEFT: "_O_XXOXOX"
      }
    },
    _O_XXO__X: {
      on: {
        PLAY_O_TOP_LEFT: "OO_XXO__X",
        PLAY_O_TOP_RIGHT: "_OOXXO__X",
        PLAY_O_BOTTOM_LEFT: "_O_XXOO_X",
        PLAY_O_BOTTOM_CENTER: "_O_XXO_OX"
      }
    },
    _O_XXO___: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XXO___",
        PLAY_X_TOP_RIGHT: "_OXXXO___",
        PLAY_X_BOTTOM_LEFT: "_O_XXOX__",
        PLAY_X_BOTTOM_CENTER: "_O_XXO_X_",
        PLAY_X_BOTTOM_RIGHT: "_O_XXO__X"
      }
    },
    _O_XXXO__: { on: { "": "X_WINS" } },
    _O_XXXOXO: { on: { "": "X_WINS" } },
    _O_XX_OXO: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XX_OXO",
        PLAY_X_TOP_RIGHT: "_OXXX_OXO",
        PLAY_X_MIDDLE_RIGHT: "_O_XXXOXO"
      }
    },
    _O_XX_OX_: {
      on: {
        PLAY_O_TOP_LEFT: "OO_XX_OX_",
        PLAY_O_TOP_RIGHT: "_OOXX_OX_",
        PLAY_O_MIDDLE_RIGHT: "_O_XXOOX_",
        PLAY_O_BOTTOM_RIGHT: "_O_XX_OXO"
      }
    },
    _O_XXXOOX: { on: { "": "X_WINS" } },
    _O_XX_OOX: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XX_OOX",
        PLAY_X_TOP_RIGHT: "_OXXX_OOX",
        PLAY_X_MIDDLE_RIGHT: "_O_XXXOOX"
      }
    },
    _O_XX_O_X: {
      on: {
        PLAY_O_TOP_LEFT: "OO_XX_O_X",
        PLAY_O_TOP_RIGHT: "_OOXX_O_X",
        PLAY_O_MIDDLE_RIGHT: "_O_XXOO_X",
        PLAY_O_BOTTOM_CENTER: "_O_XX_OOX"
      }
    },
    _O_XX_O__: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XX_O__",
        PLAY_X_TOP_RIGHT: "_OXXX_O__",
        PLAY_X_MIDDLE_RIGHT: "_O_XXXO__",
        PLAY_X_BOTTOM_CENTER: "_O_XX_OX_",
        PLAY_X_BOTTOM_RIGHT: "_O_XX_O_X"
      }
    },
    _O_XXX_O_: { on: { "": "X_WINS" } },
    _O_XXXXOO: { on: { "": "X_WINS" } },
    _O_XX_XOO: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XX_XOO",
        PLAY_X_TOP_RIGHT: "_OXXX_XOO",
        PLAY_X_MIDDLE_RIGHT: "_O_XXXXOO"
      }
    },
    _O_XX_XO_: {
      on: {
        PLAY_O_TOP_LEFT: "OO_XX_XO_",
        PLAY_O_TOP_RIGHT: "_OOXX_XO_",
        PLAY_O_MIDDLE_RIGHT: "_O_XXOXO_",
        PLAY_O_BOTTOM_RIGHT: "_O_XX_XOO"
      }
    },
    _O_XX__OX: {
      on: {
        PLAY_O_TOP_LEFT: "OO_XX__OX",
        PLAY_O_TOP_RIGHT: "_OOXX__OX",
        PLAY_O_MIDDLE_RIGHT: "_O_XXO_OX",
        PLAY_O_BOTTOM_LEFT: "_O_XX_OOX"
      }
    },
    _O_XX__O_: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XX__O_",
        PLAY_X_TOP_RIGHT: "_OXXX__O_",
        PLAY_X_MIDDLE_RIGHT: "_O_XXX_O_",
        PLAY_X_BOTTOM_LEFT: "_O_XX_XO_",
        PLAY_X_BOTTOM_RIGHT: "_O_XX__OX"
      }
    },
    _O_XXX__O: { on: { "": "X_WINS" } },
    _O_XX_X_O: {
      on: {
        PLAY_O_TOP_LEFT: "OO_XX_X_O",
        PLAY_O_TOP_RIGHT: "_OOXX_X_O",
        PLAY_O_MIDDLE_RIGHT: "_O_XXOX_O",
        PLAY_O_BOTTOM_CENTER: "_O_XX_XOO"
      }
    },
    _O_XX__XO: {
      on: {
        PLAY_O_TOP_LEFT: "OO_XX__XO",
        PLAY_O_TOP_RIGHT: "_OOXX__XO",
        PLAY_O_MIDDLE_RIGHT: "_O_XXO_XO",
        PLAY_O_BOTTOM_LEFT: "_O_XX_OXO"
      }
    },
    _O_XX___O: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XX___O",
        PLAY_X_TOP_RIGHT: "_OXXX___O",
        PLAY_X_MIDDLE_RIGHT: "_O_XXX__O",
        PLAY_X_BOTTOM_LEFT: "_O_XX_X_O",
        PLAY_X_BOTTOM_CENTER: "_O_XX__XO"
      }
    },
    _O_XX____: {
      on: {
        PLAY_O_TOP_LEFT: "OO_XX____",
        PLAY_O_TOP_RIGHT: "_OOXX____",
        PLAY_O_MIDDLE_RIGHT: "_O_XXO___",
        PLAY_O_BOTTOM_LEFT: "_O_XX_O__",
        PLAY_O_BOTTOM_CENTER: "_O_XX__O_",
        PLAY_O_BOTTOM_RIGHT: "_O_XX___O"
      }
    },
    _OOXOXXXO: { on: { PLAY_X_TOP_LEFT: "XOOXOXXXO" } },
    _OOXOXXX_: {
      on: { PLAY_O_TOP_LEFT: "OOOXOXXX_", PLAY_O_BOTTOM_RIGHT: "_OOXOXXXO" }
    },
    _OOXOXXOX: { on: { "": "O_WINS" } },
    _OOXOXX_X: {
      on: { PLAY_O_TOP_LEFT: "OOOXOXX_X", PLAY_O_BOTTOM_CENTER: "_OOXOXXOX" }
    },
    _OOXOXX__: {
      on: {
        PLAY_X_TOP_LEFT: "XOOXOXX__",
        PLAY_X_BOTTOM_CENTER: "_OOXOXXX_",
        PLAY_X_BOTTOM_RIGHT: "_OOXOXX_X"
      }
    },
    _OOX_XXOX: {
      on: { PLAY_O_TOP_LEFT: "OOOX_XXOX", PLAY_O_CENTER: "_OOXOXXOX" }
    },
    _OOX_XXO_: {
      on: {
        PLAY_X_TOP_LEFT: "XOOX_XXO_",
        PLAY_X_CENTER: "_OOXXXXO_",
        PLAY_X_BOTTOM_RIGHT: "_OOX_XXOX"
      }
    },
    _OOX_XXXO: {
      on: { PLAY_O_TOP_LEFT: "OOOX_XXXO", PLAY_O_CENTER: "_OOXOXXXO" }
    },
    _OOX_XX_O: {
      on: {
        PLAY_X_TOP_LEFT: "XOOX_XX_O",
        PLAY_X_CENTER: "_OOXXXX_O",
        PLAY_X_BOTTOM_CENTER: "_OOX_XXXO"
      }
    },
    _OOX_XX__: {
      on: {
        PLAY_O_TOP_LEFT: "OOOX_XX__",
        PLAY_O_CENTER: "_OOXOXX__",
        PLAY_O_BOTTOM_CENTER: "_OOX_XXO_",
        PLAY_O_BOTTOM_RIGHT: "_OOX_XX_O"
      }
    },
    _OOXOXOXX: { on: { "": "O_WINS" } },
    _OOXOX_XX: {
      on: { PLAY_O_TOP_LEFT: "OOOXOX_XX", PLAY_O_BOTTOM_LEFT: "_OOXOXOXX" }
    },
    _OOXOX_X_: {
      on: {
        PLAY_X_TOP_LEFT: "XOOXOX_X_",
        PLAY_X_BOTTOM_LEFT: "_OOXOXXX_",
        PLAY_X_BOTTOM_RIGHT: "_OOXOX_XX"
      }
    },
    _OOX_XOXX: {
      on: { PLAY_O_TOP_LEFT: "OOOX_XOXX", PLAY_O_CENTER: "_OOXOXOXX" }
    },
    _OOX_XOX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOOX_XOX_",
        PLAY_X_CENTER: "_OOXXXOX_",
        PLAY_X_BOTTOM_RIGHT: "_OOX_XOXX"
      }
    },
    _OOX_X_XO: {
      on: {
        PLAY_X_TOP_LEFT: "XOOX_X_XO",
        PLAY_X_CENTER: "_OOXXX_XO",
        PLAY_X_BOTTOM_LEFT: "_OOX_XXXO"
      }
    },
    _OOX_X_X_: {
      on: {
        PLAY_O_TOP_LEFT: "OOOX_X_X_",
        PLAY_O_CENTER: "_OOXOX_X_",
        PLAY_O_BOTTOM_LEFT: "_OOX_XOX_",
        PLAY_O_BOTTOM_RIGHT: "_OOX_X_XO"
      }
    },
    _OOXOX__X: {
      on: {
        PLAY_X_TOP_LEFT: "XOOXOX__X",
        PLAY_X_BOTTOM_LEFT: "_OOXOXX_X",
        PLAY_X_BOTTOM_CENTER: "_OOXOX_XX"
      }
    },
    _OOX_XO_X: {
      on: {
        PLAY_X_TOP_LEFT: "XOOX_XO_X",
        PLAY_X_CENTER: "_OOXXXO_X",
        PLAY_X_BOTTOM_CENTER: "_OOX_XOXX"
      }
    },
    _OOX_X_OX: {
      on: {
        PLAY_X_TOP_LEFT: "XOOX_X_OX",
        PLAY_X_CENTER: "_OOXXX_OX",
        PLAY_X_BOTTOM_LEFT: "_OOX_XXOX"
      }
    },
    _OOX_X__X: {
      on: {
        PLAY_O_TOP_LEFT: "OOOX_X__X",
        PLAY_O_CENTER: "_OOXOX__X",
        PLAY_O_BOTTOM_LEFT: "_OOX_XO_X",
        PLAY_O_BOTTOM_CENTER: "_OOX_X_OX"
      }
    },
    _OOX_X___: {
      on: {
        PLAY_X_TOP_LEFT: "XOOX_X___",
        PLAY_X_CENTER: "_OOXXX___",
        PLAY_X_BOTTOM_LEFT: "_OOX_XX__",
        PLAY_X_BOTTOM_CENTER: "_OOX_X_X_",
        PLAY_X_BOTTOM_RIGHT: "_OOX_X__X"
      }
    },
    _O_XOXXO_: { on: { "": "O_WINS" } },
    _O_XOXXXO: {
      on: { PLAY_O_TOP_LEFT: "OO_XOXXXO", PLAY_O_TOP_RIGHT: "_OOXOXXXO" }
    },
    _O_XOXX_O: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XOXX_O",
        PLAY_X_TOP_RIGHT: "_OXXOXX_O",
        PLAY_X_BOTTOM_CENTER: "_O_XOXXXO"
      }
    },
    _O_XOXX__: {
      on: {
        PLAY_O_TOP_LEFT: "OO_XOXX__",
        PLAY_O_TOP_RIGHT: "_OOXOXX__",
        PLAY_O_BOTTOM_CENTER: "_O_XOXXO_",
        PLAY_O_BOTTOM_RIGHT: "_O_XOXX_O"
      }
    },
    _O_XOXOXX: {
      on: { PLAY_O_TOP_LEFT: "OO_XOXOXX", PLAY_O_TOP_RIGHT: "_OOXOXOXX" }
    },
    _O_XOXOX_: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XOXOX_",
        PLAY_X_TOP_RIGHT: "_OXXOXOX_",
        PLAY_X_BOTTOM_RIGHT: "_O_XOXOXX"
      }
    },
    _O_XOX_XO: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XOX_XO",
        PLAY_X_TOP_RIGHT: "_OXXOX_XO",
        PLAY_X_BOTTOM_LEFT: "_O_XOXXXO"
      }
    },
    _O_XOX_X_: {
      on: {
        PLAY_O_TOP_LEFT: "OO_XOX_X_",
        PLAY_O_TOP_RIGHT: "_OOXOX_X_",
        PLAY_O_BOTTOM_LEFT: "_O_XOXOX_",
        PLAY_O_BOTTOM_RIGHT: "_O_XOX_XO"
      }
    },
    _O_XOXO_X: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XOXO_X",
        PLAY_X_TOP_RIGHT: "_OXXOXO_X",
        PLAY_X_BOTTOM_CENTER: "_O_XOXOXX"
      }
    },
    _O_XOX_OX: { on: { "": "O_WINS" } },
    _O_XOX__X: {
      on: {
        PLAY_O_TOP_LEFT: "OO_XOX__X",
        PLAY_O_TOP_RIGHT: "_OOXOX__X",
        PLAY_O_BOTTOM_LEFT: "_O_XOXO_X",
        PLAY_O_BOTTOM_CENTER: "_O_XOX_OX"
      }
    },
    _O_XOX___: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XOX___",
        PLAY_X_TOP_RIGHT: "_OXXOX___",
        PLAY_X_BOTTOM_LEFT: "_O_XOXX__",
        PLAY_X_BOTTOM_CENTER: "_O_XOX_X_",
        PLAY_X_BOTTOM_RIGHT: "_O_XOX__X"
      }
    },
    _O_X_XOXO: {
      on: {
        PLAY_X_TOP_LEFT: "XO_X_XOXO",
        PLAY_X_TOP_RIGHT: "_OXX_XOXO",
        PLAY_X_CENTER: "_O_XXXOXO"
      }
    },
    _O_X_XOX_: {
      on: {
        PLAY_O_TOP_LEFT: "OO_X_XOX_",
        PLAY_O_TOP_RIGHT: "_OOX_XOX_",
        PLAY_O_CENTER: "_O_XOXOX_",
        PLAY_O_BOTTOM_RIGHT: "_O_X_XOXO"
      }
    },
    _O_X_XOOX: {
      on: {
        PLAY_X_TOP_LEFT: "XO_X_XOOX",
        PLAY_X_TOP_RIGHT: "_OXX_XOOX",
        PLAY_X_CENTER: "_O_XXXOOX"
      }
    },
    _O_X_XO_X: {
      on: {
        PLAY_O_TOP_LEFT: "OO_X_XO_X",
        PLAY_O_TOP_RIGHT: "_OOX_XO_X",
        PLAY_O_CENTER: "_O_XOXO_X",
        PLAY_O_BOTTOM_CENTER: "_O_X_XOOX"
      }
    },
    _O_X_XO__: {
      on: {
        PLAY_X_TOP_LEFT: "XO_X_XO__",
        PLAY_X_TOP_RIGHT: "_OXX_XO__",
        PLAY_X_CENTER: "_O_XXXO__",
        PLAY_X_BOTTOM_CENTER: "_O_X_XOX_",
        PLAY_X_BOTTOM_RIGHT: "_O_X_XO_X"
      }
    },
    _O_X_XXOO: {
      on: {
        PLAY_X_TOP_LEFT: "XO_X_XXOO",
        PLAY_X_TOP_RIGHT: "_OXX_XXOO",
        PLAY_X_CENTER: "_O_XXXXOO"
      }
    },
    _O_X_XXO_: {
      on: {
        PLAY_O_TOP_LEFT: "OO_X_XXO_",
        PLAY_O_TOP_RIGHT: "_OOX_XXO_",
        PLAY_O_CENTER: "_O_XOXXO_",
        PLAY_O_BOTTOM_RIGHT: "_O_X_XXOO"
      }
    },
    _O_X_X_OX: {
      on: {
        PLAY_O_TOP_LEFT: "OO_X_X_OX",
        PLAY_O_TOP_RIGHT: "_OOX_X_OX",
        PLAY_O_CENTER: "_O_XOX_OX",
        PLAY_O_BOTTOM_LEFT: "_O_X_XOOX"
      }
    },
    _O_X_X_O_: {
      on: {
        PLAY_X_TOP_LEFT: "XO_X_X_O_",
        PLAY_X_TOP_RIGHT: "_OXX_X_O_",
        PLAY_X_CENTER: "_O_XXX_O_",
        PLAY_X_BOTTOM_LEFT: "_O_X_XXO_",
        PLAY_X_BOTTOM_RIGHT: "_O_X_X_OX"
      }
    },
    _O_X_XX_O: {
      on: {
        PLAY_O_TOP_LEFT: "OO_X_XX_O",
        PLAY_O_TOP_RIGHT: "_OOX_XX_O",
        PLAY_O_CENTER: "_O_XOXX_O",
        PLAY_O_BOTTOM_CENTER: "_O_X_XXOO"
      }
    },
    _O_X_X_XO: {
      on: {
        PLAY_O_TOP_LEFT: "OO_X_X_XO",
        PLAY_O_TOP_RIGHT: "_OOX_X_XO",
        PLAY_O_CENTER: "_O_XOX_XO",
        PLAY_O_BOTTOM_LEFT: "_O_X_XOXO"
      }
    },
    _O_X_X__O: {
      on: {
        PLAY_X_TOP_LEFT: "XO_X_X__O",
        PLAY_X_TOP_RIGHT: "_OXX_X__O",
        PLAY_X_CENTER: "_O_XXX__O",
        PLAY_X_BOTTOM_LEFT: "_O_X_XX_O",
        PLAY_X_BOTTOM_CENTER: "_O_X_X_XO"
      }
    },
    _O_X_X___: {
      on: {
        PLAY_O_TOP_LEFT: "OO_X_X___",
        PLAY_O_TOP_RIGHT: "_OOX_X___",
        PLAY_O_CENTER: "_O_XOX___",
        PLAY_O_BOTTOM_LEFT: "_O_X_XO__",
        PLAY_O_BOTTOM_CENTER: "_O_X_X_O_",
        PLAY_O_BOTTOM_RIGHT: "_O_X_X__O"
      }
    },
    _OOXO_XXX: { on: { "": "X_WINS" } },
    _OOXO_XX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOOXO_XX_",
        PLAY_X_MIDDLE_RIGHT: "_OOXOXXX_",
        PLAY_X_BOTTOM_RIGHT: "_OOXO_XXX"
      }
    },
    _OOX_OXXX: { on: { "": "X_WINS" } },
    _OOX_OXX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOOX_OXX_",
        PLAY_X_CENTER: "_OOXXOXX_",
        PLAY_X_BOTTOM_RIGHT: "_OOX_OXXX"
      }
    },
    _OOX__XXO: {
      on: {
        PLAY_X_TOP_LEFT: "XOOX__XXO",
        PLAY_X_CENTER: "_OOXX_XXO",
        PLAY_X_MIDDLE_RIGHT: "_OOX_XXXO"
      }
    },
    _OOX__XX_: {
      on: {
        PLAY_O_TOP_LEFT: "OOOX__XX_",
        PLAY_O_CENTER: "_OOXO_XX_",
        PLAY_O_MIDDLE_RIGHT: "_OOX_OXX_",
        PLAY_O_BOTTOM_RIGHT: "_OOX__XXO"
      }
    },
    _OOXO_X_X: {
      on: {
        PLAY_X_TOP_LEFT: "XOOXO_X_X",
        PLAY_X_MIDDLE_RIGHT: "_OOXOXX_X",
        PLAY_X_BOTTOM_CENTER: "_OOXO_XXX"
      }
    },
    _OOX_OX_X: {
      on: {
        PLAY_X_TOP_LEFT: "XOOX_OX_X",
        PLAY_X_CENTER: "_OOXXOX_X",
        PLAY_X_BOTTOM_CENTER: "_OOX_OXXX"
      }
    },
    _OOX__XOX: {
      on: {
        PLAY_X_TOP_LEFT: "XOOX__XOX",
        PLAY_X_CENTER: "_OOXX_XOX",
        PLAY_X_MIDDLE_RIGHT: "_OOX_XXOX"
      }
    },
    _OOX__X_X: {
      on: {
        PLAY_O_TOP_LEFT: "OOOX__X_X",
        PLAY_O_CENTER: "_OOXO_X_X",
        PLAY_O_MIDDLE_RIGHT: "_OOX_OX_X",
        PLAY_O_BOTTOM_CENTER: "_OOX__XOX"
      }
    },
    _OOX__X__: {
      on: {
        PLAY_X_TOP_LEFT: "XOOX__X__",
        PLAY_X_CENTER: "_OOXX_X__",
        PLAY_X_MIDDLE_RIGHT: "_OOX_XX__",
        PLAY_X_BOTTOM_CENTER: "_OOX__XX_",
        PLAY_X_BOTTOM_RIGHT: "_OOX__X_X"
      }
    },
    _O_XOOXXX: { on: { "": "X_WINS" } },
    _O_XOOXX_: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XOOXX_",
        PLAY_X_TOP_RIGHT: "_OXXOOXX_",
        PLAY_X_BOTTOM_RIGHT: "_O_XOOXXX"
      }
    },
    _O_XO_XXO: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XO_XXO",
        PLAY_X_TOP_RIGHT: "_OXXO_XXO",
        PLAY_X_MIDDLE_RIGHT: "_O_XOXXXO"
      }
    },
    _O_XO_XX_: {
      on: {
        PLAY_O_TOP_LEFT: "OO_XO_XX_",
        PLAY_O_TOP_RIGHT: "_OOXO_XX_",
        PLAY_O_MIDDLE_RIGHT: "_O_XOOXX_",
        PLAY_O_BOTTOM_RIGHT: "_O_XO_XXO"
      }
    },
    _O_XOOX_X: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XOOX_X",
        PLAY_X_TOP_RIGHT: "_OXXOOX_X",
        PLAY_X_BOTTOM_CENTER: "_O_XOOXXX"
      }
    },
    _O_XO_XOX: { on: { "": "O_WINS" } },
    _O_XO_X_X: {
      on: {
        PLAY_O_TOP_LEFT: "OO_XO_X_X",
        PLAY_O_TOP_RIGHT: "_OOXO_X_X",
        PLAY_O_MIDDLE_RIGHT: "_O_XOOX_X",
        PLAY_O_BOTTOM_CENTER: "_O_XO_XOX"
      }
    },
    _O_XO_X__: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XO_X__",
        PLAY_X_TOP_RIGHT: "_OXXO_X__",
        PLAY_X_MIDDLE_RIGHT: "_O_XOXX__",
        PLAY_X_BOTTOM_CENTER: "_O_XO_XX_",
        PLAY_X_BOTTOM_RIGHT: "_O_XO_X_X"
      }
    },
    _O_X_OXXO: {
      on: {
        PLAY_X_TOP_LEFT: "XO_X_OXXO",
        PLAY_X_TOP_RIGHT: "_OXX_OXXO",
        PLAY_X_CENTER: "_O_XXOXXO"
      }
    },
    _O_X_OXX_: {
      on: {
        PLAY_O_TOP_LEFT: "OO_X_OXX_",
        PLAY_O_TOP_RIGHT: "_OOX_OXX_",
        PLAY_O_CENTER: "_O_XOOXX_",
        PLAY_O_BOTTOM_RIGHT: "_O_X_OXXO"
      }
    },
    _O_X_OXOX: {
      on: {
        PLAY_X_TOP_LEFT: "XO_X_OXOX",
        PLAY_X_TOP_RIGHT: "_OXX_OXOX",
        PLAY_X_CENTER: "_O_XXOXOX"
      }
    },
    _O_X_OX_X: {
      on: {
        PLAY_O_TOP_LEFT: "OO_X_OX_X",
        PLAY_O_TOP_RIGHT: "_OOX_OX_X",
        PLAY_O_CENTER: "_O_XOOX_X",
        PLAY_O_BOTTOM_CENTER: "_O_X_OXOX"
      }
    },
    _O_X_OX__: {
      on: {
        PLAY_X_TOP_LEFT: "XO_X_OX__",
        PLAY_X_TOP_RIGHT: "_OXX_OX__",
        PLAY_X_CENTER: "_O_XXOX__",
        PLAY_X_BOTTOM_CENTER: "_O_X_OXX_",
        PLAY_X_BOTTOM_RIGHT: "_O_X_OX_X"
      }
    },
    _O_X__XOX: {
      on: {
        PLAY_O_TOP_LEFT: "OO_X__XOX",
        PLAY_O_TOP_RIGHT: "_OOX__XOX",
        PLAY_O_CENTER: "_O_XO_XOX",
        PLAY_O_MIDDLE_RIGHT: "_O_X_OXOX"
      }
    },
    _O_X__XO_: {
      on: {
        PLAY_X_TOP_LEFT: "XO_X__XO_",
        PLAY_X_TOP_RIGHT: "_OXX__XO_",
        PLAY_X_CENTER: "_O_XX_XO_",
        PLAY_X_MIDDLE_RIGHT: "_O_X_XXO_",
        PLAY_X_BOTTOM_RIGHT: "_O_X__XOX"
      }
    },
    _O_X__XXO: {
      on: {
        PLAY_O_TOP_LEFT: "OO_X__XXO",
        PLAY_O_TOP_RIGHT: "_OOX__XXO",
        PLAY_O_CENTER: "_O_XO_XXO",
        PLAY_O_MIDDLE_RIGHT: "_O_X_OXXO"
      }
    },
    _O_X__X_O: {
      on: {
        PLAY_X_TOP_LEFT: "XO_X__X_O",
        PLAY_X_TOP_RIGHT: "_OXX__X_O",
        PLAY_X_CENTER: "_O_XX_X_O",
        PLAY_X_MIDDLE_RIGHT: "_O_X_XX_O",
        PLAY_X_BOTTOM_CENTER: "_O_X__XXO"
      }
    },
    _O_X__X__: {
      on: {
        PLAY_O_TOP_LEFT: "OO_X__X__",
        PLAY_O_TOP_RIGHT: "_OOX__X__",
        PLAY_O_CENTER: "_O_XO_X__",
        PLAY_O_MIDDLE_RIGHT: "_O_X_OX__",
        PLAY_O_BOTTOM_CENTER: "_O_X__XO_",
        PLAY_O_BOTTOM_RIGHT: "_O_X__X_O"
      }
    },
    _OOXO__XX: {
      on: {
        PLAY_X_TOP_LEFT: "XOOXO__XX",
        PLAY_X_MIDDLE_RIGHT: "_OOXOX_XX",
        PLAY_X_BOTTOM_LEFT: "_OOXO_XXX"
      }
    },
    _OOX_O_XX: {
      on: {
        PLAY_X_TOP_LEFT: "XOOX_O_XX",
        PLAY_X_CENTER: "_OOXXO_XX",
        PLAY_X_BOTTOM_LEFT: "_OOX_OXXX"
      }
    },
    _OOX__OXX: {
      on: {
        PLAY_X_TOP_LEFT: "XOOX__OXX",
        PLAY_X_CENTER: "_OOXX_OXX",
        PLAY_X_MIDDLE_RIGHT: "_OOX_XOXX"
      }
    },
    _OOX___XX: {
      on: {
        PLAY_O_TOP_LEFT: "OOOX___XX",
        PLAY_O_CENTER: "_OOXO__XX",
        PLAY_O_MIDDLE_RIGHT: "_OOX_O_XX",
        PLAY_O_BOTTOM_LEFT: "_OOX__OXX"
      }
    },
    _OOX___X_: {
      on: {
        PLAY_X_TOP_LEFT: "XOOX___X_",
        PLAY_X_CENTER: "_OOXX__X_",
        PLAY_X_MIDDLE_RIGHT: "_OOX_X_X_",
        PLAY_X_BOTTOM_LEFT: "_OOX__XX_",
        PLAY_X_BOTTOM_RIGHT: "_OOX___XX"
      }
    },
    _O_XOO_XX: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XOO_XX",
        PLAY_X_TOP_RIGHT: "_OXXOO_XX",
        PLAY_X_BOTTOM_LEFT: "_O_XOOXXX"
      }
    },
    _O_XO_OXX: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XO_OXX",
        PLAY_X_TOP_RIGHT: "_OXXO_OXX",
        PLAY_X_MIDDLE_RIGHT: "_O_XOXOXX"
      }
    },
    _O_XO__XX: {
      on: {
        PLAY_O_TOP_LEFT: "OO_XO__XX",
        PLAY_O_TOP_RIGHT: "_OOXO__XX",
        PLAY_O_MIDDLE_RIGHT: "_O_XOO_XX",
        PLAY_O_BOTTOM_LEFT: "_O_XO_OXX"
      }
    },
    _O_XO__X_: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XO__X_",
        PLAY_X_TOP_RIGHT: "_OXXO__X_",
        PLAY_X_MIDDLE_RIGHT: "_O_XOX_X_",
        PLAY_X_BOTTOM_LEFT: "_O_XO_XX_",
        PLAY_X_BOTTOM_RIGHT: "_O_XO__XX"
      }
    },
    _O_X_OOXX: {
      on: {
        PLAY_X_TOP_LEFT: "XO_X_OOXX",
        PLAY_X_TOP_RIGHT: "_OXX_OOXX",
        PLAY_X_CENTER: "_O_XXOOXX"
      }
    },
    _O_X_O_XX: {
      on: {
        PLAY_O_TOP_LEFT: "OO_X_O_XX",
        PLAY_O_TOP_RIGHT: "_OOX_O_XX",
        PLAY_O_CENTER: "_O_XOO_XX",
        PLAY_O_BOTTOM_LEFT: "_O_X_OOXX"
      }
    },
    _O_X_O_X_: {
      on: {
        PLAY_X_TOP_LEFT: "XO_X_O_X_",
        PLAY_X_TOP_RIGHT: "_OXX_O_X_",
        PLAY_X_CENTER: "_O_XXO_X_",
        PLAY_X_BOTTOM_LEFT: "_O_X_OXX_",
        PLAY_X_BOTTOM_RIGHT: "_O_X_O_XX"
      }
    },
    _O_X__OXX: {
      on: {
        PLAY_O_TOP_LEFT: "OO_X__OXX",
        PLAY_O_TOP_RIGHT: "_OOX__OXX",
        PLAY_O_CENTER: "_O_XO_OXX",
        PLAY_O_MIDDLE_RIGHT: "_O_X_OOXX"
      }
    },
    _O_X__OX_: {
      on: {
        PLAY_X_TOP_LEFT: "XO_X__OX_",
        PLAY_X_TOP_RIGHT: "_OXX__OX_",
        PLAY_X_CENTER: "_O_XX_OX_",
        PLAY_X_MIDDLE_RIGHT: "_O_X_XOX_",
        PLAY_X_BOTTOM_RIGHT: "_O_X__OXX"
      }
    },
    _O_X___XO: {
      on: {
        PLAY_X_TOP_LEFT: "XO_X___XO",
        PLAY_X_TOP_RIGHT: "_OXX___XO",
        PLAY_X_CENTER: "_O_XX__XO",
        PLAY_X_MIDDLE_RIGHT: "_O_X_X_XO",
        PLAY_X_BOTTOM_LEFT: "_O_X__XXO"
      }
    },
    _O_X___X_: {
      on: {
        PLAY_O_TOP_LEFT: "OO_X___X_",
        PLAY_O_TOP_RIGHT: "_OOX___X_",
        PLAY_O_CENTER: "_O_XO__X_",
        PLAY_O_MIDDLE_RIGHT: "_O_X_O_X_",
        PLAY_O_BOTTOM_LEFT: "_O_X__OX_",
        PLAY_O_BOTTOM_RIGHT: "_O_X___XO"
      }
    },
    _OOX____X: {
      on: {
        PLAY_X_TOP_LEFT: "XOOX____X",
        PLAY_X_CENTER: "_OOXX___X",
        PLAY_X_MIDDLE_RIGHT: "_OOX_X__X",
        PLAY_X_BOTTOM_LEFT: "_OOX__X_X",
        PLAY_X_BOTTOM_CENTER: "_OOX___XX"
      }
    },
    _O_XO___X: {
      on: {
        PLAY_X_TOP_LEFT: "XO_XO___X",
        PLAY_X_TOP_RIGHT: "_OXXO___X",
        PLAY_X_MIDDLE_RIGHT: "_O_XOX__X",
        PLAY_X_BOTTOM_LEFT: "_O_XO_X_X",
        PLAY_X_BOTTOM_CENTER: "_O_XO__XX"
      }
    },
    _O_X_O__X: {
      on: {
        PLAY_X_TOP_LEFT: "XO_X_O__X",
        PLAY_X_TOP_RIGHT: "_OXX_O__X",
        PLAY_X_CENTER: "_O_XXO__X",
        PLAY_X_BOTTOM_LEFT: "_O_X_OX_X",
        PLAY_X_BOTTOM_CENTER: "_O_X_O_XX"
      }
    },
    _O_X__O_X: {
      on: {
        PLAY_X_TOP_LEFT: "XO_X__O_X",
        PLAY_X_TOP_RIGHT: "_OXX__O_X",
        PLAY_X_CENTER: "_O_XX_O_X",
        PLAY_X_MIDDLE_RIGHT: "_O_X_XO_X",
        PLAY_X_BOTTOM_CENTER: "_O_X__OXX"
      }
    },
    _O_X___OX: {
      on: {
        PLAY_X_TOP_LEFT: "XO_X___OX",
        PLAY_X_TOP_RIGHT: "_OXX___OX",
        PLAY_X_CENTER: "_O_XX__OX",
        PLAY_X_MIDDLE_RIGHT: "_O_X_X_OX",
        PLAY_X_BOTTOM_LEFT: "_O_X__XOX"
      }
    },
    _O_X____X: {
      on: {
        PLAY_O_TOP_LEFT: "OO_X____X",
        PLAY_O_TOP_RIGHT: "_OOX____X",
        PLAY_O_CENTER: "_O_XO___X",
        PLAY_O_MIDDLE_RIGHT: "_O_X_O__X",
        PLAY_O_BOTTOM_LEFT: "_O_X__O_X",
        PLAY_O_BOTTOM_CENTER: "_O_X___OX"
      }
    },
    _O_X_____: {
      on: {
        PLAY_X_TOP_LEFT: "XO_X_____",
        PLAY_X_TOP_RIGHT: "_OXX_____",
        PLAY_X_CENTER: "_O_XX____",
        PLAY_X_MIDDLE_RIGHT: "_O_X_X___",
        PLAY_X_BOTTOM_LEFT: "_O_X__X__",
        PLAY_X_BOTTOM_CENTER: "_O_X___X_",
        PLAY_X_BOTTOM_RIGHT: "_O_X____X"
      }
    },
    __OXXOXOX: {
      on: { PLAY_O_TOP_LEFT: "O_OXXOXOX", PLAY_O_TOP_CENTER: "_OOXXOXOX" }
    },
    __OXXOXO_: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXXOXO_",
        PLAY_X_TOP_CENTER: "_XOXXOXO_",
        PLAY_X_BOTTOM_RIGHT: "__OXXOXOX"
      }
    },
    __OXXOX_O: { on: { "": "O_WINS" } },
    __OXXOX__: {
      on: {
        PLAY_O_TOP_LEFT: "O_OXXOX__",
        PLAY_O_TOP_CENTER: "_OOXXOX__",
        PLAY_O_BOTTOM_CENTER: "__OXXOXO_",
        PLAY_O_BOTTOM_RIGHT: "__OXXOX_O"
      }
    },
    __OXXOOXX: {
      on: { PLAY_O_TOP_LEFT: "O_OXXOOXX", PLAY_O_TOP_CENTER: "_OOXXOOXX" }
    },
    __OXXOOX_: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXXOOX_",
        PLAY_X_TOP_CENTER: "_XOXXOOX_",
        PLAY_X_BOTTOM_RIGHT: "__OXXOOXX"
      }
    },
    __OXXO_XO: { on: { "": "O_WINS" } },
    __OXXO_X_: {
      on: {
        PLAY_O_TOP_LEFT: "O_OXXO_X_",
        PLAY_O_TOP_CENTER: "_OOXXO_X_",
        PLAY_O_BOTTOM_LEFT: "__OXXOOX_",
        PLAY_O_BOTTOM_RIGHT: "__OXXO_XO"
      }
    },
    __OXXOO_X: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXXOO_X",
        PLAY_X_TOP_CENTER: "_XOXXOO_X",
        PLAY_X_BOTTOM_CENTER: "__OXXOOXX"
      }
    },
    __OXXO_OX: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXXO_OX",
        PLAY_X_TOP_CENTER: "_XOXXO_OX",
        PLAY_X_BOTTOM_LEFT: "__OXXOXOX"
      }
    },
    __OXXO__X: {
      on: {
        PLAY_O_TOP_LEFT: "O_OXXO__X",
        PLAY_O_TOP_CENTER: "_OOXXO__X",
        PLAY_O_BOTTOM_LEFT: "__OXXOO_X",
        PLAY_O_BOTTOM_CENTER: "__OXXO_OX"
      }
    },
    __OXXO___: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXXO___",
        PLAY_X_TOP_CENTER: "_XOXXO___",
        PLAY_X_BOTTOM_LEFT: "__OXXOX__",
        PLAY_X_BOTTOM_CENTER: "__OXXO_X_",
        PLAY_X_BOTTOM_RIGHT: "__OXXO__X"
      }
    },
    __OXXXO__: { on: { "": "X_WINS" } },
    __OXXXOXO: { on: { "": "X_WINS" } },
    __OXX_OXO: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXX_OXO",
        PLAY_X_TOP_CENTER: "_XOXX_OXO",
        PLAY_X_MIDDLE_RIGHT: "__OXXXOXO"
      }
    },
    __OXX_OX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_OXX_OX_",
        PLAY_O_TOP_CENTER: "_OOXX_OX_",
        PLAY_O_MIDDLE_RIGHT: "__OXXOOX_",
        PLAY_O_BOTTOM_RIGHT: "__OXX_OXO"
      }
    },
    __OXXXOOX: { on: { "": "X_WINS" } },
    __OXX_OOX: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXX_OOX",
        PLAY_X_TOP_CENTER: "_XOXX_OOX",
        PLAY_X_MIDDLE_RIGHT: "__OXXXOOX"
      }
    },
    __OXX_O_X: {
      on: {
        PLAY_O_TOP_LEFT: "O_OXX_O_X",
        PLAY_O_TOP_CENTER: "_OOXX_O_X",
        PLAY_O_MIDDLE_RIGHT: "__OXXOO_X",
        PLAY_O_BOTTOM_CENTER: "__OXX_OOX"
      }
    },
    __OXX_O__: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXX_O__",
        PLAY_X_TOP_CENTER: "_XOXX_O__",
        PLAY_X_MIDDLE_RIGHT: "__OXXXO__",
        PLAY_X_BOTTOM_CENTER: "__OXX_OX_",
        PLAY_X_BOTTOM_RIGHT: "__OXX_O_X"
      }
    },
    __OXXX_O_: { on: { "": "X_WINS" } },
    __OXXXXOO: { on: { "": "X_WINS" } },
    __OXX_XOO: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXX_XOO",
        PLAY_X_TOP_CENTER: "_XOXX_XOO",
        PLAY_X_MIDDLE_RIGHT: "__OXXXXOO"
      }
    },
    __OXX_XO_: {
      on: {
        PLAY_O_TOP_LEFT: "O_OXX_XO_",
        PLAY_O_TOP_CENTER: "_OOXX_XO_",
        PLAY_O_MIDDLE_RIGHT: "__OXXOXO_",
        PLAY_O_BOTTOM_RIGHT: "__OXX_XOO"
      }
    },
    __OXX__OX: {
      on: {
        PLAY_O_TOP_LEFT: "O_OXX__OX",
        PLAY_O_TOP_CENTER: "_OOXX__OX",
        PLAY_O_MIDDLE_RIGHT: "__OXXO_OX",
        PLAY_O_BOTTOM_LEFT: "__OXX_OOX"
      }
    },
    __OXX__O_: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXX__O_",
        PLAY_X_TOP_CENTER: "_XOXX__O_",
        PLAY_X_MIDDLE_RIGHT: "__OXXX_O_",
        PLAY_X_BOTTOM_LEFT: "__OXX_XO_",
        PLAY_X_BOTTOM_RIGHT: "__OXX__OX"
      }
    },
    __OXXX__O: { on: { "": "X_WINS" } },
    __OXX_X_O: {
      on: {
        PLAY_O_TOP_LEFT: "O_OXX_X_O",
        PLAY_O_TOP_CENTER: "_OOXX_X_O",
        PLAY_O_MIDDLE_RIGHT: "__OXXOX_O",
        PLAY_O_BOTTOM_CENTER: "__OXX_XOO"
      }
    },
    __OXX__XO: {
      on: {
        PLAY_O_TOP_LEFT: "O_OXX__XO",
        PLAY_O_TOP_CENTER: "_OOXX__XO",
        PLAY_O_MIDDLE_RIGHT: "__OXXO_XO",
        PLAY_O_BOTTOM_LEFT: "__OXX_OXO"
      }
    },
    __OXX___O: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXX___O",
        PLAY_X_TOP_CENTER: "_XOXX___O",
        PLAY_X_MIDDLE_RIGHT: "__OXXX__O",
        PLAY_X_BOTTOM_LEFT: "__OXX_X_O",
        PLAY_X_BOTTOM_CENTER: "__OXX__XO"
      }
    },
    __OXX____: {
      on: {
        PLAY_O_TOP_LEFT: "O_OXX____",
        PLAY_O_TOP_CENTER: "_OOXX____",
        PLAY_O_MIDDLE_RIGHT: "__OXXO___",
        PLAY_O_BOTTOM_LEFT: "__OXX_O__",
        PLAY_O_BOTTOM_CENTER: "__OXX__O_",
        PLAY_O_BOTTOM_RIGHT: "__OXX___O"
      }
    },
    __OXOXXOX: {
      on: { PLAY_O_TOP_LEFT: "O_OXOXXOX", PLAY_O_TOP_CENTER: "_OOXOXXOX" }
    },
    __OXOXXO_: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXOXXO_",
        PLAY_X_TOP_CENTER: "_XOXOXXO_",
        PLAY_X_BOTTOM_RIGHT: "__OXOXXOX"
      }
    },
    __OXOXXXO: {
      on: { PLAY_O_TOP_LEFT: "O_OXOXXXO", PLAY_O_TOP_CENTER: "_OOXOXXXO" }
    },
    __OXOXX_O: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXOXX_O",
        PLAY_X_TOP_CENTER: "_XOXOXX_O",
        PLAY_X_BOTTOM_CENTER: "__OXOXXXO"
      }
    },
    __OXOXX__: {
      on: {
        PLAY_O_TOP_LEFT: "O_OXOXX__",
        PLAY_O_TOP_CENTER: "_OOXOXX__",
        PLAY_O_BOTTOM_CENTER: "__OXOXXO_",
        PLAY_O_BOTTOM_RIGHT: "__OXOXX_O"
      }
    },
    __OXOXOX_: { on: { "": "O_WINS" } },
    __OXOX_XO: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXOX_XO",
        PLAY_X_TOP_CENTER: "_XOXOX_XO",
        PLAY_X_BOTTOM_LEFT: "__OXOXXXO"
      }
    },
    __OXOX_X_: {
      on: {
        PLAY_O_TOP_LEFT: "O_OXOX_X_",
        PLAY_O_TOP_CENTER: "_OOXOX_X_",
        PLAY_O_BOTTOM_LEFT: "__OXOXOX_",
        PLAY_O_BOTTOM_RIGHT: "__OXOX_XO"
      }
    },
    __OXOXO_X: { on: { "": "O_WINS" } },
    __OXOX_OX: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXOX_OX",
        PLAY_X_TOP_CENTER: "_XOXOX_OX",
        PLAY_X_BOTTOM_LEFT: "__OXOXXOX"
      }
    },
    __OXOX__X: {
      on: {
        PLAY_O_TOP_LEFT: "O_OXOX__X",
        PLAY_O_TOP_CENTER: "_OOXOX__X",
        PLAY_O_BOTTOM_LEFT: "__OXOXO_X",
        PLAY_O_BOTTOM_CENTER: "__OXOX_OX"
      }
    },
    __OXOX___: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXOX___",
        PLAY_X_TOP_CENTER: "_XOXOX___",
        PLAY_X_BOTTOM_LEFT: "__OXOXX__",
        PLAY_X_BOTTOM_CENTER: "__OXOX_X_",
        PLAY_X_BOTTOM_RIGHT: "__OXOX__X"
      }
    },
    __OX_XOXO: {
      on: {
        PLAY_X_TOP_LEFT: "X_OX_XOXO",
        PLAY_X_TOP_CENTER: "_XOX_XOXO",
        PLAY_X_CENTER: "__OXXXOXO"
      }
    },
    __OX_XOX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_OX_XOX_",
        PLAY_O_TOP_CENTER: "_OOX_XOX_",
        PLAY_O_CENTER: "__OXOXOX_",
        PLAY_O_BOTTOM_RIGHT: "__OX_XOXO"
      }
    },
    __OX_XOOX: {
      on: {
        PLAY_X_TOP_LEFT: "X_OX_XOOX",
        PLAY_X_TOP_CENTER: "_XOX_XOOX",
        PLAY_X_CENTER: "__OXXXOOX"
      }
    },
    __OX_XO_X: {
      on: {
        PLAY_O_TOP_LEFT: "O_OX_XO_X",
        PLAY_O_TOP_CENTER: "_OOX_XO_X",
        PLAY_O_CENTER: "__OXOXO_X",
        PLAY_O_BOTTOM_CENTER: "__OX_XOOX"
      }
    },
    __OX_XO__: {
      on: {
        PLAY_X_TOP_LEFT: "X_OX_XO__",
        PLAY_X_TOP_CENTER: "_XOX_XO__",
        PLAY_X_CENTER: "__OXXXO__",
        PLAY_X_BOTTOM_CENTER: "__OX_XOX_",
        PLAY_X_BOTTOM_RIGHT: "__OX_XO_X"
      }
    },
    __OX_XXOO: {
      on: {
        PLAY_X_TOP_LEFT: "X_OX_XXOO",
        PLAY_X_TOP_CENTER: "_XOX_XXOO",
        PLAY_X_CENTER: "__OXXXXOO"
      }
    },
    __OX_XXO_: {
      on: {
        PLAY_O_TOP_LEFT: "O_OX_XXO_",
        PLAY_O_TOP_CENTER: "_OOX_XXO_",
        PLAY_O_CENTER: "__OXOXXO_",
        PLAY_O_BOTTOM_RIGHT: "__OX_XXOO"
      }
    },
    __OX_X_OX: {
      on: {
        PLAY_O_TOP_LEFT: "O_OX_X_OX",
        PLAY_O_TOP_CENTER: "_OOX_X_OX",
        PLAY_O_CENTER: "__OXOX_OX",
        PLAY_O_BOTTOM_LEFT: "__OX_XOOX"
      }
    },
    __OX_X_O_: {
      on: {
        PLAY_X_TOP_LEFT: "X_OX_X_O_",
        PLAY_X_TOP_CENTER: "_XOX_X_O_",
        PLAY_X_CENTER: "__OXXX_O_",
        PLAY_X_BOTTOM_LEFT: "__OX_XXO_",
        PLAY_X_BOTTOM_RIGHT: "__OX_X_OX"
      }
    },
    __OX_XX_O: {
      on: {
        PLAY_O_TOP_LEFT: "O_OX_XX_O",
        PLAY_O_TOP_CENTER: "_OOX_XX_O",
        PLAY_O_CENTER: "__OXOXX_O",
        PLAY_O_BOTTOM_CENTER: "__OX_XXOO"
      }
    },
    __OX_X_XO: {
      on: {
        PLAY_O_TOP_LEFT: "O_OX_X_XO",
        PLAY_O_TOP_CENTER: "_OOX_X_XO",
        PLAY_O_CENTER: "__OXOX_XO",
        PLAY_O_BOTTOM_LEFT: "__OX_XOXO"
      }
    },
    __OX_X__O: {
      on: {
        PLAY_X_TOP_LEFT: "X_OX_X__O",
        PLAY_X_TOP_CENTER: "_XOX_X__O",
        PLAY_X_CENTER: "__OXXX__O",
        PLAY_X_BOTTOM_LEFT: "__OX_XX_O",
        PLAY_X_BOTTOM_CENTER: "__OX_X_XO"
      }
    },
    __OX_X___: {
      on: {
        PLAY_O_TOP_LEFT: "O_OX_X___",
        PLAY_O_TOP_CENTER: "_OOX_X___",
        PLAY_O_CENTER: "__OXOX___",
        PLAY_O_BOTTOM_LEFT: "__OX_XO__",
        PLAY_O_BOTTOM_CENTER: "__OX_X_O_",
        PLAY_O_BOTTOM_RIGHT: "__OX_X__O"
      }
    },
    __OXOOXXX: { on: { "": "X_WINS" } },
    __OXOOXX_: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXOOXX_",
        PLAY_X_TOP_CENTER: "_XOXOOXX_",
        PLAY_X_BOTTOM_RIGHT: "__OXOOXXX"
      }
    },
    __OXO_XXO: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXO_XXO",
        PLAY_X_TOP_CENTER: "_XOXO_XXO",
        PLAY_X_MIDDLE_RIGHT: "__OXOXXXO"
      }
    },
    __OXO_XX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_OXO_XX_",
        PLAY_O_TOP_CENTER: "_OOXO_XX_",
        PLAY_O_MIDDLE_RIGHT: "__OXOOXX_",
        PLAY_O_BOTTOM_RIGHT: "__OXO_XXO"
      }
    },
    __OXOOX_X: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXOOX_X",
        PLAY_X_TOP_CENTER: "_XOXOOX_X",
        PLAY_X_BOTTOM_CENTER: "__OXOOXXX"
      }
    },
    __OXO_XOX: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXO_XOX",
        PLAY_X_TOP_CENTER: "_XOXO_XOX",
        PLAY_X_MIDDLE_RIGHT: "__OXOXXOX"
      }
    },
    __OXO_X_X: {
      on: {
        PLAY_O_TOP_LEFT: "O_OXO_X_X",
        PLAY_O_TOP_CENTER: "_OOXO_X_X",
        PLAY_O_MIDDLE_RIGHT: "__OXOOX_X",
        PLAY_O_BOTTOM_CENTER: "__OXO_XOX"
      }
    },
    __OXO_X__: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXO_X__",
        PLAY_X_TOP_CENTER: "_XOXO_X__",
        PLAY_X_MIDDLE_RIGHT: "__OXOXX__",
        PLAY_X_BOTTOM_CENTER: "__OXO_XX_",
        PLAY_X_BOTTOM_RIGHT: "__OXO_X_X"
      }
    },
    __OX_OXXO: { on: { "": "O_WINS" } },
    __OX_OXX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_OX_OXX_",
        PLAY_O_TOP_CENTER: "_OOX_OXX_",
        PLAY_O_CENTER: "__OXOOXX_",
        PLAY_O_BOTTOM_RIGHT: "__OX_OXXO"
      }
    },
    __OX_OXOX: {
      on: {
        PLAY_X_TOP_LEFT: "X_OX_OXOX",
        PLAY_X_TOP_CENTER: "_XOX_OXOX",
        PLAY_X_CENTER: "__OXXOXOX"
      }
    },
    __OX_OX_X: {
      on: {
        PLAY_O_TOP_LEFT: "O_OX_OX_X",
        PLAY_O_TOP_CENTER: "_OOX_OX_X",
        PLAY_O_CENTER: "__OXOOX_X",
        PLAY_O_BOTTOM_CENTER: "__OX_OXOX"
      }
    },
    __OX_OX__: {
      on: {
        PLAY_X_TOP_LEFT: "X_OX_OX__",
        PLAY_X_TOP_CENTER: "_XOX_OX__",
        PLAY_X_CENTER: "__OXXOX__",
        PLAY_X_BOTTOM_CENTER: "__OX_OXX_",
        PLAY_X_BOTTOM_RIGHT: "__OX_OX_X"
      }
    },
    __OX__XOX: {
      on: {
        PLAY_O_TOP_LEFT: "O_OX__XOX",
        PLAY_O_TOP_CENTER: "_OOX__XOX",
        PLAY_O_CENTER: "__OXO_XOX",
        PLAY_O_MIDDLE_RIGHT: "__OX_OXOX"
      }
    },
    __OX__XO_: {
      on: {
        PLAY_X_TOP_LEFT: "X_OX__XO_",
        PLAY_X_TOP_CENTER: "_XOX__XO_",
        PLAY_X_CENTER: "__OXX_XO_",
        PLAY_X_MIDDLE_RIGHT: "__OX_XXO_",
        PLAY_X_BOTTOM_RIGHT: "__OX__XOX"
      }
    },
    __OX__XXO: {
      on: {
        PLAY_O_TOP_LEFT: "O_OX__XXO",
        PLAY_O_TOP_CENTER: "_OOX__XXO",
        PLAY_O_CENTER: "__OXO_XXO",
        PLAY_O_MIDDLE_RIGHT: "__OX_OXXO"
      }
    },
    __OX__X_O: {
      on: {
        PLAY_X_TOP_LEFT: "X_OX__X_O",
        PLAY_X_TOP_CENTER: "_XOX__X_O",
        PLAY_X_CENTER: "__OXX_X_O",
        PLAY_X_MIDDLE_RIGHT: "__OX_XX_O",
        PLAY_X_BOTTOM_CENTER: "__OX__XXO"
      }
    },
    __OX__X__: {
      on: {
        PLAY_O_TOP_LEFT: "O_OX__X__",
        PLAY_O_TOP_CENTER: "_OOX__X__",
        PLAY_O_CENTER: "__OXO_X__",
        PLAY_O_MIDDLE_RIGHT: "__OX_OX__",
        PLAY_O_BOTTOM_CENTER: "__OX__XO_",
        PLAY_O_BOTTOM_RIGHT: "__OX__X_O"
      }
    },
    __OXOO_XX: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXOO_XX",
        PLAY_X_TOP_CENTER: "_XOXOO_XX",
        PLAY_X_BOTTOM_LEFT: "__OXOOXXX"
      }
    },
    __OXO_OXX: { on: { "": "O_WINS" } },
    __OXO__XX: {
      on: {
        PLAY_O_TOP_LEFT: "O_OXO__XX",
        PLAY_O_TOP_CENTER: "_OOXO__XX",
        PLAY_O_MIDDLE_RIGHT: "__OXOO_XX",
        PLAY_O_BOTTOM_LEFT: "__OXO_OXX"
      }
    },
    __OXO__X_: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXO__X_",
        PLAY_X_TOP_CENTER: "_XOXO__X_",
        PLAY_X_MIDDLE_RIGHT: "__OXOX_X_",
        PLAY_X_BOTTOM_LEFT: "__OXO_XX_",
        PLAY_X_BOTTOM_RIGHT: "__OXO__XX"
      }
    },
    __OX_OOXX: {
      on: {
        PLAY_X_TOP_LEFT: "X_OX_OOXX",
        PLAY_X_TOP_CENTER: "_XOX_OOXX",
        PLAY_X_CENTER: "__OXXOOXX"
      }
    },
    __OX_O_XX: {
      on: {
        PLAY_O_TOP_LEFT: "O_OX_O_XX",
        PLAY_O_TOP_CENTER: "_OOX_O_XX",
        PLAY_O_CENTER: "__OXOO_XX",
        PLAY_O_BOTTOM_LEFT: "__OX_OOXX"
      }
    },
    __OX_O_X_: {
      on: {
        PLAY_X_TOP_LEFT: "X_OX_O_X_",
        PLAY_X_TOP_CENTER: "_XOX_O_X_",
        PLAY_X_CENTER: "__OXXO_X_",
        PLAY_X_BOTTOM_LEFT: "__OX_OXX_",
        PLAY_X_BOTTOM_RIGHT: "__OX_O_XX"
      }
    },
    __OX__OXX: {
      on: {
        PLAY_O_TOP_LEFT: "O_OX__OXX",
        PLAY_O_TOP_CENTER: "_OOX__OXX",
        PLAY_O_CENTER: "__OXO_OXX",
        PLAY_O_MIDDLE_RIGHT: "__OX_OOXX"
      }
    },
    __OX__OX_: {
      on: {
        PLAY_X_TOP_LEFT: "X_OX__OX_",
        PLAY_X_TOP_CENTER: "_XOX__OX_",
        PLAY_X_CENTER: "__OXX_OX_",
        PLAY_X_MIDDLE_RIGHT: "__OX_XOX_",
        PLAY_X_BOTTOM_RIGHT: "__OX__OXX"
      }
    },
    __OX___XO: {
      on: {
        PLAY_X_TOP_LEFT: "X_OX___XO",
        PLAY_X_TOP_CENTER: "_XOX___XO",
        PLAY_X_CENTER: "__OXX__XO",
        PLAY_X_MIDDLE_RIGHT: "__OX_X_XO",
        PLAY_X_BOTTOM_LEFT: "__OX__XXO"
      }
    },
    __OX___X_: {
      on: {
        PLAY_O_TOP_LEFT: "O_OX___X_",
        PLAY_O_TOP_CENTER: "_OOX___X_",
        PLAY_O_CENTER: "__OXO__X_",
        PLAY_O_MIDDLE_RIGHT: "__OX_O_X_",
        PLAY_O_BOTTOM_LEFT: "__OX__OX_",
        PLAY_O_BOTTOM_RIGHT: "__OX___XO"
      }
    },
    __OXO___X: {
      on: {
        PLAY_X_TOP_LEFT: "X_OXO___X",
        PLAY_X_TOP_CENTER: "_XOXO___X",
        PLAY_X_MIDDLE_RIGHT: "__OXOX__X",
        PLAY_X_BOTTOM_LEFT: "__OXO_X_X",
        PLAY_X_BOTTOM_CENTER: "__OXO__XX"
      }
    },
    __OX_O__X: {
      on: {
        PLAY_X_TOP_LEFT: "X_OX_O__X",
        PLAY_X_TOP_CENTER: "_XOX_O__X",
        PLAY_X_CENTER: "__OXXO__X",
        PLAY_X_BOTTOM_LEFT: "__OX_OX_X",
        PLAY_X_BOTTOM_CENTER: "__OX_O_XX"
      }
    },
    __OX__O_X: {
      on: {
        PLAY_X_TOP_LEFT: "X_OX__O_X",
        PLAY_X_TOP_CENTER: "_XOX__O_X",
        PLAY_X_CENTER: "__OXX_O_X",
        PLAY_X_MIDDLE_RIGHT: "__OX_XO_X",
        PLAY_X_BOTTOM_CENTER: "__OX__OXX"
      }
    },
    __OX___OX: {
      on: {
        PLAY_X_TOP_LEFT: "X_OX___OX",
        PLAY_X_TOP_CENTER: "_XOX___OX",
        PLAY_X_CENTER: "__OXX__OX",
        PLAY_X_MIDDLE_RIGHT: "__OX_X_OX",
        PLAY_X_BOTTOM_LEFT: "__OX__XOX"
      }
    },
    __OX____X: {
      on: {
        PLAY_O_TOP_LEFT: "O_OX____X",
        PLAY_O_TOP_CENTER: "_OOX____X",
        PLAY_O_CENTER: "__OXO___X",
        PLAY_O_MIDDLE_RIGHT: "__OX_O__X",
        PLAY_O_BOTTOM_LEFT: "__OX__O_X",
        PLAY_O_BOTTOM_CENTER: "__OX___OX"
      }
    },
    __OX_____: {
      on: {
        PLAY_X_TOP_LEFT: "X_OX_____",
        PLAY_X_TOP_CENTER: "_XOX_____",
        PLAY_X_CENTER: "__OXX____",
        PLAY_X_MIDDLE_RIGHT: "__OX_X___",
        PLAY_X_BOTTOM_LEFT: "__OX__X__",
        PLAY_X_BOTTOM_CENTER: "__OX___X_",
        PLAY_X_BOTTOM_RIGHT: "__OX____X"
      }
    },
    ___XOXOXO: {
      on: {
        PLAY_X_TOP_LEFT: "X__XOXOXO",
        PLAY_X_TOP_CENTER: "_X_XOXOXO",
        PLAY_X_TOP_RIGHT: "__XXOXOXO"
      }
    },
    ___XOXOX_: {
      on: {
        PLAY_O_TOP_LEFT: "O__XOXOX_",
        PLAY_O_TOP_CENTER: "_O_XOXOX_",
        PLAY_O_TOP_RIGHT: "__OXOXOX_",
        PLAY_O_BOTTOM_RIGHT: "___XOXOXO"
      }
    },
    ___XOXOOX: {
      on: {
        PLAY_X_TOP_LEFT: "X__XOXOOX",
        PLAY_X_TOP_CENTER: "_X_XOXOOX",
        PLAY_X_TOP_RIGHT: "__XXOXOOX"
      }
    },
    ___XOXO_X: {
      on: {
        PLAY_O_TOP_LEFT: "O__XOXO_X",
        PLAY_O_TOP_CENTER: "_O_XOXO_X",
        PLAY_O_TOP_RIGHT: "__OXOXO_X",
        PLAY_O_BOTTOM_CENTER: "___XOXOOX"
      }
    },
    ___XOXO__: {
      on: {
        PLAY_X_TOP_LEFT: "X__XOXO__",
        PLAY_X_TOP_CENTER: "_X_XOXO__",
        PLAY_X_TOP_RIGHT: "__XXOXO__",
        PLAY_X_BOTTOM_CENTER: "___XOXOX_",
        PLAY_X_BOTTOM_RIGHT: "___XOXO_X"
      }
    },
    ___XOXXOO: {
      on: {
        PLAY_X_TOP_LEFT: "X__XOXXOO",
        PLAY_X_TOP_CENTER: "_X_XOXXOO",
        PLAY_X_TOP_RIGHT: "__XXOXXOO"
      }
    },
    ___XOXXO_: {
      on: {
        PLAY_O_TOP_LEFT: "O__XOXXO_",
        PLAY_O_TOP_CENTER: "_O_XOXXO_",
        PLAY_O_TOP_RIGHT: "__OXOXXO_",
        PLAY_O_BOTTOM_RIGHT: "___XOXXOO"
      }
    },
    ___XOX_OX: {
      on: {
        PLAY_O_TOP_LEFT: "O__XOX_OX",
        PLAY_O_TOP_CENTER: "_O_XOX_OX",
        PLAY_O_TOP_RIGHT: "__OXOX_OX",
        PLAY_O_BOTTOM_LEFT: "___XOXOOX"
      }
    },
    ___XOX_O_: {
      on: {
        PLAY_X_TOP_LEFT: "X__XOX_O_",
        PLAY_X_TOP_CENTER: "_X_XOX_O_",
        PLAY_X_TOP_RIGHT: "__XXOX_O_",
        PLAY_X_BOTTOM_LEFT: "___XOXXO_",
        PLAY_X_BOTTOM_RIGHT: "___XOX_OX"
      }
    },
    ___XOXX_O: {
      on: {
        PLAY_O_TOP_LEFT: "O__XOXX_O",
        PLAY_O_TOP_CENTER: "_O_XOXX_O",
        PLAY_O_TOP_RIGHT: "__OXOXX_O",
        PLAY_O_BOTTOM_CENTER: "___XOXXOO"
      }
    },
    ___XOX_XO: {
      on: {
        PLAY_O_TOP_LEFT: "O__XOX_XO",
        PLAY_O_TOP_CENTER: "_O_XOX_XO",
        PLAY_O_TOP_RIGHT: "__OXOX_XO",
        PLAY_O_BOTTOM_LEFT: "___XOXOXO"
      }
    },
    ___XOX__O: {
      on: {
        PLAY_X_TOP_LEFT: "X__XOX__O",
        PLAY_X_TOP_CENTER: "_X_XOX__O",
        PLAY_X_TOP_RIGHT: "__XXOX__O",
        PLAY_X_BOTTOM_LEFT: "___XOXX_O",
        PLAY_X_BOTTOM_CENTER: "___XOX_XO"
      }
    },
    ___XOX___: {
      on: {
        PLAY_O_TOP_LEFT: "O__XOX___",
        PLAY_O_TOP_CENTER: "_O_XOX___",
        PLAY_O_TOP_RIGHT: "__OXOX___",
        PLAY_O_BOTTOM_LEFT: "___XOXO__",
        PLAY_O_BOTTOM_CENTER: "___XOX_O_",
        PLAY_O_BOTTOM_RIGHT: "___XOX__O"
      }
    },
    ___XOOXXO: {
      on: {
        PLAY_X_TOP_LEFT: "X__XOOXXO",
        PLAY_X_TOP_CENTER: "_X_XOOXXO",
        PLAY_X_TOP_RIGHT: "__XXOOXXO"
      }
    },
    ___XOOXX_: {
      on: {
        PLAY_O_TOP_LEFT: "O__XOOXX_",
        PLAY_O_TOP_CENTER: "_O_XOOXX_",
        PLAY_O_TOP_RIGHT: "__OXOOXX_",
        PLAY_O_BOTTOM_RIGHT: "___XOOXXO"
      }
    },
    ___XOOXOX: {
      on: {
        PLAY_X_TOP_LEFT: "X__XOOXOX",
        PLAY_X_TOP_CENTER: "_X_XOOXOX",
        PLAY_X_TOP_RIGHT: "__XXOOXOX"
      }
    },
    ___XOOX_X: {
      on: {
        PLAY_O_TOP_LEFT: "O__XOOX_X",
        PLAY_O_TOP_CENTER: "_O_XOOX_X",
        PLAY_O_TOP_RIGHT: "__OXOOX_X",
        PLAY_O_BOTTOM_CENTER: "___XOOXOX"
      }
    },
    ___XOOX__: {
      on: {
        PLAY_X_TOP_LEFT: "X__XOOX__",
        PLAY_X_TOP_CENTER: "_X_XOOX__",
        PLAY_X_TOP_RIGHT: "__XXOOX__",
        PLAY_X_BOTTOM_CENTER: "___XOOXX_",
        PLAY_X_BOTTOM_RIGHT: "___XOOX_X"
      }
    },
    ___XO_XOX: {
      on: {
        PLAY_O_TOP_LEFT: "O__XO_XOX",
        PLAY_O_TOP_CENTER: "_O_XO_XOX",
        PLAY_O_TOP_RIGHT: "__OXO_XOX",
        PLAY_O_MIDDLE_RIGHT: "___XOOXOX"
      }
    },
    ___XO_XO_: {
      on: {
        PLAY_X_TOP_LEFT: "X__XO_XO_",
        PLAY_X_TOP_CENTER: "_X_XO_XO_",
        PLAY_X_TOP_RIGHT: "__XXO_XO_",
        PLAY_X_MIDDLE_RIGHT: "___XOXXO_",
        PLAY_X_BOTTOM_RIGHT: "___XO_XOX"
      }
    },
    ___XO_XXO: {
      on: {
        PLAY_O_TOP_LEFT: "O__XO_XXO",
        PLAY_O_TOP_CENTER: "_O_XO_XXO",
        PLAY_O_TOP_RIGHT: "__OXO_XXO",
        PLAY_O_MIDDLE_RIGHT: "___XOOXXO"
      }
    },
    ___XO_X_O: {
      on: {
        PLAY_X_TOP_LEFT: "X__XO_X_O",
        PLAY_X_TOP_CENTER: "_X_XO_X_O",
        PLAY_X_TOP_RIGHT: "__XXO_X_O",
        PLAY_X_MIDDLE_RIGHT: "___XOXX_O",
        PLAY_X_BOTTOM_CENTER: "___XO_XXO"
      }
    },
    ___XO_X__: {
      on: {
        PLAY_O_TOP_LEFT: "O__XO_X__",
        PLAY_O_TOP_CENTER: "_O_XO_X__",
        PLAY_O_TOP_RIGHT: "__OXO_X__",
        PLAY_O_MIDDLE_RIGHT: "___XOOX__",
        PLAY_O_BOTTOM_CENTER: "___XO_XO_",
        PLAY_O_BOTTOM_RIGHT: "___XO_X_O"
      }
    },
    ___XOOOXX: {
      on: {
        PLAY_X_TOP_LEFT: "X__XOOOXX",
        PLAY_X_TOP_CENTER: "_X_XOOOXX",
        PLAY_X_TOP_RIGHT: "__XXOOOXX"
      }
    },
    ___XOO_XX: {
      on: {
        PLAY_O_TOP_LEFT: "O__XOO_XX",
        PLAY_O_TOP_CENTER: "_O_XOO_XX",
        PLAY_O_TOP_RIGHT: "__OXOO_XX",
        PLAY_O_BOTTOM_LEFT: "___XOOOXX"
      }
    },
    ___XOO_X_: {
      on: {
        PLAY_X_TOP_LEFT: "X__XOO_X_",
        PLAY_X_TOP_CENTER: "_X_XOO_X_",
        PLAY_X_TOP_RIGHT: "__XXOO_X_",
        PLAY_X_BOTTOM_LEFT: "___XOOXX_",
        PLAY_X_BOTTOM_RIGHT: "___XOO_XX"
      }
    },
    ___XO_OXX: {
      on: {
        PLAY_O_TOP_LEFT: "O__XO_OXX",
        PLAY_O_TOP_CENTER: "_O_XO_OXX",
        PLAY_O_TOP_RIGHT: "__OXO_OXX",
        PLAY_O_MIDDLE_RIGHT: "___XOOOXX"
      }
    },
    ___XO_OX_: {
      on: {
        PLAY_X_TOP_LEFT: "X__XO_OX_",
        PLAY_X_TOP_CENTER: "_X_XO_OX_",
        PLAY_X_TOP_RIGHT: "__XXO_OX_",
        PLAY_X_MIDDLE_RIGHT: "___XOXOX_",
        PLAY_X_BOTTOM_RIGHT: "___XO_OXX"
      }
    },
    ___XO__XO: {
      on: {
        PLAY_X_TOP_LEFT: "X__XO__XO",
        PLAY_X_TOP_CENTER: "_X_XO__XO",
        PLAY_X_TOP_RIGHT: "__XXO__XO",
        PLAY_X_MIDDLE_RIGHT: "___XOX_XO",
        PLAY_X_BOTTOM_LEFT: "___XO_XXO"
      }
    },
    ___XO__X_: {
      on: {
        PLAY_O_TOP_LEFT: "O__XO__X_",
        PLAY_O_TOP_CENTER: "_O_XO__X_",
        PLAY_O_TOP_RIGHT: "__OXO__X_",
        PLAY_O_MIDDLE_RIGHT: "___XOO_X_",
        PLAY_O_BOTTOM_LEFT: "___XO_OX_",
        PLAY_O_BOTTOM_RIGHT: "___XO__XO"
      }
    },
    ___XOO__X: {
      on: {
        PLAY_X_TOP_LEFT: "X__XOO__X",
        PLAY_X_TOP_CENTER: "_X_XOO__X",
        PLAY_X_TOP_RIGHT: "__XXOO__X",
        PLAY_X_BOTTOM_LEFT: "___XOOX_X",
        PLAY_X_BOTTOM_CENTER: "___XOO_XX"
      }
    },
    ___XO_O_X: {
      on: {
        PLAY_X_TOP_LEFT: "X__XO_O_X",
        PLAY_X_TOP_CENTER: "_X_XO_O_X",
        PLAY_X_TOP_RIGHT: "__XXO_O_X",
        PLAY_X_MIDDLE_RIGHT: "___XOXO_X",
        PLAY_X_BOTTOM_CENTER: "___XO_OXX"
      }
    },
    ___XO__OX: {
      on: {
        PLAY_X_TOP_LEFT: "X__XO__OX",
        PLAY_X_TOP_CENTER: "_X_XO__OX",
        PLAY_X_TOP_RIGHT: "__XXO__OX",
        PLAY_X_MIDDLE_RIGHT: "___XOX_OX",
        PLAY_X_BOTTOM_LEFT: "___XO_XOX"
      }
    },
    ___XO___X: {
      on: {
        PLAY_O_TOP_LEFT: "O__XO___X",
        PLAY_O_TOP_CENTER: "_O_XO___X",
        PLAY_O_TOP_RIGHT: "__OXO___X",
        PLAY_O_MIDDLE_RIGHT: "___XOO__X",
        PLAY_O_BOTTOM_LEFT: "___XO_O_X",
        PLAY_O_BOTTOM_CENTER: "___XO__OX"
      }
    },
    ___XO____: {
      on: {
        PLAY_X_TOP_LEFT: "X__XO____",
        PLAY_X_TOP_CENTER: "_X_XO____",
        PLAY_X_TOP_RIGHT: "__XXO____",
        PLAY_X_MIDDLE_RIGHT: "___XOX___",
        PLAY_X_BOTTOM_LEFT: "___XO_X__",
        PLAY_X_BOTTOM_CENTER: "___XO__X_",
        PLAY_X_BOTTOM_RIGHT: "___XO___X"
      }
    },
    ___XXOOXO: {
      on: {
        PLAY_X_TOP_LEFT: "X__XXOOXO",
        PLAY_X_TOP_CENTER: "_X_XXOOXO",
        PLAY_X_TOP_RIGHT: "__XXXOOXO"
      }
    },
    ___XXOOX_: {
      on: {
        PLAY_O_TOP_LEFT: "O__XXOOX_",
        PLAY_O_TOP_CENTER: "_O_XXOOX_",
        PLAY_O_TOP_RIGHT: "__OXXOOX_",
        PLAY_O_BOTTOM_RIGHT: "___XXOOXO"
      }
    },
    ___XXOOOX: {
      on: {
        PLAY_X_TOP_LEFT: "X__XXOOOX",
        PLAY_X_TOP_CENTER: "_X_XXOOOX",
        PLAY_X_TOP_RIGHT: "__XXXOOOX"
      }
    },
    ___XXOO_X: {
      on: {
        PLAY_O_TOP_LEFT: "O__XXOO_X",
        PLAY_O_TOP_CENTER: "_O_XXOO_X",
        PLAY_O_TOP_RIGHT: "__OXXOO_X",
        PLAY_O_BOTTOM_CENTER: "___XXOOOX"
      }
    },
    ___XXOO__: {
      on: {
        PLAY_X_TOP_LEFT: "X__XXOO__",
        PLAY_X_TOP_CENTER: "_X_XXOO__",
        PLAY_X_TOP_RIGHT: "__XXXOO__",
        PLAY_X_BOTTOM_CENTER: "___XXOOX_",
        PLAY_X_BOTTOM_RIGHT: "___XXOO_X"
      }
    },
    ___XXOXOO: {
      on: {
        PLAY_X_TOP_LEFT: "X__XXOXOO",
        PLAY_X_TOP_CENTER: "_X_XXOXOO",
        PLAY_X_TOP_RIGHT: "__XXXOXOO"
      }
    },
    ___XXOXO_: {
      on: {
        PLAY_O_TOP_LEFT: "O__XXOXO_",
        PLAY_O_TOP_CENTER: "_O_XXOXO_",
        PLAY_O_TOP_RIGHT: "__OXXOXO_",
        PLAY_O_BOTTOM_RIGHT: "___XXOXOO"
      }
    },
    ___XXO_OX: {
      on: {
        PLAY_O_TOP_LEFT: "O__XXO_OX",
        PLAY_O_TOP_CENTER: "_O_XXO_OX",
        PLAY_O_TOP_RIGHT: "__OXXO_OX",
        PLAY_O_BOTTOM_LEFT: "___XXOOOX"
      }
    },
    ___XXO_O_: {
      on: {
        PLAY_X_TOP_LEFT: "X__XXO_O_",
        PLAY_X_TOP_CENTER: "_X_XXO_O_",
        PLAY_X_TOP_RIGHT: "__XXXO_O_",
        PLAY_X_BOTTOM_LEFT: "___XXOXO_",
        PLAY_X_BOTTOM_RIGHT: "___XXO_OX"
      }
    },
    ___XXOX_O: {
      on: {
        PLAY_O_TOP_LEFT: "O__XXOX_O",
        PLAY_O_TOP_CENTER: "_O_XXOX_O",
        PLAY_O_TOP_RIGHT: "__OXXOX_O",
        PLAY_O_BOTTOM_CENTER: "___XXOXOO"
      }
    },
    ___XXO_XO: {
      on: {
        PLAY_O_TOP_LEFT: "O__XXO_XO",
        PLAY_O_TOP_CENTER: "_O_XXO_XO",
        PLAY_O_TOP_RIGHT: "__OXXO_XO",
        PLAY_O_BOTTOM_LEFT: "___XXOOXO"
      }
    },
    ___XXO__O: {
      on: {
        PLAY_X_TOP_LEFT: "X__XXO__O",
        PLAY_X_TOP_CENTER: "_X_XXO__O",
        PLAY_X_TOP_RIGHT: "__XXXO__O",
        PLAY_X_BOTTOM_LEFT: "___XXOX_O",
        PLAY_X_BOTTOM_CENTER: "___XXO_XO"
      }
    },
    ___XXO___: {
      on: {
        PLAY_O_TOP_LEFT: "O__XXO___",
        PLAY_O_TOP_CENTER: "_O_XXO___",
        PLAY_O_TOP_RIGHT: "__OXXO___",
        PLAY_O_BOTTOM_LEFT: "___XXOO__",
        PLAY_O_BOTTOM_CENTER: "___XXO_O_",
        PLAY_O_BOTTOM_RIGHT: "___XXO__O"
      }
    },
    ___X_OXOX: {
      on: {
        PLAY_O_TOP_LEFT: "O__X_OXOX",
        PLAY_O_TOP_CENTER: "_O_X_OXOX",
        PLAY_O_TOP_RIGHT: "__OX_OXOX",
        PLAY_O_CENTER: "___XOOXOX"
      }
    },
    ___X_OXO_: {
      on: {
        PLAY_X_TOP_LEFT: "X__X_OXO_",
        PLAY_X_TOP_CENTER: "_X_X_OXO_",
        PLAY_X_TOP_RIGHT: "__XX_OXO_",
        PLAY_X_CENTER: "___XXOXO_",
        PLAY_X_BOTTOM_RIGHT: "___X_OXOX"
      }
    },
    ___X_OXXO: {
      on: {
        PLAY_O_TOP_LEFT: "O__X_OXXO",
        PLAY_O_TOP_CENTER: "_O_X_OXXO",
        PLAY_O_TOP_RIGHT: "__OX_OXXO",
        PLAY_O_CENTER: "___XOOXXO"
      }
    },
    ___X_OX_O: {
      on: {
        PLAY_X_TOP_LEFT: "X__X_OX_O",
        PLAY_X_TOP_CENTER: "_X_X_OX_O",
        PLAY_X_TOP_RIGHT: "__XX_OX_O",
        PLAY_X_CENTER: "___XXOX_O",
        PLAY_X_BOTTOM_CENTER: "___X_OXXO"
      }
    },
    ___X_OX__: {
      on: {
        PLAY_O_TOP_LEFT: "O__X_OX__",
        PLAY_O_TOP_CENTER: "_O_X_OX__",
        PLAY_O_TOP_RIGHT: "__OX_OX__",
        PLAY_O_CENTER: "___XOOX__",
        PLAY_O_BOTTOM_CENTER: "___X_OXO_",
        PLAY_O_BOTTOM_RIGHT: "___X_OX_O"
      }
    },
    ___X_OOXX: {
      on: {
        PLAY_O_TOP_LEFT: "O__X_OOXX",
        PLAY_O_TOP_CENTER: "_O_X_OOXX",
        PLAY_O_TOP_RIGHT: "__OX_OOXX",
        PLAY_O_CENTER: "___XOOOXX"
      }
    },
    ___X_OOX_: {
      on: {
        PLAY_X_TOP_LEFT: "X__X_OOX_",
        PLAY_X_TOP_CENTER: "_X_X_OOX_",
        PLAY_X_TOP_RIGHT: "__XX_OOX_",
        PLAY_X_CENTER: "___XXOOX_",
        PLAY_X_BOTTOM_RIGHT: "___X_OOXX"
      }
    },
    ___X_O_XO: {
      on: {
        PLAY_X_TOP_LEFT: "X__X_O_XO",
        PLAY_X_TOP_CENTER: "_X_X_O_XO",
        PLAY_X_TOP_RIGHT: "__XX_O_XO",
        PLAY_X_CENTER: "___XXO_XO",
        PLAY_X_BOTTOM_LEFT: "___X_OXXO"
      }
    },
    ___X_O_X_: {
      on: {
        PLAY_O_TOP_LEFT: "O__X_O_X_",
        PLAY_O_TOP_CENTER: "_O_X_O_X_",
        PLAY_O_TOP_RIGHT: "__OX_O_X_",
        PLAY_O_CENTER: "___XOO_X_",
        PLAY_O_BOTTOM_LEFT: "___X_OOX_",
        PLAY_O_BOTTOM_RIGHT: "___X_O_XO"
      }
    },
    ___X_OO_X: {
      on: {
        PLAY_X_TOP_LEFT: "X__X_OO_X",
        PLAY_X_TOP_CENTER: "_X_X_OO_X",
        PLAY_X_TOP_RIGHT: "__XX_OO_X",
        PLAY_X_CENTER: "___XXOO_X",
        PLAY_X_BOTTOM_CENTER: "___X_OOXX"
      }
    },
    ___X_O_OX: {
      on: {
        PLAY_X_TOP_LEFT: "X__X_O_OX",
        PLAY_X_TOP_CENTER: "_X_X_O_OX",
        PLAY_X_TOP_RIGHT: "__XX_O_OX",
        PLAY_X_CENTER: "___XXO_OX",
        PLAY_X_BOTTOM_LEFT: "___X_OXOX"
      }
    },
    ___X_O__X: {
      on: {
        PLAY_O_TOP_LEFT: "O__X_O__X",
        PLAY_O_TOP_CENTER: "_O_X_O__X",
        PLAY_O_TOP_RIGHT: "__OX_O__X",
        PLAY_O_CENTER: "___XOO__X",
        PLAY_O_BOTTOM_LEFT: "___X_OO_X",
        PLAY_O_BOTTOM_CENTER: "___X_O_OX"
      }
    },
    ___X_O___: {
      on: {
        PLAY_X_TOP_LEFT: "X__X_O___",
        PLAY_X_TOP_CENTER: "_X_X_O___",
        PLAY_X_TOP_RIGHT: "__XX_O___",
        PLAY_X_CENTER: "___XXO___",
        PLAY_X_BOTTOM_LEFT: "___X_OX__",
        PLAY_X_BOTTOM_CENTER: "___X_O_X_",
        PLAY_X_BOTTOM_RIGHT: "___X_O__X"
      }
    },
    ___XXXOO_: { on: { "": "X_WINS" } },
    ___XX_OOX: {
      on: {
        PLAY_O_TOP_LEFT: "O__XX_OOX",
        PLAY_O_TOP_CENTER: "_O_XX_OOX",
        PLAY_O_TOP_RIGHT: "__OXX_OOX",
        PLAY_O_MIDDLE_RIGHT: "___XXOOOX"
      }
    },
    ___XX_OO_: {
      on: {
        PLAY_X_TOP_LEFT: "X__XX_OO_",
        PLAY_X_TOP_CENTER: "_X_XX_OO_",
        PLAY_X_TOP_RIGHT: "__XXX_OO_",
        PLAY_X_MIDDLE_RIGHT: "___XXXOO_",
        PLAY_X_BOTTOM_RIGHT: "___XX_OOX"
      }
    },
    ___XXXO_O: { on: { "": "X_WINS" } },
    ___XX_OXO: {
      on: {
        PLAY_O_TOP_LEFT: "O__XX_OXO",
        PLAY_O_TOP_CENTER: "_O_XX_OXO",
        PLAY_O_TOP_RIGHT: "__OXX_OXO",
        PLAY_O_MIDDLE_RIGHT: "___XXOOXO"
      }
    },
    ___XX_O_O: {
      on: {
        PLAY_X_TOP_LEFT: "X__XX_O_O",
        PLAY_X_TOP_CENTER: "_X_XX_O_O",
        PLAY_X_TOP_RIGHT: "__XXX_O_O",
        PLAY_X_MIDDLE_RIGHT: "___XXXO_O",
        PLAY_X_BOTTOM_CENTER: "___XX_OXO"
      }
    },
    ___XX_O__: {
      on: {
        PLAY_O_TOP_LEFT: "O__XX_O__",
        PLAY_O_TOP_CENTER: "_O_XX_O__",
        PLAY_O_TOP_RIGHT: "__OXX_O__",
        PLAY_O_MIDDLE_RIGHT: "___XXOO__",
        PLAY_O_BOTTOM_CENTER: "___XX_OO_",
        PLAY_O_BOTTOM_RIGHT: "___XX_O_O"
      }
    },
    ___X_XOOX: {
      on: {
        PLAY_O_TOP_LEFT: "O__X_XOOX",
        PLAY_O_TOP_CENTER: "_O_X_XOOX",
        PLAY_O_TOP_RIGHT: "__OX_XOOX",
        PLAY_O_CENTER: "___XOXOOX"
      }
    },
    ___X_XOO_: {
      on: {
        PLAY_X_TOP_LEFT: "X__X_XOO_",
        PLAY_X_TOP_CENTER: "_X_X_XOO_",
        PLAY_X_TOP_RIGHT: "__XX_XOO_",
        PLAY_X_CENTER: "___XXXOO_",
        PLAY_X_BOTTOM_RIGHT: "___X_XOOX"
      }
    },
    ___X_XOXO: {
      on: {
        PLAY_O_TOP_LEFT: "O__X_XOXO",
        PLAY_O_TOP_CENTER: "_O_X_XOXO",
        PLAY_O_TOP_RIGHT: "__OX_XOXO",
        PLAY_O_CENTER: "___XOXOXO"
      }
    },
    ___X_XO_O: {
      on: {
        PLAY_X_TOP_LEFT: "X__X_XO_O",
        PLAY_X_TOP_CENTER: "_X_X_XO_O",
        PLAY_X_TOP_RIGHT: "__XX_XO_O",
        PLAY_X_CENTER: "___XXXO_O",
        PLAY_X_BOTTOM_CENTER: "___X_XOXO"
      }
    },
    ___X_XO__: {
      on: {
        PLAY_O_TOP_LEFT: "O__X_XO__",
        PLAY_O_TOP_CENTER: "_O_X_XO__",
        PLAY_O_TOP_RIGHT: "__OX_XO__",
        PLAY_O_CENTER: "___XOXO__",
        PLAY_O_BOTTOM_CENTER: "___X_XOO_",
        PLAY_O_BOTTOM_RIGHT: "___X_XO_O"
      }
    },
    ___X__OXO: {
      on: {
        PLAY_X_TOP_LEFT: "X__X__OXO",
        PLAY_X_TOP_CENTER: "_X_X__OXO",
        PLAY_X_TOP_RIGHT: "__XX__OXO",
        PLAY_X_CENTER: "___XX_OXO",
        PLAY_X_MIDDLE_RIGHT: "___X_XOXO"
      }
    },
    ___X__OX_: {
      on: {
        PLAY_O_TOP_LEFT: "O__X__OX_",
        PLAY_O_TOP_CENTER: "_O_X__OX_",
        PLAY_O_TOP_RIGHT: "__OX__OX_",
        PLAY_O_CENTER: "___XO_OX_",
        PLAY_O_MIDDLE_RIGHT: "___X_OOX_",
        PLAY_O_BOTTOM_RIGHT: "___X__OXO"
      }
    },
    ___X__OOX: {
      on: {
        PLAY_X_TOP_LEFT: "X__X__OOX",
        PLAY_X_TOP_CENTER: "_X_X__OOX",
        PLAY_X_TOP_RIGHT: "__XX__OOX",
        PLAY_X_CENTER: "___XX_OOX",
        PLAY_X_MIDDLE_RIGHT: "___X_XOOX"
      }
    },
    ___X__O_X: {
      on: {
        PLAY_O_TOP_LEFT: "O__X__O_X",
        PLAY_O_TOP_CENTER: "_O_X__O_X",
        PLAY_O_TOP_RIGHT: "__OX__O_X",
        PLAY_O_CENTER: "___XO_O_X",
        PLAY_O_MIDDLE_RIGHT: "___X_OO_X",
        PLAY_O_BOTTOM_CENTER: "___X__OOX"
      }
    },
    ___X__O__: {
      on: {
        PLAY_X_TOP_LEFT: "X__X__O__",
        PLAY_X_TOP_CENTER: "_X_X__O__",
        PLAY_X_TOP_RIGHT: "__XX__O__",
        PLAY_X_CENTER: "___XX_O__",
        PLAY_X_MIDDLE_RIGHT: "___X_XO__",
        PLAY_X_BOTTOM_CENTER: "___X__OX_",
        PLAY_X_BOTTOM_RIGHT: "___X__O_X"
      }
    },
    ___XXX_OO: { on: { "": "X_WINS" } },
    ___XX_XOO: {
      on: {
        PLAY_O_TOP_LEFT: "O__XX_XOO",
        PLAY_O_TOP_CENTER: "_O_XX_XOO",
        PLAY_O_TOP_RIGHT: "__OXX_XOO",
        PLAY_O_MIDDLE_RIGHT: "___XXOXOO"
      }
    },
    ___XX__OO: {
      on: {
        PLAY_X_TOP_LEFT: "X__XX__OO",
        PLAY_X_TOP_CENTER: "_X_XX__OO",
        PLAY_X_TOP_RIGHT: "__XXX__OO",
        PLAY_X_MIDDLE_RIGHT: "___XXX_OO",
        PLAY_X_BOTTOM_LEFT: "___XX_XOO"
      }
    },
    ___XX__O_: {
      on: {
        PLAY_O_TOP_LEFT: "O__XX__O_",
        PLAY_O_TOP_CENTER: "_O_XX__O_",
        PLAY_O_TOP_RIGHT: "__OXX__O_",
        PLAY_O_MIDDLE_RIGHT: "___XXO_O_",
        PLAY_O_BOTTOM_LEFT: "___XX_OO_",
        PLAY_O_BOTTOM_RIGHT: "___XX__OO"
      }
    },
    ___X_XXOO: {
      on: {
        PLAY_O_TOP_LEFT: "O__X_XXOO",
        PLAY_O_TOP_CENTER: "_O_X_XXOO",
        PLAY_O_TOP_RIGHT: "__OX_XXOO",
        PLAY_O_CENTER: "___XOXXOO"
      }
    },
    ___X_X_OO: {
      on: {
        PLAY_X_TOP_LEFT: "X__X_X_OO",
        PLAY_X_TOP_CENTER: "_X_X_X_OO",
        PLAY_X_TOP_RIGHT: "__XX_X_OO",
        PLAY_X_CENTER: "___XXX_OO",
        PLAY_X_BOTTOM_LEFT: "___X_XXOO"
      }
    },
    ___X_X_O_: {
      on: {
        PLAY_O_TOP_LEFT: "O__X_X_O_",
        PLAY_O_TOP_CENTER: "_O_X_X_O_",
        PLAY_O_TOP_RIGHT: "__OX_X_O_",
        PLAY_O_CENTER: "___XOX_O_",
        PLAY_O_BOTTOM_LEFT: "___X_XOO_",
        PLAY_O_BOTTOM_RIGHT: "___X_X_OO"
      }
    },
    ___X__XOO: {
      on: {
        PLAY_X_TOP_LEFT: "X__X__XOO",
        PLAY_X_TOP_CENTER: "_X_X__XOO",
        PLAY_X_TOP_RIGHT: "__XX__XOO",
        PLAY_X_CENTER: "___XX_XOO",
        PLAY_X_MIDDLE_RIGHT: "___X_XXOO"
      }
    },
    ___X__XO_: {
      on: {
        PLAY_O_TOP_LEFT: "O__X__XO_",
        PLAY_O_TOP_CENTER: "_O_X__XO_",
        PLAY_O_TOP_RIGHT: "__OX__XO_",
        PLAY_O_CENTER: "___XO_XO_",
        PLAY_O_MIDDLE_RIGHT: "___X_OXO_",
        PLAY_O_BOTTOM_RIGHT: "___X__XOO"
      }
    },
    ___X___OX: {
      on: {
        PLAY_O_TOP_LEFT: "O__X___OX",
        PLAY_O_TOP_CENTER: "_O_X___OX",
        PLAY_O_TOP_RIGHT: "__OX___OX",
        PLAY_O_CENTER: "___XO__OX",
        PLAY_O_MIDDLE_RIGHT: "___X_O_OX",
        PLAY_O_BOTTOM_LEFT: "___X__OOX"
      }
    },
    ___X___O_: {
      on: {
        PLAY_X_TOP_LEFT: "X__X___O_",
        PLAY_X_TOP_CENTER: "_X_X___O_",
        PLAY_X_TOP_RIGHT: "__XX___O_",
        PLAY_X_CENTER: "___XX__O_",
        PLAY_X_MIDDLE_RIGHT: "___X_X_O_",
        PLAY_X_BOTTOM_LEFT: "___X__XO_",
        PLAY_X_BOTTOM_RIGHT: "___X___OX"
      }
    },
    ___XX___O: {
      on: {
        PLAY_O_TOP_LEFT: "O__XX___O",
        PLAY_O_TOP_CENTER: "_O_XX___O",
        PLAY_O_TOP_RIGHT: "__OXX___O",
        PLAY_O_MIDDLE_RIGHT: "___XXO__O",
        PLAY_O_BOTTOM_LEFT: "___XX_O_O",
        PLAY_O_BOTTOM_CENTER: "___XX__OO"
      }
    },
    ___X_X__O: {
      on: {
        PLAY_O_TOP_LEFT: "O__X_X__O",
        PLAY_O_TOP_CENTER: "_O_X_X__O",
        PLAY_O_TOP_RIGHT: "__OX_X__O",
        PLAY_O_CENTER: "___XOX__O",
        PLAY_O_BOTTOM_LEFT: "___X_XO_O",
        PLAY_O_BOTTOM_CENTER: "___X_X_OO"
      }
    },
    ___X__X_O: {
      on: {
        PLAY_O_TOP_LEFT: "O__X__X_O",
        PLAY_O_TOP_CENTER: "_O_X__X_O",
        PLAY_O_TOP_RIGHT: "__OX__X_O",
        PLAY_O_CENTER: "___XO_X_O",
        PLAY_O_MIDDLE_RIGHT: "___X_OX_O",
        PLAY_O_BOTTOM_CENTER: "___X__XOO"
      }
    },
    ___X___XO: {
      on: {
        PLAY_O_TOP_LEFT: "O__X___XO",
        PLAY_O_TOP_CENTER: "_O_X___XO",
        PLAY_O_TOP_RIGHT: "__OX___XO",
        PLAY_O_CENTER: "___XO__XO",
        PLAY_O_MIDDLE_RIGHT: "___X_O_XO",
        PLAY_O_BOTTOM_LEFT: "___X__OXO"
      }
    },
    ___X____O: {
      on: {
        PLAY_X_TOP_LEFT: "X__X____O",
        PLAY_X_TOP_CENTER: "_X_X____O",
        PLAY_X_TOP_RIGHT: "__XX____O",
        PLAY_X_CENTER: "___XX___O",
        PLAY_X_MIDDLE_RIGHT: "___X_X__O",
        PLAY_X_BOTTOM_LEFT: "___X__X_O",
        PLAY_X_BOTTOM_CENTER: "___X___XO"
      }
    },
    ___X_____: {
      on: {
        PLAY_O_TOP_LEFT: "O__X_____",
        PLAY_O_TOP_CENTER: "_O_X_____",
        PLAY_O_TOP_RIGHT: "__OX_____",
        PLAY_O_CENTER: "___XO____",
        PLAY_O_MIDDLE_RIGHT: "___X_O___",
        PLAY_O_BOTTOM_LEFT: "___X__O__",
        PLAY_O_BOTTOM_CENTER: "___X___O_",
        PLAY_O_BOTTOM_RIGHT: "___X____O"
      }
    },
    OOO_XXX__: { on: { "": "O_WINS" } },
    OOOOXXXX_: { on: { "": "O_WINS" } },
    OO_OXXXXO: { on: { PLAY_X_TOP_RIGHT: "OOXOXXXXO" } },
    OO_OXXXX_: {
      on: { PLAY_O_TOP_RIGHT: "OOOOXXXX_", PLAY_O_BOTTOM_RIGHT: "OO_OXXXXO" }
    },
    OOOOXXX_X: { on: { "": "O_WINS" } },
    OOXOXXXOX: { on: { "": "X_WINS" } },
    OO_OXXXOX: { on: { PLAY_X_TOP_RIGHT: "OOXOXXXOX" } },
    OO_OXXX_X: {
      on: { PLAY_O_TOP_RIGHT: "OOOOXXX_X", PLAY_O_BOTTOM_CENTER: "OO_OXXXOX" }
    },
    OO_OXXX__: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXOXXX__",
        PLAY_X_BOTTOM_CENTER: "OO_OXXXX_",
        PLAY_X_BOTTOM_RIGHT: "OO_OXXX_X"
      }
    },
    OOO_XXXOX: { on: { "": "O_WINS" } },
    OO__XXXOX: {
      on: { PLAY_O_TOP_RIGHT: "OOO_XXXOX", PLAY_O_MIDDLE_LEFT: "OO_OXXXOX" }
    },
    OO__XXXO_: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX_XXXO_",
        PLAY_X_MIDDLE_LEFT: "OO_XXXXO_",
        PLAY_X_BOTTOM_RIGHT: "OO__XXXOX"
      }
    },
    OOO_XXXXO: { on: { "": "O_WINS" } },
    OO__XXXXO: {
      on: { PLAY_O_TOP_RIGHT: "OOO_XXXXO", PLAY_O_MIDDLE_LEFT: "OO_OXXXXO" }
    },
    OO__XXX_O: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX_XXX_O",
        PLAY_X_MIDDLE_LEFT: "OO_XXXX_O",
        PLAY_X_BOTTOM_CENTER: "OO__XXXXO"
      }
    },
    OO__XXX__: {
      on: {
        PLAY_O_TOP_RIGHT: "OOO_XXX__",
        PLAY_O_MIDDLE_LEFT: "OO_OXXX__",
        PLAY_O_BOTTOM_CENTER: "OO__XXXO_",
        PLAY_O_BOTTOM_RIGHT: "OO__XXX_O"
      }
    },
    OOO_XX_X_: { on: { "": "O_WINS" } },
    OOOOXX_XX: { on: { "": "O_WINS" } },
    OO_OXXOXX: { on: { "": "O_WINS" } },
    OO_OXX_XX: {
      on: { PLAY_O_TOP_RIGHT: "OOOOXX_XX", PLAY_O_BOTTOM_LEFT: "OO_OXXOXX" }
    },
    OO_OXX_X_: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXOXX_X_",
        PLAY_X_BOTTOM_LEFT: "OO_OXXXX_",
        PLAY_X_BOTTOM_RIGHT: "OO_OXX_XX"
      }
    },
    OOO_XXOXX: { on: { "": "O_WINS" } },
    OO__XXOXX: {
      on: { PLAY_O_TOP_RIGHT: "OOO_XXOXX", PLAY_O_MIDDLE_LEFT: "OO_OXXOXX" }
    },
    OO__XXOX_: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX_XXOX_",
        PLAY_X_MIDDLE_LEFT: "OO_XXXOX_",
        PLAY_X_BOTTOM_RIGHT: "OO__XXOXX"
      }
    },
    OO__XX_XO: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX_XX_XO",
        PLAY_X_MIDDLE_LEFT: "OO_XXX_XO",
        PLAY_X_BOTTOM_LEFT: "OO__XXXXO"
      }
    },
    OO__XX_X_: {
      on: {
        PLAY_O_TOP_RIGHT: "OOO_XX_X_",
        PLAY_O_MIDDLE_LEFT: "OO_OXX_X_",
        PLAY_O_BOTTOM_LEFT: "OO__XXOX_",
        PLAY_O_BOTTOM_RIGHT: "OO__XX_XO"
      }
    },
    OOO_XX__X: { on: { "": "O_WINS" } },
    OO_OXX__X: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXOXX__X",
        PLAY_X_BOTTOM_LEFT: "OO_OXXX_X",
        PLAY_X_BOTTOM_CENTER: "OO_OXX_XX"
      }
    },
    OO__XXO_X: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX_XXO_X",
        PLAY_X_MIDDLE_LEFT: "OO_XXXO_X",
        PLAY_X_BOTTOM_CENTER: "OO__XXOXX"
      }
    },
    OO__XX_OX: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX_XX_OX",
        PLAY_X_MIDDLE_LEFT: "OO_XXX_OX",
        PLAY_X_BOTTOM_LEFT: "OO__XXXOX"
      }
    },
    OO__XX__X: {
      on: {
        PLAY_O_TOP_RIGHT: "OOO_XX__X",
        PLAY_O_MIDDLE_LEFT: "OO_OXX__X",
        PLAY_O_BOTTOM_LEFT: "OO__XXO_X",
        PLAY_O_BOTTOM_CENTER: "OO__XX_OX"
      }
    },
    OO__XX___: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX_XX___",
        PLAY_X_MIDDLE_LEFT: "OO_XXX___",
        PLAY_X_BOTTOM_LEFT: "OO__XXX__",
        PLAY_X_BOTTOM_CENTER: "OO__XX_X_",
        PLAY_X_BOTTOM_RIGHT: "OO__XX__X"
      }
    },
    O_OOXXXXO: { on: { PLAY_X_TOP_CENTER: "OXOOXXXXO" } },
    O_OOXXXX_: {
      on: { PLAY_O_TOP_CENTER: "OOOOXXXX_", PLAY_O_BOTTOM_RIGHT: "O_OOXXXXO" }
    },
    O_OOXXXOX: { on: { PLAY_X_TOP_CENTER: "OXOOXXXOX" } },
    O_OOXXX_X: {
      on: {
        PLAY_O_TOP_CENTER: "OOOOXXX_X",
        PLAY_O_BOTTOM_CENTER: "O_OOXXXOX"
      }
    },
    O_OOXXX__: {
      on: {
        PLAY_X_TOP_CENTER: "OXOOXXX__",
        PLAY_X_BOTTOM_CENTER: "O_OOXXXX_",
        PLAY_X_BOTTOM_RIGHT: "O_OOXXX_X"
      }
    },
    O_O_XXXOX: {
      on: { PLAY_O_TOP_CENTER: "OOO_XXXOX", PLAY_O_MIDDLE_LEFT: "O_OOXXXOX" }
    },
    O_O_XXXO_: {
      on: {
        PLAY_X_TOP_CENTER: "OXO_XXXO_",
        PLAY_X_MIDDLE_LEFT: "O_OXXXXO_",
        PLAY_X_BOTTOM_RIGHT: "O_O_XXXOX"
      }
    },
    O_O_XXXXO: {
      on: { PLAY_O_TOP_CENTER: "OOO_XXXXO", PLAY_O_MIDDLE_LEFT: "O_OOXXXXO" }
    },
    O_O_XXX_O: {
      on: {
        PLAY_X_TOP_CENTER: "OXO_XXX_O",
        PLAY_X_MIDDLE_LEFT: "O_OXXXX_O",
        PLAY_X_BOTTOM_CENTER: "O_O_XXXXO"
      }
    },
    O_O_XXX__: {
      on: {
        PLAY_O_TOP_CENTER: "OOO_XXX__",
        PLAY_O_MIDDLE_LEFT: "O_OOXXX__",
        PLAY_O_BOTTOM_CENTER: "O_O_XXXO_",
        PLAY_O_BOTTOM_RIGHT: "O_O_XXX_O"
      }
    },
    O_OOXXOXX: { on: { "": "O_WINS" } },
    O_OOXX_XX: {
      on: { PLAY_O_TOP_CENTER: "OOOOXX_XX", PLAY_O_BOTTOM_LEFT: "O_OOXXOXX" }
    },
    O_OOXX_X_: {
      on: {
        PLAY_X_TOP_CENTER: "OXOOXX_X_",
        PLAY_X_BOTTOM_LEFT: "O_OOXXXX_",
        PLAY_X_BOTTOM_RIGHT: "O_OOXX_XX"
      }
    },
    O_O_XXOXX: {
      on: { PLAY_O_TOP_CENTER: "OOO_XXOXX", PLAY_O_MIDDLE_LEFT: "O_OOXXOXX" }
    },
    O_O_XXOX_: {
      on: {
        PLAY_X_TOP_CENTER: "OXO_XXOX_",
        PLAY_X_MIDDLE_LEFT: "O_OXXXOX_",
        PLAY_X_BOTTOM_RIGHT: "O_O_XXOXX"
      }
    },
    O_O_XX_XO: {
      on: {
        PLAY_X_TOP_CENTER: "OXO_XX_XO",
        PLAY_X_MIDDLE_LEFT: "O_OXXX_XO",
        PLAY_X_BOTTOM_LEFT: "O_O_XXXXO"
      }
    },
    O_O_XX_X_: {
      on: {
        PLAY_O_TOP_CENTER: "OOO_XX_X_",
        PLAY_O_MIDDLE_LEFT: "O_OOXX_X_",
        PLAY_O_BOTTOM_LEFT: "O_O_XXOX_",
        PLAY_O_BOTTOM_RIGHT: "O_O_XX_XO"
      }
    },
    O_OOXX__X: {
      on: {
        PLAY_X_TOP_CENTER: "OXOOXX__X",
        PLAY_X_BOTTOM_LEFT: "O_OOXXX_X",
        PLAY_X_BOTTOM_CENTER: "O_OOXX_XX"
      }
    },
    O_O_XXO_X: {
      on: {
        PLAY_X_TOP_CENTER: "OXO_XXO_X",
        PLAY_X_MIDDLE_LEFT: "O_OXXXO_X",
        PLAY_X_BOTTOM_CENTER: "O_O_XXOXX"
      }
    },
    O_O_XX_OX: {
      on: {
        PLAY_X_TOP_CENTER: "OXO_XX_OX",
        PLAY_X_MIDDLE_LEFT: "O_OXXX_OX",
        PLAY_X_BOTTOM_LEFT: "O_O_XXXOX"
      }
    },
    O_O_XX__X: {
      on: {
        PLAY_O_TOP_CENTER: "OOO_XX__X",
        PLAY_O_MIDDLE_LEFT: "O_OOXX__X",
        PLAY_O_BOTTOM_LEFT: "O_O_XXO_X",
        PLAY_O_BOTTOM_CENTER: "O_O_XX_OX"
      }
    },
    O_O_XX___: {
      on: {
        PLAY_X_TOP_CENTER: "OXO_XX___",
        PLAY_X_MIDDLE_LEFT: "O_OXXX___",
        PLAY_X_BOTTOM_LEFT: "O_O_XXX__",
        PLAY_X_BOTTOM_CENTER: "O_O_XX_X_",
        PLAY_X_BOTTOM_RIGHT: "O_O_XX__X"
      }
    },
    O__OXXXOX: {
      on: { PLAY_O_TOP_CENTER: "OO_OXXXOX", PLAY_O_TOP_RIGHT: "O_OOXXXOX" }
    },
    O__OXXXO_: {
      on: {
        PLAY_X_TOP_CENTER: "OX_OXXXO_",
        PLAY_X_TOP_RIGHT: "O_XOXXXO_",
        PLAY_X_BOTTOM_RIGHT: "O__OXXXOX"
      }
    },
    O__OXXXXO: {
      on: { PLAY_O_TOP_CENTER: "OO_OXXXXO", PLAY_O_TOP_RIGHT: "O_OOXXXXO" }
    },
    O__OXXX_O: {
      on: {
        PLAY_X_TOP_CENTER: "OX_OXXX_O",
        PLAY_X_TOP_RIGHT: "O_XOXXX_O",
        PLAY_X_BOTTOM_CENTER: "O__OXXXXO"
      }
    },
    O__OXXX__: {
      on: {
        PLAY_O_TOP_CENTER: "OO_OXXX__",
        PLAY_O_TOP_RIGHT: "O_OOXXX__",
        PLAY_O_BOTTOM_CENTER: "O__OXXXO_",
        PLAY_O_BOTTOM_RIGHT: "O__OXXX_O"
      }
    },
    O__OXXOX_: { on: { "": "O_WINS" } },
    O__OXX_XO: {
      on: {
        PLAY_X_TOP_CENTER: "OX_OXX_XO",
        PLAY_X_TOP_RIGHT: "O_XOXX_XO",
        PLAY_X_BOTTOM_LEFT: "O__OXXXXO"
      }
    },
    O__OXX_X_: {
      on: {
        PLAY_O_TOP_CENTER: "OO_OXX_X_",
        PLAY_O_TOP_RIGHT: "O_OOXX_X_",
        PLAY_O_BOTTOM_LEFT: "O__OXXOX_",
        PLAY_O_BOTTOM_RIGHT: "O__OXX_XO"
      }
    },
    O__OXXO_X: { on: { "": "O_WINS" } },
    O__OXX_OX: {
      on: {
        PLAY_X_TOP_CENTER: "OX_OXX_OX",
        PLAY_X_TOP_RIGHT: "O_XOXX_OX",
        PLAY_X_BOTTOM_LEFT: "O__OXXXOX"
      }
    },
    O__OXX__X: {
      on: {
        PLAY_O_TOP_CENTER: "OO_OXX__X",
        PLAY_O_TOP_RIGHT: "O_OOXX__X",
        PLAY_O_BOTTOM_LEFT: "O__OXXO_X",
        PLAY_O_BOTTOM_CENTER: "O__OXX_OX"
      }
    },
    O__OXX___: {
      on: {
        PLAY_X_TOP_CENTER: "OX_OXX___",
        PLAY_X_TOP_RIGHT: "O_XOXX___",
        PLAY_X_BOTTOM_LEFT: "O__OXXX__",
        PLAY_X_BOTTOM_CENTER: "O__OXX_X_",
        PLAY_X_BOTTOM_RIGHT: "O__OXX__X"
      }
    },
    O___XXOXO: {
      on: {
        PLAY_X_TOP_CENTER: "OX__XXOXO",
        PLAY_X_TOP_RIGHT: "O_X_XXOXO",
        PLAY_X_MIDDLE_LEFT: "O__XXXOXO"
      }
    },
    O___XXOX_: {
      on: {
        PLAY_O_TOP_CENTER: "OO__XXOX_",
        PLAY_O_TOP_RIGHT: "O_O_XXOX_",
        PLAY_O_MIDDLE_LEFT: "O__OXXOX_",
        PLAY_O_BOTTOM_RIGHT: "O___XXOXO"
      }
    },
    O___XXOOX: {
      on: {
        PLAY_X_TOP_CENTER: "OX__XXOOX",
        PLAY_X_TOP_RIGHT: "O_X_XXOOX",
        PLAY_X_MIDDLE_LEFT: "O__XXXOOX"
      }
    },
    O___XXO_X: {
      on: {
        PLAY_O_TOP_CENTER: "OO__XXO_X",
        PLAY_O_TOP_RIGHT: "O_O_XXO_X",
        PLAY_O_MIDDLE_LEFT: "O__OXXO_X",
        PLAY_O_BOTTOM_CENTER: "O___XXOOX"
      }
    },
    O___XXO__: {
      on: {
        PLAY_X_TOP_CENTER: "OX__XXO__",
        PLAY_X_TOP_RIGHT: "O_X_XXO__",
        PLAY_X_MIDDLE_LEFT: "O__XXXO__",
        PLAY_X_BOTTOM_CENTER: "O___XXOX_",
        PLAY_X_BOTTOM_RIGHT: "O___XXO_X"
      }
    },
    O___XXXOO: {
      on: {
        PLAY_X_TOP_CENTER: "OX__XXXOO",
        PLAY_X_TOP_RIGHT: "O_X_XXXOO",
        PLAY_X_MIDDLE_LEFT: "O__XXXXOO"
      }
    },
    O___XXXO_: {
      on: {
        PLAY_O_TOP_CENTER: "OO__XXXO_",
        PLAY_O_TOP_RIGHT: "O_O_XXXO_",
        PLAY_O_MIDDLE_LEFT: "O__OXXXO_",
        PLAY_O_BOTTOM_RIGHT: "O___XXXOO"
      }
    },
    O___XX_OX: {
      on: {
        PLAY_O_TOP_CENTER: "OO__XX_OX",
        PLAY_O_TOP_RIGHT: "O_O_XX_OX",
        PLAY_O_MIDDLE_LEFT: "O__OXX_OX",
        PLAY_O_BOTTOM_LEFT: "O___XXOOX"
      }
    },
    O___XX_O_: {
      on: {
        PLAY_X_TOP_CENTER: "OX__XX_O_",
        PLAY_X_TOP_RIGHT: "O_X_XX_O_",
        PLAY_X_MIDDLE_LEFT: "O__XXX_O_",
        PLAY_X_BOTTOM_LEFT: "O___XXXO_",
        PLAY_X_BOTTOM_RIGHT: "O___XX_OX"
      }
    },
    O___XXX_O: {
      on: {
        PLAY_O_TOP_CENTER: "OO__XXX_O",
        PLAY_O_TOP_RIGHT: "O_O_XXX_O",
        PLAY_O_MIDDLE_LEFT: "O__OXXX_O",
        PLAY_O_BOTTOM_CENTER: "O___XXXOO"
      }
    },
    O___XX_XO: {
      on: {
        PLAY_O_TOP_CENTER: "OO__XX_XO",
        PLAY_O_TOP_RIGHT: "O_O_XX_XO",
        PLAY_O_MIDDLE_LEFT: "O__OXX_XO",
        PLAY_O_BOTTOM_LEFT: "O___XXOXO"
      }
    },
    O___XX__O: {
      on: {
        PLAY_X_TOP_CENTER: "OX__XX__O",
        PLAY_X_TOP_RIGHT: "O_X_XX__O",
        PLAY_X_MIDDLE_LEFT: "O__XXX__O",
        PLAY_X_BOTTOM_LEFT: "O___XXX_O",
        PLAY_X_BOTTOM_CENTER: "O___XX_XO"
      }
    },
    O___XX___: {
      on: {
        PLAY_O_TOP_CENTER: "OO__XX___",
        PLAY_O_TOP_RIGHT: "O_O_XX___",
        PLAY_O_MIDDLE_LEFT: "O__OXX___",
        PLAY_O_BOTTOM_LEFT: "O___XXO__",
        PLAY_O_BOTTOM_CENTER: "O___XX_O_",
        PLAY_O_BOTTOM_RIGHT: "O___XX__O"
      }
    },
    OOO_X_XX_: { on: { "": "O_WINS" } },
    OO_OX_XXX: { on: { "": "X_WINS" } },
    OO_OX_XX_: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXOX_XX_",
        PLAY_X_MIDDLE_RIGHT: "OO_OXXXX_",
        PLAY_X_BOTTOM_RIGHT: "OO_OX_XXX"
      }
    },
    OO__XOXXX: { on: { "": "X_WINS" } },
    OO__XOXX_: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX_XOXX_",
        PLAY_X_MIDDLE_LEFT: "OO_XXOXX_",
        PLAY_X_BOTTOM_RIGHT: "OO__XOXXX"
      }
    },
    OO__X_XXO: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX_X_XXO",
        PLAY_X_MIDDLE_LEFT: "OO_XX_XXO",
        PLAY_X_MIDDLE_RIGHT: "OO__XXXXO"
      }
    },
    OO__X_XX_: {
      on: {
        PLAY_O_TOP_RIGHT: "OOO_X_XX_",
        PLAY_O_MIDDLE_LEFT: "OO_OX_XX_",
        PLAY_O_MIDDLE_RIGHT: "OO__XOXX_",
        PLAY_O_BOTTOM_RIGHT: "OO__X_XXO"
      }
    },
    OOO_X_X_X: { on: { "": "O_WINS" } },
    OO_OX_X_X: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXOX_X_X",
        PLAY_X_MIDDLE_RIGHT: "OO_OXXX_X",
        PLAY_X_BOTTOM_CENTER: "OO_OX_XXX"
      }
    },
    OO__XOX_X: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX_XOX_X",
        PLAY_X_MIDDLE_LEFT: "OO_XXOX_X",
        PLAY_X_BOTTOM_CENTER: "OO__XOXXX"
      }
    },
    OO__X_XOX: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX_X_XOX",
        PLAY_X_MIDDLE_LEFT: "OO_XX_XOX",
        PLAY_X_MIDDLE_RIGHT: "OO__XXXOX"
      }
    },
    OO__X_X_X: {
      on: {
        PLAY_O_TOP_RIGHT: "OOO_X_X_X",
        PLAY_O_MIDDLE_LEFT: "OO_OX_X_X",
        PLAY_O_MIDDLE_RIGHT: "OO__XOX_X",
        PLAY_O_BOTTOM_CENTER: "OO__X_XOX"
      }
    },
    OO__X_X__: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX_X_X__",
        PLAY_X_MIDDLE_LEFT: "OO_XX_X__",
        PLAY_X_MIDDLE_RIGHT: "OO__XXX__",
        PLAY_X_BOTTOM_CENTER: "OO__X_XX_",
        PLAY_X_BOTTOM_RIGHT: "OO__X_X_X"
      }
    },
    O_OOX_XXX: { on: { "": "X_WINS" } },
    O_OOX_XX_: {
      on: {
        PLAY_X_TOP_CENTER: "OXOOX_XX_",
        PLAY_X_MIDDLE_RIGHT: "O_OOXXXX_",
        PLAY_X_BOTTOM_RIGHT: "O_OOX_XXX"
      }
    },
    O_O_XOXXX: { on: { "": "X_WINS" } },
    O_O_XOXX_: {
      on: {
        PLAY_X_TOP_CENTER: "OXO_XOXX_",
        PLAY_X_MIDDLE_LEFT: "O_OXXOXX_",
        PLAY_X_BOTTOM_RIGHT: "O_O_XOXXX"
      }
    },
    O_O_X_XXO: {
      on: {
        PLAY_X_TOP_CENTER: "OXO_X_XXO",
        PLAY_X_MIDDLE_LEFT: "O_OXX_XXO",
        PLAY_X_MIDDLE_RIGHT: "O_O_XXXXO"
      }
    },
    O_O_X_XX_: {
      on: {
        PLAY_O_TOP_CENTER: "OOO_X_XX_",
        PLAY_O_MIDDLE_LEFT: "O_OOX_XX_",
        PLAY_O_MIDDLE_RIGHT: "O_O_XOXX_",
        PLAY_O_BOTTOM_RIGHT: "O_O_X_XXO"
      }
    },
    O_OOX_X_X: {
      on: {
        PLAY_X_TOP_CENTER: "OXOOX_X_X",
        PLAY_X_MIDDLE_RIGHT: "O_OOXXX_X",
        PLAY_X_BOTTOM_CENTER: "O_OOX_XXX"
      }
    },
    O_O_XOX_X: {
      on: {
        PLAY_X_TOP_CENTER: "OXO_XOX_X",
        PLAY_X_MIDDLE_LEFT: "O_OXXOX_X",
        PLAY_X_BOTTOM_CENTER: "O_O_XOXXX"
      }
    },
    O_O_X_XOX: {
      on: {
        PLAY_X_TOP_CENTER: "OXO_X_XOX",
        PLAY_X_MIDDLE_LEFT: "O_OXX_XOX",
        PLAY_X_MIDDLE_RIGHT: "O_O_XXXOX"
      }
    },
    O_O_X_X_X: {
      on: {
        PLAY_O_TOP_CENTER: "OOO_X_X_X",
        PLAY_O_MIDDLE_LEFT: "O_OOX_X_X",
        PLAY_O_MIDDLE_RIGHT: "O_O_XOX_X",
        PLAY_O_BOTTOM_CENTER: "O_O_X_XOX"
      }
    },
    O_O_X_X__: {
      on: {
        PLAY_X_TOP_CENTER: "OXO_X_X__",
        PLAY_X_MIDDLE_LEFT: "O_OXX_X__",
        PLAY_X_MIDDLE_RIGHT: "O_O_XXX__",
        PLAY_X_BOTTOM_CENTER: "O_O_X_XX_",
        PLAY_X_BOTTOM_RIGHT: "O_O_X_X_X"
      }
    },
    O__OXOXXX: { on: { "": "X_WINS" } },
    O__OXOXX_: {
      on: {
        PLAY_X_TOP_CENTER: "OX_OXOXX_",
        PLAY_X_TOP_RIGHT: "O_XOXOXX_",
        PLAY_X_BOTTOM_RIGHT: "O__OXOXXX"
      }
    },
    O__OX_XXO: {
      on: {
        PLAY_X_TOP_CENTER: "OX_OX_XXO",
        PLAY_X_TOP_RIGHT: "O_XOX_XXO",
        PLAY_X_MIDDLE_RIGHT: "O__OXXXXO"
      }
    },
    O__OX_XX_: {
      on: {
        PLAY_O_TOP_CENTER: "OO_OX_XX_",
        PLAY_O_TOP_RIGHT: "O_OOX_XX_",
        PLAY_O_MIDDLE_RIGHT: "O__OXOXX_",
        PLAY_O_BOTTOM_RIGHT: "O__OX_XXO"
      }
    },
    O__OXOX_X: {
      on: {
        PLAY_X_TOP_CENTER: "OX_OXOX_X",
        PLAY_X_TOP_RIGHT: "O_XOXOX_X",
        PLAY_X_BOTTOM_CENTER: "O__OXOXXX"
      }
    },
    O__OX_XOX: {
      on: {
        PLAY_X_TOP_CENTER: "OX_OX_XOX",
        PLAY_X_TOP_RIGHT: "O_XOX_XOX",
        PLAY_X_MIDDLE_RIGHT: "O__OXXXOX"
      }
    },
    O__OX_X_X: {
      on: {
        PLAY_O_TOP_CENTER: "OO_OX_X_X",
        PLAY_O_TOP_RIGHT: "O_OOX_X_X",
        PLAY_O_MIDDLE_RIGHT: "O__OXOX_X",
        PLAY_O_BOTTOM_CENTER: "O__OX_XOX"
      }
    },
    O__OX_X__: {
      on: {
        PLAY_X_TOP_CENTER: "OX_OX_X__",
        PLAY_X_TOP_RIGHT: "O_XOX_X__",
        PLAY_X_MIDDLE_RIGHT: "O__OXXX__",
        PLAY_X_BOTTOM_CENTER: "O__OX_XX_",
        PLAY_X_BOTTOM_RIGHT: "O__OX_X_X"
      }
    },
    O___XOXXO: {
      on: {
        PLAY_X_TOP_CENTER: "OX__XOXXO",
        PLAY_X_TOP_RIGHT: "O_X_XOXXO",
        PLAY_X_MIDDLE_LEFT: "O__XXOXXO"
      }
    },
    O___XOXX_: {
      on: {
        PLAY_O_TOP_CENTER: "OO__XOXX_",
        PLAY_O_TOP_RIGHT: "O_O_XOXX_",
        PLAY_O_MIDDLE_LEFT: "O__OXOXX_",
        PLAY_O_BOTTOM_RIGHT: "O___XOXXO"
      }
    },
    O___XOXOX: {
      on: {
        PLAY_X_TOP_CENTER: "OX__XOXOX",
        PLAY_X_TOP_RIGHT: "O_X_XOXOX",
        PLAY_X_MIDDLE_LEFT: "O__XXOXOX"
      }
    },
    O___XOX_X: {
      on: {
        PLAY_O_TOP_CENTER: "OO__XOX_X",
        PLAY_O_TOP_RIGHT: "O_O_XOX_X",
        PLAY_O_MIDDLE_LEFT: "O__OXOX_X",
        PLAY_O_BOTTOM_CENTER: "O___XOXOX"
      }
    },
    O___XOX__: {
      on: {
        PLAY_X_TOP_CENTER: "OX__XOX__",
        PLAY_X_TOP_RIGHT: "O_X_XOX__",
        PLAY_X_MIDDLE_LEFT: "O__XXOX__",
        PLAY_X_BOTTOM_CENTER: "O___XOXX_",
        PLAY_X_BOTTOM_RIGHT: "O___XOX_X"
      }
    },
    O___X_XOX: {
      on: {
        PLAY_O_TOP_CENTER: "OO__X_XOX",
        PLAY_O_TOP_RIGHT: "O_O_X_XOX",
        PLAY_O_MIDDLE_LEFT: "O__OX_XOX",
        PLAY_O_MIDDLE_RIGHT: "O___XOXOX"
      }
    },
    O___X_XO_: {
      on: {
        PLAY_X_TOP_CENTER: "OX__X_XO_",
        PLAY_X_TOP_RIGHT: "O_X_X_XO_",
        PLAY_X_MIDDLE_LEFT: "O__XX_XO_",
        PLAY_X_MIDDLE_RIGHT: "O___XXXO_",
        PLAY_X_BOTTOM_RIGHT: "O___X_XOX"
      }
    },
    O___X_XXO: {
      on: {
        PLAY_O_TOP_CENTER: "OO__X_XXO",
        PLAY_O_TOP_RIGHT: "O_O_X_XXO",
        PLAY_O_MIDDLE_LEFT: "O__OX_XXO",
        PLAY_O_MIDDLE_RIGHT: "O___XOXXO"
      }
    },
    O___X_X_O: {
      on: {
        PLAY_X_TOP_CENTER: "OX__X_X_O",
        PLAY_X_TOP_RIGHT: "O_X_X_X_O",
        PLAY_X_MIDDLE_LEFT: "O__XX_X_O",
        PLAY_X_MIDDLE_RIGHT: "O___XXX_O",
        PLAY_X_BOTTOM_CENTER: "O___X_XXO"
      }
    },
    O___X_X__: {
      on: {
        PLAY_O_TOP_CENTER: "OO__X_X__",
        PLAY_O_TOP_RIGHT: "O_O_X_X__",
        PLAY_O_MIDDLE_LEFT: "O__OX_X__",
        PLAY_O_MIDDLE_RIGHT: "O___XOX__",
        PLAY_O_BOTTOM_CENTER: "O___X_XO_",
        PLAY_O_BOTTOM_RIGHT: "O___X_X_O"
      }
    },
    OOO_X__XX: { on: { "": "O_WINS" } },
    OO_OX__XX: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXOX__XX",
        PLAY_X_MIDDLE_RIGHT: "OO_OXX_XX",
        PLAY_X_BOTTOM_LEFT: "OO_OX_XXX"
      }
    },
    OO__XO_XX: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX_XO_XX",
        PLAY_X_MIDDLE_LEFT: "OO_XXO_XX",
        PLAY_X_BOTTOM_LEFT: "OO__XOXXX"
      }
    },
    OO__X_OXX: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX_X_OXX",
        PLAY_X_MIDDLE_LEFT: "OO_XX_OXX",
        PLAY_X_MIDDLE_RIGHT: "OO__XXOXX"
      }
    },
    OO__X__XX: {
      on: {
        PLAY_O_TOP_RIGHT: "OOO_X__XX",
        PLAY_O_MIDDLE_LEFT: "OO_OX__XX",
        PLAY_O_MIDDLE_RIGHT: "OO__XO_XX",
        PLAY_O_BOTTOM_LEFT: "OO__X_OXX"
      }
    },
    OO__X__X_: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX_X__X_",
        PLAY_X_MIDDLE_LEFT: "OO_XX__X_",
        PLAY_X_MIDDLE_RIGHT: "OO__XX_X_",
        PLAY_X_BOTTOM_LEFT: "OO__X_XX_",
        PLAY_X_BOTTOM_RIGHT: "OO__X__XX"
      }
    },
    O_OOX__XX: {
      on: {
        PLAY_X_TOP_CENTER: "OXOOX__XX",
        PLAY_X_MIDDLE_RIGHT: "O_OOXX_XX",
        PLAY_X_BOTTOM_LEFT: "O_OOX_XXX"
      }
    },
    O_O_XO_XX: {
      on: {
        PLAY_X_TOP_CENTER: "OXO_XO_XX",
        PLAY_X_MIDDLE_LEFT: "O_OXXO_XX",
        PLAY_X_BOTTOM_LEFT: "O_O_XOXXX"
      }
    },
    O_O_X_OXX: {
      on: {
        PLAY_X_TOP_CENTER: "OXO_X_OXX",
        PLAY_X_MIDDLE_LEFT: "O_OXX_OXX",
        PLAY_X_MIDDLE_RIGHT: "O_O_XXOXX"
      }
    },
    O_O_X__XX: {
      on: {
        PLAY_O_TOP_CENTER: "OOO_X__XX",
        PLAY_O_MIDDLE_LEFT: "O_OOX__XX",
        PLAY_O_MIDDLE_RIGHT: "O_O_XO_XX",
        PLAY_O_BOTTOM_LEFT: "O_O_X_OXX"
      }
    },
    O_O_X__X_: {
      on: {
        PLAY_X_TOP_CENTER: "OXO_X__X_",
        PLAY_X_MIDDLE_LEFT: "O_OXX__X_",
        PLAY_X_MIDDLE_RIGHT: "O_O_XX_X_",
        PLAY_X_BOTTOM_LEFT: "O_O_X_XX_",
        PLAY_X_BOTTOM_RIGHT: "O_O_X__XX"
      }
    },
    O__OXO_XX: {
      on: {
        PLAY_X_TOP_CENTER: "OX_OXO_XX",
        PLAY_X_TOP_RIGHT: "O_XOXO_XX",
        PLAY_X_BOTTOM_LEFT: "O__OXOXXX"
      }
    },
    O__OX_OXX: { on: { "": "O_WINS" } },
    O__OX__XX: {
      on: {
        PLAY_O_TOP_CENTER: "OO_OX__XX",
        PLAY_O_TOP_RIGHT: "O_OOX__XX",
        PLAY_O_MIDDLE_RIGHT: "O__OXO_XX",
        PLAY_O_BOTTOM_LEFT: "O__OX_OXX"
      }
    },
    O__OX__X_: {
      on: {
        PLAY_X_TOP_CENTER: "OX_OX__X_",
        PLAY_X_TOP_RIGHT: "O_XOX__X_",
        PLAY_X_MIDDLE_RIGHT: "O__OXX_X_",
        PLAY_X_BOTTOM_LEFT: "O__OX_XX_",
        PLAY_X_BOTTOM_RIGHT: "O__OX__XX"
      }
    },
    O___XOOXX: {
      on: {
        PLAY_X_TOP_CENTER: "OX__XOOXX",
        PLAY_X_TOP_RIGHT: "O_X_XOOXX",
        PLAY_X_MIDDLE_LEFT: "O__XXOOXX"
      }
    },
    O___XO_XX: {
      on: {
        PLAY_O_TOP_CENTER: "OO__XO_XX",
        PLAY_O_TOP_RIGHT: "O_O_XO_XX",
        PLAY_O_MIDDLE_LEFT: "O__OXO_XX",
        PLAY_O_BOTTOM_LEFT: "O___XOOXX"
      }
    },
    O___XO_X_: {
      on: {
        PLAY_X_TOP_CENTER: "OX__XO_X_",
        PLAY_X_TOP_RIGHT: "O_X_XO_X_",
        PLAY_X_MIDDLE_LEFT: "O__XXO_X_",
        PLAY_X_BOTTOM_LEFT: "O___XOXX_",
        PLAY_X_BOTTOM_RIGHT: "O___XO_XX"
      }
    },
    O___X_OXX: {
      on: {
        PLAY_O_TOP_CENTER: "OO__X_OXX",
        PLAY_O_TOP_RIGHT: "O_O_X_OXX",
        PLAY_O_MIDDLE_LEFT: "O__OX_OXX",
        PLAY_O_MIDDLE_RIGHT: "O___XOOXX"
      }
    },
    O___X_OX_: {
      on: {
        PLAY_X_TOP_CENTER: "OX__X_OX_",
        PLAY_X_TOP_RIGHT: "O_X_X_OX_",
        PLAY_X_MIDDLE_LEFT: "O__XX_OX_",
        PLAY_X_MIDDLE_RIGHT: "O___XXOX_",
        PLAY_X_BOTTOM_RIGHT: "O___X_OXX"
      }
    },
    O___X__XO: {
      on: {
        PLAY_X_TOP_CENTER: "OX__X__XO",
        PLAY_X_TOP_RIGHT: "O_X_X__XO",
        PLAY_X_MIDDLE_LEFT: "O__XX__XO",
        PLAY_X_MIDDLE_RIGHT: "O___XX_XO",
        PLAY_X_BOTTOM_LEFT: "O___X_XXO"
      }
    },
    O___X__X_: {
      on: {
        PLAY_O_TOP_CENTER: "OO__X__X_",
        PLAY_O_TOP_RIGHT: "O_O_X__X_",
        PLAY_O_MIDDLE_LEFT: "O__OX__X_",
        PLAY_O_MIDDLE_RIGHT: "O___XO_X_",
        PLAY_O_BOTTOM_LEFT: "O___X_OX_",
        PLAY_O_BOTTOM_RIGHT: "O___X__XO"
      }
    },
    OO__X___X: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX_X___X",
        PLAY_X_MIDDLE_LEFT: "OO_XX___X",
        PLAY_X_MIDDLE_RIGHT: "OO__XX__X",
        PLAY_X_BOTTOM_LEFT: "OO__X_X_X",
        PLAY_X_BOTTOM_CENTER: "OO__X__XX"
      }
    },
    O_O_X___X: {
      on: {
        PLAY_X_TOP_CENTER: "OXO_X___X",
        PLAY_X_MIDDLE_LEFT: "O_OXX___X",
        PLAY_X_MIDDLE_RIGHT: "O_O_XX__X",
        PLAY_X_BOTTOM_LEFT: "O_O_X_X_X",
        PLAY_X_BOTTOM_CENTER: "O_O_X__XX"
      }
    },
    O__OX___X: {
      on: {
        PLAY_X_TOP_CENTER: "OX_OX___X",
        PLAY_X_TOP_RIGHT: "O_XOX___X",
        PLAY_X_MIDDLE_RIGHT: "O__OXX__X",
        PLAY_X_BOTTOM_LEFT: "O__OX_X_X",
        PLAY_X_BOTTOM_CENTER: "O__OX__XX"
      }
    },
    O___XO__X: {
      on: {
        PLAY_X_TOP_CENTER: "OX__XO__X",
        PLAY_X_TOP_RIGHT: "O_X_XO__X",
        PLAY_X_MIDDLE_LEFT: "O__XXO__X",
        PLAY_X_BOTTOM_LEFT: "O___XOX_X",
        PLAY_X_BOTTOM_CENTER: "O___XO_XX"
      }
    },
    O___X_O_X: {
      on: {
        PLAY_X_TOP_CENTER: "OX__X_O_X",
        PLAY_X_TOP_RIGHT: "O_X_X_O_X",
        PLAY_X_MIDDLE_LEFT: "O__XX_O_X",
        PLAY_X_MIDDLE_RIGHT: "O___XXO_X",
        PLAY_X_BOTTOM_CENTER: "O___X_OXX"
      }
    },
    O___X__OX: {
      on: {
        PLAY_X_TOP_CENTER: "OX__X__OX",
        PLAY_X_TOP_RIGHT: "O_X_X__OX",
        PLAY_X_MIDDLE_LEFT: "O__XX__OX",
        PLAY_X_MIDDLE_RIGHT: "O___XX_OX",
        PLAY_X_BOTTOM_LEFT: "O___X_XOX"
      }
    },
    O___X___X: {
      on: {
        PLAY_O_TOP_CENTER: "OO__X___X",
        PLAY_O_TOP_RIGHT: "O_O_X___X",
        PLAY_O_MIDDLE_LEFT: "O__OX___X",
        PLAY_O_MIDDLE_RIGHT: "O___XO__X",
        PLAY_O_BOTTOM_LEFT: "O___X_O_X",
        PLAY_O_BOTTOM_CENTER: "O___X__OX"
      }
    },
    O___X____: {
      on: {
        PLAY_X_TOP_CENTER: "OX__X____",
        PLAY_X_TOP_RIGHT: "O_X_X____",
        PLAY_X_MIDDLE_LEFT: "O__XX____",
        PLAY_X_MIDDLE_RIGHT: "O___XX___",
        PLAY_X_BOTTOM_LEFT: "O___X_X__",
        PLAY_X_BOTTOM_CENTER: "O___X__X_",
        PLAY_X_BOTTOM_RIGHT: "O___X___X"
      }
    },
    _OOOXXXXO: { on: { PLAY_X_TOP_LEFT: "XOOOXXXXO" } },
    _OOOXXXX_: {
      on: { PLAY_O_TOP_LEFT: "OOOOXXXX_", PLAY_O_BOTTOM_RIGHT: "_OOOXXXXO" }
    },
    _OOOXXXOX: { on: { PLAY_X_TOP_LEFT: "XOOOXXXOX" } },
    _OOOXXX_X: {
      on: { PLAY_O_TOP_LEFT: "OOOOXXX_X", PLAY_O_BOTTOM_CENTER: "_OOOXXXOX" }
    },
    _OOOXXX__: {
      on: {
        PLAY_X_TOP_LEFT: "XOOOXXX__",
        PLAY_X_BOTTOM_CENTER: "_OOOXXXX_",
        PLAY_X_BOTTOM_RIGHT: "_OOOXXX_X"
      }
    },
    _OO_XXXOX: {
      on: { PLAY_O_TOP_LEFT: "OOO_XXXOX", PLAY_O_MIDDLE_LEFT: "_OOOXXXOX" }
    },
    _OO_XXXO_: {
      on: {
        PLAY_X_TOP_LEFT: "XOO_XXXO_",
        PLAY_X_MIDDLE_LEFT: "_OOXXXXO_",
        PLAY_X_BOTTOM_RIGHT: "_OO_XXXOX"
      }
    },
    _OO_XXXXO: {
      on: { PLAY_O_TOP_LEFT: "OOO_XXXXO", PLAY_O_MIDDLE_LEFT: "_OOOXXXXO" }
    },
    _OO_XXX_O: {
      on: {
        PLAY_X_TOP_LEFT: "XOO_XXX_O",
        PLAY_X_MIDDLE_LEFT: "_OOXXXX_O",
        PLAY_X_BOTTOM_CENTER: "_OO_XXXXO"
      }
    },
    _OO_XXX__: {
      on: {
        PLAY_O_TOP_LEFT: "OOO_XXX__",
        PLAY_O_MIDDLE_LEFT: "_OOOXXX__",
        PLAY_O_BOTTOM_CENTER: "_OO_XXXO_",
        PLAY_O_BOTTOM_RIGHT: "_OO_XXX_O"
      }
    },
    _OOOXXOXX: { on: { PLAY_X_TOP_LEFT: "XOOOXXOXX" } },
    _OOOXX_XX: {
      on: { PLAY_O_TOP_LEFT: "OOOOXX_XX", PLAY_O_BOTTOM_LEFT: "_OOOXXOXX" }
    },
    _OOOXX_X_: {
      on: {
        PLAY_X_TOP_LEFT: "XOOOXX_X_",
        PLAY_X_BOTTOM_LEFT: "_OOOXXXX_",
        PLAY_X_BOTTOM_RIGHT: "_OOOXX_XX"
      }
    },
    _OO_XXOXX: {
      on: { PLAY_O_TOP_LEFT: "OOO_XXOXX", PLAY_O_MIDDLE_LEFT: "_OOOXXOXX" }
    },
    _OO_XXOX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOO_XXOX_",
        PLAY_X_MIDDLE_LEFT: "_OOXXXOX_",
        PLAY_X_BOTTOM_RIGHT: "_OO_XXOXX"
      }
    },
    _OO_XX_XO: {
      on: {
        PLAY_X_TOP_LEFT: "XOO_XX_XO",
        PLAY_X_MIDDLE_LEFT: "_OOXXX_XO",
        PLAY_X_BOTTOM_LEFT: "_OO_XXXXO"
      }
    },
    _OO_XX_X_: {
      on: {
        PLAY_O_TOP_LEFT: "OOO_XX_X_",
        PLAY_O_MIDDLE_LEFT: "_OOOXX_X_",
        PLAY_O_BOTTOM_LEFT: "_OO_XXOX_",
        PLAY_O_BOTTOM_RIGHT: "_OO_XX_XO"
      }
    },
    _OOOXX__X: {
      on: {
        PLAY_X_TOP_LEFT: "XOOOXX__X",
        PLAY_X_BOTTOM_LEFT: "_OOOXXX_X",
        PLAY_X_BOTTOM_CENTER: "_OOOXX_XX"
      }
    },
    _OO_XXO_X: {
      on: {
        PLAY_X_TOP_LEFT: "XOO_XXO_X",
        PLAY_X_MIDDLE_LEFT: "_OOXXXO_X",
        PLAY_X_BOTTOM_CENTER: "_OO_XXOXX"
      }
    },
    _OO_XX_OX: {
      on: {
        PLAY_X_TOP_LEFT: "XOO_XX_OX",
        PLAY_X_MIDDLE_LEFT: "_OOXXX_OX",
        PLAY_X_BOTTOM_LEFT: "_OO_XXXOX"
      }
    },
    _OO_XX__X: {
      on: {
        PLAY_O_TOP_LEFT: "OOO_XX__X",
        PLAY_O_MIDDLE_LEFT: "_OOOXX__X",
        PLAY_O_BOTTOM_LEFT: "_OO_XXO_X",
        PLAY_O_BOTTOM_CENTER: "_OO_XX_OX"
      }
    },
    _OO_XX___: {
      on: {
        PLAY_X_TOP_LEFT: "XOO_XX___",
        PLAY_X_MIDDLE_LEFT: "_OOXXX___",
        PLAY_X_BOTTOM_LEFT: "_OO_XXX__",
        PLAY_X_BOTTOM_CENTER: "_OO_XX_X_",
        PLAY_X_BOTTOM_RIGHT: "_OO_XX__X"
      }
    },
    _O_OXXXOX: {
      on: { PLAY_O_TOP_LEFT: "OO_OXXXOX", PLAY_O_TOP_RIGHT: "_OOOXXXOX" }
    },
    _O_OXXXO_: {
      on: {
        PLAY_X_TOP_LEFT: "XO_OXXXO_",
        PLAY_X_TOP_RIGHT: "_OXOXXXO_",
        PLAY_X_BOTTOM_RIGHT: "_O_OXXXOX"
      }
    },
    _O_OXXXXO: {
      on: { PLAY_O_TOP_LEFT: "OO_OXXXXO", PLAY_O_TOP_RIGHT: "_OOOXXXXO" }
    },
    _O_OXXX_O: {
      on: {
        PLAY_X_TOP_LEFT: "XO_OXXX_O",
        PLAY_X_TOP_RIGHT: "_OXOXXX_O",
        PLAY_X_BOTTOM_CENTER: "_O_OXXXXO"
      }
    },
    _O_OXXX__: {
      on: {
        PLAY_O_TOP_LEFT: "OO_OXXX__",
        PLAY_O_TOP_RIGHT: "_OOOXXX__",
        PLAY_O_BOTTOM_CENTER: "_O_OXXXO_",
        PLAY_O_BOTTOM_RIGHT: "_O_OXXX_O"
      }
    },
    _O_OXXOXX: {
      on: { PLAY_O_TOP_LEFT: "OO_OXXOXX", PLAY_O_TOP_RIGHT: "_OOOXXOXX" }
    },
    _O_OXXOX_: {
      on: {
        PLAY_X_TOP_LEFT: "XO_OXXOX_",
        PLAY_X_TOP_RIGHT: "_OXOXXOX_",
        PLAY_X_BOTTOM_RIGHT: "_O_OXXOXX"
      }
    },
    _O_OXX_XO: {
      on: {
        PLAY_X_TOP_LEFT: "XO_OXX_XO",
        PLAY_X_TOP_RIGHT: "_OXOXX_XO",
        PLAY_X_BOTTOM_LEFT: "_O_OXXXXO"
      }
    },
    _O_OXX_X_: {
      on: {
        PLAY_O_TOP_LEFT: "OO_OXX_X_",
        PLAY_O_TOP_RIGHT: "_OOOXX_X_",
        PLAY_O_BOTTOM_LEFT: "_O_OXXOX_",
        PLAY_O_BOTTOM_RIGHT: "_O_OXX_XO"
      }
    },
    _O_OXXO_X: {
      on: {
        PLAY_X_TOP_LEFT: "XO_OXXO_X",
        PLAY_X_TOP_RIGHT: "_OXOXXO_X",
        PLAY_X_BOTTOM_CENTER: "_O_OXXOXX"
      }
    },
    _O_OXX_OX: {
      on: {
        PLAY_X_TOP_LEFT: "XO_OXX_OX",
        PLAY_X_TOP_RIGHT: "_OXOXX_OX",
        PLAY_X_BOTTOM_LEFT: "_O_OXXXOX"
      }
    },
    _O_OXX__X: {
      on: {
        PLAY_O_TOP_LEFT: "OO_OXX__X",
        PLAY_O_TOP_RIGHT: "_OOOXX__X",
        PLAY_O_BOTTOM_LEFT: "_O_OXXO_X",
        PLAY_O_BOTTOM_CENTER: "_O_OXX_OX"
      }
    },
    _O_OXX___: {
      on: {
        PLAY_X_TOP_LEFT: "XO_OXX___",
        PLAY_X_TOP_RIGHT: "_OXOXX___",
        PLAY_X_BOTTOM_LEFT: "_O_OXXX__",
        PLAY_X_BOTTOM_CENTER: "_O_OXX_X_",
        PLAY_X_BOTTOM_RIGHT: "_O_OXX__X"
      }
    },
    _O__XXOXO: {
      on: {
        PLAY_X_TOP_LEFT: "XO__XXOXO",
        PLAY_X_TOP_RIGHT: "_OX_XXOXO",
        PLAY_X_MIDDLE_LEFT: "_O_XXXOXO"
      }
    },
    _O__XXOX_: {
      on: {
        PLAY_O_TOP_LEFT: "OO__XXOX_",
        PLAY_O_TOP_RIGHT: "_OO_XXOX_",
        PLAY_O_MIDDLE_LEFT: "_O_OXXOX_",
        PLAY_O_BOTTOM_RIGHT: "_O__XXOXO"
      }
    },
    _O__XXOOX: {
      on: {
        PLAY_X_TOP_LEFT: "XO__XXOOX",
        PLAY_X_TOP_RIGHT: "_OX_XXOOX",
        PLAY_X_MIDDLE_LEFT: "_O_XXXOOX"
      }
    },
    _O__XXO_X: {
      on: {
        PLAY_O_TOP_LEFT: "OO__XXO_X",
        PLAY_O_TOP_RIGHT: "_OO_XXO_X",
        PLAY_O_MIDDLE_LEFT: "_O_OXXO_X",
        PLAY_O_BOTTOM_CENTER: "_O__XXOOX"
      }
    },
    _O__XXO__: {
      on: {
        PLAY_X_TOP_LEFT: "XO__XXO__",
        PLAY_X_TOP_RIGHT: "_OX_XXO__",
        PLAY_X_MIDDLE_LEFT: "_O_XXXO__",
        PLAY_X_BOTTOM_CENTER: "_O__XXOX_",
        PLAY_X_BOTTOM_RIGHT: "_O__XXO_X"
      }
    },
    _O__XXXOO: {
      on: {
        PLAY_X_TOP_LEFT: "XO__XXXOO",
        PLAY_X_TOP_RIGHT: "_OX_XXXOO",
        PLAY_X_MIDDLE_LEFT: "_O_XXXXOO"
      }
    },
    _O__XXXO_: {
      on: {
        PLAY_O_TOP_LEFT: "OO__XXXO_",
        PLAY_O_TOP_RIGHT: "_OO_XXXO_",
        PLAY_O_MIDDLE_LEFT: "_O_OXXXO_",
        PLAY_O_BOTTOM_RIGHT: "_O__XXXOO"
      }
    },
    _O__XX_OX: {
      on: {
        PLAY_O_TOP_LEFT: "OO__XX_OX",
        PLAY_O_TOP_RIGHT: "_OO_XX_OX",
        PLAY_O_MIDDLE_LEFT: "_O_OXX_OX",
        PLAY_O_BOTTOM_LEFT: "_O__XXOOX"
      }
    },
    _O__XX_O_: {
      on: {
        PLAY_X_TOP_LEFT: "XO__XX_O_",
        PLAY_X_TOP_RIGHT: "_OX_XX_O_",
        PLAY_X_MIDDLE_LEFT: "_O_XXX_O_",
        PLAY_X_BOTTOM_LEFT: "_O__XXXO_",
        PLAY_X_BOTTOM_RIGHT: "_O__XX_OX"
      }
    },
    _O__XXX_O: {
      on: {
        PLAY_O_TOP_LEFT: "OO__XXX_O",
        PLAY_O_TOP_RIGHT: "_OO_XXX_O",
        PLAY_O_MIDDLE_LEFT: "_O_OXXX_O",
        PLAY_O_BOTTOM_CENTER: "_O__XXXOO"
      }
    },
    _O__XX_XO: {
      on: {
        PLAY_O_TOP_LEFT: "OO__XX_XO",
        PLAY_O_TOP_RIGHT: "_OO_XX_XO",
        PLAY_O_MIDDLE_LEFT: "_O_OXX_XO",
        PLAY_O_BOTTOM_LEFT: "_O__XXOXO"
      }
    },
    _O__XX__O: {
      on: {
        PLAY_X_TOP_LEFT: "XO__XX__O",
        PLAY_X_TOP_RIGHT: "_OX_XX__O",
        PLAY_X_MIDDLE_LEFT: "_O_XXX__O",
        PLAY_X_BOTTOM_LEFT: "_O__XXX_O",
        PLAY_X_BOTTOM_CENTER: "_O__XX_XO"
      }
    },
    _O__XX___: {
      on: {
        PLAY_O_TOP_LEFT: "OO__XX___",
        PLAY_O_TOP_RIGHT: "_OO_XX___",
        PLAY_O_MIDDLE_LEFT: "_O_OXX___",
        PLAY_O_BOTTOM_LEFT: "_O__XXO__",
        PLAY_O_BOTTOM_CENTER: "_O__XX_O_",
        PLAY_O_BOTTOM_RIGHT: "_O__XX__O"
      }
    },
    _OOOX_XXX: { on: { "": "X_WINS" } },
    _OOOX_XX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOOOX_XX_",
        PLAY_X_MIDDLE_RIGHT: "_OOOXXXX_",
        PLAY_X_BOTTOM_RIGHT: "_OOOX_XXX"
      }
    },
    _OO_XOXXX: { on: { "": "X_WINS" } },
    _OO_XOXX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOO_XOXX_",
        PLAY_X_MIDDLE_LEFT: "_OOXXOXX_",
        PLAY_X_BOTTOM_RIGHT: "_OO_XOXXX"
      }
    },
    _OO_X_XXO: {
      on: {
        PLAY_X_TOP_LEFT: "XOO_X_XXO",
        PLAY_X_MIDDLE_LEFT: "_OOXX_XXO",
        PLAY_X_MIDDLE_RIGHT: "_OO_XXXXO"
      }
    },
    _OO_X_XX_: {
      on: {
        PLAY_O_TOP_LEFT: "OOO_X_XX_",
        PLAY_O_MIDDLE_LEFT: "_OOOX_XX_",
        PLAY_O_MIDDLE_RIGHT: "_OO_XOXX_",
        PLAY_O_BOTTOM_RIGHT: "_OO_X_XXO"
      }
    },
    _OOOX_X_X: {
      on: {
        PLAY_X_TOP_LEFT: "XOOOX_X_X",
        PLAY_X_MIDDLE_RIGHT: "_OOOXXX_X",
        PLAY_X_BOTTOM_CENTER: "_OOOX_XXX"
      }
    },
    _OO_XOX_X: {
      on: {
        PLAY_X_TOP_LEFT: "XOO_XOX_X",
        PLAY_X_MIDDLE_LEFT: "_OOXXOX_X",
        PLAY_X_BOTTOM_CENTER: "_OO_XOXXX"
      }
    },
    _OO_X_XOX: {
      on: {
        PLAY_X_TOP_LEFT: "XOO_X_XOX",
        PLAY_X_MIDDLE_LEFT: "_OOXX_XOX",
        PLAY_X_MIDDLE_RIGHT: "_OO_XXXOX"
      }
    },
    _OO_X_X_X: {
      on: {
        PLAY_O_TOP_LEFT: "OOO_X_X_X",
        PLAY_O_MIDDLE_LEFT: "_OOOX_X_X",
        PLAY_O_MIDDLE_RIGHT: "_OO_XOX_X",
        PLAY_O_BOTTOM_CENTER: "_OO_X_XOX"
      }
    },
    _OO_X_X__: {
      on: {
        PLAY_X_TOP_LEFT: "XOO_X_X__",
        PLAY_X_MIDDLE_LEFT: "_OOXX_X__",
        PLAY_X_MIDDLE_RIGHT: "_OO_XXX__",
        PLAY_X_BOTTOM_CENTER: "_OO_X_XX_",
        PLAY_X_BOTTOM_RIGHT: "_OO_X_X_X"
      }
    },
    _O_OXOXXX: { on: { "": "X_WINS" } },
    _O_OXOXX_: {
      on: {
        PLAY_X_TOP_LEFT: "XO_OXOXX_",
        PLAY_X_TOP_RIGHT: "_OXOXOXX_",
        PLAY_X_BOTTOM_RIGHT: "_O_OXOXXX"
      }
    },
    _O_OX_XXO: {
      on: {
        PLAY_X_TOP_LEFT: "XO_OX_XXO",
        PLAY_X_TOP_RIGHT: "_OXOX_XXO",
        PLAY_X_MIDDLE_RIGHT: "_O_OXXXXO"
      }
    },
    _O_OX_XX_: {
      on: {
        PLAY_O_TOP_LEFT: "OO_OX_XX_",
        PLAY_O_TOP_RIGHT: "_OOOX_XX_",
        PLAY_O_MIDDLE_RIGHT: "_O_OXOXX_",
        PLAY_O_BOTTOM_RIGHT: "_O_OX_XXO"
      }
    },
    _O_OXOX_X: {
      on: {
        PLAY_X_TOP_LEFT: "XO_OXOX_X",
        PLAY_X_TOP_RIGHT: "_OXOXOX_X",
        PLAY_X_BOTTOM_CENTER: "_O_OXOXXX"
      }
    },
    _O_OX_XOX: {
      on: {
        PLAY_X_TOP_LEFT: "XO_OX_XOX",
        PLAY_X_TOP_RIGHT: "_OXOX_XOX",
        PLAY_X_MIDDLE_RIGHT: "_O_OXXXOX"
      }
    },
    _O_OX_X_X: {
      on: {
        PLAY_O_TOP_LEFT: "OO_OX_X_X",
        PLAY_O_TOP_RIGHT: "_OOOX_X_X",
        PLAY_O_MIDDLE_RIGHT: "_O_OXOX_X",
        PLAY_O_BOTTOM_CENTER: "_O_OX_XOX"
      }
    },
    _O_OX_X__: {
      on: {
        PLAY_X_TOP_LEFT: "XO_OX_X__",
        PLAY_X_TOP_RIGHT: "_OXOX_X__",
        PLAY_X_MIDDLE_RIGHT: "_O_OXXX__",
        PLAY_X_BOTTOM_CENTER: "_O_OX_XX_",
        PLAY_X_BOTTOM_RIGHT: "_O_OX_X_X"
      }
    },
    _O__XOXXO: {
      on: {
        PLAY_X_TOP_LEFT: "XO__XOXXO",
        PLAY_X_TOP_RIGHT: "_OX_XOXXO",
        PLAY_X_MIDDLE_LEFT: "_O_XXOXXO"
      }
    },
    _O__XOXX_: {
      on: {
        PLAY_O_TOP_LEFT: "OO__XOXX_",
        PLAY_O_TOP_RIGHT: "_OO_XOXX_",
        PLAY_O_MIDDLE_LEFT: "_O_OXOXX_",
        PLAY_O_BOTTOM_RIGHT: "_O__XOXXO"
      }
    },
    _O__XOXOX: {
      on: {
        PLAY_X_TOP_LEFT: "XO__XOXOX",
        PLAY_X_TOP_RIGHT: "_OX_XOXOX",
        PLAY_X_MIDDLE_LEFT: "_O_XXOXOX"
      }
    },
    _O__XOX_X: {
      on: {
        PLAY_O_TOP_LEFT: "OO__XOX_X",
        PLAY_O_TOP_RIGHT: "_OO_XOX_X",
        PLAY_O_MIDDLE_LEFT: "_O_OXOX_X",
        PLAY_O_BOTTOM_CENTER: "_O__XOXOX"
      }
    },
    _O__XOX__: {
      on: {
        PLAY_X_TOP_LEFT: "XO__XOX__",
        PLAY_X_TOP_RIGHT: "_OX_XOX__",
        PLAY_X_MIDDLE_LEFT: "_O_XXOX__",
        PLAY_X_BOTTOM_CENTER: "_O__XOXX_",
        PLAY_X_BOTTOM_RIGHT: "_O__XOX_X"
      }
    },
    _O__X_XOX: {
      on: {
        PLAY_O_TOP_LEFT: "OO__X_XOX",
        PLAY_O_TOP_RIGHT: "_OO_X_XOX",
        PLAY_O_MIDDLE_LEFT: "_O_OX_XOX",
        PLAY_O_MIDDLE_RIGHT: "_O__XOXOX"
      }
    },
    _O__X_XO_: {
      on: {
        PLAY_X_TOP_LEFT: "XO__X_XO_",
        PLAY_X_TOP_RIGHT: "_OX_X_XO_",
        PLAY_X_MIDDLE_LEFT: "_O_XX_XO_",
        PLAY_X_MIDDLE_RIGHT: "_O__XXXO_",
        PLAY_X_BOTTOM_RIGHT: "_O__X_XOX"
      }
    },
    _O__X_XXO: {
      on: {
        PLAY_O_TOP_LEFT: "OO__X_XXO",
        PLAY_O_TOP_RIGHT: "_OO_X_XXO",
        PLAY_O_MIDDLE_LEFT: "_O_OX_XXO",
        PLAY_O_MIDDLE_RIGHT: "_O__XOXXO"
      }
    },
    _O__X_X_O: {
      on: {
        PLAY_X_TOP_LEFT: "XO__X_X_O",
        PLAY_X_TOP_RIGHT: "_OX_X_X_O",
        PLAY_X_MIDDLE_LEFT: "_O_XX_X_O",
        PLAY_X_MIDDLE_RIGHT: "_O__XXX_O",
        PLAY_X_BOTTOM_CENTER: "_O__X_XXO"
      }
    },
    _O__X_X__: {
      on: {
        PLAY_O_TOP_LEFT: "OO__X_X__",
        PLAY_O_TOP_RIGHT: "_OO_X_X__",
        PLAY_O_MIDDLE_LEFT: "_O_OX_X__",
        PLAY_O_MIDDLE_RIGHT: "_O__XOX__",
        PLAY_O_BOTTOM_CENTER: "_O__X_XO_",
        PLAY_O_BOTTOM_RIGHT: "_O__X_X_O"
      }
    },
    _OOOX__XX: {
      on: {
        PLAY_X_TOP_LEFT: "XOOOX__XX",
        PLAY_X_MIDDLE_RIGHT: "_OOOXX_XX",
        PLAY_X_BOTTOM_LEFT: "_OOOX_XXX"
      }
    },
    _OO_XO_XX: {
      on: {
        PLAY_X_TOP_LEFT: "XOO_XO_XX",
        PLAY_X_MIDDLE_LEFT: "_OOXXO_XX",
        PLAY_X_BOTTOM_LEFT: "_OO_XOXXX"
      }
    },
    _OO_X_OXX: {
      on: {
        PLAY_X_TOP_LEFT: "XOO_X_OXX",
        PLAY_X_MIDDLE_LEFT: "_OOXX_OXX",
        PLAY_X_MIDDLE_RIGHT: "_OO_XXOXX"
      }
    },
    _OO_X__XX: {
      on: {
        PLAY_O_TOP_LEFT: "OOO_X__XX",
        PLAY_O_MIDDLE_LEFT: "_OOOX__XX",
        PLAY_O_MIDDLE_RIGHT: "_OO_XO_XX",
        PLAY_O_BOTTOM_LEFT: "_OO_X_OXX"
      }
    },
    _OO_X__X_: {
      on: {
        PLAY_X_TOP_LEFT: "XOO_X__X_",
        PLAY_X_MIDDLE_LEFT: "_OOXX__X_",
        PLAY_X_MIDDLE_RIGHT: "_OO_XX_X_",
        PLAY_X_BOTTOM_LEFT: "_OO_X_XX_",
        PLAY_X_BOTTOM_RIGHT: "_OO_X__XX"
      }
    },
    _O_OXO_XX: {
      on: {
        PLAY_X_TOP_LEFT: "XO_OXO_XX",
        PLAY_X_TOP_RIGHT: "_OXOXO_XX",
        PLAY_X_BOTTOM_LEFT: "_O_OXOXXX"
      }
    },
    _O_OX_OXX: {
      on: {
        PLAY_X_TOP_LEFT: "XO_OX_OXX",
        PLAY_X_TOP_RIGHT: "_OXOX_OXX",
        PLAY_X_MIDDLE_RIGHT: "_O_OXXOXX"
      }
    },
    _O_OX__XX: {
      on: {
        PLAY_O_TOP_LEFT: "OO_OX__XX",
        PLAY_O_TOP_RIGHT: "_OOOX__XX",
        PLAY_O_MIDDLE_RIGHT: "_O_OXO_XX",
        PLAY_O_BOTTOM_LEFT: "_O_OX_OXX"
      }
    },
    _O_OX__X_: {
      on: {
        PLAY_X_TOP_LEFT: "XO_OX__X_",
        PLAY_X_TOP_RIGHT: "_OXOX__X_",
        PLAY_X_MIDDLE_RIGHT: "_O_OXX_X_",
        PLAY_X_BOTTOM_LEFT: "_O_OX_XX_",
        PLAY_X_BOTTOM_RIGHT: "_O_OX__XX"
      }
    },
    _O__XOOXX: {
      on: {
        PLAY_X_TOP_LEFT: "XO__XOOXX",
        PLAY_X_TOP_RIGHT: "_OX_XOOXX",
        PLAY_X_MIDDLE_LEFT: "_O_XXOOXX"
      }
    },
    _O__XO_XX: {
      on: {
        PLAY_O_TOP_LEFT: "OO__XO_XX",
        PLAY_O_TOP_RIGHT: "_OO_XO_XX",
        PLAY_O_MIDDLE_LEFT: "_O_OXO_XX",
        PLAY_O_BOTTOM_LEFT: "_O__XOOXX"
      }
    },
    _O__XO_X_: {
      on: {
        PLAY_X_TOP_LEFT: "XO__XO_X_",
        PLAY_X_TOP_RIGHT: "_OX_XO_X_",
        PLAY_X_MIDDLE_LEFT: "_O_XXO_X_",
        PLAY_X_BOTTOM_LEFT: "_O__XOXX_",
        PLAY_X_BOTTOM_RIGHT: "_O__XO_XX"
      }
    },
    _O__X_OXX: {
      on: {
        PLAY_O_TOP_LEFT: "OO__X_OXX",
        PLAY_O_TOP_RIGHT: "_OO_X_OXX",
        PLAY_O_MIDDLE_LEFT: "_O_OX_OXX",
        PLAY_O_MIDDLE_RIGHT: "_O__XOOXX"
      }
    },
    _O__X_OX_: {
      on: {
        PLAY_X_TOP_LEFT: "XO__X_OX_",
        PLAY_X_TOP_RIGHT: "_OX_X_OX_",
        PLAY_X_MIDDLE_LEFT: "_O_XX_OX_",
        PLAY_X_MIDDLE_RIGHT: "_O__XXOX_",
        PLAY_X_BOTTOM_RIGHT: "_O__X_OXX"
      }
    },
    _O__X__XO: {
      on: {
        PLAY_X_TOP_LEFT: "XO__X__XO",
        PLAY_X_TOP_RIGHT: "_OX_X__XO",
        PLAY_X_MIDDLE_LEFT: "_O_XX__XO",
        PLAY_X_MIDDLE_RIGHT: "_O__XX_XO",
        PLAY_X_BOTTOM_LEFT: "_O__X_XXO"
      }
    },
    _O__X__X_: {
      on: {
        PLAY_O_TOP_LEFT: "OO__X__X_",
        PLAY_O_TOP_RIGHT: "_OO_X__X_",
        PLAY_O_MIDDLE_LEFT: "_O_OX__X_",
        PLAY_O_MIDDLE_RIGHT: "_O__XO_X_",
        PLAY_O_BOTTOM_LEFT: "_O__X_OX_",
        PLAY_O_BOTTOM_RIGHT: "_O__X__XO"
      }
    },
    _OO_X___X: {
      on: {
        PLAY_X_TOP_LEFT: "XOO_X___X",
        PLAY_X_MIDDLE_LEFT: "_OOXX___X",
        PLAY_X_MIDDLE_RIGHT: "_OO_XX__X",
        PLAY_X_BOTTOM_LEFT: "_OO_X_X_X",
        PLAY_X_BOTTOM_CENTER: "_OO_X__XX"
      }
    },
    _O_OX___X: {
      on: {
        PLAY_X_TOP_LEFT: "XO_OX___X",
        PLAY_X_TOP_RIGHT: "_OXOX___X",
        PLAY_X_MIDDLE_RIGHT: "_O_OXX__X",
        PLAY_X_BOTTOM_LEFT: "_O_OX_X_X",
        PLAY_X_BOTTOM_CENTER: "_O_OX__XX"
      }
    },
    _O__XO__X: {
      on: {
        PLAY_X_TOP_LEFT: "XO__XO__X",
        PLAY_X_TOP_RIGHT: "_OX_XO__X",
        PLAY_X_MIDDLE_LEFT: "_O_XXO__X",
        PLAY_X_BOTTOM_LEFT: "_O__XOX_X",
        PLAY_X_BOTTOM_CENTER: "_O__XO_XX"
      }
    },
    _O__X_O_X: {
      on: {
        PLAY_X_TOP_LEFT: "XO__X_O_X",
        PLAY_X_TOP_RIGHT: "_OX_X_O_X",
        PLAY_X_MIDDLE_LEFT: "_O_XX_O_X",
        PLAY_X_MIDDLE_RIGHT: "_O__XXO_X",
        PLAY_X_BOTTOM_CENTER: "_O__X_OXX"
      }
    },
    _O__X__OX: {
      on: {
        PLAY_X_TOP_LEFT: "XO__X__OX",
        PLAY_X_TOP_RIGHT: "_OX_X__OX",
        PLAY_X_MIDDLE_LEFT: "_O_XX__OX",
        PLAY_X_MIDDLE_RIGHT: "_O__XX_OX",
        PLAY_X_BOTTOM_LEFT: "_O__X_XOX"
      }
    },
    _O__X___X: {
      on: {
        PLAY_O_TOP_LEFT: "OO__X___X",
        PLAY_O_TOP_RIGHT: "_OO_X___X",
        PLAY_O_MIDDLE_LEFT: "_O_OX___X",
        PLAY_O_MIDDLE_RIGHT: "_O__XO__X",
        PLAY_O_BOTTOM_LEFT: "_O__X_O_X",
        PLAY_O_BOTTOM_CENTER: "_O__X__OX"
      }
    },
    _O__X____: {
      on: {
        PLAY_X_TOP_LEFT: "XO__X____",
        PLAY_X_TOP_RIGHT: "_OX_X____",
        PLAY_X_MIDDLE_LEFT: "_O_XX____",
        PLAY_X_MIDDLE_RIGHT: "_O__XX___",
        PLAY_X_BOTTOM_LEFT: "_O__X_X__",
        PLAY_X_BOTTOM_CENTER: "_O__X__X_",
        PLAY_X_BOTTOM_RIGHT: "_O__X___X"
      }
    },
    __OOXXXOX: {
      on: { PLAY_O_TOP_LEFT: "O_OOXXXOX", PLAY_O_TOP_CENTER: "_OOOXXXOX" }
    },
    __OOXXXO_: {
      on: {
        PLAY_X_TOP_LEFT: "X_OOXXXO_",
        PLAY_X_TOP_CENTER: "_XOOXXXO_",
        PLAY_X_BOTTOM_RIGHT: "__OOXXXOX"
      }
    },
    __OOXXXXO: {
      on: { PLAY_O_TOP_LEFT: "O_OOXXXXO", PLAY_O_TOP_CENTER: "_OOOXXXXO" }
    },
    __OOXXX_O: {
      on: {
        PLAY_X_TOP_LEFT: "X_OOXXX_O",
        PLAY_X_TOP_CENTER: "_XOOXXX_O",
        PLAY_X_BOTTOM_CENTER: "__OOXXXXO"
      }
    },
    __OOXXX__: {
      on: {
        PLAY_O_TOP_LEFT: "O_OOXXX__",
        PLAY_O_TOP_CENTER: "_OOOXXX__",
        PLAY_O_BOTTOM_CENTER: "__OOXXXO_",
        PLAY_O_BOTTOM_RIGHT: "__OOXXX_O"
      }
    },
    __OOXXOXX: {
      on: { PLAY_O_TOP_LEFT: "O_OOXXOXX", PLAY_O_TOP_CENTER: "_OOOXXOXX" }
    },
    __OOXXOX_: {
      on: {
        PLAY_X_TOP_LEFT: "X_OOXXOX_",
        PLAY_X_TOP_CENTER: "_XOOXXOX_",
        PLAY_X_BOTTOM_RIGHT: "__OOXXOXX"
      }
    },
    __OOXX_XO: {
      on: {
        PLAY_X_TOP_LEFT: "X_OOXX_XO",
        PLAY_X_TOP_CENTER: "_XOOXX_XO",
        PLAY_X_BOTTOM_LEFT: "__OOXXXXO"
      }
    },
    __OOXX_X_: {
      on: {
        PLAY_O_TOP_LEFT: "O_OOXX_X_",
        PLAY_O_TOP_CENTER: "_OOOXX_X_",
        PLAY_O_BOTTOM_LEFT: "__OOXXOX_",
        PLAY_O_BOTTOM_RIGHT: "__OOXX_XO"
      }
    },
    __OOXXO_X: {
      on: {
        PLAY_X_TOP_LEFT: "X_OOXXO_X",
        PLAY_X_TOP_CENTER: "_XOOXXO_X",
        PLAY_X_BOTTOM_CENTER: "__OOXXOXX"
      }
    },
    __OOXX_OX: {
      on: {
        PLAY_X_TOP_LEFT: "X_OOXX_OX",
        PLAY_X_TOP_CENTER: "_XOOXX_OX",
        PLAY_X_BOTTOM_LEFT: "__OOXXXOX"
      }
    },
    __OOXX__X: {
      on: {
        PLAY_O_TOP_LEFT: "O_OOXX__X",
        PLAY_O_TOP_CENTER: "_OOOXX__X",
        PLAY_O_BOTTOM_LEFT: "__OOXXO_X",
        PLAY_O_BOTTOM_CENTER: "__OOXX_OX"
      }
    },
    __OOXX___: {
      on: {
        PLAY_X_TOP_LEFT: "X_OOXX___",
        PLAY_X_TOP_CENTER: "_XOOXX___",
        PLAY_X_BOTTOM_LEFT: "__OOXXX__",
        PLAY_X_BOTTOM_CENTER: "__OOXX_X_",
        PLAY_X_BOTTOM_RIGHT: "__OOXX__X"
      }
    },
    __O_XXOXO: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_XXOXO",
        PLAY_X_TOP_CENTER: "_XO_XXOXO",
        PLAY_X_MIDDLE_LEFT: "__OXXXOXO"
      }
    },
    __O_XXOX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_O_XXOX_",
        PLAY_O_TOP_CENTER: "_OO_XXOX_",
        PLAY_O_MIDDLE_LEFT: "__OOXXOX_",
        PLAY_O_BOTTOM_RIGHT: "__O_XXOXO"
      }
    },
    __O_XXOOX: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_XXOOX",
        PLAY_X_TOP_CENTER: "_XO_XXOOX",
        PLAY_X_MIDDLE_LEFT: "__OXXXOOX"
      }
    },
    __O_XXO_X: {
      on: {
        PLAY_O_TOP_LEFT: "O_O_XXO_X",
        PLAY_O_TOP_CENTER: "_OO_XXO_X",
        PLAY_O_MIDDLE_LEFT: "__OOXXO_X",
        PLAY_O_BOTTOM_CENTER: "__O_XXOOX"
      }
    },
    __O_XXO__: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_XXO__",
        PLAY_X_TOP_CENTER: "_XO_XXO__",
        PLAY_X_MIDDLE_LEFT: "__OXXXO__",
        PLAY_X_BOTTOM_CENTER: "__O_XXOX_",
        PLAY_X_BOTTOM_RIGHT: "__O_XXO_X"
      }
    },
    __O_XXXOO: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_XXXOO",
        PLAY_X_TOP_CENTER: "_XO_XXXOO",
        PLAY_X_MIDDLE_LEFT: "__OXXXXOO"
      }
    },
    __O_XXXO_: {
      on: {
        PLAY_O_TOP_LEFT: "O_O_XXXO_",
        PLAY_O_TOP_CENTER: "_OO_XXXO_",
        PLAY_O_MIDDLE_LEFT: "__OOXXXO_",
        PLAY_O_BOTTOM_RIGHT: "__O_XXXOO"
      }
    },
    __O_XX_OX: {
      on: {
        PLAY_O_TOP_LEFT: "O_O_XX_OX",
        PLAY_O_TOP_CENTER: "_OO_XX_OX",
        PLAY_O_MIDDLE_LEFT: "__OOXX_OX",
        PLAY_O_BOTTOM_LEFT: "__O_XXOOX"
      }
    },
    __O_XX_O_: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_XX_O_",
        PLAY_X_TOP_CENTER: "_XO_XX_O_",
        PLAY_X_MIDDLE_LEFT: "__OXXX_O_",
        PLAY_X_BOTTOM_LEFT: "__O_XXXO_",
        PLAY_X_BOTTOM_RIGHT: "__O_XX_OX"
      }
    },
    __O_XXX_O: {
      on: {
        PLAY_O_TOP_LEFT: "O_O_XXX_O",
        PLAY_O_TOP_CENTER: "_OO_XXX_O",
        PLAY_O_MIDDLE_LEFT: "__OOXXX_O",
        PLAY_O_BOTTOM_CENTER: "__O_XXXOO"
      }
    },
    __O_XX_XO: {
      on: {
        PLAY_O_TOP_LEFT: "O_O_XX_XO",
        PLAY_O_TOP_CENTER: "_OO_XX_XO",
        PLAY_O_MIDDLE_LEFT: "__OOXX_XO",
        PLAY_O_BOTTOM_LEFT: "__O_XXOXO"
      }
    },
    __O_XX__O: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_XX__O",
        PLAY_X_TOP_CENTER: "_XO_XX__O",
        PLAY_X_MIDDLE_LEFT: "__OXXX__O",
        PLAY_X_BOTTOM_LEFT: "__O_XXX_O",
        PLAY_X_BOTTOM_CENTER: "__O_XX_XO"
      }
    },
    __O_XX___: {
      on: {
        PLAY_O_TOP_LEFT: "O_O_XX___",
        PLAY_O_TOP_CENTER: "_OO_XX___",
        PLAY_O_MIDDLE_LEFT: "__OOXX___",
        PLAY_O_BOTTOM_LEFT: "__O_XXO__",
        PLAY_O_BOTTOM_CENTER: "__O_XX_O_",
        PLAY_O_BOTTOM_RIGHT: "__O_XX__O"
      }
    },
    __OOXOXXX: { on: { "": "X_WINS" } },
    __OOXOXX_: {
      on: {
        PLAY_X_TOP_LEFT: "X_OOXOXX_",
        PLAY_X_TOP_CENTER: "_XOOXOXX_",
        PLAY_X_BOTTOM_RIGHT: "__OOXOXXX"
      }
    },
    __OOX_XXO: {
      on: {
        PLAY_X_TOP_LEFT: "X_OOX_XXO",
        PLAY_X_TOP_CENTER: "_XOOX_XXO",
        PLAY_X_MIDDLE_RIGHT: "__OOXXXXO"
      }
    },
    __OOX_XX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_OOX_XX_",
        PLAY_O_TOP_CENTER: "_OOOX_XX_",
        PLAY_O_MIDDLE_RIGHT: "__OOXOXX_",
        PLAY_O_BOTTOM_RIGHT: "__OOX_XXO"
      }
    },
    __OOXOX_X: {
      on: {
        PLAY_X_TOP_LEFT: "X_OOXOX_X",
        PLAY_X_TOP_CENTER: "_XOOXOX_X",
        PLAY_X_BOTTOM_CENTER: "__OOXOXXX"
      }
    },
    __OOX_XOX: {
      on: {
        PLAY_X_TOP_LEFT: "X_OOX_XOX",
        PLAY_X_TOP_CENTER: "_XOOX_XOX",
        PLAY_X_MIDDLE_RIGHT: "__OOXXXOX"
      }
    },
    __OOX_X_X: {
      on: {
        PLAY_O_TOP_LEFT: "O_OOX_X_X",
        PLAY_O_TOP_CENTER: "_OOOX_X_X",
        PLAY_O_MIDDLE_RIGHT: "__OOXOX_X",
        PLAY_O_BOTTOM_CENTER: "__OOX_XOX"
      }
    },
    __OOX_X__: {
      on: {
        PLAY_X_TOP_LEFT: "X_OOX_X__",
        PLAY_X_TOP_CENTER: "_XOOX_X__",
        PLAY_X_MIDDLE_RIGHT: "__OOXXX__",
        PLAY_X_BOTTOM_CENTER: "__OOX_XX_",
        PLAY_X_BOTTOM_RIGHT: "__OOX_X_X"
      }
    },
    __O_XOXXO: { on: { "": "O_WINS" } },
    __O_XOXX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_O_XOXX_",
        PLAY_O_TOP_CENTER: "_OO_XOXX_",
        PLAY_O_MIDDLE_LEFT: "__OOXOXX_",
        PLAY_O_BOTTOM_RIGHT: "__O_XOXXO"
      }
    },
    __O_XOXOX: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_XOXOX",
        PLAY_X_TOP_CENTER: "_XO_XOXOX",
        PLAY_X_MIDDLE_LEFT: "__OXXOXOX"
      }
    },
    __O_XOX_X: {
      on: {
        PLAY_O_TOP_LEFT: "O_O_XOX_X",
        PLAY_O_TOP_CENTER: "_OO_XOX_X",
        PLAY_O_MIDDLE_LEFT: "__OOXOX_X",
        PLAY_O_BOTTOM_CENTER: "__O_XOXOX"
      }
    },
    __O_XOX__: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_XOX__",
        PLAY_X_TOP_CENTER: "_XO_XOX__",
        PLAY_X_MIDDLE_LEFT: "__OXXOX__",
        PLAY_X_BOTTOM_CENTER: "__O_XOXX_",
        PLAY_X_BOTTOM_RIGHT: "__O_XOX_X"
      }
    },
    __O_X_XOX: {
      on: {
        PLAY_O_TOP_LEFT: "O_O_X_XOX",
        PLAY_O_TOP_CENTER: "_OO_X_XOX",
        PLAY_O_MIDDLE_LEFT: "__OOX_XOX",
        PLAY_O_MIDDLE_RIGHT: "__O_XOXOX"
      }
    },
    __O_X_XO_: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_X_XO_",
        PLAY_X_TOP_CENTER: "_XO_X_XO_",
        PLAY_X_MIDDLE_LEFT: "__OXX_XO_",
        PLAY_X_MIDDLE_RIGHT: "__O_XXXO_",
        PLAY_X_BOTTOM_RIGHT: "__O_X_XOX"
      }
    },
    __O_X_XXO: {
      on: {
        PLAY_O_TOP_LEFT: "O_O_X_XXO",
        PLAY_O_TOP_CENTER: "_OO_X_XXO",
        PLAY_O_MIDDLE_LEFT: "__OOX_XXO",
        PLAY_O_MIDDLE_RIGHT: "__O_XOXXO"
      }
    },
    __O_X_X_O: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_X_X_O",
        PLAY_X_TOP_CENTER: "_XO_X_X_O",
        PLAY_X_MIDDLE_LEFT: "__OXX_X_O",
        PLAY_X_MIDDLE_RIGHT: "__O_XXX_O",
        PLAY_X_BOTTOM_CENTER: "__O_X_XXO"
      }
    },
    __O_X_X__: {
      on: {
        PLAY_O_TOP_LEFT: "O_O_X_X__",
        PLAY_O_TOP_CENTER: "_OO_X_X__",
        PLAY_O_MIDDLE_LEFT: "__OOX_X__",
        PLAY_O_MIDDLE_RIGHT: "__O_XOX__",
        PLAY_O_BOTTOM_CENTER: "__O_X_XO_",
        PLAY_O_BOTTOM_RIGHT: "__O_X_X_O"
      }
    },
    __OOXO_XX: {
      on: {
        PLAY_X_TOP_LEFT: "X_OOXO_XX",
        PLAY_X_TOP_CENTER: "_XOOXO_XX",
        PLAY_X_BOTTOM_LEFT: "__OOXOXXX"
      }
    },
    __OOX_OXX: {
      on: {
        PLAY_X_TOP_LEFT: "X_OOX_OXX",
        PLAY_X_TOP_CENTER: "_XOOX_OXX",
        PLAY_X_MIDDLE_RIGHT: "__OOXXOXX"
      }
    },
    __OOX__XX: {
      on: {
        PLAY_O_TOP_LEFT: "O_OOX__XX",
        PLAY_O_TOP_CENTER: "_OOOX__XX",
        PLAY_O_MIDDLE_RIGHT: "__OOXO_XX",
        PLAY_O_BOTTOM_LEFT: "__OOX_OXX"
      }
    },
    __OOX__X_: {
      on: {
        PLAY_X_TOP_LEFT: "X_OOX__X_",
        PLAY_X_TOP_CENTER: "_XOOX__X_",
        PLAY_X_MIDDLE_RIGHT: "__OOXX_X_",
        PLAY_X_BOTTOM_LEFT: "__OOX_XX_",
        PLAY_X_BOTTOM_RIGHT: "__OOX__XX"
      }
    },
    __O_XOOXX: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_XOOXX",
        PLAY_X_TOP_CENTER: "_XO_XOOXX",
        PLAY_X_MIDDLE_LEFT: "__OXXOOXX"
      }
    },
    __O_XO_XX: {
      on: {
        PLAY_O_TOP_LEFT: "O_O_XO_XX",
        PLAY_O_TOP_CENTER: "_OO_XO_XX",
        PLAY_O_MIDDLE_LEFT: "__OOXO_XX",
        PLAY_O_BOTTOM_LEFT: "__O_XOOXX"
      }
    },
    __O_XO_X_: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_XO_X_",
        PLAY_X_TOP_CENTER: "_XO_XO_X_",
        PLAY_X_MIDDLE_LEFT: "__OXXO_X_",
        PLAY_X_BOTTOM_LEFT: "__O_XOXX_",
        PLAY_X_BOTTOM_RIGHT: "__O_XO_XX"
      }
    },
    __O_X_OXX: {
      on: {
        PLAY_O_TOP_LEFT: "O_O_X_OXX",
        PLAY_O_TOP_CENTER: "_OO_X_OXX",
        PLAY_O_MIDDLE_LEFT: "__OOX_OXX",
        PLAY_O_MIDDLE_RIGHT: "__O_XOOXX"
      }
    },
    __O_X_OX_: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_X_OX_",
        PLAY_X_TOP_CENTER: "_XO_X_OX_",
        PLAY_X_MIDDLE_LEFT: "__OXX_OX_",
        PLAY_X_MIDDLE_RIGHT: "__O_XXOX_",
        PLAY_X_BOTTOM_RIGHT: "__O_X_OXX"
      }
    },
    __O_X__XO: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_X__XO",
        PLAY_X_TOP_CENTER: "_XO_X__XO",
        PLAY_X_MIDDLE_LEFT: "__OXX__XO",
        PLAY_X_MIDDLE_RIGHT: "__O_XX_XO",
        PLAY_X_BOTTOM_LEFT: "__O_X_XXO"
      }
    },
    __O_X__X_: {
      on: {
        PLAY_O_TOP_LEFT: "O_O_X__X_",
        PLAY_O_TOP_CENTER: "_OO_X__X_",
        PLAY_O_MIDDLE_LEFT: "__OOX__X_",
        PLAY_O_MIDDLE_RIGHT: "__O_XO_X_",
        PLAY_O_BOTTOM_LEFT: "__O_X_OX_",
        PLAY_O_BOTTOM_RIGHT: "__O_X__XO"
      }
    },
    __OOX___X: {
      on: {
        PLAY_X_TOP_LEFT: "X_OOX___X",
        PLAY_X_TOP_CENTER: "_XOOX___X",
        PLAY_X_MIDDLE_RIGHT: "__OOXX__X",
        PLAY_X_BOTTOM_LEFT: "__OOX_X_X",
        PLAY_X_BOTTOM_CENTER: "__OOX__XX"
      }
    },
    __O_XO__X: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_XO__X",
        PLAY_X_TOP_CENTER: "_XO_XO__X",
        PLAY_X_MIDDLE_LEFT: "__OXXO__X",
        PLAY_X_BOTTOM_LEFT: "__O_XOX_X",
        PLAY_X_BOTTOM_CENTER: "__O_XO_XX"
      }
    },
    __O_X_O_X: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_X_O_X",
        PLAY_X_TOP_CENTER: "_XO_X_O_X",
        PLAY_X_MIDDLE_LEFT: "__OXX_O_X",
        PLAY_X_MIDDLE_RIGHT: "__O_XXO_X",
        PLAY_X_BOTTOM_CENTER: "__O_X_OXX"
      }
    },
    __O_X__OX: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_X__OX",
        PLAY_X_TOP_CENTER: "_XO_X__OX",
        PLAY_X_MIDDLE_LEFT: "__OXX__OX",
        PLAY_X_MIDDLE_RIGHT: "__O_XX_OX",
        PLAY_X_BOTTOM_LEFT: "__O_X_XOX"
      }
    },
    __O_X___X: {
      on: {
        PLAY_O_TOP_LEFT: "O_O_X___X",
        PLAY_O_TOP_CENTER: "_OO_X___X",
        PLAY_O_MIDDLE_LEFT: "__OOX___X",
        PLAY_O_MIDDLE_RIGHT: "__O_XO__X",
        PLAY_O_BOTTOM_LEFT: "__O_X_O_X",
        PLAY_O_BOTTOM_CENTER: "__O_X__OX"
      }
    },
    __O_X____: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_X____",
        PLAY_X_TOP_CENTER: "_XO_X____",
        PLAY_X_MIDDLE_LEFT: "__OXX____",
        PLAY_X_MIDDLE_RIGHT: "__O_XX___",
        PLAY_X_BOTTOM_LEFT: "__O_X_X__",
        PLAY_X_BOTTOM_CENTER: "__O_X__X_",
        PLAY_X_BOTTOM_RIGHT: "__O_X___X"
      }
    },
    ___OXXOXO: {
      on: {
        PLAY_X_TOP_LEFT: "X__OXXOXO",
        PLAY_X_TOP_CENTER: "_X_OXXOXO",
        PLAY_X_TOP_RIGHT: "__XOXXOXO"
      }
    },
    ___OXXOX_: {
      on: {
        PLAY_O_TOP_LEFT: "O__OXXOX_",
        PLAY_O_TOP_CENTER: "_O_OXXOX_",
        PLAY_O_TOP_RIGHT: "__OOXXOX_",
        PLAY_O_BOTTOM_RIGHT: "___OXXOXO"
      }
    },
    ___OXXOOX: {
      on: {
        PLAY_X_TOP_LEFT: "X__OXXOOX",
        PLAY_X_TOP_CENTER: "_X_OXXOOX",
        PLAY_X_TOP_RIGHT: "__XOXXOOX"
      }
    },
    ___OXXO_X: {
      on: {
        PLAY_O_TOP_LEFT: "O__OXXO_X",
        PLAY_O_TOP_CENTER: "_O_OXXO_X",
        PLAY_O_TOP_RIGHT: "__OOXXO_X",
        PLAY_O_BOTTOM_CENTER: "___OXXOOX"
      }
    },
    ___OXXO__: {
      on: {
        PLAY_X_TOP_LEFT: "X__OXXO__",
        PLAY_X_TOP_CENTER: "_X_OXXO__",
        PLAY_X_TOP_RIGHT: "__XOXXO__",
        PLAY_X_BOTTOM_CENTER: "___OXXOX_",
        PLAY_X_BOTTOM_RIGHT: "___OXXO_X"
      }
    },
    ___OXXXOO: {
      on: {
        PLAY_X_TOP_LEFT: "X__OXXXOO",
        PLAY_X_TOP_CENTER: "_X_OXXXOO",
        PLAY_X_TOP_RIGHT: "__XOXXXOO"
      }
    },
    ___OXXXO_: {
      on: {
        PLAY_O_TOP_LEFT: "O__OXXXO_",
        PLAY_O_TOP_CENTER: "_O_OXXXO_",
        PLAY_O_TOP_RIGHT: "__OOXXXO_",
        PLAY_O_BOTTOM_RIGHT: "___OXXXOO"
      }
    },
    ___OXX_OX: {
      on: {
        PLAY_O_TOP_LEFT: "O__OXX_OX",
        PLAY_O_TOP_CENTER: "_O_OXX_OX",
        PLAY_O_TOP_RIGHT: "__OOXX_OX",
        PLAY_O_BOTTOM_LEFT: "___OXXOOX"
      }
    },
    ___OXX_O_: {
      on: {
        PLAY_X_TOP_LEFT: "X__OXX_O_",
        PLAY_X_TOP_CENTER: "_X_OXX_O_",
        PLAY_X_TOP_RIGHT: "__XOXX_O_",
        PLAY_X_BOTTOM_LEFT: "___OXXXO_",
        PLAY_X_BOTTOM_RIGHT: "___OXX_OX"
      }
    },
    ___OXXX_O: {
      on: {
        PLAY_O_TOP_LEFT: "O__OXXX_O",
        PLAY_O_TOP_CENTER: "_O_OXXX_O",
        PLAY_O_TOP_RIGHT: "__OOXXX_O",
        PLAY_O_BOTTOM_CENTER: "___OXXXOO"
      }
    },
    ___OXX_XO: {
      on: {
        PLAY_O_TOP_LEFT: "O__OXX_XO",
        PLAY_O_TOP_CENTER: "_O_OXX_XO",
        PLAY_O_TOP_RIGHT: "__OOXX_XO",
        PLAY_O_BOTTOM_LEFT: "___OXXOXO"
      }
    },
    ___OXX__O: {
      on: {
        PLAY_X_TOP_LEFT: "X__OXX__O",
        PLAY_X_TOP_CENTER: "_X_OXX__O",
        PLAY_X_TOP_RIGHT: "__XOXX__O",
        PLAY_X_BOTTOM_LEFT: "___OXXX_O",
        PLAY_X_BOTTOM_CENTER: "___OXX_XO"
      }
    },
    ___OXX___: {
      on: {
        PLAY_O_TOP_LEFT: "O__OXX___",
        PLAY_O_TOP_CENTER: "_O_OXX___",
        PLAY_O_TOP_RIGHT: "__OOXX___",
        PLAY_O_BOTTOM_LEFT: "___OXXO__",
        PLAY_O_BOTTOM_CENTER: "___OXX_O_",
        PLAY_O_BOTTOM_RIGHT: "___OXX__O"
      }
    },
    ___OXOXXO: {
      on: {
        PLAY_X_TOP_LEFT: "X__OXOXXO",
        PLAY_X_TOP_CENTER: "_X_OXOXXO",
        PLAY_X_TOP_RIGHT: "__XOXOXXO"
      }
    },
    ___OXOXX_: {
      on: {
        PLAY_O_TOP_LEFT: "O__OXOXX_",
        PLAY_O_TOP_CENTER: "_O_OXOXX_",
        PLAY_O_TOP_RIGHT: "__OOXOXX_",
        PLAY_O_BOTTOM_RIGHT: "___OXOXXO"
      }
    },
    ___OXOXOX: {
      on: {
        PLAY_X_TOP_LEFT: "X__OXOXOX",
        PLAY_X_TOP_CENTER: "_X_OXOXOX",
        PLAY_X_TOP_RIGHT: "__XOXOXOX"
      }
    },
    ___OXOX_X: {
      on: {
        PLAY_O_TOP_LEFT: "O__OXOX_X",
        PLAY_O_TOP_CENTER: "_O_OXOX_X",
        PLAY_O_TOP_RIGHT: "__OOXOX_X",
        PLAY_O_BOTTOM_CENTER: "___OXOXOX"
      }
    },
    ___OXOX__: {
      on: {
        PLAY_X_TOP_LEFT: "X__OXOX__",
        PLAY_X_TOP_CENTER: "_X_OXOX__",
        PLAY_X_TOP_RIGHT: "__XOXOX__",
        PLAY_X_BOTTOM_CENTER: "___OXOXX_",
        PLAY_X_BOTTOM_RIGHT: "___OXOX_X"
      }
    },
    ___OX_XOX: {
      on: {
        PLAY_O_TOP_LEFT: "O__OX_XOX",
        PLAY_O_TOP_CENTER: "_O_OX_XOX",
        PLAY_O_TOP_RIGHT: "__OOX_XOX",
        PLAY_O_MIDDLE_RIGHT: "___OXOXOX"
      }
    },
    ___OX_XO_: {
      on: {
        PLAY_X_TOP_LEFT: "X__OX_XO_",
        PLAY_X_TOP_CENTER: "_X_OX_XO_",
        PLAY_X_TOP_RIGHT: "__XOX_XO_",
        PLAY_X_MIDDLE_RIGHT: "___OXXXO_",
        PLAY_X_BOTTOM_RIGHT: "___OX_XOX"
      }
    },
    ___OX_XXO: {
      on: {
        PLAY_O_TOP_LEFT: "O__OX_XXO",
        PLAY_O_TOP_CENTER: "_O_OX_XXO",
        PLAY_O_TOP_RIGHT: "__OOX_XXO",
        PLAY_O_MIDDLE_RIGHT: "___OXOXXO"
      }
    },
    ___OX_X_O: {
      on: {
        PLAY_X_TOP_LEFT: "X__OX_X_O",
        PLAY_X_TOP_CENTER: "_X_OX_X_O",
        PLAY_X_TOP_RIGHT: "__XOX_X_O",
        PLAY_X_MIDDLE_RIGHT: "___OXXX_O",
        PLAY_X_BOTTOM_CENTER: "___OX_XXO"
      }
    },
    ___OX_X__: {
      on: {
        PLAY_O_TOP_LEFT: "O__OX_X__",
        PLAY_O_TOP_CENTER: "_O_OX_X__",
        PLAY_O_TOP_RIGHT: "__OOX_X__",
        PLAY_O_MIDDLE_RIGHT: "___OXOX__",
        PLAY_O_BOTTOM_CENTER: "___OX_XO_",
        PLAY_O_BOTTOM_RIGHT: "___OX_X_O"
      }
    },
    ___OXOOXX: {
      on: {
        PLAY_X_TOP_LEFT: "X__OXOOXX",
        PLAY_X_TOP_CENTER: "_X_OXOOXX",
        PLAY_X_TOP_RIGHT: "__XOXOOXX"
      }
    },
    ___OXO_XX: {
      on: {
        PLAY_O_TOP_LEFT: "O__OXO_XX",
        PLAY_O_TOP_CENTER: "_O_OXO_XX",
        PLAY_O_TOP_RIGHT: "__OOXO_XX",
        PLAY_O_BOTTOM_LEFT: "___OXOOXX"
      }
    },
    ___OXO_X_: {
      on: {
        PLAY_X_TOP_LEFT: "X__OXO_X_",
        PLAY_X_TOP_CENTER: "_X_OXO_X_",
        PLAY_X_TOP_RIGHT: "__XOXO_X_",
        PLAY_X_BOTTOM_LEFT: "___OXOXX_",
        PLAY_X_BOTTOM_RIGHT: "___OXO_XX"
      }
    },
    ___OX_OXX: {
      on: {
        PLAY_O_TOP_LEFT: "O__OX_OXX",
        PLAY_O_TOP_CENTER: "_O_OX_OXX",
        PLAY_O_TOP_RIGHT: "__OOX_OXX",
        PLAY_O_MIDDLE_RIGHT: "___OXOOXX"
      }
    },
    ___OX_OX_: {
      on: {
        PLAY_X_TOP_LEFT: "X__OX_OX_",
        PLAY_X_TOP_CENTER: "_X_OX_OX_",
        PLAY_X_TOP_RIGHT: "__XOX_OX_",
        PLAY_X_MIDDLE_RIGHT: "___OXXOX_",
        PLAY_X_BOTTOM_RIGHT: "___OX_OXX"
      }
    },
    ___OX__XO: {
      on: {
        PLAY_X_TOP_LEFT: "X__OX__XO",
        PLAY_X_TOP_CENTER: "_X_OX__XO",
        PLAY_X_TOP_RIGHT: "__XOX__XO",
        PLAY_X_MIDDLE_RIGHT: "___OXX_XO",
        PLAY_X_BOTTOM_LEFT: "___OX_XXO"
      }
    },
    ___OX__X_: {
      on: {
        PLAY_O_TOP_LEFT: "O__OX__X_",
        PLAY_O_TOP_CENTER: "_O_OX__X_",
        PLAY_O_TOP_RIGHT: "__OOX__X_",
        PLAY_O_MIDDLE_RIGHT: "___OXO_X_",
        PLAY_O_BOTTOM_LEFT: "___OX_OX_",
        PLAY_O_BOTTOM_RIGHT: "___OX__XO"
      }
    },
    ___OXO__X: {
      on: {
        PLAY_X_TOP_LEFT: "X__OXO__X",
        PLAY_X_TOP_CENTER: "_X_OXO__X",
        PLAY_X_TOP_RIGHT: "__XOXO__X",
        PLAY_X_BOTTOM_LEFT: "___OXOX_X",
        PLAY_X_BOTTOM_CENTER: "___OXO_XX"
      }
    },
    ___OX_O_X: {
      on: {
        PLAY_X_TOP_LEFT: "X__OX_O_X",
        PLAY_X_TOP_CENTER: "_X_OX_O_X",
        PLAY_X_TOP_RIGHT: "__XOX_O_X",
        PLAY_X_MIDDLE_RIGHT: "___OXXO_X",
        PLAY_X_BOTTOM_CENTER: "___OX_OXX"
      }
    },
    ___OX__OX: {
      on: {
        PLAY_X_TOP_LEFT: "X__OX__OX",
        PLAY_X_TOP_CENTER: "_X_OX__OX",
        PLAY_X_TOP_RIGHT: "__XOX__OX",
        PLAY_X_MIDDLE_RIGHT: "___OXX_OX",
        PLAY_X_BOTTOM_LEFT: "___OX_XOX"
      }
    },
    ___OX___X: {
      on: {
        PLAY_O_TOP_LEFT: "O__OX___X",
        PLAY_O_TOP_CENTER: "_O_OX___X",
        PLAY_O_TOP_RIGHT: "__OOX___X",
        PLAY_O_MIDDLE_RIGHT: "___OXO__X",
        PLAY_O_BOTTOM_LEFT: "___OX_O_X",
        PLAY_O_BOTTOM_CENTER: "___OX__OX"
      }
    },
    ___OX____: {
      on: {
        PLAY_X_TOP_LEFT: "X__OX____",
        PLAY_X_TOP_CENTER: "_X_OX____",
        PLAY_X_TOP_RIGHT: "__XOX____",
        PLAY_X_MIDDLE_RIGHT: "___OXX___",
        PLAY_X_BOTTOM_LEFT: "___OX_X__",
        PLAY_X_BOTTOM_CENTER: "___OX__X_",
        PLAY_X_BOTTOM_RIGHT: "___OX___X"
      }
    },
    ____XOXOX: {
      on: {
        PLAY_O_TOP_LEFT: "O___XOXOX",
        PLAY_O_TOP_CENTER: "_O__XOXOX",
        PLAY_O_TOP_RIGHT: "__O_XOXOX",
        PLAY_O_MIDDLE_LEFT: "___OXOXOX"
      }
    },
    ____XOXO_: {
      on: {
        PLAY_X_TOP_LEFT: "X___XOXO_",
        PLAY_X_TOP_CENTER: "_X__XOXO_",
        PLAY_X_TOP_RIGHT: "__X_XOXO_",
        PLAY_X_MIDDLE_LEFT: "___XXOXO_",
        PLAY_X_BOTTOM_RIGHT: "____XOXOX"
      }
    },
    ____XOXXO: {
      on: {
        PLAY_O_TOP_LEFT: "O___XOXXO",
        PLAY_O_TOP_CENTER: "_O__XOXXO",
        PLAY_O_TOP_RIGHT: "__O_XOXXO",
        PLAY_O_MIDDLE_LEFT: "___OXOXXO"
      }
    },
    ____XOX_O: {
      on: {
        PLAY_X_TOP_LEFT: "X___XOX_O",
        PLAY_X_TOP_CENTER: "_X__XOX_O",
        PLAY_X_TOP_RIGHT: "__X_XOX_O",
        PLAY_X_MIDDLE_LEFT: "___XXOX_O",
        PLAY_X_BOTTOM_CENTER: "____XOXXO"
      }
    },
    ____XOX__: {
      on: {
        PLAY_O_TOP_LEFT: "O___XOX__",
        PLAY_O_TOP_CENTER: "_O__XOX__",
        PLAY_O_TOP_RIGHT: "__O_XOX__",
        PLAY_O_MIDDLE_LEFT: "___OXOX__",
        PLAY_O_BOTTOM_CENTER: "____XOXO_",
        PLAY_O_BOTTOM_RIGHT: "____XOX_O"
      }
    },
    ____XOOXX: {
      on: {
        PLAY_O_TOP_LEFT: "O___XOOXX",
        PLAY_O_TOP_CENTER: "_O__XOOXX",
        PLAY_O_TOP_RIGHT: "__O_XOOXX",
        PLAY_O_MIDDLE_LEFT: "___OXOOXX"
      }
    },
    ____XOOX_: {
      on: {
        PLAY_X_TOP_LEFT: "X___XOOX_",
        PLAY_X_TOP_CENTER: "_X__XOOX_",
        PLAY_X_TOP_RIGHT: "__X_XOOX_",
        PLAY_X_MIDDLE_LEFT: "___XXOOX_",
        PLAY_X_BOTTOM_RIGHT: "____XOOXX"
      }
    },
    ____XO_XO: {
      on: {
        PLAY_X_TOP_LEFT: "X___XO_XO",
        PLAY_X_TOP_CENTER: "_X__XO_XO",
        PLAY_X_TOP_RIGHT: "__X_XO_XO",
        PLAY_X_MIDDLE_LEFT: "___XXO_XO",
        PLAY_X_BOTTOM_LEFT: "____XOXXO"
      }
    },
    ____XO_X_: {
      on: {
        PLAY_O_TOP_LEFT: "O___XO_X_",
        PLAY_O_TOP_CENTER: "_O__XO_X_",
        PLAY_O_TOP_RIGHT: "__O_XO_X_",
        PLAY_O_MIDDLE_LEFT: "___OXO_X_",
        PLAY_O_BOTTOM_LEFT: "____XOOX_",
        PLAY_O_BOTTOM_RIGHT: "____XO_XO"
      }
    },
    ____XOO_X: {
      on: {
        PLAY_X_TOP_LEFT: "X___XOO_X",
        PLAY_X_TOP_CENTER: "_X__XOO_X",
        PLAY_X_TOP_RIGHT: "__X_XOO_X",
        PLAY_X_MIDDLE_LEFT: "___XXOO_X",
        PLAY_X_BOTTOM_CENTER: "____XOOXX"
      }
    },
    ____XO_OX: {
      on: {
        PLAY_X_TOP_LEFT: "X___XO_OX",
        PLAY_X_TOP_CENTER: "_X__XO_OX",
        PLAY_X_TOP_RIGHT: "__X_XO_OX",
        PLAY_X_MIDDLE_LEFT: "___XXO_OX",
        PLAY_X_BOTTOM_LEFT: "____XOXOX"
      }
    },
    ____XO__X: {
      on: {
        PLAY_O_TOP_LEFT: "O___XO__X",
        PLAY_O_TOP_CENTER: "_O__XO__X",
        PLAY_O_TOP_RIGHT: "__O_XO__X",
        PLAY_O_MIDDLE_LEFT: "___OXO__X",
        PLAY_O_BOTTOM_LEFT: "____XOO_X",
        PLAY_O_BOTTOM_CENTER: "____XO_OX"
      }
    },
    ____XO___: {
      on: {
        PLAY_X_TOP_LEFT: "X___XO___",
        PLAY_X_TOP_CENTER: "_X__XO___",
        PLAY_X_TOP_RIGHT: "__X_XO___",
        PLAY_X_MIDDLE_LEFT: "___XXO___",
        PLAY_X_BOTTOM_LEFT: "____XOX__",
        PLAY_X_BOTTOM_CENTER: "____XO_X_",
        PLAY_X_BOTTOM_RIGHT: "____XO__X"
      }
    },
    ____XXOOX: {
      on: {
        PLAY_O_TOP_LEFT: "O___XXOOX",
        PLAY_O_TOP_CENTER: "_O__XXOOX",
        PLAY_O_TOP_RIGHT: "__O_XXOOX",
        PLAY_O_MIDDLE_LEFT: "___OXXOOX"
      }
    },
    ____XXOO_: {
      on: {
        PLAY_X_TOP_LEFT: "X___XXOO_",
        PLAY_X_TOP_CENTER: "_X__XXOO_",
        PLAY_X_TOP_RIGHT: "__X_XXOO_",
        PLAY_X_MIDDLE_LEFT: "___XXXOO_",
        PLAY_X_BOTTOM_RIGHT: "____XXOOX"
      }
    },
    ____XXOXO: {
      on: {
        PLAY_O_TOP_LEFT: "O___XXOXO",
        PLAY_O_TOP_CENTER: "_O__XXOXO",
        PLAY_O_TOP_RIGHT: "__O_XXOXO",
        PLAY_O_MIDDLE_LEFT: "___OXXOXO"
      }
    },
    ____XXO_O: {
      on: {
        PLAY_X_TOP_LEFT: "X___XXO_O",
        PLAY_X_TOP_CENTER: "_X__XXO_O",
        PLAY_X_TOP_RIGHT: "__X_XXO_O",
        PLAY_X_MIDDLE_LEFT: "___XXXO_O",
        PLAY_X_BOTTOM_CENTER: "____XXOXO"
      }
    },
    ____XXO__: {
      on: {
        PLAY_O_TOP_LEFT: "O___XXO__",
        PLAY_O_TOP_CENTER: "_O__XXO__",
        PLAY_O_TOP_RIGHT: "__O_XXO__",
        PLAY_O_MIDDLE_LEFT: "___OXXO__",
        PLAY_O_BOTTOM_CENTER: "____XXOO_",
        PLAY_O_BOTTOM_RIGHT: "____XXO_O"
      }
    },
    ____X_OXO: {
      on: {
        PLAY_X_TOP_LEFT: "X___X_OXO",
        PLAY_X_TOP_CENTER: "_X__X_OXO",
        PLAY_X_TOP_RIGHT: "__X_X_OXO",
        PLAY_X_MIDDLE_LEFT: "___XX_OXO",
        PLAY_X_MIDDLE_RIGHT: "____XXOXO"
      }
    },
    ____X_OX_: {
      on: {
        PLAY_O_TOP_LEFT: "O___X_OX_",
        PLAY_O_TOP_CENTER: "_O__X_OX_",
        PLAY_O_TOP_RIGHT: "__O_X_OX_",
        PLAY_O_MIDDLE_LEFT: "___OX_OX_",
        PLAY_O_MIDDLE_RIGHT: "____XOOX_",
        PLAY_O_BOTTOM_RIGHT: "____X_OXO"
      }
    },
    ____X_OOX: {
      on: {
        PLAY_X_TOP_LEFT: "X___X_OOX",
        PLAY_X_TOP_CENTER: "_X__X_OOX",
        PLAY_X_TOP_RIGHT: "__X_X_OOX",
        PLAY_X_MIDDLE_LEFT: "___XX_OOX",
        PLAY_X_MIDDLE_RIGHT: "____XXOOX"
      }
    },
    ____X_O_X: {
      on: {
        PLAY_O_TOP_LEFT: "O___X_O_X",
        PLAY_O_TOP_CENTER: "_O__X_O_X",
        PLAY_O_TOP_RIGHT: "__O_X_O_X",
        PLAY_O_MIDDLE_LEFT: "___OX_O_X",
        PLAY_O_MIDDLE_RIGHT: "____XOO_X",
        PLAY_O_BOTTOM_CENTER: "____X_OOX"
      }
    },
    ____X_O__: {
      on: {
        PLAY_X_TOP_LEFT: "X___X_O__",
        PLAY_X_TOP_CENTER: "_X__X_O__",
        PLAY_X_TOP_RIGHT: "__X_X_O__",
        PLAY_X_MIDDLE_LEFT: "___XX_O__",
        PLAY_X_MIDDLE_RIGHT: "____XXO__",
        PLAY_X_BOTTOM_CENTER: "____X_OX_",
        PLAY_X_BOTTOM_RIGHT: "____X_O_X"
      }
    },
    ____XXXOO: {
      on: {
        PLAY_O_TOP_LEFT: "O___XXXOO",
        PLAY_O_TOP_CENTER: "_O__XXXOO",
        PLAY_O_TOP_RIGHT: "__O_XXXOO",
        PLAY_O_MIDDLE_LEFT: "___OXXXOO"
      }
    },
    ____XX_OO: {
      on: {
        PLAY_X_TOP_LEFT: "X___XX_OO",
        PLAY_X_TOP_CENTER: "_X__XX_OO",
        PLAY_X_TOP_RIGHT: "__X_XX_OO",
        PLAY_X_MIDDLE_LEFT: "___XXX_OO",
        PLAY_X_BOTTOM_LEFT: "____XXXOO"
      }
    },
    ____XX_O_: {
      on: {
        PLAY_O_TOP_LEFT: "O___XX_O_",
        PLAY_O_TOP_CENTER: "_O__XX_O_",
        PLAY_O_TOP_RIGHT: "__O_XX_O_",
        PLAY_O_MIDDLE_LEFT: "___OXX_O_",
        PLAY_O_BOTTOM_LEFT: "____XXOO_",
        PLAY_O_BOTTOM_RIGHT: "____XX_OO"
      }
    },
    ____X_XOO: {
      on: {
        PLAY_X_TOP_LEFT: "X___X_XOO",
        PLAY_X_TOP_CENTER: "_X__X_XOO",
        PLAY_X_TOP_RIGHT: "__X_X_XOO",
        PLAY_X_MIDDLE_LEFT: "___XX_XOO",
        PLAY_X_MIDDLE_RIGHT: "____XXXOO"
      }
    },
    ____X_XO_: {
      on: {
        PLAY_O_TOP_LEFT: "O___X_XO_",
        PLAY_O_TOP_CENTER: "_O__X_XO_",
        PLAY_O_TOP_RIGHT: "__O_X_XO_",
        PLAY_O_MIDDLE_LEFT: "___OX_XO_",
        PLAY_O_MIDDLE_RIGHT: "____XOXO_",
        PLAY_O_BOTTOM_RIGHT: "____X_XOO"
      }
    },
    ____X__OX: {
      on: {
        PLAY_O_TOP_LEFT: "O___X__OX",
        PLAY_O_TOP_CENTER: "_O__X__OX",
        PLAY_O_TOP_RIGHT: "__O_X__OX",
        PLAY_O_MIDDLE_LEFT: "___OX__OX",
        PLAY_O_MIDDLE_RIGHT: "____XO_OX",
        PLAY_O_BOTTOM_LEFT: "____X_OOX"
      }
    },
    ____X__O_: {
      on: {
        PLAY_X_TOP_LEFT: "X___X__O_",
        PLAY_X_TOP_CENTER: "_X__X__O_",
        PLAY_X_TOP_RIGHT: "__X_X__O_",
        PLAY_X_MIDDLE_LEFT: "___XX__O_",
        PLAY_X_MIDDLE_RIGHT: "____XX_O_",
        PLAY_X_BOTTOM_LEFT: "____X_XO_",
        PLAY_X_BOTTOM_RIGHT: "____X__OX"
      }
    },
    ____XX__O: {
      on: {
        PLAY_O_TOP_LEFT: "O___XX__O",
        PLAY_O_TOP_CENTER: "_O__XX__O",
        PLAY_O_TOP_RIGHT: "__O_XX__O",
        PLAY_O_MIDDLE_LEFT: "___OXX__O",
        PLAY_O_BOTTOM_LEFT: "____XXO_O",
        PLAY_O_BOTTOM_CENTER: "____XX_OO"
      }
    },
    ____X_X_O: {
      on: {
        PLAY_O_TOP_LEFT: "O___X_X_O",
        PLAY_O_TOP_CENTER: "_O__X_X_O",
        PLAY_O_TOP_RIGHT: "__O_X_X_O",
        PLAY_O_MIDDLE_LEFT: "___OX_X_O",
        PLAY_O_MIDDLE_RIGHT: "____XOX_O",
        PLAY_O_BOTTOM_CENTER: "____X_XOO"
      }
    },
    ____X__XO: {
      on: {
        PLAY_O_TOP_LEFT: "O___X__XO",
        PLAY_O_TOP_CENTER: "_O__X__XO",
        PLAY_O_TOP_RIGHT: "__O_X__XO",
        PLAY_O_MIDDLE_LEFT: "___OX__XO",
        PLAY_O_MIDDLE_RIGHT: "____XO_XO",
        PLAY_O_BOTTOM_LEFT: "____X_OXO"
      }
    },
    ____X___O: {
      on: {
        PLAY_X_TOP_LEFT: "X___X___O",
        PLAY_X_TOP_CENTER: "_X__X___O",
        PLAY_X_TOP_RIGHT: "__X_X___O",
        PLAY_X_MIDDLE_LEFT: "___XX___O",
        PLAY_X_MIDDLE_RIGHT: "____XX__O",
        PLAY_X_BOTTOM_LEFT: "____X_X_O",
        PLAY_X_BOTTOM_CENTER: "____X__XO"
      }
    },
    ____X____: {
      on: {
        PLAY_O_TOP_LEFT: "O___X____",
        PLAY_O_TOP_CENTER: "_O__X____",
        PLAY_O_TOP_RIGHT: "__O_X____",
        PLAY_O_MIDDLE_LEFT: "___OX____",
        PLAY_O_MIDDLE_RIGHT: "____XO___",
        PLAY_O_BOTTOM_LEFT: "____X_O__",
        PLAY_O_BOTTOM_CENTER: "____X__O_",
        PLAY_O_BOTTOM_RIGHT: "____X___O"
      }
    },
    OOO__XXX_: { on: { "": "O_WINS" } },
    OO_O_XXXX: { on: { "": "X_WINS" } },
    OO_O_XXX_: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXO_XXX_",
        PLAY_X_CENTER: "OO_OXXXX_",
        PLAY_X_BOTTOM_RIGHT: "OO_O_XXXX"
      }
    },
    OO__OXXXX: { on: { "": "X_WINS" } },
    OO__OXXX_: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX_OXXX_",
        PLAY_X_MIDDLE_LEFT: "OO_XOXXX_",
        PLAY_X_BOTTOM_RIGHT: "OO__OXXXX"
      }
    },
    OO___XXXO: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX__XXXO",
        PLAY_X_MIDDLE_LEFT: "OO_X_XXXO",
        PLAY_X_CENTER: "OO__XXXXO"
      }
    },
    OO___XXX_: {
      on: {
        PLAY_O_TOP_RIGHT: "OOO__XXX_",
        PLAY_O_MIDDLE_LEFT: "OO_O_XXX_",
        PLAY_O_CENTER: "OO__OXXX_",
        PLAY_O_BOTTOM_RIGHT: "OO___XXXO"
      }
    },
    OOO__XX_X: { on: { "": "O_WINS" } },
    OO_O_XX_X: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXO_XX_X",
        PLAY_X_CENTER: "OO_OXXX_X",
        PLAY_X_BOTTOM_CENTER: "OO_O_XXXX"
      }
    },
    OO__OXX_X: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX_OXX_X",
        PLAY_X_MIDDLE_LEFT: "OO_XOXX_X",
        PLAY_X_BOTTOM_CENTER: "OO__OXXXX"
      }
    },
    OO___XXOX: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX__XXOX",
        PLAY_X_MIDDLE_LEFT: "OO_X_XXOX",
        PLAY_X_CENTER: "OO__XXXOX"
      }
    },
    OO___XX_X: {
      on: {
        PLAY_O_TOP_RIGHT: "OOO__XX_X",
        PLAY_O_MIDDLE_LEFT: "OO_O_XX_X",
        PLAY_O_CENTER: "OO__OXX_X",
        PLAY_O_BOTTOM_CENTER: "OO___XXOX"
      }
    },
    OO___XX__: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX__XX__",
        PLAY_X_MIDDLE_LEFT: "OO_X_XX__",
        PLAY_X_CENTER: "OO__XXX__",
        PLAY_X_BOTTOM_CENTER: "OO___XXX_",
        PLAY_X_BOTTOM_RIGHT: "OO___XX_X"
      }
    },
    O_OO_XXXX: { on: { "": "X_WINS" } },
    O_OO_XXX_: {
      on: {
        PLAY_X_TOP_CENTER: "OXOO_XXX_",
        PLAY_X_CENTER: "O_OOXXXX_",
        PLAY_X_BOTTOM_RIGHT: "O_OO_XXXX"
      }
    },
    O_O_OXXXX: { on: { "": "X_WINS" } },
    O_O_OXXX_: {
      on: {
        PLAY_X_TOP_CENTER: "OXO_OXXX_",
        PLAY_X_MIDDLE_LEFT: "O_OXOXXX_",
        PLAY_X_BOTTOM_RIGHT: "O_O_OXXXX"
      }
    },
    O_O__XXXO: {
      on: {
        PLAY_X_TOP_CENTER: "OXO__XXXO",
        PLAY_X_MIDDLE_LEFT: "O_OX_XXXO",
        PLAY_X_CENTER: "O_O_XXXXO"
      }
    },
    O_O__XXX_: {
      on: {
        PLAY_O_TOP_CENTER: "OOO__XXX_",
        PLAY_O_MIDDLE_LEFT: "O_OO_XXX_",
        PLAY_O_CENTER: "O_O_OXXX_",
        PLAY_O_BOTTOM_RIGHT: "O_O__XXXO"
      }
    },
    O_OO_XX_X: {
      on: {
        PLAY_X_TOP_CENTER: "OXOO_XX_X",
        PLAY_X_CENTER: "O_OOXXX_X",
        PLAY_X_BOTTOM_CENTER: "O_OO_XXXX"
      }
    },
    O_O_OXX_X: {
      on: {
        PLAY_X_TOP_CENTER: "OXO_OXX_X",
        PLAY_X_MIDDLE_LEFT: "O_OXOXX_X",
        PLAY_X_BOTTOM_CENTER: "O_O_OXXXX"
      }
    },
    O_O__XXOX: {
      on: {
        PLAY_X_TOP_CENTER: "OXO__XXOX",
        PLAY_X_MIDDLE_LEFT: "O_OX_XXOX",
        PLAY_X_CENTER: "O_O_XXXOX"
      }
    },
    O_O__XX_X: {
      on: {
        PLAY_O_TOP_CENTER: "OOO__XX_X",
        PLAY_O_MIDDLE_LEFT: "O_OO_XX_X",
        PLAY_O_CENTER: "O_O_OXX_X",
        PLAY_O_BOTTOM_CENTER: "O_O__XXOX"
      }
    },
    O_O__XX__: {
      on: {
        PLAY_X_TOP_CENTER: "OXO__XX__",
        PLAY_X_MIDDLE_LEFT: "O_OX_XX__",
        PLAY_X_CENTER: "O_O_XXX__",
        PLAY_X_BOTTOM_CENTER: "O_O__XXX_",
        PLAY_X_BOTTOM_RIGHT: "O_O__XX_X"
      }
    },
    O__OOXXXX: { on: { "": "X_WINS" } },
    O__OOXXX_: {
      on: {
        PLAY_X_TOP_CENTER: "OX_OOXXX_",
        PLAY_X_TOP_RIGHT: "O_XOOXXX_",
        PLAY_X_BOTTOM_RIGHT: "O__OOXXXX"
      }
    },
    O__O_XXXO: {
      on: {
        PLAY_X_TOP_CENTER: "OX_O_XXXO",
        PLAY_X_TOP_RIGHT: "O_XO_XXXO",
        PLAY_X_CENTER: "O__OXXXXO"
      }
    },
    O__O_XXX_: {
      on: {
        PLAY_O_TOP_CENTER: "OO_O_XXX_",
        PLAY_O_TOP_RIGHT: "O_OO_XXX_",
        PLAY_O_CENTER: "O__OOXXX_",
        PLAY_O_BOTTOM_RIGHT: "O__O_XXXO"
      }
    },
    O__OOXX_X: {
      on: {
        PLAY_X_TOP_CENTER: "OX_OOXX_X",
        PLAY_X_TOP_RIGHT: "O_XOOXX_X",
        PLAY_X_BOTTOM_CENTER: "O__OOXXXX"
      }
    },
    O__O_XXOX: {
      on: {
        PLAY_X_TOP_CENTER: "OX_O_XXOX",
        PLAY_X_TOP_RIGHT: "O_XO_XXOX",
        PLAY_X_CENTER: "O__OXXXOX"
      }
    },
    O__O_XX_X: {
      on: {
        PLAY_O_TOP_CENTER: "OO_O_XX_X",
        PLAY_O_TOP_RIGHT: "O_OO_XX_X",
        PLAY_O_CENTER: "O__OOXX_X",
        PLAY_O_BOTTOM_CENTER: "O__O_XXOX"
      }
    },
    O__O_XX__: {
      on: {
        PLAY_X_TOP_CENTER: "OX_O_XX__",
        PLAY_X_TOP_RIGHT: "O_XO_XX__",
        PLAY_X_CENTER: "O__OXXX__",
        PLAY_X_BOTTOM_CENTER: "O__O_XXX_",
        PLAY_X_BOTTOM_RIGHT: "O__O_XX_X"
      }
    },
    O___OXXXO: { on: { "": "O_WINS" } },
    O___OXXX_: {
      on: {
        PLAY_O_TOP_CENTER: "OO__OXXX_",
        PLAY_O_TOP_RIGHT: "O_O_OXXX_",
        PLAY_O_MIDDLE_LEFT: "O__OOXXX_",
        PLAY_O_BOTTOM_RIGHT: "O___OXXXO"
      }
    },
    O___OXXOX: {
      on: {
        PLAY_X_TOP_CENTER: "OX__OXXOX",
        PLAY_X_TOP_RIGHT: "O_X_OXXOX",
        PLAY_X_MIDDLE_LEFT: "O__XOXXOX"
      }
    },
    O___OXX_X: {
      on: {
        PLAY_O_TOP_CENTER: "OO__OXX_X",
        PLAY_O_TOP_RIGHT: "O_O_OXX_X",
        PLAY_O_MIDDLE_LEFT: "O__OOXX_X",
        PLAY_O_BOTTOM_CENTER: "O___OXXOX"
      }
    },
    O___OXX__: {
      on: {
        PLAY_X_TOP_CENTER: "OX__OXX__",
        PLAY_X_TOP_RIGHT: "O_X_OXX__",
        PLAY_X_MIDDLE_LEFT: "O__XOXX__",
        PLAY_X_BOTTOM_CENTER: "O___OXXX_",
        PLAY_X_BOTTOM_RIGHT: "O___OXX_X"
      }
    },
    O____XXOX: {
      on: {
        PLAY_O_TOP_CENTER: "OO___XXOX",
        PLAY_O_TOP_RIGHT: "O_O__XXOX",
        PLAY_O_MIDDLE_LEFT: "O__O_XXOX",
        PLAY_O_CENTER: "O___OXXOX"
      }
    },
    O____XXO_: {
      on: {
        PLAY_X_TOP_CENTER: "OX___XXO_",
        PLAY_X_TOP_RIGHT: "O_X__XXO_",
        PLAY_X_MIDDLE_LEFT: "O__X_XXO_",
        PLAY_X_CENTER: "O___XXXO_",
        PLAY_X_BOTTOM_RIGHT: "O____XXOX"
      }
    },
    O____XXXO: {
      on: {
        PLAY_O_TOP_CENTER: "OO___XXXO",
        PLAY_O_TOP_RIGHT: "O_O__XXXO",
        PLAY_O_MIDDLE_LEFT: "O__O_XXXO",
        PLAY_O_CENTER: "O___OXXXO"
      }
    },
    O____XX_O: {
      on: {
        PLAY_X_TOP_CENTER: "OX___XX_O",
        PLAY_X_TOP_RIGHT: "O_X__XX_O",
        PLAY_X_MIDDLE_LEFT: "O__X_XX_O",
        PLAY_X_CENTER: "O___XXX_O",
        PLAY_X_BOTTOM_CENTER: "O____XXXO"
      }
    },
    O____XX__: {
      on: {
        PLAY_O_TOP_CENTER: "OO___XX__",
        PLAY_O_TOP_RIGHT: "O_O__XX__",
        PLAY_O_MIDDLE_LEFT: "O__O_XX__",
        PLAY_O_CENTER: "O___OXX__",
        PLAY_O_BOTTOM_CENTER: "O____XXO_",
        PLAY_O_BOTTOM_RIGHT: "O____XX_O"
      }
    },
    OOO__X_XX: { on: { "": "O_WINS" } },
    OO_O_X_XX: {
      on: {
        PLAY_X_TOP_RIGHT: "OOXO_X_XX",
        PLAY_X_CENTER: "OO_OXX_XX",
        PLAY_X_BOTTOM_LEFT: "OO_O_XXXX"
      }
    },
    OO__OX_XX: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX_OX_XX",
        PLAY_X_MIDDLE_LEFT: "OO_XOX_XX",
        PLAY_X_BOTTOM_LEFT: "OO__OXXXX"
      }
    },
    OO___XOXX: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX__XOXX",
        PLAY_X_MIDDLE_LEFT: "OO_X_XOXX",
        PLAY_X_CENTER: "OO__XXOXX"
      }
    },
    OO___X_XX: {
      on: {
        PLAY_O_TOP_RIGHT: "OOO__X_XX",
        PLAY_O_MIDDLE_LEFT: "OO_O_X_XX",
        PLAY_O_CENTER: "OO__OX_XX",
        PLAY_O_BOTTOM_LEFT: "OO___XOXX"
      }
    },
    OO___X_X_: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX__X_X_",
        PLAY_X_MIDDLE_LEFT: "OO_X_X_X_",
        PLAY_X_CENTER: "OO__XX_X_",
        PLAY_X_BOTTOM_LEFT: "OO___XXX_",
        PLAY_X_BOTTOM_RIGHT: "OO___X_XX"
      }
    },
    O_OO_X_XX: {
      on: {
        PLAY_X_TOP_CENTER: "OXOO_X_XX",
        PLAY_X_CENTER: "O_OOXX_XX",
        PLAY_X_BOTTOM_LEFT: "O_OO_XXXX"
      }
    },
    O_O_OX_XX: {
      on: {
        PLAY_X_TOP_CENTER: "OXO_OX_XX",
        PLAY_X_MIDDLE_LEFT: "O_OXOX_XX",
        PLAY_X_BOTTOM_LEFT: "O_O_OXXXX"
      }
    },
    O_O__XOXX: {
      on: {
        PLAY_X_TOP_CENTER: "OXO__XOXX",
        PLAY_X_MIDDLE_LEFT: "O_OX_XOXX",
        PLAY_X_CENTER: "O_O_XXOXX"
      }
    },
    O_O__X_XX: {
      on: {
        PLAY_O_TOP_CENTER: "OOO__X_XX",
        PLAY_O_MIDDLE_LEFT: "O_OO_X_XX",
        PLAY_O_CENTER: "O_O_OX_XX",
        PLAY_O_BOTTOM_LEFT: "O_O__XOXX"
      }
    },
    O_O__X_X_: {
      on: {
        PLAY_X_TOP_CENTER: "OXO__X_X_",
        PLAY_X_MIDDLE_LEFT: "O_OX_X_X_",
        PLAY_X_CENTER: "O_O_XX_X_",
        PLAY_X_BOTTOM_LEFT: "O_O__XXX_",
        PLAY_X_BOTTOM_RIGHT: "O_O__X_XX"
      }
    },
    O__OOX_XX: {
      on: {
        PLAY_X_TOP_CENTER: "OX_OOX_XX",
        PLAY_X_TOP_RIGHT: "O_XOOX_XX",
        PLAY_X_BOTTOM_LEFT: "O__OOXXXX"
      }
    },
    O__O_XOXX: { on: { "": "O_WINS" } },
    O__O_X_XX: {
      on: {
        PLAY_O_TOP_CENTER: "OO_O_X_XX",
        PLAY_O_TOP_RIGHT: "O_OO_X_XX",
        PLAY_O_CENTER: "O__OOX_XX",
        PLAY_O_BOTTOM_LEFT: "O__O_XOXX"
      }
    },
    O__O_X_X_: {
      on: {
        PLAY_X_TOP_CENTER: "OX_O_X_X_",
        PLAY_X_TOP_RIGHT: "O_XO_X_X_",
        PLAY_X_CENTER: "O__OXX_X_",
        PLAY_X_BOTTOM_LEFT: "O__O_XXX_",
        PLAY_X_BOTTOM_RIGHT: "O__O_X_XX"
      }
    },
    O___OXOXX: {
      on: {
        PLAY_X_TOP_CENTER: "OX__OXOXX",
        PLAY_X_TOP_RIGHT: "O_X_OXOXX",
        PLAY_X_MIDDLE_LEFT: "O__XOXOXX"
      }
    },
    O___OX_XX: {
      on: {
        PLAY_O_TOP_CENTER: "OO__OX_XX",
        PLAY_O_TOP_RIGHT: "O_O_OX_XX",
        PLAY_O_MIDDLE_LEFT: "O__OOX_XX",
        PLAY_O_BOTTOM_LEFT: "O___OXOXX"
      }
    },
    O___OX_X_: {
      on: {
        PLAY_X_TOP_CENTER: "OX__OX_X_",
        PLAY_X_TOP_RIGHT: "O_X_OX_X_",
        PLAY_X_MIDDLE_LEFT: "O__XOX_X_",
        PLAY_X_BOTTOM_LEFT: "O___OXXX_",
        PLAY_X_BOTTOM_RIGHT: "O___OX_XX"
      }
    },
    O____XOXX: {
      on: {
        PLAY_O_TOP_CENTER: "OO___XOXX",
        PLAY_O_TOP_RIGHT: "O_O__XOXX",
        PLAY_O_MIDDLE_LEFT: "O__O_XOXX",
        PLAY_O_CENTER: "O___OXOXX"
      }
    },
    O____XOX_: {
      on: {
        PLAY_X_TOP_CENTER: "OX___XOX_",
        PLAY_X_TOP_RIGHT: "O_X__XOX_",
        PLAY_X_MIDDLE_LEFT: "O__X_XOX_",
        PLAY_X_CENTER: "O___XXOX_",
        PLAY_X_BOTTOM_RIGHT: "O____XOXX"
      }
    },
    O____X_XO: {
      on: {
        PLAY_X_TOP_CENTER: "OX___X_XO",
        PLAY_X_TOP_RIGHT: "O_X__X_XO",
        PLAY_X_MIDDLE_LEFT: "O__X_X_XO",
        PLAY_X_CENTER: "O___XX_XO",
        PLAY_X_BOTTOM_LEFT: "O____XXXO"
      }
    },
    O____X_X_: {
      on: {
        PLAY_O_TOP_CENTER: "OO___X_X_",
        PLAY_O_TOP_RIGHT: "O_O__X_X_",
        PLAY_O_MIDDLE_LEFT: "O__O_X_X_",
        PLAY_O_CENTER: "O___OX_X_",
        PLAY_O_BOTTOM_LEFT: "O____XOX_",
        PLAY_O_BOTTOM_RIGHT: "O____X_XO"
      }
    },
    OO___X__X: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX__X__X",
        PLAY_X_MIDDLE_LEFT: "OO_X_X__X",
        PLAY_X_CENTER: "OO__XX__X",
        PLAY_X_BOTTOM_LEFT: "OO___XX_X",
        PLAY_X_BOTTOM_CENTER: "OO___X_XX"
      }
    },
    O_O__X__X: {
      on: {
        PLAY_X_TOP_CENTER: "OXO__X__X",
        PLAY_X_MIDDLE_LEFT: "O_OX_X__X",
        PLAY_X_CENTER: "O_O_XX__X",
        PLAY_X_BOTTOM_LEFT: "O_O__XX_X",
        PLAY_X_BOTTOM_CENTER: "O_O__X_XX"
      }
    },
    O__O_X__X: {
      on: {
        PLAY_X_TOP_CENTER: "OX_O_X__X",
        PLAY_X_TOP_RIGHT: "O_XO_X__X",
        PLAY_X_CENTER: "O__OXX__X",
        PLAY_X_BOTTOM_LEFT: "O__O_XX_X",
        PLAY_X_BOTTOM_CENTER: "O__O_X_XX"
      }
    },
    O___OX__X: {
      on: {
        PLAY_X_TOP_CENTER: "OX__OX__X",
        PLAY_X_TOP_RIGHT: "O_X_OX__X",
        PLAY_X_MIDDLE_LEFT: "O__XOX__X",
        PLAY_X_BOTTOM_LEFT: "O___OXX_X",
        PLAY_X_BOTTOM_CENTER: "O___OX_XX"
      }
    },
    O____XO_X: {
      on: {
        PLAY_X_TOP_CENTER: "OX___XO_X",
        PLAY_X_TOP_RIGHT: "O_X__XO_X",
        PLAY_X_MIDDLE_LEFT: "O__X_XO_X",
        PLAY_X_CENTER: "O___XXO_X",
        PLAY_X_BOTTOM_CENTER: "O____XOXX"
      }
    },
    O____X_OX: {
      on: {
        PLAY_X_TOP_CENTER: "OX___X_OX",
        PLAY_X_TOP_RIGHT: "O_X__X_OX",
        PLAY_X_MIDDLE_LEFT: "O__X_X_OX",
        PLAY_X_CENTER: "O___XX_OX",
        PLAY_X_BOTTOM_LEFT: "O____XXOX"
      }
    },
    O____X__X: {
      on: {
        PLAY_O_TOP_CENTER: "OO___X__X",
        PLAY_O_TOP_RIGHT: "O_O__X__X",
        PLAY_O_MIDDLE_LEFT: "O__O_X__X",
        PLAY_O_CENTER: "O___OX__X",
        PLAY_O_BOTTOM_LEFT: "O____XO_X",
        PLAY_O_BOTTOM_CENTER: "O____X_OX"
      }
    },
    O____X___: {
      on: {
        PLAY_X_TOP_CENTER: "OX___X___",
        PLAY_X_TOP_RIGHT: "O_X__X___",
        PLAY_X_MIDDLE_LEFT: "O__X_X___",
        PLAY_X_CENTER: "O___XX___",
        PLAY_X_BOTTOM_LEFT: "O____XX__",
        PLAY_X_BOTTOM_CENTER: "O____X_X_",
        PLAY_X_BOTTOM_RIGHT: "O____X__X"
      }
    },
    _OOO_XXXX: { on: { "": "X_WINS" } },
    _OOO_XXX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOOO_XXX_",
        PLAY_X_CENTER: "_OOOXXXX_",
        PLAY_X_BOTTOM_RIGHT: "_OOO_XXXX"
      }
    },
    _OO_OXXXX: { on: { "": "X_WINS" } },
    _OO_OXXX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOO_OXXX_",
        PLAY_X_MIDDLE_LEFT: "_OOXOXXX_",
        PLAY_X_BOTTOM_RIGHT: "_OO_OXXXX"
      }
    },
    _OO__XXXO: {
      on: {
        PLAY_X_TOP_LEFT: "XOO__XXXO",
        PLAY_X_MIDDLE_LEFT: "_OOX_XXXO",
        PLAY_X_CENTER: "_OO_XXXXO"
      }
    },
    _OO__XXX_: {
      on: {
        PLAY_O_TOP_LEFT: "OOO__XXX_",
        PLAY_O_MIDDLE_LEFT: "_OOO_XXX_",
        PLAY_O_CENTER: "_OO_OXXX_",
        PLAY_O_BOTTOM_RIGHT: "_OO__XXXO"
      }
    },
    _OOO_XX_X: {
      on: {
        PLAY_X_TOP_LEFT: "XOOO_XX_X",
        PLAY_X_CENTER: "_OOOXXX_X",
        PLAY_X_BOTTOM_CENTER: "_OOO_XXXX"
      }
    },
    _OO_OXX_X: {
      on: {
        PLAY_X_TOP_LEFT: "XOO_OXX_X",
        PLAY_X_MIDDLE_LEFT: "_OOXOXX_X",
        PLAY_X_BOTTOM_CENTER: "_OO_OXXXX"
      }
    },
    _OO__XXOX: {
      on: {
        PLAY_X_TOP_LEFT: "XOO__XXOX",
        PLAY_X_MIDDLE_LEFT: "_OOX_XXOX",
        PLAY_X_CENTER: "_OO_XXXOX"
      }
    },
    _OO__XX_X: {
      on: {
        PLAY_O_TOP_LEFT: "OOO__XX_X",
        PLAY_O_MIDDLE_LEFT: "_OOO_XX_X",
        PLAY_O_CENTER: "_OO_OXX_X",
        PLAY_O_BOTTOM_CENTER: "_OO__XXOX"
      }
    },
    _OO__XX__: {
      on: {
        PLAY_X_TOP_LEFT: "XOO__XX__",
        PLAY_X_MIDDLE_LEFT: "_OOX_XX__",
        PLAY_X_CENTER: "_OO_XXX__",
        PLAY_X_BOTTOM_CENTER: "_OO__XXX_",
        PLAY_X_BOTTOM_RIGHT: "_OO__XX_X"
      }
    },
    _O_OOXXXX: { on: { "": "X_WINS" } },
    _O_OOXXX_: {
      on: {
        PLAY_X_TOP_LEFT: "XO_OOXXX_",
        PLAY_X_TOP_RIGHT: "_OXOOXXX_",
        PLAY_X_BOTTOM_RIGHT: "_O_OOXXXX"
      }
    },
    _O_O_XXXO: {
      on: {
        PLAY_X_TOP_LEFT: "XO_O_XXXO",
        PLAY_X_TOP_RIGHT: "_OXO_XXXO",
        PLAY_X_CENTER: "_O_OXXXXO"
      }
    },
    _O_O_XXX_: {
      on: {
        PLAY_O_TOP_LEFT: "OO_O_XXX_",
        PLAY_O_TOP_RIGHT: "_OOO_XXX_",
        PLAY_O_CENTER: "_O_OOXXX_",
        PLAY_O_BOTTOM_RIGHT: "_O_O_XXXO"
      }
    },
    _O_OOXX_X: {
      on: {
        PLAY_X_TOP_LEFT: "XO_OOXX_X",
        PLAY_X_TOP_RIGHT: "_OXOOXX_X",
        PLAY_X_BOTTOM_CENTER: "_O_OOXXXX"
      }
    },
    _O_O_XXOX: {
      on: {
        PLAY_X_TOP_LEFT: "XO_O_XXOX",
        PLAY_X_TOP_RIGHT: "_OXO_XXOX",
        PLAY_X_CENTER: "_O_OXXXOX"
      }
    },
    _O_O_XX_X: {
      on: {
        PLAY_O_TOP_LEFT: "OO_O_XX_X",
        PLAY_O_TOP_RIGHT: "_OOO_XX_X",
        PLAY_O_CENTER: "_O_OOXX_X",
        PLAY_O_BOTTOM_CENTER: "_O_O_XXOX"
      }
    },
    _O_O_XX__: {
      on: {
        PLAY_X_TOP_LEFT: "XO_O_XX__",
        PLAY_X_TOP_RIGHT: "_OXO_XX__",
        PLAY_X_CENTER: "_O_OXXX__",
        PLAY_X_BOTTOM_CENTER: "_O_O_XXX_",
        PLAY_X_BOTTOM_RIGHT: "_O_O_XX_X"
      }
    },
    _O__OXXXO: {
      on: {
        PLAY_X_TOP_LEFT: "XO__OXXXO",
        PLAY_X_TOP_RIGHT: "_OX_OXXXO",
        PLAY_X_MIDDLE_LEFT: "_O_XOXXXO"
      }
    },
    _O__OXXX_: {
      on: {
        PLAY_O_TOP_LEFT: "OO__OXXX_",
        PLAY_O_TOP_RIGHT: "_OO_OXXX_",
        PLAY_O_MIDDLE_LEFT: "_O_OOXXX_",
        PLAY_O_BOTTOM_RIGHT: "_O__OXXXO"
      }
    },
    _O__OXXOX: { on: { "": "O_WINS" } },
    _O__OXX_X: {
      on: {
        PLAY_O_TOP_LEFT: "OO__OXX_X",
        PLAY_O_TOP_RIGHT: "_OO_OXX_X",
        PLAY_O_MIDDLE_LEFT: "_O_OOXX_X",
        PLAY_O_BOTTOM_CENTER: "_O__OXXOX"
      }
    },
    _O__OXX__: {
      on: {
        PLAY_X_TOP_LEFT: "XO__OXX__",
        PLAY_X_TOP_RIGHT: "_OX_OXX__",
        PLAY_X_MIDDLE_LEFT: "_O_XOXX__",
        PLAY_X_BOTTOM_CENTER: "_O__OXXX_",
        PLAY_X_BOTTOM_RIGHT: "_O__OXX_X"
      }
    },
    _O___XXOX: {
      on: {
        PLAY_O_TOP_LEFT: "OO___XXOX",
        PLAY_O_TOP_RIGHT: "_OO__XXOX",
        PLAY_O_MIDDLE_LEFT: "_O_O_XXOX",
        PLAY_O_CENTER: "_O__OXXOX"
      }
    },
    _O___XXO_: {
      on: {
        PLAY_X_TOP_LEFT: "XO___XXO_",
        PLAY_X_TOP_RIGHT: "_OX__XXO_",
        PLAY_X_MIDDLE_LEFT: "_O_X_XXO_",
        PLAY_X_CENTER: "_O__XXXO_",
        PLAY_X_BOTTOM_RIGHT: "_O___XXOX"
      }
    },
    _O___XXXO: {
      on: {
        PLAY_O_TOP_LEFT: "OO___XXXO",
        PLAY_O_TOP_RIGHT: "_OO__XXXO",
        PLAY_O_MIDDLE_LEFT: "_O_O_XXXO",
        PLAY_O_CENTER: "_O__OXXXO"
      }
    },
    _O___XX_O: {
      on: {
        PLAY_X_TOP_LEFT: "XO___XX_O",
        PLAY_X_TOP_RIGHT: "_OX__XX_O",
        PLAY_X_MIDDLE_LEFT: "_O_X_XX_O",
        PLAY_X_CENTER: "_O__XXX_O",
        PLAY_X_BOTTOM_CENTER: "_O___XXXO"
      }
    },
    _O___XX__: {
      on: {
        PLAY_O_TOP_LEFT: "OO___XX__",
        PLAY_O_TOP_RIGHT: "_OO__XX__",
        PLAY_O_MIDDLE_LEFT: "_O_O_XX__",
        PLAY_O_CENTER: "_O__OXX__",
        PLAY_O_BOTTOM_CENTER: "_O___XXO_",
        PLAY_O_BOTTOM_RIGHT: "_O___XX_O"
      }
    },
    _OOO_X_XX: {
      on: {
        PLAY_X_TOP_LEFT: "XOOO_X_XX",
        PLAY_X_CENTER: "_OOOXX_XX",
        PLAY_X_BOTTOM_LEFT: "_OOO_XXXX"
      }
    },
    _OO_OX_XX: {
      on: {
        PLAY_X_TOP_LEFT: "XOO_OX_XX",
        PLAY_X_MIDDLE_LEFT: "_OOXOX_XX",
        PLAY_X_BOTTOM_LEFT: "_OO_OXXXX"
      }
    },
    _OO__XOXX: {
      on: {
        PLAY_X_TOP_LEFT: "XOO__XOXX",
        PLAY_X_MIDDLE_LEFT: "_OOX_XOXX",
        PLAY_X_CENTER: "_OO_XXOXX"
      }
    },
    _OO__X_XX: {
      on: {
        PLAY_O_TOP_LEFT: "OOO__X_XX",
        PLAY_O_MIDDLE_LEFT: "_OOO_X_XX",
        PLAY_O_CENTER: "_OO_OX_XX",
        PLAY_O_BOTTOM_LEFT: "_OO__XOXX"
      }
    },
    _OO__X_X_: {
      on: {
        PLAY_X_TOP_LEFT: "XOO__X_X_",
        PLAY_X_MIDDLE_LEFT: "_OOX_X_X_",
        PLAY_X_CENTER: "_OO_XX_X_",
        PLAY_X_BOTTOM_LEFT: "_OO__XXX_",
        PLAY_X_BOTTOM_RIGHT: "_OO__X_XX"
      }
    },
    _O_OOX_XX: {
      on: {
        PLAY_X_TOP_LEFT: "XO_OOX_XX",
        PLAY_X_TOP_RIGHT: "_OXOOX_XX",
        PLAY_X_BOTTOM_LEFT: "_O_OOXXXX"
      }
    },
    _O_O_XOXX: {
      on: {
        PLAY_X_TOP_LEFT: "XO_O_XOXX",
        PLAY_X_TOP_RIGHT: "_OXO_XOXX",
        PLAY_X_CENTER: "_O_OXXOXX"
      }
    },
    _O_O_X_XX: {
      on: {
        PLAY_O_TOP_LEFT: "OO_O_X_XX",
        PLAY_O_TOP_RIGHT: "_OOO_X_XX",
        PLAY_O_CENTER: "_O_OOX_XX",
        PLAY_O_BOTTOM_LEFT: "_O_O_XOXX"
      }
    },
    _O_O_X_X_: {
      on: {
        PLAY_X_TOP_LEFT: "XO_O_X_X_",
        PLAY_X_TOP_RIGHT: "_OXO_X_X_",
        PLAY_X_CENTER: "_O_OXX_X_",
        PLAY_X_BOTTOM_LEFT: "_O_O_XXX_",
        PLAY_X_BOTTOM_RIGHT: "_O_O_X_XX"
      }
    },
    _O__OXOXX: {
      on: {
        PLAY_X_TOP_LEFT: "XO__OXOXX",
        PLAY_X_TOP_RIGHT: "_OX_OXOXX",
        PLAY_X_MIDDLE_LEFT: "_O_XOXOXX"
      }
    },
    _O__OX_XX: {
      on: {
        PLAY_O_TOP_LEFT: "OO__OX_XX",
        PLAY_O_TOP_RIGHT: "_OO_OX_XX",
        PLAY_O_MIDDLE_LEFT: "_O_OOX_XX",
        PLAY_O_BOTTOM_LEFT: "_O__OXOXX"
      }
    },
    _O__OX_X_: {
      on: {
        PLAY_X_TOP_LEFT: "XO__OX_X_",
        PLAY_X_TOP_RIGHT: "_OX_OX_X_",
        PLAY_X_MIDDLE_LEFT: "_O_XOX_X_",
        PLAY_X_BOTTOM_LEFT: "_O__OXXX_",
        PLAY_X_BOTTOM_RIGHT: "_O__OX_XX"
      }
    },
    _O___XOXX: {
      on: {
        PLAY_O_TOP_LEFT: "OO___XOXX",
        PLAY_O_TOP_RIGHT: "_OO__XOXX",
        PLAY_O_MIDDLE_LEFT: "_O_O_XOXX",
        PLAY_O_CENTER: "_O__OXOXX"
      }
    },
    _O___XOX_: {
      on: {
        PLAY_X_TOP_LEFT: "XO___XOX_",
        PLAY_X_TOP_RIGHT: "_OX__XOX_",
        PLAY_X_MIDDLE_LEFT: "_O_X_XOX_",
        PLAY_X_CENTER: "_O__XXOX_",
        PLAY_X_BOTTOM_RIGHT: "_O___XOXX"
      }
    },
    _O___X_XO: {
      on: {
        PLAY_X_TOP_LEFT: "XO___X_XO",
        PLAY_X_TOP_RIGHT: "_OX__X_XO",
        PLAY_X_MIDDLE_LEFT: "_O_X_X_XO",
        PLAY_X_CENTER: "_O__XX_XO",
        PLAY_X_BOTTOM_LEFT: "_O___XXXO"
      }
    },
    _O___X_X_: {
      on: {
        PLAY_O_TOP_LEFT: "OO___X_X_",
        PLAY_O_TOP_RIGHT: "_OO__X_X_",
        PLAY_O_MIDDLE_LEFT: "_O_O_X_X_",
        PLAY_O_CENTER: "_O__OX_X_",
        PLAY_O_BOTTOM_LEFT: "_O___XOX_",
        PLAY_O_BOTTOM_RIGHT: "_O___X_XO"
      }
    },
    _OO__X__X: {
      on: {
        PLAY_X_TOP_LEFT: "XOO__X__X",
        PLAY_X_MIDDLE_LEFT: "_OOX_X__X",
        PLAY_X_CENTER: "_OO_XX__X",
        PLAY_X_BOTTOM_LEFT: "_OO__XX_X",
        PLAY_X_BOTTOM_CENTER: "_OO__X_XX"
      }
    },
    _O_O_X__X: {
      on: {
        PLAY_X_TOP_LEFT: "XO_O_X__X",
        PLAY_X_TOP_RIGHT: "_OXO_X__X",
        PLAY_X_CENTER: "_O_OXX__X",
        PLAY_X_BOTTOM_LEFT: "_O_O_XX_X",
        PLAY_X_BOTTOM_CENTER: "_O_O_X_XX"
      }
    },
    _O__OX__X: {
      on: {
        PLAY_X_TOP_LEFT: "XO__OX__X",
        PLAY_X_TOP_RIGHT: "_OX_OX__X",
        PLAY_X_MIDDLE_LEFT: "_O_XOX__X",
        PLAY_X_BOTTOM_LEFT: "_O__OXX_X",
        PLAY_X_BOTTOM_CENTER: "_O__OX_XX"
      }
    },
    _O___XO_X: {
      on: {
        PLAY_X_TOP_LEFT: "XO___XO_X",
        PLAY_X_TOP_RIGHT: "_OX__XO_X",
        PLAY_X_MIDDLE_LEFT: "_O_X_XO_X",
        PLAY_X_CENTER: "_O__XXO_X",
        PLAY_X_BOTTOM_CENTER: "_O___XOXX"
      }
    },
    _O___X_OX: {
      on: {
        PLAY_X_TOP_LEFT: "XO___X_OX",
        PLAY_X_TOP_RIGHT: "_OX__X_OX",
        PLAY_X_MIDDLE_LEFT: "_O_X_X_OX",
        PLAY_X_CENTER: "_O__XX_OX",
        PLAY_X_BOTTOM_LEFT: "_O___XXOX"
      }
    },
    _O___X__X: {
      on: {
        PLAY_O_TOP_LEFT: "OO___X__X",
        PLAY_O_TOP_RIGHT: "_OO__X__X",
        PLAY_O_MIDDLE_LEFT: "_O_O_X__X",
        PLAY_O_CENTER: "_O__OX__X",
        PLAY_O_BOTTOM_LEFT: "_O___XO_X",
        PLAY_O_BOTTOM_CENTER: "_O___X_OX"
      }
    },
    _O___X___: {
      on: {
        PLAY_X_TOP_LEFT: "XO___X___",
        PLAY_X_TOP_RIGHT: "_OX__X___",
        PLAY_X_MIDDLE_LEFT: "_O_X_X___",
        PLAY_X_CENTER: "_O__XX___",
        PLAY_X_BOTTOM_LEFT: "_O___XX__",
        PLAY_X_BOTTOM_CENTER: "_O___X_X_",
        PLAY_X_BOTTOM_RIGHT: "_O___X__X"
      }
    },
    __OOOXXXX: { on: { "": "X_WINS" } },
    __OOOXXX_: {
      on: {
        PLAY_X_TOP_LEFT: "X_OOOXXX_",
        PLAY_X_TOP_CENTER: "_XOOOXXX_",
        PLAY_X_BOTTOM_RIGHT: "__OOOXXXX"
      }
    },
    __OO_XXXO: {
      on: {
        PLAY_X_TOP_LEFT: "X_OO_XXXO",
        PLAY_X_TOP_CENTER: "_XOO_XXXO",
        PLAY_X_CENTER: "__OOXXXXO"
      }
    },
    __OO_XXX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_OO_XXX_",
        PLAY_O_TOP_CENTER: "_OOO_XXX_",
        PLAY_O_CENTER: "__OOOXXX_",
        PLAY_O_BOTTOM_RIGHT: "__OO_XXXO"
      }
    },
    __OOOXX_X: {
      on: {
        PLAY_X_TOP_LEFT: "X_OOOXX_X",
        PLAY_X_TOP_CENTER: "_XOOOXX_X",
        PLAY_X_BOTTOM_CENTER: "__OOOXXXX"
      }
    },
    __OO_XXOX: {
      on: {
        PLAY_X_TOP_LEFT: "X_OO_XXOX",
        PLAY_X_TOP_CENTER: "_XOO_XXOX",
        PLAY_X_CENTER: "__OOXXXOX"
      }
    },
    __OO_XX_X: {
      on: {
        PLAY_O_TOP_LEFT: "O_OO_XX_X",
        PLAY_O_TOP_CENTER: "_OOO_XX_X",
        PLAY_O_CENTER: "__OOOXX_X",
        PLAY_O_BOTTOM_CENTER: "__OO_XXOX"
      }
    },
    __OO_XX__: {
      on: {
        PLAY_X_TOP_LEFT: "X_OO_XX__",
        PLAY_X_TOP_CENTER: "_XOO_XX__",
        PLAY_X_CENTER: "__OOXXX__",
        PLAY_X_BOTTOM_CENTER: "__OO_XXX_",
        PLAY_X_BOTTOM_RIGHT: "__OO_XX_X"
      }
    },
    __O_OXXXO: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_OXXXO",
        PLAY_X_TOP_CENTER: "_XO_OXXXO",
        PLAY_X_MIDDLE_LEFT: "__OXOXXXO"
      }
    },
    __O_OXXX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_O_OXXX_",
        PLAY_O_TOP_CENTER: "_OO_OXXX_",
        PLAY_O_MIDDLE_LEFT: "__OOOXXX_",
        PLAY_O_BOTTOM_RIGHT: "__O_OXXXO"
      }
    },
    __O_OXXOX: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_OXXOX",
        PLAY_X_TOP_CENTER: "_XO_OXXOX",
        PLAY_X_MIDDLE_LEFT: "__OXOXXOX"
      }
    },
    __O_OXX_X: {
      on: {
        PLAY_O_TOP_LEFT: "O_O_OXX_X",
        PLAY_O_TOP_CENTER: "_OO_OXX_X",
        PLAY_O_MIDDLE_LEFT: "__OOOXX_X",
        PLAY_O_BOTTOM_CENTER: "__O_OXXOX"
      }
    },
    __O_OXX__: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_OXX__",
        PLAY_X_TOP_CENTER: "_XO_OXX__",
        PLAY_X_MIDDLE_LEFT: "__OXOXX__",
        PLAY_X_BOTTOM_CENTER: "__O_OXXX_",
        PLAY_X_BOTTOM_RIGHT: "__O_OXX_X"
      }
    },
    __O__XXOX: {
      on: {
        PLAY_O_TOP_LEFT: "O_O__XXOX",
        PLAY_O_TOP_CENTER: "_OO__XXOX",
        PLAY_O_MIDDLE_LEFT: "__OO_XXOX",
        PLAY_O_CENTER: "__O_OXXOX"
      }
    },
    __O__XXO_: {
      on: {
        PLAY_X_TOP_LEFT: "X_O__XXO_",
        PLAY_X_TOP_CENTER: "_XO__XXO_",
        PLAY_X_MIDDLE_LEFT: "__OX_XXO_",
        PLAY_X_CENTER: "__O_XXXO_",
        PLAY_X_BOTTOM_RIGHT: "__O__XXOX"
      }
    },
    __O__XXXO: {
      on: {
        PLAY_O_TOP_LEFT: "O_O__XXXO",
        PLAY_O_TOP_CENTER: "_OO__XXXO",
        PLAY_O_MIDDLE_LEFT: "__OO_XXXO",
        PLAY_O_CENTER: "__O_OXXXO"
      }
    },
    __O__XX_O: {
      on: {
        PLAY_X_TOP_LEFT: "X_O__XX_O",
        PLAY_X_TOP_CENTER: "_XO__XX_O",
        PLAY_X_MIDDLE_LEFT: "__OX_XX_O",
        PLAY_X_CENTER: "__O_XXX_O",
        PLAY_X_BOTTOM_CENTER: "__O__XXXO"
      }
    },
    __O__XX__: {
      on: {
        PLAY_O_TOP_LEFT: "O_O__XX__",
        PLAY_O_TOP_CENTER: "_OO__XX__",
        PLAY_O_MIDDLE_LEFT: "__OO_XX__",
        PLAY_O_CENTER: "__O_OXX__",
        PLAY_O_BOTTOM_CENTER: "__O__XXO_",
        PLAY_O_BOTTOM_RIGHT: "__O__XX_O"
      }
    },
    __OOOX_XX: {
      on: {
        PLAY_X_TOP_LEFT: "X_OOOX_XX",
        PLAY_X_TOP_CENTER: "_XOOOX_XX",
        PLAY_X_BOTTOM_LEFT: "__OOOXXXX"
      }
    },
    __OO_XOXX: {
      on: {
        PLAY_X_TOP_LEFT: "X_OO_XOXX",
        PLAY_X_TOP_CENTER: "_XOO_XOXX",
        PLAY_X_CENTER: "__OOXXOXX"
      }
    },
    __OO_X_XX: {
      on: {
        PLAY_O_TOP_LEFT: "O_OO_X_XX",
        PLAY_O_TOP_CENTER: "_OOO_X_XX",
        PLAY_O_CENTER: "__OOOX_XX",
        PLAY_O_BOTTOM_LEFT: "__OO_XOXX"
      }
    },
    __OO_X_X_: {
      on: {
        PLAY_X_TOP_LEFT: "X_OO_X_X_",
        PLAY_X_TOP_CENTER: "_XOO_X_X_",
        PLAY_X_CENTER: "__OOXX_X_",
        PLAY_X_BOTTOM_LEFT: "__OO_XXX_",
        PLAY_X_BOTTOM_RIGHT: "__OO_X_XX"
      }
    },
    __O_OXOXX: { on: { "": "O_WINS" } },
    __O_OX_XX: {
      on: {
        PLAY_O_TOP_LEFT: "O_O_OX_XX",
        PLAY_O_TOP_CENTER: "_OO_OX_XX",
        PLAY_O_MIDDLE_LEFT: "__OOOX_XX",
        PLAY_O_BOTTOM_LEFT: "__O_OXOXX"
      }
    },
    __O_OX_X_: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_OX_X_",
        PLAY_X_TOP_CENTER: "_XO_OX_X_",
        PLAY_X_MIDDLE_LEFT: "__OXOX_X_",
        PLAY_X_BOTTOM_LEFT: "__O_OXXX_",
        PLAY_X_BOTTOM_RIGHT: "__O_OX_XX"
      }
    },
    __O__XOXX: {
      on: {
        PLAY_O_TOP_LEFT: "O_O__XOXX",
        PLAY_O_TOP_CENTER: "_OO__XOXX",
        PLAY_O_MIDDLE_LEFT: "__OO_XOXX",
        PLAY_O_CENTER: "__O_OXOXX"
      }
    },
    __O__XOX_: {
      on: {
        PLAY_X_TOP_LEFT: "X_O__XOX_",
        PLAY_X_TOP_CENTER: "_XO__XOX_",
        PLAY_X_MIDDLE_LEFT: "__OX_XOX_",
        PLAY_X_CENTER: "__O_XXOX_",
        PLAY_X_BOTTOM_RIGHT: "__O__XOXX"
      }
    },
    __O__X_XO: {
      on: {
        PLAY_X_TOP_LEFT: "X_O__X_XO",
        PLAY_X_TOP_CENTER: "_XO__X_XO",
        PLAY_X_MIDDLE_LEFT: "__OX_X_XO",
        PLAY_X_CENTER: "__O_XX_XO",
        PLAY_X_BOTTOM_LEFT: "__O__XXXO"
      }
    },
    __O__X_X_: {
      on: {
        PLAY_O_TOP_LEFT: "O_O__X_X_",
        PLAY_O_TOP_CENTER: "_OO__X_X_",
        PLAY_O_MIDDLE_LEFT: "__OO_X_X_",
        PLAY_O_CENTER: "__O_OX_X_",
        PLAY_O_BOTTOM_LEFT: "__O__XOX_",
        PLAY_O_BOTTOM_RIGHT: "__O__X_XO"
      }
    },
    __OO_X__X: {
      on: {
        PLAY_X_TOP_LEFT: "X_OO_X__X",
        PLAY_X_TOP_CENTER: "_XOO_X__X",
        PLAY_X_CENTER: "__OOXX__X",
        PLAY_X_BOTTOM_LEFT: "__OO_XX_X",
        PLAY_X_BOTTOM_CENTER: "__OO_X_XX"
      }
    },
    __O_OX__X: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_OX__X",
        PLAY_X_TOP_CENTER: "_XO_OX__X",
        PLAY_X_MIDDLE_LEFT: "__OXOX__X",
        PLAY_X_BOTTOM_LEFT: "__O_OXX_X",
        PLAY_X_BOTTOM_CENTER: "__O_OX_XX"
      }
    },
    __O__XO_X: {
      on: {
        PLAY_X_TOP_LEFT: "X_O__XO_X",
        PLAY_X_TOP_CENTER: "_XO__XO_X",
        PLAY_X_MIDDLE_LEFT: "__OX_XO_X",
        PLAY_X_CENTER: "__O_XXO_X",
        PLAY_X_BOTTOM_CENTER: "__O__XOXX"
      }
    },
    __O__X_OX: {
      on: {
        PLAY_X_TOP_LEFT: "X_O__X_OX",
        PLAY_X_TOP_CENTER: "_XO__X_OX",
        PLAY_X_MIDDLE_LEFT: "__OX_X_OX",
        PLAY_X_CENTER: "__O_XX_OX",
        PLAY_X_BOTTOM_LEFT: "__O__XXOX"
      }
    },
    __O__X__X: {
      on: {
        PLAY_O_TOP_LEFT: "O_O__X__X",
        PLAY_O_TOP_CENTER: "_OO__X__X",
        PLAY_O_MIDDLE_LEFT: "__OO_X__X",
        PLAY_O_CENTER: "__O_OX__X",
        PLAY_O_BOTTOM_LEFT: "__O__XO_X",
        PLAY_O_BOTTOM_CENTER: "__O__X_OX"
      }
    },
    __O__X___: {
      on: {
        PLAY_X_TOP_LEFT: "X_O__X___",
        PLAY_X_TOP_CENTER: "_XO__X___",
        PLAY_X_MIDDLE_LEFT: "__OX_X___",
        PLAY_X_CENTER: "__O_XX___",
        PLAY_X_BOTTOM_LEFT: "__O__XX__",
        PLAY_X_BOTTOM_CENTER: "__O__X_X_",
        PLAY_X_BOTTOM_RIGHT: "__O__X__X"
      }
    },
    ___OOXXXO: {
      on: {
        PLAY_X_TOP_LEFT: "X__OOXXXO",
        PLAY_X_TOP_CENTER: "_X_OOXXXO",
        PLAY_X_TOP_RIGHT: "__XOOXXXO"
      }
    },
    ___OOXXX_: {
      on: {
        PLAY_O_TOP_LEFT: "O__OOXXX_",
        PLAY_O_TOP_CENTER: "_O_OOXXX_",
        PLAY_O_TOP_RIGHT: "__OOOXXX_",
        PLAY_O_BOTTOM_RIGHT: "___OOXXXO"
      }
    },
    ___OOXXOX: {
      on: {
        PLAY_X_TOP_LEFT: "X__OOXXOX",
        PLAY_X_TOP_CENTER: "_X_OOXXOX",
        PLAY_X_TOP_RIGHT: "__XOOXXOX"
      }
    },
    ___OOXX_X: {
      on: {
        PLAY_O_TOP_LEFT: "O__OOXX_X",
        PLAY_O_TOP_CENTER: "_O_OOXX_X",
        PLAY_O_TOP_RIGHT: "__OOOXX_X",
        PLAY_O_BOTTOM_CENTER: "___OOXXOX"
      }
    },
    ___OOXX__: {
      on: {
        PLAY_X_TOP_LEFT: "X__OOXX__",
        PLAY_X_TOP_CENTER: "_X_OOXX__",
        PLAY_X_TOP_RIGHT: "__XOOXX__",
        PLAY_X_BOTTOM_CENTER: "___OOXXX_",
        PLAY_X_BOTTOM_RIGHT: "___OOXX_X"
      }
    },
    ___O_XXOX: {
      on: {
        PLAY_O_TOP_LEFT: "O__O_XXOX",
        PLAY_O_TOP_CENTER: "_O_O_XXOX",
        PLAY_O_TOP_RIGHT: "__OO_XXOX",
        PLAY_O_CENTER: "___OOXXOX"
      }
    },
    ___O_XXO_: {
      on: {
        PLAY_X_TOP_LEFT: "X__O_XXO_",
        PLAY_X_TOP_CENTER: "_X_O_XXO_",
        PLAY_X_TOP_RIGHT: "__XO_XXO_",
        PLAY_X_CENTER: "___OXXXO_",
        PLAY_X_BOTTOM_RIGHT: "___O_XXOX"
      }
    },
    ___O_XXXO: {
      on: {
        PLAY_O_TOP_LEFT: "O__O_XXXO",
        PLAY_O_TOP_CENTER: "_O_O_XXXO",
        PLAY_O_TOP_RIGHT: "__OO_XXXO",
        PLAY_O_CENTER: "___OOXXXO"
      }
    },
    ___O_XX_O: {
      on: {
        PLAY_X_TOP_LEFT: "X__O_XX_O",
        PLAY_X_TOP_CENTER: "_X_O_XX_O",
        PLAY_X_TOP_RIGHT: "__XO_XX_O",
        PLAY_X_CENTER: "___OXXX_O",
        PLAY_X_BOTTOM_CENTER: "___O_XXXO"
      }
    },
    ___O_XX__: {
      on: {
        PLAY_O_TOP_LEFT: "O__O_XX__",
        PLAY_O_TOP_CENTER: "_O_O_XX__",
        PLAY_O_TOP_RIGHT: "__OO_XX__",
        PLAY_O_CENTER: "___OOXX__",
        PLAY_O_BOTTOM_CENTER: "___O_XXO_",
        PLAY_O_BOTTOM_RIGHT: "___O_XX_O"
      }
    },
    ___OOXOXX: {
      on: {
        PLAY_X_TOP_LEFT: "X__OOXOXX",
        PLAY_X_TOP_CENTER: "_X_OOXOXX",
        PLAY_X_TOP_RIGHT: "__XOOXOXX"
      }
    },
    ___OOX_XX: {
      on: {
        PLAY_O_TOP_LEFT: "O__OOX_XX",
        PLAY_O_TOP_CENTER: "_O_OOX_XX",
        PLAY_O_TOP_RIGHT: "__OOOX_XX",
        PLAY_O_BOTTOM_LEFT: "___OOXOXX"
      }
    },
    ___OOX_X_: {
      on: {
        PLAY_X_TOP_LEFT: "X__OOX_X_",
        PLAY_X_TOP_CENTER: "_X_OOX_X_",
        PLAY_X_TOP_RIGHT: "__XOOX_X_",
        PLAY_X_BOTTOM_LEFT: "___OOXXX_",
        PLAY_X_BOTTOM_RIGHT: "___OOX_XX"
      }
    },
    ___O_XOXX: {
      on: {
        PLAY_O_TOP_LEFT: "O__O_XOXX",
        PLAY_O_TOP_CENTER: "_O_O_XOXX",
        PLAY_O_TOP_RIGHT: "__OO_XOXX",
        PLAY_O_CENTER: "___OOXOXX"
      }
    },
    ___O_XOX_: {
      on: {
        PLAY_X_TOP_LEFT: "X__O_XOX_",
        PLAY_X_TOP_CENTER: "_X_O_XOX_",
        PLAY_X_TOP_RIGHT: "__XO_XOX_",
        PLAY_X_CENTER: "___OXXOX_",
        PLAY_X_BOTTOM_RIGHT: "___O_XOXX"
      }
    },
    ___O_X_XO: {
      on: {
        PLAY_X_TOP_LEFT: "X__O_X_XO",
        PLAY_X_TOP_CENTER: "_X_O_X_XO",
        PLAY_X_TOP_RIGHT: "__XO_X_XO",
        PLAY_X_CENTER: "___OXX_XO",
        PLAY_X_BOTTOM_LEFT: "___O_XXXO"
      }
    },
    ___O_X_X_: {
      on: {
        PLAY_O_TOP_LEFT: "O__O_X_X_",
        PLAY_O_TOP_CENTER: "_O_O_X_X_",
        PLAY_O_TOP_RIGHT: "__OO_X_X_",
        PLAY_O_CENTER: "___OOX_X_",
        PLAY_O_BOTTOM_LEFT: "___O_XOX_",
        PLAY_O_BOTTOM_RIGHT: "___O_X_XO"
      }
    },
    ___OOX__X: {
      on: {
        PLAY_X_TOP_LEFT: "X__OOX__X",
        PLAY_X_TOP_CENTER: "_X_OOX__X",
        PLAY_X_TOP_RIGHT: "__XOOX__X",
        PLAY_X_BOTTOM_LEFT: "___OOXX_X",
        PLAY_X_BOTTOM_CENTER: "___OOX_XX"
      }
    },
    ___O_XO_X: {
      on: {
        PLAY_X_TOP_LEFT: "X__O_XO_X",
        PLAY_X_TOP_CENTER: "_X_O_XO_X",
        PLAY_X_TOP_RIGHT: "__XO_XO_X",
        PLAY_X_CENTER: "___OXXO_X",
        PLAY_X_BOTTOM_CENTER: "___O_XOXX"
      }
    },
    ___O_X_OX: {
      on: {
        PLAY_X_TOP_LEFT: "X__O_X_OX",
        PLAY_X_TOP_CENTER: "_X_O_X_OX",
        PLAY_X_TOP_RIGHT: "__XO_X_OX",
        PLAY_X_CENTER: "___OXX_OX",
        PLAY_X_BOTTOM_LEFT: "___O_XXOX"
      }
    },
    ___O_X__X: {
      on: {
        PLAY_O_TOP_LEFT: "O__O_X__X",
        PLAY_O_TOP_CENTER: "_O_O_X__X",
        PLAY_O_TOP_RIGHT: "__OO_X__X",
        PLAY_O_CENTER: "___OOX__X",
        PLAY_O_BOTTOM_LEFT: "___O_XO_X",
        PLAY_O_BOTTOM_CENTER: "___O_X_OX"
      }
    },
    ___O_X___: {
      on: {
        PLAY_X_TOP_LEFT: "X__O_X___",
        PLAY_X_TOP_CENTER: "_X_O_X___",
        PLAY_X_TOP_RIGHT: "__XO_X___",
        PLAY_X_CENTER: "___OXX___",
        PLAY_X_BOTTOM_LEFT: "___O_XX__",
        PLAY_X_BOTTOM_CENTER: "___O_X_X_",
        PLAY_X_BOTTOM_RIGHT: "___O_X__X"
      }
    },
    ____OXXOX: {
      on: {
        PLAY_O_TOP_LEFT: "O___OXXOX",
        PLAY_O_TOP_CENTER: "_O__OXXOX",
        PLAY_O_TOP_RIGHT: "__O_OXXOX",
        PLAY_O_MIDDLE_LEFT: "___OOXXOX"
      }
    },
    ____OXXO_: {
      on: {
        PLAY_X_TOP_LEFT: "X___OXXO_",
        PLAY_X_TOP_CENTER: "_X__OXXO_",
        PLAY_X_TOP_RIGHT: "__X_OXXO_",
        PLAY_X_MIDDLE_LEFT: "___XOXXO_",
        PLAY_X_BOTTOM_RIGHT: "____OXXOX"
      }
    },
    ____OXXXO: {
      on: {
        PLAY_O_TOP_LEFT: "O___OXXXO",
        PLAY_O_TOP_CENTER: "_O__OXXXO",
        PLAY_O_TOP_RIGHT: "__O_OXXXO",
        PLAY_O_MIDDLE_LEFT: "___OOXXXO"
      }
    },
    ____OXX_O: {
      on: {
        PLAY_X_TOP_LEFT: "X___OXX_O",
        PLAY_X_TOP_CENTER: "_X__OXX_O",
        PLAY_X_TOP_RIGHT: "__X_OXX_O",
        PLAY_X_MIDDLE_LEFT: "___XOXX_O",
        PLAY_X_BOTTOM_CENTER: "____OXXXO"
      }
    },
    ____OXX__: {
      on: {
        PLAY_O_TOP_LEFT: "O___OXX__",
        PLAY_O_TOP_CENTER: "_O__OXX__",
        PLAY_O_TOP_RIGHT: "__O_OXX__",
        PLAY_O_MIDDLE_LEFT: "___OOXX__",
        PLAY_O_BOTTOM_CENTER: "____OXXO_",
        PLAY_O_BOTTOM_RIGHT: "____OXX_O"
      }
    },
    ____OXOXX: {
      on: {
        PLAY_O_TOP_LEFT: "O___OXOXX",
        PLAY_O_TOP_CENTER: "_O__OXOXX",
        PLAY_O_TOP_RIGHT: "__O_OXOXX",
        PLAY_O_MIDDLE_LEFT: "___OOXOXX"
      }
    },
    ____OXOX_: {
      on: {
        PLAY_X_TOP_LEFT: "X___OXOX_",
        PLAY_X_TOP_CENTER: "_X__OXOX_",
        PLAY_X_TOP_RIGHT: "__X_OXOX_",
        PLAY_X_MIDDLE_LEFT: "___XOXOX_",
        PLAY_X_BOTTOM_RIGHT: "____OXOXX"
      }
    },
    ____OX_XO: {
      on: {
        PLAY_X_TOP_LEFT: "X___OX_XO",
        PLAY_X_TOP_CENTER: "_X__OX_XO",
        PLAY_X_TOP_RIGHT: "__X_OX_XO",
        PLAY_X_MIDDLE_LEFT: "___XOX_XO",
        PLAY_X_BOTTOM_LEFT: "____OXXXO"
      }
    },
    ____OX_X_: {
      on: {
        PLAY_O_TOP_LEFT: "O___OX_X_",
        PLAY_O_TOP_CENTER: "_O__OX_X_",
        PLAY_O_TOP_RIGHT: "__O_OX_X_",
        PLAY_O_MIDDLE_LEFT: "___OOX_X_",
        PLAY_O_BOTTOM_LEFT: "____OXOX_",
        PLAY_O_BOTTOM_RIGHT: "____OX_XO"
      }
    },
    ____OXO_X: {
      on: {
        PLAY_X_TOP_LEFT: "X___OXO_X",
        PLAY_X_TOP_CENTER: "_X__OXO_X",
        PLAY_X_TOP_RIGHT: "__X_OXO_X",
        PLAY_X_MIDDLE_LEFT: "___XOXO_X",
        PLAY_X_BOTTOM_CENTER: "____OXOXX"
      }
    },
    ____OX_OX: {
      on: {
        PLAY_X_TOP_LEFT: "X___OX_OX",
        PLAY_X_TOP_CENTER: "_X__OX_OX",
        PLAY_X_TOP_RIGHT: "__X_OX_OX",
        PLAY_X_MIDDLE_LEFT: "___XOX_OX",
        PLAY_X_BOTTOM_LEFT: "____OXXOX"
      }
    },
    ____OX__X: {
      on: {
        PLAY_O_TOP_LEFT: "O___OX__X",
        PLAY_O_TOP_CENTER: "_O__OX__X",
        PLAY_O_TOP_RIGHT: "__O_OX__X",
        PLAY_O_MIDDLE_LEFT: "___OOX__X",
        PLAY_O_BOTTOM_LEFT: "____OXO_X",
        PLAY_O_BOTTOM_CENTER: "____OX_OX"
      }
    },
    ____OX___: {
      on: {
        PLAY_X_TOP_LEFT: "X___OX___",
        PLAY_X_TOP_CENTER: "_X__OX___",
        PLAY_X_TOP_RIGHT: "__X_OX___",
        PLAY_X_MIDDLE_LEFT: "___XOX___",
        PLAY_X_BOTTOM_LEFT: "____OXX__",
        PLAY_X_BOTTOM_CENTER: "____OX_X_",
        PLAY_X_BOTTOM_RIGHT: "____OX__X"
      }
    },
    _____XOXO: {
      on: {
        PLAY_X_TOP_LEFT: "X____XOXO",
        PLAY_X_TOP_CENTER: "_X___XOXO",
        PLAY_X_TOP_RIGHT: "__X__XOXO",
        PLAY_X_MIDDLE_LEFT: "___X_XOXO",
        PLAY_X_CENTER: "____XXOXO"
      }
    },
    _____XOX_: {
      on: {
        PLAY_O_TOP_LEFT: "O____XOX_",
        PLAY_O_TOP_CENTER: "_O___XOX_",
        PLAY_O_TOP_RIGHT: "__O__XOX_",
        PLAY_O_MIDDLE_LEFT: "___O_XOX_",
        PLAY_O_CENTER: "____OXOX_",
        PLAY_O_BOTTOM_RIGHT: "_____XOXO"
      }
    },
    _____XOOX: {
      on: {
        PLAY_X_TOP_LEFT: "X____XOOX",
        PLAY_X_TOP_CENTER: "_X___XOOX",
        PLAY_X_TOP_RIGHT: "__X__XOOX",
        PLAY_X_MIDDLE_LEFT: "___X_XOOX",
        PLAY_X_CENTER: "____XXOOX"
      }
    },
    _____XO_X: {
      on: {
        PLAY_O_TOP_LEFT: "O____XO_X",
        PLAY_O_TOP_CENTER: "_O___XO_X",
        PLAY_O_TOP_RIGHT: "__O__XO_X",
        PLAY_O_MIDDLE_LEFT: "___O_XO_X",
        PLAY_O_CENTER: "____OXO_X",
        PLAY_O_BOTTOM_CENTER: "_____XOOX"
      }
    },
    _____XO__: {
      on: {
        PLAY_X_TOP_LEFT: "X____XO__",
        PLAY_X_TOP_CENTER: "_X___XO__",
        PLAY_X_TOP_RIGHT: "__X__XO__",
        PLAY_X_MIDDLE_LEFT: "___X_XO__",
        PLAY_X_CENTER: "____XXO__",
        PLAY_X_BOTTOM_CENTER: "_____XOX_",
        PLAY_X_BOTTOM_RIGHT: "_____XO_X"
      }
    },
    _____XXOO: {
      on: {
        PLAY_X_TOP_LEFT: "X____XXOO",
        PLAY_X_TOP_CENTER: "_X___XXOO",
        PLAY_X_TOP_RIGHT: "__X__XXOO",
        PLAY_X_MIDDLE_LEFT: "___X_XXOO",
        PLAY_X_CENTER: "____XXXOO"
      }
    },
    _____XXO_: {
      on: {
        PLAY_O_TOP_LEFT: "O____XXO_",
        PLAY_O_TOP_CENTER: "_O___XXO_",
        PLAY_O_TOP_RIGHT: "__O__XXO_",
        PLAY_O_MIDDLE_LEFT: "___O_XXO_",
        PLAY_O_CENTER: "____OXXO_",
        PLAY_O_BOTTOM_RIGHT: "_____XXOO"
      }
    },
    _____X_OX: {
      on: {
        PLAY_O_TOP_LEFT: "O____X_OX",
        PLAY_O_TOP_CENTER: "_O___X_OX",
        PLAY_O_TOP_RIGHT: "__O__X_OX",
        PLAY_O_MIDDLE_LEFT: "___O_X_OX",
        PLAY_O_CENTER: "____OX_OX",
        PLAY_O_BOTTOM_LEFT: "_____XOOX"
      }
    },
    _____X_O_: {
      on: {
        PLAY_X_TOP_LEFT: "X____X_O_",
        PLAY_X_TOP_CENTER: "_X___X_O_",
        PLAY_X_TOP_RIGHT: "__X__X_O_",
        PLAY_X_MIDDLE_LEFT: "___X_X_O_",
        PLAY_X_CENTER: "____XX_O_",
        PLAY_X_BOTTOM_LEFT: "_____XXO_",
        PLAY_X_BOTTOM_RIGHT: "_____X_OX"
      }
    },
    _____XX_O: {
      on: {
        PLAY_O_TOP_LEFT: "O____XX_O",
        PLAY_O_TOP_CENTER: "_O___XX_O",
        PLAY_O_TOP_RIGHT: "__O__XX_O",
        PLAY_O_MIDDLE_LEFT: "___O_XX_O",
        PLAY_O_CENTER: "____OXX_O",
        PLAY_O_BOTTOM_CENTER: "_____XXOO"
      }
    },
    _____X_XO: {
      on: {
        PLAY_O_TOP_LEFT: "O____X_XO",
        PLAY_O_TOP_CENTER: "_O___X_XO",
        PLAY_O_TOP_RIGHT: "__O__X_XO",
        PLAY_O_MIDDLE_LEFT: "___O_X_XO",
        PLAY_O_CENTER: "____OX_XO",
        PLAY_O_BOTTOM_LEFT: "_____XOXO"
      }
    },
    _____X__O: {
      on: {
        PLAY_X_TOP_LEFT: "X____X__O",
        PLAY_X_TOP_CENTER: "_X___X__O",
        PLAY_X_TOP_RIGHT: "__X__X__O",
        PLAY_X_MIDDLE_LEFT: "___X_X__O",
        PLAY_X_CENTER: "____XX__O",
        PLAY_X_BOTTOM_LEFT: "_____XX_O",
        PLAY_X_BOTTOM_CENTER: "_____X_XO"
      }
    },
    _____X___: {
      on: {
        PLAY_O_TOP_LEFT: "O____X___",
        PLAY_O_TOP_CENTER: "_O___X___",
        PLAY_O_TOP_RIGHT: "__O__X___",
        PLAY_O_MIDDLE_LEFT: "___O_X___",
        PLAY_O_CENTER: "____OX___",
        PLAY_O_BOTTOM_LEFT: "_____XO__",
        PLAY_O_BOTTOM_CENTER: "_____X_O_",
        PLAY_O_BOTTOM_RIGHT: "_____X__O"
      }
    },
    OO____XXX: { on: { "": "X_WINS" } },
    OO____XX_: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX___XX_",
        PLAY_X_MIDDLE_LEFT: "OO_X__XX_",
        PLAY_X_CENTER: "OO__X_XX_",
        PLAY_X_MIDDLE_RIGHT: "OO___XXX_",
        PLAY_X_BOTTOM_RIGHT: "OO____XXX"
      }
    },
    O_O___XXX: { on: { "": "X_WINS" } },
    O_O___XX_: {
      on: {
        PLAY_X_TOP_CENTER: "OXO___XX_",
        PLAY_X_MIDDLE_LEFT: "O_OX__XX_",
        PLAY_X_CENTER: "O_O_X_XX_",
        PLAY_X_MIDDLE_RIGHT: "O_O__XXX_",
        PLAY_X_BOTTOM_RIGHT: "O_O___XXX"
      }
    },
    O__O__XXX: { on: { "": "X_WINS" } },
    O__O__XX_: {
      on: {
        PLAY_X_TOP_CENTER: "OX_O__XX_",
        PLAY_X_TOP_RIGHT: "O_XO__XX_",
        PLAY_X_CENTER: "O__OX_XX_",
        PLAY_X_MIDDLE_RIGHT: "O__O_XXX_",
        PLAY_X_BOTTOM_RIGHT: "O__O__XXX"
      }
    },
    O___O_XXX: { on: { "": "X_WINS" } },
    O___O_XX_: {
      on: {
        PLAY_X_TOP_CENTER: "OX__O_XX_",
        PLAY_X_TOP_RIGHT: "O_X_O_XX_",
        PLAY_X_MIDDLE_LEFT: "O__XO_XX_",
        PLAY_X_MIDDLE_RIGHT: "O___OXXX_",
        PLAY_X_BOTTOM_RIGHT: "O___O_XXX"
      }
    },
    O____OXXX: { on: { "": "X_WINS" } },
    O____OXX_: {
      on: {
        PLAY_X_TOP_CENTER: "OX___OXX_",
        PLAY_X_TOP_RIGHT: "O_X__OXX_",
        PLAY_X_MIDDLE_LEFT: "O__X_OXX_",
        PLAY_X_CENTER: "O___XOXX_",
        PLAY_X_BOTTOM_RIGHT: "O____OXXX"
      }
    },
    O_____XXO: {
      on: {
        PLAY_X_TOP_CENTER: "OX____XXO",
        PLAY_X_TOP_RIGHT: "O_X___XXO",
        PLAY_X_MIDDLE_LEFT: "O__X__XXO",
        PLAY_X_CENTER: "O___X_XXO",
        PLAY_X_MIDDLE_RIGHT: "O____XXXO"
      }
    },
    O_____XX_: {
      on: {
        PLAY_O_TOP_CENTER: "OO____XX_",
        PLAY_O_TOP_RIGHT: "O_O___XX_",
        PLAY_O_MIDDLE_LEFT: "O__O__XX_",
        PLAY_O_CENTER: "O___O_XX_",
        PLAY_O_MIDDLE_RIGHT: "O____OXX_",
        PLAY_O_BOTTOM_RIGHT: "O_____XXO"
      }
    },
    OO____X_X: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX___X_X",
        PLAY_X_MIDDLE_LEFT: "OO_X__X_X",
        PLAY_X_CENTER: "OO__X_X_X",
        PLAY_X_MIDDLE_RIGHT: "OO___XX_X",
        PLAY_X_BOTTOM_CENTER: "OO____XXX"
      }
    },
    O_O___X_X: {
      on: {
        PLAY_X_TOP_CENTER: "OXO___X_X",
        PLAY_X_MIDDLE_LEFT: "O_OX__X_X",
        PLAY_X_CENTER: "O_O_X_X_X",
        PLAY_X_MIDDLE_RIGHT: "O_O__XX_X",
        PLAY_X_BOTTOM_CENTER: "O_O___XXX"
      }
    },
    O__O__X_X: {
      on: {
        PLAY_X_TOP_CENTER: "OX_O__X_X",
        PLAY_X_TOP_RIGHT: "O_XO__X_X",
        PLAY_X_CENTER: "O__OX_X_X",
        PLAY_X_MIDDLE_RIGHT: "O__O_XX_X",
        PLAY_X_BOTTOM_CENTER: "O__O__XXX"
      }
    },
    O___O_X_X: {
      on: {
        PLAY_X_TOP_CENTER: "OX__O_X_X",
        PLAY_X_TOP_RIGHT: "O_X_O_X_X",
        PLAY_X_MIDDLE_LEFT: "O__XO_X_X",
        PLAY_X_MIDDLE_RIGHT: "O___OXX_X",
        PLAY_X_BOTTOM_CENTER: "O___O_XXX"
      }
    },
    O____OX_X: {
      on: {
        PLAY_X_TOP_CENTER: "OX___OX_X",
        PLAY_X_TOP_RIGHT: "O_X__OX_X",
        PLAY_X_MIDDLE_LEFT: "O__X_OX_X",
        PLAY_X_CENTER: "O___XOX_X",
        PLAY_X_BOTTOM_CENTER: "O____OXXX"
      }
    },
    O_____XOX: {
      on: {
        PLAY_X_TOP_CENTER: "OX____XOX",
        PLAY_X_TOP_RIGHT: "O_X___XOX",
        PLAY_X_MIDDLE_LEFT: "O__X__XOX",
        PLAY_X_CENTER: "O___X_XOX",
        PLAY_X_MIDDLE_RIGHT: "O____XXOX"
      }
    },
    O_____X_X: {
      on: {
        PLAY_O_TOP_CENTER: "OO____X_X",
        PLAY_O_TOP_RIGHT: "O_O___X_X",
        PLAY_O_MIDDLE_LEFT: "O__O__X_X",
        PLAY_O_CENTER: "O___O_X_X",
        PLAY_O_MIDDLE_RIGHT: "O____OX_X",
        PLAY_O_BOTTOM_CENTER: "O_____XOX"
      }
    },
    O_____X__: {
      on: {
        PLAY_X_TOP_CENTER: "OX____X__",
        PLAY_X_TOP_RIGHT: "O_X___X__",
        PLAY_X_MIDDLE_LEFT: "O__X__X__",
        PLAY_X_CENTER: "O___X_X__",
        PLAY_X_MIDDLE_RIGHT: "O____XX__",
        PLAY_X_BOTTOM_CENTER: "O_____XX_",
        PLAY_X_BOTTOM_RIGHT: "O_____X_X"
      }
    },
    _OO___XXX: { on: { "": "X_WINS" } },
    _OO___XX_: {
      on: {
        PLAY_X_TOP_LEFT: "XOO___XX_",
        PLAY_X_MIDDLE_LEFT: "_OOX__XX_",
        PLAY_X_CENTER: "_OO_X_XX_",
        PLAY_X_MIDDLE_RIGHT: "_OO__XXX_",
        PLAY_X_BOTTOM_RIGHT: "_OO___XXX"
      }
    },
    _O_O__XXX: { on: { "": "X_WINS" } },
    _O_O__XX_: {
      on: {
        PLAY_X_TOP_LEFT: "XO_O__XX_",
        PLAY_X_TOP_RIGHT: "_OXO__XX_",
        PLAY_X_CENTER: "_O_OX_XX_",
        PLAY_X_MIDDLE_RIGHT: "_O_O_XXX_",
        PLAY_X_BOTTOM_RIGHT: "_O_O__XXX"
      }
    },
    _O__O_XXX: { on: { "": "X_WINS" } },
    _O__O_XX_: {
      on: {
        PLAY_X_TOP_LEFT: "XO__O_XX_",
        PLAY_X_TOP_RIGHT: "_OX_O_XX_",
        PLAY_X_MIDDLE_LEFT: "_O_XO_XX_",
        PLAY_X_MIDDLE_RIGHT: "_O__OXXX_",
        PLAY_X_BOTTOM_RIGHT: "_O__O_XXX"
      }
    },
    _O___OXXX: { on: { "": "X_WINS" } },
    _O___OXX_: {
      on: {
        PLAY_X_TOP_LEFT: "XO___OXX_",
        PLAY_X_TOP_RIGHT: "_OX__OXX_",
        PLAY_X_MIDDLE_LEFT: "_O_X_OXX_",
        PLAY_X_CENTER: "_O__XOXX_",
        PLAY_X_BOTTOM_RIGHT: "_O___OXXX"
      }
    },
    _O____XXO: {
      on: {
        PLAY_X_TOP_LEFT: "XO____XXO",
        PLAY_X_TOP_RIGHT: "_OX___XXO",
        PLAY_X_MIDDLE_LEFT: "_O_X__XXO",
        PLAY_X_CENTER: "_O__X_XXO",
        PLAY_X_MIDDLE_RIGHT: "_O___XXXO"
      }
    },
    _O____XX_: {
      on: {
        PLAY_O_TOP_LEFT: "OO____XX_",
        PLAY_O_TOP_RIGHT: "_OO___XX_",
        PLAY_O_MIDDLE_LEFT: "_O_O__XX_",
        PLAY_O_CENTER: "_O__O_XX_",
        PLAY_O_MIDDLE_RIGHT: "_O___OXX_",
        PLAY_O_BOTTOM_RIGHT: "_O____XXO"
      }
    },
    _OO___X_X: {
      on: {
        PLAY_X_TOP_LEFT: "XOO___X_X",
        PLAY_X_MIDDLE_LEFT: "_OOX__X_X",
        PLAY_X_CENTER: "_OO_X_X_X",
        PLAY_X_MIDDLE_RIGHT: "_OO__XX_X",
        PLAY_X_BOTTOM_CENTER: "_OO___XXX"
      }
    },
    _O_O__X_X: {
      on: {
        PLAY_X_TOP_LEFT: "XO_O__X_X",
        PLAY_X_TOP_RIGHT: "_OXO__X_X",
        PLAY_X_CENTER: "_O_OX_X_X",
        PLAY_X_MIDDLE_RIGHT: "_O_O_XX_X",
        PLAY_X_BOTTOM_CENTER: "_O_O__XXX"
      }
    },
    _O__O_X_X: {
      on: {
        PLAY_X_TOP_LEFT: "XO__O_X_X",
        PLAY_X_TOP_RIGHT: "_OX_O_X_X",
        PLAY_X_MIDDLE_LEFT: "_O_XO_X_X",
        PLAY_X_MIDDLE_RIGHT: "_O__OXX_X",
        PLAY_X_BOTTOM_CENTER: "_O__O_XXX"
      }
    },
    _O___OX_X: {
      on: {
        PLAY_X_TOP_LEFT: "XO___OX_X",
        PLAY_X_TOP_RIGHT: "_OX__OX_X",
        PLAY_X_MIDDLE_LEFT: "_O_X_OX_X",
        PLAY_X_CENTER: "_O__XOX_X",
        PLAY_X_BOTTOM_CENTER: "_O___OXXX"
      }
    },
    _O____XOX: {
      on: {
        PLAY_X_TOP_LEFT: "XO____XOX",
        PLAY_X_TOP_RIGHT: "_OX___XOX",
        PLAY_X_MIDDLE_LEFT: "_O_X__XOX",
        PLAY_X_CENTER: "_O__X_XOX",
        PLAY_X_MIDDLE_RIGHT: "_O___XXOX"
      }
    },
    _O____X_X: {
      on: {
        PLAY_O_TOP_LEFT: "OO____X_X",
        PLAY_O_TOP_RIGHT: "_OO___X_X",
        PLAY_O_MIDDLE_LEFT: "_O_O__X_X",
        PLAY_O_CENTER: "_O__O_X_X",
        PLAY_O_MIDDLE_RIGHT: "_O___OX_X",
        PLAY_O_BOTTOM_CENTER: "_O____XOX"
      }
    },
    _O____X__: {
      on: {
        PLAY_X_TOP_LEFT: "XO____X__",
        PLAY_X_TOP_RIGHT: "_OX___X__",
        PLAY_X_MIDDLE_LEFT: "_O_X__X__",
        PLAY_X_CENTER: "_O__X_X__",
        PLAY_X_MIDDLE_RIGHT: "_O___XX__",
        PLAY_X_BOTTOM_CENTER: "_O____XX_",
        PLAY_X_BOTTOM_RIGHT: "_O____X_X"
      }
    },
    __OO__XXX: { on: { "": "X_WINS" } },
    __OO__XX_: {
      on: {
        PLAY_X_TOP_LEFT: "X_OO__XX_",
        PLAY_X_TOP_CENTER: "_XOO__XX_",
        PLAY_X_CENTER: "__OOX_XX_",
        PLAY_X_MIDDLE_RIGHT: "__OO_XXX_",
        PLAY_X_BOTTOM_RIGHT: "__OO__XXX"
      }
    },
    __O_O_XXX: { on: { "": "X_WINS" } },
    __O_O_XX_: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_O_XX_",
        PLAY_X_TOP_CENTER: "_XO_O_XX_",
        PLAY_X_MIDDLE_LEFT: "__OXO_XX_",
        PLAY_X_MIDDLE_RIGHT: "__O_OXXX_",
        PLAY_X_BOTTOM_RIGHT: "__O_O_XXX"
      }
    },
    __O__OXXX: { on: { "": "X_WINS" } },
    __O__OXX_: {
      on: {
        PLAY_X_TOP_LEFT: "X_O__OXX_",
        PLAY_X_TOP_CENTER: "_XO__OXX_",
        PLAY_X_MIDDLE_LEFT: "__OX_OXX_",
        PLAY_X_CENTER: "__O_XOXX_",
        PLAY_X_BOTTOM_RIGHT: "__O__OXXX"
      }
    },
    __O___XXO: {
      on: {
        PLAY_X_TOP_LEFT: "X_O___XXO",
        PLAY_X_TOP_CENTER: "_XO___XXO",
        PLAY_X_MIDDLE_LEFT: "__OX__XXO",
        PLAY_X_CENTER: "__O_X_XXO",
        PLAY_X_MIDDLE_RIGHT: "__O__XXXO"
      }
    },
    __O___XX_: {
      on: {
        PLAY_O_TOP_LEFT: "O_O___XX_",
        PLAY_O_TOP_CENTER: "_OO___XX_",
        PLAY_O_MIDDLE_LEFT: "__OO__XX_",
        PLAY_O_CENTER: "__O_O_XX_",
        PLAY_O_MIDDLE_RIGHT: "__O__OXX_",
        PLAY_O_BOTTOM_RIGHT: "__O___XXO"
      }
    },
    __OO__X_X: {
      on: {
        PLAY_X_TOP_LEFT: "X_OO__X_X",
        PLAY_X_TOP_CENTER: "_XOO__X_X",
        PLAY_X_CENTER: "__OOX_X_X",
        PLAY_X_MIDDLE_RIGHT: "__OO_XX_X",
        PLAY_X_BOTTOM_CENTER: "__OO__XXX"
      }
    },
    __O_O_X_X: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_O_X_X",
        PLAY_X_TOP_CENTER: "_XO_O_X_X",
        PLAY_X_MIDDLE_LEFT: "__OXO_X_X",
        PLAY_X_MIDDLE_RIGHT: "__O_OXX_X",
        PLAY_X_BOTTOM_CENTER: "__O_O_XXX"
      }
    },
    __O__OX_X: {
      on: {
        PLAY_X_TOP_LEFT: "X_O__OX_X",
        PLAY_X_TOP_CENTER: "_XO__OX_X",
        PLAY_X_MIDDLE_LEFT: "__OX_OX_X",
        PLAY_X_CENTER: "__O_XOX_X",
        PLAY_X_BOTTOM_CENTER: "__O__OXXX"
      }
    },
    __O___XOX: {
      on: {
        PLAY_X_TOP_LEFT: "X_O___XOX",
        PLAY_X_TOP_CENTER: "_XO___XOX",
        PLAY_X_MIDDLE_LEFT: "__OX__XOX",
        PLAY_X_CENTER: "__O_X_XOX",
        PLAY_X_MIDDLE_RIGHT: "__O__XXOX"
      }
    },
    __O___X_X: {
      on: {
        PLAY_O_TOP_LEFT: "O_O___X_X",
        PLAY_O_TOP_CENTER: "_OO___X_X",
        PLAY_O_MIDDLE_LEFT: "__OO__X_X",
        PLAY_O_CENTER: "__O_O_X_X",
        PLAY_O_MIDDLE_RIGHT: "__O__OX_X",
        PLAY_O_BOTTOM_CENTER: "__O___XOX"
      }
    },
    __O___X__: {
      on: {
        PLAY_X_TOP_LEFT: "X_O___X__",
        PLAY_X_TOP_CENTER: "_XO___X__",
        PLAY_X_MIDDLE_LEFT: "__OX__X__",
        PLAY_X_CENTER: "__O_X_X__",
        PLAY_X_MIDDLE_RIGHT: "__O__XX__",
        PLAY_X_BOTTOM_CENTER: "__O___XX_",
        PLAY_X_BOTTOM_RIGHT: "__O___X_X"
      }
    },
    ___OO_XXX: { on: { "": "X_WINS" } },
    ___OO_XX_: {
      on: {
        PLAY_X_TOP_LEFT: "X__OO_XX_",
        PLAY_X_TOP_CENTER: "_X_OO_XX_",
        PLAY_X_TOP_RIGHT: "__XOO_XX_",
        PLAY_X_MIDDLE_RIGHT: "___OOXXX_",
        PLAY_X_BOTTOM_RIGHT: "___OO_XXX"
      }
    },
    ___O_OXXX: { on: { "": "X_WINS" } },
    ___O_OXX_: {
      on: {
        PLAY_X_TOP_LEFT: "X__O_OXX_",
        PLAY_X_TOP_CENTER: "_X_O_OXX_",
        PLAY_X_TOP_RIGHT: "__XO_OXX_",
        PLAY_X_CENTER: "___OXOXX_",
        PLAY_X_BOTTOM_RIGHT: "___O_OXXX"
      }
    },
    ___O__XXO: {
      on: {
        PLAY_X_TOP_LEFT: "X__O__XXO",
        PLAY_X_TOP_CENTER: "_X_O__XXO",
        PLAY_X_TOP_RIGHT: "__XO__XXO",
        PLAY_X_CENTER: "___OX_XXO",
        PLAY_X_MIDDLE_RIGHT: "___O_XXXO"
      }
    },
    ___O__XX_: {
      on: {
        PLAY_O_TOP_LEFT: "O__O__XX_",
        PLAY_O_TOP_CENTER: "_O_O__XX_",
        PLAY_O_TOP_RIGHT: "__OO__XX_",
        PLAY_O_CENTER: "___OO_XX_",
        PLAY_O_MIDDLE_RIGHT: "___O_OXX_",
        PLAY_O_BOTTOM_RIGHT: "___O__XXO"
      }
    },
    ___OO_X_X: {
      on: {
        PLAY_X_TOP_LEFT: "X__OO_X_X",
        PLAY_X_TOP_CENTER: "_X_OO_X_X",
        PLAY_X_TOP_RIGHT: "__XOO_X_X",
        PLAY_X_MIDDLE_RIGHT: "___OOXX_X",
        PLAY_X_BOTTOM_CENTER: "___OO_XXX"
      }
    },
    ___O_OX_X: {
      on: {
        PLAY_X_TOP_LEFT: "X__O_OX_X",
        PLAY_X_TOP_CENTER: "_X_O_OX_X",
        PLAY_X_TOP_RIGHT: "__XO_OX_X",
        PLAY_X_CENTER: "___OXOX_X",
        PLAY_X_BOTTOM_CENTER: "___O_OXXX"
      }
    },
    ___O__XOX: {
      on: {
        PLAY_X_TOP_LEFT: "X__O__XOX",
        PLAY_X_TOP_CENTER: "_X_O__XOX",
        PLAY_X_TOP_RIGHT: "__XO__XOX",
        PLAY_X_CENTER: "___OX_XOX",
        PLAY_X_MIDDLE_RIGHT: "___O_XXOX"
      }
    },
    ___O__X_X: {
      on: {
        PLAY_O_TOP_LEFT: "O__O__X_X",
        PLAY_O_TOP_CENTER: "_O_O__X_X",
        PLAY_O_TOP_RIGHT: "__OO__X_X",
        PLAY_O_CENTER: "___OO_X_X",
        PLAY_O_MIDDLE_RIGHT: "___O_OX_X",
        PLAY_O_BOTTOM_CENTER: "___O__XOX"
      }
    },
    ___O__X__: {
      on: {
        PLAY_X_TOP_LEFT: "X__O__X__",
        PLAY_X_TOP_CENTER: "_X_O__X__",
        PLAY_X_TOP_RIGHT: "__XO__X__",
        PLAY_X_CENTER: "___OX_X__",
        PLAY_X_MIDDLE_RIGHT: "___O_XX__",
        PLAY_X_BOTTOM_CENTER: "___O__XX_",
        PLAY_X_BOTTOM_RIGHT: "___O__X_X"
      }
    },
    ____OOXXX: { on: { "": "X_WINS" } },
    ____OOXX_: {
      on: {
        PLAY_X_TOP_LEFT: "X___OOXX_",
        PLAY_X_TOP_CENTER: "_X__OOXX_",
        PLAY_X_TOP_RIGHT: "__X_OOXX_",
        PLAY_X_MIDDLE_LEFT: "___XOOXX_",
        PLAY_X_BOTTOM_RIGHT: "____OOXXX"
      }
    },
    ____O_XXO: {
      on: {
        PLAY_X_TOP_LEFT: "X___O_XXO",
        PLAY_X_TOP_CENTER: "_X__O_XXO",
        PLAY_X_TOP_RIGHT: "__X_O_XXO",
        PLAY_X_MIDDLE_LEFT: "___XO_XXO",
        PLAY_X_MIDDLE_RIGHT: "____OXXXO"
      }
    },
    ____O_XX_: {
      on: {
        PLAY_O_TOP_LEFT: "O___O_XX_",
        PLAY_O_TOP_CENTER: "_O__O_XX_",
        PLAY_O_TOP_RIGHT: "__O_O_XX_",
        PLAY_O_MIDDLE_LEFT: "___OO_XX_",
        PLAY_O_MIDDLE_RIGHT: "____OOXX_",
        PLAY_O_BOTTOM_RIGHT: "____O_XXO"
      }
    },
    ____OOX_X: {
      on: {
        PLAY_X_TOP_LEFT: "X___OOX_X",
        PLAY_X_TOP_CENTER: "_X__OOX_X",
        PLAY_X_TOP_RIGHT: "__X_OOX_X",
        PLAY_X_MIDDLE_LEFT: "___XOOX_X",
        PLAY_X_BOTTOM_CENTER: "____OOXXX"
      }
    },
    ____O_XOX: {
      on: {
        PLAY_X_TOP_LEFT: "X___O_XOX",
        PLAY_X_TOP_CENTER: "_X__O_XOX",
        PLAY_X_TOP_RIGHT: "__X_O_XOX",
        PLAY_X_MIDDLE_LEFT: "___XO_XOX",
        PLAY_X_MIDDLE_RIGHT: "____OXXOX"
      }
    },
    ____O_X_X: {
      on: {
        PLAY_O_TOP_LEFT: "O___O_X_X",
        PLAY_O_TOP_CENTER: "_O__O_X_X",
        PLAY_O_TOP_RIGHT: "__O_O_X_X",
        PLAY_O_MIDDLE_LEFT: "___OO_X_X",
        PLAY_O_MIDDLE_RIGHT: "____OOX_X",
        PLAY_O_BOTTOM_CENTER: "____O_XOX"
      }
    },
    ____O_X__: {
      on: {
        PLAY_X_TOP_LEFT: "X___O_X__",
        PLAY_X_TOP_CENTER: "_X__O_X__",
        PLAY_X_TOP_RIGHT: "__X_O_X__",
        PLAY_X_MIDDLE_LEFT: "___XO_X__",
        PLAY_X_MIDDLE_RIGHT: "____OXX__",
        PLAY_X_BOTTOM_CENTER: "____O_XX_",
        PLAY_X_BOTTOM_RIGHT: "____O_X_X"
      }
    },
    _____OXXO: {
      on: {
        PLAY_X_TOP_LEFT: "X____OXXO",
        PLAY_X_TOP_CENTER: "_X___OXXO",
        PLAY_X_TOP_RIGHT: "__X__OXXO",
        PLAY_X_MIDDLE_LEFT: "___X_OXXO",
        PLAY_X_CENTER: "____XOXXO"
      }
    },
    _____OXX_: {
      on: {
        PLAY_O_TOP_LEFT: "O____OXX_",
        PLAY_O_TOP_CENTER: "_O___OXX_",
        PLAY_O_TOP_RIGHT: "__O__OXX_",
        PLAY_O_MIDDLE_LEFT: "___O_OXX_",
        PLAY_O_CENTER: "____OOXX_",
        PLAY_O_BOTTOM_RIGHT: "_____OXXO"
      }
    },
    _____OXOX: {
      on: {
        PLAY_X_TOP_LEFT: "X____OXOX",
        PLAY_X_TOP_CENTER: "_X___OXOX",
        PLAY_X_TOP_RIGHT: "__X__OXOX",
        PLAY_X_MIDDLE_LEFT: "___X_OXOX",
        PLAY_X_CENTER: "____XOXOX"
      }
    },
    _____OX_X: {
      on: {
        PLAY_O_TOP_LEFT: "O____OX_X",
        PLAY_O_TOP_CENTER: "_O___OX_X",
        PLAY_O_TOP_RIGHT: "__O__OX_X",
        PLAY_O_MIDDLE_LEFT: "___O_OX_X",
        PLAY_O_CENTER: "____OOX_X",
        PLAY_O_BOTTOM_CENTER: "_____OXOX"
      }
    },
    _____OX__: {
      on: {
        PLAY_X_TOP_LEFT: "X____OX__",
        PLAY_X_TOP_CENTER: "_X___OX__",
        PLAY_X_TOP_RIGHT: "__X__OX__",
        PLAY_X_MIDDLE_LEFT: "___X_OX__",
        PLAY_X_CENTER: "____XOX__",
        PLAY_X_BOTTOM_CENTER: "_____OXX_",
        PLAY_X_BOTTOM_RIGHT: "_____OX_X"
      }
    },
    ______XOX: {
      on: {
        PLAY_O_TOP_LEFT: "O_____XOX",
        PLAY_O_TOP_CENTER: "_O____XOX",
        PLAY_O_TOP_RIGHT: "__O___XOX",
        PLAY_O_MIDDLE_LEFT: "___O__XOX",
        PLAY_O_CENTER: "____O_XOX",
        PLAY_O_MIDDLE_RIGHT: "_____OXOX"
      }
    },
    ______XO_: {
      on: {
        PLAY_X_TOP_LEFT: "X_____XO_",
        PLAY_X_TOP_CENTER: "_X____XO_",
        PLAY_X_TOP_RIGHT: "__X___XO_",
        PLAY_X_MIDDLE_LEFT: "___X__XO_",
        PLAY_X_CENTER: "____X_XO_",
        PLAY_X_MIDDLE_RIGHT: "_____XXO_",
        PLAY_X_BOTTOM_RIGHT: "______XOX"
      }
    },
    ______XXO: {
      on: {
        PLAY_O_TOP_LEFT: "O_____XXO",
        PLAY_O_TOP_CENTER: "_O____XXO",
        PLAY_O_TOP_RIGHT: "__O___XXO",
        PLAY_O_MIDDLE_LEFT: "___O__XXO",
        PLAY_O_CENTER: "____O_XXO",
        PLAY_O_MIDDLE_RIGHT: "_____OXXO"
      }
    },
    ______X_O: {
      on: {
        PLAY_X_TOP_LEFT: "X_____X_O",
        PLAY_X_TOP_CENTER: "_X____X_O",
        PLAY_X_TOP_RIGHT: "__X___X_O",
        PLAY_X_MIDDLE_LEFT: "___X__X_O",
        PLAY_X_CENTER: "____X_X_O",
        PLAY_X_MIDDLE_RIGHT: "_____XX_O",
        PLAY_X_BOTTOM_CENTER: "______XXO"
      }
    },
    ______X__: {
      on: {
        PLAY_O_TOP_LEFT: "O_____X__",
        PLAY_O_TOP_CENTER: "_O____X__",
        PLAY_O_TOP_RIGHT: "__O___X__",
        PLAY_O_MIDDLE_LEFT: "___O__X__",
        PLAY_O_CENTER: "____O_X__",
        PLAY_O_MIDDLE_RIGHT: "_____OX__",
        PLAY_O_BOTTOM_CENTER: "______XO_",
        PLAY_O_BOTTOM_RIGHT: "______X_O"
      }
    },
    OO_____XX: {
      on: {
        PLAY_X_TOP_RIGHT: "OOX____XX",
        PLAY_X_MIDDLE_LEFT: "OO_X___XX",
        PLAY_X_CENTER: "OO__X__XX",
        PLAY_X_MIDDLE_RIGHT: "OO___X_XX",
        PLAY_X_BOTTOM_LEFT: "OO____XXX"
      }
    },
    O_O____XX: {
      on: {
        PLAY_X_TOP_CENTER: "OXO____XX",
        PLAY_X_MIDDLE_LEFT: "O_OX___XX",
        PLAY_X_CENTER: "O_O_X__XX",
        PLAY_X_MIDDLE_RIGHT: "O_O__X_XX",
        PLAY_X_BOTTOM_LEFT: "O_O___XXX"
      }
    },
    O__O___XX: {
      on: {
        PLAY_X_TOP_CENTER: "OX_O___XX",
        PLAY_X_TOP_RIGHT: "O_XO___XX",
        PLAY_X_CENTER: "O__OX__XX",
        PLAY_X_MIDDLE_RIGHT: "O__O_X_XX",
        PLAY_X_BOTTOM_LEFT: "O__O__XXX"
      }
    },
    O___O__XX: {
      on: {
        PLAY_X_TOP_CENTER: "OX__O__XX",
        PLAY_X_TOP_RIGHT: "O_X_O__XX",
        PLAY_X_MIDDLE_LEFT: "O__XO__XX",
        PLAY_X_MIDDLE_RIGHT: "O___OX_XX",
        PLAY_X_BOTTOM_LEFT: "O___O_XXX"
      }
    },
    O____O_XX: {
      on: {
        PLAY_X_TOP_CENTER: "OX___O_XX",
        PLAY_X_TOP_RIGHT: "O_X__O_XX",
        PLAY_X_MIDDLE_LEFT: "O__X_O_XX",
        PLAY_X_CENTER: "O___XO_XX",
        PLAY_X_BOTTOM_LEFT: "O____OXXX"
      }
    },
    O_____OXX: {
      on: {
        PLAY_X_TOP_CENTER: "OX____OXX",
        PLAY_X_TOP_RIGHT: "O_X___OXX",
        PLAY_X_MIDDLE_LEFT: "O__X__OXX",
        PLAY_X_CENTER: "O___X_OXX",
        PLAY_X_MIDDLE_RIGHT: "O____XOXX"
      }
    },
    O______XX: {
      on: {
        PLAY_O_TOP_CENTER: "OO_____XX",
        PLAY_O_TOP_RIGHT: "O_O____XX",
        PLAY_O_MIDDLE_LEFT: "O__O___XX",
        PLAY_O_CENTER: "O___O__XX",
        PLAY_O_MIDDLE_RIGHT: "O____O_XX",
        PLAY_O_BOTTOM_LEFT: "O_____OXX"
      }
    },
    O______X_: {
      on: {
        PLAY_X_TOP_CENTER: "OX_____X_",
        PLAY_X_TOP_RIGHT: "O_X____X_",
        PLAY_X_MIDDLE_LEFT: "O__X___X_",
        PLAY_X_CENTER: "O___X__X_",
        PLAY_X_MIDDLE_RIGHT: "O____X_X_",
        PLAY_X_BOTTOM_LEFT: "O_____XX_",
        PLAY_X_BOTTOM_RIGHT: "O______XX"
      }
    },
    _OO____XX: {
      on: {
        PLAY_X_TOP_LEFT: "XOO____XX",
        PLAY_X_MIDDLE_LEFT: "_OOX___XX",
        PLAY_X_CENTER: "_OO_X__XX",
        PLAY_X_MIDDLE_RIGHT: "_OO__X_XX",
        PLAY_X_BOTTOM_LEFT: "_OO___XXX"
      }
    },
    _O_O___XX: {
      on: {
        PLAY_X_TOP_LEFT: "XO_O___XX",
        PLAY_X_TOP_RIGHT: "_OXO___XX",
        PLAY_X_CENTER: "_O_OX__XX",
        PLAY_X_MIDDLE_RIGHT: "_O_O_X_XX",
        PLAY_X_BOTTOM_LEFT: "_O_O__XXX"
      }
    },
    _O__O__XX: {
      on: {
        PLAY_X_TOP_LEFT: "XO__O__XX",
        PLAY_X_TOP_RIGHT: "_OX_O__XX",
        PLAY_X_MIDDLE_LEFT: "_O_XO__XX",
        PLAY_X_MIDDLE_RIGHT: "_O__OX_XX",
        PLAY_X_BOTTOM_LEFT: "_O__O_XXX"
      }
    },
    _O___O_XX: {
      on: {
        PLAY_X_TOP_LEFT: "XO___O_XX",
        PLAY_X_TOP_RIGHT: "_OX__O_XX",
        PLAY_X_MIDDLE_LEFT: "_O_X_O_XX",
        PLAY_X_CENTER: "_O__XO_XX",
        PLAY_X_BOTTOM_LEFT: "_O___OXXX"
      }
    },
    _O____OXX: {
      on: {
        PLAY_X_TOP_LEFT: "XO____OXX",
        PLAY_X_TOP_RIGHT: "_OX___OXX",
        PLAY_X_MIDDLE_LEFT: "_O_X__OXX",
        PLAY_X_CENTER: "_O__X_OXX",
        PLAY_X_MIDDLE_RIGHT: "_O___XOXX"
      }
    },
    _O_____XX: {
      on: {
        PLAY_O_TOP_LEFT: "OO_____XX",
        PLAY_O_TOP_RIGHT: "_OO____XX",
        PLAY_O_MIDDLE_LEFT: "_O_O___XX",
        PLAY_O_CENTER: "_O__O__XX",
        PLAY_O_MIDDLE_RIGHT: "_O___O_XX",
        PLAY_O_BOTTOM_LEFT: "_O____OXX"
      }
    },
    _O_____X_: {
      on: {
        PLAY_X_TOP_LEFT: "XO_____X_",
        PLAY_X_TOP_RIGHT: "_OX____X_",
        PLAY_X_MIDDLE_LEFT: "_O_X___X_",
        PLAY_X_CENTER: "_O__X__X_",
        PLAY_X_MIDDLE_RIGHT: "_O___X_X_",
        PLAY_X_BOTTOM_LEFT: "_O____XX_",
        PLAY_X_BOTTOM_RIGHT: "_O_____XX"
      }
    },
    __OO___XX: {
      on: {
        PLAY_X_TOP_LEFT: "X_OO___XX",
        PLAY_X_TOP_CENTER: "_XOO___XX",
        PLAY_X_CENTER: "__OOX__XX",
        PLAY_X_MIDDLE_RIGHT: "__OO_X_XX",
        PLAY_X_BOTTOM_LEFT: "__OO__XXX"
      }
    },
    __O_O__XX: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_O__XX",
        PLAY_X_TOP_CENTER: "_XO_O__XX",
        PLAY_X_MIDDLE_LEFT: "__OXO__XX",
        PLAY_X_MIDDLE_RIGHT: "__O_OX_XX",
        PLAY_X_BOTTOM_LEFT: "__O_O_XXX"
      }
    },
    __O__O_XX: {
      on: {
        PLAY_X_TOP_LEFT: "X_O__O_XX",
        PLAY_X_TOP_CENTER: "_XO__O_XX",
        PLAY_X_MIDDLE_LEFT: "__OX_O_XX",
        PLAY_X_CENTER: "__O_XO_XX",
        PLAY_X_BOTTOM_LEFT: "__O__OXXX"
      }
    },
    __O___OXX: {
      on: {
        PLAY_X_TOP_LEFT: "X_O___OXX",
        PLAY_X_TOP_CENTER: "_XO___OXX",
        PLAY_X_MIDDLE_LEFT: "__OX__OXX",
        PLAY_X_CENTER: "__O_X_OXX",
        PLAY_X_MIDDLE_RIGHT: "__O__XOXX"
      }
    },
    __O____XX: {
      on: {
        PLAY_O_TOP_LEFT: "O_O____XX",
        PLAY_O_TOP_CENTER: "_OO____XX",
        PLAY_O_MIDDLE_LEFT: "__OO___XX",
        PLAY_O_CENTER: "__O_O__XX",
        PLAY_O_MIDDLE_RIGHT: "__O__O_XX",
        PLAY_O_BOTTOM_LEFT: "__O___OXX"
      }
    },
    __O____X_: {
      on: {
        PLAY_X_TOP_LEFT: "X_O____X_",
        PLAY_X_TOP_CENTER: "_XO____X_",
        PLAY_X_MIDDLE_LEFT: "__OX___X_",
        PLAY_X_CENTER: "__O_X__X_",
        PLAY_X_MIDDLE_RIGHT: "__O__X_X_",
        PLAY_X_BOTTOM_LEFT: "__O___XX_",
        PLAY_X_BOTTOM_RIGHT: "__O____XX"
      }
    },
    ___OO__XX: {
      on: {
        PLAY_X_TOP_LEFT: "X__OO__XX",
        PLAY_X_TOP_CENTER: "_X_OO__XX",
        PLAY_X_TOP_RIGHT: "__XOO__XX",
        PLAY_X_MIDDLE_RIGHT: "___OOX_XX",
        PLAY_X_BOTTOM_LEFT: "___OO_XXX"
      }
    },
    ___O_O_XX: {
      on: {
        PLAY_X_TOP_LEFT: "X__O_O_XX",
        PLAY_X_TOP_CENTER: "_X_O_O_XX",
        PLAY_X_TOP_RIGHT: "__XO_O_XX",
        PLAY_X_CENTER: "___OXO_XX",
        PLAY_X_BOTTOM_LEFT: "___O_OXXX"
      }
    },
    ___O__OXX: {
      on: {
        PLAY_X_TOP_LEFT: "X__O__OXX",
        PLAY_X_TOP_CENTER: "_X_O__OXX",
        PLAY_X_TOP_RIGHT: "__XO__OXX",
        PLAY_X_CENTER: "___OX_OXX",
        PLAY_X_MIDDLE_RIGHT: "___O_XOXX"
      }
    },
    ___O___XX: {
      on: {
        PLAY_O_TOP_LEFT: "O__O___XX",
        PLAY_O_TOP_CENTER: "_O_O___XX",
        PLAY_O_TOP_RIGHT: "__OO___XX",
        PLAY_O_CENTER: "___OO__XX",
        PLAY_O_MIDDLE_RIGHT: "___O_O_XX",
        PLAY_O_BOTTOM_LEFT: "___O__OXX"
      }
    },
    ___O___X_: {
      on: {
        PLAY_X_TOP_LEFT: "X__O___X_",
        PLAY_X_TOP_CENTER: "_X_O___X_",
        PLAY_X_TOP_RIGHT: "__XO___X_",
        PLAY_X_CENTER: "___OX__X_",
        PLAY_X_MIDDLE_RIGHT: "___O_X_X_",
        PLAY_X_BOTTOM_LEFT: "___O__XX_",
        PLAY_X_BOTTOM_RIGHT: "___O___XX"
      }
    },
    ____OO_XX: {
      on: {
        PLAY_X_TOP_LEFT: "X___OO_XX",
        PLAY_X_TOP_CENTER: "_X__OO_XX",
        PLAY_X_TOP_RIGHT: "__X_OO_XX",
        PLAY_X_MIDDLE_LEFT: "___XOO_XX",
        PLAY_X_BOTTOM_LEFT: "____OOXXX"
      }
    },
    ____O_OXX: {
      on: {
        PLAY_X_TOP_LEFT: "X___O_OXX",
        PLAY_X_TOP_CENTER: "_X__O_OXX",
        PLAY_X_TOP_RIGHT: "__X_O_OXX",
        PLAY_X_MIDDLE_LEFT: "___XO_OXX",
        PLAY_X_MIDDLE_RIGHT: "____OXOXX"
      }
    },
    ____O__XX: {
      on: {
        PLAY_O_TOP_LEFT: "O___O__XX",
        PLAY_O_TOP_CENTER: "_O__O__XX",
        PLAY_O_TOP_RIGHT: "__O_O__XX",
        PLAY_O_MIDDLE_LEFT: "___OO__XX",
        PLAY_O_MIDDLE_RIGHT: "____OO_XX",
        PLAY_O_BOTTOM_LEFT: "____O_OXX"
      }
    },
    ____O__X_: {
      on: {
        PLAY_X_TOP_LEFT: "X___O__X_",
        PLAY_X_TOP_CENTER: "_X__O__X_",
        PLAY_X_TOP_RIGHT: "__X_O__X_",
        PLAY_X_MIDDLE_LEFT: "___XO__X_",
        PLAY_X_MIDDLE_RIGHT: "____OX_X_",
        PLAY_X_BOTTOM_LEFT: "____O_XX_",
        PLAY_X_BOTTOM_RIGHT: "____O__XX"
      }
    },
    _____OOXX: {
      on: {
        PLAY_X_TOP_LEFT: "X____OOXX",
        PLAY_X_TOP_CENTER: "_X___OOXX",
        PLAY_X_TOP_RIGHT: "__X__OOXX",
        PLAY_X_MIDDLE_LEFT: "___X_OOXX",
        PLAY_X_CENTER: "____XOOXX"
      }
    },
    _____O_XX: {
      on: {
        PLAY_O_TOP_LEFT: "O____O_XX",
        PLAY_O_TOP_CENTER: "_O___O_XX",
        PLAY_O_TOP_RIGHT: "__O__O_XX",
        PLAY_O_MIDDLE_LEFT: "___O_O_XX",
        PLAY_O_CENTER: "____OO_XX",
        PLAY_O_BOTTOM_LEFT: "_____OOXX"
      }
    },
    _____O_X_: {
      on: {
        PLAY_X_TOP_LEFT: "X____O_X_",
        PLAY_X_TOP_CENTER: "_X___O_X_",
        PLAY_X_TOP_RIGHT: "__X__O_X_",
        PLAY_X_MIDDLE_LEFT: "___X_O_X_",
        PLAY_X_CENTER: "____XO_X_",
        PLAY_X_BOTTOM_LEFT: "_____OXX_",
        PLAY_X_BOTTOM_RIGHT: "_____O_XX"
      }
    },
    ______OXX: {
      on: {
        PLAY_O_TOP_LEFT: "O_____OXX",
        PLAY_O_TOP_CENTER: "_O____OXX",
        PLAY_O_TOP_RIGHT: "__O___OXX",
        PLAY_O_MIDDLE_LEFT: "___O__OXX",
        PLAY_O_CENTER: "____O_OXX",
        PLAY_O_MIDDLE_RIGHT: "_____OOXX"
      }
    },
    ______OX_: {
      on: {
        PLAY_X_TOP_LEFT: "X_____OX_",
        PLAY_X_TOP_CENTER: "_X____OX_",
        PLAY_X_TOP_RIGHT: "__X___OX_",
        PLAY_X_MIDDLE_LEFT: "___X__OX_",
        PLAY_X_CENTER: "____X_OX_",
        PLAY_X_MIDDLE_RIGHT: "_____XOX_",
        PLAY_X_BOTTOM_RIGHT: "______OXX"
      }
    },
    _______XO: {
      on: {
        PLAY_X_TOP_LEFT: "X______XO",
        PLAY_X_TOP_CENTER: "_X_____XO",
        PLAY_X_TOP_RIGHT: "__X____XO",
        PLAY_X_MIDDLE_LEFT: "___X___XO",
        PLAY_X_CENTER: "____X__XO",
        PLAY_X_MIDDLE_RIGHT: "_____X_XO",
        PLAY_X_BOTTOM_LEFT: "______XXO"
      }
    },
    _______X_: {
      on: {
        PLAY_O_TOP_LEFT: "O______X_",
        PLAY_O_TOP_CENTER: "_O_____X_",
        PLAY_O_TOP_RIGHT: "__O____X_",
        PLAY_O_MIDDLE_LEFT: "___O___X_",
        PLAY_O_CENTER: "____O__X_",
        PLAY_O_MIDDLE_RIGHT: "_____O_X_",
        PLAY_O_BOTTOM_LEFT: "______OX_",
        PLAY_O_BOTTOM_RIGHT: "_______XO"
      }
    },
    O_______X: {
      on: {
        PLAY_X_TOP_CENTER: "OX______X",
        PLAY_X_TOP_RIGHT: "O_X_____X",
        PLAY_X_MIDDLE_LEFT: "O__X____X",
        PLAY_X_CENTER: "O___X___X",
        PLAY_X_MIDDLE_RIGHT: "O____X__X",
        PLAY_X_BOTTOM_LEFT: "O_____X_X",
        PLAY_X_BOTTOM_CENTER: "O______XX"
      }
    },
    _O______X: {
      on: {
        PLAY_X_TOP_LEFT: "XO______X",
        PLAY_X_TOP_RIGHT: "_OX_____X",
        PLAY_X_MIDDLE_LEFT: "_O_X____X",
        PLAY_X_CENTER: "_O__X___X",
        PLAY_X_MIDDLE_RIGHT: "_O___X__X",
        PLAY_X_BOTTOM_LEFT: "_O____X_X",
        PLAY_X_BOTTOM_CENTER: "_O_____XX"
      }
    },
    __O_____X: {
      on: {
        PLAY_X_TOP_LEFT: "X_O_____X",
        PLAY_X_TOP_CENTER: "_XO_____X",
        PLAY_X_MIDDLE_LEFT: "__OX____X",
        PLAY_X_CENTER: "__O_X___X",
        PLAY_X_MIDDLE_RIGHT: "__O__X__X",
        PLAY_X_BOTTOM_LEFT: "__O___X_X",
        PLAY_X_BOTTOM_CENTER: "__O____XX"
      }
    },
    ___O____X: {
      on: {
        PLAY_X_TOP_LEFT: "X__O____X",
        PLAY_X_TOP_CENTER: "_X_O____X",
        PLAY_X_TOP_RIGHT: "__XO____X",
        PLAY_X_CENTER: "___OX___X",
        PLAY_X_MIDDLE_RIGHT: "___O_X__X",
        PLAY_X_BOTTOM_LEFT: "___O__X_X",
        PLAY_X_BOTTOM_CENTER: "___O___XX"
      }
    },
    ____O___X: {
      on: {
        PLAY_X_TOP_LEFT: "X___O___X",
        PLAY_X_TOP_CENTER: "_X__O___X",
        PLAY_X_TOP_RIGHT: "__X_O___X",
        PLAY_X_MIDDLE_LEFT: "___XO___X",
        PLAY_X_MIDDLE_RIGHT: "____OX__X",
        PLAY_X_BOTTOM_LEFT: "____O_X_X",
        PLAY_X_BOTTOM_CENTER: "____O__XX"
      }
    },
    _____O__X: {
      on: {
        PLAY_X_TOP_LEFT: "X____O__X",
        PLAY_X_TOP_CENTER: "_X___O__X",
        PLAY_X_TOP_RIGHT: "__X__O__X",
        PLAY_X_MIDDLE_LEFT: "___X_O__X",
        PLAY_X_CENTER: "____XO__X",
        PLAY_X_BOTTOM_LEFT: "_____OX_X",
        PLAY_X_BOTTOM_CENTER: "_____O_XX"
      }
    },
    ______O_X: {
      on: {
        PLAY_X_TOP_LEFT: "X_____O_X",
        PLAY_X_TOP_CENTER: "_X____O_X",
        PLAY_X_TOP_RIGHT: "__X___O_X",
        PLAY_X_MIDDLE_LEFT: "___X__O_X",
        PLAY_X_CENTER: "____X_O_X",
        PLAY_X_MIDDLE_RIGHT: "_____XO_X",
        PLAY_X_BOTTOM_CENTER: "______OXX"
      }
    },
    _______OX: {
      on: {
        PLAY_X_TOP_LEFT: "X______OX",
        PLAY_X_TOP_CENTER: "_X_____OX",
        PLAY_X_TOP_RIGHT: "__X____OX",
        PLAY_X_MIDDLE_LEFT: "___X___OX",
        PLAY_X_CENTER: "____X__OX",
        PLAY_X_MIDDLE_RIGHT: "_____X_OX",
        PLAY_X_BOTTOM_LEFT: "______XOX"
      }
    },
    ________X: {
      on: {
        PLAY_O_TOP_LEFT: "O_______X",
        PLAY_O_TOP_CENTER: "_O______X",
        PLAY_O_TOP_RIGHT: "__O_____X",
        PLAY_O_MIDDLE_LEFT: "___O____X",
        PLAY_O_CENTER: "____O___X",
        PLAY_O_MIDDLE_RIGHT: "_____O__X",
        PLAY_O_BOTTOM_LEFT: "______O_X",
        PLAY_O_BOTTOM_CENTER: "_______OX"
      }
    }
  }
});

export default machine;
