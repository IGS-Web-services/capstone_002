import { SocialMediaIcon } from "../components";
import twitter from "../assets/twitter_logo.webp";
import linkedIn from "../assets/linkedIn_logo.png";
import github from "../assets/github_logo.png";

const SocialMedia = () => {
  return (
    <section className="fixed bottom-4 left-5 gap-5 z-50">
      <SocialMediaIcon link="#" icon={github} />
      <SocialMediaIcon link="#" icon={linkedIn} />
      <SocialMediaIcon link="#" icon={twitter} />
    </section>
  );
};

export default SocialMedia;
