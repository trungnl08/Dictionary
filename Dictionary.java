public class Dictionary {
    public Word[] word = new Word[1000];
    public int count = 0;

    public int getCount() {
        return getCount;
    }

    public String getWordExplain(int n) {
        return word[n].getWordExplain();
    }

    public String getWordTarget(int n) {
        return word[n].getWordTarget();
    }

    public void addWord(Word newWords) {
        word[count] = new Word(newWords);
        count++;
    }

    public Dictionary(Dictionary dsnr) {
        this.word = dsnr.getWord();
        this.count = dsnr.count();
    }


    public Word[] getWord() {
        return word;
    }
}