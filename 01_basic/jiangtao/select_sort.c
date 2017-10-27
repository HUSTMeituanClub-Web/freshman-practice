#include <stdio.h>
void select_sort(int a[],int i)
{
    int j,k,n;
    for(j=1;j<i;j++)
    {
       int x=a[j-1];
       for(k=i-1;k>j-1;k--)
       {

           if(a[k]<x)
            {x=a[k];n=k;}
       }
       a[n]=a[j-1];
       a[j-1]=x;
    }
    for(j=0;j<i;j++)
    {
        printf("%d\t",a[j]);
    }
    printf("\n");
}
int main(void)
{
    int a[100],i;
    printf("请输入整数，输入任意字母结束\n");
    for(i=0;scanf("%d",&a[i]);i++);//0到i-1共i 位数字
    select_sort(a,i);
    return 0;
}
