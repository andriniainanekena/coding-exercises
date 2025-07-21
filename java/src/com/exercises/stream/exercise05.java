import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class exercice05 {
    static int sumOfSquares(List<Integer> numbers) {
        return numbers.stream()
        .map(n -> n*n).reduce(0, (a, b) -> a + b);
    }

    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1, 2, 3);
        System.out.println(sumOfSquares(list));
    }

}
