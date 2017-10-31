#include <stdio.h>
#include <time.h>
#include "bsort.h"
#include "isort.h"
#include "qsort.h"
#include "ssort.h"

const long MAX_N = 100000;
int list[MAX_N];
int count = 0;
int main()
{
	char ch;
	list[count] = 0;
	printf("Input numbers. Input 'q' to exit.\n");
	while((ch = getchar()) != 'q')
	{
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
	printf("Sort completed in %lfs\n",(double)(end-start)/CLOCKS_PER_SEC);
	for(long i = 0; i < count; i++)
	{
		printf("%d ",list[i]);
	}
	printf("\n");

}
