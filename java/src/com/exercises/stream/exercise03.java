import java.util.Arrays;
import java.util.List;

public class exercice03 {
    static long countWordsStartingWithA(List<String> words){
        return words.stream()
        .filter(word -> word.charAt(0) == 'A')
        .count();
        
    }
    public static void main(String[] args) {
        List<String> list = Arrays.asList("Hello", "World", "Ahaha");
        System.out.println(countWordsStartingWithA(list));  
    }
}
