package Pattern_prog_practice;

public class Pattern_prog8 {
    public static void main(String[] args) {

        for(int i = 1; i <= 4; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(" ");
            }
//            for (int k = 8; k >= 2*i; k--) {
            for (int k = 9; k > 2*i; k--) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
