class KalkulatorProsty
{
    static add(a,b)
    {
        return a+b;
    } 

    static subtract(a,b)
    {
        return a-b;
    } 

    static multiply(a,b)
    {
        return a*b;
    } 

     static divide(a,b)
    {
        if (b === 0) throw new Error("nie dziel przez 0");
        return a/b;
    } 

    static square()
    {
        if (a < 0) throw new Error("chy cos sobie uroiles :O");
        return Math.sqrt(a);
    }
}