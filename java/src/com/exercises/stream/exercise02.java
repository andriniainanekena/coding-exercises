import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class exercice02 {
    static List<String> toUpperCase(List<String> words){
        return words.stream()
        .map(word -> word.toUpperCase())
        .collect(Collectors.toList());
    }
    public static void main(String[] args) {
        List<String> list = Arrays.asList("Hello", "World");
        
        System.out.println(toUpperCase(null));
    }
}
