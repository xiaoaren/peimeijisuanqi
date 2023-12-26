import yayJpg from '../assets/yay.jpg';
import styles from './index.less';

export default function HomePage() {
  return (
    <div>
      <nav class="navi navi-outside-wrapper">
        <div class="navi-wrapper">
            <div class="navi-background">
                <div class="content">
                    <h1>仿 Mac OS 高斯模糊顶部导航栏</h1>

                    <p ><a href="https://github.com/Sun-Shuai/gaussian-blur-navigation-bar.git">查看源码</a></p>
                </div>
            </div>
        </div>
    </nav>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
