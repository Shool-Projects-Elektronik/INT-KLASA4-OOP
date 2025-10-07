class MyNameIs{
    static method(...args)     //pierwsze imie 
    {
        if(args.length === 1)      
            console.log(`mam na imie ${args[0]}`)

        else if((args.length === 2))
        
            console.log(`nazywam sie  ${args[0]}  ${args[1]}`)
        
        else
            console.log('niepoprawna liczba argumentow')
    }
}