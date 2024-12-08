public class Main {
    public static void main(String[] args) {
        int[] my_array = {7, 12, 9, 4, 11};
        int minVal = my_array[0];

        for (int i : my_array) {
            if (i < minVal) {
                minVal = i;
            }
        }

        System.out.println("Lowest value: " + minVal);
    }
}

//Java


public class main {
    public static void main(String[] args) {
        int[] my_array = {7, 2, 9, 4, 11};
        int mainVal = my_array[0];

        for (int i : my_array) {
            if (i < mainVal) {
                minVal = i;
            }
        }

        System.out.print("Lowest value: " + mainVal);
    }
}