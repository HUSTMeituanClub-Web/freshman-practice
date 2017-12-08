#include <stdio.h>
#include "ssort.h"

void ssort(int *array, long count)
{
	int list[count];
	bool check[count];
	long minIdx = -1;
	for (long i = 0; i < count; i++)
	{
		check[i] = false;
	}
	for (long i = 0; i < count; i++)
	{
		minIdx = -1;
		for (long j = 0; j < count; j++)
		{
			if (!check[j] && (minIdx < 0 || array[j] < array[minIdx]))
			{
				minIdx = j;
			}
		}
		check[minIdx] = true;
		list[i] = array[minIdx];
	}
	for (long i = 0; i < count; i++)
	{
		array[i] = list[i];
	}
}
