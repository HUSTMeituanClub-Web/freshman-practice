#include <stdio.h>
void select_sort(int a[],int i)
{
    int j,k,n,m=0;
    for(j=0;j<i-1;m=++j)
    {
       for(k=i-1;k>j-1;k--)
       {
           if(a[k]<a[m])
            {m=k;}
       }
       n=a[j];
       a[j]=a[m];
       a[m]=n;
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
