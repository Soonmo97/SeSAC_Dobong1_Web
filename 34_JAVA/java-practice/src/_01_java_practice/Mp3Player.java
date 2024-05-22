package _01_java_practice;

interface Music {
    void play();
    void stop();
}
class Mp3Player implements Music{
    Mp3Player() {
        System.out.println("==== MP3 Player ====");
    }
    @Override
    public void play() {
        System.out.println("MP3 플레이어에서 '아이유 블루밍' 음악을 재생합니다.");
    }

    @Override
    public void stop() {
        System.out.println("MP3 플레이어에서 '아이유 블루밍' 음악을 정지합니다.");
    }
}

class Cdplayer implements Music{

    Cdplayer() {
        System.out.println("==== CD Player ====");
    }

    @Override
    public void play() {
        System.out.println("CD 플레이어에서 '아이유 꽃갈피' 앨범을 재생합니다.");
    }

    @Override
    public void stop() {
        System.out.println("CD 플레이어에서 '아이유 꽃갈피' 앨범을 정지합니다.");
    }
}

class MusicPlayer {
    public static void main(String[] args) {
        Music mp3 = new Mp3Player();
        mp3.play();
        mp3.stop();
        System.out.println();
        Music cd = new Cdplayer();
        cd.play();
        cd.stop();
    }

}
