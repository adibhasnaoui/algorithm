ALGORITHM three_nb_sum
VAR
sentence [200] : string;
n = sentence.length ;
  i :integer ;
   vowels =["a","e","i","o","u"] : integer;  
BEGIN
for (i = 0; sentence[i] != '\0'; i++) 
        { 
            if (sentence[i] == 'a' || sentence[i] == 'A' || sentence[i] == 'i' || sentence[i] == 'I' || sentence[i] == 'u'|| sentence[i] == 'U'||sentence[i] == 'e' || sentence[i] == 'E' || sentence[i] == 'o' || sentence[i] == 'O') 
            { 
                vowels+ = 1; 
            } 
        } 
        read("There are %d vowels in the given sentence\n",vowels);
        read("There are %d characters in the sentence",n);

    }
    
END

