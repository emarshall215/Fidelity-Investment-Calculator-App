
    function check() {
      deposit=parseInt(calculate.deposit.value);
      account=parseInt(calculate.account.value);
      result= account / 100 * deposit;
      calculate.result.value=result;
    }