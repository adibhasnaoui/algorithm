ALGORITHM three_nb_sum
VAR
sentence [200] : string;
  i :integer ;
   vowels =["a","e","i","o","u"] integer;  
BEGIN
for (i = 0; sentence[i] != '\0'; i++) 
        { 
            if (sentence[i] == 'a' || sentence[i] == 'A' || sentence[i] == 'i' || sentence[i] == 'I' || sentence[i] == 'u'|| sentence[i] == 'U'||sentence[i] == 'e' || sentence[i] == 'E' || sentence[i] == 'o' || sentence[i] == 'O') 
            { 
                vowels+ = 1; 
            } 
        } 
        printf("There are %d vowels in the given sentence\n",vowels); 
    }
    
END

