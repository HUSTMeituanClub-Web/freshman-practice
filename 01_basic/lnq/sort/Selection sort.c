#include <stdio.h> 
void  selection_sort(int a[],int len);
int main() 
{
	int a[] = { 20, 26, 4, 23,90, 51, 79, 60, 10, 7, 62, 31, 6, 20};
	int len = (int) sizeof(a) / sizeof(*a);
	selection_sort(a, len);
	int i;
	for (i = 0; i < len; i++)
		printf("%d ", a[i]);
	return 0;
}

void  selection_sort(int a[],int len)
{
	int i,j,min;
	for(i=0;i<len-1;i++)
	{
		min=i;
		for(j=i+1;j<len;j++)
		{
			if(a[j]<a[min])
				min=j;
		}
		int temp;
		temp=a[min];
		a[min]=a[i];
		a[i]=temp;
	} 
}
