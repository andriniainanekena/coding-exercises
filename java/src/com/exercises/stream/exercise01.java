import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.List;

public class exercice01 {
    static List<Integer> filterEvenNumbers(List<Integer> numbers) {
        return numbers.stream()
            .filter(number -> number % 2 == 0)
            .collect(Collectors.toList());
    }
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9);
        
        System.out.println(filterEvenNumbers(list));
    }
}
