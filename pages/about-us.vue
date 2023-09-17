<template>
  <div class="notifications current_page">
    <div class="container mt-4 mb-4">
      <div v-if="lang == 'en'">
        <h2 class="mb-4">About Us</h2>
        <p>
          Welcome to Job Definitions, a comprehensive platform dedicated to providing detailed job descriptions, tasks, and essential information about various occupations. Our mission is to empower individuals by offering valuable insights into different job roles, helping them make informed career decisions.<br><br>


          At Job Definitions, we understand the importance of having a clear understanding of job requirements, responsibilities, and work environments before pursuing a particular career path. We aim to bridge the gap between job seekers and job information by compiling accurate and comprehensive descriptions of numerous professions across diverse industries.<br><br>

          <strong>Founder and Owner - Yaagoub AlNujaidi:</strong><br>
          Job Definitions was founded by Yaagoub AlNujaidi, a visionary entrepreneur with a passion for helping individuals navigate the complex world of career choices. With years of experience in the industry, Yaagoub recognized the need for a platform that offers in-depth job descriptions to support individuals in their career exploration journey.<br>
          Yaagoub AlNujaidi's expertise and dedication have been instrumental in creating a user-friendly platform where users can easily access reliable information about various job roles. His vision of empowering individuals with knowledge and insights has been the driving force behind Job Definitions' success.<br><br>

          <strong>Our Commitment:</strong><br>
          At Job Definitions, we are committed to providing accurate, up-to-date, and comprehensive job information. We strive for excellence in every aspect of our platform, ensuring that our users have access to the most relevant and reliable information available.<br><br>

          We understand that choosing a career path is a significant decision, and we want to make that process as informed and smooth as possible. Whether you are a student exploring different career options or a professional considering a career change, we aim to be your go-to resource for detailed job descriptions and essential insights.<br><br>

          Our team of dedicated professionals works tirelessly to curate and verify the information we provide on our platform. We continuously update our database to reflect the evolving nature of job roles, ensuring that our users have access to the most accurate and relevant information.<br><br>

          Join our community of job seekers, students, and professionals who rely on Job Definitions to gain valuable knowledge about different occupations. Explore our platform, discover new career paths, and make informed decisions about your professional journey.<br><br>
        </p>
      </div>
      <div v-else>
        <h2 class="mb-4">من نحن</h2>
        <p>
          مرحبًا بك في Job Definitions، وهي منصة شاملة مخصصة لتقديم الأوصاف الوظيفية التفصيلية والمهام والمعلومات الأساسية حول المهن المختلفة. مهمتنا هي تمكين الأفراد من خلال تقديم رؤى قيمة حول الأدوار الوظيفية المختلفة، ومساعدتهم على اتخاذ قرارات مهنية مستنيرة.<br><br>

          في تعريفات الوظيفة، نحن ندرك أهمية وجود فهم واضح لمتطلبات الوظيفة والمسؤوليات وبيئات العمل قبل متابعة مسار وظيفي معين. نحن نهدف إلى سد الفجوة بين الباحثين عن عمل ومعلومات الوظائف من خلال تجميع أوصاف دقيقة وشاملة للعديد من المهن في مختلف الصناعات.
          <br><br>

          <strong>المؤسس والمالك - يعقوب النجدي:</strong><br>
          تأسس  موقع Job Definitions على يد يعقوب النجيدي، وهو رجل أعمال ذو رؤية لديه شغف لمساعدة الأفراد على التنقل في عالم معقد من الخيارات المهنية. بفضل سنوات من الخبرة في هذا المجال، أدرك يعقوب الحاجة إلى منصة تقدم وصفًا وظيفيًا متعمقًا لدعم الأفراد في رحلة استكشاف حياتهم المهنية.<br>لقد كان لخبرة يعقوب النجيدي وتفانيه دور فعال في إنشاء منصة سهلة الاستخدام حيث يمكن للمستخدمين الوصول بسهولة إلى معلومات موثوقة حول الأدوار الوظيفية المختلفة. لقد كانت رؤيته المتمثلة في تمكين الأفراد بالمعرفة والرؤى هي القوة الدافعة وراء نجاح تعريفات الوظيفة.<br><br>

          <strong>التزامنا:</strong><br>
          في تعريفات الوظيفة، نحن ملتزمون بتوفير معلومات وظيفية دقيقة وحديثة وشاملة. نحن نسعى جاهدين لتحقيق التميز في كل جانب من جوانب منصتنا، مما يضمن حصول مستخدمينا على الوصول إلى المعلومات المتاحة الأكثر صلة وموثوقية.<br><br>

          نحن ندرك أن اختيار المسار الوظيفي هو قرار مهم، ونريد أن نجعل هذه العملية مدروسة وسلسة قدر الإمكان. سواء كنت طالبًا يستكشف خيارات وظيفية مختلفة أو محترفًا يفكر في تغيير مهنتك، فإننا نهدف إلى أن نكون مصدرك المفضل للحصول على الأوصاف الوظيفية التفصيلية والرؤى الأساسية.<br><br>
          يعمل فريقنا من المحترفين المتفانين بلا كلل لتنظيم المعلومات التي نقدمها على منصتنا والتحقق منها. نقوم باستمرار بتحديث قاعدة بياناتنا لتعكس الطبيعة المتطورة للأدوار الوظيفية، مما يضمن حصول مستخدمينا على الوصول إلى المعلومات الأكثر دقة وذات صلة.<br><br>

          انضم إلى مجتمعنا من الباحثين عن عمل والطلاب والمهنيين الذين يعتمدون على تعريفات الوظيفة لاكتساب معرفة قيمة حول المهن المختلفة. استكشف منصتنا، واكتشف مسارات وظيفية جديدة، واتخذ قرارات مستنيرة بشأن رحلتك المهنية.<br><br>
        </p>
      </div>

      <pre v-else></pre>
    </div>
  </div>
</template>

<script>
import WordsLang from "../mixins/WordsLang";
export default {
  name: 'about-us',
  mixins:[WordsLang],
  data(){
    return {
      lang:'ar',
    }
  },
  mounted() {
    if(localStorage.hasOwnProperty('lang') && localStorage.lang == 'en'){
      this.lang = 'en';
    }
  }
}
</script>

<style lang="scss">
@import "~style/variables";

</style>
