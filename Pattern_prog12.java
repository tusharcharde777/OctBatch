package Pattern_prog_practice;

public class Pattern_prog12 {
    public static void main(String[] args) {

        for (int i = 5; i >= 1; i--) {
            for (int j = 5; j >= i; j--) {
                System.out.print(" ");
            }
            for (int k = 1; k < 2*i; k++){
                if(k > 1 && k < 2*i-1){
                    System.out.print(" ");
                }
                else {
                    System.out.print("*");
                }
            }
            System.out.println();
        }
    }
}
