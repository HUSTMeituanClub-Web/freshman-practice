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
    printf("����������������������ĸ����\n");
    for(i=0;scanf("%d",&a[i]);i++);//0��i-1��i λ����
    select_sort(a,i);
    return 0;
}
