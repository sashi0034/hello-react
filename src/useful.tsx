
export namespace Useful
{
    export function separateHexSpace(str: string): string
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

    export function remove(arr: Array<any>, target: any): boolean
    {
        let i=arr.indexOf(target);
        if (i>-1) 
        {
            arr.splice(i, 1);
            return true;
        }
        return false;
    }
}





