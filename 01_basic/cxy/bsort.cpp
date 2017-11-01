#include <stdio.h>
#include "bsort.h"

void bsort(int *array, long from, long count)
{
	for(long i=from;i<count-1;i++)
	{
		for(long j=i+1;j<count;j++)
		{
			if(array[i]>array[j])
			{
				int tmp=array[i];
				array[i]=array[j];
				array[j]=tmp;
			}
		}
	}
}
