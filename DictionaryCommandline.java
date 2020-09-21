public class DictionaryCommandline {
    public Dictionary dsnr;
    public DictionaryManagement management;

//funtion show word
    public void showAllWords() {
        System.out.println("No\tEnglish\tVietnamese");
        for (int i = 0; i < dsnr.getCount(); i++) {
            System.out.println((i + 1) + " " + dsnr.getWorkTarget(i) + " " + dsnr.getWordExplain(i));
        }
    }

//use insertFromCommandLine() and showAllWords()
    public void dictionaryBasic() {
        management = new DictionaryManagement(dsnr);
        management.insertFromCommandline();
        this.dsnr = management.out();
        showAllWords();
    }
}
