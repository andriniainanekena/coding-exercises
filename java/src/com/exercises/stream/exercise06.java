import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class exercice06 {
    static List<Integer> distinctSorted(List<Integer> numbers) {
        return numbers.stream()
        .distinct()
        .collect(Collectors.toList());
    }

    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1, 2, 2, 3);
        System.out.println(distinctSorted(list));
    }
}
