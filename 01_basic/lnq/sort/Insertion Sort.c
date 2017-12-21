#include <stdio.h> 
void insertion_sort(int a[], int len) ;
int main() 
{
	int a[] = { 20, 26, 4, 23,90, 51, 79, 60, 10, 7, 62, 31, 6, 20};
	int len = (int) sizeof(a) / sizeof(*a);
	insertion_sort(a, len);
	int i;
	for (i = 0; i < len; i++)
		printf("%d ", a[i]);
	return 0;
}

void insertion_sort(int a[], int len) 
  {
  	int i,j,temp; 
	for(i=1;i<len;i++)
	{
	 	temp=a[i];
		for(j=i-1;j>=0&&a[j]>temp;j--)
	   		a[j+1]=a[j];
	   	a[j+1]=temp;	
	}
  }
