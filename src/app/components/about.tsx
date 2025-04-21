import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="flex">
      <Image src="next.svg" alt="profile_img" width={100} height={100}></Image>
      <div>My name is Chinmay Patankar</div>
    </div>
  );
}
