import React from "react";

const bgColors = ["#CAEDEB", "#FFE1E0", "#FFF7B0", "#C7FFC4", "#FCFCEB"];

const steps = [
  {
    content: (
      <div className="guide">
          メモの内容を入力します
      </div>
    )
  },
  {
    content: (
      <div className="guide">
          追加ボタンを押すと内容が確定されます
      </div>
    )
  },
  {
    content: (
      <div className="guide">
        テーマを切り替えます
      </div>
    )
  }
];

// action-type
const TOGGLE_RUN = "TOGGLE_RUN";

// reducer
const initialState = {
  run: false,
  steps: steps.map((step, i) => ({
    target: `.target${i + 1}`,
    title: `ステップ${i + 1}`,
    content: step.content,
    locale: {
      skip: <strong>スキップ</strong>,
      back: <strong>前へ</strong>,
      next: <strong>次へ</strong>,
      last: <strong>終了</strong>
    }
  })),
  bgColors: bgColors
};

export default function style(state = initialState, action: { type: any; }) {
  switch (action.type) {
    case TOGGLE_RUN:
      return {
        ...state,
        run: !state.run
      };
    default:
      return state;
  }
}

// action-creator
export const toggleRun = () => ({
  type: TOGGLE_RUN
});
