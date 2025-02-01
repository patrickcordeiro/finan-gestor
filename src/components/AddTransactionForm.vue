<template>
  <div class="transaction-form">
    <form>
      <div class="form-group">
        <label for="description">Descrição</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Digite aqui sua descrição..."
        />
      </div>

      <div class="form-group">
        <label for="value">Valor (R$)</label>
        <input type="text" name="value" id="value" placeholder="0,00" />
      </div>

      <div class="form-group">
        <label for="value-type">Tipo de valor</label>
        <select name="value-type" id="value-type">
          <option value="income">Entrada</option>
          <option value="output">Saída</option>
        </select>
      </div>

      <button type="submit">Adicionar transação</button>
    </form>
  </div>
</template>

<style>
form {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 20px;
  gap: 20px;
  border: 1px solid #ccc;

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
    }

    select {
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;

      option {
        padding: 10px;
      }
    }
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 15px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
}
</style>
