class KontoBankowe{
   #saldo = 0

   deposit(amount)
   {
     this.#saldo += amount;
   }

    withdraw(amount)
   {
     if(this.#saldo > amount)
        this.#saldo -= amount
   }

   getSaldo()
   {
    return this.#saldo
   }
}