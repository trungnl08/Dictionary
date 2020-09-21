import java.util.Dictionary;
import java.util.Scanner;

public class DictionaryManagement {
    public Dictionary dsnr = new Dictionary();
    public void setDictionary(Dictionary dsnr) {
        this.dsnr = dsnr;
    }
    public void insertFromCommandline() {
        Scanner scanner = new Scanner(System.in);
        int countWord;
        System.out.println("Xin hay nhap so tu : ");
        countWord = sc.nextInt();
        String temp;
        for (int i = 0; i < countWord; i++) {
            temp = scanner.nextLine();
            temp.setWordTarget(temp);
            temp = scanner.nextLine();
            temp.setWordExplain(temp);
        }
    }


}
