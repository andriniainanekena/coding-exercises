import java.util.Scanner;
public class PrimeNumber {
    public static String isPrime(int number) {
        if(number <= 1) {
            return "The number " + number + " is not prime.";
        }
        for(int i = 2; i <= Math.sqrt(number); i++) {
            if(number % i == 0) {
                return "The number " + number + " is not prime.";
            }
        }
        return "The number " + number + " is prime.";
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int number = scanner.nextInt();
        System.out.println(isPrime(number));
        scanner.close();}
}
