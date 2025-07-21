import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class exercice07 {
    static Optional<String> findLongestString(List<String> words) {
        return words.stream()
        .max(Comparator.comparing(String::length));
    }
    public static void main(String[] args) {
        List<String> list = Arrays.asList("aaa", "aa", "a", "aaaa");
        System.out.println(findLongestString(list));
    }
}
