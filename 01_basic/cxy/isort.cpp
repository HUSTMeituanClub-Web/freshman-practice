#include <stdio.h>
#include "isort.h"

void isort(int* array, long count)
{
	for(long i=1;i<count; i++)
	{
		for(long j=i-1;j>=-1;j--)
		{
			if(j<0 || array[j]<array[i])
			{
				int num=array[i];
				for(long k=i-1;k>j;k--)
					array[k+1]=array[k];
				array[j+1]=num;
				break;
			}
		}
	}
}
