export default function getSelectedNode() {

  if (document.selection) {

    return document.selection.createRange().parentElement()

  } else {

    let selection = window.getSelection()

    if (selection.rangeCount > 0) {
      return selection.getRangeAt(0).startContainer.parentNode
    }
  }

}

