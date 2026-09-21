        // ===== EmailJS Setup =====
        emailjs.init('SEU_PUBLIC_KEY'); // Substitua com sua chave pública do EmailJS

        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = document.getElementById('submit-btn');
            const formStatus = document.getElementById('form-status');
            
            // Desabilitar botão
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';

            // Dados do formulário
            const templateParams = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Enviar email
            emailjs.send('service_XXXX', 'template_XXXX', templateParams)
                .then(function(response) {
                    formStatus.textContent = 'Mensagem enviada com sucesso! Vou responder em breve.';
                    formStatus.classList.remove('error');
                    formStatus.classList.add('success');
                    
                    // Limpar formulário
                    document.getElementById('contact-form').reset();
                    
                    // Reabilitar botão
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Enviar Mensagem';

                    // Limpar mensagem após 5 segundos
                    setTimeout(() => {
                        formStatus.classList.remove('success');
                    }, 5000);
                }, function(error) {
                    formStatus.textContent = 'Erro ao enviar mensagem. Tente novamente.';
                    formStatus.classList.remove('success');
                    formStatus.classList.add('error');
                    
                    // Reabilitar botão
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Enviar Mensagem';

                    console.error('Erro:', error);
                });
        });

        function navigateToCase(caseId) {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            const page = document.getElementById(caseId + '-page');
            if (page) {
                page.classList.add('active');
                window.scrollTo(0, 0);
                window.history.pushState({ caseId: caseId }, '', '#' + caseId);
            }
        }

        window.addEventListener('popstate', function(event) {
            if (event.state && event.state.caseId) {
                navigateToCase(event.state.caseId);
            } else {
                navigateToCase('home');
            }
        });

        window.addEventListener('load', function() {
            const hash = window.location.hash.substring(1);
            if (hash) {
                navigateToCase(hash);
            }
        });

        function openImageModal(imageSrc, altText) {
            const modal = document.getElementById('image-modal');
            const img = document.getElementById('modal-image');
            img.src = imageSrc;
            img.alt = altText;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeImageModal(event) {
            if (event && event.target.id !== 'image-modal') {
                return;
            }
            
            const modal = document.getElementById('image-modal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeImageModal();
            }
        });

        // ===== ACCESSIBILITY FUNCTIONS =====
        let currentFontSize = 'normal';
        let currentTheme = 'light'; // PADRÃO = CLARO
        let contrastEnabled = false;

        // Detectar preferência do sistema na primeira vez
        function initThemeFromSystem() {
            if (!localStorage.getItem('portfolio-prefs')) {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (prefersDark) {
                    document.body.classList.add('dark-mode');
                    currentTheme = 'dark';
                    const darkBtn = document.getElementById('theme-dark-btn');
                    const lightBtn = document.getElementById('theme-light-btn');
                    if (darkBtn) darkBtn.classList.add('active');
                    if (lightBtn) lightBtn.classList.remove('active');
                }
            }
        }

        function setFontSize(size) {
            const body = document.body;
            body.classList.remove('font-small', 'font-large');
            
            if (size === 'small') {
                body.classList.add('font-small');
                document.getElementById('font-display').textContent = '85%';
                currentFontSize = 'small';
            } else if (size === 'large') {
                body.classList.add('font-large');
                document.getElementById('font-display').textContent = '120%';
                currentFontSize = 'large';
            } else {
                document.getElementById('font-display').textContent = '100%';
                currentFontSize = 'normal';
            }
            
            savePreferences();
        }

        function toggleContrast() {
            const body = document.body;
            const toggle = document.getElementById('contrast-toggle');
            
            contrastEnabled = toggle.checked;
            if (contrastEnabled) {
                body.classList.add('high-contrast');
            } else {
                body.classList.remove('high-contrast');
            }
            
            savePreferences();
        }

        function setTheme(theme) {
            const body = document.body;
            const darkBtn = document.getElementById('theme-dark-btn');
            const lightBtn = document.getElementById('theme-light-btn');
            
            if (theme === 'light') {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                if (darkBtn) darkBtn.classList.remove('active');
                if (lightBtn) lightBtn.classList.add('active');
                currentTheme = 'light';
            } else {
                body.classList.add('dark-mode');
                body.classList.remove('light-mode');
                if (darkBtn) darkBtn.classList.add('active');
                if (lightBtn) lightBtn.classList.remove('active');
                currentTheme = 'dark';
            }
            
            savePreferences();
        }

        function savePreferences() {
            const prefs = {
                fontSize: currentFontSize,
                theme: currentTheme,
                contrast: contrastEnabled
            };
            localStorage.setItem('portfolio-prefs', JSON.stringify(prefs));
        }

        function loadPreferences() {
            const saved = localStorage.getItem('portfolio-prefs');
            if (saved) {
                const prefs = JSON.parse(saved);
                
                if (prefs.fontSize) setFontSize(prefs.fontSize);
                if (prefs.theme) setTheme(prefs.theme);
                if (prefs.contrast) {
                    document.getElementById('contrast-toggle').checked = true;
                    toggleContrast();
                }
            } else {
                // Primeira vez: respeitar preferência do sistema
                initThemeFromSystem();
            }
        }

        document.addEventListener('DOMContentLoaded', loadPreferences);
