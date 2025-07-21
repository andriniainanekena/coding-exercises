import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class exercice04 {
    static List<String> sortByLength(List<String> words){
        return words.stream()
        .sorted(Comparator.comparing(String::length))
        .collect(Collectors.toList());
    }
    public static void main(String[] args) {
        List<String> list = Arrays.asList("aaa", "aa", "a", "aaaa");
        System.out.println(sortByLength(list));
    }
}
