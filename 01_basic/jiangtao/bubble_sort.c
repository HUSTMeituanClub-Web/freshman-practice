#include <stdio.h>
void bubble_sort(int a[],int i)
{
    int j,k,x;
    for(j=0;j<i-1;j++)
    {
        for(k=0;k<i-1-j;k++)
        {
            if(a[k]>a[k+1])
            {
               x=a[k];
               a[k]=a[k+1];
               a[k+1]=x;
            }
        }
    }
    for(k=0;k<i;k++)
    {
        printf("%d\t",a[k]);
    }
    printf("\n");
}
int main(void)
{
    int a[100],i;
    printf("����������������������ĸ����\n");
    for(i=0;scanf("%d",&a[i]);i++);//0��i-1Ϊ����
    bubble_sort(a,i);//һ��i ����
    return 0;
}
