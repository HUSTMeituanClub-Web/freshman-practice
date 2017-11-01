#include <stdio.h> 
void bubble_sort(int a[], int len);
int main()  
{
	int a[] = { 20, 26, 4, 23,90, 51, 79, 60, 10, 7, 62, 31, 6, 20};
	int len = (int) sizeof(a) / sizeof(*a);
	bubble_sort(a, len);
	int i;
	for (i = 0; i < len; i++)
		printf("%d ", a[i]);
	return 0;
}

void bubble_sort(int a[], int len) 
{
	int i, j, temp;
    for(i=0;i<len-1;i++)
	{
		for(j=0;j<len-i-1;j++)
		if(a[j]>a[j+1])
		{
			temp=a[j];
			a[j]=a[j+1];
			a[j+1]=temp;
		}
	}
}
