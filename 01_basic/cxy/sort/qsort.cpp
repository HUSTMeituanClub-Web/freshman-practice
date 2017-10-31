#include <stdio.h>
#include "qsort.h"
void qsort(int* array,long from,long to)
{
	
	if(from == to)
		return;
	int m=array[(to+from)/2];
	int i=from;
	int j=to;
	while(i<=j-1)
	{
		if(array[i]>=m)
		{
			while(array[j]>m)
			{
				if(i+1>=j)
					goto End;
				j--;
			}
			int tmp=array[i];
			array[i]=array[j];
			array[j]=tmp;
		}
		i++;
	}
End:
	qsort(array,from,j-1);
	qsort(array,j,to);
}
