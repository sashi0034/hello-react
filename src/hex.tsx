
export namespace Hex
{
    export function separateSpace(str: string): string
    {
        let ret = "";
        for (let i=0; i<str.length; i++)
        {
            ret = ret + str[i];
            if ((i+1)%2 == 0 && i<str.length-1)
            {
                ret = ret + " "
            }
        }
        return ret;
    }
}





