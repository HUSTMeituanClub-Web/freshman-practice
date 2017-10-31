#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <limits.h>
#include "bsort.h"
#include "isort.h"
#include "qsort.h"
#include "ssort.h"

const long MAX_N = 1000000;
int list[MAX_N];
int count = 0;
int main()
{
	char ch;
	list[count] = 0;
	printf("Input numbers. Input 'q' to exit. Input 'r' to random numbers.\n");
	while((ch = getchar()) != 'q')
	{
		if(ch == 'r')
		{
			printf("Input the number of numbers:");
			int min,max;
			scanf("%ld",&count);
			printf("Min:");
			scanf("%d",&min);
			printf("Max:");
			scanf("%d",&max);
			srand(time(NULL));
			for(long i=0;i<count;i++)
			{
				list[i]=rand() % (max-min)+min;
				printf("%d ",list[i]);
			}
			printf("\n");
			goto ChooseAgain;
		}
		if(ch == ' ' || ch == '\n')
		{
			count++;
			list[count] = 0;
			continue;
		}
		list[count] = list[count] * 10 + (ch - '0');
	}
ChooseAgain:
	printf("\nChoose a sort algorithm:\n");
	printf("1.Quick sort   2.Bubble sort   3.Insertion sort   4.Selection sort\n");
	int cmd = 0;
	scanf("%d",&cmd);
	clock_t end,start = clock();
	switch(cmd)
	{
		case 1:
			qsort(list,0,count - 1);
			break;
		case 2:
			bsort(list,0,count);
			break;
		case 3:
			isort(list,count);
			break;
		case 4:
			ssort(list,count);
			break;
		default:
			goto ChooseAgain;
	}
	end = clock();
	printf("\n");
	for(long i = 0; i < count; i++)
	{
		printf("%d ",list[i]);
	}
	printf("\n");
	printf("Sort completed in %lfs\n",(double)(end-start)/CLOCKS_PER_SEC);
}
