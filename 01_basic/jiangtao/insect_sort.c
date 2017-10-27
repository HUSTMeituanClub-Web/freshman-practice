#include <stdio.h>
void insect_sort(int a[],int i)
{
    int k,x,j;
    for(j=1;j<i;j++)
    {
        int x=a[j];
        for(k=j-1;k>=0;)
        {
            if(x>a[k])
            {
                a[k+1]=x;
                k=-2;
            }
            else
            {
                a[k+1]=a[k];
                k--;
            }
        }
        if(k==-1)
            a[0]=x;
    }
    for(j=0;j<i;j++)
    printf("%d\t",a[j]);
    printf("\n");
}
int main(void)
{
    printf("输入正整数进行排序，输入字母结束\n");
    int a[100],i;
    for (i=0;scanf("%d",&a[i]);i++);//0到i-1为数字,共i位
    insect_sort(a,i);
    return 0;
}
