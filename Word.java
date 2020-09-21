public class Word {
    public String word_target = "";
    public String word_explain = "";


    public Word(Word newWord) {
        this.word_target = newWord.getWordTarget();
        this.word_explain = newWord.getWordExplain();
    }

    //Getter
    public String getWordExplain() {
        return word_explain;
    }

    public String getWordTarget() {
        return word_target;
    }

    //Setter
    public void setWordExplain(String word_explain) {
        this.word_explain = word_explain;
    }

    public void setWordTarget(String word_target) {
        this.word_target = word_target;
    }

}
