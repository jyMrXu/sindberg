document.addEventListener('DOMContentLoaded', function() {
    // 获取江南水泥厂词云图容器和图片元素
    const wordcloudToggle = document.getElementById('wordcloud-toggle');
    const wordcloudImage1 = document.getElementById('wordcloud-image-1');
    const wordcloudImage2 = document.getElementById('wordcloud-image-2');
    
    // 添加点击事件监听器
    if (wordcloudToggle) {
        wordcloudToggle.addEventListener('click', function() {
            // 切换图片的可见性
            if (wordcloudImage1.classList.contains('visible')) {
                wordcloudImage1.classList.remove('visible');
                wordcloudImage1.classList.add('hidden');
                wordcloudImage2.classList.remove('hidden');
                wordcloudImage2.classList.add('visible');
            } else {
                wordcloudImage2.classList.remove('visible');
                wordcloudImage2.classList.add('hidden');
                wordcloudImage1.classList.remove('hidden');
                wordcloudImage1.classList.add('visible');
            }
        });
    }
    
    // 获取医疗救助词云图容器和图片元素
    const medicalWordcloudToggle = document.getElementById('wordcloud-toggle-medical');
    const medicalWordcloudImage1 = document.getElementById('wordcloud-image-medical-1');
    const medicalWordcloudImage2 = document.getElementById('wordcloud-image-medical-2');
    
    // 添加点击事件监听器
    if (medicalWordcloudToggle) {
        medicalWordcloudToggle.addEventListener('click', function() {
            // 切换图片的可见性
            if (medicalWordcloudImage1.classList.contains('visible')) {
                medicalWordcloudImage1.classList.remove('visible');
                medicalWordcloudImage1.classList.add('hidden');
                medicalWordcloudImage2.classList.remove('hidden');
                medicalWordcloudImage2.classList.add('visible');
            } else {
                medicalWordcloudImage2.classList.remove('visible');
                medicalWordcloudImage2.classList.add('hidden');
                medicalWordcloudImage1.classList.remove('hidden');
                medicalWordcloudImage1.classList.add('visible');
            }
        });
    }
});