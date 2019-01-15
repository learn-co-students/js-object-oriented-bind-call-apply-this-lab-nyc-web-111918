//Your code h
function justInvoke(fn){
  return fn()
}

function setThisWithCall(fn, n, arg){
  return fn.call(n, arg)
}

function setThisWithApply(fn, n, arg){
  return fn.apply(n, arg)
}

function returnNewFunctionOf(fn, arg){
  return fn.bind(arg)
}
