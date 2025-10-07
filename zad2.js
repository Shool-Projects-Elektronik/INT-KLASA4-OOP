class MyNameIs{
    static method(...args)
    {
        if(args.length === 1)      //pierwsze imie 
            console(`mam na imie ${args[0]}`)

        else if((args.length === 2))
        
            console(`nazywam sie  ${args[0]}  ${args[1]}`)
        
        else
            console.log('niepoprawna liczba argumentow')
    }
}