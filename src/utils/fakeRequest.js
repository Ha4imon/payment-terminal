function fakeRequest(data) {
  const isSuccessRequest = !!Math.round(Math.random() * 1);

  const request = {
    sum: data.sum,
    message: "",
    isSucess: null,
  };

  if (!isSuccessRequest) {
    request.message = "К сожалению что-то пошло не так. Попробуйте чуть позже.";
    request.isSucess = false;
  } else {
    request.message = "Баланс пополнен! Перенаправление на главную страницу.";
    request.isSucess = true;
  }

  return request;
}

export { fakeRequest };
