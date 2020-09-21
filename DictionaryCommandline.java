public class DictionaryCommandline {
    public Dictionary dsnr;
    public DictionaryManagement management;


    public void showAllWords() {

        System.out.println("No\tEnglish\tVietnamese");
        for (int i = 0; i < dsnr.getCount(); i++) {
            System.out.println((i + 1) + " " + dsnr.getWorkTarget(i) + " " + dsnr.getWordExplain(i));
        }
    }


    public void dictionaryBasic() {
        management = new DictionaryManagement(dsnr);
        management.insertFromCommandline();
        this.dsnr = management.out();
        showAllWords();
    }
}
